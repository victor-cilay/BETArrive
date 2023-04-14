(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/ence_push/ence_push" ], {
    "019b": function(e, t, n) {},
    3570: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return u;
        }), n.d(t, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    5146: function(e, t, n) {
        n.r(t);
        var a = n("9f56"), u = n.n(a);
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = u.a;
    },
    "905d": function(e, t, n) {
        (function(e) {
            n("a8cf"), a(n("66fd"));
            var t = a(n("a936"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    "9f56": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("5cd2"), u = !1, i = "https://openapi2.xiaoshentui.com/", r = {
                data: function() {
                    return {
                        avatarurl: "",
                        nickname: "",
                        isShowtip: !1,
                        tip: ""
                    };
                },
                onShow: function() {
                    e.getStorageSync("push_avatarurl") && e.getStorageSync("push_nickname") && this.setData({
                        avatarurl: e.getStorageSync("push_avatarurl"),
                        nickname: e.getStorageSync("push_nickname")
                    });
                },
                methods: {
                    onGotUserInfo: function(t) {
                        this.setData({
                            avatarurl: t.detail.userInfo.avatarUrl,
                            nickname: t.detail.userInfo.nickName
                        }), e.setStorageSync("push_avatarurl", t.detail.userInfo.avatarUrl), e.setStorageSync("push_nickname", t.detail.userInfo.nickName);
                    },
                    subscribe: function(t) {
                        if (!e.getStorageSync("ald_push_openid")) return this.debugModel("openid未上报");
                        if (!u) {
                            if (u = !0, !this.isSubscribe()) return this.debugModel("基础库版本不支持订阅消息");
                            var n = this, r = {
                                avatarurl: this.avatarurl,
                                nickname: this.nickname,
                                app_key: a.app_key,
                                openid: e.getStorageSync("ald_push_openid")
                            };
                            e.request({
                                url: i + "api/v1/getpt",
                                data: {
                                    app_key: a.app_key
                                },
                                method: "POST",
                                success: function(t) {
                                    var a = t.data.data.list.map(function(e) {
                                        return e.template_id;
                                    });
                                    e.requestSubscribeMessage({
                                        tmplIds: a,
                                        success: function(t) {
                                            var a = [];
                                            for (var o in t) "accept" === t[o] && a.push(o);
                                            if (!a.length) return u = !1, n.debugModel("未订阅模版");
                                            r.tlis = a, e.request({
                                                url: i + "api/v1/reportdt",
                                                data: r,
                                                method: "POST",
                                                success: function(e) {
                                                    u = !1, n.debugModel("订阅成功");
                                                },
                                                fail: function(e) {
                                                    u = !1, n.debugModel("订阅成功模版上报失败");
                                                }
                                            });
                                        },
                                        fail: function(e) {
                                            u = !1, n.debugModel("订阅失败");
                                        }
                                    });
                                },
                                fail: function(e) {
                                    u = !1, n.debugModel("获取模版ID请求失败");
                                }
                            });
                        }
                    },
                    isSubscribe: function() {
                        var t = e.getSystemInfoSync();
                        if (void 0 !== t.SDKVersion) {
                            var n = parseInt(t.SDKVersion.split(".").join(""));
                            return console.log("版本", n), n >= 282;
                        }
                        return !1;
                    },
                    debugModel: function(t) {
                        e.showModal({
                            title: "小神推提示",
                            content: t
                        });
                    }
                }
            };
            t.default = r;
        }).call(this, n("543d").default);
    },
    a936: function(e, t, n) {
        n.r(t);
        var a = n("3570"), u = n("5146");
        for (var i in u) "default" !== i && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(i);
        n("bede");
        var r = n("f0c5"), o = Object(r.a)(u.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = o.exports;
    },
    bede: function(e, t, n) {
        var a = n("019b");
        n.n(a).a;
    }
}, [ [ "905d", "common/runtime", "common/vendor" ] ] ]);