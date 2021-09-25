function count(n) {
    let c = 0

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < n; i++)
                c++

            if (c == n)
                resolve('sucess')
                
            reject('error')

        }, 1000)

    })

    return promise
}

count(10)
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))