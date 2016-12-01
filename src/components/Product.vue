<template>
<div>
   <menubar></menubar>
  <div id="header">产品介绍</div>
  <div class="banner">
      <img src="../asserts/images/pi-banner.jpg" alt="">
      <div class="btn btn-2"><kefu></kefu></div>
  </div>
  <ul class="flex menu-list tc celled lh25">
    <li><p class="icon-pi-mkgk"></p><p>模块管控</p></li>
    <li><p class="icon-pi-hxjz"></p><p>核心优势</p></li>
    <li><p class="icon-pi-cpts"></p><p>产品特色</p></li>
  </ul>
  <section class="mt20">
    <div class="list lh20 gltk-list">
      <div class="section-title">管理调控</div>
      <div class="list-item flex" v-for="item in gltkList">
        <div class="w15">
          <div :class="item.className">
          </div>
        </div>
        <div class="list-item-content w65">
          <p class="c0 fs14 fw">{{item.text}}</p>
          <p class="c9 fs12">{{item.subtext}}</p>
        </div>
        <div class="w20">
          <div class="detail"><a v-link="{ path:item.value }">详情</a></div>
        </div>
      </div>
    </div>
  </section>
  <div class="banner">
      <img src="../asserts/images/pi-banner2.jpg" alt="">
  </div>
  <section>
    <div class="list lh25 hxys-list">
    <div class="section-title">核心优势</div>
      <div class="list-item flex" v-for="item in hxysList">
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
  <section class="mt20">
    <div class="list lh20 cpts-list">
    <div class="section-title">产品特色</div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">不限地域</p>
          <p class="c9 fs12">通过互联网使用项目管理软件，突破地域，不管在公司还是实施现场，随时随地进行沟通。</p>
        </div>
        <div class="w30">
          <div class="icon-pi-bxdy"></div>
        </div>
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">成本低廉</p>
          <p class="c9 fs12">通过互联网获得软件服务，超低投入，使用一套专业性的建筑业项目管理软件。</p>
        </div>
        <div class="w30">
          <div class="icon-pi-cbdl"></div>
        </div>
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">操作简单</p>
          <p class="c9 fs12">项目管理软件追求简洁大方精简的用户界面，操作简单易用，无须培训轻松上手方便实用。</p>
        </div>
        <div class="w30">
          <div class="icon-pi-czjd"></div>
        </div>
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">提升品牌</p>
          <p class="c9 fs12">通过项目管理软件，加强客户的沟通和协作，提升服务水平，增强企业品牌和市场竞争力。</p>
        </div>
        <div class="w30">
          <div class="icon-pi-tspp"></div>
        </div>
      </div>
    </div>
  </section>
  <app-footer class="mt20"></app-footer>
</div>
</template>
<script>
import {gltkData,hxysData} from "../asserts/store/data"
export default {
  data(){
    return{
      gltkList:gltkData,
      hxysList:hxysData
    }
  },
  ready(){
  }
}
</script>
