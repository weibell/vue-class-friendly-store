const avg = arr => arr.reduce((acc, cur) => acc + cur, 0) / arr.length

const getters = {
  getAvgAge() {
    return avg(this.getPeople().map(person => person.age))
  }
}

export const modulePeopleStats = {
  ...getters
}
