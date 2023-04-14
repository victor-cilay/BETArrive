(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/order/proof" ], {
    "044f": function(e, t, n) {
        n.r(t);
        var o = n("2fa8"), u = n("c50e");
        for (var a in u) "default" !== a && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(a);
        n("e679");
        var i = n("f0c5"), c = Object(i.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    },
    "2fa8": function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return u;
        }), n.d(t, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    3399: function(e, t, n) {
        n.r(t);
        var o = n("9705"), u = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = u.a;
    },
    5584: function(e, t, n) {},
    9705: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("044f")), u = a(n("a151"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var i = getApp(), c = {
                components: {
                    addImage: o.default
                },
                data: function() {
                    return {
                        id: "",
                        img: ""
                    };
                },
                onLoad: function(e) {
                    console.log(e), this.setData({
                        id: e.id
                    });
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: {
                    choose: function() {
                        var t = this;
                        e.chooseImage({
                            count: 1,
                            success: function(n) {
                                console.log(n), e.uploadFile({
                                    url: u.default.url + "Base/upload",
                                    filePath: n.tempFiles[0].path,
                                    header: {
                                        Authorization: e.getStorageSync("token")
                                    },
                                    name: "file",
                                    formData: {
                                        wxapp_id: u.default.uniacid
                                    },
                                    success: function(e) {
                                        console.log(e);
                                        var n = JSON.parse(e.data).data;
                                        console.log(n), t.setData({
                                            img: n
                                        });
                                    }
                                });
                            }
                        });
                    },
                    submit: function() {
                        if ("" == this.img) return i.globalData.util.message("请上传凭证", "", "error"), !1;
                        i.globalData.util.request({
                            url: "Order/uploadProof",
                            data: {
                                o_id: this.id,
                                proof: this.img
                            },
                            success: function(t) {
                                console.log(t), 200 == t.data.status && (e.showToast({
                                    title: "提交成功"
                                }), setTimeout(function() {
                                    e.navigateBack({
                                        delta: 1
                                    });
                                }, 1e3));
                            }
                        }, !0);
                    }
                }
            };
            t.default = c;
        }).call(this, n("543d").default);
    },
    b31c: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                data: function() {
                    return {};
                },
                props: {
                    count: {
                        type: Number,
                        default: 3,
                        observers: function(e, t) {}
                    },
                    images: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    addedCount: {
                        type: Number,
                        default: 0,
                        observers: function(e, t) {
                            console.log("--new--".newVal, "--old--", t);
                        }
                    },
                    currentIndex: {
                        type: Number,
                        default: 0
                    }
                },
                methods: {
                    chooseImage: function() {
                        this.$emit("chooseImage");
                    },
                    previewImage: function(t) {
                        e.previewImage({
                            urls: this.images,
                            current: this.images[t.currentTarget.dataset.index]
                        });
                    },
                    deleteImage: function(e) {
                        this.$emit("deleteImage", {
                            detail: e.currentTarget.dataset.index
                        });
                    }
                }
            };
            t.default = n;
        }).call(this, n("543d").default);
    },
    c50e: function(e, t, n) {
        n.r(t);
        var o = n("b31c"), u = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = u.a;
    },
    d57e: function(e, t, n) {
        (function(e) {
            n("a8cf"), o(n("66fd"));
            var t = o(n("e433"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    e433: function(e, t, n) {
        n.r(t);
        var o = n("ffb6"), u = n("3399");
        for (var a in u) "default" !== a && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(a);
        n("fc69");
        var i = n("f0c5"), c = Object(i.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    },
    e679: function(e, t, n) {
        var o = n("f38f");
        n.n(o).a;
    },
    f38f: function(e, t, n) {},
    fc69: function(e, t, n) {
        var o = n("5584");
        n.n(o).a;
    },
    ffb6: function(e, t, n) {
        n.d(t, "b", function() {
            return u;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, u = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    }
}, [ [ "d57e", "common/runtime", "common/vendor" ] ] ]);