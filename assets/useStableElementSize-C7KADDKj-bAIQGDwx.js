
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,Tt as t,U as n}from"./vue.runtime.esm-bundler-NA8UCC27.js";function r(e,t){return Number.isFinite(e)&&Number.isFinite(t)}function i(e,t){return e.width===t.width&&e.height===t.height}function a({elementRef:a,minimumWidth:o=2,minimumHeight:s=2,stableFramesRequired:c=2,once:l=!1,onSizeAccepted:u}){let d=t(0),f=t(0),p=t(!1),m=null,h=0,g={width:0,height:0},_=0,v=!1;function y(){h&&(h=(cancelAnimationFrame(h),0))}function b(e,t){return!(!r(e,t)||e<o||t<s)}function x(){y(),m&&(m=(m.disconnect(),null))}function S(e,t){d.value=e,f.value=t,p.value=!0,typeof u==`function`&&u({width:e,height:t}),v=!0,l&&x()}function C(e,t){if(l&&v)return;if(!b(e,t)){p.value=!1,_=0,g={width:0,height:0};return}let n={width:e,height:t};i(n,g)?_+=1:(_=1,g=n),_>=c&&S(e,t)}function w(){let e=a.value;if(!e){p.value=!1;return}let t=e.getBoundingClientRect();C(Math.round(t.width),Math.round(t.height))}function T(e=2){y();let t=e,n=()=>{w(),--t,h=t>0?requestAnimationFrame(n):0};h=requestAnimationFrame(n)}async function E(){await e(),T(2);let t=a.value;t&&(m&&(m=(m.disconnect(),null)),m=new ResizeObserver(()=>{l&&v||(p.value=!1,_=0,T(2))}),m.observe(t))}return n(x),{width:d,height:f,isStable:p,start:E,stop:x,measureOnce:w}}export{a as t};