import Vue from 'vue'
import App from './register'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '注册'
  }
}
