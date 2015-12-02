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
Vue.use(Router)
// routing
var router = new Router()

router.map({
    '/index': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Index.vue'));
            }, "index");
        }
    },
    '/collaborate': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Collaborate.vue'));
            }, "collaborate");
        }
    },
    '/contact': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Contact.vue'));
            }, "contact");
        }

    },
    '/download': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Download.vue'));
            }, "download");
        }

    },
    '/intro': {
        component: function(resolve) {
            require.ensure([], function(require) {
               resolve(require('./components/Intro.vue'));
            }, "intro");
        }

    },
    '/price': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Price.vue'));
            }, "price");
        }

    },
    '/product': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Product.vue'));
            }, "product");
        }

    },
    '/userinfo': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Userinfo.vue'));
            }, "userinfo");
        }

    }
})
router.redirect({
    '/': '/index'
})

router.beforeEach(function() {
    window.scrollTo(0, 0)
})
router.start(App, '#app');
console.log("%c嗨~~  http://git.oschina.net/annilq/jgmobile","color:pink")
