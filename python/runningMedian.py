#!/bin/python3

import os
import sys
import bisect

def runningMedian():
    a_count = int(input())
    a,p,q,l = [],[],[],0
    for _ in range(a_count):
        a_item = int(input())
        a.append(a_item)
        
    for i in range(len(a)):
        l=l+1
        bisect.insort(p,a[i])
        if(l%2==1):
            q.append(p[l//2])
        else:
            q.append((p[l//2]+p[l//2-1])/2)
    return q


result = runningMedian()
print(result) 