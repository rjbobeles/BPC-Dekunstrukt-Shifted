import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import lax from "lax.js";

Vue.config.productionTip = false;
Vue.prototype.$lax = lax;
Vue.prototype.$test = "Hello World";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
