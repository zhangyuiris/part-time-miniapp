<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="search-bar">
      <input type="text" placeholder="请输入想加入兼职"/>
    </div>
    
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
  },
  created () {
  }
}
</script>

<style >
.search-wrapper {
  position: relaive;
  position: absolute;
  font-size: 16px;
  color: rgba(0,0,0,.50);
  top: 8px;
  left: 12px;
}
input {
  padding: 4px 12px;
  color: rgba(0,0,0,.70);
  border: 1px solid rgba(0,0,0,.12);
  transition: .15s all ease-in-out;
  background: white;
}

</style>
