(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/home/index" ], {
    "04b3": function(t, e, o) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = c(o("a34a")), a = c(o("2f48"));
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, o, n, a, c, s) {
                try {
                    var r = t[c](s), i = r.value;
                } catch (t) {
                    return void o(t);
                }
                r.done ? e(i) : Promise.resolve(i).then(n, a);
            }
            function r(t) {
                return function() {
                    var e = this, o = arguments;
                    return new Promise(function(n, a) {
                        var c = t.apply(e, o);
                        function r(t) {
                            s(c, n, a, r, i, "next", t);
                        }
                        function i(t) {
                            s(c, n, a, r, i, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            function i(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), o.push.apply(o, n);
                }
                return o;
            }
            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(o), !0).forEach(function(e) {
                        u(t, e, o[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                    });
                }
                return t;
            }
            function u(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t;
            }
            var d = getApp(), g = {
                components: {},
                data: function() {
                    return l(l({
                        article_cate: [ {
                            class_name: "游戏代练",
                            img: "https://test.fkynet.net/wximage/youxi.png"
                        }, {
                            class_name: "影视摄影",
                            img: "https://test.fkynet.net/wximage/yingshi.png"
                        }, {
                            class_name: "吃货联盟",
                            img: "https://test.fkynet.net/wximage/chihuo.png"
                        } ]
                    }, this.configInfo), {}, {
                        indicatorDots: !1,
                        autoplay: !0,
                        interval: 5e3,
                        duration: 1e3,
                        showText: !0,
                        getUseInfo: !1,
                        status: 0,
                        page: 1,
                        url: d.globalData.siteInfo.appimg,
                        index: 0,
                        address: {},
                        schooindex: 0,
                        s_id: "",
                        rank: [],
                        slide: [],
                        top: t.getStorageSync("CustomBar"),
                        StatusBar: t.getStorageSync("StatusBar"),
                        list: [],
                        location: {
                            lng: "1",
                            lat: "1"
                        },
                        current: 0,
                        modules: [],
                        schoolInfo: {
                            modules: [],
                            slide: [],
                            school: {},
                            rank: []
                        },
                        is_show_toast: !0,
                        dataList: [],
                        order_index: 0,
                        history: [],
                        modules_load: !1,
                        city: {},
                        downloadFile: "",
                        note: "",
                        school: "",
                        sys: "",
                        sysparment: {
                            is_modules_show: 0,
                            is_luntan_show: 0,
                            is_rank_show: 0,
                            is_history_show: 0,
                            is_show_toast: 0,
                            home_adv: "",
                            home_adv_type: 0
                        },
                        tmps: {},
                        userInfo: "",
                        article_toast_content: "",
                        text: "",
                        rank_show: !0,
                        rankList: [],
                        isHomeAuth: !1,
                        authData: {
                            status: 0
                        },
                        temp: {}
                    });
                },
                onLoad: function(e) {
                    var o = this;
                    return r(n.default.mark(function a() {
                        return n.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                console.log("打印参数", decodeURIComponent(e.scene).split("=")[1]), decodeURIComponent(e.scene).split("=")[1] && t.setStorageSync("spid", decodeURIComponent(e.scene).split("=")[1]), 
                                t.getStorageSync("spid") && t.getStorageSync("token") && 0 == t.getStorageSync("db_spid") && t.getStorageSync("u_id") != t.getStorageSync("spid") && (console.log("llololo"), 
                                o.changePid()), console.log("登录123456"), t.getStorageSync("schoolId") && o.getStyle(), 
                                o.showPage(), t.$on("changeSchools", function(t) {
                                    console.log(t.msg), o.changeSchool(), o.getStyle();
                                });

                              case 7:
                              case "end":
                                return n.stop();
                            }
                        }, a);
                    }))();
                },
                onReady: function() {},
                onShareAppMessage: function() {},
                onShareTimeline: function() {},
                onShow: function() {
                    t.getStorageSync("token") && this.getAuth(), t.removeStorageSync("module_id"), t.getStorageSync("schoolId"), 
                    t.removeStorage({
                        key: "json"
                    }), t.removeStorage({
                        key: "store_id"
                    });
                },
                onHide: function() {},
                onUnload: function() {},
                onReachBottom: function() {},
                onPullDownRefresh: function() {
                    var t = this;
                    this.pullDown.start(), this.showPage(), this.getStyle(), setTimeout(function() {
                        t.pullDown.end();
                    }, 1500);
                },
                methods: l(l({
                    changeSchools: function() {
                        this.temp = {
                            type: 0
                        }, t.reLaunch({
                            url: "/gc_school/pages/changeSchool/index"
                        });
                    }
                }, a.default), {}, {
                    changePid: function() {
                        d.globalData.util.request({
                            url: "WechatUser/updatePid",
                            data: {
                                spid: t.getStorageSync("spid")
                            },
                            success: function(t) {
                                console.log(t);
                            }
                        }, !0);
                    },
                    changeSchool: function() {
                        var e = t.getStorageSync("schoolId");
                        e && (this.setData({
                            s_id: e,
                            current: 0
                        }), t.getStorageSync("token") && this.userChangeSchool(e), this.getSchoolInfo(e), 
                        this.getSysparment(), this.getRank(), this.setData({
                            dataList: []
                        }), d.globalData.isload = !0);
                    },
                    showPage: function() {
                        var e = this;
                        return r(n.default.mark(function o() {
                            var a, c, s, r, i, l, u;
                            return n.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return a = e, e.isHomeAuth = t.getStorageSync("isHomeAuth") || !1, t.setStorageSync("user_identity", 0), 
                                    o.next = 5, e.getLocations();

                                  case 5:
                                    c = o.sent, console.log(c), t.getStorageSync("token") && d.globalData.util.request({
                                        url: "WechatUser/view",
                                        data: {},
                                        success: function(e) {
                                            console.log("用户信息", e.data.data), a.userInfo = e.data.data, t.setStorageSync("db_spid", e.data.data.spid), 
                                            t.setStorageSync("u_id", e.data.data.u_id), 2 == e.data.data.run_status && t.setStorageSync("user_identity", 1);
                                        }
                                    }, !0), e.setData({
                                        city: {
                                            location: e.location
                                        }
                                    }), t.setStorageSync("city", e.city), s = t.getStorageSync("schoolList") || [], 
                                    console.log("lirb"), console.log(s), s.length > 0 ? (r = e, e.school = s, i = t.getStorageSync("schoolId") || s[l].s_id, 
                                    e.sys = t.getStorageSync("sys"), l = t.getStorageSync("schoolIndex") ? t.getStorageSync("schoolIndex") : 0, 
                                    e.setData({
                                        index: t.getStorageSync("schoolIndex") ? t.getStorageSync("schoolIndex") : 0,
                                        s_id: i
                                    }), t.getStorageSync("token") && r.userChangeSchool(i), r.getRank(), r.getSysparment(), 
                                    e.getSchool()) : e.getSchool(), u = Date.parse(new Date()), u /= 1e3, new Date(1e3 * u), 
                                    t.getStorageSync("last_time") ? t.getStorageSync("last_time") + 86400 < u ? (e.setData({
                                        is_show_toast: !0
                                    }), console.log("过时了"), t.setStorageSync("last_time", u)) : (console.log("没过时"), 
                                    e.setData({
                                        is_show_toast: !1
                                    })) : (e.setData({
                                        is_show_toast: !0
                                    }), t.setStorageSync("last_time", u)), console.log("当前时间戳为：" + u), console.log("当前时间戳为：" + (u - 604800)), 
                                    console.log(d.globalData.siteInfo.appimg), a.setData({
                                        address: t.getStorageSync("city")
                                    });

                                  case 23:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    closeAuth: function() {
                        var e = this;
                        return r(n.default.mark(function o() {
                            return n.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, e.tips.tips("如果想重新授权，请前往设置！");

                                  case 2:
                                    e.isHomeAuth = !0, t.setStorageSync("isHomeAuth", !0);

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    }
                })
            };
            e.default = g;
        }).call(this, o("543d").default);
    },
    "2b6c": function(t, e, o) {
        (function(t) {
            o("a8cf"), n(o("66fd"));
            var e = n(o("9273"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, t(e.default);
        }).call(this, o("543d").createPage);
    },
    "2bb8": function(t, e, o) {
        var n = o("417a");
        o.n(n).a;
    },
    "3ee4": function(t, e, o) {
        var n = o("5c61");
        o.n(n).a;
    },
    "417a": function(t, e, o) {},
    "5c61": function(t, e, o) {},
    9273: function(t, e, o) {
        o.r(e);
        var n = o("c1fb"), a = o("c984");
        for (var c in a) "default" !== c && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(c);
        o("3ee4"), o("2bb8");
        var s = o("f0c5"), r = Object(s.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = r.exports;
    },
    c1fb: function(t, e, o) {
        o.d(e, "b", function() {
            return a;
        }), o.d(e, "c", function() {
            return c;
        }), o.d(e, "a", function() {
            return n;
        });
        var n = {
            uniNoticeBar: function() {
                return o.e("uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar").then(o.bind(null, "57ca"));
            },
            schoolCircleHot: function() {
                return o.e("components/school-circle-hot/school-circle-hot").then(o.bind(null, "4a3c"));
            },
            schoolStore: function() {
                return o.e("components/school-store/school-store").then(o.bind(null, "1bd7"));
            },
            schoolStoreRecommend: function() {
                return o.e("components/school-store-recommend/school-store-recommend").then(o.bind(null, "ddb1"));
            },
            schoolCircle: function() {
                return o.e("components/school-circle/school-circle").then(o.bind(null, "cd19"));
            },
            schoolSty3: function() {
                return o.e("components/school-sty3/school-sty3").then(o.bind(null, "f09c"));
            },
            mpHtml: function() {
                return Promise.all([ o.e("common/vendor"), o.e("uni_modules/mp-html/components/mp-html/mp-html") ]).then(o.bind(null, "e4b7"));
            },
            dragButton: function() {
                return o.e("components/drag-button/drag-button").then(o.bind(null, "e605"));
            }
        }, a = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(e) {
                t.rank_show = !1;
            });
        }, c = [];
    },
    c984: function(t, e, o) {
        o.r(e);
        var n = o("04b3"), a = o.n(n);
        for (var c in n) "default" !== c && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(c);
        e.default = a.a;
    }
}, [ [ "2b6c", "common/runtime", "common/vendor" ] ] ]);