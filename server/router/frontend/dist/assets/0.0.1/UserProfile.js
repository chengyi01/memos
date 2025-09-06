import { o as observer, u as useTranslate, Q as useParams, b as useLoading, V as userStore, e as c, g as extractUserIdFromName, m as memoFilterStore, j as jsxRuntimeExports, B as Button, W as UserAvatar, P as PagedMemoList, v as viewStore, S as State, M as MemoView, X as copy } from "./index.js";
import { d as dayjs2 } from "./mermaid-vendor.js";
import { r as reactExports } from "./leaflet-vendor.js";
import { E as ExternalLink } from "./external-link.js";
import "./utils-vendor.js";
import "./katex-vendor.js";
const UserProfile = observer(() => {
  const t = useTranslate();
  const params = useParams();
  const loadingState = useLoading();
  const [user, setUser] = reactExports.useState();
  reactExports.useEffect(() => {
    const username = params.username;
    if (!username) {
      throw new Error("username is required");
    }
    userStore.getOrFetchUserByUsername(username).then((user2) => {
      setUser(user2);
      loadingState.setFinish();
    }).catch((error) => {
      console.error(error);
      c.error(t("message.user-not-found"));
    });
  }, [params.username]);
  const memoFilter = reactExports.useMemo(() => {
    if (!user) {
      return void 0;
    }
    const conditions = [`creator_id == ${extractUserIdFromName(user.name)}`];
    for (const filter of memoFilterStore.filters) {
      if (filter.factor === "contentSearch") {
        conditions.push(`content.contains("${filter.value}")`);
      } else if (filter.factor === "tagSearch") {
        conditions.push(`tag in ["${filter.value}"]`);
      }
    }
    return conditions.length > 0 ? conditions.join(" && ") : void 0;
  }, [user, memoFilterStore.filters]);
  const handleCopyProfileLink = () => {
    if (!user) {
      return;
    }
    copy(`${window.location.origin}/u/${encodeURIComponent(user.username)}`);
    c.success(t("message.copied"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "w-full max-w-3xl min-h-full flex flex-col justify-start items-center pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-col justify-start items-center max-w-2xl", children: !loadingState.isLoading && (user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-4 w-full flex justify-end items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: handleCopyProfileLink, children: [
      t("common.share"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "ml-1 w-4 h-auto opacity-60" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col justify-start items-start pt-4 pb-8 px-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { className: "w-16! h-16! drop-shadow rounded-3xl", avatarUrl: user?.avatarUrl }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 w-auto max-w-[calc(100%-6rem)] flex flex-col justify-center items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-3xl text-foreground leading-tight font-medium opacity-80 truncate", children: user.displayName || user.username }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-muted-foreground leading-snug whitespace-pre-wrap truncate line-clamp-6", children: user.description })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PagedMemoList,
      {
        renderer: (memo) => /* @__PURE__ */ jsxRuntimeExports.jsx(MemoView, { memo, showVisibility: true, showPinned: true, compact: true }, `${memo.name}-${memo.displayTime}`),
        listSort: (memos) => memos.filter((memo) => memo.state === State.NORMAL).sort(
          (a, b) => viewStore.state.orderByTimeAsc ? dayjs2(a.displayTime).unix() - dayjs2(b.displayTime).unix() : dayjs2(b.displayTime).unix() - dayjs2(a.displayTime).unix()
        ),
        orderBy: viewStore.state.orderByTimeAsc ? "display_time asc" : "display_time desc",
        filter: memoFilter
      }
    )
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Not found" })) }) });
});
export {
  UserProfile as default
};
