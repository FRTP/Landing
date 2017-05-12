from django import forms


from django import forms
# from core.models import Document


class MyUploadForm(forms.Form):
    description = forms.CharField()
    file_ = forms.FileField()

    file_.label = "Choose file"
    file_.label_suffix = ""


class ConfigForm(forms.Form):
    config_name = forms.CharField()

    train_start_date = forms.DateTimeField()
    train_end_date = forms.DateField()
    test_start_date = forms.DateField()
    test_end_date = forms.DateField()
