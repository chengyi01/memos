import { o as observer, u as useTranslate, k as useResponsiveWidth, b as useLoading, q as attachmentServiceClient, r as memoStore, j as jsxRuntimeExports, l as MobileHeader, s as Paperclip, t as Search, I as Input, E as Empty, x as instance, A as AttachmentIcon, y as Separator, T as TooltipProvider, z as Tooltip, C as TooltipTrigger, B as Button, D as Trash, F as TooltipContent } from "./index.js";
import { d as dayjs2 } from "./mermaid-vendor.js";
import { r as reactExports } from "./leaflet-vendor.js";
import { b as includes } from "./utils-vendor.js";
import "./katex-vendor.js";
function groupAttachmentsByDate(attachments) {
  const grouped = /* @__PURE__ */ new Map();
  attachments.sort((a, b) => dayjs2(b.createTime).unix() - dayjs2(a.createTime).unix()).forEach((item) => {
    const monthStr = dayjs2(item.createTime).format("YYYY-MM");
    if (!grouped.has(monthStr)) {
      grouped.set(monthStr, []);
    }
    grouped.get(monthStr)?.push(item);
  });
  return grouped;
}
const Attachments = observer(() => {
  const t = useTranslate();
  const { md } = useResponsiveWidth();
  const loadingState = useLoading();
  const [state, setState] = reactExports.useState({
    searchQuery: ""
  });
  const [attachments, setAttachments] = reactExports.useState([]);
  const filteredAttachments = attachments.filter((attachment) => includes(attachment.filename, state.searchQuery));
  const groupedAttachments = groupAttachmentsByDate(filteredAttachments.filter((attachment) => attachment.memo));
  const unusedAttachments = filteredAttachments.filter((attachment) => !attachment.memo);
  reactExports.useEffect(() => {
    attachmentServiceClient.listAttachments({}).then(({ attachments: attachments2 }) => {
      setAttachments(attachments2);
      loadingState.setFinish();
      Promise.all(attachments2.map((attachment) => attachment.memo ? memoStore.getOrFetchMemoByName(attachment.memo) : null));
    });
  }, []);
  const handleDeleteUnusedAttachments = async () => {
    const confirmed = window.confirm("Are you sure to delete all unused attachments? This action cannot be undone.");
    if (confirmed) {
      for (const attachment of unusedAttachments) {
        await attachmentServiceClient.deleteAttachment({ name: attachment.name });
      }
      setAttachments(attachments.filter((attachment) => attachment.memo));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "@container w-full max-w-5xl min-h-full flex flex-col justify-start items-center sm:pt-3 md:pt-6 pb-8", children: [
    !md && /* @__PURE__ */ jsxRuntimeExports.jsx(MobileHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full border border-border flex flex-col justify-start items-start px-4 py-3 rounded-xl bg-background text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full flex flex-row justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "py-1 flex flex-row justify-start items-center select-none opacity-80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "w-6 h-auto mr-1 opacity-80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: t("common.attachments") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-32", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "pl-9",
              placeholder: t("common.search"),
              value: state.searchQuery,
              onChange: (e) => setState({ ...state, searchQuery: e.target.value })
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-col justify-start items-start mt-4 mb-6", children: loadingState.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-32 flex flex-col justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-center text-base my-6 mt-8", children: t("resource.fetching-data") }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: filteredAttachments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mt-8 mb-8 flex flex-col justify-center items-center italic", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: t("message.no-data") })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-auto px-2 flex flex-col justify-start items-start gap-y-8", children: [
        Array.from(groupedAttachments.entries()).map(([monthStr, attachments2]) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-row justify-start items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 sm:w-24 pt-4 sm:pl-4 flex flex-col justify-start items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm opacity-60", children: dayjs2(monthStr).year() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-xl", children: dayjs2(monthStr).toDate().toLocaleString(instance.language, { month: "short" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-[calc(100%-4rem)] sm:max-w-[calc(100%-6rem)] flex flex-row justify-start items-start gap-4 flex-wrap", children: attachments2.map((attachment) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-24 sm:w-32 h-auto flex flex-col justify-start items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 flex justify-center items-center sm:w-32 sm:h-32 border border-border overflow-clip rounded-xl cursor-pointer hover:shadow hover:opacity-80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AttachmentIcon, { attachment, strokeWidth: 0.5 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-full flex flex-row justify-between items-center mt-1 px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs shrink text-muted-foreground truncate", children: attachment.filename }) })
              ] }, attachment.name);
            }) })
          ] }, monthStr);
        }),
        unusedAttachments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-row justify-start items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 sm:w-24 sm:pl-4 flex flex-col justify-start items-start" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-[calc(100%-4rem)] sm:max-w-[calc(100%-6rem)] flex flex-row justify-start items-start gap-4 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-row justify-start items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("resource.unused-resources") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground opacity-80", children: [
                  "(",
                  unusedAttachments.length,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: handleDeleteUnusedAttachments, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash, { className: "w-4 h-auto opacity-60" }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Delete all" }) })
                ] }) })
              ] }),
              unusedAttachments.map((attachment) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-24 sm:w-32 h-auto flex flex-col justify-start items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 flex justify-center items-center sm:w-32 sm:h-32 border border-border overflow-clip rounded-xl cursor-pointer hover:shadow hover:opacity-80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AttachmentIcon, { attachment, strokeWidth: 0.5 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-full flex flex-row justify-between items-center mt-1 px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs shrink text-muted-foreground truncate", children: attachment.filename }) })
                ] }, attachment.name);
              })
            ] })
          ] })
        ] })
      ] }) }) })
    ] }) })
  ] });
});
export {
  Attachments as default
};
