
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{e as u,K as l,av as f,a9 as v}from"./index-DXZKKOp8.js";function w(t,s){const a=u(!1);let e=null;function n(){e&&(e.disconnect(),e=null)}async function o(){n(),await v();const c=t.value;c&&(e=new ResizeObserver(i=>{const r=i[0].contentRect.width;a.value=r<s.value}),e.observe(c))}return l([t,s],()=>{o()},{immediate:!0}),f(n),{isResponsive:a,start:o,stop:n}}export{w};
