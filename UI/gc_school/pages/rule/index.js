(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/rule/index" ], {
    "0079": function(n, t, e) {
        e.r(t);
        var o = e("70d6"), u = e.n(o);
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        t.default = u.a;
    },
    "5e5a": function(n, t, e) {
        var o = e("7d46");
        e.n(o).a;
    },
    "68cf": function(n, t, e) {
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return c;
        }), e.d(t, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            },
            mpHtml: function() {
                return Promise.all([ e.e("common/vendor"), e.e("uni_modules/mp-html/components/mp-html/mp-html") ]).then(e.bind(null, "e4b7"));
            }
        }, u = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    "6abc": function(n, t, e) {
        e.r(t);
        var o = e("68cf"), u = e("0079");
        for (var c in u) "default" !== c && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(c);
        e("5e5a");
        var a = e("f0c5"), i = Object(a.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = i.exports;
    },
    "70d6": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = getApp(), u = {
            data: function() {
                return {
                    data: {},
                    article_fee_content: ""
                };
            },
            onLoad: function(n) {
                var t = this;
                o.globalData.util.request({
                    url: "Setting/view",
                    success: function(n) {
                        t.setData({
                            data: n.data.data.sys
                        }), t.article_fee_content = t.escape2Html(t.data.vip_content), console.log(t.data.fee_content);
                    }
                });
            },
            onReady: function() {},
            onShow: function() {},
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {},
            onReachBottom: function() {},
            onShareAppMessage: function() {},
            methods: {}
        };
        t.default = u;
    },
    "7d46": function(n, t, e) {},
    c990: function(n, t, e) {
        (function(n) {
            e("a8cf"), o(e("66fd"));
            var t = o(e("6abc"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(t.default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "c990", "common/runtime", "common/vendor" ] ] ]);