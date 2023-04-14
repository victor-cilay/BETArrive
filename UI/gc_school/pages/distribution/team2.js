(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/distribution/team2" ], {
    "0322": function(t, n, a) {
        (function(t) {
            a("a8cf"), e(a("66fd"));
            var n = e(a("6604"));
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(n.default);
        }).call(this, a("543d").createPage);
    },
    4213: function(t, n, a) {
        a.r(n);
        var e = a("5db1"), o = a.n(e);
        for (var r in e) "default" !== r && function(t) {
            a.d(n, t, function() {
                return e[t];
            });
        }(r);
        n.default = o.a;
    },
    "5db1": function(t, n, a) {
        (function(t) {
            function a(t) {
                return function(t) {
                    if (Array.isArray(t)) return e(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return e(t, n);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? e(t, n) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function e(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var a = 0, e = new Array(n); a < n; a++) e[a] = t[a];
                return e;
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = getApp(), r = {
                data: function() {
                    return {
                        page: 1,
                        is_loadmore: !0,
                        dataList: [],
                        data: {}
                    };
                },
                onLoad: function(t) {
                    console.log(t), this.getLst(t);
                },
                onReachBottom: function() {
                    this.is_loadmore ? (this.page++, this.getLst()) : t.showToast({
                        title: "没有更多数据~",
                        icon: "none"
                    });
                },
                methods: {
                    getLst: function(t) {
                        var n = this;
                        o.globalData.util.request({
                            url: "Distribution/childteam",
                            data: {
                                limit: 10,
                                page: n.page,
                                u_id: t.uid
                            },
                            success: function(t) {
                                n.data = t.data.data, t.data.data.list.length < 10 && (n.is_loadmore = !1), n.dataList = 1 == n.page ? t.data.data.list : [].concat(a(n.dataList), a(t.data.data.list));
                            }
                        }, !0);
                    }
                }
            };
            n.default = r;
        }).call(this, a("543d").default);
    },
    6604: function(t, n, a) {
        a.r(n);
        var e = a("ddaf"), o = a("4213");
        for (var r in o) "default" !== r && function(t) {
            a.d(n, t, function() {
                return o[t];
            });
        }(r);
        a("7e65");
        var i = a("f0c5"), u = Object(i.a)(o.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        n.default = u.exports;
    },
    "7e65": function(t, n, a) {
        var e = a("f5fb");
        a.n(e).a;
    },
    ddaf: function(t, n, a) {
        a.d(n, "b", function() {
            return o;
        }), a.d(n, "c", function() {
            return r;
        }), a.d(n, "a", function() {
            return e;
        });
        var e = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, o = function() {
            var t = this, n = (t.$createElement, t._self._c, t.__map(t.dataList, function(n, a) {
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
    f5fb: function(t, n, a) {}
}, [ [ "0322", "common/runtime", "common/vendor" ] ] ]);