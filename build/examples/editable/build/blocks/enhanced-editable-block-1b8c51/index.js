/******/ (() => { // webpackBootstrap
/*!************************************************************************************!*\
  !*** ./src/examples/editable/build/blocks/enhanced-editable-block-1b8c51/index.js ***!
  \************************************************************************************/
(() => {
  "use strict";

  var e,
    t = {
      721: () => {
        const e = window.wp.blocks,
          t = JSON.parse('{"UU":"block-development-examples/enhanced-editable-block-1b8c51"}'),
          r = window.React,
          n = window.wp.blockEditor,
          a = window.wp.element,
          o = window.wp.i18n,
          l = (s = 100, e => t => {
            const {
                value: n,
                onChange: l
              } = t,
              {
                charCount: c,
                errorMessage: i,
                handleContentChange: p
              } = function (e = "", t, r) {
                var n;
                const [l, c] = (0, a.useState)(null !== (n = e?.length) && void 0 !== n ? n : 0),
                  [s, i] = (0, a.useState)(""),
                  p = e => {
                    c(e.length), e.length > r ? i((0, o.sprintf)(/* translators: %d: maximum number of character allowed */ /* translators: %d: maximum number of character allowed */
                    (0, o.__)("Character limit exceeded. Please enter no more than %d characters.", "block-development-examples"), r)) : (i(""), t(e));
                  };
                return (0, a.useEffect)(() => {
                  e && p(e);
                }, []), {
                  charCount: l,
                  errorMessage: s,
                  handleContentChange: p
                };
              }(n, l, s),
              d = c > s ? "red" : "green",
              u = {
                width: c / s * s + "%",
                height: "5px",
                backgroundColor: d,
                marginTop: "5px"
              };
            return (0, r.createElement)(r.Fragment, null, (0, r.createElement)(e, {
              ...t,
              onChange: p,
              value: n
            }), i && (0, r.createElement)("div", {
              className: "error-message",
              style: {
                color: "red"
              }
            }, i), (0, r.createElement)("div", {
              className: "progress-bar",
              style: u
            }), (0, r.createElement)("div", {
              className: "char-count",
              style: {
                color: d
              }
            }, c, " / ", s));
          })(n.RichText),
          {
            UU: c
          } = t;
        var s;
        (0, e.registerBlockType)(c, {
          edit: e => {
            const {
                attributes: {
                  content: t
                },
                setAttributes: a
              } = e,
              o = (0, n.useBlockProps)();
            return (0, r.createElement)("div", {
              ...o
            }, (0, r.createElement)(l, {
              tagName: "p",
              onChange: e => {
                a({
                  content: e
                });
              },
              value: t
            }));
          },
          save: e => {
            const {
                attributes: {
                  content: t
                }
              } = e,
              a = n.useBlockProps.save();
            return (0, r.createElement)(n.RichText.Content, {
              ...a,
              tagName: "p",
              value: t
            });
          }
        });
      }
    },
    r = {};
  function n(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var o = r[e] = {
      exports: {}
    };
    return t[e](o, o.exports, n), o.exports;
  }
  n.m = t, e = [], n.O = (t, r, a, o) => {
    if (!r) {
      var l = 1 / 0;
      for (p = 0; p < e.length; p++) {
        r = e[p][0], a = e[p][1], o = e[p][2];
        for (var c = !0, s = 0; s < r.length; s++) (!1 & o || l >= o) && Object.keys(n.O).every(e => n.O[e](r[s])) ? r.splice(s--, 1) : (c = !1, o < l && (l = o));
        if (c) {
          e.splice(p--, 1);
          var i = a();
          void 0 !== i && (t = i);
        }
      }
      return t;
    }
    o = o || 0;
    for (var p = e.length; p > 0 && e[p - 1][2] > o; p--) e[p] = e[p - 1];
    e[p] = [r, a, o];
  }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
    var e = {
      261: 0,
      889: 0
    };
    n.O.j = t => 0 === e[t];
    var t = (t, r) => {
        var a,
          o,
          l = r[0],
          c = r[1],
          s = r[2],
          i = 0;
        if (l.some(t => 0 !== e[t])) {
          for (a in c) n.o(c, a) && (n.m[a] = c[a]);
          if (s) var p = s(n);
        }
        for (t && t(r); i < l.length; i++) o = l[i], n.o(e, o) && e[o] && e[o][0](), e[o] = 0;
        return n.O(p);
      },
      r = self.webpackChunk_block_development_examples_editable_block_1b8c51 = self.webpackChunk_block_development_examples_editable_block_1b8c51 || [];
    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r));
  })();
  var a = n.O(void 0, [889], () => n(721));
  a = n.O(a);
})();
/******/ })()
;
//# sourceMappingURL=index.js.map