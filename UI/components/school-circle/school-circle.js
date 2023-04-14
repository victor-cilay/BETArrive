(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/school-circle/school-circle" ], {
    "0fc2": function(t, a, e) {
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var e = getApp(), o = {
                data: function() {
                    return {
                        dataList: [],
                        type: 0,
                        is_loadmore: !0,
                        page: 1,
                        authData: {
                            status: 0
                        }
                    };
                },
                created: function() {
                    this.getLst(), t.getStorageSync("token") && this.getAuth();
                },
                methods: {
                    changetype: function(t) {
                        this.setData({
                            type: t.currentTarget.dataset.type,
                            page: 1,
                            is_loadmore: !0,
                            dataList: []
                        }), this.getLst();
                    },
                    getLst: function(a) {
                        var o = this;
                        e.globalData.util.request({
                            url: "ZhArticles/index",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                type: o.type,
                                page: o.page
                            },
                            header: {
                                Authorization: t.getStorageSync("token")
                            },
                            success: function(t) {
                                console.log(t.data.data.list), t.data.data.list.length < 5 && o.setData({
                                    is_loadmore: !1
                                });
                                for (var a = 0; a < t.data.data.list.length; a++) o.dataList.push(t.data.data.list[a]), 
                                o.setData({
                                    dataList: o.dataList
                                });
                            }
                        });
                    },
                    toList: function(a, e, o, n, c) {
                        if (1 == a) var s = "/gc_school/pages/article/list?class_id=" + e + "&class_name=" + c; else s = "/gc_school/pages/article/detail?id=" + e;
                        console.log(c), n ? t.navigateTo({
                            url: n
                        }) : 0 == o ? t.navigateTo({
                            url: s
                        }) : 0 == this.authData.status ? t.showModal({
                            title: "温馨提示",
                            content: "本内容只对本校认证学生查看，请先认证！",
                            success: function(a) {
                                a.confirm ? t.navigateTo({
                                    url: "/gc_school/pages/user/student"
                                }) : console.log("取消删除");
                            }
                        }) : this.authData.data.s_id != t.getStorageSync("schoolId") ? t.showToast({
                            title: "您好，本内容只对本校认证学生查看，您暂无权限。",
                            icon: "none",
                            duration: 3e3
                        }) : 0 == this.authData.data.state ? t.showToast({
                            title: "请等待审核结果",
                            icon: "none",
                            duration: 3e3
                        }) : 2 == this.authData.data.state ? t.navigateTo({
                            url: "/gc_school/pages/user/student"
                        }) : t.navigateTo({
                            url: s
                        });
                    },
                    getAuth: function() {
                        var t = this;
                        e.globalData.util.request({
                            url: "RenIndex/student",
                            method: "POST",
                            data: {},
                            success: function(a) {
                                t.authData = a.data.data;
                            }
                        }, !0);
                    }
                }
            };
            a.default = o;
        }).call(this, e("543d").default);
    },
    3585: function(t, a, e) {
        e.d(a, "b", function() {
            return o;
        }), e.d(a, "c", function() {
            return n;
        }), e.d(a, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
    },
    "44e8": function(t, a, e) {},
    cd19: function(t, a, e) {
        e.r(a);
        var o = e("3585"), n = e("e8d2");
        for (var c in n) "default" !== c && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(c);
        e("f56a");
        var s = e("f0c5"), i = Object(s.a)(n.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        a.default = i.exports;
    },
    e8d2: function(t, a, e) {
        e.r(a);
        var o = e("0fc2"), n = e.n(o);
        for (var c in o) "default" !== c && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(c);
        a.default = n.a;
    },
    f56a: function(t, a, e) {
        var o = e("44e8");
        e.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/school-circle/school-circle-create-component", {
    "components/school-circle/school-circle-create-component": function(t, a, e) {
        e("543d").createComponent(e("cd19"));
    }
}, [ [ "components/school-circle/school-circle-create-component" ] ] ]);