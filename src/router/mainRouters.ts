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
    {
        path: '/main/iconfont',
        name: 'iconfont',
        component: () => import("@/views/iconfont.vue"),
    },
    {
        path: '/main/huaweiicon',
        name: 'huaweiicon',
        component: () => import("@/views/huaweiicon.vue"),
    },
    {
        path: '/main/myiconfont',
        name: 'myiconfont',
        component: () => import("@/views/myiconfont.vue"),
    },
    {
        path: '/main/svgplugin',
        name: 'svgplugin',
        component: () => import("@/views/svgplugin.vue"),
    },
    {
        path: '/main/imglazyload',
        name: 'imglazyload',
        component: () => import("@/views/imglazyload.vue"),
    },
    {
        path: '/electron/ipc',
        name: 'electron-ipc',
        component: () => import("@/views/ElectronIpc.vue"),
    },
    {
        path: '/main/special-effect',
        name: 'special-effect',
        component: () => import("@/views/SpecialEffect.vue"),
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

