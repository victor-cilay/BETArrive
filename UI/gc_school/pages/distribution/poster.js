(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/distribution/poster" ], {
    "1adf": function(e, t, n) {
        (function(e) {
            n("a8cf"), o(n("66fd"));
            var t = o(n("e69e"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    "3a80": function(e, t, n) {
        n.r(t);
        var o = n("c3eb"), a = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = a.a;
    },
    8396: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    ba78: function(e, t, n) {},
    c3eb: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function a(e, t, n, o, a, c, r) {
                try {
                    var s = e[c](r), i = s.value;
                } catch (e) {
                    return void n(e);
                }
                s.done ? t(i) : Promise.resolve(i).then(o, a);
            }
            var c = getApp(), r = {
                data: function() {
                    return {
                        windowWidth: 0,
                        windowHeight: 0,
                        poster: "",
                        code: "",
                        bg_color: "",
                        bg_poster: ""
                    };
                },
                onLoad: function() {
                    this.getUser();
                },
                onShow: function() {},
                methods: {
                    getUser: function() {
                        var e = this;
                        c.globalData.util.request({
                            url: "WechatUser/view",
                            data: {},
                            success: function(t) {
                                e.code = t.data.data.code, console.log(t.data), e.drawCanvas();
                            }
                        }, !0);
                    },
                    getSys: function() {
                        var t = this;
                        e.getSystemInfo({
                            success: function(e) {
                                console.log(e), t.windowWidth = e.windowWidth, t.windowHeight = e.windowHeight;
                            }
                        });
                    },
                    drawCanvas: function() {
                        var t = this;
                        return function(e) {
                            return function() {
                                var t = this, n = arguments;
                                return new Promise(function(o, c) {
                                    var r = e.apply(t, n);
                                    function s(e) {
                                        a(r, o, c, s, i, "next", e);
                                    }
                                    function i(e) {
                                        a(r, o, c, s, i, "throw", e);
                                    }
                                    s(void 0);
                                });
                            };
                        }(o.default.mark(function n() {
                            var a, c, r;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return a = t, e.showLoading({
                                        title: "加载中"
                                    }), a.showCanvas = !0, a.context = e.createCanvasContext("firstCanvas", a), t.bg_poster = e.getStorageSync("sys").bg_poster || "https://test.fkynet.net/wximage/dis/poster-bg.jpg", 
                                    n.next = 7, a.handleNetworkImgaeTransferTempImage(t.bg_poster);

                                  case 7:
                                    return c = n.sent, n.next = 10, a.handleNetworkImgaeTransferTempImage(a.code);

                                  case 10:
                                    r = n.sent, console.log("图111片", a.code), t.bg_poster && a.context.drawImage(c, 0, 0, 414, 736), 
                                    a.context.drawImage(r, 107, 435, 200, 200), a.context.draw(!0), setTimeout(function() {
                                        e.canvasToTempFilePath({
                                            canvasId: "firstCanvas",
                                            success: function(t) {
                                                setTimeout(function() {
                                                    e.hideLoading();
                                                }, 1e3), a.bg_color = "#FF2F25", a.poster = t.tempFilePath;
                                            }
                                        });
                                    }, 1e3);

                                  case 16:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    saveCanvas: function() {
                        var t = this;
                        e.canvasToTempFilePath({
                            canvasId: "firstCanvas",
                            quality: 1,
                            complete: function(n) {
                                e.saveImageToPhotosAlbum({
                                    filePath: n.tempFilePath,
                                    success: function() {
                                        console.log("save success"), e.showToast({
                                            title: "图片保存成功"
                                        }), setTimeout(function() {
                                            t.showCanvas = !1;
                                        }, 1e3);
                                    },
                                    fail: function() {
                                        setTimeout(function() {
                                            t.showCanvas = !1;
                                        }, 1e3);
                                    }
                                });
                            }
                        });
                    },
                    handleNetworkImgaeTransferTempImage: function(t) {
                        return new Promise(function(n) {
                            0 === t.indexOf("http") ? e.downloadFile({
                                url: t,
                                success: function(e) {
                                    n(e.tempFilePath);
                                }
                            }) : n(t);
                        });
                    }
                }
            };
            t.default = r;
        }).call(this, n("543d").default);
    },
    e49d: function(e, t, n) {
        var o = n("ba78");
        n.n(o).a;
    },
    e69e: function(e, t, n) {
        n.r(t);
        var o = n("8396"), a = n("3a80");
        for (var c in a) "default" !== c && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        n("e49d");
        var r = n("f0c5"), s = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = s.exports;
    }
}, [ [ "1adf", "common/runtime", "common/vendor" ] ] ]);