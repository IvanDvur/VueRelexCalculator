import { createStore } from 'vuex';

export default createStore({
    state: {
        expression: '',
    },
    mutations: {
        updateExpression(state, value) {
            state.expression += value;
        },
        clearExpression(state) {
            state.expression = '';
        },
        evaluateExpression(state) {
            state.expression = eval(state.expression);
        },
    },
});