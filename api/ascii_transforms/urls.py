from django.urls import path

from . import views

urlpatterns = [
    path("api/ascii_transforms", views.ASCIITransformList.as_view()),
    path("api/request_ai_image", views.request_ai_image, name="request_ai_image"),
]
