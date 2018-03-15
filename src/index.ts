import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
import VueRouter from "vue-router";

import App from "./components/App.vue";
import OrderListView from "./components/order/OrderListView.vue";
import UserListView from "./components/user/UserListView.vue";
import "./index.css";
import Store from "./models/Store";

Vue.use(ElementUI);
Vue.use(VueRouter);

let store = new Store();
Vue.prototype.$store = store;

const routes = [
    {
        path: "/", component: UserListView,
        meta: {
            pageTitle: "用户管理",
        },
    },
    {
        path: "/orders", component: OrderListView,
        meta: {
            pageTitle: "订单管理",
        },
    },
];
const router = new VueRouter({
    mode: "history",
    routes, // （缩写）相当于 routes: routes
});
router.beforeEach((to, from, next) => {
    // 设定页面title
    document.title = to.meta.pageTitle;
    next();
});

new Vue({
    router,
    el: "#app",
    data() {
        return {
            store: store,
        };
    },
    render: (h) => h(App),
});