(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/second/index" ], {
    "15a9": function(t, e, a) {
        a.r(e);
        var o = a("cce1"), n = a.n(o);
        for (var r in o) "default" !== r && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = n.a;
    },
    2007: function(t, e, a) {
        a.r(e);
        var o = a("c5f0"), n = a("15a9");
        for (var r in n) "default" !== r && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(r);
        a("28ed");
        var i = a("f0c5"), c = Object(i.a)(n.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "28ed": function(t, e, a) {
        var o = a("9d92");
        a.n(o).a;
    },
    "9d92": function(t, e, a) {},
    c5f0: function(t, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return n;
        }), a.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
    },
    cce1: function(t, e, a) {
        (function(t) {
            function a(t) {
                return function(t) {
                    if (Array.isArray(t)) return o(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return o(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? o(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, o = new Array(e); a < e; a++) o[a] = t[a];
                return o;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = getApp(), r = {
                data: function() {
                    return {
                        indicatorDots: !0,
                        common: "通用",
                        currentIndex: 0,
                        cateList: [],
                        goodsList: [],
                        islog: !1,
                        page: 1,
                        loadmore: !0,
                        showList: !1
                    };
                },
                onLoad: function() {},
                onShow: function() {
                    this.getCate(), this.setData({
                        currentIndex: 0,
                        goodsList: [],
                        page: 1,
                        loadmore: !0
                    }), t.getStorageSync("openid") && this.setData({
                        islog: !0
                    });
                },
                onReachBottom: function() {
                    this.setData({
                        page: this.page + 1
                    }), this.loadmore && this.getGoods();
                },
                methods: {
                    getCate: function() {
                        var e = this;
                        n.globalData.util.request({
                            url: "entry/wxapp/secondCate",
                            data: {
                                sid: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log(t.data.data), e.setData({
                                    cateList: t.data.data
                                }), e.getGoods();
                            }
                        });
                    },
                    getGoods: function() {
                        var e = this;
                        console.log("分类", e.cateList), n.globalData.util.request({
                            url: "entry/wxapp/secondGoods",
                            data: {
                                page: e.page,
                                sid: t.getStorageSync("schoolId"),
                                cid: e.cateList[e.currentIndex].id
                            },
                            success: function(t) {
                                if (t.data.data.length < 8 && e.setData({
                                    loadmore: !1
                                }), console.log(t.data.data), 1 == this.page) e.setData({
                                    goodsList: t.data.data
                                }); else for (var o = 0; o < t.data.data.length; o++) e.setData({
                                    goodsList: [].concat(a(e.goodsList), [ t.data.data[o] ])
                                });
                            }
                        });
                    },
                    cateSelect: function(t) {
                        this.setData({
                            currentIndex: t.currentTarget.dataset.index,
                            page: 1,
                            loadmore: !0
                        }), this.getGoods();
                    },
                    toDetail: function(e) {
                        t.navigateTo({
                            url: "/gc_school/pages/seconddetail/index?id=" + e.currentTarget.dataset.id
                        });
                    },
                    showlist: function() {
                        this.showList ? this.setData({
                            showList: !1
                        }) : this.setData({
                            showList: !0
                        });
                    },
                    publish: function() {
                        t.navigateTo({
                            url: "/gc_school/pages/addsecond/index"
                        });
                    },
                    my: function() {
                        t.navigateTo({
                            url: "/gc_school/pages/mysecond/index"
                        });
                    },
                    search: function() {
                        t.navigateTo({
                            url: "/gc_school/pages/search/index"
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, a("543d").default);
    },
    da71: function(t, e, a) {
        (function(t) {
            a("a8cf"), o(a("66fd"));
            var e = o(a("2007"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "da71", "common/runtime", "common/vendor" ] ] ]);