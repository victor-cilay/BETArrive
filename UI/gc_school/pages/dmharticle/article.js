(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/dmharticle/article" ], {
    "0ef9": function(n, t, e) {
        e.r(t);
        var o = e("dab6"), a = e.n(o);
        for (var u in o) "default" !== u && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(u);
        t.default = a.a;
    },
    "289f": function(n, t, e) {},
    4064: function(n, t, e) {
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            },
            mpHtml: function() {
                return Promise.all([ e.e("common/vendor"), e.e("uni_modules/mp-html/components/mp-html/mp-html") ]).then(e.bind(null, "e4b7"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    "512b": function(n, t, e) {
        e.r(t);
        var o = e("4064"), a = e("0ef9");
        for (var u in a) "default" !== u && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(u);
        e("91b4");
        var c = e("f0c5"), i = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = i.exports;
    },
    "91b4": function(n, t, e) {
        var o = e("289f");
        e.n(o).a;
    },
    bcd6: function(n, t, e) {
        (function(n) {
            e("a8cf"), o(e("66fd"));
            var t = o(e("512b"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(t.default);
        }).call(this, e("543d").createPage);
    },
    dab6: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = getApp(), a = {
            data: function() {
                return {
                    data: {},
                    content: ""
                };
            },
            onLoad: function(n) {
                this.getdata(n.id);
            },
            onReady: function() {},
            onShow: function() {},
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {},
            onReachBottom: function() {},
            onShareAppMessage: function() {},
            methods: {
                getdata: function(n) {
                    var t = this;
                    o.globalData.util.request({
                        url: "Dmharticle/view",
                        data: {
                            id: n
                        },
                        success: function(n) {
                            t.setData({
                                data: n.data.data
                            }), t.content = t.escape2Html(t.data.content);
                        }
                    });
                }
            }
        };
        t.default = a;
    }
}, [ [ "bcd6", "common/runtime", "common/vendor" ] ] ]);