import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Contents/Home.vue";
import NotFound from "../components/Contents/NotFound.vue";

const router = createRouter({
    history: createWebHistory("localhost"),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: NotFound
        },
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})

export default router