(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/follow/index" ], {
    "0490": function(t, n, e) {},
    1506: function(t, n, e) {
        (function(t) {
            e("a8cf"), a(e("66fd"));
            var n = a(e("9d47"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    "228e": function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {
            return a;
        });
        var a = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "23b0": function(t, n, e) {
        e.r(n);
        var a = e("9a2d"), o = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = o.a;
    },
    "9a2d": function(t, n, e) {
        (function(t) {
            function e(t) {
                return function(t) {
                    if (Array.isArray(t)) return a(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return a(t, n);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? a(t, n) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function a(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
                return a;
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = getApp(), r = {
                data: function() {
                    return {
                        tabid: 0,
                        dataList: [],
                        page: 1,
                        loadmore: !0
                    };
                },
                onLoad: function(t) {
                    this.getMylist();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    this.setData({
                        page: this.page + 1
                    }), this.loadmore && this.getMylist();
                },
                methods: {
                    getMylist: function() {
                        var n = this;
                        o.globalData.util.request({
                            url: "entry/wxapp/followUser",
                            data: {
                                openid: t.getStorageSync("openid"),
                                page: n.page
                            },
                            success: function(t) {
                                if (t.data.data.length < 12 && n.setData({
                                    loadmore: !1
                                }), 1 == this.page) n.setData({
                                    dataList: t.data.data
                                }); else for (var a = 0; a < t.data.data.length; a++) n.setData({
                                    dataList: [].concat(e(n.dataList), [ t.data.data[a] ])
                                });
                            }
                        });
                    },
                    cancelFav: function(n) {
                        var e = this;
                        console.log(n.currentTarget.dataset.id), t.showModal({
                            title: "提示",
                            content: "确认取消关注吗？",
                            success: function(a) {
                                a.confirm && o.globalData.util.request({
                                    url: "entry/wxapp/goodsFav",
                                    data: {
                                        id: n.currentTarget.dataset.id,
                                        openid: t.getStorageSync("openid"),
                                        type: 2
                                    },
                                    success: function(t) {
                                        e.setData({
                                            page: 1,
                                            loadmore: !0
                                        }), e.getMylist();
                                    }
                                });
                            }
                        });
                    },
                    toDetail: function(n) {
                        t.navigateTo({
                            url: "/gc_school/pages/seconddetail/index?id=" + n.currentTarget.dataset.id
                        });
                    },
                    changeTab: function(t) {
                        this.setData({
                            tabid: t.currentTarget.dataset.id
                        }), this.getlist();
                    }
                }
            };
            n.default = r;
        }).call(this, e("543d").default);
    },
    "9d47": function(t, n, e) {
        e.r(n);
        var a = e("228e"), o = e("23b0");
        for (var r in o) "default" !== r && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        e("e29c");
        var i = e("f0c5"), c = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    },
    e29c: function(t, n, e) {
        var a = e("0490");
        e.n(a).a;
    }
}, [ [ "1506", "common/runtime", "common/vendor" ] ] ]);