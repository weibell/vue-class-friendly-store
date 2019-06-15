import { Person } from './Person'

const properties = {
  /**
   * @type {Person[]}
   */
  _people: []
}

const getters = {
  /**
   * @returns {Person[]}
   */
  getPeople() {
    return this._people
  },

  /**
   * @param {number} index
   * @returns {Person}
   */
  getPerson(index) {
    return this._people[index]
  }
}

const methods = {
  /**
   * @param {Person} person
   */
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
