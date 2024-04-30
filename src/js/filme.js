import {getFilmes} from "./funcoes.js"

//Criar card da page inicial.

const criarCard = (filme) => {
    const card = document.createElement('div')
    card.className =  'flex items-center justify-center gap-2'

    card.innerHTML = `
        <a class="flex items-center justify-center flex-col" href="../pages/filme.html">
            <div class="w-40 h-56 flex items-center justify-center">
                <img class="w-[120px]" src="${filme.foto_capa}" alt="O profissional">
            </div>
        </a>
    `

    card.addEventListener('click', () => {
        localStorage.setItem('filmeId', filme.id)
    })
    return card
}

async function mostrarCard (){
    const cardContainer = document.getElementById('card-container')
    const filme = await getFilmes()

    console.log(filme)


    filme.forEach( filme => {
        const card = criarCard (filme)
        cardContainer.appendChild(card)
    })

    // const card = criarCard(filme[0])
    // cardContainer.appendChild(card)

    // const info = document.querySelector(".info p")
    // info = `${filme.ano} | ${filme.ano} | ${filme.bbb}`
}

mostrarCard()


{/* <div id="container" class="flex items-center justify-center flex-row gap-20 pt-10">
            <img class="w-48" src="../../img/O profissional.png" alt="filme">
            <div class="px-20">
                <h1 class="text-white font-font font-bold text-[40px]">
                    O PROFISSIONAL
                </h1>
                <div class="flex flex-row">
                    <p class="text-white font-font text-[20px]">
                        1994 | 1h 49min | Ação
                    </p>
                </div>
                <p class="text-white text-[24px] w-[600px] py-10">
                    Um assassino profissional de Nova York se torna o guardião de uma garota de 12 anos que busca se vingar do policial que assassinou toda a sua família.
                </p>
                <!-- <button class="flex items-center gap-2">
                    <a class="font-font text-white font-semibold flex items-center gap-4" href="https://www.primevideo.com/dp/amzn1.dv.gti.fab4b9d4-ed96-8083-a3fb-f85d2f62e8db?autoplay=0&ref_=atv_cf_strg_wb">
                        <img class="w-6" src="../../img/play.png" alt="">
                        <span>Assista já</span>
                    </a>
                </button> -->
                <div class="bg-principal w-64 h-14 rounded-xl flex flex-row items-center justify-center text-white font-font gap-2">
                    <h1 class="text-white text-[16px] font-light px-2">Comprar:</h1>
                    <button class="bg-principal rounded-md w-16 flex items-center justify-center px-4">
                        <span class="text-white font-font text-[16px] font-semibold">R$20,00</span>
                    </button>
                </div>
            </div>
        </div> */}

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




