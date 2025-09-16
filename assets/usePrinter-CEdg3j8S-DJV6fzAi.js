
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pdf-CpQ-dqJh-DQUINpCC.js","./index-Bbax5d9E.js","./index-CFQQXR2x.css","./dom-to-png-CMCYtLrX-BU-2vEOj.js","./vue-data-ui-DOx0ChxV.js","./alert-Ccvg2REh.js","./vue-data-ui-BgguAoUJ.css","./img-Neec0VVb-wH-VK6zB.js"])))=>i.map(i=>d[i]);
import{e as i,b$ as m}from"./index-Bbax5d9E.js";function g({elementId:u,fileName:c,canPrint:n=!0,options:t}){const o=i(!1),r=i(!1),l=i(null);async function s(){!n||o.value||(o.value=!0,clearTimeout(l.value),l.value=setTimeout(async()=>{var e;if(n)try{const{default:a}=await m(async()=>{const{default:d}=await import("./pdf-CpQ-dqJh-DQUINpCC.js");return{default:d}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);await a({domElement:document.getElementById(u),fileName:c,orientation:t.orientation,overflowTolerance:t.overflowTolerance,scale:t.scale,aspectRatio:(e=t.aspectRatio)!=null?e:null})}catch(a){console.error("Error generating PDF:",a)}finally{o.value=!1}},100))}async function f(){!n||r.value||(r.value=!0,clearTimeout(l.value),l.value=setTimeout(async()=>{if(n)try{const{default:e}=await m(async()=>{const{default:a}=await import("./img-Neec0VVb-wH-VK6zB.js");return{default:a}},__vite__mapDeps([7,3,4,1,2,5,6]),import.meta.url);await e({domElement:document.getElementById(u),fileName:c,format:"png",options:t})}catch(e){console.error("Error generating image:",e)}finally{r.value=!1}},100))}return{generatePdf:s,generateImage:f,isPrinting:o,isImaging:r}}export{g as m};
