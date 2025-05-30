
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as l,s as u,x as d,o as h,j as p,f as _,b as x,D as f,e as w}from"./index-lc5eLyOy.js";function g(i){function e(){if(!document.startViewTransition||window.matchMedia("(prefers-reduced-motion: reduce)").matches){i();return}return document.startViewTransition(async()=>{await Promise.resolve(i())})}return{startViewTransition:e}}const C=l({name:"ColorScheme",__name:"index",setup(i){const e=u();function c(r){var n;const{startViewTransition:a}=g(()=>{e.currentColorScheme&&e.setColorScheme(e.currentColorScheme==="dark"?"light":"dark")});(n=a())==null||n.ready.then(()=>{const t=r.clientX,o=r.clientY,m=Math.hypot(Math.max(t,innerWidth-t),Math.max(o,innerHeight-o)),s=[`circle(0px at ${t}px ${o}px)`,`circle(${m}px at ${t}px ${o}px)`];document.documentElement.animate({clipPath:e.settings.app.colorScheme!=="dark"?s:s.reverse()},{duration:300,easing:"ease-out",pseudoElement:e.settings.app.colorScheme!=="dark"?"::view-transition-new(root)":"::view-transition-old(root)"})})}return(r,a)=>{const n=f,t=p;return h(),d(t,{variant:"ghost",size:"icon",class:"size-9",onClick:c},{default:_(()=>[x(n,{name:{light:"i-ri:sun-line",dark:"i-ri:moon-line"}[w(e).currentColorScheme],class:"size-4"},null,8,["name"])]),_:1})}}});export{C as _};
