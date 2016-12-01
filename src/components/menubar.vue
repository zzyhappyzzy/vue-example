<template>
    <div class="menu_icon icon-menu-a" @click="togglemenu()"></div>
</template>
<script>
export default {
  name: 'menubar',
  data(){
    return {
    }
  },
  methods:{
    togglemenu:function(){
      // 切换后隐藏导航
      this.$dispatch("togglemenu");
    }
  }
}
</script>