
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{aa as k}from"./index-CJB5jCfL.js";function T({svgRef:f,unitWidth:z,fontSize:N=12,step:b=.5,maxIterations:w=60,hideUnderMin:S=!0}){const u=new WeakMap,p=t=>{if(typeof t=="number")return t;if(!t)return NaN;const i=parseFloat(String(t).replace("px",""));return Number.isFinite(i)?i:NaN},h=t=>{const i=p(t.getAttribute("font-size"));if(Number.isFinite(i))return i;const r=window.getComputedStyle(t);return p(r.fontSize)||N},s=(t,i)=>{t.setAttribute("font-size",String(i))},A=t=>{if(u.has(t))s(t,u.get(t));else{const i=h(t);u.set(t,i),s(t,i)}},d=t=>{try{return t.getBBox().width||0}catch(i){return 0}};return{fitText:async(t,i=6)=>{await k();const r=f==null?void 0:f.value;if(!r)return;const g=r.querySelectorAll(t);if(!g.length)return;const a=Math.max(0,z.value);if(a<=0)return;const o=[];g.forEach(e=>{const c=e.style.display,m=e.style.opacity;e.style.display="",e.style.opacity="0",A(e);let l=d(e),y=h(e),n=y,x=0;if(l<=a)o.push({el:e,finalSize:y,fits:!0});else{for(;l>a&&n>i&&x<w;)n=Math.max(i,n-b),s(e,n),l=d(e),x+=1;const M=l<=a&&n>i;o.push({el:e,finalSize:n,fits:M}),s(e,y)}e.style.display=c,e.style.opacity=m});const F=S&&o.some(e=>!e.fits);o.forEach(({el:e,finalSize:c,fits:m})=>{F?e.style.display="none":(e.style.display="",s(e,c))})}}}export{T as k};
