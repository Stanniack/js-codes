let array = [1, 2, 3]

/* Pilha */
array.push(100)
array.pop()

/* Fila: shift: retira do início, unshift: coloca no início */
array.shift()
array.unshift(100)

/* For each */
array.forEach(item => {
    console.log(item)
});

console.log()

/* For in */
for (let pos in array)
    console.log(array[pos])

console.log()

console.log(array.indexOf(5))