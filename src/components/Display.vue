<template>
  <div class="display d-flex align-items-center justify-content-end">
    <h1 class="text-white m-1">{{expression}}</h1>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Display',
  props: {
    expression: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .display{
    height: 75px;
    /*Контур дисплея*/
    border: 3px solid #4ab572;
    border-radius: 10px;
    margin: 1rem;
    box-shadow: 0 0 5px black;
  }
</style>