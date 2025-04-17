import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Contents/Home.vue";
import NotFound from "../components/Contents/NotFound.vue";
import Portfolio from "../components/Contents/Portfolio.vue";
import Blog from "../components/Contents/Blog.vue";

const router = createRouter({
    history: createWebHistory("/"),
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
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },

        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        }
    ]
})

export default router