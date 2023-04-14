(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/help/index" ], {
    2142: function(n, t, e) {
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
    2320: function(n, t, e) {
        (function(n) {
            e("a8cf"), o(e("66fd"));
            var t = o(e("c351"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(t.default);
        }).call(this, e("543d").createPage);
    },
    "2b62": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = getApp(), u = {
            data: function() {
                return {
                    data: {},
                    article_guide: ""
                };
            },
            onLoad: function(n) {
                var t = this;
                o.globalData.util.request({
                    url: "Setting/view",
                    success: function(n) {
                        t.setData({
                            data: n.data.data.sys
                        }), t.article_guide = t.escape2Html(t.data.help_content);
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
    "2ff0": function(n, t, e) {
        e.r(t);
        var o = e("2b62"), u = e.n(o);
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        t.default = u.a;
    },
    c351: function(n, t, e) {
        e.r(t);
        var o = e("2142"), u = e("2ff0");
        for (var c in u) "default" !== c && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(c);
        e("c67f");
        var a = e("f0c5"), i = Object(a.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = i.exports;
    },
    c67f: function(n, t, e) {
        var o = e("fc52");
        e.n(o).a;
    },
    fc52: function(n, t, e) {}
}, [ [ "2320", "common/runtime", "common/vendor" ] ] ]);