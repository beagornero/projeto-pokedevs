/*
OBJETIVO - quando clicar no pokedev da listagem preciso esconder o cartão do pokdev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.
---PASSO 1 - preciso criar uma variável no js para trabalhar com a listagem de pokedevs;
---PASSO 2 - identificar o evento de clique no elemento da listagem;
---PASSO 3 - remover a classe aberto só do cartão que está aberto;
---PASSO 4 - ao clicar em um pokedev da listagem, pegar o id desse pokedev para saber qual cartão abrir;
---PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem;
---PASSO 6 - adicionar a classe ativo no pokedev selecionado na listagem.
*/

const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {

        esconderCartaoPokedev();

        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);
        
        desativarPokedevNaListagem();

        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
    })
})
function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

