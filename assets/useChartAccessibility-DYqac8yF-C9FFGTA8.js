
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{C as e}from"./reactivity.esm-bundler-FDy8qlA8.js";import{ct as t,tt as n}from"./runtime-core.esm-bundler-BtSTcd4U.js";function r({config:r}){let i=e(null),a=r?.text||`Chart visualization`,o=r?.subtitle?.text||``;return t(()=>{n(()=>{i.value&&(i.value.setAttribute(`aria-label`,`${a}${o?`. ${o}`:``}`),i.value.setAttribute(`role`,`img`),i.value.setAttribute(`aria-live`,`polite`))})}),{svgRef:i}}export{r as t};