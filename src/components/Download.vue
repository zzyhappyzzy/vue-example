<template>
<div class="wrapper lh30">
  <div class="container celled">
    <div class="pic">
      <img src="../asserts/images/icon_download.jpg" alt="">
      <div class="btn-wrapper c1">
        <div class="android">
          <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.jianguanoa.jgapp" target="_blank">
            <div class="btn c1">
              <span class="android_icon"></span>Android下载
            </div>
          </a>
        </div>
        
        <div class="ios mt30">
        <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.jianguanoa.jgapp" target="_blank">
          <div class="btn c1"><span class="ios_icon"></span>App Store下载</div>
         </a>
         </div>
      </div>
    </div>
  </div>
  <div class="container fs14">
    <div class="tip tc">
        <p class="c6">[适用人群]</p>
        <p class="c9">项目实施人员，客服人员，各公司系统管理员及普通员工</p>
    </div>
    <ul class="download-info c6">
      <li class="download-item celled flex mt10" v-for="item in Data">
        <div class="w25" :class="item.className">
        </div>
        <div class="w75">
          <p class="fs16 c0 fw">{{item.text}}</p>
          <p class="lh20">{{item.tip}}</p>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {DowndataData} from "../asserts/store/data"
export default {
  name: 'Download',
  data () {
    return {
      Data: DowndataData.list,
    }
  }
}
</script>

<style lang="stylus">
.pic
  position relative
  .btn-wrapper
    position absolute
    top 110px
    right 30px
    .btn
      position relative
      width 150px
      height 30px
      border-radius: 5px
      background-color: #4cc31c
      text-indent 3em
    .android_icon,.ios_icon
      position absolute
      top 0
      left: 5px;
      width 30px
      height 30px
    .android_tip,.ios_tip
      margin-top 10px
.download-item
  padding 10px 0
  .w75
    padding 10px 0
@media screen and (min-width: 320px)and (max-width: 375px){
  .pic .btn-wrapper {
      top 100px
      right 15px
      font-size 12px
  }
  .pic .btn-wrapper .android_tip,.pic .btn-wrapper .ios_tip{
    margin-top 0
  }

}
@media screen and (max-width: 320px){
  .pic .btn-wrapper {
      top 80px
      right 5px
  }
  .pic .btn-wrapper .android_icon,.pic .btn-wrapper .ios_icon {
      left:-3px
      top:-3px
  }
  .pic .btn-wrapper .btn{
      width 110px
      height 25px
      text-indent 2em
      line-height 25px
      font-size 12px
    }
  .pic .btn-wrapper .android_tip,.pic .btn-wrapper .ios_tip{
    margin-top 0
  }

}
</style>
