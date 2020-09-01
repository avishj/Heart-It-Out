import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueScrollTo from "vue-scrollto";

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueScrollTo);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
