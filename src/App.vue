<template>
  <div id="app">
    <!-- Counter -->
    <h1>Counter</h1>
    <p>Counter: {{ $store.getCounter() }} (marked as "do not observe")</p>

    <p><button @click="$store.incCounter()">Increase Counter</button></p>
    <p><button @click="logCounter">console.log(getCounter())</button></p>

    <!-- Person -->
    <h1>Person (observed)</h1>
    <ul>
      <li v-for="(person, index) in $store.getPeople()" :key="index">
        Name: {{ person.name }}, age: {{ person.age }}
      </li>
    </ul>

    <p v-if="$store.getPeople().length > 0">
      Average age: {{ $store.getAvgAge() }}
    </p>

    <p>
      <button @click="$store.createRandomPerson()">Add Entry</button>
    </p>
    <p>
      <button @click="$store.getPerson(0).age++">Increase #1's age</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app',

  methods: {
    logCounter() {
      console.log(this.$store.getCounter())
    }
  },

  created() {
    window.$store = this.$store // debug
  }
}
</script>
