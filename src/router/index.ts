import authRouters from "@/router/authRouters";
import mainRouters from "@/router/mainRouters";
import {createRouter, createWebHashHistory, Router} from "vue-router";

const router: Router = createRouter({
    // Electron中路由方式必须使用Hash方式
    history: createWebHashHistory(),
    routes: [
        ...authRouters,
        ...mainRouters
    ],
    /* 禁用鼠标侧键回退功能 */
    scrollBehavior: () => {
        history.pushState(null, '', document.URL)
    }
})

export default router