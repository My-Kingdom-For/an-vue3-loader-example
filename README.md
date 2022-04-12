# An vue3 loader example \w vue-router

This is a very easy to understand example, this project has a `component` that __has to be displayed for a minimum__ time when *you change the `route`* of the app.

Almost all the code is in the `src/router/index.js` file:
```js
export const isLoading = ref(true)
const dtLoader = 2000
let debounceLoading = 0
```
 * `isLoading`: the reactivity api allows to have a *loading status* that will be kept up to date through the application. `default: true`
 * `dtLoader`: defines the minimum number of milliseconds during which the status must be `true` (prevents from having a blinking loader). `default: 2 seconds`
 * `debounceLoading`: just to store the timeout id. `¯\_(ツ)_/¯`

```js
router.beforeEach(() => {
  window.clearTimeout(debounceLoading)
  isLoading.value = true
})
router.afterEach(() => {
  window.clearTimeout(debounceLoading)
  debounceLoading = window.setTimeout(() => (isLoading.value = false), dtLoader)
})
```
The mechanism is based on the `vue-router` hooks (`beforeEach` & `afterEach`), the status changes to `true` before the route change and after the route change the debounce waits to change it to `false`.

-----------------------------------------------
## The `<LoaderDisplay />`
The component must be included somewhere where it can be displayed, for ease it is here in the `App.vue`. The display condition (`v-if`) is very simple, it imports the reactive status that we have declared.
```html
<div v-if="isVisible" class="loader-display" />
```

-----------------------------------------------

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

-----------------------------------------------

## TODOs
- [ ] Improve `README.md`
- [ ] Would it be better to export the status as read-only? 🤔
- [ ] Design a loader with states/animations (appears & disappears)
