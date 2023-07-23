<template>
  <div class="calculator-container">
    <Display :expression="expression+'' || '0'"></Display>
    <ButtonPanel></ButtonPanel>
  </div>
</template>

<script>
import Display from "@/components/Display";
import ButtonPanel from "@/components/ButtonPanel";
import {useStore} from 'vuex'
import {computed, watch} from "vue";
import {useRouter} from "vue-router/dist/vue-router";

export default {
  name: 'CalculatorComponent',
  components: {ButtonPanel, Display},
  setup() {
    const store = useStore();

    const router = useRouter();

    if (localStorage.getItem('expression') && localStorage.getItem('expression')!== store.state.expression) {
      store.commit('evaluateExpression', localStorage.getItem('expression'));
    }

    const expression = computed(() => store.state.expression);

    watch(expression, (newValue) => {
      localStorage.setItem('expression', newValue);
    });

    // Получаем значение переданного выражения из параметров маршрута и обновляем состояние хранилища
    if (router.currentRoute.value.query.expression) {
      console.log(expression)
      store.commit('clearExpression')
      store.commit('updateExpression', router.currentRoute.value.query.expression);
    }

    return{
      expression
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
