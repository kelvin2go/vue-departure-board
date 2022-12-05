import { computed as s, openBlock as a, createElementBlock as o, normalizeStyle as _, unref as l, Fragment as d, renderList as m, normalizeClass as z } from "vue";
const y = {
  __name: "VDepartureBoard",
  props: {
    displayStr: "",
    color: "white",
    bgColor: "black",
    size: 40
  },
  setup(n) {
    const e = n, p = s(() => {
      var r;
      return ((r = e.displayStr) == null ? void 0 : r.split("").map((t) => t == " " ? "blank" : t.toUpperCase())) || [];
    }), c = s(() => `${e.size}px`), i = s(() => `${e.size / 2}px`);
    return (r, t) => (a(), o("div", {
      class: "v-departure-board",
      style: _({ "--sizePx": l(c), "--halfSizePx": l(i) })
    }, [
      (a(!0), o(d, null, m(l(p), (u) => (a(), o("span", {
        class: z(["letter", [`letter-${u}`]])
      }, null, 2))), 256))
    ], 4));
  }
};
export {
  y as VDepartureBoard
};
