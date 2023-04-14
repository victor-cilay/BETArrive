(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/lost/search" ], {
    1863: function(t, e, a) {
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
                        slideList: [],
                        freshen: !0,
                        kwd: "",
                        img: ""
                    };
                },
                onLoad: function(t) {},
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    this.is_loadmore ? (this.setData({
                        page: this.page + 1
                    }), this.search(this.kwd)) : t.showToast({
                        title: "没有更多数据了~",
                        icon: "none"
                    });
                },
                onShareAppMessage: function() {},
                methods: {
                    toDetail: function(e) {
                        console.log(e.currentTarget.dataset.id), t.navigateTo({
                            url: "/gc_school/pages/lost/detail?id=" + e.currentTarget.dataset.id
                        });
                    },
                    preview: function(e) {
                        this.setData({
                            freshen: !1
                        }), t.previewImage({
                            current: e.currentTarget.dataset.img,
                            urls: e.currentTarget.dataset.list
                        });
                    },
                    searchInput: function(t) {
                        var e = t.detail.value.replace(/\s+/g, "");
                        e ? (this.setData({
                            kwd: e,
                            page: 1,
                            dataList: [],
                            is_loadmore: !0
                        }), this.search(e)) : a.globalData.util.message("请输入物品", "", "error");
                    },
                    search: function(e) {
                        var n = this;
                        a.globalData.util.request({
                            url: "ZhInfo/searchInfo",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                kwd: e,
                                page: n.page
                            },
                            success: function(t) {
                                console.log(t.data.data), t.data.data.list.length < 5 && n.setData({
                                    is_loadmore: !1
                                });
                                for (var e = 0; e < t.data.data.list.length; e++) n.dataList.push(t.data.data.list[e]), 
                                n.setData({
                                    dataList: n.dataList
                                });
                            }
                        }, !0);
                    },
                    upload: function() {
                        var e = this;
                        t.chooseMedia({
                            success: function(t) {
                                console.log(t), console.log(t.type), console.log(t.tempFiles[0].tempFilePath), e.setData({
                                    url: t.tempFiles[0].tempFilePath
                                });
                            }
                        });
                    },
                    play: function() {
                        console.log("占位：函数 play 未声明");
                    }
                }
            };
            e.default = n;
        }).call(this, a("543d").default);
    },
    "3a86": function(t, e, a) {
        a.r(e);
        var n = a("b12f"), o = a("eb67");
        for (var i in o) "default" !== i && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(i);
        a("73a9");
        var s = a("f0c5"), c = Object(s.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = c.exports;
    },
    "72ba": function(t, e, a) {},
    "73a9": function(t, e, a) {
        var n = a("72ba");
        a.n(n).a;
    },
    "786c": function(t, e, a) {
        (function(t) {
            a("a8cf"), n(a("66fd"));
            var e = n(a("3a86"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    },
    b12f: function(t, e, a) {
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
    eb67: function(t, e, a) {
        a.r(e);
        var n = a("1863"), o = a.n(n);
        for (var i in n) "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = o.a;
    }
}, [ [ "786c", "common/runtime", "common/vendor" ] ] ]);