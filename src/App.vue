<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Button label="testing" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from './stories/Button.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Button
  }
}
</script>
