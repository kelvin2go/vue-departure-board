import { defineComponent as d, computed as a, openBlock as s, createElementBlock as l, normalizeStyle as _, unref as o, Fragment as m, renderList as f, normalizeClass as z } from "vue";
const y = /* @__PURE__ */ d({
  __name: "VDepartureBoard",
  props: {
    displayStr: { default: "" },
    color: { default: "white" },
    bgColor: { default: "black" },
    size: { default: 40 }
  },
  setup(n) {
    const e = n, p = a(() => {
      var t;
      return ((t = e.displayStr) == null ? void 0 : t.split("").map((r) => r == " " ? "blank" : r.toUpperCase())) || [];
    }), u = a(() => `${e.size}px`), c = a(() => `${e.size / 2}px`);
    return (t, r) => (s(), l("div", {
      class: "v-departure-board",
      style: _(
        { "--sizePx": o(u), "--halfSizePx": o(c) }
      )
    }, [
      (s(!0), l(m, null, f(o(p), (i) => (s(), l("span", {
        class: z(["letter", [`letter-${i}`]])
      }, null, 2))), 256))
    ], 4));
  }
});
export {
  y as VDepartureBoard
};
