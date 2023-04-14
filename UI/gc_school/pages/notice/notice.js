(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/notice/notice" ], {
    "24a5": function(n, t, o) {
        var e = o("e4be");
        o.n(e).a;
    },
    "5af9": function(n, t, o) {
        o.r(t);
        var e = o("e3b6"), a = o.n(e);
        for (var u in e) "default" !== u && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(u);
        t.default = a.a;
    },
    "601f": function(n, t, o) {
        (function(n) {
            o("a8cf"), e(o("66fd"));
            var t = e(o("9701"));
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, n(t.default);
        }).call(this, o("543d").createPage);
    },
    7187: function(n, t, o) {
        o.d(t, "b", function() {
            return a;
        }), o.d(t, "c", function() {
            return u;
        }), o.d(t, "a", function() {
            return e;
        });
        var e = {
            cuCustom: function() {
                return o.e("colorui/components/cu-custom").then(o.bind(null, "24dd"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    9701: function(n, t, o) {
        o.r(t);
        var e = o("7187"), a = o("5af9");
        for (var u in a) "default" !== u && function(n) {
            o.d(t, n, function() {
                return a[n];
            });
        }(u);
        o("24a5");
        var c = o("f0c5"), i = Object(c.a)(a.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        t.default = i.exports;
    },
    e3b6: function(n, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var e = getApp(), a = {
            data: function() {
                return {
                    item: {}
                };
            },
            onLoad: function(n) {
                this.init(n.id);
            },
            onReady: function() {},
            onShow: function() {},
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {},
            onReachBottom: function() {},
            onShareAppMessage: function() {},
            methods: {
                init: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t = this;
                    e.globalData.util.request({
                        url: "school/noticeDetail",
                        data: {
                            id: n
                        },
                        success: function(n) {
                            console.log(n), n.data.data.content = t.escape2Html(n.data.data.content), t.setData({
                                item: n.data.data
                            });
                        }
                    });
                }
            }
        };
        t.default = a;
    },
    e4be: function(n, t, o) {}
}, [ [ "601f", "common/runtime", "common/vendor" ] ] ]);