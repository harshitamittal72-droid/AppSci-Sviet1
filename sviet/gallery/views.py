# gallery/views.py
from django.contrib.auth.decorators import user_passes_test
from django.shortcuts import render, redirect
from .forms import GalleryUploadForm
from .models import GalleryImage

def staff_required(user):
    return user.is_active and user.is_staff

@user_passes_test(staff_required)
def upload_image(request):
    if request.method == 'POST':
        form = GalleryUploadForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('gallery_upload')  # or wherever you want
    else:
        form = GalleryUploadForm()
    return render(request, 'gallery/upload.html', {'form': form})


