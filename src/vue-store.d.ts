import Store from "./models/Store";
declare module 'vue/types/vue' {
    // 声明为 Vue 补充的东西
    interface Vue {
        $store: Store,
    }
}