let nick = 'Mateus'

let doSomething = new Promise((resolve, reject) => {
    if (nick == 'Mateus')
        resolve('É o Mateuso!')

    reject('Não é o Mateuso!')
});

doSomething.then((message) => {
    console.log('Message: ' + message)
}).catch((err) => {
    console.log('Message: ' + err)
})