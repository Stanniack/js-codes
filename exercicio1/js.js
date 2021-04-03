function load () {
    let msg = document.getElementById('msg')
    let img = document.getElementById('foto')
    let hour = new Date().getHours()
    msg.innerText = `Agora são: ${new Date().getHours()} horas e ${new Date().getMinutes()} minutos`

    if (hour >= 6 && hour < 12) {
        document.body.style.background = '#bbd1dc';
        img.src = 'dia.jpg'
    }
    else if (hour >= 12 && hour <= 19) {
        document.body.style.background = '#ff977f';
        img.src = 'tarde.jpg'
    }
    else {
        document.body.style.background = '#594165';
        img.src = 'noite.jpg'
    }
}

