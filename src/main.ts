import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

//element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

//vue-router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});

createApp(App).use(ElementPlus).use(router).mount("#app");
