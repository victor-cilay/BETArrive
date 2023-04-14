(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/foold/foold" ], {
    "0e83": function(t, e, o) {
        o.r(e);
        var n = o("ef44"), r = o("1ef8");
        for (var s in r) "default" !== s && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(s);
        o("f55d");
        var i = o("f0c5"), a = Object(i.a)(r.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = a.exports;
    },
    "0eea": function(t, e, o) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(o("a34a"));
            function r(t, e, o, n, r, s, i) {
                try {
                    var a = t[s](i), c = a.value;
                } catch (t) {
                    return void o(t);
                }
                a.done ? e(c) : Promise.resolve(c).then(n, r);
            }
            function s(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), o.push.apply(o, n);
                }
                return o;
            }
            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(o), !0).forEach(function(e) {
                        a(t, e, o[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : s(Object(o)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                    });
                }
                return t;
            }
            function a(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t;
            }
            function c(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var o = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? u(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
                return n;
            }
            var l, d = getApp(), h = {
                data: function() {
                    return {
                        viewTo: "",
                        viewToLeft: "",
                        listHeight: 650,
                        activeIndex: 0,
                        tabIndex: 0,
                        showModal: !1,
                        showCart: !1,
                        heigthArr: [],
                        cart: [],
                        result: [],
                        totalMoney: 0,
                        food: "",
                        status: "",
                        time_status: "",
                        groupindex: 0,
                        starting_fee: 0,
                        curItem: {},
                        modalName: "",
                        store: {},
                        isBuy: !1,
                        specss: [],
                        specssPrice: 0
                    };
                },
                onShareAppMessage: function() {
                    var t = "/gc_school/pages/foold/foold?id=".concat(this.store.business_id, "&s_id=").concat(this.store.s_id);
                    return console.log(t), {
                        path: t
                    };
                },
                onLoad: function(e) {
                    var o = this;
                    t.setStorageSync("store_id", e.id), e.s_id && t.setStorageSync("schoolId", e.s_id), 
                    d.globalData.util.request({
                        url: "ZhGoods/getBusinessGoods",
                        method: "GET",
                        data: {
                            business_id: e.id,
                            type: 1,
                            s_id: e.s_id || t.getStorageSync("schoolId")
                        },
                        success: function(t) {
                            console.log(t), o.setData({
                                food: t.data.data.goods,
                                status: t.data.data.status,
                                time_status: t.data.data.time_status,
                                starting_fee: t.data.data.starting_fee,
                                store: t.data.data.info
                            });
                        }
                    }, !0);
                },
                watch: {
                    totalMoney: function(t) {
                        console.log(t);
                    }
                },
                onReady: function() {
                    var e = t.getSystemInfoSync().windowHeight, o = t.createSelectorQuery();
                    o.select(".cu-custom").boundingClientRect(), console.log("这里", o.select(".cu-custom").boundingClientRect()), 
                    this.setData({
                        listHeight: e - t.getStorageSync("CustomBar") - 150
                    });
                },
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                methods: {
                    changeSpecss: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        console.log(t), console.log(e), this.specss[e] && this.specss[e].type == t.type ? this.specss[e] = null : this.specss[e] = t, 
                        this.$forceUpdate(), this.specssPrice = this.specss.map(function(t) {
                            return t.price;
                        }).reduce(function(t, e) {
                            return 1 * t + 1 * e;
                        }), console.log(this.specss);
                    },
                    getNums: function(t) {
                        var e = this.cart.filter(function(e) {
                            return e.id == t;
                        });
                        return console.log(e), e;
                    },
                    getTips: function() {
                        return this.totalMoney >= this.starting_fee && this.cart.length > 0 ? "确认购买" : "起送费" + this.starting_fee;
                    },
                    call: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        t.makePhoneCall({
                            phoneNumber: e
                        });
                    },
                    clearAll: function() {
                        this.cart = [], this.showCart = !1, this.totalMoney = 0;
                        for (var t = 0; t < this.food.length; t++) for (var e = this.food[t], o = 0; o < e.items.length; o++) {
                            e.items[o].count = 0;
                        }
                    },
                    preview: function(e) {
                        var o = [];
                        o.push(e.target.dataset.url);
                        var n = e.target.dataset.url;
                        t.previewImage({
                            current: n,
                            urls: o
                        });
                    },
                    addCar: function() {
                        var t = JSON.stringify(this.curItem);
                        (t = JSON.parse(t)).specssPrice = this.specssPrice, t.specss = this.specss;
                        try {
                            t.price = 1 * this.specssPrice + 1 * t.item.price, console.log(this.specssPrice + "+" + t.price);
                        } catch (e) {
                            try {
                                return this.tips.tips("请选择" + t.specs.name), !1;
                            } catch (t) {}
                        }
                        var e = {};
                        e.id ? (console.log("购物车有"), e.count += t.count, this.result[index].nums = e.count) : (console.log("购物车无"), 
                        this.cart = [].concat(c(this.cart), [ t ]), this.result = [].concat(c(this.result), [ {
                            ids: t.foodId,
                            nums: t.count,
                            attribute: t.changeAttribute,
                            specs: t.changeSpecs
                        } ]));
                        var o = parseFloat(this.totalMoney) + parseFloat(t.price * t.count);
                        this.totalMoney = o.toFixed(2), this.hideModal();
                    },
                    hideModal: function() {
                        this.modalName = "", this.showCart = !1, this.curItem = {}, this.specssPrice = "", 
                        this.specss = [];
                    },
                    showSpecs: function(t) {
                        var e = t.currentTarget.dataset.item;
                        e.count = 1, e.changeAttribute = [], this.curItem = e, this.modalName = "specs", 
                        console.log(e);
                    },
                    changeAttribute: function(t) {
                        return this.curItem.changeAttribute[0] == t ? this.curItem.changeAttribute = [] : this.curItem.changeAttribute = [ t ], 
                        !1;
                    },
                    changeSpecs: function(t) {
                        console.log(t), this.curItem.changeSpecs = t.type, this.curItem.price = t.price, 
                        this.curItem.item = t, this.$forceUpdate();
                    },
                    new_jia: function(t) {
                        var e = t.currentTarget.dataset.items, o = t.currentTarget.dataset.indexs;
                        if (17 == Object.keys(e).length) this.add(t); else try {
                            if (e.attribute.name || e.specs.name) {
                                if (!e.changeSpecs) return this.tips.tips("请选择" + e.specs.name), !1;
                                Number.isInteger(o) ? (this.cart[o].count += 1, this.totalMoney = (parseFloat(this.totalMoney) + parseFloat(1 * this.cart[o].price)).toFixed(2)) : this.curItem.count += 1;
                            } else this.add(t);
                        } catch (t) {
                            Number.isInteger(o) ? (this.cart[o].count += 1, this.totalMoney = (parseFloat(this.totalMoney) + parseFloat(1 * this.cart[o].price)).toFixed(2)) : this.curItem.count += 1;
                        }
                    },
                    new_jian: function(t) {
                        var e = t.target.dataset.items, o = t.target.dataset.indexs;
                        if (console.log(Object.keys(e).length), 17 == Object.keys(e).length) this.reduce(t); else try {
                            e.attribute.name || e.specs.name ? Number.isInteger(o) ? (this.totalMoney = (parseFloat(this.totalMoney) - parseFloat(1 * this.cart[o].price)).toFixed(2), 
                            this.cart[o].count > 1 ? this.cart[o].count -= 1 : this.cart.splice(o, 1)) : this.curItem.count -= 1 : this.reduce(t);
                        } catch (t) {
                            Number.isInteger(o) ? (this.totalMoney = (parseFloat(this.totalMoney) - parseFloat(1 * this.cart[o].price)).toFixed(2), 
                            this.cart[o].count > 1 ? this.cart[o].count -= 1 : this.cart.splice(o, 1)) : this.curItem.count -= 1;
                        }
                    },
                    selectFood: function(t) {
                        console.log("ji", t.target), this.setData({
                            activeIndex: t.target.dataset.index,
                            viewTo: t.target.dataset.titleid
                        });
                    },
                    calculateHeight: function() {
                        var e = this, o = [], n = 0;
                        o.push(n);
                        var r = t.createSelectorQuery();
                        r.selectAll(".title-group").boundingClientRect(), r.exec(function(t) {
                            for (var r = 0; r < t[0].length; r++) console.log(t[0][r]), n += parseInt(t[0][r].height), 
                            o.push(n);
                            e.setData({
                                heigthArr: o
                            });
                        });
                    },
                    scroll: function(t) {
                        var e = this;
                        clearTimeout(l), l = setTimeout(function() {
                            for (var o = t.detail.scrollTop, n = 0; n < e.heigthArr.length; n++) if (o >= e.heigthArr[n] && o < e.heigthArr[n + 1] && e.activeIndex != n) return e.setData({
                                activeIndex: n
                            }), void (n < 3 ? e.setData({
                                viewToLeft: "title1left"
                            }) : e.setData({
                                viewToLeft: "title" + (n - 2) + "left"
                            }));
                        }, 100);
                    },
                    add: function(t) {
                        var e = t.target.dataset.groupindex, o = t.target.dataset.index, n = this.food[e].items[o].count, r = this.food[e].foodCount, s = this.food[e].items[o].foodId;
                        n += 1, r += 1, this.food[e].foodCount = r, this.food[e].items[o].count = n;
                        var a = this.cart;
                        console.log("购物车", a);
                        for (var c = !1, u = {}, l = this.result, d = 0; d < a.length; d++) if (a[d].foodId == s) {
                            c = !0;
                            break;
                        }
                        c ? (a[d].count++, l[d].nums++) : (a.push(i(i({}, this.food[e].items[o]), {}, {
                            groupindex: e,
                            index: o
                        })), u.ids = this.food[e].items[o].id, u.nums = this.food[e].items[o].count, l.push(u));
                        var h = this.totalMoney;
                        h = (h = parseFloat(h) + parseFloat(this.food[e].items[o].price)).toFixed(2), console.log("商品", a), 
                        console.log(l), this.setData({
                            cart: a,
                            totalMoney: h
                        });
                    },
                    reduce: function(t) {
                        console.log("减"), console.log(t);
                        var e = t.target.dataset.groupindex, o = t.target.dataset.index, n = this.result, r = this.food[e].items[o].count, s = this.food[e].foodCount, i = this.food[e].items[o].foodId;
                        r -= 1, s -= 1, this.food[e].foodCount = s, this.food[e].items[o].count = r;
                        for (var a = this.cart, c = 0; c < a.length; c++) if (a[c].foodId == i) {
                            console.log(a[c].count), 1 == a[c].count ? (a.splice(c, 1), n.splice(c, 1)) : (a[c].count--, 
                            n[c].nums--);
                            break;
                        }
                        0 == a.length && this.setData({
                            showCart: !1
                        });
                        var u = this.totalMoney;
                        u = (u - this.food[e].items[o].price).toFixed(2), this.setData({
                            cart: a,
                            totalMoney: u
                        });
                    },
                    check: function() {
                        var e = this;
                        return function(t) {
                            return function() {
                                var e = this, o = arguments;
                                return new Promise(function(n, s) {
                                    var i = t.apply(e, o);
                                    function a(t) {
                                        r(i, n, s, a, c, "next", t);
                                    }
                                    function c(t) {
                                        r(i, n, s, a, c, "throw", t);
                                    }
                                    a(void 0);
                                });
                            };
                        }(n.default.mark(function o() {
                            var r, s, i, a, u;
                            return n.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, e.login().then(function(t) {
                                        console.log("您已登陆！");
                                    });

                                  case 2:
                                    if (console.log(JSON.stringify(e.cart)), !(Number(e.totalMoney) < Number(e.starting_fee) || e.cart.length < 0)) {
                                        o.next = 6;
                                        break;
                                    }
                                    return t.showToast({
                                        title: "未满起送费",
                                        icon: "none"
                                    }), o.abrupt("return", !1);

                                  case 6:
                                    for (r = e, s = [], i = 0; i < e.cart.length; i++) a = e.cart[i], u = a.changeAttribute || [], 
                                    s = [].concat(c(s), [ {
                                        attribute: u.join(","),
                                        nums: a.count,
                                        specs: a.changeSpecs || "",
                                        ids: a.id,
                                        specss: a.specss,
                                        specssPrice: a.specssPrice
                                    } ]);
                                    t.setStorageSync("json", s), t.setStorageSync("cart", e.cart), t.setStorageSync("timeslot", e.store.timeslot), 
                                    t.navigateTo({
                                        url: "/gc_school/pages/public/index?type=3&id=" + e.store.business_id + "&storeType=" + (1 == e.store.type ? 0 : 1)
                                    }), console.log("结算商品", r.result);

                                  case 14:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    listCart: function() {
                        this.cart.length > 0 && this.setData({
                            showCart: !this.showCart
                        });
                    },
                    selectTabItem: function(t) {
                        t.target.dataset.index && this.setData({
                            tabIndex: t.target.dataset.index
                        });
                    },
                    preventScrollSwiper: function() {
                        return !1;
                    },
                    showStoreDetail: function() {
                        this.setData({
                            showModal: !0
                        });
                    },
                    closeModal: function(t) {
                        this.setData({
                            showModal: !1
                        });
                    }
                }
            };
            e.default = h;
        }).call(this, o("543d").default);
    },
    "1ef8": function(t, e, o) {
        o.r(e);
        var n = o("0eea"), r = o.n(n);
        for (var s in n) "default" !== s && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = r.a;
    },
    4265: function(t, e, o) {},
    df3e: function(t, e, o) {
        (function(t) {
            o("a8cf"), n(o("66fd"));
            var e = n(o("0e83"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, t(e.default);
        }).call(this, o("543d").createPage);
    },
    ef44: function(t, e, o) {
        o.d(e, "b", function() {
            return r;
        }), o.d(e, "c", function() {
            return s;
        }), o.d(e, "a", function() {
            return n;
        });
        var n = {
            cuCustom: function() {
                return o.e("colorui/components/cu-custom").then(o.bind(null, "24dd"));
            }
        }, r = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.food, function(e, o) {
                return {
                    $orig: t.__get_orig(e),
                    l0: t.__map(e.items, function(e, o) {
                        var n = t.__get_orig(e), r = e.stock > 0 && (e.attribute || e.specs) ? t.cart.length > 0 && t.cart.filter(function(t) {
                            return t.id == e.id;
                        }).length > 0 : null;
                        return {
                            $orig: n,
                            g0: r,
                            g1: e.stock > 0 && (e.attribute || e.specs) && r ? !e.quota || e.quota && e.quota > t.cart.filter(function(t) {
                                return t.id == e.id;
                            }).map(function(t) {
                                return t.count;
                            }).reduce(function(t, e) {
                                return t + e;
                            }) : null
                        };
                    })
                };
            })), o = 0 != t.store.is_open ? Number(t.totalMoney) : null, n = 0 != t.store.is_open ? Number(t.starting_fee) : null, r = t.curItem.id ? (1 * t.curItem.price + 1 * t.specssPrice).toFixed(2) : null, s = t.curItem.id ? t.cart.length > 0 && t.cart.filter(function(e) {
                return e.id == t.curItem.id;
            }).length > 0 : null, i = t.curItem.id && s ? !t.curItem.quota || t.curItem.quota && t.curItem.count + t.cart.filter(function(e) {
                return e.id == t.curItem.id;
            }).map(function(t) {
                return t.count;
            }).reduce(function(t, e) {
                return t + e;
            }) < t.curItem.quota : null, a = t.__map(t.cart, function(e, o) {
                return {
                    $orig: t.__get_orig(e),
                    g5: e.specss ? e.specss.map(function(t) {
                        return t.type;
                    }).join(",") || "" : null
                };
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    l1: e,
                    m0: o,
                    m1: n,
                    g2: r,
                    g3: s,
                    g4: i,
                    l2: a
                }
            });
        }, s = [];
    },
    f55d: function(t, e, o) {
        var n = o("4265");
        o.n(n).a;
    }
}, [ [ "df3e", "common/runtime", "common/vendor" ] ] ]);