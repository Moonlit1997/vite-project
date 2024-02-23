import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

//element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

//vue-router
const router = createRouter({
  history: createWebHistory(),
  router: [],
});

createApp(App).use(ElementPlus).use(router).mount("#app");
