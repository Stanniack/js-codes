class Person {
    constructor(name, age, borndate, weight, height) {
        this._name = name
        this._age = age
        this._borndate = borndate
        this._weight = weight
        this._height = height
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

let obj = new Person('Mateus', 24, '30/11/1996', 59, 173)
console.log(obj._name)
