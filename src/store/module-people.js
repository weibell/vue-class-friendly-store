import { Person } from './Person'

const properties = {
  _people: []
}

const getters = {
  getPeople() {
    return this._people
  },

  getPerson(index) {
    return this._people[index]
  }
}

const methods = {
  addPerson(person) {
    this._people.push(person)
  },

  createRandomPerson() {
    const names = ['foo', 'bar', 'baz', 'qux']
    const person = new Person({
      name: names[this.getPeople().length % names.length],
      age: Math.floor(Math.random() * 60) + 15
    })
    this.addPerson(person)
  }
}

export const modulePeople = {
  ...properties,
  ...getters,
  ...methods
}
