
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{Dt as e,M as t,N as n,_ as r}from"./src-CkTbfofe.js";import{B as i}from"./reactivity.esm-bundler-FDy8qlA8.js";import{D as a,Yt as o,_ as s,b as c,k as l,mt as u,qt as d}from"./runtime-core.esm-bundler-BtSTcd4U.js";import{S as f}from"./runtime-dom.esm-bundler-pbakosoZ.js";import{t as p}from"./settings-BfD1E6R2.js";import{t as m}from"./page-header-BW5PDU80.js";import{l as h,t as g}from"./index-CqoM1Z8x.js";var _=l({__name:`menuswitch`,setup(l){let _=p(),v=h(),y=g();function b(){y.switchTo(v.actived-1>=0?v.actived-1:v.allMenus.length-1)}function x(){y.switchTo(v.actived+1<v.allMenus.length?v.actived+1:0)}return(l,p)=>{let h=m,g=e,v=t,y=n,S=r;return u(),c(`div`,null,[a(h,{title:`导航切换`,description:`可切换并激活指定的导航`}),a(S,{"main-class":`space-y-2`},{default:d(()=>[o(s(`p`,null,` 该特性只有在导航模式为 side 和 head 时生效。 `,512),[[f,![`side`,`head`].includes(i(_).settings.menu.mode)]]),a(y,null,{default:d(()=>[a(v,{variant:`outline`,disabled:![`side`,`head`].includes(i(_).settings.menu.mode),onClick:b},{default:d(()=>[a(g,{name:`i-mdi:arrow-left`})]),_:1},8,[`disabled`]),a(v,{variant:`outline`,disabled:![`side`,`head`].includes(i(_).settings.menu.mode),onClick:x},{default:d(()=>[a(g,{name:`i-mdi:arrow-right`})]),_:1},8,[`disabled`])]),_:1})]),_:1})])}}});export{_ as default};