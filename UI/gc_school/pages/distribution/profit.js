(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/distribution/profit" ], {
    "631b": function(t, n, a) {},
    "8b3e": function(t, n, a) {
        var e = a("631b");
        a.n(e).a;
    },
    af29: function(t, n, a) {
        a.d(n, "b", function() {
            return u;
        }), a.d(n, "c", function() {
            return o;
        }), a.d(n, "a", function() {
            return e;
        });
        var e = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, u = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    b12f3: function(t, n, a) {
        (function(t) {
            a("a8cf"), e(a("66fd"));
            var n = e(a("eb96"));
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(n.default);
        }).call(this, a("543d").createPage);
    },
    eb96: function(t, n, a) {
        a.r(n);
        var e = a("af29"), u = a("f2de");
        for (var o in u) "default" !== o && function(t) {
            a.d(n, t, function() {
                return u[t];
            });
        }(o);
        a("8b3e");
        var c = a("f0c5"), i = Object(c.a)(u.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        n.default = i.exports;
    },
    f2de: function(t, n, a) {
        a.r(n);
        var e = a("f698"), u = a.n(e);
        for (var o in e) "default" !== o && function(t) {
            a.d(n, t, function() {
                return e[t];
            });
        }(o);
        n.default = u.a;
    },
    f698: function(t, n, a) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var e = getApp(), u = {
            data: function() {
                return {
                    data: {}
                };
            },
            onLoad: function() {
                this.getData();
            },
            methods: {
                getData: function() {
                    var t = this;
                    e.globalData.util.request({
                        url: "Distribution/incomeStatistics",
                        data: {},
                        success: function(n) {
                            t.data = n.data.data, console.log(n.data.data);
                        }
                    }, !0);
                }
            }
        };
        n.default = u;
    }
}, [ [ "b12f3", "common/runtime", "common/vendor" ] ] ]);