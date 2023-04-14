(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/lost/post" ], {
    "1b8b": function(e, t, a) {
        var o = a("ef56");
        a.n(o).a;
    },
    "5da5": function(e, t, a) {
        a.r(t);
        var o = a("d703"), i = a("7831");
        for (var n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        a("1b8b");
        var s = a("f0c5"), l = Object(s.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = l.exports;
    },
    7831: function(e, t, a) {
        a.r(t);
        var o = a("8930"), i = a.n(o);
        for (var n in o) "default" !== n && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(n);
        t.default = i.a;
    },
    8930: function(e, t, a) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(a("a151"));
            var i = getApp(), n = {
                data: function() {
                    return {
                        type: "",
                        video: "",
                        addedCount: 0,
                        picList: [],
                        images: [],
                        content: "",
                        cateList: [ "请选择", "失物招领", "寻物启事" ],
                        cate: 0,
                        date: "请选择",
                        is_click: !0,
                        goods: "",
                        check: !1
                    };
                },
                onLoad: function(e) {},
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: {
                    checkagree: function() {
                        this.setData({
                            check: !this.check
                        });
                    },
                    bindPickerChange: function(e) {
                        this.setData({
                            cate: e.detail.value
                        });
                    },
                    bindPickerDate: function(e) {
                        this.setData({
                            date: e.detail.value
                        });
                    },
                    choose: function() {
                        var t = this;
                        e.chooseMedia({
                            count: 3 - t.addedCount,
                            success: function(e) {
                                console.log(e), console.log(e.type), t.setData({
                                    type: e.type
                                }), "image" == e.type ? t.uploadimg(e.tempFiles, "ImgPost") : t.uploadvideo(e.tempFiles);
                            }
                        });
                    },
                    uploadvideo: function(t) {
                        e.showLoading({
                            title: "上传中...",
                            mask: !0
                        });
                        var a = this;
                        console.log(t[0]), e.uploadFile({
                            url: o.default.url + "Base/upload",
                            filePath: t[0].tempFilePath,
                            header: {
                                Authorization: e.getStorageSync("token")
                            },
                            name: "file",
                            formData: {
                                wxapp_id: o.default.uniacid
                            },
                            success: function(t) {
                                console.log(JSON.parse(t.data)), a.setData({
                                    video: JSON.parse(t.data).data
                                }), e.hideLoading({});
                            }
                        });
                    },
                    uploadimg: function(t, a, i) {
                        e.showLoading({
                            title: "上传中...",
                            mask: !0
                        });
                        for (var n = this, s = n.addedCount, l = 0; l < t.length; l++) e.uploadFile({
                            url: o.default.url + "Base/upload",
                            filePath: t[l].tempFilePath,
                            header: {
                                Authorization: e.getStorageSync("token")
                            },
                            name: "file",
                            formData: {
                                wxapp_id: o.default.uniacid
                            },
                            success: function(t) {
                                var a = JSON.parse(t.data);
                                if (console.log("打印", a), 200 == a.status) {
                                    s++;
                                    var o = n.picList;
                                    o.push(a.data);
                                    var i = n.images.concat(a.data);
                                    n.setData({
                                        images: i,
                                        addedCount: s,
                                        picList: o
                                    }), console.log(s), console.log("值", n.picList.length), s == n.picList.length && e.hideLoading({});
                                } else e.showToast({
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
                    delimg: function(e) {
                        var t = e.currentTarget.dataset.index, a = this.addedCount - 1;
                        this.picList.splice(t, 1), this.setData({
                            picList: this.picList,
                            addedCount: a
                        });
                    },
                    goodsFun: function(e) {
                        this.setData({
                            goods: e.detail.value.replace(/\s+/g, "")
                        });
                    },
                    formSubmit: function(t) {
                        var a = this, o = t.detail.value.place.replace(/\s+/g, ""), n = t.detail.value.phone.replace(/\s+/g, ""), s = t.detail.value.remark.replace(/\s+/g, ""), l = t.detail.value.date.replace(/\s+/g, ""), c = t.detail.value.method.replace(/\s+/g, "");
                        if (0 != this.cate) if ("" != this.goods) if ("" != o) if (!n || /^1[3456789]\d{9}$/.test(n)) if (this.is_click) {
                            if (this.setData({
                                is_click: !1
                            }), a.picList.length > 0) var u = a.picList.join(","); else u = a.picList;
                            i.globalData.util.request({
                                url: "ZhInfo/add",
                                method: "POST",
                                data: {
                                    pick_date: l,
                                    address: o,
                                    claim_method: c,
                                    title: a.goods,
                                    phone: n,
                                    type: a.cate,
                                    remarks: s,
                                    video: a.video,
                                    image: u,
                                    s_id: e.getStorageSync("schoolId")
                                },
                                success: function(t) {
                                    console.log(t.data), a.setData({
                                        goods: ""
                                    }), 200 == t.data.status && (e.showToast({
                                        title: "提交成功",
                                        icon: "success"
                                    }), setTimeout(function() {
                                        console.log("跳转啊"), e.redirectTo({
                                            url: "/gc_school/pages/lost/my"
                                        });
                                    }, 1e3));
                                },
                                complete: function() {
                                    a.setData({
                                        is_click: !0
                                    });
                                }
                            }, !0);
                        } else e.showToast({
                            title: "请勿重复点击",
                            icon: "none"
                        }); else i.globalData.util.message("请输入正确的手机号", "", "error"); else i.globalData.util.message("请输入地点", "", "error"); else i.globalData.util.message("请输入物品", "", "error"); else i.globalData.util.message("请选择分类", "", "error");
                    },
                    formReset: function() {
                        console.log("占位：函数 formReset 未声明");
                    }
                }
            };
            t.default = n;
        }).call(this, a("543d").default);
    },
    d703: function(e, t, a) {
        a.d(t, "b", function() {
            return i;
        }), a.d(t, "c", function() {
            return n;
        }), a.d(t, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, i = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
    },
    ef25: function(e, t, a) {
        (function(e) {
            a("a8cf"), o(a("66fd"));
            var t = o(a("5da5"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, e(t.default);
        }).call(this, a("543d").createPage);
    },
    ef56: function(e, t, a) {}
}, [ [ "ef25", "common/runtime", "common/vendor" ] ] ]);