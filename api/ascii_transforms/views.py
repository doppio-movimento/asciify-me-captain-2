from json import loads
import random
from urllib.request import urlretrieve
from openai import OpenAI
from django.conf import settings
import shortuuid
from dotenv import load_dotenv
from os import getenv

from lib.ascii import Asciifier
from lib.text_animation import Traverser

from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from .models import ASCIITransform, ASCIITransformCell
from .serializers import ASCIITransformSerializer

load_dotenv()
GRAYSCALE = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI>:,\"^`'. "

class ASCIITransformList(ListAPIView):
    queryset = ASCIITransform.objects.all()
    serializer_class = ASCIITransformSerializer

@api_view(["POST"])
def request_ai_image(request):
    prompt = loads(request.body.decode("utf-8"))["promptText"]
    client = OpenAI(api_key=getenv("OPENAI_API_KEY"))
    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size="1024x1024",
        n=1,
    )
    image_url = f"./{settings.MEDIA_URL}/image_{shortuuid.uuid()}.png"
    urlretrieve(response.data[0].url, image_url)
    a = Asciifier()
    ascii_transform = a.asciify(image_url)
    return Response({"image_url": image_url, "matrix": ascii_transform})

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
