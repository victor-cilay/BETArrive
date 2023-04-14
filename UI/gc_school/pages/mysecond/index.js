(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/mysecond/index" ], {
    "114d": function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = getApp(), o = {
                data: function() {
                    return {
                        tab: [ {
                            name: "正在交易",
                            id: 0
                        }, {
                            name: "已经购买",
                            id: 1
                        }, {
                            name: "已经卖出",
                            id: 2
                        }, {
                            name: "取消订单",
                            id: 3
                        } ],
                        tabid: 0,
                        dataList: [],
                        good: {
                            id: "",
                            status: "",
                            img: "",
                            name: "",
                            price: "",
                            addtime: "",
                            buyer_flag: "",
                            _id: ""
                        },
                        goodsList: []
                    };
                },
                onLoad: function(t) {
                    this.getMylist();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {},
                methods: {
                    getMylist: function() {
                        var n = this;
                        e.globalData.util.request({
                            url: "entry/wxapp/mySecond",
                            data: {
                                openid: t.getStorageSync("openid")
                            },
                            success: function(t) {
                                n.setData({
                                    dataList: t.data.data
                                });
                            }
                        });
                    },
                    delorder: function(n) {
                        var o = this;
                        console.log(n.currentTarget.dataset.id), t.showModal({
                            title: "提示",
                            content: "确认删除吗？",
                            success: function(t) {
                                t.confirm && e.globalData.util.request({
                                    url: "entry/wxapp/delMyGoods",
                                    data: {
                                        id: n.currentTarget.dataset.id
                                    },
                                    success: function(t) {
                                        o.getMylist();
                                    }
                                });
                            }
                        });
                    },
                    toDetail: function(n) {
                        t.navigateTo({
                            url: "/gc_school/pages/seconddetail/index?id=" + n.currentTarget.dataset.id
                        });
                    },
                    changeTab: function(t) {
                        this.setData({
                            tabid: t.currentTarget.dataset.id
                        }), this.getlist();
                    },
                    toCurdetails: function() {
                        console.log("占位：函数 toCurdetails 未声明");
                    }
                }
            };
            n.default = o;
        }).call(this, e("543d").default);
    },
    "51d2": function(t, n, e) {},
    "5d79": function(t, n, e) {
        (function(t) {
            e("a8cf"), o(e("66fd"));
            var n = o(e("f071"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    "5deb": function(t, n, e) {
        var o = e("51d2");
        e.n(o).a;
    },
    8471: function(t, n, e) {
        e.r(n);
        var o = e("114d"), a = e.n(o);
        for (var i in o) "default" !== i && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(i);
        n.default = a.a;
    },
    e24d: function(t, n, e) {
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return i;
        }), e.d(n, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    f071: function(t, n, e) {
        e.r(n);
        var o = e("e24d"), a = e("8471");
        for (var i in a) "default" !== i && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(i);
        e("5deb");
        var u = e("f0c5"), d = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = d.exports;
    }
}, [ [ "5d79", "common/runtime", "common/vendor" ] ] ]);