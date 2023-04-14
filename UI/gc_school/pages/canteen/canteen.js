(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/canteen/canteen" ], {
    "162f": function(t, e, n) {
        var a = n("f699");
        n.n(a).a;
    },
    "98f6": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return a;
        });
        var a = {
            cuCustom: function() {
                return n.e("colorui/components/cu-custom").then(n.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    b853: function(t, e, n) {
        n.r(e);
        var a = n("f889"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = o.a;
    },
    c4da: function(t, e, n) {
        (function(t) {
            n("a8cf"), a(n("66fd"));
            var e = a(n("ca4f"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    ca4f: function(t, e, n) {
        n.r(e);
        var a = n("98f6"), o = n("b853");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("162f");
        var i = n("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = u.exports;
    },
    f699: function(t, e, n) {},
    f889: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a"));
            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return r(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return r(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function i(t, e, n, a, o, r, i) {
                try {
                    var u = t[r](i), c = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(c) : Promise.resolve(c).then(a, o);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, o) {
                        var r = t.apply(e, n);
                        function u(t) {
                            i(r, a, o, u, c, "next", t);
                        }
                        function c(t) {
                            i(r, a, o, u, c, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            var c = getApp(), s = {
                data: function() {
                    return {
                        list: [],
                        index_swiperCurrent: 0,
                        goods: [],
                        cate_index: 0,
                        page: 1,
                        is_loadmore: !0,
                        slideList: "",
                        autoplay: 0,
                        duration: "",
                        search_value: "",
                        isTop: !1,
                        navList: [ {
                            icon: "/static/nav/nav1.png",
                            name: "早餐"
                        }, {
                            icon: "/static/nav/nav2.png",
                            name: "早餐"
                        }, {
                            icon: "/static/nav/nav3.png",
                            name: "早餐"
                        }, {
                            icon: "/static/nav/nav4.png",
                            name: "早餐"
                        }, {
                            icon: "/static/nav/nav5.png",
                            name: "早餐"
                        } ],
                        type: 0
                    };
                },
                onLoad: function(t) {
                    this.initData(), this.type = 0;
                },
                created: function() {},
                onShow: function(t) {},
                onReady: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    if (this.is_loadmore) {
                        var t = this.page + 1;
                        this.setData({
                            page: t
                        }), this.getStore();
                    }
                },
                methods: {
                    initData: function() {
                        var e = this;
                        return u(a.default.mark(function n() {
                            var r, i;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return r = e, n.next = 3, e.getLocations();

                                  case 3:
                                    r.getSlide(), i = t.getStorageSync("schoolId"), c.globalData.util.request({
                                        url: "ZhBusinesType/index",
                                        method: "GET",
                                        data: {
                                            s_id: i
                                        },
                                        success: function(t) {
                                            200 == t.data.status && (r.list = o(t.data.data.list), t.data.data.list.length > 0 && r.getStore());
                                        }
                                    });

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    onPageScroll: function(t) {
                        t.scrollTop > 200 ? this.isTop = !0 : this.isTop = !1;
                    },
                    top: function() {
                        t.pageScrollTo({
                            scrollTop: 0,
                            duration: 300
                        });
                    },
                    cateTab: function(t) {
                        this.setData({
                            cate_index: t.currentTarget.dataset.index,
                            goods: [],
                            page: 1,
                            is_loadmore: !0
                        }), this.getStore();
                    },
                    getStore: function() {
                        var e = this;
                        return u(a.default.mark(function n() {
                            var r;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    r = e, t.showLoading({
                                        title: "加载中"
                                    }), c.globalData.util.request({
                                        url: "ZhBusinesType/getBusiness",
                                        method: "GET",
                                        data: {
                                            latitude: t.getStorageSync("latitude"),
                                            longitude: t.getStorageSync("longitude"),
                                            page: r.page,
                                            s_id: t.getStorageSync("schoolId")
                                        },
                                        success: function(e) {
                                            if (t.hideLoading({}), 200 == e.data.status) {
                                                e.data.data.data.length < 6 && (r.is_loadmore = !1);
                                                var n = [].concat(o(r.goods), o(e.data.data.data));
                                                r.goods = n;
                                            }
                                        }
                                    });

                                  case 3:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    toStore: function(e) {
                        t.navigateTo({
                            url: "/gc_school/pages/foold/foold?id=" + e.currentTarget.dataset.id
                        });
                    },
                    index_swiperChange: function(t) {
                        this.setData({
                            index_swiperCurrent: t.detail.current
                        });
                    },
                    slideJump: function(e) {
                        console.log(e), 1 == e.currentTarget.dataset.type ? t.navigateTo({
                            url: e.currentTarget.dataset.url
                        }) : 2 == e.currentTarget.dataset.type ? (console.log("appid是", e.currentTarget.dataset.url), 
                        t.navigateToMiniProgram({
                            appId: e.currentTarget.dataset.url,
                            path: "",
                            extraData: {
                                foo: "bar"
                            },
                            envVersion: "release",
                            success: function(t) {
                                console.log("打开成功");
                            }
                        })) : 3 == e.currentTarget.dataset.type && t.navigateTo({
                            url: "/gc_school/pages/webview/index?url=" + e.currentTarget.dataset.url
                        });
                    },
                    getSlide: function() {
                        var e = this;
                        c.globalData.util.request({
                            url: "Slide/index",
                            data: {
                                s_id: t.getStorageSync("schoolId"),
                                show_type: 5
                            },
                            success: function(t) {
                                e.slideList = t.data.data.list;
                            }
                        });
                    },
                    bank_content: function(e) {
                        t.navigateTo({
                            url: "../store/index?id=" + e.currentTarget.dataset.id
                        });
                    }
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    }
}, [ [ "c4da", "common/runtime", "common/vendor" ] ] ]);