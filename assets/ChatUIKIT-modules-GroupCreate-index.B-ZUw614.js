import{d as e,r as a,G as s,F as t,Q as l,o as r,a as o,c as n,w as c,b as u,u as d,$ as i,a0 as p,a1 as m,j as f,p as h,Z as v,T as C,V as k,l as x,m as _,t as g,e as I,v as b,aB as S,z as j,y}from"./index-BkrUuuud.js";import{S as U}from"./index.BRQSkVPY.js";import{N as w}from"./index.D1vfVCH7.js";import{U as L}from"./index.CAY8m-Ih.js";import{E as F}from"./index.CxGA3vS3.js";import{I as B}from"./index.BYGzmpDq.js";import{U as T}from"./index.iLgFxnwZ.js";import{S as G}from"./index.bY0V9SQP.js";import{_ as D}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./index.CZ5ye3_-.js";const K=D(e({__name:"searchList",props:{checkedList:{}},emits:["checkboxChange","cancel"],setup(e,{emit:g}){const I=e,b=g,S=a([]),j=a(null),y=a(""),U=s((()=>{S.value=t.contactStore.contacts})),B=e=>{y.value=e},T=e=>{const a=e.detail.value;b("checkboxChange",a)},D=l((()=>y.value?S.value.filter((e=>t.appUserStore.getUserInfoFromStore(e.userId).name.includes(y.value))).map((e=>e.userId)):[])),K=()=>{b("cancel")};return r((()=>{U()})),(e,a)=>{const s=f,t=x,l=_,r=h;return o(),n(s,{class:"search-list-wrap"},{default:c((()=>[u(w,{onOnLeftTap:K},{left:c((()=>[u(s,{class:"input-wrap"},{default:c((()=>[u(G,{ref_key:"searchRef",ref:j,placeholder:d(v)("searchContact"),onInput:B,onCancel:K},null,8,["placeholder"])])),_:1})])),_:1}),D.value.length?(o(),n(s,{key:0,class:"search-content"},{default:c((()=>[u(r,{onChange:T},{default:c((()=>[(o(!0),i(m,null,p(S.value,(e=>C((o(),n(l,{class:"label"},{default:c((()=>[u(t,{class:"checkbox",backgroundColor:"#f9fafa",borderColor:"#ACB4B9",activeBackgroundColor:"#009DFF",activeBorderColor:"#009DFF",style:{transform:"scale(0.8)"},iconColor:"#fff",value:e.userId,checked:I.checkedList.includes(e.userId)},null,8,["value","checked"]),(o(),n(L,{key:e.conversationId,class:"search-item",user:{userId:e.userId}},null,8,["user"]))])),_:2},1536)),[[k,D.value.includes(e.userId)]]))),256))])),_:1})])),_:1})):(o(),n(F,{key:1}))])),_:1})}}}),[["__scopeId","data-v-eabf46c6"]]),N=D(e({__name:"index",setup(e){const l=a([]),i=a(!1),p=a([]);s((()=>{l.value=t.contactStore.contacts.map((e=>({...e,...t.appUserStore.getUserInfoFromStore(e.userId),id:e.userId})))}));const m=e=>{p.value=e},h=()=>{if(!p.value.length)return;let e=p.value.map((e=>t.appUserStore.getUserInfoFromStore(e).name)).join("、");e=t.appUserStore.getSelfUserInfo().name+"、"+e;const a={groupname:e,members:p.value,desc:e,public:!0,allowinvites:!0,inviteNeedConfirm:!1,approval:!1,maxusers:1e3};b({title:"loading",mask:!0}),t.groupStore.createGroup({data:a}).then((e=>{var a;S({url:`/ChatUIKIT/modules/Chat/index?type=groupChat&id=${null==(a=e.data)?void 0:a.groupid}`})})).finally((()=>{j()}))},C=()=>{y({url:"/ChatUIKIT/modules/Conversation/index"})};return r((()=>{})),(e,a)=>{const s=f;return o(),n(s,{class:"group-create-wrap"},{default:c((()=>[i.value?(o(),n(K,{key:1,checkedList:p.value,onCheckboxChange:m,onCancel:a[1]||(a[1]=e=>i.value=!1)},null,8,["checkedList"])):(o(),n(s,{key:0},{default:c((()=>[u(w,{onOnLeftTap:C},{left:c((()=>[u(s,{class:"title",textContent:g(d(v)("createGroup"))},null,8,["textContent"])])),_:1}),u(s,{class:"search-wrap",onClick:a[0]||(a[0]=e=>i.value=!0)},{default:c((()=>[u(U,{placeholder:d(v)("searchContact")},null,8,["placeholder"])])),_:1}),l.value.length?(o(),n(B,{key:0,class:"contact-indexed-list",checkedList:p.value,options:l.value,withCheckbox:!0,onCheckboxChange:m},{indexedItem:c((e=>[u(L,{class:"contact-item",user:e.item},null,8,["user"])])),_:1},8,["checkedList","options"])):(o(),n(F,{key:1})),u(s,{class:"create-btn-wrap"},{default:c((()=>[u(T,{class:"crate-btn",disabled:!p.value.length,onClick:h},{default:c((()=>[I(g(d(v)("createGroupBtn")+"("+p.value.length+")"),1)])),_:1},8,["disabled"])])),_:1})])),_:1}))])),_:1})}}}),[["__scopeId","data-v-d77b3097"]]);export{N as default};
