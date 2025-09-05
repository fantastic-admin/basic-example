
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pdf-C3oUFnDY-BE0ruLN4.js","./index-Dig-V6Oq.js","./index-B1mBIt1w.css","./dom-to-png-DM5T2n-Q-BQCAOxJ9.js","./vue-data-ui-Cv_lAvHn.js","./alert-DtMhWjSs.js","./vue-data-ui-CEADRRmI.css","./img-CI1LZKFN-DHUx6Fmh.js"])))=>i.map(i=>d[i]);
import{e as l,b$ as s}from"./index-Dig-V6Oq.js";function g({elementId:i,fileName:u,canPrint:t=!0,options:m}){const a=l(!1),n=l(!1),r=l(null);async function c(){!t||a.value||(a.value=!0,clearTimeout(r.value),r.value=setTimeout(async()=>{if(t)try{const{default:e}=await s(async()=>{const{default:o}=await import("./pdf-C3oUFnDY-BE0ruLN4.js");return{default:o}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);await e({domElement:document.getElementById(i),fileName:u,options:m})}catch(e){console.error("Error generating PDF:",e)}finally{a.value=!1}},100))}async function f(){!t||n.value||(n.value=!0,clearTimeout(r.value),r.value=setTimeout(async()=>{if(t)try{const{default:e}=await s(async()=>{const{default:o}=await import("./img-CI1LZKFN-DHUx6Fmh.js");return{default:o}},__vite__mapDeps([7,3,4,1,2,5,6]),import.meta.url);await e({domElement:document.getElementById(i),fileName:u,format:"png",options:m})}catch(e){console.error("Error generating image:",e)}finally{n.value=!1}},100))}return{generatePdf:c,generateImage:f,isPrinting:a,isImaging:n}}export{g as m};
