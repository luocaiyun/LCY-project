import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./router"


Vue.use(VueRouter);
//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
// import Vue from "vue"
// import App from "./App"


// let bus = new Vue();

// Vue.prototype.$bus = bus;


new Vue({
  el:"#app",
  router,
  render(h){
    return h(App)
  }
});

