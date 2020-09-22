import math
import os
import random
import re
import sys

def countV():
    a,c=0,0
    s=list(input())
    for x in s:
        if x=='U': 
            a=a+1
            if a==0:
               c=c+1    
        elif x=='D':
            a=a-1 
    return c
 
print(countV())