import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import "normalize.css";
import "element-plus/dist/index.css";
import 'element-plus/theme-chalk/src/index.scss'
import "@czy/ui-config/dist/style.css";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { router } from "./router";

const app = createApp(App);
const pinia = createPinia();

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.use(pinia);
app.use(router)
app.mount("#app");
