(global.webpackJsonp = global.webpackJsonp || []).push([ [ "colorui/components/cu-custom" ], {
    "24dd": function(t, o, n) {
        n.r(o);
        var e = n("ea92"), a = n("2b25");
        for (var u in a) "default" !== u && function(t) {
            n.d(o, t, function() {
                return a[t];
            });
        }(u);
        n("8c3d");
        var c = n("f0c5"), r = Object(c.a)(a.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        o.default = r.exports;
    },
    "2b25": function(t, o, n) {
        n.r(o);
        var e = n("9077"), a = n.n(e);
        for (var u in e) "default" !== u && function(t) {
            n.d(o, t, function() {
                return e[t];
            });
        }(u);
        o.default = a.a;
    },
    "8c3d": function(t, o, n) {
        var e = n("a159");
        n.n(e).a;
    },
    9077: function(t, o, n) {
        (function(t) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var n = getApp(), e = {
                data: function() {
                    return {
                        StatusBar: t.getStorageSync("StatusBar") ? t.getStorageSync("StatusBar") : 64,
                        CustomBar: t.getStorageSync("CustomBar") ? t.getStorageSync("CustomBar") : 20,
                        Custom: n.globalData.Custom,
                        style: ""
                    };
                },
                options: {
                    addGlobalClass: !0,
                    multipleSlots: !0
                },
                props: {
                    bgColor: {
                        type: String,
                        default: ""
                    },
                    isCustom: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    isBack: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    bgImage: {
                        type: String,
                        default: ""
                    }
                },
                mounted: function() {},
                methods: {
                    BackPage: function() {
                        t.navigateBack({
                            delta: 1,
                            success: function() {
                                t.removeStorage({
                                    key: "json"
                                });
                            },
                            fail: function() {
                                t.redirectTo({
                                    url: "/gc_school/pages/home/index"
                                });
                            }
                        });
                    },
                    toHome: function() {
                        t.reLaunch({
                            url: "/pages/index/index"
                        });
                    }
                }
            };
            o.default = e;
        }).call(this, n("543d").default);
    },
    a159: function(t, o, n) {},
    ea92: function(t, o, n) {
        n.d(o, "b", function() {
            return e;
        }), n.d(o, "c", function() {
            return a;
        }), n.d(o, "a", function() {});
        var e = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "colorui/components/cu-custom-create-component", {
    "colorui/components/cu-custom-create-component": function(t, o, n) {
        n("543d").createComponent(n("24dd"));
    }
}, [ [ "colorui/components/cu-custom-create-component" ] ] ]);