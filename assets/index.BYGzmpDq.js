import{d as e,r as a,Q as l,a as s,c as t,w as o,b as i,W as c,$ as d,a0 as n,a1 as u,j as r,p as f,ao as v,e as h,t as k,X as _,aJ as m,l as x,m as p}from"./index-BkrUuuud.js";import{_ as b}from"./_plugin-vue_export-helper.BCo6x5W8.js";const C=b(e({__name:"index",props:{options:{},withCheckbox:{type:Boolean},checkedList:{}},emits:["checkboxChange"],setup(e,{emit:b}){let C="";const y=b,g=e,w=a(""),j=l((()=>{const e={};for(const s of g.options){const a=m(s.name)||"";e[a]||(e[a]=[]),e[a].push(s)}const a=Object.keys(e).sort((([e],[a])=>e.charCodeAt(0)-a.charCodeAt(0))).reduce(((a,l)=>(a[l]=e[l],a)),{});let l=a["#"];return delete a["#"],l&&(a["#"]=l),a})),B=l((()=>Object.keys(j.value))),F=e=>{const a=e.detail.value;y("checkboxChange",a)},I=e=>"#"===e?"hash":e;return(e,a)=>{const l=r,m=x,b=p,y=f,$=v;return s(),t(l,{class:"index-list"},{default:o((()=>[i($,{style:{height:"100%"},class:"index-scroll-list","scroll-y":"","scroll-into-view":w.value},{default:o((()=>[c(e.$slots,"header",{},void 0,!0),g.withCheckbox?(s(),t(y,{key:0,onChange:F},{default:o((()=>[(s(!0),d(u,null,n(B.value,(a=>(s(),t(l,{id:I(a),class:"initial",key:a},{default:o((()=>[i(l,{class:"letter"},{default:o((()=>[h(k(a),1)])),_:2},1024),(s(!0),d(u,null,n(j.value[a],(a=>(s(),t(l,{class:"index-item-wrap",key:a.id},{default:o((()=>[i(b,{class:"label"},{default:o((()=>[i(m,{class:"checkbox",backgroundColor:"#f9fafa",borderColor:"#ACB4B9",activeBackgroundColor:"#009DFF",activeBorderColor:"#009DFF",style:{transform:"scale(0.8)"},iconColor:"#fff",value:a.id,checked:g.checkedList.includes(a.id)},null,8,["value","checked"]),i(l,{class:"index-item"},{default:o((()=>[c(e.$slots,"indexedItem",{item:a},void 0,!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["id"])))),128))])),_:3})):(s(),t(l,{key:1},{default:o((()=>[(s(!0),d(u,null,n(B.value,(a=>(s(),t(l,{id:I(a),class:"initial",key:a},{default:o((()=>[i(l,{class:"letter"},{default:o((()=>[h(k(a),1)])),_:2},1024),i(l,null,{default:o((()=>[(s(!0),d(u,null,n(j.value[a],(a=>(s(),t(l,{class:"index-item-wrap",key:a.id},{default:o((()=>[i(l,{class:"index-item"},{default:o((()=>[c(e.$slots,"indexedItem",{item:a},void 0,!0)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["id"])))),128))])),_:3}))])),_:3},8,["scroll-into-view"]),i(l,{class:"letter-box"},{default:o((()=>[(s(!0),d(u,null,n(Object.keys(j.value),(e=>(s(),t(l,{onClick:a=>{return l=e,w.value=I(l),clearTimeout(C),void(C=setTimeout((()=>{w.value=""}),600));var l},class:_(["letter-box-item",{active:w.value===I(e)}]),key:e},{default:o((()=>[h(k(e),1)])),_:2},1032,["onClick","class"])))),128))])),_:1})])),_:3})}}}),[["__scopeId","data-v-fbbd6305"]]);export{C as I};
