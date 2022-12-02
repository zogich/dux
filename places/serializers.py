from rest_framework import serializers
from places.models import PlaceTypes, Place, Image


class PlaceTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = PlaceTypes
        fields = ('id', 'name', 'description')


class PlaceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Place
        fields = ('id', 'name', 'description', 'place_type', 'latitude', 'longitude')


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = ('id', 'place', 'image_url')
