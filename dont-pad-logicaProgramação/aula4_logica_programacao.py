Desafio



Problema :
Uma loja de doces pretende realizar uma promoção onde sorteará um brinde entre os clientes do dia .
O sorteio funcionará da seguinte forma:
• Ao registrar uma venda, o caixa da loja pergunta o nome, telefone e endereço do cliente e insere
essas informações em uma aplicação que ficará executando durante todo o expediente da loja (ou seja: em processo de repetição) .
• A aplicação guardará de alguma forma todos as ocorrências de clientes informados (cabe a você decidir como isso será armazenado) 
até que o caixa seja encerrado.
• Ao final do expediente, o caixa informa na aplicação um cliente chamado “fim ”, e a
aplicação sorteará um dos clientes atendidos ao longo do dia ,
• A aplicação informará na tela todos os dados do cliente sorteado e se encerrará .
A equipe deve apresentar:
• Um fluxograma contendo a sequência lógica de passos para a aplicação funcionar.
• A codificação em linguagem Python da solução do problema

--------------------------------------------------------------------

while True:
    resposta = input("Você quer continuar? ").upper()

    if resposta == "N":
        break

    print("Rodei")


print('Fim do programa')

for numero in range(3):
    if numero % 2 == 0:
        continue

    print(numero)

print("Fim do programa")


------------------


EX01

numero = 1

while numero <= 20:
    print(numero, end=" - ")
    numero += 1

EX02a

nota = float(input("Digite uma nota entre 0 e 10: "))
while nota < 0 or nota > 10:
    print("Digite uma nota válida! ")
    nota = float(input("Digite uma nota entre 0 e 10: "))
else:
    print("Terminei")

print("Fim do programa")

EX02b

while True:
    nota = float(input("Digite uma nota entre 0 e 10: "))

    if nota >= 0 and nota <= 10:
        break

    print("Digite uma nota válida! ")
    
print("Fim do programa")

EX03a



EX03b

while True:
    nome = input("Digite seu nome: ")
    senha = input("Digite sua senha: ")

    if nome != senha:
        print(f"Cadastro realizado com sucesso! Bem vindo {nome}")
        break

    print("O nome e senha precisam ser diferentes!")

print("Fim do programa!")