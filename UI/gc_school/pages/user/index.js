(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/user/index" ], {
    1456: function(t, e, n) {
        (function(t) {
            n("a8cf"), o(n("66fd"));
            var e = o(n("deff"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    "40c9": function(t, e, n) {
        n.r(e);
        var o = n("7e3b"), a = n.n(o);
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = a.a;
    },
    4117: function(t, e, n) {},
    "4d6b": function(t, e, n) {
        var o = n("a731");
        n.n(o).a;
    },
    "7e3b": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a"));
            function a(t, e, n, o, a, s, c) {
                try {
                    var i = t[s](c), r = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(r) : Promise.resolve(r).then(o, a);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, s) {
                        var c = t.apply(e, n);
                        function i(t) {
                            a(c, o, s, i, r, "next", t);
                        }
                        function r(t) {
                            a(c, o, s, i, r, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach(function(e) {
                        r(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var u = getApp(), l = {
                data: function() {
                    return i(i({}, this.configInfo), {}, {
                        navList: [ {
                            name: "我的发布",
                            icon: "/static/icon/me/icon1.png",
                            path: "/gc_school/pages/article/my",
                            role: "1",
                            is_login: "1"
                        }, {
                            name: "我的喜欢",
                            icon: "/static/icon/me/icon2.png",
                            path: "/gc_school/pages/article/favorite",
                            role: "1",
                            is_login: "1"
                        }, {
                            name: "我的打赏",
                            icon: "/static/icon/me/icon3.png",
                            path: "/gc_school/pages/user/reward",
                            role: "1",
                            is_login: "1"
                        }, {
                            name: "我的地址",
                            icon: "/static/icon/me/icon4.png",
                            path: "/gc_school/pages/address/index",
                            role: "1",
                            is_login: "1"
                        }, {
                            name: "联系客服",
                            icon: "/static/icon/me/kefu.png",
                            func: "cell",
                            role: "1",
                            is_login: "0"
                        }, {
                            name: "接单大厅",
                            icon: "/static/icon/me/icon7.png",
                            path: "/gc_school/pages/grab/index",
                            role: "2",
                            is_login: "0"
                        }, {
                            name: "我的礼券",
                            icon: "/static/icon/me/icon12.png",
                            path: "/gc_school/pages/cupon/index",
                            role: "1",
                            is_login: "1"
                        }, {
                            name: "消息订阅",
                            icon: "/static/icon/me/icon11.png",
                            func: "msg",
                            role: "1",
                            is_login: "0"
                        }, {
                            name: "设置管理",
                            icon: "/static/icon/me/icon13.png",
                            path: "/gc_school/pages/user/setting",
                            role: "1",
                            is_login: "0"
                        } ],
                        userInfo: {
                            coupon: 0,
                            balance: 0,
                            run_status: "",
                            has_store: 0,
                            store_id: ""
                        },
                        islogin: !1,
                        loginuserinfo: [],
                        logo: "",
                        getUseInfo: !1,
                        sysparment: {
                            runner_auth_switch: 0,
                            vip: 0
                        },
                        chatStatus: 0
                    });
                },
                onLoad: function(t) {
                    this.getChatStatus();
                },
                onReady: function() {},
                onShow: function() {
                    t.getStorageSync("token") && (this.getUser(), this.loginuserinfo = t.getStorageSync("userinfo"), 
                    this.islogin = !0), this.getconfig(), console.log("1221221", t.getStorageSync("userinfo")), 
                    this.setData({});
                },
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: {
                    getChatStatus: function() {
                        var t = this;
                        u.globalData.util.request({
                            url: "ZhChat/check",
                            success: function(e) {
                                console.log(e), "已授权" == e.data.msg && (t.chatStatus = 1, t.navList.splice(8, 0, {
                                    name: "消息列表",
                                    icon: "/static/icon/me/icon6.png",
                                    path: "/gc_school/pages/chat/chat_list",
                                    role: "1",
                                    is_login: "0"
                                }));
                            }
                        });
                    },
                    go: function(e, n) {
                        var a = this;
                        return s(o.default.mark(function s() {
                            return o.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    if (console.log(n), 1 != n) {
                                        o.next = 7;
                                        break;
                                    }
                                    return o.next = 4, a.login().then(function(t) {
                                        console.log("您已登陆！");
                                    });

                                  case 4:
                                    t.navigateTo({
                                        url: e
                                    }), o.next = 8;
                                    break;

                                  case 7:
                                    t.navigateTo({
                                        url: e
                                    });

                                  case 8:
                                  case "end":
                                    return o.stop();
                                }
                            }, s);
                        }))();
                    },
                    ruzhu: function() {
                        var e = this;
                        return s(o.default.mark(function n() {
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.login().then(function(t) {
                                        console.log("您已登陆！");
                                    });

                                  case 2:
                                    -1 == e.userInfo.store_check_status || 2 == e.userInfo.store_check_status || 3 == e.userInfo.store_check_status ? t.navigateTo({
                                        url: "/gc_school/pages/user/settled"
                                    }) : 0 == e.userInfo.store_check_status && t.showToast({
                                        title: "信息审核中",
                                        icon: "none"
                                    });

                                  case 3:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    link: function(e) {
                        console.log(this.userInfo.run_status), 0 != this.userInfo.run_status && -1 != this.userInfo.run_status || t.navigateTo({
                            url: e.currentTarget.dataset.url
                        });
                    },
                    yue: function() {
                        console.log(this.sysparment.is_pay_open), t.navigateTo({
                            url: "/gc_school/pages/user/balance"
                        });
                    },
                    link2: function(e) {
                        t.navigateTo({
                            url: e.currentTarget.dataset.url
                        });
                    },
                    getUser: function() {
                        var e = this;
                        u.globalData.util.request({
                            url: "WechatUser/view",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(n) {
                                console.log(n.data.data), t.setStorageSync("dmhu_id", n.data.data.u_id), e.setData({
                                    userInfo: n.data.data
                                }), "" == n.data.data.logo ? e.setData({
                                    logo: "/static/images/code/c17.png"
                                }) : e.setData({
                                    logo: n.data.data.logo
                                });
                            }
                        }, !0);
                    },
                    getUseRunerStatus: function() {
                        var e = this;
                        u.globalData.util.request({
                            url: "entry/wxapp/RunerStatus",
                            data: {
                                openid: t.getStorageSync("openid")
                            },
                            success: function(t) {
                                console.log("65897879987", t), e.setData({
                                    userInfo: i(i({}, e.userInfo), {}, {
                                        run_status: t.data.data
                                    })
                                });
                            }
                        });
                    },
                    wxlogin: function() {
                        t.getUserProfile({
                            desc: "用于获取用户信息",
                            success: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    bindgetuserinfo: function(e) {
                        console.log("打印", e);
                        var n = this;
                        t.getUserProfile({
                            desc: "用于获取用户信息",
                            success: function(e) {
                                console.log(e), t.login({
                                    success: function(o) {
                                        console.log(o), u.globalData.util.request({
                                            url: "Login/miniLogin",
                                            data: {
                                                nickName: e.userInfo.nickName,
                                                avatar: e.userInfo.avatarUrl,
                                                spid: t.getStorageSync("spid")
                                            },
                                            success: function(o) {
                                                t.setStorageSync("userinfo", e.userInfo), n.loginuserinfo = e.userInfo, n.setData({
                                                    islogin: !0
                                                }), console.log(o.data.token), t.setStorageSync("token", o.data.token), n.getUser();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    getGetUid: function(e) {
                        var n = this;
                        t.login({
                            success: function(o) {
                                o.code && u.globalData.util.request({
                                    url: "entry/wxapp/GetUid",
                                    data: {
                                        code: o.code
                                    },
                                    success: function(o) {
                                        return n.setData({
                                            getUseInfo: !1
                                        }), console.log(o), console.log("这里的"), t.aldPushSendOpenid(o.data.data.openid), 
                                        t.setStorageSync("openid", o.data.data.openid), t.setStorageSync("userinfo", e), 
                                        n.setData({
                                            loginuserinfo: e,
                                            islogin: !0
                                        }), n.toUserInfo(o.data.data.openid, e), n.getUser(), !1;
                                    }
                                });
                            }
                        });
                    },
                    toUserInfo: function(t, e) {
                        console.log(e), u.globalData.util.request({
                            url: "entry/wxapp/UserInfoUpdate",
                            data: {
                                openid: t,
                                nickname: e.nickName,
                                avatar: e.avatarUrl
                            },
                            success: function(t) {
                                console.log(t.data);
                            }
                        });
                    },
                    getconfig: function() {
                        var t = this;
                        console.log("配置接口"), u.globalData.util.request({
                            url: "Setting/view",
                            data: {},
                            success: function(e) {
                                console.log("配置信息", e.data.data.sys), console.log(e.data.data.sys.logo), t.setData({
                                    sysparment: e.data.data.sys
                                }), "" == e.data.data.sys.xcx_logo ? t.setData({
                                    logo: "/static/images/code/c17.png"
                                }) : t.setData({
                                    logo: e.data.data.sys.xcx_logo
                                });
                            }
                        });
                    },
                    msg: function() {
                        return console.log("弹出框"), t.navigateTo({
                            url: "/gc_school/pages/subscribeWxMessage/index"
                        }), !1;
                    },
                    dian: function(e) {
                        t.requestSubscribeMessage({
                            tmplIds: [ this.sysparment.template_store, this.sysparment.template_cancel ],
                            success: function(t) {},
                            complete: function() {
                                t.navigateTo({
                                    url: e.currentTarget.dataset.url
                                });
                            }
                        }), console.log(e.currentTarget.dataset);
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    a731: function(t, e, n) {},
    a94d: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, s = [];
    },
    de1d: function(t, e, n) {
        var o = n("4117");
        n.n(o).a;
    },
    deff: function(t, e, n) {
        n.r(e);
        var o = n("a94d"), a = n("40c9");
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        n("4d6b"), n("de1d");
        var c = n("f0c5"), i = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = i.exports;
    }
}, [ [ "1456", "common/runtime", "common/vendor" ] ] ]);