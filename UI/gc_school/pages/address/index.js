(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/address/index" ], {
    "0599": function(e, t, n) {
        n.r(t);
        var a = n("4bf1"), r = n("3efe");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("07e9");
        var c = n("f0c5"), i = Object(c.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = i.exports;
    },
    "07e9": function(e, t, n) {
        var a = n("1893");
        n.n(a).a;
    },
    1893: function(e, t, n) {},
    "3efe": function(e, t, n) {
        n.r(t);
        var a = n("8f78"), r = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = r.a;
    },
    "4bf1": function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return a;
        });
        var a = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "7a4b": function(e, t, n) {
        (function(e) {
            n("a8cf"), a(n("66fd"));
            var t = a(n("0599"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    "8f78": function(e, t, n) {
        (function(e) {
            function n(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(a), !0).forEach(function(t) {
                        r(e, t, a[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                    });
                }
                return e;
            }
            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = getApp(), c = {
                data: function() {
                    return {
                        showNodata: !1,
                        erranderId: 2,
                        address: {
                            available: [],
                            dis_available: []
                        },
                        islogin: !1,
                        color: e.getStorageSync("color"),
                        loginuserinfo: "",
                        form: {},
                        sid: 0,
                        channel: "",
                        input: ""
                    };
                },
                onLoad: function() {
                    e.getStorageSync("userinfo") && (console.log("用户信息", e.getStorageSync("userinfo")), 
                    this.setData({
                        loginuserinfo: e.getStorageSync("userinfo"),
                        islogin: !0
                    }));
                },
                onShow: function(e) {
                    this.getData();
                },
                onReady: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: {
                    handleUser: function(t) {
                        var n = getCurrentPages(), r = n[n.length - 2];
                        "gc_school/pages/public/index" == r.route ? (r.setData({
                            form: a(a({}, r.data.form), {}, {
                                a_id: t.currentTarget.dataset.id,
                                a_name: t.currentTarget.dataset.name,
                                a_addres: t.currentTarget.dataset.addres,
                                a_s_id: t.currentTarget.dataset.sid
                            })
                        }), e.navigateBack({
                            address: t.currentTarget.dataset.id
                        })) : e.navigateBack();
                    },
                    onJsEvent: function(t) {
                        console.log(t), e.navigateTo({
                            url: t.currentTarget.dataset.url
                        });
                    },
                    del: function(t) {
                        var n = this;
                        e.showModal({
                            title: "提示",
                            content: "确定要删除该条地址吗？",
                            success: function(e) {
                                e.confirm && o.globalData.util.request({
                                    url: "Address/delete",
                                    data: {
                                        a_ids: t.currentTarget.dataset.id
                                    },
                                    success: function(e) {
                                        n.getData();
                                    }
                                }, !0);
                            }
                        });
                    },
                    getData: function() {
                        var e = this;
                        o.globalData.util.request({
                            url: "Address/index",
                            data: {},
                            success: function(t) {
                                0 == t.data.data.list.length && e.setData({
                                    showNodata: !0
                                }), e.setData({
                                    address: {
                                        available: t.data.data.list
                                    }
                                });
                            }
                        }, !0);
                    },
                    wxAddress: function() {
                        var t = this;
                        e.chooseAddress({
                            success: function(n) {
                                console.log("返回的地址", n), o.globalData.util.request({
                                    url: "entry/wxapp/MyAddresAdd",
                                    data: {
                                        openid: e.getStorageSync("openid"),
                                        name: n.userName,
                                        addres: n.detailInfo,
                                        province: n.provinceName,
                                        city: n.cityName,
                                        district: n.countyName,
                                        phone: n.telNumber
                                    },
                                    success: function(e) {
                                        t.getData();
                                    }
                                });
                            }
                        });
                    },
                    onSelectAddress: function() {
                        console.log("占位：函数 onSelectAddress 未声明");
                    }
                }
            };
            t.default = c;
        }).call(this, n("543d").default);
    }
}, [ [ "7a4b", "common/runtime", "common/vendor" ] ] ]);