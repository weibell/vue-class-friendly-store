# vue-class-friendly-store


A class-friendly, lightweight store pattern for Vue.js

## Purpose

There are many options for a central [Vue.js](https://vuejs.org/) store, [Vuex](https://vuex.vuejs.org/) is just one of them. This simple approach aims to overcome two downsides of Vuex:

- Data access and manipulation tends to be rather verbose and formalistic
- Using it to store (non-POJO) custom objects, e.g. in combination with ES6's [syntactical sugar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), is not very intuitive

This pattern makes use of [`Vue.observable(object)`](https://vuejs.org/v2/api/#Vue-observable), which was added in Vue.js 2.6 (February '19) and allows an object (`$store` in this case) to have Vues's reactive properties.

This store pattern uses in this example uses similar concepts to Vuex (`properties`, `getters`, `methods`, `modules`), but that distinction is strictly logical and can easily be adapted.
In fact, all store data and methods reside in the store's root by default for simple data access. `createStore` ensures that the `this` keyword always refers to the store root (`$store`).

A property can marked as "do not observe" by adding a property with the suffix `__observe` and setting it to `false` (see `module-counter.js`). This may have a positive impact on performance for stores with very large amounts of data.


## Caveats

This approach comes with a few drawbacks:

- Asynchronous methods (e.g. fetching data from a URL) will likely cause issues. [Vuex](https://vuex.vuejs.org/)' actions handle this nicely.
- It does not offer any of the State Management features that [Vuex](https://vuex.vuejs.org/) offers.
- Data structures such as `Map`, `Set` still cannot be observed (though this is [planned for Vue.js 3.0](https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf)).
But it does work for reactive properties of custom objects (see class `Person` in the example), and there are some [hacky workarounds](https://github.com/vuejs/vue/issues/2410#issuecomment-318487855) that could be used to make `Maps` and the like work. 


## Inspiration and further reading

- <https://vuejs.org/v2/guide/reactivity.html>
- <https://vuejs.org/v2/guide/state-management.html>
- <https://vuejs.org/v2/api/#Vue-observable>
- <https://vuejs.org/v2/cookbook/adding-instance-properties.html>
- <https://dev.to/f3ltron/vue-2-6-6-release-part3-vue-observable-21dk>
- <https://github.com/f3ltron/vueObservable>
- <https://vuedose.tips/tips/creating-a-store-without-vuex-in-vue-js-2-6/>


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
