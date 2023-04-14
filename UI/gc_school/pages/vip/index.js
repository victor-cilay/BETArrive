(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/vip/index" ], {
    "262b": function(t, e, n) {
        n.r(e);
        var a = n("cf86"), o = n.n(a);
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        e.default = o.a;
    },
    "35e2": function(t, e, n) {
        n.r(e);
        var a = n("dd0c"), o = n("262b");
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        n("fe3a");
        var u = n("f0c5"), i = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    "54a4": function(t, e, n) {},
    "73c5": function(t, e, n) {
        (function(t) {
            n("a8cf"), a(n("66fd"));
            var e = a(n("35e2"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    cf86: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = getApp(), a = {
                data: function() {
                    return {
                        money: .01,
                        data: {
                            user_month_fee: "",
                            user_year_fee: ""
                        },
                        type: 1,
                        userInfo: {
                            is_vip: 0,
                            dead_time: ""
                        },
                        check: !1
                    };
                },
                onLoad: function(t) {
                    var e = this;
                    n.globalData.util.request({
                        url: "Setting/view",
                        success: function(t) {
                            e.setData({
                                data: t.data.data.sys,
                                money: t.data.data.sys.user_month_fee
                            });
                        }
                    }), this.getuserInfo();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {},
                methods: {
                    checkagree: function() {
                        this.setData({
                            check: !this.check
                        });
                    },
                    getuserInfo: function() {
                        var e = this;
                        n.globalData.util.request({
                            url: "WechatUser/view",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                e.setData({
                                    userInfo: t.data.data
                                });
                            }
                        }, !0);
                    },
                    current: function(t) {
                        this.setData({
                            type: t.currentTarget.dataset.type,
                            money: t.currentTarget.dataset.money
                        });
                    },
                    submit: function() {
                        if (!this.check) return n.globalData.util.message("请先勾选协议", "", "error"), !1;
                        n.globalData.util.request({
                            url: "Pay/pay",
                            data: {
                                price: this.money,
                                type: this.type
                            },
                            success: function(e) {
                                console.log("支付参数", e.data.data), t.requestPayment({
                                    timeStamp: e.data.data.timestamp.toString(),
                                    nonceStr: e.data.data.nonceStr,
                                    package: e.data.data.package,
                                    signType: "MD5",
                                    paySign: e.data.data.paySign,
                                    success: function(e) {
                                        console.log("success"), t.navigateTo({
                                            url: "/gc_school/pages/user/index"
                                        });
                                    },
                                    fail: function(t) {
                                        console.log("fail");
                                    }
                                });
                            }
                        }, !0);
                    }
                }
            };
            e.default = a;
        }).call(this, n("543d").default);
    },
    dd0c: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {
            return a;
        });
        var a = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    fe3a: function(t, e, n) {
        var a = n("54a4");
        n.n(a).a;
    }
}, [ [ "73c5", "common/runtime", "common/vendor" ] ] ]);