function Person (name, age) {
    this._name = name,
    this._age = age
    
    Object.defineProperties(this, {
        _name: {
            enumerable: true,
            configurable: true,
            writable: true,

        },
        name: {
            get: () => this._name,
            set: value => this._name
        },

        _age: {
            enumerable: true,
            configurable: true,
            writable: true,
        },
        age: {
            get: () => this._age,
            set: value => this._age
        },

    })

    Object.preventExtensions(this)
}

let obj = new Person('Mateus', 24)
console.log(obj)