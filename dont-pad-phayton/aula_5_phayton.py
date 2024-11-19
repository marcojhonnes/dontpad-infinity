# Aula

# def soma(numero1, numero2, *args):
#     soma = 0

#     for valor in args:
#         soma += valor

#     return soma

# resultado = soma(3, 6, 1, 7, 1, 2, 3)
# print(resultado)

# def qualquer_coisa(num1, num2, **kwargs):
#     print(kwargs)

# qualquer_coisa(1, 2, nome="Not", endereco="Sion")

# def soma(num1, num2):
    # return num1 + num2

# soma_lambda = lambda num1, num2 : num1 + num2
# soma = soma_lambda(5, 7)
# print(soma)

# def par_impar(num):
#     if num % 2 == 0:
#         return "par"
#     else:
#         return "impar"

# par_impar = lambda num : "par" if num % 2 == 0 else "impar"


# resultado = par_impar(5)
# print(resultado)


###########################################

# EX01

# def inverter_palavra(palavra):
#     palavra_invertida = palavra[::-1]
#     return palavra_invertida

# palavra = input("Digite uma palavra: ")
# resultado = inverter_palavra(palavra)
# print(resultado)

###########################################

# EX02

# def maior_numero(num1, num2):
#     if num1 > num2:
#         return num1
#     else:
#         return num2

# numero1 = float(input("Digite um número: "))
# numero2 = float(input("Digite o segundo número: "))

# result = maior_numero(numero1, numero2)
# print(result)

###########################################

# concatena = lambda str1, str2 : str1 + str2 if len(str1) > 5 and len(str2) > 5 else "Erro"
# print(concatena("Função","Legall"))