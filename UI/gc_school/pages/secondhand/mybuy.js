(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/secondhand/mybuy" ], {
    "190c": function(t, a, e) {
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
            var o = getApp(), s = {
                data: function() {
                    return {
                        tabid: 0,
                        states: 0,
                        dataList: [],
                        page: 1,
                        loadmore: !0,
                        ifName: !1,
                        id: "",
                        reason: "",
                        good: {
                            id: "",
                            status: "",
                            img: "",
                            name: "",
                            price: ""
                        },
                        onshows: 0
                    };
                },
                onLoad: function(t) {
                    this.dataList = [], this.page = 1, this.getMylist();
                },
                onReady: function() {},
                onShow: function() {
                    1 == this.onshows ? (this.status = 0, this.states = 0, this.dataList = [], this.page = 1, 
                    this.getMylist()) : this.onshows = 1;
                },
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    this.setData({
                        page: this.page + 1
                    }), this.loadmore && (0 == this.states ? this.getMylist() : this.getMylists());
                },
                methods: {
                    cancel: function() {
                        this.setData({
                            ifName: !1,
                            reason: ""
                        });
                    },
                    tabs: function(t) {
                        this.states = t, 0 == t ? (this.dataList = [], this.page = 1, this.getMylist()) : (this.dataList = [], 
                        this.page = 1, this.getMylists());
                    },
                    agree: function(a) {
                        console.log(a.currentTarget.dataset.id), console.log(a.currentTarget);
                        var e = this;
                        o.globalData.util.request({
                            url: "Dmhmarketorder/secondRefundOper",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                oid: a.currentTarget.dataset.id,
                                type: a.currentTarget.dataset.type
                            },
                            success: function(t) {
                                e.setData({
                                    page: 1,
                                    loadmore: !0
                                }), e.dataList = [], e.getMylists();
                            }
                        }, !0);
                    },
                    refund: function(t) {
                        console.log(t.currentTarget.dataset.id), this.setData({
                            ifName: !0,
                            id: t.currentTarget.dataset.id
                        });
                    },
                    getMylist: function() {
                        var a = this;
                        o.globalData.util.request({
                            url: "Dmhmarketorder/index",
                            data: {
                                page: a.page,
                                type: 2,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log(t.data.data.list, "---222---"), t.data.data.list.length < 10 && a.setData({
                                    loadmore: !1
                                });
                                for (var n = 0; n < t.data.data.list.length; n++) a.setData({
                                    dataList: [].concat(e(a.dataList), [ t.data.data.list[n] ])
                                });
                                console.log(a.dataList, "---111---");
                            }
                        }, !0);
                    },
                    getMylists: function() {
                        var a = this;
                        o.globalData.util.request({
                            url: "Dmhmarketorder/index",
                            data: {
                                page: a.page,
                                type: 1,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                if (console.log(t.data.data.list, "---"), t.data.data.list.length < 10 && a.setData({
                                    loadmore: !1
                                }), 1 == this.page) a.setData({
                                    dataList: t.data.data.list
                                }); else for (var n = 0; n < t.data.data.list.length; n++) a.setData({
                                    dataList: [].concat(e(a.dataList), [ t.data.data.list[n] ])
                                });
                            }
                        }, !0);
                    },
                    confirm: function(a) {
                        var e = this;
                        console.log(a.currentTarget.dataset.id, "--1--1--"), a.currentTarget.dataset.id && t.showModal({
                            title: "提示",
                            content: "确认收货吗？",
                            success: function(n) {
                                n.confirm && o.globalData.util.request({
                                    url: "Dmhmarketorder/confirm",
                                    data: {
                                        oid: a.currentTarget.dataset.id,
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
                    setValue: function(t) {
                        this.setData({
                            reason: t.detail.value.replace(/\s+/g, "")
                        });
                    },
                    confirmRefund: function() {
                        var a = this;
                        "" != this.reason ? o.globalData.util.request({
                            url: "Dmhmarketorder/secondRefund",
                            data: {
                                oid: a.id,
                                s_id: t.getStorageSync("schoolId"),
                                reason: a.reason
                            },
                            success: function(t) {
                                a.setData({
                                    page: 1,
                                    loadmore: !0,
                                    ifName: !1,
                                    reason: ""
                                }), a.dataList = [], a.getMylist();
                            }
                        }, !0) : o.globalData.util.message("请填写理由", "", "error");
                    },
                    toDetail: function(a) {
                        t.navigateTo({
                            url: "/gc_school/pages/secondhand/orderdetail?id=" + a.currentTarget.dataset.id
                        });
                    },
                    changeTab: function(t) {
                        this.setData({
                            tabid: t.currentTarget.dataset.id
                        }), this.getlist();
                    }
                }
            };
            a.default = s;
        }).call(this, e("543d").default);
    },
    "257e": function(t, a, e) {
        e.d(a, "b", function() {
            return o;
        }), e.d(a, "c", function() {
            return s;
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
        }, s = [];
    },
    "2cc7": function(t, a, e) {
        var n = e("9b20");
        e.n(n).a;
    },
    "60fa": function(t, a, e) {
        e.r(a);
        var n = e("257e"), o = e("7530");
        for (var s in o) "default" !== s && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(s);
        e("2cc7");
        var i = e("f0c5"), r = Object(i.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = r.exports;
    },
    7530: function(t, a, e) {
        e.r(a);
        var n = e("190c"), o = e.n(n);
        for (var s in n) "default" !== s && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(s);
        a.default = o.a;
    },
    "9b20": function(t, a, e) {},
    d410: function(t, a, e) {
        (function(t) {
            e("a8cf"), n(e("66fd"));
            var a = n(e("60fa"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(a.default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "d410", "common/runtime", "common/vendor" ] ] ]);