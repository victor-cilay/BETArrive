(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/subscribeWxMessage/index" ], {
    "12a2": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function a(e, t, n, r, a, o, c) {
                try {
                    var u = e[o](c), i = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(i) : Promise.resolve(i).then(r, a);
            }
            function o(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        var c = e.apply(t, n);
                        function u(e) {
                            a(c, r, o, u, i, "next", e);
                        }
                        function i(e) {
                            a(c, r, o, u, i, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        i(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var s = {
                components: {},
                data: function() {
                    return {
                        themeColor: "--theme-color:#ff6344;--help-color:#FF4444; --auxiliary-color:#fff;",
                        settingRes: {},
                        listRes: [],
                        serviceRes: {},
                        servicePopupVisible: !1,
                        temps: []
                    };
                },
                computed: {
                    cData: function() {
                        return (this.listRes || []).map(function(e) {
                            return {
                                title: e.title,
                                data: (e.data || []).map(function(e) {
                                    var t = e.number || 0;
                                    return t = (t = t > 999 ? 999 : t) > 0 ? "+" + t : "", u(u({}, e), {}, {
                                        numberStr: t
                                    });
                                })
                            };
                        });
                    }
                },
                mounted: function() {
                    var e = this;
                    return o(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e.initTemps();

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    initTemps: function() {
                        var t = e.getStorageSync("sys");
                        this.temps = [ {
                            name: "骑手订阅消息",
                            temp_id: t.template_new,
                            number: 0
                        }, {
                            name: "用户抢单提醒",
                            temp_id: t.template_grab,
                            number: 0
                        }, {
                            name: "取消订单消息提醒",
                            temp_id: t.template_cancel,
                            number: 0
                        }, {
                            name: "商家订阅消息",
                            temp_id: t.template_store,
                            number: 0
                        }, {
                            name: "圈子留言订阅消息",
                            temp_id: t.template_comment,
                            number: 0
                        }, {
                            name: "二手市场支付订阅消息",
                            temp_id: t.template_pay,
                            number: 0
                        }, {
                            name: "消息提醒",
                            temp_id: t.template_notice,
                            number: 0
                        }, {
                            name: "日程提醒",
                            temp_id: t.schedule_template,
                            number: 0
                        }, {
                            name: "订单取消通知(商家)",
                            temp_id: t.template_cancel,
                            number: 0
                        }, {
                            name: "订单取消通知(骑手)",
                            temp_id: t.template_cancel_rider,
                            number: 0
                        }, {
                            name: "商家拒单提醒",
                            temp_id: t.template_refuse,
                            number: 0
                        } ];
                    },
                    commun: function(t, n) {
                        switch (t) {
                          case "mobile":
                            e.makePhoneCall({
                                phoneNumber: n
                            });
                            break;

                          case "wx":
                            App.copyTextHandle(n);
                        }
                    },
                    handleBtnSubscribe: function() {
                        var t = arguments, n = this;
                        return o(r.default.mark(function a() {
                            var o, c;
                            return r.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    if (o = t.length > 0 && void 0 !== t[0] ? t[0] : {}, console.log(o), !n.beingSubscribe) {
                                        r.next = 4;
                                        break;
                                    }
                                    return r.abrupt("return");

                                  case 4:
                                    if (!(o.number >= 999)) {
                                        r.next = 8;
                                        break;
                                    }
                                    return e.showToast({
                                        icon: "none",
                                        title: "已到达该消息最大订阅数"
                                    }), n.beingSubscribe = !1, r.abrupt("return");

                                  case 8:
                                    try {
                                        c = [ o.temp_id ], wx.requestSubscribeMessage({
                                            tmplIds: c,
                                            success: function(t) {
                                                console.log("res", t), "accept" == t[c[0]] && e.showToast({
                                                    icon: "none",
                                                    title: "订阅成功"
                                                }), "reject" == t[c[0]] && e.showToast({
                                                    icon: "none",
                                                    title: "订阅失败"
                                                });
                                            },
                                            fail: function(t) {
                                                console.log("err", t);
                                                e.showToast({
                                                    icon: "none",
                                                    title: {
                                                        10001: "模板Id不存在，请检测配置",
                                                        10002: "网络问题，请求消息列表失败",
                                                        10003: "网络问题，订阅请求发送失败",
                                                        10004: "模板Id配置有误",
                                                        20001: "没有模板数据",
                                                        20003: "模板消息数量超过上限",
                                                        20004: "用户关闭了主开关，无法进行订阅",
                                                        20005: "小程序被禁封",
                                                        20013: "不允许通过该接口订阅设备消息"
                                                    }[t.errCode]
                                                });
                                            }
                                        });
                                    } catch (t) {
                                        e.hideLoading(), e.showToast({
                                            icon: "none",
                                            title: "取消订阅或订阅失败，请稍后再试"
                                        });
                                    }
                                    console.log("handleBtnSubscribe", o), n.beingSubscribe = !1;

                                  case 11:
                                  case "end":
                                    return r.stop();
                                }
                            }, a);
                        }))();
                    },
                    handleNavItemClick: function(e) {
                        var t = e.url, n = void 0 === t ? "" : t;
                        App.navigationTo({
                            url: n
                        });
                    },
                    fetchSettingRes: function() {
                        var e = this;
                        return o(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, App._postP("setting/index");

                                  case 3:
                                    n = t.sent, e.settingRes = e.$util.deepGet(n, "data") || [], t.next = 10;
                                    break;

                                  case 7:
                                    t.prev = 7, t.t0 = t.catch(0), console.log("fetchSettingRes", t.t0);

                                  case 10:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 7 ] ]);
                        }))();
                    },
                    fetchListRes: function() {
                        var e = this;
                        return o(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, App._postP("Subscribe/getUserSubscribe");

                                  case 3:
                                    n = t.sent, e.listRes = e.$util.deepGet(n, "data") || [], console.log("this.listRes", e.listRes), 
                                    t.next = 11;
                                    break;

                                  case 8:
                                    t.prev = 8, t.t0 = t.catch(0), console.log(112231231212, t.t0);

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 8 ] ]);
                        }))();
                    },
                    fetchServiceRes: function() {
                        var e = this;
                        return o(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (e.cServicePopupCanShow) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    return t.prev = 2, t.next = 5, App._postP("Live/getBusinessSetting");

                                  case 5:
                                    n = t.sent, e.serviceRes = e.$util.deepGet(n, "data") || [], t.next = 12;
                                    break;

                                  case 9:
                                    t.prev = 9, t.t0 = t.catch(2), console.log(112231231212, t.t0);

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 2, 9 ] ]);
                        }))();
                    }
                }
            };
            t.default = s;
        }).call(this, n("543d").default);
    },
    "269d": function(e, t, n) {},
    2988: function(e, t, n) {
        (function(e) {
            n("a8cf"), r(n("66fd"));
            var t = r(n("5759"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    "56a4": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return r;
        });
        var r = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, a = function() {
            var e = this, t = (e.$createElement, e._self._c, e.servicePopupVisible ? e.getImageRoot("45.png", "url") : null);
            e._isMounted || (e.e0 = function(t) {
                e.servicePopupVisible = !1;
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    m0: t
                }
            });
        }, o = [];
    },
    5759: function(e, t, n) {
        n.r(t);
        var r = n("56a4"), a = n("c8b7");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("e3e8");
        var c = n("f0c5"), u = Object(c.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = u.exports;
    },
    c8b7: function(e, t, n) {
        n.r(t);
        var r = n("12a2"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    e3e8: function(e, t, n) {
        var r = n("269d");
        n.n(r).a;
    }
}, [ [ "2988", "common/runtime", "common/vendor" ] ] ]);