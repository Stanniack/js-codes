class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    
}

let person = new Person('Mateus', 24)

/* Ignora/(Des)configura atributo escolhido */
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

/* Não deleta pois o atributo já não está mais conifgurável, mas o valor dele pode ser modificado */
console.log(delete person.age)


for (atribute in person)
    console.log(atribute)