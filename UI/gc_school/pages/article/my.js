(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/article/my" ], {
    "12e9": function(t, e, a) {},
    "16cc": function(t, e, a) {
        a.r(e);
        var n = a("c11f"), o = a.n(n);
        for (var i in n) "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = o.a;
    },
    "7e7f": function(t, e, a) {
        var n = a("12e9");
        a.n(n).a;
    },
    8561: function(t, e, a) {
        (function(t) {
            a("a8cf"), n(a("66fd"));
            var e = n(a("ffd9"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    },
    a69c: function(t, e, a) {
        var n = a("e430");
        a.n(n).a;
    },
    c11f: function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = getApp(), n = {
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
                        img: "",
                        type_list: [ "待审核", "已通过", "已拒绝" ],
                        flg_id: 0
                    };
                },
                onLoad: function(t) {
                    this.getLst();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    this.is_loadmore ? (this.setData({
                        page: this.page + 1
                    }), this.getLst()) : t.showToast({
                        title: "没有更多数据了~",
                        icon: "none"
                    });
                },
                methods: {
                    change_type: function(t) {
                        this.type = t, this.page = 1, this.dataList = [], this.is_loadmore = !0, this.getLst();
                    },
                    close: function() {
                        this.flg_id = 0;
                    },
                    open: function(t) {
                        this.flg_id = t;
                    },
                    toDetail: function(e) {
                        console.log(e.currentTarget.dataset.id), t.navigateTo({
                            url: "/gc_school/pages/article/detail?id=" + e.currentTarget.dataset.id
                        });
                    },
                    preview: function(e) {
                        t.previewImage({
                            current: e.currentTarget.dataset.img,
                            urls: e.currentTarget.dataset.list
                        });
                    },
                    getLst: function() {
                        var e = this, n = 1 == e.type ? 0 : 1;
                        a.globalData.util.request({
                            url: "ZhArticles/getMyArticle",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                page: e.page,
                                limit: 10,
                                status: n
                            },
                            success: function(t) {
                                console.log(t.data.data, 1213), console.log(t.data.data.list.length), t.data.data.list.length < 10 && e.setData({
                                    is_loadmore: !1
                                });
                                for (var a = 0; a < t.data.data.list.length; a++) e.dataList.push(t.data.data.list[a]), 
                                e.setData({
                                    dataList: e.dataList
                                });
                            }
                        }, !0);
                    },
                    del: function(e) {
                        var n = this;
                        console.log(e), t.showModal({
                            content: "确认删除该文章吗？",
                            success: function(o) {
                                o.confirm ? a.globalData.util.request({
                                    url: "ZhArticles/delete",
                                    data: {
                                        article_id: e.currentTarget.dataset.id,
                                        s_id: t.getStorageSync("schoolId")
                                    },
                                    success: function(e) {
                                        200 == e.data.status && (t.showToast({
                                            title: e.data.message
                                        }), setTimeout(function() {
                                            n.setData({
                                                page: 1,
                                                dataList: [],
                                                is_loadmore: !0
                                            }), n.getLst();
                                        }, 1e3));
                                    }
                                }, !0) : console.log("取消删除");
                            }
                        });
                    },
                    jump: function(e) {
                        console.log(e), t.navigateTo({
                            url: e.currentTarget.dataset.url
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, a("543d").default);
    },
    e430: function(t, e, a) {},
    edf4: function(t, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return i;
        }), a.d(e, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    ffd9: function(t, e, a) {
        a.r(e);
        var n = a("edf4"), o = a("16cc");
        for (var i in o) "default" !== i && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(i);
        a("a69c"), a("7e7f");
        var c = a("f0c5"), s = Object(c.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = s.exports;
    }
}, [ [ "8561", "common/runtime", "common/vendor" ] ] ]);