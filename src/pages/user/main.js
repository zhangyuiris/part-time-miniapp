import Vue from 'vue'
import App from './user'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '我加入过的兼职'
  }
}
