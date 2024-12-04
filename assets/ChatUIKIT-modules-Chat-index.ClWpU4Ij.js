import{d as e,r as s,z as a,s as t,v as l,_ as o,o as n,a as i,c as u,w as r,b as c,u as d,e as m,t as p,h as g,x as v,X as f,f as h,J as _,L as y,K as k,G as w,H as S,g as I,W as b,R as x,Q as C,T,$ as U,Z as M,Y as F,a0 as P,a1 as E,a2 as j,a3 as L,a4 as R,a5 as B,a6 as $,a7 as A,I as O,a8 as Q,a9 as N,aa as q,ab as z,ac as V,B as H,D,E as J,F as K,ad as G,ae as W}from"./index-fSRWKzgu.js";import{A as Y}from"./index.DAuhM-vq.js";import{N as X}from"./index.D-qcNAZ3.js";import{_ as Z}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{U as ee}from"./index.Bxvr2sm7.js";import{I as se}from"./index.15MsXqjx.js";import{o as ae,a as te}from"./uni-app.es.B2Xs2A0Z.js";const le=Z(e({__name:"index",setup(e){const h=s({avatar:"",name:"",id:""}),_=a((()=>"singleChat"===h.value.conversationType)),y=t.getFeatureConfig(),k=l((()=>{const e=t.convStore.currConversation;if("singleChat"===(null==e?void 0:e.conversationType)){const s=t.appUserStore.getUserInfoFromStore(e.conversationId);h.value={name:null==s?void 0:s.name,id:e.conversationId,avatar:null==s?void 0:s.avatar,conversationType:e.conversationType,presenceExt:null==s?void 0:s.presenceExt,isOnline:null==s?void 0:s.isOnline}}else if("groupChat"===(null==e?void 0:e.conversationType)){const s=t.groupStore.getGroupInfoFromStore(e.conversationId);h.value={name:(null==s?void 0:s.groupName)||e.conversationId,id:e.conversationId,avatar:t.groupStore.getGroupAvatar(e.conversationId),conversationType:e.conversationType}}})),w=()=>{uni.navigateBack()};return o((()=>{y.usePresence&&_&&(t.appUserStore.getUsersPresenceFromServer({userIdList:[h.value.id]}),t.appUserStore.subscribePresence({userIdList:[h.value.id]}))})),n((()=>{y.usePresence&&_&&t.appUserStore.unsubscribePresence({userIdList:[h.value.id]}),k()})),(e,s)=>{const a=g;return i(),u(a,null,{default:r((()=>[c(X,{onOnLeftTap:w},{left:r((()=>[c(a,{class:"left-content"},{default:r((()=>[c(Y,{class:"nav-avatar",size:32,src:h.value.avatar,placeholder:_.value?d(v):d(f),withPresence:!!_.value,presenceExt:h.value.presenceExt,isOnline:h.value.isOnline},null,8,["src","placeholder","withPresence","presenceExt","isOnline"]),c(a,{class:"name ellipsis"},{default:r((()=>[m(p(h.value.name),1)])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-4d4f1502"]]),oe=Z(e({__name:"messageTxt",props:{msg:{}},setup(e){const s=e,l=a((()=>b(s.msg.msg))),o=s.msg.from===t.getChatConn().user||""===s.msg.from;return(e,a)=>{const t=x,n=g;return i(),u(n,{class:"msg-text"},{default:r((()=>[h("span",{class:"msg"},[(i(!0),_(y,null,k(l.value,((e,s)=>(i(),_("span",{class:w([{"emoji-wrap":"text"!==e.type}]),key:s},["text"===e.type?(i(),_("span",{key:0},p(e.value),1)):(i(),u(t,{key:1,class:"msg-emoji",src:e.value},null,8,["src"]))],2)))),128))]),s.msg.modifiedInfo?(i(),u(n,{key:0,class:w(["msg-edited-tag",{self:d(o)}])},{default:r((()=>[m(p(d(S)("messageEdited")),1)])),_:1},8,["class"])):I("",!0)])),_:1})}}}),[["__scopeId","data-v-0f6fa56b"]]),ne=225,ie=Z(e({__name:"messageImage",props:{msg:{},mode:{},width:{},height:{},disabledPreview:{type:Boolean}},setup(e){const a=T+"img404.png",t=e,l=s(!1),o=t.width?`${t.width}px`:"auto",n=t.height?`${t.height}px`:"225px",m=s({width:o,height:n}),p=t.mode||"aspectFit",v=()=>{l.value=!0},f=()=>{l.value||!0===t.disabledPreview||uni.previewImage({urls:[t.msg.url||""]})},h=e=>{t.width||t.height||(e=>{const{width:s,height:a}=e;if(0===s||0===a)return;let t=0,l=0;s>a?(t=ne,l=ne*a/s):(t=ne*s/a,l=ne),m.value.width=t+"px",m.value.height=l+"px"})(e.detail)};return(e,s)=>{const t=x,o=g;return i(),u(o,{class:"msg-image"},{default:r((()=>[c(t,{mode:d(p),style:C({width:m.value.width,height:m.value.height}),onError:v,onClick:f,onLoad:h,class:"image",src:l.value?a:e.msg.thumb},null,8,["mode","style","src"])])),_:1})}}}),[["__scopeId","data-v-38410ef5"]]),ue=225,re=Z(e({__name:"messageVideo",props:{msg:{},mode:{},width:{},height:{},disabledPreview:{type:Boolean}},setup(e){const a=T+"video404.png",t=T+"videoplay.png",l=e,o=l.width?`${l.width}px`:"auto",n=l.height?`${l.height}px`:"225px",m=s({width:l.width?l.width/2+"px":"64px",height:l.height?l.height/2+"px":"64px"}),p=s({width:o,height:n}),v=l.mode||"widthFix",f=s(!1),h=s(!1),_=()=>{f.value=!0},y=e=>{h.value=!0,l.width&&l.height||(e=>{const{width:s,height:a}=e;if(0===s||0===a)return;let t=0,l=0;s>a?(t=ue,l=ue*a/s):(t=ue*s/a,l=ue),p.value.width=t+"px",p.value.height=l+"px"})(e.detail)},k=()=>{!0!==l.disabledPreview&&uni.navigateTo({url:`/ChatUIKIT/modules/VideoPreview/index?url=${l.msg.url}`})};return(e,s)=>{const l=x,o=g;return i(),u(o,{class:"msg-video"},{default:r((()=>[c(o,{class:"video-poster"},{default:r((()=>[c(l,{mode:d(v),style:C({width:p.value.width,height:p.value.height}),onError:_,onLoad:y,class:"image",src:f.value?a:e.msg.thumb},null,8,["mode","style","src"]),!f.value&&h.value?(i(),u(o,{key:0,style:C({width:m.value.width,height:m.value.height}),onClick:k,class:"video-play-btn"},{default:r((()=>[c(l,{class:"video-play-btn-image",src:t})])),_:1},8,["style"])):I("",!0)])),_:1})])),_:1})}}}),[["__scopeId","data-v-26026db0"]]),ce=Z(e({__name:"messageAudio",props:{msg:{}},setup(e){const a=T+"icon/receiveAudio.png",l=T+"icon/sendAudio.png",o=T+"icon/sendAudioPlaying.gif",v=T+"icon/receiveAudioPlaying.gif",f=t.getChatConn(),h=e,_=new Map,y=s(!1),k=t.messageStore.checkMessageFromIsSelf(h.msg),w=t.messageStore,S=async()=>{if(!E()){const e=uni.createInnerAudioContext();_.set("audio",e),b(),e.src=await I()}M()},I=()=>new Promise(((e,s)=>{const{url:a}=h.msg;uni.downloadFile({url:a||"",header:{"X-Requested-With":"XMLHttpRequest",Accept:"audio/mp3",Authorization:"Bearer "+f.token},success:s=>{const a=s.tempFilePath;e(a)},fail:e=>{console.warn("downloadFile failed",e),s(e),uni.showToast({title:"语音转mp3失败",duration:2e3})}})})),b=()=>{const e=E();e&&(y.value=!1,e.onPlay((()=>{y.value=!0})),e.onStop((()=>{y.value=!1})),e.onPause((()=>{y.value=!1})),e.onError((e=>{y.value=!1,console.warn("audio play error",e)})),e.onEnded((()=>{y.value=!1})))},M=()=>{y.value?P():(w.setPlayingAudioMessageId(h.msg.id),F())},F=()=>{var e;null==(e=E())||e.play()},P=()=>{var e;null==(e=E())||e.stop()},E=()=>_.get("audio");return U((()=>w.playingAudioMsgId),(e=>{e!==h.msg.id&&(P(),y.value=!1)})),n((()=>{var e;const s=E();y.value&&P(),null==(e=null==s?void 0:s.destroy)||e.call(s),_.delete("audio")})),(e,s)=>{const t=g,n=x;return i(),u(t,{class:"msg-audio"},{default:r((()=>[c(t,{class:"content-wrap",onClick:S},{default:r((()=>[d(k)?(i(),u(t,{key:0,class:"content",style:C({width:10*(h.msg.length||0)+"px"})},{default:r((()=>[c(t,null,{default:r((()=>[m(p(h.msg.length)+"'' ",1)])),_:1}),c(n,{class:"image",src:y.value?o:l,mode:"aspectFit"},null,8,["src"])])),_:1},8,["style"])):(i(),u(t,{key:1,class:"content",style:C({width:5*(h.msg.length||0)+"px"})},{default:r((()=>[c(n,{class:"image",src:y.value?v:a,mode:"aspectFit"},null,8,["src"]),c(t,null,{default:r((()=>[m(p(h.msg.length)+"''",1)])),_:1})])),_:1},8,["style"]))])),_:1})])),_:1})}}}),[["__scopeId","data-v-2c2702e8"]]),de=Z(e({__name:"messageFile",props:{msg:{}},setup(e){const s=e,a=s.msg.file_length||s.msg.body.file_length,l=t.messageStore.checkMessageFromIsSelf(s.msg),o=(a/1024).toFixed(2)+"kb",n=()=>{window.open(s.msg.url,"_blank")};return(e,a)=>{const t=g;return i(),u(t,{class:w(["msg-file",{isSelf:d(l)}]),onClick:n},{default:r((()=>[c(t,{class:"left"}),c(t,{class:"right"},{default:r((()=>[c(t,{class:"file-name ellipsis"},{default:r((()=>[m(p(s.msg.filename),1)])),_:1}),c(t,{class:"file-size"},{default:r((()=>[m(p(o))])),_:1})])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-9f5136b2"]]),me=Z(e({__name:"messageUserCard",props:{msg:{}},setup(e){const s=e,l=t.messageStore.checkMessageFromIsSelf(s.msg),o=a((()=>{const e=t.appUserStore.getUserInfoFromStore(s.msg.customExts.uid);return{nickname:(null==e?void 0:e.nickname)||s.msg.customExts.nickname,avatar:(null==e?void 0:e.avatar)||s.msg.customExts.avatar}}));return(e,s)=>{const a=g;return i(),u(a,{class:"msg-user-card-wrap"},{default:r((()=>[c(a,{class:w(["msg-user-card",{isSelf:d(l)}])},{default:r((()=>[c(Y,{class:"user-card-avatar",size:44,src:o.value.avatar,placeholder:d(v)},null,8,["src","placeholder"]),c(a,{class:"user-name ellipsis"},{default:r((()=>[m(p(o.value.nickname),1)])),_:1})])),_:1},8,["class"]),c(a,{class:"tag"},{default:r((()=>[m(p(d(S)("contact")),1)])),_:1})])),_:1})}}}),[["__scopeId","data-v-6665295e"]]),pe=Z(e({__name:"messageQuote",props:{msgId:{},isReplying:{type:Boolean},messageQuoteExt:{},titleStyle:{}},emits:["jumpToMessage"],setup(e,{emit:o}){const v=e,f=s(null),T=s(null),U=o,P=()=>{T.value&&U("jumpToMessage",T.value.id)},E=a((()=>T.value?b(F(T.value)):b(S("messageNotFound")))),j=l((()=>{var e;if(v.msgId){if(T.value=M(t.messageStore.messageMap.get(v.msgId))||null,!T.value)return void(f.value={nickname:v.messageQuoteExt.msgSender});f.value=t.appUserStore.getUserInfoFromStore(T.value.from)}else{if(T.value=M(null==(e=t.messageStore)?void 0:e.quoteMessage)||null,!T.value)return;f.value=t.appUserStore.getUserInfoFromStore(T.value.from)}})),L=S("you"),R=S("reply");return n((()=>{j()})),(e,s)=>{const a=g,t=x;return i(),u(a,{class:"msg-quote-wrap"},{default:r((()=>[c(a,{class:"quote-brief",onClick:P},{default:r((()=>[c(a,{class:"title",style:C(e.titleStyle?e.titleStyle:{})},{default:r((()=>[v.isReplying?(i(),u(a,{key:0,class:"user",textContent:p(d(L))},null,8,["textContent"])):I("",!0),v.isReplying?(i(),u(a,{key:1,class:"tip",textContent:p(d(R))},null,8,["textContent"])):I("",!0),f.value?(i(),u(a,{key:2,class:"user"},{default:r((()=>[m(p(f.value.nickname),1)])),_:1})):I("",!0)])),_:1},8,["style"]),c(a,{class:"content"},{default:r((()=>[h("span",{class:"msg ellipsis"},[(i(!0),_(y,null,k(E.value,((e,s)=>(i(),_("span",{class:w([{"emoji-wrap":"text"!==e.type}]),key:s},["text"===e.type?(i(),_("span",{key:0},p(e.value),1)):(i(),u(t,{key:1,class:"msg-emoji",src:e.value},null,8,["src"]))],2)))),128))])])),_:1})])),_:1}),T.value?(i(),u(a,{key:0,class:"quote-msg"},{default:r((()=>["img"===T.value.type?(i(),u(ie,{key:0,msg:T.value,mode:"scaleToFill",width:40,height:40,disabledPreview:v.isReplying},null,8,["msg","disabledPreview"])):"video"===T.value.type?(i(),u(re,{key:1,msg:T.value,mode:"scaleToFill",width:40,height:40,disabledPreview:v.isReplying},null,8,["msg","disabledPreview"])):I("",!0)])),_:1})):I("",!0)])),_:1})}}}),[["__scopeId","data-v-2b919480"]]),ge=Z(e({__name:"messageActions",props:{msg:{},isSelected:{type:Boolean}},setup(e,{expose:l}){const n=T+"icon/copy.png",v=T+"icon/recall.png",f=T+"icon/reply.png",h=T+"icon/edit.png",U=T+"icon/delete.png",M=e,F=s(!1),E=s(""),j=s(0),L=s("0px"),R=s([]),B=s({width:0,height:0}),$=t.messageStore.checkMessageFromIsSelf(M.msg);o((()=>{uni.getSystemInfo({success:e=>{B.value={width:e.windowWidth,height:e.windowHeight}}})}));const A=a((()=>"overstep"===E.value?{top:`${j.value}px`,right:0}:"")),O=a((()=>"nearTop"===E.value?$?"right-up-box":"left-up-box":"nearBottom"===E.value?$?"right-down-box":"left-down-box":""));const Q=()=>{const e=b(M.msg.msg).reduce(((e,s)=>e+("text"===s.type?s.value:s.alt)),"");uni.setClipboardData({data:e,success:()=>{F.value=!1}})},N=()=>{t.messageStore.setQuoteMessage(M.msg),F.value=!1},q=()=>{t.messageStore.setEditingMessage(M.msg),F.value=!1},z=()=>{t.messageStore.deleteMessage({conversationType:M.msg.chatType,conversationId:t.convStore.getCvsIdFromMessage(M.msg)},M.msg)},V=()=>{t.messageStore.recallMessage(M.msg),F.value=!1};return l({handleLongPress:function(e,s){let a=e.changedTouches[0].clientY;uni.createSelectorQuery().in(s).select(`#msg-bubble-${M.msg.id}`).boundingClientRect((e=>{L.value="8px",e.top>180?E.value="nearBottom":e.height>B.value.height/2?(e.top<0?j.value=-e.top+a:j.value=a-e.top,E.value="overstep"):E.value="nearTop"})).exec(),(()=>{const e=[],s=Date.now(),a=M.msg.time,l="sent"===M.msg.status&&s-a<12e4,o=$&&"txt"===M.msg.type&&"failed"!==M.msg.status&&"sending"!==M.msg.status,i="failed"!==M.msg.status&&"sending"!==M.msg.status,u=t.getFeatureConfig();u.copyMessage&&"txt"===M.msg.type&&e.push({label:S("copyBtn"),icon:n,action:Q}),u.editMessage&&o&&e.push({label:S("editBtn"),icon:h,action:q}),u.replyMessage&&i&&e.push({label:S("replyBtn"),icon:f,action:N}),$&&(u.deleteMessage&&e.push({label:S("deleteBtn"),icon:U,action:z}),u.recallMessage&&l&&e.push({label:S("recallBtn"),icon:v,action:V})),R.value=e})(),setTimeout((()=>{F.value=!0}),100)}}),(e,s)=>{const a=x,t=g;return F.value&&R.value.length?(i(),u(t,{key:0,class:w(["message-popup-box",O.value]),style:C("overstep"==E.value?A.value:{"--arrowPosition":L.value,right:d($)?"0":"auto"})},{default:r((()=>[c(t,{class:"message-operate"},{default:r((()=>[(i(!0),_(y,null,k(R.value,((s,l)=>(i(),u(t,{class:"operate-item",key:l,onClick:P((a=>s.action(e.item,e.index)),["stop"])},{default:r((()=>[c(a,{src:s.icon,mode:"aspectFill",alt:"",class:"operate-item-icon"},null,8,["src"]),c(t,{class:"operate-item-txt"},{default:r((()=>[m(p(s.label),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["class","style"])):I("",!0)}}}),[["__scopeId","data-v-8b66dcc9"]]),ve=Z(e({__name:"messageStatus",props:{msg:{}},setup(e){const s=e;return(e,a)=>{const t=g;return i(),u(t,{class:"msg-status-wrap"},{default:r((()=>["sending"===s.msg.status?(i(),u(t,{key:0,class:"msg-status sending"})):"sent"===s.msg.status?(i(),u(t,{key:1,class:"msg-status sent"})):"failed"===s.msg.status?(i(),u(t,{key:2,class:"msg-status failed"})):"received"===s.msg.status?(i(),u(t,{key:3,class:"msg-status received"})):"read"===s.msg.status?(i(),u(t,{key:4,class:"msg-status read"})):I("",!0)])),_:1})}}}),[["__scopeId","data-v-889d1294"]]),fe=Z(e({__name:"messageItem",props:{msg:{},isSelected:{type:Boolean}},emits:["onLongPress","jumpToMessage"],setup(e,{emit:l}){var o;const n=e,f=l,h=e=>{f("jumpToMessage",e)},_=j(),y=s(null),k=t.appUserStore,S=e=>k.getUserInfoFromStore(e||""),b=t.getFeatureConfig().messageStatus,x=t.getChatConn().user===n.msg.from||""===n.msg.from,T=(null==(o=n.msg.ext)?void 0:o.ease_chat_uikit_user_info)||{},U=a((()=>{let e="msg-bubble";return"img"!==n.msg.type&&"video"!==n.msg.type&&(e=x?"msg-bubble msg-bubble-self-bg":"msg-bubble msg-bubble-bg"),e}));return(e,s)=>{const a=g;return i(),u(a,{class:"msg-item-wrap",style:C({flexDirection:d(x)?"row-reverse":"row"})},{default:r((()=>[c(a,{class:"avatar-wrap"},{default:r((()=>[c(Y,{size:28,src:S(e.msg.from||"").avatar||d(T).avatarURL||"",placeholder:d(v)},null,8,["src","placeholder"])])),_:1}),c(a,{class:"msg-content",style:C({textAlign:d(x)?"right":"left"})},{default:r((()=>[c(a,null,{default:r((()=>[d(x)?I("",!0):(i(),u(a,{key:0,class:"user-nickname"},{default:r((()=>[m(p(S(e.msg.from||"").nickname||d(T).nickname),1)])),_:1})),e.msg.ext.msgQuote&&e.msg.ext.msgQuote.msgID?(i(),u(a,{key:1,class:"msg-quote-container"},{default:r((()=>[c(pe,{msgId:e.msg.ext.msgQuote.msgID,messageQuoteExt:e.msg.ext.msgQuote,titleStyle:{justifyContent:d(x)?"flex-end":"flex-start"},onJumpToMessage:h},null,8,["msgId","messageQuoteExt","titleStyle"])])),_:1})):I("",!0),c(a,{class:w(U.value),id:"msg-bubble-"+e.msg.id,onLongpress:s[0]||(s[0]=e=>{(e=>{f("onLongPress",n.msg.id),setTimeout((()=>{var s;null==(s=null==y?void 0:y.value)||s.handleLongPress(e,_)}),0)})(e)})},{default:r((()=>[d(b)&&d(x)&&e.msg.status?(i(),u(ve,{key:0,msg:e.msg},null,8,["msg"])):I("",!0),"txt"===e.msg.type?(i(),u(a,{key:1},{default:r((()=>[c(oe,{msg:e.msg},null,8,["msg"])])),_:1})):"img"===e.msg.type?(i(),u(a,{key:2},{default:r((()=>[c(ie,{msg:e.msg},null,8,["msg"])])),_:1})):"video"===e.msg.type?(i(),u(a,{key:3},{default:r((()=>[c(re,{msg:e.msg},null,8,["msg"])])),_:1})):"audio"===e.msg.type?(i(),u(a,{key:4},{default:r((()=>[c(ce,{msg:e.msg},null,8,["msg"])])),_:1})):"custom"===e.msg.type?(i(),u(a,{key:5},{default:r((()=>["userCard"===e.msg.customEvent?(i(),u(me,{key:0,msg:e.msg},null,8,["msg"])):I("",!0)])),_:1})):"file"===e.msg.type?(i(),u(a,{key:6},{default:r((()=>[c(de,{msg:e.msg},null,8,["msg"])])),_:1})):I("",!0)])),_:1},8,["class","id"])])),_:1}),c(a,{class:"msg-time"},{default:r((()=>[m(p(d(E)(e.msg.time,!0)),1)])),_:1}),n.isSelected?(i(),u(ge,{key:0,ref_key:"actionRef",ref:y,msg:e.msg,isSelected:n.isSelected},null,8,["msg","isSelected"])):I("",!0)])),_:1},8,["style"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-c5915a58"]]),he=Z(e({__name:"noticeMessageItem",props:{msg:{}},setup(e){var s,a;const l=t.appUserStore,o=e,{msg:n}=o,v=(null==(s=n.noticeInfo)?void 0:s.ext)||{},f=null==(a=n.noticeInfo)?void 0:a.noticeType;return(e,s)=>{const a=g;return i(),u(a,{class:"msg-notice"},{default:r((()=>[c(a,{class:"notice"},{default:r((()=>[c(a,{class:"notice-content"},{default:r((()=>[c(a,{class:"notice-text"},{default:r((()=>["recall"===d(f)?(i(),u(a,{key:0},{default:r((()=>{var e,s,a;return[m(p(`"${d(l).getUserInfoFromStore(null==(a=null==(s=null==(e=d(n))?void 0:e.noticeInfo)?void 0:s.ext)?void 0:a.from).name}" ${d(S)("recallNotice")}`),1)]})),_:1})):"group"===d(f)?(i(),u(a,{key:1},{default:r((()=>{var e,s,a;return[m(p(`"${d(l).getUserInfoFromStore(null==(a=null==(s=null==(e=d(n))?void 0:e.noticeInfo)?void 0:s.ext)?void 0:a.from).name}" ${d(v).operation} ${d(S)("group")}`),1)]})),_:1})):I("",!0)])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-e480384a"]]),_e=Z(e({__name:"messageList",props:{conversationId:{},conversationType:{}},setup(e,{expose:a}){const v=e,f=s(0),h=s(!1),b=s(""),x=t.messageStore,C=s(!0),T=s(""),U=s(""),F=s(""),P=s([]),E=s(!0);let j=null;const B=e=>{U.value=e},$=()=>{U.value=""};o((()=>{var e;j=l((()=>{const e=M(x.conversationMessagesMap.get(v.conversationId));if(e){if(P.value=e.messageIds.map((e=>M(t.messageStore.messageMap.get(e)))),C.value=e.isLast,T.value=e.cursor,h.value||b.value)return;L((()=>{O(),setTimeout((()=>{E.value=!1}),200)}))}})),x.conversationMessagesMap.has(v.conversationId)&&!0===(null==(e=x.conversationMessagesMap.get(v.conversationId))?void 0:e.isGetHistoryMessage)||x.getHistoryMessages({conversationId:v.conversationId,conversationType:v.conversationType})}));const A=async()=>{if(!C.value&&!0!==h.value){h.value=!0;try{await x.getHistoryMessages({conversationId:v.conversationId,conversationType:v.conversationType},T.value,(()=>{b.value=P.value[0].id})),L((()=>{const e=setTimeout((()=>{h.value=!1,b.value="",clearTimeout(e)}),300)}))}catch(e){h.value=!1}}},O=()=>{f.value=999*P.value.length,setTimeout((()=>{f.value+=1}),400)},Q=e=>{F.value||(b.value=e,F.value=e,setTimeout((()=>{F.value="",b.value=""}),1e3))};return n((()=>{j&&j()})),a({scrollToBottom:O}),(e,s)=>{const a=g,t=R;return i(),u(a,{class:w(["msg-list-wrap",{opacity:E.value}]),onClick:$},{default:r((()=>[c(t,{"scroll-y":"","scroll-top":f.value,class:"message-scroll-list","scroll-into-view":`msg-${b.value}`,"scroll-anchoring":!0},{default:r((()=>[C.value||h.value?I("",!0):(i(),u(a,{key:0,class:"loadMore",onClick:A},{default:r((()=>[m(p(d(S)("loadMore")),1)])),_:1})),C.value?(i(),u(a,{key:1,class:"isLast"},{default:r((()=>[m(p(d(S)("noMoreMessage")),1)])),_:1})):I("",!0),h.value?(i(),u(a,{key:2,class:"loading"})):I("",!0),(i(!0),_(y,null,k(P.value,((e,s)=>(i(),u(a,{class:w(["scroll-msg-item",{blink:F.value===(e.serverMsgId||e.id)}]),id:`msg-${e.serverMsgId||e.id}`,key:e.id},{default:r((()=>{var s;return["notice"===(null==(s=null==e?void 0:e.noticeInfo)?void 0:s.type)?(i(),u(he,{key:0,msg:e},null,8,["msg"])):(i(),u(fe,{key:1,msg:e,onOnLongPress:B,onJumpToMessage:Q,isSelected:e.id===U.value},null,8,["msg","isSelected"]))]})),_:2},1032,["class","id"])))),128))])),_:1},8,["scroll-top","scroll-into-view"])])),_:1},8,["class"])}}}),[["__scopeId","data-v-067cd7a1"]]),ye=Z(e({__name:"index",props:{preventEvent:{type:Boolean}},emits:["onMessageSend","onShowToolbar","onShowEmojiPicker","onInputTap","onBlur","onFocus","onMention"],setup(e,{expose:a,emit:l}){const o=t.getFeatureConfig(),n=o.inputVideo||o.inputImage,m=e,p=l,v=t.convStore,f=s(!1);s(null);const h=s(""),_=s([]),y=()=>{p("onShowToolbar")},k=()=>{p("onShowEmojiPicker")},b=()=>{p("onInputTap")},x=e=>{var s,a;const l=null==(s=null==e?void 0:e.detail)?void 0:s.value;t.getFeatureConfig().inputMention&&"groupChat"===(null==(a=t.convStore.currConversation)?void 0:a.conversationType)&&(l.endsWith("@")||l.endsWith("@\n"))&&(f.value=!1,p("onMention",!0))},C=async()=>{let e=B(h.value).trim();if(!e)return void console.warn("No text message");let s={},a=!1;_.value,_.value.includes($)&&(a=!0);const l=t.messageStore.quoteMessage;l&&(s={msgID:l.serverMsgId||l.id,msgPreview:F(l),msgSender:t.appUserStore.getSelfUserInfo().nickname||"",msgType:l.type},t.messageStore.setQuoteMessage(null));const o=A.message.create({to:v.currConversation.conversationId,chatType:v.currConversation.conversationType,type:"txt",msg:e,ext:{em_at_list:a?$:_.value,ease_chat_uikit_user_info:{avatarURL:t.appUserStore.getSelfUserInfo().avatar,nickname:t.appUserStore.getSelfUserInfo().name},msgQuote:(null==s?void 0:s.msgID)?s:void 0}});h.value="",_.value=[];try{await t.messageStore.sendMessage(o),L((()=>{p("onMessageSend")}))}catch(n){uni.showToast({title:`send failed: ${n.message}`,icon:"none"})}},T=()=>{f.value=!1,p("onBlur")},U=()=>{f.value=!0,p("onFocus")};return a({insertText(e){h.value+=e},setIsFocus(e){f.value=e},addMentionUserIds(e){_.value=[...new Set([..._.value,...e])]}}),(e,s)=>{const a=O,t=g;return i(),u(t,{class:"message-input-wrap"},{default:r((()=>[c(t,{class:"send-input",onClick:b},{default:r((()=>[c(a,{class:w([{"prevent-event":m.preventEvent}]),modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=e=>h.value=e),"cursor-spacing":"20",type:"text",focus:f.value,"adjust-position":!1,"auto-blur":!0,"confirm-type":"send","confirm-hold":!0,onInput:x,onConfirm:C,onBlur:T,onFocus:U,placeholder:d(S)("sendMessagePlaceholder")},null,8,["class","modelValue","focus","placeholder"])])),_:1}),d(o).inputEmoji?(i(),u(t,{key:0,class:"icon-wrap"},{default:r((()=>[c(t,{class:"icon emoji-icon",onClick:P(k,["stop"])})])),_:1})):I("",!0),d(n)&&0===h.value.length?(i(),u(t,{key:1,class:"icon-wrap"},{default:r((()=>[c(t,{class:"icon plus-icon",onClick:P(y,["stop"])})])),_:1})):(i(),u(t,{key:2,class:"icon-wrap"},{default:r((()=>[c(t,{class:"icon send-icon",onClick:P(C,["stop"])})])),_:1}))])),_:1})}}}),[["__scopeId","data-v-1f475e73"]]),ke=Z(e({__name:"itemContainer",props:{title:{},iconUrl:{}},setup(e){const s=e,{title:a,iconUrl:t}=s;return(e,s)=>{const l=x,o=g;return i(),u(o,{class:"tool-item-wrap"},{default:r((()=>[c(o,{class:"icon-wrap"},{default:r((()=>[c(l,{class:"icon",src:d(t)},null,8,["src"])])),_:1}),c(o,null,{default:r((()=>[m(p(d(a)),1)])),_:1})])),_:1})}}}),[["__scopeId","data-v-146dfb83"]]),we=Z(e({__name:"imageUpload",setup(e){const s=T+"icon/imgButton.png",a=S("imageUpload"),l=Q("InputToolbarEvent"),o=t.convStore,n=t.getChatConn(),m=()=>{uni.chooseImage({count:1,sourceType:["album"],success:function(e){p(e)}})},p=e=>{var s,a;const i=(null==(s=null==e?void 0:e.tempFilePaths)?void 0:s[0])||(null==(a=null==e?void 0:e.tempFiles)?void 0:a[0].tempFilePath),u=`${n.apiUrl}/${n.orgName}/${n.appName}/chatfiles`;if(!i)return;uni.showLoading();const r={url:u,filePath:i,fileType:"image",name:"file",header:{Authorization:"Bearer "+n.token},success:async e=>{const s=JSON.parse(e.data),a=A.message.create({type:"img",to:o.currConversation.conversationId,chatType:o.currConversation.conversationType,url:s.uri+"/"+s.entities[0].uuid,ext:{ease_chat_uikit_user_info:{avatarURL:t.appUserStore.getSelfUserInfo().avatar,nickname:t.appUserStore.getSelfUserInfo().name}}});try{await t.messageStore.sendMessage(a),null==l||l.closeToolbar()}catch(n){uni.showToast({title:`send failed: ${n.message}`,icon:"none"})}uni.hideLoading()},fail:e=>{uni.hideLoading(),uni.showToast({title:S("uploadFailed"),icon:"none"})}};uni.uploadFile(r)};return(e,t)=>{const l=g;return i(),u(l,{class:"tool-image-wrap tool-item",onClick:m},{default:r((()=>[c(ke,{title:d(a),iconUrl:s},null,8,["title"])])),_:1})}}}),[["__scopeId","data-v-874ed27d"]]),Se=Z(e({__name:"videoUpload",setup(e){const s=T+"icon/videoButton.png",a=S("videoUpload"),l=Q("InputToolbarEvent"),o=t.getChatConn(),n=t.convStore,m=()=>{uni.chooseVideo({sourceType:["camera","album"],success:function(e){p(e)}})},p=e=>{const s=null==e?void 0:e.tempFilePath,a=`${o.apiUrl}/${o.orgName}/${o.appName}/chatfiles`;if(!s)return;uni.showLoading();const i={url:a,filePath:s,fileType:"video",name:"file",header:{Authorization:"Bearer "+o.token},success:async e=>{const s=JSON.parse(e.data),a=A.message.create({type:"video",to:n.currConversation.conversationId,chatType:n.currConversation.conversationType,body:{url:s.uri+"/"+s.entities[0].uuid},ext:{ease_chat_uikit_user_info:{avatarURL:t.appUserStore.getSelfUserInfo().avatar,nickname:t.appUserStore.getSelfUserInfo().name}}});try{await t.messageStore.sendMessage(a),null==l||l.closeToolbar()}catch(o){uni.showToast({title:`send failed: ${o.message}`,icon:"none"})}uni.hideLoading()},fail:e=>{uni.hideLoading(),uni.showToast({title:S("uploadFailed"),icon:"none"})}};uni.uploadFile(i)};return(e,t)=>{const l=g;return i(),u(l,{class:"tool-video-wrap tool-item",onClick:m},{default:r((()=>[c(ke,{title:d(a),iconUrl:s},null,8,["title"])])),_:1})}}}),[["__scopeId","data-v-4dc5db65"]]),Ie=Z(e({__name:"fileUpload",setup(e){const s=T+"icon/folder.png",a=S("file"),l=Q("InputToolbarEvent"),o=t.getChatConn(),n=t.convStore,m=()=>{uni.chooseFile({count:1,success(e){p({tempFile:e.tempFiles[0]})}})},p=e=>{const s=null==e?void 0:e.tempFile,a=`${o.apiUrl}/${o.orgName}/${o.appName}/chatfiles`;if(!s)return;uni.showLoading();const i=o.token,u={url:a,filePath:s.path,fileType:s.type,name:"file",header:{Authorization:"Bearer "+i},success:async e=>{const a=JSON.parse(e.data),o=A.message.create({type:"file",to:n.currConversation.conversationId,chatType:n.currConversation.conversationType,body:{url:a.uri+"/"+a.entities[0].uuid,filename:s.name,file_length:s.size},ext:{ease_chat_uikit_user_info:{avatarURL:t.appUserStore.getSelfUserInfo().avatar,nickname:t.appUserStore.getSelfUserInfo().name}}});try{await t.messageStore.sendMessage(o),null==l||l.closeToolbar()}catch(i){uni.showToast({title:`send failed: ${i.message}`,icon:"none"})}uni.hideLoading()},fail:e=>{uni.hideLoading(),uni.showToast({title:S("uploadFailed"),icon:"none"})}};uni.uploadFile(u)};return(e,t)=>{const l=g;return i(),u(l,{class:"tool-video-wrap tool-item",onClick:m},{default:r((()=>[c(ke,{title:d(a),iconUrl:s},null,8,["title"])])),_:1})}}}),[["__scopeId","data-v-0178ba09"]]),be=Z(e({__name:"userCard",emits:["onUserCardButtonTap"],setup(e,{emit:s}){const a=T+"icon/usercard.png",t=Q("InputToolbarEvent"),l=s,o=()=>{null==t||t.closeToolbar(),l("onUserCardButtonTap")};return(e,s)=>{const t=g;return i(),u(t,{class:"tool-item",onClick:o},{default:r((()=>[c(ke,{title:d(S)("userCard"),iconUrl:a},null,8,["title"])])),_:1})}}}),[["__scopeId","data-v-8b81b847"]]),xe=Z(e({__name:"index",emits:["onUserCardButtonTap"],setup(e,{emit:s}){const a=t.getFeatureConfig(),l=s,o=()=>{l("onUserCardButtonTap")};return(e,s)=>{const t=g,l=N,n=q;return i(),u(t,{class:"message-input-toolbar"},{default:r((()=>[c(n,{class:"swiper"},{default:r((()=>[c(l,{class:"swiper-item"},{default:r((()=>[c(t,{class:"item-wrap"},{default:r((()=>[d(a).inputImage?(i(),u(t,{key:0,class:"item"},{default:r((()=>[c(we)])),_:1})):I("",!0),d(a).inputVideo?(i(),u(t,{key:1,class:"item",style:{width:"25%"}},{default:r((()=>[c(Se)])),_:1})):I("",!0),d(a).inputFile?(i(),u(t,{key:2,class:"item",style:{width:"25%"}},{default:r((()=>[c(Ie)])),_:1})):I("",!0),d(a).userCard?(i(),u(t,{key:3,class:"item",style:{width:"25%"}},{default:r((()=>[c(be,{onOnUserCardButtonTap:o})])),_:1})):I("",!0)])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-3aeb9834"]]),Ce=Z(e({__name:"emojiPicker",emits:["onEmojiPick"],setup(e,{emit:a}){const t=s(z(V,7));V.forEach((e=>{}));const l=a;return(e,s)=>{const a=x,o=g;return i(),u(o,{class:"emoji-picker-wrap"},{default:r((()=>[c(o,{class:"emojis-wrap"},{default:r((()=>[(i(!0),_(y,null,k(t.value,((e,s)=>(i(),u(o,{class:"emojis-row",key:s},{default:r((()=>[(i(!0),_(y,null,k(e,(e=>(i(),u(o,{key:e.alt,class:"emoji-item-wrap"},{default:r((()=>[c(a,{class:"emoji",src:e.url,onClick:s=>{return a=e.alt,void l("onEmojiPick",a);var a}},null,8,["src","onClick"])])),_:2},1024)))),128)),s===t.value.length-1?(i(),_(y,{key:0},[c(o,{class:"emoji-empty"}),c(o,{class:"emoji-empty"}),c(o,{class:"emoji-empty"}),c(o,{class:"emoji-empty"})],64)):I("",!0)])),_:2},1024)))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-cd394043"]]),Te=Z(e({__name:"messageQuotePanel",setup(e){const a=s(null);l((()=>{a.value=t.messageStore.quoteMessage}));const o=()=>{t.messageStore.setQuoteMessage(null)};return n((()=>{o()})),(e,s)=>{const t=g;return a.value?(i(),u(t,{key:0,class:"msg-quote-panel-wrap"},{default:r((()=>[c(t,{class:"left-wrap"},{default:r((()=>[c(pe,{isReplying:!0})])),_:1}),c(t,{class:"cancel",onClick:o})])),_:1})):I("",!0)}}}),[["__scopeId","data-v-51b01c64"]]),Ue=Z(e({__name:"messageEdit",setup(e){const o=s(null),v=s(""),f=s(!0),h=l((()=>{var e;o.value=t.messageStore.editingMessage,v.value=null==(e=o.value)?void 0:e.msg})),_=a((()=>{var e;return v.value!==(null==(e=o.value)?void 0:e.msg)&&B(v.value).trim()})),y=()=>{t.messageStore.setEditingMessage(null)},k=()=>{if(_.value){const e=A.message.create({to:o.value.to,type:o.value.type,chatType:o.value.chatType,msg:v.value});t.messageStore.modifyServerMessage(o.value,e),t.messageStore.setEditingMessage(null)}};return n((()=>{h()})),(e,s)=>{const a=g,t=H;return o.value?(i(),u(a,{key:0,style:{width:"100%"}},{default:r((()=>[c(a,{class:"mask",onClick:y}),c(a,{class:"msg-edit-wrap"},{default:r((()=>[c(a,{class:"title"},{default:r((()=>[m(p(d(S)("messageEditing")),1)])),_:1}),c(a,{class:"content"},{default:r((()=>[c(t,{modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=e=>v.value=e),class:"edit-input","cursor-spacing":"20","auto-height":!0,focus:f.value,"confirm-type":"send","adjust-position":!1,"show-confirm-bar":!1},null,8,["modelValue","focus"]),c(a,{onClick:k,class:w(_.value?"edit":"edit-disabled")},null,8,["class"])])),_:1})])),_:1})])),_:1})):I("",!0)}}}),[["__scopeId","data-v-c8c09a41"]]),Me=Z(e({__name:"index",props:{height:{},maskClosable:{type:Boolean},borderRadius:{}},setup(e,{expose:a}){const t=e,l=s(!1),o=s(t.height||300),n=s(null),m=()=>{v(!1,(()=>{l.value=!1}))},p=()=>{t.maskClosable&&m()},v=(e,s)=>{const a=uni.createAnimation({duration:300,timingFunction:"ease-in-out"});e?a.translateY(0).step():a.translateY(o.value).step(),n.value=a.export(),s&&setTimeout(s,300)},f=(e,s)=>{const a=uni.createAnimation({duration:300,timingFunction:"ease"});e?a.opacity(0).step():a.opacity(1).step(),n.value=a.export()},h=n;return a({openPopup:()=>{l.value=!0,v(!0)},closePopup:m}),(e,s)=>{const a=g;return i(),u(a,{class:w(["popup-container",{"popup-container-hide ":!l.value}])},{default:r((()=>[D(c(a,{class:"mask",onClick:p,animation:f},null,512),[[J,l.value]]),c(a,{class:w(["popup",{"popup-show":l.value}]),animation:d(h),style:C({borderTopLeftRadius:t.borderRadius,borderTopRightRadius:t.borderRadius,height:`${o.value}px`})},{default:r((()=>[c(a,{class:"popup-content"},{default:r((()=>[K(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","animation","style"])])),_:3},8,["class"])}}}),[["__scopeId","data-v-4ba8cb03"]]),Fe=Z(e({__name:"index",emits:["onSelect"],setup(e,{expose:a,emit:l}){const o=T+"icon/alAll.png",n=l,v=s([]),f=s(!0),h=s(null);let w=!1,I=1;const b=async()=>{var e;w=!0;const s=(null==(e=t.convStore.currConversation)?void 0:e.conversationId)||"";try{const e=(await t.groupStore.getGroupMembers(s,I)).data||[];v.value.push(...e),e.length<G&&(f.value=!1),w=!1}catch(a){w=!1}},x=()=>{w||!1===f.value||(I++,b())},C=e=>{n("onSelect",[e]),U()},U=()=>h.value.closePopup();return a({showPopup:()=>{h.value.openPopup(),0===v.value.length&&b()},hidePopup:U}),(e,s)=>{const a=g,l=R;return i(),u(a,null,{default:r((()=>[c(Me,{height:500,borderRadius:"10px",maskClosable:!0,ref_key:"popupRef",ref:h},{default:r((()=>[c(a,{class:"content-wrap"},{default:r((()=>[c(a,{class:"header"},{default:r((()=>[c(a,{class:"left",onClick:U},{default:r((()=>[c(a,{class:"arrow-left"}),c(a,{class:"mention"},{default:r((()=>[m(p(d(S)("mention")),1)])),_:1})])),_:1})])),_:1}),c(a,{class:"content"},{default:r((()=>[c(l,{"scroll-y":"",style:{height:"100%"},onScrolltolower:x},{default:r((()=>[(i(),u(ee,{class:"member-item",key:d(S)("mentionAll"),avatar:o,user:{userId:d(S)("mentionAll")},onClick:s[0]||(s[0]=e=>C(d($)))},null,8,["user"])),(i(!0),_(y,null,k(v.value,(e=>D((i(),u(ee,{class:"member-item",key:e.member||e.owner,user:{userId:e.member||e.owner},onClick:s=>C(e.member||e.owner)},null,8,["user","onClick"])),[[J,(e.member||e.owner)!==d(t).getChatConn().user]]))),128))])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})}}}),[["__scopeId","data-v-35989639"]]),Pe=Z(e({__name:"index",emits:["onSelect"],setup(e,{expose:a,emit:o}){const v=o,f=s(null),h=s([]),_=l((()=>{h.value=t.contactStore.contacts.map((e=>({...e,...t.appUserStore.getUserInfoFromStore(e.userId),id:e.userId})))})),y=()=>f.value.closePopup();return a({showPopup:()=>f.value.openPopup(),hidePopup:y}),n((()=>{_()})),(e,s)=>{const a=g;return i(),u(a,null,{default:r((()=>[c(Me,{height:500,borderRadius:"10px",maskClosable:!0,ref_key:"popupRef",ref:f},{default:r((()=>[c(a,{class:"content-wrap"},{default:r((()=>[c(a,{class:"header"},{default:r((()=>[c(a,{class:"left",onClick:y},{default:r((()=>[c(a,{class:"arrow-left"}),c(a,{class:"share"},{default:r((()=>[m(p(d(S)("shareContact")),1)])),_:1})])),_:1})])),_:1}),c(a,{class:"content"},{default:r((()=>[c(se,{class:"contact-indexed-list",options:h.value},{indexedItem:r((e=>[c(ee,{class:"contact-item",user:e.item,onClick:s=>{return a=e.item.userId,v("onSelect",[a]),void y();var a}},null,8,["user","onClick"])])),_:1},8,["options"])])),_:1})])),_:1})])),_:1},512)])),_:1})}}}),[["__scopeId","data-v-85dbadc8"]]),Ee=Z(e({__name:"index",setup(e){const m=s(null),p=s(null),v=s(null),f=s(null),h=s(""),_=s(!1),y=s(!1),k=s(!1),w=s("0px"),b=s(""),x=t.getFeatureConfig(),T=a((()=>_.value||y.value)),U=l((()=>{k.value=!!t.messageStore.editingMessage})),M=l((()=>{var e,s;t.messageStore.quoteMessage?null==(e=null==p?void 0:p.value)||e.setIsFocus(!0):null==(s=null==p?void 0:p.value)||s.setIsFocus(!1)})),F=({height:e})=>{w.value=e+"px"},P=()=>{var e;E(),null==(e=null==p?void 0:p.value)||e.setIsFocus(!0)},E=()=>{!0===_.value&&(_.value=!1),!0===y.value&&(y.value=!1)},j=e=>{null==p||p.value.insertText(e)},L=()=>{var e;null==(e=null==v?void 0:v.value)||e.showPopup()},R=()=>{var e;null==(e=null==f?void 0:f.value)||e.showPopup()},B=e=>{const s=e.map((e=>e===$?S("mentionAll"):t.appUserStore.getUserInfoFromStore(e).name));let a=s.join("");0!==s.length?(null==p||p.value.addMentionUserIds(e),null==p||p.value.insertText(a)):a=s.join("@")},O=e=>{const s=e[0],a=t.appUserStore.getUserInfoFromStore(s),l=A.message.create({type:"custom",to:t.convStore.currConversation.conversationId,chatType:t.convStore.currConversation.conversationType,ext:{ease_chat_uikit_user_info:{avatarURL:t.appUserStore.getSelfUserInfo().avatar,nickname:t.appUserStore.getSelfUserInfo().name}},customEvent:"userCard",customExts:{avatar:a.avatar,nickname:a.name,uid:s}});t.messageStore.sendMessage(l)};return o((()=>{(h.value||b.value)&&t.convStore.markConversationRead({conversationId:h.value,conversationType:b.value})})),n((()=>{t.messageStore.setQuoteMessage(null),t.messageStore.setEditingMessage(null),t.messageStore.cleanupRemovedMessages(h.value),t.convStore.setCurrentConversation(null),M(),U()})),ae((e=>{b.value=null==e?void 0:e.type,h.value=null==e?void 0:e.id,(null==e?void 0:e.id)&&t.convStore.setCurrentConversation({conversationId:h.value,conversationType:b.value}),uni.onKeyboardHeightChange&&uni.onKeyboardHeightChange(F)})),te((()=>{uni.onKeyboardHeightChange&&uni.offKeyboardHeightChange(F)})),W("InputToolbarEvent",{closeToolbar:E}),(e,s)=>{const a=g;return i(),u(a,{class:"chat-wrap",style:C({height:`calc(100% - ${w.value})`})},{default:r((()=>[c(le),c(a,{class:"msgs-wrap"},{default:r((()=>[T.value?(i(),u(a,{key:0,class:"mask",onClick:E})):I("",!0),c(_e,{ref_key:"msgListRef",ref:m,conversationId:h.value,conversationType:b.value},null,8,["conversationId","conversationType"])])),_:1}),c(Te),k.value?(i(),u(Ue,{key:0,style:C({position:"fixed",width:"100%",height:`calc(100% - ${w.value})`,overflow:"hidden","z-index":9})},null,8,["style"])):I("",!0),c(a,{class:"chat-input-wrap"},{default:r((()=>[c(ye,{ref_key:"msgInputRef",ref:p,preventEvent:_.value||y.value,onOnInputTap:P,onOnMention:L,onOnShowToolbar:s[0]||(s[0]=e=>{_.value=!0,y.value=!1}),onOnShowEmojiPicker:s[1]||(s[1]=e=>{y.value=!0,_.value=!1})},null,8,["preventEvent"])])),_:1}),_.value?(i(),u(a,{key:1,class:"chat-input-toolbar-wrap"},{default:r((()=>[c(xe,{onOnUserCardButtonTap:R})])),_:1})):I("",!0),y.value?(i(),u(Ce,{key:2,onOnEmojiPick:j})):I("",!0),d(x).inputMention?(i(),u(Fe,{key:3,ref_key:"mentionListRef",ref:v,onOnSelect:B},null,512)):I("",!0),d(x).userCard?(i(),u(Pe,{key:4,ref_key:"contactListRef",ref:f,onOnSelect:O},null,512)):I("",!0)])),_:1},8,["style"])}}}),[["__scopeId","data-v-cf5932d4"]]);export{Ee as default};
