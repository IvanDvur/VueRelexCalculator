<template>
  <div class="button-panel">
    <Button btn-value="1"></Button>
    <Button btn-value="2"></Button>
    <Button btn-value="3"></Button>
    <Button btn-value="/"></Button>
    <Button btn-value="C" class="item_C"></Button>
    <Button btn-value="4"></Button>
    <Button btn-value="5"></Button>
    <Button btn-value="6"></Button>
    <Button btn-value="*"></Button>
    <Button btn-value="7"></Button>
    <Button btn-value="8"></Button>
    <Button btn-value="9"></Button>
    <Button btn-value="+"></Button>
    <Button btn-value="=" class="item_equals"></Button>
    <Button btn-value="0" class="item_zero"></Button>
    <Button btn-value="."></Button>
    <Button btn-value="-"></Button>
    <router-link :to="{ name: 'EvalHistory' }" class="historyButton">
      <h3 class="text-white">Посмотреть историю</h3>
    </router-link>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: 'ButtonPanel',
  components: {Button},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-panel {
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 10px;
}

.item_C {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 5;
}

.item_equals {
  grid-row-start: 3;
  grid-row-end: 5;
  grid-column-start: 5;
}
.historyButton{
  grid-row: 5/5;
  grid-column: 1/6;
  min-height: 75px;
  background: transparent;
  border-radius: 5px;
  border: 3px solid orange;
  box-shadow: 0 0 5px black;
}

.item_zero {
  grid-column-start: 1;
  grid-column-end: 3;
}

</style>