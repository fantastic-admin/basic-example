
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pdf-CN1aIkJS-Du4xYGfu.js","./index-Bw0OMqcE.js","./index-OhWpGyNh.css","./dom-to-png-DT4oXcWc-BxdZdFXa.js","./vue-data-ui-WgLCaB4C.js","./alert-vD1KFDPA.js","./vue-data-ui-cP0gLRTs.css","./img-DFfoLjtb-QHk481Iy.js"])))=>i.map(i=>d[i]);
import{r as l,bZ as s}from"./index-Bw0OMqcE.js";function g({elementId:i,fileName:u,canPrint:t=!0,options:m}){const a=l(!1),n=l(!1),r=l(null);async function c(){!t||a.value||(a.value=!0,clearTimeout(r.value),r.value=setTimeout(async()=>{if(t)try{const{default:e}=await s(async()=>{const{default:o}=await import("./pdf-CN1aIkJS-Du4xYGfu.js");return{default:o}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);await e({domElement:document.getElementById(i),fileName:u,options:m})}catch(e){console.error("Error generating PDF:",e)}finally{a.value=!1}},100))}async function f(){!t||n.value||(n.value=!0,clearTimeout(r.value),r.value=setTimeout(async()=>{if(t)try{const{default:e}=await s(async()=>{const{default:o}=await import("./img-DFfoLjtb-QHk481Iy.js");return{default:o}},__vite__mapDeps([7,3,4,1,2,5,6]),import.meta.url);await e({domElement:document.getElementById(i),fileName:u,format:"png",options:m})}catch(e){console.error("Error generating image:",e)}finally{n.value=!1}},100))}return{generatePdf:c,generateImage:f,isPrinting:a,isImaging:n}}export{g as m};
