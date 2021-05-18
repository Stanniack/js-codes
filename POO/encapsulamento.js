function Person (name, age) {
    var _name = name
    var _age = age

    this.getAge = function () {
        return _age
    }

    this.getName = function () {
        return _name
    }

    this.setName = function (value) {
        _name = value
    }  

}

let person = new Person('Mateus', 24)
person.setName('Mateus Vitor')
console.log(person.getName())