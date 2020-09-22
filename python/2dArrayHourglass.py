#!/bin/python3

import math
import os
import random
import re
import sys
##descobrir a maior soma no formato te ampulheta de uma matrix 6 x 6 

'''exemplo de input 
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
'''
array = [list(map(int, input().split())) for _ in range(6)]

## faz a soma na fomra de uma ampulheta
def hourglass(i, j):
    return sum(array[i+di][j+dj] for di, dj in ((0,0),(0,1),(0,2),(1,1),(2,0),(2,1),(2,2)))


## resultado esperado: 19
print(max(hourglass(i,j) for i in range(4) for j in range(4))) 