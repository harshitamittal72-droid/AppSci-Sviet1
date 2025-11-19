from . import views
from django.urls import path
from .views import gallery_index, gallery_category, gallery_page

urlpatterns = [
    path('blogs/',views.blog_list, name='blog_list'),
    path('blogs/<int:blog_id>/', views.blog_detail,name="blog_detail"),
    path('gallery/', gallery_index, name='gallery_index'),
    # ... other serve urls ...

    path('gallery/uncategorized/', gallery_category, name='gallery_uncategorized'),
    path('gallery/<slug:category_slug>/', gallery_category, name='gallery_category'),
]