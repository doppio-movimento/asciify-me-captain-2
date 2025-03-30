from json import loads
from os import getenv
from urllib.request import urlretrieve

import shortuuid
from django.conf import settings
from dotenv import load_dotenv
from openai import OpenAI
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from lib.ascii import Asciifier

from .models import ASCIITransform, ASCIITransformCell
from .serializers import ASCIITransformSerializer

load_dotenv()


class ASCIITransformList(ListAPIView):
    queryset = ASCIITransform.objects.all()
    serializer_class = ASCIITransformSerializer


@api_view(["POST"])
def request_ai_image(request):
    prompt = loads(request.body.decode("utf-8"))["promptText"]
    rows = loads(request.body.decode("utf-8"))["rows"]
    columns = loads(request.body.decode("utf-8"))["columns"]
    grayscale = loads(request.body.decode("utf-8"))["grayscale"]
    phrase = loads(request.body.decode("utf-8"))["phrase"]
    client = OpenAI(api_key=getenv("OPENAI_API_KEY"))
    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size="1024x1024",
        n=1,
    )
    image_url = f"./{settings.MEDIA_URL}/image_{shortuuid.uuid()}.png"
    urlretrieve(response.data[0].url, image_url)
    a = Asciifier(rows=rows, columns=columns, phrase=phrase, grayscale=grayscale)
    ascii_transform = a.asciify(image_url)
    return Response({"image_url": image_url, "matrix": ascii_transform})
