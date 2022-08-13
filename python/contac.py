import string


def add(word, dictio):
    if len(word)==1:
        if word[0] not in dictio.keys():
            dictio[word[0]]=[1, {}]
        else:
            dictio[word[0]][0]+=1
    else:
        if word[0] not in dictio.keys():
            dictio[word[0]]=[1, {}]
        else:
            dictio[word[0]][0]+=1
        add(word[1:], dictio[word[0]][1])

def find(partial, dictio):
    if partial[0] not in dictio.keys():
        return(0)
    elif len(partial)==1:
        return(dictio[partial[0]][0])
    else:
        return(find(partial[1:], dictio[partial[0]][1]))

N=int(input())
dico={}
for i in range(N):
    command=input().split()
    if command[0]=='add':
        add(command[1], dico)
    elif command[0]=='find':
        print(find(command[1], dico))