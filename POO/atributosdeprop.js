class Person {
    constructor (name, age) {
        this._name = name
        this.age = age
    }
    
}

let person = new Person('Mateus', 24)

Object.defineProperty(person, 'age', {
    /* Ignora */
    enumerable: false,
    /* Torna-se inconfigurável para algumas operações com o atributo */
    configurable: false,
    /* Altera valor */
    value: 'João',
    /* Torna o atributo uma constante */
    writable: false
})

/* Atribuindo getters e setters após a criação do objeto */
Object.defineProperty(person, 'name', {
    get: () => this._name,
    set: value => this._name = value
})

/* Não deleta pois o atributo já não está mais conifgurável, mas o valor dele pode ser modificado */
console.log(delete person.age)


for (atribute in person)
    console.log(atribute)


/* ___________ */

let pet = {}

/* Definição de propriedades é necessário configurar manualmente todas as propridades pois elas são false como padrão */
Object.defineProperties(pet, {
    _name: {
        value: 'Thor',
        enumerable: true,
        configurable: true,
        writable: false
    },

    _age: {
        value: 12,
        enumerable: true,
        configurable: true,
        writable: false
    }
})

console.log(pet)