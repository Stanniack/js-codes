function tabuar () {
    let tabu = Number(document.getElementById('tabu').value)
    

    if (tabu.lenght != 0) {
        let selection = document.getElementById('seletor')
        selection.innerText = ''

        for (i = 1; i<= 10; i++) {
            let opt = document.createElement('option')
            opt.text = `${i} x ${tabu} = ${i * tabu}`
            selection.appendChild(opt)
        }

    } else
        window.alert('Insira um número válido.')
}