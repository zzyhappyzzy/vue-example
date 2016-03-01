<template>
<div class="product-view">
  <ul class="pro-menu">
  <li v-for="item in Data.list" @click="showdetail(item,$index)" :class="{'active':curindex==$index}">
  <p :class="item.className"></p>
    {{item.text}}
  </li>
  </ul>
  <div class="pro-detail" v-show="list.length>0">
      <span>[主要功能]</span>
    <ul>
      <li v-for="info in list">
      <p><span class="item-num">{{$index+1}}</span>{{info.title}}</p>
      <p class="tip">{{info.tip}}</p>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import {ProductData} from "../asserts/store/data"
export default {
  name: 'Product',
  data () {
    return {
      Data:ProductData,
      curindex:0,
      list:[]
    }
  },
  ready(){
    this.list=this.Data.list[0].list;
    this.curindex=0
  },
  methods:{
    showdetail(item,index){
      this.curindex=index
      this.list=item.list
    }
  }
}
</script>

<style lang="stylus">
  .pro-menu
    text-align center
    li
      width 100px
      height 100px
      display inline-block
      padding 10px 0
      box-sizing border-box
      border 1px solid #ccc
      border-left none
      margin-top 2px
      &.active
        color #3bbcff
        background-color #1f2022
        border 1px solid #3bbcff
        box-shadow 1px 0 0 #3bbcff
  .pro-detail
    padding 0 20px
    margin-top 10px
    line-height 30px
    li
      border-bottom 1px dashed #ccc
      padding 5px 0
    .item-num
      color #747474
      border 1px solid #ccc
      border-radius 8px
      margin-right 10px
      display inline-block
      width 1.5em
      height 1.5em
      line-height 18px
      text-align center
      vertical-align middle
    .tip
      text-indent 2em


</style>
