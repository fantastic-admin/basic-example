
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,p as m,C as _,a as f,o as p,k as g,e as n,w as s,b as k,f as w,g as x,R as B,Q as C,x as o}from"./index-B6Nq-W-n.js";import{u as S}from"./useMenu-WWlADMgL.js";const b=r({__name:"menuswitch",setup(h){const a=m(),t=_(),i=S();function u(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(v,e)=>{const c=B,l=f("ElButton"),d=C;return p(),g("div",null,[n(c,{title:"主导航切换",content:"可切换并激活指定的主导航"}),n(d,null,{default:s(()=>[e[1]||(e[1]=k("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(l,{disabled:!["side","head"].includes(w(a).settings.menu.mode),onClick:u},{default:s(()=>e[0]||(e[0]=[x(" 切换下一个 ")])),_:1},8,["disabled"])]),_:1})])}}});typeof o=="function"&&o(b);export{b as default};
