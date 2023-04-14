(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/drag-button/drag-button" ], {
    "0da5": function(t, e, i) {},
    "0fe5": function(t, e, i) {
        var n = i("0da5");
        i.n(n).a;
    },
    "113d": function(t, e, i) {
        i.r(e);
        var n = i("76aa"), o = i.n(n);
        for (var h in n) "default" !== h && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(h);
        e.default = o.a;
    },
    "76aa": function(t, e, i) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                name: "drag-button",
                props: {
                    isDock: {
                        type: Boolean,
                        default: !1
                    },
                    existTabBar: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        top: -101,
                        left: 0,
                        width: 0,
                        height: 0,
                        offsetWidth: 0,
                        offsetHeight: 0,
                        windowWidth: 0,
                        windowHeight: 0,
                        isMove: !0,
                        edge: 10,
                        text: "按钮",
                        fileUrl: ""
                    };
                },
                mounted: function() {
                    var e = this, i = t.getSystemInfoSync();
                    this.fileUrl = this.$parent.fileUrl, this.windowWidth = i.windowWidth, this.windowHeight = i.windowHeight, 
                    i.windowTop && (this.windowHeight += i.windowTop), console.log(i), t.createSelectorQuery().in(this).select("#_drag_button").boundingClientRect(function(t) {
                        e.width = t.width, e.height = t.height, e.offsetWidth = t.width / 2, e.offsetHeight = t.height / 2, 
                        e.left = e.windowWidth - e.width - e.edge, e.top = 500;
                    }).exec();
                },
                methods: {
                    click: function() {
                        this.$emit("btnClick");
                    },
                    touchstart: function(t) {
                        this.$emit("btnTouchstart");
                    },
                    touchmove: function(t) {
                        if (1 !== t.touches.length) return !1;
                        this.isMove = !0, this.left = t.touches[0].clientX - this.offsetWidth;
                        var e = t.touches[0].clientY - this.offsetHeight, i = this.windowHeight - this.height - this.edge;
                        e < this.edge ? this.top = this.edge : this.top = e > i ? i : e;
                    },
                    touchend: function(t) {
                        if (this.isDock) {
                            var e = this.windowWidth - this.width - this.edge;
                            this.left < this.windowWidth / 2 - this.offsetWidth ? this.left = this.edge : this.left = e;
                        }
                        this.isMove = !1, this.$emit("btnTouchend");
                    }
                }
            };
            e.default = i;
        }).call(this, i("543d").default);
    },
    e605: function(t, e, i) {
        i.r(e);
        var n = i("f848"), o = i("113d");
        for (var h in o) "default" !== h && function(t) {
            i.d(e, t, function() {
                return o[t];
            });
        }(h);
        i("0fe5");
        var d = i("f0c5"), s = Object(d.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = s.exports;
    },
    f848: function(t, e, i) {
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return o;
        }), i.d(e, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/drag-button/drag-button-create-component", {
    "components/drag-button/drag-button-create-component": function(t, e, i) {
        i("543d").createComponent(i("e605"));
    }
}, [ [ "components/drag-button/drag-button-create-component" ] ] ]);