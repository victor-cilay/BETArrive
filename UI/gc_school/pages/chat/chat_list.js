(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/chat/chat_list" ], {
    "0ca5": function(t, n, a) {
        a.r(n);
        var i = a("5345"), o = a("a61c");
        for (var e in o) "default" !== e && function(t) {
            a.d(n, t, function() {
                return o[t];
            });
        }(e);
        a("bb77");
        var u = a("f0c5"), c = Object(u.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = c.exports;
    },
    5345: function(t, n, a) {
        a.d(n, "b", function() {
            return o;
        }), a.d(n, "c", function() {
            return e;
        }), a.d(n, "a", function() {
            return i;
        });
        var i = {
            cuCustom: function() {
                return a.e("colorui/components/cu-custom").then(a.bind(null, "24dd"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, e = [];
    },
    "709a": function(t, n, a) {
        (function(t) {
            a("a8cf"), i(a("66fd"));
            var n = i(a("0ca5"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(n.default);
        }).call(this, a("543d").createPage);
    },
    a049: function(t, n, a) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = getApp(), i = {
                data: function() {
                    return {
                        modalName: null,
                        listTouchStart: 0,
                        listTouchDirection: null,
                        skin: !1,
                        userInfo: {},
                        myuid: "",
                        chatList: []
                    };
                },
                onLoad: function() {},
                onShow: function() {
                    t.$emit("updateData", {});
                    this.myuid = t.getStorageSync("dmhu_id"), this.getChatList(), t.hideTabBarRedDot({
                        index: 2
                    });
                },
                methods: {
                    ListTouchStart: function(t) {
                        this.listTouchStart = t.touches[0].pageX;
                    },
                    ListTouchMove: function(t) {
                        this.listTouchDirection = t.touches[0].pageX - this.listTouchStart > 0 ? "right" : "left";
                    },
                    ListTouchEnd: function(t) {
                        "left" == this.listTouchDirection ? this.modalName = t.currentTarget.dataset.target : this.modalName = null, 
                        this.listTouchDirection = null;
                    },
                    getChatList: function() {
                        var t = this;
                        a.globalData.util.request({
                            url: "ZhChat/list",
                            data: {},
                            success: function(n) {
                                t.chatList = n.data.data;
                            }
                        }, !0);
                    },
                    removeChat: function(t) {
                        var n = this;
                        n.$http.post("api/ZhChat/removeChat", {
                            chat_id: t
                        }).then(function(t) {
                            n.chatList = [], n.getChatList();
                        });
                    },
                    goChat: function(n) {
                        console.log("前往聊天", n), t.navigateTo({
                            url: "/gc_school/pages/chat/chat?s_id=" + n
                        });
                    }
                }
            };
            n.default = i;
        }).call(this, a("543d").default);
    },
    a61c: function(t, n, a) {
        a.r(n);
        var i = a("a049"), o = a.n(i);
        for (var e in i) "default" !== e && function(t) {
            a.d(n, t, function() {
                return i[t];
            });
        }(e);
        n.default = o.a;
    },
    ba10: function(t, n, a) {},
    bb77: function(t, n, a) {
        var i = a("ba10");
        a.n(i).a;
    }
}, [ [ "709a", "common/runtime", "common/vendor" ] ] ]);