const MenuData = [{
    name: "首页",
    header_text: "建管科技",
    className: "icon_menu_Index",
    key: "index"
}, {
    name: "简介",
    header_text: "公司简介",
    className: "icon_menu_Intro",
    key: "intro"
}, {
    name: "功能",
    header_text: "功能介绍",
    className: "icon_menu_Product",
    key: "product"
}, {
    name: "合作",
    header_text: "代理合作",
    className: "icon_menu_Collaborate",
    key: "collaborate"
}, {
    name: "价格",
    header_text: "软件价格",
    className: "icon_menu_Price",
    key: "price"
}, {
    name: "下载",
    header_text: "产品下载",
    className: "icon_menu_Download",
    key: "download"
}, {
    name: "联系",
    header_text: "联系我们",
    className: "icon_menu_Contact",
    key: "contact"
}, {
    name: "留言",
    header_text: "客户留言",
    className: "icon_menu_Userinfo",
    key: "userinfo"
}]
const ProductData = {
    list: [{
        "text": "经营管理",
        "className": "icon_jygl",
        "list": ["投标申请单", "投标公告栏", "提成申请"]
    }, {
        "text": "人事管理",
        "className": "icon_rsgl",
        "list": ["工作日志", "证件费用", "出差条"]
    }, {
        "text": "行政管理",
        "className": "icon_xzgl",
        "list": ["证件库", "借证件", "办证件"]
    }, {
        "text": "工作任务",
        "className": "icon_gzrw",
        "list": ["创建、查看任务", "填写日报、周报", "查阅日报、周报"]
    }, {
        "text": "档案管理",
        "className": "icon_dagl",
        "list": ["证件合同", "分公司合同", "工程合同"]
    }, {
        "text": "财务管理",
        "className": "icon_cwgl",
        "list": ["保证金", "报销单", "付款单"]
    }]
};
const DowndataData = {
    list: [{
        "text": "经营管理",
        "className": "icon_jygl2",
        "tip": "投标、业绩、证件"
    }, {
        "text": "财务中心",
        "className": "icon_cwzx",
        "tip": "付款、收款、借款、  报销等各种财务"
    }, {
        "text": "合同中心",
        "className": "icon_htzx",
        "tip": "工程、证件 分公司合同"
    }, {
        "text": "行政中心",
        "className": "icon_xzzx",
        "tip": "通知发文、办消 证件、印章相关"
    }, {
        "text": "人事中心",
        "className": "icon_rszx",
        "tip": "出差、请假、加班、 调体等人事申请"
    }]
};
const PriceData = {
    list: [{
        "text": "经营管理",
        "list": [{
            "name": "投标申请单",
            "profession": true,
            "enterprise": true
        }, {
            "name": "投标公告栏",
            "profession": true,
            "enterprise": true
        }, {
            "name": "提成申请",
            "profession": false,
            "enterprise": true
        }]
    }, {
        "text": "行政管理",
        "list": [{
            "name": "证件库",
            "profession": true,
            "enterprise": true
        }, {
            "name": "借证件",
            "profession": true,
            "enterprise": true
        }, {
            "name": "还证件",
            "profession": true,
            "enterprise": true
        }, {
            "name": "办证件",
            "profession": false,
            "enterprise": true
        }, {
            "name": "证件转出注销",
            "profession": false,
            "enterprise": true
        }, {
            "name": "证件调配",
            "profession": true,
            "enterprise": true
        }, {
            "name": "借业绩",
            "profession": true,
            "enterprise": true
        }, {
            "name": "还业绩",
            "profession": true,
            "enterprise": true
        }, {
            "name": "印章库",
            "profession": true,
            "enterprise": true
        }, {
            "name": "借印章",
            "profession": false,
            "enterprise": true
        }, {
            "name": "还印章",
            "profession": false,
            "enterprise": true
        }, {
            "name": "刻印章",
            "profession": false,
            "enterprise": true
        }, {
            "name": "用印申请",
            "profession": true,
            "enterprise": true
        }, {
            "name": "印章注销",
            "profession": false,
            "enterprise": true
        }, {
            "name": "通知发文",
            "profession": true,
            "enterprise": true
        }, {
            "name": "外出办事",
            "profession": false,
            "enterprise": true
        }, {
            "name": "用车申请",
            "profession": false,
            "enterprise": true
        }, {
            "name": "案件登记",
            "profession": false,
            "enterprise": true
        },{
            "name": "自定义流程",
            "profession": false,
            "enterprise": true
        }]
    }, {
        "text": "财务管理",
        "list": [{
            "name": "保证金",
            "profession": true,
            "enterprise": true
        }, {
            "name": "报销单",
            "profession": true,
            "enterprise": true
        }, {
            "name": "付款单",
            "profession": false,
            "enterprise": true
        }, {
            "name": "借款单",
            "profession": false,
            "enterprise": true
        }, {
            "name": "工程款",
            "profession": true,
            "enterprise": true
        }, {
            "name": "收款",
            "profession": false,
            "enterprise": true
        },{
            "name": "工程税票",
            "profession": true,
            "enterprise": true
        }, {
            "name": "外经证",
            "profession": false,
            "enterprise": true
        }, {
            "name": "分公司收款",
            "profession": false,
            "enterprise": true
        }]
    }, {
        "text": "档案管理",
        "list": [{
            "name": "证件合同",
            "profession": false,
            "enterprise": true
        }, {
            "name": "分公司合同",
            "profession": false,
            "enterprise": true
        }, {
            "name": "工程合同",
            "profession": true,
            "enterprise": true
        }]
    }, {
        "text": "人事管理",
        "list": [{
            "name": "工作日志",
            "profession": false,
            "enterprise": true
        }, {
            "name": "证件费用",
            "profession": false,
            "enterprise": true
        }, {
            "name": "出差条",
            "profession": true,
            "enterprise": true
        }, {
            "name": "补登条",
            "profession": false,
            "enterprise": true
        }, {
            "name": "请假条",
            "profession": true,
            "enterprise": true
        }, {
            "name": "加班条",
            "profession": false,
            "enterprise": true
        }, {
            "name": "调休条",
            "profession": false,
            "enterprise": true
        }, {
            "name": "人事档案",
            "profession": false,
            "enterprise": true
        }]
    }]
};
export {
    MenuData,ProductData, PriceData, DowndataData
}
