<template>
<div class="wrapper">
  <div class="form-wrapper fs14 lh40">
      <div class="input-wrapper mt10">
          <label class="flex" :class="{'active':curfocues==0}" @blur="blurinput" @click="focusinput(0)">
            <p class="w30 tr label-tip">公司名称:</p>
            <div class="w70"><input type="text" v-model="validation.accountName" placeholder="请输入您的公司名称"></div>
          </label>
          <p class="c-red" v-show="!validation1.v1"> <span class="tip_icon"></span>此项不能为空!</p>
      </div>
      <div class="input-wrapper mt10">
          <label class="flex" :class="{'active':curfocues==1}" @blur="blurinput" @click="focusinput(1)">
              <p class="w30 tr label-tip">联系人:</p>
              <div class="w70"><input type="text" v-model="validation.contacts" placeholder="请输入您的姓名"></div>
          </label>
          <p class="c-red" v-show="!validation1.v2"><span class="tip_icon"></span>此项不能为空!</p>
      </div>
      <div class="input-wrapper mt10">
          <label class="flex" :class="{'active':curfocues==2}" @blur="blurinput" @click="focusinput(2)">
              <p class="w30 tr label-tip">联系电话:</p>
              <div class="w70"><input type="tel" v-model="validation.contactPhone" placeholder="请输入您的联系方式"></div>
          </label>
          <p class="c-red" v-show="!validation1.v3"><span class="tip_icon"></span>此项不能为空!</p>
      </div>
      <p class="label-tip">留言内容:</p>
      <div class="input-wrapper" @blur="blurinput" @click="focusinput(3)">
          <textarea v-model="validation.message" placeholder="请输入留言内容" class="lh20" :class="{'active':curfocues==3}"></textarea>
          <p class="c-red" v-show="!validation1.v4"><span class="tip_icon"></span>此项不能为空!</p>
      </div>
      <div class="btn-wrapper lh40 tc">
        <div class="btn submit c1" @click="submit">提交</div>
      </div>
  </div>
  <div class="loader" v-show="showLoading">
      <img src="../asserts/images/loader.gif" alt="">
  </div>
</div>
</template>
<script>
export default {
  name: 'Userinfo',
  data () {
    return {
      showLoading:false,
      validation: {
        accountName:"",
        contacts:"",
        contactPhone:"",
        message:"",
      },
      validation1: {
        v1:true,
        v2:true,
        v3:true,
        v4:true,
      },
      curfocues:-1,
    }
  },
  methods:{
    submit(){
      let checked=true;
      checked=this.checkForm();
      if(checked){
       this.submitinfo();
      }
    },
    focusinput(index){
        this.curfocues=index;
    },
    blurinput(){
        this.curfocues=-1;
    },
    submitinfo(){
      this.showLoading=true;
      $.ajax({
              url: "http://oa.jianguanoa.com/business-pub/leave-message.do?callback=?",
              type: "get",
              dataType: "jsonp",
              timeout: 30000,
              data: this.validation,
              jsonp: "callback"
          }).done((data)=>{
            if (data) {
                  if (data.success) {
                      alert(data.result);
                  } else {
                      alert(data.result);
                  }
              } else {
                  alert("网络异常，请稍后再试试吧，或者您可以直接拨打我们的服务热线！");
              }
              this.showLoading=false;
              this.validation={
                   accountName:"",
                   contacts:"",
                   contactPhone:"",
                   message:"",
                  }
          });
    },
    callback(){
      console.log(11)
    },
    checkForm(){
    this.validation1={
        v1:true,
        v2:true,
        v3:true,
        v4:true,
      };
      let checked=true;
      if(!this.validation.accountName){
        this.validation1.v1=false;
          checked=false;
          return checked;
      }
      if(!this.validation.contacts){
        this.validation1.v2=false;
        checked=false;
        return checked;
      }
      if(!this.validation.contactPhone){
        this.validation1.v3=false;
        checked=false;
        return checked;
      }
      if(!this.validation.message){
        this.validation1.v4=false;
        checked=false;
        return checked;
      }
      return checked;
    }
  }
}
</script>
<style lang="stylus">
.input-wrapper
  label
    border 1px solid #ccc
    border-bottom 1px solid #999
  .label-tip
    padding-right 10px
  input
    border-left 1px solid #eee
    text-indent 10px
    width 95%
  textarea
    width 100%
    height 80px
    border 1px solid #ccc
  .active
    border-color #019eef
  .c-red
    text-indent 30px
    position relative
.btn-wrapper
  .btn
    border-radius 5px 
  .submit
    background-color #009cef
</style>
