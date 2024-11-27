import{d as e,r as a,o,c as l,w as n,a as t,b as s,u as i,t as r,e as u,f as d,i as c,g as h,I as p,h as v,j as m,k as f,l as g,m as w,C as T}from"./index-USJ8ZV9j.js";import{t as C}from"./locales.BEWoqkcc.js";import{_ as I}from"./_plugin-vue_export-helper.BCo6x5W8.js";const k=I(e({__name:"index",setup(e){let I=!1;const k=a(60),y=a(""),b=a(""),_=a(""),P=a(""),V=a(!1),S=a(0),U=a(!!w),x=()=>{I=!0;const e=setInterval((()=>{k.value--,k.value<=0&&(clearInterval(e),k.value=60,I=!1)}),1e3)},F=async()=>{if(!I){if(!/^1[3456789]\d{9}$/.test(_.value))return uni.showToast({title:C("telNumberError"),icon:"none"}),!1;try{x();const e=await uni.request({url:`https://a1.easemob.com/inside/app/sms/send/${_.value}`,header:{"content-type":"application/json"},method:"POST",data:{phoneNumber:_.value}});200==e.statusCode?(x(),uni.showToast({title:C("getCodeSuccess"),icon:"none"})):400==e.statusCode&&("phone number illegal"==e.data.errorInfo?uni.showToast({title:C("telNumberError"),icon:"none"}):"Please wait a moment while trying to send."==e.data.errorInfo?uni.showToast({title:C("getCodeFrequent"),icon:"none"}):e.data.errorInfo.includes("exceed the limit")?uni.showToast({title:C("getCodeReachLimit"),icon:"none"}):uni.showToast({title:e.data.errorInfo,icon:"none"}))}catch(e){uni.showToast({title:C("getCodeFailed"),icon:"none"})}}},L=()=>{if(V.value)if(U.value){if(""===y.value)return void uni.showToast({title:C("loginUserIdPlaceholder"),icon:"none"});uni.showLoading({title:C("loginLoadingTitle")}),uni.$UIKIT.chatStore.login({user:y.value,pwd:b.value}).then((e=>{uni.setStorage({key:T,data:{userId:y.value,token:e.accessToken}}),uni.switchTab({url:"/ChatUIKIT/modules/Conversation/index"})})).catch((e=>{var a,o;uni.showToast({title:null==(o=null==(a=null==e?void 0:e.data)?void 0:a.data)?void 0:o.error_description,icon:"none"})})).finally((()=>{uni.hideLoading()}))}else{if(""===_.value)return void uni.showToast({title:C("loginPhoneIdPlaceholder"),icon:"none"});if(""===P.value)return void uni.showToast({title:C("loginCodePlaceholder"),icon:"none"});(async()=>{uni.showLoading({title:C("loginLoadingTitle")});try{const e=await uni.request({url:"https://a1.easemob.com/inside/app/user/login/V2",header:{"content-type":"application/json"},method:"POST",data:{phoneNumber:_.value,smsCode:P.value}});if(200==e.statusCode){const{token:a,chatUserName:o}=e.data;uni.$UIKIT.chatStore.login({user:o,accessToken:a}).then((e=>{uni.setStorage({key:T,data:{userId:o,token:e.accessToken}}),uni.switchTab({url:"/ChatUIKIT/modules/Conversation/index"})})).finally((()=>{uni.hideLoading()}))}else if(400==e.statusCode&&e.data.errorInfo)switch(e.data.errorInfo){case"UserId password error.":uni.showToast({title:C("userIdOrPasswordError"),icon:"none"});break;case"phone number illegal":uni.showToast({title:C("telNumberError"),icon:"none"});break;case"SMS verification code error.":uni.showToast({title:C("codeError"),icon:"none"});break;case"Sms code cannot be empty":uni.showToast({title:C("codeIsEmpty"),icon:"none"});break;case"Please send SMS to get mobile phone verification code.":uni.showToast({title:C("getCodeFirst"),icon:"none"});break;default:uni.showToast({title:e.data.errorInfo,icon:"none"})}}catch(e){console.log(e),uni.showToast({title:C("loginFailed"),icon:"none"})}})()}else uni.showToast({title:C("privacyChecked"),icon:"none"})},j=()=>{window.open("https://www.easemob.com/terms")},E=e=>{V.value=!!e.detail.value[0]},N=()=>{uni.navigateTo({url:"../ServerConfig/index"})};return(e,a)=>{const T=c,I=h,x=p,B=v,K=m,$=f,q=g;return o(),l(I,{class:"login-wrap"},{default:n((()=>[t(I,{class:"login-header"},{default:n((()=>[t(T,{class:"login-title"},{default:n((()=>[s("登录环信IM")])),_:1}),t(I,{class:"version",onClick:a[0]||(a[0]=e=>S.value++)},{default:n((()=>[s("V1.0.0")])),_:1})])),_:1}),U.value?(o(),l(I,{key:0,class:"login-form-warp"},{default:n((()=>[t(I,{class:"input-wrap"},{default:n((()=>[t(x,{class:"input",modelValue:y.value,"onUpdate:modelValue":a[1]||(a[1]=e=>y.value=e),placeholder:i(C)("loginUserIdPlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),t(I,{class:"input-wrap"},{default:n((()=>[t(x,{class:"input",type:"password",modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=e=>b.value=e),placeholder:i(C)("loginPasswordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})):(o(),l(I,{key:1,class:"login-form-wrap"},{default:n((()=>[t(I,{class:"input-wrap"},{default:n((()=>[t(x,{class:"input",modelValue:_.value,"onUpdate:modelValue":a[3]||(a[3]=e=>_.value=e),maxlength:"11",placeholder:i(C)("loginPhoneIdPlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),t(I,{class:"input-wrap"},{default:n((()=>[t(x,{class:"input",modelValue:P.value,"onUpdate:modelValue":a[4]||(a[4]=e=>P.value=e),maxlength:"6",placeholder:i(C)("loginCodePlaceholder")},null,8,["modelValue","placeholder"]),t(T,{size:"mini",type:"primary",class:"get-code",onClick:F},{default:n((()=>[s(r(60===k.value?i(C)("getCode"):k.value),1)])),_:1})])),_:1})])),_:1})),t(B,{class:"login-btn",type:"primary",onClick:L},{default:n((()=>[s(r(i(C)("login")),1)])),_:1}),t(I,{class:"private-wrap"},{default:n((()=>[t(q,{onChange:E},{default:n((()=>[t($,{class:"label"},{default:n((()=>[t(K,{backgroundColor:"#f9fafa",borderColor:"#ACB4B9",activeBackgroundColor:"#009DFF",activeBorderColor:"#009DFF",style:{transform:"scale(0.8)"},iconColor:"#fff",value:"true",checked:V.value},null,8,["checked"]),s(" "+r(i(C)("agreeTo"))+" ",1),u("a",{class:"privacy",onClick:j},"《"+r(i(C)("privacyPolicy"))+"》",1)])),_:1})])),_:1})])),_:1}),S.value>5||i(w)?(o(),l(I,{key:2,class:"server-config",onClick:N},{default:n((()=>[s(r(i(C)("serverConfig")),1)])),_:1})):d("",!0)])),_:1})}}}),[["__scopeId","data-v-46957f5b"]]);export{k as default};