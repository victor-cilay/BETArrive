(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/distribution/team" ], {
    "145f": function(t, n, e) {
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
                        is_loadmore: !0,
                        dataList: []
                    };
                },
                onLoad: function() {
                    this.getLst();
                },
                onReachBottom: function() {
                    this.is_loadmore ? (this.page++, this.getLst()) : t.showToast({
                        title: "没有更多数据~",
                        icon: "none"
                    });
                },
                methods: {
                    getLst: function() {
                        var t = this;
                        o.globalData.util.request({
                            url: "Distribution/myteam",
                            data: {
                                limit: 10,
                                page: t.page
                            },
                            success: function(n) {
                                n.data.data.length < 10 && (t.is_loadmore = !1), t.dataList = 1 == t.page ? n.data.data : [].concat(e(t.dataList), e(n.data.data));
                            }
                        }, !0);
                    }
                }
            };
            n.default = r;
        }).call(this, e("543d").default);
    },
    "9e72": function(t, n, e) {},
    a2fd: function(t, n, e) {
        var a = e("9e72");
        e.n(a).a;
    },
    ca9f: function(t, n, e) {
        (function(t) {
            e("a8cf"), a(e("66fd"));
            var n = a(e("ef58"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    d93b: function(t, n, e) {
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
            var t = this, n = (t.$createElement, t._self._c, t.__map(t.dataList, function(n, e) {
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
    da54: function(t, n, e) {
        e.r(n);
        var a = e("145f"), o = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = o.a;
    },
    ef58: function(t, n, e) {
        e.r(n);
        var a = e("d93b"), o = e("da54");
        for (var r in o) "default" !== r && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        e("a2fd");
        var i = e("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    }
}, [ [ "ca9f", "common/runtime", "common/vendor" ] ] ]);