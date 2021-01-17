import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/scss/style.scss";
import globalComponents from "@/components/SharedComponents/globalComponents";

Vue.config.productionTip = false; 

// Make Components as a global
globalComponents.forEach(component => {
  Vue.component(component.name, component)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
