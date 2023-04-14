(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/seconddetail/index" ], {
    "40e8": function(n, e, t) {
        t.r(e);
        var o = t("9bde"), a = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = a.a;
    },
    "45e2": function(n, e, t) {
        t.r(e);
        var o = t("6a41"), a = t("40e8");
        for (var c in a) "default" !== c && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("bca7");
        var u = t("f0c5"), i = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = i.exports;
    },
    "6a41": function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return t.e("colorui/components/cu-custom").then(t.bind(null, "24dd"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    "9bde": function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t = getApp(), o = {
                data: function() {
                    return {
                        data: {
                            img: [],
                            price: "",
                            oldprice: "",
                            name: "",
                            addtime: "",
                            degree: "",
                            content: "",
                            phone: ""
                        },
                        indicatorDots: !0,
                        value: "",
                        autoplay: 0,
                        duration: "",
                        interval: "",
                        selfflag: ""
                    };
                },
                onLoad: function(n) {
                    console.log(n), this.getDetail(n.id);
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {},
                methods: {
                    getDetail: function(e) {
                        var o = this;
                        t.globalData.util.request({
                            url: "entry/wxapp/goodsDetail",
                            data: {
                                id: e,
                                openid: n.getStorageSync("openid")
                            },
                            success: function(n) {
                                console.log(n.data.data), o.setData({
                                    data: n.data.data
                                });
                            }
                        });
                    },
                    previewImage: function(e) {
                        var t = this.data.img, o = e.target.dataset.index;
                        n.previewImage({
                            urls: t,
                            current: t[o],
                            fail: function(e) {
                                n.showToast({
                                    title: "出错啦，请重试！",
                                    icon: "none",
                                    duration: 2e3
                                });
                            }
                        });
                    },
                    makecall: function(e) {
                        console.log(e), "" != n.getStorageSync("openid") ? n.makePhoneCall({
                            phoneNumber: e.currentTarget.dataset.phone,
                            success: function() {
                                console.log("成功拨打电话");
                            }
                        }) : n.showToast({
                            title: "请先登录",
                            icon: "none"
                        });
                    },
                    onFocus: function() {
                        console.log("占位：函数 onFocus 未声明");
                    }
                }
            };
            e.default = o;
        }).call(this, t("543d").default);
    },
    bca7: function(n, e, t) {
        var o = t("d074");
        t.n(o).a;
    },
    d074: function(n, e, t) {},
    e167: function(n, e, t) {
        (function(n) {
            t("a8cf"), o(t("66fd"));
            var e = o(t("45e2"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "e167", "common/runtime", "common/vendor" ] ] ]);