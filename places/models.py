from django.db import models


class PlaceTypes(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


class Place(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    place_type = models.ForeignKey(PlaceTypes, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
