import json
from datetime import datetime
from math import ceil
from os import listdir, system
from random import randint
import re

import numpy as np
from PIL import Image

import lib.colors as colors
from lib.metrics import (chebyshev_distance, euclidean_distance,
                         manhattan_distance)

DISCRETE_COLORS = [
    {"name": colors.BLACK, "code": [0, 0, 0]},
    {"name": colors.BRIGHT_BLACK, "code": [40, 40, 40]},
    {"name": colors.RED, "code": [156, 2, 32]},
    {"name": colors.BRIGHT_RED, "code": [255, 0, 89]},
    {"name": colors.GREEN, "code": [4, 83, 0]},
    {"name": colors.BRIGHT_GREEN, "code": [33, 239, 0]},
    {"name": colors.YELLOW, "code": [152, 124, 1]},
    {"name": colors.BRIGHT_YELLOW, "code": [225, 226, 0]},
    {"name": colors.BLUE, "code": [39, 0, 161]},
    {"name": colors.BRIGHT_BLUE, "code": [0, 91, 255]},
    {"name": colors.MAGENTA, "code": [189, 0, 152]},
    {"name": colors.BRIGHT_MAGENTA, "code": [220, 0, 255]},
    {"name": colors.CYAN, "code": [0, 143, 210]},
    {"name": colors.BRIGHT_CYAN, "code": [0, 255, 232]},
    {"name": colors.WHITE, "code": [138, 138, 138]},
    {"name": colors.BRIGHT_WHITE, "code": [255, 255, 255]},
]

GSCALE = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI>:,\"^`'.."


class Asciifier:
    def __init__(self, columns=225, rows=100, grayscale=GSCALE):
        self.grayscale = grayscale
        self.n_columns = columns 
        self.n_rows = rows 
        self.scale = self.n_rows / self.n_columns

    def asciify(self, file_name):
        ascii_matrix = []
        rgb_image = Image.open(file_name)
        gs_image = rgb_image.convert("L")
        image_width, image_height = gs_image.size

        # Get dimensions of image tiling
        tile_width = image_width / self.n_columns
        tile_height = tile_width / self.scale  # square tiles

        n_tile_rows = ceil(image_height / tile_height)

        # Convert each tile to ascii character
        for r in range(n_tile_rows):
            tile_upper_bound = int(r * tile_height)
            tile_lower_bound = (
                int((r + 1) * tile_height) if r != n_tile_rows else image_height
            )
            ascii_matrix.append([])
            for c in range(self.n_columns):
                tile_left_bound = int(c * tile_width)
                tile_right_bound = (
                    int((c + 1) * tile_width)
                    if c != self.n_columns - 1
                    else image_width
                )
                tile_boundary = (
                    tile_left_bound,
                    tile_upper_bound,
                    tile_right_bound,
                    tile_lower_bound,
                )
                gs_tile = gs_image.crop(tile_boundary)
                rgb_tile = rgb_image.crop(tile_boundary)
                gscale_char = self.grayscale[
                    int(
                        (self.__average_luminance(gs_tile) * (len(self.grayscale) - 1))
                        / 255
                    )
                ]
                ascii_matrix[r].append({"character": gscale_char, "color": self.__average_color(rgb_tile)})
        return ascii_matrix

    def __average_luminance(self, gs_tile):
        tile_array = np.array(gs_tile)
        n_columns, n_rows = tile_array.shape
        return np.average(tile_array.reshape(n_columns * n_rows))

    def __average_color(self, rgb_tile):
        tile_array = np.array(rgb_tile)
        n_columns, n_rows, _ = tile_array.shape
        average_rgb = np.average(tile_array.reshape((n_columns * n_rows, 3)), axis=0)
        return average_rgb
