import { o as observer, e as useCurrentUser, f as extractUserIdFromName, m as memoFilterStore, j as jsxRuntimeExports, P as PagedMemoList, S as State, v as viewStore, M as MemoView } from "./index.js";
import { d as dayjs2 } from "./mermaid-vendor.js";
import { r as reactExports } from "./leaflet-vendor.js";
import "./utils-vendor.js";
import "./katex-vendor.js";
const Archived = observer(() => {
  const user = useCurrentUser();
  const memoFitler = reactExports.useMemo(() => {
    const conditions = [`creator_id == ${extractUserIdFromName(user.name)}`];
    for (const filter of memoFilterStore.filters) {
      if (filter.factor === "contentSearch") {
        conditions.push(`content.contains("${filter.value}")`);
      } else if (filter.factor === "tagSearch") {
        conditions.push(`tag in ["${filter.value}"]`);
      }
    }
    return conditions.length > 0 ? conditions.join(" && ") : void 0;
  }, [memoFilterStore.filters]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    PagedMemoList,
    {
      renderer: (memo) => /* @__PURE__ */ jsxRuntimeExports.jsx(MemoView, { memo, showVisibility: true, compact: true }, `${memo.name}-${memo.updateTime}`),
      listSort: (memos) => memos.filter((memo) => memo.state === State.ARCHIVED).sort(
        (a, b) => viewStore.state.orderByTimeAsc ? dayjs2(a.displayTime).unix() - dayjs2(b.displayTime).unix() : dayjs2(b.displayTime).unix() - dayjs2(a.displayTime).unix()
      ),
      state: State.ARCHIVED,
      orderBy: viewStore.state.orderByTimeAsc ? "display_time asc" : "display_time desc",
      filter: memoFitler
    }
  );
});
export {
  Archived as default
};
