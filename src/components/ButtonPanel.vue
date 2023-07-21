<template>
  <div class="button-panel">
    <Button @btn-click="addToExpression" btn-value="1"></Button>
    <Button @btn-click="addToExpression" btn-value="2"></Button>
    <Button @btn-click="addToExpression" btn-value="3"></Button>
    <Button @btn-click="addToExpression" btn-value="/"></Button>
    <Button @clear-click="clearInput" btn-value="C" class="item_C"></Button>
    <Button @btn-click="addToExpression" btn-value="4"></Button>
    <Button @btn-click="addToExpression" btn-value="5"></Button>
    <Button @btn-click="addToExpression" btn-value="6"></Button>
    <Button @btn-click="addToExpression" btn-value="*"></Button>
    <Button @btn-click="addToExpression" btn-value="7"></Button>
    <Button @btn-click="addToExpression" btn-value="8"></Button>
    <Button @btn-click="addToExpression" btn-value="9"></Button>
    <Button @btn-click="addToExpression" :btn-value="'+'"></Button>
    <Button @eval-click="evaluateExpression" btn-value="=" class="item_equals"></Button>
    <Button @btn-click="addToExpression" btn-value="0" class="item_zero"></Button>
    <Button @btn-click="addToExpression" btn-value="."></Button>
    <Button @btn-click="addToExpression" btn-value="-"></Button>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: 'ButtonPanel',
  components: {Button},
  methods:{
    addToExpression(value){
      console.log(value)
      this.$emit('update-expression',value)
    },
    clearInput(){
      this.$emit('clear-expression')
    },
    evaluateExpression(){
      this.$emit('eval-expression')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button-panel{
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-column-gap: 5px;
    grid-row-gap: 10px;
  }
  .item_C{
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 5;
  }
  .item_equals{
    grid-row-start: 3;
    grid-row-end: 5;
    grid-column-start: 5;
  }
  .item_zero{
    grid-column-start: 1;
    grid-column-end: 3;
  }

</style>