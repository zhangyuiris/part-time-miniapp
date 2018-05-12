<template lang="pug">
  div
    div.row.justify-center(style="margin-top: 5px;")
      // div.card.col-10
        div.row.main-info
          div.col-2.avatar-wrapper
            img.avatar(src="/static/Smile.png")
          div.col-9.info-wrapper
            div.name kastnerorz
            div.date 2018-5-11
      div.card.col-10
        div.title 推广兼职
        div.tags
          div.tag-wrapper
            span.tag-name 单位：
            span.tag 上海大学开源社区
          div.tag-wrapper
            span.tag-name 兼职时间：
            span.tag 2018-5-13
          div.tag-wrapper
            span.tag-name 工作位置：
            span.tag 上海大学计算机学院
          div.tag-wrapper
            span.tag-name 工资：
            span.tag 120元/3小时
      div.card.col-10
        div.title 工作内容
        div.content 帮忙宣传开源社区活动，帮助更多的人来参加小程序设计大赛
      div.card.col-10(style="margin-bottom: 50px;")
        p.title 联系方式
        div.contact-wrapper
          p.name 18101970000
        

</template>
<script>
export default { }
</script>
<style scoped>

.hr {
  border: 0.5px solid rgba(32, 33, 36, 0.28)
}

.card {
  background-color: white;
  padding: 11px 16px 11px 16px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  border-radius: 8px;
  margin: 0 0 20px 0;
}
.avatar {
  width: 46px;
  height: 46px;
  border-radius: 50%;
}

/* .main-info {
  padding: 11px 16px 0 16px;
}

.contact-info {
  padding: 11px 0 11px 16px;  
} */
.info-wrapper {
  padding: 0 0 0 10px;
}

.name {
  padding-top: 3px;
  font-size: 16px;
}

.date {
  padding-top: 3px;
  color: #888;
  font-size: 14px
}

.title {
  font-size: 17pt;
}

.tags {
  margin-top: 3px;
  flex-direction: row;
  flex-wrap: wrap;
}

.tag-wrapper {
  margin-bottom: 6px;
}

.tag-name {
  font-size: 13px;
  color: #888;
  margin-right: 4px;
}

.tag {
  border-radius: 4px;
  background-color: #51b9ca;
  color: #fff;
  font-size: 13px;
  height: 16px;
  padding: 3px;
  margin: 0 3px 0 0;
}

.content {
  font-size: 14px;
}

.image-wrapper {
  justify-content: center;
  display: flex;
  margin: 10px 0 10px 0;
}

.imageItem {
  width: 90%;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: #7eb3ec;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
}

/* .bottom-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
} */

.bottom-button {
  color: #fff;
  font-size: 14px;
}
</style>
