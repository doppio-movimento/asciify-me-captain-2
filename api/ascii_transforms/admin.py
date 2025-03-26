from django.contrib import admin

from .models import ASCIITransform, ASCIITransformCell


@admin.register(ASCIITransform)
class ASCIITransformAdmin(admin.ModelAdmin):
    readonly_fields = ("dimension",)


admin.site.register(ASCIITransformCell)
