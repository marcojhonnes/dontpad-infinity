Sejam Bem Vindos a Aula 13 de Javascript


-----------------------------------------------------------------------
index.html


<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gerenciamento de Clientes</title>

    <!-- Estilos CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./public/css/style.css" />
  </head>
  <body>
    <header class="bg-dark">
      <div
        class="container p-4 d-flex justify-content-between align-content-center"
      >
        <h1 class="text-white">Meus Clientes</h1>
        <ion-icon name="person"></ion-icon>
      </div>
    </header>

    <main>
      <div class="container p-4">
        <div class="d-flex justify-content-between align-items-center">
          <button
            data-bs-toggle="modal"
            data-bs-target="#modal-cliente"
            class="btn btn-primary btn-lg"
          >
            Adicionar Cliente
            <ion-icon name="create"></ion-icon>
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="modal-cliente"
            tabindex="-1"
            aria-labelledby="titulo-modal-cliente"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <form class="modal-content" id="form-cliente" autocomplete="off">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="titulo-modal-cliente">
                    Cadastrar novo cliente
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="cliente" class="form-label"> Cliente </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cliente"
                      placeholder="Guilherme"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label"> Email </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="meuemail@email.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="endereco" class="form-label"> Endereço </label>
                    <input
                      type="text"
                      class="form-control"
                      id="endereco"
                      placeholder="Rua Tal, 000 | Cidade - Sigla"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button>
                  <button type="submit" class="btn btn-success">
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="input-group w-50">
            <input
              type="text"
              class="form-control"
              id="pesquisar"
              autocomplete="off"
            />
            <button class="input-group-text btn btn-primary">
              <ion-icon name="search"></ion-icon>
            </button>
          </div>
        </div>
        <hr />
        <table id="dados-cliente" class="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Marco Aurélio</td>
              <td>marco@email.com</td>
              <td>Pampulha, Belo Horizonte - MG</td>
              <td>
                <button class="btn btn-primary">
                  <ion-icon name="pencil"></ion-icon>
                </button>
                <button class="btn btn-danger">
                  <ion-icon name="trash"></ion-icon>
                </button>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Tainá</td>
              <td>tainaprogramadora@outlook.com</td>
              <td>Padre Eustaquio, Belo Horizonte - MG</td>
              <td>
                <button class="btn btn-primary">
                  <ion-icon name="pencil"></ion-icon>
                </button>
                <button class="btn btn-danger">
                  <ion-icon name="trash"></ion-icon>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>

    <!-- Scripts -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
  </body>
</html>



------------------------------------------------------------------------------------------
style.css


ion-icon {
    font-size: 24px;
}

header ion-icon {
    color: white;
    font-size: 40px;
}

#dados-cliente ion-icon {
    font-size: 20px;
}

-------------------------------------------------------------------------------------------------
script.js


function criarIcone(nomeIcone) {
    let icone = document.createElement('ion-icon')
    icone.name = nomeIcone
    return icone
}

const clientesState = [
    {
        id: 1,
        nome: 'Marco Aurélio',
        email: 'marco@email.com',
        endereco: 'Pampulha, Belo Horizonte - MG'
    },
    {
        id: 2,
        nome: 'Tainá',
        email: 'ainaprogramadora@outlook.com',
        endereco: 'Padre Eustaquio, Belo Horizonte - MG'
    }
]

function listarClientes(clientes) {
    const tabelaClientes = document.getElementById('clientes')

    // Limpando Linhas da Tabela (Exceto Cabeçalho)
    let qtdClientes = tabelaClientes.rows.length - 1
    for (let index = qtdClientes; index > 0; index--) {
        tabelaClientes.deleteRow(index)
    }

    // Adicionando linhas na tabela segundo os clientes recebidos como parametro.
    let dadosClientes = tabelaClientes.querySelector('tbody')
    for (let cliente of clientes) {
        let linha = dadosClientes.insertRow()

        let clienteId = linha.insertCell()
        clienteId.textContent = `${cliente.id}.`

        let clienteNome = linha.insertCell()
        clienteNome.textContent = cliente.nome

        let clienteEmail = linha.insertCell()
        clienteEmail.textContent = cliente.email

        let clienteEndereco = linha.insertCell()
        clienteEndereco.textContent = cliente.endereco

        let clienteAcoes = linha.insertCell()
        
        let botaoEditar = document.createElement('button')
        botaoEditar.className = 'btn btn-primary'
        botaoEditar.appendChild(criarIcone('pencil'))

        let botaoExcluir = document.createElement('button')
        botaoExcluir.className = 'btn btn-danger'
        botaoExcluir.appendChild(criarIcone('trash'))

        clienteAcoes.appendChild(botaoEditar)
        clienteAcoes.appendChild(botaoExcluir)
    }
}

function handleListarClientes() {
    listarClientes(clientesState)
}

window.addEventListener("DOMContentLoaded", handleListarClientes)
