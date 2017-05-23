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


def download_file_button_click(request):
    # define which algorithm was chosen and return needed
    filename = "report1.pdf"
    path = "/home/avk/github/Landing/Framework_src/pdf_reports/"
    our_report = open(path+filename, "r")
    response = HttpResponse(FileWrapper(our_report),
                            content_type="application/pdf")
    response["Content-Disposition"] = "attachment;filename=resume.pdf"
    our_report.close()
    print("I'm here, mfk")
    return response


def run_algorithm(request):
    # here run algorithm and create pdfs with results
    print('Run algorithm!')
    return HttpResponse('')

