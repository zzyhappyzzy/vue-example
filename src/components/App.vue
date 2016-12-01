<template>
  <div class="wrapper">
    <!-- header -->
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
  <menu :title.sync="title"></menu>
  <div class="masker" v-show="showmasker" @click="reset()"></div>
  <div class="share-center c1 fs18" v-show="showtip">
    当前页面不支持直接打开QQ<br/>请按照以下操作打开QQ<br/>
     1,选择右上角的菜单按钮<br/>2,选择浏览器打开
  </div>
</template>
<script>
import Menu from './Menu.vue'
import Slideout from 'Slideout'
export default {
  name: 'App',
  data(){
    return{
      slideout:{},
      showmasker:false,
      showtip:false
    }
  },
  ready(){
    var vm=this;
    vm.slideout = new Slideout({
        'panel': document.querySelector('.wrapper'),
        'menu': document.getElementById('menu'),
        'padding': 110,
        'tolerance': 70,
        'touch':false
      });
      vm.$on("togglemenu",function(){
         vm.slideout.toggle()
         if(vm.slideout.isOpen()){
          vm.showmasker=true;
         }else{
          vm.showmasker=false;
         }
      });
      vm.$on("reset",function(){
         vm.slideout.close();
         vm.showmasker=false;
         vm.showtip=false;
      });
      vm.$on("showtip",function(){
         vm.showtip=true;
         vm.showmasker=true;
      });
      vm.$on("closetip",function(){
         vm.showtip=false;
      });
  },
  methods:{
    reset:function(){
      // 切换后隐藏导航
      this.$dispatch("reset");
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
