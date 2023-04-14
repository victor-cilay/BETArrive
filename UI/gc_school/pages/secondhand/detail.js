(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/secondhand/detail" ], {
    "048e": function(t, a, e) {
        (function(t) {
            e("a8cf"), n(e("66fd"));
            var a = n(e("3f43"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(a.default);
        }).call(this, e("543d").createPage);
    },
    "3f43": function(t, a, e) {
        e.r(a);
        var n = e("4591"), o = e("8570");
        for (var i in o) "default" !== i && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(i);
        e("eea3");
        var s = e("f0c5"), c = Object(s.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = c.exports;
    },
    4591: function(t, a, e) {
        e.d(a, "b", function() {
            return o;
        }), e.d(a, "c", function() {
            return i;
        }), e.d(a, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "5d15": function(t, a, e) {
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("a34a"));
            function o(t, a, e, n, o, i, s) {
                try {
                    var c = t[i](s), u = c.value;
                } catch (t) {
                    return void e(t);
                }
                c.done ? a(u) : Promise.resolve(u).then(n, o);
            }
            function i(t, a, e) {
                return a in t ? Object.defineProperty(t, a, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[a] = e, t;
            }
            var s = getApp(), c = {
                data: function() {
                    var t;
                    return i(t = {
                        data: {
                            img: [],
                            name: "",
                            price: "",
                            oldprice: "",
                            addtime: "",
                            degree: "",
                            content: "",
                            user: {
                                u_id: ""
                            },
                            id: "",
                            is_watch: !1,
                            phone: ""
                        },
                        indicatorDots: !0,
                        is_fav: !1,
                        user_is_fav: !1,
                        comment_list: [],
                        comment_show: !1,
                        is_hide: !0,
                        placeholder: "想说点什么",
                        input: "",
                        pid: 0
                    }, "data", 0), i(t, "is_click", !0), i(t, "bottom", ""), i(t, "uids", 0), i(t, "autoplay", 0), 
                    i(t, "duration", ""), i(t, "interval", ""), i(t, "child", {
                        nickimg: "",
                        nickname: "",
                        id: "",
                        uid: "",
                        content: "",
                        time: ""
                    }), i(t, "selfflag", ""), i(t, "rotation", ""), i(t, "chatStatus", 0), t;
                },
                onLoad: function(a) {
                    console.log(a), a.s_id && t.setStorageSync("schoolId", a.s_id), this.getDetail(a.id), 
                    this.stay(a.id), this.getChatStatus(), t.getStorageSync("token") && (this.getUids(), 
                    this.footprints(a.id), this.views(a.id));
                },
                onPageScroll: function() {
                    0 == this.is_hide && (console.log("楚平路"), this.setData({
                        is_hide: !0
                    }));
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {
                    return {
                        title: this.data.name,
                        path: "/gc_school/pages/secondhand/detail?id=" + this.data.m_id + "&s_id=" + t.getStorageSync("schoolId"),
                        imageUrl: this.data.img
                    };
                },
                onShareTimeline: function() {
                    return console.log(this.data), {
                        title: this.data.name,
                        query: "id=" + this.data.m_id + "&s_id=" + t.getStorageSync("schoolId"),
                        imageUrl: this.data.img[0]
                    };
                },
                methods: {
                    views: function(a) {
                        var e = this;
                        s.globalData.util.request({
                            url: "Dmhgoodsstay/view",
                            data: {
                                m_id: a,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log(t, "---222---"), 200 == t.data.status && 1 == t.data.data.is_fav && (e.is_fav = !0);
                            }
                        }, !0);
                    },
                    getChatStatus: function() {
                        var t = this;
                        s.globalData.util.request({
                            url: "ZhChat/check",
                            success: function(a) {
                                console.log(a), "已授权" == a.data.msg && (t.chatStatus = 1);
                            }
                        });
                    },
                    sixin: function() {
                        var a = this;
                        return function(t) {
                            return function() {
                                var a = this, e = arguments;
                                return new Promise(function(n, i) {
                                    var s = t.apply(a, e);
                                    function c(t) {
                                        o(s, n, i, c, u, "next", t);
                                    }
                                    function u(t) {
                                        o(s, n, i, c, u, "throw", t);
                                    }
                                    c(void 0);
                                });
                            };
                        }(n.default.mark(function e() {
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.dingyueChat();

                                  case 2:
                                    t.navigateTo({
                                        url: "/gc_school/pages/chat/chat?s_id=" + a.data.u_id
                                    });

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    inputFocus: function(t) {
                        this.setData({
                            bottom: t.detail.height
                        });
                    },
                    inputBlur: function() {
                        this.setData({
                            bottom: 0
                        });
                    },
                    stay: function(a) {
                        var e = this;
                        s.globalData.util.request({
                            url: "Dmhmarketcategorystay/index",
                            data: {
                                m_id: a,
                                s_id: t.getStorageSync("schoolId"),
                                wxapp_id: e.data.wxapp_id
                            },
                            success: function(t) {
                                console.log(t.data.data), e.setData({
                                    comment_list: t.data.data.list
                                }), e.footprint(a);
                            }
                        }, !0);
                    },
                    footprints: function(a) {
                        s.globalData.util.request({
                            url: "Dmhfootprint/add",
                            data: {
                                m_id: a,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {}
                        }, !0);
                    },
                    getUids: function() {
                        var t = this;
                        s.globalData.util.request({
                            url: "Dmhmarketgoods/uids",
                            data: {},
                            success: function(a) {
                                console.log(a.data.data), t.setData({
                                    uids: a.data.data.uids
                                });
                            }
                        }, !0);
                    },
                    getDetail: function(t) {
                        var a = this;
                        s.globalData.util.request({
                            url: "Dmhmarketgoods/view",
                            data: {
                                m_id: t
                            },
                            success: function(e) {
                                console.log(e.data.data), a.setData({
                                    data: e.data.data,
                                    is_fav: e.data.data.is_fav,
                                    user_is_fav: e.data.data.user_is_fav,
                                    comment_list: e.data.data.comment,
                                    rotation: e.data.data.rotation
                                }), a.footprint(t);
                            }
                        });
                    },
                    comment: function(t) {
                        var a = t.currentTarget.dataset.groupindex, e = t.currentTarget.dataset.index;
                        this.setData({
                            input: ""
                        }), "-1" != a && "-1" != e ? (console.log(111111), this.setData({
                            placeholder: "回复@" + this.comment_list[a].child[e].nickname,
                            pid: this.comment_list[a].child[e].id
                        })) : (console.log(222222), "-1" != a && "-1" == e && this.setData({
                            placeholder: "回复@" + this.comment_list[a].nickname,
                            pid: this.comment_list[a].id
                        })), this.setData({
                            is_hide: !this.is_hide
                        });
                    },
                    del: function(a) {
                        var e = this;
                        console.log(a.currentTarget.dataset.id), t.showModal({
                            content: "确认删除该评论吗？",
                            success: function(n) {
                                n.confirm ? s.globalData.util.request({
                                    url: "Dmhmarketcategorystay/delete",
                                    data: {
                                        ids: a.currentTarget.dataset.id
                                    },
                                    success: function(a) {
                                        200 == a.data.status && (t.showToast({
                                            title: a.data.message
                                        }), setTimeout(function() {
                                            e.stay(e.data.m_id);
                                        }, 500));
                                    }
                                }) : console.log("取消删除");
                            }
                        });
                    },
                    inputFun: function(t) {
                        this.setData({
                            input: t.detail.value.replace(/\s*/g, "")
                        });
                    },
                    submit: function(a) {
                        if (!t.getStorageSync("userinfo")) return t.showToast({
                            title: "请登录后发布",
                            icon: "none"
                        }), void setTimeout(function() {
                            t.navigateTo({
                                url: "/gc_school/pages/user/index"
                            });
                        }, 1e3);
                        if ("" != this.input) if (this.is_click) {
                            var e = this;
                            e.setData({
                                is_click: !1
                            }), s.globalData.util.request({
                                url: "Dmhmarketcategorystay/add",
                                data: {
                                    m_id: e.data.m_id,
                                    s_id: e.data.s_id,
                                    wxapp_id: e.wxapp_id,
                                    content: e.input,
                                    pid: e.pid,
                                    details: e.input
                                },
                                success: function(t) {
                                    setTimeout(function() {
                                        e.stay(e.data.m_id);
                                    }, 1e3), console.log(t.data.data), e.setData({
                                        input: ""
                                    });
                                },
                                complete: function() {
                                    e.setData({
                                        is_click: !0
                                    });
                                }
                            }, !0);
                        } else t.showToast({
                            title: "请勿重复点击",
                            icon: "none"
                        }); else t.showToast({
                            title: "发布内容不能为空",
                            icon: "none"
                        });
                    },
                    toBuy: function() {
                        if (console.log("立即购买"), "" == t.getStorageSync("token")) return t.showToast({
                            title: "请先登录",
                            icon: "none"
                        }), void setTimeout(function() {
                            t.navigateTo({
                                url: "/gc_school/pages/user/index"
                            });
                        }, 1e3);
                        t.navigateTo({
                            url: "/gc_school/pages/secondhand/buy?id=" + this.data.m_id
                        });
                    },
                    showmore: function(t) {
                        console.log(t.currentTarget.dataset.index);
                        var a = this.comment_list;
                        a[t.currentTarget.dataset.index].block = !a[t.currentTarget.dataset.index].block, 
                        this.setData({
                            comment_list: a
                        });
                    },
                    footprint: function(a) {
                        t.getStorageSync("openid");
                    },
                    previewImage: function(a) {
                        var e = this.data.img, n = a.target.dataset.index;
                        t.previewImage({
                            urls: e,
                            current: e[n],
                            fail: function(a) {
                                t.showToast({
                                    title: "出错啦，请重试！",
                                    icon: "none",
                                    duration: 2e3
                                });
                            }
                        });
                    },
                    fav: function(a) {
                        if (console.log(a, "---"), "" == t.getStorageSync("token")) return t.showToast({
                            title: "请先登录",
                            icon: "none"
                        }), void setTimeout(function() {
                            t.navigateTo({
                                url: "/gc_school/pages/user/index"
                            });
                        }, 1e3);
                        var e = this;
                        e.is_fav ? s.globalData.util.request({
                            url: "Dmhgoodsstay/delete",
                            data: {
                                m_id: a,
                                s_id: t.getStorageSync("schoolId"),
                                type: 1
                            },
                            success: function(t) {
                                200 == t.data.status && (e.is_fav = !1);
                            }
                        }, !0) : s.globalData.util.request({
                            url: "Dmhgoodsstay/add",
                            data: {
                                m_id: a,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                200 == t.data.status && (e.is_fav = !0);
                            }
                        }, !0);
                    },
                    makecall: function(a) {
                        if (console.log(a, "---"), "" == t.getStorageSync("token")) return t.showToast({
                            title: "请先登录",
                            icon: "none"
                        }), void setTimeout(function() {
                            t.navigateTo({
                                url: "/gc_school/pages/user/index"
                            });
                        }, 1e3);
                        t.makePhoneCall({
                            phoneNumber: a.currentTarget.dataset.phone,
                            success: function() {
                                console.log("成功拨打电话");
                            }
                        });
                    }
                }
            };
            a.default = c;
        }).call(this, e("543d").default);
    },
    8570: function(t, a, e) {
        e.r(a);
        var n = e("5d15"), o = e.n(n);
        for (var i in n) "default" !== i && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(i);
        a.default = o.a;
    },
    ba1e: function(t, a, e) {},
    eea3: function(t, a, e) {
        var n = e("ba1e");
        e.n(n).a;
    }
}, [ [ "048e", "common/runtime", "common/vendor" ] ] ]);