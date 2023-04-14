(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/article/list" ], {
    1321: function(t, a, n) {
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = getApp(), e = {
                data: function() {
                    return {
                        cid: 1,
                        dataList: [],
                        class_name: "",
                        class_id: "",
                        is_loadmore: !0,
                        page: 1,
                        authData: 0
                    };
                },
                onLoad: function(a) {
                    this.class_name = a.class_name, this.class_id = a.class_id, t.getStorageSync("schoolId") || a.s_id && t.setStorageSync("schoolId", a.s_id), 
                    this.getLst(a.class_id);
                },
                onReachBottom: function() {
                    this.is_loadmore ? (this.setData({
                        page: this.page + 1
                    }), this.getLst(this.class_id)) : t.showToast({
                        title: "没有更多数据了~",
                        icon: "none"
                    });
                },
                onPullDownRefresh: function() {
                    this.pullDown.start(), this.getLst(this.class_id);
                },
                methods: {
                    goAuth: function() {
                        t.redirectTo({
                            url: "/gc_school/pages/user/student"
                        });
                    },
                    getLst: function(a) {
                        var e = this;
                        n.globalData.util.request({
                            url: "ZhArticles/index",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                class_id: a,
                                type: e.type,
                                page: e.page,
                                limit: 10
                            },
                            header: {
                                Authorization: t.getStorageSync("token")
                            },
                            success: function(t) {
                                console.log(t.data.data.list), e.pullDown.end(), t.data.data.list.length < 10 && e.setData({
                                    is_loadmore: !1
                                });
                                for (var a = 0; a < t.data.data.list.length; a++) e.dataList.push(t.data.data.list[a]), 
                                e.setData({
                                    dataList: e.dataList
                                });
                            }
                        });
                    }
                }
            };
            a.default = e;
        }).call(this, n("543d").default);
    },
    "18f6": function(t, a, n) {},
    "2dd5": function(t, a, n) {
        n.r(a);
        var e = n("c46d"), o = n("8567");
        for (var s in o) "default" !== s && function(t) {
            n.d(a, t, function() {
                return o[t];
            });
        }(s);
        n("881d");
        var i = n("f0c5"), c = Object(i.a)(o.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        a.default = c.exports;
    },
    8567: function(t, a, n) {
        n.r(a);
        var e = n("1321"), o = n.n(e);
        for (var s in e) "default" !== s && function(t) {
            n.d(a, t, function() {
                return e[t];
            });
        }(s);
        a.default = o.a;
    },
    "881d": function(t, a, n) {
        var e = n("18f6");
        n.n(e).a;
    },
    c46d: function(t, a, n) {
        n.d(a, "b", function() {
            return o;
        }), n.d(a, "c", function() {
            return s;
        }), n.d(a, "a", function() {
            return e;
        });
        var e = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, s = [];
    },
    d8cb: function(t, a, n) {
        (function(t) {
            n("a8cf"), e(n("66fd"));
            var a = e(n("2dd5"));
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "d8cb", "common/runtime", "common/vendor" ] ] ]);