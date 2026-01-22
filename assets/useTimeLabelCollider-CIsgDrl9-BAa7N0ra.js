
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{K as B,aa as z}from"./index-CJB5jCfL.js";function P({timeLabelsEls:k,timeLabels:L,slicer:h,configRef:n,rotationPath:r,autoRotatePath:d,isAutoSize:R,setViewBox:x,forceResizeObserver:w,callback:u,targetClass:S=".vue-data-ui-time-label",rotation:g=-30.0001,height:b=null,width:y=null}){function o(a,e){return e.reduce((t,l)=>t&&t[l],a)}function p(a,e,t){e.slice(0,-1).reduce((l,c)=>l[c],a)[e.slice(-1)]=t}function T(a){const e=/translate\(\s*([^\s,]+)\s*,\s*([^\s,]+)\s*\)/.exec(a);return e?{x:parseFloat(e[1]),y:parseFloat(e[2])}:{x:0,y:0}}async function s(){await z();const a=k.value;if(!a)return;const e=Array.from(a.querySelectorAll(S)).map(i=>({...T(i.getAttribute("transform")),width:i.getBBox().width}));let t=!1;const l=4;for(let i=0;i<e.length&&!t;i+=1)for(let f=i+1;f<e.length;f+=1){const v=e[i],m=e[f];if(!(v.x+v.width+l<m.x||m.x+m.width+l<v.x)){t=!0;break}}const c=o(n.value,r);t&&!c?(p(n.value,r,g),u&&u({collision:t}),R.value&&x&&w&&(x(),w())):!t&&c===g&&(p(n.value,r,0),u&&u({collision:t}))}function q(a,e){let t;return(...l)=>{clearTimeout(t),t=setTimeout(()=>a(...l),e)}}const A=q(s,200);return b&&y&&B([()=>y.value,()=>b.value],async([a,e],[t,l])=>{o(n.value,d)&&(a!==t||e!==l?A():await s())}),B([()=>L.value,()=>o(n.value,r),()=>h.value.start,()=>h.value.end],async([,,a,e],[,,t,l])=>{o(n.value,d)&&(a!==t||e!==l?A():await s())},{immediate:!0}),{detectTimeLabelCollision:s}}export{P as S};
