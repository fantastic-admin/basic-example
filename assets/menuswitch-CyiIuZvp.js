
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,d as i,mt as a,pt as o,w as s,x as c}from"./vue.runtime.esm-bundler-Bt9XxMFS.js";import{G as l,K as u,M as d,b as f,y as p}from"./components-C8hqFq5O.js";import{t as m}from"./settings-D3htap4A.js";import{i as h}from"./auth-CZ-C9XwN.js";import{t as g}from"./menu-BoIUBfOQ.js";var _=e({__name:`menuswitch`,setup(e){let _=m(),v=h(),y=g();function b(){y.switchTo(v.actived-1>=0?v.actived-1:v.allMenus.length-1)}function x(){y.switchTo(v.actived+1<v.allMenus.length?v.actived+1:0)}return(e,m)=>{let h=f,g=d,v=l,y=u,S=p;return r(),s(`div`,null,[n(h,{title:`导航切换`,description:`可切换并激活指定的导航`}),n(S,{"main-class":`space-y-2`},{default:o(()=>[a(c(`p`,null,` 该特性只有在导航模式为 side 和 head 时生效。 `,512),[[i,![`side`,`head`].includes(t(_).settings.menu.mode)]]),n(y,null,{default:o(()=>[n(v,{variant:`outline`,disabled:![`side`,`head`].includes(t(_).settings.menu.mode),onClick:b},{default:o(()=>[n(g,{name:`i-mdi:arrow-left`})]),_:1},8,[`disabled`]),n(v,{variant:`outline`,disabled:![`side`,`head`].includes(t(_).settings.menu.mode),onClick:x},{default:o(()=>[n(g,{name:`i-mdi:arrow-right`})]),_:1},8,[`disabled`])]),_:1})]),_:1})])}}});export{_ as default};