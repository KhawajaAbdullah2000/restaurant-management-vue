import { createRouter, createWebHistory } from "vue-router";
// import Signup from '../views/HomeView.vue'
import Signup from "../components/Signup.vue";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Add from "../components/Add.vue";
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/signup",
            name: "Signup",
            component: Signup,
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () =>
            //     import ('../views/AboutView.vue')
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path: "/add",
            name: "Add",
            component: Add,
        }

    ],
});

export default router;