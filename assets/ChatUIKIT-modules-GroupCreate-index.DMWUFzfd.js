import{d as e,r as a,v as s,s as t,z as l,o as r,a as o,c as n,w as c,b as u,u as d,J as i,K as p,L as m,h,m as f,H as v,D as k,E as C,k as g,l as _,t as x,e as I}from"./index-B8CRE7TD.js";import{S as b}from"./index.wM2NigoD.js";import{N as S}from"./index.BT2yLek7.js";import{U as w}from"./index.B6ScRxaa.js";import{E as y}from"./index.Dx-9GcQl.js";import{I as L}from"./index.CYNlYQ88.js";import{U}from"./index.BU5hdNZ2.js";import{S as j}from"./index.BN_WYRCS.js";import{_ as F}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./index.CDIGqLY9.js";const T=F(e({__name:"searchList",props:{checkedList:{}},emits:["checkboxChange","cancel"],setup(e,{emit:x}){const I=e,b=x,L=a([]),U=a(null),F=a(""),T=s((()=>{L.value=t.contactStore.contacts})),B=e=>{F.value=e},D=e=>{const a=e.detail.value;b("checkboxChange",a)},G=l((()=>F.value?L.value.filter((e=>t.appUserStore.getUserInfoFromStore(e.userId).name.includes(F.value))).map((e=>e.userId)):[])),K=()=>{b("cancel")};return r((()=>{T()})),(e,a)=>{const s=h,t=g,l=_,r=f;return o(),n(s,{class:"search-list-wrap"},{default:c((()=>[u(S,{onOnLeftTap:K},{left:c((()=>[u(s,{class:"input-wrap"},{default:c((()=>[u(j,{ref_key:"searchRef",ref:U,placeholder:d(v)("searchContact"),onInput:B,onCancel:K},null,8,["placeholder"])])),_:1})])),_:1}),G.value.length?(o(),n(s,{key:0,class:"search-content"},{default:c((()=>[u(r,{onChange:D},{default:c((()=>[(o(!0),i(m,null,p(L.value,(e=>k((o(),n(l,{class:"label"},{default:c((()=>[u(t,{class:"checkbox",backgroundColor:"#f9fafa",borderColor:"#ACB4B9",activeBackgroundColor:"#009DFF",activeBorderColor:"#009DFF",style:{transform:"scale(0.8)"},iconColor:"#fff",value:e.userId,checked:I.checkedList.includes(e.userId)},null,8,["value","checked"]),(o(),n(w,{key:e.conversationId,class:"search-item",user:{userId:e.userId}},null,8,["user"]))])),_:2},1536)),[[C,G.value.includes(e.userId)]]))),256))])),_:1})])),_:1})):(o(),n(y,{key:1}))])),_:1})}}}),[["__scopeId","data-v-103835dc"]]),B=F(e({__name:"index",setup(e){const l=a([]),i=a(!1),p=a([]);s((()=>{l.value=t.contactStore.contacts.map((e=>({...e,...t.appUserStore.getUserInfoFromStore(e.userId),id:e.userId})))}));const m=e=>{p.value=e},f=()=>{if(!p.value.length)return;let e=p.value.map((e=>t.appUserStore.getUserInfoFromStore(e).name)).join("、");e=t.appUserStore.getSelfUserInfo().name+"、"+e;const a={groupname:e,members:p.value,desc:e,public:!0,allowinvites:!0,inviteNeedConfirm:!1,approval:!1,maxusers:1e3};uni.showLoading({title:"loading",mask:!0}),t.groupStore.createGroup({data:a}).then((e=>{var a;uni.redirectTo({url:`/ChatUIKIT/modules/Chat/index?type=groupChat&id=${null==(a=e.data)?void 0:a.groupid}`})})).finally((()=>{uni.hideLoading()}))},k=()=>{uni.switchTab({url:"/ChatUIKIT/modules/Conversation/index"})};return r((()=>{})),(e,a)=>{const s=h;return o(),n(s,{class:"group-create-wrap"},{default:c((()=>[i.value?(o(),n(T,{key:1,checkedList:p.value,onCheckboxChange:m,onCancel:a[1]||(a[1]=e=>i.value=!1)},null,8,["checkedList"])):(o(),n(s,{key:0,class:"group-create-content"},{default:c((()=>[u(S,{class:"nav-bar",onOnLeftTap:k},{left:c((()=>[u(s,{class:"title",textContent:x(d(v)("createGroup"))},null,8,["textContent"])])),_:1}),u(s,{class:"search-wrap",onClick:a[0]||(a[0]=e=>i.value=!0)},{default:c((()=>[u(b,{placeholder:d(v)("searchContact")},null,8,["placeholder"])])),_:1}),l.value.length?(o(),n(L,{key:0,class:"contact-indexed-list",checkedList:p.value,options:l.value,withCheckbox:!0,onCheckboxChange:m},{indexedItem:c((e=>[u(w,{class:"contact-item",user:e.item},null,8,["user"])])),_:1},8,["checkedList","options"])):(o(),n(s,{key:1,class:"empty-wrap"},{default:c((()=>[u(y)])),_:1})),u(s,{class:"create-btn-wrap"},{default:c((()=>[u(U,{class:"crate-btn",disabled:!p.value.length,onClick:f},{default:c((()=>[I(x(d(v)("createGroupBtn")+"("+p.value.length+")"),1)])),_:1},8,["disabled"])])),_:1})])),_:1}))])),_:1})}}}),[["__scopeId","data-v-826ac421"]]);export{B as default};