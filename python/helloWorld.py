# arquivo de aprendizagem 

# ========================================
# imprimindo algo

print ("hello World")

# ========================================
# variaveis

## podem ser declaradas como no java script
## ou seja sem a didentificacao de tipo
myint = 1
myfloat = 1.10
mystring = "hi" 

## podemos fazer operacoes direto com as declaracoes
print(myint+myint) # soma  1+1
print(myint+myfloat) # soma 1 + 1.1

## nao funciona se fizer com string print(myint + mystring)
## deve se fazer da seguinte maneira

print("%s:" % mystring + " " + "%d" % myint)

# ========================================
# listas 

## cria lista
mylist = []
## adicona valor na ultima posição
mylist.append(1)
## imprimi a primeira posção da lista
print(mylist[0])

# ========================================
# operaçoes basicas

number = 1 + 2 * 3 / 4.0 # segue a ordem de operações

## resto de divisáo

remainder = 11 % 2 # 3

## elevado

powered = 2 ** 2 # 2^2

## operadores com strings
palavra = "hello" + " " + "world"  

repetePalavra = (palavra * 10)

## unir listas

listaUm = [1,2,3]
listaDois = [4,5,6]
listagrande = listaUm+listaDois

## repetir listas

print(listaUm * 3) # 1,2,3,1,2,3,1,2,3
print([1,2,3] * 3) # 1,2,3,1,2,3,1,2,3

## exemple code
'''
x = object()
y = object()

x_list = [x] *10
y_list = [y] *10
big_list = x_list + y_list

print("x_list contains %d objects" % len(x_list))
print("y_list contains %d objects" % len(y_list))
print("big_list contains %d objects" % len(big_list))

## testing code
if x_list.count(x) == 10 and y_list.count(y) == 10:
    print("Almost there...")
if big_list.count(x) == 10 and big_list.count(y) == 10:
    print("Great!")
'''

# ========================================
# Formatando strings

name = "john"
print("hello, %s!" % name) ## imprime "hello, John!"

age = 23
print("%s is %d yo" % (name, age)) ## "john is 25 yo"

mylist = [1,2,3]
print("my list is %s" % mylist) ## "my list is [1,2,3]"

'''
%s - String (or any object with a string representation, like numbers)

%d - Integers

%f - Floating point numbers

%.<number of digits>f - Floating point numbers with a fixed amount of digits to the right of the dot.

%x/%X - Integers in hex representation (lowercase/uppercase)
'''

## exemplo
data = ("John", "Doe", 53.44)
format_string = "Hello %s %s. Your current balance is $%s."

print(format_string % data)


# ========================================
# trabalhando com strings

umaString = "abcdefghijklmnopqrstuva"

## acessaando uma string/array
print(umaString.index("a")) ## 1

## conta a quantidade de ocorrencias de uu index na string/array
print(umaString.count("a")) ## 2

## imprimi uma parte da string/array
print(umaString[3:7]) ## "defg"

## a foram geral é [start:stop:step]
print(umaString[3:7:2]) ## "df"
print(umaString[3:7:2]) ## "dg"

## string reversa
print(umaString[::-1])

## upper and lower case
print(umaString.upper())
print(umaString.lower())

## verifica se começa ou termina com algo
print(umaString.startswith("b")) ## false
print(umaString.endswith("a")) ## true

## separar uma string
separaString = umaString.split("l") ## ['abcdefghijk', 'mnopqrstuva'] o "l" some

'''
s = "Hey there! what should this string be?"
# Length should be 20
print("Length of s = %d" % len(s))

# First occurrence of "a" should be at index 8
print("The first occurrence of the letter a = %d" % s.index("a"))

# Number of a's should be 2
print("a occurs %d times" % s.count("a"))

# Slicing the string into bits
print("The first five characters are '%s'" % s[:5]) # Start to 5
print("The next five characters are '%s'" % s[5:10]) # 5 to 10
print("The thirteenth character is '%s'" % s[12]) # Just number 12
print("The characters with odd index are '%s'" %s[1::2]) #(0-based indexing)
print("The last five characters are '%s'" % s[-5:]) # 5th-from-last to end

# Convert everything to uppercase
print("String in uppercase: %s" % s.upper())

# Convert everything to lowercase
print("String in lowercase: %s" % s.lower())

# Check how a string starts
if s.startswith("Str"):
    print("String starts with 'Str'. Good!")

# Check how a string ends
if s.endswith("ome!"):
    print("String ends with 'ome!'. Good!")

# Split the string into three separate strings,
# each containing only a word
print("Split the words of the string: %s" % s.split(" "))
'''

# ========================================
# Condiçoes









