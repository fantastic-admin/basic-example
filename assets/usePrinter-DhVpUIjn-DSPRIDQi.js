
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pdf-DpU5K64g-BVir0JQa.js","./index-CYGv8gAZ.js","./index-DWKRlSiB.css","./dom-to-png-BIakyQa8-CNlXowh-.js","./vue-data-ui-DrrwkdAa.js","./alert-szVbFbDo.js","./vue-data-ui-CJfP-RDs.css","./img-01ajmdrG-C1pxqBrr.js"])))=>i.map(i=>d[i]);
import{r as l,b_ as s}from"./index-CYGv8gAZ.js";function g({elementId:i,fileName:u,canPrint:t=!0,options:m}){const a=l(!1),n=l(!1),r=l(null);async function c(){!t||a.value||(a.value=!0,clearTimeout(r.value),r.value=setTimeout(async()=>{if(t)try{const{default:e}=await s(async()=>{const{default:o}=await import("./pdf-DpU5K64g-BVir0JQa.js");return{default:o}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);await e({domElement:document.getElementById(i),fileName:u,options:m})}catch(e){console.error("Error generating PDF:",e)}finally{a.value=!1}},100))}async function f(){!t||n.value||(n.value=!0,clearTimeout(r.value),r.value=setTimeout(async()=>{if(t)try{const{default:e}=await s(async()=>{const{default:o}=await import("./img-01ajmdrG-C1pxqBrr.js");return{default:o}},__vite__mapDeps([7,3,4,1,2,5,6]),import.meta.url);await e({domElement:document.getElementById(i),fileName:u,format:"png",options:m})}catch(e){console.error("Error generating image:",e)}finally{n.value=!1}},100))}return{generatePdf:c,generateImage:f,isPrinting:a,isImaging:n}}export{g as m};
