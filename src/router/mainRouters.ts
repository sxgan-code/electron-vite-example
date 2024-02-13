import {RouteRecordRaw} from "vue-router";


const mainRouters: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'root',
        redirect: '/main',
    },
    {
        path: '/main',
        name: 'main',
        component: () => import("@/views/MainPage.vue"),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/LoginChildWin.vue"),
    },

    // {
    //     path: '/main',
    //     name: 'Main',
    //     component: () => import("@/views/MainPage.vue"),
    //     children: [
    //         {
    //             path: 'MusicPavilion/:songListId',
    //             name: 'MusicPavilion',
    //             // @ts-ignore
    //             components: {
    //                 mainHeader: () => import("@/components/common/MainHeader.vue"),
    //                 contentMain: () => import("@/components/ContentMain.vue"),
    //             },
    //
    //         },
    //
    //     ]
    // },
]
export default mainRouters

