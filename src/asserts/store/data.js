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
        "list": [{
            "title": "投标申请单",
            "tip": "记录从报名到投标的整个过程，全程无纸化操作。保存所有相关的款项信息，并自动计算项目利润。"
        }, {
            "title": "汇退保证金",
            "tip": "严格把控汇退保证金的整个过程，避免了因为人为疏忽导致的资金损失。"
        }, {
            "title": "证件业绩调配",
            "tip": "经营人员可通过手机或电脑查看公司当前闲置的证件或业绩，并向管理人员申请借取。独有的证件调配功能甚至可以调取不在公司的证件。这样一来即节省了调证时间，也大大提升了证件的有效利用率。"
        }]
    }, {
        "text": "人事管理",
        "className": "icon_rsgl",
        "list": [{
            "title": "人员考勤",
            "tip": "员工请假，补登，出差，加班，调休都需经过人事审批。"
        }, {
            "title": "工资发放",
            "tip": "工资条由相关人员统一制作，须经过多方审核才可发放。"
        }]
    }, {
        "text": "行政管理",
        "className": "icon_xzgl",
        "list": [{
            "title": "证件管控",
            "tip": "公司所有的证件资源一目了然，证件状态实时更新，甚至可以查看当前借证人和所有借取记录，其实对证件的管控力度还远不止与此。其中贴心的证件年检提醒功能让我们的每个客户都交口称赞。"
        }, {
            "title": "业绩印章",
            "tip": "为了方便筛选出更符合要求的业绩，业绩库可录入多种业绩指标。 刻印，借印，用印，注销一系列的流程完全可以满足企业对于印章规范化管理的要求。"
        }, {
            "title": "通知发文",
            "tip": "公司无论小事大事还是制度决策的传达都能通知到公司的每个人员，具体接收对象可精确到部门，岗位，人员。"
        }, {
            "title": "车辆管理",
            "tip": "如果每次使用车辆前都需要申请并登记备案，那么在降低用车风险的同时也能提高车辆的使用率。"
        }]
    }, {
        "text": "工作任务",
        "className": "icon_gzrw",
        "list": [{
            "title": "发布任务",
            "tip": "上级可发布任务给下属。其中的子任务即可细化任务的粒度，也有利于各部门成员之间的分工协作。"
        }, {
            "title": "日报周报",
            "tip": " 日报，周报记录每天，每周的工作事项，让上级领导可实时监督指导。"
        }, {
            "title": "任务统计",
            "tip": "以时间，部门等条件统计任务的任务数，完成率，完成进度。全方位把控公司的整体工作进展"
        }]
    }, {
        "text": "合同管理",
        "className": "icon_dagl",
        "list": [{
            "title": "工程合同",
            "tip": "工程合同和投标项目一键关联，鼠标只需轻轻一点即可查看相关联的工程款，外经证，税票等数据。无需再翻阅纸质材料，省时省力。"
        }]
    }, {
        "text": "财务管理",
        "className": "icon_cwgl",
        "list": [{
            "title": "报销借款",
            "tip": "员工可在线上实时发起报销和借款申请，报销明细及借款事由清楚明了。以前线下各种繁琐的审批流程转为线上审核，再也不会因为种种原因耽搁延误。"
        }, {
            "title": "工程款及税票",
            "tip": "收取工程款和开具税票皆可在系统上登记，打开系统后每笔款项信息历历在目。"
        }, {
            "title": "公司收款",
            "tip": "公司所有收款记录统一录入到系统，收入支出更加清晰可见。"
        }]
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
        }, {
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
        }, {
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
    MenuData,
    ProductData,
    PriceData,
    DowndataData
}
