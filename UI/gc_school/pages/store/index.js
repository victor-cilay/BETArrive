(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/store/index" ], {
    "3d0f": function(n, t, o) {
        (function(n) {
            o("a8cf"), e(o("66fd"));
            var t = e(o("b31a"));
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, n(t.default);
        }).call(this, o("543d").createPage);
    },
    4552: function(n, t, o) {
        o.r(t);
        var e = o("bf87"), a = o.n(e);
        for (var u in e) "default" !== u && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(u);
        t.default = a.a;
    },
    "5a27": function(n, t, o) {},
    8118: function(n, t, o) {
        o.d(t, "b", function() {
            return a;
        }), o.d(t, "c", function() {
            return u;
        }), o.d(t, "a", function() {
            return e;
        });
        var e = {
            cuCustom: function() {
                return o.e("colorui/components/cu-custom").then(o.bind(null, "24dd"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    a292: function(n, t, o) {
        var e = o("5a27");
        o.n(e).a;
    },
    b31a: function(n, t, o) {
        o.r(t);
        var e = o("8118"), a = o("4552");
        for (var u in a) "default" !== u && function(n) {
            o.d(t, n, function() {
                return a[n];
            });
        }(u);
        o("a292");
        var c = o("f0c5"), r = Object(c.a)(a.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        t.default = r.exports;
    },
    bf87: function(n, t, o) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = getApp(), e = {
                data: function() {
                    return {
                        list: []
                    };
                },
                onLoad: function(t) {
                    var e = this;
                    n.getStorageSync("schoolId"), o.globalData.util.request({
                        url: "entry/wxapp/store",
                        data: {
                            rest_id: t.id
                        },
                        success: function(n) {
                            console.log("12121", n), 0 == n.data.errno && e.setData({
                                list: n.data.data
                            });
                        }
                    });
                },
                onShow: function(n) {},
                onReady: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {},
                methods: {
                    bank_content: function(t) {
                        console.log(t), 1 == t.currentTarget.dataset.click ? n.navigateTo({
                            url: "../foold/foold?id=" + t.currentTarget.dataset.id
                        }) : n.showToast({
                            title: "该商家下暂无商品",
                            icon: "none"
                        });
                    }
                }
            };
            t.default = e;
        }).call(this, o("543d").default);
    }
}, [ [ "3d0f", "common/runtime", "common/vendor" ] ] ]);