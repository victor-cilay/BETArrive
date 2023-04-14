(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/user/fans" ], {
    "2b6f": function(t, a, n) {},
    "303e": function(t, a, n) {
        n.r(a);
        var o = n("f9b5"), e = n.n(o);
        for (var u in o) "default" !== u && function(t) {
            n.d(a, t, function() {
                return o[t];
            });
        }(u);
        a.default = e.a;
    },
    "36ac": function(t, a, n) {
        n.d(a, "b", function() {
            return e;
        }), n.d(a, "c", function() {
            return u;
        }), n.d(a, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, e = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    "669a": function(t, a, n) {
        var o = n("2b6f");
        n.n(o).a;
    },
    cdb0: function(t, a, n) {
        (function(t) {
            n("a8cf"), o(n("66fd"));
            var a = o(n("e9ac"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default);
        }).call(this, n("543d").createPage);
    },
    e9ac: function(t, a, n) {
        n.r(a);
        var o = n("36ac"), e = n("303e");
        for (var u in e) "default" !== u && function(t) {
            n.d(a, t, function() {
                return e[t];
            });
        }(u);
        n("669a");
        var c = n("f0c5"), s = Object(c.a)(e.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        a.default = s.exports;
    },
    f9b5: function(t, a, n) {
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = getApp(), o = {
                data: function() {
                    return {
                        dataList: []
                    };
                },
                onLoad: function() {
                    this.getLst();
                },
                methods: {
                    follow: function(a) {
                        var o = this;
                        n.globalData.util.request({
                            url: "UserFollow/follow",
                            data: {
                                u_id: a
                            },
                            success: function(a) {
                                200 == a.data.status ? (t.showToast({
                                    title: a.data.msg
                                }), o.getLst()) : t.showToast({
                                    title: a.data.msg,
                                    icon: "none"
                                });
                            }
                        }, !0);
                    },
                    cancel: function(a) {
                        var o = this;
                        t.showModal({
                            title: "温馨提示",
                            content: "确认取消关注该用户吗？",
                            success: function(e) {
                                e.confirm && n.globalData.util.request({
                                    url: "UserFollow/follow",
                                    data: {
                                        u_id: a
                                    },
                                    success: function(a) {
                                        200 == a.data.status ? (t.showToast({
                                            title: a.data.msg
                                        }), o.getLst()) : t.showToast({
                                            title: a.data.msg,
                                            icon: "none"
                                        });
                                    }
                                }, !0);
                            }
                        });
                    },
                    getLst: function() {
                        var t = this;
                        n.globalData.util.request({
                            url: "UserFollow/myFans",
                            data: {},
                            success: function(a) {
                                console.log(a.data.data), t.dataList = a.data.data;
                            }
                        }, !0);
                    }
                }
            };
            a.default = o;
        }).call(this, n("543d").default);
    }
}, [ [ "cdb0", "common/runtime", "common/vendor" ] ] ]);