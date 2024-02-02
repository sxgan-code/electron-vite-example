import {RouteRecordRaw} from "vue-router";

const authRouters: RouteRecordRaw[] = [
    {
        path: '/auth',
        name: 'Auth',
        component: () => import("@/views/auth.vue"),
        children: [
            {
                // 注意子集的path不要在最前面加 /
                path: 'signin',
                name: 'signin',
                component: () => import("@/components/auth/signin.vue"),
            },
            {
                path: 'signup',
                name: 'signup',
                component: () => import("@/components/auth/signup.vue"),
            },
        ]
    },
]
export default authRouters