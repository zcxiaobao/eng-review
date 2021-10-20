import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vant/lib/index.css";
import "@/common/styles/index.less";
import "lib-flexible/flexible.js";

import {
  Tabbar,
  TabbarItem,
  NavBar,
  Grid,
  GridItem,
  Switch,
  Field,
  Form,
  NoticeBar,
  Button,
  Checkbox,
  CheckboxGroup,
  Progress
} from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Switch);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NoticeBar);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Progress);

// 修正click事件300ms延迟
import fastclick from "fastclick";
fastclick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
