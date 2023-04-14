(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/school-circle-hot/school-circle-hot" ], {
    "160f": function(t, o, a) {
        (function(t) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var a = getApp(), e = {
                data: function() {
                    return {
                        sys: {},
                        schoolInfo: {},
                        authData: {
                            status: 0
                        }
                    };
                },
                props: {
                    schoolInfo: {
                        type: [ Object, Array, String ],
                        default: function() {
                            return {};
                        }
                    }
                },
                created: function() {
                    t.getStorageSync("token") && this.getAuth();
                },
                methods: {
                    toList: function(o, a, e, n, c) {
                        var s = "/gc_school/pages/article/list?class_id=" + a + "&class_name=" + c;
                        n ? t.navigateTo({
                            url: n
                        }) : 0 == e ? t.navigateTo({
                            url: s
                        }) : 0 == this.authData.status ? t.showModal({
                            title: "温馨提示",
                            content: "本内容只对本校认证学生查看，请先认证！",
                            success: function(o) {
                                o.confirm ? t.navigateTo({
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
                    goQuan: function() {
                        t.redirectTo({
                            url: "/gc_school/pages/article/index"
                        });
                    },
                    getAuth: function() {
                        var t = this;
                        a.globalData.util.request({
                            url: "RenIndex/student",
                            method: "POST",
                            data: {},
                            success: function(o) {
                                t.authData = o.data.data;
                            }
                        }, !0);
                    }
                }
            };
            o.default = e;
        }).call(this, a("543d").default);
    },
    "4a3c": function(t, o, a) {
        a.r(o);
        var e = a("4dca"), n = a("9128");
        for (var c in n) "default" !== c && function(t) {
            a.d(o, t, function() {
                return n[t];
            });
        }(c);
        var s = a("f0c5"), u = Object(s.a)(n.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        o.default = u.exports;
    },
    "4dca": function(t, o, a) {
        a.d(o, "b", function() {
            return e;
        }), a.d(o, "c", function() {
            return n;
        }), a.d(o, "a", function() {});
        var e = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
    },
    9128: function(t, o, a) {
        a.r(o);
        var e = a("160f"), n = a.n(e);
        for (var c in e) "default" !== c && function(t) {
            a.d(o, t, function() {
                return e[t];
            });
        }(c);
        o.default = n.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/school-circle-hot/school-circle-hot-create-component", {
    "components/school-circle-hot/school-circle-hot-create-component": function(t, o, a) {
        a("543d").createComponent(a("4a3c"));
    }
}, [ [ "components/school-circle-hot/school-circle-hot-create-component" ] ] ]);