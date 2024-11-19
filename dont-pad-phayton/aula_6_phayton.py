LINK WHATSAPP

https://chat.whatsapp.com/HiLFEPZXmy4Fff38ghmdRYc

##############################################

listas

lista_frutas = ["maçã", "morango", "abacate", "kiwi"]
# lista_frutas[1] = "banana"
# print(lista_frutas[1])

# lista_frutas.append("melancia")
# lista_frutas.pop()
# lista_frutas.pop(1)
# lista_frutas.insert(1, "maracuja")

# print(lista_frutas[:5:-1])

print(lista_frutas)

##############################################

import

import random

opcoes = ("pedra", "papel", "tesoura")

escolha = random.choice(opcoes)

print(escolha)

##############################################

dicionario

pessoa = {"nome": "Not", "idade": None, "endereco": "SION"}

endereco = input("Digite seu endereço: ")

pessoa["endereco"] = endereco

print(pessoa["endereco"])

##############################################
list comprehension

tupla_num = (3, 1, 8, 3, 6, 5, 0, 9)

nova_lista = [num * 2 for num in tupla_num if num % 2 == 0]

print(nova_lista)
