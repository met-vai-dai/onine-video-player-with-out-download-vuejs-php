export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home/Home.vue')
    },
    {
        path:'/player/',
        name: 'Player',
        component: () => import('../views/Player/Player')
    },
    {
        path: '*',
        name: 'Error_404',
        component: () => import('../views/Errors/Error_404.vue')
    },

]