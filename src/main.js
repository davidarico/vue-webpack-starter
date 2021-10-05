import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueMaterial from 'vue-material' // im lazy to import individual packages, maybe ill change this one day
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(VueMaterial)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");