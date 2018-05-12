<template lang="pug">
  div(class="container" @click="clickHandle('test click', $event)")
    //- img(@click="onAvatarClick",style="height:1.5rem;width:1.5rem;margin:auto;display:block;" class="userinfo-avatar" v-if="user.avatarURL" :src="user.avatarURL" background-size="cover")
    div.form(style="padding:10px;display:flex;flex-direction:column;")
      div.box-form
        p.title 用户名
        input.title-form
      div.box-form
        p.title 密码
        input.title-form
      div.box-form
        p.title 再次输入密码
        input.title-form
      div.box-form
        p.title 手机号
        input.title-form
      div.box-form
        button(style="vertical-align: middle;background-color:#51b9ca;color:white" ) 注册
</template>

<script>
import card from '@/components/card'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      courses: [],
      isLogin: false,
      tabIndex: 0,
      items: [
        {
          name: 'lost',
          checked: null,
          value: '我丢了物品'
        },
        {
          name: 'found',
          checked: null,
          value: '我拾获物品'
        }
      ]
    }
  },
  computed: mapState(['user']),
  components: {
    card
  },
  methods: {
    onAddClick () {
      // todo
    },
    onLocationClick () {
      wx.chooseLocation({
        success: detail => {
          console.log('success')
          console.log(detail)
        }
      })
    }
  },
  created () {}
}
</script>

<style>
.form > div {
  /* padding-top: 10px; */
  margin-bottom: 5px;
}
.avatar {
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  margin: auto;
  display: block;
}
.assets-form {
  padding-top: 10px;
  font-size: 1rem;
  align-items: center;
  /* padding-bottom: 10px; */
  background-color: #fff;
  box-shadow: 0 5px 5px #ccd8e2;
  border-radius: 10px;
}
.assets-form > div :last-child {
  text-align: right;
  /* padding-right:10px; */
}
.assets-form > div {
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  height: 2rem;
  border-bottom: 1px solid #ddd;
}
.assets-form div div:first-of-type {
  color: #aaa;
}
.img-form {
  /* height: 80px; */
  font-size: 0.5rem;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 5px 5px #ccd8e2;
  border-radius: 10px;
}
.box-form {
  padding-bottom: 10px;
}
.title {
  padding-left: 10px;
}
.title-form {
  height: 1rem;
  font-size: 0.5rem;
  padding-left: 10px;
  background-color: #fff;
  box-shadow: 0 5rpx 5rpx #ccd8e2;
  border-radius: 10rpx;
}
.description-form {
  height: 2rem;
  width: 100%;
  font-size: 0.5rem;
  padding-top: 10px;
  padding-left: 10px;
  background-color: #fff;
  box-shadow: 0 5rpx 5rpx #ccd8e2;
  border-radius: 10rpx;
  box-sizing: border-box;
}
.container {
  /* padding: 10px; */
  /* padding-right: 10px; */
  min-height: 100vh;
  padding-bottom: 10px;
  /* padding-top: 10px; */
  box-sizing: border-box;
  background: #eee;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
