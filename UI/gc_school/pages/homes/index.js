(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/homes/index" ], {
    "154f": function(t, e, a) {},
    "2fa6": function(t, e, a) {
        a.r(e);
        var o = a("6425"), n = a.n(o);
        for (var s in o) "default" !== s && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = n.a;
    },
    3213: function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return s;
        }), a.d(e, "a", function() {
            return o;
        });
        var o = {
            mpHtml: function() {
                return Promise.all([ a.e("common/vendor"), a.e("uni_modules/mp-html/components/mp-html/mp-html") ]).then(a.bind(null, "e4b7"));
            }
        }, n = function() {
            this.$createElement;
            this._self._c;
        }, s = [];
    },
    3533: function(t, e, a) {
        var o = a("154f");
        a.n(o).a;
    },
    6425: function(t, e, a) {
        (function(t) {
            function a(t) {
                return function(t) {
                    if (Array.isArray(t)) return o(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return o(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? o(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, o = new Array(e); a < e; a++) o[a] = t[a];
                return o;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = getApp(), s = {
                data: function() {
                    return {
                        indicatorDots: !1,
                        autoplay: !0,
                        interval: 5e3,
                        duration: 1e3,
                        showText: !0,
                        getUseInfo: !1,
                        status: 0,
                        page: 1,
                        url: n.globalData.siteInfo.appimg,
                        index: 0,
                        address: {},
                        schooindex: 0,
                        s_id: "",
                        rank: [],
                        slide: [],
                        top: t.getStorageSync("CustomBar"),
                        StatusBar: t.getStorageSync("StatusBar"),
                        list: [],
                        location: {
                            lng: "",
                            lat: ""
                        },
                        current: 0,
                        modules: [],
                        schoolInfo: {
                            modules: [],
                            school: {
                                thums: []
                            },
                            rank: []
                        },
                        is_show_toast: !0,
                        dataList: [],
                        order_index: 0,
                        history: [],
                        note: "",
                        school: "",
                        sys: "",
                        sysparment: {
                            is_home_slide: 0,
                            is_rank_show: 0,
                            is_show_toast: 0,
                            home_adv: "",
                            home_adv_type: 0
                        },
                        tmps: {},
                        city: "",
                        userInfo: "",
                        article_toast_content: ""
                    };
                },
                onLoad: function(e) {
                    console.log(n.globalData.siteInfo.appimg);
                    var a = this;
                    a.getPage(), a.setData({
                        address: t.getStorageSync("city")
                    }), t.getStorage({
                        key: "useInfo",
                        success: function(e) {
                            "true" == e.data && a.setData({
                                getUseInfo: !1
                            }), t.getStorageSync("openid") || a.getGetUid(e.data);
                        },
                        fail: function() {
                            a.setData({
                                getUseInfo: !0
                            });
                        }
                    });
                },
                onReady: function() {},
                onShareAppMessage: function() {},
                onShareTimeline: function() {},
                onShow: function() {
                    this.getOrderData(), this.getHistoryList(), t.removeStorage({
                        key: "json"
                    });
                },
                onHide: function() {},
                onUnload: function() {},
                onReachBottom: function() {},
                methods: {
                    openview: function(e) {
                        console.log(e), t.previewImage({
                            current: e.currentTarget.dataset.url,
                            urls: [ e.currentTarget.dataset.url ]
                        });
                    },
                    urlFun: function() {
                        t.navigateTo({
                            url: "/gc_school/pages/url/index?url=https://www.baidu.com"
                        });
                    },
                    order_change: function(t) {
                        console.log(t.currentTarget.dataset.index), this.setData({
                            order_index: t.currentTarget.dataset.index
                        });
                    },
                    jie: function() {
                        var e = this;
                        t.showModal({
                            title: "提示",
                            content: "允许接收订阅消息",
                            success: function(a) {
                                a.confirm && (t.getSetting({
                                    success: function(t) {
                                        console.log(t.authSetting);
                                    }
                                }), t.requestSubscribeMessage({
                                    tmplIds: [ e.sysparment.template_id ],
                                    success: function(e) {
                                        console.log("已授权接收订阅消息"), n.globalData.util.request({
                                            url: "entry/wxapp/sendSubscribeMessage",
                                            data: {
                                                ordersn: "3583202103171811593073"
                                            }
                                        }), t.navigateTo({});
                                    }
                                }));
                            }
                        });
                    },
                    onChangeShowText: function() {
                        this.setData({
                            showText: !this.showText
                        });
                    },
                    onGoodsInfo: function(t) {
                        this.setData({
                            note: t.detail.value
                        });
                    },
                    onJsEvent: function(e) {
                        console.log(e.currentTarget.dataset.url), "" != e.currentTarget.dataset.url ? t.navigateTo({
                            url: e.currentTarget.dataset.url + "&id=" + e.currentTarget.dataset.id
                        }) : t.navigateTo({
                            url: "/gc_school/pages/public/index?type=" + e.currentTarget.dataset.type + "&showText=" + this.note + "&id=" + e.currentTarget.dataset.id
                        });
                    },
                    PickerChange: function(e) {
                        console.log(e), this.setData({
                            index: e.detail.value,
                            schoolInfo: this.school[parseInt(e.detail.value)],
                            s_id: this.school[parseInt(e.detail.value)].s_id,
                            current: 0
                        }), t.setStorageSync("schoolId", this.school[parseInt(e.detail.value)].s_id), t.setStorageSync("schoolIndex", parseInt(e.detail.value)), 
                        this.getSchoolInfo(this.school[parseInt(e.detail.value)].s_id), this.getOrderData(), 
                        this.getHistoryList(), this.setData({
                            dataList: []
                        }), this.getSysparment(), n.globalData.isload = !0;
                    },
                    toOther: function(e) {
                        console.log(e.currentTarget.dataset.appid), t.navigateToMiniProgram({
                            appId: e.currentTarget.dataset.appid,
                            path: "",
                            extraData: {
                                foo: "bar"
                            },
                            envVersion: "release",
                            success: function(t) {
                                console.log("打开成功");
                            }
                        });
                    },
                    detail: function(e) {
                        console.log(e.currentTarget.dataset.index), "已完成" != this.list[e.currentTarget.dataset.index].status && t.navigateTo({
                            url: "/gc_school/pages/order/detail?id=" + this.list[e.currentTarget.dataset.index].o_id
                        });
                    },
                    getSchool: function() {
                        var e = this;
                        n.globalData.util.request({
                            url: "entry/wxapp/SchoolList",
                            data: {
                                openid: t.getStorageSync("openid") ? t.getStorageSync("openid") : "nologinuser",
                                lon: t.getStorageSync("city").location.lng,
                                lat: t.getStorageSync("city").location.lat
                            },
                            success: function(a) {
                                var o = t.getStorageSync("schoolIndex") ? t.getStorageSync("schoolIndex") : 0;
                                e.setData({
                                    school: a.data.data.list,
                                    index: t.getStorageSync("schoolIndex") ? t.getStorageSync("schoolIndex") : 0,
                                    s_id: a.data.data.list[o].s_id,
                                    sys: a.data.data.sys
                                }), t.setStorageSync("schoolId", a.data.data.list[o].s_id), e.getSchoolInfo(a.data.data.list[o].s_id), 
                                e.getOrderData(), e.getHistoryList(), e.getSysparment();
                            }
                        });
                    },
                    getSchoolInfo: function(e) {
                        var a;
                        a = this, n.globalData.util.request({
                            url: "entry/wxapp/SchoolIndex",
                            data: {
                                openid: t.getStorageSync("openid"),
                                s_id: e
                            },
                            success: function(t) {
                                console.log(t.data.data), a.setData({
                                    schoolInfo: t.data.data
                                }), a.getOrderData(), a.getHistoryList();
                            }
                        });
                    },
                    slideJump: function(e) {
                        console.log(e), 1 == e.currentTarget.dataset.type ? t.navigateTo({
                            url: e.currentTarget.dataset.url
                        }) : 2 == e.currentTarget.dataset.type ? (console.log("appid是", e.currentTarget.dataset.url), 
                        t.navigateToMiniProgram({
                            appId: e.currentTarget.dataset.url,
                            path: "",
                            extraData: {
                                foo: "bar"
                            },
                            envVersion: "release",
                            success: function(t) {
                                console.log("打开成功");
                            }
                        })) : t.navigateTo({
                            url: "/gc_school/pages/webview/index?url=" + e.currentTarget.dataset.url
                        });
                    },
                    getSysparment: function() {
                        var e = this;
                        n.globalData.util.request({
                            url: "entry/wxapp/Sysparment",
                            data: {
                                page: this.page,
                                openid: t.getStorageSync("openid"),
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                var a = t.data.data.list;
                                console.log(t.data);
                                for (var o = e.dataList, n = 0; n < a.length; n += 2) o.push(a.slice(n, n + 2));
                                e.setData({
                                    dataList: o
                                }), console.log("规格的", o), e.article_toast_content = e.escape2Html(t.data.data.sys.toast_content), 
                                e.setData({
                                    sysparment: t.data.data.sys
                                });
                            }
                        });
                    },
                    getList: function() {
                        var e = this;
                        n.globalData.util.request({
                            url: "entry/wxapp/IndexList",
                            data: {
                                page: this.page,
                                openid: t.getStorageSync("openid"),
                                lon: t.getStorageSync("city").location.lng,
                                lat: t.getStorageSync("city").location.lat
                            },
                            success: function(t) {
                                if (console.log("11111", t), 1 == this.page) e.setData({
                                    list: t.data.data.list
                                }); else for (var o = 0; o < t.data.data.list.length; o++) e.setData({
                                    list: [].concat(a(e.list), [ t.data.data.list[o] ])
                                });
                            }
                        });
                    },
                    close: function() {
                        this.setData({
                            is_show_toast: !1
                        });
                    },
                    getLocation: function(e) {
                        var a = this;
                        t.getLocation({
                            type: "gcj02",
                            success: function(o) {
                                console.log("打印位置", o), a.setData({
                                    tmps: {
                                        location: {
                                            lng: o.longitude,
                                            lat: o.latitude
                                        }
                                    }
                                }), setTimeout(function() {
                                    console.log("location的值", a.tmps), t.setStorageSync("city", a.tmps), a.setData({
                                        city: a.location
                                    }), e();
                                }, 2e3);
                            }
                        });
                    },
                    getUsetInfo: function(e) {
                        "getUserInfo:ok" == e.detail.errMsg ? (this.setData({
                            getUseInfo: !0
                        }), t.setStorage({
                            key: "useInfo",
                            data: "true"
                        }), this.getGetUid(e.detail.userInfo)) : this.setData({
                            getUseInfo: !0
                        });
                    },
                    getRank: function() {
                        var e = this;
                        n.globalData.util.request({
                            url: "entry/wxapp/rank",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                e.setData({
                                    rank: t.data.data
                                });
                            }
                        });
                    },
                    getPage: function() {
                        var e = this;
                        e.getLocation(function() {
                            console.log("lplp"), n.globalData.util.request({
                                url: "entry/wxapp/UserInfoUpdate",
                                data: {
                                    openid: t.getStorageSync("openid"),
                                    nickname: t.getStorageSync("userinfo").nickName,
                                    avatar: t.getStorageSync("userinfo").avatarUrl
                                },
                                success: function(a) {
                                    n.globalData.util.footer(e), e.setData({
                                        userInfo: t.getStorageSync("userinfo")
                                    }), e.getSchool();
                                }
                            });
                        });
                    },
                    getGetUid: function(e) {
                        var a = this;
                        t.login({
                            success: function(e) {
                                e.code && n.globalData.util.request({
                                    url: "entry/wxapp/GetUid",
                                    data: {
                                        code: e.code
                                    },
                                    success: function(e) {
                                        console.log(e.data.data.openid), a.setData({
                                            getUseInfo: !1
                                        }), t.setStorageSync("openid", e.data.data.openid), t.getUserInfo({
                                            success: function(e) {
                                                var o = e.userInfo;
                                                t.setStorageSync("userinfo", o), a.getPage();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    getDateDiff: function(t, e) {
                        var a = "", o = 36e5, n = 24 * o, s = new Date().getTime() - t;
                        if (!(s < 0)) {
                            var r = s / 2592e6, i = s / (7 * n), c = s / n, l = s / o, d = s / 6e4;
                            return "" == (a = r >= 1 ? parseInt(r) + "个月前" : i >= 1 ? parseInt(i) + "周前" : c >= 1 ? parseInt(c) + "天前" : l >= 1 ? parseInt(l) + "小时前" : d >= 1 ? parseInt(d) + "分钟前" : "刚刚") ? e : a;
                        }
                    },
                    getDateTimeStamp: function(t) {
                        t = t;
                        var e = Date.parse(t.replace(/-/gi, "/"));
                        return this.getDateDiff(e, t);
                    },
                    getOrderData: function() {
                        var e = this;
                        n.globalData.util.request({
                            url: "entry/wxapp/OrderWiteList",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                page: 1,
                                status: this.type,
                                openid: t.getStorageSync("openid")
                            },
                            success: function(t) {
                                for (var a = 0; a < t.data.data.order.length; a++) {
                                    t.data.data.order[a].createtime = e.getDateTimeStamp(t.data.data.order[a].createtime);
                                    var o = t.data.data.order[a].desc;
                                    t.data.data.order[a].desc.replace(/[0-9]*(\.[0-9]*)?/g, function(t) {
                                        var e = t;
                                        if (Number(t)) {
                                            if (t.toString().length > 3) var a = t.substr(0, 2) + "****" + t.substr(6); else a = t.substr(0, 1) + "**";
                                            o = o.replace(e, a);
                                        }
                                    }), t.data.data.order[a].desc = o;
                                }
                                e.setData({
                                    list: t.data.data.order
                                });
                            }
                        });
                    },
                    getHistoryList: function() {
                        var e = this;
                        n.globalData.util.request({
                            url: "entry/wxapp/historyList",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                page: 1,
                                status: this.type,
                                openid: t.getStorageSync("openid")
                            },
                            success: function(t) {
                                for (var a = 0; a < t.data.data.order.length; a++) {
                                    t.data.data.order[a].createtime = e.getDateTimeStamp(t.data.data.order[a].createtime);
                                    var o = t.data.data.order[a].desc;
                                    t.data.data.order[a].desc.replace(/[0-9]*(\.[0-9]*)?/g, function(t) {
                                        var e = t;
                                        if (Number(t)) {
                                            if (t.toString().length > 3) var a = t.substr(0, 2) + "****" + t.substr(6); else a = t.substr(0, 1) + "**";
                                            o = o.replace(e, a);
                                        }
                                    }), t.data.data.order[a].desc = o;
                                }
                                e.setData({
                                    history: t.data.data.order
                                });
                            }
                        });
                    },
                    test: function() {
                        console.log("占位：函数 test 未声明");
                    }
                }
            };
            e.default = s;
        }).call(this, a("543d").default);
    },
    "867d": function(t, e, a) {
        a.r(e);
        var o = a("3213"), n = a("2fa6");
        for (var s in n) "default" !== s && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(s);
        a("3533");
        var r = a("f0c5"), i = Object(r.a)(n.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = i.exports;
    },
    deec: function(t, e, a) {
        (function(t) {
            a("a8cf"), o(a("66fd"));
            var e = o(a("867d"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "deec", "common/runtime", "common/vendor" ] ] ]);