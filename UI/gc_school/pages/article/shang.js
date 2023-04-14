(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/article/shang" ], {
    "1c11": function(t, n, e) {
        e.r(n);
        var a = e("5ed5"), u = e.n(a);
        for (var c in a) "default" !== c && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        n.default = u.a;
    },
    "1d15": function(t, n, e) {
        e.d(n, "b", function() {
            return u;
        }), e.d(n, "c", function() {
            return c;
        }), e.d(n, "a", function() {
            return a;
        });
        var a = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, u = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    "325f": function(t, n, e) {
        e.r(n);
        var a = e("1d15"), u = e("1c11");
        for (var c in u) "default" !== c && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(c);
        e("7cb5");
        var o = e("f0c5"), i = Object(o.a)(u.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = i.exports;
    },
    "5ed5": function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = getApp(), a = {
                data: function() {
                    return {
                        shang: [],
                        detail: {}
                    };
                },
                onLoad: function(t) {
                    this.getDetail(t.art_id);
                },
                methods: {
                    getDetail: function(n) {
                        var a = this;
                        e.globalData.util.request({
                            url: "ZhArticles/view",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                article_id: n,
                                type: 1
                            },
                            success: function(t) {
                                console.log(t.data.data), a.setData({
                                    detail: t.data.data
                                });
                            }
                        }, !0);
                    }
                }
            };
            n.default = a;
        }).call(this, e("543d").default);
    },
    "7cb5": function(t, n, e) {
        var a = e("ebbd");
        e.n(a).a;
    },
    "92f2": function(t, n, e) {
        (function(t) {
            e("a8cf"), a(e("66fd"));
            var n = a(e("325f"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    ebbd: function(t, n, e) {}
}, [ [ "92f2", "common/runtime", "common/vendor" ] ] ]);