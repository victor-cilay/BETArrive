(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/user/reward" ], {
    "0fa4": function(t, n, e) {
        (function(t) {
            e("a8cf"), a(e("66fd"));
            var n = a(e("b469"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    3121: function(t, n, e) {
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
    a2a9: function(t, n, e) {
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
                    link: function(n) {
                        t.navigateTo({
                            url: "/gc_school/pages/article/detail?id=" + n
                        });
                    },
                    getLst: function() {
                        var t = this;
                        o.globalData.util.request({
                            url: "WechatUser/rewardLst",
                            data: {
                                page: t.page
                            },
                            success: function(n) {
                                n.data.data.length < 10 && (t.is_loadmore = !1), t.dataList = 1 == t.page ? n.data.data : [].concat(e(t.dataList), e(n.data.data)), 
                                console.log(t.dataList);
                            }
                        }, !0);
                    }
                }
            };
            n.default = r;
        }).call(this, e("543d").default);
    },
    b469: function(t, n, e) {
        e.r(n);
        var a = e("3121"), o = e("ba7b");
        for (var r in o) "default" !== r && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        e("f466");
        var i = e("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    ba7b: function(t, n, e) {
        e.r(n);
        var a = e("a2a9"), o = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = o.a;
    },
    c515: function(t, n, e) {},
    f466: function(t, n, e) {
        var a = e("c515");
        e.n(a).a;
    }
}, [ [ "0fa4", "common/runtime", "common/vendor" ] ] ]);