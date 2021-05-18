let array = [1, 2, 3]

/* Copia array para outra variável */
let array2 = array.slice()
console.log(array2)

/* procura elemento e retorna array se encontrado*/
let resultFilter = array.filter(value => value == 2)
console.log(resultFilter)

/* procura elemento e retorna boolean */
let resultSome = array.some(value => value == 2)
console.log(resultSome)

/* procura elemento e retorna apenas o elemento se encontrado */
let resultFind = array.find(value => value == 2)
console.log(resultFind)

/* soma todos os elementos de um array e o retorna */
let resultReduce = array.reduce((total, increment) => total + increment)
console.log(resultReduce)