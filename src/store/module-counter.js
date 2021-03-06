const properties = {
  _counter: 0,
  _counter__observe: false
}

const getters = {
  /**
   * @returns {number}
   */
  getCounter() {
    return this._counter
  }
}

const methods = {
  incCounter() {
    this._counter++
  }
}

export const moduleCounter = {
  ...properties,
  ...getters,
  ...methods
}
