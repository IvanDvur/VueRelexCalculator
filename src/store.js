import {createStore} from 'vuex';
import axios from "axios";

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
        evaluateExpression(state,value) {
            state.expression = value
        },
    },
    actions: {
        async evaluateExpressionAsync({commit,state}) {
            try {
                const response = await axios.post('http://localhost:8081/api/eval', {expression: state.expression})
                    .catch((e) => {
                        console.log(e)
                        commit('evaluateExpression',response.data)
                    });
                const success = response.data;
                if (success !== null) {
                    commit('evaluateExpression', success)
                }
            } catch (e) {
                console.log(e);
            }
        },
    }
});