(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/article/detail" ], {
    "05f5": function(t, e, a) {
        a.r(e);
        var n = a("b427"), i = a.n(n);
        for (var o in n) "default" !== o && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(o);
        e.default = i.a;
    },
    2206: function(t, e, a) {
        var n = a("9233");
        a.n(n).a;
    },
    "35c2": function(t, e, a) {
        var n = a("a646");
        a.n(n).a;
    },
    "520f": function(t, e, a) {
        a.d(e, "b", function() {
            return i;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    5539: function(t, e, a) {
        (function(t) {
            a("a8cf"), n(a("66fd"));
            var e = n(a("a1e4"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    },
    9233: function(t, e, a) {},
    a1e4: function(t, e, a) {
        a.r(e);
        var n = a("520f"), i = a("05f5");
        for (var o in i) "default" !== o && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(o);
        a("35c2"), a("2206");
        var s = a("f0c5"), c = Object(s.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = c.exports;
    },
    a646: function(t, e, a) {},
    b427: function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(a("a34a"));
            function i(t, e, a, n, i, o, s) {
                try {
                    var c = t[o](s), u = c.value;
                } catch (t) {
                    return void a(t);
                }
                c.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function o(t) {
                return function() {
                    var e = this, a = arguments;
                    return new Promise(function(n, o) {
                        var s = t.apply(e, a);
                        function c(t) {
                            i(s, n, o, c, u, "next", t);
                        }
                        function u(t) {
                            i(s, n, o, c, u, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var s = getApp(), c = {
                data: function() {
                    return {
                        detail: {
                            is_anonymous: 0,
                            avatar: !1,
                            nickname: "",
                            time: "",
                            content: "",
                            media_type: "",
                            video: "",
                            img: [],
                            share_num: "",
                            id: "",
                            is_fav: !1,
                            fav_num: "",
                            user: {
                                u_id: ""
                            }
                        },
                        input: "",
                        id: "",
                        pid: 0,
                        comment_list: [],
                        placeholder: "请输入内容",
                        bottom: 0,
                        is_click: !0,
                        is_hide: "",
                        img: "",
                        child: {
                            nickimg: "",
                            nickname: "",
                            id: "",
                            uid: "",
                            content: "",
                            time: ""
                        },
                        modalName: !1,
                        price: 0,
                        sysparment: {},
                        chatStatus: 0
                    };
                },
                onLoad: function(t) {
                    this.setData({
                        id: t.id
                    }), this.getDetail(t.id), this.addView(t.id), this.getSysparment(), this.getChatStatus();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {
                    console.log(111);
                    var t = this;
                    return 2 == t.detail.media_type ? {
                        title: t.detail.content,
                        query: "/gc_school/pages/article/detail?id=" + t.id,
                        imageUrl: t.detail.image[0]
                    } : {
                        title: t.detail.content,
                        query: "/gc_school/pages/article/detail?id=" + t.id
                    };
                },
                onShareTimeline: function() {
                    return console.log(this), console.log(this.detail), "image" == this.detail.media_type ? {
                        title: this.detail.content,
                        query: "id=" + this.id,
                        imageUrl: this.detail.img[0]
                    } : {
                        title: this.detail.content,
                        query: "id=" + this.id
                    };
                },
                methods: {
                    getSysparment: function() {
                        var t = this;
                        s.globalData.util.request({
                            url: "Setting/view",
                            data: {},
                            success: function(e) {
                                t.sysparment = e.data.data.sys, console.log(e.data.data.sys);
                            }
                        });
                    },
                    addView: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        s.globalData.util.request({
                            url: "ZhArticles/addView",
                            data: {
                                article_id: t
                            },
                            success: function(t) {
                                self.sysparment = t.data.data.sys, console.log(t.data.data.sys);
                            }
                        });
                    },
                    guanzhu: function(t) {
                        var e = this;
                        return o(n.default.mark(function a() {
                            var i;
                            return n.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return a.next = 2, e.login().then(function(t) {
                                        console.log("您已登陆！");
                                    });

                                  case 2:
                                    i = e, s.globalData.util.request({
                                        url: "UserFollow/follow",
                                        data: {
                                            u_id: e.detail.u_id
                                        },
                                        success: function(e) {
                                            200 == e.data.status && (1 == t ? i.tips.success("取关成功！") : i.tips.success("关注成功！"), 
                                            i.getDetail(i.id));
                                        }
                                    }, !0);

                                  case 4:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }))();
                    },
                    show: function() {
                        this.modalName = !0;
                    },
                    close: function() {
                        this.modalName = !1;
                    },
                    change: function(t) {
                        this.price = t;
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
                    getDetail: function(e) {
                        var a = this;
                        s.globalData.util.request({
                            url: "ZhArticles/view",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                article_id: e
                            },
                            success: function(t) {
                                console.log(t.data.data), a.setData({
                                    detail: t.data.data,
                                    comment_list: t.data.data.comment
                                });
                            }
                        }, !0);
                    },
                    shang: function() {
                        var e = this;
                        return o(n.default.mark(function a() {
                            var i;
                            return n.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return i = e, a.next = 3, e.login().then(function(t) {
                                        console.log("您已登陆！");
                                    });

                                  case 3:
                                    s.globalData.util.request({
                                        url: "ZhArticles/reward",
                                        method: "POST",
                                        data: {
                                            s_id: t.getStorageSync("schoolId"),
                                            price: e.price,
                                            a_id: e.id
                                        },
                                        success: function(e) {
                                            console.log(e.data.data), t.requestPayment({
                                                timeStamp: e.data.data.paydata.timestamp.toString(),
                                                nonceStr: e.data.data.paydata.nonceStr,
                                                package: e.data.data.paydata.package,
                                                signType: "MD5",
                                                paySign: e.data.data.paydata.paySign,
                                                success: function(t) {
                                                    i.tips.success("打赏成功！"), i.modalName = !1, i.getDetail(i.id);
                                                },
                                                fail: function(t) {
                                                    i.modalName = !1, console.log("fail");
                                                }
                                            });
                                        }
                                    }, !0);

                                  case 4:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }))();
                    },
                    inputFun: function(t) {
                        this.setData({
                            input: t.detail.value.replace(/\s*/g, "")
                        });
                    },
                    comment: function(t) {
                        var e = t.currentTarget.dataset.groupindex, a = t.currentTarget.dataset.index;
                        this.setData({
                            input: ""
                        }), "-1" != e && "-1" != a ? this.setData({
                            placeholder: "回复@" + this.comment_list[e].child[a].nickname,
                            pid: this.comment_list[e].child[a].id
                        }) : "-1" != e && "-1" == a && this.setData({
                            placeholder: "回复@" + this.comment_list[e].nickname,
                            pid: this.comment_list[e].id
                        }), this.setData({
                            is_hide: !this.is_hide
                        });
                    },
                    submit: function() {
                        var e = this;
                        return o(n.default.mark(function a() {
                            var i;
                            return n.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return a.next = 2, e.login().then(function(t) {
                                        console.log("您已登陆！");
                                    });

                                  case 2:
                                    if ("" != e.input) {
                                        a.next = 5;
                                        break;
                                    }
                                    return t.showToast({
                                        title: "发布内容不能为空",
                                        icon: "none"
                                    }), a.abrupt("return");

                                  case 5:
                                    (i = e).is_click ? (i.setData({
                                        is_click: !1
                                    }), s.globalData.util.request({
                                        url: "ZhCommenes/add",
                                        data: {
                                            article_id: i.id,
                                            s_id: t.getStorageSync("schoolId"),
                                            contents: i.input,
                                            p_id: i.pid
                                        },
                                        success: function(t) {
                                            setTimeout(function() {
                                                i.getDetail(i.id);
                                            }, 1e3), console.log(t.data.data), i.setData({
                                                input: ""
                                            });
                                        },
                                        complete: function() {
                                            i.setData({
                                                is_click: !0
                                            });
                                        }
                                    }, !0)) : t.showToast({
                                        title: "请勿重复点击",
                                        icon: "none"
                                    });

                                  case 7:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }))();
                    },
                    del: function(e) {
                        var a = this;
                        console.log(e.currentTarget.dataset.id), t.showModal({
                            content: "确认删除该评论吗？",
                            success: function(n) {
                                n.confirm ? s.globalData.util.request({
                                    url: "ZhCommenes/delete",
                                    data: {
                                        type: 3,
                                        id: e.currentTarget.dataset.id,
                                        s_id: t.getStorageSync("schoolId")
                                    },
                                    success: function(e) {
                                        200 == e.data.status && (t.showToast({
                                            title: e.data.message
                                        }), setTimeout(function() {
                                            a.getDetail(a.id);
                                        }, 1e3));
                                    }
                                }, !0) : console.log("取消删除");
                            }
                        });
                    },
                    getChatStatus: function() {
                        var t = this;
                        s.globalData.util.request({
                            url: "ZhChat/check",
                            success: function(e) {
                                console.log(e), "已授权" == e.data.msg && (t.chatStatus = 1);
                            }
                        });
                    },
                    sixin: function() {
                        var e = this;
                        return o(n.default.mark(function a() {
                            return n.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    if (0 != e.detail.is_follow) {
                                        a.next = 3;
                                        break;
                                    }
                                    return t.showToast({
                                        title: "关注后才可以发私信哦！",
                                        icon: "none",
                                        mask: !0
                                    }), a.abrupt("return", !1);

                                  case 3:
                                    return a.next = 5, e.dingyueChat();

                                  case 5:
                                    t.navigateTo({
                                        url: "/gc_school/pages/chat/chat?s_id=" + e.detail.u_id
                                    });

                                  case 6:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }))();
                    },
                    fav: function(e) {
                        var a = this;
                        return o(n.default.mark(function i() {
                            var o;
                            return n.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return console.log(e), o = a, n.next = 4, a.login().then(function(t) {
                                        console.log("您已登陆！");
                                    });

                                  case 4:
                                    s.globalData.util.request({
                                        url: "ZhGiveThumbsUp/giveUp",
                                        data: {
                                            article_id: e.currentTarget.dataset.id,
                                            s_id: t.getStorageSync("schoolId")
                                        },
                                        success: function(t) {
                                            200 == t.data.status && o.getDetail(o.id);
                                        }
                                    }, !0);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, i);
                        }))();
                    },
                    showmore: function(t) {
                        console.log(t.currentTarget.dataset.index);
                        var e = this.comment_list;
                        e[t.currentTarget.dataset.index].block = !e[t.currentTarget.dataset.index].block, 
                        this.setData({
                            comment_list: e
                        });
                    },
                    preview: function(e) {
                        t.previewImage({
                            current: e.currentTarget.dataset.index,
                            urls: e.currentTarget.dataset.list
                        });
                    }
                }
            };
            e.default = c;
        }).call(this, a("543d").default);
    }
}, [ [ "5539", "common/runtime", "common/vendor" ] ] ]);