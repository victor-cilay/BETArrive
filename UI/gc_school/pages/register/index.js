(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/register/index" ], {
    "007f": function(e, t, a) {
        var n = a("acb5");
        a.n(n).a;
    },
    "0dba": function(e, t, a) {
        (function(e) {
            a("a8cf"), n(a("66fd"));
            var t = n(a("bce5"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, e(t.default);
        }).call(this, a("543d").createPage);
    },
    "307c": function(e, t, a) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, function(e) {
                e && e.__esModule;
            }(a("dabe"));
            var n = getApp(), o = {
                data: function() {
                    return {
                        numList: [ {
                            name: "第一步",
                            id: "1"
                        }, {
                            name: "第二步",
                            id: "2"
                        }, {
                            name: "第三步",
                            id: "3"
                        }, {
                            name: "完成",
                            id: "4"
                        } ],
                        num: 0,
                        err: "",
                        card_pic: [],
                        sindex: 0,
                        t_pic: [],
                        student_pic: [],
                        imgList: [],
                        imgList1: [],
                        phone: "",
                        gender: [ {
                            name: "男",
                            id: "1"
                        }, {
                            name: "女",
                            id: "2"
                        } ],
                        gender_index: 0,
                        check: !1,
                        is_show: 0,
                        code: "",
                        changeSexs: "",
                        t_sex: "",
                        school: {
                            s_name: !1
                        },
                        sysparment: "",
                        userInfo: {}
                    };
                },
                onLoad: function(t) {
                    var a = this;
                    this.getData(), e.login({
                        success: function(e) {
                            a.setData({
                                code: e.code
                            });
                        }
                    });
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: {
                    change: function(e) {
                        this.setData({
                            t_name: e.detail.value
                        });
                    },
                    agreelink: function() {
                        e.navigateTo({
                            url: "/gc_school/pages/privacy/index"
                        });
                    },
                    agree: function() {
                        var e = this.changeSexs;
                        this.setData({
                            changeSexs: 0 == e
                        });
                    },
                    getPhoneNumber: function(t) {
                        var a = this;
                        e.login({
                            success: function(e) {
                                n.globalData.util.request({
                                    url: "RenIndex/getPhone",
                                    data: {
                                        code: e.code,
                                        iv: t.detail.iv,
                                        encryptedData: t.detail.encryptedData
                                    },
                                    success: function(e) {
                                        console.log(e.data.data.phoneNumber), a.phone = e.data.data.phoneNumber;
                                    }
                                });
                            }
                        });
                    },
                    bindSexChange: function(e) {
                        console.log(e), this.setData({
                            gender_index: e.detail.value,
                            t_sex: this.gender[e.detail.value].id
                        });
                    },
                    formSubmit: function(t) {
                        return console.log(t), t.detail.value.t_name ? this.school[this.sindex].s_id ? this.check ? void n.globalData.util.request({
                            url: "WechatUser/update",
                            data: {
                                t_name: this.t_name,
                                t_sex: this.t_sex,
                                auth_sid: this.school[this.sindex].s_id,
                                phone: this.phone,
                                run_status: 1
                            },
                            success: function(t) {
                                e.navigateBack({});
                            }
                        }, !0) : (n.globalData.util.message("请先勾选协议", "", "error"), !1) : (n.globalData.util.message("请选择区域", "", "error"), 
                        !1) : (n.globalData.util.message("请输入姓名", "", "error"), !1);
                    },
                    sexChange: function(e) {
                        this.setData({
                            t_sex: e.detail.value
                        });
                    },
                    checkagree: function() {
                        this.setData({
                            check: !this.check
                        });
                    },
                    PickerChange: function(e) {
                        console.log(e), this.setData({
                            sindex: e.detail.value
                        });
                    },
                    getData: function() {
                        var e = this;
                        n.globalData.util.request({
                            url: "WechatUser/view",
                            data: {},
                            success: function(t) {
                                e.gender_index = t.data.data.t_sex ? t.data.data.t_sex - 1 : 0, e.t_sex = t.data.data.t_sex ? t.data.data.t_sex : 1, 
                                e.userInfo = t.data.data, e.setData({
                                    t_name: t.data.data.t_name,
                                    phone: t.data.data.phone
                                }), e.getSchool();
                            }
                        }, !0);
                    },
                    getSchool: function() {
                        var e = this;
                        n.globalData.util.request({
                            url: "School/index",
                            data: {},
                            success: function(t) {
                                if (e.setData({
                                    school: t.data.data.list,
                                    index: 0
                                }), e.userInfo.auth_sid && 0 != e.userInfo.auth_sid || !e.userInfo.s_id) for (a = 0; a < e.school.length; a++) e.school[a].s_id == e.userInfo.auth_sid && e.setData({
                                    sindex: a
                                }); else for (var a = 0; a < t.data.data.list.length; a++) e.userInfo.s_id == t.data.data.list[a].s_id && (e.sindex = a);
                            }
                        });
                    }
                }
            };
            t.default = o;
        }).call(this, a("543d").default);
    },
    5106: function(e, t, a) {
        a.d(t, "b", function() {
            return o;
        }), a.d(t, "c", function() {
            return i;
        }), a.d(t, "a", function() {
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
    acb5: function(e, t, a) {},
    bce5: function(e, t, a) {
        a.r(t);
        var n = a("5106"), o = a("c1c8");
        for (var i in o) "default" !== i && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(i);
        a("007f");
        var s = a("f0c5"), c = Object(s.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = c.exports;
    },
    c1c8: function(e, t, a) {
        a.r(t);
        var n = a("307c"), o = a.n(n);
        for (var i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = o.a;
    }
}, [ [ "0dba", "common/runtime", "common/vendor" ] ] ]);