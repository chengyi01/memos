import { o as observer, w as workspaceStore, j as jsxRuntimeExports } from "./index.js";
import { A as AuthFooter } from "./AuthFooter.js";
import { P as PasswordSignInForm } from "./PasswordSignInForm.js";
import "./leaflet-vendor.js";
import "./utils-vendor.js";
import "./mermaid-vendor.js";
import "./katex-vendor.js";
import "./ThemeSelect.js";
const AdminSignIn = observer(() => {
  const workspaceGeneralSetting = workspaceStore.state.generalSetting;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4 sm:py-8 w-80 max-w-full min-h-svh mx-auto flex flex-col justify-start items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full py-4 grow flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-row justify-center items-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "h-14 w-auto rounded-full shadow", src: workspaceGeneralSetting.customProfile?.logoUrl || "/logo.webp", alt: "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ml-2 text-5xl text-foreground opacity-80", children: workspaceGeneralSetting.customProfile?.title || "Memos" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-xl font-medium text-muted-foreground", children: "Sign in with admin accounts" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordSignInForm, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AuthFooter, {})
  ] });
});
export {
  AdminSignIn as default
};
