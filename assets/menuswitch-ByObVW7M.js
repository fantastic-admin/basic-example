
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,O as t,Pt as n,Y as r,d as i,mt as a,pt as o,w as s,x as c}from"./vue.runtime.esm-bundler-NA8UCC27.js";import{M as l,N as u,_ as d,vt as f}from"./src-C-5f1Hx7.js";import{t as p}from"./settings-Bs6ZpUIU.js";import{t as m}from"./page-header-CFwAs_0E.js";import{l as h,t as g}from"./index-CfymFsM4.js";var _=e({__name:`menuswitch`,setup(e){let _=p(),v=h(),y=g();function b(){y.switchTo(v.actived-1>=0?v.actived-1:v.allMenus.length-1)}function x(){y.switchTo(v.actived+1<v.allMenus.length?v.actived+1:0)}return(e,p)=>{let h=m,g=f,v=l,y=u,S=d;return r(),s(`div`,null,[t(h,{title:`导航切换`,description:`可切换并激活指定的导航`}),t(S,{"main-class":`space-y-2`},{default:o(()=>[a(c(`p`,null,` 该特性只有在导航模式为 side 和 head 时生效。 `,512),[[i,![`side`,`head`].includes(n(_).settings.menu.mode)]]),t(y,null,{default:o(()=>[t(v,{variant:`outline`,disabled:![`side`,`head`].includes(n(_).settings.menu.mode),onClick:b},{default:o(()=>[t(g,{name:`i-mdi:arrow-left`})]),_:1},8,[`disabled`]),t(v,{variant:`outline`,disabled:![`side`,`head`].includes(n(_).settings.menu.mode),onClick:x},{default:o(()=>[t(g,{name:`i-mdi:arrow-right`})]),_:1},8,[`disabled`])]),_:1})]),_:1})])}}});export{_ as default};