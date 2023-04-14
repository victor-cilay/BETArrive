(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/secondhand/my" ], {
    "17c5": function(t, a, e) {
        (function(t) {
            function e(t) {
                return function(t) {
                    if (Array.isArray(t)) return n(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, a) {
                    if (t) {
                        if ("string" == typeof t) return n(t, a);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? n(t, a) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function n(t, a) {
                (null == a || a > t.length) && (a = t.length);
                for (var e = 0, n = new Array(a); e < a; e++) n[e] = t[e];
                return n;
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var o = getApp(), r = {
                data: function() {
                    return {
                        tabid: 0,
                        dataList: [],
                        page: 1,
                        loadmore: !0,
                        states: 0,
                        examine: 0,
                        good: {
                            id: "",
                            status: "",
                            img: "",
                            name: "",
                            price: "",
                            fav_count: "",
                            stock: 0,
                            is_sale: 0
                        }
                    };
                },
                onLoad: function(t) {
                    this.getMylist(), this.getexamine();
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
                    getexamine: function() {
                        var a = this;
                        o.globalData.util.request({
                            url: "Dmhmarketuser/examine",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                page: a.page
                            },
                            success: function(t) {
                                a.examine = t.data.data.examine, console.log(t.data.data.examine, "---111---");
                            }
                        }, !0);
                    },
                    edit: function(a) {
                        console.log(a.currentTarget.dataset.id), t.navigateTo({
                            url: "/gc_school/pages/secondhand/edit?id=" + a.currentTarget.dataset.id
                        });
                    },
                    tabs: function(t) {
                        this.states = t, 0 == t ? (this.dataList = [], this.getMylist()) : (this.dataList = [], 
                        this.getMylists());
                    },
                    getMylist: function() {
                        var a = this;
                        o.globalData.util.request({
                            url: "Dmhmarketuser/goods",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                page: a.page
                            },
                            success: function(t) {
                                t.data.data.length < 10 && a.setData({
                                    loadmore: !1
                                });
                                for (var n = 0; n < t.data.data.length; n++) a.setData({
                                    dataList: [].concat(e(a.dataList), [ t.data.data[n] ])
                                });
                            }
                        }, !0);
                    },
                    getMylists: function() {
                        var a = this;
                        o.globalData.util.request({
                            url: "Dmhmarketuser/goods",
                            data: {
                                examine: 1,
                                s_id: t.getStorageSync("schoolId"),
                                page: a.page
                            },
                            success: function(t) {
                                t.data.data.length < 10 && a.setData({
                                    loadmore: !1
                                });
                                for (var n = 0; n < t.data.data.length; n++) a.setData({
                                    dataList: [].concat(e(a.dataList), [ t.data.data[n] ])
                                });
                            }
                        }, !0);
                    },
                    delorder: function(a) {
                        var e = this;
                        console.log(a.currentTarget.dataset.id, "--22--11--"), t.showModal({
                            title: "提示",
                            content: "确认执行此操作吗？",
                            success: function(n) {
                                n.confirm && o.globalData.util.request({
                                    url: "Dmhmarketuser/delorder",
                                    data: {
                                        m_id: a.currentTarget.dataset.id,
                                        s_id: t.getStorageSync("schoolId")
                                    },
                                    success: function(t) {
                                        e.setData({
                                            page: 1,
                                            loadmore: !0
                                        }), e.dataList = [], e.getMylist();
                                    }
                                }, !0);
                            }
                        });
                    },
                    toDetail: function(a) {
                        console.log(a, "---22"), t.navigateTo({
                            url: "/gc_school/pages/secondhand/detail?id=" + a.currentTarget.dataset.id
                        });
                    },
                    changeTab: function(t) {
                        this.setData({
                            tabid: t.currentTarget.dataset.id
                        }), this.getlist();
                    }
                }
            };
            a.default = r;
        }).call(this, e("543d").default);
    },
    "1a06": function(t, a, e) {
        e.r(a);
        var n = e("5ad8"), o = e("8b2f");
        for (var r in o) "default" !== r && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(r);
        e("cf65");
        var i = e("f0c5"), s = Object(i.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = s.exports;
    },
    3394: function(t, a, e) {},
    "5ad8": function(t, a, e) {
        e.d(a, "b", function() {
            return o;
        }), e.d(a, "c", function() {
            return r;
        }), e.d(a, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "8b2f": function(t, a, e) {
        e.r(a);
        var n = e("17c5"), o = e.n(n);
        for (var r in n) "default" !== r && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(r);
        a.default = o.a;
    },
    cf65: function(t, a, e) {
        var n = e("3394");
        e.n(n).a;
    },
    e846: function(t, a, e) {
        (function(t) {
            e("a8cf"), n(e("66fd"));
            var a = n(e("1a06"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(a.default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "e846", "common/runtime", "common/vendor" ] ] ]);