(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/article/favorite" ], {
    1700: function(t, a, e) {
        e.d(a, "b", function() {
            return n;
        }), e.d(a, "c", function() {
            return i;
        }), e.d(a, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, n = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(a) {
                t.type = 0;
            }, t.e1 = function(a) {
                t.type = 1;
            });
        }, i = [];
    },
    "5a12": function(t, a, e) {},
    a04d: function(t, a, e) {
        var o = e("b9ba");
        e.n(o).a;
    },
    b9ba: function(t, a, e) {},
    cd23: function(t, a, e) {
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var e = getApp(), o = {
                data: function() {
                    return {
                        url: "",
                        info: [ 1, 2, 3 ],
                        index_swiperCurrent: 0,
                        cateList: [],
                        cate_index: 0,
                        dataList: [],
                        type: 0,
                        is_loadmore: !0,
                        page: 1,
                        page_good: 1,
                        is_loadmore_good: !0,
                        img: "",
                        goodsList: []
                    };
                },
                onLoad: function(t) {
                    this.getLst(), this.getGoodsLst();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    0 == this.type ? this.is_loadmore ? (this.setData({
                        page: this.page + 1
                    }), this.getLst()) : t.showToast({
                        title: "没有更多数据了~",
                        icon: "none"
                    }) : this.is_loadmore_good ? (this.setData({
                        page_good: this.page_good + 1
                    }), this.getGoodsLst()) : t.showToast({
                        title: "没有更多数据了~",
                        icon: "none"
                    });
                },
                methods: {
                    toDetail: function(a) {
                        console.log(a.currentTarget.dataset.id), t.navigateTo({
                            url: "/gc_school/pages/article/detail?id=" + a.currentTarget.dataset.id
                        });
                    },
                    preview: function(a) {
                        t.previewImage({
                            current: a.currentTarget.dataset.img,
                            urls: a.currentTarget.dataset.list
                        });
                    },
                    getLst: function() {
                        var a = this;
                        e.globalData.util.request({
                            url: "ZhArticles/getMyFavArticle",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                page: a.page,
                                limit: 10
                            },
                            success: function(t) {
                                console.log(t.data.data, 1213), t.data.data.length < 10 && a.setData({
                                    is_loadmore: !1
                                });
                                for (var e = 0; e < t.data.data.length; e++) a.dataList.push(t.data.data[e]), a.setData({
                                    dataList: a.dataList
                                });
                            }
                        }, !0);
                    },
                    cancel: function(a) {
                        var o = this;
                        t.showModal({
                            title: "是否取消收藏",
                            success: function(n) {
                                n.confirm && e.globalData.util.request({
                                    url: "ZhGiveThumbsUp/giveUp",
                                    data: {
                                        article_id: a,
                                        s_id: t.getStorageSync("schoolId")
                                    },
                                    success: function(t) {
                                        200 == t.data.status && (o.page = 1, o.is_loadmore = !0, o.dataList = [], o.getLst());
                                    }
                                }, !0);
                            }
                        });
                    },
                    getGoodsLst: function() {
                        var a = this;
                        e.globalData.util.request({
                            url: "Dmhgoodsstay/index",
                            data: {
                                page: a.page_good,
                                s_id: t.getStorageSync("schoolId"),
                                limit: 10
                            },
                            success: function(t) {
                                t.data.data.list.length < 10 && a.setData({
                                    is_loadmore_good: !1
                                }), a.setData({
                                    goodsList: t.data.data.list
                                }), console.log("商品列表", t.data.data.list);
                            }
                        }, !0);
                    },
                    del: function(a) {
                        var o = this;
                        console.log(a), t.showModal({
                            content: "确认删除该文章吗？",
                            success: function(n) {
                                n.confirm ? e.globalData.util.request({
                                    url: "ZhArticles/delete",
                                    data: {
                                        article_id: a.currentTarget.dataset.id,
                                        s_id: t.getStorageSync("schoolId")
                                    },
                                    success: function(a) {
                                        200 == a.data.status && (t.showToast({
                                            title: a.data.message
                                        }), setTimeout(function() {
                                            o.setData({
                                                page: 1,
                                                dataList: [],
                                                is_loadmore: !0
                                            }), o.getLst();
                                        }, 1e3));
                                    }
                                }, !0) : console.log("取消删除");
                            }
                        });
                    },
                    jump: function(a) {
                        console.log(a), t.navigateTo({
                            url: a.currentTarget.dataset.url
                        });
                    }
                }
            };
            a.default = o;
        }).call(this, e("543d").default);
    },
    e058: function(t, a, e) {
        var o = e("5a12");
        e.n(o).a;
    },
    e2b7: function(t, a, e) {
        e.r(a);
        var o = e("1700"), n = e("ff98");
        for (var i in n) "default" !== i && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(i);
        e("e058"), e("a04d");
        var s = e("f0c5"), c = Object(s.a)(n.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        a.default = c.exports;
    },
    e7af: function(t, a, e) {
        (function(t) {
            e("a8cf"), o(e("66fd"));
            var a = o(e("e2b7"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(a.default);
        }).call(this, e("543d").createPage);
    },
    ff98: function(t, a, e) {
        e.r(a);
        var o = e("cd23"), n = e.n(o);
        for (var i in o) "default" !== i && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(i);
        a.default = n.a;
    }
}, [ [ "e7af", "common/runtime", "common/vendor" ] ] ]);