import{d as e,r as a,a as l,c as s,w as o,b as t,g as c,e as n,t as u,u as p,h as r,I as d,H as i}from"./index-DxHOntl4.js";import{_ as f}from"./_plugin-vue_export-helper.BCo6x5W8.js";const m=f(e({__name:"index",props:{placeholder:{type:String,default:""},showCancel:{type:Boolean,default:!1}},emits:["input","cancel"],setup(e,{expose:f,emit:m}){const v=e,h=a(""),_=m,x=a(!0),y=e=>{_("input",e.detail.value)},g=()=>{h.value="",_("input","")},k=()=>{_("cancel")},w=()=>{x.value=!1},C=()=>{x.value=!0};return f({setIsFocus(e){x.value=e}}),(e,a)=>{const f=r,m=d;return l(),s(f,{class:"search-input-warp"},{default:o((()=>[t(f,{class:"content"},{default:o((()=>[t(f,{class:"icon"}),t(m,{modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=e=>h.value=e),class:"input",onInput:y,type:"text",focus:x.value,onBlur:w,onFocus:C,"confirm-type":"done",placeholder:v.placeholder},null,8,["modelValue","focus","placeholder"]),h.value.length?(l(),s(f,{key:0,class:"clear-icon",onClick:g})):c("",!0)])),_:1}),v.showCancel?(l(),s(f,{key:0,onClick:k,class:"cancel"},{default:o((()=>[n(u(p(i)("cancel")),1)])),_:1})):c("",!0)])),_:1})}}}),[["__scopeId","data-v-ad2fb5d7"]]);export{m as S};