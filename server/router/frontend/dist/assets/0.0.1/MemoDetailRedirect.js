import { Q as useParams, j as jsxRuntimeExports, Y as Navigate } from "./index.js";
import "./leaflet-vendor.js";
import "./utils-vendor.js";
import "./mermaid-vendor.js";
import "./katex-vendor.js";
const MemoDetailRedirect = () => {
  const { uid } = useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: `/memos/${uid}`, replace: true });
};
export {
  MemoDetailRedirect as default
};
