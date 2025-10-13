from django.db import models

class UploadedFile(models.Model):
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to="uploads/")

    def __str__(self):
        return self.title

class Blog(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='blog_images')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title