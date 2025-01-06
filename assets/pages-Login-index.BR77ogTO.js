import{d as e,r as a,o,a as l,c as t,w as n,b as s,e as i,u as r,t as u,f as d,g as c,i as p,h,I as v,j as m,k as g,l as f,m as w,n as C,C as k}from"./index-DGz4Q2Jr.js";import{t as y}from"./locales.CN6s_NGi.js";import{_ as b}from"./_plugin-vue_export-helper.BCo6x5W8.js";const T=b(e({__name:"index",setup(e){let b=!1;const T=a(60),_=a(null),I=a(""),V=a(""),S=a(""),P=a(""),U=a(!1),x=a(0),F=a(!!C),L=async()=>{if(!b)if(/^1[3456789]\d{9}$/.test(S.value))try{_.value&&clearInterval(_.value),b=!0,T.value=60,_.value=setInterval((()=>{T.value--,T.value<=0&&(clearInterval(_.value),T.value=60,b=!1,_.value=null)}),1e3);const e=await uni.request({url:`https://a1.easemob.com/inside/app/sms/send/${S.value}`,header:{"content-type":"application/json"},method:"POST",data:{phoneNumber:S.value}});200===e.statusCode?uni.showToast({title:y("getCodeSuccess"),icon:"none"}):400===e.statusCode?j(e.data.errorInfo):uni.showToast({title:y("getCodeFailed"),icon:"none"})}catch(e){console.error(e),uni.showToast({title:y("getCodeFailed"),icon:"none"})}else uni.showToast({title:y("telNumberError"),icon:"none"})},j=e=>{const a={"phone number illegal":y("telNumberError"),"Please wait a moment while trying to send.":y("getCodeFrequent"),"exceed the limit":y("getCodeReachLimit")}[e]||e;uni.showToast({title:a,icon:"none"})},E=()=>{U.value?F.value?(uni.showLoading({title:y("loginLoadingTitle")}),uni.$UIKit.chatStore.login({user:I.value,pwd:V.value}).then((e=>{uni.setStorage({key:k,data:{userId:I.value,token:e.accessToken}}),uni.switchTab({url:"/ChatUIKit/modules/Conversation/index"})})).catch((e=>{var a,o;uni.showToast({title:null==(o=null==(a=null==e?void 0:e.data)?void 0:a.data)?void 0:o.error_description,icon:"none"})})).finally((()=>{uni.hideLoading()}))):(async()=>{uni.showLoading({title:y("loginLoadingTitle")});try{const e=await uni.request({url:"https://a1.easemob.com/inside/app/user/login/V2",header:{"content-type":"application/json"},method:"POST",data:{phoneNumber:S.value,smsCode:P.value}});if(200==e.statusCode){const{token:a,chatUserName:o}=e.data;uni.$UIKit.chatStore.login({user:o,accessToken:a}).then((e=>{uni.setStorage({key:k,data:{userId:o,token:e.accessToken}}),uni.switchTab({url:"/ChatUIKit/modules/Conversation/index"})})).finally((()=>{uni.hideLoading()}))}else if(400==e.statusCode&&e.data.errorInfo)switch(e.data.errorInfo){case"UserId password error.":uni.showToast({title:y("userIdOrPasswordError"),icon:"none"});break;case"phone number illegal":uni.showToast({title:y("telNumberError"),icon:"none"});break;case"SMS verification code error.":uni.showToast({title:y("codeError"),icon:"none"});break;case"Sms code cannot be empty":uni.showToast({title:y("codeIsEmpty"),icon:"none"});break;case"Please send SMS to get mobile phone verification code.":uni.showToast({title:y("getCodeFirst"),icon:"none"});break;default:uni.showToast({title:e.data.errorInfo,icon:"none"})}}catch(e){uni.showToast({title:y("loginFailed"),icon:"none"})}})():uni.showToast({title:y("privacyChecked"),icon:"none"})},N=()=>{window.open("https://www.easemob.com/terms")},B=e=>{U.value=!!e.detail.value[0]},K=()=>{uni.navigateTo({url:"../ServerConfig/index"})};return o((()=>{_.value&&clearInterval(_.value)})),(e,a)=>{const o=p,k=h,b=v,_=m,j=g,$=f,q=w;return l(),t(k,{class:"login-wrap"},{default:n((()=>[s(k,{class:"login-header"},{default:n((()=>[s(o,{class:"login-title"},{default:n((()=>[i("登录环信IM")])),_:1}),s(k,{class:"version",onClick:a[0]||(a[0]=e=>x.value++)},{default:n((()=>[i("V1.0.0")])),_:1})])),_:1}),F.value?(l(),t(k,{key:0,class:"login-form-warp"},{default:n((()=>[s(k,{class:"input-wrap"},{default:n((()=>[s(b,{class:"input",modelValue:I.value,"onUpdate:modelValue":a[1]||(a[1]=e=>I.value=e),placeholder:r(y)("loginUserIdPlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),s(k,{class:"input-wrap"},{default:n((()=>[s(b,{class:"input",type:"password",modelValue:V.value,"onUpdate:modelValue":a[2]||(a[2]=e=>V.value=e),placeholder:r(y)("loginPasswordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})):(l(),t(k,{key:1,class:"login-form-wrap"},{default:n((()=>[s(k,{class:"input-wrap"},{default:n((()=>[s(b,{class:"input",modelValue:S.value,"onUpdate:modelValue":a[3]||(a[3]=e=>S.value=e),type:"number",maxlength:"11",placeholder:r(y)("loginPhoneIdPlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),s(k,{class:"input-wrap"},{default:n((()=>[s(b,{class:"input",modelValue:P.value,"onUpdate:modelValue":a[4]||(a[4]=e=>P.value=e),type:"number",maxlength:"6",placeholder:r(y)("loginCodePlaceholder")},null,8,["modelValue","placeholder"]),s(o,{size:"mini",type:"primary",class:"get-code",onClick:L},{default:n((()=>[i(u(60===T.value?r(y)("getCode"):T.value),1)])),_:1})])),_:1})])),_:1})),s(_,{class:"login-btn",type:"primary",onClick:E},{default:n((()=>[i(u(r(y)("login")),1)])),_:1}),s(k,{class:"private-wrap"},{default:n((()=>[s(q,{onChange:B},{default:n((()=>[s($,{class:"label"},{default:n((()=>[s(j,{backgroundColor:"#f9fafa",borderColor:"#ACB4B9",activeBackgroundColor:"#009DFF",activeBorderColor:"#009DFF",style:{transform:"scale(0.8)"},iconColor:"#fff",value:"true",checked:U.value},null,8,["checked"]),i(" "+u(r(y)("agreeTo"))+" ",1),d("a",{class:"privacy",onClick:N},"《"+u(r(y)("privacyPolicy"))+"》",1)])),_:1})])),_:1})])),_:1}),x.value>5||r(C)?(l(),t(k,{key:2,class:"server-config",onClick:K},{default:n((()=>[i(u(r(y)("serverConfig")),1)])),_:1})):c("",!0)])),_:1})}}}),[["__scopeId","data-v-f60d0b3e"]]);export{T as default};
