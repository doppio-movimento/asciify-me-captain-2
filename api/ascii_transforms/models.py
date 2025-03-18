from django.db import models
from django.contrib.postgres.fields import ArrayField

class ASCIITransform(models.Model):
    title = models.CharField(max_length=100)
    character_matrix = ArrayField(ArrayField(models.CharField(max_length=1)))

    def __str__(self):
        return f'{self.title}'
