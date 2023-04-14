(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/public/index" ], {
    "044f": function(t, e, a) {
        a.r(e);
        var o = a("2fa8"), i = a("c50e");
        for (var s in i) "default" !== s && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(s);
        a("e679");
        var n = a("f0c5"), r = Object(n.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "087a": function(t, e, a) {
        var o = a("d857");
        a.n(o).a;
    },
    "0921": function(t, e, a) {
        e.a = function(t) {
            t.options.wxsCallMethods || (t.options.wxsCallMethods = []);
        };
    },
    "2f92": function(t, e, a) {},
    "2fa8": function(t, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return i;
        }), a.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "7d63": function(t, e, a) {
        (function(t) {
            a("a8cf"), o(a("66fd"));
            var e = o(a("c56d"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    },
    "9fb7": function(t, e, a) {
        var o = a("2f92");
        a.n(o).a;
    },
    b158: function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(a("a34a")), i = r(a("f696")), s = r(a("044f")), n = r(a("a151"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function l(t, e, a, o, i, s, n) {
                try {
                    var r = t[s](n), l = r.value;
                } catch (t) {
                    return void a(t);
                }
                r.done ? e(l) : Promise.resolve(l).then(o, i);
            }
            function u(t) {
                return function() {
                    var e = this, a = arguments;
                    return new Promise(function(o, i) {
                        var s = t.apply(e, a);
                        function n(t) {
                            l(s, o, i, n, r, "next", t);
                        }
                        function r(t) {
                            l(s, o, i, n, r, "throw", t);
                        }
                        n(void 0);
                    });
                };
            }
            function c(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), a.push.apply(a, o);
                }
                return a;
            }
            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(a), !0).forEach(function(e) {
                        f(t, e, a[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                    });
                }
                return t;
            }
            function f(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t;
            }
            var m = getApp(), h = {
                components: {
                    addImage: s.default
                },
                data: function() {
                    return d(d({
                        openid: "",
                        usernick: "",
                        img: "",
                        longitude: "",
                        latitude: "",
                        address: "",
                        tlist: [],
                        images: [],
                        count: 3,
                        addedCount: 1,
                        picList: [],
                        school: [ {
                            s_name: "2"
                        } ],
                        items: [ {
                            value: "0",
                            name: "堂食"
                        }, {
                            value: "1",
                            name: "自提"
                        } ],
                        isTang: 1,
                        weight: [],
                        sex: [ "不限性别", "限男生", "限女生" ],
                        multiIndex: [ 0, 0 ],
                        schoolInfo: {},
                        weightindex: 0,
                        sexindex: 0,
                        cuponlist: [],
                        buyaddress: {
                            address: !1
                        },
                        checkbox: [ {
                            value: 1,
                            name: "1",
                            checked: !1,
                            hot: !1
                        }, {
                            value: 3,
                            name: "3",
                            checked: !1,
                            hot: !0
                        }, {
                            value: 4,
                            name: "4",
                            checked: !1,
                            hot: !1
                        }, {
                            value: 5,
                            name: "5",
                            checked: !1,
                            hot: !1
                        }, {
                            value: 6,
                            name: "6",
                            checked: !1,
                            hot: !1
                        } ],
                        form: {
                            out_time_num: 24,
                            minfee: 0,
                            maxfee: 100,
                            fee: 0,
                            type: 1,
                            showText: "此处不用填",
                            total: 0,
                            a_id: -1,
                            a_addres: !1,
                            a_name: !1,
                            co_title: !1,
                            addres: "",
                            MinRunPrice: 0
                        },
                        y_money: 0,
                        goods_det: [],
                        good_details: 0,
                        total_prices: "",
                        userInfo: {
                            is_vip: 0
                        },
                        point_index: 0,
                        point: {},
                        unit_price: 0,
                        qu_id: 0,
                        custom: "",
                        timeModal: !1,
                        out_time: 1,
                        sysparment: {
                            qu_tips: "",
                            ji_tips: "",
                            shi_tips: "",
                            wan_tips: "",
                            is_address_show: 0,
                            is_address_must: 0,
                            is_attach_show: 0,
                            is_servicetime_show: 0,
                            is_servicenum_show: 0
                        },
                        module_id: "",
                        attach_file: "",
                        is_click: !0,
                        extra_price: 0,
                        express_num: 1,
                        service_num: 0,
                        title: "",
                        extra_jian_price: 0,
                        modalName: "",
                        showsfzupload: !1,
                        t_pic: "",
                        testtype: "",
                        type: 0,
                        cart: [],
                        bid: "",
                        service_price: "",
                        box_fee: ""
                    }, i.default.data), {}, {
                        storeType: 0,
                        timeList: [],
                        ordertime: 0,
                        psType: 0,
                        arrival_time: "",
                        is_self_lifting: 0,
                        end: ""
                    });
                },
                watch: d({
                    express_num: function(t) {
                        if (1 == this.userInfo.is_vip) var e = (this.form.total - this.form.MinRunPrice).toFixed(2); else e = this.form.total;
                        e < this.form.y_money && (this.form.y_money = 0, this.y_money = 0, this.form.co_title = "", 
                        this.form.co_id = "");
                    }
                }, i.default.watch),
                onLoad: function(e) {
                    if (this.start = this.date.date("h:i"), this.storeType = e.storeType || 0, 3 == e.type && (this.bid = e.id), 
                    console.log("传递的值", e), this.testtype = e.type, this.type = e.type, console.log("ghfghghfs", e), 
                    this.setData({
                        module_id: e.id
                    }), console.log("type值是", e.type), this.getDefaultPrice(), this.getconfig(), this.cart = t.getStorageSync("cart"), 
                    0 == this.storeType ? this.getTimeList() : this.getTimeList2(), t.getStorageSync("timeslot")) {
                        var a = t.getStorageSync("timeslot").split("-");
                        this.end = a[a.length - 1];
                    }
                },
                onReady: function() {},
                onShow: function() {
                    var t = getCurrentPages(), e = t[t.length - 1];
                    if (console.log("获取地址id", e.data), e.data.form.y_money) {
                        var a = Number(e.data.form.y_money);
                        console.log("33333", a), this.y_money = a;
                    }
                    this.setData({
                        form: e.data.form
                    });
                },
                onHide: function() {},
                onUnload: function() {
                    this.express_info = [];
                },
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: d({
                    PickerChangeTime: function(t) {
                        console.log(t), this.arrival_time = t.detail.value;
                    },
                    radioChange: function(t) {
                        console.log(t.detail.value), this.isTang = t.detail.value;
                    },
                    changePsType: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.psType = t, this.calculate();
                    },
                    changeOrderTime: function(t) {
                        console.log(t), this.ordertime = t.detail.value;
                    },
                    foold: function(e) {
                        t.navigateTo({
                            url: "../canteen/canteen"
                        });
                    },
                    titleFun: function(t) {
                        this.setData({
                            title: t.detail.value.replace(/\s+/g, "")
                        });
                    },
                    numCut: function() {
                        if (1 == this.userInfo.is_vip) var t = (this.form.total - this.form.MinRunPrice).toFixed(2); else t = this.form.total;
                        if (Number(t) <= this.y_money) return m.globalData.util.message("不可再减少", "", "error"), 
                        !1;
                        if (this.express_num > 1) {
                            var e = (Number(this.form.total) - Number(this.form.unit_price)).toFixed(2), a = this.express_num, o = Number(Number(this.extra_jian_price) - Number(this.form.unit_price)).toFixed(2);
                            this.setData({
                                form: d(d({}, this.form), {}, {
                                    total: e
                                }),
                                express_num: a - 1,
                                extra_jian_price: o
                            });
                        }
                    },
                    numAdd: function() {
                        var t = (Number(this.form.total) + Number(this.form.unit_price)).toFixed(2), e = this.express_num, a = Number(Number(this.extra_jian_price) + Number(this.form.unit_price)).toFixed(2);
                        this.setData({
                            form: d(d({}, this.form), {}, {
                                total: t
                            }),
                            express_num: e + 1,
                            extra_jian_price: a
                        });
                    },
                    formSubmit: function(e) {
                        var a = this;
                        return u(o.default.mark(function e() {
                            var i, s, n, r, l, u;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.login().then(function(t) {
                                        console.log("您已登陆！");
                                    });

                                  case 2:
                                    if (1 != a.psType) {
                                        e.next = 5;
                                        break;
                                    }
                                    return a.daodian(), e.abrupt("return", !1);

                                  case 5:
                                    if (a.form.showText && "" != a.form.showText.replace(/\s+/g, "") || 1 != a.type && 2 != a.type) {
                                        e.next = 8;
                                        break;
                                    }
                                    return m.globalData.util.message("请输入订单内容", "", "error"), e.abrupt("return", !1);

                                  case 8:
                                    if (a.express_info.filter(function(t) {
                                        return t.code;
                                    }).length == a.express_info.length || 1 != a.type) {
                                        e.next = 12;
                                        break;
                                    }
                                    return m.globalData.util.message("请输入取件码", "", "error"), e.abrupt("return", !1);

                                  case 12:
                                    if (4 != a.type) {
                                        e.next = 16;
                                        break;
                                    }
                                    if (a.title) {
                                        e.next = 16;
                                        break;
                                    }
                                    return m.globalData.util.message("请输入服务标题", "", "error"), e.abrupt("return", !1);

                                  case 16:
                                    if (4 != a.type || 1 != a.sysparment.is_servicenum_show) {
                                        e.next = 20;
                                        break;
                                    }
                                    if (!(a.service_num <= 0)) {
                                        e.next = 20;
                                        break;
                                    }
                                    return m.globalData.util.message("请输入服务人数", "", "error"), e.abrupt("return", !1);

                                  case 20:
                                    if (4 === a.type) {
                                        e.next = 24;
                                        break;
                                    }
                                    if ((3 != a.type || a.buyaddress) && (2 != a.type || a.buyaddress.address)) {
                                        e.next = 24;
                                        break;
                                    }
                                    return m.globalData.util.message("请选择地址", "", "error"), e.abrupt("return", !1);

                                  case 24:
                                    if ((1 != a.sysparment.is_address_show || 1 != a.sysparment.is_address_must || 4 != a.type) && 4 == a.type) {
                                        e.next = 31;
                                        break;
                                    }
                                    if (a.form.a_id && !(a.form.a_id < 0)) {
                                        e.next = 28;
                                        break;
                                    }
                                    return m.globalData.util.message("请选择地址", "", "error"), e.abrupt("return", !1);

                                  case 28:
                                    if (a.form.a_s_id == t.getStorageSync("schoolId")) {
                                        e.next = 31;
                                        break;
                                    }
                                    return m.globalData.util.message("收货学校与所选项学校不符", "", "error"), e.abrupt("return", !1);

                                  case 31:
                                    if (1 != a.sysparment.is_attach_show || 1 != a.sysparment.is_attach_must || 4 != a.type) {
                                        e.next = 35;
                                        break;
                                    }
                                    if (a.attach_file) {
                                        e.next = 35;
                                        break;
                                    }
                                    return m.globalData.util.message("请上传附件", "", "error"), e.abrupt("return", !1);

                                  case 35:
                                    if (console.log("989898980", a.t_pic), a.t_pic && a.t_pic[0], m.globalData.issub = !0, 
                                    3 != a.type) {
                                        e.next = 47;
                                        break;
                                    }
                                    if (a.good_details) {
                                        e.next = 42;
                                        break;
                                    }
                                    return m.globalData.util.message("请选择商品", "", "error"), e.abrupt("return", !1);

                                  case 42:
                                    s = a, (i = a).is_click ? (i.setData({
                                        is_click: !1
                                    }), m.globalData.util.request({
                                        url: "Order/helpBuyOrder",
                                        data: d(d(f({
                                            s_id: t.getStorageSync("schoolId"),
                                            food_money: a.form.guess_prcie,
                                            express_num: a.express_num,
                                            store_id: t.getStorageSync("store_id"),
                                            remarks: a.form.showText,
                                            qu_addres: a.buyaddress.address,
                                            weight: a.weight[a.weightindex],
                                            sex_limit: a.sexindex,
                                            start_time: 0 == a.storeType ? a.tlist[0][a.multiIndex[0]] + " " + a.tlist[1][a.multiIndex[1]] : 0
                                        }, "food_money", a.total_prices), a.form), {}, {
                                            sh_school: t.getStorageSync("schoolId"),
                                            openid: t.getStorageSync("openid"),
                                            out_time_num: a.form.out_time_num,
                                            img: a.picList,
                                            attach_file: "",
                                            good_details: a.good_details,
                                            goods_list: JSON.stringify(t.getStorageSync("json")),
                                            unique: a.unique,
                                            ordertime: a.timeList[a.ordertime],
                                            givetype: a.storeType,
                                            arrival_time: s.arrival_time,
                                            is_self_lifting: s.psType
                                        }),
                                        success: function(e) {
                                            console.log("1111111", e), "下单成功，无需支付" == e.data.msg || "会员已抵扣" == e.data.msg ? (t.showToast({
                                                title: "下单成功",
                                                icon: "success",
                                                duration: 3e3
                                            }), 2 == e.data.data.order.is_store_delivery ? m.globalData.util.request({
                                                url: "Order/StorePrint",
                                                data: {
                                                    o_id: e.data.data.order.id
                                                }
                                            }) : m.globalData.util.request({
                                                url: "MsgSubscribe/toAllRider",
                                                data: {
                                                    ordersn: e.data.data.order.ordersn
                                                }
                                            }), setTimeout(function() {
                                                t.navigateTo({
                                                    url: "/gc_school/pages/order/index?type=1"
                                                });
                                            }, 2e3), t.removeStorage({
                                                key: "json"
                                            })) : (console.log(e.data.data.ordersn), t.requestPayment({
                                                timeStamp: e.data.data.paydata.timestamp.toString(),
                                                nonceStr: e.data.data.paydata.nonceStr,
                                                package: e.data.data.paydata.package,
                                                signType: "MD5",
                                                paySign: e.data.data.paydata.paySign,
                                                success: function(a) {
                                                    console.log("success"), console.log(e.data.data), setTimeout(function() {
                                                        t.navigateTo({
                                                            url: "/gc_school/pages/order/index?type=1"
                                                        });
                                                    }, 2e3);
                                                },
                                                fail: function(t) {
                                                    console.log("fail");
                                                }
                                            }));
                                        },
                                        complete: function() {
                                            i.setData({
                                                is_click: !0
                                            });
                                        }
                                    }, !0)) : t.showToast({
                                        title: "请稍后重试...",
                                        icon: "none"
                                    }), e.next = 61;
                                    break;

                                  case 47:
                                    if (n = 1 == a.type ? "Order/takeExpressOrder" : 2 == a.type ? "Order/sendExpressOrder" : "Order/universalOrder", 
                                    console.log("结果", n), 1 != a.type) {
                                        e.next = 56;
                                        break;
                                    }
                                    if (r = a.qu_id) {
                                        e.next = 54;
                                        break;
                                    }
                                    return m.globalData.util.message("请选择取件快递点", "", "error"), e.abrupt("return", !1);

                                  case 54:
                                    e.next = 57;
                                    break;

                                  case 56:
                                    r = a.buyaddress.address;

                                  case 57:
                                    l = (i = a).picList.length > 0 ? i.picList.join(",") : i.picList, Number(a.form.total), 
                                    Number(a.y_money), i.is_click ? (i.setData({
                                        is_click: !1
                                    }), u = "", a.point.length > 0 && (u = a.point[a.point_index].id), m.globalData.util.request({
                                        url: n,
                                        data: d(d({
                                            s_id: t.getStorageSync("schoolId"),
                                            is_start_show: a.sysparment.is_servicetime_show,
                                            address_must: a.sysparment.is_address_must,
                                            address_show: a.sysparment.is_address_show,
                                            guess_prcie: a.form.guess_prcie,
                                            express_num: a.express_num,
                                            service_num: a.service_num,
                                            remarks: a.form.showText,
                                            qu_latitude: a.buyaddress.location_x ? a.buyaddress.location_x : t.getStorageSync("city").location.lng,
                                            qu_longitude: a.buyaddress.location_y ? a.buyaddress.location_y : t.getStorageSync("city").location.lat,
                                            qu_addres: r,
                                            sh_addres: r,
                                            weight: a.weight[a.weightindex],
                                            sex_limit: a.sexindex,
                                            express_id: u,
                                            attach_file: a.attach_file,
                                            start_time: a.tlist[0][a.multiIndex[0]] + " " + a.tlist[1][a.multiIndex[1]]
                                        }, a.form), {}, {
                                            sh_school: t.getStorageSync("schoolId"),
                                            openid: t.getStorageSync("openid"),
                                            out_time_num: a.form.out_time_num,
                                            img: l,
                                            good_details: a.good_details,
                                            title: a.title,
                                            unique: a.unique
                                        }),
                                        success: function(e) {
                                            console.log("1111111", e.data.data), "下单成功，无需支付" == e.data.msg || "会员已抵扣" == e.data.msg ? (t.showToast({
                                                title: "下单成功",
                                                icon: "success",
                                                duration: 3e3
                                            }), m.globalData.util.request({
                                                url: "MsgSubscribe/toAllRider",
                                                data: {
                                                    ordersn: e.data.data.order.ordersn
                                                }
                                            }), setTimeout(function() {
                                                t.navigateTo({
                                                    url: "/gc_school/pages/order/index?type=1"
                                                });
                                            }, 2e3)) : (console.log(e.data.data.order.ordersn), t.requestPayment({
                                                timeStamp: e.data.data.paydata.timestamp.toString(),
                                                nonceStr: e.data.data.paydata.nonceStr,
                                                package: e.data.data.paydata.package,
                                                signType: "MD5",
                                                paySign: e.data.data.paydata.paySign,
                                                success: function(a) {
                                                    console.log("success"), console.log(e.data.data.ordersn), setTimeout(function() {
                                                        t.navigateTo({
                                                            url: "/gc_school/pages/order/index?type=1"
                                                        });
                                                    }, 2e3);
                                                },
                                                fail: function(t) {
                                                    console.log("fail");
                                                }
                                            }));
                                        },
                                        complete: function() {
                                            i.setData({
                                                is_click: !0
                                            });
                                        }
                                    }, !0)) : t.showToast({
                                        title: "请稍后重试...",
                                        icon: "none"
                                    });

                                  case 61:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    sliderchange: function(t) {
                        console.log("qqqqqqq", t), this.setData({
                            out_time: t.detail.value
                        }), console.log("时间", this.out_time);
                    },
                    uploadfile: function() {
                        var e = this;
                        t.chooseMessageFile({
                            count: 1,
                            type: "file",
                            success: function(a) {
                                t.uploadFile({
                                    url: n.default.url + "Base/upload",
                                    filePath: a.tempFiles[0].path,
                                    header: {
                                        Authorization: t.getStorageSync("token")
                                    },
                                    name: "file",
                                    formData: {
                                        wxapp_id: n.default.uniacid
                                    },
                                    success: function(t) {
                                        var a = JSON.parse(t.data).data;
                                        e.setData({
                                            attach_file: a
                                        }), console.log(a);
                                    }
                                });
                            }
                        });
                    },
                    handleshaddress: function() {
                        t.navigateTo({
                            url: "/gc_school/pages/address/index"
                        });
                    },
                    handlescupon: function() {
                        if (1 == this.userInfo.is_vip) {
                            var e = (this.form.total - this.form.MinRunPrice).toFixed(2);
                            t.navigateTo({
                                url: "/gc_school/pages/cupon/index?fee=" + e + "&total=" + this.amount + "&coupon=" + this.y_money
                            });
                        } else t.navigateTo({
                            url: "/gc_school/pages/cupon/index?fee=" + this.form.total + "&total=" + this.amount + "&coupon=" + this.y_money
                        });
                    },
                    pointChange: function(t) {
                        console.log(t.detail.value);
                        var e = this;
                        console.log("id是", e.point[t.detail.value].id), this.setData({
                            point_index: t.detail.value,
                            qu_id: e.point[t.detail.value].title
                        }), console.log("qu_id", e.point[t.detail.value].title);
                    },
                    textareaAInputbuyaddress: function(t) {
                        this.setData({
                            buyaddress: d(d({}, this.buyaddress), {}, {
                                address: t.detail.value
                            })
                        });
                    },
                    totalchange: function(t) {
                        var e;
                        t.target.value = t.target.value.match(/^\d*(\.?\d{0,2})/g)[0] || null, t.detail.value, 
                        console.log("总价", this.form.total);
                        var a = /^(\.*)(\d+)(\.?)(\d{0,2}).*$/g;
                        a.test(t.detail.value) && (e = t.detail.value.replace(a, "$2$3$4")), console.log(e);
                        for (var o = this.checkbox, i = 0; i < o.length; ++i) o[i].checked = !1;
                        this.setData({
                            custom: e
                        });
                    },
                    ChooseCheckbox: function(e) {
                        console.log("hhhhhhhh", e);
                        for (var a = this.checkbox, o = e.currentTarget.dataset.value, i = e.currentTarget.dataset.index, s = 0; s < a.length; ++s) a[s].checked = !1, 
                        s == i && (a[s].checked = !0);
                        if (console.log("kkkkkkkkkkkkkkk", this.form), o < this.form.MinRunPrice) return t.showToast({
                            title: "最少费用是" + this.form.MinRunPrice,
                            icon: "none"
                        }), this.setData({
                            form: d(d({}, this.form), {}, {
                                total: this.form.MinRunPrice
                            })
                        }), !1;
                        this.setData({
                            form: d(d({}, this.form), {}, {
                                total: o
                            }),
                            checkbox: a,
                            modalName: ""
                        });
                    },
                    PickerChange: function(t) {
                        if (console.log(this.userInfo.is_vip), console.log(t), "weight" == t.currentTarget.dataset.range) {
                            if (1 == this.userInfo.is_vip) var e = (this.form.total - this.form.MinRunPrice).toFixed(2); else e = this.form.total;
                            if ((Number(e) + Number(t.detail.value * this.form.unit_price) - Number(this.extra_price)).toFixed(2) < this.y_money && "weightindex" == t.currentTarget.dataset.index) return m.globalData.util.message("不可再减少", "", "error"), 
                            !1;
                            var a = (Number(this.form.total) + Number(t.detail.value * this.form.unit_price) - Number(this.extra_price)).toFixed(2);
                            this.setData({
                                extra_price: Number(t.detail.value * this.form.unit_price)
                            });
                        }
                        this.setData(f({}, t.currentTarget.dataset.index, t.detail.value)), "weightindex" == t.currentTarget.dataset.index && this.setData({
                            form: d(d({}, this.form), {}, {
                                total: a
                            })
                        });
                    },
                    MultiChange: function(t) {
                        this.setData({
                            multiIndex: t.detail.value
                        });
                    },
                    MultiColumnChange: function(t) {
                        0 == t.detail.column && this.setData({
                            multiIndex: [ t.detail.value, 0 ],
                            tlist: [ this.tlist[0], this.alltime[t.detail.value].times ]
                        });
                    },
                    confinModal: function(t) {
                        this.setData({
                            modalName: null
                        });
                    },
                    showModal: function(t) {
                        if ("cupon" == t.currentTarget.dataset.target && 0 == this.cuponlist.length) return !1;
                        this.setData({
                            modalName: t.currentTarget.dataset.target
                        });
                    },
                    timeModalFun: function() {
                        this.setData({
                            timeModal: !0
                        });
                    },
                    timeHide: function(t) {
                        console.log(t.currentTarget.dataset.type), this.setData({
                            timeModal: !1
                        }), 2 == t.currentTarget.dataset.type && this.setData({
                            form: d(d({}, this.form), {}, {
                                out_time_num: this.out_time
                            })
                        });
                    },
                    hideModals: function() {
                        this.setData({
                            modalName: null
                        });
                    },
                    hideModal: function(e) {
                        if ("ChooseModal" == this.modalName && (console.log("执行这里"), Number(this.form.total) < Number(this.form.MinRunPrice))) t.showToast({
                            title: "最少费用是" + this.form.MinRunPrice,
                            icon: "none"
                        }); else if (console.log("custom", this.custom), console.log("最低金额", this.form.MinRunPrice), 
                        console.log("优惠金额", this.y_money), this.y_money > this.custom) m.globalData.util.message("金额不可低于优惠券金额", "", "error"); else if (null != this.custom) if (this.custom < 0) m.globalData.util.message("输入金额有误", "", "error"); else {
                            var a = Number(Number(this.form.MinRunPrice) + Number(this.extra_price) + Number(this.extra_jian_price)).toFixed(2);
                            console.log(this.custom), console.log("不低于", a), Number(this.custom) < a ? m.globalData.util.message("金额不能低于" + a, "", "error") : (this.setData({
                                form: d(d({}, this.form), {}, {
                                    total: this.custom
                                })
                            }), this.setData({
                                modalName: null
                            }));
                        } else m.globalData.util.message("请输入正确的数字", "", "error");
                    },
                    service_numFun: function(t) {
                        this.setData({
                            service_num: t.detail.value
                        });
                    },
                    guess_prcieAInput: function(t) {
                        this.setData({
                            form: d(d({}, this.form), {}, {
                                guess_prcie: t.detail.value
                            })
                        });
                    },
                    textareaAInput: function(t) {
                        this.setData({
                            form: d(d({}, this.form), {}, {
                                showText: t.detail.value
                            })
                        });
                    },
                    onChangeTips: function(t) {
                        this.setData({
                            form: d(d({}, this.form), {}, {
                                fee: t.detail.value
                            })
                        }), console.log(t);
                    },
                    onSelectBuyAddress: function() {
                        var e = this;
                        t.chooseLocation({
                            success: function(t) {
                                var a = {
                                    address: t.name + "-" + t.address,
                                    name: t.name,
                                    location_x: t.latitude,
                                    location_y: t.longitude
                                };
                                e.setData({
                                    buyaddress: a
                                });
                            },
                            fail: function(t) {
                                console.log(t);
                            },
                            complet: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    upload: function(e, a) {
                        var o = this;
                        console.log("连接", m.globalData.util.url()), t.showLoading(), t.uploadFile({
                            url: m.globalData.util.url() + "c=entry&a=wxapp&do=ImgPost&m=gc_school",
                            filePath: e.tempFilePaths[0],
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            name: "file",
                            success: function(e) {
                                console.log("打印", e);
                                var i = e.data;
                                i = JSON.parse(i).data, t.hideLoading(), o.type = [ i ], "t_pic" == a && o.setData({
                                    showsfzupload: !1
                                });
                            }
                        });
                    },
                    ChooseImage: function(e) {
                        var a = this;
                        t.chooseImage({
                            count: 1,
                            sizeType: [ "original", "compressed" ],
                            sourceType: [ "album" ],
                            success: function(t) {
                                console.log("path", t), a.upload(t, e.currentTarget.dataset.type);
                            }
                        });
                    },
                    DelImg: function(e) {
                        var a = this;
                        t.showModal({
                            title: "删除图片",
                            content: "确定要删除？",
                            cancelText: "取消",
                            confirmText: "确定",
                            success: function(t) {
                                var o;
                                t.confirm && (a[e.currentTarget.dataset.type].splice(e.currentTarget.dataset.index, 1), 
                                a.setData((f(o = {}, e.currentTarget.dataset.type, a.imgList), f(o, "showsfzupload", !0), 
                                o)));
                            }
                        });
                    },
                    getconfig: function() {
                        t.login({
                            success: function(e) {
                                console.log(e), t.requestSubscribeMessage({
                                    tmplIds: [ "Oj0nXf0BEyorPc4TKf3cdMsSUo-ZxncKKcPPbgMUggY" ],
                                    success: function(t) {
                                        console.log("已授权接收订阅消息");
                                    },
                                    fail: function(t) {
                                        console.log("错误", t);
                                    }
                                });
                            }
                        });
                        var e = this;
                        m.globalData.util.request({
                            url: "Setting/view",
                            success: function(t) {
                                console.log("获取配置", t.data.data), e.setData({
                                    sysparment: t.data.data.sys
                                });
                            }
                        }, !1);
                    },
                    getuserInfo: function() {
                        var t = this;
                        m.globalData.util.request({
                            url: "WechatUser/view",
                            data: {},
                            success: function(e) {
                                t.setData({
                                    userInfo: e.data.data
                                });
                            }
                        }, !0);
                    },
                    getDefaultPrice: function() {
                        var e = this, a = this;
                        m.globalData.util.request({
                            url: "RenIndex/MinRunPrice",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                module_id: t.getStorageSync("module_id"),
                                store_id: t.getStorageSync("store_id")
                            },
                            success: function(o) {
                                console.log("最低费信息", o.data.data.info), e.setData({
                                    form: d(d({}, e.form), {}, {
                                        total: o.data.data.info.start_fee,
                                        MinRunPrice: o.data.data.info.start_fee,
                                        unit_price: o.data.data.info.step_price
                                    }),
                                    point: o.data.data.point,
                                    weight: o.data.data.school.step,
                                    user_price: o.data.data.info.start_fee,
                                    school: o.data.data.school,
                                    specs: o.data.data.school.specs
                                }), o.data.data.school.specs.length > 0 && e.addForm(1), o.data.data.point.length > 0 && e.setData({
                                    qu_id: o.data.data.point[0].title
                                }), t.getStorageSync("token") && a.getuserInfo(), console.log(o.data.data.point);
                            }
                        });
                    },
                    getTimeList2: function() {
                        var e = this;
                        m.globalData.util.request({
                            url: "RenIndex/givetime",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                type: this.type
                            },
                            header: {
                                Authorization: t.getStorageSync("token")
                            },
                            success: function(t) {
                                e.timeList = t.data.data;
                            }
                        });
                    },
                    getTimeList: function() {
                        var e = this;
                        m.globalData.util.request({
                            url: "RenIndex/TimeList",
                            data: {
                                openid: t.getStorageSync("openid"),
                                type: this.type
                            },
                            header: {
                                Authorization: t.getStorageSync("token")
                            },
                            success: function(t) {
                                for (var a = [ [], [] ], o = 0; o < t.data.data.time.length; o++) {
                                    a[0].push(t.data.data.time[o].day);
                                    var i = [];
                                    for (var s in t.data.data.time[o].times) i.push(t.data.data.time[o].times[s]);
                                    0 == o && (a[1] = i), t.data.data.time[o].times = i;
                                }
                                console.log(t.data.data.time), e.alltime = t.data.data.time, e.setData({
                                    tlist: a
                                });
                            }
                        });
                    },
                    jise: function() {
                        var e = this, a = t.getStorageSync("json");
                        a && m.globalData.util.request({
                            url: "zhGoods/sumMoney",
                            method: "POST",
                            data: {
                                goods_det: JSON.stringify(a),
                                s_id: t.getStorageSync("schoolId"),
                                store_id: this.bid
                            },
                            success: function(t) {
                                e.setData({
                                    goods_det: t.data.data.data,
                                    total_prices: t.data.data.total_prices,
                                    service_price: t.data.data.service_price,
                                    box_fee: t.data.data.box_fee
                                });
                                for (var a = [], o = t.data.data.data, i = 0; i < o.length; i++) {
                                    var s = o[i].store_name + " - " + o[i].goods_name + " - " + o[i].nums + "份 - " + o[i].price + "元/份";
                                    a.push(s);
                                }
                                a = a.join(";"), e.setData({
                                    good_details: a
                                }), e.calculate();
                            }
                        });
                    },
                    chooseImages: function() {
                        console.log("执行几级");
                        var e = this;
                        t.chooseImage({
                            count: 3 - e.addedCount,
                            sizeType: [ "compressed" ],
                            sourceType: [ "album", "camera" ],
                            success: function(t) {
                                console.log(t), e.uploadimg({
                                    path: t.tempFilePaths
                                });
                            }
                        });
                    },
                    uploadimg: function(e) {
                        var a = this;
                        return u(o.default.mark(function i() {
                            var s, r, l, u;
                            return o.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    t.showLoading({
                                        title: "上传中...",
                                        mask: !0
                                    }), s = a, console.log("打印图片信息", e), console.log("打印", e.path), console.log("打印", e.path.length), 
                                    r = s.addedCount, console.log(n.default.url + "Base/upload"), l = 0;

                                  case 8:
                                    if (!(l < e.path.length)) {
                                        o.next = 19;
                                        break;
                                    }
                                    return console.log("走这里", e.path[l]), console.log("aaaaa"), o.next = 13, s.compress(e.path[l]);

                                  case 13:
                                    u = o.sent, console.log(u), t.uploadFile({
                                        url: n.default.url + "Base/upload",
                                        filePath: u,
                                        header: {
                                            Authorization: t.getStorageSync("token")
                                        },
                                        name: "file",
                                        formData: {
                                            wxapp_id: n.default.uniacid
                                        },
                                        success: function(e) {
                                            console.log("图片返回", e.data);
                                            var a = JSON.parse(e.data);
                                            if (console.log("图片返回11", a), 200 == a.status) {
                                                r++, console.log(a);
                                                var o = s.picList;
                                                o.push(a.data), console.log(o);
                                                var i = s.images.concat(a.data);
                                                s.setData({
                                                    images: i,
                                                    picList: o,
                                                    addedCount: r
                                                }), r == s.picList.length && t.hideLoading({});
                                            } else t.showToast({
                                                title: a.msg,
                                                icon: "none"
                                            });
                                        }
                                    });

                                  case 16:
                                    l++, o.next = 8;
                                    break;

                                  case 19:
                                  case "end":
                                    return o.stop();
                                }
                            }, i);
                        }))();
                    },
                    deleteImage: function(t) {
                        this.images.splice(t.detail, 1), this.picList.splice(t.detail, 1), this.setData({
                            images: this.images,
                            picList: this.picList,
                            addedCount: this.addedCount - 1
                        }), console.log(this.picList);
                    },
                    ViewImage: function() {
                        console.log("占位：函数 ViewImage 未声明");
                    }
                }, i.default.methods)
            };
            e.default = h;
        }).call(this, a("543d").default);
    },
    b31c: function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = {
                data: function() {
                    return {};
                },
                props: {
                    count: {
                        type: Number,
                        default: 3,
                        observers: function(t, e) {}
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
                        observers: function(t, e) {
                            console.log("--new--".newVal, "--old--", e);
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
                    previewImage: function(e) {
                        t.previewImage({
                            urls: this.images,
                            current: this.images[e.currentTarget.dataset.index]
                        });
                    },
                    deleteImage: function(t) {
                        this.$emit("deleteImage", {
                            detail: t.currentTarget.dataset.index
                        });
                    }
                }
            };
            e.default = a;
        }).call(this, a("543d").default);
    },
    c50e: function(t, e, a) {
        a.r(e);
        var o = a("b31c"), i = a.n(o);
        for (var s in o) "default" !== s && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = i.a;
    },
    c56d: function(t, e, a) {
        a.r(e);
        var o = a("d4bb"), i = a("e409");
        for (var s in i) "default" !== s && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(s);
        a("087a"), a("9fb7");
        var n = a("f0c5"), r = a("0921"), l = Object(n.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        "function" == typeof r.a && Object(r.a)(l), e.default = l.exports;
    },
    d4bb: function(t, e, a) {
        a.d(e, "b", function() {
            return i;
        }), a.d(e, "c", function() {
            return s;
        }), a.d(e, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, i = function() {
            this.$createElement;
            this._self._c;
        }, s = [];
    },
    d857: function(t, e, a) {},
    e409: function(t, e, a) {
        a.r(e);
        var o = a("b158"), i = a.n(o);
        for (var s in o) "default" !== s && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = i.a;
    },
    e679: function(t, e, a) {
        var o = a("f38f");
        a.n(o).a;
    },
    f38f: function(t, e, a) {}
}, [ [ "7d63", "common/runtime", "common/vendor" ] ] ]);