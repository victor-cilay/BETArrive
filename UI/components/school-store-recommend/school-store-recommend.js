(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/school-store-recommend/school-store-recommend" ], {
    "122f": function(o, e, n) {
        var t = n("4a3e");
        n.n(t).a;
    },
    "196a": function(o, e, n) {
        n.r(e);
        var t = n("48ee"), c = n.n(t);
        for (var r in t) "default" !== r && function(o) {
            n.d(e, o, function() {
                return t[o];
            });
        }(r);
        e.default = c.a;
    },
    "48ee": function(o, e, n) {
        (function(o) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, getApp();
            var n = {
                data: function() {
                    return {
                        sys: {},
                        authData: {}
                    };
                },
                props: {
                    schoolInfo: {
                        type: [ Object, Array, String ],
                        default: function() {
                            return {};
                        }
                    }
                },
                created: function() {},
                methods: {
                    goStore: function(e) {
                        try {
                            o.setStorageSync("module_id", this.schoolInfo.default_store_module.id);
                        } catch (o) {}
                        this.go(e);
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    },
    "4a3e": function(o, e, n) {},
    "82e9": function(o, e, n) {
        n.d(e, "b", function() {
            return t;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
        var t = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    ddb1: function(o, e, n) {
        n.r(e);
        var t = n("82e9"), c = n("196a");
        for (var r in c) "default" !== r && function(o) {
            n.d(e, o, function() {
                return c[o];
            });
        }(r);
        n("122f");
        var a = n("f0c5"), u = Object(a.a)(c.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/school-store-recommend/school-store-recommend-create-component", {
    "components/school-store-recommend/school-store-recommend-create-component": function(o, e, n) {
        n("543d").createComponent(n("ddb1"));
    }
}, [ [ "components/school-store-recommend/school-store-recommend-create-component" ] ] ]);