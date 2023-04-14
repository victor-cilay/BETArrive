(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/shop/cate" ], {
    2733: function(t, e, a) {
        a.r(e);
        var o = a("ce2e"), n = a.n(o);
        for (var s in o) "default" !== s && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = n.a;
    },
    "4a95": function(t, e, a) {
        var o = a("bd19");
        a.n(o).a;
    },
    7136: function(t, e, a) {
        (function(t) {
            a("a8cf"), o(a("66fd"));
            var e = o(a("e55a"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    },
    bd19: function(t, e, a) {},
    ce2e: function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = getApp(), o = {
                data: function() {
                    return {
                        cate: [],
                        modal_show: !1,
                        id: 0,
                        type: 0,
                        name: ""
                    };
                },
                onLoad: function(t) {
                    this.getCate();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: {
                    getCate: function() {
                        var e = this;
                        a.globalData.util.request({
                            url: "ZhGoodsType/index",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                e.setData({
                                    cate: t.data.data.list
                                });
                            }
                        }, !0);
                    },
                    add: function(t) {
                        this.setData({
                            type: t.currentTarget.dataset.type,
                            modal_show: !0
                        });
                    },
                    edit: function(e) {
                        var o = this;
                        console.log(e.currentTarget.dataset), this.setData({
                            id: e.currentTarget.dataset.id,
                            type: e.currentTarget.dataset.type
                        }), a.globalData.util.request({
                            url: "ZhGoodsType/view",
                            method: "GET",
                            data: {
                                goods_type_id: e.currentTarget.dataset.id,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                o.setData({
                                    modal_show: !0,
                                    name: t.data.data.goods_type_name
                                });
                            }
                        }, !0);
                    },
                    del: function(e) {
                        var o = this;
                        t.showModal({
                            title: "温馨提示",
                            content: "确认删除该分类吗？",
                            success: function(n) {
                                n.confirm && a.globalData.util.request({
                                    url: "ZhGoodsType/delete",
                                    data: {
                                        goods_type_id: e.currentTarget.dataset.id,
                                        s_id: t.getStorageSync("schoolId")
                                    },
                                    success: function(e) {
                                        t.showToast({
                                            title: "删除成功"
                                        }), setTimeout(function() {
                                            o.getCate();
                                        }, 1e3);
                                    }
                                }, !0);
                            }
                        });
                    },
                    submit: function() {
                        var e = this;
                        if (!e.name) return a.globalData.util.message("请输入名称", "", "error"), !1;
                        2 == e.type ? a.globalData.util.request({
                            url: "ZhGoodsType/add",
                            data: {
                                goods_type_name: e.name,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(a) {
                                200 == a.data.status && (t.showToast({
                                    title: "操作成功"
                                }), e.setData({
                                    modal_show: !1,
                                    name: ""
                                }), e.getCate());
                            }
                        }, !0) : 1 == e.type && a.globalData.util.request({
                            url: "ZhGoodsType/update",
                            data: {
                                goods_type_name: e.name,
                                s_id: t.getStorageSync("schoolId"),
                                goods_type_id: e.id
                            },
                            success: function(a) {
                                200 == a.data.status && (t.showToast({
                                    title: "操作成功"
                                }), e.setData({
                                    modal_show: !1,
                                    name: ""
                                }), e.getCate());
                            }
                        }, !0);
                    },
                    close: function() {
                        this.setData({
                            modal_show: !1,
                            id: 0
                        });
                    },
                    getName: function(t) {
                        this.setData({
                            name: t.detail.value.replace(/\s+/g, "")
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, a("543d").default);
    },
    e55a: function(t, e, a) {
        a.r(e);
        var o = a("faef"), n = a("2733");
        for (var s in n) "default" !== s && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(s);
        a("4a95");
        var u = a("f0c5"), c = Object(u.a)(n.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = c.exports;
    },
    faef: function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return s;
        }), a.d(e, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, n = function() {
            this.$createElement;
            this._self._c;
        }, s = [];
    }
}, [ [ "7136", "common/runtime", "common/vendor" ] ] ]);