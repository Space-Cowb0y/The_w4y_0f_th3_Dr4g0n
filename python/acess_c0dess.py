def solution(l):
    c = [0] * len(l)
    count = 0
    for i in range(0,len(l)): 
        j=0
        for j in range(0, i):
            if(l[i] % l[j] == 0):
                c[i]=c[i]+1
                count += c[j]
            
                print("i: ", i)
                print("=====================")
                print("j: ", j)
                print("valr de l[i]: ", l[i])
                print("valr de l[j]: ", l[j])
                print("valor do resto: ", l[i] % l[j])
                print("valor de c depois da op:", c)	
                print("count:", count)
                print("=====================")
                      
    return count
print(solution([1,2,3,4,5,6])) 
    