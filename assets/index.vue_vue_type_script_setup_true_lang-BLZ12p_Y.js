
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as p,y as C,z as S,o as f,p as w,h as k,g as x,G as $,u as y,aa as M}from"./index-CJB5jCfL.js";const B=p({name:"ColorScheme",__name:"index",setup(R){const e=C();function l(i){if(!document.startViewTransition||window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.currentColorScheme&&e.setColorScheme(e.currentColorScheme==="dark"?"light":"dark");return}const a=i.target,{left:t,top:n,width:m,height:d}=a.getBoundingClientRect(),o=t+m/2,r=n+d/2,u=Math.hypot(Math.max(o,innerWidth-o),Math.max(r,innerHeight-r)),c=100*o/innerWidth,s=100*r/innerHeight,g=Math.hypot(innerWidth,innerHeight)/Math.SQRT2,_=100*u/g;document.startViewTransition(async()=>{e.currentColorScheme&&e.setColorScheme(e.currentColorScheme==="dark"?"light":"dark"),await M()}).ready.then(()=>{const h=["circle(0% at ".concat(c,"% ").concat(s,"%)"),"circle(".concat(_,"% at ").concat(c,"% ").concat(s,"%)")];document.documentElement.animate({clipPath:e.currentColorScheme==="light"?h:[...h].reverse()},{duration:500,easing:"ease-in-out",fill:"both",pseudoElement:e.currentColorScheme==="light"?"::view-transition-new(root)":"::view-transition-old(root)"})})}return(i,a)=>{const t=$,n=w;return f(),S(n,{variant:"ghost",size:"icon",class:"size-9",onClick:l},{default:k(()=>[x(t,{name:{light:"i-ri:sun-line",dark:"i-ri:moon-line"}[y(e).currentColorScheme],class:"size-4"},null,8,["name"])]),_:1})}}});export{B as _};
