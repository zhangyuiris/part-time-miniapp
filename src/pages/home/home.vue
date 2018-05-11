<template lang="pug">
div.container
  div.header
    input.searchInput(type="text" name="searchJob" methods="post")
  div.jobBar.shadow
    div.row
      div.col-2
        img.vertical-middle(src="/static/Smile.png" style="width:80rpx;height:80rpx;padding-top:10rpx;")
      div.col-10(style="padding-right:0px")
        div.row
          div.col-7
            p 上海轩影影城
          div.col-3
            p.price 120元/3小时
        div.row(style="padding-top:10rpx;")
          div.col-12
            span.time  5.12日下午3点
        div.cube.row
          div.col-7
            img(src="/static/clock.png" style="width:30rpx;height:30rpx;")
            span.time  发布于5.6
          div.col-3
            img(src="/static/map.png" style="width:30rpx;height:30rpx;")
            span.place  宝山区
    
        


</view>
</template>

<script>
// Use Vuex
export default {
  data: [
    {
      company: '',
      place: '',
      time: '',
      money: '',
      description: '',
      phone: ''
    }
  ],
  created: function () {
  },
  watch: {
  },
  methods: {
  }
}

</script>
<style scoped>
.shadow {
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
}
.line {
  border-bottom: 1rpx solid rgba(0,0,0,0.08);
}

.header {
  padding: 8px 10px 8px 30px;
  background-color: #51b9ca;
}

.searchInput {
  background-color: white;
  height:25px;
  width:250px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 12px;
  padding-left:10px;
  -webkit-box-shadow: inset 0 1rpx 1rpx rgba(0,0,0,.075);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
}

.place {
  font-size: 16px;
  color:#999;
}

.time{
  font-size: 14px;
  color:#999;
}

.cube {
  padding-top: 20rpx;
}

.container {
  background-color: #f8f8f8;
}

.jobBar {
  padding: 40rpx;
  height: 180rpx;
  background-color: white;
  margin-bottom: 28rpx;
}

.userinfo {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
}  
  
.userinfo-avatar {  
  width: 128rpx;  
  height: 128rpx;  
  margin: 20rpx;  
  border-radius: 50%;  
}  

.info {
  padding-left: 40rpx;
}
.jobName { 
  padding-top: 40rpx; 
  padding-bottom: 40rpx;
  width: 600rpx; 
  font-size: 14px;
}  

.userinfo-province {  
  width: 100%;
  font-size: 12px;
  color: #aaa;  
}  

.timeRight {
  font-size: 14px;
  color: #51b9ca;
  padding-right: 40rpx;
}

.price {
  color: #ff6666;
  font-size:12px;
  padding-top:10rpx;
}
</style>
