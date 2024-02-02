import authRouters from "@/router/authRouters.ts";
import mainRouters from "@/router/mainRouters.ts";
import {createRouter, createWebHashHistory, Router} from "vue-router";

const router: Router = createRouter({
    // Electron中路由方式必须使用Hash方式
    history: createWebHashHistory(),
    routes: [
        ...authRouters,
        ...mainRouters
    ],
})

export default router