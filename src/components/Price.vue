<template>
<div class="wrapper">
<ul class="price-list celled">
  <li class="flex">
      <div class="icon_price w35"></div>
      <div class="w35 price-detail">
        <h4 class="mt10">专业版</h4>
        <div><span class="c-price fs16">8800元</span>/年<br/>30用户以内</div>
      </div>
      <div class="w30">
        <div class="btn-wrapper c1 tc">
          <a v-link="{ path: '/userinfo' }"><div class="btn c1">购买留言</div></a>
          <div class="btn mt10 tel-btn"><a href="tel:400-777-3359">电话咨询</a></div>
        </div>
      </div>
  </li>
  <li class="flex">
      <div class="icon_price w35"></div>
      <div class="w35 price-detail">
        <h4 class="mt10">企业版</h4>
        <div><span class="c-price fs16">88元</span><br/>每用户/每月</div>
      </div>
      <div class="w30">
        <div class="btn-wrapper c1 tc">
          <a v-link="{ path: '/userinfo' }"><div class="btn c1">购买留言</div></a>
          <div class="btn mt10 tel-btn"><a href="tel:400-777-3359">电话咨询</a></div>
        </div>
      </div>
  </li>
</ul>
  <div class="price-table container">
    <table class="price-table-detail tc" name="jy" id="jy" v-for="item in data.list">
        <thead>
            <tr><th class="w40 active">{{item.text}}</th>
            <th class="w30">专业版</th>
            <th class="w30">企业版</th>
        </tr></thead>
        <tbody>
        <tr v-for="subitem in item.list">
            <td>{{subitem.name}}</td>
            <td>
                <div :class="subitem.profession?'unsupport':'support'"></div>
            </td>
            <td class="last">
                <div :class="subitem.enterprise?'unsupport':'support'"></div>
            </td>
        </tr>
        </tbody>
    </table>
  </div>
</div>
</template>

<script>
import {PriceData} from "../asserts/store/data"
export default {
  name: 'Price',
  data () {
    return {
      data:PriceData
    }
  }
}
</script>

<style lang="stylus">
.price-list
  li
    height 100px
    padding 10px 0
    border-top 1px solid #dfdfdf
    .btn
      border-radius 5px
      line-height 35px
      background-color #ff6666
      a
        color inherit
    .tel-btn
      background-color #10b662
    .c-price
      color #ff6666
  .price-detail
    margin-left 10px
.price-table
  padding 0 10px
.price-table-detail
  width 100%
  line-height 40px
  table-layout fixed
  margin-top 20px
  font-size 13px
  thead th
    border-bottom 1px solid #ccc
  th.active
    background-color #1f2022
    color #fff
    border-top-left-radius 5px
    border-top-right-radius 5px
  tr
    td
      border-left 1px solid #ebebeb
      border-bottom 1px solid #ebebeb
      &:last-child,&.last
        border-right 1px solid #ebebeb
      .support,.unsupport
        height 30px
        width 30px
        background: url('../asserts/images/icon.png') -97px -184px no-repeat;
        display inline-block
        vertical-align: middle;
        zoom: 1; /* Fix for IE7 */
        *display: inline; /* Fix for IE7 */
      .support
        background-position -97px -225px
    &:nth-child(even)
      background #f1f1f1
</style>
