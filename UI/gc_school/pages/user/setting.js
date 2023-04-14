(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/user/setting" ], {
    "047c": function(n, t, c) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = c("a151"), u = {
                data: function() {
                    return {
                        version: e.version,
                        sys: {},
                        msg: ""
                    };
                },
                onLoad: function(t) {
                    this.sys = n.getStorageSync("sys");
                },
                methods: {}
            };
            t.default = u;
        }).call(this, c("543d").default);
    },
    "85c4": function(n, t, c) {},
    "89c2": function(n, t, c) {
        c.d(t, "b", function() {
            return u;
        }), c.d(t, "c", function() {
            return o;
        }), c.d(t, "a", function() {
            return e;
        });
        var e = {
            cuCustom: function() {
                return c.e("colorui/components/cu-custom").then(c.bind(null, "24dd"));
            }
        }, u = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    a4d7: function(n, t, c) {
        c.r(t);
        var e = c("89c2"), u = c("c7c7");
        for (var o in u) "default" !== o && function(n) {
            c.d(t, n, function() {
                return u[n];
            });
        }(o);
        c("e706");
        var a = c("f0c5"), r = Object(a.a)(u.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        t.default = r.exports;
    },
    c7c7: function(n, t, c) {
        c.r(t);
        var e = c("047c"), u = c.n(e);
        for (var o in e) "default" !== o && function(n) {
            c.d(t, n, function() {
                return e[n];
            });
        }(o);
        t.default = u.a;
    },
    dc4f: function(n, t, c) {
        (function(n) {
            c("a8cf"), e(c("66fd"));
            var t = e(c("a4d7"));
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = c, n(t.default);
        }).call(this, c("543d").createPage);
    },
    e706: function(n, t, c) {
        var e = c("85c4");
        c.n(e).a;
    }
}, [ [ "dc4f", "common/runtime", "common/vendor" ] ] ]);