import {createStore} from 'vuex';
import axios from "axios";
import moment from "moment";

export default createStore({
    state: {
        expression: '',
        operations: [],
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
        addToHistory(state,expression){
            state.operations.unshift({id: moment().format('DD-MM-YYYY HH:mm:ss'),expression})
        },
        clearLocalStorage(){
            localStorage.setItem('expression','')
        }
    },
    plugins: [
        (store) => {
            store.subscribe((mutation, state) => {
                localStorage.setItem('expression', state.expression);
            });
        },
    ],
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
                    console.log("SUCCESS")
                    commit('addToHistory',state.expression)
                    console.log(state.operations.toString())
                    commit('evaluateExpression', success)
                }
            } catch (e) {
                console.log(e);
            }
        },
    }
});