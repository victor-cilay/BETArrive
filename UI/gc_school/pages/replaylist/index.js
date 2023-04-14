(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/replaylist/index" ], {
    "24d1": function(t, n, e) {
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
                        loadmore: !0,
                        list: ""
                    };
                },
                onLoad: function(t) {
                    this.getData();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    this.setData({
                        page: this.page + 1
                    }), this.loadmore && this.getData();
                },
                onShareAppMessage: function() {},
                methods: {
                    getData: function() {
                        var n = this;
                        o.globalData.util.request({
                            url: "UserWithdraw/index",
                            data: {
                                limit: 20,
                                page: this.page,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                if (t.data.data.list.length < 20 && n.setData({
                                    loadmore: !1
                                }), 1 == this.page) n.setData({
                                    list: t.data.data.list
                                }); else for (var a = 0; a < t.data.data.list.length; a++) n.setData({
                                    list: [].concat(e(n.list), [ t.data.data.list[a] ])
                                });
                            }
                        }, !0);
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
    "331f": function(t, n, e) {},
    "5ed3": function(t, n, e) {
        var a = e("331f");
        e.n(a).a;
    },
    "6cf2": function(t, n, e) {
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
            var t = this, n = (t.$createElement, t._self._c, t.__map(t.list, function(n, e) {
                return {
                    $orig: t.__get_orig(n),
                    f0: t._f("formatDate")(n.create_time)
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, r = [];
    },
    "6e98": function(t, n, e) {
        e.r(n);
        var a = e("6cf2"), o = e("bf60");
        for (var r in o) "default" !== r && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        e("5ed3");
        var i = e("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    b0cf: function(t, n, e) {
        (function(t) {
            e("a8cf"), a(e("66fd"));
            var n = a(e("6e98"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    bf60: function(t, n, e) {
        e.r(n);
        var a = e("24d1"), o = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = o.a;
    }
}, [ [ "b0cf", "common/runtime", "common/vendor" ] ] ]);