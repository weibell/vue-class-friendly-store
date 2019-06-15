export class Person {

  /** @type {string} */
  #name

  /** @type {number} */
  age

  constructor({ name, age }) {
    this.#name = name
    this.age = age
  }

  get name() {
    return this.#name.charAt(0).toUpperCase() + this.#name.slice(1)
  }

  setAge(age) {
    this.age = age
  }
}
