import { createRouter, createWebHistory } from "vue-router";
import Signup from "../components/Signup.vue";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Add from "../components/Add.vue";
import Update from "../components/Update.vue";
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
        },
        {
            name: "Update",
            component: Update,
            path: "/update/:id",

        }

    ],
});

export default router;