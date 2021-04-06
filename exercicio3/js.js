function contar () {
    let ini = Number(document.getElementById('ini').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    
    document.getElementById('p').innerText = ''

    if (passo > 0) {
        document.getElementById('p').innerText = ''

        while (ini <= fim) {
            document.getElementById('p').innerText += ' ' + ini; 
    
            ini += passo
        }	
    
        document.getElementById('p').innerText += ` \u{1F3C1}`

    } else
        alert('Passo precisa ser maior que 0.')

}