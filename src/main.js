import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import appFooter from './components/Footer.vue'
// 如果想用CODE  SPLITTING则不能使用es6的import，而要在router下面使用require
// install router
// 根据设备信息重定向
Vue.use(Router)
Vue.component('app-footer', appFooter)
    // routing
var router = new Router()

router.map({
    '/index': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Index.vue'));
            }, "index");
        },
        name: '建管科技',
    },
    '/product': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Product.vue'));
            }, "product");
        },
        name: '功能介绍',

    },
    '/productmodel': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/productmodel.vue'));
            }, "price");
        },
        name: '产品模式',

    },
    '/intro': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Intro.vue'));
            }, "intro");
        },
        name: '公司简介',

    },
    '/contact': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Contact.vue'));
            }, "contact");
        },
        name: '客服中心',

    },
    '/download': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Download.vue'));
            }, "download");
        },
        name: '产品下载',

    }
})
router.redirect({
    '/': '/index'
})

router.beforeEach(function() {
    window.scrollTo(0, 0)
})
router.start(App, '#app');
console.log("%c嗨~~  https://github.com/annilq/vue-example", "color:blue")
