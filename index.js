var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaE = window.document.getElementById("setaE")
var setaD = window.document.getElementById("setaD")


var nome = window.document.getElementById("nome")
var telefone = window.document.getElementById("telefone")
var email = window.document.getElementById("email")

var dadosNome = window.document.getElementById("dados-nome")
var dadosTelefone = window.document.getElementById("dados-telefone")
var dadosEmail = window.document.getElementById("dados-email")

var botaoEsconder = window.document.getElementById("botaoEsconder")
var botaoExibir = window.document.getElementById("botaoExibir")
var detalhes = window.document.getElementById("detalhes")

function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaE.style = "display:flex"
    setaD.style = "display:none"
}


function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaD.style = "display:flex"
    setaE.style = "display:none"

}

function MostrarDetalhes() {
    detalhes.style.display = "grid"
    botaoEsconder.style.display = "block"
   
    dadosNome.textContent = nome.value
    dadosTelefone.textContent = telefone.value
    dadosEmail.textContent = email.value

    botaoEsconder.scrollIntoView({
        behavior: "smooth"
    })
    
}

function EsconderDetalhes(){
    detalhes.style.display = "none"
    botaoEsconder.style.display = "none"
    botaoExibir.scrollIntoView({
        behavior: "smooth"
    })
}
