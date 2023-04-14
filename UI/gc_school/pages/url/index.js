(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/url/index" ], {
    "2ad4": function(n, o, t) {},
    "3f8e": function(n, o, t) {
        t.d(o, "b", function() {
            return e;
        }), t.d(o, "c", function() {
            return u;
        }), t.d(o, "a", function() {});
        var e = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    a893: function(n, o, t) {
        t.r(o);
        var e = t("ba26"), u = t.n(e);
        for (var a in e) "default" !== a && function(n) {
            t.d(o, n, function() {
                return e[n];
            });
        }(a);
        o.default = u.a;
    },
    ba26: function(n, o, t) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var e = {
            data: function() {
                return {
                    url: ""
                };
            },
            onLoad: function(n) {
                console.log(n), this.setData({
                    url: n.url
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
        o.default = e;
    },
    dd83: function(n, o, t) {
        t.r(o);
        var e = t("3f8e"), u = t("a893");
        for (var a in u) "default" !== a && function(n) {
            t.d(o, n, function() {
                return u[n];
            });
        }(a);
        t("fb0f");
        var f = t("f0c5"), c = Object(f.a)(u.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        o.default = c.exports;
    },
    f673: function(n, o, t) {
        (function(n) {
            t("a8cf"), e(t("66fd"));
            var o = e(t("dd83"));
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(o.default);
        }).call(this, t("543d").createPage);
    },
    fb0f: function(n, o, t) {
        var e = t("2ad4");
        t.n(e).a;
    }
}, [ [ "f673", "common/runtime", "common/vendor" ] ] ]);