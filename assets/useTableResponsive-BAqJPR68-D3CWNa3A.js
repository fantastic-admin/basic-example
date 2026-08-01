
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{C as e}from"./reactivity.esm-bundler-D9OPVc9J.js";import{Ht as t,it as n,tt as r}from"./runtime-core.esm-bundler-D-xeQwTN.js";function i(i,a){let o=e(!1),s=null;function c(){s&&(s=(s.disconnect(),null))}async function l(){c(),await r();let e=i.value;e&&(s=new ResizeObserver(e=>{let t=e[0].contentRect.width;o.value=t<a.value}),s.observe(e))}return t([i,a],()=>{l()},{immediate:!0}),n(c),{isResponsive:o,start:l,stop:c}}export{i as t};