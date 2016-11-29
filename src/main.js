import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import appFooter from './components/Footer.vue'
// 如果想用CODE  SPLITTING则不能使用es6的import，而要在router下面使用require
// install router
// 根据设备信息重定向
Vue.use(Router);
Vue.component('app-footer', appFooter);
Vue.directive("go-back", {
  bind: function() {
    var self = this;
    var el = this.el;
    el.addEventListener("click", function(e) {
      window.history.back()
    });
  },
  update: function(value) {

  },
  unbind: function() {
  }
});
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
    '/product': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Product.vue'));
            }, "product");
        }
    },
    '/pro-tbgc': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pro-tbgc.vue'));
            }, "productmodel");
        }
    },
    '/pro-fgs': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pro-fgs.vue'));
            }, "productmodel");
        }
    },
    '/pro-zj': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pro-zj.vue'));
            }, "productmodel");
        }
    },
    '/pro-gcht': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pro-gcht.vue'));
            }, "productmodel");
        }
    },
    '/pro-rlzy': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pro-rlzy.vue'));
            }, "productmodel");
        }
    },
    '/pro-jycb': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pro-jycb.vue'));
            }, "productmodel");
        }
    },
    '/pro-qxkz': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pro-qxkz.vue'));
            }, "productmodel");
        }
    },
    '/pro-yczx': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pro-yczx.vue'));
            }, "productmodel");
        }
    },
    '/pro-gxh': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pro-gxh.vue'));
            }, "productmodel");
        }
    },
    '/pro-rjgx': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pro-rjgx.vue'));
            }, "productmodel");
        }
    },
    '/pro-jstd': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pro-jstd.vue'));
            }, "productmodel");
        }
    },
    '/productmodel': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/productmodel.vue'));
            }, "productmodel");
        }
    },
    '/pm-wtgl': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pm-wtgl.vue'));
            }, "productmodelDetail");
        }
    },
    '/pm-yzds': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pm-yzds.vue'));
            }, "productmodelDetail");
        }
    },
    '/pm-zcjy': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/pm-zcjy.vue'));
            }, "productmodelDetail");
        }
    },
    '/intro': {
        component: function(resolve) {
            require.ensure([], function(require) {
                resolve(require('./components/Intro.vue'));
            }, "intro");
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
