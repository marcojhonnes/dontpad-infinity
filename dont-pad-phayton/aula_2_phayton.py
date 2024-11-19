Whatsapp Turma

https://chat.whatsapp.com/HiLFEPZXmy4Fff38ghmdRYc

----------------------------------------------------
lista

# Cria uma lista vazia
lista = []

# Cria uma lista com 5 valores
lista_de_compras = ["arroz", "açucar", "feijão", "óleo", "açucar"]

# Pega o valor da posição na lista
# print(lista_de_compras[1])

# Altera o valor da posição na lista
# lista_de_compras[1] = "batata"

# Pega um pedaço da lista da posição 1 a 4, pulando de 2 em 2.
# print(lista_de_compras[1:4:2])

# Adiciona o valor alface a lista
# lista_de_compras.append("alface")

# Insere o valor alface na posição 0 da lista, movendo todo o restando.
# lista_de_compras.insert(0, "alface")

# Remove e nos traz o último valor da lista
# lista_de_compras.pop()

# Remove e nos traz o valor da posição 2 da lista
# valor_removido = lista_de_compras.pop(2)
# print(valor_removido)

# Ordena a lista
# lista_de_compras.sort()

# Ordena a lista ao contrário
# lista_de_compras.sort(reverse=True)

# Inverte a lista
# lista_de_compras.reverse()

# Nos traz a posição da primeira ocorrência daquele valor na lista
# indice = lista_de_compras.index("açucar")
# print(indice)

# Conta quantas vezes aquele valor aparece na lista
# print(lista_de_compras.count("açucar"))

# Remove o item da lista
# lista_de_compras.remove("açucar")

# Traz o tamanho da lista
# print(len(lista_de_compras))

# Traz a soma de todos os valores da lista
# print(sum(lista_de_compras))

# Traz o maior valor da lista
# print(max(lista_de_compras))

# Traz o menor valor da lista
# print(min(lista_de_compras))


# Cria uma lista a partir de uma coleção de dados
# lista = list("abcde")
# print(lista)

print(lista_de_compras)

--------------------------------------------------------------------------

tupla

# Criamos uma tupla com 4 valores
tupla_carros = ("Gol", "Palio", "Uno", "Fusca")

# Acessamos o valor da posição 1 da tupla
# print(tupla_carros[1])

# Tuplas são imutáveis, causando um erro ao tentar modifica-la
# tupla_carros[1] = "HB20"

# Traz um pedaço da tupla
# print(tupla_carros[1:4])

# Cria uma lista a partir da tupla
# lista_carros = list(tupla_carros)

# print(lista_carros)

# Conta quantas vezes o valor aparece na tupla
# tupla_carros.count("HB20")

# Encontra a posição da primeira ocorrência daquele valor na tupla
# tupla_carros.index("HB20")

# Percorre a lista ou tupla, guardando o valor atual na variavel carro
# for carro in tupla_carros:
#     print(carro)

# Pega os valores da tupla ou lista por posição
# O item da posição 0 entra em carro1
# O item da posição 1 entra em carro2
# Todo o restante dos itens entra em resto (Fazemos isso atravez do *)
(carro1, carro2, *resto) = tupla_carros

print(resto)


----------------------------------------------------------------------
EX01

lista_de_nomes = []

# nome1 = input("Digite o primeiro nome: ")
# nome2 = input("Digite o segundo nome: ")
# nome3 = input("Digite o terceiro nome: ")
# nome4 = input("Digite o quarto nome: ")

# lista_de_nomes.append(nome1)
# lista_de_nomes.append(nome2)
# lista_de_nomes.append(nome3)
# lista_de_nomes.append(nome4)

for numero in range(4):
    nome = input("Digite um nome: ")
    lista_de_nomes.append(nome)

print(lista_de_nomes)

----------------------------------------------------------------------
EX02

lista_numeros = [2, 5, 8, 11, 14]

for numero in lista_numeros:
    print(numero * numero)

----------------------------------------------------------------------

EX03

tupla_paises = ("Brasil", "Canadá", "Austrália", "Espanha", "Índia")

for pais in tupla_paises:
    qnt_caracteres = len(pais)
    print(f"{pais} | {qnt_caracteres} letras.")

----------------------------------------------------------------------

EX04

produtos = [("Maçã", 2.50), ("Banana", 1.75), ("Laranja", 3.00)]

soma = 0
for produto in produtos:
    soma += produto[1]
print(soma)
