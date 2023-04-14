(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/user/userinfo" ], {
    "017e": function(t, a, e) {
        e.r(a);
        var n = e("c32d"), o = e("32ce");
        for (var u in o) "default" !== u && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(u);
        e("d6d7");
        var s = e("f0c5"), i = Object(s.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = i.exports;
    },
    "32ce": function(t, a, e) {
        e.r(a);
        var n = e("3b04"), o = e.n(n);
        for (var u in n) "default" !== u && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(u);
        a.default = o.a;
    },
    3968: function(t, a, e) {},
    "3b04": function(t, a, e) {
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("a151"));
            var o = getApp(), u = {
                data: function() {
                    return {
                        avatar: "",
                        nickname: "",
                        student: -1,
                        sys: ""
                    };
                },
                onLoad: function() {
                    this.getUser(), this.setting();
                },
                onShow: function() {
                    this.getstudent();
                },
                methods: {
                    setting: function() {
                        var t = this;
                        o.globalData.util.request({
                            url: "Setting/view",
                            success: function(a) {
                                t.setData({
                                    sys: a.data.data.sys
                                });
                            }
                        }, !0);
                    },
                    tiao: function() {
                        t.navigateTo({
                            url: "/gc_school/pages/user/student"
                        });
                    },
                    getstudent: function() {
                        var t = this;
                        o.globalData.util.request({
                            url: "Dmhstudent/views",
                            success: function(a) {
                                t.setData({
                                    student: a.data.data.state
                                });
                            }
                        }, !0);
                    },
                    getUser: function() {
                        var a = this;
                        o.globalData.util.request({
                            url: "WechatUser/view",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                a.nickname = t.data.data.nickname, a.avatar = t.data.data.avatar;
                            }
                        }, !0);
                    },
                    choose: function() {
                        var a = this;
                        t.chooseImage({
                            count: 1,
                            sizeType: [ "original", "compressed" ],
                            sourceType: [ "album" ],
                            success: function(e) {
                                console.log("path", e), t.showLoading({
                                    title: "上传中...",
                                    mask: !0
                                }), t.uploadFile({
                                    url: n.default.url + "Base/upload",
                                    filePath: e.tempFilePaths[0],
                                    formData: {
                                        wxapp_id: n.default.uniacid
                                    },
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    name: "file",
                                    success: function(e) {
                                        var n = JSON.parse(e.data);
                                        200 == n.status ? (a.avatar = n.data, t.hideLoading()) : t.showToast({
                                            title: n.msg,
                                            icon: "none"
                                        });
                                    }
                                });
                            }
                        });
                    },
                    submit: function() {
                        "" != this.nickname.replace(/[, ]/g, "") ? "" != this.avatar ? o.globalData.util.request({
                            url: "WechatUser/edit",
                            data: {
                                avatar: this.avatar,
                                nickname: this.nickname
                            },
                            success: function(a) {
                                200 == a.data.status && (t.showToast({
                                    title: a.data.msg
                                }), setTimeout(function() {
                                    t.navigateBack({
                                        delta: 1
                                    });
                                }, 1e3)), console.log(a);
                            }
                        }, !0) : t.showToast({
                            title: "请上传头像",
                            icon: "none"
                        }) : t.showToast({
                            title: "昵称不能为空",
                            icon: "none"
                        });
                    }
                }
            };
            a.default = u;
        }).call(this, e("543d").default);
    },
    c32d: function(t, a, e) {
        e.d(a, "b", function() {
            return o;
        }), e.d(a, "c", function() {
            return u;
        }), e.d(a, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    d6d7: function(t, a, e) {
        var n = e("3968");
        e.n(n).a;
    },
    e597: function(t, a, e) {
        (function(t) {
            e("a8cf"), n(e("66fd"));
            var a = n(e("017e"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(a.default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "e597", "common/runtime", "common/vendor" ] ] ]);