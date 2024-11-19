Sites de exercícios

Python Brasil:
https://wiki.python.org.br/ListaDeExercicios

CodeWars:
https://www.codewars.com/



===================================


EX Aula 03

aluno = {}

nome = input("Digite seu nome: ")
aluno["nome"] = nome

notas = []
for num in range(1, 5):
    nota = float(input(f"Digite a {num}º nota: "))
    notas.append(nota)

aluno["notas"] = notas
aluno["maior_nota"] = max(aluno["notas"])
aluno["menor_nota"] = min(aluno["notas"])

media = sum(aluno["notas"]) / len(aluno["notas"])
aluno["media"] = media

if aluno["media"] >= 6 and aluno["media"] <= 10:
    aluno["situacao"] = "Aprovado"
elif aluno["media"] < 6 and aluno["media"] >= 0:
    aluno["situacao"] = "Reprovado"
else:
    aluno["situacao"] = "Burlou a prova"

print(aluno)

========================================

Funções

# def saudar(nome, idade):
#     print(f"Seja bem vindo {nome}! ")
#     print("Welcome!")
#     print("Bien venue!") 
#     print(f"Você tem {idade} anos.")



# saudar("Not", 27)

# frase = input("Digite uma frase")

# saudar("Pedro")

# alguma_coisa = input("Alguma outra coisa")

# saudar("Felipe")

def somar(n1: int, n2=0, n3=10) -> int:
    soma = n1 + n2 + n3
    return soma

resultado = somar()
print(resultado)

========================================

EX01

def calcular_imc(peso, altura):
    imc = peso / (altura * altura)
    print(imc)

seu_peso = float(input("Digite seu peso: "))
sua_altura = float(input("Digite sua altura: "))


calcular_imc(seu_peso, sua_altura)

========================================

EX02

def calcular_imc(peso, altura):
    imc = peso / (altura * altura)
    return imc

seu_peso = float(input("Digite seu peso: "))
sua_altura = float(input("Digite sua altura: "))


resultado = calcular_imc(seu_peso, sua_altura)
print(resultado) 