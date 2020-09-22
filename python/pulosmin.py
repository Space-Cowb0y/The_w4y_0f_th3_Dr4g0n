#!/bin/python3
#https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
import math
import os
import random
import re
import sys

def pulos(n, ar):
    i, j = 0, 0
    while j + 2 < n:
        j += 1 + int(ar[j + 2] == 0)
        i += 1
    resp = i + int(j != n - 1)
    return resp


if __name__ == '__main__':
    n, ar = int(input()), [int(x) for x in input().split()]
    print(pulos(n, ar))