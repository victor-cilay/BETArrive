(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/secondhand/sale" ], {
    "321b": function(t, e, a) {
        var n = a("96e7");
        a.n(n).a;
    },
    "5b5f": function(t, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return r;
        }), a.d(e, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "5e63": function(t, e, a) {
        a.r(e);
        var n = a("5b5f"), o = a("76e1");
        for (var r in o) "default" !== r && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(r);
        a("321b");
        var i = a("f0c5"), c = Object(i.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = c.exports;
    },
    "76e1": function(t, e, a) {
        a.r(e);
        var n = a("c1cf"), o = a.n(n);
        for (var r in n) "default" !== r && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(r);
        e.default = o.a;
    },
    7922: function(t, e, a) {
        (function(t) {
            a("a8cf"), n(a("66fd"));
            var e = n(a("5e63"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    },
    "96e7": function(t, e, a) {},
    c1cf: function(t, e, a) {
        (function(t) {
            function a(t) {
                return function(t) {
                    if (Array.isArray(t)) return n(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return n(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? n(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function n(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = getApp(), r = {
                data: function() {
                    return {
                        tabid: 0,
                        dataList: [],
                        page: 1,
                        loadmore: !0,
                        good: {
                            id: "",
                            status: "",
                            img: "",
                            name: "",
                            price: "",
                            reason: ""
                        }
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
                    agree: function(e) {
                        console.log(e.currentTarget.dataset.id), console.log(e.currentTarget);
                        var a = this;
                        o.globalData.util.request({
                            url: "Dmhmarketorder/secondRefundOper",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                oid: e.currentTarget.dataset.id,
                                type: e.currentTarget.dataset.type
                            },
                            success: function(t) {
                                a.setData({
                                    page: 1,
                                    loadmore: !0
                                }), a.dataList = [], a.getMylist();
                            }
                        }, !0);
                    },
                    getMylist: function() {
                        var e = this;
                        o.globalData.util.request({
                            url: "Dmhmarketorder/index",
                            data: {
                                page: e.page,
                                type: 1,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                if (console.log(t.data.data.list, "---"), t.data.data.list.length < 10 && e.setData({
                                    loadmore: !1
                                }), 1 == this.page) e.setData({
                                    dataList: t.data.data.list
                                }); else for (var n = 0; n < t.data.data.list.length; n++) e.setData({
                                    dataList: [].concat(a(e.dataList), [ t.data.data.list[n] ])
                                });
                            }
                        }, !0);
                    },
                    delorder: function(e) {
                        var a = this;
                        console.log(e.currentTarget.dataset.id), t.showModal({
                            title: "提示",
                            content: "确认执行此操作吗？",
                            success: function(t) {
                                t.confirm && o.globalData.util.request({
                                    url: "entry/wxapp/delMyGoods",
                                    data: {
                                        id: e.currentTarget.dataset.id
                                    },
                                    success: function(t) {
                                        a.setData({
                                            page: 1,
                                            loadmore: !0
                                        }), a.getMylist();
                                    }
                                });
                            }
                        });
                    },
                    toDetail: function(e) {
                        t.navigateTo({
                            url: "/gc_school/pages/secondhand/orderdetail?id=" + e.currentTarget.dataset.id
                        });
                    },
                    changeTab: function(t) {
                        this.setData({
                            tabid: t.currentTarget.dataset.id
                        }), this.getlist();
                    }
                }
            };
            e.default = r;
        }).call(this, a("543d").default);
    }
}, [ [ "7922", "common/runtime", "common/vendor" ] ] ]);