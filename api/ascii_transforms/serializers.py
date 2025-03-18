from rest_framework.serializers import ModelSerializer

from .models import ASCIITransform

class ASCIITransformSerializer(ModelSerializer):
    class Meta:
        model = ASCIITransform
        fields = ("title", "character_matrix",)
