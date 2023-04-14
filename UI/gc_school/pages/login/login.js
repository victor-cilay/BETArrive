(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/login/login" ], {
    "0887": function(n, e, o) {
        o.d(e, "b", function() {
            return c;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {
            return t;
        });
        var t = {
            cuCustom: function() {
                return o.e("colorui/components/cu-custom").then(o.bind(null, "24dd"));
            }
        }, c = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "14af": function(n, e, o) {
        (function(n) {
            o("a8cf"), t(o("66fd"));
            var e = t(o("46eb"));
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, n(e.default);
        }).call(this, o("543d").createPage);
    },
    "17c7": function(n, e, o) {},
    "1f9c": function(n, e, o) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = getApp(), t = {
                data: function() {
                    return {
                        bg: ""
                    };
                },
                onLoad: function(e) {
                    var o = n.getStorageSync("sys");
                    this.bg = o.xcx_login_bg;
                },
                methods: {
                    bindgetuserinfo: function(e) {
                        console.log("打印", e);
                        var t = this;
                        n.getUserProfile({
                            desc: "用于获取用户信息",
                            success: function(e) {
                                console.log(e), n.login({
                                    success: function(c) {
                                        console.log(c), o.globalData.util.request({
                                            url: "Login/miniLogin",
                                            data: {
                                                code: c.code,
                                                nickName: e.userInfo.nickName,
                                                avatar: e.userInfo.avatarUrl,
                                                spid: n.getStorageSync("spid")
                                            },
                                            success: function(o) {
                                                n.setStorageSync("userinfo", e.userInfo), t.loginuserinfo = e.userInfo, t.setData({
                                                    islogin: !0
                                                }), console.log(o.data.token), n.setStorageSync("token", o.data.token), n.navigateBack({
                                                    delta: 1
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                }
            };
            e.default = t;
        }).call(this, o("543d").default);
    },
    "46eb": function(n, e, o) {
        o.r(e);
        var t = o("0887"), c = o("5706");
        for (var a in c) "default" !== a && function(n) {
            o.d(e, n, function() {
                return c[n];
            });
        }(a);
        o("aebf");
        var u = o("f0c5"), i = Object(u.a)(c.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        e.default = i.exports;
    },
    5706: function(n, e, o) {
        o.r(e);
        var t = o("1f9c"), c = o.n(t);
        for (var a in t) "default" !== a && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(a);
        e.default = c.a;
    },
    aebf: function(n, e, o) {
        var t = o("17c7");
        o.n(t).a;
    }
}, [ [ "14af", "common/runtime", "common/vendor" ] ] ]);