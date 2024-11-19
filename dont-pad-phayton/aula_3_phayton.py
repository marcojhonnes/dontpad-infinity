Whatsapp Turma

https://chat.whatsapp.com/HiLFEPZXmy4Fff38ghmdRYc

===========================================

List Comprehension

# lista = []

# for letra in "abcde":
#     lista.append(letra)

tupla_num = (2, 7, 9, 2, 5)

# lista = [letra for letra in "abcde"]
# lista_dobrada = [num * 2 for num in tupla_num]
lista_pares = [num for num in tupla_num if num % 2 == 0]

# print(lista)
# print(lista_dobrada)
print(lista_pares)

===========================================

EX 05 List

tupla_num = (3, 2, 1, 6, 7, 23, 3)

lista_quadrado = [num ** 2 for num in tupla_num]

print(lista_quadrado)

===========================================

EX 06 List

frase = "pneumoultramicroscopicosilicovulcaniconiotico"

lista_vogais = [caractere for caractere in frase if caractere.lower() in ("a", "e", "i", "o", "u")]

print(lista_vogais)

===========================================

Aula

===========================================

EX01

# pessoa = [362, "Not"]

# pessoa = {"idade": 362, "nome": "Not"}

# pessoa["nome"] = "Henrique"

# pessoa["email"] = "umemailai@gmail.com"

# print(pessoa)

conjunto_frutas = {"banana", "maçã", "uva", "uva"}

# conjunto_frutas.add("Melão")

# conjunto_frutas.remove("maçã")

# conjunto_frutas.discard("maçã")

# print(valor_removide)
# print(conjunto_frutas)