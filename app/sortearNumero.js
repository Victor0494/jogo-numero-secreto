const menorValor = 1
const maiorValor = 20
const numeroSecreto = gerarNumeroAleatorio()
const elementMenorValor = document.getElementById('menor-valor')
const elementMaiorValor = document.getElementById('maior-valor')

console.log(numeroSecreto)

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

elementMenorValor.innerHTML = menorValor
elementMaiorValor.innerHTML = maiorValor

