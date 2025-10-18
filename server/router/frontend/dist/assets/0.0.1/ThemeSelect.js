import{p as t,j as e,a4 as d,a5 as p,a6 as u,a7 as x,a8 as m,a9 as o,w as i}from"./index.js";/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],k=t("globe",y);/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],f=t("moon",j);/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],v=t("palette",g);/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],w=t("sun",N);/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]],S=t("wallpaper",C),_=n=>{const{onChange:s,value:r}=n,h=async a=>{s(a)};return e.jsxs(d,{value:r,onValueChange:h,children:[e.jsx(p,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(k,{className:"w-4 h-auto"}),e.jsx(u,{placeholder:"Select language"})]})}),e.jsx(x,{children:m.map(a=>{try{const l=new Intl.DisplayNames([a],{type:"language"}).of(a);if(l)return e.jsx(o,{value:a,children:l.charAt(0).toUpperCase()+l.slice(1)},a)}catch{}return e.jsx(o,{value:a,children:a},a)})})]})},b=({value:n,onValueChange:s,className:r}={})=>{const h=n||i.state.theme||"default",a=[{value:"default",icon:e.jsx(w,{className:"w-4 h-4"}),label:"Default Light"},{value:"default-dark",icon:e.jsx(f,{className:"w-4 h-4"}),label:"Default Dark"},{value:"paper",icon:e.jsx(v,{className:"w-4 h-4"}),label:"Paper"},{value:"whitewall",icon:e.jsx(S,{className:"w-4 h-4"}),label:"Whitewall"}],l=c=>{s?s(c):i.setTheme(c)};return e.jsxs(d,{value:h,onValueChange:l,children:[e.jsx(p,{className:r,children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(u,{placeholder:"Select theme"})})}),e.jsx(x,{children:a.map(c=>e.jsx(o,{value:c.value,children:e.jsxs("div",{className:"flex items-center gap-2",children:[c.icon,e.jsx("span",{children:c.label})]})},c.value))})]})};export{_ as L,b as T};
