import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

// 创建 vue 实例
const app = createApp(App);

// 挂载路由
app.use(router);

// 挂载 pinia
app.use(store);

app.mount("#app");
