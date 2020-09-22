#!/bin/python3

import math
import os
import random
import re
import sys


s = input().strip()
n = int(input().strip())
L = len(s)
##conta a quatidades de "a" em s
##encontra o numeor de repetições da string e aredonda pra baixo
##conta a quantidade de "a" restante que nao formam uma string completa
print(s.count('a') * (n//L) + s[:n % L].count('a'))