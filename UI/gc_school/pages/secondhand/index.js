(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/secondhand/index" ], {
    1239: function(e, t, a) {
        a.r(t);
        var o = a("b7b1"), n = a("d04d");
        for (var s in n) "default" !== s && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(s);
        a("fb2a");
        var r = a("f0c5"), i = Object(r.a)(n.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = i.exports;
    },
    4026: function(e, t, a) {
        (function(e) {
            a("a8cf"), o(a("66fd"));
            var t = o(a("1239"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, e(t.default);
        }).call(this, a("543d").createPage);
    },
    "935e": function(e, t, a) {
        (function(e) {
            function a(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e;
            }
            function o(e) {
                return function(e) {
                    if (Array.isArray(e)) return n(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return n(e, t);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? n(e, t) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
                return o;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = getApp(), r = {
                data: function() {
                    return {
                        common: "通用",
                        oldDegree: [ "全新", "9成新", "8成新", "7成新", "6成新", "5成新以下" ],
                        sotrList: [ "综合", "最新", "最热" ],
                        cateList: [],
                        goodsList: [],
                        islog: !1,
                        searchName: "",
                        page: 1,
                        current_cate: 9999,
                        priceFlag: !1,
                        sotrvalue: "",
                        oldDegreesureValue: "",
                        oldDegreeValue: "",
                        sotrFlag: !1,
                        oldDegreeFlag: !1,
                        loadmore: !0,
                        seeOperation: !1,
                        onshows: 0,
                        uids: 0,
                        es: 0,
                        slideList: []
                    };
                },
                onLoad: function(t) {
                    console.log(t), console.log(e.getStorageSync("schoolId")), t.s_id && e.setStorageSync("schoolId", t.s_id), 
                    this.getSlide(), this.getCate(), this.setData({
                        goodsList: [],
                        page: 1,
                        loadmore: !0
                    }), e.getStorageSync("openid") && this.setData({
                        islog: !0
                    }), e.getStorageSync("token") && this.getUids();
                },
                onShow: function() {
                    1 == this.onshows ? (this.getCate(), this.setData({
                        goodsList: [],
                        page: 1,
                        loadmore: !0
                    }), e.getStorageSync("openid") && this.setData({
                        islog: !0
                    })) : this.onshows = 1;
                },
                onReachBottom: function() {
                    this.loadmore && (this.setData({
                        page: this.page + 1
                    }), this.getGoods());
                },
                onPullDownRefresh: function() {
                    this.pullDown.start(), 1 == this.onshows ? (this.getCate(), this.setData({
                        goodsList: [],
                        page: 1,
                        loadmore: !0
                    }), e.getStorageSync("openid") && this.setData({
                        islog: !0
                    })) : this.onshows = 1;
                },
                onShareAppMessage: function() {
                    return {
                        path: "/gc_school/pages/secondhand/index?s_id=" + e.getStorageSync("schoolId")
                    };
                },
                onShareTimeline: function() {
                    return {
                        title: "二手市场",
                        query: "s_id=" + e.getStorageSync("schoolId")
                    };
                },
                methods: {
                    getSlide: function() {
                        var t = this;
                        s.globalData.util.request({
                            url: "Slide/index",
                            method: "POST",
                            data: {
                                s_id: e.getStorageSync("schoolId"),
                                show_type: 2
                            },
                            success: function(e) {
                                console.log(e.data.data), t.setData({
                                    slideList: e.data.data.list
                                });
                            }
                        });
                    },
                    changeTab: function(e) {
                        e.currentTarget.dataset.id != this.current_cate && (this.setData({
                            current_cate: e.currentTarget.dataset.id,
                            page: 1,
                            loadmore: !0,
                            goodsList: []
                        }), this.es = 3, this.getGoods(3));
                    },
                    dingdan: function() {
                        e.navigateTo({
                            url: "/gc_school/pages/secondhand/mybuy"
                        });
                    },
                    getUids: function() {
                        var e = this;
                        s.globalData.util.request({
                            url: "Dmhmarketgoods/uids",
                            data: {},
                            success: function(t) {
                                console.log(t.data.data), e.setData({
                                    uids: t.data.data.uids
                                });
                            }
                        }, !0);
                    },
                    slideJump: function(t) {
                        console.log(t), 1 == t.currentTarget.dataset.type ? e.navigateTo({
                            url: t.currentTarget.dataset.url
                        }) : 2 == t.currentTarget.dataset.type ? (console.log("appid是", t.currentTarget.dataset.url), 
                        e.navigateToMiniProgram({
                            appId: t.currentTarget.dataset.url,
                            path: "",
                            extraData: {
                                foo: "bar"
                            },
                            envVersion: "release",
                            success: function(e) {
                                console.log("打开成功");
                            }
                        })) : 3 == t.currentTarget.dataset.type && e.navigateTo({
                            url: "/gc_school/pages/webview/index?url=" + t.currentTarget.dataset.url
                        });
                    },
                    getGoods: function(t) {
                        var a = this;
                        if (e.getStorageSync("token")) {
                            var n = {
                                page: a.page,
                                s_id: e.getStorageSync("schoolId")
                            };
                            console.log(t, "状态"), 1 == this.es && (n.keywords = a.searchName), 2 == this.es && (a.priceFlag ? n.priceFlag = a.priceFlag : (n.priceFlag = a.priceFlag, 
                            console.log("--没有111")), a.sotrvalue && (n.sotrvalue = a.sotrvalue, console.log("--没有222")), 
                            a.oldDegreesureValue && (n.degree = a.oldDegreesureValue, console.log("--没有333"))), 
                            3 == this.es && (9999 == a.current_cate || (n.cid = a.current_cate)), n.uid = a.uids, 
                            s.globalData.util.request({
                                url: "Dmhmarketgoods/index",
                                data: n,
                                success: function(e) {
                                    if (a.pullDown.end(), e.data.data.list.length < 10 ? a.setData({
                                        loadmore: !1
                                    }) : a.setData({
                                        loadmore: !0
                                    }), 1 == a.page) a.setData({
                                        goodsList: e.data.data.list
                                    }); else {
                                        var t = [].concat(o(a.goodsList), o(e.data.data.list));
                                        a.setData({
                                            goodsList: t
                                        });
                                    }
                                    console.log("商品列表", a.goodsList);
                                }
                            });
                        } else {
                            var r = {
                                page: a.page,
                                s_id: e.getStorageSync("schoolId")
                            };
                            console.log(t, "状态"), 1 == t && (r.keywords = a.searchName), 2 == t && (a.priceFlag ? r.priceFlag = a.priceFlag : console.log("--没有111"), 
                            a.sotrvalue && (r.sotrvalue = a.sotrvalue, console.log("--没有222")), a.oldDegreesureValue && (r.degree = a.oldDegreesureValue, 
                            console.log("--没有333"))), 3 == t && (9999 == a.current_cate || (r.cid = a.current_cate)), 
                            s.globalData.util.request({
                                url: "Dmhmarketgoods/index",
                                data: r,
                                success: function(e) {
                                    e.data.data.list.length < 10 && a.setData({
                                        loadmore: !1
                                    }), a.setData({
                                        goodsList: e.data.data.list
                                    }), console.log("商品列表", e.data.data.list);
                                }
                            });
                        }
                    },
                    getCate: function() {
                        var t = this;
                        s.globalData.util.request({
                            url: "Dmhmarketcategory/index",
                            data: {
                                s_id: e.getStorageSync("schoolId")
                            },
                            success: function(e) {
                                console.log(e.data.data), t.setData({
                                    cateList: e.data.data.list,
                                    page: 1
                                }), e.data.data.list.length > 0 && (this.es = 3, t.getGoods(3));
                            }
                        }, !0);
                    },
                    setfilter: function(e, t) {
                        var o;
                        console.log(e, t), this.priceFlag = "", this.sotrvalue = "", this.degree = "", this.setData((a(o = {}, e, t), 
                        a(o, "sotrFlag", !1), a(o, "oldDegreeFlag", !1), a(o, "page", 1), o)), "oldDegreeValue" != e || t || this.setData({
                            oldDegreesureValue: ""
                        }), this.es = 2, this.getGoods(2);
                    },
                    setKeyWord: function(e) {
                        var t = e.detail.value;
                        this.setData({
                            searchName: t,
                            current_cate: -1,
                            page: 1
                        }), this.es = 1, this.getGoods(1);
                    },
                    toDetail: function(t) {
                        e.navigateTo({
                            url: "/gc_school/pages/secondhand/detail?id=" + t + "&s_id=" + e.getStorageSync("schoolId")
                        });
                    },
                    publish: function() {
                        if (!e.getStorageSync("token")) return e.showToast({
                            title: "请登录后发布",
                            icon: "none"
                        }), void setTimeout(function() {
                            e.navigateTo({
                                url: "/gc_school/pages/user/index"
                            });
                        }, 1e3);
                        e.navigateTo({
                            url: "/gc_school/pages/addsecond/index"
                        });
                    },
                    my: function() {
                        if (!e.getStorageSync("token")) return e.showToast({
                            title: "请登录后查看",
                            icon: "none"
                        }), void setTimeout(function() {
                            e.navigateTo({
                                url: "/gc_school/pages/user/index"
                            });
                        }, 1e3);
                        e.navigateTo({
                            url: "/gc_school/pages/secondhand/my"
                        });
                    }
                }
            };
            t.default = r;
        }).call(this, a("543d").default);
    },
    a4a9: function(e, t, a) {},
    b7b1: function(e, t, a) {
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return s;
        }), a.d(t, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, n = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
                e.sotrFlag = !e.sotrFlag, e.oldDegreeFlag = !1;
            }, e.e1 = function(t) {
                e.oldDegreeFlag = !e.oldDegreeFlag, e.sotrFlag = !1;
            }, e.e2 = function(t, a) {
                var o = arguments[arguments.length - 1].currentTarget.dataset, n = o.eventParams || o["event-params"];
                a = n.item, e.oldDegreeValue = a;
            }, e.e3 = function(t) {
                e.seeOperation = !e.seeOperation;
            });
        }, s = [];
    },
    d04d: function(e, t, a) {
        a.r(t);
        var o = a("935e"), n = a.n(o);
        for (var s in o) "default" !== s && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(s);
        t.default = n.a;
    },
    fb2a: function(e, t, a) {
        var o = a("a4a9");
        a.n(o).a;
    }
}, [ [ "4026", "common/runtime", "common/vendor" ] ] ]);