from django.contrib.postgres.fields import ArrayField
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

class ASCIIMatrixCell(models.Model):
    character = models.CharField(max_length=1)
    red = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(255)])
    green = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(255)]
    )
    blue = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(255)]
    )

    def __str__(self):
        return f"{self.character} [{self.red}, {self.green}, {self.blue}]"

class ASCIITransform(models.Model):
    title = models.CharField(max_length=100)
    character_matrix = ArrayField(ArrayField(ASCIIMatrixCell))

    def __str__(self):
        return f"{self.title}"
