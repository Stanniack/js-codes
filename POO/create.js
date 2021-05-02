let obj = {
    a: 1,
    b: 2
}

/* Passando apenas a referência da memória */
let ref = obj
ref.b = 5

console.log(`${obj.b} and ${ref.b}`)

/* clonando objeto */
let new_obj = Object.create(obj)
new_obj.b = 10

console.log(`${obj.b} and ${new_obj.b}`)