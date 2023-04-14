(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/user/follow" ], {
    "3c36": function(t, n, o) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = getApp(), a = {
                data: function() {
                    return {
                        dataList: []
                    };
                },
                onLoad: function() {
                    this.getLst();
                },
                methods: {
                    cancel: function(n) {
                        var a = this;
                        t.showModal({
                            title: "温馨提示",
                            content: "确认取消关注该用户吗？",
                            success: function(e) {
                                e.confirm && o.globalData.util.request({
                                    url: "UserFollow/follow",
                                    data: {
                                        u_id: n
                                    },
                                    success: function(n) {
                                        200 == n.data.status ? (t.showToast({
                                            title: n.data.msg
                                        }), a.getLst()) : t.showToast({
                                            title: n.data.msg,
                                            icon: "none"
                                        });
                                    }
                                }, !0);
                            }
                        });
                    },
                    link: function(n) {
                        t.navigateTo({
                            url: n
                        });
                    },
                    getLst: function() {
                        var t = this;
                        o.globalData.util.request({
                            url: "UserFollow/myFollow",
                            data: {},
                            success: function(n) {
                                console.log(n.data.data), t.dataList = n.data.data;
                            }
                        }, !0);
                    }
                }
            };
            n.default = a;
        }).call(this, o("543d").default);
    },
    "4e39": function(t, n, o) {
        o.r(n);
        var a = o("86f0"), e = o("fbce");
        for (var u in e) "default" !== u && function(t) {
            o.d(n, t, function() {
                return e[t];
            });
        }(u);
        o("842f");
        var c = o("f0c5"), l = Object(c.a)(e.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = l.exports;
    },
    "5e99": function(t, n, o) {},
    "842f": function(t, n, o) {
        var a = o("5e99");
        o.n(a).a;
    },
    "86f0": function(t, n, o) {
        o.d(n, "b", function() {
            return e;
        }), o.d(n, "c", function() {
            return u;
        }), o.d(n, "a", function() {
            return a;
        });
        var a = {
            cuCustom: function() {
                return o.e("colorui/components/cu-custom").then(o.bind(null, "24dd"));
            }
        }, e = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    affd: function(t, n, o) {
        (function(t) {
            o("a8cf"), a(o("66fd"));
            var n = a(o("4e39"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, t(n.default);
        }).call(this, o("543d").createPage);
    },
    fbce: function(t, n, o) {
        o.r(n);
        var a = o("3c36"), e = o.n(a);
        for (var u in a) "default" !== u && function(t) {
            o.d(n, t, function() {
                return a[t];
            });
        }(u);
        n.default = e.a;
    }
}, [ [ "affd", "common/runtime", "common/vendor" ] ] ]);