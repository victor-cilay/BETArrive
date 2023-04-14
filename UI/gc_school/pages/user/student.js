(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/user/student" ], {
    "0b39": function(t, a, e) {
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("a151"));
            var s = getApp(), o = {
                data: function() {
                    return {
                        setting: [],
                        images: "",
                        count: 1,
                        counts: 1,
                        name: "",
                        phone: "",
                        remarks: "",
                        student: "",
                        reason: "",
                        state: "",
                        dmhimage: "http://test.fkynet.net/static/img/certificates.png",
                        dmgexplain: "",
                        studentdmh: "",
                        sys: ""
                    };
                },
                onLoad: function(t) {
                    this.init(), this.datas(), this.settings(), console.log("---");
                },
                methods: {
                    settings: function() {
                        var t = this;
                        s.globalData.util.request({
                            url: "Setting/view",
                            success: function(a) {
                                t.setData({
                                    sys: a.data.data.sys,
                                    dmhimage: a.data.data.sys.dmhimage,
                                    dmgexplain: a.data.data.sys.dmgexplain,
                                    studentdmh: a.data.data.sys.studentdmh
                                });
                            }
                        }, !0);
                    },
                    datas: function() {
                        var a = this;
                        s.globalData.util.request({
                            url: "Dmhstudent/datas",
                            method: "POST",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                200 == t.data.status && (a.name = t.data.data.name, a.phone = t.data.data.phone, 
                                a.remarks = t.data.data.remarks, a.student = t.data.data.student, a.images = t.data.data.images, 
                                a.reason = t.data.data.reason, a.state = t.data.data.state);
                            }
                        }, !0);
                    },
                    sub: function() {
                        s.globalData.util.request({
                            url: "Dmhstudent/add",
                            method: "POST",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                name: this.name,
                                phone: this.phone,
                                remarks: this.remarks,
                                student: this.student,
                                images: this.images
                            },
                            success: function(a) {
                                a.data.status ? t.navigateBack({
                                    delta: 1
                                }) : t.showToast({
                                    title: a.data.msg,
                                    duration: 2e3
                                });
                            }
                        }, !0);
                    },
                    init: function() {
                        var a = this;
                        s.globalData.util.request({
                            url: "Setting/view",
                            method: "POST",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                a.setting = a.escape2Html(t.data.data.sys.explains);
                            }
                        }, !0);
                    },
                    chooseImagesss: function() {
                        console.log("执行几级");
                        var a = this;
                        t.chooseImage({
                            counts: 1,
                            sizeType: [ "compressed" ],
                            sourceType: [ "album", "camera" ],
                            success: function(t) {
                                a.uploadimgs({
                                    path: t.tempFilePaths
                                });
                            }
                        });
                    },
                    uploadimgs: function(a) {
                        t.showLoading({
                            title: "上传中...",
                            mask: !0
                        }), console.log("上传中");
                        for (var e = this, s = (e.addedCountss, 0); s < a.path.length; s++) t.uploadFile({
                            url: n.default.url + "Base/upload",
                            filePath: a.path[s],
                            header: {
                                Authorization: t.getStorageSync("token")
                            },
                            name: "file",
                            formData: {
                                wxapp_id: n.default.uniacid
                            },
                            success: function(a) {
                                var n = JSON.parse(a.data);
                                console.log("111"), console.log(n.status, "---11---"), 200 == n.status ? (console.log("222"), 
                                console.log("333"), e.setData({
                                    images: n.data
                                }), console.log(e.addedCount), console.log("444"), t.hideLoading({})) : t.showToast({
                                    title: n.message,
                                    icon: "none"
                                });
                            }
                        });
                    }
                }
            };
            a.default = o;
        }).call(this, e("543d").default);
    },
    1079: function(t, a, e) {
        e.r(a);
        var n = e("0b39"), s = e.n(n);
        for (var o in n) "default" !== o && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(o);
        a.default = s.a;
    },
    3427: function(t, a, e) {
        e.r(a);
        var n = e("4f6e"), s = e("1079");
        for (var o in s) "default" !== o && function(t) {
            e.d(a, t, function() {
                return s[t];
            });
        }(o);
        e("777e");
        var u = e("f0c5"), d = Object(u.a)(s.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = d.exports;
    },
    "378a": function(t, a, e) {},
    "4f6e": function(t, a, e) {
        e.d(a, "b", function() {
            return s;
        }), e.d(a, "c", function() {
            return o;
        }), e.d(a, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            },
            mpHtml: function() {
                return Promise.all([ e.e("common/vendor"), e.e("uni_modules/mp-html/components/mp-html/mp-html") ]).then(e.bind(null, "e4b7"));
            }
        }, s = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    5049: function(t, a, e) {
        (function(t) {
            e("a8cf"), n(e("66fd"));
            var a = n(e("3427"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(a.default);
        }).call(this, e("543d").createPage);
    },
    "777e": function(t, a, e) {
        var n = e("378a");
        e.n(n).a;
    }
}, [ [ "5049", "common/runtime", "common/vendor" ] ] ]);