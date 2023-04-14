(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/rank/index" ], {
    "14b1": function(t, n, e) {
        var a = e("acec");
        e.n(a).a;
    },
    "79ad": function(t, n, e) {
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
    "8d99": function(t, n, e) {
        e.r(n);
        var a = e("79ad"), o = e("c373");
        for (var r in o) "default" !== r && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        e("14b1");
        var c = e("f0c5"), i = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = i.exports;
    },
    9247: function(t, n, e) {
        (function(t) {
            e("a8cf"), a(e("66fd"));
            var n = a(e("8d99"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    a05c: function(t, n, e) {
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
                        page: 1,
                        showNodata: !1,
                        erranderId: 2,
                        address: {
                            available: []
                        },
                        my: [],
                        list: ""
                    };
                },
                onLoad: function(n) {
                    console.log(t.getStorageSync("openid")), this.getData();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    this.setData({
                        page: this.page + 1
                    }), this.getData();
                },
                onShareAppMessage: function() {},
                methods: {
                    getData: function() {
                        var n = this;
                        o.globalData.util.request({
                            url: "ZhRankingList/index",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            header: {
                                Authorization: t.getStorageSync("token")
                            },
                            method: "GET",
                            success: function(t) {
                                if (console.log("1111", t.data.data.my), console.log("页码", n.page), 1 == n.page) n.setData({
                                    list: t.data.data.list,
                                    my: t.data.data.my
                                }); else for (var a = 0; a < t.data.data.list.length; a++) n.setData({
                                    list: [].concat(e(n.list), [ t.data.data.list[a] ])
                                });
                                console.log("我的信息", n.my);
                            }
                        });
                    },
                    handleGet: function(n) {
                        var e = this;
                        o.globalData.util.request({
                            url: "entry/wxapp/CouponGet",
                            data: {
                                co_id: n.currentTarget.dataset.id,
                                openid: t.getStorageSync("openid"),
                                lon: t.getStorageSync("city").location.lng,
                                lat: t.getStorageSync("city").location.lat
                            },
                            success: function(t) {
                                e.getData();
                            }
                        });
                    },
                    handleUser: function(n) {
                        var e = getCurrentPages();
                        "gc_school/pages/public/index" == e[e.length - 2].route ? t.navigateBack({
                            cupon: n.currentTarget.dataset.id
                        }) : t.navigateBack();
                    }
                }
            };
            n.default = r;
        }).call(this, e("543d").default);
    },
    acec: function(t, n, e) {},
    c373: function(t, n, e) {
        e.r(n);
        var a = e("a05c"), o = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = o.a;
    }
}, [ [ "9247", "common/runtime", "common/vendor" ] ] ]);