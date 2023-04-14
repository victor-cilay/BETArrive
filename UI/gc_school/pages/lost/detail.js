(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/lost/detail" ], {
    "4da6": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return a;
        });
        var a = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "7c41": function(t, e, n) {},
    a799: function(t, e, n) {
        var a = n("7c41");
        n.n(a).a;
    },
    af3a: function(t, e, n) {
        n.r(e);
        var a = n("4da6"), i = n("d9ff");
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        n("a799");
        var c = n("f0c5"), s = Object(c.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = s.exports;
    },
    af5f: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a"));
            function i(t, e, n, a, i, o, c) {
                try {
                    var s = t[o](c), u = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(a, i);
            }
            var o = getApp(), c = {
                data: function() {
                    return {
                        detail: {
                            avatar: !1,
                            nickname: "",
                            time: "",
                            cate: 0,
                            place: "",
                            goods: "",
                            dates: "",
                            phone: "",
                            method: "",
                            remark: "",
                            media_type: "",
                            video: "",
                            img: [],
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
                        u_id: "",
                        child: {
                            nickimg: "",
                            nickname: "",
                            id: "",
                            uid: "",
                            content: "",
                            time: ""
                        }
                    };
                },
                onLoad: function(e) {
                    e.s_id && t.setStorageSync("schoolId", e.s_id), this.setData({
                        id: e.id
                    });
                    var n = this;
                    t.getStorageSync("token") && o.globalData.util.request({
                        url: "Wechatuser/view",
                        success: function(t) {
                            n.u_id = t.data.data.u_id, console.log(t.data.data);
                        }
                    }, !0), this.getDetail(e.id);
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
                        title: t.detail.title,
                        query: "/gc_school/pages/lost/detail?id=" + t.id,
                        imageUrl: t.detail.image[0]
                    } : {
                        title: t.detail.title,
                        query: "/gc_school/pages/lost/detail?id=" + t.id
                    };
                },
                onShareTimeline: function() {
                    return console.log(this), {
                        title: "失物招领",
                        query: "id=" + this.id + "&s_id=" + t.getStorageSync("schoolId")
                    };
                },
                methods: {
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
                        var n = this;
                        o.globalData.util.request({
                            url: "ZhInfo/detail",
                            method: "GET",
                            data: {
                                info_id: e,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log(t.data.data), n.setData({
                                    detail: t.data.data,
                                    comment_list: t.data.data.comment
                                });
                            }
                        });
                    },
                    makecall: function() {
                        t.makePhoneCall({
                            phoneNumber: this.detail.phone
                        });
                    },
                    inputFun: function(t) {
                        this.setData({
                            input: t.detail.value.replace(/\s*/g, "")
                        });
                    },
                    comment: function(t) {
                        var e = t.currentTarget.dataset.groupindex, n = t.currentTarget.dataset.index;
                        this.setData({
                            input: ""
                        }), "-1" != e && "-1" != n ? this.setData({
                            placeholder: "回复@" + this.comment_list[e].child[n].nickname,
                            pid: this.comment_list[e].child[n].id
                        }) : "-1" != e && "-1" == n && this.setData({
                            placeholder: "回复@" + this.comment_list[e].nickname,
                            pid: this.comment_list[e].id
                        }), this.setData({
                            is_hide: !this.is_hide
                        });
                    },
                    submit: function() {
                        var e = this;
                        return function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(a, o) {
                                    var c = t.apply(e, n);
                                    function s(t) {
                                        i(c, a, o, s, u, "next", t);
                                    }
                                    function u(t) {
                                        i(c, a, o, s, u, "throw", t);
                                    }
                                    s(void 0);
                                });
                            };
                        }(a.default.mark(function n() {
                            var i;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.login().then(function(t) {
                                        console.log("您已登陆！");
                                    });

                                  case 2:
                                    if ("" != e.input) {
                                        n.next = 5;
                                        break;
                                    }
                                    return t.showToast({
                                        title: "发布内容不能为空",
                                        icon: "none"
                                    }), n.abrupt("return");

                                  case 5:
                                    e.is_click ? ((i = e).setData({
                                        is_click: !1
                                    }), o.globalData.util.request({
                                        url: "ZhCommentList/add",
                                        data: {
                                            info_id: i.id,
                                            s_id: t.getStorageSync("schoolId"),
                                            content: i.input,
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

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    del: function(e) {
                        var n = this;
                        console.log(e.currentTarget.dataset.id), t.showModal({
                            content: "确认删除该评论吗？",
                            success: function(a) {
                                a.confirm ? o.globalData.util.request({
                                    url: "ZhCommentList/delete",
                                    data: {
                                        id: e.currentTarget.dataset.id,
                                        s_id: t.getStorageSync("schoolId")
                                    },
                                    success: function(e) {
                                        200 == e.data.status && (t.showToast({
                                            title: e.data.message
                                        }), setTimeout(function() {
                                            n.getDetail(n.id);
                                        }, 1e3));
                                    }
                                }, !0) : console.log("取消删除");
                            }
                        });
                    },
                    fav: function(e) {
                        if (console.log(e), "" == t.getStorageSync("openid")) return t.showToast({
                            title: "请先登录",
                            icon: "none"
                        }), void setTimeout(function() {
                            t.navigateTo({
                                url: "/gc_school/pages/user/index"
                            });
                        }, 1e3);
                        var n = this;
                        o.globalData.util.request({
                            url: "entry/wxapp/goodsFav",
                            data: {
                                id: e.currentTarget.dataset.id,
                                openid: t.getStorageSync("openid"),
                                type: 3
                            },
                            success: function(t) {
                                0 == t.data.errno && n.getDetail(n.id);
                            }
                        });
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
                            current: e.currentTarget.dataset.img,
                            urls: e.currentTarget.dataset.list
                        });
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    d9ff: function(t, e, n) {
        n.r(e);
        var a = n("af5f"), i = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = i.a;
    },
    fe91: function(t, e, n) {
        (function(t) {
            n("a8cf"), a(n("66fd"));
            var e = a(n("af3a"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "fe91", "common/runtime", "common/vendor" ] ] ]);