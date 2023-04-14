(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/webview/index" ], {
    "09b2": function(n, e, o) {
        o.r(e);
        var t = o("fdf1"), i = o("a9f0");
        for (var u in i) "default" !== u && function(n) {
            o.d(e, n, function() {
                return i[n];
            });
        }(u);
        o("92b9");
        var l = o("f0c5"), r = Object(l.a)(i.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        e.default = r.exports;
    },
    3771: function(n, e, o) {
        (function(n) {
            o("a8cf"), t(o("66fd"));
            var e = t(o("09b2"));
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, n(e.default);
        }).call(this, o("543d").createPage);
    },
    "8ed2": function(n, e, o) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(o("a151"));
            var i = getApp(), u = {
                data: function() {
                    return {
                        url: "",
                        options: {},
                        isLogin: !1
                    };
                },
                onLoad: function(n) {
                    console.log(n), console.log(n.url), n.url = decodeURIComponent(n.url), console.log(n.url), 
                    n.url = n.url.replace(/amp;/g, ""), console.log(n.url), this.options = n, this.initData(n);
                },
                onReady: function() {},
                onShow: function() {
                    1 == this.isLogin && n.reLaunch({
                        url: "/gc_school/pages/home/index"
                    });
                },
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {
                    var n = this.url.replace(/openid/g, "shareOpenid");
                    console.log(n);
                    var e = "/gc_school/pages/webview/index?url=" + encodeURIComponent(n);
                    return console.log(e), {
                        path: e
                    };
                },
                methods: {
                    bindload: function(n) {
                        var e = n.detail.src;
                        console.log(e);
                    },
                    initData: function() {
                        var e = this, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, u = this;
                        if (o.url.indexOf("h5/index") > -1 || o.url.indexOf("gc-curriculum") > -1) {
                            if (!n.getStorageSync("token")) return setTimeout(function(n) {
                                e.isLogin = !0;
                            }, 1e3), this.login().then(function(n) {
                                console.log("您已登陆！");
                            }, function(n) {
                                console.log(n);
                            }), !1;
                            n.getStorageSync("openid") ? (o.url.indexOf("shareOpenid") > -1 ? o.url = o.url + "&openid=" + n.getStorageSync("openid") : o.url = o.url + "?openid=" + n.getStorageSync("openid") + "&wxapp_id=" + t.default.uniacid + "&s_id=" + n.getStorageSync("schoolId"), 
                            u.url = o.url) : i.globalData.util.request({
                                url: "WechatUser/view",
                                data: {
                                    s_id: n.getStorageSync("schoolId")
                                },
                                success: function(e) {
                                    n.setStorageSync("openid", e.data.data.openid), o.url.indexOf("shareOpenid") > -1 ? o.url = o.url + "&openid=" + n.getStorageSync("openid") : o.url = o.url + "?openid=" + n.getStorageSync("openid") + "&wxapp_id=" + t.default.uniacid + "&s_id=" + n.getStorageSync("schoolId"), 
                                    u.url = o.url;
                                }
                            }, !0);
                        } else console.log(222), this.url = o.url;
                    }
                }
            };
            e.default = u;
        }).call(this, o("543d").default);
    },
    "92b9": function(n, e, o) {
        var t = o("e998");
        o.n(t).a;
    },
    a9f0: function(n, e, o) {
        o.r(e);
        var t = o("8ed2"), i = o.n(t);
        for (var u in t) "default" !== u && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(u);
        e.default = i.a;
    },
    e998: function(n, e, o) {},
    fdf1: function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return i;
        }), o.d(e, "a", function() {});
        var t = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    }
}, [ [ "3771", "common/runtime", "common/vendor" ] ] ]);