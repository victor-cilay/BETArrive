(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar" ], {
    "57ca": function(n, e, t) {
        t.r(e);
        var o = t("b85c"), i = t("6aac");
        for (var c in i) "default" !== c && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(c);
        t("ed39");
        var a = t("f0c5"), u = Object(a.a)(i.default, o.b, o.c, !1, null, "386fad3c", null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "6aac": function(n, e, t) {
        t.r(e);
        var o = t("b5ef"), i = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = i.a;
    },
    "8e3f": function(n, e, t) {},
    b5ef: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t = {
                name: "UniNoticeBar",
                emits: [ "click", "getmore", "close" ],
                props: {
                    text: {
                        type: String,
                        default: ""
                    },
                    moreText: {
                        type: String,
                        default: ""
                    },
                    backgroundColor: {
                        type: String,
                        default: "#fffbe8"
                    },
                    speed: {
                        type: Number,
                        default: 100
                    },
                    color: {
                        type: String,
                        default: "#de8c17"
                    },
                    moreColor: {
                        type: String,
                        default: "#999999"
                    },
                    single: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    scrollable: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    showIcon: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    showGetMore: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    showClose: {
                        type: [ Boolean, String ],
                        default: !1
                    }
                },
                data: function() {
                    return {
                        textWidth: 0,
                        boxWidth: 0,
                        wrapWidth: "",
                        webviewHide: !1,
                        elId: "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36)),
                        elIdBox: "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36)),
                        show: !0,
                        animationDuration: "none",
                        animationPlayState: "paused",
                        animationDelay: "0s"
                    };
                },
                mounted: function() {
                    var n = this;
                    this.$nextTick(function() {
                        n.initSize();
                    });
                },
                methods: {
                    initSize: function() {
                        var e = this;
                        if (this.scrollable) {
                            var t = [], o = new Promise(function(t, o) {
                                n.createSelectorQuery().in(e).select("#".concat(e.elId)).boundingClientRect().exec(function(n) {
                                    e.textWidth = n[0].width, t();
                                });
                            }), i = new Promise(function(t, o) {
                                n.createSelectorQuery().in(e).select("#".concat(e.elIdBox)).boundingClientRect().exec(function(n) {
                                    e.boxWidth = n[0].width, t();
                                });
                            });
                            t.push(o), t.push(i), Promise.all(t).then(function() {
                                e.animationDuration = "".concat(e.textWidth / e.speed, "s"), e.animationDelay = "-".concat(e.boxWidth / e.speed, "s"), 
                                setTimeout(function() {
                                    e.animationPlayState = "running";
                                }, 1e3);
                            });
                        }
                    },
                    loopAnimation: function() {},
                    clickMore: function() {
                        this.$emit("getmore");
                    },
                    close: function() {
                        this.show = !1, this.$emit("close");
                    },
                    onClick: function() {
                        this.$emit("click");
                    }
                }
            };
            e.default = t;
        }).call(this, t("543d").default);
    },
    b85c: function(n, e, t) {
        t.d(e, "b", function() {
            return i;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {
            return o;
        });
        var o = {
            uniIcons: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uni_modules/uni-icons/components/uni-icons/uni-icons") ]).then(t.bind(null, "8da43"));
            }
        }, i = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    ed39: function(n, e, t) {
        var o = t("8e3f");
        t.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar-create-component", {
    "uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar-create-component": function(n, e, t) {
        t("543d").createComponent(t("57ca"));
    }
}, [ [ "uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar-create-component" ] ] ]);