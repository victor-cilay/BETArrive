var t = require("../@babel/runtime/helpers/typeof");

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "3ae1": function(t, e, n) {},
    4915: function(t, e, n) {
        var o = n("3ae1");
        n.n(o).a;
    },
    6556: function(t, e, n) {
        n.r(e);
        var o = n("660c");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("4915");
        var c = n("f0c5"), r = Object(c.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        e.default = r.exports;
    },
    "660c": function(t, e, n) {
        n.r(e);
        var o = n("c01c"), a = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = a.a;
    },
    c01c: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, function(t) {
                t && t.__esModule;
            }(n("a151"));
            var o = {
                data: function() {
                    return {};
                },
                onLaunch: function() {
                    var e = this;
                    console.log(111111111111), this.globalData.autoUpdate(), t.getSystemInfo({
                        success: function(n) {
                            e.globalData.StatusBar = n.statusBarHeight;
                            var o = t.getMenuButtonBoundingClientRect();
                            e.globalData.Custom = o, e.globalData.CustomBar = o.bottom + o.top - n.statusBarHeight, 
                            t.setStorageSync("StatusBar", n.statusBarHeight), t.setStorageSync("CustomBar", o.bottom + o.top - n.statusBarHeight);
                        }
                    });
                },
                onShow: function() {
                    console.log("显示");
                },
                onHide: function() {},
                onError: function(t) {},
                globalData: {
                    userInfo: null,
                    isload: !0,
                    overShare: function() {
                        t.onAppRoute(function(e) {
                            var n = getCurrentPages();
                            n[n.length - 1] && t.showShareMenu({
                                withShareTicket: !0,
                                menus: [ "shareAppMessage" ]
                            });
                        });
                    },
                    autoUpdate: function() {
                        var e = t.getUpdateManager();
                        e.onCheckForUpdate(function(n) {
                            n.hasUpdate && (e.onUpdateReady(function() {
                                t.showModal({
                                    title: "更新提示",
                                    content: "新版本已经准备好，是否重启应用？",
                                    success: function(t) {
                                        t.confirm && e.applyUpdate();
                                    }
                                });
                            }), e.onUpdateFailed(function() {
                                t.showModal({
                                    title: "已经有新版本咯~",
                                    content: "请您删除当前小程序，到微信 “发现-小程序” 页，重新搜索打开呦~"
                                });
                            }));
                        });
                    },
                    autoUpdates: function() {
                        var e = this;
                        if (t.canIUse("getUpdateManager")) {
                            var n = t.getUpdateManager();
                            n.onCheckForUpdate(function(o) {
                                console.log("版本", o.hasUpdate), o.hasUpdate && t.showModal({
                                    title: "更新提示",
                                    content: "检测到新版本，是否下载新版本并重启小程序？",
                                    success: function(o) {
                                        o.confirm ? e.downLoadAndUpdate(n) : o.cancel && t.showModal({
                                            title: "温馨提示~",
                                            content: "本次版本更新涉及到新的功能添加，旧版本无法正常访问的哦~",
                                            showCancel: !1,
                                            confirmText: "确定更新",
                                            success: function(t) {
                                                t.confirm && e.downLoadAndUpdate(n);
                                            }
                                        });
                                    }
                                });
                            });
                        } else t.showModal({
                            title: "提示",
                            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
                        });
                    },
                    downLoadAndUpdate: function(e) {
                        e.onUpdateReady(function() {
                            t.showModal({
                                title: "更新提示",
                                content: "新版本已经准备好，是否重启应用？",
                                success: function(t) {
                                    t.confirm && e.applyUpdate();
                                }
                            });
                        }), e.onUpdateFailed(function() {
                            t.showModal({
                                title: "已经有新版本了哟~",
                                content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                            });
                        });
                    },
                    util: n("81c1"),
                    tabBar: {
                        color: "#123",
                        selectedColor: "#f1f1f1",
                        borderStyle: "#87CEEB",
                        backgroundColor: "#87CEEB",
                        list: [ {
                            pagePath: "/gc_school/pages/home/index",
                            iconPath: "/static/images/home.png",
                            selectedIconPath: "/static/images/home_s.png",
                            text: "首页1"
                        }, {
                            pagePath: "/gc_school/pages/order/index",
                            iconPath: "/static/gc_school/images/public.png",
                            selectedIconPath: "/static/gc_school/images/public.png",
                            text: "我的发布"
                        }, {
                            pagePath: "/gc_school/pages/user/index",
                            iconPath: "/static/images/my.png",
                            selectedIconPath: "/static/images/my_s.png",
                            text: "我的"
                        } ]
                    },
                    siteInfo: n("a151")
                }
            };
            e.default = o;
        }).call(this, n("543d").default);
    },
    ea16: function(e, n, o) {
        (function(e) {
            o("a8cf");
            var n = s(o("6556")), a = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== t(e) && "function" != typeof e) return {
                    default: e
                };
                var n = l();
                if (n && n.has(e)) return n.get(e);
                var o = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var c in e) if (Object.prototype.hasOwnProperty.call(e, c)) {
                    var r = a ? Object.getOwnPropertyDescriptor(e, c) : null;
                    r && (r.get || r.set) ? Object.defineProperty(o, c, r) : o[c] = e[c];
                }
                return o.default = e, n && n.set(e, o), o;
            }(o("529c")), c = s(o("ac17")), r = s(o("1809")), i = (s(o("1f52")), s(o("a151"))), u = s(o("66fd"));
            function l() {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap();
                return l = function() {
                    return t;
                }, t;
            }
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function f(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function d(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, c.default.init();
            u.default.component("pt-footer", function() {
                o.e("components/footer/footer").then(function() {
                    return resolve(o("cb45"));
                }.bind(null, o)).catch(o.oe);
            }), u.default.mixin({
                data: function() {
                    return {
                        fileUrl: ""
                    };
                },
                onLoad: function() {
                    this.fileUrl = i.default.url.replace("/api", "/wximages");
                }
            }), u.default.mixin(r.default), u.default.config.productionTip = !1, n.default.mpType = "app", 
            Object.keys(a).forEach(function(t) {
                u.default.filter(t, a[t]);
            }), e(new u.default(function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(n), !0).forEach(function(e) {
                        d(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }({}, n.default))).$mount();
        }).call(this, o("543d").createApp);
    }
}, [ [ "ea16", "common/runtime", "common/vendor" ] ] ]);