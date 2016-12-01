<template>
<a @click="checkwx($event)" target="_blank" href="mqqwpa://im/chat?chat_type=wpa&uin=203919810&version=1&src_type=web&web_src=oicqzone.com">服务咨询</a>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    checkwx:function(e){
      console.log(e)
      if(this.is_weixn()){
      	e.preventDefault()
      	this.$dispatch("showtip");
      }
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