import{d as e,s as a,r as s,v as t,o as l,a as n,c as i,w as o,b as c,u as r,e as u,t as m,C as p,h as f,x as d}from"./index-D6tRcowg.js";import{A as _}from"./index.CaS2hY3a.js";import{M as g}from"./index.DRJcoHx0.js";import{t as v}from"./locales.BEWoqkcc.js";import{_ as x}from"./_plugin-vue_export-helper.BCo6x5W8.js";const C=x(e({__name:"index",setup(e){const x=a.getChatConn().user,C=s({}),S=t((()=>{C.value=a.appUserStore.getSelfUserInfo()})),h=()=>{uni.setClipboardData({data:x})},k=()=>{a.chatStore.close(),uni.removeStorageSync(p),uni.reLaunch({url:"/pages/Login/index"})},b=()=>{uni.navigateTo({url:"/pages/Profile/index"})},j=()=>{uni.navigateTo({url:"/pages/About/index"})},w=()=>{uni.navigateTo({url:"/pages/PresenceSetting/index"})};return l((()=>{S()})),(e,a)=>{const s=f;return n(),i(s,{class:"me-wrap"},{default:o((()=>[c(s,{class:"me-info-wrap"},{default:o((()=>[c(_,{class:"me-avatar",src:C.value.avatar,size:100,placeholder:r(d),withPresence:!0,presenceExt:C.value.presenceExt,isOnline:C.value.isOnline},null,8,["src","placeholder","presenceExt","isOnline"]),c(s,{class:"name"},{default:o((()=>[u(m(C.value.name),1)])),_:1}),c(s,{class:"userId"},{default:o((()=>[u(m("ID: "+r(x))+" ",1),c(s,{class:"copy",onClick:h})])),_:1})])),_:1}),c(s,{class:"content"},{default:o((()=>[c(s,{class:"menu-group-name"},{default:o((()=>[u(m(r(v)("meSettingGroupName")),1)])),_:1}),c(s,{class:"menu-wrap"},{default:o((()=>[c(g,{class:"me-menu",title:r(v)("meStatus"),onClick:w},{left:o((()=>[c(s,{class:"icon status"})])),_:1},8,["title"]),c(g,{class:"me-menu",title:r(v)("meInfo"),onClick:b},{left:o((()=>[c(s,{class:"icon person"})])),_:1},8,["title"]),c(g,{class:"me-menu",title:r(v)("meSetting")},{left:o((()=>[c(s,{class:"icon general"})])),_:1},8,["title"]),c(g,{class:"me-menu",title:r(v)("meNotice")},{left:o((()=>[c(s,{class:"icon notice"})])),_:1},8,["title"]),c(g,{class:"me-menu",title:r(v)("mePrivacy")},{left:o((()=>[c(s,{class:"icon privacy"})])),_:1},8,["title"]),c(g,{class:"me-menu",title:r(v)("meAbout"),onClick:j},{left:o((()=>[c(s,{class:"icon about"})])),_:1},8,["title"])])),_:1}),c(s,{class:"menu-group-name"},{default:o((()=>[u(m(r(v)("meLoginGroupName")),1)])),_:1}),c(s,{class:"logout",onClick:k},{default:o((()=>[u(m(r(v)("meLogout")),1)])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-f0361f43"]]);export{C as default};