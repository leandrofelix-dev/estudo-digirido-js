const divImagemPrincipal = document.querySelector("#imagem-principal")
const imagemPrincipal = divImagemPrincipal.querySelector("img")

const textoAlternativo = divImagemPrincipal.querySelector(".texto-alternativo")
const btnProximo = divImagemPrincipal.querySelector(".proximo")
const btnAnterior = divImagemPrincipal.querySelector(".anterior")
const todasImagens = document.querySelectorAll("#imagens img")

let idImagemAtiva = 0;

const proximaImagem = () => {
    idImagemAtiva++
    if(idImagemAtiva >= todasImagens.length) idImagemAtiva = 0
    selecionarImagem()
}
const voltarImagem = () => {
    idImagemAtiva--
    if(idImagemAtiva < 0) idImagemAtiva = todasImagens.length - 1
    selecionarImagem()
}
const selecionarImagem = function() {
    imagemPrincipal.src = todasImagens[idImagemAtiva].src
    todasImagens.forEach((imagem)=>{
        imagem.classList = ""
    })
    todasImagens[idImagemAtiva].classList.add("")
}
btnProximo.addEventListener("click", proximaImagem)
btnAnterior.addEventListener("click", voltarImagem)

todasImagens.forEach((imagem, numeroImagem)=>{
    imagem.addEventListener("click", ()=>{
        imagemPrincipal.src = imagem.src
        imagem.classList.add("selecionada") 
    })
})