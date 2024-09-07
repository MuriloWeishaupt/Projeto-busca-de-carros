const section = document.querySelector('#resultado-pesquisa')
const button = document.querySelector(".button")


function mostraResultados() {
    let campoPesquisa = document.querySelector('#campoPesquisa').value.toLowerCase();
    const section = document.querySelector('#resultado-pesquisa');
    let resultados = '';

    if (campoPesquisa === '') {
        section.textContent = 'Nenhum veículo encontrado. Digite o nome do carro';
        section.style.color = 'white'
        return;
    }

    for (const carro of carros) {
        const { nome, descricao, marca, tags, imagem } = carro;
        if (
            nome.toLowerCase().includes(campoPesquisa) ||
            descricao.toLowerCase().includes(campoPesquisa) ||
            marca.toLowerCase().includes(campoPesquisa) ||
            tags.toLowerCase().includes(campoPesquisa)
        ) {
            resultados += `
                <div class="carro-container">
                    <h2 class="titulo-carro"><a href="${carro.link}" target="_blank">${carro.nome}</a></h2>
                    <br>
                    <p>${carro.descricao}</p>
                    <img class="imagem-carro" src="${carro.imagem}">
                </div>
            `;
        }
        document.querySelector('#campoPesquisa').value = ''
    }

    section.innerHTML = resultados
if (!resultados) {
    section.innerHTML = 'Nenhum veículo encontrado'
    section.style.color = "white"
    
}
}

campoPesquisa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(),
        mostraResultados(event.keyCode)
    }
})
button.addEventListener('click', mostraResultados);
