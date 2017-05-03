!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    var o = []
      , i = e(document)
      , t = navigator.userAgent.toLowerCase()
      , n = e(window)
      , s = []
      , a = {
        ieQuirks: null,
        msie: /msie/.test(t) && !/opera/.test(t),
        opera: /opera/.test(t)
    };
    a.ie6 = a.msie && /msie 6./.test(t) && "object" != typeof window.XMLHttpRequest,
    a.ie7 = a.msie && /msie 7.0/.test(t),
    e.modal = function(o, i) {
        return e.modal.impl.init(o, i)
    }
    ,
    e.modal.close = function() {
        e.modal.impl.close()
    }
    ,
    e.modal.focus = function(o) {
        e.modal.impl.focus(o)
    }
    ,
    e.modal.setContainerDimensions = function() {
        e.modal.impl.setContainerDimensions()
    }
    ,
    e.modal.setPosition = function() {
        e.modal.impl.setPosition()
    }
    ,
    e.modal.update = function(o, i) {
        e.modal.impl.update(o, i)
    }
    ,
    e.fn.modal = function(o) {
        return e.modal.impl.init(this, o)
    }
    ,
    e.modal.defaults = {
        appendTo: "body",
        focus: !0,
        opacity: 50,
        overlayId: "simplemodal-overlay",
        overlayCss: {},
        containerId: "simplemodal-container",
        containerCss: {},
        dataId: "simplemodal-data",
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: !1,
        autoPosition: !0,
        zIndex: 1e3,
        close: !0,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: "simplemodal-close",
        escClose: !0,
        overlayClose: !1,
        fixed: !0,
        position: null,
        persist: !1,
        modal: !0,
        onOpen: null,
        onShow: null,
        onClose: null
    },
    e.modal.impl = {
        d: {},
        init: function(o, i) {
            var t = this;
            if (t.d.data)
                return !1;
            if (a.ieQuirks = a.msie && !e.support.boxModel,
            t.o = e.extend({}, e.modal.defaults, i),
            t.zIndex = t.o.zIndex,
            t.occb = !1,
            "object" == typeof o)
                o = o instanceof e ? o : e(o),
                t.d.placeholder = !1,
                o.parent().parent().size() > 0 && (o.before(e("<span></span>").attr("id", "simplemodal-placeholder").css({
                    display: "none"
                })),
                t.d.placeholder = !0,
                t.display = o.css("display"),
                t.o.persist || (t.d.orig = o.clone(!0)));
            else {
                if ("string" != typeof o && "number" != typeof o)
                    return alert("SimpleModal Error: Unsupported data type: " + typeof o),
                    t;
                o = e("<div></div>").html(o)
            }
            return t.create(o),
            o = null,
            t.open(),
            e.isFunction(t.o.onShow) && t.o.onShow.apply(t, [t.d]),
            t
        },
        create: function(i) {
            var t = this;
            t.getDimensions(),
            t.o.modal && a.ie6 && (t.d.iframe = e('<iframe src="javascript:false;"></iframe>').css(e.extend(t.o.iframeCss, {
                display: "none",
                opacity: 0,
                position: "fixed",
                height: s[0],
                width: s[1],
                zIndex: t.o.zIndex,
                top: 0,
                left: 0
            })).appendTo(t.o.appendTo)),
            t.d.overlay = e("<div></div>").attr("id", t.o.overlayId).addClass("simplemodal-overlay").css(e.extend(t.o.overlayCss, {
                display: "none",
                opacity: t.o.opacity / 100,
                height: t.o.modal ? o[0] : 0,
                width: t.o.modal ? o[1] : 0,
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: t.o.zIndex + 1
            })).appendTo(t.o.appendTo),
            t.d.container = e("<div></div>").attr("id", t.o.containerId).addClass("simplemodal-container").css(e.extend({
                position: t.o.fixed ? "fixed" : "absolute"
            }, t.o.containerCss, {
                display: "none",
                zIndex: t.o.zIndex + 2
            })).append(t.o.close && t.o.closeHTML ? e(t.o.closeHTML).addClass(t.o.closeClass) : "").appendTo(t.o.appendTo),
            t.d.wrap = e("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                height: "100%",
                outline: 0,
                width: "100%"
            }).appendTo(t.d.container),
            t.d.data = i.attr("id", i.attr("id") || t.o.dataId).addClass("simplemodal-data").css(e.extend(t.o.dataCss, {
                display: "none"
            })).appendTo("body"),
            i = null,
            t.setContainerDimensions(),
            t.d.data.appendTo(t.d.wrap),
            (a.ie6 || a.ieQuirks) && t.fixIE()
        },
        bindEvents: function() {
            var t = this;
            e("." + t.o.closeClass).bind("click.simplemodal", function(e) {
                e.preventDefault(),
                t.close()
            }),
            t.o.modal && t.o.close && t.o.overlayClose && t.d.overlay.bind("click.simplemodal", function(e) {
                e.preventDefault(),
                t.close()
            }),
            i.bind("keydown.simplemodal", function(e) {
                t.o.modal && 9 === e.keyCode ? t.watchTab(e) : t.o.close && t.o.escClose && 27 === e.keyCode && (e.preventDefault(),
                t.close())
            }),
            n.bind("resize.simplemodal orientationchange.simplemodal", function() {
                t.getDimensions(),
                t.o.autoResize ? t.setContainerDimensions() : t.o.autoPosition && t.setPosition(),
                a.ie6 || a.ieQuirks ? t.fixIE() : t.o.modal && (t.d.iframe && t.d.iframe.css({
                    height: s[0],
                    width: s[1]
                }),
                t.d.overlay.css({
                    height: o[0],
                    width: o[1]
                }))
            })
        },
        unbindEvents: function() {
            e("." + this.o.closeClass).unbind("click.simplemodal"),
            i.unbind("keydown.simplemodal"),
            n.unbind(".simplemodal"),
            this.d.overlay.unbind("click.simplemodal")
        },
        fixIE: function() {
            var o = this
              , i = o.o.position;
            e.each([o.d.iframe || null, o.o.modal ? o.d.overlay : null, "fixed" === o.d.container.css("position") ? o.d.container : null], function(e, o) {
                if (o) {
                    var t = "document.body.clientHeight"
                      , n = "document.body.clientWidth"
                      , s = "document.body.scrollHeight"
                      , a = "document.body.scrollLeft"
                      , d = "document.body.scrollTop"
                      , l = "document.body.scrollWidth"
                      , r = "document.documentElement.clientHeight"
                      , c = "document.documentElement.clientWidth"
                      , p = "document.documentElement.scrollLeft"
                      , m = "document.documentElement.scrollTop"
                      , u = o[0].style;
                    if (u.position = "absolute",
                    e < 2)
                        u.removeExpression("height"),
                        u.removeExpression("width"),
                        u.setExpression("height", "" + s + " > " + t + " ? " + s + " : " + t + ' + "px"'),
                        u.setExpression("width", "" + l + " > " + n + " ? " + l + " : " + n + ' + "px"');
                    else {
                        var h, f;
                        if (i && i.constructor === Array) {
                            var v = i[0] ? "number" == typeof i[0] ? i[0].toString() : i[0].replace(/px/, "") : o.css("top").replace(/px/, "");
                            if (h = v.indexOf("%") === -1 ? v + " + (t = " + m + " ? " + m + " : " + d + ') + "px"' : parseInt(v.replace(/%/, "")) + " * ((" + r + " || " + t + ") / 100) + (t = " + m + " ? " + m + " : " + d + ') + "px"',
                            i[1]) {
                                var g = "number" == typeof i[1] ? i[1].toString() : i[1].replace(/px/, "");
                                f = g.indexOf("%") === -1 ? g + " + (t = " + p + " ? " + p + " : " + a + ') + "px"' : parseInt(g.replace(/%/, "")) + " * ((" + c + " || " + n + ") / 100) + (t = " + p + " ? " + p + " : " + a + ') + "px"'
                            }
                        } else
                            h = "(" + r + " || " + t + ") / 2 - (this.offsetHeight / 2) + (t = " + m + " ? " + m + " : " + d + ') + "px"',
                            f = "(" + c + " || " + n + ") / 2 - (this.offsetWidth / 2) + (t = " + p + " ? " + p + " : " + a + ') + "px"';
                        u.removeExpression("top"),
                        u.removeExpression("left"),
                        u.setExpression("top", h),
                        u.setExpression("left", f)
                    }
                }
            })
        },
        focus: function(o) {
            var i = this
              , t = o && e.inArray(o, ["first", "last"]) !== -1 ? o : "first"
              , n = e(":input:enabled:visible:" + t, i.d.wrap);
            setTimeout(function() {
                n.length > 0 ? n.focus() : i.d.wrap.focus()
            }, 10)
        },
        getDimensions: function() {
            var e = "undefined" == typeof window.innerHeight ? n.height() : window.innerHeight;
            o = [i.height(), i.width()],
            s = [e, n.width()]
        },
        getVal: function(e, o) {
            return e ? "number" == typeof e ? e : "auto" === e ? 0 : e.indexOf("%") > 0 ? parseInt(e.replace(/%/, "")) / 100 * ("h" === o ? s[0] : s[1]) : parseInt(e.replace(/px/, "")) : null
        },
        update: function(e, o) {
            var i = this;
            return !!i.d.data && (i.d.origHeight = i.getVal(e, "h"),
            i.d.origWidth = i.getVal(o, "w"),
            i.d.data.hide(),
            e && i.d.container.css("height", e),
            o && i.d.container.css("width", o),
            i.setContainerDimensions(),
            i.d.data.show(),
            i.o.focus && i.focus(),
            i.unbindEvents(),
            void i.bindEvents())
        },
        setContainerDimensions: function() {
            var e = this
              , o = a.ie6 || a.ie7
              , i = e.d.origHeight ? e.d.origHeight : a.opera ? e.d.container.height() : e.getVal(o ? e.d.container[0].currentStyle.height : e.d.container.css("height"), "h")
              , t = e.d.origWidth ? e.d.origWidth : a.opera ? e.d.container.width() : e.getVal(o ? e.d.container[0].currentStyle.width : e.d.container.css("width"), "w")
              , n = e.d.data.outerHeight(!0)
              , d = e.d.data.outerWidth(!0);
            e.d.origHeight = e.d.origHeight || i,
            e.d.origWidth = e.d.origWidth || t;
            var l = e.o.maxHeight ? e.getVal(e.o.maxHeight, "h") : null
              , r = e.o.maxWidth ? e.getVal(e.o.maxWidth, "w") : null
              , c = l && l < s[0] ? l : s[0]
              , p = r && r < s[1] ? r : s[1]
              , m = e.o.minHeight ? e.getVal(e.o.minHeight, "h") : "auto";
            i = i ? e.o.autoResize && i > c ? c : i < m ? m : i : n ? n > c ? c : e.o.minHeight && "auto" !== m && n < m ? m : n : m;
            var u = e.o.minWidth ? e.getVal(e.o.minWidth, "w") : "auto";
            t = t ? e.o.autoResize && t > p ? p : t < u ? u : t : d ? d > p ? p : e.o.minWidth && "auto" !== u && d < u ? u : d : u,
            e.d.container.css({
                height: i,
                width: t
            }),
            e.d.wrap.css({
                overflow: n > i || d > t ? "auto" : "visible"
            }),
            e.o.autoPosition && e.setPosition()
        },
        setPosition: function() {
            var e, o, i = this, t = s[0] / 2 - i.d.container.outerHeight(!0) / 2, a = s[1] / 2 - i.d.container.outerWidth(!0) / 2, d = "fixed" !== i.d.container.css("position") ? n.scrollTop() : 0;
            i.o.position && "[object Array]" === Object.prototype.toString.call(i.o.position) ? (e = d + (i.o.position[0] || t),
            o = i.o.position[1] || a) : (e = d + t,
            o = a),
            i.d.container.css({
                left: o,
                top: e
            })
        },
        watchTab: function(o) {
            var i = this;
            if (e(o.target).parents(".simplemodal-container").length > 0) {
                if (i.inputs = e(":input:enabled:visible:first, :input:enabled:visible:last", i.d.data[0]),
                !o.shiftKey && o.target === i.inputs[i.inputs.length - 1] || o.shiftKey && o.target === i.inputs[0] || 0 === i.inputs.length) {
                    o.preventDefault();
                    var t = o.shiftKey ? "last" : "first";
                    i.focus(t)
                }
            } else
                o.preventDefault(),
                i.focus()
        },
        open: function() {
            var o = this;
            o.d.iframe && o.d.iframe.show(),
            e.isFunction(o.o.onOpen) ? o.o.onOpen.apply(o, [o.d]) : (o.d.overlay.show(),
            o.d.container.show(),
            o.d.data.show()),
            o.o.focus && o.focus(),
            o.bindEvents()
        },
        close: function() {
            var o = this;
            if (!o.d.data)
                return !1;
            if (o.unbindEvents(),
            e.isFunction(o.o.onClose) && !o.occb)
                o.occb = !0,
                o.o.onClose.apply(o, [o.d]);
            else {
                if (o.d.placeholder) {
                    var i = e("#simplemodal-placeholder");
                    o.o.persist ? i.replaceWith(o.d.data.removeClass("simplemodal-data").css("display", o.display)) : (o.d.data.hide().remove(),
                    i.replaceWith(o.d.orig))
                } else
                    o.d.data.hide().remove();
                o.d.container.hide().remove(),
                o.d.overlay.hide(),
                o.d.iframe && o.d.iframe.hide().remove(),
                o.d.overlay.remove(),
                o.d = {}
            }
        }
    }
});
