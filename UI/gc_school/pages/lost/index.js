(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/lost/index" ], {
    "1d98": function(t, e, a) {
        (function(t) {
            a("a8cf"), n(a("66fd"));
            var e = n(a("db4f"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    },
    "3ca1": function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(a("a34a"));
            function o(t, e, a, n, o, i, r) {
                try {
                    var s = t[i](r), u = s.value;
                } catch (t) {
                    return void a(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, o);
            }
            var i = getApp(), r = {
                data: function() {
                    return {
                        url: "",
                        info: [ 1, 2, 3 ],
                        index_swiperCurrent: 0,
                        cateList: [ {
                            name: "失物招领"
                        }, {
                            name: "寻物启事"
                        } ],
                        cate_index: 0,
                        dataList: [],
                        type: 1,
                        is_loadmore: !0,
                        page: 1,
                        slideList: [],
                        freshen: !0,
                        autoplay: 0,
                        duration: "",
                        img: "",
                        seeOperation: !1
                    };
                },
                onLoad: function(e) {
                    t.getStorageSync("schoolId") || e.s_id && t.setStorageSync("schoolId", e.s_id), 
                    this.getLst(), this.getSlide();
                },
                onReady: function() {},
                onShow: function() {
                    console.log("是否需要重新加载", i.globalData.isload), i.globalData.isload = !1;
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
                        path: "/gc_school/pages/lost/index?s_id=" + t.getStorageSync("schoolId")
                    };
                },
                onShareTimeline: function() {
                    return {
                        title: "失物招领",
                        query: "s_id=" + t.getStorageSync("schoolId")
                    };
                },
                methods: {
                    getSlide: function() {
                        var e = this;
                        i.globalData.util.request({
                            url: "Slide/index",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                show_type: 4
                            },
                            success: function(t) {
                                e.slideList = t.data.data.list;
                            }
                        });
                    },
                    play: function() {},
                    toDetail: function(e) {
                        console.log(e.currentTarget.dataset.id), t.navigateTo({
                            url: "/gc_school/pages/lost/detail?id=" + e.currentTarget.dataset.id + "&s_id=" + t.getStorageSync("schoolId")
                        });
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
                    preview: function(e) {
                        this.setData({
                            freshen: !1
                        }), t.previewImage({
                            current: e.currentTarget.dataset.img,
                            urls: e.currentTarget.dataset.list
                        });
                    },
                    getLst: function() {
                        var e = this;
                        i.globalData.util.request({
                            url: "ZhInfo/getInformationList",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                type: e.cate_index + 1,
                                page: e.page,
                                limit: 5
                            },
                            success: function(t) {
                                console.log(t.data.data.list), t.data.data.list.length < 5 && e.setData({
                                    is_loadmore: !1
                                });
                                for (var a = 0; a < t.data.data.list.length; a++) e.dataList.push(t.data.data.list[a]), 
                                e.setData({
                                    dataList: e.dataList
                                });
                            }
                        });
                    },
                    cateChange: function(t) {
                        this.setData({
                            cate_index: t.currentTarget.dataset.index,
                            page: 1,
                            is_loadmore: !0,
                            dataList: []
                        }), this.getLst(this.cateList[t.currentTarget.dataset.index].id);
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
                                return new Promise(function(n, i) {
                                    var r = t.apply(e, a);
                                    function s(t) {
                                        o(r, n, i, s, u, "next", t);
                                    }
                                    function u(t) {
                                        o(r, n, i, s, u, "throw", t);
                                    }
                                    s(void 0);
                                });
                            };
                        }(n.default.mark(function o() {
                            return n.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, a.login().then(function(t) {
                                        console.log("您已登陆！");
                                    });

                                  case 2:
                                    t.navigateTo({
                                        url: e.currentTarget.dataset.url
                                    });

                                  case 3:
                                  case "end":
                                    return n.stop();
                                }
                            }, o);
                        }))();
                    },
                    jumps: function(e) {
                        t.navigateTo({
                            url: e.currentTarget.dataset.url
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, a("543d").default);
    },
    "89ea": function(t, e, a) {
        var n = a("8f3c");
        a.n(n).a;
    },
    "89fa": function(t, e, a) {
        a.r(e);
        var n = a("3ca1"), o = a.n(n);
        for (var i in n) "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = o.a;
    },
    "8f3c": function(t, e, a) {},
    db4f: function(t, e, a) {
        a.r(e);
        var n = a("f5ab"), o = a("89fa");
        for (var i in o) "default" !== i && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(i);
        a("89ea");
        var r = a("f0c5"), s = Object(r.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = s.exports;
    },
    f5ab: function(t, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return i;
        }), a.d(e, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(e) {
                t.seeOperation = !t.seeOperation;
            });
        }, i = [];
    }
}, [ [ "1d98", "common/runtime", "common/vendor" ] ] ]);