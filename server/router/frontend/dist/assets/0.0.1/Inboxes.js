import { p as createLucideIcon, o as observer, u as useTranslate, a as useNavigateTo, Z as useAsyncEffect, _ as activityServiceClient, $ as activityNamePrefix, r as memoStore, V as userStore, j as jsxRuntimeExports, c as cn, T as TooltipProvider, z as Tooltip, C as TooltipTrigger, F as TooltipContent, a0 as Inbox_Status, L as Loader, a1 as Vt, D as Trash, l as useResponsiveWidth, n as MobileHeader, a2 as Bell, E as Empty, a3 as Inbox_Type } from "./index.js";
import { r as reactExports } from "./leaflet-vendor.js";
import { M as MessageCircle } from "./message-circle.js";
import { s as sortBy } from "./utils-vendor.js";
import "./mermaid-vendor.js";
import "./katex-vendor.js";
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
];
const Inbox = createLucideIcon("inbox", __iconNode);
const MemoCommentMessage = observer(({ inbox }) => {
  const t = useTranslate();
  const navigateTo = useNavigateTo();
  const [relatedMemo, setRelatedMemo] = reactExports.useState(void 0);
  const [sender, setSender] = reactExports.useState(void 0);
  const [initialized, setInitialized] = reactExports.useState(false);
  const [hasError, setHasError] = reactExports.useState(false);
  useAsyncEffect(async () => {
    if (!inbox.activityId) {
      return;
    }
    try {
      const activity = await activityServiceClient.getActivity({
        name: `${activityNamePrefix}${inbox.activityId}`
      });
      if (activity.payload?.memoComment) {
        const memoCommentPayload = activity.payload.memoComment;
        const memo = await memoStore.getOrFetchMemoByName(memoCommentPayload.relatedMemo, {
          skipStore: true
        });
        setRelatedMemo(memo);
        const sender2 = await userStore.getOrFetchUserByName(inbox.sender);
        setSender(sender2);
        setInitialized(true);
      }
    } catch (error) {
      console.error("Failed to fetch activity:", error);
      setHasError(true);
      return;
    }
  }, [inbox.activityId]);
  const handleNavigateToMemo = async () => {
    if (!relatedMemo) {
      return;
    }
    navigateTo(`/${relatedMemo.name}`);
    if (inbox.status === Inbox_Status.UNREAD) {
      handleArchiveMessage(true);
    }
  };
  const handleArchiveMessage = async (silence = false) => {
    await userStore.updateInbox(
      {
        name: inbox.name,
        status: Inbox_Status.ARCHIVED
      },
      ["status"]
    );
    if (!silence) {
      Vt.success(t("message.archived-successfully"));
    }
  };
  const handleDeleteMessage = async () => {
    await userStore.deleteInbox(inbox.name);
    Vt.success(t("message.deleted-successfully"));
  };
  const deleteButton = () => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trash,
      {
        className: "w-4 h-auto cursor-pointer text-muted-foreground hover:text-primary",
        onClick: () => handleDeleteMessage()
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("common.delete") }) })
  ] }) }) }) });
  const archiveButton = () => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Inbox,
      {
        className: "w-4 h-auto cursor-pointer text-muted-foreground hover:text-primary",
        onClick: () => handleArchiveMessage()
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("common.archive") }) })
  ] }) }) }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-row justify-start items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "shrink-0 mt-2 p-2 rounded-full border",
          inbox.status === Inbox_Status.UNREAD ? "border-primary text-primary bg-primary/10" : "border-muted-foreground text-muted-foreground bg-popover"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 sm:w-5 h-auto" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Comment" }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "border w-full p-2 px-3 rounded-lg flex flex-col justify-start items-start gap-1 border-border hover:bg-background",
          inbox.status !== Inbox_Status.UNREAD && "opacity-60"
        ),
        children: initialized ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-row justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: inbox.createTime?.toLocaleString() }),
            inbox.status === Inbox_Status.UNREAD ? archiveButton() : deleteButton()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-base leading-tight cursor-pointer text-muted-foreground hover:underline hover:text-primary",
              onClick: handleNavigateToMemo,
              children: t("inbox.memo-comment", {
                user: sender?.displayName || sender?.username,
                memo: relatedMemo?.name,
                interpolation: { escapeValue: false }
              })
            }
          )
        ] }) : hasError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-row justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: t("inbox.failed-to-load") }),
          deleteButton()
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-row justify-center items-center my-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { className: "animate-spin text-muted-foreground" }) })
      }
    )
  ] });
});
const Inboxes = observer(() => {
  const t = useTranslate();
  const { md } = useResponsiveWidth();
  const inboxes = sortBy(userStore.state.inboxes, (inbox) => {
    if (inbox.status === Inbox_Status.UNREAD) return 0;
    if (inbox.status === Inbox_Status.ARCHIVED) return 1;
    return 2;
  });
  const fetchInboxes = async () => {
    try {
      await userStore.fetchInboxes();
    } catch (error) {
      console.error("Failed to fetch inboxes:", error);
    }
  };
  reactExports.useEffect(() => {
    fetchInboxes();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "@container w-full max-w-5xl min-h-full flex flex-col justify-start items-center sm:pt-3 md:pt-6 pb-8", children: [
    !md && /* @__PURE__ */ jsxRuntimeExports.jsx(MobileHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full border border-border flex flex-col justify-start items-start px-4 py-3 rounded-xl bg-background text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full flex flex-row justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "py-1 flex flex-row justify-start items-center select-none opacity-80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-6 h-auto mr-1 opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: t("common.inbox") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-auto flex flex-col justify-start items-start px-2 pb-4", children: [
        inboxes.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mt-4 mb-8 flex flex-col justify-center items-center italic", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: t("message.no-data") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-start items-start w-full mt-4 gap-4", children: inboxes.map((inbox) => {
          if (inbox.type === Inbox_Type.MEMO_COMMENT) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(MemoCommentMessage, { inbox }, `${inbox.name}-${inbox.status}`);
          }
          return void 0;
        }) })
      ] })
    ] }) })
  ] });
});
export {
  Inboxes as default
};
