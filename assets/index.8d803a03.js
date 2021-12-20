import {
  r as l,
  j as r,
  F as d,
  a as c,
  V as u,
  H as f,
  U as m,
  L as g,
  e as p,
  R as h,
  b as y,
  C as x,
} from "./vendor.b2aa4ca7.js";
const b = function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) o(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const a of t.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && o(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function o(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = i(e);
    fetch(e.href, t);
  }
};
b();
const L = [
  { id: 1, name: "Medias " },
  { id: 2, name: "caramelos" },
  { id: 3, name: "Vitel Tone" },
];
function v() {
  const [s, n] = l.exports.useState(void 0);
  return (
    l.exports.useEffect(() => {
      n(L);
    }, []),
    r(d, {
      alignItems: "center",
      justifyContent: "center",
      minH: "100vh",
      w: "100%",
      children: c(u, {
        alignItems: "flex-start",
        bg: "white",
        p: 4,
        shadow: "md",
        w: "30%",
        children: [
          r(f, { textAlign: "center", w: "100%", children: "Regalos:" }),
          r(m, {
            listStyleType: "none",
            textAlign: "center",
            w: "100%",
            children: s
              ? s.map(({ id: i, name: o }) =>
                  c(g, { children: [" ", o, " "] }, i)
                )
              : "",
          }),
        ],
      }),
    })
  );
}
var w = p({
  styles: {
    global: { body: { backgroundColor: "gray.100", fontsize: "16px" } },
  },
});
h.render(
  r(y.StrictMode, { children: r(x, { theme: w, children: r(v, {}) }) }),
  document.getElementById("root")
);
