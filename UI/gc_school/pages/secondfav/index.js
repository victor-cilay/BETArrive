(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/secondfav/index" ], {
    "1ea1": function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return c;
        }), e.d(n, "a", function() {
            return a;
        });
        var a = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    "32db": function(t, n, e) {
        var a = e("88c8");
        e.n(a).a;
    },
    "58ce": function(t, n, e) {
        e.r(n);
        var a = e("fb88"), o = e.n(a);
        for (var c in a) "default" !== c && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        n.default = o.a;
    },
    "88c8": function(t, n, e) {},
    "9cc6": function(t, n, e) {
        (function(t) {
            e("a8cf"), a(e("66fd"));
            var n = a(e("e755"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    e755: function(t, n, e) {
        e.r(n);
        var a = e("1ea1"), o = e("58ce");
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        e("32db");
        var i = e("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    fb88: function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = getApp(), a = {
                data: function() {
                    return {
                        tabid: 0,
                        dataList: [],
                        page: 1,
                        loadmore: !0,
                        good: {
                            id: "",
                            gid: "",
                            status: "",
                            img: "",
                            name: "",
                            price: ""
                        }
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
                onReachBottom: function() {
                    this.setData({
                        page: this.page + 1
                    }), this.loadmore && this.getMylist();
                },
                methods: {
                    getMylist: function() {
                        var n = this;
                        e.globalData.util.request({
                            url: "Dmhgoodsstay/index",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                page: n.page,
                                type: 1,
                                psize: 8
                            },
                            success: function(t) {
                                t.data.data.list.length < 7 && n.setData({
                                    loadmore: !1
                                }), n.setData({
                                    dataList: t.data.data.list
                                });
                            }
                        }, !0);
                    },
                    cancelFav: function(n) {
                        var a = this;
                        console.log(n.currentTarget.dataset.id, "---"), t.showModal({
                            title: "提示",
                            content: "确认取消收藏吗？",
                            success: function(o) {
                                o.confirm && e.globalData.util.request({
                                    url: "Dmhgoodsstay/delete",
                                    data: {
                                        m_id: n.currentTarget.dataset.id,
                                        s_id: t.getStorageSync("schoolId")
                                    },
                                    success: function(t) {
                                        a.setData({
                                            page: 1,
                                            loadmore: !0
                                        }), a.getMylist();
                                    }
                                }, !0);
                            }
                        });
                    },
                    toDetail: function(n) {
                        console.log(n, "---"), t.navigateTo({
                            url: "/gc_school/pages/secondhand/detail?id=" + n
                        });
                    },
                    changeTab: function(t) {
                        this.setData({
                            tabid: t.currentTarget.dataset.id
                        }), this.getlist();
                    }
                }
            };
            n.default = a;
        }).call(this, e("543d").default);
    }
}, [ [ "9cc6", "common/runtime", "common/vendor" ] ] ]);