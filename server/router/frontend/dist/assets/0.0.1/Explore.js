import { o as observer, l as useResponsiveWidth, j as jsxRuntimeExports, n as MobileHeader, P as PagedMemoList, v as viewStore, S as State, M as MemoView } from "./index.js";
import { d as dayjs2 } from "./mermaid-vendor.js";
import "./leaflet-vendor.js";
import "./utils-vendor.js";
import "./katex-vendor.js";
const Explore = observer(() => {
  const { md } = useResponsiveWidth();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "@container w-full max-w-5xl min-h-full flex flex-col justify-start items-center sm:pt-3 md:pt-6 pb-8", children: [
    !md && /* @__PURE__ */ jsxRuntimeExports.jsx(MobileHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PagedMemoList,
      {
        renderer: (memo) => /* @__PURE__ */ jsxRuntimeExports.jsx(MemoView, { memo, showCreator: true, showVisibility: true, compact: true }, `${memo.name}-${memo.updateTime}`),
        listSort: (memos) => memos.filter((memo) => memo.state === State.NORMAL).sort(
          (a, b) => viewStore.state.orderByTimeAsc ? dayjs2(a.displayTime).unix() - dayjs2(b.displayTime).unix() : dayjs2(b.displayTime).unix() - dayjs2(a.displayTime).unix()
        ),
        orderBy: viewStore.state.orderByTimeAsc ? "display_time asc" : "display_time desc"
      }
    ) })
  ] });
});
export {
  Explore as default
};
