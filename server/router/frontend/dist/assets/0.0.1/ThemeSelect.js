import { p as createLucideIcon, j as jsxRuntimeExports, a4 as Select, a5 as SelectTrigger, a6 as SelectValue, a7 as SelectContent, a8 as locales, a9 as SelectItem, w as workspaceStore } from "./index.js";
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$4);
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
];
const Moon = createLucideIcon("moon", __iconNode$3);
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
];
const Palette = createLucideIcon("palette", __iconNode$2);
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
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
const Sun = createLucideIcon("sun", __iconNode$1);
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "8", cy: "9", r: "2", key: "gjzl9d" }],
  [
    "path",
    {
      d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",
      key: "69xh40"
    }
  ],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }]
];
const Wallpaper = createLucideIcon("wallpaper", __iconNode);
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
const ThemeSelect = ({ value, onValueChange, className } = {}) => {
  const currentTheme = value || workspaceStore.state.theme || "default";
  const themeOptions = [
    { value: "default", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-4 h-4" }), label: "Default Light" },
    { value: "default-dark", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4" }), label: "Default Dark" },
    { value: "paper", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "w-4 h-4" }), label: "Paper" },
    { value: "whitewall", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallpaper, { className: "w-4 h-4" }), label: "Whitewall" }
  ];
  const handleThemeChange = (newTheme) => {
    if (onValueChange) {
      onValueChange(newTheme);
    } else {
      workspaceStore.setTheme(newTheme);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: currentTheme, onValueChange: handleThemeChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select theme" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: themeOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: option.value, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      option.icon,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: option.label })
    ] }) }, option.value)) })
  ] });
};
export {
  LocaleSelect as L,
  ThemeSelect as T
};
