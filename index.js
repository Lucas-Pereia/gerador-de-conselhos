const botaoDeConselhos = document.getElementById('tirar-conselho');
const numeroDoConselho = document.getElementById('numero-conselho');
const descricaoDoConselho = document.getElementById('texto-conselho');

async function gerandoConselhoAleatorio(){
    const resposta = await fetch ("https://api.adviceslip.com/advice");
    const conselho = await resposta.json();
    const idConselho = `Advice #${conselho.slip.id}`;
    const textoConselho = `${conselho.slip.advice}`;

    numeroDoConselho.innerHTML = idConselho;
    descricaoDoConselho.innerHTML = textoConselho;

}

botaoDeConselhos.addEventListener("click", gerandoConselhoAleatorio);

gerandoConselhoAleatorio()