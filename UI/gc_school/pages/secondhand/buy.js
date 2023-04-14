(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/secondhand/buy" ], {
    "31bd": function(a, t, e) {
        e.r(t);
        var n = e("809b"), o = e("fd4c");
        for (var u in o) "default" !== u && function(a) {
            e.d(t, a, function() {
                return o[a];
            });
        }(u);
        e("dd43");
        var i = e("f0c5"), c = Object(i.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = c.exports;
    },
    "809b": function(a, t, e) {
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    "82e0": function(a, t, e) {
        (function(a) {
            e("a8cf"), n(e("66fd"));
            var t = n(e("31bd"));
            function n(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, a(t.default);
        }).call(this, e("543d").createPage);
    },
    "982e": function(a, t, e) {
        (function(a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = getApp(), n = {
                data: function() {
                    return {
                        data: {
                            img: "",
                            name: "",
                            price: ""
                        },
                        id: ""
                    };
                },
                onLoad: function(a) {
                    console.log(a), this.setData({
                        id: a.id
                    }), this.getDetail();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {},
                methods: {
                    getDetail: function() {
                        var t = this;
                        e.globalData.util.request({
                            url: "Dmhmarketgoods/view",
                            data: {
                                m_id: t.id,
                                s_id: a.getStorageSync("schoolId")
                            },
                            success: function(a) {
                                console.log(a.data.data), t.setData({
                                    data: a.data.data
                                });
                            }
                        });
                    },
                    formSubmit: function(t) {
                        var n = t.detail.value.linkman.replace(/\s+/g, ""), o = t.detail.value.phone, u = t.detail.value.remark.replace(/\s+/g, "");
                        if (/^1[3456789]\d{9}$/.test(o)) if (n) {
                            console.log(t.detail.value.linkman.replace(/\s+/g, ""));
                            var i = this;
                            e.globalData.util.request({
                                url: "Dmhmarketorder/pay",
                                data: {
                                    id: i.id,
                                    s_id: a.getStorageSync("schoolId"),
                                    linkman: n,
                                    phone: o,
                                    remark: u,
                                    u_id: i.data.u_id
                                },
                                success: function(t) {
                                    console.log(t.data.data, "---"), a.requestPayment({
                                        timeStamp: t.data.data.timestamp.toString(),
                                        nonceStr: t.data.data.nonceStr,
                                        package: t.data.data.package,
                                        signType: "MD5",
                                        paySign: t.data.data.paySign,
                                        success: function(n) {
                                            e.globalData.util.request({
                                                url: "MsgSubscribe/toSeller",
                                                data: {
                                                    ordersn: t.data.data.order_id
                                                }
                                            }), setTimeout(function() {
                                                a.redirectTo({
                                                    url: "/gc_school/pages/secondhand/mybuy"
                                                });
                                            }, 2e3);
                                        },
                                        fail: function(a) {
                                            console.log(a, "---11--"), e.globalData.util.request({
                                                url: "Dmhmarketorder/cancels",
                                                data: {
                                                    ids: i.id
                                                },
                                                success: function(a) {}
                                            });
                                        }
                                    });
                                }
                            }, !0);
                        } else e.globalData.util.message("请输入联系人姓名", "", "error"); else e.globalData.util.message("请输入正确的手机号", "", "error");
                    }
                }
            };
            t.default = n;
        }).call(this, e("543d").default);
    },
    dd43: function(a, t, e) {
        var n = e("f623");
        e.n(n).a;
    },
    f623: function(a, t, e) {},
    fd4c: function(a, t, e) {
        e.r(t);
        var n = e("982e"), o = e.n(n);
        for (var u in n) "default" !== u && function(a) {
            e.d(t, a, function() {
                return n[a];
            });
        }(u);
        t.default = o.a;
    }
}, [ [ "82e0", "common/runtime", "common/vendor" ] ] ]);