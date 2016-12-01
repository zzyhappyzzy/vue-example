<template>
<div>
  <menubar></menubar>
  <div id="header">客服中心</div>
  <div class="banner">
      <img src="../asserts/images/csc-banner.jpg" alt="">
      <div class="btn btn-4"><kefu></kefu></div>
  </div>
  <section>
    <div class="list lh20 xcpx-list">
    <div class="section-title">现场培训</div>
    <div class="list-item flex">
    <div class="w15 ">
      <div class="icon-index-tbgcgk">
      </div>
    </div>
      <div class="list-item-content w85">
        <p class="c0 fs14 fw">对投标过程的操作</p>
      </div>
    </div>
    <div class="list-item flex">
    <div class="w15 ">
      <div class="icon-index-fgs">
      </div>
    </div>
      <div class="list-item-content w85">
        <p class="c0 fs14 fw">对分公司的操作</p>
      </div>
    </div>
    <div class="list-item flex">
    <div class="w15 ">
      <div class="icon-index-zj">
      </div>
    </div>
      <div class="list-item-content w85">
        <p class="c0 fs14 fw">对证件、业绩等材料资源的操作</p>
      </div>
    </div>
    <div class="list-item flex">
    <div class="w15 ">
      <div class="icon-index-gcht">
      </div>
    </div>
      <div class="list-item-content w85">
        <p class="c0 fs14 fw">对工程合同的操作</p>
      </div>
    </div>
    <div class="list-item flex">
    <div class="w15 ">
      <div class="icon-index-rlzy">
      </div>
    </div>
      <div class="list-item-content w85">
        <p class="c0 fs14 fw">对人力资源的操作</p>
      </div>
    </div>
    </div>
  </section>
  <div class="banner">
      <img src="../asserts/images/csc-banner2.jpg" alt="">
  </div>
  <section>
    <div class="list lh20 gltk-list">
      <div class="section-title celled lh40">客服中心</div>
      <div class="banner">
          <img src="../asserts/images/csc-kfzx.jpg" alt="">
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">电话服务</p>
          <p class="c9 fs12">您有任何问题或意见， 请随时给我们电话<br/> · 400-777-3359 <br/>· 020-28186558</p>
        </div>
        <div class="w30 mt25">
          <div class="detail" @click="showTel()">拨打电话</div>
        </div>
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">QQ客服</p>
          <p class="c9 fs12">电话里难以描述清楚的问题，请联系我们QQ在线
客服， 我们会以最快的速度解决您遇到的问题！</p>
        </div>
        <div class="w30 mt25">
          <div class="detail" @click="showQQ()">联系客服</div>
        </div>
      </div>
      <div class="list-item flex">
        <div class="list-item-content w70">
          <p class="c0 fs14 fw">上门服务</p>
          <p class="c9 fs12">根据约定或必要时，我们的销售人员、客服人员或 技术工程师可以及时上门为您提供周到的服务！</p>
        </div>
        <div class="w30">
        </div>
      </div>
    </div>
  </section>
    <app-footer class="mt20"></app-footer>
    <div class="masker" v-show="showmasker" @click="reset()">
    </div>
    <div class="actionsheet tc fs16 lh50" v-show="showqq">
      <ul>
        <li class="fs14 celled c9">联系客服</li>
        <li class="celled c-blue" @click="checkqq()"><a target="_blank" href="mqqwpa://im/chat?chat_type=wpa&uin=203919810&version=1&src_type=web&web_src=oicqzone.com">售前客服(203919810)</a></li>
        <li class="c-blue" @click="checkqq()"><a target="_blank" href="mqqwpa://im/chat?chat_type=wpa&uin=3095781132&version=1&src_type=web&web_src=oicqzone.com">售后客服(3095781132)</a></li>
      </ul>
      <div class="btn c6 mt10" @click="reset()">取消</div>
    </div>
    <div class="actionsheet tc fs16 lh50" v-show="showtel">
      <ul>
        <li class="fs14 celled c9">拨打电话</li>
        <li class="celled c-blue"><a href="tel:400-77-3359">400-77-3359</a></li>
        <li class="c-blue"><a href="tel:020-28186558">020-28186558</a></li>
      </ul>
      <div class="btn c6 mt10" @click="reset()">取消</div>
    </div>
    <div class="share-center c1 fs18" v-show="showtip">
    当前页面不支持直接打开QQ<br/>请按照以下操作打开QQ<br/>
     1,选择右上角的菜单按钮<br/>2,选择浏览器打开
    </div>
  </div>
</template>
<script>
export default {
  name: 'contact',
  data(){
    return {
      showtel:false,
      showqq:false,
      showtip:false,
      showmasker:false
    }
  },
  methods:{
    reset:function(){
      this.showtel=false;
      this.showqq=false;
      this.showmasker=false;
      this.showtip=false;
    },
    showTel:function(){
      this.showtel=true;
      this.showmasker=true;
    },
    checkqq:function(){
       if(this.is_weixn()){
          this.showtip=true;
      }
    },
    showQQ:function(){
        this.showqq=true;
        this.showmasker=true;
    },
    is_weixn:function(){  
    var ua = navigator.userAgent.toLowerCase();  
    if(ua.match(/MicroMessenger/i)=="micromessenger") {  
        return true;  
        } else {  
        return false;  
        }  
    }
  }
}
</script>