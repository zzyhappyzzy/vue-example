<template>
<ul class="menu" id="menu">
  <li v-for="item in menus" @click="handle($index)" :class="[cur==$index?'active':'']"><a v-link="{ path: item.key }"><span :class="item.className"></span>{{item.name}}</a></li>
</ul>
</template>
<script>
    import {
        MenuData
    } from "../asserts/store/data"
    export default {
        name: 'Menu',
        data() {
            return {
                menus: MenuData,
                cur: 0
            }
        },
        methods: {
            handle: function(index) {
                // 切换后隐藏导航
                this.$dispatch("reset");
                this.cur = index
            }
        }
    }
</script>