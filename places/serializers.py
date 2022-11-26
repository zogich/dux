from rest_framework import serializers
from models import PlaceTypes


class PlaceTypeSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def create(self, validated_data):
        type = PlaceTypes.objects.create(**validated_data)
        type.save()
        return type

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('type', instance.description)
        instance.save()
        return instance

    class Meta:
        model = PlaceTypes
        fields = ('id', 'name', 'description')