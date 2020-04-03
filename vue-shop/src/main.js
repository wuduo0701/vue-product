import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式表
import './assets/css/global.css'
//导入axios
import axios from 'axios'
// axios.defaults.baseURL
// Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
