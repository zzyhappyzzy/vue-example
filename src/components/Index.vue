<template>
<div>  
  <div class="menu_icon icon-menu"></div>
  <div class="banner">
      <img src="../asserts/images/index-banner.jpg" alt="">
  </div>
  <ul class="flex menu-list tc celled lh25">
    <li><p class="icon-index-zyfw"></p><p>专业服务</p></li>
    <li><p class="icon-index-ydbg"></p><p>办公更快</p></li>
    <li><p class="icon-index-bgfy"></p><p>移动办公</p></li>
    <li><p class="icon-index-bggk"></p><p>办公费用</p></li> 
  </ul>
  <section class="mt20">
    <div class="list lh20 gltk-list">
    <div class="section-title">管理调控</div>
    <div class="list-item flex" v-for="item in gltkList">
    <div class="w20">
      <div :class="item.className">
      </div>
    </div>
      <div class="list-item-content w60">
        <p class="c0 fs14 fw">{{item.text}}</p>
        <p class="c9 fs12">{{item.subtext}}</p>
      </div>
      <div class="w20">
        <div class="detail"><a v-link="{ path:item.value }">详情</a></div>
      </div>
    </div>
    <div class="list-item more tc c9"> 查看更多<p class="icon-ckgd"></p></div>
    </div>
  </section>
  <swiper v-ref:swiper
        direction="horizontal"
        :performance-mode="false"
        :pagination-visible="true">
    <img src="../asserts/images/index-banner-1.jpg" alt="">
    <img src="../asserts/images/index-banner-2.jpg" alt="">
    <img src="../asserts/images/index-banner-3.jpg" alt="">
  </swiper>
  <section>
    <div class="list lh25 hxys-list">
    <div class="section-title lh40">核心优势</div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">节约企业成本</p>
          <p class="c9 fs12">企业根据自己的需求支付给服务提供商一定的
费用，没有任何与软件相关的安装或维护费用。</p>
        </div>
        <div class="w30">
          <div class="icon-index-jyqtcb"></div>
        </div>
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">权限控制机制和流程审批机制</p>
          <p class="c9 fs12">权限控制机制，保证数据的隔离性和安全性；
而流程审批机制增强了审批严密性和灵活性。</p>
        </div>
        <div class="w30">
          <div class="icon-index-qxkz"></div>
        </div>
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">远程在线式实施和售后服务能力</p>
          <p class="c9 fs12">在使用过程中碰到的各式问题，都可以联系在
线客服帮助解决，而且不需要支付任何费用。</p>
        </div>
        <div class="w30">
          <div class="icon-index-gxhpz"></div>
        </div>
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">个性化配置功能</p>
          <p class="c9 fs12">用户可自行调整审批流程的各项配置，如：所
有数据列表导出EXCEL文件、数据回收……</p>
        </div>
        <div class="w30">
          <div class="icon-index-yczxs"></div>
        </div>
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">软件更新升级免费且更人性化</p>
          <p class="c9 fs12">升级维护的过程对用户是完全透明的，丝毫不会
影响用户的正常使用。</p>
        </div>
        <div class="w30">
          <div class="icon-index-rjgx"></div>
        </div>
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">强大的技术团队</p>
          <p class="c9 fs12">我们将尽所能为客户创造出最实用的管理平台
和最高效服务平台。</p>
        </div>
        <div class="w30">
          <div class="icon-index-jstd"></div>
        </div>
      </div>
      <div class="list-item more tc c9">查看更多<p class="icon-ckgd"></p></div>
    </div>
  </section>
    <app-footer></app-footer>
  </div>  
</template>
<script>
import Swiper from 'vue-swiper'
import {gltkData} from "../asserts/store/data"
export default {
  data(){
    return{
      gltkList:gltkData
    }
  },
  ready(){
  },
  components: {Swiper}
}
</script>
