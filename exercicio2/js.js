function verify () {
    let anoAtual = new Date().getFullYear()
    let dataNasc = document.getElementById('n11')

    if (Number(dataNasc.value) > anoAtual || dataNasc.value.lenght == 0)
        window.alert('Erro')
    else {
        let genero = document.getElementsByName('radsex')[0].checked ? 'Masculino' : 'Feminino' 

        document.getElementById('msg2').innerText = (anoAtual - dataNasc.value) 
        + ' anos de idade e é do gênero ' + genero
    }

    
}
