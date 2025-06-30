
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,s as _,G as m,l as f,c as p,o as g,b as n,O as h,f as s,a as B,e as S,h as b,N as k,A as o}from"./index-Xdtw-1bo.js";import{u as v}from"./useMenu-D2L-DfTb.js";const w=r({__name:"menuswitch",setup(x){const a=_(),t=m(),i=v();function c(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(C,e)=>{const u=h,l=f("ElButton"),d=k;return g(),p("div",null,[n(u,{title:"主导航切换",description:"可切换并激活指定的主导航"}),n(d,null,{default:s(()=>[e[1]||(e[1]=B("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(l,{disabled:!["side","head"].includes(S(a).settings.menu.mode),onClick:c},{default:s(()=>e[0]||(e[0]=[b(" 切换下一个 ")])),_:1,__:[0]},8,["disabled"])]),_:1,__:[1]})])}}});typeof o=="function"&&o(w);export{w as default};
