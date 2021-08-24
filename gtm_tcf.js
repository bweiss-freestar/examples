var Vk = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , Wk = function(a, b) {
        this.s = a;
        this.o = null;
        this.F = {};
        this.aa = 0;
        this.O = void 0 === b ? 500 : b;
        this.C = null
    };
    pa(Wk, Uk);
    var Yk = function(a) {
        return "function" === typeof a.s.__tcfapi || null != Xk(a)
    };
    Wk.prototype.addEventListener = function(a) {
        var b = {}
          , c = yb(function() {
            return a(b)
        })
          , d = 0;
        -1 !== this.O && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.O));
        var e = function(f, h) {
            clearTimeout(d);
            f ? (b = f,
            b.internalErrorState = Vk(b),
            h && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
            h || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
            b.internalErrorState = 3);
            a(b)
        };
        try {
            Zk(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable",
            b.internalErrorState = 3,
            d && (clearTimeout(d),
            d = 0),
            c()
        }
    }
    ;
    Wk.prototype.removeEventListener = function(a) {
        a && a.listenerId && Zk(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var al = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var h = e;
        if (0 === h)
            return !1;
        var k = c;
        2 === c ? (k = 0,
        2 === h && (k = 1)) : 3 === c && (k = 1,
        1 === h && (k = 0));
        var l;
        if (0 === k)
            if (a.purpose && a.vendor) {
                var n = $k(a.vendor.consents, void 0 === d ? "755" : d);
                l = n && "1" === b && a.purposeOneTreatment && ("DE" === a.publisherCC || Bd(xd) && "CH" === a.publisherCC) ? !0 : n && $k(a.purpose.consents, b)
            } else
                l = !0;
        else
            l = 1 === k ? a.purpose && a.vendor ? $k(a.purpose.legitimateInterests, b) && $k(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return l
    }
      , $k = function(a, b) {
        return !(!a || !a[b])
    }
      , Zk = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.s.__tcfapi) {
            var e = a.s.__tcfapi;
            e(b, 2, c, d)
        } else if (Xk(a)) {
            bl(a);
            var f = ++a.aa;
            a.F[f] = c;
            if (a.o) {
                var h = {};
                a.o.postMessage((h.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                h), "*")
            }
        } else
            c({}, !1)
    }
      , Xk = function(a) {
        if (a.o)
            return a.o;
        a.o = Sk(a.s, "__tcfapiLocator");
        return a.o
    }
      , bl = function(a) {
        a.C || (a.C = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.F[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Pk(a.s, a.C))
    };
    var cl = !0;
    cl = !1;
    var dl = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    }
      , el = Ok("", 550)
      , fl = Ok("", 500);
    function gl() {
        var a = Q.tcf || {};
        return Q.tcf = a
    }
    var hl = function(a, b) {
        this.C = a;
        this.o = b;
        this.s = Va();
    }
      , il = function(a) {}
      , jl = function(a) {}
      , pl = function() {
        var a = gl()
          , b = new Wk(m,cl ? 3E3 : -1)
          , c = new hl(b,a);
        if ((kl() ? !0 === m.gtag_enable_tcf_support : !1 !== m.gtag_enable_tcf_support) && !a.active && ("function" === typeof m.__tcfapi || Yk(b))) {
            a.active = !0;
            a.yc = {};
            ll();
            var d = null;
            cl ? d = m.setTimeout(function() {
                ml(a);
                nl(a);
                d = null
            }, fl) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(e) {
                    d && (clearTimeout(d),
                    d = null);
                    if (0 !== e.internalErrorState)
                        ml(a),
                        nl(a),
                        il(c);
                    else {
                        var f;
                        a.gdprApplies = e.gdprApplies;
                        if (!1 === e.gdprApplies)
                            f = ol(),
                            b.removeEventListener(e);
                        else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                            var h = {}, k;
                            for (k in dl)
                                if (dl.hasOwnProperty(k))
                                    if ("1" === k) {
                                        var l, n = e, p = !0;
                                        p = void 0 === p ? !1 : p;
                                        var q;
                                        var r = n;
                                        !1 === r.gdprApplies ? q = !0 : (void 0 === r.internalErrorState && (r.internalErrorState = Vk(r)),
                                        q = "error" === r.cmpStatus || 0 !== r.internalErrorState || "loaded" === r.cmpStatus && ("tcloaded" === r.eventStatus || "useractioncomplete" === r.eventStatus) ? !0 : !1);
                                        l = q ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : al(n, "1", 0) : !1;
                                        h["1"] = l
                                    } else
                                        h[k] = al(e, k, dl[k]);
                            f = h
                        }
                        f && (a.tcString = e.tcString || "tcempty",
                        a.yc = f,
                        nl(a),
                        il(c))
                    }
                }),
                jl(c)
            } catch (e) {
                d && (clearTimeout(d),
                d = null),
                ml(a),
                nl(a)
            }
        }
    };
    function ml(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        cl && (a.yc = ol())
    }
    function ll() {
        var a = {}
          , b = (a.ad_storage = "denied",
        a.wait_for_update = el,
        a);
        de(b)
    }
    var kl = function() {
        var a = !1;
        a = !0;
        return a
    };
    function ol() {
        var a = {}, b;
        for (b in dl)
            dl.hasOwnProperty(b) && (a[b] = !0);
        return a
    }
    function nl(a) {
        var b = {}
          , c = (b.ad_storage = a.yc["1"] ? "granted" : "denied",
        b);
        ql();
        ee(c, 0)
    }
    var rl = function() {
        var a = gl();
        if (a.active && void 0 !== a.loadTime)
            return Number(a.loadTime)
    }
      , ql = function() {
        var a = gl();
        return a.active ? a.tcString || "" : ""
    }
      , sl = function() {
        var a = gl();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }
      , tl = function(a) {
        if (!dl.hasOwnProperty(String(a)))
            return !0;
        var b = gl();
        return b.active && b.yc ? !!b.yc[String(a)] : !0
    };
    var ul = !1;
    var vl = !1;
    function wl(a) {
        var b = String(m.location).split(/[?#]/)[0], c = Df.Rg || m._CONSENT_MODE_SALT, d;
        if (a) {
            var e;
            if (c) {
                var f = b + a + c, h = 1, k, l, n;
                if (f)
                    for (h = 0,
                    l = f.length - 1; 0 <= l; l--)
                        n = f.charCodeAt(l),
                        h = (h << 6 & 268435455) + n + (n << 14),
                        k = h & 266338304,
                        h = 0 != k ? h ^ k >> 21 : h;
                e = String(h)
            } else
                e = "0";
            d = e
        } else
            d = "";
        return d
    }
    function xl(a) {
        function b(t) {
            var v;
            Q.reported_gclid || (Q.reported_gclid = {});
            v = Q.reported_gclid;
            var x;
            x = !h || Wd() && !N(L.D) ? l + (t ? "gcu" : "gcs") : l + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs");
            if (!v[x]) {
                v[x] = !0;
                var y = []
                  , w = {}
                  , z = function(K, M) {
                    M && (y.push(K + "=" + encodeURIComponent(M)),
                    w[K] = !0)
                }
                  , B = "https://www.google.com";
                if (Wd()) {
                    var C = N(L.D);
                    z("gcs", fe());
                    t && z("gcu", "1");
                    Xd() && z("gcd", "G1" + be(Ud));
                    Q.dedupe_gclid || (Q.dedupe_gclid = "" + Cg());
                    z("rnd", Q.dedupe_gclid);
                    if ((!l || n && "aw.ds" !== n) && N(L.D)) {
                        var D = Ah("_gcl_aw");
                        z("gclaw", D.join("."))
                    }
                    z("url", String(m.location).split(/[?#]/)[0]);
                    z("dclid", yl(d, p));
                    var E = !1;
                    E = !0;
                    C || !d && !E || (B = "https://pagead2.googlesyndication.com")
                }
                z("gdpr_consent", ql()),
                z("gdpr", sl());
                "1" === kh(!1)._up && z("gtm_up", "1");
                z("gclid", yl(d, l));
                z("gclsrc", n);
                if (!(w.gclid || w.dclid || w.gclaw) && (z("gbraid", yl(d, q)),
                !w.gbraid && Wd() && N(L.D))) {
                    var H = Ah("_gcl_gb");
                    z("gclgb", H.join("."))
                }
                z("gtm", Nk(!e));
                h && N(L.D) && (Ng(f || {}),
                z("auid", Jg[Kg(f.prefix)] || ""));
                ul || a.gd && z("did", a.gd),
                vl && (a.Kb && z("gdid", a.Kb),
                a.Jb && z("edid", a.Jb));
                var J = B + "/pagead/landing?" + y.join("&");
                Rb(J)
            }
        }
