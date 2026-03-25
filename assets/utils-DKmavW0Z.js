
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{t as e}from"./getActiveElement-BMFXzfhw.js";var t=`menu.itemSelect`,n=[`Enter`,` `],r=[`ArrowDown`,`PageUp`,`Home`],i=[`ArrowUp`,`PageDown`,`End`],a=[...r,...i];[...n],[...n];function o(e){return e?`open`:`closed`}function s(t){let n=e();for(let r of t)if(r===n||(r.focus(),e()!==n))return}function c(e,t){let{x:n,y:r}=e,i=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let o=t[e].x,s=t[e].y,c=t[a].x,l=t[a].y;s>r!=l>r&&n<(c-o)*(r-s)/(l-s)+o&&(i=!i)}return i}function l(e,t){return t?c({x:e.clientX,y:e.clientY},t):!1}function u(e){return e.pointerType===`mouse`}export{s as a,l as c,n as i,t as n,o,i as r,u as s,a as t};