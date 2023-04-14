(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/article/template1/index" ], {
    "0a5c": function(t, e, a) {
        a.r(e);
        var n = a("8c2e"), o = a("7861");
        for (var s in o) "default" !== s && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(s);
        a("8da4"), a("4922");
        var i = a("f0c5"), r = Object(i.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = r.exports;
    },
    "173b": function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(a("a34a"));
            function o(t, e, a, n, o, s, i) {
                try {
                    var r = t[s](i), c = r.value;
                } catch (t) {
                    return void a(t);
                }
                r.done ? e(c) : Promise.resolve(c).then(n, o);
            }
            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return i(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return i(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? i(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n;
            }
            var r = getApp(), c = {
                data: function() {
                    return {
                        url: "",
                        info: [ 1, 2, 3 ],
                        index_swiperCurrent: 0,
                        cateList: [],
                        cate_index: 0,
                        dataList: [],
                        type: 0,
                        is_loadmore: !0,
                        page: 1,
                        slideList: [],
                        freshen: !0,
                        autoplay: 0,
                        duration: "",
                        img: "",
                        isTop: !1,
                        cateList_default: [ {
                            class_name: "校园表白",
                            icon: "https://test.fkynet.net/wximage/biaobai.png"
                        }, {
                            class_name: "游戏代练",
                            icon: "https://test.fkynet.net/wximage/dailian.png"
                        }, {
                            class_name: "影视摄影",
                            icon: "https://test.fkynet.net/wximage/sheying.png"
                        }, {
                            class_name: "运动健身",
                            icon: "https://test.fkynet.net/wximage/jianshen.png"
                        } ],
                        authData: {
                            status: 0
                        },
                        userstate: ""
                    };
                },
                onLoad: function(e) {
                    this.userstate = t.getStorageSync("userstate"), t.getStorageSync("schoolId") || e.s_id && t.setStorageSync("schoolId", e.s_id), 
                    this.getCate(), this.getSlide(), t.getStorageSync("token") && this.getAuth();
                },
                onReady: function() {},
                onShow: function() {
                    console.log("返回"), console.log("是否需要重新加载", r.globalData.isload), r.globalData.isload = !1;
                },
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    this.is_loadmore ? (this.setData({
                        page: this.page + 1
                    }), this.getLst(this.cateList[this.cate_index].id)) : t.showToast({
                        title: "没有更多数据了~",
                        icon: "none"
                    });
                },
                onShareAppMessage: function() {
                    return {
                        path: "/gc_school/pages/article/index?s_id=" + t.getStorageSync("schoolId")
                    };
                },
                onShareTimeline: function() {
                    return {
                        title: "校园圈子",
                        query: "s_id=" + t.getStorageSync("schoolId")
                    };
                },
                methods: {
                    toList: function(e, a, n, o, s) {
                        if (1 == e) var i = "/gc_school/pages/article/list?class_id=" + a + "&class_name=" + s; else i = "/gc_school/pages/article/detail?id=" + a;
                        console.log(s), o ? t.navigateTo({
                            url: o
                        }) : 0 == n ? t.navigateTo({
                            url: i
                        }) : 0 == this.authData.status ? t.showModal({
                            title: "温馨提示",
                            content: "本内容只对本校认证学生查看，请先认证！",
                            success: function(e) {
                                e.confirm ? t.navigateTo({
                                    url: "/gc_school/pages/user/student"
                                }) : console.log("取消删除");
                            }
                        }) : this.authData.data.s_id != t.getStorageSync("schoolId") ? t.showToast({
                            title: "您好，本内容只对本校认证学生查看，您暂无权限。",
                            icon: "none",
                            duration: 3e3
                        }) : 0 == this.authData.data.state ? t.showToast({
                            title: "请等待审核结果",
                            icon: "none",
                            duration: 3e3
                        }) : 2 == this.authData.data.state ? t.navigateTo({
                            url: "/gc_school/pages/user/student"
                        }) : t.navigateTo({
                            url: i
                        });
                    },
                    onPageScroll: function(t) {
                        t.scrollTop > 200 ? this.isTop = !0 : this.isTop = !1;
                    },
                    top: function() {
                        t.pageScrollTo({
                            scrollTop: 0,
                            duration: 300
                        });
                    },
                    getSlide: function() {
                        var e = this;
                        r.globalData.util.request({
                            url: "Slide/index",
                            method: "POST",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                show_type: 3
                            },
                            success: function(t) {
                                console.log(t.data.data), e.setData({
                                    slideList: t.data.data.list
                                });
                            }
                        });
                    },
                    getAuth: function() {
                        var e = this;
                        r.globalData.util.request({
                            url: "RenIndex/student",
                            method: "POST",
                            data: {},
                            success: function(a) {
                                console.log("学生认证返回值", a.data.data), e.authData = a.data.data, "您的账号已被禁用，请联系客服。" == a.data.data.msg ? t.setStorageSync("userstate", "-1") : t.setStorageSync("userstate", "1");
                            }
                        }, !0);
                    },
                    play: function() {},
                    toDetail: function(t) {
                        console.log(t);
                    },
                    slideJump: function(e) {
                        console.log(e), 1 == e.currentTarget.dataset.type ? t.navigateTo({
                            url: e.currentTarget.dataset.url
                        }) : 2 == e.currentTarget.dataset.type ? (console.log("appid是", e.currentTarget.dataset.url), 
                        t.navigateToMiniProgram({
                            appId: e.currentTarget.dataset.url,
                            path: "",
                            extraData: {
                                foo: "bar"
                            },
                            envVersion: "release",
                            success: function(t) {
                                console.log("打开成功");
                            }
                        })) : 3 == e.currentTarget.dataset.type && t.navigateTo({
                            url: "/gc_school/pages/webview/index?url=" + e.currentTarget.dataset.url
                        });
                    },
                    getCate: function() {
                        var e = this;
                        r.globalData.util.request({
                            url: "ZhForumClass/index",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log(t.data.data.list), e.cateList = s(t.data.data.list), t.data.data.list.length > 0 && e.getLst(t.data.data.list[0].class_id);
                            }
                        });
                    },
                    preview: function(e) {
                        this.setData({
                            freshen: !1
                        }), t.previewImage({
                            current: e.currentTarget.dataset.img,
                            urls: e.currentTarget.dataset.list
                        });
                    },
                    getLst: function(e) {
                        var a = this;
                        r.globalData.util.request({
                            url: "ZhArticles/index",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                type: a.type,
                                page: a.page
                            },
                            header: {
                                Authorization: t.getStorageSync("token")
                            },
                            success: function(t) {
                                console.log(t.data.data.list), t.data.data.list.length < 5 && a.setData({
                                    is_loadmore: !1
                                });
                                for (var e = 0; e < t.data.data.list.length; e++) a.dataList.push(t.data.data.list[e]), 
                                a.setData({
                                    dataList: a.dataList
                                });
                            }
                        });
                    },
                    changetype: function(t) {
                        this.setData({
                            type: t.currentTarget.dataset.type,
                            page: 1,
                            is_loadmore: !0,
                            dataList: []
                        }), this.getLst(this.cateList[this.cate_index].class_id);
                    },
                    cateChange: function(t) {
                        this.setData({
                            cate_index: t.currentTarget.dataset.index,
                            page: 1,
                            is_loadmore: !0,
                            dataList: []
                        }), this.getLst(this.cateList[t.currentTarget.dataset.index].class_id);
                    },
                    upload: function() {
                        var e = this;
                        t.chooseMedia({
                            success: function(t) {
                                console.log(t), console.log(t.type), console.log(t.tempFiles[0].tempFilePath), e.setData({
                                    url: t.tempFiles[0].tempFilePath
                                });
                            }
                        });
                    },
                    index_swiperChange: function(t) {
                        this.setData({
                            index_swiperCurrent: t.detail.current
                        });
                    },
                    jump: function(e) {
                        var a = this;
                        return function(t) {
                            return function() {
                                var e = this, a = arguments;
                                return new Promise(function(n, s) {
                                    var i = t.apply(e, a);
                                    function r(t) {
                                        o(i, n, s, r, c, "next", t);
                                    }
                                    function c(t) {
                                        o(i, n, s, r, c, "throw", t);
                                    }
                                    r(void 0);
                                });
                            };
                        }(n.default.mark(function o() {
                            return n.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return console.log(e), n.next = 3, a.login().then(function(t) {
                                        console.log("您已登陆！");
                                    });

                                  case 3:
                                    t.navigateTo({
                                        url: e.currentTarget.dataset.url
                                    });

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, o);
                        }))();
                    }
                }
            };
            e.default = c;
        }).call(this, a("543d").default);
    },
    4922: function(t, e, a) {
        var n = a("f796");
        a.n(n).a;
    },
    7861: function(t, e, a) {
        a.r(e);
        var n = a("173b"), o = a.n(n);
        for (var s in n) "default" !== s && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = o.a;
    },
    "86c1": function(t, e, a) {},
    "8c2e": function(t, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return s;
        }), a.d(e, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, s = [];
    },
    "8da4": function(t, e, a) {
        var n = a("86c1");
        a.n(n).a;
    },
    e7062: function(t, e, a) {
        (function(t) {
            a("a8cf"), n(a("66fd"));
            var e = n(a("0a5c"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    },
    f796: function(t, e, a) {}
}, [ [ "e7062", "common/runtime", "common/vendor" ] ] ]);