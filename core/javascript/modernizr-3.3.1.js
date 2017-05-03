/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-audio-backgroundsize-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-displaytable-flexbox-flexboxlegacy-fontface-generatedcontent-geolocation-hashchange-history-hsla-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-svg-svgclippaths-textshadow-video-domprefixes-hasevent-mq-prefixes-printshiv-setclasses-testallprops-testprop-teststyles !*/
!function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }
    function a() {
        var e, t, n, a, o, i, s;
        for (var c in b)
            if (b.hasOwnProperty(c)) {
                if (e = [],
                t = b[c],
                t.name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, "function") ? t.fn() : t.fn,
                o = 0; o < e.length; o++)
                    i = e[o],
                    s = i.split("."),
                    1 === s.length ? Modernizr[s[0]] = a : (!Modernizr[s[0]] || Modernizr[s[0]]instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                    Modernizr[s[0]][s[1]] = a),
                    y.push((a ? "" : "no-") + s.join("-"))
            }
    }
    function o(e) {
        var t = w.className
          , n = Modernizr._config.classPrefix || "";
        if (S && (t = t.baseVal),
        Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n),
        S ? w.className.baseVal = t : w.className = t)
    }
    function i() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : S ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function c(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }
    function d() {
        var e = t.body;
        return e || (e = i(S ? "svg" : "body"),
        e.fake = !0),
        e
    }
    function l(e, n, r, a) {
        var o, s, c, l, u = "modernizr", f = i("div"), p = d();
        if (parseInt(r, 10))
            for (; r--; )
                c = i("div"),
                c.id = a ? a[r] : u + (r + 1),
                f.appendChild(c);
        return o = i("style"),
        o.type = "text/css",
        o.id = "s" + u,
        (p.fake ? p : f).appendChild(o),
        p.appendChild(f),
        o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)),
        f.id = u,
        p.fake && (p.style.background = "",
        p.style.overflow = "hidden",
        l = w.style.overflow,
        w.style.overflow = "hidden",
        w.appendChild(p)),
        s = n(f, e),
        p.fake ? (p.parentNode.removeChild(p),
        w.style.overflow = l,
        w.offsetHeight) : f.parentNode.removeChild(f),
        !!s
    }
    function u(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function f(e, t, n) {
        var a;
        for (var o in e)
            if (e[o]in t)
                return n === !1 ? e[o] : (a = t[e[o]],
                r(a, "function") ? u(a, n || t) : a);
        return !1
    }
    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function m(t, r) {
        var a = t.length;
        if ("CSS"in e && "supports"in e.CSS) {
            for (; a--; )
                if (e.CSS.supports(p(t[a]), r))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in e) {
            for (var o = []; a--; )
                o.push("(" + p(t[a]) + ":" + r + ")");
            return o = o.join(" or "),
            l("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }
    function h(e, t, a, o) {
        function d() {
            u && (delete I.style,
            delete I.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o,
        !r(a, "undefined")) {
            var l = m(e, a);
            if (!r(l, "undefined"))
                return l
        }
        for (var u, f, p, h, g, v = ["modernizr", "tspan"]; !I.style; )
            u = !0,
            I.modElem = i(v.shift()),
            I.style = I.modElem.style;
        for (p = e.length,
        f = 0; p > f; f++)
            if (h = e[f],
            g = I.style[h],
            s(h, "-") && (h = c(h)),
            I.style[h] !== n) {
                if (o || r(a, "undefined"))
                    return d(),
                    "pfx" == t ? h : !0;
                try {
                    I.style[h] = a
                } catch (y) {}
                if (I.style[h] != g)
                    return d(),
                    "pfx" == t ? h : !0
            }
        return d(),
        !1
    }
    function g(e, t, n, a, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1)
          , s = (e + " " + j.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? h(s, t, a, o) : (s = (e + " " + E.join(i + " ") + i).split(" "),
        f(s, t, n))
    }
    function v(e, t, r) {
        return g(e, n, n, t, r)
    }
    var y = []
      , b = []
      , x = {
        _version: "3.3.1",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e])
            }, 0)
        },
        addTest: function(e, t, n) {
            b.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            b.push({
                name: null,
                fn: e
            })
        }
    }
      , Modernizr = function() {};
    Modernizr.prototype = x,
    Modernizr = new Modernizr,
    Modernizr.addTest("geolocation", "geolocation"in navigator),
    Modernizr.addTest("history", function() {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? e.history && "pushState"in e.history : !1
    }),
    Modernizr.addTest("postmessage", "postMessage"in e),
    Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect),
    Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e),
            localStorage.removeItem(e),
            !0
        } catch (t) {
            return !1
        }
    }),
    Modernizr.addTest("sessionstorage", function() {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e),
            sessionStorage.removeItem(e),
            !0
        } catch (t) {
            return !1
        }
    });
    var T = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    x._prefixes = T;
    var w = t.documentElement
      , S = "svg" === w.nodeName.toLowerCase();
    S || !function(e, t) {
        function n(e, t) {
            var n = e.createElement("p")
              , r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            r.insertBefore(n.lastChild, r.firstChild)
        }
        function r() {
            var e = C.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function a(e, t) {
            var n = C.elements;
            "string" != typeof n && (n = n.join(" ")),
            "string" != typeof e && (e = e.join(" ")),
            C.elements = n + " " + e,
            d(t)
        }
        function o(e) {
            var t = S[e[T]];
            return t || (t = {},
            w++,
            e[T] = w,
            S[w] = t),
            t
        }
        function i(e, n, r) {
            if (n || (n = t),
            g)
                return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : x.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e),
            !a.canHaveChildren || b.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }
        function s(e, n) {
            if (e || (e = t),
            g)
                return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, s = r(), c = s.length; c > i; i++)
                a.createElement(s[i]);
            return a
        }
        function c(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(n) {
                return C.shivMethods ? i(n, e, t) : t.createElem(n)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(C, t.frag)
        }
        function d(e) {
            e || (e = t);
            var r = o(e);
            return !C.shivCSS || h || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            g || c(e, r),
            e
        }
        function l(e) {
            for (var t, n = e.getElementsByTagName("*"), a = n.length, o = RegExp("^(?:" + r().join("|") + ")$", "i"), i = []; a--; )
                t = n[a],
                o.test(t.nodeName) && i.push(t.applyElement(u(t)));
            return i
        }
        function u(e) {
            for (var t, n = e.attributes, r = n.length, a = e.ownerDocument.createElement(k + ":" + e.nodeName); r--; )
                t = n[r],
                t.specified && a.setAttribute(t.nodeName, t.nodeValue);
            return a.style.cssText = e.style.cssText,
            a
        }
        function f(e) {
            for (var t, n = e.split("{"), a = n.length, o = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), i = "$1" + k + "\\:$2"; a--; )
                t = n[a] = n[a].split("}"),
                t[t.length - 1] = t[t.length - 1].replace(o, i),
                n[a] = t.join("}");
            return n.join("{")
        }
        function p(e) {
            for (var t = e.length; t--; )
                e[t].removeNode()
        }
        function m(e) {
            function t() {
                clearTimeout(i._removeSheetTimer),
                r && r.removeNode(!0),
                r = null
            }
            var r, a, i = o(e), s = e.namespaces, c = e.parentWindow;
            return !P || e.printShived ? e : ("undefined" == typeof s[k] && s.add(k),
            c.attachEvent("onbeforeprint", function() {
                t();
                for (var o, i, s, c = e.styleSheets, d = [], u = c.length, p = Array(u); u--; )
                    p[u] = c[u];
                for (; s = p.pop(); )
                    if (!s.disabled && E.test(s.media)) {
                        try {
                            o = s.imports,
                            i = o.length
                        } catch (m) {
                            i = 0
                        }
                        for (u = 0; i > u; u++)
                            p.push(o[u]);
                        try {
                            d.push(s.cssText)
                        } catch (m) {}
                    }
                d = f(d.reverse().join("")),
                a = l(e),
                r = n(e, d)
            }),
            c.attachEvent("onafterprint", function() {
                p(a),
                clearTimeout(i._removeSheetTimer),
                i._removeSheetTimer = setTimeout(t, 500)
            }),
            e.printShived = !0,
            e)
        }
        var h, g, v = "3.7.3", y = e.html5 || {}, b = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, x = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, T = "_html5shiv", w = 0, S = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                h = "hidden"in e,
                g = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                h = !0,
                g = !0
            }
        }();
        var C = {
            elements: y.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: v,
            shivCSS: y.shivCSS !== !1,
            supportsUnknownElements: g,
            shivMethods: y.shivMethods !== !1,
            type: "default",
            shivDocument: d,
            createElement: i,
            createDocumentFragment: s,
            addElements: a
        };
        e.html5 = C,
        d(t);
        var E = /^$|\b(?:all|print)\b/
          , k = "html5shiv"
          , P = !g && function() {
            var n = t.documentElement;
            return !("undefined" == typeof t.namespaces || "undefined" == typeof t.parentWindow || "undefined" == typeof n.applyElement || "undefined" == typeof n.removeNode || "undefined" == typeof e.attachEvent)
        }();
        C.type += " print",
        C.shivPrint = m,
        m(t),
        "object" == typeof module && module.exports && (module.exports = C)
    }("undefined" != typeof e ? e : this, t);
    var C = "Moz O ms Webkit"
      , E = x._config.usePrefixes ? C.toLowerCase().split(" ") : [];
    x._domPrefixes = E;
    var k = function() {
        function e(e, t) {
            var a;
            return e ? (t && "string" != typeof t || (t = i(t || "div")),
            e = "on" + e,
            a = e in t,
            !a && r && (t.setAttribute || (t = i("div")),
            t.setAttribute(e, ""),
            a = "function" == typeof t[e],
            t[e] !== n && (t[e] = n),
            t.removeAttribute(e)),
            a) : !1
        }
        var r = !("onblur"in t.documentElement);
        return e
    }();
    x.hasEvent = k,
    Modernizr.addTest("hashchange", function() {
        return k("hashchange", e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7
    }),
    Modernizr.addTest("audio", function() {
        var e = i("audio")
          , t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t),
            t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""),
            t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""),
            t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }),
    Modernizr.addTest("canvas", function() {
        var e = i("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }),
    Modernizr.addTest("canvastext", function() {
        return Modernizr.canvas === !1 ? !1 : "function" == typeof i("canvas").getContext("2d").fillText
    }),
    Modernizr.addTest("video", function() {
        var e = i("video")
          , t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t),
            t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""),
            t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""),
            t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }),
    Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", a = 0, o = T.length - 1; o > a; a++)
            e = 0 === a ? "to " : "",
            r += t + T[a] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
        var s = i("a")
          , c = s.style;
        return c.cssText = r,
        ("" + c.backgroundImage).indexOf("gradient") > -1
    }),
    Modernizr.addTest("multiplebgs", function() {
        var e = i("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)",
        /(url\s*\(.*?){3}/.test(e.background)
    }),
    Modernizr.addTest("opacity", function() {
        var e = i("a").style;
        return e.cssText = T.join("opacity:.55;"),
        /^0.55$/.test(e.opacity)
    }),
    Modernizr.addTest("rgba", function() {
        var e = i("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)",
        ("" + e.backgroundColor).indexOf("rgba") > -1
    }),
    Modernizr.addTest("inlinesvg", function() {
        var e = i("div");
        return e.innerHTML = "<svg/>",
        "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    });
    var P = i("input")
      , N = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")
      , z = {};
    Modernizr.input = function(t) {
        for (var n = 0, r = t.length; r > n; n++)
            z[t[n]] = !!(t[n]in P);
        return z.list && (z.list = !(!i("datalist") || !e.HTMLDataListElement)),
        z
    }(N);
    var $ = "search tel url email datetime date month week time datetime-local number range color".split(" ")
      , _ = {};
    Modernizr.inputtypes = function(e) {
        for (var r, a, o, i = e.length, s = "1)", c = 0; i > c; c++)
            P.setAttribute("type", r = e[c]),
            o = "text" !== P.type && "style"in P,
            o && (P.value = s,
            P.style.cssText = "position:absolute;visibility:hidden;",
            /^range$/.test(r) && P.style.WebkitAppearance !== n ? (w.appendChild(P),
            a = t.defaultView,
            o = a.getComputedStyle && "textfield" !== a.getComputedStyle(P, null).WebkitAppearance && 0 !== P.offsetHeight,
            w.removeChild(P)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? P.checkValidity && P.checkValidity() === !1 : P.value != s)),
            _[e[c]] = !!o;
        return _
    }($),
    Modernizr.addTest("hsla", function() {
        var e = i("a").style;
        return e.cssText = "background-color:hsla(120,40%,100%,.5)",
        s(e.backgroundColor, "rgba") || s(e.backgroundColor, "hsla")
    });
    var A = "CSS"in e && "supports"in e.CSS
      , R = "supportsCSS"in e;
    Modernizr.addTest("supports", A || R);
    var M = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test(M.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    });
    var j = x._config.usePrefixes ? C.split(" ") : [];
    x._cssomPrefixes = j;
    var B = x.testStyles = l;
    B("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}", function(e) {
        var t, n = e.childNodes;
        t = n[0].offsetLeft < n[1].offsetLeft,
        Modernizr.addTest("displaytable", t, {
            aliases: ["display-table"]
        })
    }, 2);
    var F = function() {
        var e = navigator.userAgent
          , t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1)
          , n = e.match(/w(eb)?osbrowser/gi)
          , r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9
          , a = 533 > t && e.match(/android/gi);
        return n || a || r
    }();
    F ? Modernizr.addTest("fontface", !1) : B('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
        var r = t.getElementById("smodernizr")
          , a = r.sheet || r.styleSheet
          , o = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : ""
          , i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", i)
    }),
    B('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 7)
    });
    var L = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        }
        : function(t) {
            var n = !1;
            return l("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }),
            n
        }
    }();
    x.mq = L;
    var O = {
        elem: i("modernizr")
    };
    Modernizr._q.push(function() {
        delete O.elem
    });
    var I = {
        style: O.elem.style
    };
    Modernizr._q.unshift(function() {
        delete I.style
    });
    var D = x.testProp = function(e, t, r) {
        return h([e], n, t, r)
    }
    ;
    Modernizr.addTest("textshadow", D("textShadow", "1px 1px")),
    x.testAllProps = g,
    x.testAllProps = v,
    Modernizr.addTest("cssanimations", v("animationName", "a", !0)),
    Modernizr.addTest("backgroundsize", v("backgroundSize", "100%", !0)),
    Modernizr.addTest("bgsizecover", v("backgroundSize", "cover")),
    Modernizr.addTest("borderimage", v("borderImage", "url() 1", !0)),
    Modernizr.addTest("borderradius", v("borderRadius", "0px", !0)),
    Modernizr.addTest("boxshadow", v("boxShadow", "1px 1px", !0)),
    Modernizr.addTest("boxsizing", v("boxSizing", "border-box", !0) && (t.documentMode === n || t.documentMode > 7)),
    function() {
        Modernizr.addTest("csscolumns", function() {
            var e = !1
              , t = v("columnCount");
            try {
                (e = !!t) && (e = new Boolean(e))
            } catch (n) {}
            return e
        });
        for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++)
            e = n[r].toLowerCase(),
            t = v("column" + n[r]),
            ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || v(n[r])),
            Modernizr.addTest("csscolumns." + e, t)
    }(),
    Modernizr.addTest("flexbox", v("flexBasis", "1px", !0)),
    Modernizr.addTest("flexboxlegacy", v("boxDirection", "reverse", !0)),
    Modernizr.addTest("cssreflections", v("boxReflect", "above", !0)),
    Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0)
    }),
    Modernizr.addTest("csstransforms3d", function() {
        var e = !!v("perspective", "1px", !0)
          , t = Modernizr._config.usePrefixes;
        if (e && (!t || "webkitPerspective"in w.style)) {
            var n, r = "#modernizr{width:0;height:0}";
            Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)",
            t && (n += ",(-webkit-transform-3d)")),
            n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",
            B(r + n, function(t) {
                e = 7 === t.offsetWidth && 18 === t.offsetHeight
            })
        }
        return e
    }),
    Modernizr.addTest("csstransitions", v("transition", "all", !0)),
    a(),
    o(y),
    delete x.addTest,
    delete x.addAsyncTest;
    for (var V = 0; V < Modernizr._q.length; V++)
        Modernizr._q[V]();
    e.Modernizr = Modernizr
}(window, document);
