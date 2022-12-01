import { defineComponent as i, computed as a, openBlock as s, createElementBlock as l, normalizeStyle as _, unref as o, Fragment as m, renderList as f, normalizeClass as z } from "vue";
const y = /* @__PURE__ */ i({
  __name: "VDepartureBoard",
  props: {
    displayStr: { default: "" },
    color: { default: "white" },
    bgColor: { default: "black" },
    size: { default: 40 }
  },
  setup(n) {
    const t = n, p = a(() => {
      var r;
      return ((r = t.displayStr) == null ? void 0 : r.split("").map((e) => e == " " ? "blank" : e == "+" ? "add" : e.toUpperCase())) || [];
    }), u = a(() => `${t.size}px`), c = a(() => `${t.size / 2}px`);
    return (r, e) => (s(), l("div", {
      class: "v-departure-board",
      style: _({ "--sizePx": o(u), "--halfSizePx": o(c) })
    }, [
      (s(!0), l(m, null, f(o(p), (d) => (s(), l("span", {
        class: z(["letter", [`letter-${d}`]])
      }, null, 2))), 256))
    ], 4));
  }
});
export {
  y as VDepartureBoard
};
