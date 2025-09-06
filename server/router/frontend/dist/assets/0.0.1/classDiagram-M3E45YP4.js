import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-SZ463SBG.js";
import { _ as __name } from "./mermaid-vendor.js";
import "./chunk-E2GYISFI.js";
import "./chunk-BFAMUDN2.js";
import "./chunk-SKB7J2MH.js";
import "./utils-vendor.js";
var diagram = {
  parser: classDiagram_default,
  get db() {
    return new ClassDB();
  },
  renderer: classRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
