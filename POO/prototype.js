/* Arrow functions fora da função construtora são problemáticas */

function Person (name, age, sex) {
    this._name = name
    this._age = age
    this._sex = sex

    /* Prototype 1ª forma */
    this.getName = function () {
        return this._name
    }

    this.setName = function (value) {
        this._name = value
    }
}

/* Prototype 2ª forma */
Person.prototype = {
    /* Quando o objeto é alterado por prototype, o constructor fica como Object sendo necessário a redefinição */
    constructor: Person,

    getAge: function () {
        return this._age
    },
    setAge: function (value) {
        this._age = value
    }
}

/* Prototype 3ª forma */
Person.prototype.getSex = function () {return this._sex}
Person.prototype.setSex = function (value) {this._sex = value}

let person = new Person('Mateus', 24, 'M')
person.setName('Mateus Vitor')
person.setAge(25)
person.setSex('MM')

console.log(person.getName())
console.log(person.getAge())
console.log(person.getSex())
console.log(person.constructor)