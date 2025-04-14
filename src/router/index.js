import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Index from "@/views/Index.vue";
export const constantRoutes = [
     {
        path:"/",
        redirect: '/index'
    },
    {
        path: '/index',
        name: '测试首页',
        component:()=>import('@/views/Index.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    //history: createWebHashHistory(),
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})
 
export default router