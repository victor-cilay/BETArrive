(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/secondhand/orderdetail" ], {
    "01e6": function(t, a, n) {},
    "0ba4": function(t, a, n) {
        n.r(a);
        var e = n("ceaa"), o = n.n(e);
        for (var i in e) "default" !== i && function(t) {
            n.d(a, t, function() {
                return e[t];
            });
        }(i);
        a.default = o.a;
    },
    "192a": function(t, a, n) {
        (function(t) {
            n("a8cf"), e(n("66fd"));
            var a = e(n("38af"));
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default);
        }).call(this, n("543d").createPage);
    },
    2252: function(t, a, n) {
        n.d(a, "b", function() {
            return o;
        }), n.d(a, "c", function() {
            return i;
        }), n.d(a, "a", function() {
            return e;
        });
        var e = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "38af": function(t, a, n) {
        n.r(a);
        var e = n("2252"), o = n("0ba4");
        for (var i in o) "default" !== i && function(t) {
            n.d(a, t, function() {
                return o[t];
            });
        }(i);
        n("c860");
        var u = n("f0c5"), c = Object(u.a)(o.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        a.default = c.exports;
    },
    c860: function(t, a, n) {
        var e = n("01e6");
        n.n(e).a;
    },
    ceaa: function(t, a, n) {
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = getApp(), e = {
                data: function() {
                    return {
                        id: "",
                        uids: "",
                        data: {
                            img: "",
                            name: "",
                            price: "",
                            status: 0,
                            addtime: "",
                            linkman: "",
                            phone: "",
                            ids: "",
                            remark: ""
                        },
                        ifName: !1,
                        reason: ""
                    };
                },
                onLoad: function(t) {
                    this.setData({
                        id: t.id,
                        ids: t.id
                    }), this.getDetail(), this.getUids();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {},
                methods: {
                    refund: function(t) {
                        this.setData({
                            ifName: !0,
                            id: this.data.oid
                        });
                    },
                    getDetail: function() {
                        var t = this;
                        n.globalData.util.request({
                            url: "Dmhmarketorder/details",
                            data: {
                                id: t.ids
                            },
                            success: function(a) {
                                console.log(a.data.data), t.setData({
                                    data: a.data.data
                                });
                            }
                        }, !0);
                    },
                    setValue: function(t) {
                        this.setData({
                            reason: t.detail.value.replace(/\s+/g, "")
                        });
                    },
                    getUids: function() {
                        var t = this;
                        n.globalData.util.request({
                            url: "Dmhmarketgoods/uids",
                            data: {},
                            success: function(a) {
                                console.log(a.data.data), t.setData({
                                    uids: a.data.data.uids
                                });
                            }
                        }, !0);
                    },
                    confirm: function(a) {
                        var e = this;
                        e.data.oid && t.showModal({
                            title: "提示",
                            content: "确认收货吗？",
                            success: function(a) {
                                a.confirm && n.globalData.util.request({
                                    url: "Dmhmarketorder/confirm",
                                    data: {
                                        oid: e.data.oid,
                                        s_id: t.getStorageSync("schoolId")
                                    },
                                    success: function(t) {
                                        e.setData({
                                            page: 1,
                                            loadmore: !0
                                        }), e.data = [], e.getDetail();
                                    }
                                }, !0);
                            }
                        });
                    },
                    cancel: function() {
                        this.setData({
                            ifName: !1,
                            reason: ""
                        });
                    },
                    confirmRefund: function() {
                        var a = this;
                        "" != this.reason ? n.globalData.util.request({
                            url: "Dmhmarketorder/secondRefund",
                            data: {
                                oid: a.id,
                                s_id: t.getStorageSync("schoolId"),
                                reason: a.reason
                            },
                            success: function(t) {
                                a.setData({
                                    page: 1,
                                    loadmore: !0,
                                    ifName: !1,
                                    reason: ""
                                }), a.data = [], a.getDetail();
                            }
                        }, !0) : n.globalData.util.message("请填写理由", "", "error");
                    },
                    makecall: function() {
                        t.makePhoneCall({
                            phoneNumber: this.data.phone,
                            success: function() {},
                            fail: function() {
                                console.log("取消拨打");
                            }
                        });
                    }
                }
            };
            a.default = e;
        }).call(this, n("543d").default);
    }
}, [ [ "192a", "common/runtime", "common/vendor" ] ] ]);