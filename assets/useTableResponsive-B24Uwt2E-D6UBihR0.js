
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,Tt as t,U as n,ut as r}from"./vue.runtime.esm-bundler-NA8UCC27.js";function i(i,a){let o=t(!1),s=null;function c(){s&&(s=(s.disconnect(),null))}async function l(){c(),await e();let t=i.value;t&&(s=new ResizeObserver(e=>{o.value=e[0].contentRect.width<a.value}),s.observe(t))}return r([i,a],()=>{l()},{immediate:!0}),n(c),{isResponsive:o,start:l,stop:c}}export{i as t};