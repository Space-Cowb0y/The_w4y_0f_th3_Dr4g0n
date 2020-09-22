#!/bin/python3

import math
import os
import random
import re
import sys


t = int(input().strip())

for i in range(t):
    line = input().strip()
    stack = []
    for i in line:
        if i in '})]':
            try:
                top = stack.pop()
                if ((top == '{' and i != '}') or 
                    (top == '(' and i != ')') or 
                    (top == '[' and i != ']')):
                    print('NO')
                    break
            except:
                print('NO')
                break
        else:
            stack.append(i)
    else:
        if stack:
            print('NO')
        else:
            print('YES')
                