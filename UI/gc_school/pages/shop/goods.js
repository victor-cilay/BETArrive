(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/shop/goods" ], {
    "38cc": function(t, o, n) {
        n.d(o, "b", function() {
            return a;
        }), n.d(o, "c", function() {
            return r;
        }), n.d(o, "a", function() {
            return e;
        });
        var e = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "59cb": function(t, o, n) {
        n.r(o);
        var e = n("5df0"), a = n.n(e);
        for (var r in e) "default" !== r && function(t) {
            n.d(o, t, function() {
                return e[t];
            });
        }(r);
        o.default = a.a;
    },
    "5df0": function(t, o, n) {
        (function(t) {
            function n(t) {
                return function(t) {
                    if (Array.isArray(t)) return e(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, o) {
                    if (t) {
                        if ("string" == typeof t) return e(t, o);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? e(t, o) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function e(t, o) {
                (null == o || o > t.length) && (o = t.length);
                for (var n = 0, e = new Array(o); n < o; n++) e[n] = t[n];
                return e;
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var a = getApp(), r = {
                data: function() {
                    return {
                        tab_index: 1,
                        page: 1,
                        is_loadmore: [ !0, !0, !0 ],
                        goods: []
                    };
                },
                onLoad: function(t) {
                    this.getGoods();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    if (this.is_loadmore[this.tab_index]) {
                        var t = this.page + 1;
                        this.setData({
                            page: t
                        }), console.log("页码", this.page), this.getGoods();
                    }
                },
                methods: {
                    getGoods: function() {
                        var o = this;
                        a.globalData.util.request({
                            url: "ZhGoods/index",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                page: this.page,
                                status: this.tab_index
                            },
                            success: function(t) {
                                if (console.log(t.data.data), console.log("长度", t.data.data.list.length), t.data.data.list.length < 5) {
                                    var e = o.is_loadmore;
                                    e[o.tab_index] = !1, console.log("loadmore", e), o.setData({
                                        is_loadmore: e
                                    });
                                }
                                var a = [].concat(n(o.goods), n(t.data.data.list));
                                o.setData({
                                    goods: a
                                });
                            }
                        }, !0);
                    },
                    changeTab: function(t) {
                        console.log(t.currentTarget.dataset), this.setData({
                            tab_index: t.currentTarget.dataset.index,
                            page: 1,
                            goods: [],
                            is_loadmore: [ !0, !0, !0 ]
                        }), this.getGoods();
                    },
                    jump: function(o) {
                        console.log(o.currentTarget.dataset.url), t.navigateTo({
                            url: o.currentTarget.dataset.url
                        });
                    },
                    changeStatus: function(o) {
                        var n = this;
                        console.log(o.currentTarget.dataset), t.showModal({
                            title: "温馨提示",
                            content: "确定执行该操作吗？",
                            success: function(e) {
                                e.confirm ? (a.globalData.util.request({
                                    url: "ZhGoods/goodShelves",
                                    data: {
                                        id: o.currentTarget.dataset.id,
                                        status: o.currentTarget.dataset.status,
                                        s_id: t.getStorageSync("schoolId")
                                    },
                                    success: function(t) {
                                        n.setData({
                                            page: 1,
                                            goods: [],
                                            is_loadmore: [ !0, !0, !0 ]
                                        }), n.getGoods();
                                    }
                                }, !0), console.log("用户点了确认")) : console.log("用户点了取消");
                            }
                        });
                    }
                }
            };
            o.default = r;
        }).call(this, n("543d").default);
    },
    6733: function(t, o, n) {
        var e = n("b441");
        n.n(e).a;
    },
    "7d6a": function(t, o, n) {
        n.r(o);
        var e = n("38cc"), a = n("59cb");
        for (var r in a) "default" !== r && function(t) {
            n.d(o, t, function() {
                return a[t];
            });
        }(r);
        n("6733");
        var c = n("f0c5"), i = Object(c.a)(a.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        o.default = i.exports;
    },
    b441: function(t, o, n) {},
    be90: function(t, o, n) {
        (function(t) {
            n("a8cf"), e(n("66fd"));
            var o = e(n("7d6a"));
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "be90", "common/runtime", "common/vendor" ] ] ]);