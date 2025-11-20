# gallery/admin.py
from django.contrib import admin
from .models import GalleryImage, Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug','external_link')
    prepopulated_fields = {"slug": ("name",)}  # helpful in admin UI
    search_fields = ('name',)

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'category', 'uploaded_at',)
    list_filter = ('category', 'uploaded_at',)
    search_fields = ('alt_text',)
    readonly_fields = ('uploaded_at',)
