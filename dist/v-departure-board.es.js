import { defineComponent as d, computed as r, openBlock as a, createElementBlock as s, normalizeStyle as i, unref as l, Fragment as _, renderList as m, normalizeClass as f } from "vue";
const y = /* @__PURE__ */ d({
  __name: "VDepartureBoard",
  props: {
    displayStr: { default: "" },
    color: { default: "white" },
    bgColor: { default: "black" },
    size: { default: 40 }
  },
  setup(o) {
    const t = o, n = r(() => t.displayStr?.split("").map((e) => e == " " ? "blank" : e == "+" ? "add" : e.toUpperCase()) || []), p = r(() => `${t.size}px`), u = r(() => `${t.size / 2}px`);
    return (e, z) => (a(), s("div", {
      class: "v-departure-board",
      style: i(
        { "--sizePx": l(p), "--halfSizePx": l(u) }
      )
    }, [
      (a(!0), s(_, null, m(l(n), (c) => (a(), s("span", {
        class: f(["letter", [`letter-${c}`]])
      }, null, 2))), 256))
    ], 4));
  }
});
export {
  y as VDepartureBoard
};
