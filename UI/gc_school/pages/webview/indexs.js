(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/webview/indexs" ], {
    "2c4b": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(t("a151"));
        var o = {
            data: function() {
                return {
                    url: ""
                };
            },
            onLoad: function(n) {
                console.log(a.default.baseurl), this.setData({
                    url: a.default.url + "Mplogin/index?wxapp_id=" + a.default.uniacid
                });
            },
            onReady: function() {},
            onShow: function() {},
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {},
            onReachBottom: function() {},
            onShareAppMessage: function() {},
            methods: {}
        };
        e.default = o;
    },
    "306a": function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "3c1a": function(n, e, t) {
        t.r(e);
        var a = t("306a"), o = t("7b7e");
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        t("a08e");
        var c = t("f0c5"), f = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = f.exports;
    },
    "7b7e": function(n, e, t) {
        t.r(e);
        var a = t("2c4b"), o = t.n(a);
        for (var u in a) "default" !== u && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        e.default = o.a;
    },
    a08e: function(n, e, t) {
        var a = t("ac9a");
        t.n(a).a;
    },
    abb0: function(n, e, t) {
        (function(n) {
            t("a8cf"), a(t("66fd"));
            var e = a(t("3c1a"));
            function a(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    },
    ac9a: function(n, e, t) {}
}, [ [ "abb0", "common/runtime", "common/vendor" ] ] ]);