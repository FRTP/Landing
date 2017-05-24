import os
from wsgiref.util import FileWrapper

from django.http import HttpResponse
from django.shortcuts import render

from core.forms import MyUploadForm, ConfigForm


def index(request):
    file_upload_form = MyUploadForm(request.POST, request.FILES)
    return render(request, "core/index.html", {'form': file_upload_form})


def handle_uploaded_file(f):
    filename = f.__str__()
    directory = "uploaded/"
    if not os.path.exists(directory):
        os.makedirs(directory)
    with open(directory + filename, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)


def render_main_page(request):
    config_form = ConfigForm()
    upload_form = MyUploadForm()
    if request.method == 'POST':
        handle_uploaded_file(request.FILES['file_'])
        return render(request, 'core/index.html',
                      {
                          'form': upload_form,
                          'uploaded': True,
                          'config_form': config_form,
                      })
    elif request.method == 'GET':
        config_form = ConfigForm(initial={
            'config_name': 'default_config_name',
            'train_start_date': '01-01-2017',
        })
        return render(request, 'core/index.html',
                      {
                          'form': upload_form,
                          'uploaded': False,
                          'config_form': config_form,
                      })


needed_report_name = 'random_algorithm_report100'


def run_algorithm(request):
    # define which algorithm was chosen and return needed
    algo_name = request.POST["algo_name"]
    config_name = request.POST["config_name"]

    ################# GETTING CONFIG PATH ######################
    # Getting path to config
    if config_name == "config1":
        config_path = "100days"
    elif config_name == "config2":
        config_path = "250days"
    else:
        assert False

    from loader import Loader
    ################# RUNNING ALGORITHM ON CONFIG ##############
    # Running needed algorithm using config_path
    if algo_name == "random_algorithm":
        # run random algorithm
        # generate random report
        global needed_report_name
        if config_path == "100days":
            Loader(config_filename='config100_random.cfg')
            needed_report_name = 'random_algorithm_report100.pdf'
        if config_path == "250days":
            Loader(config_filename='config250_random.cfg')
            needed_report_name = 'random_algorithm_report250.pdf'

    elif algo_name == "clever_algorithm":
        # run clever algorithm
        # generate clever report
        global needed_report_name
        if config_path == "100days":
            Loader(config_filename='config100_clever.cfg')
            needed_report_name = 'clever_algorithm_report100.pdf'
        if config_path == "250days":
            Loader(config_filename='config250_clever.cfg')
            needed_report_name = 'clever_algorithm_report250.pdf'
    else:
        assert False

    print('Run algorithm!')

    return HttpResponse('')


def download_file_button_click(request):
    global needed_report_name
    path = "Framework_src/pdf_reports/"
    our_report = open(path + needed_report_name, "r")
    response = HttpResponse(FileWrapper(our_report),
                            content_type="application/pdf")
    response["Content-Disposition"] = 'attachment;filename=' + \
                                      needed_report_name
    our_report.close()
    return response
