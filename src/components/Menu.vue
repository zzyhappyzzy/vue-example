<template>
<ul class="menu" id="menu">
  <li v-for="item in menus" @click="handle()" :class="[$route.name==item.header_text?'active':'']"><a v-link="{ path: item.key }"><span :class="item.className"></span>{{item.name}}</a></li>
</ul>
</template>
<script>
import {MenuData} from "../asserts/store/data"
export default {
  name: 'Menu',
  data(){
    return {
    menus: MenuData
    }
  },
  methods:{
    handle:function(){
      // 切换后隐藏导航
      this.$dispatch("reset");
    }
  }
}
</script>