(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/secondhand/cate" ], {
    7386: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return a;
        });
        var a = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    8987: function(t, e, n) {
        (function(t) {
            function n(t) {
                return function(t) {
                    if (Array.isArray(t)) return a(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return a(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = getApp(), r = {
                data: function() {
                    return {
                        currentIndex: 0,
                        goodsList: [],
                        loadmore: !0,
                        page: 1,
                        current_cate: 9999,
                        name: "",
                        cateList: ""
                    };
                },
                onLoad: function(t) {
                    t.id && this.setData({
                        current_cate: t.id
                    }), console.log(t), this.getCate();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    this.setData({
                        page: this.page + 1
                    }), this.loadmore && this.getGoods();
                },
                methods: {
                    changeTab: function(t) {
                        this.setData({
                            current_cate: t.currentTarget.dataset.id,
                            page: 1,
                            loadmore: !0,
                            goodsList: []
                        }), this.getGoods();
                    },
                    inputVal: function(t) {
                        console.log(t.detail.value), this.setData({
                            name: t.detail.value
                        });
                    },
                    toDetail: function(e) {
                        console.log(e), t.navigateTo({
                            url: "/gc_school/pages/secondhand/detail?id=" + e.currentTarget.dataset.id
                        });
                    },
                    search: function() {
                        this.setData({
                            current_cate: -1,
                            loadmore: !0,
                            page: 1,
                            goodsList: []
                        }), this.getGoods();
                    },
                    getCate: function() {
                        var e = this;
                        o.globalData.util.request({
                            url: "Dmhmarketcategory/index",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log(t.data.data), e.setData({
                                    cateList: t.data.data.list
                                }), e.getGoods();
                            }
                        });
                    },
                    getGoods: function() {
                        var e = this;
                        if (9999 == e.current_cate) var a = {
                            page: e.page,
                            s_id: t.getStorageSync("schoolId"),
                            type: 1
                        }; else a = -1 == e.current_cate ? {
                            page: e.page,
                            s_id: t.getStorageSync("schoolId"),
                            keywords: e.name,
                            type: 3
                        } : {
                            page: e.page,
                            s_id: t.getStorageSync("schoolId"),
                            cid: e.current_cate,
                            type: 2
                        };
                        o.globalData.util.request({
                            url: "Dmhmarketgoods/index",
                            data: a,
                            success: function(t) {
                                console.log("打印列表", t.data.data), t.data.data.list.length < 10 && e.setData({
                                    loadmore: !1
                                });
                                for (var a = 0; a < t.data.data.list.length; a++) e.setData({
                                    goodsList: [].concat(n(e.goodsList), [ t.data.data.list[a] ])
                                });
                            }
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, n("543d").default);
    },
    "9fe4": function(t, e, n) {},
    b5c8: function(t, e, n) {
        n.r(e);
        var a = n("8987"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = o.a;
    },
    c34c: function(t, e, n) {
        (function(t) {
            n("a8cf"), a(n("66fd"));
            var e = a(n("d0c2"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    d0c2: function(t, e, n) {
        n.r(e);
        var a = n("7386"), o = n("b5c8");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("fe78");
        var c = n("f0c5"), i = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    fe78: function(t, e, n) {
        var a = n("9fe4");
        n.n(a).a;
    }
}, [ [ "c34c", "common/runtime", "common/vendor" ] ] ]);