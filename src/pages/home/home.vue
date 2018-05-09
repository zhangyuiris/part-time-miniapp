<template lang="pug">
div.container
  div.header
    input.searchInput(type="text" name="searchJob" methods="post")
    
  
</view>


</template>

<script>
// Use Vuex
export default {
  computed: {
  },
  methods: {
  }
}

</script>
<style scoped>
.header {
  background-color: #ccc;
  padding: 8px 30px 8px 30px
}

.searchInput {
  background-color: white;
  height:25px;
  width:250px;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding-left:5px;
  -webkit-box-shadow: inset 0 1rpx 1rpx rgba(0,0,0,.075);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
}

.container {
  background-color: #f6f8f9;
}

.jobBar {
  padding: 40rpx;
  height: 200rpx;
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
  color: #ff2525;
  font-size:12px;
}
</style>
