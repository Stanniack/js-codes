var vet = []

function adicionar () {
    let numero = Number(document.getElementById('tabu').value)

    if (numero < 1 || numero > 100 || vet.indexOf(numero) != -1) 
        window.alert('Número inválido.')
    else {
        document.getElementById('p').innerText = ''
        vet.unshift(numero)

        let seletor = document.getElementById('seletor')
        let opt = document.createElement('option')

        opt.text = `Valor ${numero} foi adicionado`
        seletor.appendChild(opt)
    }

}

function verificar () {
    let p = document.getElementById('p')

    if (vet.length == 0) 
        window.alert('Não há elementos no array.')
    else {
        p.innerText = `Temos ${vet.length} números cadastrados.\n
        O maior número é ${Math.max.apply(null, vet)}.\n
        O menor valor informado foi ${Math.min.apply(null, vet)}.\n
        Somando todos os números temos ${somar_media(vet, 'sum')}.\n
        A média dos valores digitados é ${somar_media(vet, 'aver')}.`
    }
}

function somar_media (vet, opt) {
    let sum = 0
    for (let i = 0; i < vet.length; i++) 
        sum += vet[i]

    if (opt == 'sum')
        return sum
    else {
        if (opt == 'aver')
            return sum/vet.length
    }

    return false
}

