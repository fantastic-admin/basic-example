
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,p as l,s as d,o as p,j as h,f as _,b as f,e as x,D as w}from"./index-bXAjDhuN.js";function g(i){function e(){if(!document.startViewTransition||window.matchMedia("(prefers-reduced-motion: reduce)").matches){i();return}return document.startViewTransition(async()=>{await Promise.resolve(i())})}return{startViewTransition:e}}const C=u({name:"ColorScheme",__name:"index",setup(i){const e=l();function c(r){var n;const{startViewTransition:a}=g(()=>{e.currentColorScheme&&e.setColorScheme(e.currentColorScheme==="dark"?"light":"dark")});(n=a())==null||n.ready.then(()=>{const t=r.clientX,o=r.clientY,m=Math.hypot(Math.max(t,innerWidth-t),Math.max(o,innerHeight-o)),s=[`circle(0px at ${t}px ${o}px)`,`circle(${m}px at ${t}px ${o}px)`];document.documentElement.animate({clipPath:e.settings.app.colorScheme!=="dark"?s:s.reverse()},{duration:300,easing:"ease-out",pseudoElement:e.settings.app.colorScheme!=="dark"?"::view-transition-new(root)":"::view-transition-old(root)"})})}return(r,a)=>{const n=w,t=h;return p(),d(t,{variant:"ghost",size:"icon",onClick:c},{default:_(()=>[f(n,{name:{light:"i-ri:sun-line",dark:"i-ri:moon-line"}[x(e).currentColorScheme],class:"size-4"},null,8,["name"])]),_:1})}}});export{C as _};
