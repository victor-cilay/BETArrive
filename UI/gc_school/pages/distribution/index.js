(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/distribution/index" ], {
    "15bd": function(n, t, e) {},
    "23b3": function(n, t, e) {
        var u = e("15bd");
        e.n(u).a;
    },
    5676: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = getApp(), o = {
            data: function() {
                return {
                    userInfo: {}
                };
            },
            onShow: function() {
                this.getUserInfo();
            },
            methods: {
                getUserInfo: function() {
                    var n = this;
                    u.globalData.util.request({
                        url: "WechatUser/spreadinfo",
                        data: {},
                        success: function(t) {
                            console.log(t.data.data), n.userInfo = t.data.data;
                        }
                    }, !0);
                }
            }
        };
        t.default = o;
    },
    6279: function(n, t, e) {
        (function(n) {
            e("a8cf"), u(e("66fd"));
            var t = u(e("f85b"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(t.default);
        }).call(this, e("543d").createPage);
    },
    e5cc: function(n, t, e) {
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {
            return u;
        });
        var u = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    f040: function(n, t, e) {
        e.r(t);
        var u = e("5676"), o = e.n(u);
        for (var a in u) "default" !== a && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(a);
        t.default = o.a;
    },
    f85b: function(n, t, e) {
        e.r(t);
        var u = e("e5cc"), o = e("f040");
        for (var a in o) "default" !== a && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        e("23b3");
        var c = e("f0c5"), r = Object(c.a)(o.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        t.default = r.exports;
    }
}, [ [ "6279", "common/runtime", "common/vendor" ] ] ]);