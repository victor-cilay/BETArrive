(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/search/index" ], {
    "17cd": function(t, n, a) {
        a.r(n);
        var o = a("9866"), e = a.n(o);
        for (var c in o) "default" !== c && function(t) {
            a.d(n, t, function() {
                return o[t];
            });
        }(c);
        n.default = e.a;
    },
    4080: function(t, n, a) {
        a.d(n, "b", function() {
            return e;
        }), a.d(n, "c", function() {
            return c;
        }), a.d(n, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, e = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    8249: function(t, n, a) {
        (function(t) {
            a("a8cf"), o(a("66fd"));
            var n = o(a("f88f"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(n.default);
        }).call(this, a("543d").createPage);
    },
    9866: function(t, n, a) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = getApp(), o = {
                data: function() {
                    return {
                        indicatorDots: !0,
                        common: "通用",
                        currentIndex: 0,
                        goodsList: [],
                        kwd: "",
                        showList: !1
                    };
                },
                onLoad: function() {},
                methods: {
                    search: function() {
                        var n = this;
                        a.globalData.util.request({
                            url: "entry/wxapp/secondSearch",
                            data: {
                                sid: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log(t.data.data), n.setData({
                                    goodsList: t.data.data
                                });
                            }
                        });
                    },
                    kwdinput: function(t) {
                        console.log(t.detail.value), this.setData({
                            kwd: t.detail.value
                        });
                    },
                    searchs: function() {
                        var n = this;
                        "" != n.kwd ? a.globalData.util.request({
                            url: "entry/wxapp/secondSearch",
                            data: {
                                keywords: n.kwd,
                                sid: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log(t.data.data), n.setData({
                                    goodsList: t.data.data
                                });
                            }
                        }) : t.showToast({
                            title: "请输入要搜索的内容",
                            icon: "none"
                        });
                    },
                    toDetail: function(n) {
                        t.navigateTo({
                            url: "/gc_school/pages/seconddetail/index?id=" + n.currentTarget.dataset.id
                        });
                    },
                    showlist: function() {
                        this.showList ? this.setData({
                            showList: !1
                        }) : this.setData({
                            showList: !0
                        });
                    }
                }
            };
            n.default = o;
        }).call(this, a("543d").default);
    },
    "9aa0": function(t, n, a) {
        var o = a("b387");
        a.n(o).a;
    },
    b387: function(t, n, a) {},
    f88f: function(t, n, a) {
        a.r(n);
        var o = a("4080"), e = a("17cd");
        for (var c in e) "default" !== c && function(t) {
            a.d(n, t, function() {
                return e[t];
            });
        }(c);
        a("9aa0");
        var u = a("f0c5"), s = Object(u.a)(e.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = s.exports;
    }
}, [ [ "8249", "common/runtime", "common/vendor" ] ] ]);