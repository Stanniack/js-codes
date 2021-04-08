let person = new Object()
person.name = 'Mateus'
person.age = '24'
person.showInfo = function () {return this.name + ' ' + this.age}

console.log(person.showInfo())