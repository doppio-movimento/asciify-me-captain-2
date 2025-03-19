from rest_framework.serializers import ModelSerializer, SerializerMethodField

from .models import ASCIITransform, ASCIITransformCell


class ASCIITransformCellSerializer(ModelSerializer):
    class Meta:
        model = ASCIITransformCell
        exclude = (
            "id",
            "ascii_transform",
        )


class ASCIITransformSerializer(ModelSerializer):
    cells = SerializerMethodField()

    def get_cells(self, instance):
        return instance.get_matrix()

    class Meta:
        model = ASCIITransform
        fields = (
            "title",
            "cells",
        )
