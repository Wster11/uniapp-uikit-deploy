import{d as t,r as e,v as a,s,o as l,a as r,c as n,w as o,b as u,u as c,x as i,e as d,t as p,H as f,h as _,J as m,K as v,L as x}from"./index-DxHOntl4.js";import{N as I}from"./index.D2BZr03s.js";import{E as g}from"./index.B_jcb1jT.js";import{A as h}from"./index.DPVyQFuP.js";import{_ as C}from"./_plugin-vue_export-helper.BCo6x5W8.js";const j=C(t({__name:"index",props:{user:{},avatar:{}},setup(t){const m=t,v=e({}),x=a((()=>{v.value=s.appUserStore.getUserInfoFromStore(m.user.userId)})),I=()=>{s.contactStore.acceptContactInvite(m.user.userId)};return l((()=>{x()})),(t,e)=>{const a=_;return r(),n(a,{class:"item-wrap"},{default:o((()=>[u(h,{class:"user-avatar",size:40,src:t.avatar||v.value.avatar,placeholder:c(i)},null,8,["src","placeholder"]),u(a,{class:"right"},{default:o((()=>[u(a,{class:"content"},{default:o((()=>[u(a,{class:"user-name ellipsis"},{default:o((()=>[d(p(v.value.name),1)])),_:1}),u(a,{class:"tip ellipsis",textContent:p(c(f)("contactRequestListTip"))},null,8,["textContent"])])),_:1}),u(a,{class:"action",onClick:I},{default:o((()=>[u(a,{class:"btn"},{default:o((()=>[d(p(c(f)("contactRequestAgreeButton")),1)])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-d290fb3a"]]),k=C(t({__name:"index",setup(t){const i=e([]),d=a((()=>{i.value=s.contactStore.contactsNoticeInfo.list.filter((t=>"invited"===t.ext))})),h=()=>{uni.navigateBack()};return l((()=>{d()})),(t,e)=>{const a=_;return r(),n(a,{class:"request-list-wrap"},{default:o((()=>[u(I,{onOnLeftTap:h},{left:o((()=>[u(a,{class:"title",textContent:p(c(f)("contactRequestListTitle"))},null,8,["textContent"])])),_:1}),u(a,{class:"list"},{default:o((()=>[i.value.length?(r(),n(a,{key:0},{default:o((()=>[(r(!0),m(x,null,v(i.value,(t=>(r(),n(j,{key:t.from,user:{userId:t.from}},null,8,["user"])))),128))])),_:1})):(r(),n(g,{key:1}))])),_:1})])),_:1})}}}),[["__scopeId","data-v-f2612e74"]]);export{k as default};