<template>
  <div class="button" @click="handleClick">
    <h2 class="text-white m-0">{{btnValue}}</h2>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Button',
  props: {
    btnValue: String
  },
  methods:{
    handleClick(){
      switch (this.btnValue){
        case 'C':
          this.$emit('clear-click','');
          break;
        case '=':
          this.$emit('eval-click');
          break;
        default:
          this.$emit('btn-click',this.btnValue);
          break;
      }
    },
  }
}
</script>

<style scoped lang="scss">
.button {
  border-radius: 5px;
  border: 3px solid #4ab572; //контур кнопок
  min-width: 75px;
  min-height: 75px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px black; //тень кнопок
  @media (max-width: 400px) {
    min-width: 50px;
    min-height: 50px;
  }

  &:hover {
    background: #c5883a; //цвет при наведении на кнопку
    transition: ease-in 0.2s;
  }
}
</style>

