from . import views
from django.urls import path

urlpatterns = [
    path('blogs/',views.blog_list, name='blog_list'),
    path('blogs/<int:blog_id>/', views.blog_detail,name="blog_detail"),
]

