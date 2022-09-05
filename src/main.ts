import { createApp } from "vue";
import TDesign from "tdesign-vue-next";

import App from "./App.vue";
import router from "@/router";

// 引入组件库全局样式资源
import "tdesign-vue-next/dist/reset.css";

import "tdesign-vue-next/es/style/index.css";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { permissionDirective } from "@/directives/permission";

const pina = createPinia();
pina.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(router);
app.use(TDesign);
app.use(pina);
app.directive("permission", permissionDirective);

app.mount("#app");
