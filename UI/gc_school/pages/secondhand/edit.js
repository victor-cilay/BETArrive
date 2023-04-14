(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/secondhand/edit" ], {
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
    "13f7": function(e, t, a) {
        (function(e) {
            a("a8cf"), n(a("66fd"));
            var t = n(a("e6ce"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, e(t.default);
        }).call(this, a("543d").createPage);
    },
    "14f5": function(e, t, a) {
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
    "506a": function(e, t, a) {
        a.r(t);
        var n = a("635d"), o = a.n(n);
        for (var i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = o.a;
    },
    "635d": function(e, t, a) {
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
            var s = getApp(), l = {
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
                        desc: "",
                        phone: "",
                        array: [ "全新", "9成新", "8成新", "7成新", "6成新", "5成新以下" ],
                        index: 0,
                        cateList: [],
                        indexs: 0,
                        images: []
                    }, "count", 3), c(e, "addedCount", 0), c(e, "picList", []), c(e, "stock", ""), c(e, "sys", {}), 
                    c(e, "id", ""), c(e, "data", {
                        name: "",
                        oldprice: "",
                        price: "",
                        phone: "",
                        stock: "",
                        content: ""
                    }), c(e, "hideAdd", 0), c(e, "modalName", ""), e;
                },
                onLoad: function(t) {
                    console.log(t), this.getCate(), this.getDetail(t.id), this.setData({
                        id: t.id
                    }), e.getStorageSync("phone") && this.setData({
                        phone: e.getStorageSync("phone")
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
                    getDetail: function(e) {
                        var t = this;
                        s.globalData.util.request({
                            url: "Dmhmarketgoods/view",
                            data: {
                                m_id: e
                            },
                            success: function(e) {
                                console.log(e.data.data, "---111---");
                                for (var a = 0; a < t.array.length; a++) t.array[a] == e.data.data.degree && t.setData({
                                    index: a
                                });
                                for (a = 0; a < t.cateList.length; a++) t.cateList[a].id == e.data.data.cid && t.setData({
                                    indexs: a
                                });
                                t.setData({
                                    data: e.data.data,
                                    images: e.data.data.rotation,
                                    picList: e.data.data.rotation,
                                    addedCount: e.data.data.rotation.length
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
                                console.log("---111---调用了----"), t.uploadimg({
                                    path: e.tempFilePaths
                                });
                            }
                        });
                    },
                    uploadimg: function(t) {
                        e.showLoading({
                            title: "上传中...",
                            mask: !0
                        }), console.log("上传中-------------");
                        for (var a = this, n = a.addedCount, i = 0; i < t.path.length; i++) console.log("上传了" + i + "次图片"), 
                        e.uploadFile({
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
                                if (console.log("-----pic----", o), console.log(o.status, "---11---"), 200 == o.status) {
                                    n++, console.log("222", a.picList), a.picList;
                                    var i = a.images.concat(o.data);
                                    console.log("333", i), a.setData({
                                        images: i,
                                        addedCount: n,
                                        picList: i
                                    }), console.log(a.addedCount), console.log("444"), console.log("统计所有图片", a.thataddedCount), 
                                    console.log("统计所有展示图片", a.images.length), a.addedCount == a.images.length && (console.log("555"), 
                                    e.hideLoading({}));
                                } else e.showToast({
                                    title: o.message,
                                    icon: "none"
                                });
                            }
                        });
                    },
                    deleteImage: function(e) {
                        this.images.splice(e.detail, 1), console.log(this.addedCount, "-----删除图片"), this.setData({
                            images: this.images,
                            picList: this.images,
                            addedCount: this.addedCount - 1
                        }), console.log("删除后的", this.picList);
                    },
                    upload: function() {
                        var t = this, a = this.img_url;
                        console.log(a), e.showLoading();
                        for (var n = 0; n < a.length; n++) e.uploadFile({
                            url: s.globalData.util.url() + "c=entry&a=wxapp&do=ImgPost&m=gc_market",
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
                    formSubmit: function(t) {
                        console.log(t);
                        var a = this;
                        console.log("长度", a.picList.length);
                        var n = t.detail.value.name.replace(/\s+/g, ""), o = t.detail.value.oldprice.replace(/\s+/g, ""), i = t.detail.value.price.replace(/\s+/g, ""), c = t.detail.value.phone.replace(/\s+/g, ""), l = t.detail.value.content.replace(/\s+/g, ""), u = t.detail.value.stock.replace(/\s+/g, "");
                        if (i <= 0) return s.globalData.util.message("现价必须大于0", "", "error"), !1;
                        if (u <= 0) return s.globalData.util.message("请填写库存", "", "error"), !1;
                        if (a.cateList.length <= 0) return s.globalData.util.message("请选择分类", "", "error"), 
                        !1;
                        if ("" == n || "" == o || "" == i || "" == l || "" == c) return s.globalData.util.message("不能有空值", "", "error"), 
                        !1;
                        if (0 == a.picList.length) return s.globalData.util.message("请上传图片", "", "error"), 
                        !1;
                        if (!/^1[3456789]\d{9}$/.test(c)) return s.globalData.util.message("手机号码格式有误", "", "error"), 
                        !1;
                        e.showModal({
                            title: "提示",
                            content: "允许接收订阅消息",
                            success: function(t) {
                                t.confirm && e.requestSubscribeMessage({
                                    tmplIds: [ e.getStorageSync("sys").template_pay ],
                                    success: function(e) {
                                        console.log("已授权接收订阅消息");
                                    },
                                    complete: function(t) {
                                        s.globalData.util.request({
                                            url: "Dmhmarketgoods/update",
                                            method: "POST",
                                            data: {
                                                m_id: a.id,
                                                name: n,
                                                phone: c,
                                                oldprice: o,
                                                newprice: i,
                                                stock: u,
                                                content: l,
                                                degree: a.array[a.index],
                                                cate_id: a.cateList[a.indexs].id,
                                                img: a.picList.join(","),
                                                image: a.picList[0],
                                                s_id: e.getStorageSync("schoolId")
                                            },
                                            success: function(t) {
                                                console.log(t.data.data), e.redirectTo({
                                                    url: "/gc_school/pages/secondhand/my"
                                                });
                                            }
                                        }, !0);
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
                        this.setData({
                            oldprice: e.detail.value
                        });
                    },
                    newpriceInput: function(e) {
                        this.setData({
                            newprice: e.detail.value
                        });
                    },
                    phoneFun: function(e) {
                        this.setData({
                            phone: e.detail.value
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
                    },
                    formReset: function() {
                        console.log("占位：函数 formReset 未声明");
                    }
                }
            };
            t.default = l;
        }).call(this, a("543d").default);
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
    c752: function(e, t, a) {
        var n = a("ee20");
        a.n(n).a;
    },
    e679: function(e, t, a) {
        var n = a("f38f");
        a.n(n).a;
    },
    e6ce: function(e, t, a) {
        a.r(t);
        var n = a("14f5"), o = a("506a");
        for (var i in o) "default" !== i && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(i);
        a("c752");
        var c = a("f0c5"), s = Object(c.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = s.exports;
    },
    ee20: function(e, t, a) {},
    f38f: function(e, t, a) {}
}, [ [ "13f7", "common/runtime", "common/vendor" ] ] ]);