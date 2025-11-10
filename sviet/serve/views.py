from django.shortcuts import render, get_object_or_404
from upload.models import Blog

def blog_list(request):
    blogs = Blog.objects.all().order_by("-created_at")
    return render(request, 'serve/blog_list.html', {'blogs':blogs})

def blog_detail(request,blog_id):
    blog = get_object_or_404(Blog, id=blog_id)
    return render(request, 'serve/blog_detail.html', {'blog':blog})

