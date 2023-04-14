(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/order/reason" ], {
    "0e34": function(n, t, e) {},
    "1c2e": function(n, t, e) {
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return r;
        }), e.d(t, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, u = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    3766: function(n, t, e) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(e("a34a"));
            function u(n, t, e, o, u, r, a) {
                try {
                    var c = n[r](a), i = c.value;
                } catch (n) {
                    return void e(n);
                }
                c.done ? t(i) : Promise.resolve(i).then(o, u);
            }
            var r = getApp(), a = {
                data: function() {
                    return {
                        placeholder: "请在此填写理由",
                        o_id: "",
                        type: "",
                        input: "",
                        user_type: ""
                    };
                },
                onLoad: function(n) {
                    console.log(n), this.setData({
                        o_id: n.id,
                        type: n.type,
                        user_type: n.user_type || ""
                    }), 1 == n.type && this.setData({
                        placeholder: "请填写申请取消订单的理由，并等待对方是否同意，如果对方1小时内未操作，系统将自动取消"
                    });
                },
                onReady: function() {},
                onShow: function(n) {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: {
                    getVal: function(n) {
                        this.setData({
                            input: n.detail.value.replace(/\s+/g, "")
                        });
                    },
                    submit: function() {
                        var t = this;
                        this.input ? (n.showLoading({
                            title: "加载中...",
                            mask: !0
                        }), r.globalData.util.request({
                            url: "Order/CancelGrab",
                            data: {
                                o_id: t.o_id,
                                type: t.type,
                                reason: t.input
                            },
                            success: function(e) {
                                return function(n) {
                                    return function() {
                                        var t = this, e = arguments;
                                        return new Promise(function(o, r) {
                                            var a = n.apply(t, e);
                                            function c(n) {
                                                u(a, o, r, c, i, "next", n);
                                            }
                                            function i(n) {
                                                u(a, o, r, c, i, "throw", n);
                                            }
                                            c(void 0);
                                        });
                                    };
                                }(o.default.mark(function u() {
                                    return o.default.wrap(function(o) {
                                        for (;;) switch (o.prev = o.next) {
                                          case 0:
                                            if (200 != e.data.status) {
                                                o.next = 4;
                                                break;
                                            }
                                            return o.next = 3, t.tips.success("操作成功");

                                          case 3:
                                            setTimeout(function() {
                                                if ("store" == t.user_type) return n.redirectTo({
                                                    url: "/gc_school/pages/shop/order"
                                                }), !1;
                                                n.redirectTo({
                                                    url: "/gc_school/pages/order/detail?id=" + t.o_id
                                                });
                                            }, 2e3);

                                          case 4:
                                          case "end":
                                            return o.stop();
                                        }
                                    }, u);
                                }))();
                            }
                        }, !0), console.log(this.input)) : n.showToast({
                            title: "请输入内容",
                            icon: "none"
                        });
                    },
                    cancel: function(t) {
                        n.showModal({
                            title: "温馨提示",
                            content: "如若取消抢单，订单将恢复到待接单状态，如需取消订单请在订单列表操作",
                            success: function(t) {
                                t.confirm ? (console.log("确认"), n.navigateTo({
                                    url: "/gc_school/pages/order/reason"
                                })) : console.log("取消");
                            }
                        });
                    }
                }
            };
            t.default = a;
        }).call(this, e("543d").default);
    },
    "75a2": function(n, t, e) {
        var o = e("0e34");
        e.n(o).a;
    },
    ad3d: function(n, t, e) {
        e.r(t);
        var o = e("3766"), u = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = u.a;
    },
    db76: function(n, t, e) {
        (function(n) {
            e("a8cf"), o(e("66fd"));
            var t = o(e("f674"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(t.default);
        }).call(this, e("543d").createPage);
    },
    f674: function(n, t, e) {
        e.r(t);
        var o = e("1c2e"), u = e("ad3d");
        for (var r in u) "default" !== r && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(r);
        e("75a2");
        var a = e("f0c5"), c = Object(a.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    }
}, [ [ "db76", "common/runtime", "common/vendor" ] ] ]);