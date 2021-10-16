import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vant/lib/index.css";
import "@/common/styles/index.less";
import { Tabbar, TabbarItem } from "vant";
import { NavBar } from "vant";
import { Grid, GridItem } from "vant";
import "lib-flexible/flexible.js";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);

// 修正click事件300ms延迟
import fastclick from "fastclick";
fastclick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
