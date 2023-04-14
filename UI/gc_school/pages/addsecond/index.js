(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/addsecond/index" ], {
    "044f": function(e, t, a) {
        a.r(t);
        var n = a("2fa8"), o = a("c50e");
        for (var i in o) "default" !== i && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(i);
        a("e679");
        var c = a("f0c5"), s = Object(c.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = s.exports;
    },
    "0728": function(e, t, a) {
        a.r(t);
        var n = a("e22e"), o = a.n(n);
        for (var i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = o.a;
    },
    "2fa8": function(e, t, a) {
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return o;
        }), a.d(t, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "51e2": function(e, t, a) {},
    "8d77": function(e, t, a) {
        a.r(t);
        var n = a("c98a"), o = a("0728");
        for (var i in o) "default" !== i && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(i);
        a("d43b");
        var c = a("f0c5"), s = Object(c.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = s.exports;
    },
    b31c: function(e, t, a) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                data: function() {
                    return {};
                },
                props: {
                    count: {
                        type: Number,
                        default: 3,
                        observers: function(e, t) {}
                    },
                    images: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    addedCount: {
                        type: Number,
                        default: 0,
                        observers: function(e, t) {
                            console.log("--new--".newVal, "--old--", t);
                        }
                    },
                    currentIndex: {
                        type: Number,
                        default: 0
                    }
                },
                methods: {
                    chooseImage: function() {
                        this.$emit("chooseImage");
                    },
                    previewImage: function(t) {
                        e.previewImage({
                            urls: this.images,
                            current: this.images[t.currentTarget.dataset.index]
                        });
                    },
                    deleteImage: function(e) {
                        this.$emit("deleteImage", {
                            detail: e.currentTarget.dataset.index
                        });
                    }
                }
            };
            t.default = a;
        }).call(this, a("543d").default);
    },
    c50e: function(e, t, a) {
        a.r(t);
        var n = a("b31c"), o = a.n(n);
        for (var i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = o.a;
    },
    c98a: function(e, t, a) {
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
    d15e: function(e, t, a) {
        (function(e) {
            a("a8cf"), n(a("66fd"));
            var t = n(a("8d77"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, e(t.default);
        }).call(this, a("543d").createPage);
    },
    d43b: function(e, t, a) {
        var n = a("51e2");
        a.n(n).a;
    },
    e22e: function(e, t, a) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = i(a("044f")), o = i(a("a151"));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e;
            }
            var s = getApp(), u = {
                components: {
                    addImage: n.default
                },
                data: function() {
                    var e;
                    return c(e = {
                        img_url: [],
                        count: 4,
                        canphoto: 4,
                        imgurl: [],
                        name: "",
                        newprice: "",
                        oldprice: "",
                        names: "",
                        desc: "",
                        phone: "",
                        stock: 0,
                        array: [ "全新", "9成新", "8成新", "7成新", "6成新", "5成新以下" ],
                        index: 0,
                        cateList: [],
                        indexs: 0,
                        images: []
                    }, "count", 3), c(e, "addedCount", 0), c(e, "picList", []), c(e, "sys", {}), c(e, "is_click", !0), 
                    c(e, "hideAdd", 0), c(e, "modalName", ""), e;
                },
                onLoad: function(e) {
                    this.getCate();
                    var t = this;
                    s.globalData.util.request({
                        url: "Setting/view",
                        data: {},
                        success: function(e) {
                            console.log("获取配置", e.data.data), t.setData({
                                sys: e.data.data.sys
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
                    getCate: function() {
                        var t = this;
                        s.globalData.util.request({
                            url: "Dmhmarketcategory/index",
                            data: {
                                s_id: e.getStorageSync("schoolId")
                            },
                            success: function(e) {
                                console.log(e.data.data), t.setData({
                                    cateList: e.data.data.list
                                });
                            }
                        });
                    },
                    bindPickerChange: function(e) {
                        this.setData({
                            index: e.detail.value
                        });
                    },
                    bindPickerChanges: function(e) {
                        this.setData({
                            indexs: e.detail.value
                        });
                    },
                    chooseImages: function() {
                        console.log("执行几级");
                        var t = this;
                        e.chooseImage({
                            count: 3 - t.addedCount,
                            sizeType: [ "compressed" ],
                            sourceType: [ "album", "camera" ],
                            success: function(e) {
                                t.uploadimg({
                                    path: e.tempFilePaths
                                });
                            }
                        });
                    },
                    uploadimg: function(t) {
                        e.showLoading({
                            title: "上传中...",
                            mask: !0
                        }), console.log("上传中");
                        for (var a = this, n = a.addedCount, i = 0; i < t.path.length; i++) e.uploadFile({
                            url: o.default.url + "Base/upload",
                            filePath: t.path[i],
                            header: {
                                Authorization: e.getStorageSync("token")
                            },
                            name: "file",
                            formData: {
                                wxapp_id: o.default.uniacid
                            },
                            success: function(t) {
                                var o = JSON.parse(t.data);
                                if (console.log("111"), console.log(o.status, "---11---"), 200 == o.status) {
                                    n++, console.log("222");
                                    var i = a.picList;
                                    i.push(o.data);
                                    var c = a.images.concat(o.data);
                                    console.log("333"), a.setData({
                                        images: c,
                                        addedCount: n,
                                        picList: i
                                    }), console.log(a.addedCount), console.log("444"), n == a.picList.length && (console.log("555"), 
                                    e.hideLoading({}));
                                } else e.showToast({
                                    title: o.message,
                                    icon: "none"
                                });
                            }
                        });
                    },
                    deleteImage: function(e) {
                        this.images.splice(e.detail, 1), this.picList.splice(e.detail, 1), this.setData({
                            images: this.images,
                            picList: this.picList,
                            addedCount: this.addedCount - 1
                        }), console.log("删除后的", this.picList);
                    },
                    upload: function() {
                        var t = this, a = this.img_url;
                        console.log(a), e.showLoading();
                        for (var n = 0; n < a.length; n++) e.uploadFile({
                            url: s.globalData.util.url() + "c=entry&a=wxapp&do=ImgPost&m=gc_school",
                            filePath: a[n],
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            name: "file",
                            success: function(a) {
                                var n = a.data;
                                n = JSON.parse(n).data, t.imgurl.push(n), console.log(t.imgurl), e.hideLoading();
                            }
                        });
                    },
                    save: function() {
                        var t = this;
                        if (console.log("长度", t.picList.length), t.newprice <= 0) return s.globalData.util.message("现价必须大于0", "", "error"), 
                        !1;
                        if (t.cateList.length <= 0) return s.globalData.util.message("请选择分类", "", "error"), 
                        !1;
                        if ("" == t.name || "" == t.oldprice || "" == t.newprice || "" == t.desc || "" == t.phone) return s.globalData.util.message("不能有空值", "", "error"), 
                        !1;
                        if (console.log("库存", t.stock), t.stock <= 0) return s.globalData.util.message("请填写库存", "", "error"), 
                        !1;
                        if (0 == t.picList.length) return s.globalData.util.message("请上传图片", "", "error"), 
                        !1;
                        if (!/^1[3456789]\d{9}$/.test(t.phone)) return s.globalData.util.message("手机号码格式有误", "", "error"), 
                        !1;
                        e.showModal({
                            title: "提示",
                            content: "允许接收订阅消息",
                            success: function(a) {
                                a.confirm && e.requestSubscribeMessage({
                                    tmplIds: [ e.getStorageSync("sys").template_pay, e.getStorageSync("sys").template_notice ],
                                    success: function(e) {
                                        console.log("已授权接收订阅消息");
                                    },
                                    complete: function(a) {
                                        t.is_click ? (t.setData({
                                            is_click: !1
                                        }), s.globalData.util.request({
                                            url: "Dmhmarketgoods/add",
                                            method: "POST",
                                            data: {
                                                name: t.name,
                                                phone: t.phone,
                                                stock: t.stock,
                                                oldprice: t.oldprice,
                                                newprice: t.newprice,
                                                content: t.desc,
                                                degree: t.array[t.index],
                                                cate_id: t.cateList[t.indexs].id,
                                                img: t.picList.join(","),
                                                image: t.picList[0],
                                                s_id: e.getStorageSync("schoolId")
                                            },
                                            success: function(t) {
                                                console.log(t.data.data), e.redirectTo({
                                                    url: "/gc_school/pages/secondhand/my"
                                                });
                                            },
                                            complete: function() {
                                                t.setData({
                                                    is_click: !0
                                                });
                                            }
                                        }, !0)) : e.showToast({
                                            title: "请勿重复点击",
                                            icon: "none"
                                        });
                                    }
                                });
                            }
                        });
                    },
                    bookNameInput: function(e) {
                        this.setData({
                            name: e.detail.value
                        });
                    },
                    oldpriceInput: function(e) {
                        var t = this;
                        e.target.value = e.target.value.match(/^\d*(\.?\d{0,2})/g)[0] || null, this.$nextTick(function() {
                            t.setData({
                                oldprice: e.target.value
                            });
                        });
                    },
                    newpriceInput: function(e) {
                        var t = this;
                        e.target.value = e.target.value.match(/^\d*(\.?\d{0,2})/g)[0] || null, this.$nextTick(function() {
                            t.setData({
                                newprice: e.target.value
                            });
                        });
                    },
                    phoneFun: function(e) {
                        this.setData({
                            phone: e.detail.value
                        });
                    },
                    nameFun: function(e) {
                        this.setData({
                            names: e.detail.value
                        });
                    },
                    stockFun: function(e) {
                        this.setData({
                            stock: e.detail.value
                        });
                    },
                    descInput: function(e) {
                        this.setData({
                            desc: e.detail.value
                        });
                    },
                    chooseimage: function() {
                        var t = this;
                        this.setData({
                            imgurl: []
                        }), e.chooseImage({
                            count: t.canphoto,
                            sizeType: [ "original", "compressed" ],
                            sourceType: [ "album", "camera" ],
                            success: function(a) {
                                if (a.tempFilePaths, a.tempFilePaths.length > 0) {
                                    var n = t.img_url;
                                    n = n.concat(a.tempFilePaths), t.setData({
                                        img_url: n,
                                        canphoto: t.canphoto - a.tempFilePaths.length
                                    }), t.img_url.length >= t.count ? (t.setData({
                                        hideAdd: 1
                                    }), e.showToast({
                                        title: "最多上传4张照片",
                                        icon: "none"
                                    })) : t.setData({
                                        hideAdd: 0
                                    }), t.upload(t.img_url);
                                }
                            }
                        });
                    },
                    deleteImg: function(e) {
                        var t = this.img_url, a = e.target.dataset.index;
                        t.splice(a, 1), this.setData({
                            img_url: t,
                            hideAdd: !(this.img_url.length < this.count)
                        });
                    }
                }
            };
            t.default = u;
        }).call(this, a("543d").default);
    },
    e679: function(e, t, a) {
        var n = a("f38f");
        a.n(n).a;
    },
    f38f: function(e, t, a) {}
}, [ [ "d15e", "common/runtime", "common/vendor" ] ] ]);