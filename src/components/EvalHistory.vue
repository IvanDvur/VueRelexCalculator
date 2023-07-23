<!-- HistoryList.vue -->
<template>
  <div>
    <h1>История вычислений</h1>
    <table class="table">
      <thead>
      <tr class="fs-3">
        <th>Дата операции</th>
        <th>Операция</th>
      </tr>
      </thead>
      <tbody>
      <tr class="fs-4" v-for="operation in operations" :key="operation.id">
        <td>{{operation.id}}</td>
        <td>
          <router-link :to="{ name: 'Calculator', query: { expression: operation.expression } }">
            {{ operation.expression }}
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
    <router-link :to="{ name: 'Calculator' }">Назад</router-link>
  </div>
</template>

<script>
export default {
  name: 'EvalHistory',
  computed: {
    operations() {
      return this.$store.state.operations;
    },
  },
};
</script>