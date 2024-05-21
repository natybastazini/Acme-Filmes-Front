'use strict'

import { getGeneros, deleteGenero, postGenero, putGenero } from "./funcoes.js"

const criarLinha = (genero) => {

    const container = document.createElement('div')
    container.className = "flex justify-between w-full gap-3"

    const id = document.createElement('div')
    id.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    id.textContent = genero.id
    
    const nome = document.createElement('div')
    nome.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    nome.textContent = genero.nome

    const buttonDelete = document.createElement('button')
    buttonDelete.className = "flex items-center justify-center"
    const iconeDelete = document.createElement('img')
    iconeDelete.className = "w-24"
    iconeDelete.src = "../../../img/lixo.png"
    iconeDelete.alt = ""
    buttonDelete.appendChild(iconeDelete)

    buttonDelete.addEventListener('click', async () => {
        await deleteGenero(genero.id) 
        window.location.reload()
    })

    const buttonUpdate = document.createElement('button')
    buttonUpdate.className = "flex items-center justify-center"
    const iconeUpdate = document.createElement('img')
    iconeUpdate.className = "w-24"
    iconeUpdate.src = "../../../img/editar.png"
    iconeUpdate.alt = ""
    buttonUpdate.appendChild(iconeUpdate)

    buttonUpdate.addEventListener('click', async () => {
        await putGenero(genero.id) 
        window.location.reload()
    })

    container.replaceChildren(id, nome, buttonDelete, buttonUpdate)

    return container
}

async function mostrarLinha (){
    const container = document.getElementById('container-generos')
    const generos = await getGeneros()

    console.log(generos)

    container.replaceChildren('')

    generos.forEach( genero => {
        console.log(genero)
        const linha = criarLinha (genero)
        container.appendChild (linha)
    })
}

mostrarLinha()


document.getElementById('adicionar-genero').addEventListener('click', async () => {
    const nomeGenero = document.getElementById('nomeInput').value


    if (!nomeGenero.trim()) {
        alert('Por favor, insira um nome para o gênero.')
        return
    }

    const genero = {
        nome: nomeGenero
    }

    try {
        const sucesso = await postGenero(genero)
        if (sucesso) {
            console.error('Gênero adicionado com sucesso!')
            document.getElementById('nomeInput').value = ''

            document.getElementById('modal').classList.add('hidden')
            mostrarLinha()
        } else {
            console.error('Falha ao adicionar o gênero. Por favor, tente novamente.')
        }
    } catch (error) {
        console.error('Erro ao adicionar gênero:', error)
    }
})

const idDoGenero = 1;
const dadosAtualizados = {
    nome: "Novo nome do gênero",
}

const sucesso = await putGenero(idDoGenero, dadosAtualizados);

if (sucesso) {
    console.log('Gênero atualizado com sucesso!!');
} else {
    console.error('Falha ao atualizar o gênero!!');
}

const openModalButton = document.getElementById('openModal')
const closeModalButton = document.getElementById('closeModal')
        
const modal = document.getElementById('modal')

openModalButton.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden')
})
