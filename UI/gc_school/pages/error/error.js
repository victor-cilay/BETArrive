(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/error/error" ], {
    1410: function(n, e, t) {
        var o = t("7997");
        t.n(o).a;
    },
    1944: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(t("a34a"));
            function r(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function u(n, e, t, o, r, u, a) {
                try {
                    var c = n[u](a), i = c.value;
                } catch (n) {
                    return void t(n);
                }
                c.done ? e(i) : Promise.resolve(i).then(o, r);
            }
            r(t("a151")), getApp();
            var a = {
                data: function() {
                    return {
                        errorList: []
                    };
                },
                onLoad: function(e) {
                    this.errorList = n.getStorageSync("onError");
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
                    request: function(e) {
                        var t = e.url, o = e.data, r = e.header, u = e.method;
                        n.request({
                            url: t,
                            data: o,
                            header: r,
                            method: u,
                            success: function(n) {
                                n.data, n.statusCode, n.header;
                            },
                            fail: function(n) {}
                        });
                    },
                    copy: function(e) {
                        n.setClipboardData({
                            data: JSON.stringify(e),
                            success: function(n) {
                                console.log(n);
                            },
                            fail: function(n) {
                                console.log(n);
                            }
                        });
                    },
                    del: function() {
                        var e = this;
                        return function(n) {
                            return function() {
                                var e = this, t = arguments;
                                return new Promise(function(o, r) {
                                    var a = n.apply(e, t);
                                    function c(n) {
                                        u(a, o, r, c, i, "next", n);
                                    }
                                    function i(n) {
                                        u(a, o, r, c, i, "throw", n);
                                    }
                                    c(void 0);
                                });
                            };
                        }(o.default.mark(function t() {
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n.removeStorageSync("onError"), e.errorList = [], t.next = 4, e.tips.success("清除成功！");

                                  case 4:
                                    n.navigateBack({
                                        delta: 2
                                    });

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            e.default = a;
        }).call(this, t("543d").default);
    },
    7997: function(n, e, t) {},
    ab99: function(n, e, t) {
        t.r(e);
        var o = t("1944"), r = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = r.a;
    },
    caf1: function(n, e, t) {
        t.d(e, "b", function() {
            return r;
        }), t.d(e, "c", function() {
            return u;
        }), t.d(e, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return t.e("colorui/components/cu-custom").then(t.bind(null, "24dd"));
            }
        }, r = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    ff1a: function(n, e, t) {
        (function(n) {
            t("a8cf"), o(t("66fd"));
            var e = o(t("ff6f"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    },
    ff6f: function(n, e, t) {
        t.r(e);
        var o = t("caf1"), r = t("ab99");
        for (var u in r) "default" !== u && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(u);
        t("1410");
        var a = t("f0c5"), c = Object(a.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = c.exports;
    }
}, [ [ "ff1a", "common/runtime", "common/vendor" ] ] ]);