<template>
  <h1>Калькулятор</h1>
  <div class="app-container justify-content-center d-flex">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
}

.app-container {
  text-align: center;
}
</style>
