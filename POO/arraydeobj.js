let vet = []

for (let i = 0; i < 5; i++) {
    let obj = {
        name: `Name ${i}`
    }

    vet.push(obj)
}

for (const i in vet) 
    console.log(vet[i].name)