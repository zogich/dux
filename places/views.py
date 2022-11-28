from django.shortcuts import render
import django_filters.rest_framework
from rest_framework import viewsets
from places.serializers import PlaceTypeSerializer, PlaceSerializer
from places.models import PlaceTypes, Place


class PlaceTypesViewSet(viewsets.ModelViewSet):
    serializer_class = PlaceTypeSerializer
    queryset = PlaceTypes.objects.all()


class PlaceViewSet(viewsets.ModelViewSet):
    serializer_class = PlaceSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['place_type', ]
    queryset = Place.objects.all()

    def filter_queryset(self, queryset):
        return super().filter_queryset(queryset)