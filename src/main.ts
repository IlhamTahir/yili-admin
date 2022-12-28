import { createApp, h } from "vue";
import TDesign from "tdesign-vue-next/esm";

import App from "./App.vue";
import router from "@/router";

// 引入组件库全局样式资源
import "tdesign-vue-next/esm/style/index.js";
import "@/assets/less/base.less";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { permissionDirective } from "@/directives/permission";
import { plugin } from "echarts-for-vue";
import * as echarts from "echarts";
import { setupI18n } from "@/plugins/i18n";

const setupAll = async () => {
  const app = createApp(App);

  const pina = createPinia();

  pina.use(piniaPluginPersistedstate);
  app.use(pina);

  await setupI18n(app);

  app.use(router);
  app.use(TDesign);

  app.use(plugin, { echarts, h });
  app.directive("permission", permissionDirective);
  app.mount("#app");
};
setupAll();
