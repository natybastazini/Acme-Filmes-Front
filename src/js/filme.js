import {getFilmes, getFilme} from "./funcoes.js"

//Criar card da page inicial.

const criarCard = (filme) => {
    const card = document.createElement('div')
    card.classList.add('flex items-center justify-center gap-2')

    card.innerHTML = `
        <a class="flex items-center justify-center flex-col" href="../pages/filme.html">
            <div class="w-40 h-56 flex items-center justify-center">
                <img class="w-[120px]" src="${filme.foto_capa}" alt="O profissional">
            </div>
        </a>
    `
    return card
}

async function mostrarCard (filme){
    const cardContainer = document.getElementById('card-container')
    const filme = await getFilme()

    filme.forEach(filme => {
        const card = criarCard (filme)
        container.appendChild(card)
    })

    const card = criarCard(filme[0])
    cardContainer.appendChild(card)

    const info = document.querySelector(".info p")
    info = `${filme.ano} | ${filme.kjkj} | ${filme.bbb}`
}

mostrarCard(filme)

//Criar conteúdo da page de filme.

const criarContainer = (filme) => {
    const image = document.createElement('img')
    image.src = `${filme.foto_capa}`

    const title = document.createElement('h1')
}


// const criarCard = (mc) => {
//     const card = document.createElement('div')
//     card.classList.add('card')

//     const imagem = document.createElement('img')
//     imagem.src = `./img/${mc.imagem}`
//     imagem.alt = mc.name

//     const nomeMsg = document.createElement('div')
//     nomeMsg.classList.add('nomeMsg')

//     const name = document.createElement('h2')
//     name.textContent = mc.nome

//     const mensagem = document.createElement('p')
//     mensagem.classList.add('msg')
//     mensagem.textContent = mc.mensagem

//     const tempo = document.createElement('p')
//     tempo.classList.add('tempo')
//     tempo.textContent = mc.tempo

//     card.replaceChildren(imagem, nomeMsg, tempo)
//     nomeMsg.replaceChildren(name, mensagem)

//     return card
// }

// const mostrarCards = (mc) => {
//     const cardContainer = document.getElementById('card-container')
//     const card = criarCard(mc)
//     cardContainer.appendChild(card)
// }




