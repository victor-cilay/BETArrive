(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/article/topic" ], {
    4812: function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {
            return i;
        });
        var i = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "520c": function(t, n, e) {},
    "55ad": function(t, n, e) {
        var i = e("520c");
        e.n(i).a;
    },
    "64e5": function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = o(e("a34a"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t) {
                return function(t) {
                    if (Array.isArray(t)) return s(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return s(t, n);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? s(t, n) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function s(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, i = new Array(n); e < n; e++) i[e] = t[e];
                return i;
            }
            function r(t, n, e, i, o, a, s) {
                try {
                    var r = t[a](s), c = r.value;
                } catch (t) {
                    return void e(t);
                }
                r.done ? n(c) : Promise.resolve(c).then(i, o);
            }
            o(e("a151"));
            var c = getApp(), l = {
                data: function() {
                    return {
                        list: [],
                        selectedlist: "",
                        page: 1,
                        lists: [],
                        title: ""
                    };
                },
                onLoad: function(t) {
                    var n = this;
                    return function(t) {
                        return function() {
                            var n = this, e = arguments;
                            return new Promise(function(i, o) {
                                var a = t.apply(n, e);
                                function s(t) {
                                    r(a, i, o, s, c, "next", t);
                                }
                                function c(t) {
                                    r(a, i, o, s, c, "throw", t);
                                }
                                s(void 0);
                            });
                        };
                    }(i.default.mark(function t() {
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                n.getpost();

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    this.page = this.page + 1, this.getpost();
                },
                methods: {
                    getpost: function() {
                        var n = this;
                        c.globalData.util.request({
                            url: "Dmhtopic/index",
                            data: {
                                page: n.page,
                                title: n.title,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log(t.data.data.list, "----------"), n.list = [].concat(a(n.list), a(t.data.data.list));
                            }
                        });
                    },
                    getsou: function() {
                        var n = this;
                        n.list = [], n.page = 1, c.globalData.util.request({
                            url: "Dmhtopic/index",
                            data: {
                                page: n.page,
                                title: n.title,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log(t.data.data.list, "----------"), n.list = [].concat(a(n.list), a(t.data.data.list));
                            }
                        });
                    },
                    getchoose: function(n) {
                        t.$emit("getlist", this.lists), t.navigateBack({
                            delta: 1
                        });
                    },
                    getchoice: function(n) {
                        if (console.log(n, "-----------"), 1 == this.list[n].chad) {
                            console.log("执行取消"), this.list[n].chad = !1;
                            for (var e = [], i = 0; i < this.lists.length; i++) this.lists[i].id != this.list[n].id && (e = [].concat(a(e), [ this.lists[i] ]));
                            this.lists = e;
                        } else {
                            if (this.lists.length >= 3) return t.showToast({
                                title: "最多只可选择3个话题",
                                icon: "none",
                                duration: 3e3
                            }), !1;
                            console.log("执行选中"), this.list[n].chad = !0, this.lists = [].concat(a(this.lists), [ this.list[n] ]);
                        }
                    },
                    getfork: function(t) {
                        console.log("执行取消", t);
                        for (var n = 0; n < this.list.length; n++) this.lists[t].id == this.list[n].id && (this.list[n].chad = !1);
                        this.lists.splice(t, 1);
                    },
                    getempty: function() {
                        this.lists = [];
                        for (var t = 0; t < this.list.length; t++) this.list[t].chad = !1;
                    }
                }
            };
            n.default = l;
        }).call(this, e("543d").default);
    },
    "6d09": function(t, n, e) {
        e.r(n);
        var i = e("64e5"), o = e.n(i);
        for (var a in i) "default" !== a && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(a);
        n.default = o.a;
    },
    "82bd": function(t, n, e) {
        (function(t) {
            e("a8cf"), i(e("66fd"));
            var n = i(e("f4c9"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    f4c9: function(t, n, e) {
        e.r(n);
        var i = e("4812"), o = e("6d09");
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        e("55ad");
        var s = e("f0c5"), r = Object(s.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = r.exports;
    }
}, [ [ "82bd", "common/runtime", "common/vendor" ] ] ]);