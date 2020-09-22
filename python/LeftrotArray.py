import math
import os
import random
import re
import sys


def rotLeft(a, k):
    alist = list(a)
    b = alist[k:]+alist[:k]
    return b


ar = [1,2,3,4,5]

d = 4

a = list(map(int, ar))
print("vetor original: ")
print(ar)
print("vetor rotacionado %d vezes: " % d )
print(rotLeft(a,d))