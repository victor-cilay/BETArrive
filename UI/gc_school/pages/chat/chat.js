(global.webpackJsonp = global.webpackJsonp || []).push([ [ "gc_school/pages/chat/chat" ], {
    "4e6f": function(t, e, i) {
        i.r(e);
        var s = i("edc3"), n = i("9654");
        for (var o in n) "default" !== o && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(o);
        i("57cc");
        var a = i("f0c5"), r = Object(a.a)(n.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        e.default = r.exports;
    },
    "57cc": function(t, e, i) {
        var s = i("c91f");
        i.n(s).a;
    },
    "5f9c": function(t, e, i) {
        (function(t) {
            i("a8cf"), s(i("66fd"));
            var e = s(i("4e6f"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = i, t(e.default);
        }).call(this, i("543d").createPage);
    },
    6389: function(t, e, i) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(i("e767")), n = a(i("1d05")), o = a(i("a151"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var r = getApp(), c = {
                data: function() {
                    return {
                        emojiUrl: o.default.url.replace(/api\//g, ""),
                        textMsg: "",
                        isHistoryLoading: !1,
                        scrollAnimation: !1,
                        scrollTop: 0,
                        scrollToView: "",
                        msgList: [],
                        msgImgList: [],
                        myuid: "",
                        RECORDER: t.getRecorderManager(),
                        isVoice: !1,
                        voiceTis: "按住 说话",
                        recordTis: "手指上滑 取消发送",
                        recording: !1,
                        willStop: !1,
                        initPoint: {
                            identifier: 0,
                            Y: 0
                        },
                        recordTimer: null,
                        recordLength: 0,
                        AUDIO: t.createInnerAudioContext(),
                        playMsgid: null,
                        VoiceTimer: null,
                        popupLayerClass: "",
                        hideMore: !0,
                        hideEmoji: !0,
                        emojiList: n.default,
                        windowsState: "",
                        redenvelopeData: {
                            rid: null,
                            from: null,
                            face: null,
                            blessing: null,
                            money: null
                        },
                        s_id: "",
                        userInfo: {},
                        sUserInfo: {},
                        page: 1,
                        bottom: 0,
                        bottomClass: " "
                    };
                },
                onLoad: function(e) {
                    var i = this, n = this;
                    r.globalData.util.request({
                        url: "WechatUser/users",
                        data: {},
                        success: function(e) {
                            n.myuid = e.data.data.u_id, t.setStorageSync("dmhu_id", e.data.data.u_id), n.userInfo = e.data.data;
                        }
                    }, !0), r.globalData.util.request({
                        url: "WechatUser/userss",
                        data: {
                            u_id: e.s_id
                        },
                        success: function(t) {
                            n.sUserInfo = t.data.data;
                        }
                    }, !0), console.log(e, "lllllll"), this.s_id = e.s_id, this.getMsgList(), s.default.socketStart || s.default.init(), 
                    this.AUDIO.onEnded(function(t) {
                        i.playMsgid = null;
                    }), this.RECORDER.onStart(function(t) {
                        i.recordBegin(t);
                    }), this.RECORDER.onStop(function(t) {
                        i.recordEnd(t);
                    });
                    var o = this;
                    s.default.acceptMessage = function(e) {
                        console.log("----------", e), "msg" == e.type && t.showTabBarRedDot({
                            index: 2
                        }), "msg" == e.type && e.data.msg.userinfo.u_id == o.s_id && (console.log("发消息了"), 
                        o.screenMsg(e.data));
                    };
                },
                onShow: function() {
                    this.scrollTop = 9999999;
                },
                methods: {
                    inputFocus: function(t) {
                        this.setData({
                            bottom: t.detail.height
                        }), this.bottom = 0, this.bottomClass = "";
                    },
                    inputBlur: function() {
                        this.bottom = 0, this.bottomClass = "";
                    },
                    screenMsg: function(e) {
                        if ("system" == e.type) switch (e.msg.type) {
                          case "text":
                            this.addSystemTextMsg(e);
                            break;

                          case "redEnvelope":
                            this.addSystemRedEnvelopeMsg(e);
                        } else if ("user" == e.type) {
                            switch (e.msg.type) {
                              case "text":
                                this.addTextMsg(e);
                                break;

                              case "voice":
                                this.addVoiceMsg(e);
                                break;

                              case "img":
                                this.addImgMsg(e);
                                break;

                              case "redEnvelope":
                                this.addRedEnvelopeMsg(e);
                            }
                            e.msg.userinfo.u_id != this.myuid && (console.log("振动"), t.vibrateLong());
                        }
                        this.$nextTick(function() {
                            this.scrollToView = "msg" + e.msg.id;
                        });
                    },
                    subscribe: function() {
                        r.globalData.util.request({
                            url: "SysSite/index",
                            data: {},
                            success: function(e) {
                                t.requestSubscribeMessage({
                                    tmplIds: [ e.list[0].gift_template_id, e.list[0].chat_template_id ],
                                    success: function(t) {
                                        console.log(t);
                                    }
                                });
                            }
                        });
                    },
                    loadHistory: function(t) {
                        var e = this;
                        if (!this.isHistoryLoading) {
                            this.isHistoryLoading = !0, this.scrollAnimation = !1;
                            var i = this.msgList[0].msg.id;
                            setTimeout(function() {
                                var t = e;
                                t.page++, r.globalData.util.request({
                                    url: "ZhChat/getChatRecord",
                                    data: {
                                        s_id: t.s_id,
                                        page: t.page
                                    },
                                    success: function(s) {
                                        if (console.log(s), t.sUserInfo = s.data.data.sdata, s.data.data.data.data.length <= 0) return !1;
                                        for (var n = s.data.data.data.data, o = 0; o < n.length; o++) "user" == n[o].type && "img" == n[o].msg.type && (n[o].msg.content = e.setPicSize(n[o].msg.content), 
                                        e.msgImgList.unshift(n[o].msg.content.url)), e.msgList.unshift(n[n.length - o - 1]);
                                        e.$nextTick(function() {
                                            this.scrollToView = "msg" + i, this.$nextTick(function() {
                                                this.scrollAnimation = !0;
                                            });
                                        }), e.isHistoryLoading = !1;
                                    }
                                }, !0);
                            }, 1e3);
                        }
                    },
                    getMsgList: function() {
                        var t = this;
                        r.globalData.util.request({
                            url: "ZhChat/getChatRecord",
                            data: {
                                s_id: t.s_id,
                                page: t.page
                            },
                            success: function(e) {
                                t.sUserInfo = e.sdata;
                                var i = [];
                                1 == t.page && (i = [ {
                                    type: "system",
                                    msg: {
                                        id: 0,
                                        type: "submsg",
                                        content: {
                                            text: "点击订阅新消息提醒"
                                        }
                                    }
                                } ]), i = e.data.data.data.data, console.log("打印数组", e.data.data.data.data);
                                for (var s = 0; s < i.length; s++) "user" == i[s].type && "img" == i[s].msg.type && (i[s].msg.content = t.setPicSize(i[s].msg.content), 
                                t.msgImgList.push(i[s].msg.content.url));
                                t.msgList = i, t.$nextTick(function() {
                                    t.scrollTop = 9999, t.$nextTick(function() {
                                        t.scrollAnimation = !0;
                                    });
                                });
                            }
                        }, !0);
                    },
                    setPicSize: function(e) {
                        var i = t.upx2px(350), s = t.upx2px(350);
                        if (e.w > i || e.h > s) {
                            var n = e.w / e.h;
                            e.w = n > 1 ? i : s * n, e.h = n > 1 ? i / n : s;
                        }
                        return e;
                    },
                    showMore: function() {
                        this.isVoice = !1, this.hideEmoji = !0, this.hideMore ? (this.hideMore = !1, this.openDrawer()) : this.hideDrawer();
                    },
                    openDrawer: function() {
                        this.popupLayerClass = "showLayer";
                    },
                    hideDrawer: function() {
                        var t = this;
                        this.popupLayerClass = "", setTimeout(function() {
                            t.hideMore = !0, t.hideEmoji = !0;
                        }, 150);
                    },
                    chooseImage: function() {
                        this.getImage("album");
                    },
                    camera: function() {
                        this.getImage("camera");
                    },
                    handRedEnvelopes: function() {
                        t.navigateTo({
                            url: "HM-hand/HM-hand"
                        }), this.hideDrawer();
                    },
                    getImage: function(e) {
                        this.hideDrawer();
                        var i = this;
                        t.chooseImage({
                            counts: 1,
                            sizeType: [ "compressed" ],
                            sourceType: [ "album", "camera" ],
                            success: function(t) {
                                i.uploadimgs({
                                    path: t.tempFilePaths
                                });
                            }
                        });
                    },
                    uploadimgs: function(e) {
                        t.showLoading({
                            title: "上传中...",
                            mask: !0
                        }), console.log("上传中");
                        for (var i = this, s = (i.addedCountss, 0); s < e.path.length; s++) t.uploadFile({
                            url: o.default.url + "Base/upload",
                            filePath: e.path[s],
                            header: {
                                Authorization: t.getStorageSync("token")
                            },
                            name: "file",
                            formData: {
                                wxapp_id: o.default.uniacid
                            },
                            success: function(e) {
                                t.hideLoading();
                                var s = JSON.parse(e.data), n = {
                                    url: s.data,
                                    w: 100,
                                    h: 100
                                };
                                console.log("111", s), console.log(s.status, "---11---"), 200 == s.status ? (console.log("222"), 
                                i.sendMsg(n, "img"), t.hideLoading({})) : t.showToast({
                                    title: s.msg,
                                    icon: "none"
                                });
                            }
                        });
                    },
                    chooseEmoji: function() {
                        this.hideMore = !0, this.hideEmoji ? (this.hideEmoji = !1, this.openDrawer()) : this.hideDrawer();
                    },
                    addEmoji: function(t) {
                        this.textMsg += t.alt;
                    },
                    textareaFocus: function(t) {
                        this.bottom = 0, this.bottomClass = " bottom", "showLayer" == this.popupLayerClass && 0 == this.hideMore && this.hideDrawer();
                    },
                    sendText: function() {
                        if (this.hideDrawer(), this.textMsg) {
                            var t = {
                                text: this.replaceEmoji(this.textMsg)
                            };
                            this.sendMsg(t, "text"), this.textMsg = "";
                        }
                    },
                    replaceEmoji: function(t) {
                        var e = this;
                        return '<div style="display: flex;align-items: center;word-wrap:break-word;">' + t.replace(/\[([^(\]|\[)]*)\]/g, function(t, i) {
                            console.log("item: " + t);
                            for (var s = 0; s < e.emojiList.length; s++) for (var n = e.emojiList[s], o = 0; o < n.length; o++) {
                                var a = n[o];
                                if (a.alt == t) {
                                    var r = '<img src="' + (e.emojiUrl + "/static/emoji/") + a.url + '">';
                                    return console.log("imgstr: " + r), r;
                                }
                            }
                        }) + "</div>";
                    },
                    sendMsg: function(t, e) {
                        var i = this, n = new Date(), a = i.msgList.length > 0 ? i.msgList[i.msgList.length - 1].msg.id : 0;
                        console.log(i.sUserInfo, "对方的用户信息");
                        var r = {
                            u_id: i.userInfo.u_id,
                            face: i.userInfo.avatar,
                            username: i.userInfo.nickname
                        }, c = {
                            type: "user",
                            msg: {
                                id: ++a,
                                wxapp_id: o.default.uniacid,
                                suserinfo: i.s_id,
                                time: n.getHours() + ":" + n.getMinutes(),
                                type: e,
                                userinfo: r,
                                content: t
                            }
                        };
                        console.log(c, "------------------"), i.screenMsg(c), s.default.send({
                            type: "msg",
                            data: c
                        });
                    },
                    addTextMsg: function(t) {
                        this.msgList.push(t);
                    },
                    addVoiceMsg: function(t) {
                        this.msgList.push(t);
                    },
                    addImgMsg: function(t) {
                        t.msg.content = this.setPicSize(t.msg.content), this.msgImgList.push(t.msg.content.url), 
                        this.msgList.push(t);
                    },
                    addRedEnvelopeMsg: function(t) {
                        this.msgList.push(t);
                    },
                    addSystemTextMsg: function(t) {
                        this.msgList.push(t);
                    },
                    addSystemRedEnvelopeMsg: function(t) {
                        this.msgList.push(t);
                    },
                    openRedEnvelope: function(e, i) {
                        var s = this, n = e.content.rid;
                        t.showLoading({
                            title: "加载中..."
                        }), console.log("index: " + i), setTimeout(function() {
                            0 == n ? s.redenvelopeData = {
                                rid: 0,
                                from: "大黑哥",
                                face: "/static/img/im/face/face.jpg",
                                blessing: "恭喜发财，大吉大利",
                                money: "已领完"
                            } : (s.redenvelopeData = {
                                rid: 1,
                                from: "售后客服008",
                                face: "/static/img/im/face/face_2.jpg",
                                blessing: "恭喜发财",
                                money: "0.01"
                            }, e.content.isReceived || (s.sendSystemMsg({
                                text: "你领取了" + (e.userinfo.u_id == s.myuid ? "自己" : e.userinfo.username) + "的红包"
                            }, "redEnvelope"), console.log("this.msgList[index]: " + JSON.stringify(s.msgList[i])), 
                            s.msgList[i].msg.content.isReceived = !0)), t.hideLoading(), s.windowsState = "show";
                        }, 200);
                    },
                    closeRedEnvelope: function() {
                        var t = this;
                        this.windowsState = "hide", setTimeout(function() {
                            t.windowsState = "";
                        }, 200);
                    },
                    sendSystemMsg: function(t, e) {
                        var i = this.msgList[this.msgList.length - 1].msg.id, s = {
                            type: "system",
                            msg: {
                                id: ++i,
                                type: e,
                                content: t
                            }
                        };
                        this.screenMsg(s);
                    },
                    toDetails: function(e) {
                        t.navigateTo({
                            url: "HM-details/HM-details?rid=" + e
                        });
                    },
                    showPic: function(e) {
                        t.previewImage({
                            indicator: "none",
                            current: e.content.url,
                            urls: this.msgImgList
                        });
                    },
                    playVoice: function(t) {
                        console.log(t, "******1"), this.playMsgid = t.id, this.AUDIO.src = t.content.url, 
                        this.$nextTick(function() {
                            this.AUDIO.play();
                        });
                    },
                    voiceBegin: function(t) {
                        t.touches.length > 1 || (this.initPoint.Y = t.touches[0].clientY, this.initPoint.identifier = t.touches[0].identifier, 
                        this.RECORDER.start({
                            format: "mp3"
                        }));
                    },
                    recordBegin: function(t) {
                        var e = this;
                        this.recording = !0, this.voiceTis = "松开 结束", this.recordLength = 0, this.recordTimer = setInterval(function() {
                            e.recordLength++;
                        }, 1e3);
                    },
                    voiceCancel: function() {
                        this.recording = !1, this.voiceTis = "按住 说话", this.recordTis = "手指上滑 取消发送", this.willStop = !0, 
                        this.RECORDER.stop();
                    },
                    voiceIng: function(e) {
                        if (this.recording) {
                            var i = e.touches[0];
                            this.initPoint.Y - i.clientY >= t.upx2px(100) ? (this.willStop = !0, this.recordTis = "松开手指 取消发送") : (this.willStop = !1, 
                            this.recordTis = "手指上滑 取消发送");
                        }
                    },
                    voiceEnd: function(t) {
                        this.recording && (this.recording = !1, this.voiceTis = "按住 说话", this.recordTis = "手指上滑 取消发送", 
                        this.RECORDER.stop());
                    },
                    recordEnd: function(t) {
                        var e = this;
                        clearInterval(this.recordTimer), console.log(t, "录音"), t.path = t.tempFilePath, 
                        t.size = t.fileSize;
                        var i = {
                            count: 1,
                            files: [ t ]
                        };
                        this.willStop ? console.log("取消发送录音") : this.$http.urlFileUpload(i).then(function(t) {
                            var i = {
                                length: 0,
                                url: t[0]
                            }, s = parseInt(e.recordLength / 60), n = e.recordLength % 60;
                            s = s < 10 ? "0" + s : s, n = n < 10 ? "0" + n : n, i.length = s + ":" + n, e.sendMsg(i, "voice");
                        }), this.willStop = !1;
                    },
                    switchVoice: function() {
                        this.hideDrawer(), this.isVoice = !this.isVoice;
                    },
                    discard: function() {}
                }
            };
            e.default = c;
        }).call(this, i("543d").default);
    },
    9654: function(t, e, i) {
        i.r(e);
        var s = i("6389"), n = i.n(s);
        for (var o in s) "default" !== o && function(t) {
            i.d(e, t, function() {
                return s[t];
            });
        }(o);
        e.default = n.a;
    },
    c91f: function(t, e, i) {},
    edc3: function(t, e, i) {
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return o;
        }), i.d(e, "a", function() {
            return s;
        });
        var s = {
            cuCustom: function() {
                return i.e("colorui/components/cu-custom").then(i.bind(null, "24dd"));
            }
        }, n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
}, [ [ "5f9c", "common/runtime", "common/vendor" ] ] ]);