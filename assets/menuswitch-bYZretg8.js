
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,p as m,G as p,c as _,b as n,f as s,N as f,o as g,O as h,a as B,l as S,e as b,h as k,A as o}from"./index-CVSqJxGW.js";import{u as v}from"./useMenu-BYP4qX7z.js";const w=r({__name:"menuswitch",setup(x){const a=m(),t=p(),i=v();function c(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(C,e)=>{const u=h,l=S("ElButton"),d=f;return g(),_("div",null,[n(u,{title:"主导航切换",description:"可切换并激活指定的主导航"}),n(d,null,{default:s(()=>[e[1]||(e[1]=B("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(l,{disabled:!["side","head"].includes(b(a).settings.menu.mode),onClick:c},{default:s(()=>e[0]||(e[0]=[k(" 切换下一个 ")])),_:1},8,["disabled"])]),_:1})])}}});typeof o=="function"&&o(w);export{w as default};
