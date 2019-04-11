import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'Styles/reset.css'
import 'Styles/border.css'
import 'Styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
