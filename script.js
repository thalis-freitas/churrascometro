var adultos = 0
var criancas = 0
var duracao = 0

var carne = 0
var cerveja = 0
var bebidas = 0

// variáveis com quantidades de carne, cerveja e bebidas para duração de até 6 horas

carneMenos = 450
cervejaMenos = 1.2
bebidasMenos = 1

// variáveis com quantidades de carne, cerveja e bebidas para duração de mais de 6 horas

carneMais = 650
cervejaMais = 2
bebidasMais = 1.5

// variáveis dos inputs da área de cálculo

adultos = document.getElementById("adultos")
criancas = document.getElementById("criancas")
duracao = document.getElementById("duracao")

var btnComecar = document.getElementById("btn-comecar")
var btnCalcular = document.getElementById("btn-calcular")

var containerApresentacao = document.getElementById("container-apresentacao")
var containerCalculo = document.getElementById("container-calculo")
var resultados = document.getElementById("resultados")
var containerConfiguracoes = document.getElementById("container-configuracoes")

containerConfiguracoes.style.display = "none"

// função que irá exibir a área de configurações quando o ícone de configurações for clicado

function personalizar() {
    containerConfiguracoes.style.display = "inline-block"
    containerApresentacao.style.display = "none"
    containerCalculo.style.display = "none"
    resultados.style.display = "none"

    var configuracoes = document.getElementById("configuracoes")
    configuracoes.style.display = "none"
}


function voltar() {
    containerConfiguracoes.style.display = "none"
    containerApresentacao.style.display = "none"
    containerCalculo.style.display = "inline-block"
    configuracoes.style.display = "inline-block"
}

// função que irá salvar as informações inseridas no input como quantidades padrão para o cálculo
function salvar() {
    configuracoes.style.display = "inline-block"

    let alterarCarneMenorDuracao = document.getElementById("alterar-carne-menor-duracao")
    let alterarCervejaMenorDuracao = document.getElementById("alterar-cerveja-menor-duracao")
    let alterarBebidasMenorDuracao = document.getElementById("alterar-bebidas-menor-duracao")

    let alterarCarneMaiorDuracao = document.getElementById("alterar-carne-maior-duracao")
    let alterarCervejaMaiorDuracao = document.getElementById("alterar-cerveja-maior-duracao")
    let alterarBebidasMaiorDuracao = document.getElementById("alterar-bebidas-maior-duracao")

    // condição para não aceitar um valor menor ou igual a zero
    if (alterarCarneMenorDuracao.value <= 0 || alterarCervejaMenorDuracao.value <= 0 || alterarBebidasMenorDuracao.value <= 0 || alterarCarneMaiorDuracao.value <= 0 || alterarCervejaMaiorDuracao.value <= 0 || alterarBebidasMaiorDuracao.value <= 0) {
        alert("Ops... \nPor favor verifique se inseriu as medidas corretamente, o churrascômetro não aceita valores nulos ou negativos.")
    }

    else {
        carneMenos = alterarCarneMenorDuracao.value
        cervejaMenos = alterarCervejaMenorDuracao.value
        bebidasMenos = alterarBebidasMenorDuracao.value

        carneMais = alterarCarneMaiorDuracao.value
        cervejaMais = alterarCervejaMaiorDuracao.value
        bebidasMais = alterarBebidasMaiorDuracao.value

        containerApresentacao.style.display = "none"
        containerCalculo.style.display = "inline-block"
        containerConfiguracoes.style.display = "none"
        resultados.style.display = "inline-block"
    }
}

// função para deixar o background escuro e as fontes claras quando o ícone for clicado
function modoEscuro() {
    document.body.style.background = "#333333"
    document.body.style.color = "white"

    let btnModoEscuro = document.getElementById("modo-escuro")
    let btnModoClaro = document.getElementById("modo-claro")

    btnModoEscuro.style.display = "none"
    btnModoClaro.style.display = "inline-block"
}


let btnModoClaro = document.getElementById("modo-claro")

btnModoClaro.style.display = "none"
document.body.style.background = "#efefef"

// função para deixar o background claro e as fontes escuras quando o ícone for clicado
function modoClaro() {
    document.body.style.background = "#efefef"
    document.body.style.color = "black"

    let btnModoClaro = document.getElementById("modo-claro")
    let btnModoEscuro = document.getElementById("modo-escuro")

    btnModoEscuro.style.display = "inline-block"
    btnModoClaro.style.display = "none"
}

containerCalculo.style.display = "none"

// função que irá direcionar para a área de cálculo quando o botão for clicado 
function iniciar() {
    containerApresentacao.style.display = "none"
    containerCalculo.style.display = "inline-block"
}

// função para mostrar o resultado da quantidade da carne em g se for até 999 e em kg se for maior ou igual a 1000
function medidaCarne() {
    if (carne < 1000) {
        resultados.innerHTML = "<h3>" + "A quantidade ideal para o churrasco é de: " + "</h3>" + "<p>" + parseInt(carne) + "g de carne" + "</p>" + "<p>" + cerveja + "L de cerveja" + "</p>" + "<p>" + bebidas + "L de refrigerante/suco" + "</p>"
    }
    if (carne >= 1000)
        resultados.innerHTML = "<h3>" + "A quantidade ideal para o churrasco é de: " + "</h3>" + "<p>" + (carne / 1000) + "kg de carne" + "</p>" + "<p>" + cerveja + "L de cerveja" + "</p>" + "<p>" + bebidas + "L de refrigerante/suco" + "</p>"
}

// função que irá executar o cálculo 
function calcular() {
    // condição para não permitir quantidade de adultos ou duração menor ou igual a 0 e de crianças menor que zero
    if (adultos.value <= 0 || criancas.value < 0 || duracao.value <= 0) {
        alert("Ops...\nPor favor verifique se inseriu os valores corretamente, é necessário ter no mínimo um adulto e 1 hora de duração.")

        resultados.style.display = "none"
    }

    else if (duracao.value <= 6 && duracao.value > 0) {
        carne = ((adultos.value * carneMenos) + (criancas.value * carneMenos * 0.5)).toFixed(2)
        cerveja = (adultos.value * cervejaMenos).toFixed(1)
        bebidas = ((adultos.value * bebidasMenos) + (criancas.value * bebidasMenos * 0.5)).toFixed(1)

        resultados.style.display = "inline-block"
        medidaCarne()

    }

    else if (duracao.value > 6) {
        carne = ((adultos.value * carneMais) + (criancas.value * carneMais * 0.5)).toFixed(2)
        cerveja = (adultos.value * cervejaMais).toFixed(1)
        bebidas = ((adultos.value * bebidasMais) + (criancas.value * bebidasMais * 0.5)).toFixed(1)

        resultados.style.display = "inline-block"
        medidaCarne()
    }
}

