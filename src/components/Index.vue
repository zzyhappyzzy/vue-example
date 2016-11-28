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
    <div class="list-item flex">
    <div class="w20">
      <div class="icon-index-tbgcgk">
      </div>
    </div>
      <div class="list-item-content w80">
        <p class="c0 fs14 fw">投标过程管控</p>
        <p class="c9 fs12">轻松查看所有与投标相关流程的运行情况</p>
      </div>
    </div>
    <div class="list-item flex">
    <div class="w20">
      <div class="icon-index-fgs">
      </div>
    </div>
      <div class="list-item-content w80">
        <p class="c0 fs14 fw">分公司管控</p>
        <p class="c9 fs12">调控分公司的合同、收款、证件业绩等材料</p>
      </div>
    </div>
    <div class="list-item flex">
    <div class="w20">
      <div class="icon-index-zj">
      </div>
    </div>
      <div class="list-item-content w80">
        <p class="c0 fs14 fw">证件、业绩等资源管控</p>
        <p class="c9 fs12">系统管理所有证件，业绩，印章等材料</p>
      </div>
    </div>
    <div class="list-item flex">
    <div class="w20">
      <div class="icon-index-gcht">
      </div>
    </div>
      <div class="list-item-content w80">
        <p class="c0 fs14 fw">工程合同管控</p>
        <p class="c9 fs12">自动统计已收取工程款和工程管理费总额</p>
      </div>
    </div>
    <div class="list-item flex">
    <div class="w20">
      <div class="icon-index-rlzy">
      </div>
    </div>
      <div class="list-item-content w80">
        <p class="c0 fs14 fw">人力资源管控</p>
        <p class="c9 fs12">一键了解人员动态及工作内容成果</p>
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
export default {
  data(){
    return{
    }
  },
  ready(){
  },
  methods: {
        onSlideChangeStart (currentPage) {
            console.log('onSlideChangeStart', currentPage);
        },
        onSlideChangeEnd (currentPage) {
            console.log('onSlideChangeEnd', currentPage);
        }
  },
  components: {Swiper}
}
</script>
