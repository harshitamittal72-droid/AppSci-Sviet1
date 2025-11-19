# gallery/models.py
from django.db import models
from django.utils import timezone
from django.utils.text import slugify

def gallery_upload_to(instance, filename):
    return f'gallery/{timezone.now():%Y/%m/%d}/{filename}'

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=120, unique=True, blank=True)

    class Meta:
        ordering = ['name']
        verbose_name_plural = "categories"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            # create slug automatically if not provided
            self.slug = slugify(self.name)[:120]
            # ensure uniqueness by appending number if needed
            orig = self.slug
            i = 1
            while Category.objects.filter(slug=self.slug).exclude(pk=self.pk).exists():
                self.slug = f'{orig}-{i}'
                i += 1
        super().save(*args, **kwargs)


class GalleryImage(models.Model):
    image = models.ImageField(upload_to=gallery_upload_to)
    alt_text = models.CharField(max_length=255, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name='images')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-uploaded_at']

    def __str__(self):
        return self.alt_text or f'Image {self.pk}'
