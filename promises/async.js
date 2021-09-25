function count(n) {
    let c = 0

    setTimeout(() => {
        for (let i = 0; i < n; i++)
            c++
    }, 1000)

    return c
}

console.log(count(10))