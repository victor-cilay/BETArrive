(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/mp-html/components/mp-html/mp-html" ], {
    "5dd5": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "639a": function(t, e, n) {
        n.r(e);
        var o = n("a6c3"), i = n.n(o);
        for (var l in o) "default" !== l && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(l);
        e.default = i.a;
    },
    8129: function(t, e, n) {
        var o = n("ed5e");
        n.n(o).a;
    },
    a6c3: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = [], i = n("e9f0"), l = {
                name: "mp-html",
                data: function() {
                    return {
                        nodes: []
                    };
                },
                props: {
                    containerStyle: {
                        type: String,
                        default: ""
                    },
                    content: String,
                    copyLink: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    domain: String,
                    errorImg: {
                        type: String,
                        default: ""
                    },
                    lazyLoad: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    loadingImg: {
                        type: String,
                        default: ""
                    },
                    pauseVideo: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    previewImg: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    scrollTable: [ Boolean, String ],
                    selectable: [ Boolean, String ],
                    setTitle: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    showImgMenu: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    tagStyle: Object,
                    useAnchor: [ Boolean, Number ]
                },
                components: {
                    node: function() {
                        n.e("uni_modules/mp-html/components/mp-html/node/node").then(function() {
                            return resolve(n("41d4"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                watch: {
                    content: function(t) {
                        this.setContent(t);
                    }
                },
                created: function() {
                    this.plugins = [];
                    for (var t = o.length; t--; ) this.plugins.push(new o[t](this));
                },
                mounted: function() {
                    this.content && !this.nodes.length && this.setContent(this.content);
                },
                beforeDestroy: function() {
                    this._hook("onDetached"), clearInterval(this._timer);
                },
                methods: {
                    in: function(t, e, n) {
                        t && e && n && (this._in = {
                            page: t,
                            selector: e,
                            scrollTop: n
                        });
                    },
                    navigateTo: function(e, n) {
                        var o = this;
                        return new Promise(function(i, l) {
                            if (o.useAnchor) {
                                n = n || parseInt(o.useAnchor) || 0;
                                ">>>";
                                var r = t.createSelectorQuery().in(o._in ? o._in.page : o).select((o._in ? o._in.selector : "._root") + (e ? "".concat(">>>", "#").concat(e) : "")).boundingClientRect();
                                o._in ? r.select(o._in.selector).scrollOffset().select(o._in.selector).boundingClientRect() : r.selectViewport().scrollOffset(), 
                                r.exec(function(e) {
                                    if (e[0]) {
                                        var r = e[1].scrollTop + e[0].top - (e[2] ? e[2].top : 0) + n;
                                        o._in ? o._in.page[o._in.scrollTop] = r : t.pageScrollTo({
                                            scrollTop: r,
                                            duration: 300
                                        }), i();
                                    } else l(Error("Label not found"));
                                });
                            } else l(Error("Anchor is disabled"));
                        });
                    },
                    getText: function(t) {
                        var e = "";
                        return function t(n) {
                            for (var o = 0; o < n.length; o++) {
                                var i = n[o];
                                if ("text" === i.type) e += i.text.replace(/&amp;/g, "&"); else if ("br" === i.name) e += "\n"; else {
                                    var l = "p" === i.name || "div" === i.name || "tr" === i.name || "li" === i.name || "h" === i.name[0] && i.name[1] > "0" && i.name[1] < "7";
                                    l && e && "\n" !== e[e.length - 1] && (e += "\n"), i.children && t(i.children), 
                                    l && "\n" !== e[e.length - 1] ? e += "\n" : "td" !== i.name && "th" !== i.name || (e += "\t");
                                }
                            }
                        }(t || this.nodes), e;
                    },
                    getRect: function() {
                        var e = this;
                        return new Promise(function(n, o) {
                            t.createSelectorQuery().in(e).select("#_root").boundingClientRect().exec(function(t) {
                                return t[0] ? n(t[0]) : o(Error("Root label not found"));
                            });
                        });
                    },
                    setContent: function(t, e) {
                        var n = this;
                        e && this.imgList || (this.imgList = []);
                        var o, l = new i(this).parse(t);
                        this.$set(this, "nodes", e ? (this.nodes || []).concat(l) : l), this._videos = [], 
                        this.$nextTick(function() {
                            n._hook("onLoad"), n.$emit("load");
                        }), clearInterval(this._timer), this._timer = setInterval(function() {
                            n.getRect().then(function(t) {
                                t.height === o && (n.$emit("ready", t), clearInterval(n._timer)), o = t.height;
                            }).catch(function() {});
                        }, 350);
                    },
                    _hook: function(t) {
                        for (var e = o.length; e--; ) this.plugins[e][t] && this.plugins[e][t]();
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    e4b7: function(t, e, n) {
        n.r(e);
        var o = n("5dd5"), i = n("639a");
        for (var l in i) "default" !== l && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(l);
        n("8129");
        var r = n("f0c5"), a = Object(r.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = a.exports;
    },
    ed5e: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/mp-html/components/mp-html/mp-html-create-component", {
    "uni_modules/mp-html/components/mp-html/mp-html-create-component": function(t, e, n) {
        n("543d").createComponent(n("e4b7"));
    }
}, [ [ "uni_modules/mp-html/components/mp-html/mp-html-create-component" ] ] ]);