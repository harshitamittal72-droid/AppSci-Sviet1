# gallery/forms.py
from django import forms
from .models import GalleryImage

class GalleryUploadForm(forms.ModelForm):
    class Meta:
        model = GalleryImage
        fields = ('image', 'alt_text')
