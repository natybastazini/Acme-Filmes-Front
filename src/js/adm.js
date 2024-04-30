('use strict')

const criarLinha = (aula) => {

    const linha = document.createElement('tr')
    const titulo = document.createElement('td')
    const linkAula = document.createElement('a')
    linkAula.href = aula.linkAula
    linkAula.textContent = aula.titulo
    const descricao = document.createElement('td')
    descricao.textContent = aula.descricao
    const data = document.createElement('td')
    data.textContent = aula.data

    linha.replaceChildren(titulo, descricao, data)
    titulo.appendChild(linkAula)

    return linha
}

const mostrarTabela = (aula) => {
    const tabela = document.getElementById('tabela')
    const linha = criarLinha(aula)
    tabela.appendChild(linha)
}

aula.forEach(mostrarTabela)

