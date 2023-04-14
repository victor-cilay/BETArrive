(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/grab/index" ], {
    "16e8": function(t, a, e) {},
    "520e": function(t, a, e) {
        (function(t) {
            e("a8cf"), n(e("66fd"));
            var a = n(e("abce"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(a.default);
        }).call(this, e("543d").createPage);
    },
    "65aa": function(t, a, e) {
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("a34a"));
            function r(t, a, e, n, r, o, i) {
                try {
                    var s = t[o](i), u = s.value;
                } catch (t) {
                    return void e(t);
                }
                s.done ? a(u) : Promise.resolve(u).then(n, r);
            }
            var o = getApp(), i = {
                data: function() {
                    return {
                        TabCur: 0,
                        scrollLeft: 0,
                        page: 1,
                        type: 8,
                        list: [],
                        hasMoreData: !1,
                        getUseInfo: ""
                    };
                },
                onLoad: function(t) {},
                onReady: function() {
                    o.globalData.util.footer(this);
                },
                onShow: function() {
                    this.list = [], this.page = 1, this.getData();
                },
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {
                    this.pullDown.start(), this.list = [], this.page = 1, this.getData();
                },
                onReachBottom: function() {
                    this.hasMoreData ? this.getData() : t.showToast({
                        title: "没有更多数据",
                        icon: "none"
                    });
                },
                onShareAppMessage: function() {},
                methods: {
                    detail: function(a) {
                        t.navigateTo({
                            url: "/gc_school/pages/order/detail?id=" + this.list[a.currentTarget.dataset.index].id
                        });
                    },
                    getData: function() {
                        var a = this;
                        o.globalData.util.request({
                            url: "order/runOrderLst",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                page: this.page,
                                limit: 10
                            },
                            method: "GET",
                            success: function(t) {
                                if (a.pullDown.end(), t.data.data.list.length < 10) {
                                    if (t.data.data.list.length > 0) {
                                        for (var e = 0; e < t.data.data.list.length; e++) {
                                            var n = t.data.data.list[e].remarks;
                                            t.data.data.list[e].remarks.replace(/[0-9]*(\.[0-9]*)?/g, function(t) {
                                                var a = t;
                                                if (Number(t)) {
                                                    if (t.toString().length > 3) var e = t.substr(0, 2) + "****" + t.substr(6); else e = t.substr(0, 1) + "**";
                                                    n = n.replace(a, e), console.log(n);
                                                }
                                            }), t.data.data.list[e].remarks = n;
                                        }
                                        a.setData({
                                            list: a.list.concat(t.data.data.list),
                                            hasMoreData: !1
                                        });
                                    }
                                } else {
                                    for (e = 0; e < t.data.data.list.length; e++) n = t.data.data.list[e].remarks, t.data.data.list[e].remarks.replace(/[0-9]*(\.[0-9]*)?/g, function(t) {
                                        var a = t;
                                        if (Number(t)) {
                                            if (t.toString().length > 3) var e = t.substr(0, 2) + "****" + t.substr(6); else e = t.substr(0, 1) + "**";
                                            n = n.replace(a, e), console.log(n);
                                        }
                                    }), t.data.data.list[e].remarks = n;
                                    a.setData({
                                        list: a.list.concat(t.data.data.list),
                                        hasMoreData: !0,
                                        page: a.page + 1
                                    });
                                }
                            }
                        }, !0);
                    },
                    handleQd: function(a) {
                        var e = this;
                        return function(t) {
                            return function() {
                                var a = this, e = arguments;
                                return new Promise(function(n, o) {
                                    var i = t.apply(a, e);
                                    function s(t) {
                                        r(i, n, o, s, u, "next", t);
                                    }
                                    function u(t) {
                                        r(i, n, o, s, u, "throw", t);
                                    }
                                    s(void 0);
                                });
                            };
                        }(n.default.mark(function r() {
                            return n.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return console.log(a.currentTarget.dataset.id), n.next = 3, e.dingyueChat();

                                  case 3:
                                    o.globalData.util.request({
                                        url: "Order/grab",
                                        data: {
                                            o_id: a.currentTarget.dataset.id
                                        },
                                        success: function(a) {
                                            t.showToast({
                                                title: "抢单成功",
                                                duration: 2e3,
                                                success: function() {
                                                    setTimeout(function() {
                                                        t.navigateTo({
                                                            url: "/gc_school/pages/mygrab/index"
                                                        });
                                                    }, 2e3);
                                                }
                                            });
                                        }
                                    }, !0);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, r);
                        }))();
                    },
                    tabSelect: function(t) {
                        this.setData({
                            TabCur: t.currentTarget.dataset.id,
                            scrollLeft: 60 * t.currentTarget.dataset.id,
                            type: t.currentTarget.dataset.index
                        }), this.setData({
                            page: 1
                        }), this.getData();
                    },
                    getUsetInfo: function() {
                        console.log("占位：函数 getUsetInfo 未声明");
                    }
                }
            };
            a.default = i;
        }).call(this, e("543d").default);
    },
    "70e3": function(t, a, e) {
        e.d(a, "b", function() {
            return r;
        }), e.d(a, "c", function() {
            return o;
        }), e.d(a, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "765d": function(t, a, e) {
        var n = e("16e8");
        e.n(n).a;
    },
    abce: function(t, a, e) {
        e.r(a);
        var n = e("70e3"), r = e("cb0e");
        for (var o in r) "default" !== o && function(t) {
            e.d(a, t, function() {
                return r[t];
            });
        }(o);
        e("765d");
        var i = e("f0c5"), s = Object(i.a)(r.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = s.exports;
    },
    cb0e: function(t, a, e) {
        e.r(a);
        var n = e("65aa"), r = e.n(n);
        for (var o in n) "default" !== o && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(o);
        a.default = r.a;
    }
}, [ [ "520e", "common/runtime", "common/vendor" ] ] ]);