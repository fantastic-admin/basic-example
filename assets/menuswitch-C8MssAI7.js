
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,q as m,B as _,a as f,o as p,j as g,e as n,w as s,b as B,u as v,f as w,Q as S,P as b,v as o}from"./index-BB8nNV-H.js";import{u as h}from"./useMenu-C857kOe5.js";const k=r({__name:"menuswitch",setup(x){const a=m(),t=_(),i=h();function u(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(C,e)=>{const c=S,l=f("ElButton"),d=b;return p(),g("div",null,[n(c,{title:"主导航切换",content:"可切换并激活指定的主导航"}),n(d,null,{default:s(()=>[e[1]||(e[1]=B("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(l,{disabled:!["side","head"].includes(v(a).settings.menu.mode),onClick:u},{default:s(()=>e[0]||(e[0]=[w(" 切换下一个 ")])),_:1},8,["disabled"])]),_:1})])}}});typeof o=="function"&&o(k);export{k as default};
