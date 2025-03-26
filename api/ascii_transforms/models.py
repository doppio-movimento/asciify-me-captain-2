from django.contrib.postgres.fields import ArrayField
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class ASCIITransform(models.Model):
    title = models.CharField(max_length=100)
    dimension = models.IntegerField(validators=[MinValueValidator(0)])

    def get_matrix(self):
        matrix = []
        for i in range(self.dimension):
            row = []
            for j in range(self.dimension):
                cell = self.cells.get(row=i, column=j)
                row.append([cell.character, [cell.red, cell.green, cell.blue]])
            matrix.append(row)
        return matrix

    def __str__(self):
        return f"{self.title}"


class ASCIITransformCell(models.Model):
    ascii_transform = models.ForeignKey(
        ASCIITransform, on_delete=models.CASCADE, related_name="cells"
    )
    row = models.IntegerField(validators=[MinValueValidator(0)])
    column = models.IntegerField(validators=[MinValueValidator(0)])
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
