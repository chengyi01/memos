import { o as observer, j as jsxRuntimeExports, c as cn, w as workspaceStore } from "./index.js";
import { L as LocaleSelect, A as AppearanceSelect } from "./LocaleSelect.js";
const AuthFooter = observer(({ className }) => {
  const handleLocaleSelectChange = (locale) => {
    workspaceStore.state.setPartial({ locale });
  };
  const handleAppearanceSelectChange = (appearance) => {
    workspaceStore.state.setPartial({ appearance });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("mt-4 flex flex-row items-center justify-center w-full gap-2", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LocaleSelect, { value: workspaceStore.state.locale, onChange: handleLocaleSelectChange }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppearanceSelect, { value: workspaceStore.state.appearance, onChange: handleAppearanceSelectChange })
  ] });
});
export {
  AuthFooter as A
};
