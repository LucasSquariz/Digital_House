// Transformando os elementos do DOM em variaveis
const botaoAdicionar = document.querySelector("#botao-adicionar");
const content = document.querySelector(".content");
const legendaForm = document.querySelector("#legenda");
const dataForm = document.querySelector("#data");
const urlImgForm = document.querySelector("#url-img");

// Criando um evento quando clica no botão adicionar para adicionar os cards
botaoAdicionar.addEventListener('click', (event) => {
    // .preventDefault() impede que a pagina seja recarrecada ao clicar no botao
    event.preventDefault();
    
    // Criando o card
    const novoCard = document.createElement('div');
    novoCard.classList.add('child');

    // Criando a imagem do card e adicionando os atributos
    const imagem = document.createElement('img');
    imagem.setAttribute('src', urlImgForm.value);
    imagem.classList.add('img-child');
    imagem.setAttribute('alt', legendaForm.value);

    // Data do card
    const data =  document.createElement('p');
    data.classList.add('data-child');
    data.textContent = dataForm.value.replaceAll('-', '/');

    // Legenda do card
    const legenda =  document.createElement('p');
    legenda.classList.add('legenda-child');
    legenda.textContent = legendaForm.value;

    // adicionando todos os elementos ao DOM de forma ordenada
    novoCard.appendChild(imagem);
    novoCard.appendChild(data);
    novoCard.appendChild(legenda);
    content.appendChild(novoCard);
});






