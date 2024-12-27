/******/ (() => { // webpackBootstrap
/*!*********************************************************************************!*\
  !*** ./src/examples/editable/build/blocks/basic-editable-block-1b8c51/index.js ***!
  \*********************************************************************************/
(() => {
  "use strict";

  var e,
    t = {
      269: () => {
        const e = window.wp.blocks,
          t = JSON.parse('{"UU":"block-development-examples/basic-editable-block-1b8c51"}'),
          r = window.React,
          o = window.wp.blockEditor,
          {
            UU: n
          } = t;
        (0, e.registerBlockType)(n, {
          edit: e => {
            const {
                attributes: {
                  content: t
                },
                setAttributes: n
              } = e,
              a = (0, o.useBlockProps)();
            return (0, r.createElement)(o.RichText, {
              ...a,
              tagName: "p",
              onChange: e => {
                n({
                  content: e
                });
              },
              value: t
            });
          },
          save: e => {
            const {
                attributes: {
                  content: t
                }
              } = e,
              n = o.useBlockProps.save();
            return (0, r.createElement)(o.RichText.Content, {
              ...n,
              tagName: "p",
              value: t
            });
          }
        });
      }
    },
    r = {};
  function o(e) {
    var n = r[e];
    if (void 0 !== n) return n.exports;
    var a = r[e] = {
      exports: {}
    };
    return t[e](a, a.exports, o), a.exports;
  }
  o.m = t, e = [], o.O = (t, r, n, a) => {
    if (!r) {
      var l = 1 / 0;
      for (p = 0; p < e.length; p++) {
        r = e[p][0], n = e[p][1], a = e[p][2];
        for (var c = !0, s = 0; s < r.length; s++) (!1 & a || l >= a) && Object.keys(o.O).every(e => o.O[e](r[s])) ? r.splice(s--, 1) : (c = !1, a < l && (l = a));
        if (c) {
          e.splice(p--, 1);
          var i = n();
          void 0 !== i && (t = i);
        }
      }
      return t;
    }
    a = a || 0;
    for (var p = e.length; p > 0 && e[p - 1][2] > a; p--) e[p] = e[p - 1];
    e[p] = [r, n, a];
  }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
    var e = {
      969: 0,
      925: 0
    };
    o.O.j = t => 0 === e[t];
    var t = (t, r) => {
        var n,
          a,
          l = r[0],
          c = r[1],
          s = r[2],
          i = 0;
        if (l.some(t => 0 !== e[t])) {
          for (n in c) o.o(c, n) && (o.m[n] = c[n]);
          if (s) var p = s(o);
        }
        for (t && t(r); i < l.length; i++) a = l[i], o.o(e, a) && e[a] && e[a][0](), e[a] = 0;
        return o.O(p);
      },
      r = self.webpackChunk_block_development_examples_editable_block_1b8c51 = self.webpackChunk_block_development_examples_editable_block_1b8c51 || [];
    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r));
  })();
  var n = o.O(void 0, [925], () => o(269));
  n = o.O(n);
})();
/******/ })()
;
//# sourceMappingURL=index.js.map