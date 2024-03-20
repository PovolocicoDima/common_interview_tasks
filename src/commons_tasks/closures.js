class Person {
    name = ''

    setName(newName) {
        this.name = newName
    }

    constructor(name) {
        this.name = name
    }
}

const p = new Person('Dima')
p.setName('Vasea')
Person.prototype.getName = function () {
    return `Hello ${this.name}`
}
console.log(p.getName())
console.log(p)
