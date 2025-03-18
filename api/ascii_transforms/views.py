from rest_framework.generics import ListAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ASCIITransform
from .serializers import ASCIITransformSerializer

class ASCIITransformList(ListAPIView):
    queryset = ASCIITransform.objects.all()
    serializer_class = ASCIITransformSerializer

@api_view(["POST"])
def get_ascii_transform(request):
    matrix = [["a", "b", "%", "&"], ["^", "$", "3", "$"]]
    t = ASCIITransform.objects.create(title="test", character_matrix=matrix)
    for i in range(len(t.character_matrix)):
        print(t.character_matrix[i])
    return Response({})
