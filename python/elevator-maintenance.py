

def solution(l):
    l.sort(key=lambda x:[int(i) for i in x.split('.')])
    return l

s=solution(["1.11", "2.0.0", "1.2", "2", "0.1", "1.2.1", "1.1.1", "2.0"])
print(s)
s=solution(["1.1.2", "1.0", "1.3.3", "1.0.12", "1.0.2"])
print(s)