<template>
<div>  
   <menubar></menubar>
  <div id="header">产品模式</div>
  <div class="banner">
      <img src="../asserts/images/pm-banner.jpg" alt="">
      <div class="btn btn-3"><kefu></kefu></div>
  </div>
  <section>
    <div class="list lh25 hxys-list">
    <div class="section-title">为何租用</div>
      <div class="list-item flex" v-for="item in whzyList">
        <div class="w15">
          <div :class="item.className"></div>
        </div>
        <div class="list-item-content w65">
          <p class="c0 fs14 fw">{{item.text}}</p>
       </div>
        <div class="w20">
         <div class="detail"><a v-link="{ path:item.value }">详情</a></div>
        </div>
      </div>
    </div>
  </section>
  <div class="banner">
      <img src="../asserts/images/pm-banner2.jpg" alt="">
  </div>
  <section>
    <div class="list lh20 msdb-list">
    <div class="section-title">模式对比</div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">使用前</p>
          <p class="c9 fs12">在使用前，传统模式部署和培训周期长，购买成本高，还需要自己构建IT系统，一次性投入大，有风险；而租用模式则相比较来说，部署和培训周期短，一般半天即可，用户只需使用简单的PC或移动端设备，且租赁费用低，低投入、零风险、高效益。</p>
        </div>
        <div class="w30">
          <div class="icon-pm-syq"></div>
        </div>
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">使用中</p>
          <p class="c9 fs12">在使用过程中，传统模式必须在固定的设备上使用，和服务商之间是买卖关系，还需自己培养专人维护系统，更方面更是非常受限；而租用模式只要有Internet接入的地方都可使用，和我们是服务关系，我们提供专业的维护和服务，用户可根据自己的需求定购，选择更自由。</p>
        </div>
        <div class="w30">
          <div class="icon-pm-syz"></div>
        </div>
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">使用后</p>
          <p class="c9 fs12">在使用后，传统模式版本更新的周期长，退出时往往会卡机或死机；而我们是通过互联网随时更新使用版本，退出无障碍。</p>
        </div>
        <div class="w30">
          <div class="icon-pm-syh"></div>
        </div>
      </div>
    </div>
  </section>
    <app-footer class="mt20"></app-footer>
  </div>
</template>
<script>
import {whzyData} from "../asserts/store/data"
export default {
  data(){
    return{
      whzyList:whzyData
    }
  },
  ready(){
  }
}
</script>
