<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Student2/>
  </div>
</template>

<script>
import Student2 from './components/Student2'

export default {
  name: 'App',
  components: {
    Student2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: aquamarine;
}
</style>
