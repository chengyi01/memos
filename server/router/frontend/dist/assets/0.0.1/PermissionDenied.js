import { j as jsxRuntimeExports, l as MobileHeader } from "./index.js";
import "./leaflet-vendor.js";
import "./utils-vendor.js";
import "./mermaid-vendor.js";
import "./katex-vendor.js";
const PermissionDenied = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "@container w-full max-w-5xl min-h-svh flex flex-col justify-start items-center sm:pt-3 md:pt-6 pb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full px-4 grow flex flex-col justify-center items-center sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Permission denied" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[8rem] font-mono text-foreground", children: "403" })
    ] })
  ] });
};
export {
  PermissionDenied as default
};
