
# if 4 > 3:
#     print("Olá!")

# Peça ao usuário um número, então guarde esse valor em uma variável. Por fim, verifique se esse valor é maior que 5, se for, mostre em tela a mensagem: "O número é maior que 5"

# bananinha = float(input("Digite um número: "))

# if bananinha > 5:
#     print(f"O número {bananinha} é maior que 5")
# elif bananinha > 3:
#     print(f"O número {bananinha} é maior que 3 e menor que 5")
# else:
#     print("O número não é maior que 5")

# Você irá pedir ao usuário a idade dele, então guardar esse valor em uma variável. Então você irá verificar as seguintes condições:

#SE a idade for maior que 18, então imprima em tela "Você é maior de idade"
#SENÃO SE a idade for igual a 18, então imprima em tela "Você acabou de atingir a maioridade"
#SENÃO então imprima em tela "Você é menor de idade!"

# idade = int(input("Digite sua idade: "))

# if idade > 18 and idade < 150:
#     print("Você é maior de idade!")
# elif idade == 18:
#     print("Você acabou de atingir a maioridade!")
# elif idade >= 0 and idade < 18:
#     print("Você é menor de idade!")
# else:
#     print("Você digitou um valor inválido")

#  

# if n1 >= n2 and n1 > n3:
#     print(f"O {n1} é o maior")
 elif #n2 > n1 and n2 >= n3:
#     print(f"O {n2} é o maior")
# elif n3 >= n1 and n3 > n2:
#     print(f"O {n3} é o maior.")
# else:
#     print(f"{n1} é igual a {n2} e é igual a {n3}.")

# .upper() Maiúscula
# .lower() Minúscula
# .capitalize() Primeira letra maiúscula

nome = input("Digite seu nome: ").upper()

print(nome)

match nome:
    case 'NOT':
        print("Você é o professor")
    case 'HENRIQUE':
        print("Você é o monitor")
    case _:
        print("Você é o aluno")

# nivel = int(input("Digite seu nível de permissão: "))

# match nivel:
#    ) case 1:
#         print("Usuário")
#     case 2:
#         print("Monitor")
#     case 3:
#         print("Professor"