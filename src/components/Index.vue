<template>
<div class="banner panes wrapper">
  <div class="swiper-item pane" v-for="img in imglist" :class="'bg'+($index+1)">
    <img v-bind:src="img.src" alt="" :id="img.id">
  </div>
</div>
</template>
<script>
import HammerCarousel from '../asserts/lib/HammerCarousel'
export default {
  name: 'Index',
  data(){
    return{
      imglist:[{
        src:"./src/asserts/images/index1.jpg",
        id:"auto"
      },{
        src:"./src/asserts/images/index2.jpg",
        id:"pan-y"
      },{
        src:"./src/asserts/images/index3.jpg",
        id:"pan-x"
      },{
        src:"./src/asserts/images/index4.jpg",
        id:"none"
      },{
        src:"./src/asserts/images/index5.jpg",
        id:"pan-x pan-y"
      }]
    }
  },
    ready(){
        var outer = new HammerCarousel(document.querySelector(".panes.wrapper"));
 }
}
</script>
<style lang="stylus">
.panes.animate
  .pane
    transition: all .3s
    -webkit-transition: all .3s;
.banner
  position absolute
  top 50px
  bottom 0
  width 100%
  overflow hidden
  .swiper-item
    width 100%
    height 100%
    position absolute
    left 0
    top 0
    img
      width 100%
      height 100%
      -webkit-user-select: none
      -webkit-user-drag: none;
</style>
