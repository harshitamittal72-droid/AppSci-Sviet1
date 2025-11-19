from django.shortcuts import render, get_object_or_404
from upload.models import Blog
from gallery.models import Category,GalleryImage

def blog_list(request):
    blogs = Blog.objects.all().order_by("-created_at")
    return render(request, 'serve/blog_list.html', {'blogs':blogs})

def blog_detail(request,blog_id):
    blog = get_object_or_404(Blog, id=blog_id)
    return render(request, 'serve/blog_detail.html', {'blog':blog})

def faculty(request):
    return render(request, "faculty.html")
def branch(request):
    return render(request, "branch.html")
def infrastructure(request):
    return render(request,"infrastrucre.html")
def committee(request):
    return render(request, "committee.html")
def workshop(request):
    return render(request,"workshop.html")
def aboutus(request):
    return render(request,"aboutus.html")
def classroom(request):
    return render(request,"classroom.html")

def gallery_page(request):
    images = GalleryImage.objects.all()
    return render(request,'serve/gallery.html',{'images': images})

def gallery_index(request):
    # show categories with counts
    categories = Category.objects.all().prefetch_related('images')
    # optional: include an "uncategorized" count
    uncategorized_count = GalleryImage.objects.filter(category__isnull=True).count()
    return render(request, 'serve/gallery_index.html', {
        'categories': categories,
        'uncategorized_count': uncategorized_count,
    })

def gallery_category(request, category_slug=None):
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        images = category.images.all()  # uses related_name
        title = category.name
    else:
        # show uncategorized if no slug provided
        category = None
        images = GalleryImage.objects.filter(category__isnull=True)
        title = "Uncategorized"
    return render(request, 'serve/gallery_category.html', {
        'category': category,
        'images': images,
        'title': title,
    })
