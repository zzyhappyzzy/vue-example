import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
// import Index from './components/Index.vue'
// import Collaborate from './components/Collaborate.vue'
// import Contact from './components/Contact.vue'
// import Download from './components/Download.vue'
// import Intro from './components/Intro.vue'
// import Price from './components/Price.vue'
// import Product from './components/Product.vue'
// import Userinfo from './components/Userinfo.vue'
// 如果想用CODE  SPLITTING则不能使用es6的import，而要在router下面使用require
// install router
// 根据设备信息重定向
var isIosFlatform = function() {
    return navigator.userAgent.match(/(iPad|iPhone)/) ? !0 : !1
};
var isAndroidFlatform = function() {
    return navigator.userAgent.match(/(Android)/) ? !0 : !1
};
var isMobile = function() {
    return isIosFlatform() || isAndroidFlatform() ? !0 : !1
};
isMobile() || (window.location.href = "http://www.jianguanoa.com/")
Vue.use(Router)
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
    '/collaborate': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Collaborate.vue'));
            }, "collaborate");
        },
        name: '代理合作',
    },
    '/contact': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Contact.vue'));
            }, "contact");
        },
        name: '联系我们',

    },
    '/download': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Download.vue'));
            }, "download");
        },
        name: '产品下载',

    },
    '/intro': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Intro.vue'));
            }, "intro");
        },
        name: '公司简介',

    },
    '/price': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Price.vue'));
            }, "price");
        },
        name: '软件价格',

    },
    '/product': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Product.vue'));
            }, "product");
        },
        name: '功能介绍',

    },
    '/userinfo': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Userinfo.vue'));
            }, "userinfo");
        },
        name: '客户留言',

    }
})
router.redirect({
    '/': '/index'
})

router.beforeEach(function() {
    window.scrollTo(0, 0)
})
router.start(App, '#app');
console.log("%c嗨~~  http://git.oschina.net/annilq/jgmobile", "color:pink")
