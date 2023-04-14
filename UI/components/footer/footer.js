(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/footer/footer" ], {
    "37c7": function(t, e, n) {
        var a = n("d5c0");
        n.n(a).a;
    },
    "8c26": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                data: function() {
                    return {
                        tabBar: [ {
                            pagePath: "/gc_school/pages/home/index",
                            iconPath: "/static/tabbar/home.png",
                            selectedIconPath: "/static/tabbar/home_s.png",
                            text: "首页"
                        }, {
                            pagePath: "/gc_school/pages/order/index",
                            iconPath: "/static/tabbar/order.png",
                            selectedIconPath: "/static/tabbar/order_s.png",
                            text: "订单"
                        }, {
                            pagePath: "/gc_school/pages/user/index",
                            iconPath: "/static/tabbar/my.png",
                            selectedIconPath: "/static/tabbar/my_s.png",
                            text: "我的"
                        } ],
                        style: "\n                width: 33%;\n            "
                    };
                },
                props: {
                    flg: {
                        type: String
                    }
                },
                created: function() {
                    var e = t.getStorageSync("sys"), n = e.index_articles_switch;
                    console.log(e), 1 == n && (this.tabBar = [ this.tabBar[0], {
                        pagePath: "/gc_school/pages/article/index",
                        iconPath: "/static/tabbar/quanzi.png",
                        selectedIconPath: "/static/tabbar/quanzi_s.png",
                        text: "圈子"
                    }, this.tabBar[1], this.tabBar[2] ], this.style = "\n               width: 25%;\n           "), 
                    console.log(n);
                },
                methods: {
                    go: function(e) {
                        t.reLaunch({
                            url: e.pagePath
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    },
    9284: function(t, e, n) {
        n.r(e);
        var a = n("8c26"), o = n.n(a);
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        e.default = o.a;
    },
    cb45: function(t, e, n) {
        n.r(e);
        var a = n("d657"), o = n("9284");
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        n("37c7");
        var r = n("f0c5"), i = Object(r.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    d5c0: function(t, e, n) {},
    d657: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/footer/footer-create-component", {
    "components/footer/footer-create-component": function(t, e, n) {
        n("543d").createComponent(n("cb45"));
    }
}, [ [ "components/footer/footer-create-component" ] ] ]);