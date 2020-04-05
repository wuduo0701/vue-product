import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入全局样式表
import './assets/css/global.css'
//导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入iview
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(iView)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
