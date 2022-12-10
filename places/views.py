from django.shortcuts import render
import django_filters.rest_framework
from rest_framework import viewsets
from places.serializers import PlaceTypeSerializer, PlaceSerializer, ImageSerializer
from places.models import PlaceTypes, Place, Image


def index(request):
    return render(request, 'index.html')


class PlaceTypesViewSet(viewsets.ModelViewSet):
    serializer_class = PlaceTypeSerializer
    queryset = PlaceTypes.objects.all()


class PlaceViewSet(viewsets.ModelViewSet):
    serializer_class = PlaceSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['place_type', 'id']
    queryset = Place.objects.all()

    def filter_queryset(self, queryset):
        return super().filter_queryset(queryset)


class ImageViewSet(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['place']
    queryset = Image.objects.all()

    def filter_queryset(self, queryset):
        return super().filter_queryset(queryset)