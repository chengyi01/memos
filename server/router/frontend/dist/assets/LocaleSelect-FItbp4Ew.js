import{n as t,u,j as e,a3 as p,a4 as d,a5 as y,a6 as x,a7 as i,a8 as g}from"./index-CUBjNvyk.js";/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],j=t("globe",m);/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],S=t("moon",k);/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],N=t("smile",v);/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],M=t("sun",f),C=["system","light","dark"],w=c=>{const{onChange:l,value:r}=c,o=u(),a=s=>{const h="w-4 h-auto";return s==="light"?e.jsx(M,{className:h}):s==="dark"?e.jsx(S,{className:h}):e.jsx(N,{className:h})},n=async s=>{l(s)};return e.jsxs(p,{value:r,onValueChange:n,children:[e.jsx(d,{children:e.jsx(y,{placeholder:"Select appearance"})}),e.jsx(x,{children:C.map(s=>e.jsx(i,{value:s,className:"whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center gap-2",children:[a(s),o(`setting.appearance-option.${s}`)]})},s))})]})},I=c=>{const{onChange:l,value:r}=c,o=async a=>{l(a)};return e.jsxs(p,{value:r,onValueChange:o,children:[e.jsx(d,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{className:"w-4 h-auto"}),e.jsx(y,{placeholder:"Select language"})]})}),e.jsx(x,{children:g.map(a=>{try{const n=new Intl.DisplayNames([a],{type:"language"}).of(a);if(n)return e.jsx(i,{value:a,children:n.charAt(0).toUpperCase()+n.slice(1)},a)}catch{}return e.jsx(i,{value:a,children:a},a)})})]})};export{w as A,I as L};
