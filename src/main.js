import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/home/main',
      'pages/user/main',
      'pages/publish/main'],
    window: {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#51b9ca',
      'navigationBarTitleText': 'SHU兼职',
      'navigationBarTextStyle': 'white'
    },
    tabBar: {
      'backgroundColor': '#ffffff',
      'color': '#8a8a8a',
      'selectedColor': '#51b9ca',
      'borderStyle': '#5bc9aa',
      'list': [
        {
          'selectedIconPath': 'static/home.png',
          'iconPath': 'static/homeFade.png',
          'pagePath': 'pages/home/main',
          'text': '首页'
        },
        {
          'selectedIconPath': 'static/user.png',
          'iconPath': 'static/userFade.png',
          'pagePath': 'pages/user/main',
          'text': '求职者'
        },
        {
          'selectedIconPath': 'static/message.png',
          'iconPath': 'static/messageFade.png',
          'pagePath': 'pages/publish/main',
          'text': '发布者'
        }
      ]
    }
  }
}
