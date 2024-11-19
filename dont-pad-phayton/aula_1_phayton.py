Contato

# Vou adicionar o link do grupo (fica mais fácil)
# Não precisa passar o número

https://chat.whatsapp.com/HiLFEPZXmy4Fff38ghmdRY

98216-1194 - Lia

-----------------------------------------------------------

Aula

resposta = "Cleber"

# NOT inverte a condição
print(not resposta != "Cleber")

IF

# Guarda o número 5 na variável numero
numero = 5

# Verifica se número é menor que 2
if numero < 2:
    print("Olá")
elif numero > 3:
    # Caso o if não tenha executado, verifica se número é maior que 3
    print("Alguma coisa aqui no meio")
elif numero == 7:
    # Caso os if e o elif não tenham sido executados, verifica se número é igual a 7
    print("A")
else:
    # Caso nenhum tenha sido executado, mostra "Você não é bem-vindo"
    print("Você não é bem-vindo!")

print("FIM")

-----------------------

EX 01

n1 = float(input("Digite o primeiro número: "))
n2 = float(input("Digite o segundo número: "))

if n1 > n2:
    print("O primeiro número é o maior!")
elif n2 > n1:
    print("O maior número é o segundo")
else:
    print("Os números são iguais")

-----------------------

EX 02

num = float(input("Digite um número: "))

if num >= 0:
    print(f"O número {num} é positivo!")
else:
    print(f"O número {num} é negativo!")

-----------------------

For

# Percorre a palavra "pamonha", guardando a letra atual na variável letra, então repete o código até que não tenha mais letras.
# for letra in "pamonha":
    # print(letra)

# print("Fim")

# Range vai nos trazer uma coleção de números (0, 1, 2, 3, 4) e depois o for vai percorrer essa coleção.
for numero in range(5):
    print(numero)

-----------------------

while

# numero = 0

# Repete o código enquanto número foi menor que 5
# while numero < 5:
#     print(f"Olá {numero}")
#     numero += 1

# print("FIM")

# Repete o código infinitamente
# while True:
#     resposta = input("Você quer continuar? ")

#     if resposta != "S":
           # Quebra o laço se a resposta for igual a  "S"
#         break

#     print("Passei")

# print("Fim")

for numero in range(5):
    if numero == 2:
	# Pula pro próximo loop se a resposta for igual a 2
        continue
    
    print(numero)

-----------------------

EX 04

numero = int(input("Digite um número positivo: "))

for num in range(numerow, -1, -1):
    print(num)