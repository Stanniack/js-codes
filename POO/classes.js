class Animal {
    constructor(type, behaviour){
        this._type = type
        this._behaviour = behaviour
    }

    get type () {
        return this._type
    }

    get behaviour () {
        return this._behaviour
    }
}


class Pet {
    constructor(name, age, specie){
        this._name = name
        this._age = age
        this._specie = specie
    }
}

class Person {
    constructor(name, age, borndate, weight, height, pet) {
        this._name = name
        this._age = age
        this._borndate = borndate
        this._weight = weight
        this._height = height
        this._pet = pet
    }

    get name () {
        return this.name;
    }

    set name (value) {
        this._name = value
    }
    
    toString () {
        return `${this._name}, ${this._age} years old, ${this._borndate}, ${this._weight} KG, ${this._height} CM`
    }

}

let obj = new Person('Mateus', 24, '30/11/1996', 59, 173, new Pet('Thor', 12, 'Dog'))

console.log(obj._name)
console.log(obj._pet._name)
