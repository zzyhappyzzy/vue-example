<template>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
    <div class="menu_icon icon" @click="toggleMenu">
      
    </div>
        {{title}}    
    </div>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
  <menu :title.sync="title" :slideout.sync="slideout" ></menu>
</template>
<script>
import Menu from './Menu.vue'
import Slideout from 'Slideout'
export default {
  name: 'App',
  data(){
    return{
      showloading:false,
      title:"建管科技",
      showmenu:false,
      slideout:{}
    }
  },
  ready(){
  this.slideout = new Slideout({
        'panel': document.getElementById('wrapper'),
        'menu': document.getElementById('menu'),
        'padding': 120,
        'tolerance': 70,
        'touch':false
      });
  },
  methods:{
    toggleMenu(){
      this.slideout.toggle()
    }
  },
  components: {
    Menu
  }
}
</script>
<style lang="stylus">
  @import "../asserts/styles/index.styl"
</style>
