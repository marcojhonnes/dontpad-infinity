Sejam Bem Vindos a aula 18 do modulo de Javascript

Extensão:
Thunder Client

The Movie API:
https://developer.themoviedb.org/docs/getting-started

API Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTljOWU5ZmM2NjUzNDVjODAzMmY1NGRiN2Q1NzBjYyIsIm5iZiI6MTcyNjUyNTAwMC4wOTY0ODgsInN1YiI6IjY2ZThhZGFhYmI4MzYxYTFkNmE5ZGQ2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6wM_TZGOqXjWAWAPzS-YTLtyWt7OVRb44CGo1wNeS_4

Rotas:
Buscar Filmes - https://api.themoviedb.org/3/discover/movie?language=pt-BR
Buscar Generos - https://api.themoviedb.org/3/genre/movie/list

Glossário parâmetros:
https://www.rdocumentation.org/packages/TMDb/versions/1.1 --> Clicar em functions para parâmetros

========================================================
index.html


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inflix</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1>Inflix</h1>
    </header>
    <main>
      <h2> Descubra Novos Filmes </h2>
      <section id="discover">
        <div class="filme">
          <img
            src="https://image.tmdb.org/t/p/w500/nq4taYpb2PjN1Cwni23GOZJbOaR.jpg"
            alt=""
          />
          <div>
            <h3>Mulan</h3>
            <p>
              Na antiga China, durante a guerra, todos os homens são convocados
              para lutar. Mas, um pobre velho, que pela idade não poderia mais
              lutar, descobre que sua filha Mulan toma o seu lugar, vestindo-se
              como homem e permanecendo em segredo. Se isso for descoberto, o
              castigo será severo. Agora, durante a guerra, Mulan ganha a
              proteção de um pequeno dragão, cuja missão é cuidar para que ela
              volte a salvo
            </p>
          </div>
        </div>
      </section>
      <h2> Filmes de Ação </h2>
      <section id="acao"></section>
      <h2> Filmes de Comédia </h2>
      <section id="comedia"></section>
    </main>
    <script src="script.js"></script>
  </body>
</html>

------------------------------------------------------------------------------------------------------------
style.css


* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    color: #FAFAFA;
}

body {
    padding: 6rem;
    background-color: rgb(35, 35, 35);
}

h1 {
    text-align: center;
    margin-bottom: 4rem;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

section {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    padding-block: 2rem;
    flex-wrap: wrap;
}

.filme {
    max-width: 300px;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 16px;
    border: 4px dashed rgb(232, 80, 80);
    max-height: 600px;
}

.filme div p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.filme img {
    width: 100%;
    object-fit: cover;
}



------------------------------------------------------------------------------------------------------------
script.js

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTljOWU5ZmM2NjUzNDVjODAzMmY1NGRiN2Q1NzBjYyIsIm5iZiI6MTcyNjUyNTAwMC4wOTY0ODgsInN1YiI6IjY2ZThhZGFhYmI4MzYxYTFkNmE5ZGQ2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6wM_TZGOqXjWAWAPzS-YTLtyWt7OVRb44CGo1wNeS_4'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'


function Filme(filme) {
    const parser = new DOMParser()

    const doc = parser.parseFromString(`
        <div class="filme">
            <img src="${IMAGE_URL}${filme.poster_path}" alt="" />
            <div>
                <h3>${filme.title}</h3>
                <p>${filme.overview}</p>
            </div>
        </div>
        `, 'text/html')

    return doc.body.firstChild
}

async function buscarFilmesPeloFiltro(filtro = {}) {
    try {
        let requestUrl = `${API_URL}/discover/movie?language=pt-BR`;

        if (filtro.sortBy) {
            requestUrl += `&sort_by=${filtro.sortBy}`
        }

        if (filtro.genre) {
            requestUrl += `&with_genres=${filtro.genre}`
        }

        if (filtro.maxDate) {
            requestUrl += `&release_date.lte=${filtro.maxDate}`
        }

        const response = await fetch(requestUrl, {
            "headers": {
                "Authorization": `Bearer ${API_KEY}`
            }
        })

        const data = await response.json()
        return data.results
    } catch (error) {
        console.error(error)
        return []
    }
}


async function handleListarFilmesDiscover() {
    const filtro = {
        sortBy: "release_date.desc",
        maxDate: new Date().toISOString()
    }

    const filmes = await buscarFilmesPeloFiltro(filtro)

    const discoverSection = document.getElementById('discover')
    discoverSection.innerText = ''
    for (let filme of filmes) {
        discoverSection.appendChild(Filme(filme))
    }
}

async function handleListarFilmesDeAcao() {
    // 1. Construir o Filtro, passando o campo "genre"

    // 2. Façam uma requisição no thunder client, para descobrir qual é o identificador dos filmes de ação:
    // https://api.themoviedb.org/3/genre/movie/list?language=pt
}

async function handleListarFilmesDeComedia() {
    // 1. Construir o Filtro, passando o campo "genre"

    // 2. Façam uma requisição no thunder client, para descobrir qual é o identificador dos filmes de ação:
    // https://api.themoviedb.org/3/genre/movie/list?language=pt
}

window.addEventListener('DOMContentLoaded', handleListarFilmesDiscover)

// Adicionar o evento a janela!