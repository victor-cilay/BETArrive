(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/shop/index" ], {
    "261b": function(n, t, o) {
        var u = o("4c6f");
        o.n(u).a;
    },
    "350c": function(n, t, o) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = {
                data: function() {
                    return {};
                },
                onLoad: function(n) {
                    console.log(n);
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {},
                methods: {
                    jump: function(t) {
                        console.log(t.currentTarget.dataset.url), t.currentTarget.dataset.url && n.navigateTo({
                            url: t.currentTarget.dataset.url
                        });
                    }
                }
            };
            t.default = o;
        }).call(this, o("543d").default);
    },
    3684: function(n, t, o) {
        (function(n) {
            o("a8cf"), u(o("66fd"));
            var t = u(o("7d80"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, n(t.default);
        }).call(this, o("543d").createPage);
    },
    "4c6f": function(n, t, o) {},
    "4c90": function(n, t, o) {
        o.r(t);
        var u = o("350c"), e = o.n(u);
        for (var c in u) "default" !== c && function(n) {
            o.d(t, n, function() {
                return u[n];
            });
        }(c);
        t.default = e.a;
    },
    "7d80": function(n, t, o) {
        o.r(t);
        var u = o("b7dc"), e = o("4c90");
        for (var c in e) "default" !== c && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(c);
        o("261b");
        var a = o("f0c5"), r = Object(a.a)(e.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        t.default = r.exports;
    },
    b7dc: function(n, t, o) {
        o.d(t, "b", function() {
            return e;
        }), o.d(t, "c", function() {
            return c;
        }), o.d(t, "a", function() {
            return u;
        });
        var u = {
            cuCustom: function() {
                return o.e("colorui/components/cu-custom").then(o.bind(null, "24dd"));
            }
        }, e = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    }
}, [ [ "3684", "common/runtime", "common/vendor" ] ] ]);