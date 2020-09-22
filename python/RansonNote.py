#!/bin/python3

## Escrever uma nota de ameça usando palavras de uma revista
## a nota deve usar palavras inteiras contidas na revista ou seja a palavra deve estar contida na revista

## dois inteiros, uma string da revista e uma string para a nota
## case sensitive


import math
import os
import random
import re
import sys
from collections import Counter 

def checkMagazine(magazine, note):
    a = Counter(magazine)
    b = Counter(note)
    return "Yes" if ( a & b ) == b else "No"

     
m,n = map(int,input().split())
magazine = input().split()
note = input().split()
print(checkMagazine(magazine, note))

    
