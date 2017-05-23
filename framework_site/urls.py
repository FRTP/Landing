from django.conf.urls import url
from core.views import render_main_page, run_algorithm, \
    download_file_button_click

urlpatterns = [
    url(r'^$', render_main_page, name="main_page"),
    url(r'^run_algorithm/', run_algorithm, name="run_algorithm"),
    url(r'^download_results/',
        download_file_button_click,
        name="download_results"),
]
