(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/secondhand/user" ], {
    "0ea1": function(n, t, o) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = getApp(), e = {
                data: function() {
                    return {
                        data: {
                            fav_count: "",
                            footprint_count: ""
                        },
                        loginuserinfo: {
                            avatarUrl: "",
                            nickName: ""
                        },
                        islogin: !1
                    };
                },
                onLoad: function(t) {
                    n.getStorageSync("token") ? (console.log("用户信息", n.getStorageSync("userinfo")), 
                    this.setData({
                        loginuserinfo: n.getStorageSync("userinfo"),
                        islogin: !0
                    }), console.log(t, "---11---"), this.getCount()) : (n.showToast({
                        title: "请先登录",
                        icon: "none"
                    }), setTimeout(function() {
                        n.navigateBack({
                            delta: 1,
                            success: function() {
                                n.removeStorage({
                                    key: "json"
                                });
                            },
                            fail: function() {
                                n.navigateTo({
                                    url: "/gc_school/pages/home/index"
                                });
                            }
                        });
                    }, 2e3));
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: {
                    getCount: function() {
                        var t = this;
                        o.globalData.util.request({
                            url: "Dmhmarketuser/collection",
                            data: {
                                s_id: n.getStorageSync("schoolId")
                            },
                            success: function(n) {
                                console.log(n), t.setData({
                                    data: n.data.data
                                });
                            }
                        }, !0);
                    },
                    jump: function(t) {
                        n.navigateTo({
                            url: t.currentTarget.dataset.url
                        });
                    }
                }
            };
            t.default = e;
        }).call(this, o("543d").default);
    },
    "3de3": function(n, t, o) {
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
    "87fe": function(n, t, o) {
        o.r(t);
        var e = o("0ea1"), a = o.n(e);
        for (var u in e) "default" !== u && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(u);
        t.default = a.a;
    },
    dd90: function(n, t, o) {
        (function(n) {
            o("a8cf"), e(o("66fd"));
            var t = e(o("e8fa"));
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, n(t.default);
        }).call(this, o("543d").createPage);
    },
    e8fa: function(n, t, o) {
        o.r(t);
        var e = o("3de3"), a = o("87fe");
        for (var u in a) "default" !== u && function(n) {
            o.d(t, n, function() {
                return a[n];
            });
        }(u);
        o("e9f5");
        var c = o("f0c5"), i = Object(c.a)(a.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        t.default = i.exports;
    },
    e9f5: function(n, t, o) {
        var e = o("eac8");
        o.n(e).a;
    },
    eac8: function(n, t, o) {}
}, [ [ "dd90", "common/runtime", "common/vendor" ] ] ]);