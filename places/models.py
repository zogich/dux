from django.db import models
from django.contrib import admin


class PlaceTypes(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


class Place(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    place_type = models.ForeignKey(PlaceTypes, on_delete=models.CASCADE)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return self.name


class Image(models.Model):
    place = models.ForeignKey(Place, on_delete=models.CASCADE)
    image_url = models.TextField()


admin.site.register(PlaceTypes)
admin.site.register(Place)
admin.site.register(Image)