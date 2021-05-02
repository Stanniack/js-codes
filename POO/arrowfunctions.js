/* Arrow function básica */
let sum = (n1, n2) => {
    return n1 + n2
}

/* Arrow function com retorno automático*/
let sum2 = (n1, n2) => n1 + n2

/* Arrow function sem parênteses para um argumento e com colchetes e retorno */
let diameter = circunference => {return circunference/Math.PI}

/* Arrow function sem parênteses para um argumento e com retorno automático */
let diameter2 = circunference => circunference/Math.PI

/* Arrow function sem parâmetro */
let noParam = () => 'Eu não tenho parâmetros'

let obj = (name, age) => {
    return {name: name, age: age}
}

let obj2 = (name, age) => ({name: name, age: age})

console.log(sum(1, 1))
console.log(sum2(1, 1))
console.log(diameter(13.5))
console.log(diameter2(13.5))
console.log(obj('Mateus', 24).name)
console.log(obj2('Mateus', 24).age)