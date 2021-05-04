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


/* ________________________________________________________________ */

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

/* Forma de ver as configurações de uma propriedade de objeto */
console.log(Object.getOwnPropertyDescriptor(pet, '_name'))
/* Sendo mais específico */
console.log(Object.getOwnPropertyDescriptor(pet, '_name').writable)

/* Torna o objeto imutável */
Object.preventExtensions(pet)
/* Não irá funcionar */
pet._especie = 'Dog'
console.log(pet)
/* Verifica o estado do objeto mutável: dinâmico: true, adinâmico: false */
console.log(Object.isExtensible(pet))