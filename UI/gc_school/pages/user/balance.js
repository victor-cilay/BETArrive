(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/user/balance" ], {
    "18f1": function(n, t, e) {
        (function(n) {
            e("a8cf"), u(e("66fd"));
            var t = u(e("e4bd"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(t.default);
        }).call(this, e("543d").createPage);
    },
    2333: function(n, t, e) {
        e.r(t);
        var u = e("8512"), o = e.n(u);
        for (var a in u) "default" !== a && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(a);
        t.default = o.a;
    },
    "2d6b": function(n, t, e) {},
    "4ede": function(n, t, e) {
        var u = e("2d6b");
        e.n(u).a;
    },
    "6b60": function(n, t, e) {
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
    8512: function(n, t, e) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = getApp(), u = {
                data: function() {
                    return {
                        userInfo: {}
                    };
                },
                onShow: function() {
                    n.getStorageSync("token") && this.getUser();
                },
                methods: {
                    link: function(t) {
                        n.navigateTo({
                            url: t
                        });
                    },
                    getUser: function() {
                        var t = this;
                        e.globalData.util.request({
                            url: "WechatUser/view",
                            data: {
                                s_id: n.getStorageSync("schoolId")
                            },
                            success: function(n) {
                                console.log(n.data.data), t.userInfo = n.data.data;
                            }
                        }, !0);
                    }
                }
            };
            t.default = u;
        }).call(this, e("543d").default);
    },
    e4bd: function(n, t, e) {
        e.r(t);
        var u = e("6b60"), o = e("2333");
        for (var a in o) "default" !== a && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        e("4ede");
        var c = e("f0c5"), r = Object(c.a)(o.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        t.default = r.exports;
    }
}, [ [ "18f1", "common/runtime", "common/vendor" ] ] ]);