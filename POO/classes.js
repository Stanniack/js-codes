class Person {
    constructor(name, age, borndate, weight, height) {
        this.name = name
        this.age = age
        this.borndate = borndate
        this.weight = weight
        this.height = height
    }
    
    toString () {
        return `${this.name}, ${this.age} years old, ${this.borndate}, ${this.weight} KG, ${this.height} CM`
    }

}

let obj = new Person('Mateus', 24, '30/11/1996', 59, 173)
console.log(obj.toString())