from math import sqrt


def manhattan_distance(v, w):
    d = 0
    for vi, wi in zip(v, w):
        d += abs(wi - vi)
    return d


def euclidean_distance(v, w):
    d = 0
    for vi, wi in zip(v, w):
        d += (wi - vi) ** 2
    return sqrt(d)


def chebyshev_distance(v, w):
    diffs = []
    for vi, wi in zip(v, w):
        diffs.append(abs(wi - vi))
    return max(diffs)
