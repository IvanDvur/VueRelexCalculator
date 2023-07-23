import { createRouter, createWebHistory } from "vue-router";
import CalculatorComponent from "@/components/Calculator.vue";
import EvalHistory from "@/components/EvalHistory";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Calculator",
            component: CalculatorComponent,
        },
        {
            path: "/history",
            name: "EvalHistory",
            component: EvalHistory,
        },
    ]
})

