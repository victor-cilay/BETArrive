(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/address/addressPost" ], {
    3783: function(e, t, o) {
        var n = o("ced5");
        o.n(n).a;
    },
    "79ec": function(e, t, o) {
        (function(e) {
            function o(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), o.push.apply(o, n);
                }
                return o;
            }
            function n(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach(function(t) {
                        a(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function a(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = getApp(), i = {
                data: function() {
                    return {
                        options: {},
                        school: [],
                        form: {
                            id: "",
                            sex: 0,
                            addres: "",
                            name: "",
                            phone: ""
                        },
                        index: "",
                        address: {
                            location_y: "",
                            location_x: "",
                            address: ""
                        }
                    };
                },
                onLoad: function(e) {
                    this.getSchool(), this.setData({
                        options: e
                    }), e.id > 0 && this.getMyAddresInfo();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {},
                methods: {
                    PickerChange: function(e) {
                        console.log(e), this.setData({
                            index: e.detail.value
                        });
                    },
                    change: function(e) {
                        console.log(e);
                        var t = e.currentTarget.dataset.type, o = this.form;
                        o[t] = e.detail.value, this.setData({
                            form: n({}, o)
                        });
                    },
                    formSubmit: function(t) {
                        var o = this;
                        if (console.log("表单值", o.form), console.log("联系人", o.form.name), console.log("联系人", o.form.name.replace(/\s+/g, "")), 
                        !this.index) return r.globalData.util.message("请选择学校", "", "error"), !1;
                        if (!t.detail.value.addres || "" == o.form.addres.replace(/\s+/g, "")) return r.globalData.util.message("请输入具体地址", "", "error"), 
                        !1;
                        if (!t.detail.value.name || "" == o.form.name.replace(/\s+/g, "")) return r.globalData.util.message("请输入联系人", "", "error"), 
                        !1;
                        if (!/^1[3456789]\d{9}$/.test(t.detail.value.phone)) return r.globalData.util.message("手机号有误", "", "error"), 
                        !1;
                        r.globalData.util.request({
                            url: o.form.a_id ? "Address/update" : "Address/add",
                            data: n(n(n({}, o.form), t.detail.value), {}, {
                                s_id: o.school[o.index].s_id,
                                openid: e.getStorageSync("openid")
                            }),
                            success: function(t) {
                                e.navigateBack({});
                            }
                        }, !0);
                    },
                    SexChange: function(e) {
                        this.setData({
                            form: n(n({}, this.form), {}, {
                                sex: e.detail.value ? 0 : 1
                            })
                        });
                    },
                    ycf: function(e) {
                        console.log(e.detail.value), this.setData({
                            form: n(n({}, this.form), {}, {
                                sex: e.detail.value
                            })
                        }), console.log("form值", this.form);
                    },
                    getSchool: function() {
                        var e = this;
                        r.globalData.util.request({
                            url: "School/index",
                            data: {},
                            success: function(t) {
                                e.setData({
                                    school: t.data.data.list
                                }), e.school = t.data.data.list;
                            }
                        });
                    },
                    getMyAddresInfo: function() {
                        var e = this;
                        r.globalData.util.request({
                            url: "Address/view",
                            data: {
                                a_id: this.options.id
                            },
                            success: function(t) {
                                console.log(t);
                                for (var o = 0; o < e.school.length; o++) e.school[o].s_id == t.data.data.s_id && e.setData({
                                    index: String(o)
                                });
                                e.setData({
                                    form: t.data.data
                                });
                            }
                        }, !0);
                    }
                }
            };
            t.default = i;
        }).call(this, o("543d").default);
    },
    "92c5": function(e, t, o) {
        (function(e) {
            o("a8cf"), n(o("66fd"));
            var t = n(o("cd5d"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, e(t.default);
        }).call(this, o("543d").createPage);
    },
    "96c5": function(e, t, o) {
        o.r(t);
        var n = o("79ec"), a = o.n(n);
        for (var r in n) "default" !== r && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(r);
        t.default = a.a;
    },
    bb3d: function(e, t, o) {
        o.d(t, "b", function() {
            return a;
        }), o.d(t, "c", function() {
            return r;
        }), o.d(t, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return o.e("colorui/components/cu-custom").then(o.bind(null, "24dd"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    cd5d: function(e, t, o) {
        o.r(t);
        var n = o("bb3d"), a = o("96c5");
        for (var r in a) "default" !== r && function(e) {
            o.d(t, e, function() {
                return a[e];
            });
        }(r);
        o("3783");
        var i = o("f0c5"), c = Object(i.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = c.exports;
    },
    ced5: function(e, t, o) {}
}, [ [ "92c5", "common/runtime", "common/vendor" ] ] ]);