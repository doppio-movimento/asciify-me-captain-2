from rest_framework.generics import ListAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ASCIITransform
from .serializers import ASCIITransformSerializer
from json import loads

class ASCIITransformList(ListAPIView):
    queryset = ASCIITransform.objects.all()
    serializer_class = ASCIITransformSerializer

@api_view(["POST"])
def get_ascii_transform(request):
    dimension = loads(request.body.decode("utf-8"))
    matrix = [
            ["a", "b", "%", "&", "x"], 
            ["^", "$", "3", "$", "6"],
            ["*", "k", "2", "@", "{"],
            ["t", "#", "2", "@", "0"],
            ["*", "k", "b", "$", "7"],
    ]
    t = ASCIITransform.objects.create(title="test", character_matrix=matrix)
    return Response(ASCIITransformSerializer(t).data)
