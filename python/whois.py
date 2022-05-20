  

# -*- coding: utf-8 -*-
#
#  
#  Copyright 2018 Bruno Carvalho <bruno@Mitz>


import whois

name = raw_input("Enter a domain: ")
w = whois.whois(name)

print(w)
