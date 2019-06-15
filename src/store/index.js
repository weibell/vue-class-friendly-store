import Vue from 'vue'

import { moduleCounter } from './module-counter.js'
import { modulePeople } from './module-people.js'
import { modulePeopleStats } from './module-people-stats.js'

function createStore(storeData) {
  // handle entries not to be observed
  const OBSERVE_SUFFIX = '__observe'
  const doNotObserve = Object.keys(storeData)
    .filter(key => key.endsWith(OBSERVE_SUFFIX) && storeData[key] === false)
    .map(key => key.match(new RegExp(`(.*)${OBSERVE_SUFFIX}$`))[1])

  // make observable
  const store = Vue.observable({})

  for (let [key, value] of Object.entries(storeData)) {
    if (typeof value === 'function') {
      value = value.bind(store) // bind 'this' keyword
    }

    if (doNotObserve.includes(key) || key.endsWith(OBSERVE_SUFFIX)) {
      store[key] = value // non-reactive
    } else {
      Vue.set(store, key, value) // reactive
    }
  }
  return store
}

Vue.prototype.$store = createStore({
  ...moduleCounter,
  ...modulePeople,
  ...modulePeopleStats
})
