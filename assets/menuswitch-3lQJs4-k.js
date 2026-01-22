
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as p,y as _,I as g,L as h,c as v,o as w,g as n,Q as C,h as s,f as b,u as d,l,P as k,C as u}from"./index-CJB5jCfL.js";import{u as x}from"./useMenu-DCaSrYXP.js";const B=p({__name:"menuswitch",setup(M){const o=_(),e=g(),a=x();function c(){a.switchTo(e.actived-1>=0?e.actived-1:e.allMenus.length-1)}function r(){a.switchTo(e.actived+1<e.allMenus.length?e.actived+1:0)}return(S,t)=>{const m=C,i=h("ElButton"),f=k;return w(),v("div",null,[n(m,{title:"主导航切换",description:"可切换并激活指定的主导航"}),n(f,null,{default:s(()=>[t[2]||(t[2]=b("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(i,{disabled:!["side","head"].includes(d(o).settings.menu.mode),onClick:c},{default:s(()=>[...t[0]||(t[0]=[l(" 切换上一个 ",-1)])]),_:1},8,["disabled"]),n(i,{disabled:!["side","head"].includes(d(o).settings.menu.mode),onClick:r},{default:s(()=>[...t[1]||(t[1]=[l(" 切换下一个 ",-1)])]),_:1},8,["disabled"])]),_:1})])}}});typeof u=="function"&&u(B);export{B as default};
