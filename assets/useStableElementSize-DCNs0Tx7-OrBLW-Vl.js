
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{e as m,av as N,aa as O}from"./index-Dkrni94Y.js";function S(i,u){return Number.isFinite(i)&&Number.isFinite(u)}function y(i,u){return i.width===u.width&&i.height===u.height}function M({elementRef:i,minimumWidth:u=2,minimumHeight:p=2,stableFramesRequired:A=2,once:c=!1,onSizeAccepted:d}){const g=m(0),w=m(0),o=m(!1);let n=null,a=0,h={width:0,height:0},r=0,l=!1;function v(){a&&(cancelAnimationFrame(a),a=0)}function R(e,t){return!(!S(e,t)||e<u||t<p)}function f(){v(),n&&(n.disconnect(),n=null)}function q(e,t){g.value=e,w.value=t,o.value=!0,typeof d=="function"&&d({width:e,height:t}),l=!0,c&&f()}function x(e,t){if(c&&l)return;if(!R(e,t)){o.value=!1,r=0,h={width:0,height:0};return}const s={width:e,height:t};y(s,h)?r+=1:(r=1,h=s),r>=A&&q(e,t)}function b(){const e=i.value;if(!e){o.value=!1;return}const t=e.getBoundingClientRect();x(Math.round(t.width),Math.round(t.height))}function F(e=2){v();let t=e;const s=()=>{b(),t-=1,t>0?a=requestAnimationFrame(s):a=0};a=requestAnimationFrame(s)}async function z(){await O(),F(2);const e=i.value;e&&(n&&(n.disconnect(),n=null),n=new ResizeObserver(()=>{c&&l||(o.value=!1,r=0,F(2))}),n.observe(e))}return N(f),{width:g,height:w,isStable:o,start:z,stop:f,measureOnce:b}}export{M as I};
