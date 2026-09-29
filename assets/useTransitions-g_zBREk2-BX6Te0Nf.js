
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{C as e,m as t}from"./reactivity.esm-bundler-FDy8qlA8.js";import{Ht as n,ct as r,ft as i,g as a}from"./runtime-core.esm-bundler-BtSTcd4U.js";function o(e){return typeof e==`function`?e():t(e)?e.value:e}function s({config:t,dataset:s}){let c=a(()=>o(t)??{}),l=a(()=>o(s)),u=e(!!c.value.enable),d=null,f=null;function p(){d!==null&&(clearTimeout(d),d=null)}function m(){p();let e=c.value,t=!!e.enable,n=Number(e.activationDelayMs)||0;if(!t||n<=0){u.value=t;return}u.value=!1,d=setTimeout(()=>{u.value=!!c.value.enable,d=null},n)}function h(e){f?.(),f=null,e&&(f=n(l,m,{deep:!0}))}return n(()=>c.value.pauseOnDatasetChange,h,{immediate:!0}),n(()=>c.value.enable,e=>{p(),u.value=!!e}),n(()=>c.value.activationDelayMs,()=>{d!==null&&m()}),r(()=>{c.value.pauseOnLoad&&m()}),i(()=>{p(),f?.()}),{transitionEnabled:u,pause:m}}export{s as t};