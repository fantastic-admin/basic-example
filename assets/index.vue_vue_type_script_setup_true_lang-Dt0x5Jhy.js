
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as i,s,x as l,o as m,j as h,f as u,b as d,D as p,e as _,ac as x}from"./index-CG-RNv11.js";const f=i({name:"ColorScheme",__name:"index",setup(C){const e=s();function c(o){if(!document.startViewTransition||window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.currentColorScheme&&e.setColorScheme(e.currentColorScheme==="dark"?"light":"dark");return}const n=o.clientX,t=o.clientY,r=Math.hypot(Math.max(n,innerWidth-n),Math.max(t,innerHeight-t));document.startViewTransition(async()=>{e.currentColorScheme&&e.setColorScheme(e.currentColorScheme==="dark"?"light":"dark"),await x()}).ready.then(()=>{const a=[`circle(0px at ${n}px ${t}px)`,`circle(${r}px at ${n}px ${t}px)`];document.documentElement.animate({clipPath:e.currentColorScheme==="light"?a:a.reverse()},{duration:500,easing:"ease-in-out",pseudoElement:e.currentColorScheme==="light"?"::view-transition-new(root)":"::view-transition-old(root)"})})}return(o,n)=>{const t=p,r=h;return m(),l(r,{variant:"ghost",size:"icon",class:"size-9",onClick:c},{default:u(()=>[d(t,{name:{light:"i-ri:sun-line",dark:"i-ri:moon-line"}[_(e).currentColorScheme],class:"size-4"},null,8,["name"])]),_:1})}}});export{f as _};
