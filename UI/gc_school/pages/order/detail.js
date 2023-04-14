(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/order/detail" ], {
    "24d4": function(t, a, e) {
        (function(t) {
            e("a8cf"), o(e("66fd"));
            var a = o(e("2528"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(a.default);
        }).call(this, e("543d").createPage);
    },
    2528: function(t, a, e) {
        e.r(a);
        var o = e("9d5f"), n = e("5112");
        for (var s in n) "default" !== s && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(s);
        e("5ea5");
        var i = e("f0c5"), d = Object(i.a)(n.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        a.default = d.exports;
    },
    5112: function(t, a, e) {
        e.r(a);
        var o = e("e076"), n = e.n(o);
        for (var s in o) "default" !== s && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(s);
        a.default = n.a;
    },
    "5ea5": function(t, a, e) {
        var o = e("c91d");
        e.n(o).a;
    },
    "9d5f": function(t, a, e) {
        e.d(a, "b", function() {
            return n;
        }), e.d(a, "c", function() {
            return s;
        }), e.d(a, "a", function() {
            return o;
        });
        var o = {
            cuCustom: function() {
                return e.e("colorui/components/cu-custom").then(e.bind(null, "24dd"));
            }
        }, n = function() {
            this.$createElement;
            this._self._c;
        }, s = [];
    },
    c91d: function(t, a, e) {},
    e076: function(t, a, e) {
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("a34a"));
            function n(t, a, e, o, n, s, i) {
                try {
                    var d = t[s](i), r = d.value;
                } catch (t) {
                    return void e(t);
                }
                d.done ? a(r) : Promise.resolve(r).then(o, n);
            }
            function s(t) {
                return function() {
                    var a = this, e = arguments;
                    return new Promise(function(o, s) {
                        var i = t.apply(a, e);
                        function d(t) {
                            n(i, o, s, d, r, "next", t);
                        }
                        function r(t) {
                            n(i, o, s, d, r, "throw", t);
                        }
                        d(void 0);
                    });
                };
            }
            var i = getApp(), d = {
                data: function() {
                    return {
                        markers: [ {
                            iconPath: "/static/gc_school/resource/images/location.png",
                            id: 0,
                            latitude: 23.099994,
                            longitude: 113.32452,
                            width: 50,
                            height: 50
                        } ],
                        polyline: [ {
                            points: [ {
                                longitude: 113.3245211,
                                latitude: 23.10229
                            }, {
                                longitude: 113.32452,
                                latitude: 23.21229
                            } ],
                            color: "#FF0000DD",
                            width: 6,
                            dottedLine: !0
                        } ],
                        detail: {
                            order: {
                                type: "",
                                title: "",
                                desc: "",
                                is_watch: !1,
                                image: "",
                                attach_file: "",
                                sh_name: "",
                                sh_phone: "",
                                sh_addres: "",
                                qu_addres: "",
                                sex_limit: "",
                                ordersn: "",
                                service_num: 0,
                                createtime: "",
                                weight: "",
                                express_num: "",
                                total: "",
                                guess_prcie: "",
                                status: "",
                                cancel_reason: "",
                                is_refuse: 0,
                                refuse_reason: "",
                                end_openid: "",
                                end_user_name: "",
                                end_user_phone: "",
                                proof: "",
                                user_type: !1,
                                cancel_from: ""
                            }
                        },
                        good_details: [],
                        id: "",
                        options: "",
                        sysparment: "",
                        chatStatus: 0
                    };
                },
                onLoad: function(t) {
                    console.log(t), this.setData({
                        options: t,
                        id: t.id
                    }), this.getData(t), this.getconfig();
                },
                onReady: function() {},
                onShow: function(t) {
                    this.options.id && (this.getData(this.options), this.getconfig());
                },
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {
                    return {
                        title: "快来接单，轻松赚零花钱！",
                        path: "/gc_school/pages/order/detail?id=" + this.id,
                        imageUrl: "https://gcwe7.link1024.com/web/img/share.png"
                    };
                },
                methods: {
                    chat: function() {
                        var a = arguments, e = this;
                        return s(o.default.mark(function n() {
                            var s;
                            return o.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return s = a.length > 0 && void 0 !== a[0] ? a[0] : "", o.next = 3, e.dingyueChat();

                                  case 3:
                                    t.navigateTo({
                                        url: "/gc_school/pages/chat/chat" + s
                                    });

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, n);
                        }))();
                    },
                    getChatStatus: function() {
                        var t = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i.globalData.util.request({
                            url: "ZhChat/check",
                            success: function(e) {
                                console.log(e), "已授权" == e.data.msg && (console.log(e), console.log(a), a.end_user.openid && (t.chatStatus = "rider" == a.watch_user ? 1 : 2));
                            }
                        });
                    },
                    getconfig: function() {
                        var t = this;
                        i.globalData.util.request({
                            url: "Setting/view",
                            success: function(a) {
                                console.log(a.data.data.sys.logo), t.setData({
                                    sysparment: a.data.data.sys
                                });
                            }
                        });
                    },
                    qrsd: function() {
                        var a = this;
                        return s(o.default.mark(function e() {
                            var n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = a, e.next = 3, a.tips.choose("是否确认送达?");

                                  case 3:
                                    200 == e.sent.code && (console.log(1111), i.globalData.util.request({
                                        url: "Order/delivered",
                                        data: {
                                            o_id: a.detail.id
                                        },
                                        success: function(a) {
                                            t.showToast({
                                                title: "确认送达",
                                                duration: 2e3
                                            }), n.getData(n.options);
                                        }
                                    }, !0));

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    formSubmit: function(a) {
                        console.log(a), i.globalData.util.request({
                            url: "entry/wxapp/OrderInfo",
                            data: {
                                o_id: this.options.id,
                                openid: t.getStorageSync("openid")
                            },
                            success: function(a) {
                                t.showToast({
                                    title: a.data.message
                                }), t.navigateTo({
                                    url: "/wx_tx/pages/myorder/index"
                                });
                            }
                        }, !0);
                    },
                    proof: function() {
                        t.navigateTo({
                            url: "/gc_school/pages/order/proof?id=" + this.detail.id
                        }), console.log(this.detail.o_id);
                    },
                    down: function() {
                        console.log("下载文件"), t.showLoading({
                            title: "文件下载中"
                        }), t.downloadFile({
                            url: this.detail.attach_file,
                            success: function(a) {
                                console.log(a), t.hideLoading({});
                                var e = a.tempFilePath;
                                t.openDocument({
                                    showMenu: !0,
                                    filePath: e,
                                    success: function(t) {
                                        console.log(t);
                                    }
                                }), a.statusCode;
                            }
                        });
                    },
                    copy: function(a) {
                        console.log(a), t.setClipboardData({
                            data: a.currentTarget.dataset.content
                        });
                    },
                    preview: function(a) {
                        console.log(a);
                        var e = a.currentTarget.dataset.index;
                        console.log(this.detail.img), t.previewImage({
                            current: this.detail.img[e],
                            urls: this.detail.img
                        });
                    },
                    previews: function(a) {
                        console.log(a), t.previewImage({
                            current: a.currentTarget.dataset.src,
                            urls: [ a.currentTarget.dataset.src ]
                        });
                    },
                    changes: function(t, a) {
                        for (var e = t.substr(0, a), o = 0; o < t.length - a; o++) e += "*";
                        return e;
                    },
                    getData: function(t) {
                        var a = this;
                        this.setData({
                            options: t
                        }), i.globalData.util.request({
                            url: "order/orderInfo",
                            data: {
                                o_id: t.id
                            },
                            method: "GET",
                            success: function(t) {
                                if (console.log("12323321", t.data.data), a.getChatStatus(t.data.data), 0 == t.data.data.is_watch) {
                                    var e = t.data.data.remarks;
                                    t.data.data.remarks.replace(/[0-9]*(\.[0-9]*)?/g, function(t) {
                                        var a = t;
                                        if (Number(t)) {
                                            if (t.toString().length > 3) var o = t.substr(0, 2) + "****" + t.substr(6); else o = t.substr(0, 1) + "**";
                                            e = e.replace(a, o), console.log(e);
                                        }
                                    }), t.data.data.sh_phone && (t.data.data.sh_phone = t.data.data.sh_phone.substr(0, 3) + "****" + t.data.data.sh_phone.substr(7)), 
                                    t.data.data.qu_phone && (t.data.data.qu_phone = t.data.data.qu_phone.substr(0, 3) + "****" + t.data.data.qu_phone.substr(7)), 
                                    t.data.data.ordersn = t.data.data.ordersn.substr(0, 4) + "**************" + t.data.data.ordersn.substr(18), 
                                    t.data.data.sh_name && (t.data.data.sh_name = t.data.data.sh_name.substr(0, 1) + t.data.data.sh_name.substr(1, t.data.data.sh_name.length).replace(/./g, "*")), 
                                    t.data.data.qu_name && (t.data.data.qu_name = t.data.data.qu_name.substr(0, 1) + t.data.data.qu_name.substr(1, t.data.data.qu_name.length).replace(/./g, "*")), 
                                    console.log(e), t.data.data.remarks = e;
                                }
                                console.log(t);
                                var o = t.data.data.good_details;
                                if (t.data.data.good_details && (o = o.split(";")), t.data.data.img) {
                                    var n = t.data.data.img.split(",");
                                    t.data.data.img = n;
                                }
                                console.log("11111", o), a.setData({
                                    detail: t.data.data,
                                    good_details: o,
                                    markers: [ {
                                        iconPath: "/static/gc_school/resource/images/location.png",
                                        id: 0,
                                        latitude: t.data.data.sh_latitude,
                                        longitude: t.data.data.sh_longitude,
                                        width: 50,
                                        height: 50
                                    } ],
                                    polyline: [ {
                                        points: [ {
                                            latitude: t.data.data.sh_latitude,
                                            longitude: t.data.data.sh_longitude
                                        }, {
                                            latitude: t.data.data.qu_latitude,
                                            longitude: t.data.data.qu_longitude
                                        } ],
                                        color: "#FF0000DD",
                                        width: 6,
                                        dottedLine: !0
                                    } ]
                                });
                            }
                        }, !0);
                    },
                    handleQd: function() {
                        var a = this;
                        t.requestSubscribeMessage({
                            tmplIds: [ a.sysparment.cancel_template_id, a.sysparment.template_notice ],
                            success: function(t) {
                                console.log("已授权接收订阅消息");
                            },
                            complete: function() {
                                i.globalData.util.request({
                                    url: "Order/grab",
                                    data: {
                                        o_id: a.detail.id
                                    },
                                    success: function(a) {
                                        t.showToast({
                                            title: "抢单成功",
                                            duration: 2e3,
                                            success: function() {
                                                t.navigateTo({
                                                    url: "/gc_school/pages/mygrab/index"
                                                });
                                            }
                                        });
                                    }
                                }, !0);
                            }
                        });
                    },
                    makecall: function(a) {
                        console.log(a.currentTarget.dataset.phone), t.makePhoneCall({
                            phoneNumber: a.currentTarget.dataset.phone
                        });
                    },
                    handleZF: function() {
                        i.globalData.util.request({
                            url: "Order/pay",
                            data: {
                                o_id: this.detail.id
                            },
                            success: function(a) {
                                console.log(a), t.requestPayment({
                                    timeStamp: a.data.data.paydata.timestamp.toString(),
                                    nonceStr: a.data.data.paydata.nonceStr,
                                    package: a.data.data.paydata.package,
                                    signType: "MD5",
                                    paySign: a.data.data.paydata.paySign,
                                    success: function(e) {
                                        console.log("success"), i.globalData.issub = !0, i.globalData.util.request({
                                            url: "MsgSubscribe/toAllRider",
                                            data: {
                                                ordersn: a.data.data.order.ordersn
                                            }
                                        }), setTimeout(function() {
                                            t.navigateTo({
                                                url: "/gc_school/pages/order/index?type=1"
                                            });
                                        }, 2e3);
                                    },
                                    fail: function(t) {
                                        console.log("fail");
                                    }
                                });
                            }
                        }, !0);
                    },
                    handleQh: function() {
                        i.globalData.util.request({
                            url: "Order/ConfirmPickup",
                            data: {
                                o_id: this.detail.id
                            },
                            success: function(a) {
                                t.showToast({
                                    title: "取货成功",
                                    duration: 2e3,
                                    success: function() {
                                        return t.navigateTo({
                                            url: "/gc_school/pages/mygrab/index?nav=1"
                                        }), !1;
                                    }
                                });
                            }
                        }, !0);
                    },
                    agree: function(a) {
                        var e = this;
                        i.globalData.util.request({
                            url: "Order/agreeCancel",
                            data: {
                                o_id: e.detail.id
                            },
                            success: function(a) {
                                200 == a.data.status && (t.showToast({
                                    title: a.data.msg,
                                    duration: 1e3
                                }), console.log("订单id", e.detail.o_id), e.getData(e.options));
                            }
                        }, !0);
                    },
                    cancel: function(a) {
                        t.navigateTo({
                            url: "/gc_school/pages/order/reason?id=" + this.detail.id + "&type=" + a.currentTarget.dataset.type
                        });
                    },
                    handleQX: function() {
                        i.globalData.util.request({
                            url: "order/userCancelOrder",
                            data: {
                                o_id: this.detail.id
                            },
                            success: function(a) {
                                t.showToast({
                                    title: "取消成功",
                                    duration: 2e3
                                }), t.navigateTo({
                                    url: "/gc_school/pages/order/index"
                                });
                            }
                        }, !0);
                    },
                    handleWc: function() {
                        var a = this;
                        return s(o.default.mark(function e() {
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return console.log(a.tips), e.next = 3, a.tips.choose("是否确认完成?");

                                  case 3:
                                    200 == e.sent.code && (console.log(1111), i.globalData.util.request({
                                        url: "Order/confirmFinish",
                                        data: {
                                            o_id: a.detail.id
                                        },
                                        success: function(a) {
                                            t.showToast({
                                                title: "确认完成",
                                                duration: 2e3
                                            }), t.navigateTo({
                                                url: "/gc_school/pages/order/index"
                                            });
                                        }
                                    }, !0));

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                }
            };
            a.default = d;
        }).call(this, e("543d").default);
    }
}, [ [ "24d4", "common/runtime", "common/vendor" ] ] ]);