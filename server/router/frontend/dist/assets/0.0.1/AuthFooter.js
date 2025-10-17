import { o as observer, j as jsxRuntimeExports, c as cn, w as workspaceStore } from "./index.js";
import { L as LocaleSelect, T as ThemeSelect } from "./ThemeSelect.js";
const AuthFooter = observer(({ className }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("mt-4 flex flex-row items-center justify-center w-full gap-2", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LocaleSelect, { value: workspaceStore.state.locale, onChange: (locale) => workspaceStore.state.setPartial({ locale }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeSelect, { value: workspaceStore.state.theme, onValueChange: (theme) => workspaceStore.state.setPartial({ theme }) })
  ] });
});
export {
  AuthFooter as A
};
