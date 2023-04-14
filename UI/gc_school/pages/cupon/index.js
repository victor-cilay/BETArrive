(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/cupon/index" ], {
    "285a": function(t, e, n) {
        var a = n("a22e");
        n.n(a).a;
    },
    "4cd2": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return a;
        });
        var a = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(e) {
                t.tab_index = 0;
            }, t.e1 = function(e) {
                t.tab_index = 1;
            });
        }, r = [];
    },
    "67b8": function(t, e, n) {
        (function(t) {
            n("a8cf"), a(n("66fd"));
            var e = a(n("b996"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    "9f22": function(t, e, n) {
        (function(t) {
            function n(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(a), !0).forEach(function(e) {
                        o(t, e, a[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                    });
                }
                return t;
            }
            function o(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = getApp(), u = {
                data: function() {
                    return {
                        showNodata: !1,
                        erranderId: 2,
                        address: {
                            available: []
                        },
                        fee: "",
                        mylist: "",
                        list: "",
                        form: {},
                        yhj_list: [],
                        tab_index: 0
                    };
                },
                onLoad: function(t) {
                    console.log("接收的金额", t), this.setData({
                        fee: Number(Number(t.total) + Number(t.coupon)).toFixed(2)
                    }), this.getData();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {},
                methods: {
                    getData: function() {
                        var e = this;
                        r.globalData.util.request({
                            url: "UserCoupon/index",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                use_status: 0
                            },
                            success: function(t) {
                                console.log("21222", t), e.setData({
                                    mylist: t.data.data.list
                                }), e.getDataCupon();
                            }
                        }, !0);
                    },
                    getDataCupon: function() {
                        var e = this;
                        r.globalData.util.request({
                            url: "UserCoupon/couponindex",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log("可领取", t.data.data), e.setData({
                                    list: t.data.data
                                });
                            }
                        }, !0);
                    },
                    handleGet: function(e) {
                        var n = this;
                        r.globalData.util.request({
                            url: "UserCoupon/add",
                            data: {
                                o_id: e.currentTarget.dataset.id,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                n.getData(), n.getDataCupon(), n.list = [];
                            }
                        }, !0);
                    },
                    handleUser: function(e) {
                        var n = getCurrentPages(), o = n[n.length - 2];
                        console.log(e), "gc_school/pages/public/index" == o.route ? (console.log("上个页面传过来的", this.fee), 
                        console.log("所选优惠券", e.currentTarget.dataset), Number(this.fee) < Number(e.currentTarget.dataset.y_money) && 0 == e.currentTarget.dataset.type || Number(this.fee) < Number(e.currentTarget.dataset.cut_num) && 1 == e.currentTarget.dataset.type ? t.showToast({
                            title: "优惠券不可用",
                            icon: "none"
                        }) : (o.setData({
                            form: a(a({}, o.data.form), {}, {
                                co_id: e.currentTarget.dataset.id,
                                y_money: e.currentTarget.dataset.y_money,
                                co_title: e.currentTarget.dataset.title
                            })
                        }), t.navigateBack({
                            cupon: e.currentTarget.dataset.id
                        }))) : t.navigateBack({
                            id: id
                        });
                    },
                    del: function() {
                        console.log("占位：函数 del 未声明");
                    }
                }
            };
            e.default = u;
        }).call(this, n("543d").default);
    },
    a22e: function(t, e, n) {},
    b996: function(t, e, n) {
        n.r(e);
        var a = n("4cd2"), o = n("fa0b");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("285a");
        var u = n("f0c5"), c = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = c.exports;
    },
    fa0b: function(t, e, n) {
        n.r(e);
        var a = n("9f22"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = o.a;
    }
}, [ [ "67b8", "common/runtime", "common/vendor" ] ] ]);