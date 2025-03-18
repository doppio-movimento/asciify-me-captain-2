from django.contrib import admin
from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin
from .models import ASCIITransform

@admin.register(ASCIITransform)
class ASCIITransformModelAdmin(admin.ModelAdmin, DynamicArrayMixin):
    pass
