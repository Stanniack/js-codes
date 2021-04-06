let array = [7, 1, 2, 3, 11, -1, 2, 5, 5]
array.push(100)
array.pop()
array.shift()
//array.sort()

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