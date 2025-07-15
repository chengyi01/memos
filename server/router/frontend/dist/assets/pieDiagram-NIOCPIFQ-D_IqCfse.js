import{p as N}from"./chunk-353BL4L5-BC_dZbax.js";import{_ as i,g as B,s as U,a as Q,b as V,v as Z,t as j,l as C,c as q,G as H,L as J,N as K,O as z,P as X,f as Y,A as ee,Q as te,I as ae}from"./mermaid-vendor-ViS8T4kn.js";import{p as re}from"./treemap-FKARHQ26-DD52AL8B.js";import"./utils-vendor-CcfW2S3W.js";var ie=ae.pie,D={sections:new Map,showData:!1},h=D.sections,w=D.showData,se=structuredClone(ie),ne=i(()=>structuredClone(se),"getConfig"),oe=i(()=>{h=new Map,w=D.showData,ee()},"clear"),le=i(({label:e,value:t})=>{h.has(e)||(h.set(e,t),C.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),ce=i(()=>h,"getSections"),de=i(e=>{w=e},"setShowData"),pe=i(()=>w,"getShowData"),G={getConfig:ne,clear:oe,setDiagramTitle:j,getDiagramTitle:Z,setAccTitle:V,getAccTitle:Q,setAccDescription:U,getAccDescription:B,addSection:le,getSections:ce,setShowData:de,getShowData:pe},ge=i((e,t)=>{N(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),ue={parse:i(async e=>{const t=await re("pie",e);C.debug(t),ge(t,G)},"parse")},fe=i(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),he=fe,me=i(e=>{const t=[...e.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,o)=>o.value-s.value);return te().value(s=>s.value)(t)},"createPieArcs"),ve=i((e,t,F,s)=>{C.debug(`rendering pie chart
`+e);const o=s.db,y=q(),T=H(o.getConfig(),y.pie),$=40,n=18,p=4,c=450,m=c,v=J(t),l=v.append("g");l.attr("transform","translate("+m/2+","+c/2+")");const{themeVariables:a}=y;let[A]=K(a.pieOuterStrokeWidth);A??=2;const _=T.textPosition,g=Math.min(m,c)/2-$,O=z().innerRadius(0).outerRadius(g),P=z().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const b=o.getSections(),S=me(b),W=[a.pie1,a.pie2,a.pie3,a.pie4,a.pie5,a.pie6,a.pie7,a.pie8,a.pie9,a.pie10,a.pie11,a.pie12],d=X(W);l.selectAll("mySlices").data(S).enter().append("path").attr("d",O).attr("fill",r=>d(r.data.label)).attr("class","pieCircle");let E=0;b.forEach(r=>{E+=r}),l.selectAll("mySlices").data(S).enter().append("text").text(r=>(r.data.value/E*100).toFixed(0)+"%").attr("transform",r=>"translate("+P.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),l.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const x=l.selectAll(".legend").data(d.domain()).enter().append("g").attr("class","legend").attr("transform",(r,u)=>{const f=n+p,L=f*d.domain().length/2,M=12*n,R=u*f-L;return"translate("+M+","+R+")"});x.append("rect").attr("width",n).attr("height",n).style("fill",d).style("stroke",d),x.data(S).append("text").attr("x",n+p).attr("y",n-p).text(r=>{const{label:u,value:f}=r.data;return o.getShowData()?`${u} [${f}]`:u});const I=Math.max(...x.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),k=m+$+n+p+I;v.attr("viewBox",`0 0 ${k} ${c}`),Y(v,c,k,T.useMaxWidth)},"draw"),Se={draw:ve},ye={parser:ue,db:G,renderer:Se,styles:he};export{ye as diagram};
