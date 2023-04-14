(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/lost/my" ], {
    "0419": function(t, e, a) {
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
                        cateList: [ {
                            name: "失物招领"
                        }, {
                            name: "寻物启事"
                        } ],
                        cate_index: 0,
                        dataList: [],
                        type: 1,
                        is_loadmore: !0,
                        page: 1,
                        img: ""
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
                    cateChange: function(t) {
                        this.setData({
                            cate_index: t.currentTarget.dataset.index,
                            type: t.currentTarget.dataset.index + 1,
                            page: 1,
                            is_loadmore: !0,
                            dataList: []
                        }), this.getLst();
                    },
                    toDetail: function(e) {
                        console.log(e.currentTarget.dataset.id), t.navigateTo({
                            url: "/gc_school/pages/lost/detail?id=" + e.currentTarget.dataset.id
                        });
                    },
                    preview: function(e) {
                        t.previewImage({
                            current: e.currentTarget.dataset.img,
                            urls: e.currentTarget.dataset.list
                        });
                    },
                    getLst: function() {
                        var e = this;
                        a.globalData.util.request({
                            url: "ZhInfo/getMyInformationList",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                page: e.page,
                                type: e.type,
                                limit: 10
                            },
                            success: function(t) {
                                console.log(t.data.data.list), t.data.data.list.length < 5 && e.setData({
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
                        console.log(e);
                        var n = this;
                        console.log(e.currentTarget.dataset.id), t.showModal({
                            content: "确认删除该条信息吗？",
                            success: function(o) {
                                o.confirm ? a.globalData.util.request({
                                    url: "ZhInfo/delete",
                                    data: {
                                        info_id: e.currentTarget.dataset.id,
                                        s_id: t.getStorageSync("schoolId")
                                    },
                                    success: function(e) {
                                        console.log(e), 200 == e.data.status && (t.showToast({
                                            title: e.data.message
                                        }), a.globalData.isload = !0, setTimeout(function() {
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
    "28f7": function(t, e, a) {
        a.r(e);
        var n = a("0419"), o = a.n(n);
        for (var i in n) "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = o.a;
    },
    "3c57": function(t, e, a) {
        var n = a("6a71");
        a.n(n).a;
    },
    "48bc": function(t, e, a) {
        (function(t) {
            a("a8cf"), n(a("66fd"));
            var e = n(a("a27d"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    },
    "6a71": function(t, e, a) {},
    a27d: function(t, e, a) {
        a.r(e);
        var n = a("de13"), o = a("28f7");
        for (var i in o) "default" !== i && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(i);
        a("3c57");
        var s = a("f0c5"), c = Object(s.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = c.exports;
    },
    de13: function(t, e, a) {
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
    }
}, [ [ "48bc", "common/runtime", "common/vendor" ] ] ]);