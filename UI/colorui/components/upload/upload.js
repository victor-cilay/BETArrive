(global.webpackJsonp = global.webpackJsonp || []).push([ [ "colorui/components/upload/upload" ], {
    "044f": function(e, t, n) {
        n.r(t);
        var u = n("2fa8"), a = n("c50e");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("e679");
        var r = n("f0c5"), c = Object(r.a)(a.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        t.default = c.exports;
    },
    "2fa8": function(e, t, n) {
        n.d(t, "b", function() {
            return u;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var u = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "7fa1": function(e, t, n) {
        (function(e) {
            n("a8cf"), u(n("66fd"));
            var t = u(n("044f"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    b31c: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                data: function() {
                    return {};
                },
                props: {
                    count: {
                        type: Number,
                        default: 3,
                        observers: function(e, t) {}
                    },
                    images: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    addedCount: {
                        type: Number,
                        default: 0,
                        observers: function(e, t) {
                            console.log("--new--".newVal, "--old--", t);
                        }
                    },
                    currentIndex: {
                        type: Number,
                        default: 0
                    }
                },
                methods: {
                    chooseImage: function() {
                        this.$emit("chooseImage");
                    },
                    previewImage: function(t) {
                        e.previewImage({
                            urls: this.images,
                            current: this.images[t.currentTarget.dataset.index]
                        });
                    },
                    deleteImage: function(e) {
                        this.$emit("deleteImage", {
                            detail: e.currentTarget.dataset.index
                        });
                    }
                }
            };
            t.default = n;
        }).call(this, n("543d").default);
    },
    c50e: function(e, t, n) {
        n.r(t);
        var u = n("b31c"), a = n.n(u);
        for (var o in u) "default" !== o && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(o);
        t.default = a.a;
    },
    e679: function(e, t, n) {
        var u = n("f38f");
        n.n(u).a;
    },
    f38f: function(e, t, n) {}
}, [ [ "7fa1", "common/runtime", "common/vendor" ] ] ]);