EX01
Você irá pedir ao usuário o que ele trouxe pra festa. Após isso, vai guardar esse texto em um variável. Por fim, você deve verificar se esse texto é pizza ou refri, se for verdadeiro, imprima "Você pode entrar", senão, imprima "Você não pode entrar".

item = input("Digite o que você trouxe: ").lower()

if item == "pizza" or item == "refri":
    print("Você pode entrar!")
else:
    print("Você não pode entrar!")

EX 02 
soma = 0
for numero in range(1, 101):
    soma = soma + numero
print(soma)