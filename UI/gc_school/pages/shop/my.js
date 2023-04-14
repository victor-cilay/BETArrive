(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/shop/my" ], {
    "262c": function(t, n, o) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = getApp(), e = {
                data: function() {
                    return {
                        data: {
                            today_count: 0,
                            total_count: 0,
                            total_sum: 0,
                            school: "",
                            store: {
                                deadtime: ""
                            }
                        },
                        id: "",
                        navList: [ {
                            icon: "https://test.fkynet.net/wximage/store/icon1.png",
                            name: "金豆充值",
                            url: "/gc_school/pages/shop/pointrecharge"
                        }, {
                            icon: "https://test.fkynet.net/wximage/store/icon3.png",
                            name: "订单管理",
                            url: "/gc_school/pages/shop/order"
                        }, {
                            icon: "https://test.fkynet.net/wximage/store/icon4.png",
                            name: "分类管理",
                            url: "/gc_school/pages/shop/cate"
                        }, {
                            icon: "https://test.fkynet.net/wximage/store/icon5.png",
                            name: "商品管理",
                            url: "/gc_school/pages/shop/goods"
                        } ],
                        show: !1
                    };
                },
                onLoad: function(t) {
                    console.log(t), t.id && this.setData({
                        id: t.id
                    });
                },
                onReady: function() {},
                onShow: function() {
                    this.getStore();
                },
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: {
                    getStore: function() {
                        var t = this;
                        o.globalData.util.request({
                            url: "ZhBusiness/index",
                            method: "GET",
                            data: {
                                id: this.id
                            },
                            success: function(n) {
                                console.log(n.data.data.is_inform), t.show = 1 == n.data.data.is_inform, t.setData({
                                    data: n.data.data
                                });
                            }
                        }, !0);
                    },
                    jump: function(n) {
                        console.log(n.currentTarget.dataset.url), n.currentTarget.dataset.url && t.navigateTo({
                            url: n.currentTarget.dataset.url
                        });
                    }
                }
            };
            n.default = e;
        }).call(this, o("543d").default);
    },
    "3d9d": function(t, n, o) {},
    "4a93": function(t, n, o) {
        o.d(n, "b", function() {
            return a;
        }), o.d(n, "c", function() {
            return c;
        }), o.d(n, "a", function() {
            return e;
        });
        var e = {
            cuCustom: function() {
                return o.e("colorui/components/cu-custom").then(o.bind(null, "24dd"));
            }
        }, a = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(n) {
                t.show = !1;
            }, t.e1 = function(n) {
                t.show = !1;
            });
        }, c = [];
    },
    "62f4": function(t, n, o) {
        var e = o("3d9d");
        o.n(e).a;
    },
    "9bad": function(t, n, o) {
        o.r(n);
        var e = o("4a93"), a = o("bc00");
        for (var c in a) "default" !== c && function(t) {
            o.d(n, t, function() {
                return a[t];
            });
        }(c);
        o("62f4"), o("fac8");
        var u = o("f0c5"), i = Object(u.a)(a.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        n.default = i.exports;
    },
    a4de: function(t, n, o) {},
    bc00: function(t, n, o) {
        o.r(n);
        var e = o("262c"), a = o.n(e);
        for (var c in e) "default" !== c && function(t) {
            o.d(n, t, function() {
                return e[t];
            });
        }(c);
        n.default = a.a;
    },
    d189: function(t, n, o) {
        (function(t) {
            o("a8cf"), e(o("66fd"));
            var n = e(o("9bad"));
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, t(n.default);
        }).call(this, o("543d").createPage);
    },
    fac8: function(t, n, o) {
        var e = o("a4de");
        o.n(e).a;
    }
}, [ [ "d189", "common/runtime", "common/vendor" ] ] ]);