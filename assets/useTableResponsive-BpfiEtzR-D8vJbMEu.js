
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,U as t,ut as n,wt as r}from"./vue.runtime.esm-bundler-Bt9XxMFS.js";function i(i,a){let o=r(!1),s=null;function c(){s&&(s.disconnect(),s=null)}async function l(){c(),await e();let t=i.value;t&&(s=new ResizeObserver(e=>{o.value=e[0].contentRect.width<a.value}),s.observe(t))}return n([i,a],()=>{l()},{immediate:!0}),t(c),{isResponsive:o,start:l,stop:c}}export{i as t};