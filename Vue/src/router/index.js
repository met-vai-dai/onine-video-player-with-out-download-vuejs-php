import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from "./routes.js";
import NProgress from "nprogress";

Vue.use(VueRouter);
Vue.use(NProgress);

const routes = routers;

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {selector: to.hash};
        }
        return {x: 0, y: 0}
    }
});



router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
        NProgress.set(0.4);
    }
    next();
});

router.afterEach(() => {
    NProgress.done();
});






// router.beforeEach((to, from, next) => {
//     console.log(to.meta.title)
//
//     let Title = to.meta.title;
//     process.env.VUE_APP_TITLE=Title;
//
//     next();
// });
export default router
