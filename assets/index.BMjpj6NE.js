import{d as e,r as l,z as a,a as s,c as t,w as o,b as i,F as c,J as d,K as n,L as u,h as r,m as f,a3 as v,e as h,t as k,G as _,al as m,k as x,l as b}from"./index-DxHOntl4.js";import{_ as p}from"./_plugin-vue_export-helper.BCo6x5W8.js";const C=p(e({__name:"index",props:{options:{},withCheckbox:{type:Boolean},checkedList:{}},emits:["checkboxChange"],setup(e,{emit:p}){let C="";const y=p,g=e,w=l(""),j=a((()=>{const e={};for(const s of g.options){const l=m(s.name)||"";e[l]||(e[l]=[]),e[l].push(s)}const l=Object.keys(e).sort((([e],[l])=>e.charCodeAt(0)-l.charCodeAt(0))).reduce(((l,a)=>(l[a]=e[a],l)),{});let a=l["#"];return delete l["#"],a&&(l["#"]=a),l})),B=a((()=>Object.keys(j.value))),F=e=>{const l=e.detail.value;y("checkboxChange",l)},I=e=>"#"===e?"hash":e;return(e,l)=>{const a=r,m=x,p=b,y=f,A=v;return s(),t(a,{class:"index-list"},{default:o((()=>[i(A,{style:{height:"100%"},class:"index-scroll-list","scroll-y":"","scroll-into-view":w.value},{default:o((()=>[c(e.$slots,"header",{},void 0,!0),g.withCheckbox?(s(),t(y,{key:0,onChange:F},{default:o((()=>[(s(!0),d(u,null,n(B.value,(l=>(s(),t(a,{id:I(l),class:"initial",key:l},{default:o((()=>[i(a,{class:"letter"},{default:o((()=>[h(k(l),1)])),_:2},1024),(s(!0),d(u,null,n(j.value[l],(l=>(s(),t(a,{class:"index-item-wrap",key:l.id},{default:o((()=>[i(p,{class:"label"},{default:o((()=>[i(m,{class:"checkbox",backgroundColor:"#f9fafa",borderColor:"#ACB4B9",activeBackgroundColor:"#009DFF",activeBorderColor:"#009DFF",style:{transform:"scale(0.8)"},iconColor:"#fff",value:l.id,checked:g.checkedList.includes(l.id)},null,8,["value","checked"]),i(a,{class:"index-item"},{default:o((()=>[c(e.$slots,"indexedItem",{item:l},void 0,!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["id"])))),128))])),_:3})):(s(),t(a,{key:1},{default:o((()=>[(s(!0),d(u,null,n(B.value,(l=>(s(),t(a,{id:I(l),class:"initial",key:l},{default:o((()=>[i(a,{class:"letter"},{default:o((()=>[h(k(l),1)])),_:2},1024),i(a,null,{default:o((()=>[(s(!0),d(u,null,n(j.value[l],(l=>(s(),t(a,{class:"index-item-wrap",key:l.id},{default:o((()=>[i(a,{class:"index-item"},{default:o((()=>[c(e.$slots,"indexedItem",{item:l},void 0,!0)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["id"])))),128))])),_:3}))])),_:3},8,["scroll-into-view"]),i(a,{class:"letter-box"},{default:o((()=>[(s(!0),d(u,null,n(Object.keys(j.value),(e=>(s(),t(a,{onClick:l=>{return a=e,w.value=I(a),clearTimeout(C),void(C=setTimeout((()=>{w.value=""}),600));var a},class:_(["letter-box-item",{active:w.value===I(e)}]),key:e},{default:o((()=>[h(k(e),1)])),_:2},1032,["onClick","class"])))),128))])),_:1})])),_:3})}}}),[["__scopeId","data-v-fbbd6305"]]);export{C as I};
