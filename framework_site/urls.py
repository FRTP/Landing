from django.conf.urls import url
from core.views import index, render_main_page

urlpatterns = [
    url(r'^$', render_main_page, name="main_page"),
]
