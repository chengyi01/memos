import { p as createLucideIcon, u as useTranslate, j as jsxRuntimeExports, a4 as Select, a5 as SelectTrigger, a6 as SelectValue, a7 as SelectContent, a8 as SelectItem, a9 as locales } from "./index.js";
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$3);
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
];
const Moon = createLucideIcon("moon", __iconNode$2);
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
];
const Smile = createLucideIcon("smile", __iconNode$1);
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode);
const appearanceList = ["system", "light", "dark"];
const AppearanceSelect = (props) => {
  const { onChange, value } = props;
  const t = useTranslate();
  const getPrefixIcon = (appearance) => {
    const className = "w-4 h-auto";
    if (appearance === "light") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className });
    } else if (appearance === "dark") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className });
    } else {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Smile, { className });
    }
  };
  const handleSelectChange = async (appearance) => {
    onChange(appearance);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value, onValueChange: handleSelectChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select appearance" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: appearanceList.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: item, className: "whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      getPrefixIcon(item),
      t(`setting.appearance-option.${item}`)
    ] }) }, item)) })
  ] });
};
const LocaleSelect = (props) => {
  const { onChange, value } = props;
  const handleSelectChange = async (locale) => {
    onChange(locale);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value, onValueChange: handleSelectChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select language" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: locales.map((locale) => {
      try {
        const languageName = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
        if (languageName) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: locale, children: languageName.charAt(0).toUpperCase() + languageName.slice(1) }, locale);
        }
      } catch {
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: locale, children: locale }, locale);
    }) })
  ] });
};
export {
  AppearanceSelect as A,
  LocaleSelect as L
};
