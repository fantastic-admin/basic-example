
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{Ft as e,Xt as t,b as n,j as r,kt as i}from"./vue.runtime.esm-bundler-CGoWWSM3.js";function a(n){let i=r(),a=i?.type.emits,o={};return a?.length||console.warn(`No emitted event found. Please check component: ${i?.type.__name}`),a?.forEach(r=>{o[t(e(r))]=(...e)=>n(r,...e)}),o}function o(t){let a=r(),o=Object.keys(a?.type.props??{}).reduce((e,t)=>{let n=(a?.type.props[t]).default;return n!==void 0&&(e[t]=n),e},{}),s=i(t);return n(()=>{let t={},n=a?.vnode.props??{};return Object.keys(n).forEach(r=>{t[e(r)]=n[r]}),Object.keys({...o,...t}).reduce((e,t)=>(s.value[t]!==void 0&&(e[t]=s.value[t]),e),{})})}function s(e,t){let r=o(e),i=t?a(t):{};return n(()=>({...r.value,...i}))}export{o as n,a as r,s as t};