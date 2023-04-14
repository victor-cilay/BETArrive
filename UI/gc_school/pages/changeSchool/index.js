(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/changeSchool/index" ], {
    "064e": function(t, n, e) {},
    "190e": function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("a34a"));
            function r(t, n, e, o, r, c, i) {
                try {
                    var u = t[c](i), a = u.value;
                } catch (t) {
                    return void e(t);
                }
                u.done ? n(a) : Promise.resolve(a).then(o, r);
            }
            function c(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(o, c) {
                        var i = t.apply(n, e);
                        function u(t) {
                            r(i, o, c, u, a, "next", t);
                        }
                        function a(t) {
                            r(i, o, c, u, a, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            function i(t, n) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    n && (o = o.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable;
                    })), e.push.apply(e, o);
                }
                return e;
            }
            function u(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? i(Object(e), !0).forEach(function(n) {
                        a(t, n, e[n]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : i(Object(e)).forEach(function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                    });
                }
                return t;
            }
            function a(t, n, e) {
                return n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e, t;
            }
            var s = (getApp(), {
                components: {
                    pick: function() {
                        Promise.all([ e.e("common/vendor"), e.e("components/pick-regions/pick-regions") ]).then(function() {
                            return resolve(e("3ed8"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return u(u({}, this.configInfo), {}, {
                        formData: {
                            kwd: "",
                            city: ""
                        },
                        kwd: "",
                        schoolList: [],
                        flg: -1
                    });
                },
                watch: {
                    kwd: function(t) {
                        this.formData.kwd = t, this.initData();
                    }
                },
                onLoad: function(t) {
                    var n = this;
                    return c(o.default.mark(function t() {
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                n.initData();

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onReady: function() {},
                onShareAppMessage: function() {},
                onShareTimeline: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {
                    t.$emit("changeSchools", {});
                },
                onReachBottom: function() {},
                methods: {
                    closeAuth: function() {
                        var n = this;
                        return c(o.default.mark(function e() {
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.tips.tips("如果想重新授权，请前往设置！");

                                  case 2:
                                    n.isHomeAuth = !0, t.setStorageSync("isHomeAuth", !0);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    initData: function() {
                        var n = this;
                        return c(o.default.mark(function e() {
                            var r;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.request("School/index", u({
                                        openid: t.getStorageSync("openid") ? t.getStorageSync("openid") : "nologinuser"
                                    }, n.formData));

                                  case 2:
                                    r = e.sent, n.schoolList = r.data.data.list, t.setStorageSync("schoolList", r.data.data.list), 
                                    n.flg = -1;

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    handleGetRegion: function(t) {
                        this.formData.city = t[1].name, this.initData();
                    },
                    changeCity: function(n) {
                        console.log(n), t.chooseLocation({
                            success: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    changeSchool: function(t) {
                        this.flg = t, this.enter();
                    },
                    enter: function() {
                        if (-1 == this.flg) return this.tups.tips("请选择学校"), !1;
                        t.setStorageSync("schoolId", this.schoolList[this.flg].s_id), t.reLaunch({
                            url: "/gc_school/pages/home/index"
                        });
                    }
                }
            });
            n.default = s;
        }).call(this, e("543d").default);
    },
    "1e11": function(t, n, e) {
        (function(t) {
            e("a8cf"), o(e("66fd"));
            var n = o(e("f2c4"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    "4e65": function(t, n, e) {
        e.d(n, "b", function() {
            return r;
        }), e.d(n, "c", function() {
            return c;
        }), e.d(n, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, r = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    "860b": function(t, n, e) {
        var o = e("064e");
        e.n(o).a;
    },
    "9cbc": function(t, n, e) {
        e.r(n);
        var o = e("190e"), r = e.n(o);
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        n.default = r.a;
    },
    f2c4: function(t, n, e) {
        e.r(n);
        var o = e("4e65"), r = e("9cbc");
        for (var c in r) "default" !== c && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(c);
        e("860b");
        var i = e("f0c5"), u = Object(i.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = u.exports;
    }
}, [ [ "1e11", "common/runtime", "common/vendor" ] ] ]);