<template>
  <div class="calculator-container">
    <Display :expression="expression || '0'"></Display>
    <ButtonPanel @clear-expression="clearExpression"
                 @update-expression="updateExpression"
    @eval-expression="evaluateExpression">
    </ButtonPanel>
  </div>
</template>

<script>
import Display from "@/components/Display";
import ButtonPanel from "@/components/ButtonPanel";
import {ref} from "vue";

export default {
  name: 'CalculatorComponent',
  components: {ButtonPanel, Display},
  props: {},
  setup() {
    const expression = ref('');
    const updateExpression = (value) => {
      expression.value += value;
    };
    const clearExpression = ()=>{
      expression.value = '';
    }
    const evaluateExpression = ()=>{
      console.log(expression.value)
      expression.value = eval(expression.value)
    }
    return {
      expression,
      updateExpression,
      clearExpression,
      evaluateExpression
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator-container {
  margin-top: 60px;
  min-width: 230px;
  width: auto;
  height: auto;
  border-radius: 10px;
  /*Фон*/
  background: #5870a7;
  box-shadow: 0px 0px 50px black;
}
</style>
