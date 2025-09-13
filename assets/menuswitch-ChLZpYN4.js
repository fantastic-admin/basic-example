
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,y as m,I as _,L as f,c as p,o as g,g as n,Q as h,h as s,f as B,u as C,l as S,P as k,C as o}from"./index-BPTVOGtc.js";import{u as v}from"./useMenu-DsbiDXc0.js";const w=r({__name:"menuswitch",setup(x){const a=m(),t=_(),i=v();function u(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(M,e)=>{const c=h,l=f("ElButton"),d=k;return g(),p("div",null,[n(c,{title:"主导航切换",description:"可切换并激活指定的主导航"}),n(d,null,{default:s(()=>[e[1]||(e[1]=B("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(l,{disabled:!["side","head"].includes(C(a).settings.menu.mode),onClick:u},{default:s(()=>[...e[0]||(e[0]=[S(" 切换下一个 ",-1)])]),_:1},8,["disabled"])]),_:1})])}}});typeof o=="function"&&o(w);export{w as default};
