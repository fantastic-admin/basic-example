
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as D}from"./HDialog.vue_vue_type_script_setup_true_lang-Bp0TAmmH.js";import{a6 as $,a7 as Y,a8 as M,d as h,r as k,z as L,O as c,a9 as b,I,o as A,k as H,b as e,e as r,g as a,w as d,f as w,j as V,J as U,_ as S,A as T,v as j}from"./index-Ruu4zcVF.js";var _={exports:{}},z=_.exports,B;function E(){return B||(B=1,function(f,v){(function(u,l){f.exports=l($())})(z,function(u){function l(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var o=l(u),m={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,n){return n==="W"?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,n){var s=100*t+n;return s<600?"凌晨":s<900?"早上":s<1100?"上午":s<1300?"中午":s<1800?"下午":"晚上"}};return o.default.locale(m,null,!0),m})}(_)),_.exports}E();Y.locale("zh-cn");var x={exports:{}},q=x.exports,C;function N(){return C||(C=1,function(f,v){(function(u,l){f.exports=l()})(q,function(){return function(u,l,o){l.prototype.isBetween=function(m,t,n,s){var p=o(m),i=o(t),y=(s=s||"()")[0]==="(",g=s[1]===")";return(y?this.isAfter(p,n):!this.isBefore(p,n))&&(g?this.isBefore(i,n):!this.isAfter(i,n))||(y?this.isBefore(p,n):!this.isAfter(p,n))&&(g?this.isAfter(i,n):!this.isBefore(i,n))}}})}(x)),x.exports}var R=N();const F=M(R),P={class:"mt-4 flex flex-wrap justify-center gap-4"},Z=h({name:"BuyIt",__name:"index",setup(f){const v=k(!0);setTimeout(()=>{v.value=!1},5e3);const u=k(!1);function l(){u.value=!0}function o(m){window.open(m,"_blank")}return L(()=>{c.on("global-ui-component-switch",()=>l()),Y.extend(F),Y().isBetween("2024-10-17","2024-11-17")&&b({type:"info",title:"「 四周年庆，全年最低价 」",dangerouslyUseHTMLString:!0,message:`
  <p>为庆祝 Fantastic-admin 正式发布四周年，我们在 <b>2024/10/17 - 2024/11/17</b> 期间推出一系列优惠。</p>
  <p style="text-align: right;"><a href="https://fantastic-admin.hurui.me/buy-4yr.html" target="_blank">查看详情</a></p>
      `,position:"bottom-right",duration:0})}),I(()=>{b.closeAll()}),(m,t)=>{const n=S,s=T,p=D;return A(),H("div",{class:U(["buy-it",{actived:w(v)}])},[e("div",{class:"item",onClick:l},[r(n,{name:"i-icon-park-twotone:components"}),t[18]||(t[18]=e("span",{class:"title"},[a("切换"),e("br"),a("组件库")],-1)),r(p,{modelValue:w(u),"onUpdate:modelValue":t[6]||(t[6]=i=>V(u)?u.value=i:null),title:"切换组件库",overlay:""},{default:d(()=>[t[17]||(t[17]=e("div",{class:"rounded-2 bg-green/20 px-4 py-2 text-sm/6 c-green-6"},[e("p",{class:"my-1"}," 为了视觉风格统一，同时也能服务于更多开发者，本框架从 v4.0.0 版本开始，与 Element Plus 组件库进行了解耦，意味着可以轻松将 Element Plus 组件库替换成其他 UI 组件库，并且不会影响框架原本的功能。 "),e("p",{class:"my-1"}," 演示站挑选了以下 6 款组件库作为示例，你可以点击访问并预览。 ")],-1)),e("div",P,[r(s,{onClick:t[0]||(t[0]=i=>o("https://fantastic-admin.hurui.me/antd-example/"))},{default:d(()=>t[11]||(t[11]=[a(" 访问 Ant Design Vue 演示站 ")])),_:1}),r(s,{onClick:t[1]||(t[1]=i=>o("https://fantastic-admin.hurui.me/arco-example/"))},{default:d(()=>t[12]||(t[12]=[a(" 访问 Arco Design Vue 演示站 ")])),_:1}),r(s,{onClick:t[2]||(t[2]=i=>o("https://fantastic-admin.hurui.me/naive-example/"))},{default:d(()=>t[13]||(t[13]=[a(" 访问 Naive UI 演示站 ")])),_:1}),r(s,{onClick:t[3]||(t[3]=i=>o("https://fantastic-admin.hurui.me/tdesign-example/"))},{default:d(()=>t[14]||(t[14]=[a(" 访问 TDesign 演示站 ")])),_:1}),r(s,{onClick:t[4]||(t[4]=i=>o("https://fantastic-admin.hurui.me/vexip-example/"))},{default:d(()=>t[15]||(t[15]=[a(" 访问 Vexip UI 演示站 ")])),_:1}),r(s,{onClick:t[5]||(t[5]=i=>o("https://fantastic-admin.hurui.me/idux-example/"))},{default:d(()=>t[16]||(t[16]=[a(" 访问 iDux 演示站 ")])),_:1})])]),_:1},8,["modelValue"])]),e("div",{class:"item",onClick:t[7]||(t[7]=i=>o("https://fantastic-admin.hurui.me/buy.html"))},[r(n,{name:"i-ri:money-cny-box-line"}),t[19]||(t[19]=e("span",{class:"title"},[a("购买"),e("br"),a("专业版")],-1))]),e("div",{class:"item",onClick:t[8]||(t[8]=i=>o("https://github.com/fantastic-admin/basic"))},[r(n,{name:"i-ri:code-s-slash-line"}),t[20]||(t[20]=e("span",{class:"title"},[a("下载"),e("br"),a("基础版")],-1))]),e("div",{class:"item",onClick:t[9]||(t[9]=i=>o("https://fantastic-admin.hurui.me"))},[r(n,{name:"i-ri:book-read-line"}),t[21]||(t[21]=e("span",{class:"title"},[a("开发"),e("br"),a("文档")],-1))]),e("div",{class:"item",onClick:t[10]||(t[10]=i=>o("https://fantastic-admin.hurui.me/support.html"))},[r(n,{name:"i-ri:message-2-line"}),t[22]||(t[22]=e("span",{class:"title"},[a("技术"),e("br"),a("支持")],-1))])],2)}}}),W=j(Z,[["__scopeId","data-v-f34d80ec"]]);export{W as default};