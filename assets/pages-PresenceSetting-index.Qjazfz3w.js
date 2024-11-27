import{d as e,r as a,o as l,c as s,w as t,E as n,F as o,a as u,u as c,b as r,t as i,G as p,B as d,g as f,H as m,P as v,s as _,q as C,z as k,v as x,J as g,K as h,L as b,M as y,I as w,N as B,O as F,k as O}from"./index-USJ8ZV9j.js";import{N as U}from"./index.C1k3bsgS.js";import{M as j}from"./index.BfIFvBkH.js";import{U as A}from"./index.DkTe9KrU.js";import{t as D}from"./locales.BEWoqkcc.js";import{_ as I}from"./_plugin-vue_export-helper.BCo6x5W8.js";const M=I(e({__name:"index",props:{height:{},maskClosable:{type:Boolean},title:{}},emits:["confirm","cancel"],setup(e,{expose:v,emit:_}){const C=_,k=e,x=a(!1),g=a(null),h=()=>{B(!1,(()=>{x.value=!1}))},b=()=>{k.maskClosable&&h()},y=()=>{h(),C("cancel")},w=()=>{h(),C("confirm")},B=(e,a)=>{const l=uni.createAnimation({duration:300,timingFunction:"ease"});e?l.opacity(1).step():l.opacity(0).step(),g.value=l.export(),a&&setTimeout(a,300)},F=(e,a)=>{const l=uni.createAnimation({duration:300,timingFunction:"ease"});e?l.opacity(0).step():l.opacity(1).step(),g.value=l.export()},O=g;return v({openModal:()=>{x.value=!0,B(!0)},closeModal:h}),(e,a)=>{const v=f;return l(),s(v,{class:d(["modal-container",{"modal-container-hide ":!x.value}])},{default:t((()=>[n(u(v,{class:"mask",onClick:b,animation:F},null,512),[[o,x.value]]),u(v,{class:d(["modal"])},{default:t((()=>[u(v,{class:"modal-content",animation:c(O)},{default:t((()=>[u(v,{class:"title"},{default:t((()=>[r(i(k.title),1)])),_:1}),u(v,{class:"content"},{default:t((()=>[p(e.$slots,"default",{},void 0,!0)])),_:3}),u(v,{class:"footer"},{default:t((()=>[u(v,{class:"cancel",onClick:y},{default:t((()=>[r(i(c(m)("modalCancel")),1)])),_:1}),u(v,{class:"confirm",onClick:w},{default:t((()=>[r(i(c(m)("modalConfirm")),1)])),_:1})])),_:1})])),_:3},8,["animation"])])),_:3})])),_:3},8,["class"])}}}),[["__scopeId","data-v-ada07a98"]]),S=I(e({__name:"index",setup(e){const n=a(""),o=a(D("presenceCustom")),p=a(!1),d=a(null),m=a(""),I={Online:"presenceOnline",Offline:"presenceOffline",Away:"presenceAway",Busy:"presenceBusy","Do Not Disturb":"presenceNoDisturb",Custom:"presenceCustom"},S=v.map((e=>({title:D(I[e]||"presenceOffline"),value:e}))),E=_((()=>{n.value=C.appUserStore.getSelfUserInfo().presenceExt})),N=k((()=>v.includes(n.value)?n.value:(m.value=o.value=C.appUserStore.getSelfUserInfo().presenceExt||"","Custom"))),P=()=>{uni.navigateBack()},T=e=>{n.value=e.detail.value},V=()=>{d.value.openModal(),p.value=!0},L=()=>{o.value=m.value,p.value=!1},q=()=>{p.value=!1},z=()=>{C.appUserStore.publishPresence({presenceExt:"Custom"===N.value?o.value:N.value}).finally((()=>{P()}))};return x((()=>{E()})),(e,a)=>{const n=f,v=F,_=O,C=y,k=w;return l(),s(n,{class:"presence-wrap"},{default:t((()=>[u(U,{onOnLeftTap:P},{left:t((()=>[u(n,{class:"title",textContent:i(c(D)("presenceTitle"))},null,8,["textContent"])])),_:1}),u(n,{class:"menu-wrap"},{default:t((()=>[u(C,{class:"radio-group",onChange:T},{default:t((()=>[(l(!0),g(b,null,h(c(S),(e=>(l(),s(_,{key:e.value,class:"label"},{default:t((()=>[u(v,{class:"presence-radio",value:e.value,checked:N.value===e.value,backgroundColor:"#f9fafa",borderColor:"#ACB4B9",activeBackgroundColor:"#009DFF",activeBorderColor:"#009DFF",iconColor:"#fff"},null,8,["value","checked"]),u(j,{class:"presence-menu",title:"Custom"!==e.value?e.title:o.value,showArrow:!1},B({_:2},["Custom"===e.value?{name:"right",fn:t((()=>[u(n,{class:"edit-btn",onClick:V})])),key:"0"}:void 0]),1032,["title"])])),_:2},1024)))),128))])),_:1})])),_:1}),u(M,{ref_key:"modalRef",ref:d,title:c(D)("presenceCustom"),onConfirm:L,onCancel:q},{default:t((()=>[u(n,{class:"content"},{default:t((()=>[u(n,{class:"custom-wrap"},{default:t((()=>[u(k,{class:"input",placeholder:c(D)("presencePlaceholder"),focus:p.value,maxlength:20,modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=e=>m.value=e)},null,8,["placeholder","focus","modelValue"]),u(n,{class:"count"},{default:t((()=>[r(i(m.value.length)+" / 20",1)])),_:1})])),_:1})])),_:1})])),_:1},8,["title"]),u(n,{class:"presence-btn-wrap"},{default:t((()=>[u(A,{class:"presence-btn",onClick:z},{default:t((()=>[r(i(c(D)("presenceConfirm")),1)])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-b62c31b9"]]);export{S as default};