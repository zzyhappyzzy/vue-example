webpackJsonp([6],{25:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(4);t["default"]={name:"Product",data:function(){return{Data:o.ProductData,curindex:0,list:[]}},ready:function(){this.list=this.Data.list[0].list,this.curindex=0},methods:{showdetail:function(i,t){this.curindex=t,this.list=i.list}}}},39:function(i,t,e){t=i.exports=e(1)(),t.push([i.id,".pro-menu{text-align:center}.pro-menu li{width:100px;height:100px;display:inline-block;padding:10px 0;box-sizing:border-box;border:1px solid #ccc;border-left:none;margin-top:2px}.pro-menu li.active{color:#3bbcff;background-color:#1f2022;border:1px solid #3bbcff;box-shadow:1px 0 0 #3bbcff}.pro-detail{padding:0 20px;margin-top:10px;line-height:30px}.pro-detail li{border-bottom:1px dashed #ccc;padding:5px 0}.pro-detail .item-num{color:#747474;border:1px solid #ccc;border-radius:8px;margin-right:10px;display:inline-block;width:1.5em;height:1.5em;line-height:18px;text-align:center;vertical-align:middle}",""])},49:function(i,t,e){var o=e(39);"string"==typeof o&&(o=[[i.id,o,""]]);e(2)(o,{});o.locals&&(i.exports=o.locals)},78:function(i,t){i.exports='<div class=product-view><ul class=pro-menu><li v-for="item in Data.list" @click=showdetail(item,$index) :class="{\'active\':curindex==$index}"><p :class=item.className></p>{{item.text}}</li></ul><div class=pro-detail v-show="list.length>0"><span>[主要功能]</span><ul><li v-for="info in list"><span class=item-num>{{$index+1}}</span>{{info}}</li></ul></div></div>'},88:function(i,t,e){e(49),i.exports=e(25),i.exports.__esModule&&(i.exports=i.exports["default"]),("function"==typeof i.exports?i.exports.options:i.exports).template=e(78)}});