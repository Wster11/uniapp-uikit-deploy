import{d as e,r as t,v as a,s,o as n,a as o,c as l,w as i,b as r,u as c,h as u,x as d,G as p,e as m,t as v,g as x,V as _,H as f}from"./index-DGz4Q2Jr.js";import{S as h}from"./index.DZ0PFGO7.js";import{M as C}from"./index.B2fWoR3N.js";import{U as g}from"./index.CNzEGSBw.js";import{I}from"./index.BT3nU5Sv.js";import{A as k}from"./index.BJm9MCHf.js";import{N as w}from"./index.C5mzyVb8.js";import{_ as U}from"./_plugin-vue_export-helper.BCo6x5W8.js";const j=U(e({__name:"index",setup(e){const p=t({}),m=a((()=>{p.value=s.appUserStore.getSelfUserInfo()})),v=()=>{uni.navigateTo({url:"/ChatUIKit/modules/ContactAdd/index"})};return n((()=>{m()})),(e,t)=>{const a=u;return o(),l(a,null,{default:i((()=>[r(w,{showBackArrow:!1},{left:i((()=>[r(k,{size:32,src:p.value.avatar,withPresence:!0,placeholder:c(d),presenceExt:p.value.presenceExt,isOnline:p.value.isOnline},null,8,["src","placeholder","presenceExt","isOnline"])])),center:i((()=>[r(a,{class:"title"})])),right:i((()=>[r(a,{class:"btn-wrap"},{default:i((()=>[r(a,{class:"action-btn",onClick:v})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-133d0cd5"]]),S=U(e({__name:"index",setup(e){const d=t([]),k=t(0),w=t(0),U=a((()=>{w.value=s.contactStore.contactsNoticeInfo.unReadCount})),S=a((()=>{d.value=s.contactStore.contacts.map((e=>({...e,...s.appUserStore.getUserInfoFromStore(e.userId),id:e.userId})))})),b=a((()=>{k.value=s.groupStore.joinedGroupList.length})),K=()=>{uni.navigateTo({url:"/ChatUIKit/modules/GroupList/index"})},L=()=>{uni.navigateTo({url:"/ChatUIKit/modules/ContactSearchList/index"})},T=()=>{uni.navigateTo({url:"/ChatUIKit/modules/ContactRequestList/index"})};return n((()=>{S(),U(),b()})),(e,t)=>{const a=u;return o(),l(a,{class:"contact-list-wrap"},{default:i((()=>[r(a,{class:"header-wrap"},{default:i((()=>[r(j),r(h,{onClick:L,class:"contact-search"})])),_:1}),r(a,{class:p(c(_)?"wx-block":"block")},null,8,["class"]),r(I,{class:"contact-index-list",options:d.value},{header:i((()=>[r(a,{class:"contact-menu-wrap"},{default:i((()=>[r(C,{onClick:T,class:"contact-menu",title:c(f)("newRequest")},{right:i((()=>[w.value?(o(),l(a,{key:0,class:"request-count"},{default:i((()=>[m(v(w.value>99?"99+":w.value),1)])),_:1})):x("",!0)])),_:1},8,["title"]),r(C,{onClick:K,class:"contact-menu",title:c(f)("groupList")},{right:i((()=>[k.value?(o(),l(a,{key:0,class:"count"},{default:i((()=>[m(v(k.value),1)])),_:1})):x("",!0)])),_:1},8,["title"])])),_:1})])),indexedItem:i((e=>[r(g,{user:e.item,onClick:t=>{return a=e.item.userId,void uni.navigateTo({url:`/ChatUIKit/modules/Chat/index?type=singleChat&id=${a}`});var a}},null,8,["user","onClick"])])),_:1},8,["options"])])),_:1})}}}),[["__scopeId","data-v-97c6d503"]]);export{S as default};