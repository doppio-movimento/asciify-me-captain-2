import json
from math import ceil
from os import listdir
from time import sleep

import numpy as np
from colorama import init

import lib.colors as colors


def cursor_off():
    print("\033[?25l", end="")


def move_cursor_to(point):
    print("\033[%d;%dH" % (point[0], point[1]), end="", flush=True)


def replace_color(p, old_color, new_color):
    return new_color + p.strip(old_color)


def replace_character(p, new_char):
    return p[:-1] + new_char


class Traverser:
    def __init__(self, columns=100, rows=100):
        self.n_rows = rows
        self.n_columns = columns 

    def reset_cursor(self):
        move_cursor_to((self.n_rows + 1, 0))
        print()

    def randomly_traverse(self, matrix, delay=0.0000000001):
        if len(matrix) >= self.n_rows and len(matrix[0]) >= self.n_columns:
            cursor_off()
            sample_space = np.arange(1, self.n_rows * self.n_columns + 1)
            while len(sample_space):
                sample = np.random.choice(sample_space)
                physical_row = ceil(sample / self.n_columns)
                physical_column = sample % self.n_columns or self.n_columns
                move_cursor_to((physical_row, physical_column))
                pixel = matrix[physical_row - 1][physical_column - 1]
                print(pixel, end="", flush=True)
                sample_space = np.delete(
                    sample_space, np.argwhere(sample_space == sample)
                )
                sleep(delay)


def type_line(string, delay=0.000002):
    for char in string:
        print(char, end="", flush=True)
        sleep(delay)


def type_matrix(matrix):
    for line in matrix:
        line += "\n"
        type_line(line)


def L_traverse(
    height, width, trans_color, final_color, trans_char, final_char, delay=0.000001
):
    for r in range(height - 1):
        for c in range(width):
            move_cursor_to((r, c))
            print(f"{trans_color}{trans_char}", end="")
            sleep(delay)
            move_cursor_to((r, c))
            print(f"{final_color}{final_char}", end="")


def gamma_traverse(height, width, cursor, cursor_color, content, delay=0.0001):
    for r in range(height - 1):
        direction = "left" if r % 2 == 0 else "right"
        for c in range(width) if direction == "left" else range(width - 1, -1, -1):
            if direction == "left":
                move_cursor_to((height - r, c))
            else:
                move_cursor_to((height - r, c - 1))
            if c == 1 or c == width - 1:
                print(f"{cursor_color}{cursor}", end="", flush=True)
            else:
                print(f"{cursor_color}{2 * cursor}", end="", flush=True)
            move_cursor_to((height - r, c))
            sleep(0.001)
            pixel = content[height - r - 1][c]
            print(pixel, end="", flush=True)
            sleep(delay)


def reverse_gamma_traverse(
    height, width, trans_color, final_color, trans_char, content, delay=0.00000001
):
    for r in range(height - 1):
        for c in range(width):
            move_cursor_to((height - r, width - c))
            print(f"{trans_color}{trans_char}", end="")
            sleep(delay)
            move_cursor_to((height - r, width - c))
            print(f"{content[height - r - 1][width - c - 1]}", end="")


def color_diagonal(slant):
    i = 0
    for j in range(195):
        move_cursor_to((195 - j, 1 + slant * i))
        print(colors.BRIGHT_RED + "X", end="")
        sleep(0.00001)
        i += 1


def print_grid(width, height, images, delay=0.0001):
    init(autoreset=True)
    cursor_off()
    print((height - 1) * "\n", end="")
    print("\033[%d;%dH" % (1, 1), end="")
    cursor = "\u2B25"
    flip_char = " "
    # L_traverse(height, width, colors.MAGENTA, colors.WHITE, flip_char, grid_char)
    # gamma_traverse(height, width, cursor, colors.MAGENTA, content_a)
    # L_traverse(height, width, colors.CYAN, colors.BLUE, flip_char, grid_char)
    # gamma_traverse(height, width, cursor, colors.MAGENTA, content_b)
    # L_traverse(height, width, colors.BRIGHT_RED, colors.RED, flip_char, grid_char)
    # gamma_traverse(height, width, cursor, colors.MAGENTA, content_c)
    for image in images:
        randomly_traverse(height, width, image)
    move_cursor_to((height, width))
