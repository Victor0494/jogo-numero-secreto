function verificaChute(chute) {
    const numero = +chute

    if(validaNumero(numero)) {
       elementoChute.innerHTML += '<div>Valor inválido </div>'
       return
    }

    if(numeroMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div> O valor precisar estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Voçê acertou!!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="reset" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function validaNumero(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor 
}

document.body.addEventListener('click', evento => {
    if(evento.target.id == 'reset') {
        window.location.reload()
    }
})