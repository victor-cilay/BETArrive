(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/order/index" ], {
    "122a": function(t, e, a) {
        a.r(e);
        var n = a("37a8"), o = a("6b14");
        for (var r in o) "default" !== r && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(r);
        a("9c7f");
        var i = a("f0c5"), s = Object(i.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = s.exports;
    },
    "37a8": function(t, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return r;
        }), a.d(e, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.list.length > 0 ? t.__map(t.list, function(e, a) {
                return {
                    $orig: t.__get_orig(e),
                    g0: ((parseFloat(e.food_money) || 0) + (parseFloat(e.total) || 0)).toFixed(2)
                };
            }) : null);
            t._isMounted || (t.e0 = function(e) {
                t.price_modal = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, r = [];
    },
    "548e": function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(a("a34a"));
            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return r(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return r(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? r(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n;
            }
            function i(t, e, a, n, o, r, i) {
                try {
                    var s = t[r](i), l = s.value;
                } catch (t) {
                    return void a(t);
                }
                s.done ? e(l) : Promise.resolve(l).then(n, o);
            }
            function s(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), a.push.apply(a, n);
                }
                return a;
            }
            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(a), !0).forEach(function(e) {
                        c(t, e, a[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                    });
                }
                return t;
            }
            function c(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t;
            }
            var u = getApp(), d = {
                data: function() {
                    return l(l({
                        TabCur: 0,
                        scrollLeft: 0,
                        page: 1,
                        type: ""
                    }, this.configInfo), {}, {
                        color: "#FF6444",
                        list: "",
                        getUseInfo: "",
                        is_loadmore: !0,
                        price_modal: !1,
                        plus_price: "",
                        plus_oid: ""
                    });
                },
                onLoad: function(t) {
                    var e = getCurrentPages();
                    e[e.length - 2], console.log("options", t.type);
                },
                onReady: function() {
                    u.globalData.util.footer(this);
                },
                onShow: function() {
                    var e = this;
                    return function(t) {
                        return function() {
                            var e = this, a = arguments;
                            return new Promise(function(n, o) {
                                var r = t.apply(e, a);
                                function s(t) {
                                    i(r, n, o, s, l, "next", t);
                                }
                                function l(t) {
                                    i(r, n, o, s, l, "throw", t);
                                }
                                s(void 0);
                            });
                        };
                    }(n.default.mark(function a() {
                        return n.default.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return a.next = 2, e.login().then(function(t) {
                                    console.log("您已登陆！");
                                });

                              case 2:
                                e.getData(), console.log("全局", u.globalData.issub), u.globalData.issub && (u.globalData.util.request({
                                    url: "Setting/view",
                                    success: function(e) {
                                        console.log("获取配置", e.data.data), t.showModal({
                                            title: "提示",
                                            content: "允许接收订阅消息",
                                            success: function(a) {
                                                a.confirm && t.requestSubscribeMessage({
                                                    tmplIds: [ e.data.data.sys.template_grab, e.data.data.sys.template_cancel ],
                                                    success: function(t) {
                                                        console.log("已授权接收订阅消息");
                                                    }
                                                });
                                            }
                                        });
                                    }
                                }), console.log("支付成功的")), u.globalData.issub = !1;

                              case 6:
                              case "end":
                                return a.stop();
                            }
                        }, a);
                    }))();
                },
                watch: {
                    price_modal: function() {
                        this.plus_price = "";
                    }
                },
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {
                    this.pullDown.start(), this.list = [], this.page = 1, this.getData();
                },
                onReachBottom: function() {
                    this.is_loadmore ? (this.setData({
                        page: this.page + 1
                    }), this.getData()) : t.showToast({
                        title: "没有更多数据了~",
                        icon: "none"
                    });
                },
                onShareAppMessage: function() {},
                methods: {
                    pricePlusModal: function(t) {
                        this.price_modal = !0, this.plus_oid = t;
                    },
                    pricePlusConfirm: function() {
                        var e = this;
                        console.log(this.plus_price);
                        !/^(([1-9]\d*)|\d)(\.\d{1,2})?$/.test(this.plus_price) || this.plus_price <= 0 ? t.showToast({
                            title: "金额输入有误",
                            icon: "none"
                        }) : u.globalData.util.request({
                            url: "OrderPlus/addPlus",
                            data: {
                                price: this.plus_price,
                                o_id: this.plus_oid
                            },
                            success: function(a) {
                                t.requestPayment({
                                    timeStamp: a.data.data.paydata.timestamp.toString(),
                                    nonceStr: a.data.data.paydata.nonceStr,
                                    package: a.data.data.paydata.package,
                                    signType: "MD5",
                                    paySign: a.data.data.paydata.paySign,
                                    success: function(t) {
                                        e.price_modal = !1, e.page = 0, e.list = [], e.is_loadmore = !0, e.plus_price = "", 
                                        e.getData(), console.log("success"), console.log(a.data.data);
                                    },
                                    fail: function(t) {
                                        console.log("fail");
                                    }
                                });
                            }
                        }, !0);
                    },
                    getData: function() {
                        var t = this;
                        u.globalData.util.request({
                            url: "order/orderLst",
                            data: {
                                limit: 10,
                                page: this.page,
                                status: this.type
                            },
                            method: "GET",
                            success: function(e) {
                                console.log("21212332", e), t.pullDown.end();
                                for (var a = 0; a < e.data.data.list.length; a++) e.data.data.list[a].createtime = t.getDateTimeStamp(e.data.data.list[a].createtime);
                                if (e.data.data.list.length < 10 && (t.is_loadmore = !1), 1 == t.page) t.setData({
                                    list: e.data.data.list
                                }); else for (a = 0; a < e.data.data.list.length; a++) t.setData({
                                    list: [].concat(o(t.list), [ e.data.data.list[a] ])
                                });
                            }
                        }, !0);
                    },
                    msg: function() {
                        console.log("弹出框");
                    },
                    tabSelect: function(t) {
                        this.setData({
                            TabCur: t.currentTarget.dataset.id,
                            scrollLeft: 60 * t.currentTarget.dataset.id,
                            type: t.currentTarget.dataset.index
                        }), this.setData({
                            page: 1,
                            list: [],
                            is_loadmore: !0
                        }), this.getData();
                    },
                    handleZF: function(e) {
                        var a = this;
                        u.globalData.util.request({
                            url: "Order/pay",
                            data: {
                                o_id: this.list[e.currentTarget.dataset.index].id
                            },
                            success: function(e) {
                                console.log(e), t.requestPayment({
                                    timeStamp: e.data.data.paydata.timestamp.toString(),
                                    nonceStr: e.data.data.paydata.nonceStr,
                                    package: e.data.data.paydata.package,
                                    signType: "MD5",
                                    paySign: e.data.data.paydata.paySign,
                                    success: function(t) {
                                        console.log("success"), u.globalData.issub = !0, a.setData({
                                            page: 1,
                                            list: [],
                                            is_loadmore: !0
                                        }), a.getData(), u.globalData.util.request({
                                            url: "MsgSubscribe/toAllRider",
                                            data: {
                                                ordersn: e.data.data.order.ordersn
                                            }
                                        });
                                    },
                                    fail: function(t) {
                                        console.log("fail");
                                    }
                                });
                            }
                        }, !0);
                    },
                    handleDel: function(e) {
                        var a = this;
                        u.globalData.util.request({
                            url: "Order/del",
                            data: {
                                o_id: this.list[e.currentTarget.dataset.index].id
                            },
                            success: function(e) {
                                t.showToast({
                                    title: e.data.msg
                                }), setTimeout(function() {
                                    a.setData({
                                        page: 1,
                                        list: [],
                                        is_loadmore: !0
                                    }), a.getData();
                                }, 2e3);
                            }
                        }, !0);
                    },
                    handleQX: function(e) {
                        var a = this;
                        u.globalData.util.request({
                            url: "order/userCancelOrder",
                            data: {
                                o_id: this.list[e.currentTarget.dataset.index].id
                            },
                            success: function(e) {
                                200 == e.data.status ? (t.showToast({
                                    title: "取消成功",
                                    duration: 2e3
                                }), setTimeout(function() {
                                    a.setData({
                                        page: 1,
                                        is_loadmore: !0,
                                        list: []
                                    }), a.getData();
                                }, 2e3)) : t.showToast({
                                    title: "取消失败",
                                    icon: "none"
                                });
                            }
                        }, !0);
                    },
                    detail: function(e) {
                        var a = this, n = t.getStorageSync("sys");
                        console.log(n.template_cancel), t.requestSubscribeMessage({
                            tmplIds: [ n.template_cancel, n.template_grab ],
                            complete: function(n) {
                                t.navigateTo({
                                    url: "/gc_school/pages/order/detail?id=" + a.list[e.currentTarget.dataset.index].id
                                });
                            }
                        });
                    },
                    getDateDiff: function(t) {
                        var e = 36e5, a = 24 * e, n = new Date().getTime() - t;
                        if (!(n < 0)) {
                            var o = n / 2592e6, r = n / (7 * a), i = n / a, s = n / e, l = n / 6e4;
                            return o >= 1 ? parseInt(o) + "月前" : r >= 1 ? parseInt(r) + "周前" : i >= 1 ? parseInt(i) + "天前" : s >= 1 ? parseInt(s) + "小时前" : l >= 1 ? parseInt(l) + "分钟前" : "刚刚";
                        }
                    },
                    getDateTimeStamp: function(t) {
                        t = t;
                        var e = Date.parse(t.replace(/-/gi, "/"));
                        return this.getDateDiff(e);
                    },
                    getUsetInfo: function() {
                        console.log("占位：函数 getUsetInfo 未声明");
                    }
                }
            };
            e.default = d;
        }).call(this, a("543d").default);
    },
    "6b14": function(t, e, a) {
        a.r(e);
        var n = a("548e"), o = a.n(n);
        for (var r in n) "default" !== r && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(r);
        e.default = o.a;
    },
    "9c7f": function(t, e, a) {
        var n = a("ddea");
        a.n(n).a;
    },
    d4ef: function(t, e, a) {
        (function(t) {
            a("a8cf"), n(a("66fd"));
            var e = n(a("122a"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    },
    ddea: function(t, e, a) {}
}, [ [ "d4ef", "common/runtime", "common/vendor" ] ] ]);