function f(ra) {
  throw ra;
}
var oa = void 0,
  j = !0,
  m = null,
  G = !1;

function sa() {
  return function(ra) {
    return ra
  }
}

//questgrinders.heroku.com/1234567890youhavewon

function X() {
  return function() {}
}

function db(ra) {
  return function(eb) {
    this[ra] = eb
  }
}

function Z(ra) {
  return function() {
    return this[ra]
  }
}

function $(ra) {
  return function() {
    return ra
  }
}
window.Runtime = function(ra, eb) {
  function H(a, b) {
    this.files = {};
    this.root = "";
    a && this.load(a, b)
  }

  function zb(a, b, c) {
    this.x = a;
    this.y = b;
    this.text = c
  }

  function Ca() {
    this.Uc = "";
    this.Iq = this.U = 0;
    this.zd = G
  }

  function S() {
    this.Ce = []
  }

  function aa(a, b, c, d) {
    this.left = a ? a : 0;
    this.top = b ? b : 0;
    this.right = c ? c : 0;
    this.bottom = d ? d : 0
  }

  function ta() {
    this.y = this.x = 0
  }

  function La() {
    this.bb = 12;
    this.Id = 400;
    this.Hd = 0;
    this.Gd = "Arial";
    this.ui = G
  }

  function Ra(a, b) {
    this.g = a;
    this.X = b;
    this.Lb = new S
  }

  function la(a, b, c) {
    this.g = a;
    this.width = b;
    this.height =
      c;
    this.canvas = document.createElement("canvas");
    this.canvas.width = b;
    this.canvas.height = c;
    this.Ad = this.canvas.getContext("2d")
  }

  function Ma() {
    this.WB(Ma.eG);
    this.version = this.XB(navigator.userAgent) || this.XB(navigator.appVersion) || "Unknown version";
    this.WB(Ma.gG)
  }

  function za() {
    this.ut = m;
    this.height = this.width = 0;
    this.Xf = m;
    this.X = this.color = 0;
    this.EG = m;
    this.Aq = this.ou = this.jH = this.iz = this.Bc = 0;
    this.tt = m;
    this.ui = j
  }

  function U() {}

  function Ab() {
    this.X = 0;
    this.name = m;
    this.index = 0
  }

  function fa() {}

  function Sa() {}

  function fb() {}

  function Ta() {}

  function gb() {}

  function Bb() {}

  function Cb() {}

  function Db() {}

  function Eb() {}

  function Fb() {}

  function Gb() {}

  function Hb() {}

  function Ib() {}

  function Jb() {}

  function V() {}

  function xa() {}

  function hb() {}

  function V() {}

  function Kb() {}

  function ib() {}

  function jb() {}

  function kb() {}

  function lb() {}

  function mb() {}

  function nb() {}

  function Lb() {}

  function Mb() {}

  function Nb() {}

  function Ob() {}

  function Pb() {}

  function Qb() {}

  function Rb() {}

  function Sb() {}

  function Tb() {}

  function ia() {}

  function ob() {}

  function ya() {}

  function pb() {}

  function Ub() {}

  function Vb() {}

  function Wb() {}

  function Xb() {}

  function Yb() {}

  function Zb() {}

  function $b() {}

  function ac() {}

  function bc() {}

  function qb() {
    ja.Ac.EH()
  }

  function cc() {
    ja.Ac.JH()
  }

  function p(a, b, c, d) {
    (this.oH = d === j) ? (this.canvas = a.canvas, this.Mq = a.Mq) : "string" === typeof a ? (this.canvas = document.getElementById(a), this.Mq = this.canvas.parentElement) : a instanceof HTMLElement && (this.canvas = document.createElement("canvas"), this.Mq = a);
    a = this.At = document.createElement("div");
    a.appendChild(this.canvas);
    this.Mq.appendChild(a);
    a.style.overflow = "hidden";
    a.style.position = "relative";
    a.style.transform = "translateZ(0)";
    a.style.margin = "0";
    a.style.padding = "0";
    a.style.display = "block";
    a.style.boxSizing = "content-box";
    this.kz = this.lz = this.Ut = m;
    this.fl = 0;
    this.appName = this.Vt = m;
    this.sl = 0;
    this.iu = this.Gz = m;
    this.wn = 0;
    this.ad = this.yg = this.yb = this.P = this.zc = this.hu = m;
    this.Ma = 0;
    this.Um = this.Vm = this.nB = this.mo = this.mn = m;
    this.me = this.mb = this.rw = 0;
    this.rb = this.file = this.frame = m;
    this.qv = this.rv =
      this.ak = 0;
    this.Ki = this.z = m;
    this.Du = G;
    this.oz = this.jf = this.nz = this.pz = this.qz = this.ma = this.ea = this.Wm = this.Yt = this.Sh = this.Qh = 0;
    this.Sm = this.sv = this.mB = m;
    this.rf = this.qf = this.dG = this.cG = this.Tm = 0;
    this.Cc = m;
    this.Ey = 0;
    this.cursor = "auto";
    this.Yq = G;
    this.Dj = this.Kp = m;
    this.zd = G;
    this.ya = this.alpha = this.Jy = this.Ek = this.Dk = 0;
    this.file = b;
    this.Si = "";
    this.path = c;
    b = c.lastIndexOf("/");
    0 <= b && (this.Si = c.substring(0, b + 1));
    this.Rf = 0;
    this.z = m;
    this.ih = this.jh = this.Qd = 0;
    this.Nj = G;
    this.La = [];
    this.Tq = -1;
    this.Sq = this.On =
      this.rB = this.tB = this.sB = this.qB = this.pB = 0;
    this.Df = this.Qc = this.ww = this.bd = m;
    this.lt = G;
    this.Bg = this.Ag = this.Ve = m;
    this.rn = p.tj;
    this.ha = m;
    this.Xs = this.Ws = this.sm = this.lh = 0;
    this.Zb = this.$b = 1;
    this.hasFocus = j;
    this.Lz = this.mt = G;
    this.ju = this.Uq = m;
    this.Zp = -1;
    this.hn = m;
    this.gn = 1E9;
    this.Yp = m;
    0 <= window.location.href.indexOf("192.") && (b = window.location.href.indexOf("21700/"), 0 <= b && (this.Yp = window.location.href.substring(0, b + 6), this.Zp = -1, this.gn = 25));
    this.Lf = G;
    this.fG = 3;
    this.Fm = new S;
    this.Fp = new S;
    this.Hb = [];
    this.Kd = 0;
    this.xg = m;
    this.Iu = "Please touch the screen to start";
    this.fullScreen = G;
    this.DC = "***version***";
    this.Bw = this.xo = 0
  }

  function Ua(a, b, c) {
    this.changedTouches = Array(1);
    this.changedTouches[0] = {
      pageX: a,
      pageY: b,
      target: c,
      identifier: p.Yw
    }
  }

  function z(a) {
    this.g = a;
    this.i = m;
    this.Sz = this.hc = this.Xc = 0;
    this.dq = G;
    this.Gb = 0;
    this.eq = m;
    this.kn = this.ln = 0;
    this.mz = m;
    this.Ec = 0;
    this.Mm = this.cd = this.ab = m;
    this.$z = this.sq = this.wi = this.vi = this.bg = 0;
    this.Md = this.Ld = this.qn = this.Qt = this.Om = m;
    this.en = this.ha = this.Kd = 0
  }

  function ba(a) {
    this.g =
      a;
    this.jb = m;
    this.ht = G;
    this.Ux = j;
    this.xm = this.Qr = m;
    this.cA = 0;
    this.Cj = m;
    this.Gt = G;
    this.jb = Array(ba.fd);
    this.Qr = Array(ba.fd);
    this.xm = Array(ba.fd);
    this.ht = this.Ux = j;
    var b;
    for (b = 0; b < ba.fd; b++) this.jb[b] = m, this.Qr[b] = 100, this.xm[b] = G;
    this.cA = 100;
    b = new Audio;
    a = Array(4);
    a[0] = b.canPlayType("audio/ogg");
    a[1] = b.canPlayType("audio/x-m4a");
    a[2] = b.canPlayType("audio/mpeg");
    a[3] = b.canPlayType("audio/wav");
    for (b = this.Ju = this.yv = 0; 4 > b; b++)
      if ("probably" == a[b] && (this.yv |= 1 << b), "maybe" == a[b]) this.Ju |= 1 << b;
    this.aa = m;
    "undefined" !== typeof AudioContext ? (this.aa = new AudioContext, this.yp = 1) : "undefined" !== typeof webkitAudioContext && (this.aa = new webkitAudioContext, this.yp = 0)
  }

  function dc(a) {
    this.g = a
  }

  function ec(a) {
    this.g = a;
    this.su = G;
    this.t = m;
    this.aa = this.g.aa;
    this.Le = this.g.sB;
    this.color = this.g.rB;
    this.Ph = this.g.pB;
    0 > this.Ph && (this.Ph = this.g.ea / 2);
    this.Rh = this.g.qB;
    0 > this.Rh && (this.Rh = this.g.ma / 2);
    this.size = this.g.tB;
    this.iv = 0;
    this.zp = 25;
    this.ve = 0;
    this.Xf = new Image;
    var b = this;
    this.Xf.onload = function() {
      b.su = j
    };
    this.Xf.src =
      this.g.Si + "Preloader.png"
  }

  function fc(a) {
    this.g = a;
    this.aa = this.g.aa;
    this.width = 100;
    this.height = 12;
    this.position = 0;
    this.IF = 10526880;
    this.borderColor = 8421504;
    this.JF = 0;
    this.rect = new aa;
    this.rect.left = this.g.ea / 2 - this.width / 2;
    this.rect.top = this.g.ma / 2 - this.height / 2;
    this.rect.right = this.rect.left + this.width;
    this.rect.bottom = this.rect.top + this.height;
    this.reset()
  }

  function gc(a) {
    this.g = a;
    this.su = G;
    this.Lc = new Da;
    this.t = new p(this.g, this.g.file, this.g.path, j);
    this.t.$B(this.g, this.g.Sq, 0, this.Lc, this.g.ea,
      this.g.ma);
    this.t.Ht();
    this.t.Du = G;
    this.t.Yi = G;
    this.t.ya &= ~p.Th;
    this.t.qw();
    this.t.mw(0, 0);
    this.t.qo();
    this.Lc.x = this.g.ea / 2 - this.t.frame.Xc / 2;
    this.Lc.y = this.g.ma / 2 - this.t.frame.hc / 2;
    this.oJ = 0 != (this.g.ya & p.NC);
    this.g.La.push(this.t);
    this.dl = 0
  }

  function u(a) {
    this.g = a;
    this.gz = this.fz = this.Dd = this.kd = this.cq = this.Pb = m;
    this.Eb = Array(3);
    this.Fb = Array(3);
    this.X = this.ha = this.nf = this.mf = 0;
    this.touches = Array(3);
    this.jt = G;
    this.Qz = j;
    this.Ge = this.Yf = this.Rz = 0
  }

  function k(a) {
    this.f = a;
    this.p = m;
    this.qg = this.Za = this.Nl =
      this.gw = this.hb = this.Ic = this.tc = this.fw = this.de = 0;
    this.l = this.I = m;
    this.rk = this.eo = this.ho = this.Ol = this.Ui = this.Kb = this.ew = this.Lh = this.fo = this.sk = this.Y = this.V = this.ce = this.be = 0;
    this.hr = this.Vv = this.ir = m;
    this.pr = this.Wv = this.ao = this.Zn = this.bo = this.$n = this.Il = this.Gl = this.Jl = this.Hl = this.Xv = this.Nc = this.Zv = this.Yv = this.mk = this.lk = this.NB = this.Af = this.Pe = this.Oe = this.Wn = this.jk = 0;
    this.ok = m;
    this.gb = this.sr = this.rr = this.nk = this.$v = this.QB = 0;
    this.or = this.Ll = this.Hc = m;
    this.Qe = 0;
    this.nr = this.Ml = m;
    this.Kl =
      0;
    this.qk = m;
    this.lc = 0;
    this.w = this.Xq = m;
    this.pu = Array(2);
    this.bz = 0;
    this.dw = 255;
    this.Zq = this.XH = G
  }

  function hc() {
    this.oy = this.ny = this.my = this.Bm = 0
  }

  function O() {
    this.hv = this.gv = this.Wa = this.td = this.cb = this.Gc = 0;
    this.xf = G;
    this.Kn = this.eB = this.fB = this.gB = this.wl = this.rd = this.Lq = this.sd = this.qd = this.Ji = this.hg = this.Ii = this.ev = this.dv = this.Ah = 0;
    this.xl = this.yl = m;
    this.fv = 0;
    this.Hi = m
  }

  function Dd() {
    this.uf = this.name = m
  }

  function Ed() {
    this.value = m;
    this.xr = this.yr = this.vc = this.$a = 0
  }

  function Fd() {
    this.text = m;
    this.$a =
      0
  }

  function Gd() {
    this.Lb = this.Oh = m;
    this.X = 0
  }

  function ca() {
    this.QH = 0;
    this.T = this.v = m
  }

  function v() {
    this.fi = this.Wg = this.yd = m
  }

  function Na() {
    this.$e = 0;
    this.ei = this.af = m
  }

  function ic() {
    this.tm = this.Mx = this.Lx = this.Ys = this.Zs = 0;
    this.Wk = m
  }

  function Ha() {
    this.a = m;
    this.ek = this.ar = this.lg = 0;
    this.Iv = G;
    this.Tn = 0;
    this.Od = m;
    this.br = this.$q = 0;
    this.Bl = m;
    this.El = this.Cl = this.mg = this.Ni = this.AB = this.dk = this.Al = this.Gv = this.zB = this.Dl = this.Oi = this.Hv = 0;
    this.BB = -1
  }

  function jc(a, b) {
    this.P = a;
    this.g = a.g;
    this.handle = b
  }

  function kc(a) {
    this.g =
      a;
    this.images = this.file = m;
    this.Ie = this.Ai = this.lb = 0;
    this.Bh = this.Hb = this.Ch = this.vj = this.Mj = this.Eh = this.ua = this.oa = this.Wj = m
  }

  function ga() {
    this.g = m;
    this.ua = this.am = this.Zl = this.va = this.Ga = this.height = this.width = this.handle = 0;
    this.oh = this.ml = this.$f = this.zb = m;
    this.Md = this.Ld = this.Ab = 0
  }

  function lc(a) {
    this.g = a;
    this.Jq = this.fc = this.file = m;
    this.ph = 0;
    this.oa = m;
    this.ag = this.Jd = 0;
    this.ua = m;
    this.An = new Aa;
    this.An.Bp()
  }

  function Aa() {
    this.Hd = this.Id = this.bb = this.handle = this.ua = 0;
    this.font = this.Gd = m;
    this.ui =
      G
  }

  function mc(a) {
    this.g = a;
    this.wk = m;
    this.yn = this.Ai = this.lb = 0;
    this.file = this.ua = this.oa = this.Kq = m
  }

  function Va(a) {
    this.Ac = a;
    this.aa = a.ad.aa;
    this.yp = a.ad.yp;
    this.GG = a.ad.GG;
    this.type = 0;
    this.file = a.file;
    this.handle = -1;
    this.ib = this.source = m;
    this.ua = 0;
    this.zm = G;
    this.qh = 0;
    this.name = m;
    this.gi = this.Yk = G;
    this.pi = 0;
    this.qi = this.response = m
  }

  function nc(a) {
    this.name = a;
    this.qI = [];
    this.position = 0
  }

  function P(a) {
    this.Ac = a;
    this.i = m;
    this.TA = this.bg = 0;
    this.Vu = Array(s.Ud + s.rx);
    this.vn = this.rh = 0;
    this.Oj = this.Pf = this.ec =
      this.Qb = this.Jb = this.Cd = this.kg = m;
    this.ze = Array(s.Ud + 1);
    this.SB = G;
    this.De = m;
    this.Qn = this.Sn = this.Pn = this.Rn = 0;
    this.co = G;
    this.pg = m;
    this.tr = 0;
    this.qr = Array(4);
    this.Xn = this.hk = this.gk = G;
    this.mr = this.Hh = this.fk = this.Yb = 0;
    this.jr = this.Kh = G;
    this.ng = m;
    this.Yn = this.ye = this.og = 0;
    this.ik = this.Ih = m;
    this.fh = 0;
    this.rc = G;
    this.gr = this.cw = this.sc = 0;
    this.bw = m;
    this.ym = G;
    this.Ti = m;
    this.MB = 0;
    this.kk = m;
    this.qt = G;
    this.gA = 0
  }

  function K() {
    this.el = this.Ej = this.Ha = this.ne = this.Cb = 0;
    this.Qa = m
  }

  function Q() {}

  function Hd() {
    this.Yy =
      this.id = 0
  }

  function Id() {
    this.Wq = this.Vq = 0
  }

  function Jd(a, b, c, d, e) {
    this.SI = a;
    this.code = b;
    this.iI = c;
    this.hI = d;
    this.xh = e
  }

  function Kd() {
    this.Av = this.zv = this.Li = this.zl = this.Mi = this.ig = 0;
    this.Bv = this.yf = G;
    this.ra = m
  }

  function rb() {
    this.next = m;
    this.type = 0;
    this.name = m;
    this.index = this.kq = this.ro = this.rJ = this.Qd = 0;
    this.gt = G
  }

  function Ba() {
    this.hq = this.Xz = this.wu = this.yu = this.xu = this.of = this.xi = 0;
    this.vu = m;
    this.vu = Array(4);
    var a;
    for (a = 0; 4 > a; a++) this.vu[a] = m
  }

  function oc() {
    this.oa = this.list = m;
    this.gq = this.sf = 0
  }

  function W(a) {
    this.g =
      a;
    this.Jp = this.Ip = this.y = this.x = 0;
    this.qp = this.$j = this.Zj = m;
    this.Wd = G;
    this.Yj = m;
    this.Yx = this.Xx = this.$x = this.Zx = this.Wx = this.Bq = this.zq = this.bm = this.$l = this.ya = this.Wu = 0;
    this.ta = this.sb = this.Sb = m;
    this.Ae = 0;
    this.scale = this.Zb = this.$b = 1;
    this.Ga = this.yo = 320;
    this.va = this.zo = 240
  }

  function ha(a, b, c, d, e, g) {
    this.g = a;
    this.BH = d;
    this.Nd = this.type = 0;
    this.x = b;
    this.y = c;
    this.height = this.width = 0;
    this.Ta = m;
    this.ki = G;
    this.md = m;
    this.borderWidth = 0;
    this.body = this.borderColor = this.yt = this.zj = m;
    if (d)
      if (this.Ta = this.g.zc.Jj(d.of),
        this.type = this.Ta.ue, this.Nd = this.Ta.Wb.ZA, this.borderWidth = this.Ta.Wb.Hq, this.Hz = this.Ta.Wb.En, this.width = this.Ta.Wb.WA, this.height = this.Ta.Wb.XA, this.ki = 0 != this.Ta.Wb.VA, this.zj = this.Ta.Wb.dg, this.yt = this.Ta.Wb.ul, this.borderColor = this.Ta.Wb.Gq, 1 == this.type) this.md = this.g.P.eb(this.Ta.Wb.th), this.width = this.md.width, this.height = this.md.height;
      else {
        if (32 <= this.type) {
          a = this.g.z;
          b = m;
          for (e = c = 0; e < a.Za; e++) {
            for (; a.w[c] == m;) c++;
            b = a.w[c];
            c++;
            if (b.CH == d) break
          }
          this.v = b
        }
      } else {
      this.type = s.tx;
      this.md = e;
      this.width =
        this.md.width;
      this.height = this.md.height;
      switch (g) {
        case 0:
          this.Nd = Y.xx;
          break;
        case 1:
          this.Nd = Y.bp;
          break;
        case 2:
          this.Nd = Y.je;
          break;
        case 3:
          this.Nd = Y.Ns
      }
      this.ki = G
    }
  }

  function s() {
    this.wf = this.vf = this.yh = this.ue = this.In = 0;
    this.Wb = this.cv = m;
    this.dB = this.cB = 0
  }

  function pc() {
    this.gg = this.jc = this.Gi = 0;
    this.Fi = this.Jn = this.zh = m;
    this.Ep = 0
  }

  function Y() {}

  function qc() {
    this.th = 0
  }

  function Ia() {
    this.th = this.En = this.ul = this.dg = this.Fn = this.Di = this.uh = this.Gq = this.Hq = 0
  }

  function A() {
    this.fg = 0;
    this.$u = m;
    this.Mc = this.Uj =
      0;
    this.Fc = this.Sa = this.Ci = this.Gn = this.Hn = this.eg = m;
    this.$A = this.aB = this.YA = 0;
    this.Dn = this.vl = m
  }

  function rc() {
    this.Ke = this.bB = this.wh = this.vh = 0;
    this.av = m
  }

  function sc() {
    this.yy = this.zy = this.xy = 0
  }

  function ka() {
    this.rl = this.En = this.ul = this.dg = this.Fn = this.Di = this.uh = this.Gq = this.Hq = this.Ei = this.Vj = this.Je = this.bv = this.wh = this.vh = 0;
    this.frames = m
  }

  function tc() {
    this.wh = this.vh = this.Ke = 0;
    this.text = m
  }

  function pa() {
    this.xw = this.wo = this.Wl = 0;
    this.Nh = m
  }

  function uc() {
    this.Xj = this.pv = this.ov = 0;
    this.Bb = m
  }

  function E() {
    this.qc =
      this.Ob = 0;
    this.c = m;
    this.cn = this.qa = this.Nb = this.Wf = this.Db = this.Lj = 0;
    this.Ub = m;
    this.ku = 0;
    this.Vp = this.Kz = m;
    this.Wp = this.jl = 0;
    this.G = m;
    this.hh = this.Fd = this.lu = this.M = this.Ba = this.A = this.B = this.ca = this.ba = this.n = this.Vf = this.o = this.Uf = 0;
    this.bn = G;
    this.u = this.nb = this.ja = this.q = this.b = m
  }

  function vc() {
    this.pw = G;
    this.Xf = m;
    this.$ = G;
    this.ia = m;
    this.Wd = j;
    this.$b = this.Zb = 1;
    this.y = this.x = this.Ae = 0;
    this.Bk = m
  }

  function L() {
    this.Ke = this.X = 0;
    this.t = m;
    this.mv = this.lv = 0;
    this.hB = this.fq = -1;
    this.jn = m;
    this.Wd = j
  }

  function wc() {
    this.ae =
      this.vd = this.Gh = 0;
    this.Da = -1;
    this.ub = this.tb = 1;
    this.Oa = this.Fh = this.Q = this.Ja = this.Xa = 0;
    this.Ca = this.D = G;
    this.Qi = this.Pi = 0;
    this.dr = -1;
    this.Ov = this.Mv = this.Nv = this.Lv = this.Kv = this.cr = 0
  }

  function da() {
    this.Pc = this.Oc = this.vc = this.$a = this.ga = this.type = 0;
    this.Vx = this.$ = G;
    this.gd = this.sf = this.sg = this.ko = this.mc = 0;
    this.xj = G;
    this.ia = this.da = m;
    this.Bc = 0;
    this.font = m;
    this.Bd = this.xa = G
  }

  function xc() {
    this.type = this.mc = this.nc = this.Pc = this.Oc = this.ga = this.uk = 0;
    this.$ = j;
    this.sf = 0;
    this.da = m;
    this.gd = 0;
    this.ia = m;
    this.Bc =
      0;
    this.alpha = 1;
    this.Aj = "source-over";
    this.Bd = G
  }

  function yc() {
    this.type = this.mc = this.nc = this.Pc = this.Oc = this.ga = this.uk = 0;
    this.$ = j;
    this.sf = 0;
    this.da = m;
    this.gd = 0;
    this.ia = m;
    this.Bc = 0;
    this.alpha = 1;
    this.Aj = "source-over";
    this.Bd = G
  }

  function zc() {
    this.Ql = m;
    this.lo = this.nc = this.$a = this.vc = 0;
    this.font = m;
    this.$ = j;
    this.UB = this.X = 0;
    this.da = this.ia = m;
    this.xa = G;
    this.rect = new aa;
    this.Pc = this.Oc = 0;
    this.Ua = m;
    this.Bd = G
  }

  function Ac() {
    this.Pc = this.Oc = 0;
    this.ud = m;
    this.Bj = 0;
    this.zg = []
  }

  function Bc(a, b) {
    this.Ra = b.f.Kp.iq(a);
    this.Xu = G;
    this.Zu = this.Cn = this.xv = 0;
    this.xa = G;
    this.$ = j;
    this.da = this.ia = m
  }

  function Wa() {}

  function Cc() {
    this.jn = this.dir = this.y = this.x = 0;
    this.it = G
  }

  function Dc(a) {
    a.file.k();
    this.Aw = a.file.k()
  }

  function Ld(a) {
    this.Qd = a.file.m();
    this.kq = a.file.m();
    this.wp = a.file.k()
  }

  function Md(a) {
    this.color = a.file.Xb()
  }

  function Nd(a) {
    this.dl = a.file.m();
    a.file.m()
  }

  function qa(a) {
    this.wp = a.file.k();
    for (var b = a.file.U, c = 0, d;;) {
      c++;
      d = a.file.m();
      if (0 == d) break;
      d = a.file.k();
      6 < d && a.file.W(d - 6)
    }
    a.file.seek(b);
    this.ka = Array(c);
    for (b = 0; b < c; b++) this.ka[b] = ia.create(a.file)
  }

  function Od(a) {
    var b = a.file.k();
    a.file.W(4);
    this.data = 0;
    6 < b && (this.data = a.file.U, a.file.W(b - 6))
  }

  function ma(a) {
    this.Tf = a.file.k();
    this.YG = a.file.k()
  }

  function Pd(a) {
    a.file.W(4);
    this.U = 0;
    this.id = a.file.k()
  }

  function Ja(a) {
    this.value = a.file.m();
    this.Aw = 0
  }

  function Ec(a) {
    this.key = a.file.k()
  }

  function Qd(a) {
    this.Ib = a.file.J();
    this.xh = a.file.J();
    this.type = a.file.J()
  }

  function na() {}

  function Fc(a) {
    this.Mn = a.file.J();
    this.bk = a.file.J();
    this.Qq = a.file.J();
    this.Rq = a.file.J();
    this.Oq = a.file.J();
    this.tv = a.file.J();
    this.Nq = a.file.m();
    this.Pq = a.file.J();
    this.Nn = a.file.J();
    this.uv = a.file.J()
  }

  function sb(a) {
    this.Mn = a.file.J();
    this.bk = a.file.J();
    this.Qq = a.file.J();
    this.Rq = a.file.J();
    this.Oq = a.file.J();
    this.tv = a.file.J();
    this.Nq = a.file.m();
    this.Pq = a.file.J();
    this.Nn = a.file.J();
    this.uv = a.file.J();
    this.tp = a.file.k();
    this.fy = a.file.k()
  }

  function Gc(a) {
    this.Mn = a.file.J();
    this.bk = a.file.J();
    this.Qq = a.file.J();
    this.Rq = a.file.J();
    this.Oq = a.file.J();
    this.tv = a.file.J();
    this.Nq = a.file.m();
    this.Pq = a.file.J();
    this.Nn = a.file.J();
    this.uv = a.file.J();
    this.tp = a.file.J();
    this.fy = a.file.J();
    a.file.W(4);
    a.file.k()
  }

  function tb(a) {
    this.iJ = a.file.k();
    a.file.k()
  }

  function ea(a) {
    this.value = a.file.k()
  }

  function Xa(a) {
    this.ob = a.file.Ya()
  }

  function Rd(a) {
    this.Qd = a.file.m();
    this.kq = a.file.m()
  }

  function Sd(a) {
    this.FC = a.file.J();
    this.HC = a.file.J();
    this.GC = a.file.J();
    this.IC = a.file.J()
  }

  function Ya() {
    this.yj = []
  }

  function Ea(a) {
    this.jv = -1;
    this.kv = this.pw = G;
    (this.wa = a.getContext("2d")) || f(Error("Failed to init standard renderer"))
  }

  function va() {
    this.Gm = "";
    this.Fy = this.uo = this.vo = this.zC = this.AC = 0
  }

  function Hc() {}

  function t() {
    this.h = this.on = this.nn = this.nq = 0;
    this.fa = this.aA = G;
    this.ah = this.Ky = this.j = this.K = m
  }

  function Ic(a) {
    this.g = a
  }

  function Oa() {}

  function Jc() {
    this.bA = this.d = this.e = this.Na = 0
  }

  function Kc() {
    this.d = this.e = this.Na = 0
  }

  function Lc() {
    this.fb = this.ic = this.ot = this.cf = 0;
    this.RH = m
  }

  function Mc() {
    this.d = this.e = this.Hp = this.za = 0
  }

  function Nc() {
    this.fb = this.ic = this.yi = 0
  }

  function Oc() {}

  function Pc() {
    this.d = this.e = this.Jm = this.Na =
      this.za = 0
  }

  function Qc() {
    this.Hu;
    this.Rj = this.Tj = this.Zf = this.se = this.C = 0;
    this.Yd = m
  }

  function Rc() {
    this.d = this.e = this.Na = 0
  }

  function Sc() {
    this.Gu = this.d = this.e = this.Na = 0
  }

  function Tc() {
    this.yi;
    this.ic;
    this.fb
  }

  function Uc() {
    this.d = this.e = this.Uy = this.za = this.Na = 0
  }

  function Vc() {
    this.d = this.e = this.Na = 0
  }

  function Wc() {
    this.Rb = this.d = this.e = this.Na = 0
  }

  function Xc() {
    this.Qj = this.Pj = this.d = this.e = this.Na = 0
  }

  function Yc() {
    this.ll = this.d = this.e = this.Ty = this.Im = this.za = 0
  }

  function Zc() {
    this.mq = this.d = this.e = this.Im =
      this.za = 0
  }

  function $c() {
    this.lq = this.qq = this.rq = this.oq = this.Yc = this.Fu = this.S = this.R = this.Rj = this.Tj = this.Zf = this.se = this.C = this.KC = this.Vr = this.Cw = 0
  }

  function ad() {
    this.pf = this.Sj = this.d = this.e = this.za = this.Na = 0
  }

  function bd() {}

  function cd() {
    this.d = this.e = this.za = 0
  }

  function dd(a, b) {
    var c = new Ca;
    ja.Ac = new p(a, c, b);
    c.getFile(b, ed)
  }

  function ed() {
    ja.Ac.load()
  }

  function Za() {
    ja.Ac.qo()
  }

  function Da() {
    this.y = this.x = 0;
    this.visible = j;
    this.children = [];
    this.Lf = G
  }

  function ua() {}

  function F() {
    this.H = m;
    this.lineWidth =
      this.va = this.Ga = this.width = this.height = this.lineWidth = 0
  }

  function Td() {
    this.H = m;
    this.Ae = 0;
    this.$b = this.Zb = 1;
    this.vw = 0
  }

  function w() {
    this.a = m;
    this.L = this.uc = this.Jc = this.zr = this.Pl = this.wr = this.vr = 0;
    this.tg = m
  }

  function fd() {
    this.Cq = 0;
    this.Lb = m
  }

  function gd() {
    this.Dq = 0;
    this.Oh = m
  }

  function Fa() {
    this.jw = 0;
    this.fe = this.$c = m
  }

  function Pa(a) {
    this.g = a;
    this.Gj = m;
    this.Eq = 0
  }

  function ub() {
    this.handle = 0
  }

  function Ka() {
    this.T = this.v = m
  }

  function hd() {}

  function id() {}

  function jd() {}

  function Qa() {
    this.element = m;
    this.sy = G
  }

  function R() {
    this.Uu = 100;
    this.yq = this.RA = this.SA = this.ql = 0
  }

  function kd() {
    this.xn = 0;
    this.od = m
  }

  function ld() {
    this.jA = this.kA = this.hA = this.iA = this.pn = 0
  }

  function md() {
    this.qA = this.pA = this.oA = this.rA = 0
  }

  function nd() {
    this.vA = this.tA = this.uA = this.sA = 0
  }

  function od() {
    this.QA = this.OA = this.Tu = this.LA = this.MA = this.pl = 0;
    this.Ka = m
  }

  function pd() {
    this.Ou = this.mA = this.Pu = this.Ku = this.Nu = this.Mu = this.Lu = this.nA = 0;
    this.$d = m
  }

  function qd() {
    this.DA = this.CA = this.EA = this.BA = this.AA = this.FA = 0
  }

  function rd() {
    this.HA = this.GA =
      this.IA = this.Su = this.Ru = this.JA = 0
  }

  function sd() {}

  function td() {
    this.Dc = m;
    this.data = 0
  }

  function I() {
    this.a = m;
    this.Vi = this.ee = this.rg = this.vb = this.Pd = this.jo = this.io = 0
  }

  function wa() {
    this.zs = this.Qo = this.Kk = this.hx = this.Jk = this.Ro = this.Po = 0;
    this.$h = G
  }

  function ud() {
    this.So = G;
    this.Lk = m
  }

  function vd() {}

  function wd() {
    this.Bs = this.Kf = this.Cs = this.Lg = 0
  }

  function xd() {
    this.To = this.Uo = this.Gs = this.Fs = this.Es = this.Ds = 0
  }

  function yd() {
    this.Td = this.nj = this.mj = this.Rg = this.Qg = this.Yo = this.mm = this.nm = this.pc = 0;
    this.Sc =
      G;
    this.pa = m;
    this.Pg = this.$o = this.Zo = this.Og = 0;
    this.Qk = m;
    this.Xo = G
  }

  function N() {
    this.Nk = this.lx = this.ai = this.Ze = this.Ye = this.dd = this.kx = this.Hs = this.xd = this.Va = 0;
    this.Ok = m;
    this.Js = this.Is = 0;
    this.kj = G
  }

  function $a() {
    this.mx = this.Ks = this.nx = this.Ls = this.lj = this.Pk = this.Ms = this.ed = this.Ng = 0
  }

  function ab() {}

  function Ga() {
    this.hw = 0;
    this.Z = m;
    this.iw = 0;
    this.F = G;
    this.Wi = 0
  }

  function J() {
    this.button = {
      xt: -1,
      background: m,
      hf: m,
      X: 0
    }
  }

  function T() {
    this.hd = {
      oG: -1,
      up: G,
      background: m,
      hf: m,
      X: 0
    }
  }
  var ja = this,
    q = {
      extend: function(a,
        b) {
        var c = Object.create(a.prototype || a);
        if (b !== oa && (b = b.prototype || b))
          for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
        return c
      },
      Ko: function(a) {
        return a >> 16
      },
      LE: function(a) {
        return a & 65535
      },
      ME: function(a, b) {
        return b << 16 | a & 65535
      },
      hP: function(a) {
        return a >>> 16 & 255
      },
      aP: function(a) {
        return a >>> 8 & 255
      },
      VO: function(a) {
        return a & 255
      },
      mN: function(a, b, c) {
        return (a & 255) << 16 | (b & 255) << 8 | c & 255
      },
      tC: function(a) {
        return (a & 255) << 16 | (a >>> 8 & 255) << 8 | a >>> 16 & 255
      },
      pO: function(a, b, c) {
        return Math.min(Math.max(a, b), c)
      },
      Ed: function(a) {
        for (var b =
            (a >>> 16 & 255).toString(16), c = (a >>> 8 & 255).toString(16), a = (a & 255).toString(16); 2 > b.length;) b = "0" + b;
        for (; 2 > c.length;) c = "0" + c;
        for (; 2 > a.length;) a = "0" + a;
        return "#" + b + c + a
      },
      pe: function(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
      },
      hO: function(a) {
        return Math.round(a)
      },
      ru: function(a) {
        return Math.ceil(a) == a
      },
      Cp: function(a, b, c, d, e) {
        ox = 0.5522848 * (d / 2);
        oy = 0.5522848 * (e / 2);
        xe = b + d;
        ye = c + e;
        xm = b + d / 2;
        ym = c + e / 2;
        a.beginPath();
        a.moveTo(b, ym);
        a.bezierCurveTo(b, ym - oy, xm - ox, c, xm, c);
        a.bezierCurveTo(xm + ox, c, xe, ym - oy, xe, ym);
        a.bezierCurveTo(xe,
          ym + oy, xm + ox, ye, xm, ye);
        a.bezierCurveTo(xm - ox, ye, b, ym + oy, b, ym);
        a.closePath()
      },
      IO: function(a, b) {
        a.beginPath();
        a.moveTo(b.left, b.top);
        a.lineTo(b.right, b.top);
        a.lineTo(b.right, b.bottom);
        a.lineTo(b.left, b.bottom);
        a.lineTo(b.left, b.top);
        a.closePath();
        a.stroke()
      },
      HO: function(a, b, c, d, e) {
        a.beginPath();
        a.moveTo(b, c);
        a.lineTo(d, e);
        a.closePath();
        a.stroke()
      },
      Rm: function(a, b) {
        for (var c = a.toString(); 4 > c.length;) c = "0" + c;
        return c + ("." + b)
      },
      pb: function(a, b) {
        if (a == b) return j;
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a ==
          b
      },
      lB: function(a) {
        var b = a.lastIndexOf("\\");
        0 < b && (a = a.substring(b + 1));
        return a
      },
      $L: 40,
      bO: [0, 1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 25, 27, 28, 29, 31, 32, 33, 35, 36, 37, 39, 40, 41, 43, 44, 45, 47, 48, 49, 51, 52],
      Jz: sa(),
      Co: 0,
      Do: 0,
      ij: 1,
      ds: 2,
      bs: 8,
      jj: 4,
      HD: 32,
      cs: 1024,
      ID: 2048,
      Sy: function(a, b, c, d, e, g) {
        if (0 == b.length) return 0 != (c & 1024) && (d.right = d.left, d.bottom = d.top), 0;
        e.ui || (a.font = e.Sf());
        q.Bc = e.Xd();
        var h = 0,
          n = String.fromCharCode(10),
          r = String.fromCharCode(13),
          M = b.indexOf(n);
        if (0 <= M) {
          var k = new aa;
          k.uy(d);
          var p =
            0,
            l = 0,
            bb, s;
          do bb = -1, p < b.length && (bb = b.indexOf(r, p)), s = Math.max(M, bb), bb == M - 1 && M--, M = b.substring(p, M), M = q.Hm(a, M, c, k, g, e), l = Math.max(l, k.right - k.left), h += M, k.top += M, k.bottom = d.bottom, k.right = d.right, p = s + 1, M = -1, p < b.length && (M = b.indexOf(n, p)); while (0 <= M);
          p < b.length && (M = b.substring(p), M = q.Hm(a, M, c, k, g, e), l = Math.max(l, k.right - k.left), h += M);
          0 != (c & q.cs) && (d.right = d.left + l, d.bottom = k.bottom);
          return h
        }
        return h = q.Hm(a, b, c | q.ID, d, g, e)
      },
      Sr: m,
      Bc: 0,
      Hm: function(a, b, c, d, e, g) {
        0 == b.length && (b = " ");
        var h, n;
        h = g.Xd();
        n = g.ui ? g.measureText(" ") : a.measureText(" ").width;
        var r = d.right - d.left,
          M = 0,
          k = 0,
          p, l = 0,
          s, u = 0,
          t = 0,
          v;
        q.Sr == m && (q.Sr = Array(100));
        var A, B, C = G,
          D = G,
          w = d.top,
          l = h;
        0 != (l & 1) && l++;
        var z = w;
        do {
          l = M;
          s = v = 0;
          t += h;
          do {
            q.Sr[v] = s;
            v += 1;
            p = k;
            k = -1;
            l < b.length && (k = b.indexOf(" ", l)); - 1 == k && (k = b.length);
            if (k < l) {
              s -= n;
              break
            }
            B = b.substring(l, k);
            A = g.ui ? g.measureText(B) : a.measureText(B).width;
            if (s + A > r) {
              v--;
              if (0 < v) {
                s -= n;
                k = p;
                break
              }
              for (p = l; p < k; p++) {
                A = g.ui ? g.measureText(b.substring(p, p + 1)) : a.measureText(b.substring(p, p + 1)).width;
                if (s + A >=
                  r) {
                  p--;
                  if (0 < p) {
                    u = Math.max(s, u);
                    0 == (c & q.cs) && (s = 0 != (c & q.ij) ? d.left + (d.right - d.left) / 2 - s / 2 : 0 != (c & q.ds) ? d.right - s : d.left, B = b.substring(l, p), e.push(new zb(s, w, B)));
                    k = p - 1;
                    D = C = j;
                    break
                  }
                  k = p < b.length ? b.indexOf(" ", p) : -1;
                  C = j;
                  0 <= k && (D = j);
                  break
                }
                s += A
              }
            }
            if (C) break;
            s += A;
            if (s + n > r) break;
            s += n;
            l = k + 1
          } while (1);
          if (D == G) {
            if (C) break;
            u = Math.max(s, u);
            if (0 == (c & q.cs)) {
              s = 0 != (c & q.ij) ? d.left + (d.right - d.left) / 2 - s / 2 : 0 != (c & q.ds) ? d.right - s : d.left;
              l = M;
              for (M = 0; M < v; M++) {
                k = -1;
                l < b.length && (k = b.indexOf(" ", l)); - 1 == k && (k = b.length);
                if (k < l) break;
                B = b.substring(l, k);
                e.push(new zb(s + q.Sr[M], w, B));
                l = k + 1
              }
            }
          }
          D = C = G;
          w += h;
          M = k + 1
        } while (M < b.length);
        d.right = d.left + u;
        d.bottom = z + t;
        return t
      },
      dh: function(a, b, c, d, e, g) {
        var h;
        if (e.ui)
          for (g = 0; g < d.length; g++) h = d[g], e.fillText(a, h.text, b + h.x, c + h.y);
        else {
          a.font = e.Sf();
          q.Bc = e.Xd();
          a.fillStyle = q.Ed(g);
          a.textAlign = "left";
          a.textBaseline = "top";
          for (g = 0; g < d.length; g++) h = d[g], a.fillText(h.text, b + h.x, c + h.y)
        }
      },
      ti: function(a, b) {
        var c = a.toString();
        if (0 != (b & da.Sw)) {
          var d = b & da.Sw;
          if (c.length > d) c = c.substring(c.length - d);
          else
            for (; c.length <
              d;) c = "0" + c
        }
        return c
      },
      Lt: function(a, b) {
        var c;
        if (0 == (b & da.yD)) c = a.toString();
        else {
          var d = Math.floor(((b & da.wD) >> da.xD) + 1);
          c = -1;
          0 != (b & da.AD) ? c = (b & da.uD) >> da.vD : 0 != a && (-1 < a && 1 > a) && (c = d);
          c = 0 > c ? a.toPrecision(d) : a.toFixed(c);
          var e, g, h;
          if (0 != (b & da.zD))
            for (g = e = 0; g < c.length; g++) h = c.charAt(g), "." != h && ("+" != h && "-" != h && "e" != h && "E" != h) && e++;
          g = G;
          "-" == c.charAt(0) && (g = j, c = c.substr(1));
          for (; e < d;) c = "0" + c, e++;
          g && (c = "-" + c)
        }
        return c
      },
      XP: function(a, b) {
        for (var c = a, d = b, e = d.indexOf("\\"); 0 <= e;) c.substring(0, e) == d.substring(0,
          e) && (d = d.substring(e + 1), c = c.substring(e + 1)), e = d.indexOf("\\", e + 1);
        return c
      }
    },
    zd = G,
    cb = G,
    vb = G,
    wb = window.XMLHttpRequest ? new XMLHttpRequest : m;
  if (!wb || !wb.overrideMimeType) {
    var zd = j,
      xb = document.createElement("script");
    xb.type = "text/vbscript";
    xb.innerHTML = 'Function BinFileReaderImpl_IE_VBAjaxLoader(fileName)\n\t                Dim xhr\n\t                Set xhr = CreateObject("Microsoft.XMLHTTP")\n\t                xhr.Open "GET", fileName, False\n\t                xhr.setRequestHeader "Accept-Charset", "x-user-defined"\n\t                xhr.send\n\t                Dim byteArray()\n\t                if xhr.Status = 200 Then\n\t                    Dim byteString\n\t                    Dim i\n\t                    byteString=xhr.responseBody\n\t                    ReDim byteArray(LenB(byteString))\n\t                    For i = 1 To LenB(byteString)\n\t                        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n\t                    Next\n\t                End If\n\t                BinFileReaderImpl_IE_VBAjaxLoader=byteArray\n\t            End Function';
    document.head.appendChild(xb)
  } else try {
    cb = "string" === typeof(new XMLHttpRequest).responseType, 0 <= navigator.userAgent.toLowerCase().indexOf("safari") && (cb = G)
  } catch (Ud) {}
  if (cb) {
    var Ad = new FileReader;
    try {
      Ad.readAsBinaryString && (vb = j)
    } catch (Vd) {}
    Ad = m
  }
  wb = m;
  Ca.prototype = {
    sa: function() {
      return this.Uc.charCodeAt(this.U++) & 255
    },
    getFile: function(a, b, c) {
      this.rt = b;
      if (zd) try {
        var d = BinFileReaderImpl_IE_VBAjaxLoader(a).toArray(),
          e, g = d.length;
        g > c && (g = c);
        for (e = 0; e < g; e++) this.Uc += String.fromCharCode(d[e]);
        this.end =
          this.Uc.length;
        this.rt()
      } catch (h) {} else {
        var n = new XMLHttpRequest;
        n.open("GET", a, j);
        var r = this;
        cb ? (n.responseType = "blob", n.onload = function() {
          if (4 == n.readyState && 200 == n.status) {
            var a = new FileReader;
            a.onloadend = function() {
              if (vb) r.Uc += a.result;
              else {
                var b = new Uint8Array(a.result),
                  c;
                for (c = 0; c < b.length; c++) r.Uc += String.fromCharCode(b[c])
              }
              r.end = r.Uc.length;
              r.rt()
            };
            vb ? a.readAsBinaryString(n.response) : a.readAsArrayBuffer(n.response)
          }
        }) : (n.overrideMimeType("text/plain; charset=x-user-defined"), n.onload = function() {
          4 ==
            n.readyState && 200 == n.status && (r.Uc += n.responseText, r.end = r.Uc.length, r.rt())
        });
        n.send(m)
      }
    },
    aJ: function(a) {
      this.Uc = a;
      this.end = a.length;
      var b = this;
      this.sa = function() {
        return b.Uc.charCodeAt(b.U++) & 255
      }
    },
    Of: function(a, b) {
      var c = new Ca;
      c.Uc = this.Uc;
      c.Iq = a;
      c.U = a;
      c.end = a + b;
      c.zd = this.zd;
      return c
    },
    uz: function() {
      return this.end - this.Iq
    },
    fC: db("zd"),
    W: function(a) {
      this.U += a
    },
    aq: function() {
      return this.U >= this.end
    },
    Ea: function() {
      return this.sa()
    },
    k: function() {
      var a;
      a = this.sa();
      return 256 * this.sa() + a
    },
    J: function() {
      var a;
      a = this.sa();
      a = 256 * this.sa() + a;
      return 32768 > a ? a : a - 65536
    },
    Pv: function() {
      var a;
      a = this.sa();
      return 256 * this.sa() + a
    },
    m: function() {
      var a, b, c;
      a = this.sa();
      b = this.sa();
      c = this.sa();
      a = 16777216 * this.sa() + 65536 * c + 256 * b + a;
      return 2147483647 >= a ? a : a - 4294967296
    },
    Xb: function() {
      var a, b, c;
      a = this.sa();
      b = this.sa();
      c = this.sa();
      this.sa();
      return 65536 * a + 256 * b + c
    },
    CB: function() {
      var a, b, c;
      a = this.sa();
      b = this.sa();
      c = this.sa();
      a = 16777216 * this.sa() + 65536 * c + 256 * b + a;
      2147483648 < a && (a -= 4294967295);
      return a / 65536
    },
    yI: function() {
      var a,
        b, c, d, e, g, h;
      a = this.sa();
      b = this.sa();
      c = this.sa();
      d = this.sa();
      e = this.sa();
      g = this.sa();
      h = this.sa();
      a = 72057594037927936 * this.sa() + 281474976710656 * h + 1099511627776 * g + 4294967296 * e + 16777216 * d + 65536 * c + 256 * b + a;
      9223372036854775E3 < a && (a -= 1.8446744073709552E19);
      return a / 4294967296
    },
    Ya: function(a) {
      var b = "";
      if (this.zd)
        if (1 > arguments.length) {
          if (this.aq()) return b;
          c = this.U;
          for (b = this.Pv(); b && !this.aq();) b = this.Pv();
          b = (this.U - c - 2) / 2;
          this.U = c;
          b = this.Ya(b);
          this.sa();
          this.sa()
        } else {
          b = "";
          c = this.U;
          for (e = 0; e < a; e++) {
            d = this.Pv();
            if (0 == d) break;
            b += String.fromCharCode(d)
          }
          this.U = c + 2 * a
        } else if (1 > arguments.length) {
        if (this.aq()) return b;
        for (var c = this.U, b = this.sa(); b && !this.aq();) b = this.sa();
        b = this.U - c - 1;
        this.U = c;
        b = this.Ya(b);
        this.sa()
      } else {
        for (var d, c = this.U, e = 0; e < a; ++e) {
          d = this.sa();
          if (0 == d) break;
          b += String.fromCharCode(d)
        }
        this.U = c + a
      }
      return b
    },
    seek: function(a) {
      a >= this.end && (a = this.end);
      this.U = a
    },
    hJ: function(a) {
      var b = this.U,
        b = b - a;
      0 > b && (b = 0);
      this.U = b
    },
    CI: function(a) {
      var b, c = a.length;
      for (b = 0; b < c; b++) a[b] = this.sa()
    },
    DB: function(a) {
      var b = [],
        c;
      for (c = 0; c < a; c++) b[c] = this.sa();
      return b
    },
    er: function() {
      var a = new La;
      a.er(this);
      return a
    },
    Qv: function() {
      var a = new La;
      a.Qv(this);
      return a
    }
  };
  S.prototype = {
    add: function(a) {
      this.Ce.push(a)
    },
    get: function(a) {
      return a < this.Ce.length ? this.Ce[a] : m
    },
    set: function(a, b) {
      a < this.Ce.length && (this.Ce[a] = b)
    },
    FB: function(a) {
      a < this.Ce.length && this.Ce.splice(a, 1)
    },
    indexOf: function(a) {
      return this.Ce.indexOf(a)
    },
    GB: function(a) {
      a = this.Ce.indexOf(a);
      0 <= a && this.Ce.splice(a, 1)
    },
    size: function() {
      return this.Ce.length
    },
    clear: function() {
      this.Ce.length =
        0
    }
  };
  aa.prototype = {
    load: function(a) {
      this.left = a.m();
      this.top = a.m();
      this.right = a.m();
      this.bottom = a.m()
    },
    uy: function(a) {
      this.left = a.left;
      this.right = a.right;
      this.top = a.top;
      this.bottom = a.bottom
    }
  };
  La.prototype = {
    Sf: function() {
      var a;
      a = this.Hd ? "italic " : "normal ";
      var b = 100 * Math.floor(this.Id / 100),
        b = Math.max(b, 100),
        b = Math.min(b, 900);
      a = a + (b + " ") + (q.Jz(this.bb) + "px ");
      return a += this.Gd
    },
    Xd: Z("bb"),
    N: function() {
      this.Gd = "Arial";
      this.bb = 13;
      this.Id = 400;
      this.Hd = 0
    },
    er: function(a) {
      this.bb = a.m();
      0 > this.bb && (this.bb = -this.bb);
      a.W(12);
      this.Id = a.m();
      this.Hd = a.Ea();
      this.Wz = a.Ea();
      this.Vz = a.Ea();
      a.W(5);
      this.Gd = a.Ya(32)
    },
    Qv: function(a) {
      this.bb = a.J();
      0 > this.bb && (this.bb = -this.bb);
      a.W(6);
      this.Id = a.k();
      this.Hd = a.Ea();
      this.Wz = a.Ea();
      this.Vz = a.Ea();
      a.W(5);
      var b = a.zd;
      a.zd = G;
      this.Gd = a.Ya(32);
      a.zd = b
    }
  };
  Ra.separator = "{@24}";
  Ra.QL = 1;
  Ra.PL = 2;
  Ra.prototype = {};
  la.prototype = {
    measureText: function(a, b) {
      b = this.g.$t(b);
      if (b.ui) return b.measureText(a);
      this.Ad.font = b.Sf();
      return this.Ad.measureText(a).width
    },
    Er: function(a, b, c, d, e) {
      if (a ==
        this.AH && b == this.wH && c == this.zH && d == this.xH && e == this.vH) return this.yH;
      var g = this.Ad;
      g.clearRect(0, 0, this.width, this.height);
      c || (c = new aa(0, 0, this.width, this.height));
      var h = [],
        d = this.g.$t(d),
        n = q.Sy(g, a, b, c, d, h);
      if (0 != n) {
        var r = 0;
        0 != (b & q.bs) ? r = this.height - n : 0 != (b & q.jj) && (r = this.height / 2 - n / 2);
        q.dh(g, 0, r, h, d, e, 0, 0)
      }
      this.AH = a;
      this.wH = b;
      this.zH = c;
      this.xH = d;
      this.vH = e;
      return this.yH = n
    },
    fA: function(a) {
      a ? (this.Ad.fillStyle = q.Ed(a), this.Ad.fillRect(0, 0, this.width, this.height)) : this.Ad.clearRect(0, 0, this.width,
        this.height)
    },
    uq: function(a, b, c, d, e, g, h) {
      var n = [];
      c || (c = new aa(0, 0, this.width, this.height));
      e = this.g.$t(e);
      a = q.Sy(this.Ad, a, b, c, e, n);
      if (0 != a) switch (c = 0, 0 != (b & q.bs) ? c = this.height - a : 0 != (b & q.jj) && (c = this.height / 2 - a / 2), g) {
        case 1:
          q.dh(this.Ad, 1, c + 1, n, e, h, 0, 0);
          q.dh(this.Ad, 0, c, n, e, d, 0, 0);
          break;
        case 2:
          q.dh(this.Ad, 1, c, n, e, h, 0, 0);
          q.dh(this.Ad, 1, c + 2, n, e, h, 0, 0);
          q.dh(this.Ad, 0, c + 1, n, e, h, 0, 0);
          q.dh(this.Ad, 2, c + 1, n, e, h, 0, 0);
          q.dh(this.Ad, 1, c + 1, n, e, d, 0, 0);
          break;
        case 0:
          q.dh(this.Ad, 0, c, n, e, d, 0, 0)
      }
    },
    Un: function(a,
      b) {
      if (a != this.width || b != this.height) this.width = a, this.height = b, this.canvas.width = a, this.canvas.height = b
    },
    kb: function(a, b, c, d, e) {
      a.Ri(this.canvas, b, c, this.width, this.height, d, e)
    }
  };
  Ma.eG = [{
    ob: navigator.userAgent,
    Kc: "Chrome",
    Vb: "Chrome"
  }, {
    ob: navigator.userAgent,
    Kc: "OmniWeb",
    Yl: "OmniWeb/",
    Vb: "OmniWeb"
  }, {
    ob: navigator.vendor,
    Kc: "Apple",
    Vb: "Safari",
    Yl: "Version"
  }, {
    sI: window.opera,
    Vb: "Opera",
    Yl: "Version"
  }, {
    ob: navigator.vendor,
    Kc: "iCab",
    Vb: "iCab"
  }, {
    ob: navigator.vendor,
    Kc: "KDE",
    Vb: "Konqueror"
  }, {
    ob: navigator.userAgent,
    Kc: "Firefox",
    Vb: "Firefox"
  }, {
    ob: navigator.vendor,
    Kc: "Camino",
    Vb: "Camino"
  }, {
    ob: navigator.userAgent,
    Kc: "Netscape",
    Vb: "Netscape"
  }, {
    ob: navigator.userAgent,
    Kc: "MSIE",
    Vb: "Explorer",
    Yl: "MSIE"
  }, {
    ob: navigator.userAgent,
    Kc: "Gecko",
    Vb: "Mozilla",
    Yl: "rv"
  }, {
    ob: navigator.userAgent,
    Kc: "Mozilla",
    Vb: "Netscape",
    Yl: "Mozilla"
  }];
  Ma.gG = [{
    ob: navigator.platform,
    Kc: "Win",
    Vb: "Windows"
  }, {
    ob: navigator.platform,
    Kc: "Mac",
    Vb: "MacOS"
  }, {
    ob: navigator.userAgent,
    Kc: "iPhone",
    Vb: "iOS"
  }, {
    ob: navigator.userAgent,
    Kc: "iPod",
    Vb: "iOS"
  }, {
    ob: navigator.userAgent,
    Kc: "iPad",
    Vb: "iOS"
  }, {
    ob: navigator.userAgent,
    Kc: "Android",
    Vb: "Android"
  }, {
    ob: navigator.platform,
    Kc: "Windows Phone",
    Vb: "Windows Phone"
  }, {
    ob: navigator.platform,
    Kc: "Linux",
    Vb: "Linux"
  }];
  Ma.prototype = {
    WB: function(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b].ob,
          d = a[b].sI;
        this.EC = a[b].Yl || a[b].Vb;
        if (c) {
          if (-1 != c.indexOf(a[b].Kc)) return a[b].Vb
        } else if (d) return a[b].Vb
      }
    },
    XB: function(a) {
      var b = a.indexOf(this.EC);
      if (-1 != b) return parseFloat(a.substring(b + this.EC.length + 1))
    }
  };
  q.AP = function(a, b, c, d) {
    var e = document.createElement("canvas");
    e.width = b.width;
    e.height = b.height;
    var g = e.getContext("2d");
    0 == b.Ab ? g.drawImage(b.zb, 0, 0) : g.drawImage(a.P.Hb[b.Ab], b.Ld, b.Md, b.width, b.height, 0, 0, b.width, b.height);
    var h = g.getImageData(0, 0, b.width, b.height),
      n = d >> 16 & 255,
      r = d >> 8 & 255,
      d = d & 255,
      k = c >> 16 & 255,
      p = c >> 8 & 255,
      c = c & 255,
      q, l, s;
    for (s = 0; s < b.height; s++)
      for (l = 0; l < b.width; l++) q = 4 * (s * b.width + l), h.data[q] == k && (h.data[q + 1] == p && h.data[q + 2] == c) && (h.data[q] = n, h.data[q + 1] = r, h.data[q + 2] = d);
    g.putImageData(h, 0, 0);
    g = new ga;
    g.g = a;
    g.width = b.width;
    g.height = b.height;
    g.Ga =
      b.Ga;
    g.va = b.va;
    g.Zl = b.Zl;
    g.am = b.am;
    g.ua = 0;
    g.zb = e;
    g.$f = b.$f;
    g.ml = b.ml;
    g.oh = b.oh;
    return g
  };
  za.fE = 1;
  za.wL = 2;
  za.eE = 4;
  za.bE = 8;
  za.prototype = {
    QF: function(a) {
      if (this.EG != a.Gd || this.Bc != a.bb) return G;
      var b = 0 != (this.iz & za.fE),
        c = 0 != a.Hd;
      if (b != c) return G;
      b = 0 != (this.iz & za.eE);
      c = 400 < a.Id;
      return b != c ? G : j
    },
    Xd: function() {
      return this.height + this.jH
    },
    measureText: function(a) {
      var b = 0,
        c = a.length,
        d, e;
      for (d = 0; d < c; d++) e = this.ut.indexOf(a.charAt(d)), b = 0 <= e ? b + (this.tt[e] + this.ou) : b + this.width;
      return b
    },
    fillText: function(a,
      b, c, d) {
      var e = b.length,
        g, h, n, r, k = this.Xf;
      if (0 == (this.X & za.bE))
        for (g = 0; g < e; g++) r = this.ut.indexOf(b.charAt(g)), 0 <= r ? (n = Math.floor(r / this.Aq), h = r - n * this.Aq, n *= this.height + 1, h *= this.width + 1, 0 == k.Ab ? a.drawImage(k.zb, h, n, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(k.g.P.Hb[k.Ab], h + k.Ld, n + k.Md, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height), c += this.tt[r] + this.ou) : (a.fillStyle = q.Ed(this.color), a.fillRect(c, d, this.width, this.height), c += this.width);
      else {
        c += this.measureText(b);
        for (g = e - 1; 0 <= g; g--) r = this.ut.indexOf(b.charAt(g)), 0 <= r ? (c -= this.tt[r] + this.ou, n = r / this.Aq, h = r - n * this.Aq, n *= this.height + 1, h *= this.width + 1, 0 == k.Ab ? a.drawImage(k.zb, h, n, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(k.g.P.Hb[k.Ab], h + k.Ld, n + k.Md, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height)) : (c -= this.width, a.fillStyle = q.Ed(this.color), a.fillRect(c, d, this.width, this.height))
      }
    }
  };
  U.cj = 1;
  U.NJ = 17408;
  U.MJ = 17664;
  U.GJ = 17920;
  U.EJ = 18176;
  U.FJ = 18432;
  U.HJ = 18688;
  U.PJ = 18944;
  U.KJ = 19200;
  U.IJ = 19456;
  U.JJ = 19712;
  U.QJ = 19968;
  U.RJ = 20224;
  U.LJ = 20480;
  U.OJ = 20736;
  U.LC = 983039;
  U.create = function(a) {
    var b = G,
      c = G,
      d = G,
      e = G,
      g = G,
      h = G,
      n = G,
      r = G,
      k = G,
      p = a.file.U,
      q = a.file.k(),
      l = m,
      s = a.file.m();
    switch (s) {
      case 65535:
        l = new fa;
        break;
      case 131071:
        l = new fa;
        break;
      case 262143:
        l = new Sa;
        break;
      case 327679:
        l = new ACT_SUBVARG;
        break;
      case 393215:
        l = new Ta;
        break;
      case 458751:
        l = new ACT_GRPACTIVATE;
        break;
      case 524287:
        l = new ACT_GRPDEACTIVATE;
        break;
      case 983039:
        l = new ACT_STARTLOOP;
        break;
      case 1048575:
        l = new ACT_STOPLOOP;
        break;
      case 1114111:
        l = new ACT_SETLOOPINDEX;
        break;
      case 1179647:
        l = new ACT_RANDOMIZE;
        break;
      case 1310719:
        l = new ACT_SETGLOBALSTRING;
        break;
      case 1572863:
        l = new fa;
        break;
      case 1638399:
        l = new fa;
        break;
      case 1835007:
        l = new fb;
        b = j;
        break;
      case 1900543:
        l = new Sa;
        break;
      case 1966079:
        l = new fb;
        b = j;
        break;
      case 2031615:
        l = new Sa;
        break;
      case 2097151:
        l = new gb;
        c = j;
        break;
      case 2162687:
        l = new Ta;
        break;
      case 2228223:
        l = new gb;
        c = j;
        break;
      case 2293759:
        l = new Ta;
        break;
      case 2359295:
        l = new ACT_SUBVARGCONST;
        d = j;
        break;
      case 2424831:
        l = new ACT_SUBVARG;
        break;
      case 2490367:
        l = new ACT_SUBVARGCONST;
        d = j;
        break;
      case 2555903:
        l = new ACT_SUBVARG;
        break;
      case 65534:
        l = new ACT_PLAYSAMPLE;
        break;
      case 131070:
        l = new ACT_STOPSAMPLE;
        break;
      case 327678:
        l = new ACT_PLAYLOOPSAMPLE;
        break;
      case 458750:
        l = new ACT_STOPSPESAMPLE;
        break;
      case 524286:
        l = new ACT_PAUSESAMPLE;
        break;
      case 589822:
        l = new ACT_RESUMESAMPLE;
        break;
      case 786430:
        l = new ACT_PLAYCHANNEL;
        break;
      case 851966:
        l = new ACT_PLAYLOOPCHANNEL;
        break;
      case 917502:
        l = new ACT_PAUSECHANNEL;
        break;
      case 983038:
        l =
          new ACT_RESUMECHANNEL;
        break;
      case 1048574:
        l = new ACT_STOPCHANNEL;
        break;
      case 1114110:
        l = new ACT_SETCHANNELPOS;
        break;
      case 1179646:
        l = new ACT_SETCHANNELVOL;
        break;
      case 1245182:
        l = new fa;
        break;
      case 1310718:
        l = new ACT_SETSAMPLEPOS;
        break;
      case 1376254:
        l = new ACT_SETSAMPLEMAINVOL;
        break;
      case 1441790:
        l = new ACT_SETSAMPLEVOL;
        break;
      case 1507326:
        l = new fa;
        break;
      case 1572862:
        l = new fa;
        break;
      case 1638398:
        l = new ACT_PAUSEALLCHANNELS;
        break;
      case 1703934:
        l = new ACT_RESUMEALLCHANNELS;
        break;
      case 2031614:
        l = new ACT_LOCKCHANNEL;
        break;
      case 2097150:
        l = new ACT_UNLOCKCHANNEL;
        break;
      case 2162686:
        l = new ACT_SETCHANNELFREQ;
        break;
      case 2228222:
        l = new ACT_SETSAMPLEFREQ;
        break;
      case 65533:
        l = new Bb;
        break;
      case 131069:
        l = new ACT_PREVLEVEL;
        break;
      case 196605:
        l = new Cb;
        break;
      case 262141:
        l = new ACT_PAUSEKEY;
        break;
      case 327677:
        l = new ACT_ENDGAME;
        break;
      case 393213:
        l = new ACT_RESTARTGAME;
        break;
      case 458749:
        l = new Db;
        break;
      case 524285:
        l = new ACT_CDISPLAY;
        break;
      case 589821:
        l = new ACT_CDISPLAYX;
        break;
      case 655357:
        l = new ACT_CDISPLAYY;
        break;
      case 983037:
        l = new ACT_FULLSCREENMODE;
        break;
      case 1048573:
        l = new ACT_WINDOWEDMODE;
        break;
      case 1114109:
        l = new ACT_SETFRAMERATE;
        break;
      case 1179645:
        l = new ACT_PAUSEKEY;
        break;
      case 1245181:
        l = new ACT_PAUSEANYKEY;
        break;
      case 1310717:
        l = new ACT_SETVSYNCON;
        break;
      case 1376253:
        l = new ACT_SETVSYNCOFF;
        break;
      case 1441789:
        l = new ACT_SETVIRTUALWIDTH;
        break;
      case 1507325:
        l = new ACT_SETVIRTUALHEIGHT;
        break;
      case 1572861:
        l = new ACT_SETFRAMEBDKCOLOR;
        break;
      case 1638397:
        l = new ACT_DELCREATEDBKDAT;
        break;
      case 1703933:
        l = new ACT_DELALLCREATEDBKD;
        break;
      case 1769469:
        l = new ACT_SETFRAMEWIDTH;
        break;
      case 1835005:
        l = new ACT_SETFRAMEHEIGHT;
        break;
      case 2097149:
        l = new ACT_PLAYDEMO;
        break;
      case 2162685:
        l = new fa;
        break;
      case 2228221:
        l = new fa;
        break;
      case 2293757:
        l = new fa;
        break;
      case 2359293:
        l = new fa;
        break;
      case 2424829:
        l = new fa;
        break;
      case 65532:
        l = new ACT_SETTIMER;
        break;
      case 131068:
        l = new ACT_EVENTAFTER;
        break;
      case 196604:
        l = new ACT_NEVENTSAFTER;
        break;
      case 65530:
        l = new ACT_HIDECURSOR;
        break;
      case 131066:
        l = new ACT_SHOWCURSOR;
        break;
      case 65529:
        l = new ACT_SETSCORE;
        break;
      case 131065:
        l = new ACT_SETLIVES;
        break;
      case 196601:
        l =
          new ACT_NOINPUT;
        break;
      case 262137:
        l = new ACT_RESTINPUT;
        break;
      case 327673:
        l = new ACT_ADDSCORE;
        break;
      case 393209:
        l = new ACT_ADDLIVES;
        break;
      case 458745:
        l = new ACT_SUBSCORE;
        break;
      case 524281:
        l = new ACT_SUBLIVES;
        break;
      case 589817:
        l = new ACT_SETINPUT;
        break;
      case 655353:
        l = new ACT_SETINPUTKEY;
        break;
      case 720889:
        l = new ACT_SETPLAYERNAME;
        break;
      case 65531:
        l = new Eb;
        break;
      case 131067:
        l = new ACT_CREATEBYNAME;
        break;
      case 5242883:
        l = new ACT_STRDESTROY;
        break;
      case 5308419:
        l = new ACT_STRDISPLAY;
        break;
      case 5373955:
        l = new ACT_STRDISPLAYDURING;
        break;
      case 5439491:
        l = new ACT_STRSETCOLOUR;
        break;
      case 5505027:
        l = new ACT_STRSET;
        break;
      case 5570563:
        l = new ACT_STRPREV;
        break;
      case 5636099:
        l = new ACT_STRNEXT;
        break;
      case 5701635:
        l = new ACT_STRDISPLAYSTRING;
        break;
      case 5767171:
        l = new ACT_STRSETSTRING;
        break;
      case 5242882:
        l = new ACT_SPRPASTE;
        break;
      case 5308418:
        l = new ACT_SPRFRONT;
        break;
      case 5373954:
        l = new ACT_SPRBACK;
        break;
      case 5439490:
        l = new ACT_SPRADDBKD;
        break;
      case 5505026:
        l = new ACT_SPRREPLACECOLOR;
        break;
      case 5570562:
        l = new ACT_SPRSETSCALE;
        break;
      case 5636098:
        l = new ACT_SPRSETSCALEX;
        break;
      case 5701634:
        l = new ACT_SPRSETSCALEY;
        break;
      case 5767170:
        l = new ACT_SPRSETANGLE;
        break;
      case 5242887:
        l = new Fb;
        break;
      case 5308423:
        l = new Gb;
        break;
      case 5373959:
        l = new Hb;
        break;
      case 5439495:
        l = new ACT_CSETMIN;
        break;
      case 5505031:
        l = new ACT_CSETMAX;
        break;
      case 5570567:
        l = new ACT_CSETCOLOR1;
        break;
      case 5636103:
        l = new ACT_CSETCOLOR2;
        break;
      case 5242884:
        l = new ACT_QASK;
        break;
      case 5242889:
        l = new ACT_CCARESTARTAPP;
        break;
      case 5308425:
        l = new ACT_CCARESTARTFRAME;
        break;
      case 5373961:
        l = new ACT_CCANEXTFRAME;
        break;
      case 5439497:
        l =
          new ACT_CCAPREVIOUSFRAME;
        break;
      case 5505033:
        l = new ACT_CCAENDAPP;
        break;
      case 5636105:
        l = new ACT_CCAJUMPFRAME;
        break;
      case 5701641:
        l = new ACT_CCASETGLOBALVALUE;
        break;
      case 5767177:
        l = new ACT_CCASHOW;
        break;
      case 5832713:
        l = new ACT_CCAHIDE;
        break;
      case 5898249:
        l = new ACT_CCASETGLOBALSTRING;
        break;
      case 5963785:
        l = new ACT_CCAPAUSEAPP;
        break;
      case 6029321:
        l = new ACT_CCARESUMEAPP;
        break;
      case 6094857:
        l = new ACT_CCASETWIDTH;
        break;
      case 6160393:
        l = new ACT_CCASETHEIGHT;
        break;
      default:
        switch (s & 4294901760) {
          case 65536:
            l = new ACT_EXTSETPOS;
            break;
          case 131072:
            l = new ACT_EXTSETX;
            break;
          case 196608:
            l = new ACT_EXTSETY;
            break;
          case 262144:
            l = new ACT_EXTSTOP;
            break;
          case 327680:
            l = new ACT_EXTSTART;
            break;
          case 393216:
            l = new ACT_EXTSPEED;
            break;
          case 458752:
            l = new ACT_EXTMAXSPEED;
            break;
          case 524288:
            l = new ACT_EXTWRAP;
            break;
          case 589824:
            l = new ACT_EXTBOUNCE;
            break;
          case 655360:
            l = new ACT_EXTREVERSE;
            break;
          case 720896:
            l = new ACT_EXTNEXTMOVE;
            break;
          case 786432:
            l = new ACT_EXTPREVMOVE;
            break;
          case 851968:
            l = new ACT_EXTSELMOVE;
            break;
          case 917504:
            l = new ACT_EXTLOOKAT;
            break;
          case 983040:
            l =
              new ACT_EXTSTOPANIM;
            break;
          case 1048576:
            l = new ACT_EXTSTARTANIM;
            break;
          case 1114112:
            l = new ACT_EXTFORCEANIM;
            break;
          case 1179648:
            l = new ACT_EXTFORCEDIR;
            break;
          case 1245184:
            l = new ACT_EXTFORCESPEED;
            break;
          case 1310720:
            l = new ACT_EXTRESTANIM;
            break;
          case 1376256:
            l = new ACT_EXTRESTDIR;
            break;
          case 1441792:
            l = new ACT_EXTRESTSPEED;
            break;
          case 1507328:
            l = new ACT_EXTSETDIR;
            break;
          case 1572864:
            l = new Ib;
            break;
          case 1638400:
            l = new ACT_EXTSHUFFLE;
            break;
          case 1703936:
            l = new ACT_EXTHIDE;
            break;
          case 1769472:
            l = new Jb;
            break;
          case 1835008:
            l =
              new ACT_EXTDISPLAYDURING;
            break;
          case 1900544:
            l = new ACT_EXTSHOOT;
            break;
          case 1966080:
            l = new ACT_EXTSHOOTTOWARD;
            break;
          case 2031616:
            l = new ACT_EXTSETVAR;
            e = j;
            break;
          case 2097152:
            l = new ACT_EXTADDVAR;
            g = j;
            break;
          case 2162688:
            l = new ACT_EXTSUBVAR;
            h = j;
            break;
          case 2228224:
            l = new ACT_EXTDISPATCHVAR;
            break;
          case 2293760:
            l = new ACT_EXTSETFLAG;
            n = j;
            break;
          case 2359296:
            l = new ACT_EXTCLRFLAG;
            r = j;
            break;
          case 2424832:
            l = new ACT_EXTCHGFLAG;
            k = j;
            break;
          case 2490368:
            l = new ACT_EXTINKEFFECT;
            break;
          case 2555904:
            l = new ACT_EXTSETSEMITRANSPARENCY;
            break;
          case 2621440:
            l = new ACT_EXTFORCEFRAME;
            break;
          case 2686976:
            l = new ACT_EXTRESTFRAME;
            break;
          case 2752512:
            l = new ACT_EXTSETACCELERATION;
            break;
          case 2818048:
            l = new ACT_EXTSETDECELERATION;
            break;
          case 2883584:
            l = new ACT_EXTSETROTATINGSPEED;
            break;
          case 2949120:
            l = new ACT_EXTSETDIRECTIONS;
            break;
          case 3014656:
            l = new ACT_EXTBRANCHNODE;
            break;
          case 3080192:
            l = new ACT_EXTSETGRAVITY;
            break;
          case 3145728:
            l = new ACT_EXTGOTONODE;
            break;
          case 3211264:
            l = new ACT_EXTSETVARSTRING;
            break;
          case 3276800:
            l = new ACT_EXTSETFONTNAME;
            break;
          case 3342336:
            l =
              new ACT_EXTSETFONTSIZE;
            break;
          case 3407872:
            l = new ACT_EXTSETBOLD;
            break;
          case 3473408:
            l = new ACT_EXTSETITALIC;
            break;
          case 3538944:
            l = new ACT_EXTSETUNDERLINE;
            break;
          case 3604480:
            l = new fa;
            break;
          case 3670016:
            l = new ACT_EXTSETTEXTCOLOR;
            break;
          case 3735552:
            l = new ACT_EXTSPRFRONT;
            break;
          case 3801088:
            l = new ACT_EXTSPRBACK;
            break;
          case 3866624:
            l = new ACT_EXTMOVEBEFORE;
            break;
          case 3932160:
            l = new ACT_EXTMOVEAFTER;
            break;
          case 3997696:
            l = new ACT_EXTMOVETOLAYER;
            break;
          case 4063232:
            l = new fa;
            break;
          case 4128768:
            l = new ACT_EXTSETEFFECT;
            break;
          case 4194304:
            l = new fa;
            break;
          case 4259840:
            l = new ACT_EXTSETALPHACOEF;
            break;
          case 4325376:
            l = new ACT_EXTSETRGBCOEF;
            break;
          case 4390912:
            l = new fa;
            break;
          case 4456448:
            l = new ACT_EXTSETFRICTION;
            break;
          case 4521984:
            l = new ACT_EXTSETELASTICITY;
            break;
          case 4587520:
            l = new ACT_EXTAPPLYIMPULSE;
            break;
          case 4653056:
            l = new ACT_EXTAPPLYANGULARIMPULSE;
            break;
          case 4718592:
            l = new ACT_EXTAPPLYFORCE;
            break;
          case 4784128:
            l = new ACT_EXTAPPLYTORQUE;
            break;
          case 4849664:
            l = new ACT_EXTSETLINEARVELOCITY;
            break;
          case 4915200:
            l = new ACT_EXTSETANGULARVELOCITY;
            break;
          case 4980736:
            l = new ACT_EXTFOREACH;
            break;
          case 5046272:
            l = new ACT_EXTFOREACH2;
            break;
          case 5111808:
            l = new ACT_EXTSTOPFORCE;
            break;
          case 5177344:
            l = new ACT_EXTSTOPTORQUE;
            break;
          default:
            l = new id
        }
    }
    if (l != m) {
      l.la = s;
      l.oe = a.file.J();
      l.xb = a.file.J();
      l.Ia = a.file.Ea();
      l.gf = a.file.Ea();
      l.jd = a.file.Ea();
      l.Lm = a.file.Ea();
      if (0 < l.jd) {
        l.s = Array(l.jd);
        for (s = 0; s < l.jd; s++) l.s[s] = Wa.create(a)
      }
      if (b || c || d) c = l.s[0], l.Bn = c.value, c = l.s[1], l.value = c.ka[0].value;
      if (e || g || h)
        if (b = m, c = l.s[0], 53 != c.code) {
          d = c.value;
          c = l.s[1];
          if (0 <= d &&
            2 == c.ka.length && (0 >= c.ka[1].code || 1310720 <= c.ka[1].code))
            if (65535 == c.ka[0].code || 1572863 == c.ka[0].code) e ? (b = new ACT_EXTSETVARCONST, b.Bn = d, b.value = c.ka[0].value) : g ? (b = new ACT_EXTADDVARCONST, b.Bn = d, b.value = c.ka[0].value) : h && (b = new ACT_EXTSUBVARCONST, b.Bn = d, b.value = c.ka[0].value);
          b != m && (b.la = l.la, b.oe = l.oe, b.xb = l.xb, b.Ia = l.Ia, b.gf = l.gf, b.jd = l.jd, b.Lm = l.Lm, b.s = l.s, l = b)
        }
      if (n || r || k) {
        b = m;
        e = l.s[0];
        if (2 == e.ka.length && (0 >= e.ka[1].code || 1310720 <= e.ka[1].code) && 65535 == e.ka[0].code) n ? (b = new ACT_EXTSETFLAGCONST,
          b.H = 1 << e.ka[0].value) : r ? (b = new ACT_EXTCLRFLAGCONST, b.H = 1 << e.ka[0].value) : k && (b = new ACT_EXTCHGFLAGCONST, b.H = 1 << e.ka[0].value);
        b != m && (b.la = l.la, b.oe = l.oe, b.xb = l.xb, b.Ia = l.Ia, b.gf = l.gf, b.jd = l.jd, b.Lm = l.Lm, b.s = l.s, l = b)
      }
    }
    a.file.seek(p + q);
    return l
  };
  Ab.sL = 1;
  fa.prototype = {
    execute: X()
  };
  Sa.prototype = {
    execute: function(a) {
      var b;
      b = 52 == this.s[0].code ? a.lf(this.s[0]) - 1 : this.s[0].value;
      var c = a.ri(this.s[1]);
      a.f.lw(b, c)
    }
  };
  fb.prototype = {
    execute: function(a) {
      a.f.lw(this.Bn, this.value)
    }
  };
  Ta.prototype = {
    execute: function(a) {
      var b;
      b = 52 == this.s[0].code ? a.lf(this.s[0]) - 1 : this.s[0].value;
      var c = a.ri(this.s[1]);
      a.f.Ox(b, c)
    }
  };
  gb.prototype = {
    execute: function(a) {
      a.f.Ox(this.Bn, this.value)
    }
  };
  Bb.prototype = {
    execute: function(a) {
      a.hb = k.No;
      a.f.Yi = j
    }
  };
  Cb.prototype = {
    execute: function(a) {
      var b;
      if (26 == this.s[0].code) {
        if (b = this.s[0].value, -1 == a.f.rE(b)) return
      } else {
        b = a.lf(this.s[0]) - 1;
        if (0 > b || 4096 <= b) return;
        a.f.jO && b++;
        b |= 32768
      }
      a.hb = k.Mo;
      a.Nl = b;
      a.f.Yi = j
    }
  };
  Db.prototype = {
    execute: function(a) {
      a.hb = k.fx
    }
  };
  Eb.prototype = {
    execute: function(a) {
      var b = this.s[0],
        c = new Cc;
      if (b.EB(a, 17, c) && (c.it ? (this.Ia |= U.cj, a.l.gk = j) : this.Ia &= ~U.cj, b = a.Ot(b.tp, b.fy, c.x, c.y, c.dir, 0, c.jn, -1), 0 <= b)) b = a.w[b], a.l.Fj(b), b && 32 <= b.qa && a.BF(b), a.Jo(b) || a.NP != m && a.Jh.wI(b)
    }
  };
  Fb.prototype = {
    execute: function(a) {
      var b = a.l.il(this);
      b != m && (a = a.ri(this.s[0]), b.Bt(a), b.Dm(a))
    }
  };
  Gb.prototype = {
    execute: function(a) {
      var b = a.l.il(this);
      b != m && (a = a.ri(this.s[0]), b.XF(a))
    }
  };
  Hb.prototype = {
    execute: function(a) {
      var b = a.l.il(this);
      b != m && (a = a.ri(this.s[0]), b.YF(a))
    }
  };
  Ib.prototype = {
    execute: function(a) {
      var b =
        a.l.il(this);
      b != m && (3 == b.qa ? 0 != (b.UB & k.as) ? (b.u.Fq(), b.u.L &= ~w.Vg, b.M |= E.Kg) : (b.M |= E.Ff, a.bh(b.Ob)) : 0 == (b.M & E.Ff) && (b.M |= E.Ff, 0 != (b.Ba & A.oj) || 0 != (b.Ba & A.pj) ? a.Pz(b) : (b.bn = G, a.bh(b.Ob))))
    }
  };
  Jb.prototype = {
    execute: function(a) {
      a = a.l.il(this);
      a != m && k.ZH(a)
    }
  };
  V.px = 6;
  V.nD = -983041;
  V.oD = -1507329;
  V.pD = -1572865;
  V.create = function(a) {
    var b = a.file.U,
      c = a.file.k(),
      d = m,
      e = a.file.m();
    switch (e) {
      case -2555905:
        d = new CND_RUNNINGAS;
        break;
      case -2490369:
        d = new nb;
        break;
      case -2424833:
        d = new mb;
        break;
      case -2359297:
        d = new lb;
        break;
      case -2293761:
        d = new kb;
        break;
      case -2228225:
        d = new jb;
        break;
      case -2162689:
        d = new ib;
        break;
      case -2097153:
        d = new nb;
        break;
      case -2031617:
        d = new mb;
        break;
      case -1966081:
        d = new lb;
        break;
      case -1900545:
        d = new kb;
        break;
      case -1835009:
        d = new jb;
        break;
      case -1769473:
        d = new ib;
        break;
      case -1703937:
        d = new xa;
        break;
      case -1638401:
        d = new CND_CHANCE;
        break;
      case -1572865:
        d = new xa;
        break;
      case -1507329:
        d = new xa;
        break;
      case -1441793:
        d = new CND_GROUPSTART;
        break;
      case -1245185:
        d = new CND_COMPAREGSTRING;
        break;
      case -983041:
        d = new CND_ONLOOP;
        break;
      case -720897:
        d = new CND_GROUPACTIVATED;
        break;
      case -655361:
        d = new xa;
        break;
      case -589825:
        d = new xa;
        break;
      case -524289:
        d = new xa;
        break;
      case -458753:
        d = new Kb;
        break;
      case -393217:
        d = new CND_NOTALWAYS;
        break;
      case -327681:
        d = new CND_ONCE;
        break;
      case -262145:
        d = new CND_REPEAT;
        break;
      case -196609:
        d = new CND_NOMORE;
        break;
      case -131073:
        d = new CND_COMPARE;
        break;
      case -65537:
        d = new xa;
        break;
      case -1:
        d = new hb;
        break;
      case -524290:
        d = new CND_SPCHANNELPAUSED;
        break;
      case -458754:
        d = new CND_NOSPCHANNELPLAYING;
        break;
      case -327682:
        d =
          new CND_SPSAMPAUSED;
        break;
      case -131074:
        d = new CND_NOSAMPLAYING;
        break;
      case -2:
        d = new CND_NOSPSAMPLAYING;
        break;
      case -458755:
        d = new CND_ENDOFPAUSE;
        break;
      case -393219:
        d = new CND_ISVSYNCON;
        break;
      case -327683:
        d = new CND_ISLADDER;
        break;
      case -262147:
        d = new CND_ISOBSTACLE;
        break;
      case -196611:
        d = new CND_QUITAPPLICATION;
        break;
      case -131075:
        d = new xa;
        break;
      case -65539:
        d = new hb;
        break;
      case -3:
        d = new CND_START;
        break;
      case -458756:
        d = new Rb;
        break;
      case -393220:
        d = new Qb;
        break;
      case -327684:
        d = new CND_ONEVENT;
        break;
      case -262148:
        d =
          new CND_TIMEOUT;
        break;
      case -196612:
        d = new CND_EVERY;
        break;
      case -131076:
        d = new CND_TIMER;
        break;
      case -65540:
        d = new CND_TIMERINF;
        break;
      case -4:
        d = new CND_TIMERSUP;
        break;
      case -720902:
        d = new CND_ONMOUSEWHEELDOWN;
        break;
      case -655366:
        d = new CND_ONMOUSEWHEELUP;
        break;
      case -589830:
        d = new CND_MOUSEON;
        break;
      case -524294:
        d = new CND_ANYKEY;
        break;
      case -458758:
        d = new Lb;
        break;
      case -393222:
        d = new Mb;
        break;
      case -327686:
        d = new Nb;
        break;
      case -262150:
        d = new CND_MCLICK;
        break;
      case -196614:
        d = new CND_MONOBJECT;
        break;
      case -131078:
        d = new CND_MINZONE;
        break;
      case -65542:
        d = new CND_KBKEYDEPRESSED;
        break;
      case -6:
        d = new CND_KBPRESSKEY;
        break;
      case -327687:
        d = new CND_JOYPUSHED;
        break;
      case -262151:
        d = new CND_NOMORELIVE;
        break;
      case -196615:
        d = new CND_JOYPRESSED;
        break;
      case -131079:
        d = new CND_LIVE;
        break;
      case -65543:
        d = new CND_SCORE;
        break;
      case -7:
        d = new CND_PLAYERPLAYING;
        break;
      case -1441797:
        d = new CND_CHOOSEALLINLINE;
        break;
      case -1376261:
        d = new CND_CHOOSEFLAGRESET;
        break;
      case -1310725:
        d = new CND_CHOOSEFLAGSET;
        break;
      case -1245189:
        d = new CND_CHOOSEVALUE;
        break;
      case -1179653:
        d =
          new CND_PICKFROMID;
        break;
      case -1114117:
        d = new CND_CHOOSEALLINZONE;
        break;
      case -1048581:
        d = new CND_CHOOSEALL;
        break;
      case -983045:
        d = new CND_CHOOSEZONE;
        break;
      case -917509:
        d = new Ob;
        break;
      case -851973:
        d = new CND_NUMOFALLZONE;
        break;
      case -786437:
        d = new CND_NOMOREALLZONE;
        break;
      case -720901:
        d = new CND_CHOOSEFLAGRESET_OLD;
        break;
      case -655365:
        d = new CND_CHOOSEFLAGSET_OLD;
        break;
      case -458757:
        d = new CND_CHOOSEVALUE_OLD;
        break;
      case -393221:
        d = new CND_PICKFROMID_OLD;
        break;
      case -327685:
        d = new CND_CHOOSEALLINZONE_OLD;
        break;
      case -262149:
        d =
          new CND_CHOOSEALL_OLD;
        break;
      case -196613:
        d = new CND_CHOOSEZONE_OLD;
        break;
      case -131077:
        d = new CND_NUMOFALLOBJECT_OLD;
        break;
      case -65541:
        d = new CND_NUMOFALLZONE_OLD;
        break;
      case -5:
        d = new CND_NOMOREALLZONE_OLD;
        break;
      case -5308409:
        d = new Pb;
        break;
      case -5439484:
        d = new CND_QEQUAL;
        break;
      case -5373948:
        d = new CND_QFALSE;
        break;
      case -5308412:
        d = new CND_QEXACT;
        break;
      case -5505015:
        d = new CND_CCAISPAUSED;
        break;
      case -5439479:
        d = new CND_CCAISVISIBLE;
        break;
      case -5373943:
        d = new CND_CCAAPPFINISHED;
        break;
      case -5308407:
        d = new CND_CCAFRAMECHANGED;
        break;
      default:
        switch (e & 4294901760) {
          case -2818048:
            d = new CND_EXTCMPVARCONST;
            break;
          case -2752512:
            d = new CND_EXTCMPVARCONST;
            break;
          case -2686976:
            d = new CND_EXTONLOOP;
            break;
          case -2621440:
            d = new CND_EXTISSTRIKEOUT;
            break;
          case -2555904:
            d = new CND_EXTISUNDERLINE;
            break;
          case -2490368:
            d = new CND_EXTISITALIC;
            break;
          case -2424832:
            d = new CND_EXTISBOLD;
            break;
          case -2359296:
            d = new CND_EXTCMPVARSTRING;
            break;
          case -2293760:
            d = new CND_EXTPATHNODENAME;
            break;
          case -2228224:
            d = new CND_EXTCHOOSE;
            break;
          case -2162688:
            d = new CND_EXTNOMOREOBJECT;
            break;
          case -2097152:
            d = new CND_EXTNUMOFOBJECT;
            break;
          case -2031616:
            d = new CND_EXTNOMOREZONE;
            break;
          case -1966080:
            d = new CND_EXTNUMBERZONE;
            break;
          case -1900544:
            d = new Sb;
            break;
          case -1835008:
            d = new CND_EXTHIDDEN;
            break;
          case -1769472:
            d = new CND_EXTCMPVAR;
            break;
          case -1703936:
            d = new CND_EXTCMPVARFIXED;
            break;
          case -1638400:
            d = new CND_EXTFLAGSET;
            break;
          case -1572864:
            d = new CND_EXTFLAGRESET;
            break;
          case -1507328:
            d = new CND_EXTISCOLBACK;
            break;
          case -1441792:
            d = new CND_EXTNEARBORDERS;
            break;
          case -1376256:
            d = new CND_EXTENDPATH;
            break;
          case -1310720:
            d = new CND_EXTPATHNODE;
            break;
          case -1245184:
            d = new CND_EXTCMPACC;
            break;
          case -1179648:
            d = new CND_EXTCMPDEC;
            break;
          case -1114112:
            d = new CND_EXTCMPX;
            break;
          case -1048576:
            d = new CND_EXTCMPY;
            break;
          case -983040:
            d = new CND_EXTCMPSPEED;
            break;
          case -917504:
            d = new Tb;
            break;
          case -851968:
            d = new CND_EXTCOLBACK;
            break;
          case -786432:
            d = new CND_EXTOUTPLAYFIELD;
            break;
          case -720896:
            d = new CND_EXTINPLAYFIELD;
            break;
          case -655360:
            d = new CND_EXTISOUT;
            break;
          case -589824:
            d = new CND_EXTISIN;
            break;
          case -524288:
            d = new CND_EXTFACING;
            break;
          case -458752:
            d = new CND_EXTSTOPPED;
            break;
          case -393216:
            d = new CND_EXTBOUNCING;
            break;
          case -327680:
            d = new CND_EXTREVERSED;
            break;
          case -262144:
            d = new CND_EXTISCOLLIDING;
            break;
          case -196608:
            d = new CND_EXTANIMPLAYING;
            break;
          case -131072:
            d = new CND_EXTANIMENDOF;
            break;
          case -65536:
            d = new CND_EXTCMPFRAME;
            break;
          default:
            d = new jd
        }
    }
    if (d != m && (d.la = e, d.oe = a.file.J(), d.xb = a.file.J(), d.Ia = a.file.Ea(), d.gf = a.file.Ea(), d.jd = a.file.Ea(), d.Lm = a.file.Ea(), d.Zy = a.file.k(), 0 < d.jd)) {
      d.s = Array(d.jd);
      for (e = 0; e < d.jd; e++) d.s[e] = Wa.create(a)
    }
    a.file.seek(b +
      c);
    return d
  };
  V.VH = function(a) {
    return a.gf & Q.Ik ? G : j
  };
  V.UA = function(a) {
    return a.gf & Q.Ik ? j : G
  };
  V.WH = function(a, b) {
    return a.gf & Q.Ik ? !b : b
  };
  V.wO = function(a) {
    var b = a.l.pg,
      c = b.Ej,
      a = b.Ej = a.Kb;
    if (a == c) return G;
    a--;
    return a == c ? G : j
  };
  V.qy = function(a, b) {
    var c, d = b.Vp;
    if (d == m) d = new S, b.Vp = d;
    else
      for (c = 0; c < d.size(); c++)
        if (d.get(c) == a) return G;
    d.add(a);
    d = b.Kz;
    if (d == m) return j;
    for (c = 0; c < d.size(); c++)
      if (d.get(c) == a) return G;
    return j
  };
  V.oO = function(a, b) {
    return 0 == b ? G : b == a.Kb || b == a.Kb - 1 ? j : G
  };
  xa.prototype = {
    dc: $(G),
    Aa: $(G)
  };
  hb.prototype = {
    dc: $(j),
    Aa: $(j)
  };
  V.prototype = {
    Xy: function(a, b) {
      for (var c = a.l.ni(this.xb), d = a.l.fh; c != m;) b.wG(c) == G && (d--, a.l.Qf()), c = a.l.oi();
      return 0 != d ? j : G
    },
    kH: function(a) {
      if (a.l.Kh) return a.l.ni(this.xb), a.l.ni(this.s[0].Ib), G;
      var b = G;
      0 != (this.gf & Q.Ik) && (b = j);
      var c = a.l.ni(this.xb);
      if (c == m) return V.UA(this);
      var d = a.l.fh,
        e = this.s[0].xh;
      0 <= e ? (a.pu[0] = e, a.pu[1] = this.s[0].Ib, e = a.pu) : e = a.l.Jb[this.s[0].Ib & 32767].ra;
      var g = G,
        h = new S,
        n, r;
      do {
        c = a.tl(c, c.b.Da, c.b.Xa, c.b.tb, c.b.ub, c.o, c.n, e);
        if (c == m) b == G && (d--,
          a.l.Qf());
        else {
          g = G;
          for (n = 0; n < c.size(); n++) r = c.get(n), 0 == (r.M & E.Ff) && (h.add(r), g = j);
          b == j ? g == j && (d--, a.l.Qf()) : g == G && (d--, a.l.Qf())
        }
        c = a.l.oi()
      } while (c != m);
      if (0 == d) return G;
      c = a.l.ni(this.s[0].Ib);
      if (c == m) return G;
      d = a.l.fh;
      if (b == G) {
        do {
          for (n = 0; n < h.size() && !(r = h.get(n), c == r); n++);
          n == h.size() && (d--, a.l.Qf());
          c = a.l.oi()
        } while (c != m);
        return 0 != d ? j : G
      }
      do {
        for (n = 0; n < h.size(); n++)
          if (r = h.get(n), c == r) {
            d--;
            a.l.Qf();
            break
          }
        c = a.l.oi()
      } while (c != m);
      return 0 != d ? j : G
    }
  };
  Kb.prototype = {
    dc: function(a) {
      return this.Aa(a)
    },
    Aa: function(a) {
      var b;
      b = 52 == this.s[0].code ? a.lf(this.s[0]) - 1 : this.s[0].value;
      b = a.f.gh(b);
      a = a.ri(this.s[1]);
      return k.zt(b, a, this.s[1].wp)
    }
  };
  ib.prototype = {
    dc: function(a) {
      return this.Aa(a)
    },
    Aa: function(a) {
      return a.f.gh(this.s[0].value) == this.s[1].ka[0].value
    }
  };
  jb.prototype = {
    dc: function(a) {
      return this.Aa(a)
    },
    Aa: function(a) {
      return a.f.gh(this.s[0].value) != this.s[1].ka[0].value
    }
  };
  kb.prototype = {
    dc: function(a) {
      return this.Aa(a)
    },
    Aa: function(a) {
      return a.f.gh(this.s[0].value) <= this.s[1].ka[0].value
    }
  };
  lb.prototype = {
    dc: function(a) {
      return this.Aa(a)
    },
    Aa: function(a) {
      return a.f.gh(this.s[0].value) < this.s[1].ka[0].value
    }
  };
  mb.prototype = {
    dc: function(a) {
      return this.Aa(a)
    },
    Aa: function(a) {
      return a.f.gh(this.s[0].value) >= this.s[1].ka[0].value
    }
  };
  nb.prototype = {
    dc: function(a) {
      return this.Aa(a)
    },
    Aa: function(a) {
      return a.f.gh(this.s[0].value) > this.s[1].ka[0].value
    }
  };
  Lb.prototype = {
    dc: function(a) {
      return this.Aa(a)
    },
    Aa: function(a) {
      var b = 0;
      switch (this.s[0].key) {
        case 1:
          b = p.le;
          break;
        case 2:
          b = p.uj;
          break;
        case 4:
          b = p.Vk
      }
      return a.f.Cc[b] == G ? V.UA(this) : V.VH(this)
    }
  };
  Mb.prototype = {
    dc: function(a) {
      if (a.l.sc != this.s[0].value) return G;
      var b = a.l.cw,
        c = this.s[1];
      if (b == c.xh) return a.l.Fj(a.l.bw), j;
      c = c.Ib;
      if (0 == (c & 32768)) return G;
      var d = a.l.Jb[c & 32767],
        e;
      for (e = 0; e < d.ra.length; e += 2)
        if (d.ra[e] == b) return a.l.yG(c), a.l.Fj(a.l.bw), j;
      return G
    },
    Aa: function(a) {
      return a.l.gr != this.s[0].value ? G : a.SG(this.s[1].Ib, G)
    }
  };
  Nb.prototype = {
    dc: function(a) {
      if (this.s[0].value == a.l.sc) {
        var b = this.s[1];
        if (a.Oe >= b.FC && a.Oe < b.GC && a.Pe >= b.HC && a.Pe < b.IC) return j
      }
      return G
    },
    Aa: function(a) {
      if (this.s[0].value == a.l.gr) {
        var b =
          this.s[1];
        if (a.Oe >= b.FC && a.Oe < b.GC && a.Pe >= b.HC && a.Pe < b.IC) return j
      }
      return G
    }
  };
  Ob.prototype = {
    dc: function(a) {
      return this.Aa(a)
    },
    Aa: function(a) {
      var b = a.ri(this.s[0]);
      return k.zt(a.Za, b, this.s[0].wp)
    }
  };
  Pb.prototype = {
    dc: function(a) {
      return this.Aa(a)
    },
    Aa: function(a) {
      for (var b = a.l.ni(this.xb), c = a.l.fh, d; b != m;) b = b.ga, d = a.ri(this.s[0]), k.zt(b, d, this.s[0].wp) == G && (c--, a.l.Qf()), b = a.l.oi();
      return 0 != c
    }
  };
  Qb.prototype = {
    dc: function(a) {
      return this.Aa(a)
    },
    Aa: function(a) {
      var b;
      b = 22 == this.s[0].code ? a.lf(this.s[0]) :
        this.s[0].Qd;
      var c = this.s[1];
      if (a.Ui >= b) {
        if (c.value == a.Kb) return c.value = a.Kb + 1, G;
        c.value = a.Kb + 1;
        return j
      }
      return G
    }
  };
  Rb.prototype = {
    dc: function(a) {
      return this.Aa(a)
    },
    Aa: function(a) {
      var b = this.s[1];
      if (0 == b.Aw) a = 22 == this.s[0].code ? a.lf(this.s[0]) : this.s[0].Qd, b.value = a, b.Aw = -1;
      else if (b.value -= a.ho, 0 >= b.value) return a = 22 == this.s[0].code ? a.lf(this.s[0]) : this.s[0].Qd, b.value += a, j;
      return G
    }
  };
  Sb.prototype = q.extend(new V, {
    dc: function(a) {
      return this.Xy(a, this)
    },
    Aa: function(a) {
      return this.Xy(a, this)
    },
    wG: function(a) {
      return V.WH(this,
        0 == (a.u.L & w.Ug))
    }
  });
  Tb.prototype = q.extend(new V, {
    dc: function(a, b) {
      for (var c = a.w[a.l.MB], d = this.oe, e = this.s[0], g = e.xh;;) {
        if (d == b.Db) {
          if (g == c.Db) break;
          if (0 <= g) return G;
          if (this.$k(a, e.Ib, c.Db)) break;
          return G
        }
        if (g == b.Db) {
          if (d == c.Db) break;
          if (0 <= d) return G;
          if (this.$k(a, this.xb, c.Db)) break;
          return G
        }
        if (0 > d) {
          if (0 > g) {
            if (this.$k(a, this.xb, b.Db)) {
              if (this.$k(a, e.Ib, c.Db)) break;
              if (this.$k(a, e.Ib, b.Db) == G) return G
            }
            if (this.$k(a, this.xb, c.Db)) break
          } else if (g == c.Db) break;
          return G
        }
        if (0 <= g || d != c.Db) return G;
        break
      }
      d =
        c.cn << 16 | this.Zy & 65535;
      if (V.qy(d, b) == G) {
        if (0 == (a.l.pg.Ha & K.Ho)) return G;
        a.l.jr = j
      }
      d = b.cn << 16 | this.Zy & 65535;
      if (V.qy(d, c) == G) {
        if (0 == (a.l.pg.Ha & K.Ho)) return G;
        a.l.jr = j
      }
      a.l.Fj(b);
      a.l.Fj(c);
      c.q.Z.Pd == a.Nc ? b.q.Z.Pd = a.Nc : b.q.Z.Pd == a.Nc && (c.q.Z.Pd = a.Nc);
      return j
    },
    Aa: function(a) {
      return this.kH(a)
    },
    $k: function(a, b, c) {
      if (-1 == b) return G;
      a = a.l.Jb[b & 32767];
      for (b = 0; b < a.ra.length; b += 2)
        if (a.ra[b] == c) return j;
      return G
    }
  });
  ia.oL = 8960;
  ia.qL = 9216;
  ia.nL = 9472;
  ia.rL = 9728;
  ia.mL = 9984;
  ia.pL = 10752;
  ia.ls = 262143;
  ia.aE = 65535;
  ia.lL =
    1572863;
  ia.create = function(a) {
    var b = a.U,
      c = m,
      d = a.m();
    switch (d) {
      case 0:
        c = new ya;
        break;
      case 131072:
        c = new EXP_PLUS;
        break;
      case 262144:
        c = new EXP_MINUS;
        break;
      case 393216:
        c = new EXP_MULT;
        break;
      case 524288:
        c = new EXP_DIV;
        break;
      case 655360:
        c = new EXP_MOD;
        break;
      case 786432:
        c = new EXP_POW;
        break;
      case 917504:
        c = new EXP_AND;
        break;
      case 1048576:
        c = new EXP_OR;
        break;
      case 1179648:
        c = new EXP_XOR;
        break;
      case 65535:
        c = new pb;
        break;
      case 131071:
        c = new EXP_RANDOM;
        break;
      case 196607:
        c = new EXP_VARGLO;
        break;
      case 262143:
        c = new Zb;
        break;
      case 327679:
        c =
          new EXP_STR;
        break;
      case 393215:
        c = new EXP_VAL;
        break;
      case 458751:
      case 524287:
      case 589823:
      case 655359:
        c = new ob;
        break;
      case 720895:
        c = new EXP_SIN;
        break;
      case 786431:
        c = new EXP_COS;
        break;
      case 851967:
        c = new EXP_TAN;
        break;
      case 917503:
        c = new EXP_SQR;
        break;
      case 983039:
        c = new EXP_LOG;
        break;
      case 1048575:
        c = new EXP_LN;
        break;
      case 1114111:
        c = new EXP_HEX;
        break;
      case 1179647:
        c = new EXP_BIN;
        break;
      case 1245183:
        c = new EXP_EXP;
        break;
      case 1310719:
        c = new EXP_LEFT;
        break;
      case 1376255:
        c = new EXP_RIGHT;
        break;
      case 1441791:
        c = new EXP_MID;
        break;
      case 1507327:
        c = new EXP_LEN;
        break;
      case 1572863:
        c = new Ub;
        break;
      case 1638399:
        c = new Yb;
        break;
      case 1900543:
        c = new EXP_INT;
        break;
      case 1966079:
        c = new EXP_ABS;
        break;
      case 2031615:
        c = new EXP_CEIL;
        break;
      case 2097151:
        c = new EXP_FLOOR;
        break;
      case 2162687:
        c = new EXP_ACOS;
        break;
      case 2228223:
        c = new EXP_ASIN;
        break;
      case 2293759:
        c = new EXP_ATAN;
        break;
      case 2359295:
        c = new EXP_NOT;
        break;
      case 2686975:
        c = new EXP_MIN;
        break;
      case 2752511:
        c = new EXP_MAX;
        break;
      case 2818047:
        c = new EXP_GETRGB;
        break;
      case 2883583:
        c = new EXP_GETRED;
        break;
      case 2949119:
        c =
          new EXP_GETGREEN;
        break;
      case 3014655:
        c = new EXP_GETBLUE;
        break;
      case 3080191:
        c = new EXP_LOOPINDEX;
        break;
      case 3145727:
        c = new EXP_NEWLINE;
        break;
      case 3211263:
        c = new EXP_ROUND;
        break;
      case 3276799:
        c = new EXP_STRINGGLO;
        break;
      case 3342335:
        c = new Xb;
        break;
      case 3407871:
        c = new EXP_LOWER;
        break;
      case 3473407:
        c = new EXP_UPPER;
        break;
      case 3538943:
        c = new EXP_FIND;
        break;
      case 3604479:
        c = new EXP_REVERSEFIND;
        break;
      case 3866623:
        c = new EXP_FLOATTOSTRING;
        break;
      case 3932159:
        c = new EXP_ATAN2;
        break;
      case 3997695:
        c = new ya;
        break;
      case 4063231:
        c =
          new ob;
        break;
      case 4128767:
        c = new EXP_DISTANCE;
        break;
      case 4194303:
        c = new EXP_ANGLE;
        break;
      case 4259839:
        c = new EXP_RANGE;
        break;
      case 4325375:
        c = new EXP_RANDOMRANGE;
        break;
      case 4456447:
        c = new EXP_RUNTIMENAME;
        break;
      case -1:
        c = new EXP_PARENTH1;
        break;
      case -65537:
        c = new EXP_PARENTH2;
        break;
      case -131073:
        c = new EXP_VIRGULE;
        break;
      case 65534:
        c = new EXP_GETSAMPLEMAINVOL;
        break;
      case 131070:
        c = new EXP_GETSAMPLEVOL;
        break;
      case 196606:
        c = new EXP_GETCHANNELVOL;
        break;
      case 262142:
        c = new ya;
        break;
      case 327678:
        c = new EXP_GETSAMPLEPAN;
        break;
      case 393214:
        c = new EXP_GETCHANNELPAN;
        break;
      case 458750:
        c = new EXP_GETSAMPLEPOS;
        break;
      case 524286:
        c = new EXP_GETCHANNELPOS;
        break;
      case 589822:
        c = new EXP_GETSAMPLEDUR;
        break;
      case 655358:
        c = new EXP_GETCHANNELDUR;
        break;
      case 720894:
        c = new EXP_GETSAMPLEFREQ;
        break;
      case 786430:
        c = new EXP_GETCHANNELFREQ;
        break;
      case 65533:
        c = new EXP_GAMLEVEL;
        break;
      case 131069:
        c = new EXP_GAMNPLAYER;
        break;
      case 196605:
        c = new EXP_PLAYXLEFT;
        break;
      case 262141:
        c = new EXP_PLAYXRIGHT;
        break;
      case 327677:
        c = new EXP_PLAYYTOP;
        break;
      case 393213:
        c = new EXP_PLAYYBOTTOM;
        break;
      case 458749:
        c = new EXP_PLAYWIDTH;
        break;
      case 524285:
        c = new EXP_PLAYHEIGHT;
        break;
      case 589821:
        c = new EXP_GAMLEVELNEW;
        break;
      case 655357:
        c = new EXP_GETCOLLISIONMASK;
        break;
      case 720893:
        c = new EXP_FRAMERATE;
        break;
      case 786429:
        c = new EXP_GETVIRTUALWIDTH;
        break;
      case 851965:
        c = new EXP_GETVIRTUALHEIGHT;
        break;
      case 917501:
        c = new EXP_GETFRAMEBKDCOLOR;
        break;
      case 983037:
        c = new ya;
        break;
      case 1048573:
        c = new ya;
        break;
      case 1114109:
        c = new EXP_FRAMEALPHACOEF;
        break;
      case 1179645:
        c = new EXP_FRAMERGBCOEF;
        break;
      case 1245181:
        c = new ya;
        break;
      case 65532:
        c = new EXP_TIMVALUE;
        break;
      case 131068:
        c = new EXP_TIMCENT;
        break;
      case 196604:
        c = new EXP_TIMSECONDS;
        break;
      case 262140:
        c = new EXP_TIMHOURS;
        break;
      case 327676:
        c = new EXP_TIMMINITS;
        break;
      case 393212:
        c = new EXP_EVENTAFTER;
        break;
      case 65530:
        c = new EXP_XMOUSE;
        break;
      case 131066:
        c = new EXP_YMOUSE;
        break;
      case 196602:
        c = new EXP_MOUSEWHEELDELTA;
        break;
      case 65529:
        c = new EXP_PLASCORE;
        break;
      case 131065:
        c = new EXP_PLALIVES;
        break;
      case 196601:
        c = new EXP_GETINPUT;
        break;
      case 262137:
        c = new EXP_GETINPUTKEY;
        break;
      case 327673:
        c =
          new EXP_GETPLAYERNAME;
        break;
      case 65531:
        c = new bc;
        break;
      case 5242883:
        c = new EXP_STRNUMBER;
        break;
      case 5308419:
        c = new EXP_STRGETCURRENT;
        break;
      case 5373955:
        c = new EXP_STRGETNUMBER;
        break;
      case 5439491:
        c = new EXP_STRGETNUMERIC;
        break;
      case 5505027:
        c = new EXP_STRGETNPARA;
        break;
      case 5242882:
        c = new EXP_GETRGBAT;
        break;
      case 5308418:
        c = new EXP_GETSCALEX;
        break;
      case 5373954:
        c = new EXP_GETSCALEY;
        break;
      case 5439490:
        c = new EXP_GETANGLE;
        break;
      case 5242887:
        c = new EXP_CVALUE;
        break;
      case 5308423:
        c = new EXP_CGETMIN;
        break;
      case 5373959:
        c =
          new EXP_CGETMAX;
        break;
      case 5439495:
        c = new EXP_CGETCOLOR1;
        break;
      case 5505031:
        c = new EXP_CGETCOLOR2;
        break;
      case 5242889:
        c = new EXP_CCAGETFRAMENUMBER;
        break;
      case 5308425:
        c = new EXP_CCAGETGLOBALVALUE;
        break;
      case 5373961:
        c = new EXP_CCAGETGLOBALSTRING;
        break;
      default:
        switch (d & 4294901760) {
          case 65536:
            c = new EXP_EXTYSPR;
            break;
          case 131072:
            c = new EXP_EXTISPR;
            break;
          case 196608:
            c = new EXP_EXTSPEED;
            break;
          case 262144:
            c = new EXP_EXTACC;
            break;
          case 327680:
            c = new EXP_EXTDEC;
            break;
          case 393216:
            c = new EXP_EXTDIR;
            break;
          case 458752:
            c = new EXP_EXTXLEFT;
            break;
          case 524288:
            c = new EXP_EXTXRIGHT;
            break;
          case 589824:
            c = new EXP_EXTYTOP;
            break;
          case 655360:
            c = new EXP_EXTYBOTTOM;
            break;
          case 720896:
            c = new EXP_EXTXSPR;
            break;
          case 786432:
            c = new EXP_EXTIDENTIFIER;
            break;
          case 851968:
            c = new EXP_EXTFLAG;
            break;
          case 917504:
            c = new EXP_EXTNANI;
            break;
          case 983040:
            c = new EXP_EXTNOBJECTS;
            break;
          case 1048576:
            c = new Vb;
            break;
          case 1114112:
            c = new EXP_EXTGETSEMITRANSPARENCY;
            break;
          case 1179648:
            c = new EXP_EXTNMOVE;
            break;
          case 1245184:
            c = new Wb;
            break;
          case 1310720:
            c = new EXP_EXTGETFONTNAME;
            break;
          case 1376256:
            c =
              new EXP_EXTGETFONTSIZE;
            break;
          case 1441792:
            c = new EXP_EXTGETFONTCOLOR;
            break;
          case 1507328:
            c = new EXP_EXTGETLAYER;
            break;
          case 1572864:
            c = new EXP_EXTGETGRAVITY;
            break;
          case 1638400:
            c = new EXP_EXTXAP;
            break;
          case 1703936:
            c = new EXP_EXTYAP;
            break;
          case 1769472:
            c = new EXP_EXTALPHACOEF;
            break;
          case 1835008:
            c = new EXP_EXTRGBCOEF;
            break;
          case 1900544:
            c = new ya;
            break;
          case 1966080:
            c = new $b;
            break;
          case 2031616:
            c = new ac;
            break;
          case 2097152:
            c = new EXP_EXTDISTANCE;
            break;
          case 2162688:
            c = new EXP_EXTANGLE;
            break;
          case 2228224:
            c = new EXP_EXTLOOPINDEX;
            break;
          case 2293760:
            c = new EXP_EXTGETFRICTION;
            break;
          case 2359296:
            c = new EXP_EXTGETRESTITUTION;
            break;
          case 2424832:
            c = new EXP_EXTGETDENSITY;
            break;
          case 2490368:
            c = new EXP_EXTGETVELOCITY;
            break;
          case 2555904:
            c = new EXP_EXTGETANGLE;
            break;
          case 2621440:
            c = new EXP_EXTWIDTH;
            break;
          case 2686976:
            c = new EXP_EXTHEIGHT;
            break;
          case 2752512:
            c = new EXP_EXTGETMASS;
            break;
          default:
            c = new hd
        }
    }
    if (c != m && (c.code = d, 0 != d)) {
      var e = a.k(),
        g;
      switch (d) {
        case 262143:
          c.ob = a.Ya();
          break;
        case 65535:
          c.value = a.m();
          break;
        case 1572863:
          c.value = a.yI();
          break;
        case 1638399:
          a.W(4);
          c.sh = a.k();
          break;
        case 3342335:
          a.W(4);
          c.sh = a.k();
          break;
        default:
          if (g = d & 65535, 0 != (g & 32768) && (g -= 65536), 2 <= g || g == s.ux) switch (c.xh = a.J(), c.Ib = a.J(), d & 4294901760) {
            case 1048576:
              c.sh = a.k();
              break;
            case 1245184:
              c.sh = a.k()
          }
      }
      a.seek(b + e)
    }
    return c
  };
  ob.prototype = {
    evaluate: function(a) {
      a.Hc[a.gb] = ""
    }
  };
  ya.prototype = {
    evaluate: function(a) {
      a.Hc[a.gb] = 0
    }
  };
  pb.prototype = {
    evaluate: function(a) {
      a.Hc[a.gb] = this.value
    }
  };
  Ub.prototype = {
    evaluate: function(a) {
      a.Hc[a.gb] = this.value;
      a.hz = j
    }
  };
  Vb.prototype = {
    evaluate: function(a) {
      var b =
        a.l.$m(this.Ib);
      b == m ? a.Hc[a.gb] = 0 : (b = b.nb != m ? b.nb.Dz(this.sh) : 0, q.ru(b) || (a.hz = j), a.Hc[a.gb] = b)
    }
  };
  Wb.prototype = {
    evaluate: function(a) {
      var b = a.l.$m(this.Ib);
      a.Hc[a.gb] = b == m ? "" : b.nb.Bz(this.sh)
    }
  };
  Xb.prototype = {
    evaluate: function(a) {
      a.Hc[a.gb] = a.f.sz(this.sh)
    }
  };
  Yb.prototype = {
    evaluate: function(a) {
      a.Hc[a.gb] = a.f.gh(this.sh)
    }
  };
  Zb.prototype = {
    evaluate: function(a) {
      a.Hc[a.gb] = this.ob
    }
  };
  $b.prototype = {
    evaluate: function(a) {
      var b = a.l.$m(this.Ib);
      a.Qe++;
      var c = a.Fz();
      b != m && b.nb != m && 0 <= c && c < b.nb.$c.length ? (b = b.nb.Dz(c),
        q.ru(b) || (a.hz = j), a.Hc[a.gb] = b) : a.Hc[a.gb] = 0
    }
  };
  ac.prototype = {
    evaluate: function(a) {
      var b = a.l.$m(this.Ib);
      a.Qe++;
      var c = a.Fz();
      a.Hc[a.gb] = b != m && b.nb != m && 0 <= c && c < Fa.Dx ? b.nb.Bz(c) : ""
    }
  };
  bc.prototype = {
    evaluate: function(a) {
      a.Hc[a.gb] = a.Za
    }
  };
  ja.FusionVersion = "Clickteam Fusion HTML5 Exporter Build 284.3";
  p.Jf = 4;
  p.rN = 770;
  p.km = 8;
  p.IL = 2;
  p.JL = 8;
  p.pE = 16;
  p.HL = 128;
  p.GL = 256;
  p.FL = 512;
  p.oE = 1024;
  p.EL = 2048;
  p.mE = 1;
  p.kE = 4;
  p.lE = 8;
  p.BL = 64;
  p.zL = 128;
  p.yL = 512;
  p.AL = 1024;
  p.nE = 4096;
  p.DL = 4096;
  p.CL = 8192;
  p.qN = 1;
  p.jp = 0;
  p.Uk = 1;
  p.Ts =
    2;
  p.Sk = 3;
  p.ip = 4;
  p.hp = 5;
  p.Tk = 6;
  p.uN = 7;
  p.gx = 203;
  p.IN = 37;
  p.UN = 39;
  p.XN = 38;
  p.FN = 40;
  p.le = 200;
  p.Vk = 201;
  p.uj = 202;
  p.KN = 96;
  p.LN = 97;
  p.MN = 98;
  p.NN = 99;
  p.ON = 100;
  p.PN = 101;
  p.QN = 102;
  p.RN = 103;
  p.SN = 104;
  p.TN = 105;
  p.VN = 83;
  p.EN = 68;
  p.GN = 69;
  p.YN = 88;
  p.HN = 123;
  p.WN = 16;
  p.DN = 17;
  p.JN = 18;
  p.OK = 0;
  p.JK = 1;
  p.KK = 2;
  p.LK = 3;
  p.MK = 4;
  p.NK = 5;
  p.Hw = 4;
  p.jK = 128;
  p.MC = 1;
  p.OC = 4;
  p.VJ = 65536;
  p.Wr = 32768;
  p.PC = 1048576;
  p.NC = 8388608;
  p.Th = 16777216;
  p.UJ = 33554432;
  p.Rc = 10;
  p.Yw = 592880741;
  p.tj = 1770410840;
  ja.loadApplication = qb;
  ja.loadInfo = cc;
  p.prototype = {
    JH: function() {
      var a =
        this.hn.m();
      0 > this.Zp && (this.Zp = a);
      a != this.Zp && (this.hn.fC(j), a = this.Yp + this.hn.Ya(), window.open(a, "_self"));
      this.gn = 25
    },
    load: function() {
      this.YH = this.file.k();
      this.Dp = 1;
      this.jq = new Ca;
      var a = this.file.m();
      this.jq.getFile(this.path.substring(0, this.path.length - 1) + this.Dp.toString(), qb, a)
    },
    EH: function() {
      this.Dp++;
      if (this.Dp > this.YH) {
        var a = (new H(this.jq.Uc, "content")).file("Application.ccj").Rx();
        this.jq = m;
        this.file = new Ca;
        this.file.aJ(a);
        this.Ht();
        this.qw()
      } else a = this.file.m(), this.jq.getFile(this.path.substring(0,
        this.path.length - 1) + this.Dp.toString(), qb, a)
    },
    Ht: function() {
      this.file.seek(0);
      var a = this.file.DB(4);
      this.zd = G;
      80 == a[0] && (65 == a[1] && 77 == a[2] && 85 == a[3]) && (this.zd = j);
      this.file.fC(this.zd);
      this.file.W(8);
      this.file.W(4);
      this.zc = new pc;
      this.P = new kc(this);
      this.yb = new lc(this);
      this.yg = new mc(this);
      this.ad = new ba(this);
      for (var b, c = 0; 32639 != c;)
        if (c = this.file.k(), this.file.k(), b = this.file.m(), 0 != b) {
          a = this.file.U + b;
          switch (c) {
            case 8739:
              this.DH();
              this.Ut = Array(this.jf);
              this.lz = Array(this.jf);
              this.kz = Array(this.jf);
              this.Vt = Array(this.jf);
              for (b = 0; b < this.jf; b++) this.Vt[b] = m;
              break;
            case 8773:
              this.ya = this.file.m();
              this.file.m();
              this.file.m();
              this.file.k();
              this.file.k();
              break;
            case 8740:
              this.appName = this.file.Ya();
              break;
            case 8750:
              this.file.Ya();
              break;
            case 8782:
              this.Iu = this.file.Ya();
              break;
            case 8754:
              this.IH();
              break;
            case 8755:
              this.HH();
              break;
            case 8745:
            case 8767:
              this.Kp = new Pa(this);
              this.Kp.ZF(this.file);
              this.zc.Dh(this.file);
              break;
            case 8747:
              this.FH(b);
              break;
            case 8778:
              this.Tq = this.file.m();
              this.pB = this.file.m();
              this.qB =
                this.file.m();
              this.sB = this.file.m();
              this.tB = this.file.m();
              this.rB = this.file.Xb();
              this.On = this.file.m(); - 1 != this.On && (this.file.hJ(4), this.On = this.file.Xb());
              this.Sq = this.file.m();
              this.Du = j;
              break;
            case 13107:
              this.Ut[this.fl] = this.file.U;
              for (var d = 0; 32639 != d;)
                if (d = this.file.k(), this.file.k(), b = this.file.m(), 0 != b) {
                  var e = this.file.U + b;
                  switch (d) {
                    case 13108:
                      0 == this.fl && (this.file.W(8), this.file.Xb());
                      break;
                    case 13110:
                      this.Vt[this.fl] = this.file.Ya();
                      break;
                    case 13129:
                      this.lz[this.fl] = this.file.m();
                      this.kz[this.fl] =
                        this.file.m();
                      break;
                    case 13128:
                      var g = b / 6;
                      for (b = 0; b < g; b++) {
                        var h = this.file.k();
                        this.file.W(4);
                        0 != h && (this.Hb[h] = 1, this.Kd = Math.max(this.Kd, h + 1))
                      }
                  }
                  this.file.seek(e)
                }
              this.fl++;
              break;
            case 8760:
              d = this.file.m();
              this.Dj = Array(d);
              for (b = 0; b < d; b++) this.Dj[b] = new dc(this), this.Dj[b].Dh();
              break;
            case 26214:
              this.P.Dh(this.file);
              break;
            case 26215:
              this.yb.Dh(this.file);
              break;
            case 26216:
              this.yg.Dh(this.file)
          }
          this.file.seek(a)
        }
      this.aa = new Ea(this.canvas);
      this.ad.eJ(0 != (this.Yt & p.oE));
      this.rb == m && (this.Zd = new Da)
    },
    $B: function(a,
      b, c, d, e, g) {
      this.rb = a;
      this.ak = c;
      this.Zd = d;
      this.rw = b;
      this.rv = e;
      this.qv = g
    },
    hH: function() {
      this.Lf = G;
      this.VB = 0;
      this.UI = this.VI = 1;
      this.XI = this.WI = this.ea / 2;
      this.ZI = this.YI = this.ma / 2
    },
    Fr: function() {
      window.setTimeout(Za.bind(this), 20)
    },
    qw: function() {
      if ((this.Lz = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent)) && 0 < this.yg.lb) this.xg = new Va(this), this.xg.MH();
      this.Vn();
      this.Cc = Array(p.gx);
      var a;
      for (a = 0; a < p.gx; a++) this.Cc[a] = G;
      this.canvas.Ac = this;
      if (this.rb ==
        m) {
        var b = this;
        window.addEventListener("keypress", function(a) {
          b.mG(a)
        }, G);
        window.addEventListener("keydown", function(a) {
          b.Py(a)
        }, G);
        window.addEventListener("keyup", function(a) {
          b.Qy(a)
        }, G);
        window.addEventListener("blur", function() {
          b.hasFocus = G
        }, G);
        window.addEventListener("focus", function() {
          b.hasFocus = j
        }, G);
        if (window !== window.top) try {
          var c = window.top;
          c.addEventListener("focus", function() {
            b.hasFocus = j;
            b.canvas.focus()
          });
          c.addEventListener("blur", function() {
            b.hasFocus = G
          })
        } catch (d) {}
        window.addEventListener("resize",
          function() {
            b.Vn()
          }, G);
        document.addEventListener("blur", function() {
          b.hasFocus = G
        }, G);
        document.addEventListener("focus", function() {
          b.hasFocus = j
        }, G);
        document.addEventListener("fullscreenchange", function() {
          b.fullScreen = document.SO;
          b.Vn()
        }, G);
        document.addEventListener("mozfullscreenchange", function() {
          b.fullScreen = document.vP;
          b.Vn()
        }, G);
        document.addEventListener("webkitfullscreenchange", function() {
          b.fullScreen = document.aQ;
          b.Vn()
        }, G);
        this.canvas.addEventListener("mousemove", function(a) {
          b.wq(a, b.canvas);
          a.preventDefault &&
            a.preventDefault()
        }, G);
        this.canvas.addEventListener("mousedown", function(a) {
          b.wA(a);
          a.preventDefault && a.preventDefault()
        }, G);
        this.canvas.addEventListener("mouseup", function(a) {
          b.yA(a);
          a.preventDefault && a.preventDefault()
        }, G);
        this.canvas.addEventListener("mouseout", function(a) {
          b.xA(a);
          a.preventDefault && a.preventDefault()
        }, G);
        this.canvas.addEventListener("click", function(a) {
          b.click(a);
          a.preventDefault && a.preventDefault()
        }, G);
        this.canvas.addEventListener("dblclick", function(a) {
          b.Gy(a);
          a.preventDefault &&
            a.preventDefault()
        }, G);
        this.canvas.addEventListener("contextmenu", function(a) {
          a.preventDefault && a.preventDefault()
        }, G);
        a = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
        document.attachEvent ? document.attachEvent("on" + a, function(a) {
          b.zA(a)
        }) : document.addEventListener && document.addEventListener(a, function(a) {
          b.zA(a)
        }, G);
        document.fI = $(G);
        this.canvas.fI = function(a) {
          a.preventDefault && a.preventDefault();
          return G
        };
        this.bj = this.pH();
        this.Ue = new S;
        this.Ve = Array(p.Rc);
        this.hi = Array(p.Rc);
        this.Vl = Array(p.Rc);
        this.Ag = Array(p.Rc);
        this.Bg = Array(p.Rc);
        for (a = 0; a < p.Rc; a++) this.Ve[a] = p.tj, this.Ag[a] = 0, this.Bg[a] = 0, this.hi[a] = G, this.Vl[a] = 0;
        this.bj && (this.canvas.addEventListener("touchstart", function(a) {
          b.Kr(a);
          a.preventDefault && a.preventDefault()
        }, G), this.canvas.addEventListener("touchmove", function(a) {
          b.xC(a);
          a.preventDefault && a.preventDefault()
        }, G), this.canvas.addEventListener("touchend", function(a) {
          b.to(a);
          a.preventDefault && a.preventDefault()
        }, G), this.canvas.addEventListener("touchcancel",
          function(a) {
            b.to(a);
            a.preventDefault && a.preventDefault()
          }, G));
        window.focus();
        this.Fr()
      } else {
        this.bj = this.rb.bj;
        this.Ue = new S;
        this.Ve = Array(p.Rc);
        this.hi = Array(p.Rc);
        this.Vl = Array(p.Rc);
        this.Ag = Array(p.Rc);
        this.Bg = Array(p.Rc);
        for (a = 0; a < p.Rc; a++) this.Ve[a] = p.tj, this.Ag[a] = 0, this.Bg[a] = 0, this.hi[a] = G, this.Vl[a] = 0
      }
      this.Ma = this.Ek = this.Dk = 0;
      this.me = -2;
      this.z = new k(this)
    },
    Vn: function() {
      var a = this.ea,
        b = this.ma;
      this.canvas.width = a;
      this.canvas.height = b;
      var c, d;
      this.fullScreen || this.Yt & p.pE ? (c = window.innerWidth,
        d = window.innerHeight, document.documentElement.style.overflow = "hidden", document.body.scroll = "no") : (c = a, d = b);
      c /= a;
      d /= b;
      this.ya & p.MC && (c = d = Math.min(c, d));
      if (c != this.Zb || d != this.$b) {
        this.Zb = c;
        this.$b = d;
        this.canvas.width = Math.floor(this.Zb * a);
        this.canvas.height = Math.floor(this.$b * b);
        this.aa.cC(this.Zb, this.$b);
        a = window.innerWidth / 2 - this.canvas.width / 2;
        b = window.innerHeight / 2 - this.canvas.height / 2;
        this.canvas.style.left = a.toString() + "px";
        this.canvas.style.top = b.toString() + "px";
        for (d = this.canvas; d;) d.style.left =
          a.toString() + "px", d.style.top = b.toString() + "px", d.position = "absolute", d = d.offsetParent
      }
      this.z && this.z.wj()
    },
    pH: function() {
      var a = "Android;webOS;iPhone;iPad;iPod;Blackberry;Windows Phone;Touch".split(";"),
        b = navigator.userAgent;
      for (i in a)
        if (0 <= b.indexOf(a[i])) return j;
      return G
    },
    li: function(a) {
      this.Fp.GB(a);
      this.ih++
    },
    um: function(a) {
      this.Fm.add(a);
      this.jh++;
      this.mh = j
    },
    qo: function() {
      this.Yp && (this.gn--, 0 > this.gn && (this.gn = 1E9, this.hn = new Ca, this.hn.getFile(this.Yp + "info.dat", cc)));
      this.Qd = (new Date).getTime();
      if (this.pI(G)) {
        if (this.mh) {
          if (this.Ki == m) {
            this.Ki = this.Du ? 0 == this.Tq ? new ec(this) : new gc(this) : new fc(this);
            this.uB = G;
            this.Uv = j;
            this.rb == m && (this.frame.dq ? this.aa.wt(0, 0, this.canvas.width, this.canvas.height) : this.aa.kc(0, 0, this.ea, this.ma, this.Rf), this.Fr());
            return
          }
          if (this.Ki != m && this.uB == G) {
            this.uB = this.Ki.load();
            this.rb == m && this.Fr();
            return
          }
          for (; 0 < this.Fm.size() && this.Fp.size() < this.fG;) {
            var a = this.Fm.get(0);
            this.Fp.add(a);
            this.Fm.FB(0);
            a.Jt()
          }
          this.ad.hG();
          a = G;
          0 == this.Fm.size() && 0 == this.Fp.size() &&
            (a = j);
          if (this.Ki != m && (0 != (this.ya & p.Th) || 0 != (this.frame.en & z.tE))) this.Uv || (this.Ki.reset(), this.Uv = j), this.Ki.step(), a = this.Ki.qu();
          a && (this.Uv = G, this.z.xe(), this.z.Zg(), this.mh = G, this.P.Ne(), this.yg.Ne(), this.yb.Ne(), this.ih = this.jh = 0, this.lt && (this.lt = G, 0 != this.z.Kt() ? this.Ma = p.hp : (this.Ma = p.Sk, this.qC(this.Df), this.Df = m)));
          this.rb == m && this.Fr()
        } else if (this.rb == m) {
          if (this.Qc == m) {
            if (this.aa.Tv(0 != (this.ya & p.OC)), this.Uq ? this.aa.Ri(this.Uq, 0, 0, this.ea, this.ma, 0, 0) : this.frame.dq ? this.aa.wt(0, 0, this.ea,
                this.ma) : this.aa.kc(0, 0, this.ea, this.ma, this.Rf), a = this.aa.wa, this.Lf && (bRestore = j, a.save(), a.translate(this.WI, this.YI), 0 != this.VB && a.rotate(0.0174532925 * -this.VB), a.scale(Math.max(0.001, this.UI), Math.max(0.001, this.VI)), a.translate(-this.XI, -this.ZI)), this.Zd.kb(this.aa, 0, 0), this.Lf && a.restore(), this.lh && this.ha.kb(this.aa), this.Bw) this.Bw--, this.Pr || (a = new Aa, a.Bp(), a.bb = 16, this.Pr = new la(this, this.ea, 30), this.Pr.fA(16711680), this.Pr.uq(window.FusionVersion, q.ij | q.jj, m, 16777215, a, 1, 10526880)),
              this.Pr.kb(this.aa, 0, 0, 0, 0)
          } else this.aa.Tv(), this.aa.Ri(this.Qc, 0, 0, this.ea, this.ma, 0, 0);
          0 != (this.Wm & p.nE) && window.requestAnimationFrame ? window.requestAnimationFrame(Za) : (a = (new Date).getTime() - this.Qd, a = Math.max(1E3 / this.oz - a, 1), window.setTimeout(Za, a))
        }
        return j
      }
      this.Vy();
      return G
    },
    Ry: function(a, b, c, d) {
      this.mh || (this.Qc == m ? (d || this.aa.kc(b, c, this.rv, this.qv, this.Rf), this.aa.clip(b, c, this.rv, this.qv), this.Zd.kb(this.aa, 0, 0), this.aa.vJ()) : (this.aa.Tv(), this.aa.Ri(this.Qc, b, c, this.ea, this.ma, 0, 0)))
    },
    MF: function() {
      0 == (this.ya & p.PC) && (this.hasFocus ? this.mt && (this.z.xe(), this.mt = G) : (this.z.pause(this.Wm & p.lE), this.mt = j))
    },
    pI: function(a) {
      this.MF();
      var b = j,
        c = j;
      do switch (this.Ma) {
        case p.jp:
          if (this.fH(), this.mb = this.rw, this.Ma = 1, this.sH(), a) {
            b = G;
            break
          }
        case p.Uk:
          this.nJ();
          break;
        case p.Ts:
          this.NH() == G ? (this.sG(), (this.Ma == p.Tk || this.Ma == p.jp) && this.Km()) : b = G;
          break;
        case p.Sk:
          this.z.Kt();
          0 != this.z.hb ? this.lJ() ? this.Ma = p.ip : this.Km() : b = G;
          break;
        case p.ip:
          this.OH() == G ? (this.Wy(), (this.Ma == p.Tk || this.Ma == p.jp) &&
            this.Km()) : b = G;
          break;
        case p.hp:
          this.Km();
          break;
        default:
          b = G
      }
      while (b == j);
      this.Ma == p.Tk && (c = G);
      return c
    },
    Vy: function() {
      this.ad != m && this.ad.sw()
    },
    nJ: function() {
      this.mb != this.me && (this.frame = new z(this), this.frame.GH(this.mb));
      this.Rf = this.frame.Sz;
      this.me = this.mb;
      this.frame.vi = this.frame.wi = 0;
      this.frame.Tz = this.frame.Uz = 0;
      this.frame.TB = G;
      this.hH();
      var a;
      this.rb != m ? this.Sh = this.Qh = 0 : (this.Qh = this.ea / 2 - this.frame.ln / 2, this.Sh = this.ma / 2 - this.frame.kn / 2);
      for (a = 0; a < this.frame.Ec; a++) this.frame.ab[a].$F(this.Qh,
        this.Sh);
      this.frame.Gb & z.EE && (document.title = this.frame.mz);
      this.Uq = m;
      this.frame.Gb & z.FE && (this.Uq = this.Df);
      this.frame.Gb & z.HE && (this.frame.dq = j);
      this.z.bJ(this.frame);
      this.z.gH(this.frame.Om != m);
      this.Ma = p.Sk;
      this.frame.Om != m ? this.mh ? this.lt = j : 0 != this.z.Kt() ? this.Ma = p.hp : (this.Ma = p.Sk, this.qC(this.Df), this.Df = m) : this.Df = m;
      this.mh ? this.z.pause(j) : this.z.Zg()
    },
    LB: function() {
      this.rb != m ? this.Sh = this.Qh = 0 : (this.Qh = this.ea / 2 - this.frame.ln / 2, this.Sh = this.ma / 2 - this.frame.kn / 2);
      var a;
      for (a = 0; a < this.frame.Ec; a++) this.frame.ab[a].QI(this.Qh,
        this.Sh)
    },
    Km: function() {
      var a;
      a = this.z.tH(G);
      if (0 != (this.Wm & p.kE)) this.Ma = p.Tk;
      else switch (q.LE(a)) {
        case 1:
          this.mb = this.me + 1;
          1 == this.Tq && this.mb == this.Sq && this.mb++;
          this.Ma = p.Uk;
          this.mb >= this.jf && (this.Ma = p.Tk);
          break;
        case 2:
          this.mb = Math.max(0, this.me - 1);
          1 == this.Tq && this.mb == this.Sq && (0 == this.mb ? this.mb = this.me : this.mb--);
          this.Ma = p.Uk;
          break;
        case 3:
          this.Ma = p.Uk;
          if (0 != (q.Ko(a) & 32768)) {
            if (this.mb = q.Ko(a) & 32767, this.mb >= this.jf && (this.mb = this.jf - 1), 0 > this.mb) this.mb = 0
          } else q.Ko(a) < this.Tm ? (this.mb = this.Sm[q.Ko(a)], -1 == this.mb && (this.mb = this.me + 1)) : this.mb = this.me + 1;
          break;
        case 4:
          this.Ma = p.jp;
          this.mb = this.rw;
          break;
        default:
          this.Ma = p.Tk
      }
      if (this.Ma == p.Uk && (0 > this.mb || this.mb >= this.jf)) this.Ma = this.me;
      if (this.Ma != p.Uk || this.mb != this.me) {
        for (a = 0; a < this.frame.Ec; a++) this.frame.ab[a].Iy();
        this.frame = m;
        this.me = -1
      }
    },
    eu: function() {
      this.ww == m && (this.ww = new Ic(this));
      return this.ww
    },
    qC: function(a) {
      var b = m,
        c = m,
        d = this.frame.Om;
      if (d != m) {
        b = document.createElement("canvas");
        b.width = this.ea;
        b.height = this.ma;
        c = document.createElement("canvas");
        c.width = this.ea;
        c.height = this.ma;
        var e = new Ea(c);
        e.kc(0, 0, this.ea, this.ma, this.Rf);
        this.Zd.kb(e, 0, 0);
        e = new Ea(b);
        0 != (d.vo & va.kp) ? e.kc(0, 0, this.ea, this.ma, d.uo) : (e.kc(0, 0, this.ea, this.ma, this.nz), a != m && e.Ri(a, 0, 0, a.width, a.height, 0, 0));
        this.Qc = document.createElement("canvas");
        this.Qc.width = this.ea;
        this.Qc.height = this.ma;
        this.Qc.getContext("2d").drawImage(b, 0, 0);
        this.bd = this.eu().cl(d, this.Qc, b, c);
        if (this.bd != m) return this.Ma = p.Ts, j
      }
      this.Qc = m;
      this.Ma = p.Sk;
      this.z.wy();
      return G
    },
    NH: function() {
      if (this.bd !=
        m) {
        if (this.bd.$p()) return G;
        this.bd.wb(t.Vs);
        return j
      }
      return G
    },
    sG: function() {
      this.bd != m && (this.bd.end(), this.Qc = this.bd = m, this.Ma == p.Ts && (this.Ma = p.Sk), this.z.wy());
      return j
    },
    lJ: function() {
      var a = m,
        b = m,
        c = this.frame.Qt;
      if (c != m) {
        a = document.createElement("canvas");
        a.width = this.ea;
        a.height = this.ma;
        b = document.createElement("canvas");
        b.width = this.ea;
        b.height = this.ma;
        var d = new Ea(a);
        d.kc(0, 0, this.ea, this.ma, this.Rf);
        this.Zd.kb(d, 0, 0);
        d = new Ea(b);
        0 != (c.vo & va.kp) ? d.kc(0, 0, this.ea, this.ma, c.uo) : d.kc(0, 0, this.ea,
          this.ma, 0);
        this.Qc = document.createElement("canvas");
        this.Qc.width = this.ea;
        this.Qc.height = this.ma;
        this.Qc.getContext("2d").drawImage(a, 0, 0);
        this.bd = this.eu().cl(c, this.Qc, a, b);
        if (this.bd != m) return this.Ma = p.ip, j
      }
      this.Qc = m;
      return G
    },
    OH: function() {
      if (this.bd != m) {
        if (this.bd.$p()) return this.Wy(), G;
        this.bd.wb(t.lp)
      }
      return j
    },
    Wy: function() {
      this.bd != m && (this.Df = this.bd.j, this.bd.end(), this.Qc = this.bd = m, this.Ma == p.ip && (this.Ma = p.hp));
      return j
    },
    DH: function() {
      this.file.W(4);
      this.Yt = this.file.k();
      this.Wm = this.file.k();
      this.file.k();
      this.file.k();
      this.ea = this.file.k();
      this.ma = this.file.k();
      this.qz = this.file.m();
      this.pz = this.file.m();
      var a, b;
      this.mB = Array(p.Jf);
      for (a = 0; a < p.Jf; a++) this.mB[a] = this.file.k();
      this.sv = Array(p.Jf * p.km);
      for (a = 0; a < p.Jf; a++)
        for (b = 0; b < p.km; b++) this.sv[a * p.km + b] = this.file.k();
      this.nz = this.file.Xb();
      this.jf = this.file.m();
      this.oz = this.file.m();
      this.file.W(1);
      this.file.W(3)
    },
    IH: function() {
      this.sl = this.file.k();
      this.iu = Array(this.sl);
      this.Gz = Array(this.sl);
      var a;
      for (a = 0; a < this.sl; a++) this.iu[a] =
        this.file.m();
      this.file.CI(this.Gz)
    },
    HH: function() {
      this.wn = this.file.m();
      this.hu = Array(this.wn);
      var a;
      for (a = 0; a < this.wn; a++) this.hu[a] = this.file.Ya()
    },
    FH: function(a) {
      this.Tm = a / 2;
      this.Sm = Array(this.Tm);
      for (a = 0; a < this.Tm; a++) this.Sm[a] = this.file.k()
    },
    rE: function(a) {
      return this.Sm == m || -1 == a || a >= this.Tm ? -1 : this.Sm[a]
    },
    $t: function(a) {
      if (this.ju) {
        var b;
        for (b = 0; b < this.ju.size(); b++)
          if (gFont = this.ju.get(b), gFont.QF(a)) return gFont
      }
      return a
    },
    sH: function() {
      this.di = m
    },
    fH: function() {
      var a;
      if (this.rb == m || this.rb !=
        m && 0 == (this.ak & L.hD)) {
        this.mn = Array(p.Jf);
        for (a = 0; a < p.Jf; a++) this.mn[a] = this.pz ^ 4294967295
      } else this.mn = m;
      if (this.rb == m || this.rb != m && 0 == (this.ak & L.jD)) {
        this.mo = Array(p.Jf);
        for (a = 0; a < p.Jf; a++) this.mo[a] = this.qz ^ 4294967295
      } else this.mo = m;
      this.nB = Array(p.Jf);
      for (a = 0; a < p.Jf; a++) this.nB[a] = "";
      if (this.rb == m || this.rb != m && 0 == (this.ak & L.Mw)) {
        this.Vm = Array(this.sl);
        for (a = 0; a < this.sl; a++) this.Vm[a] = this.iu[a]
      } else this.Vm = m;
      if (this.rb == m || this.rb != m && 0 == (this.ak & L.Mw)) {
        this.Um = Array(this.wn);
        for (a = 0; a < this.wn; a++) this.Um[a] =
          this.hu[a]
      } else this.Um = m
    },
    vz: function() {
      for (var a = this; a.mn == m;) a = this.rb;
      return a.mn
    },
    Az: function() {
      for (var a = this; a.mo == m;) a = this.rb;
      return a.mo
    },
    IG: function() {
      for (var a = this; a.rb != m && 0 != (a.ak & L.iD);) a = a.rb;
      return a.sv
    },
    PG: function() {
      for (var a = this; a.Vm == m;) a = a.rb;
      return a.Vm
    },
    OG: function() {
      for (var a = this; a.Um == m;) a = a.rb;
      return a.Um
    },
    vt: function(a) {
      var b = this.PG();
      if (0 > a || 1E3 < a) return m;
      var c = b.length;
      if (a + 1 > c)
        for (; c < a + 1; c++) b.push(0);
      return b
    },
    gh: function(a) {
      var b = this.vt(a);
      return b != m ? b[a] :
        0
    },
    lw: function(a, b) {
      var c = this.vt(a);
      c != m && (c[a] = b)
    },
    Ox: function(a, b) {
      var c = this.vt(a);
      c != m && (c[a] += b)
    },
    jy: function(a) {
      var b = this.OG();
      if (0 > a || 1E3 < a) return m;
      var c = b.length;
      if (a + 1 > c)
        for (; c < a + 1; c++) b.push("");
      return b
    },
    sz: function(a) {
      var b = this.jy(a);
      return b != m ? b[a] : ""
    },
    cJ: function(a, b) {
      var c = this.jy(a);
      c != m && (c[a] = b)
    },
    mG: function(a) {
      a && (this.DC.charCodeAt(this.xo) == a.charCode ? (this.xo++, this.xo == this.DC.length && (this.Bw = 250, this.xo = 0)) : this.xo = 0)
    },
    Py: function(a) {
      if (a) {
        var b = a.keyCode;
        this.Nj = this.Cc[b] =
          j;
        this.z != m && this.z.l != m && this.z.l.cI(b);
        for (b = 0; b < this.La.length; b++) this.La[b].Py(a)
      }
    },
    Qy: function(a) {
      if (a) {
        this.Cc[a.keyCode] = G;
        var b;
        for (b = 0; b < this.La.length; b++) this.La[b].Qy(a)
      }
    },
    mw: function(a, b) {
      this.Dk = a;
      this.Ek = b
    },
    wq: function(a, b, c) {
      a.pageX ? (this.qf = a.pageX, this.rf = a.pageY) : a.clientY && (this.qf = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, this.rf = a.clientY + document.body.scrollTop + document.documentElement.scrollTop);
      for (var d = 0, e = 0, g = b; g && "BODY" != g.tagName;) d += g.offsetTop,
        e += g.offsetLeft, g = g.offsetParent;
      this.qf -= e + this.Dk;
      this.rf -= d + this.Ek;
      this.qf = Math.floor(this.qf / this.Zb);
      this.rf = Math.floor(this.rf / this.$b);
      this.z != m && this.z.l != m && this.z.l.jB();
      for (d = 0; d < this.La.length; d++) this.La[d].wq(a, b);
      !this.bj && 305419896 != c && this.xC(new Ua(a.pageX, a.pageY, this.canvas))
    },
    yA: function(a) {
      var b;
      if (a.which) switch (a.which) {
        case 2:
          b = p.Vk;
          break;
        case 3:
          b = p.uj;
          break;
        default:
          b = p.le
      } else switch (a.button) {
        case 2:
          b = p.uj;
          break;
        case 4:
          b = p.Vk;
          break;
        default:
          b = p.le
      }
      this.wq(a, this.canvas,
        305419896);
      this.Cc[b] = G;
      for (b = 0; b < this.La.length; b++) this.La[b].yA(a);
      this.bj || this.to(new Ua(a.pageX, a.pageY, this.canvas))
    },
    wA: function(a) {
      var b;
      if (a.which) switch (a.which) {
        case 2:
          b = p.Vk;
          break;
        case 3:
          b = p.uj;
          break;
        default:
          b = p.le
      } else switch (a.button) {
        case 2:
          b = p.uj;
          break;
        case 4:
          b = p.Vk;
          break;
        default:
          b = p.le
      }
      this.wq(a, this.canvas, 305419896);
      this.Nj = j;
      this.Cc[b] = j;
      this.z != m && this.z.l != m && this.z.l.nv(b - p.le, 1);
      for (b = 0; b < this.La.length; b++) this.La[b].wA(a);
      this.bj || this.Kr(new Ua(a.pageX, a.pageY, this.canvas))
    },
    Pm: function(a) {
      this.Cc[p.le] = a;
      var b;
      for (b = 0; b < this.La.length; b++) this.La[b].Pm(a)
    },
    xA: function(a) {
      this.Cc[p.le] = 0;
      this.Cc[p.Vk] = 0;
      this.Cc[p.uj] = 0;
      var b;
      for (b = 0; b < this.La.length; b++) this.La[b].xA(a);
      this.bj || this.to(new Ua(a.pageX, a.pageY, this.canvas))
    },
    click: function(a) {
      var b;
      for (b = 0; b < this.La.length; b++) this.La[b].click(a)
    },
    Gy: function(a) {
      this.z != m && this.z.l != m && this.z.l.nv(0, 2);
      var b;
      for (b = 0; b < this.La.length; b++) this.La[b].Gy(a)
    },
    zA: function(a) {
      this.Jy = "undefined" != typeof a.wheelDelta ? a.wheelDelta /
        40 : -a.detail;
      this.z != m && this.z.l != m && this.z.dI(this.Jy)
    },
    Kr: function(a) {
      this.xg && (this.xg.Ln(), this.xg = m);
      if (this.Ve != m) {
        var b, c;
        for (b = 0; b < a.changedTouches.length; b++) {
          var d = a.changedTouches[b];
          for (c = 0; c < p.Rc; c++)
            if (this.Ve[c] == p.tj) {
              this.Ve[c] = d.identifier;
              this.hi[c] = G;
              for (o = 0; o < this.Ue.size(); o++)
                if (this.Ue.get(o).sJ(d)) {
                  this.hi[c] = j;
                  this.Vl[c] = o;
                  break
                }
              if (!this.hi[c] && (this.Ag[c] = this.Ym(d), this.Bg[c] = this.Zm(d), this.rn == p.tj && d.identifier != p.Yw)) {
                this.rn = c;
                this.qf = this.Ag[c];
                this.rf = this.Bg[c];
                this.Nj = j;
                this.Cc[p.le] = j;
                this.z != m && this.z.l != m && this.z.l.nv(0, 1);
                for (c = 0; c < this.La.length; c++) this.La[c].Kr(a)
              }
              break
            }
        }
      }
    },
    xC: function(a) {
      if (this.Ve != m) {
        var b, c, d;
        for (b = 0; b < a.changedTouches.length; b++) {
          var e = a.changedTouches[b];
          for (c = 0; c < p.Rc; c++)
            if (this.Ve[c] == e.identifier) {
              if (this.hi[c]) this.Ue.get(this.Vl[c]).yC(e);
              else {
                for (d = 0; d < this.Ue.size(); d++) this.Ue.get(d).yC(e);
                this.Ag[c] = this.Ym(e);
                this.Bg[c] = this.Zm(e)
              }
              if (this.rn == c) {
                this.qf = this.Ag[c];
                this.rf = this.Bg[c];
                this.z != m && this.z.l != m && this.z.l.jB();
                for (c = 0; c < this.La.length; c++) this.La[c].Kr(a, m)
              }
              break
            }
        }
      }
    },
    to: function(a) {
      if (this.Ve != m) {
        var b, c, d;
        for (b = 0; b < a.changedTouches.length; b++) {
          var e = a.changedTouches[b];
          for (c = 0; c < p.Rc; c++)
            if (this.Ve[c] == e.identifier) {
              this.Ve[c] = p.tj;
              if (this.hi[c]) this.Ue.get(this.Vl[c]).vC(e);
              else {
                for (d = 0; d < this.Ue.size(); d++) this.Ue.get(d).vC(e);
                this.Ag[c] = this.Ym(e);
                this.Bg[c] = this.Zm(e)
              }
              if (c == this.rn) {
                this.qf = this.Ag[c];
                this.rf = this.Bg[c];
                this.rn = p.tj;
                this.Cc[p.le] = G;
                for (d = 0; d < this.La.length; d++) this.La[d].to(a)
              }
            }
        }
      }
    },
    Ym: function(a) {
      for (var b = a.pageX, a = a.target; a && "BODY" != a.tagName;) b -= a.offsetLeft, a = a.offsetParent;
      return Math.floor((b - this.Dk) / this.Zb)
    },
    Zm: function(a) {
      for (var b = a.pageY, a = a.target; a && "BODY" != a.tagName;) b -= a.offsetTop, a = a.offsetParent;
      return Math.floor((b - this.Ek) / this.$b)
    },
    LG: function(a) {
      if (this.Dj != m) {
        var b;
        b = a.lastIndexOf("\\");
        0 > b && (b = a.lastIndexOf("/"));
        0 <= b && (a = a.substring(b + 1));
        for (b = 0; b < this.Dj.length; b++)
          if (this.Dj[b].path == a) return this.Dj[b]
      }
      return m
    },
    ow: function(a) {
      this.Ey = a;
      this.canvas.style.cursor =
        0 <= this.Ey ? this.cursor : "none"
    },
    rC: function(a, b) {
      this.ha == m && (this.ha = new u(this), this.ha.Yz(), this.ha.reset(b), this.lh = 1, 0 > this.Ue.indexOf(this.ha) && this.Ue.add(this.ha))
    },
    jJ: function() {
      this.kJ();
      this.lh = 2
    },
    tG: function() {
      this.ha != m && (1 == this.lh && this.Ue.GB(this.ha), this.ha = m);
      2 == this.lh && this.qG();
      this.lh = 0
    },
    kJ: function() {
      if (0 == this.sm) {
        var a = this;
        window.YK && (ja.eI = function(b) {
          a.dO = b.Jx.y / 9.780318;
          a.eO = b.Jx.x / 9.780318;
          a.fO = b.Jx.AJ / 9.780318;
          a.Ws = b.Kx.y / 9.780318;
          a.Xs = b.Kx.x / 9.780318;
          a.cO = b.Kx.AJ / 9.780318
        })
      }
      this.sm++
    },
    qG: function() {
      this.sm--;
      0 >= this.sm && (ja.eI = m, this.sm = 0)
    },
    Rp: function() {
      var a = 0; - 0.2 > this.Ws && (a |= 4);
      0.2 < this.Ws && (a |= 8); - 0.2 > this.Xs && (a |= 1);
      0.2 < this.Xs && (a |= 2);
      return a
    },
    Mt: function(a) {
      if (a.Ak) {
        this.xg == m && (a.wC = 2);
        switch (a.wC) {
          case 0:
            0 < a.Cf && (a.Cf -= 2, 0 > a.Cf && (a.Cf = 0, phase++));
            break;
          case 2:
            128 > a.Cf && (a.Cf += 4, 128 <= a.Cf && (a.Cf = 128, a.Jr = j))
        }
        this.aa.kc(a.Rd.left, a.Rd.top, a.Rd.right - a.Rd.left, a.Rd.bottom - a.Rd.top, this.Rf, 0, 0);
        a.Ak.kb(this.aa, a.Rd.left, a.Rd.top, w.We, a.Cf);
        a.Jr && (a.Ak = m, a.Rd = m, a.Ul = m)
      } else if (a.Jr =
        j, this.xg != m) {
        a.Ul = new Aa;
        a.Ul.Bp();
        a.Ul.bb = 24;
        var b = a.Ul.bb + 6;
        a.Ak = new la(this, 120, b);
        var c = a.Ak.measureText(this.Iu, a.Ul) + 64;
        a.Ak.Un(c, b);
        a.Ak.fA();
        a.Ak.uq(this.Iu, q.jj | q.ij, m, 16776960, a.Ul, 2, 0);
        a.Rd = new aa;
        a.Rd.left = this.ea / 2 - c / 2;
        a.Rd.top = this.ma / 2 - b / 2;
        a.Rd.right = a.Rd.left + c;
        a.Rd.bottom = a.Rd.top + b;
        a.Cf = 128;
        a.wC = 0;
        a.Jr = G;
        this.aa.kc(0, 0, this.ea, this.ma, this.Rf, 0, 0)
      }
      return a.Jr
    }
  };
  z.EE = 1;
  z.SL = 2;
  z.FE = 4;
  z.GE = 32;
  z.UL = 256;
  z.TL = 2048;
  z.yc = 32768;
  z.HE = 131072;
  z.dm = 0;
  z.he = 1;
  z.lD = 1;
  z.mD = 2;
  z.jm = 6;
  z.tE = 256;
  z.uE =
    1;
  z.vE = 2;
  z.wE = 4;
  z.AE = 0;
  z.BE = 1;
  z.yE = 2;
  z.zE = 3;
  z.prototype = {
    GH: function(a) {
      this.g.file.seek(this.g.Ut[a]);
      this.Mm = new P(this.g);
      this.cd = new oc;
      this.eq = new aa;
      var a = 0,
        b;
      for (this.sq = -1; 32639 != a;)
        if (a = this.g.file.k(), this.g.file.k(), b = this.g.file.m(), 0 != b) {
          this.rI = this.g.file.U + b;
          switch (a) {
            case 13108:
              this.Au();
              this.g.rb != m && 0 != (this.g.ak & L.gD) ? (this.ln = this.g.cG, this.kn = this.g.dG) : (this.ln = Math.min(this.g.ea, this.Xc), this.kn = Math.min(this.g.ma, this.hc));
              break;
            case 13128:
              var c = b / 6;
              this.qn = Array(c);
              this.Ld =
                Array(c);
              this.Md = Array(c);
              for (b = this.Kd = 0; b < c; b++) this.qn[b] = this.g.file.k(), this.Kd = Math.max(this.Kd, this.qn[b]), this.Ld[b] = this.g.file.k(), this.Md[b] = this.g.file.k();
              this.Kd++;
              break;
            case 13130:
              this.ha = this.g.file.k();
              this.en = this.g.file.k();
              break;
            case 13122:
              this.eq.load(this.g.file);
              break;
            case 13124:
              this.sq = this.g.file.k();
              break;
            case 13127:
              this.$z = this.g.file.m();
              break;
            case 13109:
              this.mz = this.g.file.Ya();
              break;
            case 13115:
              this.Om = new va;
              this.Om.load(this.g.file);
              break;
            case 13116:
              this.Qt = new va;
              this.Qt.load(this.g.file);
              break;
            case 13121:
              this.LH();
              break;
            case 13125:
              this.KH();
              break;
            case 13112:
              this.cd.load(this.g);
              break;
            case 13117:
              this.Mm.load(this.g), this.bg = this.Mm.bg
          }
          this.g.file.seek(this.rI)
        }
      this.g.zc.Ne();
      for (b = 0; b < this.cd.sf; b++) this.g.zc.Xi(this.cd.tz(b).of);
      this.g.P.Ne();
      this.g.yg.Ne();
      this.g.yb.Ne();
      this.g.zc.load(this.g.file);
      this.g.zc.Tb(this.g.P, this.g.yb);
      this.g.ya & p.Th && (this.g.yb.no(), this.g.yg.no(), 0 == this.g.Kd && this.g.P.no());
      this.g.P.load(this.g.file);
      this.g.yb.load(this.g.file);
      this.Mm.vG(this.g.yg);
      this.g.yg.load();
      this.g.zc.OI();
      for (b = 0; b < this.cd.sf; b++) a = this.cd.list[b], a.hq >= s.ie && this.g.zc.fJ(a.of)
    },
    LH: function() {
      this.Ec = this.g.file.m();
      this.ab = Array(this.Ec);
      var a;
      for (a = 0; a < this.Ec; a++) this.ab[a] = new W(this.g), this.ab[a].load(this.g.file)
    },
    KH: function() {
      var a;
      for (a = 0; a < this.Ec; a++) this.ab[a].KO = this.g.file.m(), this.ab[a].LO = this.g.file.m(), this.g.file.W(12)
    },
    Au: function() {
      this.Xc = this.g.file.m();
      this.hc = this.g.file.m();
      this.Sz = this.g.file.Xb();
      this.Gb = this.g.file.m()
    }
  };
  ba.fd = 32;
  ba.prototype = {
    yF: function(a) {
      this.Cj == m && (this.Cj = new S);
      this.Cj.add(a)
    },
    hG: function() {
      if (this.Cj != m && 0 < this.Cj.size() && !this.Gt) {
        var a = this.Cj.get(0);
        this.Cj.FB(0);
        this.Gt = j;
        var b = this;
        b.aa.decodeAudioData(a.response, function(c) {
          a.buffer = c;
          a.response = m;
          b.g.li(a);
          b.Gt = G
        })
      }
    },
    reset: function() {
      var a;
      for (a = 0; a < ba.fd; a++) this.xm[a] = G
    },
    play: function(a, b, c, d) {
      if (this.Ux != G) {
        var e = this.g.yg.UG(a);
        if (e != m) {
          this.ht == G && (c = 0);
          if (0 > c) {
            for (a = 0; a < ba.fd && !(this.jb[a] == m && this.xm[a] == G); a++);
            if (a == ba.fd)
              for (a = 0; a < ba.fd && !(this.xm[a] ==
                  G && this.jb[a] != m && this.jb[a].zm == G); a++);
            c = a;
            0 <= c && c < ba.fd && (this.Qr[c] = this.cA)
          }
          if (!(0 > c || c >= ba.fd)) {
            if (this.jb[c] != m) {
              if (this.jb[c].zm == j) return;
              this.jb[c] != e && (this.jb[c].stop(), this.jb[c] = m)
            }
            for (a = 0; a < ba.fd; a++) this.jb[a] == e && (this.jb[a].stop(), this.jb[a] = m);
            this.jb[c] = e;
            e.play(b, d, this.Qr[c])
          }
        }
      }
    },
    eJ: db("ht"),
    rH: function() {
      var a;
      for (a = 0; a < ba.fd; a++) this.jb[a] != m && this.jb[a].nH() && this.g.yg.Xi(this.jb[a].handle)
    },
    sw: function() {
      var a;
      for (a = 0; a < ba.fd; a++) this.jb[a] != m && (this.jb[a].stop(), this.jb[a] =
        m)
    },
    pause: function() {
      var a;
      for (a = 0; a < ba.fd; a++) this.jb[a] != m && this.jb[a].pause()
    },
    xe: function() {
      var a;
      for (a = 0; a < ba.fd; a++) this.jb[a] != m && this.jb[a].xe()
    },
    OF: function() {
      var a;
      for (a = 0; a < ba.fd; a++) this.jb[a] != m && this.jb[a].NF() && (this.jb[a] = m)
    }
  };
  dc.prototype = {
    Dh: function() {
      this.path = this.g.file.Ya(this.g.file.k());
      var a = this.path.lastIndexOf("\\");
      0 <= a && (this.path = this.path.substring(a + 1));
      this.length = this.g.file.m();
      this.Iq = this.g.file.U;
      this.g.file.W(this.length)
    },
    open: function() {
      return this.g.file.Of(this.Iq,
        this.length)
    }
  };
  ec.prototype = {
    load: Z("su"),
    reset: function() {
      this.iv = this.ve = 0;
      this.zp = 25
    },
    step: function() {
      switch (this.ve) {
        case 0:
          -1 != this.g.On && this.aa.kc(0, 0, this.g.ea, this.g.ma, this.g.On);
          this.aa.Ri(this.Xf, this.Ph - this.Xf.width / 2, this.Rh - this.Xf.height / 2, this.Xf.width, this.Xf.height, 0, 0);
          this.ve++;
          break;
        case 1:
          this.Ae = 2 * (this.g.ih / this.g.jh) * Math.PI;
          this.Hm(this.Ae);
          this.g.ih == this.g.jh && this.ve++;
          break;
        case 2:
          0 < this.zp && this.zp--;
          0 == this.zp && this.ve++;
          break;
        case 3:
          this.g.Mt(this) && this.ve++
      }
    },
    qu: function() {
      return 4 == this.ve
    },
    Hm: function(a) {
      var b, c, d, e, g;
      for (b = this.iv; b <= a; b += 0.005) {
        c = this.Ph + Math.cos(b) * (this.Le - this.size);
        d = this.Rh - Math.sin(b) * (this.Le - this.size);
        e = this.Ph + Math.cos(b) * this.Le;
        g = this.Rh - Math.sin(b) * this.Le;
        this.aa.Zc(c, d, e, g, this.color, 1, 0, 0);
        var h;
        for (h = 0; 3 > h; h++) c = this.Ph + Math.cos(b) * (this.Le - this.size - h), d = this.Rh - Math.sin(b) * (this.Le - this.size - h), e = this.Ph + Math.cos(b) * (this.Le - this.size - h - 1), g = this.Rh - Math.sin(b) * (this.Le - this.size - h - 1), this.aa.Zc(c, d, e, g, this.color,
          1, 0, 0), c = this.Ph + Math.cos(b) * (this.Le + h), d = this.Rh - Math.sin(b) * (this.Le + h), e = this.Ph + Math.cos(b) * (this.Le + h + 1), g = this.Rh - Math.sin(b) * (this.Le + h + 1), this.aa.Zc(c, d, e, g, this.color, 1, 0, 0)
      }
      this.iv = a
    }
  };
  fc.prototype = {
    load: $(j),
    reset: function() {
      this.Yq = G;
      this.ve = 0;
      this.alpha = 128;
      this.position = 0
    },
    step: function() {
      if (this.g.ih < this.g.jh) switch (this.ve) {
        case 0:
          0 < this.alpha && (this.alpha -= 2, 0 >= this.alpha && (this.alpha = 0, this.ve++))
      } else switch (this.ve) {
        case 0:
        case 1:
          this.ve = 2;
          break;
        case 2:
          128 > this.alpha && (this.alpha +=
            4);
          128 <= this.alpha && (this.alpha = 128, this.g.xg == m ? this.Yq = j : this.ve++);
          break;
        default:
          this.Yq = this.g.Mt(this);
          return
      }
      this.aa.kc(this.rect.left, this.rect.top, this.width, this.height, this.IF, w.We, this.alpha);
      this.aa.fr(this.rect.left, this.rect.top, this.width, this.height, this.borderColor, 1, w.We, this.alpha);
      this.position = this.g.ih / this.g.jh * (this.width - 2);
      this.aa.kc(this.rect.left + 1, this.rect.top + 1, this.position, this.height - 2, this.JF, w.We, this.alpha)
    },
    qu: function() {
      return this.Yq && this.g.ih == this.g.jh
    }
  };
  gc.prototype = {
    load: function() {
      this.step();
      return !this.t.mh
    },
    reset: function() {
      this.t.z.az();
      this.t.z.tu();
      this.t.z.Ur(G);
      this.t.z.Fl(-1, G);
      this.t.z.l.Nr();
      this.t.z.Wt();
      this.t.z.Xt();
      this.t.z.p.vi = this.t.z.p.Tz = this.t.z.lk = 0;
      this.t.z.p.wi = this.t.z.p.Uz = this.t.z.mk = 0;
      this.t.LB();
      this.t.z.bt();
      this.t.z.nu();
      this.t.z.Fl(-1, G);
      this.t.z.Nt();
      this.t.z.vv();
      this.t.z.Ct(G);
      this.t.z.zu();
      this.t.z.l.wv();
      this.t.z.l.rp(this.t.z);
      this.t.z.Pt();
      this.t.z.sp();
      this.t.z.hb = 0;
      this.t.z.Nl = 0;
      this.t.Yi = G;
      this.g.La.push(this.t);
      this.dl = 0
    },
    step: function() {
      this.t.Yi || (this.oJ && (this.t.Yi = this.g.ih == this.g.jh), this.t.qo() == G && (this.t.Yi = j), this.t.Ry(this.aa, this.Lc.x, this.Lc.y, G));
      this.t.Yi && this.g.xg && this.g.Mt(this)
    },
    qu: function() {
      var a = this.t.Yi;
      this.g.xg && (a = G);
      if (a) {
        if (0 < this.dl && (this.dl--, 0 < this.dl)) return G;
        var b;
        for (b = 0; b < this.g.La.length; b++)
          if (this.g.La[b] == this.t) {
            this.g.La.splice(b, 1);
            break
          }
      }
      return a
    }
  };
  u.cc = 0;
  u.wc = 1;
  u.xc = 2;
  u.cx = -1;
  u.Rc = 3;
  u.Zh = 1;
  u.Gf = 2;
  u.Hf = 4;
  u.bx = 8;
  u.RL = 2147483648;
  u.CE = 70;
  u.GD = 60;
  u.ED = 0.5;
  u.prototype = {
    Yz: function() {
      this.Pb == m && (this.Pb = ga.Of(this.g, "joyback.png"), this.cq = ga.Of(this.g, "joyfront.png"), this.kd = ga.Of(this.g, "fire1U.png"), this.Dd = ga.Of(this.g, "fire2U.png"), this.fz = ga.Of(this.g, "fire1D.png"), this.gz = ga.Of(this.g, "fire2D.png"))
    },
    reset: function(a) {
      this.X = a;
      this.Pb != m && 0 != this.Pb.width ? this.aC() : this.jt = j;
      this.Yf = this.Qz ? u.CE * Math.PI / 180 : u.GD * Math.PI / 180
    },
    aC: function() {
      var a, b;
      a = this.g.ea;
      b = this.g.ma;
      0 == (this.X & u.bx) ? (0 != (this.X & u.Zh) && (this.Eb[u.cc] = 16 + this.Pb.width / 2, this.Fb[u.cc] = b -
        16 - this.Pb.height / 2), 0 != (this.X & u.Gf) && 0 != (this.X & u.Hf)) ? (this.Eb[u.wc] = a - this.kd.width / 2 - 32, this.Fb[u.wc] = b - this.kd.height / 2 - 16, this.Eb[u.xc] = a - this.Dd.width / 2 - 16, this.Fb[u.xc] = b - this.Dd.height / 2 - this.kd.height - 24) : 0 != (this.X & u.Gf) ? (this.Eb[u.wc] = a - this.kd.width / 2 - 16, this.Fb[u.wc] = b - this.kd.height / 2 - 16) : 0 != (this.X & u.Hf) && (this.Eb[u.xc] = a - this.Dd.width / 2 - 16, this.Fb[u.xc] = b - this.Dd.height / 2 - 16) : (0 != (this.X & u.Zh) && (this.Eb[u.cc] = a - 16 - this.Pb.width / 2, this.Fb[u.cc] = b - 16 - this.Pb.height / 2), 0 != (this.X & u.Gf) &&
        0 != (this.X & u.Hf)) ? (this.Eb[u.wc] = this.kd.width / 2 + 16 + 2 * this.Dd.width / 3, this.Fb[u.wc] = b - this.kd.height / 2 - 16, this.Eb[u.xc] = this.Dd.width / 2 + 16, this.Fb[u.xc] = b - this.Dd.height / 2 - this.kd.height - 24) : 0 != (this.X & u.Gf) ? (this.Eb[u.wc] = this.kd.width / 2 + 16, this.Fb[u.wc] = b - this.kd.height / 2 - 16) : 0 != (this.X & u.Hf) && (this.Eb[u.xc] = this.Dd.width / 2 + 16, this.Fb[u.xc] = b - this.Dd.height / 2 - 16)
    },
    ac: function(a, b) {
      0 != (a & u.Zh) ? this.Eb[u.cc] = b : 0 != (a & u.Gf) ? this.Eb[u.wc] = b : 0 != (a & u.Hf) && (this.Eb[u.xc] = b)
    },
    bc: function(a, b) {
      0 != (a & u.Zh) ?
        this.Fb[u.cc] = b : 0 != (a & u.Gf) ? this.Fb[u.wc] = b : 0 != (a & u.Hf) && (this.Fb[u.xc] = b)
    },
    kb: function(a) {
      this.jt && (this.jt = G, this.aC());
      var b, c;
      0 != (this.X & u.Zh) && (b = this.Eb[u.cc] - this.Pb.width / 2, c = this.Fb[u.cc] - this.Pb.height / 2, a.we(this.Pb, b, c, 0, 1, 1, 0, 0), b = this.Eb[u.cc] + this.mf - this.cq.width / 2, c = this.Fb[u.cc] + this.nf - this.cq.height / 2, a.we(this.cq, b, c, 0, 1, 1, 0, 0));
      if (0 != (this.X & u.Gf)) {
        var d = 0 == (this.ha & 16) ? this.kd : this.fz;
        b = this.Eb[u.wc] - d.width / 2;
        c = this.Fb[u.wc] - d.height / 2;
        a.we(d, b, c, 0, 1, 1, 0, 0)
      }
      0 != (this.X & u.Hf) &&
        (d = 0 == (this.ha & 32) ? this.Dd : this.gz, b = this.Eb[u.xc] - d.width / 2, c = this.Fb[u.xc] - d.height / 2, a.we(d, b, c, 0, 1, 1, 0, 0))
    },
    sJ: function(a) {
      var b = G,
        c = this.g.Ym(a),
        d = this.g.Zm(a);
      this.Rz = u.ED * Math.ceil(Math.sqrt(this.Pb.width / 2 * this.Pb.width / 2 + this.Pb.height / 2 * this.Pb.height / 2));
      this.Ge = Math.ceil(Math.sqrt(this.Pb.width / 4 * this.Pb.width / 4 + this.Pb.height / 4 * this.Pb.height / 4));
      c = this.getKey(c, d);
      c != u.cx && ((this.touches[c] = a.identifier, c == u.cc && (this.ha &= 240, b = j), c == u.wc) ? (this.ha |= 16, b = j) : c == u.xc && (this.ha |= 32, b = j));
      return b
    },
    yC: function(a) {
      var b = this.g.Ym(a),
        c = this.g.Zm(a);
      if (this.getKey(b, c) == u.cc && a.identifier == this.touches[u.cc]) {
        this.mf = b - this.Eb[u.cc];
        this.nf = c - this.Fb[u.cc];
        a = (2 * Math.PI - Math.atan2(this.nf, this.mf)) % (2 * Math.PI);
        this.ha &= 240;
        b = Math.sqrt(this.mf * this.mf + this.nf * this.nf);
        if (this.Qz) this.mf = Math.cos(a) * this.Ge, this.nf = Math.sin(a) * -this.Ge;
        else if (this.mf < -this.Ge && (this.mf = -this.Ge), this.mf > this.Ge && (this.mf = this.Ge), this.nf < -this.Ge && (this.nf = -this.Ge), this.nf > this.Ge) this.nf = this.Ge;
        if (b >
          this.Rz && b < 3 * this.Ge) {
          b = 0;
          if (0 <= a)
            for (;;) {
              if (this.kh(a, 0, this.Yf) || this.kh(a, 2 * Math.PI, this.Yf)) {
                b = 8;
                break
              }
              if (this.kh(a, Math.PI / 2, this.Yf)) {
                b = 1;
                break
              }
              if (this.kh(a, Math.PI, this.Yf)) {
                b = 4;
                break
              }
              if (this.kh(a, 6 * (Math.PI / 4), this.Yf)) {
                b = 2;
                break
              }
              if (this.kh(a, Math.PI / 4, Math.PI / 2 - this.Yf)) {
                b = 9;
                break
              }
              if (this.kh(a, 3 * (Math.PI / 4), Math.PI / 2 - this.Yf)) {
                b = 5;
                break
              }
              if (this.kh(a, 5 * (Math.PI / 4), Math.PI / 2 - this.Yf)) {
                b = 6;
                break
              }
              if (this.kh(a, 7 * (Math.PI / 4), Math.PI / 2 - this.Yf)) {
                b = 10;
                break
              }
              break
            }
          this.ha |= b
        }
      }
    },
    kh: function(a, b, c) {
      return a >
        b - c / 2 && a < b + c / 2
    },
    vC: function(a) {
      var b;
      for (b = 0; b < u.Rc; b++)
        if (this.touches[b] == a.identifier) {
          this.touches[b] = 0;
          switch (b) {
            case u.cc:
              this.nf = this.mf = 0;
              this.ha &= 240;
              break;
            case u.wc:
              this.ha &= -17;
              break;
            case u.xc:
              this.ha &= -33
          }
          break
        }
    },
    getKey: function(a, b) {
      return 0 != (this.X & u.Zh) && a >= this.Eb[u.cc] - this.Pb.width / 2 && a < this.Eb[u.cc] + this.Pb.width / 2 && b > this.Fb[u.cc] - this.Pb.height / 2 && b < this.Fb[u.cc] + this.Pb.height / 2 ? u.cc : 0 != (this.X & u.Gf) && a >= this.Eb[u.wc] - this.kd.width / 2 && a < this.Eb[u.wc] + this.kd.width / 2 && b > this.Fb[u.wc] -
        this.kd.height / 2 && b < this.Fb[u.wc] + this.kd.height / 2 ? u.wc : 0 != (this.X & u.Hf) && a >= this.Eb[u.xc] - this.Dd.width / 2 && a < this.Eb[u.xc] + this.Dd.width / 2 && b > this.Fb[u.xc] - this.Dd.height / 2 && b < this.Fb[u.xc] + this.Dd.height / 2 ? u.xc : u.cx
    },
    Rp: Z("ha")
  };
  k.xL = 2;
  k.gE = 4;
  k.im = 16;
  k.hE = 32;
  k.jE = 64;
  k.iE = 128;
  k.qs = 512;
  k.RK = 2;
  k.TK = 4;
  k.VK = 8;
  k.SK = 16;
  k.QK = 32;
  k.WK = 64;
  k.UK = 128;
  k.XK = 256;
  k.Zw = 480;
  k.$w = 300;
  k.fm = 64;
  k.gm = 16;
  k.ZN = 1;
  k.aO = 2;
  k.$N = 4;
  k.oF = 1;
  k.oN = 2;
  k.nN = 4;
  k.pN = 8;
  k.xx = 0;
  k.bp = 1;
  k.je = 2;
  k.Ns = 3;
  k.$E = 4;
  k.qD = 1;
  k.em = 2;
  k.as = 4;
  k.Qw = 8;
  k.Oo =
    10;
  k.No = 1;
  k.ws = 2;
  k.Mo = 3;
  k.ex = 4;
  k.XL = 5;
  k.YL = 6;
  k.VL = 7;
  k.ZL = 8;
  k.WL = 9;
  k.vs = -2;
  k.KE = 100;
  k.fx = 101;
  k.Fg = 1;
  k.Gg = 2;
  k.Hg = 4;
  k.Eg = 8;
  k.$C = 15;
  k.ys = 128;
  k.Xe = 2147483647;
  k.ms = 1110591041;
  k.Us = 1110594637;
  k.lF = 1110600435;
  k.xs = 1110874198;
  k.pF = 1110634490;
  k.cm = 1110590791;
  k.nI = [0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255, 255];
  k.Hx = [0, k.Fg, k.Gg, 0, k.Hg, k.Hg + k.Fg, k.Hg + k.Gg, 0, k.Eg, k.Eg + k.Fg, k.Eg + k.Gg, 0, 0, 0, 0, 0];
  k.Tx = G;
  k.zt = function(a, b, c) {
    switch (c) {
      case 0:
        return a == b;
      case 1:
        return a != b;
      case 2:
        return a <= b;
      case 3:
        return a <
          b;
      case 4:
        return a >= b;
      case 5:
        return a > b
    }
    return G
  };
  k.uO = function(a, b, c) {
    switch (c) {
      case 0:
        return a == b;
      case 1:
        return a != b;
      case 2:
        return a <= b;
      case 3:
        return a < b;
      case 4:
        return a >= b;
      case 5:
        return a > b
    }
    return G
  };
  k.eP = function(a) {
    var b = m,
      b = a.qa >= s.If ? a.Ra.zz() : a.Sf();
    b == m && (b = new La);
    return b
  };
  k.UP = function(a, b, c) {
    a.qa >= s.If ? a.Ra.bC(b, c) : a.Bf(b, c)
  };
  k.gP = function(a) {
    return a.qa >= s.If ? a.Ra.du() : a.Pp()
  };
  k.VP = function(a, b) {
    a.qa >= s.If ? a.Ra.nw(b) : a.Br(b)
  };
  k.ZH = function(a) {
    a.u != m && (a.u.Yu(), a.u.L |= w.Vg, a.u.vr = 0)
  };
  k.yP = function(a) {
    a.u != m && (a.u.Fq(), a.u.L &= ~w.Vg, a.u.vr = 0)
  };
  k.ac = function(a, b) {
    a.q != m ? a.q.Z.ac(b) : a.o != b && (a.o = b, a.b != m && (a.b.D = j, a.b.Ca = j))
  };
  k.bc = function(a, b) {
    a.q != m ? a.q.Z.bc(b) : a.n != b && (a.n = b, a.b != m && (a.b.D = j, a.b.Ca = j))
  };
  k.nP = function(a, b) {
    if (0 == a) return 0 <= b ? 24 : 8;
    if (0 == b) return 0 <= a ? 0 : 16;
    var c, d = G,
      e = G;
    0 > a && (d = j, a = -a);
    0 > b && (e = j, b = -b);
    c = 256 * a / b;
    var g;
    for (g = 0; !(c >= I.Hk[g]); g += 2);
    c = I.Hk[g + 1];
    e && (c = -c + 32 & 31);
    d && (c = (-(c - 8 & 31) & 31) + 8 & 31);
    return c
  };
  k.prototype = {
    bJ: db("p"),
    bt: function() {
      this.w = Array(this.p.bg);
      this.l = this.p.Mm;
      this.de = 0;
      var a;
      for (a = this.f.zc.rz(); a != m; a = this.f.zc.wz()) a.ue >= s.ie && this.de++;
      this.Wv = -1 == this.p.sq ? this.f.Qd & 65535 : this.p.sq;
      this.qk = Array(Math.round(this.p.bg / 32 + 1));
      this.ok = new S;
      this.qg = this.p.bg;
      this.fw = this.l.TA;
      this.p.vi = 0;
      this.p.wi = 0;
      this.V = this.p.vi;
      this.Y = this.p.wi;
      this.sr = this.rr = 0;
      this.be = this.p.eq.right; - 1 == this.be && (this.be = 2147479552);
      this.ce = this.p.eq.bottom; - 1 == this.ce && (this.ce = 2147479552);
      this.gw = this.hb = this.Za = 0;
      this.tc &= k.iE;
      this.tc |= k.gE;
      this.Kl = 0;
      this.nr =
        Array(k.Oo);
      this.pk = m;
      this.tc |= k.jE;
      this.Hc = Array(k.ys);
      this.Ll = Array(k.ys);
      this.or = new ya;
      this.or.code = 0;
      this.ir = Array(4);
      this.Vv = Array(4);
      this.hr = Array(4);
      this.Ic = Array(4);
      for (a = this.lc = 0; a < k.Oo; a++) this.nr[a] = 50;
      this.nt = this.Zq = G;
      this.p.TB = j
    },
    Xt: function() {
      this.p.TB = G;
      this.pk = this.ok = this.qk = this.I = this.w = m;
      var a;
      for (a = 0; a < k.ys; a++) this.Hc[a] = 0;
      this.or = m
    },
    gH: function(a) {
      this.bt();
      this.f.lh = 0;
      if (this.f.rb == m && this.f.bj)
        if (this.p.ha == z.zE) this.f.ha == m && (this.f.ha = new u(this.f), this.f.ha.Yz()), this.f.ha.reset(0),
          this.f.rC();
        else if (this.p.ha != z.AE) {
        var b = 0;
        0 != (this.p.en & z.uE) && (b = u.Gf);
        0 != (this.p.en & z.vE) && (b |= u.Hf);
        0 != (this.p.en & z.wE) && (b |= u.bx);
        this.p.ha == z.BE && (b |= u.Zh);
        0 != (b & (u.Gf | u.Hf | u.Zh)) && (this.f.rC(b), this.f.ha.reset(b));
        this.p.ha == z.yE && this.f.jJ()
      }
      this.dw = 255;
      a && (this.tc |= k.im);
      this.nu();
      this.Fl(-1, G);
      this.vv();
      this.Kb = 0;
      this.Ct(a);
      this.Nt();
      this.cH();
      this.zu();
      this.l.wv();
      this.l.rp(this);
      this.mC();
      this.sp();
      this.Nl = 0;
      this.Pt();
      this.nt = G
    },
    Kt: function() {
      if (0 < this.Af) this.Zq && (this.f.Nj == j && (0 <=
        this.pr ? this.f.Cc[this.pr] && (this.xe(), this.hb = 0, this.l.re(-458755)) : this.f.Nj && (this.xe(), this.hb = 0, this.l.re(-458755))), this.f.Nj = G), this.Xq != m && this.Xq.ZG(), a = this.hb;
      else {
        this.f.ft |= p.Hw;
        var a = this.CG();
        this.f.ft &= ~p.Hw;
        0 != (this.tc & k.im) && (this.bz = (new Date).getTime() - this.Ol, this.Ur(j), this.l.Nr())
      }
      if (a == k.No || a == k.ws || a == k.Mo) {
        this.f.Df = document.createElement("canvas");
        this.f.Df.width = this.f.ea;
        this.f.Df.height = this.f.ma;
        var b = new Ea(this.f.Df);
        this.f.frame.dq ? b.wt(0, 0, this.ea, this.ma) : b.kc(0,
          0, this.ea, this.ma, this.Rf);
        b.kc(0, 0, this.f.ea, this.f.ma, this.f.Rf);
        this.f.Zd.kb(b, 0, 0)
      }
      if (0 != a) switch (a) {
        case 5:
          this.pause();
          this.f.Nj = G;
          this.Zq = j;
          a = 0;
          break;
        case 101:
          if (this.p.NO) break;
          this.az();
          this.tu();
          this.Ur(G);
          this.Fl(-1, G);
          this.l.Nr();
          this.Wt();
          this.Xt();
          this.p.vi = this.p.Tz = this.lk = 0;
          this.p.wi = this.p.Uz = this.mk = 0;
          this.f.LB();
          this.bt();
          this.nu();
          this.Fl(-1, G);
          this.Nt();
          this.vv();
          this.Ct(G);
          this.zu();
          this.l.wv();
          this.l.rp(this);
          this.Pt();
          this.mC();
          this.sp();
          this.Nl = a = 0;
          break;
        case 100:
        case -2:
          this.l.re(-196611)
      }
      return this.hb =
        a
    },
    tH: function(a) {
      var b;
      100 < this.hb && (this.hb = k.vs);
      b = this.Nl;
      this.TI();
      this.tu();
      this.Ur(a);
      this.l.Nr();
      this.Xt();
      this.Wt();
      this.Fl(-1, j);
      this.f.tG();
      return q.ME(this.hb, b)
    },
    nu: function() {
      var a;
      for (a = 0; a < this.qg; a++) this.w[a] = m
    },
    vv: function() {
      var a, b;
      this.tc |= k.hE;
      this.tc |= k.qs;
      var c = this.Wn = 0;
      this.I = Array(this.de);
      this.rk = 0;
      for (a = this.f.zc.rz(); a != m; a = this.f.zc.wz())
        if (b = a.ue, b >= s.ie) {
          this.I[c] = new O;
          this.I[c].WF(a);
          this.I[c].Kn = -1;
          if (b == s.Sg || b == s.vx)
            for (b = this.p.cd.Np(); b != m; b = this.p.cd.zn())
              if (b.of ==
                this.I[c].Gc) {
                this.I[c].Kn = b.xi;
                break
              }
          c++;
          a = a.Wb;
          if (0 != (a.fg & A.Tg) && a.eg != m)
            for (b = 0; b < a.eg.xn; b++) {
              var d = a.eg.od[b];
              d.Uu == R.SE && (this.rk |= 1 << d.ql - 1)
            }
        }
      for (c = 0; c < this.p.Ec; c++) this.p.ab[c].Wu = 1;
      return 0
    },
    wy: function() {
      var a, b, c, d, e;
      this.tc &= ~k.im;
      c = 0;
      for (e = this.p.cd.Np(); e != m; c++, e = this.p.cd.zn())
        if (a = this.f.zc.Jj(e.of), b = a.Wb, a = a.ue, !(a < s.If) && 0 == (b.fg & A.zx) && (d = k.Qw, e.wu == Ba.Bx)) {
          if (0 == (b.Uj & A.cp)) {
            if (a != s.Sg) continue;
            d |= k.em
          }
          0 == (b.fg & A.yx) && this.Ot(e.xi, e.of, 2147483648, 2147483648, -1, d, -1, -1)
        }
      this.l.rp(this);
      this.Ol = (new Date).getTime() - this.bz
    },
    Ct: function(a) {
      var b, c, d, e, g;
      d = 0;
      for (g = this.p.cd.Np(); g != m; d++, g = this.p.cd.zn())
        if (b = this.f.zc.Jj(g.of), c = b.Wb, b = b.ue, e = k.Qw, g.wu == Ba.Bx) {
          b == s.Sg && (e |= k.as);
          if (0 == (c.Uj & A.cp)) {
            if (b == s.vx) continue;
            e |= k.em
          }(!a || !(b >= s.If && 0 == (c.fg & A.zx))) && 0 == (c.fg & A.yx) && this.Ot(g.xi, g.of, 2147483648, 2147483648, -1, e, -1, -1)
        }
      this.tc &= ~k.qs
    },
    tu: function() {
      var a;
      for (a = 0; a < this.qg && 0 != this.Za; a++)
        if (this.w[a] != m) {
          var b = this.w[a];
          (32 > b.qa || b.G.Mc != k.cm) && this.Mp(a, j)
        }
      for (a = 0; a < this.qg &&
        0 != this.Za; a++) this.w[a] != m && (b = this.w[a], 32 <= b.qa && b.G.Mc == k.cm && this.Mp(a, j))
    },
    Ur: function(a) {
      a || (0 == (this.f.Wm & p.mE) ? this.f.ad.sw() : this.f.ad.rH())
    },
    Fl: function(a, b) {
      var c, d;
      d = -1 == a ? this.p.Ec : a + 1;
      for (c = 0; c < d; c++) {
        var e = this.p.ab[c];
        e.reset();
        e.jG();
        b && e.Iy()
      }
    },
    sp: function() {
      0 != this.rk && this.YB(-1)
    },
    Wt: function() {
      0 != this.rk && this.YB(0)
    },
    YB: function(a) {
      0 <= a ? this.f.ow(1) : this.f.ow(-1)
    },
    mC: function() {
      this.f.ow(1)
    },
    $s: function(a) {
      var b, c;
      for (c = 0; c < this.ok.size() && !(b = this.ok.get(c), q.pb(b.name, a)); c++);
      c == this.ok.size() && (b = new Ab, this.ok.add(b), c = this.ok.size() - 1, b.name = a, b.X = 0);
      return c
    },
    TI: function() {
      var a, b, c, d, e, g;
      for (c = 0; c < this.I.length; c++)
        if (b = this.I[c], g = b.Wa, 32767 != b.Gc && 0 == (g & 2147483648) && (d = this.f.zc.Jj(b.Gc), 0 != (d.yh & s.Ax) && (a = this.w[g], !(b.td != s.Sg && b.td != s.pm && a.nb == m)))) {
          e = b.xl + b.td.toString();
          this.f.di == m && (this.f.di = new S);
          var h = G;
          d = m;
          for (a = 0; a < this.f.di.size(); a++)
            if (d = this.f.di.get(a), e == d.name) {
              h = j;
              break
            }
          h == G ? (d = new Dd, d.name = e, d.uf = new S, this.f.di.add(d)) : d.uf.clear();
          for (;;) {
            a =
              this.w[g];
            if (b.td == s.Sg) g = new Fd, g.text = a.Ql, g.$a = a.$a, d.uf.add(g);
            else if (b.td == s.pm) g = new Ed, g.value = a.ga, g.$a = a.$a, g.vc = a.vc, g.yr = a.yr, g.xr = a.xr, d.uf.add(g);
            else {
              e = new Gd;
              e.X = a.nb.jw;
              e.Oh = Array(a.nb.$c.length);
              for (g = 0; g < a.nb.$c.length; g++) e.Oh[g] = a.nb.$c[g];
              e.Lb = Array(a.nb.fe.length);
              for (g = 0; g < a.nb.fe.length; g++) e.Lb[g] = a.nb.fe[g];
              d.uf.add(e)
            }
            g = a.Nb;
            if (0 != (g & 2147483648)) break
          }
        }
    },
    zu: function() {
      var a, b, c, d, e, g;
      if (this.f.di != m)
        for (c = 0; c < this.I.length; c++)
          if (b = this.I[c], a = b.Wa, 32767 != b.Gc && 0 <= a && (e =
              this.f.zc.Jj(b.Gc), 0 != (e.yh & s.Ax))) {
            g = b.xl + b.td.toString();
            for (d = 0; d < this.f.di.size(); d++)
              if (e = this.f.di.get(d), g == e.name) {
                for (d = 0;;) {
                  a = this.w[a];
                  if (b.td == s.Sg) g = e.uf.get(d), a.Ql = g.text, a.$a = g.$a, a.b.D = j, a.kO = j;
                  else if (b.td == s.pm) g = e.uf.get(d), a.ga = g.value, a.$a = g.$a, a.vc = g.vc, a.yr = g.yr, a.xr = g.xr, a.iO = j, a.b.D = j;
                  else {
                    g = e.uf.get(d);
                    a.nb.jw = g.X;
                    a.nb.Iz(g.Oh.length);
                    a.nb.XG(g.Lb.length);
                    var h;
                    for (h = 0; h < g.Oh.length; h++) a.nb.$c[h] = g.Oh[h];
                    for (h = 0; h < g.Lb.length; h++) a.nb.fe[h] = g.Lb[h]
                  }
                  a = a.Nb;
                  if (0 != (a & 2147483648)) break;
                  d++;
                  if (d >= e.uf.size()) break
                }
                break
              }
          }
    },
    Ot: function(a, b, c, d, e, g, h, n) {
      for (;;) {
        var r = new hc,
          p = m; - 1 != a && (p = this.p.cd.QG(a));
        var q = this.f.zc.Jj(b),
          s = q.Wb;
        0 == (s.Uj & A.cp) && (g |= k.em);
        if (this.Za >= this.qg) break;
        var l = m,
          u = new E;
        switch (q.ue) {
          case 2:
            l = new vc;
            break;
          case 3:
            l = new zc;
            break;
          case 4:
            l = new Ac;
            break;
          case 5:
            l = new xc;
            break;
          case 6:
            l = new yc;
            break;
          case 7:
            l = new da;
            break;
          case 8:
            break;
          case 9:
            l = new L;
            break;
          default:
            l = new Bc(q.ue, this), l.Ra == m && (l = m)
        }
        if (l == m) break;
        l.prototype = u;
        l.CH = p;
        if (0 > n)
          for (n = 0; n < this.qg && this.w[n] !=
            m; n++);
        if (n >= this.qg) break;
        this.w[n] = l;
        this.Za++;
        l.oP = s.Mc;
        l.Ba = s.fg;
        n > this.QB && this.$v++;
        l.Ob = n;
        this.Wn++;
        0 == this.Wn && (this.Wn = 1);
        l.cn = this.Wn;
        l.Db = b;
        l.Lj = a;
        l.qa = q.ue;
        this.aI(l);
        l.c = this;
        l.bn = j;
        l.G = s;
        a = c;
        2147483648 == a && (a = p.xu);
        r.sO = a;
        l.o = a;
        2147483648 == d && (d = p.yu);
        r.tO = d;
        l.n = d;
        p != m && -1 == h && (h = p.Xz);
        r.ny = h;
        l.Fd = h;
        h = this.p.ab[h];
        h.Wu++;
        r.oy = h.Wu;
        r.Bm = g;
        r.my = e;
        r.rO = p;
        l.b = m;
        0 != (l.Ba & (A.oj | A.Tg | A.pj)) && (l.b = new wc, l.b.N());
        l.q = m;
        0 != (l.Ba & A.Tg) && (l.q = new Ga, 0 == (r.Bm & k.qD) && l.q.N(0, l, s, r, -1));
        l.ja = m;
        0 !=
          (l.Ba & A.oj) && (l.ja = new Ha, l.ja.N(l));
        l.u = m;
        0 != (l.Ba & A.pj) && (l.u = new w, l.u.dH(l, s, r));
        l.nb = m;
        0 != (l.Ba & A.gF) && (l.nb = new Fa, l.nb.N(l, s, r));
        l.N(s, r);
        0 != (l.Ba & A.pj) && l.u.mu(j);
        1 <= this.Kb && l.Zg();
        return n
      }
      return -1
    },
    Mp: function(a, b) {
      var c = this.w[a];
      c != m && (b == j && 0 == c.cn || (this.uH(c), c.q != m && c.q.qb(b), c.nb != m && c.nb.qb(b), c.u != m && c.u.qb(b), c.b != m && c.b.qb(b), c.qb(b), this.$H(c)), this.w[a] = m, this.Za--)
    },
    bh: function(a) {
      this.qk[Math.floor(a / 32)] |= 1 << (a & 31);
      this.eo++
    },
    kG: function() {
      if (0 != this.eo)
        for (var a = 0, b, c; a <
          this.qg;) {
          b = this.qk[a / 32];
          if (0 != b) {
            for (c = 0; 0 != b && 32 > c; c++) {
              if (0 != (b & 1)) {
                var d = this.w[a + c];
                d != m && 1 == d.Ub.Ah && this.l.Wc(d, d.qa | -2162688);
                this.Mp(a + c, G);
                this.eo--
              }
              b >>= 1
            }
            this.qk[a / 32] = 0;
            if (0 == this.eo) break
          }
          a += 32
        }
    },
    uH: function(a) {
      var b = 0,
        c, d;
      for (c = 0; c < this.Za; c++) {
        for (; this.w[b] == m;) b++;
        d = this.w[b];
        b++;
        d.q != m && d.b.vd == R.QE && (d = d.q.Z, d.Lk == a && d.So == j && d.oC())
      }
    },
    Zg: function() {
      var a, b, c;
      for (c = a = 0; a < this.Za; a++) {
        for (; this.w[c] == m;) c++;
        c++
      }
      for (c = a = 0; a < this.Za; a++) {
        for (; this.w[c] == m;) c++;
        b = this.w[c];
        c++;
        b.Zg()
      }
    },
    aI: function(a) {
      var b = a.Db,
        c;
      for (c = 0; c < this.de && this.I[c].Gc != b; c++);
      b = this.I[c];
      0 != (b.Wa & 2147483648) ? (b.Wa = a.Ob, a.Wf = c | 2147483648, a.Nb = 2147483648) : (c = this.w[b.Wa], a.Wf = c.Wf, c.Wf = a.Ob, a.Nb = c.Ob, b.Wa = a.Ob);
      a.ku = b.gv;
      a.Ub = b;
      a.hh = b.rd; - 1 == a.Lj ? a.Lj = b.Kn : -1 == b.Kn && (b.Kn = a.Lj);
      b.Ah += 1
    },
    $H: function(a) {
      var b = a.Ub;
      b.Ah -= 1;
      var c;
      if (0 == (a.Wf & 2147483648))
        if (c = this.w[a.Wf], 0 == (a.Nb & 2147483648)) {
          if (b = this.w[a.Nb], c != m && (c.Nb = a.Nb), b != m) b.Wf = a.Wf
        } else c != m && (c.Nb = 2147483648);
      else 0 == (a.Nb & 2147483648) ? (c = this.w[a.Nb],
        c != m && (c.Wf = a.Wf, b.Wa = c.Ob)) : b.Wa = 2147483648
    },
    DD: function() {
      var a = this.ax();
      if (a != m) {
        var b = 0,
          c;
        for (c = 0; c < this.Za; b++, c++) {
          for (; this.w[b] == m;) b++;
          var d = this.w[b];
          32 <= d.qa && (d.G.Mc == k.ms || d.G.Mc == k.Us || d.G.Mc == k.lF || d.G.Mc == k.pF || d.G.Mc == k.xs ? d.Ra.xI() : d.G.Mc == k.cm && d.Ra.xI())
        }
        for (c = b = 0; c < this.Za; b++, c++) {
          for (; this.w[b] == m;) b++;
          d = this.w[b];
          if (0 != (d.Ba & A.Tg)) {
            var e = G;
            if (d.b.vd == R.Rk) {
              var g = d.G.eg.od[d.q.hw];
              if (q.pb(g.Dc, "box2d8directions") || q.pb(g.Dc, "box2dspring") || q.pb(g.Dc, "box2dspaceship") || q.pb(g.Dc,
                  "box2dstatic") || q.pb(g.Dc, "box2dracecar") || q.pb(g.Dc, "box2daxial") || q.pb(g.Dc, "box2dplatform") || q.pb(g.Dc, "box2dbouncingball") || q.pb(g.Dc, "box2dbackground")) e = j
            }
            e == G && 2 == d.qa && a.wI(d)
          }
        }
        for (c = b = 0; c < this.Za; b++, c++)
          for (; this.w[b] == m;) b++
      }
    },
    ax: function() {
      if (this.OB == G) {
        this.OB = j;
        this.Jh = m;
        var a = 0,
          b;
        for (b = 0; b < this.Za; a++, b++) {
          for (; this.w[a] == m;) a++;
          var c = this.w[a];
          if (32 <= c.qa && c.G.Mc == k.cm) {
            this.Jh = c.Ra;
            break
          }
        }
      }
      return this.Jh
    },
    Jo: function(a) {
      if (a && 0 == (a.M & E.Ff) && 0 != (a.Ba & A.Tg) && a.b.vd == R.Rk) {
        var b = a.G.eg.od[a.q.hw];
        if (q.pb(b.Dc, "box2d8directions") || q.pb(b.Dc, "box2dspring") || q.pb(b.Dc, "box2dspaceship") || q.pb(b.Dc, "box2dstatic") || q.pb(b.Dc, "box2dracecar") || q.pb(b.Dc, "box2daxial") || q.pb(b.Dc, "box2dplatform") || q.pb(b.Dc, "box2dbouncingball") || q.pb(b.Dc, "box2dbackground")) return a.q.Z.pd
      }
      return m
    },
    BF: function(a) {
      if (a.G.Mc == k.ms || a.G.Mc == k.Us || a.G.Mc == k.xs) {
        var b = 0,
          c;
        for (c = 0; c < this.Za; b++, c++) {
          for (; this.w[b] == m;) b++;
          var d = this.w[b];
          32 <= d.qa && d.G.Mc == k.cm && (a.G.Mc == k.ms ? a.Ra.identifier == d.Ra.identifier && d.Ra.OO.add(a.Ra) :
            a.G.Mc == k.Us ? a.Ra.identifier == d.Ra.identifier && d.Ra.YP.add(a.Ra) : a.G.Mc == k.xs && a.Ra.identifier == d.Ra.identifier && d.Ra.tP.add(a.Ra))
        }
        for (c = b = 0; c < this.Za; b++, c++) {
          for (; this.w[b] == m;) b++;
          d = this.w[b];
          d.qa == s.ie && (d = this.Jo(d)) && a.Ra.FP(d)
        }
      }
    },
    Mb: function(a) {
      return a.q != m && a.q.Z != m ? a.q.Z.Mb() : a.b.Ja
    },
    pause: function(a) {
      if (0 == this.Af) {
        this.Af = 1;
        this.NB = this.f.Qd;
        var b = 0,
          c;
        for (c = 0; c < this.Za; c++) {
          for (; this.w[b] == m;) b++;
          b++
        }
        a || this.f.ad.pause()
      }
    },
    xe: function() {
      if (!this.XH && 0 != this.Af) {
        this.Af = 0;
        this.sp();
        var a =
          0,
          b;
        for (b = 0; b < this.Za; b++) {
          for (; this.w[a] == m;) a++;
          a++
        }
        this.f.ad.xe();
        a = this.f.Qd;
        a -= this.NB;
        this.Ol += a;
        this.pr = 0;
        this.Zq = G
      }
    },
    az: function() {
      this.f.ad.sw()
    },
    wj: function() {
      var a = 0,
        b;
      for (b = 0; b < this.Za; b++) {
        for (; this.w[a] == m;) a++;
        var c = this.w[a];
        a++;
        c.wj()
      }
    },
    Nf: function(a, b, c) {
      a = this.zJ(a, b, c);
      return a != m ? a.top : k.Xe
    },
    zJ: function(a, b, c) {
      var b = b - this.V,
        c = c - this.Y,
        d; - 1 == a ? (d = 0, a = this.p.Ec) : (d = a, a += 1);
      for (; d < a; d++) {
        var e = this.p.ab[d].RG(b, c);
        if (e != m) return e
      }
      return m
    },
    Pt: function() {
      this.Ol = this.f.Qd;
      this.eo =
        this.gw = this.hb = this.Kb = this.Ui = 0;
      var a;
      for (a = 0; a < (this.qg + 31) / 32; a++) this.qk[a] = 0;
      this.Yv = this.p.ln;
      this.Zv = this.p.kn;
      this.$n = -k.Zw;
      this.bo = -k.$w;
      this.Zn = this.be + k.Zw;
      this.ao = this.ce + k.$w;
      this.lk = a = this.V;
      a -= k.fm;
      0 > a && (a = this.$n);
      this.Hl = a;
      this.mk = a = this.Y;
      a -= k.gm;
      0 > a && (a = this.bo);
      this.Jl = a;
      a = this.V;
      a += this.Yv + k.fm;
      a > this.be && (a = this.Zn);
      this.Gl = a;
      a = this.Y;
      a += this.Zv + k.gm;
      a > this.ce && (a = this.ao);
      this.Il = a;
      for (a = this.Af = this.nk = this.Xv = 0; 4 > a; a++) this.Ic[a] = 0, this.ir[a] = 0, this.hr[a] = 255;
      this.jk = 0;
      this.l.qt =
        G;
      this.l.co = G;
      this.pr = 0;
      this.Jh = m;
      this.OB = G;
      this.aw = this.lr = this.kr = this.PB = m;
      for (a = 0; a < k.Oo; a++) this.nr[a] = 20;
      this.Kl = 0
    },
    CG: function() {
      this.f.ad.OF();
      this.nt || (this.DD(), this.nt = j);
      var a = this.f.Qd - this.Ol,
        b = this.Ui;
      this.Ui = a;
      this.ho = a -= b;
      this.Kb += 1;
      this.lc = this.ho * this.p.$z / 1E3;
      this.nr[this.Kl] = a;
      this.Kl++;
      this.Kl >= k.Oo && (this.Kl = 0);
      for (a = 0; 4 > a; a++) this.ir[a] = this.Ic[a];
      this.qH();
      1 == this.f.lh ? this.Ic[0] |= this.f.ha.Rp() & this.dw : 2 == this.f.lh && (this.Ic[0] |= this.f.Rp() & this.dw);
      if (0 != this.rk) {
        this.au();
        this.jk = 0;
        this.f.Cc[p.le] && (this.jk |= 16);
        this.f.Cc[p.uj] && (this.jk |= 32);
        for (a = 0; a < this.fw; a++) 0 != (this.uP & 1) && (b = this.Ic[a] & 207, b |= this.jk, this.Ic[a] = b)
      } else this.au();
      for (a = 0; 4 > a; a++)
        if (b = this.Ic[a] & k.nI[4 * this.fw + a], b &= this.hr[a], this.Ic[a] = b, b ^= this.ir[a], this.Vv[a] = b, 0 != b)
          if (b &= this.Ic[a], 0 != (b & 240)) {
            if (this.l.OP = a, b = this.Vv[a], 0 != (b & 240) && (this.l.sc = b, this.l.re(-196615)), 0 != (b & 15)) this.l.sc = b, this.l.re(-196615)
          } else {
            var c = this.l.Qb[this.l.ze[-s.ux] + 4];
            0 != c && (this.l.sc = b, this.l.ef(c, m))
          }
      if (0 !=
        this.Za) {
        a = this.Za;
        b = 0;
        do {
          for (this.$v = 0; this.w[b] == m;) b++;
          c = this.w[b];
          c.Kz = c.Vp;
          c.Vp = m;
          c.bn && (this.QB = b, c.handle());
          a += this.$v;
          b++;
          a--
        } while (0 != a)
      }
      this.Nc++;
      this.l.UF();
      this.l.bH();
      this.l.SB && 0 == (this.tc & k.im) && this.l.ef(0, m);
      this.l.aH();
      this.kG();
      this.doScroll();
      this.l.gr = -1;
      this.nk++;
      if (0 == this.hb) return this.gw;
      (this.hb == k.No || this.hb == k.ws || this.hb == k.vs || this.hb == k.Mo || this.hb == k.KE || this.hb == k.ex) && this.l.re(-65539);
      return this.hb
    },
    qH: function() {
      var a;
      for (a = 0; 4 > a; a++) this.Ic[a] = 0;
      var b = this.f.IG();
      for (a = 0; 4 > a; a++) {
        var c;
        for (c = 0; c < p.km; c++) this.f.Cc[b[a * p.km + c]] && (this.Ic[a] |= 1 << c)
      }
    },
    au: function() {
      this.Oe = this.f.qf + this.V;
      this.Pe = this.f.rf + this.Y
    },
    tf: function(a) {
      a.q.F = G;
      k.Tx = G;
      a.q.ur = 0;
      var b, c;
      if (0 != (a.hh & O.Rs) && (b = this.Ev(a.b.Lv, a.b.Nv, a.b.Mv, a.b.Ov), 0 != b && (c = this.Ev(a.o - a.ba, a.n - a.ca, a.o - a.ba + a.B, a.n - a.ca + a.A), 0 == c && (b ^= c, 0 != b && (a.q.ur |= Ga.UD, this.l.sc = b, this.l.Wc(a, -720896 | a.qa & 65535)))), b = this.Ev(a.o - a.ba, a.n - a.ca, a.o - a.ba + a.B, a.n - a.ca + a.A), 0 != (b & a.q.iw) && (0 != (b & k.Fg) ? a.q.Z.ac(a.o + this.be) :
          0 != (b & k.Gg) && a.q.Z.ac(a.o - this.be), 0 != (b & k.Hg) ? a.q.Z.bc(a.n + this.ce) : 0 != (b & k.Eg) && a.q.Z.bc(a.n - this.ce)), b = this.ck(a.b.Lv, a.b.Nv, a.b.Mv, a.b.Ov), b != k.$C)) c = this.ck(a.o - a.ba, a.n - a.ca, a.o - a.ba + a.B, a.n - a.ca + a.A), b = ~b & c, 0 != b && (a.q.ur |= Ga.VD, this.l.sc = b, this.l.Wc(a, -786432 | a.qa & 65535));
      0 != (a.hh & O.Qs) && (a.b.vd == R.ox ? a.q.Z.UH() : this.Cm(a, a.b.Da, a.b.Xa, a.b.tb, a.b.ub, a.o, a.n, 0, z.he) && this.l.Wc(a, -851968 | a.qa & 65535));
      if (0 != (a.hh & O.rm) && (b = this.tl(a, a.b.Da, a.b.Xa, a.b.tb, a.b.ub, a.o, a.n, a.Ub.Hi), b != m))
        for (c = 0; c <
          b.size(); c++) {
          var d = b.get(c);
          if (0 == (d.M & E.Ff)) {
            var e = a.qa,
              g = a,
              h = d;
            g.qa > h.qa && (g = d, h = a, e = g.qa);
            this.l.sc = h.Db;
            this.l.MB = h.Ob;
            this.l.Wc(g, -917504 | e & 65535)
          }
        }
      return k.Tx
    },
    tl: function(a, b, c, d, e, g, h, n) {
      var r = m,
        g = g - a.ba,
        k = g + a.B,
        h = h - a.ca,
        p = h + a.A,
        q, l;
      if (0 != (a.M & E.Kg) || 0 != (a.M & E.Ff)) return r;
      var u = G,
        t = m,
        v = -1;
      a.qa == s.ie && 0 == (a.u.L & w.qj) && (u = j);
      a.qa == s.ie && (v = a.u.Pl);
      var A = a.M;
      a.M |= E.Kg;
      var z = 0,
        B, C, D;
      if (n != m)
        for (z = z = 0; z < n.length; z += 2)
          for (var F = this.I[n[z + 1]].Wa; 0 == (F & 2147483648);) {
            if (B = this.w[F], F = B.Nb, 0 == (B.M &
                E.Kg) && 0 == (a.M & E.Ff) && (C = B.o - B.ba, D = B.n - B.ca, C < k && C + B.B > g && D < p && D + B.A > h)) switch (B.qa) {
              case s.ie:
                if ((0 > v || 0 <= v && v == B.u.Pl) && 0 != (B.u.L & w.rj)) {
                  if (u == G || 0 != (B.u.L & w.qj)) {
                    r == m && (r = new S);
                    r.add(B);
                    break
                  }
                  t == m && (l = this.f.P.eb(b), l != m && (t = l.qe(0, c, d, e)));
                  l = this.f.P.eb(B.b.Da);
                  l != m && (q = l.qe(0, B.b.Xa, B.b.tb, B.b.ub));
                  if (t != m && q != m && t.Zi(g, h, 0, q, C, D, 0)) {
                    r == m && (r = new S);
                    r.add(B);
                    break
                  }
                }
                break;
              case s.Sg:
              case s.pm:
              case s.sx:
              case s.wx:
              case s.qx:
                r == m && (r = new S);
                r.add(B);
                break;
              default:
                r == m && (r = new S), r.add(B)
            }
          } else
            for (n =
              0; n < this.Za; n++) {
              for (; this.w[z] == m;) z++;
              B = this.w[z];
              z++;
              if (0 == (B.M & E.Kg) && (C = B.o - B.ba, D = B.n - B.ca, C < k && C + B.B > g && D < p && D + B.A > h)) switch (B.qa) {
                case s.ie:
                  if ((0 > v || 0 <= v && v == B.u.Pl) && 0 != (B.u.L & w.rj)) {
                    if (u == G || 0 != (B.u.L & w.qj)) {
                      r == m && (r = new S);
                      r.add(B);
                      break
                    }
                    t == m && (l = this.f.P.eb(b), l != m && (t = l.qe(0, c, d, e)));
                    l = this.f.P.eb(B.b.Da);
                    l != m && (q = l.qe(0, B.b.Xa, B.b.tb, B.b.ub));
                    if (t != m && q != m && t.Zi(g, h, 0, q, C, D, 0)) {
                      r == m && (r = new S);
                      r.add(B);
                      break
                    }
                  }
                  break;
                case s.Sg:
                case s.pm:
                case s.sx:
                case s.wx:
                case s.qx:
                  r == m && (r = new S);
                  r.add(B);
                  break;
                default:
                  r == m && (r = new S), r.add(B)
              }
            }
      a.M = A;
      return r
    },
    Cm: function(a, b, c, d, e, g, h, n, r) {
      b = this.p.ab[a.Fd];
      switch (a.qa) {
        case s.ie:
          if (0 == (a.u.L & w.qj)) {
            if (a = this.f.P.eb(a.b.Da), a != m) return a = a.qe(F.Jg, c, d, e), b.Zi(a, g - this.V, h - this.Y, n, r) != m
          } else return g = g - a.ba - this.V, h = h - a.ca - this.Y, c = g + a.B, a = h + a.A, n = b.Ir(g, h, c, a, n, r) != m;
          return G;
        default:
          return g = g - a.ba - this.V, h = h - a.ca - this.Y, c = g + a.B, a = h + a.A, n = b.Ir(g, h, c, a, n, r) != m
      }
    },
    ck: function(a, b, c, d) {
      var e = 0;
      0 > a && (e |= k.Fg);
      0 > b && (e |= k.Hg);
      c > this.be && (e |= k.Gg);
      d > this.ce &&
        (e |= k.Eg);
      return k.Hx[e]
    },
    Ev: function(a, b, c, d) {
      var e = 15;
      a < this.be && (e &= ~k.Gg);
      b < this.ce && (e &= ~k.Eg);
      0 < c && (e &= ~k.Fg);
      0 < d && (e &= ~k.Hg);
      return k.Hx[e]
    },
    random: function(a) {
      var b = 31415 * this.Wv + 1;
      this.Wv = b &= 65535;
      return b * a >>> 16
    },
    Ez: function(a) {
      if (0 == a || -1 == a) return this.random(32);
      var b, c = 0,
        d = 0,
        e = a;
      for (b = 0; 32 > b; b++) 0 != (e & 1) && (d++, c = b), e >>>= 1;
      if (1 == d) return c;
      d = this.random(d);
      e = a;
      for (b = 0; 32 > b; b++) {
        if (0 != (e & 1) && (d--, 0 > d)) return b;
        e >>>= 1
      }
      return 0
    },
    ri: function(a) {
      this.Ml = a.ka;
      this.Qe = 0;
      return this.getExpression()
    },
    lf: function(a) {
      this.Ml = a.ka;
      this.Qe = 0;
      return this.getExpression()
    },
    gu: function(a) {
      this.Ml = a.ka;
      this.Qe = 0;
      return this.getExpression()
    },
    Fz: function() {
      var a = this.getExpression();
      return 0 > a ? Math.ceil(a) : Math.floor(a)
    },
    getExpression: function() {
      var a, b = this.gb;
      this.Ll[this.gb] = this.or;
      do {
        this.gb++;
        this.Ml[this.Qe].evaluate(this);
        this.Qe++;
        do
          if (a = this.Ml[this.Qe], 0 < a.code && 1310720 > a.code) a.code > this.Ll[this.gb - 1].code ? (this.Ll[this.gb] = a, this.Qe++, this.gb++, this.Ml[this.Qe].evaluate(this), this.Qe++) : (this.gb--,
            this.Ll[this.gb].evaluate(this));
          else {
            this.gb--;
            if (this.gb == b) break;
            this.Ll[this.gb].evaluate(this)
          }
        while (1)
      } while (this.gb > b + 1);
      return this.Hc[b + 1]
    },
    SG: function(a, b) {
      var c = this.l.ni(a);
      if (c == m) return b ? j : G;
      var d = this.l.fh,
        e = 0,
        g, h, n, r, k, p, q = new S;
      for (g = 0; g < this.Za; g++) {
        for (; this.w[e] == m;) e++;
        h = this.w[e];
        e++;
        n = h.o - h.ba;
        r = h.n - h.ca;
        k = n + h.B;
        p = r + h.A;
        this.Oe >= n && this.Oe < k && this.Pe >= r && this.Pe < p && 0 == (h.M & E.Ff) && (h.qa == s.ie ? 0 == (h.u.L & w.qj) ? this.f.P.eb(h.b.Da).qe(F.Jg, h.b.Xa, h.b.tb, h.b.ub).zk(n, r, this.Oe, this.Pe) &&
          q.add(h) : q.add(h) : q.add(h))
      }
      if (0 == q.size()) return b ? j : G;
      if (b == G) {
        do {
          for (e = 0; e < q.size() && !(h = q.get(e), h == c); e++);
          e == q.size() && (d--, this.l.Qf());
          c = this.l.oi()
        } while (c != m);
        return 0 != d
      }
      do {
        for (e = 0; e < q.size(); e++)
          if (h = q.get(e), h == c) return G;
        c = this.l.oi()
      } while (c != m);
      return j
    },
    Pz: function(a) {
      var b = G,
        c = 0;
      if (0 != (a.Ba & A.oj)) {
        if (a.u != m && a.u.eH()) return;
        a.ja != m && a.ja.Xg(v.Fk) && (c = 1)
      }
      0 == c && (b = j);
      if (b) a.bn = G, this.bh(a.Ob);
      else if (a.u != m && (a.u.Ar(G), a.M |= E.Kg), a.q != m && (a.q.qb(G), a.q.iH(a, R.RE, G), a.b.Q = 0), 0 != (c &
          1)) a.ja.dt(v.Fk), a.ja.et()
    },
    Nt: function() {
      var a, b = new aa,
        c;
      for (c = 0; c < this.p.Ec; c++) {
        var d = this.p.ab[c],
          e = 0 != (d.ya & W.os),
          g = 0 != (d.ya & W.ps),
          h = d.zq,
          n;
        for (n = 0; n < h; n++) {
          a = this.p.cd.tz(d.Bq + n);
          a.hq < s.ie && (b.left = a.xu, b.top = a.yu);
          var r;
          r = new ha(this.f, b.left, b.top, a, m, 0);
          r.Tc(0, d);
          if (e) {
            if (r = new ha(this.f, this.p.Xc + b.left, b.top, a, m, 0), r.Tc(1, d), b.left + r.width > this.p.Xc && (r = new ha(this.f, b.left - this.p.Xc, b.top, a, m, 0), r.Tc(4, d)), g) r = new ha(this.f, b.left, this.p.hc + b.top, a, m, 0), r.Tc(2, d), r = new ha(this.f, this.p.Xc +
              b.left, this.p.hc + b.top, a, m, 0), r.Tc(3, d), b.top + r.height > this.p.hc && (r = new ha(this.f, b.left, b.top - this.p.hc, a, m, 0), r.Tc(5, d))
          } else g && (r = new ha(this.f, b.left, this.p.hc + b.top, a, m, 0), r.Tc(2, d), b.top + r.height > this.p.hc && (r = new ha(this.f, b.left, b.top - this.p.hc, a, m, 0), r.Tc(5, d)))
        }
      }
    },
    $I: function() {
      var a, b, c = this.lk,
        d = this.mk,
        e, g;
      for (a = 0; a < this.p.Ec; a++) {
        b = this.p.ab[a];
        e = c * b.$l + b.Ip;
        g = d * b.bm + b.Jp;
        var h = 0 != (b.ya & W.ps);
        0 != (b.ya & W.os) && (0 > e && (e = e % this.p.Xc + this.p.Xc), e > this.p.Xc && (e %= this.p.Xc));
        h && (0 > g && (g =
          g % this.p.hc + this.p.hc), g > this.p.hc && (g %= this.p.hc));
        b.x = e;
        b.y = g;
        b.Sb.x = -e + this.f.Qh;
        b.Sb.y = -g + this.f.Sh;
        b.sb.x = -e + this.f.Qh;
        b.sb.y = -g + this.f.Sh;
        b.ta.x = -e + this.f.Qh;
        b.ta.y = -g + this.f.Sh
      }
      this.p.vi = this.lk;
      this.p.wi = this.mk
    },
    cH: function() {
      var a;
      for (a = 0; a < this.p.Ec; a++) {
        var b = this.p.ab[a];
        b.ya & W.Io && b.Up()
      }
    },
    xJ: function(a, b) {
      var c = 0;
      this.rr = a - this.V;
      0 != this.rr && c++;
      this.sr = b - this.Y;
      0 != this.sr && c++;
      var d, e;
      if (0 == c)
        for (e = 0; e < this.p.Ec; e++)
          if (d = this.p.ab[e], 0 != d.Ip || 0 != d.Jp) {
            c++;
            break
          }
      e = this.V;
      var g = this.Y,
        h = this.rr,
        n = this.sr;
      this.V = a;
      this.Hl = a - k.fm;
      0 > this.Hl && (this.Hl = this.$n);
      this.Y = b;
      this.Jl = b - k.gm;
      0 > this.Jl && (this.Jl = this.bo);
      this.Gl = a + this.Yv + k.fm;
      this.Gl > this.be && (this.Gl = this.Zn);
      this.Il = b + this.Zv + k.gm;
      this.Il > this.ce && (this.Il = this.ao);
      var r = 0,
        p;
      for (p = 0; p < this.Za; p++) {
        for (; this.w[r] == m;) r++;
        var q = this.w[r];
        r++;
        if (0 != c)
          if (0 != (q.Ba & A.fF)) {
            d = h;
            var s = n;
            q.q == m ? (q.o += d, q.n += s) : (d += q.o, s += q.n, q.q.Z.ac(d), q.q.Z.bc(s))
          } else if (d = q.Fd, d < this.p.Ec) {
          var l = e,
            s = g,
            u = a,
            t = b;
          d = this.p.ab[d];
          0 != (d.ya & W.cE) && (l *=
            d.$l, u *= d.$l);
          0 != (d.ya & W.dE) && (s *= d.bm, t *= d.bm);
          l = q.o + l - u + h - d.Ip;
          d = q.n + s - t + n - d.Jp;
          0 == (q.Ba & A.Tg) ? (q.o = l, q.n = d) : (q.q.Z.ac(l), q.q.Z.bc(d));
          q.Qm()
        }
      }
    },
    doScroll: function() {
      if (0 != (this.Xv & k.oF)) {
        this.Xv = 0;
        if (this.p.vi != this.lk || this.p.wi != this.mk) this.$I(), this.xJ(this.p.vi, this.p.wi);
        this.lk = this.V;
        this.mk = this.Y
      }
    },
    mp: function(a, b, c, d, e, g) {
      var d = this.p.ab[d],
        h = new ha(this.f, b - this.V + d.x, c - this.V + d.y, m, a, e);
      h.Tc(0, d);
      if (g && (e == Y.bp || e == Y.je) && this.Jh != m) h.body = this.Jh.EP(pHo.o - this.V + d.x, pHo.n - this.Y + d.y,
        pHo.b.Da, e);
      g = 0 != (d.ya & W.ps);
      if (0 != (d.ya & W.os)) {
        if (h = new ha(this.f, this.p.Xc + b - this.V + d.x, c - this.Y + d.y, m, a, e), h.Tc(1, d), b + h.width > this.p.Xc && (h = new ha(this.f, b - this.V + d.x - this.p.Xc, c - this.Y + d.y, m, a, e), h.Tc(4, d)), g) h = new ha(this.f, b - this.V + d.x, this.p.hc + c - this.Y + d.y, m, a, e), h.Tc(2, d), h = new ha(this.f, this.p.Xc + b - this.V + d.x, this.p.hc + c - this.Y + d.y, m, a, e), h.Tc(3, d), c + h.height > this.p.hc && (h = new ha(this.f, b - this.V + d.x, c - this.Y + d.y - this.p.hc, m, a, e), h.Tc(5, d))
      } else g && (h = new ha(this.f, b - this.V + d.x, this.p.hc +
        c - this.Y + d.y, m, a, e), h.Tc(2, d), c + h.height > this.p.hc && (h = new ha(this.f, b - this.V + d.x, c - this.Y + d.y - this.p.hc, m, a, e), h.Tc(5, d)))
    },
    dI: function(a) {
      0 > a ? this.l.re(-720902) : this.l.re(-655366)
    },
    dz: function(a) {
      var b, c;
      if (0 != this.Za)
        for (b = 0; b < this.qg; b++)
          if ((c = this.w[b]) && c.Ub.xl == a) return this.St = c.Ub.Ah - 1, c;
      return m
    },
    ez: function(a) {
      if (a && this.St)
        for (var b = a.Ob + 1, a = a.Ub.xl, c;;) {
          c = this.w[b];
          if (c != m && c.Ub.xl == a) return this.St--, c;
          b++
        }
      this.St = 0;
      return m
    }
  };
  hc.em = 2;
  O.fN = 15;
  O.jF = 16;
  O.rm = 128;
  O.ke = 256;
  O.Qs = 512;
  O.Rs =
    1024;
  O.gN = 2048;
  O.fp = 4096;
  O.iF = 65535;
  O.prototype = {
    WF: function(a) {
      this.Gc = a.In;
      this.td = a.ue;
      var b = a.Wb;
      this.gB = b.Uj;
      this.fB = a.vf;
      this.eB = a.wf;
      this.Lq = b.fg;
      this.qd = 0;
      this.Wa = -1;
      this.rd = O.iF;
      a.cv != m && (this.xl = a.cv);
      this.yl = Array(8);
      for (a = 0; 8 > a; a++) this.yl[a] = b.$u[a]
    }
  };
  ca.PE = 0;
  ca.mM = 1;
  ca.pM = 2;
  ca.nM = 3;
  ca.jM = 4;
  ca.kM = 5;
  ca.lM = 6;
  ca.iM = 7;
  ca.oM = 8;
  ca.qM = 9;
  ca.fM = 0;
  ca.dM = 1;
  ca.hM = 2;
  ca.eM = 3;
  ca.gM = 4;
  ca.WJ = 123456789;
  ca.prototype = {
    xE: function() {
      m_currentAngle = 0
    },
    N: function(a) {
      this.v = a;
      this.T = this.v.c
    },
    qb: X(),
    move: $(G),
    vg: X(),
    ac: X(),
    bc: X(),
    stop: X(),
    Mf: X(),
    reverse: X(),
    start: X(),
    Te: X(),
    ug: X(),
    Re: X(),
    Dr: X(),
    Cr: X(),
    It: function(a) {
      return this.v.q.It(this.v, a, 32)
    },
    wm: function(a) {
      this.v.b.ae = a;
      this.v.ja != m && this.v.ja.Be()
    },
    Rp: function(a) {
      return this.v.c.Ic[a]
    },
    kw: X()
  };
  v.Sd = 0;
  v.oc = 1;
  v.ge = 2;
  v.Ao = 3;
  v.Fk = 4;
  v.UC = 5;
  v.Gw = 6;
  v.Fw = 7;
  v.Ew = 8;
  v.Dw = 9;
  v.Xr = 10;
  v.Bo = 11;
  v.XJ = 12;
  v.qJ = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  v.prototype = {
    load: function(a) {
      var b = a.U,
        c = Array(32),
        d;
      for (d = 0; 32 > d; d++) c[d] = a.k();
      this.yd = Array(32);
      this.Wg = Array(32);
      this.fi =
        Array(32);
      for (d = 0; 32 > d; d++) this.yd[d] = m, this.Wg[d] = 0, this.fi[d] = 0, 0 != c[d] && (this.yd[d] = new ic, a.seek(b + c[d]), this.yd[d].load(a))
    },
    Tb: function(a) {
      var b;
      for (b = 0; 32 > b; b++) this.yd[b] != m && this.yd[b].Tb(a)
    },
    HF: function(a) {
      var b, c, d, e, g;
      for (b = 0; 32 > b; b++)
        if (this.yd[b] == m) {
          c = 0;
          for (e = b + 1; 32 > c; c++, e++)
            if (e &= 31, this.yd[e] != m) {
              this.Wg[b] = e;
              break
            }
          d = 0;
          for (g = b - 1; 32 > d; d++, g--)
            if (g &= 31, this.yd[g] != m) {
              this.fi[b] = g;
              break
            }
          e == g || c < d ? this.Wg[b] |= 64 : d < c && (this.fi[b] |= 64)
        } else 16 > a && 0 == v.qJ[a] && (this.yd[b].Zs = this.yd[b].Ys)
    }
  };
  Na.uC = [v.Ao, v.oc, v.ge, 0, v.ge, v.Sd, 0, 0, v.oc, v.Sd, 0, 0, v.Sd, v.oc, v.ge, 0, v.Sd, 0, 0, 0, v.Sd, v.oc, v.ge, 0, v.Sd, v.oc, v.ge, 0, v.oc, v.ge, v.Sd, 0, v.Sd, v.oc, v.ge, 0, v.oc, v.ge, v.Sd, 0, v.Sd, v.oc, v.ge, 0, v.Sd, v.oc, v.ge, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  Na.prototype = {
    load: function(a) {
      var b = a.U;
      a.W(2);
      this.$e = a.k();
      var c = Array(this.$e),
        d;
      for (d = 0; d < this.$e; d++) c[d] = a.k();
      this.af = Array(this.$e);
      this.ei = Array(this.$e);
      for (d = 0; d < this.$e; d++) this.af[d] = m, this.ei[d] = 0, 0 != c[d] && (this.af[d] = new v, a.seek(b + c[d]), this.af[d].load(a),
        this.ei[d] = 1);
      for (a = 0; a < this.$e; a++)
        if (0 == this.ei[a]) {
          b = G;
          if (12 > a)
            for (d = 0; 4 > d; d++)
              if (0 != this.ei[Na.uC[4 * a + d]]) {
                this.af[a] = this.af[Na.uC[4 * a + d]];
                b = j;
                break
              }
          if (b == G)
            for (d = 0; d < this.$e; d++)
              if (0 != this.ei[d]) {
                this.af[a] = this.af[d];
                break
              }
        } else this.af[a].HF(a)
    },
    Tb: function(a) {
      var b;
      for (b = 0; b < this.$e; b++) 0 != this.ei[b] && this.af[b].Tb(a)
    }
  };
  ic.prototype = {
    load: function(a) {
      this.Zs = a.Ea();
      this.Ys = a.Ea();
      this.Lx = a.k();
      this.Mx = a.k();
      this.tm = a.k();
      this.Wk = Array(this.tm);
      var b;
      for (b = 0; b < this.tm; b++) this.Wk[b] = a.k()
    },
    Tb: function(a) {
      var b;
      for (b = 0; b < this.tm; b++)
        if (a != m) {
          var c = a.eh(this.Wk[b]); - 1 != c && (this.Wk[b] = c)
        }
    }
  };
  Ha.ct = [v.Sd, v.oc, v.ge, v.UC, v.Gw, v.Fw, v.Ew, v.Dw, v.Xr, v.Bo, 12, 13, 14, 15, -1];
  Ha.prototype = {
    N: function(a) {
      this.a = a;
      this.El = 0;
      this.Oz(v.oc);
      if (this.Xg(v.Ao)) this.El = 1, this.dt(v.Ao), this.et(), this.wm();
      else {
        for (a = 0; 0 <= Ha.ct[a] && !this.Xg(Ha.ct[a]); a++);
        0 > Ha.ct[a] && this.Xg(v.Fk) && (this.El = 2, this.dt(v.Fk), this.et(), this.wm())
      }
    },
    Oz: function(a) {
      this.a.b.ae = a;
      this.Iv = G;
      this.Ni = this.Gv = this.Cl = this.ek = this.ar = this.lg =
        0;
      this.Bl = this.Od = m;
      this.br = this.Oi = this.Tn = -1;
      this.Bl = this.Od = m;
      this.wm()
    },
    Be: function() {
      switch (this.El) {
        case 0:
          return this.wm();
        case 1:
          this.EF();
          break;
        case 2:
          this.FF()
      }
      return G
    },
    wm: function() {
      var a = this.a.o;
      this.a.b.Pi = a;
      a -= this.a.ba;
      this.a.b.Lv = a;
      a += this.a.B;
      this.a.b.Mv = a;
      a = this.a.n;
      this.a.b.Qi = a;
      a -= this.a.ca;
      this.a.b.Nv = a;
      a += this.a.A;
      this.a.b.Ov = a;
      this.a.b.dr = this.a.b.Da;
      this.a.b.cr = this.a.b.Xa;
      return this.vm(1)
    },
    vm: function(a) {
      var b = this.a.G,
        c = this.a.b.Q,
        d = this.a.b.ae;
      0 != this.ek && (c = this.ek -
        1);
      if (d == v.oc && (0 == c && (d = v.Sd), 75 <= c)) d = v.ge;
      0 != this.lg && (d = this.lg - 1);
      d != this.Tn && (this.Tn = d, d >= b.Ci.$e && (d = b.Ci.$e - 1), b = b.Ci.af[d], b != this.Od && (this.Od = b, this.$q = -1, this.Ni = 0));
      var e;
      e = this.a.b.Ja;
      b = G;
      0 != this.ar && (e = this.ar - 1);
      if (this.$q != e && (this.$q = e, d = this.Od.yd[e], d == m ? 0 != (this.Od.fi[e] & 64) ? e = this.Od.fi[e] & 63 : 0 != (this.Od.Wg[e] & 64) ? e = this.Od.Wg[e] & 63 : (d = e, 0 > this.br ? e = this.Od.Wg[e] & 63 : (e -= this.br, e = 15 < (e & 31) ? this.Od.Wg[d] & 63 : this.Od.fi[d] & 63)) : this.br = e, d = this.Od.yd[e], this.Od.yd[0] != m && 0 != (this.a.G.Uj &
          A.aF) && (this.a.b.Xa = 360 * this.$q / 32, d = this.Od.yd[0], this.Bl = m, b = j), this.Bl != d)) {
        this.Bl = d;
        this.dk = d.Lx;
        this.AB = d.Mx;
        e = d.Zs;
        var g = d.Ys;
        if (e != this.Oi || g != this.Dl) this.Oi = e, this.Dl = g, this.zB = g - e, this.Al = e, this.Hv = -1;
        this.mg = d.tm;
        0 != this.Cl && this.Cl - 1 >= this.mg && (this.Cl = 0);
        this.Ni >= this.mg && (this.Ni = 0);
        e = d.Wk[this.Ni];
        this.Iv == G && (this.a.b.Da = e, d = this.a.c.f.P.Ij(e, this.a.b.Xa, this.a.b.tb, this.a.b.ub), d != m && (this.a.B = d.width, this.a.A = d.height, this.a.ba = d.Ga, this.a.ca = d.va), this.a.b.D = j, this.a.b.Ca = j);
        if (1 ==
          this.mg) {
          0 == this.Oi && (this.mg = 0);
          e = this.a.b.Da;
          if (0 == e) return G;
          d = this.a.c.f.P.Ij(e, this.a.b.Xa, this.a.b.tb, this.a.b.ub);
          d != m && (this.a.B = d.width, this.a.A = d.height, this.a.ba = d.Ga, this.a.ca = d.va);
          return G
        }
      }
      if (0 == a && 0 == this.Cl || b == G && 0 == this.mg) return G;
      a = this.zB;
      c != this.Hv && (this.Hv = c, 0 == a ? (this.Al = this.Oi, 0 != this.ek && (this.Al = this.ek - 1)) : (d = this.a.b.Oa - this.a.b.Fh, 0 == d ? 0 != this.ek ? (a = a * c / 100 + this.Oi, a > this.Dl && (a = this.Dl)) : a = a / 2 + this.Oi : (a = a * c / d + this.Oi, a > this.Dl && (a = this.Dl)), this.Al = a));
      d = this.Bl;
      e = this.Cl;
      if (0 == e) {
        if (0 == this.Al || this.Iv) return G;
        c = this.Gv;
        e = this.Ni;
        a = this.Al;
        0 != (this.a.c.p.Gb & z.yc) && (a *= this.a.c.lc);
        for (c += a; 100 < c;)
          if (c -= 100, e++, e >= this.mg && (e = this.AB, 0 != this.dk && (this.dk--, 0 == this.dk))) {
            this.Ni = this.mg;
            this.mg = 0;
            0 != this.lg && (this.ek = this.ar = this.lg = 0);
            if (0 != (this.a.c.tc & k.qs)) return G;
            b && (this.a.b.D = j, this.a.b.Ca = j, d = this.a.c.f.P.Ij(this.a.b.Da, this.a.b.Xa, this.a.b.tb, this.a.b.ub), d != m && (this.a.B = d.width, this.a.A = d.height, this.a.ba = d.Ga, this.a.ca = d.va));
            c = -131072;
            c |= this.a.qa &
              65535;
            this.a.c.l.sc = this.a.ja.Tn;
            return this.a.c.l.Wc(this.a, c)
          }
        this.Gv = c
      } else e--;
      this.Ni = e;
      this.a.b.D = j;
      this.a.b.Ca = j;
      c = d.Wk[e];
      if (this.a.b.Da != c || this.BB != this.a.b.Xa) this.a.b.Da = c, this.BB = this.a.b.Xa, 0 <= c && (d = this.a.c.f.P.Ij(c, this.a.b.Xa, this.a.b.tb, this.a.b.ub), d != m && (this.a.B = d.width, this.a.A = d.height, this.a.ba = d.Ga, this.a.ca = d.va));
      return G
    },
    Xg: function(a) {
      return 0 == this.a.G.Ci.ei[a] ? G : j
    },
    et: function() {
      0 == this.dk && (this.dk = 1)
    },
    dt: function(a) {
      this.lg = a + 1;
      this.vm(0)
    },
    GF: function() {
      this.lg = 0;
      this.vm(0)
    },
    EF: function() {
      this.vm(1);
      this.lg != v.Ao + 1 && (this.Xg(v.Sd) || this.Xg(v.oc) || this.Xg(v.ge) ? (this.El = 0, this.GF()) : (this.El = 2, this.a.c.Pz(this.a)))
    },
    FF: function() {
      0 == (this.a.M & E.Yh) && (this.vm(1), this.lg != v.Fk + 1 && this.a.c.bh(this.a.Ob))
    }
  };
  jc.prototype = {
    Jt: function() {
      var a = this.g.Si + "M" + q.Rm(this.handle, "png"),
        b = new Image;
      this.P.Hb[this.handle] = b;
      var c = this;
      b.onload = function() {
        c.g.li(c)
      };
      b.onerror = function() {
        c.g.li(c)
      };
      b.src = a
    }
  };
  kc.prototype = {
    Dh: function(a) {
      this.file = a;
      this.lb = this.file.k();
      this.Wj =
        Array(this.lb);
      var a = this.file.k(),
        b, c, d = new ga;
      for (b = 0; b < a; b++) c = this.file.U, d.kl(this.file), this.Wj[d.handle] = c;
      this.ua = Array(this.lb);
      for (b = 0; b < this.lb; b++) this.ua[b] = 0;
      this.oa = m;
      this.Ai = this.lb;
      this.Ie = 0;
      this.images = m
    },
    eb: function(a) {
      return 0 <= a && a < this.Ai && -1 != this.oa[a] ? this.images[this.oa[a]] : m
    },
    no: function() {
      var a;
      for (a = 0; a < this.lb; a++) this.Wj[a] && (this.ua[a] = 1)
    },
    Ne: function() {
      if (0 == (this.g.ya & p.Th) && 0 == (this.g.ya & p.Wr)) {
        var a;
        for (a = 0; a < this.lb; a++) this.ua[a] = 0
      }
      this.Bh = m
    },
    Xi: function(a) {
      this.ua[a]++
    },
    eh: function(a) {
      this.Xi(a);
      return -1
    },
    Zz: function(a) {
      this.Hb[a] == m && (this.Bh != m && a < this.Bh.length && this.Bh[a] != m ? this.Hb[a] = this.Bh[a] : (this.Hb[a] = new jc(this, a), this.g.um(this.Hb[a])))
    },
    load: function(a) {
      var b;
      if (0 < this.g.Kd)
        if (this.Hb == m) {
          if (this.Hb = Array(this.g.Kd), this.g.ya & p.Th)
            for (b = 0; b < this.g.Kd; b++) this.g.Hb[b] && this.Zz(b)
        } else if (0 == (this.g.ya & p.Th)) {
        this.Bh = Array(this.g.Kd);
        for (b = 0; b < this.g.Kd; b++) this.Bh[b] = this.Hb[b];
        this.Hb = Array(this.g.Kd);
        for (b = 0; b < this.g.Kd; b++) this.Hb[b] = m
      }
      for (b = this.Ie =
        0; b < this.lb; b++) 0 != this.ua[b] && this.Ie++;
      b = Array(this.Ie);
      var c = 0,
        d;
      for (d = 0; d < this.lb; d++)
        if (0 != this.ua[d]) {
          if (this.images != m && -1 != this.oa[d] && this.images[this.oa[d]] != m) {
            if (b[c] = this.images[this.oa[d]], b[c].ua = this.ua[d], this.Hb != m && this.Bh != m) {
              var e = b[c].Ab;
              0 < e && (this.Hb[e] = this.Bh[e])
            }
          } else 0 != this.Wj[d] && (b[c] = new ga, a.seek(this.Wj[d]), b[c].load(this.g), b[c].ua = this.ua[d]);
          c++
        }
      this.images = b;
      this.oa = Array(this.lb);
      for (b = 0; b < this.lb; b++) this.oa[b] = -1;
      for (b = 0; b < this.Ie; b++) this.images[b] && (this.oa[this.images[b].handle] =
        b);
      this.Ai = this.lb
    },
    Bu: function(a) {
      var b;
      for (b = 0; b < a.length; b++)
        if (0 <= a[b] && a[b] < this.Ai && 0 != this.Wj[a[b]] && this.eb(a[b]) == m) {
          var c, d = -1;
          for (c = 0; c < this.Ie; c++)
            if (this.images[c] == m) {
              d = c;
              break
            }
          if (-1 == d) {
            var e = Array(this.Ie + 10);
            for (c = 0; c < this.Ie; c++) e[c] = this.images[c];
            for (; c < this.Ie + 10; c++) e[c] = m;
            d = this.Ie;
            this.Ie += 10;
            this.images = e
          }
          this.oa[a[b]] = d;
          this.images[d] = new ga;
          this.images[d].ua = 1;
          this.file.seek(this.Wj[a[b]]);
          this.images[d].load(this.g)
        }
    },
    Ij: function(a, b, c, d) {
      var e;
      this.Ch == m && (this.Ch = new ga);
      e = this.eb(a);
      if (e != m) {
        var a = e.width,
          g = e.height,
          h = e.Ga,
          n = e.va,
          r = e.Zl;
        e = e.am;
        if (0 == b) {
          if (1 != c && (h *= c, r *= c, a *= c), 1 != d) n *= d, e *= d, g *= d
        } else 1 != c && (h *= c, r *= c, a *= c), 1 != d && (n *= d, e *= d, g *= d), this.Eh == m && (this.Eh = new aa), this.Mj == m && (this.Mj = new ta), this.vj == m && (this.vj = new ta), this.Mj.x = h, this.Mj.y = n, this.vj.x = r, this.vj.y = e, this.Eh.left = this.Eh.top = 0, this.Eh.right = a, this.Eh.bottom = g, this.nG(this.Eh, this.Mj, this.vj, b), a = this.Eh.right, g = this.Eh.bottom, h = this.Mj.x, n = this.Mj.y, r = this.vj.x, e = this.vj.y;
        this.Ch.width =
          a;
        this.Ch.height = g;
        this.Ch.Ga = h;
        this.Ch.va = n;
        this.Ch.Zl = r;
        this.Ch.am = e;
        return this.Ch
      }
      return e
    },
    nG: function(a, b, c, d) {
      var e, g, h;
      90 == d ? (d = 0, h = 1) : 180 == d ? (d = -1, h = 0) : 270 == d ? (d = 0, h = -1) : (h = d * Math.PI / 180, d = Math.cos(h), h = Math.sin(h));
      var n, r, k, q, p;
      b == m ? n = r = p = g = 0 : (k = -b.x * d, q = -b.x * h, p = -b.y * d, g = -b.y * h, n = k + g, r = p - q);
      e = b == m ? a.right : a.right - b.x;
      k = e * d;
      q = e * h;
      e = k + g;
      p -= q;
      var l;
      g = b == m ? a.bottom : a.bottom - b.y;
      l = k + g * h;
      g = g * d - q;
      var s, u;
      s = n + l - e;
      u = r + g - p;
      k = Math.min(n, Math.min(e, Math.min(l, s)));
      q = Math.min(r, Math.min(p, Math.min(g,
        u)));
      n = Math.max(n, Math.max(e, Math.max(l, s)));
      r = Math.max(r, Math.max(p, Math.max(g, u)));
      c != m && (b == m ? (e = c.x, g = c.y) : (e = c.x - b.x, g = c.y - b.y), c.x = e * d + g * h - k, c.y = g * d - e * h - q);
      b != m && (b.x = -k, b.y = -q);
      a.right = n - k;
      a.bottom = r - q
    }
  };
  ga.SH = 10;
  ga.Of = function(a, b) {
    var c = new ga;
    c.g = a;
    c.zb = new Image;
    c.zb.onload = function() {
      c.g.ih++;
      c.width = c.zb.width;
      c.height = c.zb.height
    };
    a.jh++;
    a.mh = j;
    c.zb.src = a.Si + b;
    return c
  };
  ga.prototype = {
    kl: function(a) {
      this.handle = a.k();
      a.W(12)
    },
    Jt: function() {
      this.zb = new Image;
      var a = this;
      this.zb.onload =
        function() {
          a.g.li(a)
        };
      this.zb.onerror = function() {
        a.g.li(a)
      };
      this.zb.src = this.g.Si + q.Rm(this.handle, "png")
    },
    load: function(a) {
      this.g = a;
      this.handle = a.file.k();
      this.width = a.file.k();
      this.height = a.file.k();
      this.Ga = a.file.J();
      this.va = a.file.J();
      this.Zl = a.file.J();
      this.am = a.file.J();
      this.Ab = 0;
      this.zb = m;
      this.g.frame.qn != m ? (this.Ab = this.g.frame.qn[this.handle], 0 != this.Ab ? (this.g.P.Zz(this.Ab), this.Ld = this.g.frame.Ld[this.handle], this.Md = this.g.frame.Md[this.handle]) : this.g.um(this)) : this.g.um(this)
    },
    createElement: function() {
      var a =
        document.createElement("div");
      a.style.width = this.width + "px";
      a.style.height = this.height + "px";
      a.style.backgroundRepeat = "no-repeat";
      0 == this.Ab ? a.style.backgroundImage = "url('" + this.zb.src + "')" : (a.style.backgroundPosition = "-" + this.Ld + "px -" + this.Md + "px", a.style.backgroundImage = "url('" + this.g.Si + "M" + q.Rm(this.Ab, "png") + "')");
      return a
    },
    qe: function(a, b, c, d) {
      if (0 == (a & F.Wh)) {
        this.$f == m && (this.$f = new F, this.$f.Dt(this.g, this, a));
        if (0 == b && 1 == c && 1 == d) return this.$f;
        this.oh == m && (this.oh = new S);
        var e, g = 2147483647,
          h = -1;
        for (e = 0; e < this.oh.size(); e++) {
          a = this.oh.get(e);
          if (b == a.Ae && c == a.Zb && d == a.$b) return a.H;
          a.vw < g && (g = a.vw, h = e)
        }
        this.oh.size() < this.SH && (h = -1);
        a = new Td;
        a.H = new F;
        a.H.aG(this.$f, b, c, d);
        a.Ae = b;
        a.Zb = c;
        a.$b = d;
        a.vw = this.g.Qd;
        0 > h ? this.oh.add(a) : this.oh.set(h, a);
        return a.H
      }
      this.ml == m && (this.$f == m && (this.$f = new F, this.$f.Dt(this.g, this, 0)), this.ml = new F, this.ml.Dt(this.g, this, a));
      return this.ml
    }
  };
  lc.prototype = {
    Dh: function(a) {
      var b = a.m(),
        c;
      this.Jd = 0;
      var d = a.U,
        e = new Aa;
      for (c = 0; c < b; c++) e.kl(a), this.Jd = Math.max(this.Jd,
        e.handle + 1);
      a.seek(d);
      this.Jq = Array(this.Jd);
      for (c = 0; c < b; c++) d = a.U, e.kl(a), this.Jq[e.handle] = d;
      this.ua = Array(this.Jd);
      for (c = 0; c < this.Jd; c++) this.ua[c] = 0;
      this.oa = m;
      this.ag = this.Jd;
      this.ph = 0;
      this.fc = m
    },
    load: function(a) {
      var b;
      for (b = this.ph = 0; b < this.Jd; b++) 0 != this.ua[b] && this.ph++;
      b = Array(this.ph);
      var c = 0,
        d;
      for (d = 0; d < this.Jd; d++) 0 != this.ua[d] && (this.fc != m && -1 != this.oa[d] && this.fc[this.oa[d]] != m ? b[c] = this.fc[this.oa[d]] : (b[c] = new Aa, a.seek(this.Jq[d]), b[c].load(a)), b[c].ua = this.ua[d], c++);
      this.fc = b;
      this.oa =
        Array(this.Jd);
      for (b = 0; b < this.Jd; b++) this.oa[b] = -1;
      for (b = 0; b < this.ph; b++) this.oa[this.fc[b].handle] = b;
      this.ag = this.Jd
    },
    kf: function(a) {
      return -1 == a ? this.An : 0 <= a && a < this.ag && -1 != this.oa[a] ? this.fc[this.oa[a]] : m
    },
    Qp: function(a) {
      return this.kf(a).NG()
    },
    Ne: function() {
      if (0 == (this.g.JO & p.Th) && 0 == (this.g.ya & p.Wr)) {
        var a;
        for (a = 0; a < this.Jd; a++) this.ua[a] = 0
      }
    },
    no: function() {
      var a;
      for (a = 0; a < this.Jd; a++) this.Jq[a] && (this.ua[a] = 1)
    },
    Xi: function(a) {
      -1 == a ? this.An == m && (this.An = new Aa, this.An.Bp()) : this.ua[a]++
    },
    eh: function(a) {
      this.Xi(a);
      return -1
    },
    pp: function(a) {
      var b, c;
      for (c = 0; c < this.ph && !(this.fc[c] != m && this.fc[c].bb == a.bb && (this.fc[c].Id == a.Id && this.fc[c].Hd == a.Hd) && this.fc[c].Gd == a.Gd); c++);
      if (c < this.ph) return this.fc[c].handle;
      c = -1;
      for (b = this.Jd; b < this.ag && -1 != this.oa[b]; b++);
      if (-1 == c) {
        var d = Array(this.ag + 10);
        for (b = 0; b < this.ag; b++) d[b] = this.oa[b];
        for (; b < this.ag + 10; b++) d[b] = -1;
        c = this.ag;
        this.ag += 10;
        this.oa = d
      }
      d = -1;
      for (b = 0; b < this.ph; b++)
        if (this.fc[b] == m) {
          d = b;
          break
        } - 1 == d && (d = this.ph, this.fc.push(m));
      this.oa[c] = d;
      this.fc[d] = new Aa;
      this.fc[d].handle = c;
      this.fc[d].bb = a.bb;
      this.fc[d].Id = a.Id;
      this.fc[d].Hd = a.Hd;
      this.fc[d].Gd = a.Gd;
      return c
    }
  };
  Aa.prototype = {
    kl: function(a) {
      this.handle = a.m();
      a.zd == G ? a.W(72) : a.W(104)
    },
    load: function(a) {
      this.handle = a.m();
      var b = a.U;
      a.W(12);
      this.bb = a.m();
      0 > this.bb && (this.bb = -this.bb);
      a.m();
      a.m();
      a.m();
      this.Id = a.m();
      this.Hd = a.Ea();
      a.Ea();
      a.Ea();
      a.Ea();
      a.Ea();
      a.Ea();
      a.Ea();
      a.Ea();
      this.Gd = a.Ya();
      a.zd == G ? a.seek(b + 72) : a.seek(b + 104)
    },
    NG: function() {
      var a = new La;
      a.bb = this.bb;
      a.Id = this.Id;
      a.Hd = this.Hd;
      a.Gd = this.Gd;
      return a
    },
    Bp: function() {
      this.Gd = "Arial";
      this.bb = 13;
      this.Id = 400;
      this.Hd = 0
    },
    Xd: Z("bb"),
    Sf: function() {
      if (this.font == m) {
        this.font = this.Hd ? "italic " : "normal ";
        var a = 100 * Math.floor(this.Id / 100),
          a = Math.max(a, 100),
          a = Math.min(a, 900);
        this.font += a + " ";
        this.font += q.Jz(this.bb) + "px ";
        this.font += this.Gd
      }
      return this.font
    }
  };
  mc.prototype = {
    Dh: function(a) {
      this.file = a;
      this.lb = this.file.k();
      this.Kq = Array(this.lb);
      this.ua = Array(this.lb);
      this.oa = Array(this.lb);
      for (a = 0; a < this.lb; a++) this.ua[a] = 0, this.oa[a] = -1;
      for (var b =
          this.file.k(), c = new Va(this.g), d, a = 0; a < b; a++) d = this.file.U, c.kl(), this.Kq[c.handle] = d;
      this.Ai = this.lb;
      this.yn = 0;
      this.wk = m
    },
    UG: function(a) {
      return 0 <= a && a < this.Ai && -1 != this.oa[a] ? this.wk[this.oa[a]] : m
    },
    Ne: function() {
      if (0 == (this.g.ya & p.Th) && 0 == (this.g.ya & p.Wr)) {
        var a;
        for (a = 0; a < this.lb; a++) this.ua[a] = 0
      }
    },
    no: function() {
      var a;
      for (a = 0; a < this.lb; a++) this.Kq[a] && (this.ua[a] = 1)
    },
    Xi: function(a) {
      this.ua[a]++
    },
    eh: function(a) {
      this.Xi(a);
      return -1
    },
    load: function() {
      var a;
      for (a = this.yn = 0; a < this.lb; a++) 0 != this.ua[a] &&
        this.yn++;
      a = Array(this.yn);
      var b = 0,
        c;
      for (c = 0; c < this.lb; c++) 0 != this.ua[c] && (this.wk != m && -1 != this.oa[c] && this.wk[this.oa[c]] != m ? a[b] = this.wk[this.oa[c]] : (a[b] = new Va(this.g), this.file.seek(this.Kq[c]), a[b].load()), a[b].ua = this.ua[c], b++);
      this.wk = a;
      this.oa = Array(this.lb);
      for (a = 0; a < this.lb; a++) this.oa[a] = -1;
      for (a = 0; a < this.yn; a++) this.oa[this.wk[a].handle] = a;
      this.Ai = this.lb;
      this.Ne()
    }
  };
  Va.prototype = {
    kl: function() {
      this.handle = this.file.k();
      this.file.W(5);
      var a = this.file.k();
      this.file.zd == G ? this.file.W(a) :
        this.file.W(2 * a)
    },
    Jt: function() {
      var a, b = this.Ac.ad.yv & this.type;
      0 == b && (b = this.Ac.ad.Ju & this.type);
      for (a = 0; 4 > a && !(b & 1 << a); a++);
      if (4 > a) {
        b = "";
        switch (a) {
          case 0:
            b = "ogg";
            break;
          case 1:
            b = "m4a";
            break;
          case 2:
            b = "mp3";
            break;
          case 3:
            b = "wav"
        }
        if (this.aa) {
          var c = this,
            d = new XMLHttpRequest;
          d.open("GET", this.Ac.Si + q.Rm(this.handle, b), j);
          d.responseType = "arraybuffer";
          d.addEventListener("load", function() {
            c.response = d.response;
            c.Ac.ad.yF(c)
          });
          d.send()
        } else this.ib = new Audio, this.ib.BP = "auto", c = this, this.ib.addEventListener("loadeddata",
          function(a) {
            c.Ac.li(c);
            c.ib.removeEventListener("loadeddata", arguments.callee, G)
          }, G), this.ib.addEventListener("error", function() {
          c.Ac.li(c);
          c.ib = m
        }, G), this.ib.src = this.Ac.Si + q.Rm(this.handle, b), this.ib.load(), this.ib.autoplay = G
      } else this.Ac.li(this)
    },
    load: function() {
      this.handle = this.file.k();
      this.type = this.file.Ea();
      this.Em = this.pi = this.file.m();
      this.name = this.file.Ya(this.file.k());
      this.ib = m;
      this.Ac.um(this)
    },
    MH: function() {
      this.handle = 9999;
      this.type = 4;
      this.Em = this.pi = 4E4;
      this.name = "";
      this.ib = m;
      this.Ac.um(this)
    },
    Ln: function(a, b) {
      a || (a = 0);
      b || (b = this.pi);
      if (this.ib) this.ib.volume = this.volume / 100, this.Em = b, this.ib.playbackRate = b / this.pi, this.ib.duration && (this.ib.currentTime = 0), this.ib.play();
      else if (this.buffer) {
        this.source = this.aa.createBufferSource();
        this.source.buffer = this.buffer;
        0 == this.yp ? (this.source.gain.value = this.volume / 100, this.source.connect(this.aa.destination)) : (this.qi = this.aa.createGain(), this.source.connect(this.qi), this.qi.connect(this.aa.destination), this.qi.gain.value = this.volume / 100);
        a ||
          (a = 0);
        b || (b = this.pi);
        this.Em = b;
        this.source.playbackRate.value = b / this.pi;
        this.startTime = (new Date).getTime();
        "undefined" !== typeof this.source.start ? this.source.start(a, a / 1E3) : this.source.noteOn(a);
        var c = this;
        this.source.onended = function() {
          c.Sx = j
        }
      }
      this.Yk = G;
      this.gi = j;
      this.Sx = G
    },
    play: function(a, b, c) {
      this.qh = a;
      0 == this.qh && (this.qh = 1E7);
      this.volume = c;
      this.Ln()
    },
    stop: function() {
      this.ib ? this.ib.pause() : this.source && this.gi && ("undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0),
        this.source.onended = m);
      this.gi = this.zm = G
    },
    pause: function() {
      this.ib ? this.ib.pause() : this.source && (this.qi ? this.qi.gain.value = 0 : this.source.gain.value = 0);
      this.Yk = j
    },
    xe: function() {
      this.ib ? this.ib.play() : this.source && (this.qi ? this.qi.gain.value = this.volume / 100 : this.source.gain.value = this.volume / 100);
      this.Yk = G
    },
    mH: Z("Yk"),
    nH: function() {
      return (this.ib || this.source) && this.gi ? !this.Yk : G
    },
    vg: function(a) {
      this.ib ? this.ib.currentTime = a / 1E3 : this.source && (this.gi && ("undefined" !== typeof this.source.stop ? this.source.stop(0) :
        this.source.noteOff(0)), this.Ln(a))
    },
    NF: function() {
      if (this.gi == j && this.Yk == G)
        if (this.ib) {
          if (this.ib.ended) {
            if (0 < this.qh && (this.qh--, 0 < this.qh)) return this.Ln(0, this.Em), G;
            this.gi = this.zm = G;
            return j
          }
        } else if (this.source && (3 == this.source.playbackState || this.Sx)) {
        if (0 < this.qh && (this.qh--, 0 < this.qh)) return this.Ln(0, this.Em), G;
        this.gi = this.zm = G;
        return j
      }
      return G
    }
  };
  nc.prototype = {
    VC: function(a) {
      this.qI[this.position++] = a
    }
  };
  P.Vh = 80;
  P.kF = 256;
  P.mO = function(a, b) {
    var c = b >> 5,
      d = 1 << (b & 31),
      e = 0 != (a[c] & d);
    a[c] |= d;
    return e
  };
  P.xG = function(a) {
    return a.Cb + 0
  };
  P.Ef = function(a) {
    a &= 65535;
    return 0 != (a & 32768) ? a - 65536 : a
  };
  P.ks = function(a) {
    return a >> 16
  };
  P.Op = function(a) {
    return a & 4294901760
  };
  P.prototype = {
    ni: function(a) {
      var b;
      this.fh = 0;
      this.ng = m;
      this.og = -1;
      if (0 != (a & 32768)) return 32767 == (a & 32767) ? m : this.uI(a);
      var c = this.i.I[a];
      if (c.qd == this.Yb) {
        if (0 != (c.cb & 2147483648)) return m;
        b = this.i.w[c.cb];
        this.Ih = m;
        this.ik = c;
        this.ye = b;
        this.Yn = a
      } else {
        c.qd = this.Yb;
        if (this.Kh) return c.cb = -1, c.sd = 0, m;
        c.cb = c.Wa;
        if (0 != (c.Wa & 2147483648)) return c.sd =
          0, m;
        var d = c.Wa;
        do b = this.i.w[d], d = b.Nb, b.qc = d; while (0 == (d & 2147483648));
        b = this.i.w[c.Wa];
        this.Ih = m;
        this.ik = c;
        this.ye = b;
        this.Yn = a;
        c.sd = c.Ah
      }
      this.fh = c.sd;
      return b
    },
    uI: function(a) {
      for (var b, c, d = 0, e = 0, a = this.Jb[a & 32767]; e < a.ra.length;) {
        c = a.ra[e + 1];
        c = this.i.I[c];
        if (c.qd == this.Yb) b = 0, 0 == (c.cb & 2147483648) && (b = c.sd, this.ng == m && (this.ng = a, this.og = e));
        else if (b = 0, c.qd = this.Yb, this.Kh) c.cb = -1, c.sd = 0;
        else if (c.cb = c.Wa, 0 != (c.Wa & 2147483648)) c.sd = 0;
        else {
          this.ng == m && (this.ng = a, this.og = e);
          b = c.Wa;
          do b = this.i.w[b], b =
            b.qc = b.Nb; while (0 == (b & 2147483648));
          b = c.sd = c.Ah
        }
        d += b;
        e += 2
      }
      a = this.ng;
      return a != m ? (c = this.i.I[a.ra[this.og + 1]], this.Ih = m, this.ik = c, this.ye = b = this.i.w[c.cb], this.Yn = a.ra[this.og + 1], this.fh = d, b) : m
    },
    oi: function() {
      var a = this.ye,
        b;
      if (a == m && (b = this.i.I[this.Yn], 0 == (b.cb & 2147483648))) return a = this.i.w[b.cb], this.Ih = m, this.ik = b, this.ye = a;
      if (a != m && 0 == (a.qc & 2147483648)) return this.Ih = a, this.ik = m, this.ye = a = this.i.w[a.qc];
      if (this.ng == m) return m;
      do {
        this.og += 2;
        if (this.og >= this.ng.ra.length) return m;
        b = this.i.I[this.ng.ra[this.og +
          1]]
      } while (0 != (b.cb & 2147483648));
      this.Ih = m;
      this.ik = b;
      this.ye = a = this.i.w[b.cb];
      this.Yn = this.ng.ra[this.og + 1];
      return a
    },
    yG: function(a) {
      for (var a = this.Jb[a & 32767], b = 0, c; b < a.ra.length;) c = this.i.I[a.ra[b + 1]], c.qd != this.Yb && (c.qd = this.Yb, c.sd = 0, c.cb = -1), b += 2
    },
    Qf: function() {
      this.ye.Ub.sd -= 1;
      this.Ih != m ? (this.Ih.qc = this.ye.qc, this.ye = this.Ih) : (this.ik.cb = this.ye.qc, this.ye = m)
    },
    Fj: function(a) {
      var b = a.Ub;
      if (b.qd != this.Yb) b.qd = this.Yb, b.cb = a.Ob, b.sd = 1, a.qc = -1;
      else {
        var c = b.cb;
        if (0 != (c & 2147483648)) b.cb = a.Ob, b.sd +=
          1, a.qc = -1;
        else {
          do {
            if (a.Ob == c) return;
            b = this.i.w[c];
            c = b.qc
          } while (0 == (c & 2147483648));
          b.qc = a.Ob;
          a.qc = -1;
          a.Ub.sd += 1
        }
      }
    },
    $y: function() {
      var a, b, c;
      for (b = 0; b < this.i.de; b++)
        if (c = this.i.I[b], c.qd == this.Yb) {
          if (c.fv != this.mr) {
            c.fv = this.mr;
            for (a = c.Wa; 0 == (a & 2147483648);) a = this.i.w[a], a.lu = 0, a = a.Nb
          }
          for (a = c.cb; 0 == (a & 2147483648);) a = this.i.w[a], a.lu = 1, a = a.qc
        }
    },
    zG: function() {
      var a, b, c, d, e;
      for (d = 0; d < this.i.de; d++)
        if (e = this.i.I[d], e.fv == this.mr) {
          e.qd = this.Yb;
          a = e.Wa;
          for (c = m; 0 == (a & 2147483648);) b = this.i.w[a], 0 != b.lu && (c !=
            m ? c.qc = a : e.cb = a, b.qc = -1, c = b), a = b.Nb
        }
    },
    $m: function(a) {
      if (this.hk) return this.Xn = G, a = this.fu(a);
      if (0 == (a & 32768)) return a = this.i.I[a], a.qd == this.Yb && 0 == (a.cb & 2147483648) ? this.i.w[a.cb] : 0 == (a.Wa & 2147483648) ? this.i.w[a.Wa] : m;
      var b = this.Jb[a & 32767],
        c = 0;
      if (c >= b.ra.length) return m;
      do {
        a = this.i.I[b.ra[c + 1]];
        if (a.qd == this.Yb && 0 == (a.cb & 2147483648)) return this.i.w[a.cb];
        c += 2
      } while (c < b.ra.length);
      c = 0;
      do {
        a = this.i.I[b.ra[c + 1]];
        if (0 == (a.Wa & 2147483648)) return this.i.w[a.Wa];
        c += 2
      } while (c < b.ra.length);
      return m
    },
    il: function(a) {
      a.Ia &=
        ~Q.hm;
      this.Xn = j;
      var b = this.fu(a.xb);
      if (b != m) return this.rc != G && (a.Ia |= U.cj, this.gk = j), b;
      a.Ia |= Q.hm;
      return b
    },
    fu: function(a) {
      return 0 == (a & 32768) ? this.VG(a) : this.WG(a)
    },
    VG: function(a) {
      var b = this.i.I[a];
      if (b.dv != this.fk) {
        b.dv = this.fk;
        b.ev = this.Hh;
        if (b.qd == this.Yb && 0 == (b.cb & 2147483648)) {
          b.hg = b.cb;
          a = this.i.w[b.cb];
          b.Ji = a.qc;
          if (0 != (a.qc & 2147483648)) return b.xf = G, b.Ii = 1, this.rc = G, a;
          b.xf = j;
          b.Ii = 2;
          this.rc = j;
          return a
        }
        if (this.Xn && b.qd == this.Yb) return b.Ii = 0, b.hg = -1, m;
        if (0 == (b.Wa & 2147483648)) {
          b.hg = b.Wa;
          a = this.i.w[b.Wa];
          if (a == m) return b.Ii = 0, b.hg = -1, m;
          if (0 == (a.Nb & 2147483648)) return b.Ji = a.Nb, b.xf = j, b.Ii = 3, this.rc = j, a;
          b.xf = G;
          b.Ii = 1;
          this.rc = G;
          return a
        }
        b.Ii = 0;
        b.hg = -1;
        return m
      }
      if (b.ev != this.Hh) {
        var c;
        b.ev = this.Hh;
        switch (b.Ii) {
          case 0:
            return this.rc = b.xf, m;
          case 1:
            return a = this.i.w[b.hg], this.rc = b.xf, a;
          case 2:
            b.hg = b.Ji;
            a = this.i.w[b.Ji];
            if (a == m) return m;
            c = a.qc;
            0 != (c & 2147483648) && (b.xf = G, c = b.cb);
            b.Ji = c;
            this.rc = b.xf;
            return a;
          case 3:
            b.hg = b.Ji;
            a = this.i.w[b.Ji];
            if (a == m) return m;
            c = a.Nb;
            0 != (c & 2147483648) && (b.xf = G, c = b.Wa);
            b.Ji =
              c;
            this.rc = b.xf;
            return a
        }
      }
      if (0 > b.hg) return m;
      a = this.i.w[b.hg];
      this.rc = b.xf;
      return a
    },
    WG: function(a) {
      var b, c = this.Jb[a & 32767];
      if (c.zv != this.fk) {
        c.zv = this.fk;
        c.Av = this.Hh;
        b = this.xB(c);
        if (0 <= b) {
          c.ig = b;
          a = this.i.w[b];
          if (a == m) return c.Li = 0, c.ig = -1, m;
          b = a.qc;
          if (0 != (b & 2147483648) && (b = this.Dv(c), 0 > b)) return c.Li = 1, this.rc = c.yf = G, a;
          c.Mi = b;
          c.Li = 2;
          this.rc = c.yf = j;
          return a
        }
        if (this.Xn && c.Bv) return c.Li = 0, c.ig = -1, m;
        b = this.wB(c);
        if (0 <= b && (c.ig = b, a = this.i.w[b], a != m)) {
          b = a.Nb;
          if (0 != (b & 2147483648) && (b = this.Cv(c), 0 != (b &
              2147483648))) return c.Li = 1, this.rc = c.yf = G, a;
          c.Mi = b;
          c.Li = 3;
          this.rc = c.yf = j;
          return a
        }
        c.Li = 0;
        c.ig = -1;
        return m
      }
      if (c.Av != this.Hh) switch (c.Av = this.Hh, c.Li) {
        case 0:
          return this.rc = c.yf, m;
        case 1:
          return a = this.i.w[c.ig], this.rc = c.yf, a;
        case 2:
          return c.ig = c.Mi, a = this.i.w[c.Mi], a != m && (b = a.qc, 0 != (b & 2147483648) && (b = this.Dv(c), 0 > b && (c.yf = G, b = this.xB(c))), c.Mi = b), this.rc = c.yf, a;
        case 3:
          return c.ig = c.Mi, a = this.i.w[c.Mi], a != m && (b = a.Nb, 0 != (b & 2147483648) && (b = this.Cv(c), 0 != (b & 2147483648) && (c.yf = G, b = this.wB(c))), c.Mi = b),
            this.rc = c.yf, a
      }
      if (0 > c.ig) return m;
      a = this.i.w[c.ig];
      this.rc = c.yf;
      return a
    },
    Dv: function(a) {
      for (var b = a.zl, c; b < a.ra.length;) {
        c = a.ra[b + 1];
        c = this.i.I[c];
        if (c.qd == this.Yb && (a.Bv = j, 0 == (c.cb & 2147483648))) return a.zl = b + 2, c.cb;
        b += 2
      }
      return -1
    },
    xB: function(a) {
      a.zl = 0;
      a.Bv = G;
      return this.Dv(a)
    },
    Cv: function(a) {
      for (var b = a.zl, c; b < a.ra.length;) {
        c = a.ra[b + 1];
        c = this.i.I[c];
        if (0 == (c.Wa & 2147483648)) return a.zl = b + 2, c.Wa;
        b += 2
      }
      return -1
    },
    wB: function(a) {
      a.zl = 0;
      return this.Cv(a)
    },
    rG: function() {
      this.qt = G;
      for (var a = this.i.kr, b =
          this.i.lr;;) {
        for (var c = m, d = m, e = this.i.PB; e != m;) {
          if (0 > e.index) {
            (c = e.next) && (q.pb(e.name, c.name) || (c = m));
            break
          }
          d = e;
          e = e.next
        }
        if (e == m) break;
        e.stop = G;
        for (e.index = 0; e.index < e.sh; e.index++) {
          this.i.kr = e;
          if (this.i.lr = c) c.index = e.index;
          this.hk = 0;
          this.Wc(e.uf[e.index], -2686976);
          if (e.stop) break
        }
        if (c)
          for (c.index = 0; c.index < c.sh; c.index++) {
            this.i.kr = c;
            if (this.i.lr = e) e.index = c.index;
            this.hk = 0;
            this.Wc(c.uf[c.index], -2686976);
            if (c.stop) break
          }
        c && (e.next = c.next);
        d == m ? this.i.PB = e.next : d.next = e.next
      }
      this.i.kr = a;
      this.i.lr =
        b
    },
    re: function(a) {
      var b = a & 65535;
      0 != (b & 32768) && (b = 65536 - b);
      a = this.Qb[this.ze[b] + -(a >> 16)];
      0 != a && this.ef(a, m)
    },
    Wc: function(a, b) {
      this.tr = b;
      var c = this.Qb[a.ku + -(b >> 16)];
      return 0 != c ? (this.ef(c, a), j) : G
    },
    bH: function() {
      for (var a = G, b = this.i.aw; b;) {
        if (this.i.Ui >= b.Qd)
          if (b.type == rb.tF) {
            this.i.l.sc = b.name;
            var c = this.Qb[this.ze[-s.qm] + V.px];
            0 != c && this.ef(c, m);
            a = b.gt = j
          } else {
            0 == b.ro && (b.ro = this.i.Ui);
            for (; this.i.Ui >= b.ro;) {
              this.i.l.sc = b.name;
              this.i.l.cw = b.index;
              c = this.Qb[this.ze[-s.qm] + V.px];
              0 != c && this.ef(c, m);
              b.index++;
              b.kq--;
              if (0 == b.kq) {
                a = b.gt = j;
                break
              }
              b.ro += b.rJ
            }
          }
        b = b.next
      }
      if (a) {
        b = this.i.aw;
        for (a = m; b;) c = b.next, b.gt ? a == m ? this.i.aw = c : a.next = c : a = b, b = c
      }
    },
    UF: function() {
      var a;
      if (0 != (this.i.tc & k.im)) a = this.Qb[this.ze[-s.ap] + 1], 0 != a && (this.Qb[this.ze[-s.ap] + 1] = -1, this.ef(a, m), this.co = j);
      else {
        a = this.Qb[this.ze[-s.qm] + 3];
        0 != a && this.ef(a, m);
        a = this.Qb[this.ze[-s.ap] + 1];
        var b, c, d, e, g;
        if (0 != a) {
          if (this.co) {
            e = m;
            b = a;
            do {
              d = this.ec[b];
              if (d != e) {
                e = d;
                for (c = d.Cb; c < d.Cb + d.ne; c++) g = d.Qa[c], 0 == (g.Ia & Q.hm) && (g.Ia |= Q.Eo)
              }
              b++
            } while (this.ec[b] !=
              m)
          }
          this.ef(a, m);
          this.Qb[this.ze[-s.ap] + 1] = 0;
          if (this.co) {
            e = m;
            b = a;
            do {
              d = this.ec[b];
              if (d != e) {
                e = d;
                for (c = d.Cb; c < d.Cb + d.ne; c++) g = d.Qa[c], g.Ia &= ~Q.Eo
              }
              b++
            } while (this.ec[b] != m);
            this.co = G
          }
        }
        a = this.Qb[this.ze[-s.qm] + 2];
        0 != a && this.ef(a, m);
        a = this.Qb[this.ze[-s.qm] + 1];
        0 != a && this.ef(a, m)
      }
    },
    ef: function(a, b) {
      var c, d, e;
      this.jr = G;
      do
        if (d = this.ec[a], 0 == (d.Ha & K.fs))
          if (this.pg = d, this.qr[0] = 0, this.qr[1] = 0, this.qr[2] = 0, this.qr[3] = 0, 0 == (d.Ha & K.hs)) {
            this.Yb += 1;
            this.Kh = G;
            e = 0;
            if (d.Qa[e].dc(this.i, b))
              for (e++; e < d.Cb && d.Qa[e].Aa(this.i) !=
                G; e++);
            e == d.Cb && (this.jr ? b != m && this.LF(b) : this.ey(d));
            a++
          } else {
            this.mr++;
            if (0 == (d.Ha & K.Xw)) {
              c = G;
              do {
                this.Yb++;
                this.Kh = G;
                e = this.Pf[a];
                d.Qa[e].dc(this.i, b) == G && (this.Kh = j);
                for (e++; e < d.Cb && -1507329 != d.Qa[e].la;) d.Qa[e].Aa(this.i) == G && (this.Kh = j), e++;
                this.$y();
                this.Kh == G && (c = j);
                a++;
                d = this.ec[a];
                if (d == m) break
              } while (d == this.pg)
            } else {
              var g;
              c = this.Kh = G;
              do {
                this.Yb++;
                g = G;
                e = this.Pf[a];
                if (d.Qa[e].dc(this.i, b))
                  for (e++; e < d.Cb && -1572865 != d.Qa[e].la;) {
                    if (d.Qa[e].Aa(this.i) == G) {
                      g = j;
                      break
                    }
                    e++
                  } else g = j;
                g == G && (this.$y(),
                  c = j);
                a++;
                d = this.ec[a];
                if (d == m) break
              } while (d == this.pg)
            }
            c && (this.Yb++, this.zG(), this.ey(this.pg))
          } else
      if (a++, this.ec[a] != m)
        for (c = this.ec[a]; c == d;) {
          a++;
          if (this.ec[a] == m) break;
          c = this.ec[a]
        }
      while (this.ec[a] != m)
    },
    ey: function(a) {
      if (0 != (a.Ha & K.Vw)) {
        0 != (a.Ha & K.js) && (this.Ti = new S);
        if (0 != (a.Ha & K.gs)) {
          var b = this.i.Kb,
            c = a.Ej;
          a.Ej = b;
          if (b == c || b - 1 == c) return
        }
        if (0 != (a.Ha & K.is))
          if (0 != a.el) a.el--;
          else return;
        if (0 != (a.Ha & K.Go)) {
          b = this.i.Ui / 10;
          c = a.el;
          if (0 != c && b < c) return;
          a.el = b + a.Ej
        }
      }
      this.fk++;
      this.gk = G;
      this.Hh = 0;
      this.hk =
        j;
      b = 0;
      do c = a.Qa[b + a.Cb], 0 == (c.Ia & (Q.Uw | Q.Eo)) && (c.Ia &= ~U.cj, c.execute(this.i)), b++; while (b < a.ne);
      if (this.gk) {
        do {
          this.gk = G;
          this.Hh++;
          for (b = 0; b < a.ne; b++) c = a.Qa[b + a.Cb], 0 != (c.Ia & U.cj) && (c.Ia &= ~U.cj, c.execute(this.i))
        } while (this.gk)
      }
      this.hk = G;
      this.Ti != m && this.uG();
      this.qt && this.rG()
    },
    LF: function(a) {
      var b;
      b = a.Db;
      this.Yb += 1;
      this.Fj(a);
      this.fk++;
      this.gk = G;
      this.Hh = 0;
      this.hk = j;
      var c = 0,
        d;
      do {
        a = this.pg.Qa[this.pg.Cb + c];
        d = a.la & 4294901760;
        if (262144 == d || 589824 == d)
          if (b == a.oe) a.execute(this.i);
          else if (d = a.xb, 0 != (d &
            32768)) {
          var e = this.Jb[d & 32767];
          for (d = 0; d < e.ra.length;) {
            if (e.ra[d] == b) {
              a.execute(this.i);
              break
            }
            d += 2
          }
        }
        c++
      } while (c < this.pg.ne);
      this.hk = G
    },
    uG: function() {
      if (!(1 >= this.Ti.size())) {
        var a = this.i.random(this.Ti.size()),
          b;
        do b = this.i.random(this.Ti.size()); while (a == b);
        a = this.Ti.get(a);
        b = this.Ti.get(b);
        var c = a.o,
          d = a.n,
          e = b.n;
        k.ac(a, b.o);
        k.bc(a, e);
        k.ac(b, c);
        k.bc(b, d);
        this.Ti = m
      }
    },
    nv: function(a, b) {
      var c;
      this.i.au();
      if (this.i != m && 0 == this.i.Af && this.ym != G && (c = a, 2 == b && (c += P.kF), this.i.RB = 0, 0 == this.i.rk)) {
        this.gr = this.sc =
          c;
        this.re(-262150);
        this.re(-327686);
        c = 0;
        var d, e, g, h, n, r, k = new S;
        for (d = 0; d < this.i.Za; d++) {
          for (; this.i.w[c] == m;) c++;
          e = this.i.w[c];
          c++;
          g = e.o - e.ba;
          h = e.n - e.ca;
          n = g + e.B;
          r = h + e.A;
          this.i.Oe >= g && this.i.Oe < n && this.i.Pe >= h && this.i.Pe < r && 0 == (e.M & E.Ff) && (e.qa == s.ie ? 0 == (e.u.L & w.qj) ? this.Ac.P.eb(e.b.Da).qe(F.Jg, e.b.Xa, e.b.tb, e.b.ub).zk(g, h, this.i.Oe, this.i.Pe) && k.add(e) : k.add(e) : k.add(e))
        }
        for (c = 0; c < k.size(); c++) e = k.get(c), this.cw = e.Db, this.bw = e, this.re(-393222)
      }
    },
    cI: function() {
      this.i != m && this.ym != G && (this.i.RB = 0,
        this.re(-524294))
    },
    jB: function() {
      this.ym != G && 0 == this.i.Af && (this.i.RB = 0)
    },
    tI: function(a, b, c, d, e) {
      a = new Jd(a, b, c, d, e);
      this.kk == m && (this.kk = new S);
      this.kk.add(a)
    },
    aH: function() {
      if (this.kk != m) {
        var a;
        for (a = 0; a < this.kk.size(); a++) {
          var b = this.kk.get(a);
          if (b != m && 0 != b.code) switch (this.sc = b.iI, b.SI) {
            case 0:
              this.re(b.code);
              break;
            case 1:
              this.Wc(b.hI, b.code)
          }
        }
        this.kk.clear()
      }
    },
    load: function(a) {
      for (var b = Array(4), c, d = 0;;)
        if (b = a.file.DB(4), 69 == b[0] && 82 == b[1] && 62 == b[2] && 62 == b[3]) {
          this.bg = a.file.k();
          300 > this.bg &&
            (this.bg = 300);
          a.file.k();
          this.TA = a.file.k();
          for (c = 0; c < 7 + s.rx; c++) this.Vu[c] = a.file.k();
          this.rh = a.file.k();
          if (0 < this.rh) {
            this.kg = Array(this.rh);
            for (c = 0; c < this.rh; c++) this.kg[c] = new Id, this.kg[c].Vq = a.file.J(), this.kg[c].Wq = a.file.J()
          }
        } else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 115 == b[3]) a.file.m(), this.vn = a.file.m(), this.Cd = Array(this.vn);
      else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 118 == b[3]) {
        a.file.m();
        b = a.file.m();
        for (c = 0; c < b; c++) this.Cd[d] = K.create(a), d++
      } else if (60 == b[0] && 60 == b[1] && 69 == b[2] && 82 == b[3]) break;
      this.gA = Math.max(this.gA, d)
    },
    Nz: function(a) {
      var b, c;
      c = this.Cd[a];
      c.Ha &= K.Fo;
      c.Ha |= K.fs;
      a++;
      for (b = G;;) {
        c = this.Cd[a];
        c.Ha &= K.Fo;
        c.Ha |= K.fs;
        c = c.Qa[0];
        switch (c.la) {
          case -589825:
            c = c.s[0];
            c.Tf |= ma.ss;
            a = this.Nz(a);
            continue;
          case -655361:
            b = j, a++
        }
        if (b) break;
        a++
      }
      return a
    },
    wv: function() {
      var a, b, c, d, e, g, h = new S,
        n;
      for (d = 0; d < this.Cd.length;) a = this.Cd[d], a.Ha &= K.Fo, b = a.Qa[0], -589825 == b.la && (a = b.s[0], n = new Hd, n.id = a.YG, n.Yy = d, h.add(n), a.Tf &= ~(ma.ss | ma.rs), 0 != (a.Tf & ma.qE) && (a.Tf |= ma.rs)), d++;
      for (d = 0; d < this.Cd.length;) {
        a =
          this.Cd[d];
        a.Ha &= K.Fo;
        b = a.Qa[0];
        if (-589825 == b.la && (a = b.s[0], a.Tf &= ~ma.ss, 0 != (a.Tf & ma.rs))) {
          d = this.Nz(d);
          continue
        }
        d++
      }
      for (d = 0; d < this.Cd.length; d++) switch (a = this.Cd[d], b = a.Qa[0], b.la) {
        case -589825:
        case -655361:
          break;
        default:
          a.Ej = 0;
          for (e = a.el = 0; e < a.Cb + a.ne; e++)
            if (b = a.Qa[e], b.Ia = 0 > b.la ? b.Ia & Q.XD : b.Ia & ~(U.cj | Q.hm), 0 != b.jd)
              for (g = 0; g < b.jd; g++) switch (c = b.s[g], c.code) {
                case 13:
                  c.vO = c.dl;
                  break;
                case 39:
                  var r;
                  for (r = 0; r < h.size(); r++)
                    if (n = h.get(r), n.id == c.id) {
                      c.U = n.Yy;
                      break
                    }
              }
      }
    },
    rp: function(a) {
      var b, c, d, e, g, h, n,
        r, k, p, u, l, t;
      this.i = a;
      for (h = a = t = this.fk = 0; h < this.i.de; h++) - 1 != this.i.I[h].Gc && (this.i.I[h].dv = -1, this.i.I[h].rd = 0, this.i.I[h].wl = -1, a++, this.i.I[h].Gc + 1 > t && (t = this.i.I[h].Gc + 1));
      this.Jb = m;
      var v;
      if (0 < this.rh) {
        c = Array(this.rh);
        for (b = 0; b < this.rh; b++) {
          g = this.kg[b].Vq & 32767;
          for (v = c[b] = 0; v < this.i.de; v++)
            if (this.i.I[v].td == this.kg[b].Wq)
              for (h = 0; 8 > h && -1 != this.i.I[v].yl[h]; h++) g == this.i.I[v].yl[h] && c[b]++
        }
        this.Jb = Array(this.rh);
        for (b = 0; b < this.rh; b++) {
          this.Jb[b] = new Kd;
          0 != c[b] && (this.Jb[b].ra = Array(2 * c[b]));
          a = 0;
          g = this.kg[b].Vq & 32767;
          for (v = 0; v < this.i.de; v++)
            if (this.i.I[v].td == this.kg[b].Wq)
              for (h = 0; 8 > h && -1 != this.i.I[v].yl[h]; h++) g == this.i.I[v].yl[h] && (this.Jb[b].ra[2 * a] = this.i.I[v].Gc, this.Jb[b].ra[2 * a + 1] = v, a++);
          this.Jb[b].zv = -1
        }
      }
      this.De = Array(200 * t + 1);
      var a = 0,
        w = [];
      for (v = 0; v < this.Cd.length; v++) {
        b = this.Cd[v];
        for (l = 0; l < b.ne + b.Cb; l++) {
          c = b.Qa[l];
          c.Ia &= ~Q.Uw;
          0 <= P.Ef(c.la) && (c.xb = this.an(c.oe, P.Ef(c.la)));
          if (c.la == U.LC) h = c.s[0], h.ka[0].code == ia.ls && 0 == h.ka[1].code && (n = {}, n.CF = c.s[0], n.name = h.ka[0].ob, w.push(n),
            this.i.$s(h.ka[0].ob));
          else if (c.la == U.TJ || c.la == U.SJ) h = c.s[0], h.ka[0].code == ia.ls && 0 == h.ka[1].code && (h.ka[0] = new pb, h.ka[0].code = ia.aE, h.ka[0].value = this.i.$s(h.ka[0].ob));
          if (0 < c.jd)
            for (n = 0; n < c.jd; n++) switch (d = c.s[n], d.code) {
              case 25:
                d.value = 0;
                break;
              case 21:
                if (0 == (c.oe & s.Ps))
                  for (h = this.i.p.cd.Np(); h != m; h = this.i.p.cd.zn()) {
                    if (c.oe == h.of) {
                      d.tp = h.xi;
                      break
                    }
                  } else d.tp = -1;
                g = d.Mn; - 1 != g && (d.Nn = this.an(g, d.Pq));
                break;
              case 9:
              case 18:
              case 16:
                g = d.Mn; - 1 != g && (d.Nn = this.an(g, d.Pq));
                break;
              case 1:
                d.Ib = this.an(d.xh,
                  d.type);
                break;
              case 15:
              case 27:
              case 28:
              case 45:
              case 46:
              case 22:
              case 23:
              case 52:
              case 59:
              case 53:
              case 54:
                r = d;
                for (h = 0; h < r.ka.length; h++) 0 < P.Ef(r.ka[h].code) && (g = r.ka[h], g.Ib = this.an(g.xh, P.Ef(g.code)))
            }
        }
        n = 0;
        r = K.Ww | K.Vw | K.Ho;
        for (l = 0; l < b.Cb + b.ne; l++) {
          c = b.Qa[l];
          e = P.Ef(c.la);
          u = c.la;
          p = k = h = 0;
          d = m;
          if (e >= s.ie) switch (P.Op(u)) {
            case 262144:
            case 589824:
              n |= K.Ho;
              g = c.oe;
              if (0 != (g & s.Ps))
                for (e = this.vI(c.xb); - 1 != e; e = this.yB()) a = this.dA(b, a, this.i.I[e].Gc);
              else a = this.dA(b, a, g);
              break;
            case 1638400:
              n |= K.js;
              break;
            case -917504:
              d =
                c.s[0];
              h = c.s[0];
              this.op(c.xb, c.oe, h.Ib, h.xh);
              this.op(h.Ib, h.xh, c.xb, c.oe);
              g = P.Ef(c.la);
              p = this.bq(g) ? O.ke | O.rm : O.ke | O.fp | O.rm;
              h = h.type;
              k = this.bq(h) ? O.ke | O.rm : O.ke | O.fp | O.rm;
              h = 3;
              break;
            case -262144:
              g = P.Ef(c.la);
              p = this.bq(g) ? O.ke : O.ke | O.fp;
              d = c.s[0];
              h = c.s[0].type;
              k = this.bq(h) ? O.ke : O.ke | O.fp;
              h = 3;
              break;
            case -720896:
            case -786432:
              k = O.Rs;
              h = 1;
              break;
            case -851968:
              k = O.Qs, h = 1
          } else switch (u) {
            case -327681:
              r &= ~K.Ww;
              break;
            case -393217:
              r |= K.Go;
              break;
            case -262145:
              r |= K.Go;
              break;
            case -196609:
              r |= K.gs + K.is;
              break;
            case -196614:
              p =
                O.ke;
              d = c.s[0];
              h = 2;
              break;
            case -393222:
              p = O.ke, d = c.s[1], h = 2
          }
          if (0 != (h & 1))
            for (e = this.jg(c.xb); - 1 != e; e = this.zf()) this.i.I[e].rd |= k;
          if (0 != (h & 2))
            for (e = this.jg(d.Ib); - 1 != e; e = this.zf()) this.i.I[e].rd |= p
        }
        b.Ha &= ~r;
        b.Ha |= n
      }
      this.De[a] = -1;
      n = Array(s.Ud + t + 1);
      b = l = 0;
      for (e = -s.Ud; 0 > e; e++, b++) n[b] = l, l += this.Vu[s.Ud + e];
      for (v = 0; v < this.i.de; v++, b++) n[b] = l, l = this.i.I[v].td < s.If ? l + (this.Vu[s.Ud + this.i.I[v].td] + P.Vh + 1) : l + (this.Ac.Kp.Xm(this.i.I[v].td) + P.Vh + 1);
      k = l;
      this.Qb = Array(k);
      for (h = 0; h < k; h++) this.Qb[h] = 0;
      r = 0;
      g = Array(this.i.p.bg);
      for (v = 0; v < this.vn; v++) {
        b = this.Cd[v];
        b.Ha &= ~K.hs;
        d = j;
        for (l = p = 0; l < b.Cb; l++) {
          c = b.Qa[l];
          e = P.Ef(c.la);
          u = c.la;
          h = -P.ks(u);
          if (d)
            if (0 != (c.Ia & Q.es) && r++, 0 > e) this.Qb[n[7 + e] + h]++;
            else {
              d = 0;
              for (e = this.jg(c.xb); - 1 != e; e = this.zf()) this.Qb[n[s.Ud + e] + h]++, g[d++] = e;
              g[d] = -1;
              if (-917504 == P.Op(u)) {
                d = c.s[0];
                for (e = this.jg(d.Ib); - 1 != e; e = this.zf()) {
                  for (d = 0; g[d] != e && -1 != g[d];) d++; - 1 == g[d] && this.Qb[n[s.Ud + e] + h]++
                }
              }
            }
          d = G;
          if (-1507329 == c.la || -1572865 == c.la) d = j, b.Ha |= K.hs, 0 == p ? p = c.la : c.la = p, -1572865 == p && (b.Ha |= K.Xw)
        }
      }
      c = r + 1;
      for (b = 0; b <
        k; b++) 0 != this.Qb[b] && (l = this.Qb[b], this.Qb[b] = c, c += l + 1);
      this.ec = Array(c);
      this.Pf = Array(c);
      for (h = 0; h < c; h++) this.ec[h] = m, this.Pf[h] = 0;
      p = Array(k);
      for (h = 0; h < k; h++) p[h] = this.Qb[h];
      r = k = 0;
      var F;
      for (v = 0; v < this.vn; v++) {
        b = this.Cd[v];
        d = j;
        for (l = 0; l < b.Cb; l++) {
          c = b.Qa[l];
          e = P.Ef(c.la);
          u = c.la;
          h = -P.ks(u);
          if (d)
            if (0 != (c.Ia & Q.es) && (r++, this.ec[k] = b, this.Pf[k] = l, k++), 0 > e) {
              if (F = n[s.Ud + e] + h, this.ec[p[F]] = b, this.Pf[p[F]] = l, p[F]++, c.la == V.nD) {
                d = G;
                for (h = 0; h < b.Cb && !(b.Qa[h].la == V.oD || b.Qa[h].la == V.pD); h++);
                h < b.Cb && (d = j);
                h = c.s[0];
                if (h.ka[0].code == ia.ls && 0 == h.ka[1].code) {
                  e = h.ka[0].ob;
                  this.i.$s(e);
                  for (h = 0; h < w.length; h++)
                    if (u = w[h], q.pb(u.name, e)) {
                      this.i.pk || (this.i.pk = []);
                      F = m;
                      for (h = 0; h < this.i.pk.length; h++)
                        if (q.pb(e, this.i.pk[h].name)) {
                          F = this.i.pk[h];
                          break
                        }
                      F || (F = new nc(e), this.i.pk.push(F));
                      F.VC(b);
                      F.PH |= d;
                      u.CF.PO = h + 1;
                      break
                    }
                }
              }
            } else {
              d = 0;
              for (e = this.jg(c.xb); - 1 != e; e = this.zf()) F = n[s.Ud + e] + h, this.ec[p[F]] = b, this.Pf[p[F]] = l, p[F]++, g[d++] = e;
              g[d] = -1;
              if (-917504 == P.Op(u)) {
                d = c.s[0];
                for (e = this.jg(d.Ib); - 1 != e; e = this.zf()) {
                  for (d = 0; g[d] != e &&
                    -1 != g[d];) d++; - 1 == g[d] && (F = n[s.Ud + e] + h, this.ec[p[F]] = b, this.Pf[p[F]] = l, p[F]++)
                }
              }
            }
          d = G;
          if (-1507329 == c.la || -1572865 == c.la) d = j
        }
      }
      this.Oj = Array(t + 1 + a / 2);
      for (v = w = 0; v < this.i.de; v++)
        if (t = this.i.I[v], b = n[s.Ud + v], t.gv = b, 0 != (t.Lq & A.Tg)) {
          a = 0;
          l = this.Qb[b - P.ks(-786432)];
          if (0 != l)
            for (; this.ec[l] != m;) {
              b = this.ec[l];
              c = b.Qa[this.Pf[l]];
              g = c.s[0].value;
              d = P.xG(b);
              for (h = b.ne; 0 < h; h--, d++) c = b.Qa[d], c.la == (524288 | t.td & 65535) && (a |= g);
              l++
            }
          t.hv = a;
          b = t.Gc;
          for (h = a = 0; - 1 != this.De[a]; a += 2)
            if (this.De[a] == b)
              if (c = this.De[a + 1], 0 != (c & 32768)) t.rd |=
                c;
              else {
                for (l = 0; l < h && this.Oj[w + l] != c;) l++;
                l == h && (this.Oj[w + h++] = c)
              }
          0 < h && (t.wl = w, this.Oj[w + h++] = -1, w += h)
        }
      this.ze[0] = 0;
      for (h = 1; h <= s.Ud; h++) this.ze[h] = n[s.Ud - h];
      for (v = 0; v < this.i.de; v++)
        if (t = this.i.I[v], e = t.Wa, 0 == (e & 2147483648)) {
          do {
            a = this.i.w[e];
            a.ku = t.gv;
            a.Ub = t;
            a.hh = t.rd;
            0 != (a.Ba & A.Tg) && (a.q.iw = t.hv);
            0 != (a.Ba & A.pj) && 0 == (a.hh & O.ke) && a.u.Ar(G);
            if (0 == (a.Ba & A.dF) && (a.Ba &= ~A.dp, 0 != (a.hh & O.Qs) && 0 != (this.i.p.Gb & z.GE) && (a.Ba |= A.dp), 0 != (a.hh & (O.ke | O.Rs)))) a.Ba |= A.dp;
            e = a.Nb
          } while (0 == (e & 2147483648))
        }
      this.SB = 0 !=
        r ? j : G;
      this.De = m;
      this.ym = j
    },
    Nr: function() {
      this.ym = G;
      this.Pf = this.ec = this.Qb = this.Oj = this.Jb = m
    },
    an: function(a, b) {
      if (0 != (a & s.Ps)) {
        var c;
        for (c = 0; a != this.kg[c].Vq || b != this.kg[c].Wq;) c++;
        return c | 32768
      }
      for (c = 0; c < this.i.de && this.i.I[c].Gc != a;) c++;
      return c
    },
    bq: function(a) {
      var b;
      for (b = 0; b < this.i.de; b++)
        if (-1 != this.i.I[b].Gc && this.i.I[b].td == a)
          if (0 != (this.i.I[b].Lq & A.pj) && 0 == (this.i.I[b].Lq & A.Os)) break;
          else return G;
      return j
    },
    jg: function(a) {
      if (0 == (a & 32768)) return this.Rn = -1, a;
      if (-1 == a) return -1;
      this.Rn = a & 32767;
      this.Pn = 0;
      return this.zf()
    },
    zf: function() {
      var a;
      if (-1 == this.Rn || this.Pn >= this.Jb[this.Rn].ra.length) return -1;
      a = this.Jb[this.Rn].ra[this.Pn + 1];
      this.Pn += 2;
      return a
    },
    vI: function(a) {
      if (0 == (a & 32768)) return this.Sn = -1, a;
      if (-1 == a) return -1;
      this.Sn = a & 32767;
      this.Qn = 0;
      return this.yB()
    },
    yB: function() {
      var a;
      if (-1 == this.Sn || this.Qn >= this.Jb[this.Sn].ra.length) return -1;
      a = this.Jb[this.Sn].ra[this.Qn + 1];
      this.Qn += 2;
      return a
    },
    op: function(a, b, c, d) {
      var e, g;
      if (0 > b) {
        if (this.Jb != m) {
          e = this.Jb[a & 32767];
          for (g = 0; g < e.ra.length;) this.op(e.ra[g +
            1], e.ra[g], c, d), g += 2
        }
      } else if (0 > d) {
        if (this.Jb != m) {
          e = this.Jb[c & 32767];
          for (g = 0; g < e.ra.length;) this.op(a, b, e.ra[g + 1], e.ra[g]), g += 2
        }
      } else {
        a = this.i.I[a];
        if (a.Hi == m) a.Hi = [], a = a.Hi;
        else {
          a = a.Hi;
          for (b = 0; b < a.length; b += 2)
            if (d == a[b]) return
        }
        a.push(d);
        a.push(c)
      }
    },
    dA: function(a, b, c) {
      var d, e, g, h, n;
      for (n = 0; n < a.Cb; n++)
        if (h = a.Qa[n], 2 <= P.Ef(h.la)) switch (e = 32768 + O.jF, g = P.Op(h.la), g) {
          case -917504:
            g = h.s[0];
            for (d = this.jg(h.xb); - 1 != d; d = this.zf()) d = this.i.I[d].Gc, c == d && (e = 0, b = this.eA(b, c, g.Ib));
            if (0 == e) break;
            for (d = this.jg(g.Ib); - 1 !=
              d; d = this.zf()) d = this.i.I[d].Gc, c == d && (b = this.eA(b, c, h.xb));
            break;
          case -786432:
            g = h.s[0], e = 32768 + g.value;
          case -851968:
            for (d = this.jg(h.xb); - 1 != d; d = this.zf()) d = this.i.I[d].Gc, c == d && (this.De[b++] = c, this.De[b++] = e)
        }
        return b
    },
    eA: function(a, b, c) {
      for (c = this.jg(c); - 1 != c; c = this.zf()) {
        var c = this.i.I[c].Gc,
          d;
        for (d = 0; d < a && !(this.De[d] == b && this.De[d + 1] == c); d += 2);
        d == a && (this.De[a++] = b, this.De[a++] = c)
      }
      return a
    },
    vG: function(a) {
      var b, c, d, e, g, h;
      for (d = 0; d < this.vn; d++) {
        b = this.Cd[d];
        for (e = 0; e < b.Cb + b.ne; e++) {
          c = b.Qa[e];
          for (g =
            0; g < c.jd; g++) switch (c.s[g].code) {
            case 6:
            case 35:
              h = c.s[g], a.eh(h.iJ)
          }
        }
      }
    }
  };
  K.Ww = 1;
  K.gs = 2;
  K.is = 4;
  K.Go = 8;
  K.js = 16;
  K.kL = 64;
  K.iL = 128;
  K.ZD = 256;
  K.hL = 512;
  K.hs = 1024;
  K.Ho = 2048;
  K.Xw = 4096;
  K.$D = 8192;
  K.fs = 16384;
  K.jL = 32768;
  K.Vw = K.js + K.gs + K.is + K.Go;
  K.Fo = K.ZD + K.$D;
  K.create = function(a) {
    var b = a.file.U,
      c = a.file.J(),
      d = new K;
    d.Cb = a.file.Ea();
    d.ne = a.file.Ea();
    d.Ha = a.file.k();
    a.file.W(2);
    d.Ej = a.file.m();
    d.el = a.file.m();
    d.Qa = Array(d.Cb + d.ne);
    var e, g = 0;
    for (e = 0; e < d.Cb; e++) d.Qa[g++] = V.create(a);
    for (e = 0; e < d.ne; e++) d.Qa[g++] = U.create(a);
    a.file.seek(b - c);
    return d
  };
  Q.YD = 1;
  Q.gL = 2;
  Q.WD = 4;
  Q.Eo = 8;
  Q.hm = 16;
  Q.es = 32;
  Q.fL = 64;
  Q.Uw = 128;
  Q.XD = Q.es + Q.YD + Q.WD + Q.Eo + Q.hm;
  Q.Ik = 1;
  rb.tF = 0;
  rb.xN = 1;
  Ba.Bx = 0;
  Ba.iN = 1;
  Ba.jN = 2;
  Ba.kN = 3;
  Ba.prototype = {
    load: function(a) {
      this.xi = a.k();
      this.of = a.k();
      this.xu = a.m();
      this.yu = a.m();
      this.wu = a.k();
      a.k();
      this.Xz = a.k();
      a.W(2)
    },
    Tc: function(a, b) {
      this.vu[a] = b
    }
  };
  oc.prototype = {
    load: function(a) {
      this.sf = a.file.m();
      this.list = Array(this.sf);
      var b, c = 0;
      for (b = 0; b < this.sf; b++) this.list[b] = new Ba, this.list[b].load(a.file), this.list[b].xi +
        1 > c && (c = this.list[b].xi + 1), this.list[b].hq = a.zc.Jj(this.list[b].of).ue;
      this.oa = Array(c);
      for (b = 0; b < this.sf; b++) this.oa[this.list[b].xi] = b
    },
    tz: function(a) {
      return this.list[a]
    },
    QG: function(a) {
      return a < this.oa.length ? this.list[this.oa[a]] : m
    },
    zn: function() {
      var a;
      if (this.gq < this.sf) {
        do
          if (a = this.list[this.gq++], 2 <= a.hq) return a;
        while (this.gq < this.sf)
      }
      return m
    },
    Np: function() {
      this.gq = 0;
      return this.zn()
    }
  };
  W.cE = 1;
  W.dE = 2;
  W.tL = 4;
  W.ns = 16;
  W.os = 32;
  W.ps = 64;
  W.uL = 65536;
  W.Io = 131072;
  W.vL = 262144;
  W.prototype = {
    load: function(a) {
      this.ya =
        a.m();
      this.$l = a.CB();
      this.bm = a.CB();
      this.zq = a.m();
      this.Bq = a.m();
      a.Ya();
      this.Wx = this.ya;
      this.Zx = this.$l;
      this.$x = this.bm;
      this.Xx = this.zq;
      this.Yx = this.Bq
    },
    reset: function() {
      this.ya = this.Wx;
      this.$l = this.Zx;
      this.bm = this.$x;
      this.zq = this.Xx;
      this.Bq = this.Yx;
      this.x = this.y = this.Ip = this.Jp = 0;
      this.qp = this.Yj = this.$j = this.Zj = m;
      this.kw(0);
      this.scale = 1;
      this.dC(1);
      this.eC(1);
      this.iC(this.g.ea / 2);
      this.kC(this.g.ma / 2);
      this.hC(this.g.ea / 2);
      this.jC(this.g.ma / 2);
      this.lC(G);
      this.ya & W.Io ? (this.Wd = j, this.Up()) : (this.Wd = G,
        this.show())
    },
    jG: function() {
      this.Sb.NI()
    },
    AF: function(a) {
      this.Zj == m && (this.Zj = new S);
      this.Zj.add(a)
    },
    Px: function(a) {
      this.$j == m && (this.$j = new S);
      this.$j.add(a)
    },
    mp: function(a) {
      this.qp == m && (this.qp = new S);
      this.qp.add(a)
    },
    $F: function(a, b) {
      this.Sb = new Da;
      this.Sb.x = a;
      this.Sb.y = b;
      this.sb = new Da;
      this.sb.x = a;
      this.sb.y = b;
      this.ta = new Da;
      this.ta.x = a;
      this.ta.y = b;
      this.kw(0);
      this.scale = 1;
      this.dC(1);
      this.eC(1);
      this.iC(this.g.ea / 2);
      this.kC(this.g.ma / 2);
      this.hC(this.g.ea / 2);
      this.jC(this.g.ma / 2);
      this.lC(G);
      this.g.Zd.Vd(this.Sb);
      this.g.Zd.Vd(this.sb);
      this.g.Zd.Vd(this.ta);
      this.gJ()
    },
    kw: function(a) {
      this.Ae = a;
      this.Sb.Ae = a;
      this.sb.Ae = a;
      this.ta.Ae = a
    },
    dC: function(a) {
      this.Zb = a;
      this.Sb.Zb = a;
      this.sb.Zb = a;
      this.ta.Zb = a
    },
    eC: function(a) {
      this.$b = a;
      this.Sb.$b = a;
      this.sb.$b = a;
      this.ta.$b = a
    },
    iC: function(a) {
      this.Ga = a;
      this.Sb.Ga = a;
      this.sb.Ga = a;
      this.ta.Ga = a
    },
    kC: function(a) {
      this.va = a;
      this.Sb.va = a;
      this.sb.va = a;
      this.ta.va = a
    },
    hC: function(a) {
      this.yo = a = this.g.ea - a;
      this.Sb.yo = a;
      this.sb.yo = a;
      this.ta.yo = a
    },
    jC: function(a) {
      this.zo = a = this.g.ma - a;
      this.Sb.zo =
        a;
      this.sb.zo = a;
      this.ta.zo = a
    },
    lC: function(a) {
      this.Lf = a;
      this.Sb.Lf = a;
      this.sb.Lf = a;
      this.ta.Lf = a
    },
    QI: function(a, b) {
      this.Sb.x = a;
      this.Sb.y = b;
      this.sb.x = a;
      this.sb.y = b;
      this.ta.x = a;
      this.ta.y = b;
      this.show()
    },
    gJ: function() {
      this.ya & W.ns ? this.show() : this.Up()
    },
    Up: function() {
      this.ya &= ~W.Io;
      this.Wd && (this.Sb.visible = G, this.sb.visible = G, this.Wd = this.ta.visible = G)
    },
    show: function() {
      this.Wd == G && (this.Sb.visible = j, this.sb.visible = j, this.Wd = this.ta.visible = j)
    },
    Iy: function() {
      this.Sb != m && (this.g.Zd.removeChild(this.Sb), this.Sb =
        m);
      this.sb != m && (this.g.Zd.removeChild(this.sb), this.sb = m);
      this.ta != m && (this.g.Zd.removeChild(this.ta), this.ta = m)
    },
    zF: function(a, b, c, d) {
      var e = new aa;
      e.left = a;
      e.top = b;
      e.right = c;
      e.bottom = d;
      this.Yj == m && (this.Yj = new S);
      this.Yj.add(e)
    },
    RG: function(a, b) {
      a += this.x;
      b += this.y;
      if (this.Yj != m) {
        var c, d;
        for (c = 0; c < this.Yj.size(); c++)
          if (d = this.Yj.get(c), a >= d.left && b >= d.top && a < d.right && b < d.bottom) return d
      }
      return m
    },
    Zi: function(a, b, c, d, e) {
      var b = b + this.x - a.Ga,
        c = c + this.y - a.va,
        g = b + a.width,
        h = c + a.height,
        n = c;
      0 != d && (n = h - d);
      var r, k;
      k = e == ua.dm ? this.Zj : this.$j;
      if (k == m) return m;
      for (e = 0; e < k.size(); e++)
        if (r = k.get(e), r.x < g && r.x + r.width > b && r.y < h && r.y + r.height > n && r.Zi(a, b, c, d)) return r;
      return m
    },
    Ir: function(a, b, c, d, e, g) {
      g = g == ua.dm ? this.Zj : this.$j;
      if (g == m) return m;
      a += this.x;
      b += this.y;
      c += this.x;
      d += this.y;
      0 != e && (b = d - e);
      for (e = 0; e < g.size(); e++) {
        var h = g.get(e);
        if (h.x < c && h.x + h.width > a && h.y < d && h.y + h.height > b && h.Ir(a, b, c, d)) return h
      }
      return m
    },
    zk: function(a, b, c) {
      c = c == ua.dm ? this.Zj : this.$j;
      if (c == m) return m;
      var a = a + this.x,
        b = b + this.y,
        d;
      for (d = 0; d < c.size(); d++) {
        var e = c.get(d);
        if (a >= e.x && a < e.x + e.width && b >= e.y && b < e.y + e.height && e.zk(a, b)) return e
      }
      return m
    }
  };
  ha.prototype = {
    kb: function(a, b, c) {
      if (this.BH != m)
        if (this.type == s.ZE) {
          var d = this.Ta.Wb,
            e;
          switch (d.Di) {
            case 1:
              switch (d.uh) {
                case 1:
                  a.Zc(b + this.x, c + this.y, this.width, this.height, this.zj, this.Ta.vf, this.Ta.wf);
                  break;
                case 2:
                  a.kc(b + this.x, c + this.y, this.width, this.height, this.zj, this.Ta.vf, this.Ta.wf);
                  break;
                case 3:
                  a.Sv(b + this.x, c + this.y, this.width, this.height, this.zj, this.Ta.vf, this.Ta.wf)
              }
              break;
            case 2:
              switch (d.uh) {
                case 1:
                  a.Zc(b + this.x, c + this.y, this.width, this.height, this.zj, this.Ta.vf, this.Ta.wf);
                  break;
                case 2:
                  a.Rv(b + this.x, c + this.y, this.width, this.height, this.zj, this.yt, 0 != this.Hz, this.Ta.vf, this.Ta.wf);
                  break;
                case 3:
                  a.IB(b + this.x, c + this.y, this.width, this.height, this.zj, this.yt, 0 != this.Hz, this.Ta.vf, this.Ta.wf)
              }
              break;
            case 3:
              switch (d.uh) {
                case 2:
                  e = this.g.P.eb(d.th);
                  a.JB(e, b + this.x, c + this.y, this.width, this.height, this.Ta.vf, this.Ta.wf);
                  break;
                case 3:
                  e = this.g.P.eb(d.th), a.KB(e, b + this.x, c + this.y,
                    this.width, this.height, this.Ta.vf, this.Ta.wf)
              }
          }
          if (0 < this.borderWidth) switch (d.uh) {
            case 1:
              var g = e = 0,
                h = this.width,
                n = this.height;
              0 != (d.Fn & Ia.IE) && (e += h, h = -h);
              0 != (d.Fn & Ia.JE) && (g += n, n = -n);
              a.Zc(b + this.x + e, c + this.y + g, b + this.x + e + h, c + this.y + g + n, this.borderColor, this.borderWidth);
              break;
            case 2:
              a.fr(b + this.x, c + this.y, this.width, this.height, this.borderColor, this.borderWidth);
              break;
            case 3:
              a.HB(b + this.x, c + this.y, this.width, this.height, 1, this.borderColor, this.borderWidth)
          }
        } else this.type == s.YE ? a.we(this.md, b + this.x +
          this.md.Ga, c + this.y + this.md.va, 0, 1, 1, this.Ta.vf, this.Ta.wf) : this.v.kb(a, b, c);
      else a.we(this.md, b + this.x, c + this.y, 0, 1, 1, 0, 0)
    },
    Tc: function(a, b) {
      b.Sb.Vd(this);
      this.type == s.tx && b.mp(this);
      switch (this.Nd) {
        case Y.bp:
          b.AF(this);
          b.Px(this);
          break;
        case Y.je:
          b.Px(this);
          break;
        case Y.Ns:
          b.zF(this.x, this.y, this.x + this.width, this.y + this.height)
      }
    },
    Zi: function(a, b, c, d) {
      var e;
      switch (this.type) {
        case 0:
          return e = this.height, this.Nd == Y.je && (e = z.jm), a.uw(b, c, d, this.x, this.y, this.width, e, 0);
        case 1:
          if (0 != this.ki) return j;
          e = F.Jg;
          this.Nd == Y.je && (e = F.Wh);
          e = this.md.qe(e, 0, 1, 1);
          return a.Zi(b, c, d, e, this.x, this.y, 0);
        case 11:
          if (0 != this.ki) return j;
          e = F.Jg;
          this.Nd == Y.je && (e = F.Wh);
          e = this.md.qe(e, 0, 1, 1);
          return a.Zi(b, c, d, e, this.x, this.y, 0)
      }
      return G
    },
    Ir: function(a, b, c, d) {
      var e;
      switch (this.type) {
        case 0:
          if (this.Nd == Y.je) {
            a = this.y;
            c = this.y + Math.min(this.height, z.jm);
            if (a < d && c > b) return j;
            break
          }
          return j;
        case 1:
          if (0 != this.ki) return j;
          e = F.Jg;
          this.Nd == Y.je && (e = F.Wh);
          e = this.md.qe(e, 0, 1, 1);
          return e.uw(this.x, this.y, 0, a, b, c, d, 0);
        case 11:
          if (0 !=
            this.ki) return j;
          e = F.Jg;
          this.Nd == Y.je && (e = F.Wh);
          e = this.md.qe(e, 0, 1, 1);
          return e.uw(this.x, this.y, 0, a, b, c, d, 0)
      }
      return G
    },
    zk: function(a, b) {
      var c;
      switch (this.type) {
        case 0:
          if (this.Nd == Y.je) {
            c = this.y + this.height;
            if (b >= y + this.height - z.jm && b < c) return j;
            break
          }
          return j;
        case 1:
          if (0 != this.ki) return j;
          c = F.Jg;
          this.Nd == Y.je && (c = F.Wh);
          c = this.md.qe(c, 0, 1, 1);
          return c.zk(this.x, this.y, a, b);
        case 11:
          if (0 != this.ki) return j;
          c = F.Jg;
          this.Nd == Y.je && (c = F.Wh);
          c = this.md.qe(c, 0, 1, 1);
          return c.zk(this.x, this.y, a, b)
      }
      return G
    }
  };
  s.cN =
    1;
  s.aN = 2;
  s.eN = 4;
  s.dN = 8;
  s.ep = 16;
  s.hF = 32;
  s.bN = 64;
  s.$M = 1;
  s.ZM = 2;
  s.Ax = 4;
  s.Ud = 7;
  s.ux = -7;
  s.xM = -6;
  s.wM = -5;
  s.qm = -4;
  s.ap = -3;
  s.zM = -2;
  s.AM = -1;
  s.ZE = 0;
  s.YE = 1;
  s.ie = 2;
  s.Sg = 3;
  s.vx = 4;
  s.wx = 5;
  s.sx = 6;
  s.pm = 7;
  s.yM = 8;
  s.qx = 9;
  s.vM = 10;
  s.tx = 11;
  s.rx = 10;
  s.If = 32;
  s.Ps = 32768;
  s.prototype = {
    Au: function(a) {
      this.In = a.k();
      this.ue = a.k();
      this.yh = a.k();
      a.W(2);
      this.vf = a.m();
      this.wf = a.m()
    },
    load: function(a) {
      a.seek(this.cB);
      switch (this.ue) {
        case 0:
          this.Wb = new Ia;
          break;
        case 1:
          this.Wb = new qc;
          break;
        default:
          this.Wb = new A
      }
      this.Wb.load(a, this.ue);
      this.dB = 0
    },
    wJ: function() {
      this.Wb = m
    },
    Tb: function(a, b) {
      this.Wb.Tb(a, b)
    }
  };
  pc.prototype = {
    Dh: function(a) {
      this.Gi = a.m();
      this.jc = Array(this.Gi);
      var b;
      for (b = this.gg = 0; b < this.Gi; b++)
        for (var c = 0, d; 32639 != c;)
          if (c = a.k(), a.k(), d = a.m(), 0 != d) {
            d = a.U + d;
            switch (c) {
              case 17476:
                this.jc[b] = new s;
                this.jc[b].Au(a);
                this.jc[b].In >= this.gg && (this.gg = this.jc[b].In + 1);
                break;
              case 17477:
                this.jc[b].cv = a.Ya();
                break;
              case 17478:
                this.jc[b].cB = a.U
            }
            a.seek(d)
          }
      this.zh = Array(this.gg);
      for (b = 0; b < this.Gi; b++) this.zh[this.jc[b].In] = b;
      this.Jn =
        Array(this.gg);
      this.Fi = Array(this.gg);
      for (a = 0; a < this.gg; a++) this.Jn[a] = 0, this.Fi[a] = 0
    },
    Jj: function(a) {
      return this.jc[this.zh[a]]
    },
    OI: function() {
      var a;
      for (a = 0; a < this.Gi; a++) this.jc[a].yh &= ~s.ep
    },
    fJ: function(a) {
      this.jc[this.zh[a]].yh |= s.ep
    },
    rz: function() {
      var a;
      for (a = 0; a < this.Gi; a++)
        if (0 != (this.jc[a].yh & s.ep)) return this.Ep = a, this.jc[a];
      return m
    },
    wz: function() {
      if (this.Ep < this.Gi) {
        var a;
        for (a = this.Ep + 1; a < this.Gi; a++)
          if (0 != (this.jc[a].yh & s.ep)) return this.Ep = a, this.jc[a]
      }
      return m
    },
    Ne: function() {
      var a;
      for (a = 0; a < this.gg; a++) this.Jn[a] = 0
    },
    Xi: function(a) {
      this.Jn[a] = 1
    },
    load: function(a) {
      var b;
      for (b = 0; b < this.gg; b++)
        if (0 != this.Jn[b]) {
          if (0 == this.Fi[b] || 0 != this.Fi[b] && 0 != (this.jc[this.zh[b]].dB & s.hF)) this.jc[this.zh[b]].load(a), this.Fi[b] = 1
        } else 0 != this.Fi[b] && (this.jc[this.zh[b]].wJ(), this.Fi[b] = 0);
      this.Ne()
    },
    Tb: function(a, b) {
      var c;
      for (c = 0; c < this.gg; c++) 0 != this.Fi[c] && this.jc[this.zh[c]].Tb(a, b)
    }
  };
  Y.xx = 0;
  Y.bp = 1;
  Y.je = 2;
  Y.Ns = 3;
  Y.$E = 4;
  qc.prototype = {
    load: function(a) {
      a.W(4);
      this.ZA = a.k();
      this.VA = a.k();
      this.WA =
        a.m();
      this.XA = a.m();
      this.th = a.k()
    },
    Tb: function(a) {
      a != m && (a = a.eh(this.th), -1 != a && (this.th = a))
    }
  };
  Ia.IE = 1;
  Ia.JE = 2;
  Ia.prototype = {
    load: function(a) {
      a.W(4);
      this.ZA = a.k();
      this.VA = a.k();
      this.WA = a.m();
      this.XA = a.m();
      this.Hq = a.k();
      this.Gq = a.Xb();
      this.uh = a.k();
      this.Di = a.k();
      if (1 == this.uh) this.Fn = a.k();
      else switch (this.Di) {
        case 1:
          this.dg = this.ul = a.Xb();
          break;
        case 2:
          this.dg = a.Xb();
          this.ul = a.Xb();
          this.En = a.m();
          break;
        case 3:
          this.th = a.k()
      }
    },
    Tb: function(a) {
      3 == this.Di && a != m && (a = a.eh(this.th), -1 != a && (ocImage = a))
    }
  };
  A.JM =
    1;
  A.IM = 2;
  A.cF = 4;
  A.zx = 8;
  A.Tg = 16;
  A.oj = 32;
  A.LM = 64;
  A.NM = 128;
  A.gF = 256;
  A.pj = 512;
  A.KM = 1024;
  A.fF = 2048;
  A.Os = 4096;
  A.eF = 8192;
  A.dp = 16384;
  A.dF = 32768;
  A.MM = 65536;
  A.yx = 131072;
  A.BM = 1;
  A.HM = 2;
  A.bF = 4;
  A.cp = 8;
  A.DM = 4;
  A.CM = 48;
  A.GM = 16;
  A.FM = 32;
  A.EM = 48;
  A.aF = 64;
  A.PM = 1;
  A.WM = 2;
  A.VM = 4;
  A.XM = 8;
  A.UM = 16;
  A.RM = 32;
  A.OM = 64;
  A.TM = 128;
  A.SM = 256;
  A.YM = 512;
  A.QM = 1024;
  A.prototype = Y;
  A.prototype = {
    load: function(a, b) {
      var c = a.U;
      this.$u = Array(8);
      var d;
      a.W(4);
      a.W(2);
      var e = a.k();
      a.W(2);
      var g = a.k(),
        h = a.k(),
        n = a.k();
      this.fg = a.m();
      for (d = 0; 8 > d; d++) this.$u[d] =
        a.J();
      a.k();
      var r = a.k(),
        k = a.k();
      this.Uj = a.k();
      var p = a.k();
      this.Mc = a.m();
      a.Xb();
      d = a.m();
      var q = a.m();
      this.Dn = this.vl = m;
      0 != n && (a.seek(c + n), this.eg = new kd, this.eg.load(a));
      0 != r && (a.seek(c + r), this.Hn = new gd, this.Hn.load(a));
      0 != k && (a.seek(c + k), this.Gn = new fd, this.Gn.load(a));
      0 != h && (a.seek(c + h), this.Ci = new Na, this.Ci.load(a));
      0 != g && (a.seek(c + g), this.Fc = new sc, this.Fc.load(a));
      0 != p && (a.seek(c + p), g = a.m(), a.W(4), this.aB = a.m(), a.m(), this.$A = a.m(), 0 != g - 20 && (this.YA = a.U));
      0 != d && (a.seek(c + d), this.vl = new va, this.vl.load(a));
      0 != q && (a.seek(c + q), this.Dn = new va, this.Dn.load(a));
      if (0 != e) switch (a.seek(c + e), b) {
        case 3:
        case 4:
          this.Fc = new uc;
          this.Fc.load(a);
          break;
        case 5:
        case 6:
        case 7:
          this.Sa = new ka;
          this.Sa.load(a);
          break;
        case 8:
          this.Fc = new tc;
          this.Fc.load(a);
          this.fg &= ~(A.pj | A.Os | A.cF);
          break;
        case 9:
          this.Fc = new rc, this.Fc.load(a)
      }
    },
    Tb: function(a, b) {
      this.Ci != m && this.Ci.Tb(a);
      this.Fc != m && this.Fc.Tb(a, b);
      this.Sa != m && this.Sa.Tb(a, b)
    }
  };
  rc.prototype = {
    load: function(a) {
      a.W(4);
      this.vh = a.m();
      this.wh = a.m();
      a.k();
      this.bB = a.k();
      this.Ke = a.m();
      a.W(8);
      this.av = a.Ya()
    },
    Tb: X()
  };
  sc.prototype = {
    load: function(a) {
      a.W(2);
      this.xy = a.m();
      this.zy = a.m();
      this.yy = a.m()
    },
    Tb: X()
  };
  ka.HK = 0;
  ka.GK = 1;
  ka.CD = 2;
  ka.BD = 3;
  ka.FK = 4;
  ka.IK = 5;
  ka.Yr = 256;
  ka.prototype = {
    load: function(a) {
      a.W(4);
      this.vh = a.m();
      this.wh = a.m();
      this.bv = a.k();
      this.Je = a.k();
      this.Vj = a.k();
      this.Ei = a.k();
      switch (this.Je) {
        case 1:
        case 4:
          this.rl = a.k();
          this.frames = Array(this.rl);
          var b;
          for (b = 0; b < this.rl; b++) this.frames[b] = a.k();
          break;
        case 2:
        case 3:
        case 5:
          if (this.Hq = a.k(), this.Gq = a.Xb(), this.uh = a.k(), this.Di =
            a.k(), 1 == this.uh) this.Fn = a.k();
          else switch (this.Di) {
            case 1:
              this.dg = a.Xb();
              break;
            case 2:
              this.dg = a.Xb(), this.ul = a.Xb(), this.En = a.m()
          }
      }
    },
    Tb: function(a, b) {
      switch (this.Je) {
        case 1:
        case 4:
          var c;
          for (c = 0; c < this.rl; c++) a != m && a.eh(this.frames[c]);
          break;
        case 5:
          b != m && b.eh(this.Ei)
      }
    }
  };
  tc.prototype = {
    load: function(a) {
      a.m();
      a.m();
      this.Ke = a.m();
      a.Xb();
      this.vh = a.m();
      this.wh = a.m();
      a.W(4);
      var b = a.m();
      this.text = a.Ya(b)
    },
    Tb: X()
  };
  pa.AN = 0;
  pa.zN = 1;
  pa.BN = 2;
  pa.CN = 4;
  pa.yN = 15;
  pa.uF = 256;
  pa.Gx = 512;
  pa.prototype = {
    load: function(a) {
      this.Wl =
        a.J();
      this.wo = a.k();
      this.xw = a.Xb();
      this.Nh = a.Ya()
    },
    Tb: function(a, b) {
      b != m && b.eh(this.Wl)
    }
  };
  uc.prototype = {
    load: function(a) {
      var b = a.U;
      a.W(4);
      this.ov = a.m();
      this.pv = a.m();
      this.Xj = a.m();
      this.Bb = Array(this.Xj);
      var c = Array(this.Xj),
        d;
      for (d = 0; d < this.Xj; d++) c[d] = a.m();
      for (d = 0; d < this.Xj; d++) this.Bb[d] = new pa, a.seek(b + c[d]), this.Bb[d].load(a)
    },
    Tb: function(a, b) {
      var c;
      for (c = 0; c < this.Xj; c++) this.Bb[c].Tb(a, b)
    }
  };
  E.Ff = 1;
  E.ts = 2;
  E.NL = 4;
  E.Xh = 8;
  E.Yh = 16;
  E.sE = 32;
  E.Kg = 8192;
  E.ML = 16384;
  E.OL = 32768;
  E.prototype = {
    cC: function(a,
      b) {
      if (this.b.tb != a || this.b.ub != b) {
        0 <= a && (this.b.tb = a);
        0 <= b && (this.b.ub = b);
        this.b.D = j;
        var c = this.c.f.P.Ij(this.b.Da, this.b.Xa, this.b.tb, this.b.ub);
        this.B = c.width;
        this.A = c.height;
        this.ba = c.Ga;
        this.ca = c.va
      }
    },
    N: X(),
    handle: X(),
    Zg: X(),
    vy: X(),
    display: X(),
    qb: X(),
    HG: $(m),
    at: X(),
    Xk: X(),
    mi: $(0),
    vk: X(),
    Kj: X(),
    Tl: X(),
    Vc: $(-1),
    gl: $(0),
    wd: X(),
    wj: X(),
    Qm: X()
  };
  vc.prototype = q.extend(new E, {
    handle: function() {
      this.u.handle();
      this.b.D && (this.b.D = G)
    },
    at: function(a, b, c, d, e) {
      this.ia = this.c.p.ab[d];
      this.$ = e;
      this.ia.ta.Vd(this)
    },
    kb: function(a, b, c) {
      if (this.$ && (0 == (this.M & E.Xh) || this.u.tg)) {
        var d = this.u.Jc;
        this.u.L & w.rF && (d |= w.Iw);
        var e = this.c.f.P.eb(this.b.Da);
        e && (this.Bk ? a.Ri(this.Bk, b + this.o - this.c.V + this.ia.x - e.Ga, c + this.n - this.c.Y + this.ia.y - e.va, this.Bk.width * this.b.tb, this.Bk.height * this.b.ub, d, this.u.uc) : a.we(e, b + this.o - this.c.V + this.ia.x, c + this.n - this.c.Y + this.ia.y, this.b.Xa, this.b.tb, this.b.ub, d, this.u.uc))
      }
    },
    mi: function() {
      return this.ia.ta.removeChild(this)
    },
    vk: function() {
      this.$ = j
    },
    Kj: function() {
      this.$ = G
    },
    Vc: function() {
      return this.ia.ta.Vc(this)
    },
    gl: function() {
      return this.ia.ta.children.length
    },
    wd: function(a) {
      a >= this.ia.ta.children.length && (a = this.ia.ta.children.length);
      0 > a && (a = 0);
      this.ia.ta.wd(this, a)
    },
    Tl: function(a) {
      this.u.Jc = w.We;
      this.u.uc = a
    }
  });
  L.Mw = 1;
  L.hD = 2;
  L.jD = 4;
  L.BK = 8;
  L.kD = 16;
  L.zK = 32;
  L.lK = 64;
  L.DK = 128;
  L.kK = 256;
  L.EK = 512;
  L.CK = 1024;
  L.oK = 2048;
  L.yK = 4096;
  L.nK = 8192;
  L.Lw = 16384;
  L.uK = 32768;
  L.fD = 65536;
  L.vK = 131072;
  L.mK = 262144;
  L.iD = 524288;
  L.wK = 1048576;
  L.gD = 2097152;
  L.tK = 12582912;
  L.qK = 0;
  L.sK = 4194304;
  L.rK = 8388608;
  L.pK = 12582912;
  L.AK = 16777216;
  L.xK = 33554432;
  L.prototype = q.extend(new E, {
    pC: function(a, b, c) {
      b = a.Fc;
      this.B = b.vh;
      this.A = b.wh;
      this.Ke = b.Ke;
      0 != (this.Ke & L.kD) && (this.Ke |= L.fD); - 1 == c && (c = 0, 0 != (this.Ke & L.Lw) && (c = b.bB));
      if (!(b.av == m || 0 != b.av.length) && (0 != (this.Ke & L.Lw) && !(c >= this.c.f.jf)) && c != this.c.f.me) this.Wd = 0 != (a.Uj & A.cp) ? j : G, this.Lc = new Da, this.Lc.x = this.o - this.c.V, this.Lc.y = this.n - this.c.Y, this.c.f.Zd.Vd(this), this.lv = this.o, this.mv = this.n, this.t = new p(this.c.f.At, this.c.f.file, this.c.f.path), this.t.$B(this.c.f, c, this.Ke, this.Lc, this.B, this.A),
        this.t.Ht(), this.t.qw(), this.t.mw((this.c.f.Dk + this.Lc.x) * this.c.f.Zb, (this.c.f.Ek + this.Lc.y) * this.c.f.$b), this.t.qo(), this.c.f.La.push(this.t)
    },
    N: function(a) {
      this.pC(a, j, -1)
    },
    handle: function() {
      this.q.move();
      if (this.t != m) {
        if (this.lv != this.o || this.mv != this.n) this.Lc.x = this.o - this.c.V, this.Lc.y = this.n - this.c.Y, this.lv = this.o, this.mv = this.n, this.t.mw(this.Lc.x * this.c.f.Zb, this.Lc.y * this.c.f.$b);
        this.t.qo() == G ? (this.Gp(), this.t = m) : (this.hB = this.fq, this.fq = this.t.me)
      }
    },
    kb: function(a) {
      this.Wd && this.t !=
        m && this.t.Ry(a, this.Lc.x, this.Lc.y)
    },
    qb: function() {
      if (this.t != m) {
        switch (this.t.Ma) {
          case 3:
            this.t.Km()
        }
        this.Gp();
        this.t.Vy();
        this.t = m
      }
    },
    Gp: function() {
      var a;
      for (a = 0; a < this.c.f.La.length; a++)
        if (this.c.f.La[a] == this.t) {
          this.c.f.La.splice(a, 1);
          break
        }
      this.c.f.Zd.removeChild(this.Lc)
    },
    LP: function() {
      if (this.t != m) {
        if (this.t.z != m) {
          this.t.z.hb = k.ex;
          return
        }
        this.qb(j)
      }
      this.pC(this.G, G, -1)
    },
    MO: function() {
      this.t != m && this.t.z != m && (this.t.z.hb = k.vs)
    },
    Up: function() {
      this.Wd = G
    },
    show: function() {
      this.Wd = j
    },
    qP: function(a) {
      this.t !=
        m && (this.t.z != m && 0 <= a && 4096 > a) && (this.t.z.hb = k.Mo, this.t.z.Nl = 32768 | a)
    },
    mb: function() {
      this.t != m && this.t.z != m && (this.t.z.hb = k.No)
    },
    CP: function() {
      this.t != m && this.t.z != m && (this.t.z.hb = k.ws)
    },
    MP: function() {
      this.t != m && this.t.z != m && (this.t.z.hb = k.fx)
    },
    pause: function() {
      this.t != m && this.t.z != m && this.t.z.pause()
    },
    xe: function() {
      this.t != m && this.t.z != m && this.t.z.xe()
    },
    TP: function(a, b) {
      this.t != m && this.t.lw(a, b)
    },
    SP: function(a, b) {
      this.t != m && this.t.cJ(a, b)
    },
    mH: function() {
      return this.t != m && this.t.z != m ? 0 != this.t.z.Af :
        G
    },
    gO: function() {
      return this.t == m
    },
    pP: Z("Wd"),
    RO: function() {
      return this.fq != this.hB
    },
    bP: function(a) {
      return this.t != m ? this.t.sz(a) : ""
    },
    cP: function(a) {
      return this.t != m ? this.t.gh(a) : 0
    },
    $O: function() {
      return this.fq + 1
    },
    po: X(),
    oo: X(),
    lO: function() {
      this.t != m && this.Wd && (hoAdRunHeader.f.oI.removeChild(this), hoAdRunHeader.f.oI.Vd(this))
    }
  });
  wc.prototype = {
    N: function() {
      rcScaleY = rcScaleX = 1;
      rcAngle = 0;
      rcMovementType = -1
    },
    qb: X()
  };
  da.Sw = 15;
  da.wD = 240;
  da.xD = 4;
  da.uD = 61440;
  da.vD = 12;
  da.yD = 512;
  da.AD = 1024;
  da.zD = 2048;
  da.prototype =
    q.extend(new E, {
      N: function() {
        this.nc = -1;
        this.ko = this.mc = 0;
        this.B = this.A = 1;
        if (this.G.Sa == m) this.A = this.Pc = this.B = this.Oc = 1;
        else {
          var a = this.G.Sa;
          this.B = this.Oc = a.vh;
          this.A = this.Pc = a.wh;
          this.gd = a.Vj;
          this.type = a.Je;
          switch (this.type) {
            case 5:
              var b = this.nc; - 1 == b && (b = a.Ei);
              this.font = this.c.f.yb.kf(b);
              this.Bc = this.font.Xd();
              this.mc = a.dg;
              break;
            case 2:
            case 3:
              this.mc = a.dg, this.ko = a.ul
          }
        }
        a = this.G.Fc;
        this.$a = a.zy;
        this.vc = a.yy;
        this.ga = a.xy;
        this.xj = G
      },
      qb: X(),
      handle: function() {
        this.u.handle();
        this.b.D && (this.b.D = G)
      },
      Sf: function() {
        var a = this.G.Sa;
        if (5 == this.type) {
          var b = rsFont; - 1 == b && (b = a.Ei);
          return this.c.f.yb.Qp(b)
        }
        return m
      },
      Bf: function(a, b) {
        5 == this.type && (this.nc = this.c.f.yb.pp(a), this.font = this.c.f.yb.kf(this.nc), this.Bc = this.font.Xd(), b != m && (this.B = this.Oc = b.right - b.left, this.A = this.Pc = b.bottom - b.top), this.Pa())
      },
      Pp: Z("mc"),
      Br: function(a) {
        this.mc = a;
        this.Pa()
      },
      Bt: function(a) {
        this.xj == G && !q.ru(a) && (this.xj = j)
      },
      Dm: function(a) {
        if (this.xj == G) {
          if (a = q.pe(a), a < this.$a && (a = this.$a), a > this.vc && (a = this.vc), a != Math.round(this.ga)) this.ga =
            a, this.b.D = j, this.Pa()
        } else if (a < this.$a && (a = this.$a), a > this.vc && (a = this.vc), a != this.ga) this.ga = a, this.b.D = j, this.Pa()
      },
      XF: function(a) {
        this.Bt(a);
        this.Dm(this.ga + a)
      },
      YF: function(a) {
        this.Bt(a);
        this.Dm(this.ga - a)
      },
      FO: function(a) {
        this.$a = a;
        this.Dm(this.ga)
      },
      EO: function(a) {
        this.vc = a;
        this.Dm(this.ga)
      },
      CO: function(a) {
        this.mc = a;
        this.Pa()
      },
      DO: function(a) {
        this.ko = a;
        this.Pa()
      },
      BO: Z("ga"),
      AO: Z("$a"),
      zO: Z("vc"),
      xO: Z("mc"),
      yO: Z("ko"),
      Xk: function(a, b, c, d, e, g) {
        this.G.Sa != m && this.xa != j && (this.xa = j, this.Vx = d, this.$ =
          e, this.ia = this.c.p.ab[c], this.da = this.Vx ? this.ia.sb : this.ia.ta, 0 > g ? this.da.Vd(this) : this.da.np(this, g), 5 != this.type && this.Pa())
      },
      mi: function() {
        if (this.G.Sa == m || this.xa == G) return -1;
        this.xa = G;
        var a = this.da.Vc(this);
        this.da.removeChild(this);
        return a
      },
      Vc: function() {
        return this.xa ? this.da.Vc(this) : -1
      },
      gl: function() {
        return this.xa ? this.da.children.length : -1
      },
      wd: function(a) {
        this.xa && this.da.wd(this, a)
      },
      vk: function() {
        this.G.Sa != m && this.$ == G && (this.$ = j, this.Pa())
      },
      Kj: function() {
        this.G.Sa != m && this.$ == j && (this.$ =
          G)
      },
      Zg: function() {
        this.Bd || this.Pa()
      },
      Pa: function() {
        var a, b = this.G.Sa;
        switch (this.type) {
          case 4:
            this.sg = this.vc <= this.$a ? 0 : Math.floor((this.ga - this.$a) * b.rl / (this.vc - this.$a));
            this.sg = Math.min(this.sg, b.rl - 1);
            a = this.c.f.P.eb(b.frames[Math.max(this.sg, 0)]);
            this.B = a.width;
            this.A = a.height;
            this.ba = a.Ga;
            this.ca = a.va;
            break;
          case 2:
          case 3:
            a = this.Oc;
            b.Je == ka.CD && (a = this.Pc);
            this.sg = this.vc <= this.$a ? 0 : (this.ga - this.$a) * a / (this.vc - this.$a);
            b.Je == ka.BD ? (this.ca = 0, this.A = this.Pc, this.B = this.sg, this.ba = 0 != (b.Vj &
              ka.Yr) ? this.sg - this.Oc : 0) : (this.ba = 0, this.B = this.Oc, this.A = this.sg, this.ca = 0 != (b.Vj & ka.Yr) ? this.sg - this.Pc : 0);
            break;
          case 1:
            a = this.xj == G ? q.ti(this.ga, this.gd) : q.Lt(this.ga, this.gd);
            var c, d, e, g = 0,
              h = 0;
            for (c = a.length - 1; 0 <= c; c--) d = a.charCodeAt(c), e = 0, 45 == d ? e = b.frames[10] : 46 == d ? e = b.frames[12] : 43 == d ? e = b.frames[11] : 101 == d || 69 == d ? e = b.frames[13] : 48 <= d && 57 >= d && (e = b.frames[d - 48]), 0 <= e && (d = this.c.f.P.eb(e), d != m ? (g += d.width, h = Math.max(h, d.height)) : toto = 2);
            this.ba = g;
            this.ca = h;
            this.B = g;
            this.A = h;
            break;
          case 5:
            a = this.xj ==
              G ? q.ti(this.ga, this.gd) : q.Lt(this.ga, this.gd), this.ba = b = this.Ua != m ? this.Ua.measureText(a, this.font) : (new la(this.c.f, 16, 16)).measureText(a, this.font), this.ca = this.Pc / 2 + this.Bc / 2, this.B = b, this.A = this.Bc, this.Ua == m ? this.Ua = new la(this.c.f, this.B, this.A) : (this.B > this.Ua.width || this.A > this.Ua.height) && this.Ua.Un(this.B, this.A), this.Ua.Er(a, q.Co | q.Do, new aa(0, 0, 1E3, 1E3), this.font, this.mc)
        }
        this.Bd = j
      },
      kb: function(a, b, c) {
        if (this.$ && this.Bd) {
          var d, e, g;
          d = this.G.Sa;
          var b = b + this.o - this.ba - this.c.V + this.ia.x,
            c = c + this.n - this.ca - this.c.Y + this.ia.y,
            h = this.B,
            n = this.A;
          switch (this.type) {
            case 4:
              d = this.c.f.P.eb(d.frames[Math.max(this.sg, 0)]);
              a.we(d, b + d.Ga, c + d.va, 0, 1, 1, this.u.Jc, this.u.uc);
              break;
            case 2:
            case 3:
              e = this.mc;
              g = this.ko;
              switch (d.Di) {
                case 1:
                  a.kc(b, c, h, n, e, this.u.Jc, this.u.uc);
                  break;
                case 2:
                  0 != (d.Vj & ka.Yr) && (dl = e, e = g, g = dl), a.Rv(b, c, h, n, e, g, 0 != d.En, this.u.Jc, this.u.uc)
              }
              break;
            case 1:
              e = this.xj == G ? q.ti(this.ga, this.gd) : q.Lt(this.ga, this.gd);
              for (g = 0; g < e.length; g++) n = e.charCodeAt(g), h = 0, 45 == n ? h = d.frames[10] : 46 ==
                n || 44 == n ? h = d.frames[12] : 43 == n ? h = d.frames[11] : 69 == n || 101 == n ? h = d.frames[13] : 48 <= n && 57 >= n && (h = d.frames[n - 48]), h = this.c.f.P.eb(h), h != m && (a.we(h, b + h.Ga, c + h.va, 0, 1, 1, this.u.Jc, this.u.uc), b += h.width);
              break;
            case 5:
              this.Ua.kb(a, b, c, this.u.Jc, this.u.uc)
          }
        }
      },
      Tl: function(a) {
        this.u.Jc = w.We;
        this.u.uc = a
      }
    });
  xc.prototype = q.extend(new E, {
    N: function() {
      this.nc = -1;
      this.mc = 0;
      this.B = this.A = 1;
      var a = this.G.Sa;
      this.B = this.Oc = a.vh;
      this.A = this.Pc = a.wh;
      this.type = a.Je;
      this.mc = a.dg;
      this.uk = a.bv;
      this.ga = this.c.f.Az()[this.uk - 1];
      this.gd = a.Vj;
      if (5 == this.type) {
        var b = this.nc; - 1 == b && (b = a.Ei);
        this.font = this.c.f.yb.kf(b);
        this.Bc = this.font.Xd()
      }
    },
    qb: X(),
    handle: function() {
      var a = this.c.f.Az()[this.uk - 1];
      a != this.ga && (this.ga = a, this.Pa());
      this.u.handle();
      this.b.D && (this.b.D = G)
    },
    Sf: function() {
      var a = this.G.Sa;
      if (5 == a.Je) {
        var b = this.nc; - 1 == b && (b = a.Ei);
        return this.c.f.yb.Qp(b)
      }
      return m
    },
    Bf: function(a, b) {
      5 == type && (this.nc = hoAdRunHeader.f.yb.pp(a), a = this.c.f.yb.kf(this.nc), this.Bc = a.Xd(), b != m && (this.B = this.Oc = b.right - b.left, this.A = this.Pc =
        b.bottom - b.top), this.Pa())
    },
    Pp: Z("mc"),
    Br: function(a) {
      this.mc = a;
      this.Pa()
    },
    Xk: function(a, b, c, d, e, g) {
      this.G.Sa != m && this.xa != j && (this.xa = j, this.$ = e, this.ia = this.c.p.ab[c], this.da = d ? this.ia.sb : this.ia.ta, 0 > g ? this.da.Vd(this) : this.da.np(this, g), 5 != this.type && this.Pa())
    },
    mi: function() {
      if (this.G.Sa == m || this.xa == G) return -1;
      this.xa = G;
      var a = this.da.Vc(this);
      this.da.removeChild(this);
      return a
    },
    Vc: function() {
      return this.xa ? this.da.Vc(this) : -1
    },
    gl: function() {
      return this.xa ? this.da.children.length : -1
    },
    wd: function(a) {
      this.xa &&
        this.da.wd(this, a)
    },
    vk: function() {
      this.G.Sa != m && this.$ == G && (this.$ = j, this.Pa())
    },
    Kj: function() {
      this.G.Sa != m && this.$ == j && (this.$ = G)
    },
    gC: function(a) {
      a != this.ga && (this.ga = a, this.Pa())
    },
    Zg: function() {
      this.Bd || this.Pa()
    },
    Pa: function() {
      this.Bd = j;
      this.B = this.A = 1;
      if (this.G.Sa != m) {
        var a = this.G.Sa,
          b, c = q.ti(this.ga, this.gd);
        switch (a.Je) {
          case 1:
            var d, e, g = 0,
              h = 0;
            for (d = c.length - 1; 0 <= d; d--) e = c.charCodeAt(d), b = 0, 45 == e ? b = a.frames[10] : 46 == e ? b = a.frames[12] : 43 == e ? b = a.frames[11] : 101 == e || 69 == e ? b = a.frames[13] : 48 <= e && 57 >=
              e && (b = a.frames[e - 48]), 0 <= b && (b = this.c.f.P.eb(b), g += b.width, h = Math.max(h, b.height));
            this.ba = g;
            this.ca = h;
            this.B = g;
            this.A = h;
            break;
          case 5:
            this.ba = a = this.Ua != m ? this.Ua.measureText(c, this.font) : (new la(this.c.f, 8, 8)).measureText(c, this.font), this.ca = this.Pc / 2 + this.Bc / 2, this.B = a, this.A = this.Bc, this.Ua == m ? this.Ua = new la(this.c.f, this.B, this.A) : (this.B > this.Ua.width || this.A > this.Ua.height) && this.Ua.Un(this.B, this.A), this.Ua.Er(c, q.Co | q.Do, new aa(0, 0, 1E3, 1E3), this.font, this.mc)
        }
      }
    },
    kb: function(a, b, c) {
      if (this.$ &&
        this.Bd) {
        this.globalAlpha = this.alpha;
        this.globalCompositeOperation = this.Aj;
        var d = this.G.Sa,
          b = b + this.o - this.ba - this.c.V + this.ia.x,
          e = c + this.n - this.ca - this.c.Y + this.ia.y,
          c = q.ti(this.ga, this.gd);
        switch (this.type) {
          case 1:
            var g, h;
            for (g = 0; g < c.length; g++) {
              var n = c.charCodeAt(g);
              h = 0;
              45 == n ? h = d.frames[10] : 46 == n || 44 == n ? h = d.frames[12] : 43 == n ? h = d.frames[11] : 69 == n || 101 == n ? h = d.frames[13] : 48 <= n && 57 >= n && (h = d.frames[n - 48]);
              h = this.c.f.P.eb(h);
              a.we(h, b + h.Ga, e + h.va, 0, 1, 1, this.u.Jc, this.u.uc);
              b += h.width
            }
            break;
          case 5:
            this.Ua.kb(a,
              b, e, this.u.Jc, this.u.uc)
        }
      }
    },
    Tl: function(a) {
      this.u.Jc = w.We;
      this.u.uc = a
    }
  });
  yc.prototype = q.extend(new E, {
    N: function() {
      this.nc = -1;
      this.mc = 0;
      this.B = this.A = 1;
      var a = this.G.Sa;
      this.B = this.Oc = a.vh;
      this.A = this.Pc = a.wh;
      this.type = a.Je;
      this.mc = a.dg;
      this.uk = a.bv;
      this.ga = this.c.f.vz()[this.uk - 1];
      this.gd = a.Vj;
      if (5 == this.type) {
        var b = this.nc; - 1 == b && (b = a.Ei);
        this.font = this.c.f.yb.kf(b);
        this.Bc = this.font.Xd()
      }
    },
    qb: X(),
    handle: function() {
      var a = this.c.f.vz()[this.uk - 1];
      a != this.ga && (this.ga = a, this.Pa());
      this.u.handle();
      this.b.D && (this.b.D = G)
    },
    Sf: function() {
      var a = this.G.Sa;
      if (5 == a.Je) {
        var b = this.nc; - 1 == b && (b = a.Ei);
        return this.c.f.yb.Qp(b)
      }
      return m
    },
    Bf: function(a, b) {
      5 == type && (this.nc = hoAdRunHeader.f.yb.pp(a), a = this.c.f.yb.kf(this.nc), this.Bc = a.Xd(), b != m && (this.B = this.Oc = b.right - b.left, this.A = this.Pc = b.bottom - b.top), this.Pa())
    },
    Pp: Z("mc"),
    Br: function(a) {
      this.mc = a;
      this.Pa()
    },
    Xk: function(a, b, c, d, e, g) {
      this.G.Sa != m && this.xa != j && (this.xa = j, this.$ = e, this.ia = this.c.p.ab[c], this.da = d ? this.ia.sb : this.ia.ta, 0 > g ? this.da.Vd(this) :
        this.da.np(this, g), 5 != this.type && this.Pa())
    },
    mi: function() {
      if (this.G.Sa == m || this.xa == G) return -1;
      this.xa = G;
      var a = this.da.Vc(this);
      this.da.removeChild(this);
      return a
    },
    Vc: function() {
      return this.xa ? this.da.Vc(this) : -1
    },
    gl: function() {
      return this.xa ? this.da.children.length : -1
    },
    wd: function(a) {
      this.xa && this.da.wd(this, a)
    },
    vk: function() {
      this.G.Sa != m && this.$ == G && (this.$ = j, this.Pa())
    },
    Kj: function() {
      this.G.Sa != m && this.$ == j && (this.$ = G)
    },
    gC: function(a) {
      a != this.ga && (this.ga = a, this.Pa())
    },
    Zg: function() {
      this.Bd ||
        this.Pa()
    },
    Pa: function() {
      this.Bd = j;
      this.B = this.A = 1;
      if (this.G.Sa != m) {
        var a = this.G.Sa;
        switch (a.Je) {
          case 4:
            if (0 != this.ga) {
              var b = this.c.f.P.eb(a.frames[0]),
                c = this.ga * b.width;
              c <= this.Oc ? (this.B = c, this.A = b.height) : (this.B = this.Oc, this.A = (this.Oc / b.width + this.ga - 1) * b.height);
              break
            }
            this.B = this.A = 1;
            break;
          case 1:
            var d, e, b, g = 0,
              h = 0,
              c = q.ti(this.ga, this.gd);
            for (d = c.length - 1; 0 <= d; d--) b = c.charCodeAt(d), e = 0, 45 == b ? e = a.frames[10] : 46 == b ? e = a.frames[12] : 43 == b ? e = a.frames[11] : 101 == b || 69 == b ? e = a.frames[13] : 48 <= b && 57 >= b && (e =
              a.frames[b - 48]), 0 <= e && (b = this.c.f.P.eb(e), g += b.width, h = Math.max(h, b.height));
            this.ba = g;
            this.ca = h;
            this.B = g;
            this.A = h;
            break;
          case 5:
            c = q.ti(this.ga, this.gd), this.ba = a = this.Ua != m ? this.Ua.measureText(c, this.font) : (new la(this.c.f, 8, 8)).measureText(c, this.font), this.ca = this.Pc / 2 + this.Bc / 2, this.B = a, this.A = this.Bc, this.Ua == m ? this.Ua = new la(this.c.f, this.B, this.A) : (this.B > this.Ua.width || this.A > this.Ua.height) && this.Ua.Un(this.B, this.A), this.Ua.Er(c, q.Co | q.Do, new aa(0, 0, 1E3, 1E3), this.font, this.mc)
        }
      }
    },
    kb: function(a,
      b, c) {
      if (this.$ && this.Bd) {
        this.globalAlpha = this.alpha;
        this.globalCompositeOperation = this.Aj;
        var d, e = this.G.Sa,
          b = b + this.o - this.ba - this.c.V + this.ia.x,
          c = c + this.n - this.ca - this.c.Y + this.ia.y;
        switch (this.type) {
          case 1:
            var g, h;
            d = q.ti(this.ga, this.gd);
            for (g = 0; g < d.length; g++) {
              var n = d.charCodeAt(g);
              h = 0;
              45 == n ? h = e.frames[10] : 46 == n || 44 == n ? h = e.frames[12] : 43 == n ? h = e.frames[11] : 69 == n || 101 == n ? h = e.frames[13] : 48 <= n && 57 >= n && (h = e.frames[n - 48]);
              h = this.c.f.P.eb(h);
              a.we(h, b + h.Ga, c + h.va, 0, 1, 1, this.u.Jc, this.u.uc);
              b += h.width
            }
            break;
          case 4:
            if (0 != this.ga) {
              d = b + this.B;
              g = c + this.A;
              var n = b,
                r = this.ga;
              for (h = this.c.f.P.eb(e.frames[0]); c < g && 0 < r; c += h.height)
                for (b = n; b < d && 0 < r; b += h.width, r -= 1) a.we(h, b + h.Ga, c + h.va, 0, 1, 1, this.u.Jc, this.u.uc)
            }
            break;
          case 5:
            this.Ua.kb(a, b, c, this.u.Jc, this.u.uc)
        }
      }
    },
    Tl: function(a) {
      this.u.Jc = w.We;
      this.u.uc = a
    }
  });
  zc.prototype = q.extend(new E, {
    N: function(a, b) {
      var c = a.Fc;
      this.B = c.ov;
      this.A = c.pv;
      this.Oc = c.ov;
      this.Pc = c.pv;
      this.vc = c.Xj;
      this.lo = 0;
      0 < c.Bb.length && (this.lo = c.Bb[0].xw);
      this.Ql = m;
      this.nc = -1;
      this.$a = 0;
      this.$ = j;
      this.UB = b.Bm;
      0 != (b.Bm & k.as) && 0 < c.Bb.length && (this.Ql = c.Bb[0].Nh);
      var d = this.nc; - 1 == d && 0 < c.Bb.length && (d = c.Bb[0].Wl);
      this.font = this.c.f.yb.kf(d);
      this.Ua = new la(this.c.f, this.B, this.A)
    },
    qb: X(),
    handle: function() {
      this.u.handle();
      this.b.D && (this.b.D = G)
    },
    Sf: function() {
      var a = this.nc; - 1 == a && (a = this.G.Fc.Bb[0].Wl);
      return this.c.f.yb.Qp(a)
    },
    Bf: function(a, b) {
      this.nc = this.c.f.yb.pp(a);
      this.font = this.c.f.yb.kf(this.nc);
      b != m && (this.B = b.right - b.left, this.A = b.bottom - b.top, this.Ua.Un(this.B, this.A));
      this.b.D = j;
      this.Pa()
    },
    Pp: Z("lo"),
    Br: function(a) {
      this.lo = a;
      this.Pa()
    },
    Xk: function(a, b, c, d, e, g) {
      this.xa != j && (this.xa = j, this.$ = e, this.ia = this.c.p.ab[c], this.da = d ? this.ia.sb : this.ia.ta, 0 > g ? this.da.Vd(this) : this.da.np(this, g))
    },
    mi: function() {
      if (this.xa == G) return -1;
      this.xa = G;
      var a = this.da.Vc(this);
      this.da.removeChild(this);
      return a
    },
    Vc: function() {
      return this.xa ? this.da.Vc(this) : -1
    },
    gl: function() {
      return this.xa ? this.da.children.length : -1
    },
    wd: function(a) {
      this.xa && this.da.wd(this, a)
    },
    vk: function() {
      this.$ == G && (this.$ = j)
    },
    Kj: function() {
      this.$ ==
        j && (this.$ = G)
    },
    ZP: function(a) {
      -1 > a && (a = -1);
      a >= this.vc && (a = this.vc - 1);
      if (a == this.$a) return G;
      this.$a = a;
      0 <= a && this.tJ(this.G.Fc.Bb[this.$a].Nh);
      this.Pa();
      return 0 != (this.u.L & w.Ug) ? G : j
    },
    tJ: function(a) {
      this.Ql = a;
      this.Pa()
    },
    Zg: function() {
      this.Bd || this.Pa()
    },
    Pa: function() {
      this.Bd = j;
      var a = this.G.Fc,
        b = a.Bb[0].wo;
      this.ca = this.ba = 0;
      this.rect.left = 0;
      this.rect.top = 0;
      this.rect.right = this.B;
      this.rect.bottom = this.A;
      0 <= this.$a ? a = a.Bb[this.$a].Nh : (a = this.Ql, a == m && (a = ""));
      this.Ua.Er(a, b & (q.Co | q.ij | q.ds | q.Do | q.bs | q.jj |
        q.HD), this.rect, this.font, this.lo)
    },
    Tl: function(a) {
      this.u.Jc = w.We;
      this.u.uc = a
    },
    kb: function(a, b, c) {
      this.$ && this.Bd && this.Ua.kb(a, b + this.o - this.c.V + this.ia.x, c + this.n - this.c.Y + this.ia.y, this.u.Jc, this.u.uc)
    }
  });
  Ac.prototype = q.extend(new E, {
    N: X(),
    qb: X(),
    handle: function() {
      this.c.pause();
      this.c.Xq = this;
      this.c.p.ab[this.c.p.Ec - 1].ta.Vd(this);
      this.TF()
    },
    Gp: function() {
      this.c.p.ab[this.c.p.Ec - 1].ta.removeChild(this)
    },
    ZG: function() {
      var a;
      a = this.c.f.qf;
      var b = this.c.f.rf;
      0 == this.Bj ? this.c.f.Cc[p.le] && (a = this.yz(a,
        b), 0 != a && (this.Bj = a)) : this.c.f.Cc[p.le] || (this.yz(a, b) == this.Bj ? (this.c.l.sc = this.Bj, this.c.l.Wc(this, -5439484), 0 != (this.G.Fc.Bb[this.Bj].wo & pa.uF) ? this.c.l.Wc(this, -5308412) : this.c.l.Wc(this, -5373948), this.Gp(), this.c.Xq = m, this.c.xe(), this.c.Mp(this.Ob, j)) : this.Bj = 0)
    },
    yz: function(a, b) {
      var c;
      if (this.ud != m)
        for (c = 1; c < this.ud.length; c++)
          if (a >= this.ud[c].left && a < this.ud[c].right && b > this.ud[c].top && b < this.ud[c].bottom) return c;
      return 0
    },
    cy: function(a, b, c) {
      var d, e;
      c ? (d = 8421504, e = 16777215) : (e = 8421504, d =
        16777215);
      a.fr(b.left, b.top, b.right - b.left, b.bottom - b.top, 0, 1);
      var g = Array(3),
        h;
      for (h = 0; 3 > h; h++) g[h] = new ta;
      g[0].x = b.right - 1;
      c == G && (g[0].x -= 1);
      g[0].y = b.top + 1;
      g[1].y = b.top + 1;
      g[1].x = b.left + 1;
      g[2].x = b.left + 1;
      g[2].y = b.bottom;
      c == G && (g[2].y -= 1);
      a.Zc(g[0].x, g[0].y, g[1].x, g[1].y, d, 1);
      a.Zc(g[1].x, g[1].y, g[2].x, g[2].y, d, 1);
      c == G && (g[0].x -= 1);
      g[0].y += 1;
      g[1].x += 1;
      g[1].y += 1;
      g[2].x += 1;
      c == G && (g[2].y -= 1);
      a.Zc(g[0].x, g[0].y, g[1].x, g[1].y, d, 1);
      a.Zc(g[1].x, g[1].y, g[2].x, g[2].y, d, 1);
      c == G && (g[0].x += 2, g[1].x = b.right - 1,
        g[1].y = b.bottom - 1, g[2].y = b.bottom - 1, g[2].x -= 1, a.Zc(g[0].x, g[0].y, g[1].x, g[1].y, e, 1), a.Zc(g[1].x, g[1].y, g[2].x, g[2].y, e, 1), g[0].x -= 1, g[0].y += 1, g[1].x -= 1, g[1].y -= 1, g[2].x += 1, g[2].y -= 1, a.Zc(g[0].x, g[0].y, g[1].x, g[1].y, e, 1), a.Zc(g[1].x, g[1].y, g[2].x, g[2].y, e, 1))
    },
    LI: function(a, b, c) {
      var d = new aa;
      d.uy(this.ud[b]);
      this.cy(a, this.ud[b], c);
      d.left += 2;
      d.top += 2;
      d.right -= 4;
      d.bottom -= 4;
      c && (d.left += 2, d.top += 2);
      this.zg[b].kb(a, (d.left + d.right) / 2 - this.zg[b].width / 2, (d.top + d.bottom) / 2 - this.zg[b].height / 2, 0, 0)
    },
    TF: function() {
      this.vq =
        new la(this.c.f, 8, 8);
      var a = this.G.Fc,
        b = this.c,
        c = a.Bb[1],
        d = c.xw,
        e = 0 != (c.wo & pa.Gx),
        g = b.f.yb.kf(c.Wl);
      this.Tr = Math.floor(3 * this.vq.measureText("X", g) / 2);
      this.si = 4;
      this.nd = 64;
      var h;
      for (h = 1; h < a.Bb.length; h++) c = a.Bb[h], 0 < c.Nh.length && (c = this.vq.measureText(c.Nh, g), this.nd = Math.max(this.nd, c + 2 * this.Tr + 4), this.si = Math.max(this.si, Math.floor(3 * g.Xd() / 2)));
      this.Xp = Math.max(Math.floor(this.si / 4), 2);
      this.nd += 2 * this.Tr + 4;
      var n = new aa;
      for (h = 1; h < a.Bb.length; h++) c = a.Bb[h], this.zg[h] = new la(b.f, this.nd, this.si), n.right =
        this.nd, n.bottom = this.si, this.zg[h].uq(c.Nh, q.ij | q.jj, n, d, g, e ? 1 : 0, 16777215);
      a = a.Bb[0];
      e = 0 != (a.wo & pa.Gx);
      g = b.f.yb.kf(a.Wl);
      h = Math.floor(3 * this.vq.measureText("X", g) / 2);
      c = this.vq.measureText(a.Nh, g);
      this.fn = Math.floor(3 * g.Xd() / 2);
      this.nd = Math.max(this.nd, c + 2 * h + 4);
      this.nd > b.f.ea ? this.nd = b.f.ea : this.nd > b.p.Xc && (this.nd = b.p.Xc);
      n.right = this.nd;
      n.bottom = this.fn;
      this.zg[0] = new la(b.f, this.nd, this.fn);
      this.zg[0].uq(a.Nh, q.ij | q.jj, n, d, g, e ? 1 : 0, 16777215)
    },
    kb: function(a) {
      var b = this.G.Fc,
        c = this.c,
        d = this.o - c.V,
        c = this.n - c.Y,
        e = new aa;
      e.left = d;
      e.top = c;
      var g = this.fn + 1 + (this.si + this.Xp) * (b.Bb.length - 1) + this.Xp + 4;
      e.right = d + this.nd;
      e.bottom = c + g;
      a.kc(e.left, e.top, e.right - e.left, e.bottom - e.top, 12632256, 0, 0);
      this.cy(a, e, G);
      e.left += 2;
      e.top += 2;
      e.right -= 2;
      e.bottom = e.top + this.fn;
      this.zg[0].kb(a, (e.left + e.right) / 2 - this.zg[0].width / 2, (e.top + e.bottom) / 2 - this.zg[0].height / 2, 0, 0);
      e.top = e.bottom;
      a.Zc(e.left, e.top, e.right, e.bottom, 8421504, 1, 0, 0);
      e.top += 1;
      e.bottom += 1;
      a.Zc(e.left, e.top, e.right, e.bottom, 16777215, 1, 0, 0);
      if (this.ud ==
        m) {
        this.ud = Array(b.Bb.length);
        for (i = 1; i < b.Bb.length; i++) this.ud[i] = new aa, this.ud[i].left = d + 2 + this.Tr, this.ud[i].right = d + this.nd - 2 - this.Tr, this.ud[i].top = c + 2 + this.fn + 1 + this.Xp + (this.si + this.Xp) * (i - 1), this.ud[i].bottom = this.ud[i].top + this.si
      }
      for (i = 1; i < b.Bb.length; i++) this.LI(a, i, this.Bj == i)
    }
  });
  Bc.prototype = q.extend(new E, {
    N: function(a, b) {
      this.Ra.N(this);
      var c = this.c.f.file.Of(a.YA);
      this.xv = a.$A;
      this.Ra.Et(c, b, a.aB)
    },
    at: function(a, b, c, d, e) {
      this.ia = this.c.p.ab[d];
      this.$ = e;
      this.xa != j && (this.xa = j, this.da =
        this.ia.ta, this.da.Vd(this))
    },
    Xk: function(a, b, c, d, e) {
      this.ia = this.c.p.ab[c];
      this.$ = e;
      this.xa != j && (this.xa = j, this.da = d ? this.ia.sb : this.ia.ta, this.da.Vd(this))
    },
    mi: function() {
      return this.da.removeChild(this)
    },
    handle: function() {
      0 != (this.Ba & 512) ? this.u.handle() : 16 == (this.Ba & 48) || 48 == (this.Ba & 48) ? this.q.move() : 32 == (this.Ba & 48) && this.ja.Be();
      var a = 0;
      this.Xu == G && (a = this.Ra.Tp());
      0 != (a & Ka.Cx) && (this.Xu = j);
      this.b != m && this.b.D && (this.b.D = G)
    },
    wj: function() {
      this.Ra.wj()
    },
    vy: X(),
    kb: X(),
    qb: function(a) {
      this.Ra.Ly(a)
    },
    HG: $(m),
    bl: function(a, b) {
      return this.Ra.bl(a, b)
    },
    action: function(a, b) {
      this.Ra.action(a, b)
    },
    Nm: function(a) {
      return this.Ra.Nm(a)
    },
    Tl: function(a) {
      this.u.Jc = w.We;
      this.u.uc = a
    },
    RP: X(),
    vk: function() {
      this.$ = j
    },
    Kj: function() {
      this.$ = G
    },
    wd: function(a) {
      this.Ra.wd(a)
    },
    Vc: function() {
      return this.da.Vc(this)
    },
    gl: function() {
      return this.da.children.length
    },
    wd: function(a) {
      a >= this.da.children.length && (a = this.da.children.length);
      0 > a && (a = 0);
      this.da.wd(this, a)
    },
    kI: X(),
    VF: X(),
    Qm: function() {
      this.Ra.Qm()
    },
    Bu: function(a) {
      this.c.f.P.Bu(a)
    },
    dP: function(a) {
      return this.c.f.P.eb(a)
    },
    UO: function() {
      return this.c.f
    },
    jP: Z("o"),
    lP: Z("n"),
    iP: Z("B"),
    Xd: Z("A"),
    Gr: function(a) {
      this.q != m ? this.q.Z.ac(a) : (this.o = a, this.b != m && (this.b.D = j, this.b.Ca = j))
    },
    Hr: function(a) {
      this.q != m ? this.q.Z.bc(a) : (this.n = a, this.b != m && (this.b.D = j, this.b.Ca = j))
    },
    po: db("B"),
    oo: db("A"),
    Sl: function(a, b) {
      this.B = a;
      this.A = b
    },
    IP: function() {
      this.Xu = G
    },
    Zt: function(a, b) {
      if (0 == this.c.Af) {
        var c = this.c.l.sc;
        this.c.l.sc = b;
        a = -(a + P.Vh + 1) << 16;
        a |= this.qa & 65535;
        this.c.l.Wc(this, a);
        this.c.l.sc =
          c
      }
    },
    DP: function(a, b) {
      0 == this.c.Af && (a = -(a + P.Vh + 1) << 16, a |= this.qa & 65535, this.c.l.tI(1, a, b, this, this.Db))
    },
    pause: function() {
      this.c.pause()
    },
    xe: function() {
      this.c.xe()
    },
    JP: X(),
    GO: function() {
      this.c.bh(this.Ob)
    },
    vg: function(a, b) {
      this.q != m ? (this.q.Z.ac(a), this.q.Z.bc(b)) : (this.o = a, this.n = b, this.b != m && (this.b.D = j, this.b.Ca = j))
    },
    YO: Z("xv"),
    QP: db("xv"),
    mp: function(a, b, c, d, e) {
      this.c.mp(a, b, c, e, d, j)
    },
    WO: function() {
      return this.c.nk
    },
    MG: function() {
      this.c.Qe++;
      return this.c.getExpression()
    },
    XO: function() {
      return this.c.l.sc
    },
    dy: function(a, b, c) {
      return 0 != (a.Ba & A.Tg) && a.b.vd == R.Rk ? a.q.Z.dy(b, c) : 0
    },
    ZO: function() {
      this.Zu = this.Cn = 0;
      return this.TG()
    },
    TG: function() {
      if (this.Zu < this.c.Za) {
        for (; this.c.w[this.Cn] == m;) this.Cn++;
        var a = this.c.w[this.Cn];
        this.Zu++;
        this.Cn++;
        return a
      }
      return m
    },
    fP: function(a) {
      var b = 0,
        c;
      for (c = 0; c < this.c.Za; c++) {
        for (; this.c.w[b] == m;) b++;
        var d = this.c.w[b];
        b++;
        if ((d.cn << 16 | d.Ob & 65535) == a) return d
      }
      return m
    },
    dz: function(a) {
      return this.c.dz(a)
    },
    ez: function(a) {
      return this.c.ez(a)
    },
    gI: function(a) {
      return hoAdRunHeader.f.gI(a)
    },
    qO: X()
  });
  Wa.hN = 22;
  Wa.create = function(a) {
    var b = a.file.U,
      c = m,
      d = a.file.k(),
      e = a.file.k();
    switch (e) {
      case 1:
        c = new Qd(a);
        break;
      case 2:
        c = new Rd(a);
        break;
      case 3:
        c = new ea(a);
        break;
      case 4:
        c = new ea(a);
        break;
      case 5:
        c = new Ja(a);
        break;
      case 6:
        c = new tb(a);
        break;
      case 9:
        c = new sb(a);
        break;
      case 10:
        c = new ea(a);
        break;
      case 11:
        c = new ea(a);
        break;
      case 12:
        c = new ea(a);
        break;
      case 13:
        c = new Nd(a);
        break;
      case 14:
        c = new Ec(a);
        break;
      case 15:
        c = new qa(a);
        break;
      case 16:
        c = new Fc(a);
        break;
      case 17:
        c = new ea(a);
        break;
      case 18:
        c = new Gc(a);
        break;
      case 19:
        c = new Sd(a);
        break;
      case 21:
        c = new sb(a);
        break;
      case 22:
        c = new qa(a);
        break;
      case 23:
        c = new qa(a);
        break;
      case 24:
        c = new Md(a);
        break;
      case 25:
        c = new Ja(a);
        break;
      case 26:
        c = new ea(a);
        break;
      case 27:
        c = new qa(a);
        break;
      case 28:
        c = new qa(a);
        break;
      case 29:
        c = new Ja(a);
        break;
      case 31:
        c = new ea(a);
        break;
      case 32:
        c = new ea(a);
        break;
      case 34:
        c = new Ja(a);
        break;
      case 35:
        c = new tb(a);
        break;
      case 36:
        c = new tb(a);
        break;
      case 37:
        c = new ea(a);
        break;
      case 38:
        c = new ma(a);
        break;
      case 39:
        c = new Pd(a);
        break;
      case 40:
        c = new Xa(a);
        break;
      case 41:
        c =
          new Xa(a);
        break;
      case 42:
        c = new Ld(a);
        break;
      case 43:
        c = new ea(a);
        break;
      case 44:
        c = new Ec(a);
        break;
      case 45:
        c = new qa(a);
        break;
      case 46:
        c = new qa(a);
        break;
      case 47:
        c = new Dc(a);
        break;
      case 48:
        c = new Ja(a);
        break;
      case 49:
        c = new ea(a);
        break;
      case 50:
        c = new ea(a);
        break;
      case 51:
        c = new Dc(a);
        break;
      case 52:
        c = new qa(a);
        break;
      case 53:
        c = new qa(a);
        break;
      case 54:
        c = new qa(a);
        break;
      case 55:
        c = new Od(a);
        break;
      case 56:
        c = new Ja(a);
        break;
      case 57:
        c = new ea(a);
        break;
      case 58:
        c = new ea(a);
        break;
      case 59:
        c = new qa(a);
        break;
      case 60:
        c = new ea(a);
        break;
      case 61:
        c = new ea(a);
        break;
      case 62:
        c = new qa(a);
        break;
      case 63:
        c = new Xa(a);
        break;
      case 64:
        c = new Xa(a);
        break;
      case 67:
        c = new ea(a)
    }
    c.code = e;
    a.file.seek(b + d);
    return c
  };
  ma.qE = 1;
  ma.KL = 2;
  ma.ss = 4;
  ma.rs = 8;
  ma.LL = 16;
  na.sD = 1;
  na.rD = 2;
  na.tD = 4;
  na.Rw = 8;
  na.prototype = {
    EB: function(a, b, c) {
      c.jn = -1;
      if (-1 == this.Mn) {
        0 != b && (c.dir = -1, 0 == (this.bk & na.Rw) && (c.dir = a.Ez(this.Nq)));
        c.x = this.Qq;
        c.y = this.Rq;
        var d = this.uv;
        d > a.p.Ec - 1 && (d = a.p.Ec - 1);
        c.jn = d;
        c.it = G
      } else {
        a.l.Xn = G;
        d = a.l.fu(this.Nn);
        c.it = a.l.rc;
        if (d == m) return G;
        c.x = d.o;
        c.y = d.n;
        c.jn = d.Fd;
        if (0 != (this.bk & na.rD) && 0 != (d.Ba & A.oj) && 0 <= d.b.Da) {
          var e;
          e = d.b.Xa;
          a.Jo(d) != m && (e = 0);
          e = a.f.P.Ij(d.b.Da, e, d.b.tb, d.b.ub);
          c.x += e.Zl - e.Ga;
          c.y += e.am - e.va
        }
        if (0 != (this.bk & na.sD)) {
          e = this.tv + d.c.Mb(d) & 31;
          var g = I.KG(this.Oq, e);
          c.x += I.JG(this.Oq, e);
          c.y += g
        } else c.x += this.Qq, c.y += this.Rq;
        0 != (b & 1) && (c.dir = 0 != (this.bk & na.Rw) ? -1 : 0 != (this.bk & na.tD) ? d.c.Mb(d) : a.Ez(this.Nq))
      }
      return 0 != (b & 2) && (c.x < a.$n || c.x > a.Zn || c.y < a.bo || c.y > a.ao) ? G : j
    }
  };
  Fc.prototype = q.extend(new na, {});
  sb.prototype = q.extend(new na, {});
  Gc.prototype = q.extend(new na, {});
  Ya.prototype = {
    kc: X(),
    Sv: X(),
    Rv: X(),
    IB: X(),
    we: X(),
    Ri: X(),
    JB: X(),
    KB: X(),
    Zc: X(),
    fr: X(),
    HB: X(),
    vB: function(a, b, c, d) {
      var e = this.yj[this.yj.length - 1];
      e && (a < e.x && (a = e.x), b < e.y && (b = e.y), a + c > e.x + e.Rr && (c = e.x + e.Rr - a), b + d > e.y + e.Sp && (d = e.y + e.Sp - b));
      a = {
        x: a,
        y: b,
        Rr: c,
        Sp: d
      };
      this.yj.push(a);
      return a
    },
    oB: function() {
      this.yj.pop()
    }
  };
  Ea.prototype = q.extend(new Ya, {
    Tv: function(a) {
      this.kv = this.pw = a;
      this.wa.imageSmoothingEnabled = a;
      this.wa.webkitImageSmoothingEnabled = a;
      this.wa.mozImageSmoothingEnabled =
        a;
      this.jv = -1;
      this.Se(0, 0)
    },
    cC: function(a, b) {
      this.wa.scale(a, b)
    },
    wt: function(a, b, c, d) {
      this.wa.clearRect(a, b, c, d)
    },
    kc: function(a, b, c, d, e, g, h) {
      var n = this.wa;
      this.Se(g, h);
      n.fillStyle = q.Ed(e);
      n.fillRect(a, b, c, d)
    },
    Sv: function(a, b, c, d, e, g, h) {
      var n = this.wa;
      this.Se(g, h);
      n.fillStyle = q.Ed(e);
      q.Cp(n, a, b, c, d);
      n.fill()
    },
    Rv: function(a, b, c, d, e, g, h, n, r) {
      if (e == g) return this.kc(a, b, c, d, e, n, r);
      var k = this.wa;
      this.Se(n, r);
      this.ry(a, b, c, d, h, e, g);
      k.fillRect(a, b, c, d)
    },
    IB: function(a, b, c, d, e, g, h, n, r) {
      if (e == g) return this.Sv(a,
        b, c, d, e, n, r);
      var k = this.wa;
      this.Se(n, r);
      this.ry(a, b, c, d, h, e, g);
      q.Cp(k, a, b, c, d);
      this.wa.fill()
    },
    we: function(a, b, c, d, e, g, h, n) {
      var r = this.wa,
        k = b - a.Ga,
        p = c - a.va;
      this.Se(h, n);
      0 == d && 1 == e && 1 == g ? 0 == a.Ab ? a.zb != m && r.drawImage(a.zb, k, p) : r.drawImage(a.g.P.Hb[a.Ab], a.Ld, a.Md, a.width, a.height, k, p, a.width, a.height) : (r.save(), r.translate(b, c), 0 != d && r.rotate(0.0174532925 * -d), r.scale(Math.max(0.001, e), Math.max(0.001, g)), r.translate(-a.Ga, -a.va), 0 == a.Ab ? a.zb != m && r.drawImage(a.zb, 0, 0, a.width, a.height, 0, 0, a.width, a.height) :
        r.drawImage(a.g.P.Hb[a.Ab], a.Ld, a.Md, a.width, a.height, 0, 0, a.width, a.height), r.restore())
    },
    Ri: function(a, b, c, d, e, g, h) {
      this.Se(g, h);
      this.wa.drawImage(a, b, c, d, e)
    },
    JB: function(a, b, c, d, e, g, h) {
      var n = this.wa;
      this.Se(g, h);
      n.save();
      n.beginPath();
      n.moveTo(b, c);
      n.lineTo(b + d, c);
      n.lineTo(b + d, c + e);
      n.lineTo(b, c + e);
      n.lineTo(b, c);
      n.clip();
      var g = a.width,
        h = a.height,
        d = Math.floor(d / g) + 1,
        e = Math.floor(e / h) + 1,
        r, k;
      for (r = 0; r < d; r++)
        for (k = 0; k < e; k++) 0 == a.Ab ? a.zb != m && n.drawImage(a.zb, b + r * g, c + k * h) : n.drawImage(a.g.P.Hb[a.Ab], a.Ld,
          a.Md, a.width, a.height, b + r * g, c + k * h, a.width, a.height);
      n.restore()
    },
    KB: function(a, b, c, d, e, g, h) {
      a instanceof ga || f(Error("renderPatternEllipse: bad image type: " + typeof a));
      var n = this.wa;
      this.Se(g, h);
      0 == a.Ab ? a.zb != m && (n.fillStyle = n.createPattern(a.zb, "repeat")) : (a.pattern || (a.pattern = document.createElement("canvas"), a.pattern.width = a.width, a.pattern.height = a.height, n = a.pattern.getContext("2d"), n.drawImage(a.g.P.Hb[a.Ab], a.Ld, a.Md, a.width, a.height, 0, 0, a.width, a.height)), n.fillStyle = n.createPattern(a.pattern,
        "repeat"));
      q.Cp(n, b, c, d, e);
      this.wa.fill()
    },
    Zc: function(a, b, c, d, e, g, h, n) {
      var r = this.wa;
      this.Se(h, n);
      r.strokeStyle = q.Ed(e);
      r.lineCap = "round";
      r.lineWidth = g;
      r.beginPath();
      r.moveTo(a, b);
      r.lineTo(c, d);
      r.closePath();
      r.stroke()
    },
    fr: function(a, b, c, d, e, g, h, n) {
      var r = this.wa;
      this.Se(h, n);
      r.strokeStyle = q.Ed(e);
      r.lineWidth = g;
      r.strokeRect(a, b, c, d)
    },
    HB: function(a, b, c, d, e, g, h, n) {
      var r = this.wa;
      this.Se(h, n);
      r.lineWidth = e;
      r.strokeStyle = q.Ed(g);
      q.Cp(r, a, b, c, d);
      this.wa.stroke()
    },
    clip: function(a, b, c, d) {
      var e = this.wa;
      e.save();
      e.beginPath();
      e.rect(a, b, c, d);
      e.clip()
    },
    vJ: function() {
      this.wa.restore()
    },
    vB: function() {
      var a = this.wa,
        b = Ya.prototype.vB.apply(this, arguments);
      a.beginPath();
      a.rect(b.x, b.y, b.Rr, b.Sp);
      a.clip()
    },
    oB: function() {
      var a = this.wa;
      Ya.prototype.oB.apply(this, arguments);
      if (0 < this.yj.length) {
        var b = this.yj[this.yj.length - 1];
        a.beginPath();
        a.rect(b.x, b.y, b.Rr, b.Sp);
        a.clip()
      } else a.KP()
    },
    Se: function(a, b) {
      var c = this.wa;
      if ("undefined" == typeof a) c.globalAlpha = 1, c.Aj = "source-over";
      else if (!(a == this.jv && b == this.bI)) {
        this.jv =
          a;
        this.bI = b;
        var d = a & w.XC,
          e = 0 != (a & w.Iw) | this.pw;
        e != this.kv && (this.kv = e, c.imageSmoothingEnabled = e, c.webkitImageSmoothingEnabled = e, c.mozImageSmoothingEnabled = e);
        c.globalAlpha = 0 != (a & w.YC) ? (b >>> 24 & 255) / 255 : d == w.We ? (128 - b) / 128 : 1;
        switch (d) {
          case w.WC:
            c.Aj = "lighter";
            break;
          case w.ZC:
            c.Aj = "xor";
            break;
          default:
            c.Aj = "source-over"
        }
      }
    },
    ry: function(a, b, c, d, e, g, h) {
      a = e ? this.wa.createLinearGradient(a, b, a, b + d) : this.wa.createLinearGradient(a, b, a + c, b);
      a.addColorStop(0, q.Ed(g));
      a.addColorStop(1, q.Ed(h));
      this.wa.fillStyle =
        a
    }
  });
  va.kp = 1;
  va.prototype = {
    load: function(a) {
      var b = a.U;
      a.W(4);
      this.AC = a.m();
      this.zC = a.m();
      this.vo = a.m();
      this.uo = a.Xb();
      var c = a.m(),
        d = a.m();
      a.seek(b + c);
      this.Gm = a.Ya();
      this.Gm = this.Gm.substr(0, this.Gm.indexOf("."));
      this.Fy = b + d
    }
  };
  Hc.prototype = {
    Cz: $(m)
  };
  t.Lo = 0;
  t.gp = 1;
  t.Fx = 2;
  t.Jw = 3;
  t.Zr = 0;
  t.us = 1;
  t.Ow = 2;
  t.Ex = 3;
  t.bi = 0;
  t.ci = 1;
  t.ej = 2;
  t.fj = 3;
  t.Nw = 4;
  t.Tw = 0;
  t.FD = 1;
  t.Vs = 1;
  t.lp = 2;
  t.prototype = {
    start: function(a, b, c, d) {
      this.Ky = b;
      this.ah = this.Ky.getContext("2d");
      this.K = c;
      this.j = d;
      this.nq = (new Date).getTime();
      this.h =
        a.zC;
      0 == this.h && (this.h = 1);
      this.nn = this.nq;
      this.on = this.nq + this.h;
      this.fa = this.aA = j
    },
    finish: X(),
    $p: function() {
      if (this.aA) {
        var a = new Date;
        return a.getTime() >= this.on ? j : a.getTime() >= this.on
      }
      return j
    },
    gc: function() {
      this.nn = (new Date).getTime();
      this.nn > this.on && (this.nn = this.on);
      return this.nn - this.nq
    },
    r: function(a, b, c, d, e, g, h) {
      this.pq && (this.ah.globalCompositeOperation = "source-atop");
      1 == arguments.length ? this.ah.drawImage(a, 0, 0) : 0 < g && 0 < h && this.ah.drawImage(a, d, e, g, h, b, c, g, h)
    },
    O: function(a, b, c, d, e, g, h,
      n, r) {
      this.pq && (this.ah.globalCompositeOperation = "source-atop");
      0 < d && (0 < e && 0 < n && 0 < r) && this.ah.drawImage(a, g, h, n, r, b, c, d, e)
    },
    wb: X(),
    end: X(),
    N: X()
  };
  Ic.prototype = {
    mJ: function(a, b) {
      var c = a.G.vl;
      b && (c = a.G.Dn);
      var d = m,
        e;
      if (0 != (a.Ba & A.oj)) {
        var g = this.g.P.eb(a.b.Da),
          d = document.createElement("canvas");
        d.width = g.width;
        d.height = g.height;
        e = d.getContext("2d");
        0 == g.Ab ? e.drawImage(g.zb, 0, 0) : e.drawImage(this.g.P.Hb[g.Ab], g.Ld, g.Md, g.width, g.height, 0, 0, g.width, g.height)
      } else 32 <= a.qa && (d = document.createElement("canvas"),
        d.width = a.B, d.height = a.A, new StandardRendered(d), d = m);
      if (d == m) return m;
      e = d.width;
      var h = d.height,
        g = document.createElement("canvas");
      g.width = e;
      g.height = h;
      var n = document.createElement("canvas");
      n.width = e;
      n.height = h;
      var r = document.createElement("canvas");
      r.width = e;
      r.height = h;
      b ? (e = n.getContext("2d"), e.drawImage(d, 0, 0), e = g.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.vo & va.kp) && this.ty(r, d, c.uo)) : (e = r.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.vo & va.kp) && this.ty(n, d, c.uo));
      c = this.cl(c, g, n, r);
      c != m && (d = 0, 0 !=
        (a.M & E.Yh) ? (c.pq = j, d |= t.lp) : (c.pq = G, d |= t.Vs), a.Bk = g, c.wb(d));
      return c
    },
    ty: function(a, b, c) {
      a = a.getContext("2d");
      a.drawImage(b, 0, 0);
      var d = b.width,
        b = b.height,
        e = a.getImageData(0, 0, d, b),
        g, h = (c & 16711680) >> 16,
        n = (c & 65280) >> 8,
        r = c & 255;
      for (g = 0; g < b; g++)
        for (c = 0; c < d; c++) 0 != e.data[4 * (g * d + c) + 3] && (e.data[4 * (g * d + c)] = h, e.data[4 * (g * d + c) + 1] = n, e.data[4 * (g * d + c) + 2] = r);
      a.putImageData(e, 0, 0)
    },
    cl: function(a, b, c, d) {
      var e = m;
      "cctrans" == a.Gm.toLowerCase() && (e = new Oa);
      return e != m ? (e = e.Cz(a), this.g.file.seek(a.Fy), e.pq = G, e.N(a, this.g.file,
        b, c, d), e) : m
    }
  };
  Oa.Mz = "BAND SE00 SE10 SE12 DOOR SE03 MOSA SE05 SE06 SCRL SE01 SE07 SE09 SE13 SE08 SE02 ZIGZ SE04 ZOOM SE11 FADE".split(" ");
  Oa.prototype = q.extend(new Hc, {
    Cz: function(a) {
      for (var b = a.AC, a = "" + String.fromCharCode(b & 255), b = b >> 8, a = a + String.fromCharCode(b & 255), b = b >> 8, a = a + String.fromCharCode(b & 255), a = a + String.fromCharCode(b >> 8 & 255), b = 0; b < Oa.Mz.length && a != Oa.Mz[b]; b++);
      a = m;
      switch (b) {
        case 0:
          a = new Lc;
          break;
        case 1:
          a = new Jc;
          break;
        case 2:
          a = new Kc;
          break;
        case 3:
          a = new Mc;
          break;
        case 4:
          a = new Nc;
          break;
        case 5:
          a = new Pc;
          break;
        case 6:
          a = new Qc;
          break;
        case 7:
          a = new Rc;
          break;
        case 8:
          a = new Sc;
          break;
        case 9:
          a = new Tc;
          break;
        case 10:
          a = new Uc;
          break;
        case 11:
          a = new Vc;
          break;
        case 12:
          a = new Wc;
          break;
        case 13:
          a = new Xc;
          break;
        case 14:
          a = new Yc;
          break;
        case 15:
          a = new Zc;
          break;
        case 16:
          a = new $c;
          break;
        case 17:
          a = new ad;
          break;
        case 18:
          a = new bd;
          break;
        case 19:
          a = new cd;
          break;
        case 20:
          a = new Oc
      }
      return a
    }
  });
  Jc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.Na = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width,
        this.d = this.j.height, this.bA = 8 != this.Na ? this.Na : Math.floor(8 * Math.random()));
      var a = this.gc();
      if (1 < a / this.h) this.r(this.j);
      else {
        var b, c;
        switch (this.bA) {
          case 0:
            b = this.e / 3 * a / this.h;
            c = this.d;
            this.r(this.j, 0, 0, this.e / 3 - b, 0, b, c);
            this.r(this.j, this.e - b, 0, 2 * this.e / 3, 0, b, c);
            b = this.e / 3;
            c = this.d * a / this.h;
            this.r(this.j, b, 0, b, this.d - c, b, c);
            break;
          case 1:
            b = this.e / 3 * a / this.h;
            c = this.d;
            this.r(this.j, 0, 0, this.e / 3 - b, 0, b, c);
            this.r(this.j, this.e - b, 0, 2 * this.e / 3, 0, b, c);
            b = this.e / 3;
            c = this.d * a / this.h;
            this.r(this.j, b, this.d -
              c, b, 0, b, c);
            break;
          case 2:
            b = this.e / 3 * a / this.h;
            c = this.d;
            this.r(this.j, 0, 0, this.e / 3 - b, 0, b, c);
            this.r(this.j, this.e - b, 0, 2 * this.e / 3, 0, b, c);
            b = this.e / 3;
            c = this.d * a / this.h;
            this.r(this.j, b, 0, b, 0, b, c);
            break;
          case 3:
            b = this.e / 3 * a / this.h;
            c = this.d;
            this.r(this.j, 0, 0, this.e / 3 - b, 0, b, c);
            this.r(this.j, this.e - b, 0, 2 * this.e / 3, 0, b, c);
            b = this.e / 3;
            c = this.d * a / this.h;
            this.r(this.j, b, this.d - c, b, this.d - c, b, c);
            break;
          case 4:
            b = this.e / 3 * a / this.h;
            c = this.d;
            this.r(this.j, 0, 0, this.e / 3 - b, 0, b, c);
            this.r(this.j, this.e - b, 0, 2 * this.e / 3, 0, b, c);
            b =
              this.e / 3;
            c = this.d / 2 * a / this.h;
            this.r(this.j, b, 0, b, this.d / 2 - c, b, c);
            this.r(this.j, b, this.d - c, b, this.d / 2, b, c);
            break;
          case 5:
            b = this.e / 3 * a / this.h;
            c = this.d;
            this.r(this.j, 0, 0, this.e / 3 - b, 0, b, c);
            this.r(this.j, this.e - b, 0, 2 * this.e / 3, 0, b, c);
            b = this.e / 3;
            c = this.d / 2 * a / this.h;
            this.r(this.j, b, 0, b, 0, b, c);
            this.r(this.j, b, this.d - c, b, this.d - c, b, c);
            break;
          case 6:
            b = this.e / 3;
            c = this.d * a / this.h;
            this.r(this.j, 0, this.d - c, 0, 0, b, c);
            this.r(this.j, b, 0, b, this.d - c, b, c);
            this.r(this.j, 2 * b, this.d - c, 2 * b, 0, b, c);
            break;
          case 7:
            b = this.e / 7;
            c = this.d *
              a / this.h;
            this.r(this.j, 0, this.d - c, 0, 0, b, c);
            this.r(this.j, b, 0, b, this.d - c, b, c);
            this.r(this.j, 2 * b, this.d - c, 2 * b, 0, b, c);
            this.r(this.j, 3 * b, 0, 3 * b, this.d - c, b, c);
            this.r(this.j, 4 * b, this.d - c, 4 * b, 0, b, c);
            this.r(this.j, 5 * b, 0, 5 * b, this.d - c, b, c);
            this.r(this.j, 6 * b, this.d - c, 6 * b, 0, 2 * b, c);
            break;
          default:
            this.r(this.j)
        }
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Kc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.Na = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height);
      var a = this.gc();
      if (1 < a / this.h) this.r(this.j);
      else {
        var b, c;
        this.r(this.j);
        switch (this.Na) {
          case 0:
            b = this.e / 2 * a / this.h;
            b = this.e / 2 - b;
            c = this.d / 2 * a / this.h;
            c = this.d / 2 - c;
            this.O(this.K, 0, 0, b, c, 0, 0, this.e / 2, this.d / 2);
            b = this.e / 2 * a / this.h;
            c = this.d / 2 * a / this.h;
            c = this.d / 2 - c;
            this.O(this.K, this.e / 2 + b, 0, this.e / 2 - b, c, this.e / 2, 0, this.e / 2, this.d / 2);
            b = this.e / 2 * a / this.h;
            b = this.e / 2 - b;
            c = this.d / 2 * a / this.h;
            this.O(this.K, 0, this.d / 2 + c, b, this.d / 2 - c, 0, this.d / 2, this.e / 2, this.d / 2);
            b = this.e / 2 * a / this.h;
            c = this.d / 2 * a / this.h;
            this.O(this.K,
              this.e / 2 + b, this.d / 2 + c, this.e / 2 - b, this.d / 2 - c, this.e / 2, this.d / 2, this.e / 2, this.d / 2);
            break;
          case 1:
            b = this.e * a / this.h;
            b = this.e - b;
            c = this.d * a / this.h;
            c = this.d - c;
            this.r(this.K, 0, 0, this.e - b, this.d - c, b, c);
            break;
          case 2:
            b = this.e * a / this.h;
            c = this.d * a / this.h;
            c = this.d - c;
            this.r(this.K, b, 0, 0, this.d - c, this.e - b, c);
            break;
          case 3:
            b = this.e * a / this.h;
            b = this.e - b;
            c = this.d * a / this.h;
            this.r(this.K, 0, c, this.e - b, 0, b, this.d - c);
            break;
          case 4:
            b = this.e * a / this.h;
            c = this.d * a / this.h;
            this.r(this.K, b, c, 0, 0, this.e - b, this.d - c);
            break;
          case 5:
            b = this.e /
              2 * a / this.h;
            b = this.e / 2 - b;
            c = this.d / 2 * a / this.h;
            c = this.d / 2 - c;
            this.r(this.K, b - this.e / 2, c - this.d / 2, 0, 0, this.e / 2, this.d / 2);
            b = this.e / 2 * a / this.h;
            c = this.d / 2 * a / this.h;
            c = this.d / 2 - c;
            this.r(this.K, this.e / 2 + b, c - this.d / 2, this.e / 2, 0, this.e / 2, this.d / 2);
            b = this.e / 2 * a / this.h;
            b = this.e / 2 - b;
            c = this.d / 2 * a / this.h;
            this.r(this.K, b - this.e / 2, this.d / 2 + c, 0, this.d / 2, this.e / 2, this.d / 2);
            b = this.e / 2 * a / this.h;
            c = this.d / 2 * a / this.h;
            this.r(this.K, this.e / 2 + b, this.d / 2 + c, this.e / 2, this.d / 2, this.e / 2, this.d / 2);
            break;
          case 6:
            c = this.d / 2 * a / this.h;
            c =
              this.d / 2 - c;
            this.r(this.K, 0, c - this.d / 2, 0, 0, this.e, this.d / 2);
            this.r(this.K, 0, this.d - c, 0, this.d / 2, this.e, this.d / 2);
            break;
          case 7:
            b = this.e / 2 * a / this.h, b = this.e / 2 - b, this.r(this.K, b - this.e / 2, 0, 0, 0, this.e / 2, this.d), this.r(this.K, this.e - b, 0, this.e / 2, 0, this.e / 2, this.d)
        }
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Lc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.cf = b.k();
      this.ot = b.k();
      this.start(a, c, d, e)
    },
    wb: function() {
      var a = this.K.width,
        b = this.K.height,
        c;
      if (this.fa) {
        0 == this.cf && (this.cf = 1);
        switch (this.ot) {
          case t.Lo:
          case t.gp:
            this.ic =
              (a + this.cf - 1) / this.cf;
            0 == this.ic && (this.ic = 1, this.cf = a);
            break;
          default:
            this.ic = (b + this.cf - 1) / this.cf, 0 == this.ic && (this.ic = 1, this.cf = b)
        }
        this.fb = 0;
        this.fa = G
      }
      if (0 >= this.cf || 0 >= this.ic || 0 == this.h) this.r(this.j);
      else {
        var d = this.ic * this.gc() / this.h;
        if (d > this.fb) {
          var e = 0,
            g = 0,
            h = 0,
            n = 0;
          for (c = 0; c < this.cf; c++) {
            switch (this.ot) {
              case t.Lo:
                e = this.fb + c * this.ic;
                g = 0;
                h = d - this.fb;
                n = b;
                break;
              case t.gp:
                e = a - (this.fb + c * this.ic) - (d - this.fb);
                g = 0;
                h = d - this.fb;
                n = b;
                break;
              case t.Fx:
                e = 0;
                g = this.fb + c * this.ic;
                h = a;
                n = d - this.fb;
                break;
              case t.Jw:
                e =
                  0, g = b - (this.fb + c * this.ic) - (d - this.fb), h = a, n = d - this.fb
            }
            this.r(this.j, e, g, e, g, h, n)
          }
        }
        this.fb = d
      }
      return this.RH
    },
    end: function() {
      this.finish()
    }
  });
  Mc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.za = b.m();
      this.Hp = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height);
      var a = this.gc();
      if (1 < a / this.h) this.r(this.j);
      else {
        var b, c, d, e, g, h, n, r, k, p;
        k = this.e / this.za;
        p = this.d / this.Hp;
        d = this.e / this.za;
        e = this.d / this.Hp;
        for (g = 0; g < this.za; g++)
          for (h = 0; h < this.Hp; h++) b =
            g * k, c = h * p, n = d * a / this.h, r = e * a / this.h, this.O(this.j, b + (d - n) / 2, c + (e - r) / 2, n, r, b + (d - n) / 2, c + (e - r) / 2, n, r)
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Nc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.yi = b.k();
      this.start(a, c, d, e)
    },
    wb: function() {
      if (this.fa) {
        switch (this.yi) {
          case t.Zr:
          case t.us:
            this.ic = this.K.width / 2;
            break;
          default:
            this.ic = this.K.height / 2
        }
        this.fb = 0;
        this.fa = G
      }
      if (0 == this.ic) this.r(this.j);
      else {
        var a = 0,
          b = 0,
          c = 0,
          d = 0,
          e = this.ic * this.gc() / this.h;
        if (e > this.fb) {
          switch (this.yi) {
            case t.Zr:
              a = this.K.width /
                2 - e;
              b = 0;
              c = e - this.fb;
              d = this.j.height;
              break;
            case t.us:
              a = this.fb;
              b = 0;
              c = e - this.fb;
              d = this.j.height;
              break;
            case t.Ow:
              a = 0;
              b = this.K.height / 2 - e;
              c = this.j.width;
              d = e - this.fb;
              break;
            case t.Ex:
              a = 0, b = this.fb, c = this.j.width, d = e - this.fb
          }
          this.r(this.j, a, b, a, b, c, d);
          switch (this.yi) {
            case t.Zr:
              a = this.K.width / 2 + this.fb;
              break;
            case t.us:
              a = this.K.width - e;
              break;
            case t.Ow:
              b = this.K.height / 2 + this.fb;
              break;
            case t.Ex:
              b = this.K.height - e
          }
          this.r(this.j, a, b, a, b, c, d)
        }
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Oc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G);
      this.ah.globalAlpha = 1;
      this.r(this.K);
      this.ah.globalAlpha = this.gc() / this.h;
      this.r(this.j);
      return m
    },
    end: function() {
      this.ah.globalAlpha = 1;
      this.finish()
    }
  });
  Pc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.za = b.m();
      this.Na = b.m();
      this.Jm = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height);
      var a = this.gc();
      if (1 < a / this.h) this.r(this.j);
      else {
        var b, c, d, e, g = 0,
          h = b = 0;
        if (0 == this.Na) {
          h =
            this.d / this.za;
          for (g = 0; g < this.za; g++) 0 == b ? (b = 0, c = g * h, d = this.e * a / this.h, e = g == this.za - 1 ? this.d : h + 1, 0 == this.Jm ? this.r(this.j, b, c, b, c, d, e) : this.r(this.j, b, c, this.e - d, c, d, e), b = 1) : (c = g * h, d = this.e * a / this.h, b = this.e - d, e = g == this.za - 1 ? this.d : h + 1, 0 == this.Jm ? this.r(this.j, b, c, b, c, d, e) : this.r(this.j, b, c, 0, c, d, e), b = 0)
        } else {
          h = this.e / this.za;
          for (g = 0; g < this.za; g++) 0 == b ? (b = g * h, c = 0, e = this.d * a / this.h, d = g == this.za - 1 ? this.e : h + 1, 0 == this.Jm ? this.r(this.j, b, c, b, c, d, e) : this.r(this.j, b, c, b, this.d - e, d, e), b = 1) : (b = g * h, e = this.d *
            a / this.h, c = this.d - e, d = g == this.za - 1 ? this.e : h + 1, 0 == this.Jm ? this.r(this.j, b, c, b, c, d, e) : this.r(this.j, b, c, b, 0, d, e), b = 0)
        }
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Qc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.Hu = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      if (this.fa) {
        var a = this.K.width,
          b = this.K.height;
        this.C = Math.floor((a * this.Hu / 100 + b * this.Hu / 100) / 2);
        0 == this.C && (this.C = 1);
        this.se = (a + this.C - 1) / this.C;
        this.Zf = (b + this.C - 1) / this.C;
        this.Tj = this.se * this.Zf;
        a = Math.floor((this.Tj + 7) / 8 + 2);
        this.Rj = 0;
        this.Yd =
          Array(a);
        for (b = 0; b < a; b++) this.Yd[b] = 0;
        this.fa = G
      }
      if (this.Yd == m || 2 > this.se || 2 > this.Zf || 0 == this.h) this.r(this.j);
      else {
        var c, d, b = a = 0;
        c = Math.floor(this.Tj * this.gc() / this.h);
        var e = c - this.Rj;
        if (0 != e) {
          this.Rj = c;
          for (d = 0; d < e; d++) {
            for (c = 0; 1 > c; c++) {
              var a = Math.floor(this.se * Math.random()),
                b = Math.floor(this.Zf * Math.random()),
                g, h;
              g = b * this.se + a;
              h = Math.floor(g / 8);
              g = 1 << (g & 7);
              if (0 == (this.Yd[h] & g)) {
                this.Yd[h] |= g;
                break
              }
              var n = h,
                r = (this.Tj + 7) / 8,
                k, p = G;
              for (k = h; k < r; k++, n++)
                if (-1 != this.Yd[n]) {
                  b = Math.floor(8 * k / this.se);
                  a = Math.floor(8 *
                    k % this.se);
                  for (g = 1; 0 != g; g <<= 1) {
                    if (0 == (this.Yd[n] & g)) {
                      this.Yd[n] |= g;
                      p = j;
                      break
                    }
                    if (++a >= this.se && (a = 0, ++b >= this.Zf)) break
                  }
                  if (p) break
                }
              if (p) break;
              for (k = n = 0; k < h; k++, n++) {
                if (255 != this.Yd[n]) {
                  b = Math.floor(8 * k / m_nbBlockPerLine);
                  a = Math.floor(8 * k % m_nbBlockPerLine);
                  for (g = 1; 0 != g; g <<= 1) {
                    if (0 == (this.Yd[n] & g)) {
                      this.Yd[n] |= g;
                      p = j;
                      break
                    }
                    if (++a >= this.se && (a = 0, ++b >= this.Zf)) break
                  }
                  if (p) break
                }
                if (p) break;
                p = G
              }
            }
            1 > c && this.r(this.j, Math.floor(a * this.C), Math.floor(b * this.C), Math.floor(a * this.C), Math.floor(b * this.C), this.C, this.C)
          }
        }
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Rc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.Na = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height);
      var a = this.gc(),
        b = a / this.h;
      if (1 < b) this.r(this.j);
      else {
        var c, d, e;
        0.25 > b ? (d = 2 * this.e * a / this.h, d *= 2, e = this.d / 7, b = this.e / 2 - d / 2, c = this.d / 2 - e / 2, this.r(this.j, b, c, b, c, d, e), d = this.e / 7, e = 2 * this.d * a / this.h, e *= 2, b = this.e / 2 - d / 2, c = this.d / 2 - e / 2) : (b = this.e / 2, d = this.e * a / this.h - b, e = this.d / 2, c = 0, this.r(this.j, b, c, b, c, d, e), c =
          this.d / 2, e = this.d * a / this.h - c, b = d = this.e / 2, this.r(this.j, b, c, b, c, d, e), d = this.e * a / this.h - this.e / 2, b = this.e / 2 - d, c = e = this.d / 2, this.r(this.j, b, c, b, c, d, e), e = this.d * a / this.h - this.d / 2, c = this.d / 2 - e, d = this.e / 2, b = 0);
        this.r(this.j, b, c, b, c, d, e)
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Sc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.Na = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height, this.Gu = G);
      var a = this.gc(),
        b = a / this.h;
      if (1 < b) this.r(this.j);
      else {
        var c,
          d, e, g;
        if (0.5 >= b) switch (this.Na) {
          case 0:
            e = 2 * (this.e * a / this.h);
            g = this.d / 2;
            c = this.e - e;
            d = this.d / 2;
            this.r(this.j, 0, 0, c, d, e, g);
            break;
          case 1:
            e = 2 * (this.e * a / this.h);
            g = this.d / 2;
            c = this.e - e;
            d = this.d / 2;
            this.r(this.j, c, 0, 0, d, e, g);
            break;
          case 2:
            e = 2 * (this.e * a / this.h);
            g = this.d / 2;
            c = this.e - e;
            d = this.d / 2;
            this.r(this.j, 0, d, c, 0, e, g);
            break;
          case 3:
            e = 2 * (this.e * a / this.h), g = this.d / 2, c = this.e - e, d = this.d / 2, this.r(this.j, c, d, 0, 0, e, g)
        }
        if (0.5 < b) switch (this.Gu == G && (1 >= this.Na ? this.r(this.j, 0, 0, 0, this.d / 2, this.e, this.d / 2) : this.r(this.j,
          0, this.d / 2, 0, 0, this.e, this.d / 2), this.Gu = j), b = a - this.h / 2, b /= this.h / 2, g = this.d / 2 * 1E3 * b / 1E3, this.Na) {
          case 0:
          case 1:
            this.O(this.j, 0, g, this.e, this.d / 2, 0, this.d / 2, this.e, this.d / 2);
            this.O(this.j, 0, 0, this.e, g, 0, this.d / 2 - g, this.e, g);
            break;
          case 2:
          case 3:
            this.O(this.j, 0, this.d / 2 - g, this.e, this.d / 2, 0, 0, this.e, this.d / 2), this.O(this.j, 0, this.d - g, this.e, g, 0, this.d / 2, this.e, g)
        }
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Tc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.yi = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      var a =
        this.K.width,
        b = this.K.height;
      if (this.fa) {
        switch (this.yi) {
          case t.Lo:
          case t.gp:
            this.ic = a;
            break;
          default:
            this.ic = b
        }
        this.fb = 0;
        this.fa = G
      }
      if (0 == this.h) this.r(this.j);
      else {
        var c = this.ic * this.gc() / this.h;
        if (c > this.fb) {
          var d = 0,
            e = 0;
          switch (this.yi) {
            case t.Lo:
              d = c - a;
              e = 0;
              break;
            case t.gp:
              d = a - c;
              e = 0;
              break;
            case t.Fx:
              d = 0;
              e = c - b;
              break;
            case t.Jw:
              d = 0, e = b - c
          }
          this.r(this.j, d, e, 0, 0, a, b);
          this.fb = c
        }
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Uc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.Na = b.m();
      this.za = b.m();
      this.Uy =
        b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height);
      var a = this.gc();
      if (1 < a / this.h) this.r(this.j);
      else {
        var b, c, d, e, g, h;
        g = this.e * this.za / 100;
        h = this.d * this.za / 100;
        d = g * a / this.h;
        e = h * a / this.h;
        b = this.e / 2 - d / 2;
        c = this.d / 2 - e / 2;
        0 == this.Uy ? this.r(this.j, b, c, b, c, d, e) : this.O(this.j, b, c, d, e, this.e / 2 - g / 2, this.d / 2 - h / 2, g, h);
        b = 100 - this.za;
        g = this.e * b / 100;
        h = this.d * b / 100;
        d = g / 2 * a / this.h;
        e = h / 2 * a / this.h;
        this.r(this.j, 0, 0, 0, 0, this.e, e);
        this.r(this.j, 0, 0, 0, 0, d, this.d);
        this.r(this.j,
          0, this.d - e, 0, this.d - e, this.e, e);
        this.r(this.j, this.e - d, 0, this.e - d, 0, d, this.d)
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Vc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.Na = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height);
      var a = this.gc();
      if (1 < a / this.h) this.r(this.j);
      else {
        var b, c;
        switch (this.Na) {
          case 0:
            b = this.e * a / this.h;
            c = this.d * a / this.h;
            this.O(this.j, 0, 0, b, c, 0, 0, this.e, this.d);
            break;
          case 1:
            b = this.e * a / this.h;
            c = this.d * a / this.h;
            this.O(this.j,
              this.e - b, 0, b, c, 0, 0, this.e, this.d);
            break;
          case 2:
            b = this.e * a / this.h;
            c = this.d * a / this.h;
            this.O(this.j, 0, this.d - c, b, c, 0, 0, this.e, this.d);
            break;
          case 3:
            b = this.e * a / this.h;
            c = this.d * a / this.h;
            this.O(this.j, this.e - b, this.d - c, b, c, 0, 0, this.e, this.d);
            break;
          case 4:
            b = this.e / 2 * a / this.h;
            c = this.d / 2 * a / this.h;
            5 > c && (c = 5);
            this.O(this.j, 0, 0, b, c, 0, 0, this.K.width / 2, this.K.height / 2);
            b = this.e / 2 * a / this.h;
            c = this.d / 2 * a / this.h;
            5 > c && (c = 5);
            this.O(this.j, this.e - b, 0, b, c, this.e / 2, 0, this.e / 2, this.d / 2);
            b = this.e / 2 * a / this.h;
            c = this.d / 2 * a / this.h;
            this.O(this.j, 0, this.d - c, b, c, 0, this.d / 2, this.e / 2, this.d / 2);
            b = this.e / 2 * a / this.h;
            c = this.d / 2 * a / this.h;
            this.O(this.j, this.e - b, this.d - c, b, c, this.e / 2, this.d / 2, this.e / 2, this.d / 2);
            break;
          case 5:
            b = this.e / 2 * a / this.h;
            c = this.d / 2 * a / this.h;
            5 > c && (c = 5);
            this.O(this.j, this.e / 2 - b, this.d / 2 - c, b, c, 0, 0, this.K.width / 2, this.K.height / 2);
            b = this.e / 2 * a / this.h;
            c = this.d / 2 * a / this.h;
            5 > c && (c = 5);
            this.O(this.j, this.e / 2, this.d / 2 - c, b, c, this.e / 2, 0, this.e / 2, this.d / 2);
            b = this.e / 2 * a / this.h;
            c = this.d / 2 * a / this.h;
            this.O(this.j, this.e / 2 - b, this.d /
              2, b, c, 0, this.d / 2, this.e / 2, this.d / 2);
            b = this.e / 2 * a / this.h;
            c = this.d / 2 * a / this.h;
            this.O(this.j, this.e / 2, this.d / 2, b, c, this.e / 2, this.d / 2, this.e / 2, this.d / 2);
            break;
          case 6:
            b = this.e;
            c = this.d * a / this.h;
            this.O(this.j, 0, 0, b, c, 0, 0, this.e, this.d);
            break;
          case 7:
            b = this.e * a / this.h;
            c = this.d;
            this.O(this.j, 0, 0, b, c, 0, 0, this.e, this.d);
            break;
          case 8:
            b = this.e * a / this.h;
            c = this.d;
            this.O(this.j, this.e - b, 0, b, c, 0, 0, this.e, this.d);
            break;
          case 9:
            b = this.e, c = this.d * a / this.h, this.O(this.j, 0, this.d - c, b, c, 0, 0, this.e, this.d)
        }
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Wc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.Na = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height, this.Rb = 0);
      var a = this.gc();
      if (1 < a / this.h) this.r(this.j);
      else {
        var b, c;
        switch (this.Na) {
          case 0:
            0 == this.Rb ? (b = 2 * this.e * a / this.h, b = this.e - b, c = 2 * this.d * a / this.h, c = this.d - c, this.O(this.K, 0, 0, b, c, 0, 0, this.e, this.d), a >= this.h / 2 && (this.Rb = 1)) : (b = 2 * this.e * a / this.h, b -= this.e, c = 2 * this.d * a / this.h, c -= this.d, this.O(this.j, 0, 0, b, c, 0, 0, this.e, this.d));
            break;
          case 1:
            0 == this.Rb ? (b = this.e, c = 2 * this.d * a / this.h, c = this.d - c, this.O(this.K, 0, 0, b, c, 0, 0, this.e, this.d), a >= this.h / 2 && (this.Rb = 1)) : (b = this.e, c = 2 * this.d * a / this.h, c -= this.d, this.O(this.j, 0, 0, b, c, 0, 0, this.e, this.d));
            break;
          case 2:
            0 == this.Rb ? (b = 2 * this.e * a / this.h, b = this.e - b, c = 2 * this.d * a / this.h, c = this.d - c, this.O(this.K, this.e - b, 0, b, c, 0, 0, this.e, this.d), a >= this.h / 2 && (this.Rb = 1)) : (b = 2 * this.e * a / this.h, b -= this.e, c = 2 * this.d * a / this.h, c -= this.d, this.O(this.j, this.e - b, 0, b, c, 0, 0, this.e, this.d));
            break;
          case 3:
            0 == this.Rb ?
              (b = 2 * this.e * a / this.h, b = this.e - b, c = this.d, this.O(this.K, 0, 0, b, c, 0, 0, this.e, this.d), a >= this.h / 2 && (this.Rb = 1)) : (b = 2 * this.e * a / this.h, b -= this.e, c = this.d, this.O(this.j, 0, 0, b, c, 0, 0, this.e, this.d));
            break;
          case 4:
            0 == this.Rb ? (b = 2 * this.e * a / this.h, b = this.e - b, c = this.d, this.O(this.K, this.e / 2 - b / 2, 0, b, c, 0, 0, this.e, this.d), a >= this.h / 2 && (this.Rb = 1)) : (b = 2 * this.e * a / this.h, b -= this.e, c = this.d, this.O(this.j, this.e / 2 - b / 2, 0, b, c, 0, 0, this.e, this.d));
            break;
          case 5:
            0 == this.Rb ? (c = 2 * this.d * a / this.h, c = this.d - c, b = this.e, this.O(this.K,
              0, this.d / 2 - c / 2, b, c, 0, 0, this.e, this.d), a >= this.h / 2 && (this.Rb = 1)) : (c = 2 * this.d * a / this.h, c -= this.d, b = this.e, this.O(this.j, 0, this.d / 2 - c / 2, b, c, 0, 0, this.e, this.d));
            break;
          case 6:
            0 == this.Rb ? (b = 2 * this.e * a / this.h, b = this.e - b, c = 2 * this.d * a / this.h, c = this.d - c, this.O(this.K, this.e / 2 - b / 2, this.d / 2 - c / 2, b, c, 0, 0, this.e, this.d), a >= this.h / 2 && (this.Rb = 1)) : (b = 2 * this.e * a / this.h, b -= this.e, c = 2 * this.d * a / this.h, c -= this.d, this.O(this.j, this.e / 2 - b / 2, this.d / 2 - c / 2, b, c, 0, 0, this.e, this.d));
            break;
          case 7:
            0 == this.Rb ? (b = 2 * this.e * a / this.h,
              b = this.e - b, c = this.d, this.O(this.K, this.e - b, 0, b, c, 0, 0, this.e, this.d), a >= this.h / 2 && (this.Rb = 1)) : (b = 2 * this.e * a / this.h, b -= this.e, c = this.d, this.O(this.j, this.d - b, 0, b, c, 0, 0, this.e, this.d));
            break;
          case 8:
            0 == this.Rb ? (b = 2 * this.e * a / this.h, b = this.e - b, c = 2 * this.d * a / this.h, c = this.d - c, this.O(this.K, 0, this.d - c, b, c, 0, 0, this.e, this.d), a >= this.h / 2 && (this.Rb = 1)) : (b = 2 * this.e * a / this.h, b -= this.e, c = 2 * this.d * a / this.h, c -= this.d, this.O(this.j, 0, this.d - c, b, c, 0, 0, this.e, this.d));
            break;
          case 9:
            0 == this.Rb ? (b = this.e, c = 2 * this.d * a /
              this.h, c = this.d - c, this.O(this.K, 0, this.d - c, b, c, 0, 0, this.e, this.d), a >= this.h / 2 && (this.Rb = 1)) : (b = this.e, c = 2 * this.d * a / this.h, c -= this.d, this.O(this.j, 0, this.d - c, b, c, 0, 0, this.e, this.d));
            break;
          case 10:
            0 == this.Rb ? (b = 2 * this.e * a / this.h, b = this.e - b, c = 2 * this.d * a / this.h, c = this.d - c, this.O(this.K, this.e - b, this.d - c, b, c, 0, 0, this.e, this.d), a >= this.h / 2 && (this.Rb = 1)) : (b = 2 * this.e * a / this.h, b -= this.e, c = 2 * this.d * a / this.h, c -= this.d, this.O(this.j, this.e - b, this.d - c, b, c, 0, 0, this.e, this.d))
        }
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Xc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.Na = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height, this.Qj = this.Pj = 0);
      var a = this.gc();
      if (1 < a / this.h) this.r(this.j);
      else {
        var b, c, d, e;
        b = this.d * a / this.h;
        a = this.e * a / this.h;
        if (0 == this.Na) {
          e = b % 2;
          for (c = 0; c < this.e; c += 2) {
            for (d = this.Pj; d < b; d++) this.r(this.j, c, d, c, d, 1, 1);
            for (d = this.d - b - e; d < this.d - this.Pj; d++) this.r(this.j, c + 1, d + 1, c + 1, d + 1, 1, 1)
          }
          this.Pj = 0 == b % 2 ? b : b - 1
        }
        if (1 == this.Na) {
          e = a % 2;
          for (d = 0; d < this.d; d++) {
            for (c =
              this.Qj; c < a; c += 2) this.r(this.j, c + 1, d, c + 1, d, 1, 1);
            for (c = this.e - a - e; c < this.e - this.Qj; c += 2) this.r(this.j, c, d + 1, c, d + 1, 1, 1)
          }
          this.Qj = 0 == a % 2 ? a : a - 1
        }
        if (2 == this.Na) {
          e = b % 2;
          for (c = 0; c < this.e; c += 2) {
            for (d = this.Pj; d < b; d += 2) this.r(this.j, c, d, c, d, 1, 1);
            for (d = this.d - b - e; d < this.d - this.Pj; d += 2) this.r(this.j, c + 1, d + 1, c + 1, d + 1, 1, 1)
          }
          e = a % 2;
          for (d = 0; d < this.d; d += 2) {
            for (c = this.Qj; c < a; c += 2) this.r(this.j, c + 1, d, c + 1, d, 1, 1);
            for (c = this.e - a - e; c < this.e - this.Qj; c += 2) this.r(this.j, c, d + 1, c, d + 1, 1, 1)
          }
          this.Pj = 0 == b % 2 ? b : b - 1;
          this.Qj = 0 == a % 2 ? a : a - 1
        }
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Yc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.za = b.m();
      this.Im = b.m();
      this.Ty = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height, this.ll = 0);
      var a = this.gc();
      if (1 < a / this.h) this.r(this.j);
      else {
        var b, c, d;
        b = this.e / 2;
        d = this.d / 2;
        this.ll = 6.28318 * this.za * a / this.h;
        1 == this.Ty && (this.ll = 6.28318 - this.ll);
        c = this.e / 2 - this.e / 2 * a / this.h;
        b = Math.floor(b + Math.cos(this.ll) * c);
        c = Math.floor(d + Math.sin(this.ll) * c);
        d = this.e * a / this.h;
        a = this.d * a / this.h;
        this.O(this.K, 0, 0, this.e, this.d, 0, 0, this.K.width, this.K.height);
        1 == this.$P ? this.O(this.j, b - d / 2, c - a / 2, d, a, 0, 0, this.e, this.d) : this.O(this.j, b - d / 2, c - a / 2, d, a, this.e - d, this.d - a, d, a)
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  Zc.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.za = b.m();
      this.Im = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height, this.mq = 0);
      var a = this.gc();
      if (1 < a / this.h) this.r(this.j);
      else {
        var b, c, d = 0;
        b = this.e / 2;
        c = this.d /
          2;
        d = 6.28318 * this.za * a / this.h;
        d -= 6.28318 * this.mq;
        1 == this.Im && (d = 6.28318 - d);
        a = this.e * a / this.h;
        b = Math.floor(b + Math.cos(d) * a);
        c = Math.floor(c + Math.sin(d) * a);
        this.r(this.j);
        this.r(this.K, b - this.e / 2, c - this.d / 2, 0, 0, this.e, this.d);
        0 == this.Im ? 6.28318 <= d && this.mq++ : 0 >= d && this.mq++
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  $c.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.Cw = b.m();
      this.Vr = b.k();
      this.KC = b.k();
      this.start(a, c, d, e)
    },
    wb: function() {
      var a = this.K.width,
        b = this.K.height;
      if (this.fa) {
        this.C = Math.floor((a *
          this.Cw / 100 + b * this.Cw / 100) / 2);
        0 == this.C && (this.C = 1);
        this.se = (a + this.C - 1) / this.C;
        this.Zf = (b + this.C - 1) / this.C;
        this.Fu = this.KC;
        this.Yc = this.Vr;
        switch (this.Vr) {
          case t.bi:
            this.R = this.S = 0;
            break;
          case t.ci:
            this.R = a - this.C;
            this.S = 0;
            break;
          case t.ej:
            this.R = 0;
            this.S = b - this.C;
            break;
          case t.fj:
            this.R = a - this.C;
            this.S = b - this.C;
            break;
          case t.Nw:
            this.R = a / 2 - this.C, this.S = b / 2 - this.C, this.Yc = this.Fu == t.Tw ? t.bi : t.ci, this.oq = this.R - this.C, this.rq = this.S - this.C, this.lq = this.S + 2 * this.C, this.qq = this.R + 2 * this.C, this.se = 2 + 2 * (this.R +
              this.C - 1) / this.C, this.Zf = 2 + 2 * (this.S + this.C - 1) / this.C
        }
        this.Tj = Math.floor(this.se * this.Zf);
        this.Rj = 0;
        this.fa = G
      }
      if (this.C >= a || this.C >= b) this.r(this.j);
      else {
        var c;
        c = Math.floor(this.Tj * this.gc() / this.h);
        var d = c - this.Rj;
        if (0 != d) {
          this.Rj = c;
          for (c = 0; c < d; c++)
            if (this.r(this.j, this.R, this.S, this.R, this.S, this.C, this.C), this.Vr == t.Nw) switch (this.Yc) {
              case t.bi:
                this.R += this.C;
                this.R >= this.qq && (this.R -= this.C, this.S += this.C, this.Yc = t.ci, this.qq += this.C);
                break;
              case t.ci:
                this.S += this.C;
                this.S >= this.lq && (this.S -= this.C,
                  this.R -= this.C, this.Yc = t.fj, this.lq += this.C);
                break;
              case t.fj:
                this.R -= this.C;
                this.R + this.C <= this.oq && (this.R += this.C, this.S -= this.C, this.Yc = t.ej, this.oq -= this.C);
                break;
              case t.ej:
                this.S -= this.C, this.S + this.C <= this.rq && (this.S += this.C, this.R += this.C, this.Yc = t.bi, this.rq -= this.C)
            } else switch (this.Fu) {
              case t.Tw:
                switch (this.Yc) {
                  case t.bi:
                    this.R += this.C;
                    this.R >= a && (this.R -= this.C, this.S += this.C, this.Yc = t.ci);
                    break;
                  case t.ci:
                    this.R -= this.C;
                    0 >= this.R + this.C && (this.R += this.C, this.S += this.C, this.Yc = t.bi);
                    break;
                  case t.ej:
                    this.R += this.C;
                    this.R >= a && (this.R -= this.C, this.S -= this.C, this.Yc = t.fj);
                    break;
                  case t.fj:
                    this.R -= this.C, 0 >= this.R + this.C && (this.R += this.C, this.S -= this.C, this.Yc = t.ej)
                }
                break;
              case t.FD:
                switch (this.Yc) {
                  case t.bi:
                    this.S += this.C;
                    this.S >= b && (this.S -= this.C, this.R += this.C, this.Yc = t.ej);
                    break;
                  case t.ci:
                    this.S += this.C;
                    this.S >= b && (this.S -= this.C, this.R -= this.C, this.Yc = t.fj);
                    break;
                  case t.ej:
                    this.S -= this.C;
                    0 >= this.S + this.C && (this.S += this.C, this.R += this.C, this.Yc = t.bi);
                    break;
                  case t.fj:
                    this.S -= this.C, 0 >=
                      this.S + this.C && (this.S += this.C, this.R -= this.C, this.Yc = t.ci)
                }
            }
        }
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  ad.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.Na = b.m();
      this.za = b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height, this.pf = this.Sj = 0);
      var a = this.gc();
      if (1 < a / this.h) this.r(this.j);
      else {
        var b, c, d, e;
        b = 0;
        0 == this.Na ? (b = this.d / this.za, e = Math.floor(this.Sj * b) + Math.floor(b), c = 0, d = this.e * a / this.h, d = d * this.za / 2, d -= this.e * this.Sj, b = 0 == this.pf ? 0 :
          this.e - d, this.r(this.j, b, c, b, c, d, e), c = this.d - e, b = 1 == this.pf ? 0 : this.e - d, this.r(this.j, b, c, b, c, d, e), d >= this.e && (this.Sj++, this.pf++, 2 == this.pf && (this.pf = 0))) : (b = this.e / this.za, d = Math.floor(this.Sj * b) + Math.floor(b), b = 0, e = this.d * a / this.h, e = e * this.za / 2, e -= this.d * this.Sj, c = 0 == this.pf ? 0 : this.d - e, this.r(this.j, b, c, b, c, d, e), b = this.e - d, c = 1 == this.pf ? 0 : this.d - e, this.r(this.j, b, c, b, c, d, e), e >= this.d && (this.Sj++, this.pf++, 2 == this.pf && (this.pf = 0)))
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  bd.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.start(a, c, d, e)
    },
    wb: function(a) {
      var b = this.K.width,
        c = this.K.height;
      this.fa && (this.fa = G);
      if (0 == this.h) this.r(this.j);
      else {
        var d;
        d = this.gc();
        0 != (a & t.lp) ? (a = Math.floor(b - b * d / this.h), d = Math.floor(c - c * d / this.h), this.r(this.j), this.O(this.K, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c)) : (a = Math.floor(b * d / this.h), d = Math.floor(c * d / this.h), this.r(this.K), this.O(this.j, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c))
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  cd.prototype = q.extend(new t, {
    N: function(a, b, c, d, e) {
      this.za =
        b.m();
      this.start(a, c, d, e)
    },
    wb: function() {
      this.fa && (this.fa = G, this.e = this.j.width, this.d = this.j.height);
      var a = this.gc();
      if (1 < a / this.h) this.r(this.j);
      else {
        var b, c, d;
        0 == this.za ? (c = this.e * a / this.h, d = this.d * a / this.h, a = this.e / 2 - c / 2, b = this.d / 2 - d / 2, this.O(this.j, 0, 0, this.e, this.d, a, b, c, d)) : (c = this.e * a / this.h, c = this.e - c, d = this.d * a / this.h, d = this.d - d, a = this.e / 2 - c / 2, b = this.d / 2 - d / 2, this.O(this.K, 0, 0, this.e, this.d, a, b, c, d))
      }
      return m
    },
    end: function() {
      this.finish()
    }
  });
  H.wg = {
    dx: "PK\u0003\u0004",
    Pw: "PK\u0001\u0002",
    $r: "PK\u0005\u0006",
    Ix: "PK\u0006\u0007",
    wF: "PK\u0006\u0006",
    PK: "PK\u0007\u0008"
  };
  H.iG = {
    Yg: G,
    ii: G,
    dir: G,
    ff: m,
    al: m
  };
  H.prototype = function() {
    function a(d) {
      "/" != d.slice(-1) && (d += "/");
      if (!this.files[d]) {
        var e = b(d);
        e && a.call(this, e);
        c.call(this, d, m, {
          dir: j
        })
      }
      return this.files[d]
    }

    function b(a) {
      "/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
      var b = a.lastIndexOf("/");
      return 0 < b ? a.substring(0, b) : ""
    }

    function c(c, e, r) {
      var k = b(c);
      k && a.call(this, k);
      r = r || {};
      r.Yg === j && r.ii == m && (r.ii = j);
      r = d(r, H.iG);
      r.ff = r.ff || new Date;
      r.al !== m && (r.al = r.al.toUpperCase());
      r.dir || e === m || "undefined" === typeof e ? (r.Yg = G, r.ii = G, e = m) : H.xk.Mr && e instanceof Uint8Array ? (r.Yg = G, r.ii = j, e = H.Dg.Lr(e)) : H.xk.Qx && e instanceof ArrayBuffer ? (r.Yg = G, r.ii = j, e = new Uint8Array(e), e = H.Dg.Lr(e)) : r.ii && !r.Yg && (r.kB !== j && (e = H.Dg.sC(e)), delete r.kB);
      return this.files[c] = new g(c, e, r)
    }

    function d() {
      var a = {},
        b, c;
      for (b = 0; b < arguments.length; b++)
        for (c in arguments[b]) arguments[b].hasOwnProperty(c) && "undefined" === typeof a[c] && (a[c] = arguments[b][c]);
      return a
    }

    function e(a,
      b) {
      var c = "",
        d;
      for (d = 0; d < b; d++) c += String.fromCharCode(a & 255), a >>>= 8;
      return c
    }

    function g(a, b, c) {
      this.name = a;
      this.data = b;
      this.options = c
    }
    g.prototype = {
      Rx: function() {
        var a = this.data;
        if (a === m || "undefined" === typeof a) return "";
        this.options.Yg && (a = yb.Hy(a));
        this.options.ii || (a = H.prototype.CC(a));
        return a
      }
    };
    return {
      load: function() {
        f(Error("Load method is not defined. Is the file jszip-load.js included ?"))
      },
      filter: function(a) {
        var b = [],
          c, e, k;
        for (c in this.files) this.files.hasOwnProperty(c) && (e = this.files[c], k =
          new g(e.name, e.data, d(e.options)), e = c.slice(this.root.length, c.length), c.slice(0, this.root.length) === this.root && a(e, k) && b.push(k));
        return b
      },
      file: function(a, b, d) {
        if (1 === arguments.length) {
          if (a instanceof RegExp) {
            var e = a;
            return this.filter(function(a, b) {
              return !b.options.dir && e.test(a)
            })
          }
          return this.filter(function(b, c) {
            return !c.options.dir && b === a
          })[0] || m
        }
        a = this.root + a;
        c.call(this, a, b, d);
        return this
      },
      QO: function(b) {
        if (!b) return this;
        if (b instanceof RegExp) return this.filter(function(a, c) {
          return c.options.dir &&
            b.test(a)
        });
        var c = a.call(this, this.root + b),
          d = this.PF();
        d.root = c.name;
        return d
      },
      remove: function(a) {
        var a = this.root + a,
          b = this.files[a];
        b || ("/" != a.slice(-1) && (a += "/"), b = this.files[a]);
        if (b)
          if (b.options.dir)
            for (var b = this.filter(function(b, c) {
                return c.name.slice(0, a.length) === a
              }), c = 0; c < b.length; c++) delete this.files[b[c].name];
          else delete this.files[a];
        return this
      },
      TO: function(a) {
        var b, c, a = d(a || {}, {
            Yg: j,
            al: "STORE",
            type: "base64"
          }),
          g = a.al.toUpperCase();
        H.df[g] || f(g + " is not a valid compression method !");
        var k = [],
          p = [],
          l = 0,
          q;
        for (q in this.files)
          if (this.files.hasOwnProperty(q)) {
            b = this.files[q];
            var s = this.CC(b.name),
              v = c = "",
              u = b;
            b = s;
            var t = g;
            c = b !== u.name;
            var v = u.Rx(),
              B = u.options,
              C = u = oa,
              u = B.ff.getHours(),
              u = u << 6,
              u = u | B.ff.getMinutes(),
              u = u << 5,
              u = u | B.ff.getSeconds() / 2,
              C = B.ff.getFullYear() - 1980,
              C = C << 4,
              C = C | B.ff.getMonth() + 1,
              C = C << 5,
              C = C | B.ff.getDate(),
              D = v !== m && 0 !== v.length,
              t = B.al || t;
            H.df[t] || f(t + " is not a valid compression method !");
            var B = H.df[t],
              t = D ? B.RF(v) : "",
              w = "",
              w = w + "\n\x00",
              w = w + (c ? "\x00\u0008" : "\x00\x00"),
              w = w + (D ? B.tq : H.df.STORE.tq),
              w = w + e(u, 2),
              w = w + e(C, 2),
              w = w + (D ? e(this.Ap(v), 4) : "\x00\x00\x00\x00"),
              w = w + (D ? e(t.length, 4) : "\x00\x00\x00\x00"),
              w = w + (D ? e(v.length, 4) : "\x00\x00\x00\x00"),
              w = w + e(b.length, 2);
            b = w += "\x00\x00";
            c = t;
            c = H.wg.dx + b + s + c;
            v = H.wg.Pw + "\u0014\x00" + b + "\x00\x00\x00\x00\x00\x00" + (this.files[q].options.dir === j ? "\u0010\x00\x00\x00" : "\x00\x00\x00\x00") + e(l, 4) + s;
            l += c.length;
            p.push(c);
            k.push(v)
          }
        g = p.join("");
        k = k.join("");
        l = "";
        l = H.wg.$r + "\x00\x00\x00\x00" + e(p.length, 2) + e(p.length, 2) + e(k.length, 4) + e(g.length,
          4) + "\x00\x00";
        p = g + k + l;
        switch (a.type.toLowerCase()) {
          case "uint8array":
            return H.Dg.tw(p);
          case "arraybuffer":
            return H.Dg.tw(p).buffer;
          case "blob":
            return H.Dg.pJ(p);
          case "base64":
            return a.Yg ? yb.pG(p) : p;
          default:
            return p
        }
      },
      Ap: function(a, b) {
        if ("" === a || "undefined" === typeof a) return 0;
        var c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861,
          1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930,
          1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048,
          3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558,
          953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012,
          4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
        ];
        "undefined" == typeof b && (b = 0);
        for (var d = 0, d = 0, b = b ^ -1, e = 0, g = a.length; e < g; e++) d = (b ^ a.charCodeAt(e)) & 255, d = c[d], b = b >>> 8 ^ d;
        return b ^ -1
      },
      PF: function() {
        var a = new H,
          b;
        for (b in this) "function" !== typeof this[b] && (a[b] = this[b]);
        return a
      },
      CC: function(a) {
        for (var b = "", c = 0; c < a.length; c++) {
          var d = a.charCodeAt(c);
          128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
        }
        return b
      },
      BC: function(a) {
        for (var b =
            "", c = 0, d = 0, e = 0, g = 0; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), g = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | g & 63), c += 3);
        return b
      }
    }
  }();
  H.df = {
    STORE: {
      tq: "\x00\x00",
      RF: sa(),
      yw: sa()
    }
  };
  H.xk = {
    Qx: "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array,
    Mr: "undefined" !== typeof Uint8Array,
    blob: function() {
      if ("undefined" === typeof ArrayBuffer) return G;
      var a = new ArrayBuffer(0);
      try {
        return 0 === (new Blob([a], {
          type: "application/zip"
        })).size
      } catch (b) {}
      try {
        var c = new(window.BlobBuilder || window.WebKitBlobBuilder || window.WE || window.OE);
        c.append(a);
        return 0 === c.getBlob("application/zip").size
      } catch (d) {}
      return G
    }()
  };
  H.Dg = {
    sC: function(a) {
      for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a.charCodeAt(c) & 255);
      return b
    },
    tw: function(a) {
      H.xk.Mr || f(Error("Uint8Array is not supported by this browser"));
      for (var b = new ArrayBuffer(a.length), b = new Uint8Array(b), c = 0; c < a.length; c++) b[c] =
        a.charCodeAt(c);
      return b
    },
    Lr: function(a) {
      H.xk.Mr || f(Error("Uint8Array is not supported by this browser"));
      for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
      return b
    },
    pJ: function(a) {
      H.xk.blob || f(Error("Blob is not supported by this browser"));
      a = H.Dg.tw(a).buffer;
      try {
        return new Blob([a], {
          type: "application/zip"
        })
      } catch (b) {}
      try {
        var c = new(window.BlobBuilder || window.WebKitBlobBuilder || window.WE || window.OE);
        c.append(a);
        return c.getBlob("application/zip")
      } catch (d) {}
      f(Error("Bug : can't construct the Blob."))
    }
  };
  var yb = function() {
    return {
      pG: function(a) {
        for (var b = "", c, d, e, g, h, n, k = 0; k < a.length;) c = a.charCodeAt(k++), d = a.charCodeAt(k++), e = a.charCodeAt(k++), g = c >> 2, c = (c & 3) << 4 | d >> 4, h = (d & 15) << 2 | e >> 6, n = e & 63, isNaN(d) ? h = n = 64 : isNaN(e) && (n = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n);
        return b
      },
      Hy: function(a) {
        for (var b = "", c, d, e, g, h, n = 0, a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); n < a.length;) c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(n++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(n++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(n++)), h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(n++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | g >>
          2, e = (g & 3) << 6 | h, b += String.fromCharCode(c), 64 != g && (b += String.fromCharCode(d)), 64 != h && (b += String.fromCharCode(e));
        return b
      }
    }
  }();
  H || f("JSZip not defined");
  (function() {
    function a() {
      this.list = this.next = m
    }

    function b() {
      this.cg = this.bf = this.Ee = 0;
      this.yk = m
    }

    function c(c, d, e, g, h, l) {
      this.dj = 16;
      this.XE = 288;
      this.status = 0;
      this.root = m;
      this.nh = 0;
      var n = Array(this.dj + 1),
        k, r, p, q, s, t, u, v = Array(this.dj + 1),
        w, B, C, D = new b,
        F = Array(this.dj);
      q = Array(this.XE);
      var A, z = Array(this.dj + 1),
        E, M, I;
      I = this.root = m;
      for (s = 0; s < n.length; s++) n[s] =
        0;
      for (s = 0; s < v.length; s++) v[s] = 0;
      for (s = 0; s < F.length; s++) F[s] = m;
      for (s = 0; s < q.length; s++) q[s] = 0;
      for (s = 0; s < z.length; s++) z[s] = 0;
      k = 256 < d ? c[256] : this.dj;
      w = c;
      B = 0;
      s = d;
      do n[w[B]]++, B++; while (0 < --s);
      if (n[0] == d) this.root = m, this.status = this.nh = 0;
      else {
        for (t = 1; t <= this.dj && 0 == n[t]; t++);
        u = t;
        l < t && (l = t);
        for (s = this.dj; 0 != s && 0 == n[s]; s--);
        p = s;
        l > s && (l = s);
        for (E = 1 << t; t < s; t++, E <<= 1)
          if (0 > (E -= n[t])) {
            this.status = 2;
            this.nh = l;
            return
          }
        if (0 > (E -= n[s])) this.status = 2, this.nh = l;
        else {
          n[s] += E;
          z[1] = t = 0;
          w = n;
          B = 1;
          for (C = 2; 0 < --s;) z[C++] = t += w[B++];
          w = c;
          s = B = 0;
          do
            if (0 != (t = w[B++])) q[z[t]++] = s;
          while (++s < d);
          d = z[p];
          z[0] = s = 0;
          w = q;
          B = 0;
          q = -1;
          A = v[0] = 0;
          C = m;
          for (M = 0; u <= p; u++)
            for (c = n[u]; 0 < c--;) {
              for (; u > A + v[1 + q];) {
                A += v[1 + q];
                q++;
                M = (M = p - A) > l ? l : M;
                if ((r = 1 << (t = u - A)) > c + 1) {
                  r -= c + 1;
                  for (C = u; ++t < M && !((r <<= 1) <= n[++C]);) r -= n[C]
                }
                A + t > k && A < k && (t = k - A);
                M = 1 << t;
                v[1 + q] = t;
                C = Array(M);
                for (r = 0; r < M; r++) C[r] = new b;
                I = I == m ? this.root = new a : I.next = new a;
                I.next = m;
                I.list = C;
                F[q] = C;
                0 < q && (z[q] = s, D.bf = v[q], D.Ee = 16 + t, D.yk = C, t = (s & (1 << A) - 1) >> A - v[q], F[q - 1][t].Ee = D.Ee, F[q - 1][t].bf = D.bf, F[q - 1][t].cg =
                  D.cg, F[q - 1][t].yk = D.yk)
              }
              D.bf = u - A;
              B >= d ? D.Ee = 99 : w[B] < e ? (D.Ee = 256 > w[B] ? 16 : 15, D.cg = w[B++]) : (D.Ee = h[w[B] - e], D.cg = g[w[B++] - e]);
              r = 1 << u - A;
              for (t = s >> A; t < M; t += r) C[t].Ee = D.Ee, C[t].bf = D.bf, C[t].cg = D.cg, C[t].yk = D.yk;
              for (t = 1 << u - 1; 0 != (s & t); t >>= 1) s ^= t;
              for (s ^= t;
                (s & (1 << A) - 1) != z[q];) A -= v[q], q--
            }
          this.nh = v[1];
          this.status = 0 != E && 1 != p ? 1 : 0
        }
      }
    }

    function d(a) {
      for (; F < a;) D |= (P.length == Q ? -1 : P.charCodeAt(Q++) & 255) << F, F += 8
    }

    function e(a) {
      return D & R[a]
    }

    function g(a) {
      D >>= a;
      F -= a
    }

    function h(a, b, c) {
      var h, l, n;
      if (0 == c) return 0;
      for (n = 0;;) {
        d(L);
        l = K.list[e(L)];
        for (h = l.Ee; 16 < h;) {
          if (99 == h) return -1;
          g(l.bf);
          h -= 16;
          d(h);
          l = l.yk[e(h)];
          h = l.Ee
        }
        g(l.bf);
        if (16 == h) w &= s - 1, a[b + n++] = t[w++] = l.cg;
        else {
          if (15 == h) break;
          d(h);
          E = l.cg + e(h);
          g(h);
          d(N);
          l = O.list[e(N)];
          for (h = l.Ee; 16 < h;) {
            if (99 == h) return -1;
            g(l.bf);
            h -= 16;
            d(h);
            l = l.yk[e(h)];
            h = l.Ee
          }
          g(l.bf);
          d(h);
          J = w - l.cg - e(h);
          for (g(h); 0 < E && n < c;) E--, J &= s - 1, w &= s - 1, a[b + n++] = t[w++] = t[J++]
        }
        if (n == c) return c
      }
      z = -1;
      return n
    }

    function n(a, b, l) {
      var n, k, r, p, q, s, t, w = Array(316);
      for (n = 0; n < w.length; n++) w[n] = 0;
      d(5);
      s = 257 + e(5);
      g(5);
      d(5);
      t = 1 + e(5);
      g(5);
      d(4);
      n = 4 + e(4);
      g(4);
      if (286 < s || 30 < t) return -1;
      for (k = 0; k < n; k++) d(3), w[W[k]] = e(3), g(3);
      for (; 19 > k; k++) w[W[k]] = 0;
      L = 7;
      k = new c(w, 19, 19, m, m, L);
      if (0 != k.status) return -1;
      K = k.root;
      L = k.nh;
      p = s + t;
      for (n = r = 0; n < p;)
        if (d(L), q = K.list[e(L)], k = q.bf, g(k), k = q.cg, 16 > k) w[n++] = r = k;
        else if (16 == k) {
        d(2);
        k = 3 + e(2);
        g(2);
        if (n + k > p) return -1;
        for (; 0 < k--;) w[n++] = r
      } else {
        17 == k ? (d(3), k = 3 + e(3), g(3)) : (d(7), k = 11 + e(7), g(7));
        if (n + k > p) return -1;
        for (; 0 < k--;) w[n++] = 0;
        r = 0
      }
      L = u;
      k = new c(w, s, 257, S, T, L);
      0 == L && (k.status = 1);
      if (0 != k.status) return -1;
      K = k.root;
      L = k.nh;
      for (n = 0; n < t; n++) w[n] = w[n + s];
      N = v;
      k = new c(w, t, 0, U, V, N);
      O = k.root;
      N = k.nh;
      return 0 == N && 257 < s || 0 != k.status ? -1 : h(a, b, l)
    }

    function k(a, b) {
      var r, p;
      for (r = 0; r < b && !(I && -1 == z);) {
        if (0 < E) {
          if (z != l)
            for (; 0 < E && r < b;) E--, J &= s - 1, w &= s - 1, a[0 + r++] = t[w++] = t[J++];
          else {
            for (; 0 < E && r < b;) E--, w &= s - 1, d(8), a[0 + r++] = t[w++] = e(8), g(8);
            0 == E && (z = -1)
          }
          if (r == b) break
        }
        if (-1 == z) {
          if (I) break;
          d(1);
          0 != e(1) && (I = j);
          g(1);
          d(2);
          z = e(2);
          g(2);
          K = m;
          E = 0
        }
        switch (z) {
          case 0:
            p = a;
            var u = 0 + r,
              v = b - r,
              M = oa,
              M = F & 7;
            g(M);
            d(16);
            M = e(16);
            g(16);
            d(16);
            if (M != (~D & 65535)) p = -1;
            else {
              g(16);
              E = M;
              for (M = 0; 0 < E && M < v;) E--, w &= s - 1, d(8), p[u + M++] = t[w++] = e(8), g(8);
              0 == E && (z = -1);
              p = M
            }
            break;
          case 1:
            if (K != m) p = h(a, 0 + r, b - r);
            else a: {
              p = a;
              u = 0 + r;
              v = b - r;
              if (A == m) {
                for (var H = oa, M = Array(288), H = oa, H = 0; 144 > H; H++) M[H] = 8;
                for (; 256 > H; H++) M[H] = 9;
                for (; 280 > H; H++) M[H] = 7;
                for (; 288 > H; H++) M[H] = 8;
                C = 7;
                H = new c(M, 288, 257, S, T, C);
                if (0 != H.status) {
                  alert("HufBuild error: " + H.status);
                  p = -1;
                  break a
                }
                A = H.root;
                C = H.nh;
                for (H = 0; 30 > H; H++) M[H] = 5;
                q = 5;
                H = new c(M, 30, 0, U, V, q);
                if (1 < H.status) {
                  A = m;
                  alert("HufBuild error: " + H.status);
                  p = -1;
                  break a
                }
                B =
                  H.root;
                q = H.nh
              }
              K = A;
              O = B;
              L = C;
              N = q;
              p = h(p, u, v)
            }
            break;
          case 2:
            p = K != m ? h(a, 0 + r, b - r) : n(a, 0 + r, b - r);
            break;
          default:
            p = -1
        }
        if (-1 == p) return I ? 0 : -1;
        r += p
      }
      return r
    }

    function p(a) {
      var b, c, d;
      t == m && (t = Array(2 * s));
      F = D = w = 0;
      z = -1;
      I = G;
      E = J = 0;
      K = m;
      P = a;
      Q = 0;
      b = Array(1024);
      for (a = ""; 0 < (c = k(b, b.length));)
        for (d = 0; d < c; d++) a += String.fromCharCode(b[d]);
      P = m;
      return a
    }
    var q, s = 32768,
      l = 0,
      u = 9,
      v = 6,
      t, w, A = m,
      B, C, D, F, z, I, E, J, K, O, L, N, P, Q, R = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
      S = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
        35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
      ],
      T = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99],
      U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
      V = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      W = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    H.df.DEFLATE ? H.df.DEFLATE.yw = p : H.df.DEFLATE = {
      tq: "\u0008\x00",
      yw: p
    }
  })();
  (function() {
    function a(a) {
      var b = "",
        c, d;
      for (d = 0; d < (a || "").length; d++) c = a.charCodeAt(d),
        b += "\\x" + (16 > c ? "0" : "") + c.toString(16).toUpperCase();
      return b
    }

    function b(a) {
      this.Mh = "";
      H.xk.Mr && a instanceof Uint8Array ? this.Mh = H.Dg.Lr(a) : H.xk.Qx && a instanceof ArrayBuffer ? (a = new Uint8Array(a), this.Mh = H.Dg.Lr(a)) : this.Mh = H.Dg.sC(a);
      this.index = 0
    }

    function c(a, b) {
      this.options = a;
      this.Cu = b
    }

    function d(a, b) {
      this.files = [];
      this.Cu = b;
      a && this.load(a)
    }
    b.prototype = {
      ly: function(a) {
        this.ky(this.index + a)
      },
      ky: function(a) {
        (this.Mh.length < a || 0 > a) && f(Error("End of stream reached (stream length = " + this.Mh.length + ", asked index = " +
          a + "). Corrupted zip ?"))
      },
      Rl: function(a) {
        this.ky(a);
        this.index = a
      },
      nC: function(a) {
        this.Rl(this.index + a)
      },
      KF: function(a) {
        return this.Mh.charCodeAt(a)
      },
      na: function(a) {
        var b = 0,
          c;
        this.ly(a);
        for (c = this.index + a - 1; c >= this.index; c--) b = (b << 8) + this.KF(c);
        this.index += a;
        return b
      },
      Me: function(a) {
        this.ly(a);
        var b = this.Mh.slice(this.index, this.index + a);
        this.index += a;
        return b
      },
      FI: function() {
        var a = this.na(4);
        return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (a & 31) << 1)
      }
    };
    c.prototype = {
      lH: function() {
        return 1 ===
          (this.ay & 1)
      },
      yJ: function() {
        return 2048 === (this.ay & 2048)
      },
      JI: function(b) {
        var c;
        b.nC(22);
        this.Rt = b.na(2);
        c = b.na(2);
        this.fileName = b.Me(this.Rt);
        b.nC(c);
        (-1 == this.xp || -1 == this.Or) && f(Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)"));
        this.SF = b.Me(this.xp);
        a: {
          for (var d in H.df)
            if (H.df.hasOwnProperty(d) && H.df[d].tq === this.py) {
              b = H.df[d];
              break a
            }
          b = m
        }
        b === m && f(Error("Corrupted zip : compression " + a(this.py) + " unknown (inner file : " +
          this.fileName + ")"));
        this.zw = b.yw(this.SF);
        this.zw.length !== this.Or && f(Error("Bug : uncompressed data size mismatch"));
        this.Cu.nO && H.prototype.Ap(this.zw) !== this.Ap && f(Error("Corrupted zip : CRC32 mismatch"))
      },
      EI: function(a) {
        a.Me(2);
        a.na(2);
        this.ay = a.na(2);
        this.py = a.Me(2);
        this.ff = a.FI();
        this.Ap = a.na(4);
        this.xp = a.na(4);
        this.Or = a.na(4);
        this.Rt = a.na(2);
        this.BG = a.na(2);
        this.DG = a.na(2);
        this.Ny = a.na(2);
        a.na(2);
        this.AG = a.na(4);
        this.Eu = a.na(4);
        this.lH() && f(Error("Encrypted zip are not supported"));
        this.fileName =
          a.Me(this.Rt);
        this.HI(a);
        this.jI(a);
        this.cz = a.Me(this.DG);
        this.dir = this.AG & 16 ? j : G
      },
      jI: function() {
        if (this.Lp[1]) {
          var a = new b(this.Lp[1].value); - 1 === this.Or && (this.Or = a.na(8)); - 1 === this.xp && (this.xp = a.na(8)); - 1 === this.Eu && (this.Eu = a.na(8)); - 1 === this.Ny && (this.Ny = a.na(4))
        }
      },
      HI: function(a) {
        var b = a.index,
          c, d, k;
        for (this.Lp = this.Lp || {}; a.index < b + this.BG;) c = a.na(2), d = a.na(2), k = a.Me(d), this.Lp[c] = {
          id: c,
          length: d,
          value: k
        }
      },
      $G: function() {
        this.yJ() && (this.fileName = H.prototype.BC(this.fileName), this.cz = H.prototype.BC(this.cz))
      }
    };
    d.prototype = {
      vp: function(b) {
        var c = this.Fa.Me(4);
        c !== b && f(Error("Corrupted zip or bug : unexpected signature (" + a(c) + ", expected " + a(b) + ")"))
      },
      zI: function() {
        this.My = this.Fa.na(2);
        this.Oy = this.Fa.na(2);
        this.hy = this.Fa.na(2);
        this.gy = this.Fa.na(2);
        this.iy = this.Fa.na(4);
        this.st = this.Fa.na(4);
        this.DJ = this.Fa.na(2);
        this.Fa.Me(this.DJ)
      },
      AI: function() {
        this.BJ = this.Fa.na(8);
        this.Fa.Me(2);
        this.Fa.na(2);
        this.My = this.Fa.na(4);
        this.Oy = this.Fa.na(4);
        this.hy = this.Fa.na(8);
        this.gy = this.Fa.na(8);
        this.iy = this.Fa.na(8);
        this.st = this.Fa.na(8);
        this.CJ = {};
        for (var a = this.BJ - 44, b, c, d; 0 < a;) b = this.Fa.na(2), c = this.Fa.na(4), d = this.Fa.Me(c), this.CJ[b] = {
          id: b,
          length: c,
          value: d
        }
      },
      BI: function() {
        this.Fa.na(4);
        this.MI = this.Fa.na(8);
        this.lG = this.Fa.na(4);
        1 < this.lG && f(Error("Multi-volumes zip are not supported"))
      },
      II: function() {
        var a, b;
        for (a = 0; a < this.files.length; a++) b = this.files[a], this.Fa.Rl(b.Eu), this.vp(H.wg.dx), b.JI(this.Fa), b.$G()
      },
      DI: function() {
        var a;
        for (this.Fa.Rl(this.st); this.Fa.Me(4) === H.wg.Pw;) a = new c({
            JC: this.JC
          }, this.Cu),
          a.EI(this.Fa), this.files.push(a)
      },
      GI: function() {
        var a = this.Fa.Mh.lastIndexOf(H.wg.$r); - 1 === a && f(Error("Corrupted zip : can't find end of central directory"));
        this.Fa.Rl(a);
        this.vp(H.wg.$r);
        this.zI();
        if (65535 === this.My || 65535 === this.Oy || 65535 === this.hy || 65535 === this.gy || -1 === this.iy || -1 === this.st) this.JC = j, a = this.Fa.Mh.lastIndexOf(H.wg.Ix), -1 === a && f(Error("Corrupted zip : can't find the ZIP64 end of central directory locator")), this.Fa.Rl(a), this.vp(H.wg.Ix), this.BI(), this.Fa.Rl(this.MI), this.vp(H.wg.wF),
          this.AI()
      },
      load: function(a) {
        this.Fa = new b(a);
        this.GI();
        this.DI();
        this.II()
      }
    };
    H.prototype.load = function(a, b) {
      var c, n, k, b = b || {};
      b.Yg && (a = yb.Hy(a));
      c = (new d(a, b)).files;
      for (n = 0; n < c.length; n++) k = c[n], this.file(k.fileName, k.zw, {
        ii: j,
        kB: j,
        ff: k.ff,
        dir: k.dir
      });
      return this
    }
  })();
  var Bd = document.getElementsByTagName("script"),
    Cd = Bd[Bd.length - 1].src;
  document.WP = Cd.substring(0, Cd.lastIndexOf("/") + 1);
  ja.Runtime = dd;
  ja.headerLoaded = ed;
  ja.uJ = "updateApplication";
  ja[window.uJ] = Za;
  Da.prototype = {
    kb: function(a, b, c) {
      if (this.visible) {
        this.Lf &&
          (a.wa.save(), a.wa.translate(this.yo, this.zo), 0 != this.Ae && a.wa.rotate(0.0174532925 * -this.Ae), a.wa.scale(Math.max(0.001, this.Zb), Math.max(0.001, this.$b)), a.wa.translate(-this.Ga, -this.va));
        var d;
        for (d = 0; d < this.children.length; d++) this.children[d].kb(a, b + this.x, c + this.y);
        this.Lf && a.wa.restore()
      }
    },
    Vd: function(a) {
      this.children.push(a)
    },
    np: function(a, b) {
      b >= this.children.length ? this.children.push(a) : (0 > b && (b = 0), this.children.splice(b, 0, a))
    },
    NI: function() {
      this.children.length = 0
    },
    removeChild: function(a) {
      var b;
      for (b = 0; b < this.children.length; b++)
        if (this.children[b] == a) return this.children.splice(b, 1), b;
      return -1
    },
    Vc: function(a) {
      var b;
      for (b = 0; b < this.children.length; b++)
        if (this.children[b] == a) return b;
      return -1
    },
    wd: function(a, b) {
      var c, d = m;
      for (c = 0; c < this.children.length; c++)
        if (this.children[c] == a) {
          d = this.children[c];
          break
        }
      d != m && (this.children.splice(c, 1), b > c && b--, 0 > b && (b = 0), b >= this.children.length ? this.children.push(a) : this.children.splice(b, 0, a))
    }
  };
  ua.dm = 0;
  ua.he = 1;
  ua.lD = 1;
  ua.mD = 2;
  ua.fm = 64;
  ua.gm = 16;
  ua.jm = 6;
  F.sN =
    0;
  F.tN = 1;
  F.Jg = 0;
  F.Wh = 1;
  F.uu = [65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1];
  F.Fv = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
  F.$i = new ta;
  F.aj = new ta;
  F.Zk = new ta;
  F.ji = new ta;
  F.prototype = {
    Dt: function(a, b, c) {
      var d, e;
      this.width = b.width;
      this.height = b.height;
      this.Ga = b.Ga;
      this.va = b.va;
      var g = Math.floor((this.width + 15 & 4294967280) / 16);
      this.lineWidth = g;
      e = g * this.height + 1;
      if ("undefined" != typeof ArrayBuffer) this.H = new Uint16Array(new ArrayBuffer(2 *
        e));
      else {
        this.H = Array(e);
        for (d = 0; d < e; d++) this.H[d] = 0
      }
      d = document.createElement("canvas");
      d.width = b.width;
      d.height = b.height;
      d = d.getContext("2d");
      0 == b.Ab ? d.drawImage(b.zb, 0, 0) : d.drawImage(a.P.Hb[b.Ab], b.Ld, b.Md, b.width, b.height, 0, 0, b.width, b.height);
      a = d.getImageData(0, 0, this.width, this.height);
      if (0 == (c & F.Wh))
        for (c = 0; c < this.height; c++)
          for (d = 0; d < this.width; d++) 0 != a.data[4 * (c * b.width + d) + 3] && (e = Math.floor(c * g + (d & 4294967280) / 16), this.H[e] |= 32768 >> d % 16);
      else {
        var h, n;
        for (d = 0; d < this.width; d++) {
          for (c = 0; c < this.height &&
            0 == a.data[4 * (c * b.width + d) + 3]; c++);
          if (c < this.height) {
            h = Math.min(this.height, c + ua.jm);
            for (n = 32768 >> (d & 15); c < h; c++) 0 != a.data[4 * (c * b.width + d) + 3] && (e = Math.floor(c * g + (d & 4294967280) / 16), this.H[e] |= n)
          }
        }
      }
    },
    RI: function(a, b, c) {
      var d, e, g;
      90 == c ? (c = 0, g = 1) : 180 == c ? (c = -1, g = 0) : 270 == c ? (c = 0, g = -1) : (g = c * Math.PI / 180, c = Math.cos(g), g = Math.sin(g));
      var h, n;
      b == m ? (e = n = 0, topLeft.x = topLeft.y = 0) : (h = -b.x * c, d = -b.x * g, e = -b.y * c, n = -b.y * g, F.$i.x = Math.floor(h + n), F.$i.y = Math.floor(e - d));
      d = b == m ? a.right : a.right - b.x;
      h = d * c;
      d *= g;
      F.aj.x = Math.floor(h +
        n);
      F.aj.y = Math.floor(e - d);
      e = b == m ? a.bottom : a.bottom - b.y;
      F.ji.x = Math.floor(h + e * g);
      F.ji.y = Math.floor(e * c - d);
      F.Zk.x = F.$i.x + F.ji.x - F.aj.x;
      F.Zk.y = F.$i.y + F.ji.y - F.aj.y;
      c = Math.min(F.$i.x, Math.min(F.aj.x, Math.min(F.ji.x, F.Zk.x)));
      g = Math.min(F.$i.y, Math.min(F.aj.y, Math.min(F.ji.y, F.Zk.y)));
      h = Math.max(F.$i.x, Math.max(F.aj.x, Math.max(F.ji.x, F.Zk.x)));
      d = Math.max(F.$i.y, Math.max(F.aj.y, Math.max(F.ji.y, F.Zk.y)));
      b != m && (b.x = -c, b.y = -g);
      a.right = h - c;
      a.bottom = d - g
    },
    aG: function(a, b, c, d) {
      var e, g, h = a.width;
      e = a.height;
      var n =
        new aa;
      n.right = Math.floor(a.width * c);
      n.bottom = Math.floor(a.height * d);
      var k = new ta;
      k.x = Math.floor(a.Ga * c);
      k.y = Math.floor(a.va * d);
      this.RI(n, k, b);
      var p = n.right,
        n = n.bottom;
      if (0 >= p || 0 >= n) return G;
      var q = a.lineWidth,
        s = (p + 15 & 2147483632) / 16;
      this.H = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 * (s * n + 1))) : Array(s * n + 1);
      var l;
      for (l = s * n; 0 <= l; l--) this.H[l] = 0;
      this.lineWidth = s;
      this.width = p;
      this.height = n;
      this.Ga = k.x;
      this.va = k.y;
      b *= 0.017453292;
      g = Math.cos(b);
      var t = Math.sin(b),
        b = 0,
        k = Math.floor(65536 *
          (h / 2 - (p / 2 * g - n / 2 * t) / c));
      l = Math.floor(65536 * (e / 2 - (p / 2 * t + n / 2 * g) / d));
      var u = Math.floor(65536 * g / c),
        v = Math.floor(65536 * t / d),
        w = p / 16,
        p = p % 16,
        d = Math.floor(65536 * g / d),
        c = Math.floor(65536 * t / c),
        h = 65536 * h,
        t = 65536 * e,
        A, B;
      for (g = 0; g < n; g++) {
        var C = k,
          D = l,
          F = b,
          z;
        for (e = 0; e < w; e++) {
          var E = 0;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 32768));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B *
            q + z / 16)], 0 != (B & A) && (E |= 16384));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 8192));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 4096));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 2048));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C /
            65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 1024));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 512));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 256));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 !=
            (B & A) && (E |= 128));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 64));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 32));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 16));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D /
            65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 8));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 4));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 2));
          C += u;
          D += v;
          0 <= C && C < h && (0 <= D && D < t) && (z = Math.floor(C / 65536), B = Math.floor(D / 65536), A = 32768 >>> z % 16, B = a.H[Math.floor(B * q + z / 16)], 0 != (B & A) && (E |= 1));
          C += u;
          D += v;
          this.H[F++] =
            E
        }
        if (0 != p) {
          E = 32768;
          for (e = z = 0; e < p; e++, E = E >> 1 & 32767) {
            if (0 <= C && C < h && 0 <= D && D < t) {
              B = Math.floor(C / 65536);
              var H = Math.floor(D / 65536);
              A = 32768 >>> B % 16;
              B = a.H[Math.floor(H * q + B / 16)];
              0 != (B & A) && (z |= E)
            }
            C += u;
            D += v
          }
          this.H[F] = z
        }
        b += s;
        k -= c;
        l += d
      }
      return j
    },
    Zi: function(a, b, c, d, e, g, h) {
      var n, k, p, q;
      a <= e ? (n = this, q = Math.floor(c), h = Math.floor(h), k = Math.floor(a), c = Math.floor(b), a = Math.floor(e), b = Math.floor(g)) : (n = d, d = this, q = Math.floor(h), h = Math.floor(c), k = Math.floor(e), c = Math.floor(g), a = Math.floor(a), b = Math.floor(b));
      g = n.height;
      e =
        0;
      0 != q && (g = q, c += n.height - q, e = n.height - q);
      p = d.height;
      var s = 0;
      0 != h && (p = h, b += d.height - h, s = d.height - h);
      if (k >= a + d.width || k + n.width <= a || c >= b + p || c + g < b) return G;
      h = a - k;
      q = Math.floor(h / 16);
      h %= 16;
      k = Math.min(k + n.width - a, d.width);
      k = Math.floor((k + 15) / 16);
      c <= b ? (a = b - c + e, e = s, c = Math.min(c + g, b + p) - b) : (a = e, e = c - b + s, c = Math.min(c + g, b + p) - c);
      var l, t;
      if (0 != h) switch (k) {
        case 1:
          for (g = 0; g < c; g++)
            if (p = (a + g) * n.lineWidth, s = (e + g) * d.lineWidth, l = n.H[p + q] << h, 0 != (l & d.H[s]) || 16 * q + 16 < n.width && (l = (n.H[p + q + 1] & 65535) << h, l >>>= 16, 0 != (l & d.H[s]))) return j;
          break;
        case 2:
          for (g = 0; g < c; g++) {
            p = (a + g) * n.lineWidth;
            s = (e + g) * d.lineWidth;
            l = n.H[p + q] << h;
            if (0 != (l & d.H[s])) return j;
            l = (n.H[p + q + 1] & 65535) << h;
            t >>>= 16;
            if (0 != (t & d.H[s]) || 0 != (l & d.H[s + 1]) || q + 2 < n.lineWidth && 0 != (t & d.H[s + 1])) return j
          }
          break;
        default:
          for (g = 0; g < c; g++) {
            p = (a + g) * n.lineWidth;
            s = (e + g) * d.lineWidth;
            l = n.H[p + q] << h;
            if (0 != (l & d.H[s])) return j;
            for (b = 0; b < k - 1; b++)
              if (l = (n.H[p + q + b + 1] & 65535) << h, t >>>= 16, 0 != (t & d.H[s + b]) || 0 != (l & d.H[s + b + 1])) return j;
            if (q + b + 1 < n.lineWidth && (t >>>= 16, 0 != (t & d.H[s + b]))) return j
          }
      } else
        for (g = 0; g <
          c; g++) {
          p = (a + g) * n.lineWidth;
          s = (e + g) * d.lineWidth;
          for (b = 0; b < k; b++)
            if (l = n.H[p + q + b], 0 != (d.H[s + b] & l)) return j
        }
      return G
    },
    uw: function(a, b, c, d, e, g, h, n) {
      var a = Math.floor(a),
        b = Math.floor(b),
        d = Math.floor(d),
        e = Math.floor(e),
        k = 0,
        p = this.height;
      0 < c && (k = this.height - c, b += k, p = c);
      c = h;
      0 < n && (e += h - n, c = n);
      if (a >= d + g || a + this.width <= d || b >= e + c || b + p < e) return G;
      a <= d ? (h = d - a, a = Math.min(this.width - h, g)) : (h = 0, a = Math.min(d + g - a, this.width));
      b <= e ? (k = e - b + k, b = Math.min(b + p, e + c) - e) : b = Math.min(b + p, e + c) - b;
      e = Math.floor(h / 8);
      p = Math.floor((h +
        a + 15) / 16) - Math.floor(h / 16);
      for (g = 0; g < b; g++) switch (d = (g + k) * this.lineWidth, p) {
        case 1:
          c = F.uu[h & 15] & F.Fv[(h + a - 1 & 15) + 1];
          if (0 != (this.H[d + e] & c)) return j;
          break;
        case 2:
          c = F.uu[h & 15];
          if (0 != (this.H[d + e] & c)) return j;
          c = F.Fv[(h + a - 1 & 15) + 1];
          if (0 != (this.H[d + e + 1] & c)) return j;
          break;
        default:
          c = F.uu[h & 15];
          if (0 != (this.H[d + e] & c)) return j;
          for (n = 1; n < p - 1; n++)
            if (0 != this.H[d + e + n]) return j;
          c = F.Fv[(h + a - 1 & 15) + 1];
          if (0 != (this.H[d + e + n] & c)) return j
      }
      return G
    },
    zk: function(a, b, c, d) {
      a = Math.floor(c - a);
      b = Math.floor(d - b);
      return 0 > a || a >= this.width ||
        0 > b || b >= this.height ? G : 0 != (this.H[b * this.lineWidth + Math.floor(a / 16)] & 32768 >>> (a & 15)) ? j : G
    }
  };
  w.Ug = 1;
  w.qF = 2;
  w.Ss = 4;
  w.rF = 16;
  w.Vg = 32;
  w.rj = 64;
  w.qj = 128;
  w.wN = 0;
  w.vN = 1;
  w.bK = 0;
  w.We = 1;
  w.eK = 2;
  w.ZC = 3;
  w.YJ = 4;
  w.hK = 5;
  w.aK = 6;
  w.cK = 7;
  w.ZJ = 8;
  w.WC = 9;
  w.gK = 10;
  w.iK = 11;
  w.$J = 12;
  w.dK = 13;
  w.fK = 13;
  w.XC = 4095;
  w.YC = 4096;
  w.Iw = 8192;
  w.prototype = {
    dH: function(a, b, c) {
      this.a = a;
      this.Pl = c.ny;
      this.zr = c.oy;
      this.L = 0;
      this.L |= w.rj;
      0 == (this.a.hh & O.ke) && (this.L &= ~w.rj);
      0 != (this.a.Ub.gB & A.bF) && (this.L |= w.qj);
      0 != (c.Bm & k.em) ? (this.L |= w.Ug, this.a.qa ==
        s.Sg && (this.a.M |= E.Kg, this.L &= ~w.rj)) : this.L |= w.Vg;
      this.Jc = this.a.Ub.fB;
      this.uc = this.a.Ub.eB;
      this.a.b.vd == R.UE && (this.L |= w.qF)
    },
    mu: function(a) {
      this.bG(a);
      a && this.a.G.vl && (this.a.M |= E.Xh)
    },
    handle: function() {
      var a = this.a.c,
        b, c, d, e;
      if (0 != (this.a.M & E.Xh)) this.tg || this.cl(G), this.lI();
      else if (0 != (this.a.M & E.Yh)) this.mI();
      else if (0 == (this.L & w.Ss)) {
        if (0 != this.vr && (this.wr -= a.ho, 0 > this.wr && (this.wr = this.vr, 0 == (this.L & w.Vg) ? (this.L |= w.Vg, this.Yu()) : (this.L &= ~w.Vg, this.Fq()))), this.a.q != m && this.a.q.move(),
          0 == this.a.b.Gh && 0 == (this.a.Ba & A.dp)) b = this.a.o - this.a.ba, c = this.a.n - this.a.ca, d = b + this.a.B, e = c + this.a.A, d >= a.Hl && b <= a.Gl && e >= a.Jl && c <= a.Il || (d >= a.$n && b <= a.Zn && e >= a.bo && c <= a.ao ? (this.L |= w.Ss, this.zr = this.a.mi()) : 0 == (this.a.Ba & A.eF) && a.bh(this.a.Ob))
      } else b = this.a.o - this.a.ba, c = this.a.n - this.a.ca, d = b + this.a.B, e = c + this.a.A, d >= a.Hl && (b <= a.Gl && e >= a.Jl && c <= a.Il) && (this.L &= ~w.Ss, this.mu(G), this.a.wd(this.zr))
    },
    bG: function() {
      0 != (this.a.Ba & A.oj) ? this.a.at(this.a.o - this.a.c.V, this.a.n - this.a.c.Y, this.a.b.Da,
        this.Pl, 0 == (this.L & w.Ug)) : (this.a.M |= E.sE, this.a.Xk(this.a.o - this.a.c.V, this.a.n - this.a.c.Y, this.Pl, 0 != (this.a.Ba & A.Os), 0 == (this.L & w.Ug), -1))
    },
    cl: function(a) {
      this.a.M &= ~(E.Xh | E.Yh);
      if (a == G) {
        if (!this.a.G.vl) return G;
        this.a.M |= E.Xh
      } else {
        if (!this.a.G.Dn) return G;
        this.a.M |= E.Yh
      }
      this.tg = this.a.c.f.eu().mJ(this.a, a);
      return !this.tg ? (this.a.M &= ~(E.Xh | E.Yh), G) : j
    },
    lI: function() {
      if (0 != (this.a.M & E.Xh)) {
        if (this.tg.$p()) return this.a.M &= ~E.Xh, this.tg = this.a.Bk = m, G;
        this.tg.wb(t.Vs);
        return j
      }
      return G
    },
    mI: function() {
      if (0 !=
        (this.a.M & E.Yh)) {
        if (this.tg.$p()) return this.Bk = this.tg = m, this.a.c.bh(this.a.Ob), G;
        this.tg.wb(t.lp);
        return j
      }
      return G
    },
    eH: function() {
      return this.cl(j) ? (this.a.M |= E.Kg, j) : G
    },
    qb: function() {
      this.zr = this.a.mi()
    },
    Fq: function() {
      0 == (this.L & w.Ug) && (this.L |= w.Ug, this.a.b.D = j, this.a.Kj())
    },
    Yu: function() {
      0 != (this.L & w.Ug) && (this.a.c.p.ab[this.a.Fd].ya & (W.Io | W.ns)) == W.ns && (this.L &= ~w.Ug, this.a.M &= ~E.Kg, this.a.b.D = j, this.a.vk())
    },
    Ar: function(a) {
      this.L = a ? this.L | w.rj : this.L & ~w.rj
    }
  };
  fd.prototype = {
    load: function(a) {
      this.Cq =
        a.k();
      this.Lb = Array(this.Cq);
      var b;
      for (b = 0; b < this.Cq; b++) this.Lb[b] = a.Ya()
    }
  };
  gd.prototype = {
    load: function(a) {
      this.Dq = a.k();
      this.Oh = Array(this.Dq);
      var b;
      for (b = 0; b < this.Dq; b++) this.Oh[b] = a.m()
    }
  };
  Fa.vF = 26;
  Fa.Dx = 10;
  Fa.prototype = {
    N: function(a, b) {
      this.jw = 0;
      this.$c = Array(Fa.vF);
      this.fe = Array(Fa.Dx);
      var c;
      for (c = 0; c < this.$c.length; c++) this.$c[c] = 0;
      for (c = 0; c < this.fe.length; c++) this.fe[c] = "";
      if (b.Hn != m)
        for (c = 0; c < b.Hn.Dq; c++) this.$c[c] = b.Hn.Oh[c];
      if (b.Gn != m)
        for (c = 0; c < b.Gn.Cq; c++) this.fe[c] = b.Gn.Lb[c]
    },
    qb: function() {
      var a;
      for (a = 0; a < this.$c.length; a++) this.$c[a] = 0;
      for (a = 0; a < this.fe.length; a++) this.fe[a] = m
    },
    Dz: function(a) {
      return a < this.$c.length ? this.$c[a] : 0
    },
    Bz: function(a) {
      return a < this.fe.length ? this.fe[a] : ""
    },
    gC: function(a, b) {
      a > this.nb.$c.length && this.Iz(a + 10);
      this.$c[a] = b
    },
    Iz: function(a) {
      if (a >= this.$c.length) {
        var b;
        for (b = 0; b < a; b++) this.$c[b] = 0
      }
    },
    XG: function(a) {
      if (a >= this.fe.length) {
        var b;
        for (b = 0; b < a; b++) this.fe[b] = ""
      }
    }
  };
  Pa.If = 32;
  Pa.prototype = {
    ZF: function() {
      this.Gj = Array(3);
      this.Eq = Array(3);
      var a;
      for (a = 0; 3 > a; a++) this.Gj[a] =
        m, this.Eq[a] = 0;
      a = new ub;
      a.handle = 0;
      this.Nx(a);
      a = new ub;
      a.handle = 2;
      this.Nx(a)
    },
    Nx: function(a) {
      var b = a.iq();
      b != m && (this.Gj[a.handle] = a, this.Eq[a.handle] = b.Xm())
    },
    iq: function(a) {
      var a = a - Pa.If,
        b = m;
      a < this.Gj.length && this.Gj[a] != m && (b = this.Gj[a].iq());
      return b
    },
    Xm: function(a) {
      a -= Pa.If;
      return a < this.Gj.length ? this.Eq[a] : 0
    }
  };
  ub.prototype = {
    iq: function() {
      switch (this.handle) {
        case 0:
          return new J;
        case 2:
          return new T
      }
      return m
    }
  };
  Ka.lN = 1;
  Ka.Cx = 2;
  Ka.prototype = {
    N: function(a) {
      this.v = a;
      this.T = a.c
    },
    Xm: $(0),
    Et: $(G),
    Tp: function() {
      return Ka.Cx
    },
    Ly: X(),
    vy: X(),
    kI: X(),
    VF: X(),
    bl: $(G),
    action: X(),
    Nm: $(m),
    zz: $(m),
    bC: X(),
    du: $(0),
    nw: X(),
    wj: X(),
    Qm: X()
  };
  hd.prototype = {
    evaluate: function(a) {
      var b = a.l.$m(this.Ib);
      if (b == m) a.Hc[a.gb] = 0;
      else {
        var c = (this.code >> 16) - P.Vh;
        a.Ft = this;
        a.Hc[a.gb] = b.Nm(c)
      }
    }
  };
  id.prototype = {
    execute: function(a) {
      var b = a.l.il(this);
      if (b != m) {
        var c = (this.la >>> 16) - P.Vh;
        a.Ft = this;
        b.action(c, this)
      }
    },
    cu: function(a, b) {
      var c = this.s[b],
        d = new Cc;
      c.EB(a, 0, d) && (c.jz = j);
      return d
    },
    ld: function(a, b) {
      return a.lf(this.s[b])
    },
    bu: function(a, b) {
      return 24 ==
        this.s[b].code ? this.s[b].color : q.tC(a.lf(this.s[b]))
    },
    hl: function(a, b) {
      return a.gu(this.s[b])
    },
    xz: function(a, b) {
      return 40 == this.s[b].code ? this.s[b].ob : a.gu(this.s[b])
    }
  };
  jd.prototype = {
    dc: function(a, b) {
      if (b == m) return this.Aa(a);
      b.M |= E.ts;
      var c = -(this.la >> 16) - P.Vh - 1;
      a.Ft = this;
      return b.bl(c, this) ? (a.l.Fj(b), j) : G
    },
    Aa: function(a) {
      var b = a.l.ni(this.xb),
        c = a.l.fh,
        d = -(this.la >> 16) - P.Vh - 1;
      for (a.Ft = this; b != m;) b.M &= ~E.ts, b.bl(d, this) ? 0 != (this.gf & Q.Ik) && (c--, a.l.Qf()) : 0 == (this.gf & Q.Ik) && (c--, a.l.Qf()), b = a.l.oi();
      return 0 != c ? j : G
    },
    cu: function(a, b) {
      return this.s[b]
    },
    ld: function(a, b) {
      return a.lf(this.s[b])
    },
    bu: function(a, b) {
      return 24 == this.s[b].code ? this.s[b].color : q.tC(a.lf(this.s[b]))
    },
    hl: function(a, b) {
      return a.gu(this.s[b])
    }
  };
  Qa.prototype = q.extend(new Ka, {
    Qm: function() {
      this.vg(this.v.o, this.v.n)
    },
    wj: function() {
      this.vg(this.v.o, this.v.n);
      this.Sl(this.v.B, this.v.A)
    },
    ZB: function(a, b) {
      this.element = a;
      a.style.position = "absolute";
      this.Sl(this.v.B, this.v.A);
      this.vg(this.v.o, this.v.n);
      this.Tt && this.Bf(this.Tt);
      this.kt =
        this.v.$ = b;
      this.T.f.mh ? (a.style.visibility = "hidden", this.kt = G) : a.style.visibility = b ? "visible" : "hidden";
      var c = this.T.f.At;
      c.insertBefore(a, c.firstChild)
    },
    kP: $(0),
    mP: $(0),
    Gr: function(a) {
      this.Cy = a;
      this.v.Gr(a);
      this.element && (this.element.style.left = 0 + (this.T.f.Dk + this.v.o - this.v.c.V) * this.T.f.Zb + "px")
    },
    Hr: function(a) {
      this.Dy = a;
      this.v.Hr(a);
      this.element && (this.element.style.top = 0 + (this.T.f.Ek + this.v.n - this.v.c.Y) * this.T.f.$b + "px")
    },
    vg: function(a, b) {
      this.Cy = a;
      this.Dy = b;
      this.v.vg(a, b);
      this.element && (this.element.style.left =
        0 + (this.T.f.Dk + this.v.o - this.v.c.V) * this.T.f.Zb + "px", this.element.style.top = 0 + (this.T.f.Ek + this.v.n - this.v.c.Y) * this.T.f.$b + "px")
    },
    po: function(a) {
      this.By = a;
      this.v.po(a);
      this.element && (this.element.style.width = this.v.B * this.T.f.Zb + "px")
    },
    oo: function(a) {
      this.Ay = a;
      this.v.oo(a);
      this.element && !this.sy && (this.element.style.height = this.v.A * this.T.f.$b + "px")
    },
    Sl: function(a, b) {
      this.By = a;
      this.Ay = b;
      this.v.Sl(a, b);
      this.element && (this.element.style.width = this.v.B * this.T.f.Zb + "px", this.sy || (this.element.style.height =
        this.v.A * this.T.f.$b + "px"))
    },
    Bf: function(a) {
      this.Tt = a;
      this.element && (this.element.style.font = a.Sf())
    },
    Ly: function() {
      this.element && this.T.f.At.removeChild(this.element)
    },
    zz: Z("Tt"),
    bC: function(a) {
      this.Bf(a)
    },
    Tp: function() {
      !this.T.f.mh && this.v.$ != this.kt && (this.kt = this.v.$, this.element.style.visibility = this.v.$ ? "visible" : "hidden");
      (this.v.o != this.Cy || this.v.n != this.Dy) && this.vg(this.v.o, this.v.n);
      (this.v.B != this.By || this.v.A != this.Ay) && this.Sl(this.v.B, this.v.A);
      return 0
    }
  });
  R.UE = 0;
  R.SE = 1;
  R.TE = 2;
  R.tM =
    3;
  R.sM = 4;
  R.uM = 5;
  R.ox = 9;
  R.RE = 11;
  R.rM = 12;
  R.QE = 13;
  R.Rk = 14;
  R.prototype = {
    setData: function(a, b, c, d, e) {
      this.Uu = a;
      this.ql = b;
      this.SA = c;
      this.RA = d;
      this.yq = e
    }
  };
  kd.prototype = {
    load: function(a) {
      var b = a.U;
      this.xn = a.m();
      this.od = Array(this.xn);
      var c;
      for (c = 0; c < this.xn; c++) {
        a.seek(b + 4 + 16 * c);
        var d = a.m(),
          e = a.m(),
          g = a.m(),
          h = a.m();
        a.seek(b + g);
        var g = a.k(),
          n = a.k(),
          k = a.Ea(),
          p = a.Ea();
        a.W(2);
        var q = a.m();
        switch (n) {
          case 0:
            this.od[c] = new sd;
            break;
          case 1:
            this.od[c] = new nd;
            break;
          case 2:
            this.od[c] = new rd;
            break;
          case 3:
            this.od[c] = new md;
            break;
          case 4:
            this.od[c] = new ld;
            break;
          case 5:
            this.od[c] = new od;
            break;
          case 9:
            this.od[c] = new qd;
            break;
          case 14:
            this.od[c] = new td
        }
        this.od[c].setData(n, g, k, q, p);
        this.od[c].load(a, h - 12);
        14 == n && (a.seek(b + d), d = a.Ya(), d = d.substring(0, d.length - 4), d = d.toLowerCase(), this.od[c].dJ(d, e))
      }
    }
  };
  ld.prototype = q.extend(new R, {
    load: function(a) {
      this.pn = a.k();
      this.iA = a.k();
      this.hA = a.k();
      this.kA = a.k();
      this.jA = a.k()
    }
  });
  md.prototype = q.extend(new R, {
    load: function(a) {
      this.rA = a.k();
      this.oA = a.k();
      this.pA = a.k();
      a.k();
      this.qA = a.m()
    }
  });
  nd.prototype = q.extend(new R, {
    load: function(a) {
      this.sA = a.J();
      this.uA = a.J();
      this.tA = a.J();
      this.vA = a.J();
      a.k()
    }
  });
  od.prototype = q.extend(new R, {
    load: function(a) {
      this.pl = a.k();
      this.MA = a.k();
      this.LA = a.k();
      this.Tu = a.Ea();
      this.OA = a.Ea();
      this.QA = a.Ea();
      a.W(1);
      this.Ka = Array(this.pl);
      var b, c, d;
      for (b = 0; b < this.pl; b++) d = a.U, this.Ka[b] = new pd, a.sa(), c = a.sa(), this.Ka[b].load(a), a.seek(d + c)
    }
  });
  pd.prototype = {
    load: function(a) {
      this.nA = a.Ea();
      this.Lu = a.Ea();
      this.Mu = a.J();
      this.Nu = a.J();
      this.Ku = a.J();
      this.Pu = a.J();
      this.mA =
        a.k();
      this.Ou = a.k();
      a = a.Ya();
      0 < a.length && (this.$d = a)
    }
  };
  qd.prototype = q.extend(new R, {
    load: function(a) {
      this.FA = a.k();
      this.AA = a.k();
      this.BA = a.k();
      this.EA = a.k();
      this.CA = a.k();
      this.DA = a.k()
    }
  });
  rd.prototype = q.extend(new R, {
    load: function(a) {
      this.JA = a.k();
      this.Ru = a.k();
      this.Su = a.k();
      this.IA = a.k();
      a.k();
      this.GA = a.k();
      this.HA = a.k()
    }
  });
  sd.prototype = q.extend(new R, {
    load: X()
  });
  td.prototype = q.extend(new R, {
    load: function(a) {
      a.W(14);
      this.data = a.U
    },
    dJ: db("Dc")
  });
  I.hj = [256, 251, 236, 212, 181, 142, 97, 49, 0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251];
  I.sj = [0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251, 256, 251, 236, 212, 181, 142, 97, 49];
  I.xF = [2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 320, 336, 352, 368, 384, 400, 416, 432, 448, 480, 512, 544, 560, 592, 624, 640, 672, 688, 720, 736, 768, 784, 816, 848, 864, 896, 928, 944, 976, 992, 1024, 1120, 1216, 1312, 1440, 1536, 1632, 1728, 1824, 1952, 2048,
    2240, 2432, 2688, 2880, 3072, 3264, 3456, 3712, 3904, 4096, 6544, 4914, 5216, 5732, 6144, 6553, 6962, 7366, 7780, 8192, 9836, 11672, 13316, 14960, 16604, 18248, 19892, 21504, 25600, 25600
  ];
  I.DE = [-1, 8, 24, -1, 16, 12, 20, 16, 0, 4, 28, 0, -1, 8, 24, -1];
  I.Hk = [2599, 0, 844, 31, 479, 30, 312, 29, 210, 28, 137, 27, 78, 26, 25, 25, 0, 24];
  I.He = [0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, -4, 0, -8, 0, 0, 0, -2, -2, 2, 2, -4, -4, 4, 4, -8, -8, 8, 8, -4, 4, -8, 8, 0, 0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, 0, 0, 4, 0, 8, 0, 0, -2, 2, 2, -2, -4, 4, 4, -4, -8, 8, 8, -8, 4, 4, 8, 8, 0, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 4, 0, 8, 0, 0, 0, 2, 2, -2, -2, 4, 4, -4, -4, 8, 8, -8, -8, 4, -4, 8, -8, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 0, 0, -4, 0, -8, 0, 0, 2, -2, -2, 2, 4, -4, -4, 4, 8, -8, -8, 8, -4, -4, -8, -8, 0, 0];
  I.om = 1;
  I.JG = function(a, b) {
    return a * I.hj[b] / 256
  };
  I.KG = function(a, b) {
    return a * I.sj[b] / 256
  };
  I.prototype = {
    Bi: function(a, b) {
      this.a.c.Nc++;
      this.Pd = this.a.c.Nc;
      this.a.q.F = G;
      if (0 == a) return this.a.c.tf(this.a), G;
      var c, d, e;
      for (e = 0 != (this.a.c.p.Gb & z.yc) ? Math.floor(32 * a * this.a.c.lc) : a << 5; 2048 < e;) {
        c = this.a.o << 16 | this.a.Uf & 65535;
        d = this.a.n << 16 | this.a.Vf & 65535;
        c += 2048 * I.hj[b];
        d += 2048 * I.sj[b];
        this.a.Uf =
          c & 65535;
        this.a.o = c >> 16;
        this.a.Vf = d & 65535;
        this.a.n = d >> 16;
        if (this.a.c.tf(this.a)) return j;
        if (this.a.q.F) break;
        e -= 2048
      }
      if (!this.a.q.F && (c = this.a.o << 16 | this.a.Uf & 65535, d = this.a.n << 16 | this.a.Vf & 65535, c += I.hj[b] * e, d += I.sj[b] * e, this.a.Uf = c & 65535, this.a.o = c >> 16, this.a.Vf = d & 65535, this.a.n = d >> 16, this.a.c.tf(this.a))) return j;
      this.a.b.D = j;
      this.a.q.F || (this.a.c.sk = 0);
      return this.a.q.F
    },
    sn: function(a) {
      0 == a.SA && this.stop()
    },
    Hj: function(a) {
      return 100 >= a ? I.xF[a] : a << 8
    },
    tn: function(a) {
      if (a) this.lA(G);
      else switch (this.a.c.l.tr &
        4294901760) {
        case -786432:
          var a = this.a.o - this.a.ba,
            b = this.a.n - this.a.ca,
            c = this.a.c.ck(a, b, a + this.a.B, b + this.a.A),
            a = this.a.o,
            b = this.a.n;
          0 != (c & k.Fg) && (a = this.a.ba);
          0 != (c & k.Gg) && (a = this.a.c.be - this.a.B + this.a.ba);
          0 != (c & k.Hg) && (b = this.a.ca);
          0 != (c & k.Eg) && (b = this.a.c.ce - this.a.A + this.a.ca);
          this.a.o = a;
          this.a.n = b;
          break;
        case -851968:
        case -917504:
          a = 18 * (this.a.c.Mb(this.a) >> 2);
          do {
            if (this.Cg(this.a.o + I.He[a], this.a.n + I.He[a + 1], G)) {
              this.a.o += I.He[a];
              this.a.n += I.He[a + 1];
              return
            }
            a += 2
          } while (0 != I.He[a] || 0 != I.He[a + 1]);
          this.a.o = this.a.b.Pi;
          this.a.n = this.a.b.Qi;
          this.a.b.Da = this.a.b.dr;
          this.a.b.Xa = this.a.b.cr
      }
    },
    lA: function(a) {
      switch (this.a.c.l.tr & 4294901760) {
        case -786432:
          var a = this.a.o - this.a.ba,
            b = this.a.n - this.a.ca,
            c = this.a.c.ck(a, b, a + this.a.B, b + this.a.A),
            a = this.a.o,
            b = this.a.n;
          0 != (c & k.Fg) && (a = this.a.ba);
          0 != (c & k.Gg) && (a = this.a.c.be - this.a.B + this.a.ba);
          0 != (c & k.Hg) && (b = this.a.ca);
          0 != (c & k.Eg) && (b = this.a.c.ce - this.a.A + this.a.ca);
          this.a.o = a;
          this.a.n = b;
          break;
        case -851968:
        case -917504:
          b = new ta;
          if (this.TH(this.a.o, this.a.n,
              this.a.b.Pi, this.a.b.Qi, a, b)) {
            this.a.o = b.x;
            this.a.n = b.y;
            break
          }
          b = 18 * (this.a.c.Mb(this.a) >> 2);
          do {
            if (this.Cg(this.a.o + I.He[b], this.a.n + I.He[b + 1], a)) {
              this.a.o += I.He[b];
              this.a.n += I.He[b + 1];
              return
            }
            b += 2
          } while (0 != I.He[b] || 0 != I.He[b + 1]);
          a == G && (this.a.o = this.a.b.Pi, this.a.n = this.a.b.Qi, this.a.b.Da = this.a.b.dr, this.a.b.Xa = this.a.b.cr)
      }
    },
    Xl: function(a, b, c, d, e) {
      var g;
      g = -1;
      e && (g = this.a.Db);
      e = this.a.Ub;
      if (0 != (e.rd & 15)) {
        var h = a - this.a.ba,
          n = b - this.a.ca;
        if (0 != (this.a.c.ck(h, n, h + this.a.B, n + this.a.A) & e.rd)) return G
      }
      if (0 !=
        (e.rd & 16) && this.a.c.Cm(this.a, this.a.b.Da, this.a.b.Xa, this.a.b.tb, this.a.b.ub, a, b, c, d)) return G;
      if (-1 == e.wl) return j;
      a = this.a.c.tl(this.a, this.a.b.Da, this.a.b.Xa, this.a.b.tb, this.a.b.ub, a, b, e.Hi);
      if (a == m) return j;
      b = this.a.c.l.Oj;
      for (c = 0; c < a.size(); c++)
        if (d = a.get(c).Db, d != g)
          for (h = e.wl; 0 <= b[h]; h++)
            if (b[h] == d) return G;
      return j
    },
    Cg: function(a, b, c) {
      var d;
      d = -1;
      c && (d = this.a.Db);
      c = this.a.Ub;
      if (0 != (c.rd & 15)) {
        var e = a - this.a.ba,
          g = b - this.a.ca;
        if (0 != (this.a.c.ck(e, g, e + this.a.B, g + this.a.A) & c.rd)) return G
      }
      if (0 !=
        (c.rd & 16) && this.a.c.Cm(this.a, this.a.b.Da, this.a.b.Xa, this.a.b.tb, this.a.b.ub, a, b, 0, z.he)) return G;
      if (-1 == c.wl) return j;
      a = this.a.c.tl(this.a, this.a.b.Da, this.a.b.Xa, this.a.b.tb, this.a.b.ub, a, b, c.Hi);
      if (a == m) return j;
      b = this.a.c.l.Oj;
      for (e = 0; e < a.size(); e++)
        if (g = a.get(e).Db, g != d) {
          var h;
          for (h = c.wl; 0 <= b[h]; h++)
            if (b[h] == g) return G
        }
      return j
    },
    nl: function(a, b, c, d, e, g, h) {
      var n = q.pe((a + c) / 2),
        k = q.pe((b + d) / 2),
        p, s;
      do
        if (this.Xl(n + this.a.c.V, k + this.a.c.Y, e, g, G)) {
          if (c = n, d = k, p = n, s = k, n = q.pe((c + a) / 2), k = q.pe((d + b) / 2),
            n == p && k == s) {
            if ((c != a || d != b) && this.Xl(a + this.a.c.V, b + this.a.c.Y, e, g, G)) n = a, k = b;
            h.x = n;
            h.y = k;
            return j
          }
        } else if (a = n, b = k, p = n, s = k, n = q.pe((c + a) / 2), k = q.pe((d + b) / 2), n == p && k == s) {
        if ((c != a || d != b) && this.Xl(c + this.a.c.V, d + this.a.c.Y, e, g, G)) return h.x = c, h.y = d, j;
        h.x = n;
        h.y = k;
        return G
      } while (1)
    },
    TH: function(a, b, c, d, e, g) {
      var h = q.pe((a + c) / 2),
        k = q.pe((b + d) / 2),
        p, s;
      do
        if (this.Cg(h, k, e)) {
          if (c = h, d = k, p = h, s = k, h = q.pe((c + a) / 2), k = q.pe((d + b) / 2), h == p && k == s) {
            if ((c != a || d != b) && this.Cg(a, b, e)) h = a, k = b;
            g.x = h;
            g.y = k;
            return j
          }
        } else if (a = h,
        b = k, p = h, s = k, h = q.pe((c + a) / 2), k = q.pe((d + b) / 2), h == p && k == s) {
        if ((c != a || d != b) && this.Cg(c, d, e)) return g.x = c, g.y = d, j;
        g.x = h;
        g.y = k;
        return G
      } while (1)
    },
    Dr: function(a) {
      this.a.b.vd == R.TE && (250 < a && (a = 250), 0 > a && (a = 0), this.Dr(a));
      this.a.b.vd == R.Rk && this.pd.Dr(a)
    },
    Cr: function(a) {
      this.a.b.vd == R.ox && (250 < a && (a = 250), 0 > a && (a = 0), this.Cr(a));
      this.a.b.vd == R.Rk && this.pd.Cr(a)
    },
    Mb: function() {
      return this.a.b.vd == R.Rk && this.pd.Mb ? this.pd.Mb() : this.a.b.Ja
    },
    qb: X(),
    start: X()
  };
  wa.KI = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 31, 0, 1, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 24, 25, 26, 27, 27, 28, 28, 28, 28, 29, 29, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 16, 17, 18, 19, 19, 20, 20, 20, 20, 21, 21, 22, 23, 24, 25, 28, 27, 26, 25, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 20, 21, 22, 22, 23, 24, 24, 24, 24, 25, 26, 27, 28, 29, 30, 8, 7, 6, 5, 4, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16, 17, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 16, 15, 14,
    13, 12, 11, 10, 9, 8, 12, 13, 14, 15, 15, 16, 16, 16, 16, 17, 17, 18, 19, 20, 21, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 0, 1, 2, 0, 0, 1, 1, 2, 3, 4, 5, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 28, 29, 30, 31, 31, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 26, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 25, 25, 24, 25, 26, 27, 28, 29,
    30, 31, 0, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 11, 12, 13, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ];
  wa.VE = [4294967292, 4294967294, 4294967295];
  wa.mF = [-4, 4, -2, 2, -1, 1];
  wa.nF = [-4, 4, -4, 4, -4, 4];
  wa.prototype = q.extend(new I, {
    N: function(a, b) {
      this.a = a;
      this.a.Uf = 0;
      this.a.Vf = 0;
      this.a.b.Q = b.pn;
      this.a.b.Oa = b.pn;
      this.a.b.Fh = b.pn;
      this.Kk = b.pn << 8;
      var c = b.jA;
      0 != c && (c = this.Hj(c), this.a.b.Fh = 0);
      this.ee = c;
      this.hx = b.iA;
      this.Po = b.hA;
      this.Qo = wa.VE[this.Po];
      this.$h = G;
      this.zs = -1;
      this.Jk = this.Ro = (100 - b.kA) / 8;
      this.sn(b);
      this.a.b.D = j
    },
    move: function() {
      this.a.q.tk = G;
      this.a.c.sk = 1;
      this.a.b.ae = v.oc;
      this.a.ja != m && this.a.ja.Be();
      if (0 != this.ee) {
        var a = this.Kk;
        if (0 < a) {
          var b = this.ee;
          0 != (this.a.c.p.Gb & z.yc) && (b *= this.a.c.lc);
          a -= b;
          0 > a && (a = 0);
          this.Kk = a;
          this.a.b.Q = a >> 8
        }
      }
      this.Bi(this.a.b.Q, this.a.c.Mb(this.a))
    },
    stop: function() {
      0 ==
        this.vb && (this.vb = this.a.b.Q | 32768, this.Kk = this.a.b.Q = 0, this.a.q.F = j)
    },
    start: function() {
      var a = this.vb;
      0 != a && (a &= 32767, this.a.b.Q = a, this.Kk = a << 8, this.vb = 0, this.a.q.F = j)
    },
    Mf: function() {
      if (0 == this.vb && this.a.c.Kb != this.zs) {
        this.zs = this.a.c.Kb;
        this.Pd == this.a.c.Nc && this.lA(this.$h);
        var a = this.a.o,
          b = this.a.n,
          c = 0,
          a = a - 8,
          b = b - 8;
        this.Cg(a, b, this.$h) == G && (c |= 1);
        a += 16;
        this.Cg(a, b, this.$h) == G && (c |= 2);
        b += 16;
        this.Cg(a, b, this.$h) == G && (c |= 4);
        this.Cg(a - 16, b, this.$h) == G && (c |= 8);
        a = wa.KI[32 * c + this.a.c.Mb(this.a)];
        a &=
          this.Qo;
        if (!this.un(a)) {
          var c = b = wa.nF[2 * this.Po + 1],
            d = G;
          do {
            a -= b;
            a &= 31;
            if (this.un(a)) {
              d = j;
              break
            }
            a += 2 * b;
            a &= 31;
            if (this.un(a)) {
              d = j;
              break
            }
            a -= b;
            a &= 31;
            b += c
          } while (16 >= b);
          if (d == G) {
            this.$h = j;
            this.a.b.Ja = this.a.c.random(32) & this.Qo;
            this.a.q.tk = j;
            this.a.q.F = j;
            return
          }
        }
        this.$h = G;
        this.a.b.Ja = a;
        a = this.a.c.random(100);
        if (a < this.hx && (a >>= 2, 25 > a && (a = a - 12 & 31 & this.Qo, this.un(a)))) {
          this.a.b.Ja = a;
          this.a.q.tk = j;
          this.a.q.F = j;
          return
        }
        a = this.a.c.Mb(this.a) & 7;
        12 != this.Jk && (0 == a ? (this.Jk--, 0 > this.Jk && (a = this.a.c.Mb(this.a) + wa.mF[this.a.c.random(2) +
          2 * this.Po], a &= 31, this.un(a) && (this.a.b.Ja = a, this.Jk = this.Ro))) : this.Jk = this.Ro);
        this.a.q.tk = j;
        this.a.q.F = j
      }
    },
    un: function(a) {
      var b = (I.hj[a] << 11) + (this.a.o << 16 | this.a.Uf & 65535),
        a = (I.sj[a] << 11) + (this.a.n << 16 | this.a.Vf & 65535);
      return this.Cg(b >>> 16, a >>> 16, G)
    },
    Re: X(),
    Te: function(a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      this.a.b.Q = a;
      this.Kk = a << 8;
      this.vb = 0;
      this.a.q.F = j
    },
    ug: function(a) {
      this.Te(a)
    },
    reverse: function() {
      0 == this.vb && (this.a.q.F = j, this.a.b.Ja += 16, this.a.b.Ja &= 31)
    },
    ac: function(a) {
      this.a.o != a && (this.a.o = a, this.a.q.F =
        j, this.a.b.D = j, this.a.b.Ca = j)
    },
    bc: function(a) {
      this.a.n != a && (this.a.n = a, this.a.q.F = j, this.a.b.D = j, this.a.b.Ca = j)
    }
  });
  ud.prototype = q.extend(new I, {
    N: function(a) {
      this.a = a;
      this.i = a.c;
      this.i.ax();
      this.a.u != m && this.a.u.Ar(G);
      this.a.u != m && (this.a.u.L &= ~w.Vg, this.a.u.Fq());
      this.So = j;
      this.a.Uf = 0;
      this.a.Vf = 0;
      this.a.ja != m && this.a.ja.Oz(v.oc);
      this.a.b.Q = 0;
      this.a.b.Ca = j;
      this.a.b.D = j
    },
    mu: function(a) {
      this.a.b.Oa = this.a.b.Q;
      this.a.b.Fh = this.a.b.Q;
      this.Lk = a
    },
    qb: function() {
      this.FG(this.a)
    },
    move: function() {
      if (this.So) {
        if (this.Lk.ja !=
          m && this.Lk.ja.Tn == v.Gw) return;
        this.oC()
      }
      this.a.ja != m && this.a.ja.Be();
      this.Bi(this.a.b.Q, this.a.c.Mb(this.a));
      if (-64 > this.a.o || this.a.o > this.a.c.be + 64 || -64 > this.a.n || this.a.n > this.a.c.ce + 64) this.a.bn = G, this.a.c.bh(this.a.Ob);
      this.a.b.Ca && (this.a.b.Ca = G, this.a.c.tf(this.a))
    },
    oC: function() {
      this.a.u != m && this.a.u.Ar(j);
      this.a.u != m && (this.a.u.L |= w.Vg, this.a.u.Yu());
      if (this.i.Jh != m) {
        var a = this.i.Jo(this.Lk);
        if (a != m) {
          var b = this.i.Jh,
            c = new ca;
          this.As = c;
          c.xE(this.a, ca.PE);
          c.sP = b.identifier;
          this.lm = b.GP(a.QH,
            50 * (this.a.b.Q / 250), c);
          c.rP = this.lm;
          this.lm == m && (this.As = m)
        }
      }
      this.So = G;
      this.Lk = m
    },
    FG: function() {
      this.lm != m && (pBase = this.a.c.Jh, pBase.HP(this.lm), this.lm = m);
      this.As != m && (this.As = m)
    },
    ac: function(a) {
      this.a.o != a && (this.a.o = a, this.a.q.F = j, this.a.b.D = j, this.a.b.Ca = j)
    },
    bc: function(a) {
      this.a.n != a && (this.a.n = a, this.a.q.F = j, this.a.b.D = j, this.a.b.Ca = j)
    },
    Re: X(),
    reverse: X(),
    stop: X(),
    start: X(),
    Mf: X(),
    Te: X(),
    ug: X()
  });
  vd.prototype = q.extend(new I, {
    N: db("a"),
    move: function() {
      0 == (this.a.M & E.Yh) && this.a.ja != m && (this.a.ja.Be(),
        this.a.ja.lg != v.Fk + 1 && this.a.c.bh(this.a.Ob))
    },
    ac: function(a) {
      this.a.o != a && (this.a.o = a, this.a.q.F = j, this.a.b.D = j)
    },
    bc: function(a) {
      this.a.n != a && (this.a.n = a, this.a.q.F = j, this.a.b.D = j)
    },
    Re: X(),
    reverse: X(),
    stop: X(),
    start: X(),
    Mf: X(),
    Te: X(),
    ug: X()
  });
  wd.prototype = q.extend(new I, {
    N: function(a, b) {
      this.a = a;
      this.a.Uf = 0;
      this.Kf = this.a.Vf = 0;
      this.Lg = this.a.b.Q = 0;
      this.Bs = -1;
      this.a.b.Gh = b.ql;
      this.io = b.oA;
      this.rg = this.Hj(this.io);
      this.jo = b.pA;
      this.ee = this.Hj(this.jo);
      this.a.b.Oa = b.rA;
      this.a.b.Fh = 0;
      this.Cs = b.qA;
      this.Vi =
        b.yq;
      this.a.b.D = j
    },
    move: function() {
      var a, b, c, d;
      this.a.c.sk = 1;
      a = this.a.c.Mb(this.a);
      this.a.b.Kv = a;
      if (0 == this.Lg) {
        this.a.q.tk = G;
        b = 0;
        c = this.a.c.Ic[this.a.b.Gh - 1] & 15;
        0 != c && (d = I.DE[c], -1 != d && 0 != (1 << d & this.Cs) && (b = 1, a = d));
        c = this.Kf;
        0 == b ? 0 != c && (b = this.ee, 0 != (this.a.c.p.Gb & z.yc) && (b *= this.a.c.lc), c -= b, 0 >= c && (c = 0)) : c >> 8 < this.a.b.Oa && (b = this.rg, 0 != (this.a.c.p.Gb & z.yc) && (b *= this.a.c.lc), c += b, c >> 8 > this.a.b.Oa && (c = this.a.b.Oa << 8));
        this.Kf = c;
        this.a.b.Q = c >> 8;
        this.a.b.Ja = a;
        this.a.b.ae = v.oc;
        this.a.ja != m && this.a.ja.Be();
        if (this.Bi(this.a.b.Q, this.a.c.Mb(this.a)) == G) return;
        if (0 == this.a.b.Q) {
          c = this.Kf;
          if (0 == c || this.a.b.Kv == this.a.c.Mb(this.a)) return;
          this.a.b.Q = c >> 8;
          this.a.b.Ja = this.a.b.Kv;
          if (this.Bi(this.a.b.Q, this.a.c.Mb(this.a)) == G) return
        }
      }
      for (; !(0 == this.Lg || 0 == this.a.c.sk);)
        if (c = this.Kf, c -= this.ee, 0 < c) {
          if (this.Kf = c, c >>= 8, this.a.b.Q = c, d = this.a.c.Mb(this.a), 0 != this.Lg && (d += 16, d &= 31), this.Bi(c, d) == G) break
        } else {
          this.Kf = 0;
          this.Lg = this.a.b.Q = 0;
          break
        }
    },
    Mf: function() {
      this.Pd == this.a.c.Nc && this.tn(0 != (this.Vi & I.om));
      this.a.c.Kb !=
        this.Bs && (this.Bs = this.a.c.Kb, this.Lg++, 12 <= this.Lg ? this.stop() : (this.a.q.tk = j, this.a.q.F = j))
    },
    reverse: X(),
    Re: X(),
    stop: function() {
      this.Kf = this.Lg = this.a.b.Q = 0;
      this.a.q.F = j;
      this.Pd == this.a.c.Nc && (this.tn(0 != (this.Vi & I.om)), this.Lg = 0)
    },
    start: function() {
      this.a.q.F = j;
      this.vb = 0
    },
    ug: function(a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      this.a.b.Oa = a;
      this.a.b.Q > a && (this.a.b.Q = a, this.Kf = a << 8);
      this.a.q.F = j
    },
    Te: function(a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      a > this.a.b.Oa && (a = this.a.b.Oa);
      this.a.b.Q = a;
      this.Kf = a << 8;
      this.a.q.F = j
    },
    ac: function(a) {
      this.a.o !=
        a && (this.a.o = a, this.a.q.F = j, this.a.b.D = j, this.a.b.Ca = j)
    },
    bc: function(a) {
      this.a.n != a && (this.a.n = a, this.a.q.F = j, this.a.b.D = j, this.a.b.Ca = j)
    },
    PP: db("Cs")
  });
  xd.prototype = q.extend(new I, {
    N: function(a, b) {
      this.a = a;
      this.a.b.Gh = b.ql;
      this.Ds = b.sA + this.a.o;
      this.Es = b.tA + this.a.n;
      this.Fs = b.uA + this.a.o;
      this.Gs = b.vA + this.a.n;
      this.Uo = this.To = this.a.b.Q = 0;
      this.a.b.Fh = 0;
      this.a.b.Oa = 100;
      this.Vi = b.yq;
      this.sn(b);
      this.a.b.D = j
    },
    move: function() {
      var a = this.a.o,
        b = this.a.n,
        c, d, e, g;
      if (0 == this.vb && 0 != this.a.c.hr[this.a.b.Gh -
          1] && (a = this.a.c.Oe, a < this.Ds && (a = this.Ds), a > this.Fs && (a = this.Fs), b = this.a.c.Pe, b < this.Es && (b = this.Es), b > this.Gs && (b = this.Gs), c = a - this.a.o, d = b - this.a.n, e = 0, 0 > c && (c = -c, e |= 1), 0 > d && (d = -d, e |= 2), g = c + d << 2, 250 < g && (g = 250), this.a.b.Q = g, 0 != g)) {
        0 == d && (d = 1);
        c = (c << 8) / d;
        for (d = 0; !(c >= I.Hk[d]); d += 2);
        c = I.Hk[d + 1];
        0 != (e & 2) && (c = -c + 32 & 31);
        0 != (e & 1) && (c = (-(c - 8 & 31) & 31) + 8 & 31);
        this.a.b.Ja = c
      }
      0 != this.a.b.Q && (this.Uo = 0, this.To = this.a.b.Q);
      this.Uo++;
      10 < this.Uo && (this.To = 0);
      this.a.b.Q = this.To;
      this.a.ja != m && this.a.ja.Be();
      this.a.o =
        a;
      this.a.n = b;
      this.a.b.D = j;
      this.a.c.Nc++;
      this.Pd = this.a.c.Nc;
      this.a.c.tf(this.a)
    },
    stop: function() {
      this.Pd == this.a.c.Nc && this.tn(0 != (this.Vi & I.om));
      this.a.b.Q = 0
    },
    start: function() {
      this.vb = 0;
      this.a.q.F = j
    },
    Mf: function() {
      this.stop()
    },
    reverse: X(),
    Re: X(),
    ac: function(a) {
      this.a.o != a && (this.a.o = a, this.a.q.F = j, this.a.b.D = j, this.a.b.Ca = j)
    },
    bc: function(a) {
      this.a.n != a && (this.a.n = a, this.a.q.F = j, this.a.b.D = j, this.a.b.Ca = j)
    }
  });
  yd.prototype = q.extend(new I, {
    N: function(a, b) {
      this.a = a;
      this.Zo = this.a.o;
      this.$o = this.a.n;
      this.Sc = G;
      this.Pg = 0;
      this.a.jl = 0;
      this.pa = b;
      this.a.b.Fh = b.MA;
      this.a.b.Oa = b.LA;
      this.Og = 0;
      this.Qk = m;
      this.zi(0);
      this.sn(b);
      this.a.b.Q = this.pc;
      this.a.b.D = j;
      0 == this.pa.Ka.length && this.stop()
    },
    move: function() {
      this.a.jl = 0;
      this.a.b.ae = v.oc;
      this.a.ja != m && this.a.ja.Be();
      if (0 == this.pc) {
        var a = this.Pg;
        if (0 == a) {
          this.a.b.Q = 0;
          this.a.c.tf(this.a);
          return
        }
        a -= this.a.c.ho;
        if (0 < a) {
          this.Pg = a;
          this.a.b.Q = 0;
          this.a.c.tf(this.a);
          return
        }
        this.Pg = 0;
        this.pc = this.vb & 32767;
        this.vb = 0;
        this.a.b.Q = this.pc
      }
      a = 0 != (this.a.c.p.Gb & z.yc) ? 256 *
        this.a.c.lc : 256;
      this.a.c.Lh = a;
      for (var b;;) {
        b = G;
        this.a.c.fo = a;
        a *= this.pc;
        a <<= 5;
        524288 >= a ? this.a.c.ew = a : (a = 16384, a /= this.pc, this.a.c.fo = a, this.a.c.ew = 524288);
        for (;;) {
          this.Xo = G;
          if (this.NA(this.a.c.ew) == j && this.Xo == G) {
            b = j;
            break
          }
          if (this.a.c.Lh == this.a.c.fo) {
            b = j;
            break
          }
          if (this.a.c.Lh > this.a.c.fo) {
            this.a.c.Lh -= this.a.c.fo;
            a = this.a.c.Lh;
            break
          }
          a = this.a.c.Lh * MT_Speed;
          a <<= 5;
          this.NA(a);
          b = j;
          break
        }
        if (b) break
      }
    },
    NA: function(a) {
      var a = a + this.Og,
        b = a >>> 16;
      if (b < this.Yo) return this.Og = a, a = b * this.nm / 16384 + this.Rg, this.a.o =
        b * this.mm / 16384 + this.Qg, this.a.n = a, this.a.b.D = j, this.a.c.tf(this.a), this.a.q.F;
      b -= this.Yo;
      a = b << 16 | a & 65535;
      0 != this.pc && (a /= this.pc);
      this.a.c.Lh += a >> 5 & 65535;
      this.a.o = this.mj;
      this.a.n = this.nj;
      this.a.b.D = j;
      this.a.c.tf(this.a);
      if (this.a.q.F) return j;
      this.a.jl = this.a.c.Kb;
      this.a.dn = m;
      b = this.Td;
      this.Og = 0;
      if (this.Sc == G) {
        b++;
        if (b < this.pa.pl) {
          this.a.dn = this.pa.Ka[b].$d;
          if (this.Qk != m && this.pa.Ka[b].$d != m && q.pb(this.Qk, this.pa.Ka[b].$d)) return this.Td = b, this.te(), this.xq();
          this.zi(b);
          this.te();
          return this.a.q.F
        }
        this.a.Wp =
          this.a.c.Kb;
        this.Td = b;
        if (this.Sc) return this.te(), this.a.q.F;
        if (0 != this.pa.QA) return this.Sc = j, b--, this.a.dn = this.pa.Ka[b].$d, this.ol(b), this.te(), this.a.q.F;
        this.PA();
        if (0 == this.pa.Tu) return this.xq(), this.te(), this.a.q.F;
        this.zi(0);
        this.te();
        return this.a.q.F
      }
      if (this.Qk != m && this.pa.Ka[b].$d != m && q.pb(this.Qk, this.pa.Ka[b].$d)) return this.te(), this.xq();
      this.a.dn = this.pa.Ka[b].$d;
      this.Pg = this.pa.Ka[b].Ou;
      b--;
      if (0 <= b) return this.ol(b), this.te(), this.a.q.F;
      this.PA();
      if (this.Sc == G) return this.te(), this.a.q.F;
      if (0 == this.pa.Tu) return this.xq(), this.te(), this.a.q.F;
      this.Sc = G;
      this.zi(0);
      this.te();
      return this.a.q.F
    },
    zi: function(a) {
      a >= this.pa.Ka.length ? this.stop() : (this.Sc = G, this.Td = a, this.Pg = this.pa.Ka[a].Ou, this.mm = this.pa.Ka[a].Ku, this.nm = this.pa.Ka[a].Pu, this.Qg = this.a.o, this.Rg = this.a.n, this.mj = this.a.o + this.pa.Ka[a].Mu, this.nj = this.a.n + this.pa.Ka[a].Nu, this.a.b.Ja = this.pa.Ka[a].Lu, this.KA())
    },
    ol: function(a) {
      a >= this.pa.Ka.length ? this.stop() : (this.Sc = j, this.Td = a, this.mm = -this.pa.Ka[a].Ku, this.nm = -this.pa.Ka[a].Pu,
        this.Qg = this.a.o, this.Rg = this.a.n, this.mj = this.a.o - this.pa.Ka[a].Mu, this.nj = this.a.n - this.pa.Ka[a].Nu, a = this.pa.Ka[a].Lu, this.a.b.Ja = a + 16 & 31, this.KA())
    },
    KA: function() {
      this.Yo = this.pa.Ka[this.Td].mA;
      var a = this.pa.Ka[this.Td].nA,
        b = this.Pg;
      0 != b && (this.Pg = 20 * b, this.vb = a |= 32768);
      0 != this.vb && (a = 0);
      if (a != this.pc || 0 != a) this.pc = a, this.Xo = this.a.q.F = j;
      this.a.b.Q = this.pc
    },
    te: function() {
      this.a.jl == this.a.c.Kb && (this.a.c.l.sc = 0, this.a.c.l.Wc(this.a, -1310720 | this.a.qa & 65535), this.a.c.l.Wc(this.a, -2293760 | this.a.qa &
        65535));
      this.a.Wp == this.a.c.Kb && (this.a.c.l.sc = 0, this.a.c.l.Wc(this.a, -1376256 | this.a.qa & 65535))
    },
    xq: function() {
      this.vb = this.pc = 0;
      this.a.q.F = j;
      this.Xo = G;
      return j
    },
    PA: function() {
      0 != this.pa.OA && (this.a.o = this.Zo, this.a.n = this.$o, this.a.b.D = j)
    },
    wP: function(a) {
      var b;
      for (b = 0; b < this.pa.pl; b++)
        if (this.pa.Ka[b].$d != m && q.pb(a, this.pa.Ka[b].$d)) {
          this.Sc == G ? (this.zi(b), this.a.jl = this.a.c.Kb, this.a.dn = this.pa.Ka[b].$d, this.a.Wp = 0, this.te()) : 0 < b && (b--, this.ol(b), this.a.jl = this.a.c.Kb, this.a.dn = this.pa.Ka[b].$d,
            this.a.Wp = 0, this.te());
          this.a.q.F = j;
          break
        }
    },
    xP: function(a) {
      var b;
      for (b = 0; b < this.pa.pl; b++)
        if (this.pa.Ka[b].$d != m && q.pb(a, this.pa.Ka[b].$d)) {
          if (b == this.Td && 0 == this.Og) break;
          this.Qk = a;
          if (this.Sc == G) {
            if (b > this.Td) {
              if (0 != this.pc) break;
              0 != (this.vb & 32768) ? this.start() : this.zi(this.Td);
              break
            }
            if (0 != this.pc) {
              this.reverse();
              break
            }
            0 != (this.vb & 32768) ? (this.start(), this.reverse()) : this.ol(MT_MoveNumber - 1)
          } else {
            if (b <= this.Td) {
              if (0 != this.pc) break;
              0 != (this.vb & 32768) ? this.start() : this.ol(this.Td - 1);
              break
            }
            if (0 != this.pc) {
              this.reverse();
              break
            }
            0 != (this.vb & 32768) ? (this.start(), this.reverse()) : this.zi(this.Td)
          }
          break
        }
    },
    stop: function() {
      0 == this.vb && (this.vb = this.pc | 32768);
      this.pc = 0;
      this.a.q.F = j
    },
    start: function() {
      0 != (this.vb & 32768) && (this.pc = this.vb & 32767, this.vb = this.Pg = 0, this.a.q.F = j)
    },
    reverse: function() {
      if (0 == this.vb) {
        this.a.q.F = j;
        var a = this.Td;
        if (0 == this.Og)(this.Sc = !this.Sc) ? 0 == a ? this.Sc = !this.Sc : (a--, this.ol(a)) : this.zi(a);
        else {
          this.Sc = !this.Sc;
          this.mm = -this.mm;
          this.nm = -this.nm;
          var a = this.Qg,
            b = this.mj;
          this.Qg = b;
          this.mj = a;
          a = this.Rg;
          this.Rg = b = this.nj;
          this.nj = a;
          this.a.b.Ja += 16;
          this.a.b.Ja &= 31;
          a = this.Og >>> 16;
          a = this.Yo - a;
          this.Og = a << 16 | this.Og & 65535
        }
      }
    },
    ac: function(a) {
      var b = this.a.o;
      this.a.o = a;
      b -= this.Qg;
      a -= b;
      this.mj = b = this.mj - this.Qg + a;
      b = this.Qg;
      this.Qg = a;
      this.Zo -= b - a;
      this.a.q.F = j;
      this.a.b.D = j;
      this.a.b.Ca = j
    },
    bc: function(a) {
      var b = this.a.n;
      this.a.n = a;
      b -= this.Rg;
      a -= b;
      this.nj = b = this.nj - this.Rg + a;
      b = this.Rg;
      this.Rg = a;
      this.$o -= b - a;
      this.a.q.F = j;
      this.a.b.D = j;
      this.a.b.Ca = j
    },
    Te: function(a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      this.pc = a;
      this.a.b.Q = a;
      this.a.q.F =
        j
    },
    ug: function(a) {
      this.Te(a)
    },
    Re: X()
  });
  N.cM = 0;
  N.NE = 1;
  N.aM = 2;
  N.bM = 3;
  N.Mg = 0;
  N.Mk = 1;
  N.Wo = 2;
  N.Vo = 3;
  N.ix = 4;
  N.jx = 5;
  N.prototype = q.extend(new I, {
    N: function(a, b) {
      this.a = a;
      this.i = this.a.c;
      this.a.Uf = 0;
      this.xd = this.a.Vf = 0;
      this.a.b.Q = 0;
      this.a.b.Gh = b.ql;
      this.io = b.AA;
      this.rg = this.Hj(this.io);
      this.jo = b.BA;
      this.ee = this.Hj(this.jo);
      this.a.b.Oa = b.FA;
      this.a.b.Fh = 0;
      this.Hs = b.CA;
      this.kx = b.DA;
      var c = b.EA;
      3 < c && (c = N.NE);
      this.lx = c;
      this.Nk = this.dd = 0;
      this.Ok = m;
      this.sn(b);
      this.a.b.D = j;
      this.Va = N.Mg
    },
    move: function() {
      var a, b;
      this.a.c.sk =
        1;
      a = this.a.c.Ic[this.a.b.Gh - 1];
      this.pt();
      b = this.xd;
      var c;
      0 == this.Nk && (0 >= b && (0 != (a & 4) ? (c = this.rg, 0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc), b -= c, b / 256 < -this.a.b.Oa && (b = 256 * -this.a.b.Oa)) : 0 > b && (c = this.ee, 0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc), b += c, 0 < b && (b = 0)), 0 != (a & 8) && (b = -b)), 0 <= b && (0 != (a & 8) ? (c = this.rg, 0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc), b += c, b / 256 > this.a.b.Oa && (b = 256 * this.a.b.Oa)) : 0 < b && (c = this.ee, 0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc), b -= c, 0 > b && (b = 0)), 0 != (a & 4) && (b = -b)), this.xd = b);
      var d =
        this.dd;
      for (c = G;;) {
        switch (this.Va) {
          case 2:
          case 3:
            c = this.Hs << 5;
            0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc);
            d += c;
            64E3 < d && (d = 64E3);
            break;
          case 0:
            if (0 != (a & 1)) {
              if (this.i.Nf(this.a.Fd, this.a.o + this.Ye, this.a.n + this.Ze - 4) == k.Xe) break;
              this.Va = N.Mk;
              c = j;
              continue
            }
            if (0 != (a & 2)) {
              if (this.i.Nf(this.a.Fd, this.a.o + this.Ye, this.a.n + this.Ze + 4) == k.Xe) break;
              this.Va = N.Mk;
              c = j;
              continue
            }
            break;
          case 1:
            if (c == G && (this.Nk = 0, this.i.Nf(this.a.Fd, this.a.o + this.Ye, this.a.n + this.Ze) == k.Xe && this.i.Nf(this.a.Fd, this.a.o + this.Ye, this.a.n +
                this.Ze - 4) == k.Xe)) break;
            0 >= d && (0 != (a & 1) ? (c = this.rg, 0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc), d -= c, c = d / 256, c < -this.a.b.Oa && (d = 256 * -this.a.b.Oa)) : (c = this.ee, 0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc), d += c, 0 < d && (d = 0)), 0 != (a & 2) && (d = -d));
            0 <= d && (0 != (a & 2) ? (c = this.rg, 0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc), d += c, c = d / 256, c > this.a.b.Oa && (d = 256 * this.a.b.Oa)) : (c = this.ee, 0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc), d -= c, 0 > d && (d = 0)), 0 != (a & 1) && (d = -d))
        }
        break
      }
      this.dd = d;
      var e = 0;
      0 > b && (e = 16);
      c = b;
      var g = d;
      if (0 != g) {
        var h =
          0;
        0 > c && (h |= 1, c = -c);
        0 > g && (h |= 2, g = -g);
        c = (c << 8) / g;
        for (e = 0; !(c >= I.Hk[e]); e += 2);
        e = I.Hk[e + 1];
        0 != (h & 2) && (e = -e + 32 & 31);
        0 != (h & 1) && (e = (-(e - 8 & 31) & 31) + 8 & 31)
      }
      c = b;
      h = I.hj[e];
      g = I.sj[e];
      0 > h && (h = -h);
      0 > g && (g = -g);
      h < g && (h = g, c = d);
      0 > c && (c = -c);
      c /= h;
      250 < c && (c = 250);
      this.a.b.Q = c;
      switch (this.Va) {
        case 1:
          0 > d ? this.a.b.Ja = 8 : 0 < d && (this.a.b.Ja = 24);
          break;
        case 3:
          this.a.b.Ja = e;
          break;
        default:
          0 > b ? this.a.b.Ja = 16 : 0 < b && (this.a.b.Ja = 0)
      }
      switch (this.Va) {
        case 4:
          this.a.b.ae = v.Xr;
          break;
        case 5:
          this.a.b.ae = v.Bo;
          break;
        case 3:
          this.a.b.ae = v.Ew;
          break;
        case 2:
          this.a.b.ae = v.Fw;
          break;
        case 1:
          this.a.b.ae = v.Dw;
          break;
        default:
          this.a.b.ae = v.oc
      }
      this.a.ja != m && this.a.ja.Be();
      this.pt();
      this.Bi(this.a.b.Q, e);
      if ((this.Va == N.Mg || this.Va == N.Mk) && this.kj == G)
        if (b = G, d = this.lx, 0 != d && (d--, 0 == d ? (5 == (a & 5) && (b = j), 9 == (a & 9) && (b = j)) : 0 != (a & d << 4) && (b = j)), b) this.dd = -this.kx << 8, this.Va = N.Wo;
      switch (this.Va) {
        case 2:
          0 <= this.dd && (this.Va = N.Vo);
          break;
        case 3:
          this.i.Nf(this.a.Fd, this.a.o + this.Ye, this.a.n + this.Ze) != k.Xe && (this.dd = 0, this.Va = N.Mk, this.a.b.Ja = 8);
          break;
        case 0:
          if (0 != (a & 3) &&
            0 == (a & 12) && this.i.Nf(this.a.Fd, this.a.o + this.Ye, this.a.n + this.Ze) != k.Xe) {
            this.Va = N.Mk;
            this.xd = 0;
            break
          }
          0 != (a & 2) && (this.a.ja != m && this.a.ja.Xg(v.Xr)) && (this.xd = 0, this.Va = N.ix);
          if (this.i.Nf(this.a.Fd, this.a.o + this.Ye, this.a.n + this.Ze) != k.Xe) break;
          this.Xl(this.a.o, this.a.n + 10, this.ai, z.he, j) == G ? (a = this.a.o - this.a.c.V, b = this.a.n - this.a.c.Y, d = new ta, this.nl(a, b + this.ai - 1, a, b, this.ai, z.he, d), this.a.o = d.x + this.a.c.V, this.a.n = d.y + this.a.c.Y, this.kj = G) : this.Va = N.Vo;
          break;
        case 1:
          if (this.i.Nf(this.a.Fd, this.a.o +
              this.Ye, this.a.n + this.Ze) == k.Xe) {
            if (0 > this.dd)
              for (g = 0; 32 > g; g++)
                if (this.i.Nf(this.a.Fd, this.a.o + this.Ye, this.a.n + this.Ze + g) != k.Xe) {
                  this.a.n += g;
                  break
                }
            this.dd = 0
          }
          0 != (a & 12) && (this.Va = N.Mg, this.dd = 0);
          break;
        case 4:
          if (0 == (a & 2)) {
            if (hoPtr.ja != m && this.a.ja.Xg(v.Bo)) {
              this.Va = N.jx;
              this.a.b.ae = v.Bo;
              this.a.ja.Be();
              this.a.ja.dk = 1;
              break
            }
            this.Va = N.Mg
          }
          break;
        case 5:
          this.a.ja != m && 0 == this.a.ja.mg && (this.Va = N.Mg)
      }
      if (this.Va == N.Mg || this.Va == N.ix || this.Va == N.jx) {
        do {
          a = m;
          this.a.Ub != m && (a = this.a.Ub.Hi);
          if (this.a.c.tl(this.a,
              this.a.b.Da, this.a.b.Xa, this.a.b.tb, this.a.b.ub, this.a.o, this.a.n, a) == m && (a = this.a.c.tl(this.a, this.a.b.Da, this.a.b.Xa, this.a.b.tb, this.a.b.ub, this.a.o, this.a.n + 1, a), a != m && 1 == a.size())) {
            a = a.get(0);
            if ((this.Ok == m || this.Ok != a) && this.a.Db != a.Db) {
              this.Ok = a;
              this.Is = a.o;
              this.Js = a.n;
              break
            }
            b = a.o - this.Is;
            d = a.n - this.Js;
            this.Is = a.o;
            this.Js = a.n;
            this.a.o += b;
            this.a.n += d;
            this.a.c.tf(this.a);
            this.a.b.D = j;
            break
          }
          this.Ok = m
        } while (0)
      } else this.Ok = m
    },
    Qu: function() {
      this.dd = this.xd = this.a.b.Q = 0
    },
    Mf: function() {
      this.stop()
    },
    stop: function() {
      if (this.Pd != this.a.c.Nc) this.Qu();
      else {
        this.a.q.F = j;
        var a = this.a.o - this.a.c.V,
          b = this.a.n - this.a.c.Y,
          c;
        switch (this.a.c.l.tr & 4294901760) {
          case -786432:
            a = this.a.o - this.a.ba;
            b = this.a.n - this.a.ca;
            c = this.a.c.ck(a, b, a + this.a.B, b + this.a.A);
            a = this.a.o;
            b = this.a.n;
            0 != (c & k.Fg) && (a = this.a.ba, this.xd = 0, this.kj = j);
            0 != (c & k.Gg) && (a = this.a.c.be - this.a.B + this.a.ba, this.xd = 0, this.kj = j);
            0 != (c & k.Hg) && (b = this.a.ca, this.dd = 0, this.kj = G);
            0 != (c & k.Eg) && (b = this.a.c.ce - this.a.A + this.a.ca, this.dd = 0, this.kj = G);
            this.a.o =
              a;
            this.a.n = b;
            this.Va = this.Va == N.Wo ? N.Vo : N.Mg;
            this.Nk = 0;
            break;
          case -851968:
          case -917504:
            this.kj = G;
            c = new ta;
            if (this.Va == N.Vo) {
              this.nl(a, b, this.a.b.Pi - this.a.c.V, this.a.b.Qi - this.a.c.Y, this.ai, z.he, c);
              this.a.o = c.x + this.a.c.V;
              this.a.n = c.y + this.a.c.Y;
              this.Va = N.Mg;
              this.a.b.D = j;
              this.Xl(this.a.o, this.a.n + 1, 0, z.he, j) ? this.xd = this.a.b.Q = 0 : (this.Nk = 0, this.a.b.Q = Math.abs(this.xd / 256), this.dd = 0);
              break
            }
            if (this.Va == N.Mg) {
              if (this.nl(a, b, a, b - this.ai, 0, z.he, c)) {
                this.a.o = c.x + this.a.c.V;
                this.a.n = c.y + this.a.c.Y;
                this.a.b.D =
                  j;
                break
              }
              if (this.nl(a, b, this.a.b.Pi - this.a.c.V, this.a.b.Qi - this.a.c.Y, 0, z.he, c)) {
                this.a.o = c.x + this.a.c.V;
                this.a.n = c.y + this.a.c.Y;
                this.a.b.D = j;
                this.Qu();
                break
              }
            }
            if (this.Va == N.Wo) {
              if (this.nl(a, b, a, b - this.ai, 0, z.he, c)) {
                this.a.o = c.x + this.a.c.V;
                this.a.n = c.y + this.a.c.Y;
                this.a.b.D = j;
                break
              }
              this.Nk = 1;
              this.xd = 0
            }
            if (this.Va == N.Mk && this.nl(a, b, this.a.b.Pi - this.a.c.V, this.a.b.Qi - this.a.c.Y, 0, z.he, c)) {
              this.a.o = c.x + this.a.c.V;
              this.a.n = c.y + this.a.c.Y;
              this.a.b.D = j;
              this.Qu();
              break
            }
            this.a.b.Da = this.a.b.dr;
            this.a.b.Xa =
              this.a.b.cr;
            if (this.Xl(this.a.o, this.a.n, 0, z.he, j)) break;
            this.a.o = this.a.b.Pi;
            this.a.n = this.a.b.Qi;
            this.a.b.D = j
        }
      }
    },
    ac: function(a) {
      this.a.o != a && (this.a.o = a, this.a.q.F = j, this.a.b.D = j, this.a.b.Ca = j)
    },
    bc: function(a) {
      this.a.n != a && (this.a.n = a, this.a.q.F = j, this.a.b.D = j, this.a.b.Ca = j)
    },
    Te: function(a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      a > this.a.b.Oa && (a = this.a.b.Oa);
      this.a.b.Q = a;
      this.xd = this.a.b.Q * I.hj[this.a.c.Mb(this.a)];
      this.dd = this.a.b.Q * I.sj[this.a.c.Mb(this.a)];
      this.a.q.F = j
    },
    ug: function(a) {
      0 > a && (a = 0);
      250 < a &&
        (a = 250);
      this.a.b.Oa = a;
      a <<= 8;
      this.xd > a && (this.xd = a);
      this.a.q.F = j
    },
    Cr: db("Hs"),
    Re: function(a) {
      this.a.b.Ja = a;
      this.xd = this.a.b.Q * I.hj[a];
      this.dd = this.a.b.Q * I.sj[a]
    },
    pt: function() {
      var a;
      0 < this.a.b.Da ? a = this.a.c.f.P.Ij(this.a.b.Da, this.a.b.Xa, this.a.b.tb, this.a.b.ub) : (a = new ga, a.width = this.a.B, a.height = this.a.A, a.Ga = this.a.ba, a.va = this.a.ca);
      this.Ye = 0;
      this.Ze = a.height - a.va;
      this.ai = 2 * a.height + a.height >>> 3
    },
    UH: function() {
      this.pt();
      this.i.Nf(this.a.Fd, this.a.o + this.Ye, this.a.n + this.Ze) == k.Xe && !(this.a.c.Cm(this.a,
        this.a.b.Da, this.a.b.Xa, this.a.b.tb, this.a.b.ub, this.a.o, this.a.n, 0, z.dm) == G && (this.Va == N.Wo && 0 > this.dd || this.a.c.Cm(this.a, this.a.b.Da, this.a.b.Xa, this.a.b.tb, this.a.b.ub, this.a.o, this.a.n, this.ai, z.he) == G)) && this.a.c.l.Wc(this.a, -851968 | this.a.qa & 65535)
    }
  });
  $a.sF = [4294967288, 4294967292, 4294967294, 4294967295];
  $a.prototype = q.extend(new I, {
    N: function(a, b) {
      this.a = a;
      this.ed = 0;
      this.Ng = this.a.b.Q = 0;
      this.mx = -1;
      this.a.b.Gh = b.ql;
      this.io = b.Ru;
      this.rg = this.Hj(b.Ru);
      this.jo = b.Su;
      this.ee = this.Hj(b.Su);
      this.a.b.Oa =
        b.JA;
      this.a.b.Fh = 0;
      this.nx = b.HA;
      this.a.q.Wi = 0;
      this.Vi = b.yq;
      this.Ks = 0;
      this.Ls = $a.sF[b.GA];
      this.Ms = b.IA;
      this.Pk = 0;
      this.lj = this.a.c.Mb(this.a);
      this.a.Uf = 0;
      this.a.Vf = 0;
      this.sn(b);
      this.a.b.D = j
    },
    move: function() {
      var a, b, c;
      this.a.c.sk = 1;
      if (0 == this.Ng) {
        this.a.q.tk = G;
        a = this.a.c.Ic[this.a.b.Gh - 1] & 15;
        b = 0;
        0 != (a & 8) && (b = -1);
        0 != (a & 4) && (b = 1);
        if (0 != b) {
          c = this.Ms;
          0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc);
          for (this.Pk += c; 100 < this.Pk;) this.Pk -= 100, this.lj += b, this.lj &= 31, this.a.b.Ja = this.lj & this.Ls;
          this.a.b.D = j
        }
        c = 0;
        0 != this.a.q.Wi ?
          (0 != (a & 1) && (c = 1), 0 != (a & 2) && (c = 2)) : (0 != (a & 1) && (c = 2), 0 != (a & 2) && (c = 1));
        for (b = this.ed;;) {
          if (0 != (c & 1)) {
            if (0 == this.ed) {
              if (0 == this.nx) break;
              if (0 != (this.Ks & 3)) break;
              this.a.q.Wi ^= 1;
              c = this.rg;
              0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc);
              b += c;
              c = b >> 8;
              c > this.a.b.Oa && (this.ed = b = this.a.b.Oa << 8);
              this.ed = b;
              break
            }
            c = this.ee;
            0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc);
            b -= c;
            0 > b && (b = 0);
            this.ed = b
          } else 0 != (c & 2) && (c = this.rg, 0 != (this.a.c.p.Gb & z.yc) && (c *= this.a.c.lc), b += c, c = b >> 8, c > this.a.b.Oa && (this.ed = b = this.a.b.Oa << 8), this.ed =
            b);
          break
        }
        this.Ks = a;
        this.a.b.Q = this.ed >> 8;
        this.a.b.ae = v.oc;
        this.a.ja != m && this.a.ja.Be();
        a = this.a.c.Mb(this.a);
        0 != this.a.q.Wi && (a = a + 16 & 31);
        if (this.Bi(this.a.b.Q, a) == G) return
      }
      do {
        if (0 == this.Ng) break;
        if (0 == this.a.c.sk) break;
        b = this.ed;
        b -= this.ee;
        if (0 >= b) {
          this.Ng = this.ed = 0;
          break
        }
        this.ed = b;
        b >>= 8;
        a = this.a.c.Mb(this.a);
        0 != this.Ng && (a += 16, a &= 31);
        if (this.Bi(b, a) == G) break
      } while (1)
    },
    reverse: X(),
    Re: X(),
    stop: function() {
      this.ed = this.Ng = 0;
      this.a.q.Wi = 0;
      this.Pd == this.a.c.Nc && (this.tn(0 != (this.Vi & I.om)), this.a.q.F = j)
    },
    start: function() {
      this.vb = 0;
      this.a.q.F = j
    },
    Mf: function() {
      this.Pd == this.a.c.Nc && this.tn(0 != (this.Vi & I.om));
      this.a.c.Kb != this.mx && (this.Ng = this.a.q.Wi, this.a.q.Wi = 0, this.Ng++, 16 <= this.Ng ? this.stop() : (this.a.q.F = j, this.a.q.tk = j))
    },
    Te: function(a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      a > this.a.b.Oa && (a = this.a.b.Oa);
      this.ed = a << 8;
      this.a.q.F = j
    },
    ug: function(a) {
      0 > a && (a = 0);
      250 < a && (a = 250);
      this.a.b.Oa = a;
      a <<= 8;
      this.ed > a && (this.ed = a);
      this.a.q.F = j
    },
    Dr: db("Ms"),
    ac: function(a) {
      this.a.o != a && (this.a.o = a, this.a.q.F = j, this.a.b.D = j,
        this.a.b.Ca = j)
    },
    bc: function(a) {
      this.a.n != a && (this.a.n = a, this.a.q.F = j, this.a.b.D = j, this.a.b.Ca = j)
    },
    Re: function(a) {
      this.lj = a;
      this.a.b.Ja = a & this.Ls
    }
  });
  ab.prototype = q.extend(new I, {
    N: function(a) {
      this.a = a;
      this.a.b.Q = 0;
      this.a.b.Ca = j;
      this.a.b.D = j
    },
    move: function() {
      !(this.a.ja != m && this.a.ja.Be()) && this.a.b.Ca && (this.a.b.Ca = G, this.a.c.tf(this.a))
    },
    ac: function(a) {
      this.a.o != a && (this.a.o = a, this.a.q.F = j, this.a.b.D = j);
      this.a.b.Ca = j
    },
    bc: function(a) {
      this.a.n != a && (this.a.n = a, this.a.q.F = j, this.a.b.D = j);
      this.a.b.Ca =
        j
    },
    Re: X(),
    reverse: X(),
    stop: X(),
    start: X(),
    Mf: X(),
    Te: X(),
    ug: X()
  });
  db("pd").prototype = q.extend(new I, {
    N: function(a, b) {
      this.a = a;
      a.c.f.file.Of(b.data);
      this.a.b.Ca = j;
      this.a.b.D = j
    },
    qb: function() {
      this.pd.qb()
    },
    move: function() {
      this.pd.move() && (this.a.b.D = j)
    },
    stop: function() {
      this.pd.stop(this.Pd == this.a.c.Nc)
    },
    start: function() {
      this.pd.start()
    },
    Mf: function() {
      this.pd.Mf(this.Pd == this.a.c.Nc)
    },
    Te: function(a) {
      this.pd.Te(a)
    },
    ug: function(a) {
      this.pd.ug(a)
    },
    reverse: function() {
      this.pd.reverse()
    },
    ac: function(a) {
      this.pd.ac(a);
      this.a.b.D = j;
      this.a.b.Ca = j
    },
    bc: function(a) {
      this.pd.bc(a);
      this.a.b.D = j;
      this.a.b.Ca = j
    },
    Re: function(a) {
      this.pd.Re(a);
      this.a.b.D = j;
      this.a.b.Ca = j
    },
    dy: $(0)
  });
  Ga.UD = 1;
  Ga.VD = 2;
  Ga.eL = 4;
  Ga.prototype = {
    N: function(a, b, c, d, e) {
      this.Z != m && this.Z.qb();
      d != m && (b.b.Ja = d.my);
      this.iw = b.Ub.hv;
      d = m;
      b.b.vd = -1;
      if (c.eg != m && a < c.eg.xn) {
        d = c.eg.od[a];
        this.hw = a; - 1 == e && (e = d.Uu);
        b.b.vd = e;
        switch (e) {
          case 0:
            this.Z = new ab;
            break;
          case 1:
            this.Z = new xd;
            break;
          case 2:
            this.Z = new $a;
            break;
          case 3:
            this.Z = new wd;
            break;
          case 4:
            this.Z = new wa;
            break;
          case 5:
            this.Z = new yd;
            break;
          case 9:
            this.Z = new N;
            break;
          case 14:
            this.Z = m, this.Z == m && (this.Z = new ab)
        }
        b.b.Ja = this.It(b, d.RA, b.b.Ja);
        this.Z.N(b, d)
      } - 1 == b.b.vd && (b.b.vd = 0, this.Z = new ab, this.Z.N(b, m), b.b.Ja = 0)
    },
    iH: function(a, b, c) {
      this.Z != m && this.Z.qb();
      a.b.vd = b;
      switch (b) {
        case 11:
          this.Z = new vd;
          break;
        case 13:
          this.Z = new ud
      }
      this.Z.a = a;
      c == G && this.Z.N(a, m)
    },
    qb: function() {
      this.Z.qb()
    },
    move: function() {
      this.Z.move()
    },
    It: function(a, b, c) {
      if (0 > c || 32 <= c) {
        for (var d = 0, e = b, g, c = 0; 32 > c; c++) g = e, e >>= 1, 0 != (g & 1) && d++;
        if (0 == d) c =
          0;
        else {
          d = a.c.random(d);
          e = b;
          for (c = 0; !(g = e, e >>= 1, 0 != (g & 1) && (d--, 0 > d)); c++);
        }
      }
      return c
    }
  };
  J.Kw = 0;
  J.Gk = 1;
  J.Uh = 2;
  J.Ig = 3;
  J.gj = 4;
  J.SC = 0;
  J.QC = 1;
  J.RC = 2;
  J.TC = 3;
  J.bD = 1;
  J.aD = 2;
  J.dD = 4;
  J.eD = 8;
  J.cD = 16;
  J.prototype = q.extend(new Qa, {
    update: function(a) {
      a === oa && (a = this.element);
      switch (this.button.type) {
        case J.Gk:
          a = this.button.Am;
        case J.Kw:
          for (; a.firstChild;) a.removeChild(a.firstChild);
          a.appendChild(document.createTextNode(this.button.Lb[0]));
          break;
        case J.Uh:
          var b = 0,
            c = this;
          this.Fe(function() {
            for (; this.firstChild;) this.removeChild(this.firstChild);
            this.appendChild(document.createTextNode(c.button.Lb[b++]))
          }, a, "label");
          break;
        case J.gj:
        case J.Ig:
          var d = G;
          this.Fe(function() {
            this.disabled && (d = j)
          }, a);
          var e = this.T.f.P.eb(this.button.images[d ? 2 : this.button.by ? 1 : 0]);
          for (e == m && (e = this.T.f.P.eb(this.button.images[0])); a.firstChild;) a.removeChild(a.firstChild);
          e = e.createElement();
          e.style.display = "inline-block";
          if (this.button.type == J.gj) switch (a.appendChild(document.createTextNode(this.button.Lb[0])), this.button.DF) {
            case J.SC:
              a.insertBefore(e, a.firstChild);
              break;
            case J.TC:
              a.appendChild(e);
              break;
            case J.QC:
              a.insertBefore(document.createElement("br"), a.firstChild);
              a.insertBefore(e, a.firstChild);
              break;
            case J.RC:
              a.appendChild(document.createElement("br")), a.appendChild(e)
          } else a.appendChild(e)
      }
    },
    Ck: function(a) {
      if (!(this.button.X & J.cD) && this.button.type != J.Ig) {
        a === oa && (a = this.element);
        a.style.backgroundColor = this.button.X & J.eD ? "transparent" : q.Ed(this.button.background);
        var b = this;
        this.Fe(function() {
          this.style.color = q.Ed(b.button.hf)
        }, a, "label")
      }
    },
    Fe: function(a,
      b, c) {
      b === oa && (b = this.element);
      c === oa && (c = "input");
      switch (this.button.type) {
        case J.Kw:
        case J.Ig:
        case J.gj:
          if (a.call(b) === G) break;
          break;
        case J.Gk:
          if (a.call("label" == c ? this.button.Am : this.button.$g) === G) break;
          break;
        case J.Uh:
          for (var d = 0, e;;) {
            for (;
              (e = b.childNodes[d]).tagName.toLowerCase() != c && !(++d >= b.childNodes.length););
            if (a.call(e) === G) break;
            if (++d >= b.childNodes.length) break
          }
      }
    },
    Xm: $(6),
    Et: function(a) {
      this.v.B = a.k();
      this.v.A = a.k();
      var b = this.button;
      b.type = a.k();
      b.Jv = a.k();
      b.X = a.m();
      var c = a.er();
      b.hf =
        a.Xb();
      b.background = a.Xb();
      b.images = Array(3);
      for (var d = 0; 3 > d; ++d) b.images[d] = a.k();
      (b.type == J.Ig || b.type == J.gj) && this.v.Bu(b.images);
      if (b.type == J.Ig) {
        this.v.B = 1;
        this.v.A = 1;
        for (d = 0; 3 > d; ++d) {
          var e = this.v.c.f.P.eb(b.images[d]);
          e && (this.v.B = Math.max(this.v.B, e.width), this.v.A = Math.max(this.v.A, e.height))
        }
      }
      a.k();
      a.m();
      b.DF = a.k();
      if (b.type == J.Uh) {
        b.so = "";
        var e = document.createElement("div"),
          g = "mmf-radio-group-" + this.v.Lj;
        b.Lb = Array(b.Jv);
        for (d = 0; d < b.Jv; ++d) {
          b.Lb[d] = a.Ya();
          var h = document.createElement("input"),
            k = document.createElement("label");
          h.setAttribute("name", g);
          h.type = "radio";
          h.id = "mmf-radio-" + this.v.Lj + "-" + d;
          k.setAttribute("for", h.id);
          k.style.position = "relative";
          k.style.top = "-2px";
          k.style.display = "inline-block";
          k.style.height = (100 * (1 / b.Jv)).toString() + "%";
          0 < d && e.appendChild(document.createElement("br"));
          e.appendChild(h);
          e.appendChild(k)
        }
      } else switch (b.Lb = [a.Ya()], b.so = a.Ya(), b.type) {
        case J.Gk:
          e = document.createElement("div");
          b.$g = document.createElement("input");
          b.$g.type = "checkbox";
          b.$g.id = "mmf-checkbox-" +
            this.v.Lj;
          b.Am = document.createElement("label");
          b.Am.setAttribute("for", b.$g.id);
          b.X & J.dD ? (e.appendChild(b.Am), e.appendChild(b.$g)) : (e.appendChild(b.$g), e.appendChild(b.Am));
          break;
        case J.Ig:
          e = document.createElement("div");
          break;
        default:
          e = document.createElement("button")
      }
      e.title = b.so;
      b.X & J.aD && this.Fe(function() {
        this.disabled = j
      }, e);
      this.update(e);
      this.Ck(e);
      this.Bf(c, e);
      this.ZB(e, 0 == (b.X & J.bD));
      var p = this;
      b.type == J.Ig || b.type == J.gj ? (e.onmousedown = function() {
          p.T.f.Pm(j);
          p.button.by = j;
          p.update()
        }, e.onmouseup =
        function() {
          p.T.f.Pm(G);
          p.button.by = G;
          p.update();
          p.button.xt = p.v.c.nk;
          p.v.Zt(1, 0)
        }) : (e.onclick = function() {
        p.button.xt = p.v.c.nk;
        p.v.Zt(1, 0)
      }, e.onmousedown = function() {
        p.T.f.Pm(j)
      }, e.onmouseup = function() {
        p.T.f.Pm(G)
      })
    },
    bl: function(a, b) {
      switch (a) {
        case 0:
          return this.button.type == J.Gk && this.button.$g.checked;
        case 1:
          return 0 != (this.v.M & E.ts) || this.v.c.nk == this.button.xt;
        case 2:
          return this.button.type == J.Gk && !this.button.$g.checked;
        case 3:
          return this.button.visible;
        case 4:
          return this.button.enabled;
        case 5:
          if (this.button.type !=
            J.Uh || 0 > c || c >= this.button.Lb.length) return G;
          var c = b.ld(this.T, 0),
            d = 0,
            e;
          this.Fe(function() {
            if (d == c) return e = this, G;
            ++d
          });
          return !e.disabled
      }
    },
    action: function(a, b) {
      switch (a) {
        case 0:
          this.button.Lb[0] = b.hl(this.T, 0);
          this.update();
          break;
        case 1:
          this.v.$ = j;
          this.element.style.visibility = "visible";
          break;
        case 2:
          this.v.$ = G;
          this.element.style.visibility = "hidden";
          break;
        case 3:
          this.Fe(function() {
            this.disabled = G
          });
          (this.button.type == J.Ig || this.button.type == J.gj) && this.update();
          break;
        case 4:
          this.Fe(function() {
            this.disabled =
              j
          });
          (this.button.type == J.Ig || this.button.type == J.gj) && this.update();
          break;
        case 5:
          var c = b.cu(this.T, 0);
          c.jz && this.vg(c.x, c.y);
          break;
        case 6:
          this.po(b.ld(this.T, 0));
          break;
        case 7:
          this.oo(b.ld(this.T, 0));
          break;
        case 8:
          if (this.button.type != J.Uh) break;
          var d = b.ld(this.T, 0),
            c = b.hl(this.T, 1);
          if (0 > d && d >= this.button.Lb.length) break;
          this.button.Lb[d] = c;
          this.update();
          break;
        case 9:
        case 10:
          if (this.button.type != J.Uh) break;
          d = b.ld(this.T, 0);
          if (0 > d && d >= this.button.Lb.length) break;
          this.Fe(function() {
            if (e == d) return this.disabled =
              10 == a, G;
            ++e
          });
          break;
        case 11:
          if (this.button.type != J.Uh) break;
          d = b.ld(this.T, 0);
          if (0 > d && d >= this.button.Lb.length) break;
          var e = 0;
          this.Fe(function() {
            if (e == d) return this.checked = j, G;
            ++e
          });
          break;
        case 12:
          this.Gr(b.ld(this.T, 0));
          break;
        case 13:
          this.Hr(b.ld(this.T, 0));
          break;
        case 14:
          this.button.type == J.Gk && (this.button.$g.checked = j);
          break;
        case 15:
          this.Fe(function() {
            this.checked = G
          });
          break;
        case 17:
          this.button.so = b.hl(this.T, 0), this.element && (this.element.title = this.button.so)
      }
    },
    Nm: function(a) {
      switch (a) {
        case 0:
          return this.v.B;
        case 1:
          return this.v.A;
        case 2:
          return this.v.o;
        case 3:
          return this.v.n;
        case 4:
          if (this.button.type != J.Uh) return 0;
          var b = 0,
            c = G;
          this.Fe(function() {
            if (this.checked) return c = j, G;
            ++b
          });
          return c ? b : -1;
        case 5:
          return b = this.v.MG(), 0 > b || b >= this.button.Lb.length ? "" : this.button.Lb[b];
        case 6:
          return this.button.so
      }
    },
    du: function() {
      return this.button.hf
    },
    nw: function(a) {
      this.button.hf = a;
      this.Ck()
    },
    Bf: function(a, b) {
      b === oa && (b = this.element);
      Qa.prototype.Bf.call(this, a);
      this.Fe(function() {
          this.style.font = b.style.font
        },
        b, "label")
    }
  });
  7;
  T.$K = 1;
  T.ZK = 2;
  T.dL = 4;
  T.cL = 8;
  T.RD = 16;
  T.PD = 32;
  T.QD = 64;
  T.MD = 128;
  T.ND = 256;
  T.bL = 512;
  T.OD = 1024;
  T.aL = 2048;
  T.SD = 4096;
  T.JD = 8192;
  T.TD = 16384;
  T.KD = 65536;
  T.LD = 131072;
  T.prototype = q.extend(new Qa, {
    Ck: function(a) {
      a === oa && (a = this.element);
      this.hd.X & T.SD || (a.style.backgroundColor = this.hd.X & T.TD ? "transparent" : q.Ed(this.hd.background), a.style.color = q.Ed(this.hd.hf))
    },
    Xm: $(7),
    Et: function(a) {
      this.v.B = a.k();
      this.v.A = a.k();
      var b = this.hd,
        c = this.v.c.f.zd ? a.er() : a.Qv();
      a.W(64);
      b.hf = a.Xb();
      b.background = a.Xb();
      a.W(80);
      b.X = a.m();
      b.X & T.PD ? a = document.createElement("textarea") : (a = document.createElement("input"), a.type = b.X & T.QD ? "password" : "text");
      b.X & T.KD && (a.style.textAlign = "center");
      b.X & T.LD && (a.style.textAlign = "right");
      b.X & T.RD && (a.readOnly = j);
      this.Ck(a);
      b.X & T.JD ? (a.style.borderStyle = "inset", a.style.borderWidth = "2px") : (a.style.borderStyle = "solid", b.X & T.MD ? (a.style.borderWidth = "1px", a.style.borderColor = "#000000") : a.style.borderWidth = "0px");
      b.X & T.OD && (a.autocapitalize = "off");
      this.Bf(c);
      c.Wz && (a.style.textDecoration =
        "underline");
      c.Vz && (a.style.textDecoration = "line-through");
      this.ZB(a, 0 == (b.X & T.ND));
      this.iB = "";
      var d = this;
      a.ondblclick = function() {
        d.hd.oG = d.v.c.nk;
        d.v.Zt(2, 0)
      }
    },
    Tp: function() {
      this.element.value != this.iB && (this.hd.up = j, this.iB = this.element.value);
      Qa.prototype.Tp.call(this)
    },
    bl: function(a) {
      switch (a) {
        case 0:
          return "hidden" != this.element.style.visibility;
        case 1:
          return !this.element.disabled;
        case 2:
          return G;
        case 3:
          return this.hd.up;
        case 4:
          return document.activeElement == this.element;
        case 5:
          return !isNaN(parseInt(this.element.value,
            10));
        case 6:
          return 0 < this.element.selectionEnd - this.element.selectionStart
      }
    },
    action: function(a, b) {
      switch (a) {
        case 0:
          var c = q.lB(b.xz(this.T, 0));
          this.element.value = "";
          var d = localStorage.getItem(c);
          if (d) {
            this.element.value = d;
            break
          }
          try {
            var e = new Ca;
            if (e.zP(c)) {
              this.element.value = e.Ya(e.uz());
              break
            }
            var g = this.T.f.LG(c);
            if (g) {
              e = g.open();
              this.element.value = e.Ya(e.uz());
              break
            }
          } catch (h) {
            document.debug && f(h)
          }
          break;
        case 2:
          c = q.lB(b.xz(this.T, 0));
          localStorage.setItem(c, this.element.value);
          break;
        case 4:
          this.element.value =
            b.hl(this.T, 0);
          break;
        case 5:
          this.element.value = [this.element.value.substring(0, this.element.selectionStart), b.hl(this.T, 0), this.element.value.substring(this.element.selectionEnd)].join("");
          break;
        case 9:
          this.element.value = "";
          break;
        case 12:
          this.v.$ = j;
          this.element.style.visibility = "visible";
          break;
        case 13:
          this.v.$ = G;
          this.element.style.visibility = "hidden";
          break;
        case 16:
          this.element.focus();
          break;
        case 17:
          this.element.disabled = G;
          break;
        case 18:
          this.element.disabled = j;
          break;
        case 19:
          this.element.readOnly = j;
          break;
        case 20:
          this.element.readOnly = G;
          break;
        case 21:
          this.hd.up = j;
          break;
        case 22:
          this.hd.up = G;
          break;
        case 23:
          this.element.setAttribute("maxlength", b.ld(this.T, 0));
          break;
        case 24:
          c = b.cu(this.T, 0);
          c.jz && this.vg(c.x, c.y);
          break;
        case 25:
          this.Gr(b.ld(this.T, 0));
          break;
        case 26:
          this.Hr(b.ld(this.T, 0));
          break;
        case 27:
          this.Sl(b.ld(this.T, 0), b.ld(this.T, 1));
          break;
        case 28:
          this.po(b.ld(this.T, 0));
          break;
        case 29:
          this.oo(b.ld(this.T, 0));
          break;
        case 30:
          this.element.blur();
          break;
        case 31:
          this.element.scrollTop = 0;
          break;
        case 33:
          this.element.scrollTop =
            99999;
          break;
        case 34:
          this.hd.hf = b.bu(this.T, 0);
          this.Ck();
          break;
        case 35:
          this.hd.background = b.bu(this.T, 0), this.Ck()
      }
    },
    Nm: function(a) {
      switch (a) {
        case 0:
          return this.element.value;
        case 1:
          return this.element.value.substring(this.element.selectionStart, this.element.selectionEnd);
        case 2:
          return this.v.o;
        case 3:
          return this.v.n;
        case 4:
          return this.v.B;
        case 5:
          return this.v.A;
        case 6:
          return a = parseInt(this.element.value, 10), isNaN(a) ? 0 : a;
        case 7:
          return a = Math.min(this.element.value.indexOf("\r"), this.element.value.indexOf("\n")), -1 == a ? "" : this.element.substring(0, a);
        case 8:
          return this.element.value.split("\n").length;
        case 9:
          return this.hd.hf;
        case 10:
          return this.hd.background
      }
    },
    du: function() {
      return this.hd.hf
    },
    nw: function(a) {
      this.hd.hf = a;
      this.Ck()
    }
  });
  dd(ra, eb)
};
