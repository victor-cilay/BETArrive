(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/shop/addgoods" ], {
    "0d0c": function(t, e, a) {
        a.r(e);
        var s = a("dd5c"), i = a.n(s);
        for (var o in s) "default" !== o && function(t) {
            a.d(e, t, function() {
                return s[t];
            });
        }(o);
        e.default = i.a;
    },
    5404: function(t, e, a) {
        a.d(e, "b", function() {
            return i;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {
            return s;
        });
        var s = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    5698: function(t, e, a) {
        var s = a("9154");
        a.n(s).a;
    },
    "63e8": function(t, e, a) {
        var s = a("6fef");
        a.n(s).a;
    },
    "6fef": function(t, e, a) {},
    9154: function(t, e, a) {},
    b20e: function(t, e, a) {
        a.r(e);
        var s = a("5404"), i = a("0d0c");
        for (var o in i) "default" !== o && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(o);
        a("5698"), a("63e8");
        var r = a("f0c5"), n = Object(r.a)(i.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        e.default = n.exports;
    },
    dd5c: function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(a("a151"));
            function i(t) {
                return function(t) {
                    if (Array.isArray(t)) return o(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return o(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? o(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, s = new Array(e); a < e; a++) s[a] = t[a];
                return s;
            }
            var r = getApp(), n = {
                data: function() {
                    return {
                        word_num: 0,
                        maxTextLen: 20,
                        cate: [],
                        cate_index: 0,
                        img: "",
                        name: "",
                        price: "",
                        cate_id: 0,
                        id: 0,
                        word_left: "",
                        modalName: "",
                        formData: {},
                        specs: [],
                        specsName: "",
                        attribute: [],
                        attributeName: "",
                        stock: "",
                        quota: "",
                        specs_list: [],
                        si: -1
                    };
                },
                onLoad: function(t) {
                    t.id ? (this.setData({
                        id: t.id
                    }), this.getInfo()) : this.getCate();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: {
                    showAdd: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                        if ("specsListKey" == t && 0 == this.specs.length) return this.tips.error("请先添加基础规格"), 
                        !1;
                        this.modalName = t, this.si = e;
                        try {
                            this.specs_list[e].name && "specsListKey" == t && (this.formData = {
                                type: this.specs_list[e].name
                            });
                        } catch (t) {}
                    },
                    close: function() {
                        this.modalName = "", this.formData = {
                            type: "",
                            price: ""
                        };
                    },
                    del: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 ? arguments[1] : void 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                        if (a > -1) {
                            var s = this.specs_list[a];
                            s.list.splice(e, 1), console.log(s), this.specs_list[a] = s;
                        } else this[t].splice(e, 1);
                    },
                    delAll: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                        "specsListKey" == t ? this.specs_list.splice(e, 1) : (this[t + "Name"] = "", this[t] = []);
                    },
                    addSpecs: function() {
                        switch (this.modalName) {
                          case "specs":
                            if (!this.formData.type) {
                                this.tips.error("规格值不能为空");
                                break;
                            }
                            if (!this.formData.price) {
                                this.tips.error("规格价格不能为空");
                                break;
                            }
                            if (!isFinite(this.formData.price)) {
                                this.tips.error("请输入有效价格");
                                break;
                            }
                            this.formData.price = Number(this.formData.price).toFixed(2), this[this.modalName].push(this.formData), 
                            this.close();
                            break;

                          case "attribute":
                            if (!this.formData.type) {
                                this.tips.error("属性值不能为空");
                                break;
                            }
                            this[this.modalName].push(this.formData.type), this.close();
                            break;

                          case "specsListKey":
                            this.si > -1 ? this.specs_list[this.si].name = this.formData.type : this.specs_list.push({
                                name: this.formData.type,
                                list: []
                            }), this.close();
                            break;

                          case "specss":
                            if (!this.formData.type) {
                                this.tips.error("规格值不能为空");
                                break;
                            }
                            if (!this.formData.price) {
                                this.tips.error("规格价格不能为空");
                                break;
                            }
                            if (!isFinite(this.formData.price)) {
                                this.tips.error("请输入有效价格");
                                break;
                            }
                            this.formData.price = Number(this.formData.price).toFixed(2), this.specs_list[this.si].list = [].concat(i(this.specs_list[this.si].list), [ this.formData ]), 
                            console.log(this.specs_list), this.close();
                            break;

                          default:
                            this.close();
                        }
                    },
                    getInfo: function() {
                        var e = this;
                        r.globalData.util.request({
                            url: "ZhGoods/view",
                            method: "GET",
                            data: {
                                id: e.id,
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                console.log(t.data.data), e.setData({
                                    name: t.data.data.goods_name,
                                    price: t.data.data.price,
                                    img: t.data.data.goods_img,
                                    cate_id: t.data.data.goods_type_id,
                                    word_num: t.data.data.goods_name.length,
                                    stock: t.data.data.stock,
                                    quota: t.data.data.quota
                                });
                                try {
                                    e.specs = JSON.parse(t.data.data.specs).list || [], e.specsName = JSON.parse(t.data.data.specs).name || "", 
                                    e.attribute = JSON.parse(t.data.data.attribute).list || [], e.attributeName = JSON.parse(t.data.data.attribute).name || "";
                                } catch (t) {}
                                try {
                                    e.specs_list = JSON.parse(t.data.data.specs_list);
                                } catch (t) {
                                    e.specs_list = [];
                                }
                                e.getCate();
                            }
                        }, !0);
                    },
                    getCate: function() {
                        var e = this;
                        r.globalData.util.request({
                            url: "ZhGoodsType/index",
                            method: "GET",
                            data: {
                                s_id: t.getStorageSync("schoolId")
                            },
                            success: function(t) {
                                e.cate = t.data.data.list;
                                for (var a = 0; a < t.data.data.list.length; a++) t.data.data.list[a].goods_type_id == e.cate_id && e.setData({
                                    cate_index: a
                                });
                            }
                        }, !0);
                    },
                    PickerChange: function(t) {
                        this.setData({
                            cate_index: t.detail.value,
                            cate_id: this.cate[t.detail.value].goods_type_id
                        });
                    },
                    choose: function() {
                        var e = this;
                        t.chooseImage({
                            count: 1,
                            success: function(t) {
                                console.log(t), e.uploadimg(t.tempFilePaths, "ImgPost");
                            }
                        });
                    },
                    uploadimg: function(e, a, i) {
                        console.log(e), t.showLoading({
                            title: "上传中...",
                            mask: !0
                        });
                        var o = this, r = o.addedCount;
                        t.uploadFile({
                            url: s.default.url + "Base/upload",
                            filePath: e[0],
                            header: {
                                Authorization: t.getStorageSync("token")
                            },
                            name: "file",
                            formData: {
                                wxapp_id: s.default.uniacid
                            },
                            success: function(e) {
                                var a = JSON.parse(e.data);
                                console.log("打印", a), 200 == a.status ? (o.setData({
                                    addedCount: r,
                                    img: a.data
                                }), t.hideLoading({})) : t.showToast({
                                    title: a.msg,
                                    icon: "none"
                                });
                            }
                        });
                    },
                    priceFun: function(t) {
                        this.setData({
                            price: t.detail.value
                        });
                    },
                    textarea: function(t) {
                        var e = t.detail.value.replace(/\s+/g, "");
                        this.setData({
                            word_num: e.length,
                            word_left: 20 - e.length,
                            name: e
                        });
                    },
                    submit: function(e) {
                        if (console.log(parseInt(this.stock)), !(parseInt(this.stock) > 0)) return this.tips.tips("库存无效！"), 
                        !1;
                        if (!this.name) return r.globalData.util.message("请输入名称", "", "error"), !1;
                        if (this.price <= 0) return r.globalData.util.message("请输入价格", "", "error"), !1;
                        if (!this.cate_id) return r.globalData.util.message("请选择分类", "", "error"), !1;
                        if (!this.img) return r.globalData.util.message("请上传图片", "", "error"), !1;
                        var a = JSON.stringify({
                            name: this.specsName,
                            list: this.specs
                        }), s = JSON.stringify({
                            name: this.attributeName,
                            list: this.attribute
                        });
                        0 == this.specs.length && (a = ""), 0 == this.attribute.length && (s = ""), this.id ? r.globalData.util.request({
                            url: "ZhGoods/update",
                            data: {
                                goods_img: this.img,
                                goods_name: this.name,
                                price: this.price,
                                goods_type_id: this.cate_id,
                                s_id: t.getStorageSync("schoolId"),
                                status: e.currentTarget.dataset.status,
                                id: this.id,
                                specs: a,
                                attribute: s,
                                stock: this.stock,
                                quota: this.quota,
                                specs_list: JSON.stringify(this.specs_list)
                            },
                            success: function(e) {
                                200 == e.data.status && (t.showToast({
                                    title: e.data.message
                                }), setTimeout(function() {
                                    t.redirectTo({
                                        url: "/gc_school/pages/shop/goods"
                                    });
                                }, 1e3));
                            }
                        }, !0) : r.globalData.util.request({
                            url: "ZhGoods/add",
                            data: {
                                goods_img: this.img,
                                goods_name: this.name,
                                price: this.price,
                                goods_type_id: this.cate_id,
                                s_id: t.getStorageSync("schoolId"),
                                status: e.currentTarget.dataset.status,
                                specs: a,
                                attribute: s,
                                stock: this.stock,
                                quota: this.quota,
                                specs_list: JSON.stringify(this.specs_list)
                            },
                            success: function(e) {
                                200 == e.data.status && (t.showToast({
                                    title: e.data.message
                                }), setTimeout(function() {
                                    t.redirectTo({
                                        url: "/gc_school/pages/shop/goods"
                                    });
                                }, 1e3));
                            }
                        }, !0);
                    }
                }
            };
            e.default = n;
        }).call(this, a("543d").default);
    },
    e827: function(t, e, a) {
        (function(t) {
            a("a8cf"), s(a("66fd"));
            var e = s(a("b20e"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "e827", "common/runtime", "common/vendor" ] ] ]);