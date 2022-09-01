import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';

import App from './App.vue'
import router from "@/router";

// 引入组件库全局样式资源
import 'tdesign-vue-next/dist/reset.css';

import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App)
app.use(router)
app.use(TDesign)
app.mount('#app')
