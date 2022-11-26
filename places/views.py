from django.shortcuts import render
from rest_framework import viewsets
from places.serializers import PlaceTypeSerializer, PlaceSerializer
from places.models import PlaceTypes, Place


class PlaceTypesViewSet(viewsets.ModelViewSet):
    serializer_class = PlaceTypeSerializer
    queryset = PlaceTypes.objects.all()


class PlaceViewSet(viewsets.ModelViewSet):
    serializer_class = PlaceSerializer
    queryset = Place.objects.all()