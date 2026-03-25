
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{$ as e,A as t,D as n,Nt as r,O as i,Y as a,pt as o,w as s,x as c}from"./vue.runtime.esm-bundler-CGoWWSM3.js";import{t as l}from"./settings-770US1Ay.js";import{t as u}from"./FaPageMain-BxqvsCDB.js";import{t as d}from"./FaPageHeader-C0sPF5up.js";import{t as f}from"./route-block-DBhJxsjT.js";import{p}from"./index-iSM9h_E1.js";import{t as m}from"./useMenu-icobjMFW.js";var h=t({__name:`menuswitch`,setup(t){let f=l(),h=p(),g=m();function _(){g.switchTo(h.actived-1>=0?h.actived-1:h.allMenus.length-1)}function v(){g.switchTo(h.actived+1<h.allMenus.length?h.actived+1:0)}return(t,l)=>{let p=d,m=e(`ElButton`),h=u;return a(),s(`div`,null,[i(p,{title:`主导航切换`,description:`可切换并激活指定的主导航`}),i(h,null,{default:o(()=>[l[2]||(l[2]=c(`p`,null,`该特性只有在导航模式为 side 和 head 时生效。`,-1)),i(m,{disabled:![`side`,`head`].includes(r(f).settings.menu.mode),onClick:_},{default:o(()=>[...l[0]||(l[0]=[n(` 切换上一个 `,-1)])]),_:1},8,[`disabled`]),i(m,{disabled:![`side`,`head`].includes(r(f).settings.menu.mode),onClick:v},{default:o(()=>[...l[1]||(l[1]=[n(` 切换下一个 `,-1)])]),_:1},8,[`disabled`])]),_:1})])}}});typeof f==`function`&&f(h);var g=h;export{g as default};