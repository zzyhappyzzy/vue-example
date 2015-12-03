<template>
<ul class="menu" id="menu">
  <li v-for="item in menus" @click="handle(item)" :class="[$route.name==item.header_text?'active':'']"><a v-link="{ path: item.key }"><span :class="item.className"></span>{{item.name}}</a></li>
</ul>
</template>
<script>
import {MenuData} from "../asserts/store/data"
export default {
  name: 'Menu',
  props: ["slideout"],
  data(){
    return {
    menus: MenuData
    }
  },
  methods:{
    handle:function(item){
      // 切换后隐藏导航
      this.slideout.close()
    }
  }
}
</script>

<style lang="stylus">
.slideout-open
  .menu
    display block
.menu
  background-color #fff
  text-align center
  width 10em
  position absolute
  left 0
  top 0
  bottom 0
  display none
  li
    position relative
    font-size 16px
    line-height:50px
    border-bottom:1px solid #d3e1ea
    background-color #f0f5f9
    a
      width 100%
      height 100%
      text-indent 2em
      display block
    &.active
      background-color #1f2022
      border-left 2px solid #3abafb
      a
        color #3abafb
</style>
