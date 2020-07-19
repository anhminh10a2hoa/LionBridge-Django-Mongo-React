from django.db import models

# Create your models here.
class Backend(models.Model):
    name = models.CharField(max_length=20, blank=False)
    price = models.IntegerField()
    image = models.CharField(max_length=100, blank=False)
    brand = models.IntegerField()
    description = models.CharField(max_length=400, blank=False)