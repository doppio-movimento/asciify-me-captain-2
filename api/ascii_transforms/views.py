from json import loads
import random

from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from .models import ASCIITransform, ASCIITransformCell
from .serializers import ASCIITransformSerializer

GRAYSCALE = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI>:,\"^`'. "


class ASCIITransformList(ListAPIView):
    queryset = ASCIITransform.objects.all()
    serializer_class = ASCIITransformSerializer


@api_view(["POST"])
def get_ascii_transform(request):
    dimension = int(loads(request.body.decode("utf-8"))["dimension"])
    t = ASCIITransform.objects.create(title="test", dimension=dimension)
    for i in range(dimension):
        for j in range(dimension):
            char = GRAYSCALE[random.randint(0, len(GRAYSCALE)) - 1]
            ASCIITransformCell.objects.create(
                ascii_transform=t,
                row=i,
                column=j,
                character=char,
                red=random.randint(0, 255),
                green=random.randint(0, 255),
                blue=random.randint(0, 255),
            )
    print(t)
    return Response(ASCIITransformSerializer(t).data)
