(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/article/post" ], {
    3676: function(t, e, a) {},
    "43e7": function(t, e, a) {
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
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(e, a) {
                var n = arguments[arguments.length - 1].currentTarget.dataset, i = n.eventParams || n["event-params"];
                a = i, t.index = a;
            }, t.e1 = function(e) {
                t.is_top = 1 == t.is_top ? 0 : 1;
            }, t.e2 = function(e, a) {
                var n = arguments[arguments.length - 1].currentTarget.dataset, i = n.eventParams || n["event-params"];
                a = i, t.payIndex = a;
            });
        }, o = [];
    },
    "4bee": function(t, e, a) {
        var n = a("3676");
        a.n(n).a;
    },
    "4fdf": function(t, e, a) {
        a.r(e);
        var n = a("43e7"), i = a("d212");
        for (var o in i) "default" !== o && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(o);
        a("4bee"), a("f924");
        var s = a("f0c5"), c = Object(s.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = c.exports;
    },
    "7a13": function(t, e, a) {},
    ab53: function(t, e, a) {
        (function(t) {
            a("a8cf"), n(a("66fd"));
            var e = n(a("4fdf"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    },
    d212: function(t, e, a) {
        a.r(e);
        var n = a("f679"), i = a.n(n);
        for (var o in n) "default" !== o && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(o);
        e.default = i.a;
    },
    f679: function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o(a("a34a")), i = o(a("a151"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, a, n, i, o, s) {
                try {
                    var c = t[o](s), r = c.value;
                } catch (t) {
                    return void a(t);
                }
                c.done ? e(r) : Promise.resolve(r).then(n, i);
            }
            function c(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), a.push.apply(a, n);
                }
                return a;
            }
            function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(a), !0).forEach(function(e) {
                        u(t, e, a[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                    });
                }
                return t;
            }
            function u(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t;
            }
            var d = getApp(), l = {
                data: function() {
                    return r(r({}, this.configInfo), {}, {
                        type: "",
                        video: "",
                        addedCount: 0,
                        picList: [],
                        images: [],
                        content: "",
                        cateList: [],
                        index: 0,
                        is_agree: 0,
                        sysparment: {
                            is_anonymous: 0
                        },
                        is_click: !0,
                        payList: [],
                        payIndex: 0,
                        is_top: 0,
                        classId: 0,
                        student: 0,
                        getlist: []
                    });
                },
                onLoad: function(e) {
                    var a = this;
                    return function(t) {
                        return function() {
                            var e = this, a = arguments;
                            return new Promise(function(n, i) {
                                var o = t.apply(e, a);
                                function c(t) {
                                    s(o, n, i, c, r, "next", t);
                                }
                                function r(t) {
                                    s(o, n, i, c, r, "throw", t);
                                }
                                c(void 0);
                            });
                        };
                    }(n.default.mark(function i() {
                        var o;
                        return n.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return a.classId = e.cid || 0, n.next = 3, a.login().then(function(t) {
                                    console.log("您已登陆！");
                                });

                              case 3:
                                a.getCate(), a.top(), a.getSysparment(), o = a, t.$on("getlist", function(t) {
                                    o.getlist = t;
                                });

                              case 8:
                              case "end":
                                return n.stop();
                            }
                        }, i);
                    }))();
                },
                onReady: function() {},
                onShow: function() {
                    this.getstudent();
                },
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: {
                    gettopic: function() {
                        t.navigateTo({
                            url: "/gc_school/pages/article/topic"
                        });
                    },
                    getstudent: function() {
                        var t = this;
                        d.globalData.util.request({
                            url: "Dmhstudent/view",
                            success: function(e) {
                                t.setData({
                                    student: e.data.data.state
                                });
                            }
                        }, !0);
                    },
                    getfork: function(t) {
                        this.getlist.splice(t, 1);
                    },
                    getSysparment: function() {
                        var t = this;
                        d.globalData.util.request({
                            url: "Setting/view",
                            success: function(e) {
                                t.setData({
                                    sysparment: e.data.data.sys
                                });
                            }
                        });
                    },
                    checkagree: function() {
                        this.is_agree = 1 == this.is_agree ? 0 : 1;
                    },
                    bindPickerChange: function(t) {
                        this.setData({
                            index: t.detail.value
                        });
                    },
                    top: function() {
                        var e = this;
                        d.globalData.util.request({
                            url: "TopSetting/index",
                            method: "POST",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log(t.data.data), e.setData({
                                    payList: t.data.data.list
                                });
                            }
                        });
                    },
                    getCate: function() {
                        var e = this;
                        d.globalData.util.request({
                            url: "ZhForumClass/index",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                type: 1
                            },
                            success: function(t) {
                                console.log(t.data.data), e.setData({
                                    cateList: t.data.data.list
                                });
                            }
                        });
                    },
                    getCon: function(t) {
                        t.detail.value && this.setData({
                            content: t.detail.value.replace(/\s+/g, "")
                        });
                    },
                    choose: function() {
                        var e = this;
                        t.chooseMedia({
                            count: 9 - e.addedCount,
                            success: function(t) {
                                e.setData({
                                    type: t.type
                                }), "image" == t.type ? e.uploadimg(t.tempFiles, "ImgPost") : e.uploadvideo(t.tempFiles);
                            }
                        });
                    },
                    uploadvideo: function(e) {
                        t.showLoading({
                            title: "上传中...",
                            mask: !0
                        });
                        var a = this;
                        console.log(e[0]), t.uploadFile({
                            url: i.default.url + "Base/upload",
                            filePath: e[0].tempFilePath,
                            header: {
                                Authorization: t.getStorageSync("token")
                            },
                            name: "file",
                            formData: {
                                wxapp_id: i.default.uniacid
                            },
                            success: function(e) {
                                console.log(JSON.parse(e.data)), a.setData({
                                    video: JSON.parse(e.data).data
                                }), t.hideLoading({});
                            }
                        });
                    },
                    uploadimg: function(e, a, n) {
                        t.showLoading({
                            title: "上传中...",
                            mask: !0
                        });
                        for (var o = this, s = o.addedCount, c = 0; c < e.length; c++) t.uploadFile({
                            url: i.default.url + "Base/upload",
                            filePath: e[c].tempFilePath,
                            header: {
                                Authorization: t.getStorageSync("token")
                            },
                            name: "file",
                            formData: {
                                wxapp_id: i.default.uniacid
                            },
                            success: function(e) {
                                var a = JSON.parse(e.data);
                                if (console.log("打印", a), 200 == a.status) {
                                    s++;
                                    var n = o.picList;
                                    n.push(a.data);
                                    var i = o.images.concat(a.data);
                                    o.setData({
                                        images: i,
                                        addedCount: s,
                                        picList: n
                                    }), console.log(s), console.log("值", o.picList.length), s == o.picList.length && t.hideLoading({});
                                } else t.hideLoading(), t.showToast({
                                    title: a.msg,
                                    icon: "none"
                                });
                            }
                        });
                    },
                    delvideo: function() {
                        this.setData({
                            video: ""
                        }), console.log(this.video);
                    },
                    delimg: function(t) {
                        var e = t.currentTarget.dataset.index, a = this.addedCount - 1;
                        this.picList.splice(e, 1), this.setData({
                            picList: this.picList,
                            addedCount: a
                        });
                    },
                    reward: function() {
                        d.globalData.util.request({
                            url: "ZhArticles/reward",
                            method: "POST",
                            data: {
                                price: .02,
                                a_id: 48,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(e) {
                                t.requestPayment({
                                    timeStamp: e.data.data.paydata.timestamp.toString(),
                                    nonceStr: e.data.data.paydata.nonceStr,
                                    package: e.data.data.paydata.package,
                                    signType: "MD5",
                                    paySign: e.data.data.paydata.paySign,
                                    success: function(t) {
                                        console.log("success"), console.log(e.data.data);
                                    },
                                    fail: function(t) {
                                        console.log("fail");
                                    }
                                });
                            }
                        }, !0);
                    },
                    submit: function() {
                        var e = 1 == this.is_agree ? "圈子发布匿名功能需要您进行实名认证" : "圈子发布需要您进行实名认证";
                        if (1 != this.student && 1 == this.is_agree || 1 != this.student && 1 == t.getStorageSync("sys").is_article_auth) return 0 == this.student ? (d.globalData.util.message("请等待审核结果", "", "error"), 
                        !1) : (t.showModal({
                            title: "温馨提示",
                            content: e,
                            success: function(e) {
                                e.confirm ? t.navigateTo({
                                    url: "/gc_school/pages/user/student"
                                }) : console.log("取消删除");
                            }
                        }), !1);
                        var a = this;
                        if ("" == a.content) return d.globalData.util.message("请输入内容", "", "error"), !1;
                        if (a.is_click) {
                            if (a.setData({
                                is_click: !1
                            }), a.picList.length > 0) var n = a.picList.join(","); else n = a.picList;
                            d.globalData.util.request({
                                url: "ZhArticles/add",
                                method: "POST",
                                data: {
                                    class_id: this.classId || a.cateList[a.index].class_id,
                                    content: a.content,
                                    type: 1,
                                    price: this.payList.length > 0 ? this.payList[this.payIndex].price : 0,
                                    is_top: this.is_top,
                                    day: this.payList.length > 0 ? this.payList[this.payIndex].day : 0,
                                    video: a.video,
                                    image: n,
                                    s_id: t.getStorageSync("schoolId"),
                                    is_anonymous: a.is_agree,
                                    topic: this.getlist.map(function(t) {
                                        return t.id;
                                    }).join(",")
                                },
                                success: function(e) {
                                    console.log(e.data.data), a.setData({
                                        content: ""
                                    }), 200 == e.data.status ? "操作成功" == e.data.msg ? (t.showToast({
                                        title: "提交成功",
                                        icon: "success"
                                    }), setTimeout(function() {
                                        t.redirectTo({
                                            url: "/gc_school/pages/article/my"
                                        });
                                    }, 1e3)) : t.requestPayment({
                                        timeStamp: e.data.data.paydata.timestamp.toString(),
                                        nonceStr: e.data.data.paydata.nonceStr,
                                        package: e.data.data.paydata.package,
                                        signType: "MD5",
                                        paySign: e.data.data.paydata.paySign,
                                        success: function(a) {
                                            console.log("success"), console.log(e.data.data), setTimeout(function() {
                                                t.redirectTo({
                                                    url: "/gc_school/pages/article/my"
                                                });
                                            }, 1e3);
                                        },
                                        fail: function(t) {
                                            console.log("fail");
                                        }
                                    }) : t.showToast({
                                        title: e.data.msg,
                                        icon: "none"
                                    });
                                },
                                complete: function() {
                                    a.setData({
                                        is_click: !0
                                    });
                                }
                            }, !0);
                        } else t.showToast({
                            title: "请勿重复点击",
                            icon: "none"
                        });
                    }
                }
            };
            e.default = l;
        }).call(this, a("543d").default);
    },
    f924: function(t, e, a) {
        var n = a("7a13");
        a.n(n).a;
    }
}, [ [ "ab53", "common/runtime", "common/vendor" ] ] ]);