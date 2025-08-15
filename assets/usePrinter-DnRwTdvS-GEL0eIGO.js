
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pdf-BcZrdj8V-CuDrba_k.js","./index-BSY0Q56E.js","./index-eGMza5b4.css","./dom-to-png-JfgMQjN--DbXpkr4p.js","./vue-data-ui-XQvm_75D.js","./alert-CYpOL1uD.js","./vue-data-ui-TGLGYGDu.css","./img-D-vWHxhM-Bje6Jztd.js"])))=>i.map(i=>d[i]);
import{r as l,b$ as s}from"./index-BSY0Q56E.js";function g({elementId:i,fileName:u,canPrint:t=!0,options:m}){const a=l(!1),n=l(!1),r=l(null);async function c(){!t||a.value||(a.value=!0,clearTimeout(r.value),r.value=setTimeout(async()=>{if(t)try{const{default:e}=await s(async()=>{const{default:o}=await import("./pdf-BcZrdj8V-CuDrba_k.js");return{default:o}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);await e({domElement:document.getElementById(i),fileName:u,options:m})}catch(e){console.error("Error generating PDF:",e)}finally{a.value=!1}},100))}async function f(){!t||n.value||(n.value=!0,clearTimeout(r.value),r.value=setTimeout(async()=>{if(t)try{const{default:e}=await s(async()=>{const{default:o}=await import("./img-D-vWHxhM-Bje6Jztd.js");return{default:o}},__vite__mapDeps([7,3,4,1,2,5,6]),import.meta.url);await e({domElement:document.getElementById(i),fileName:u,format:"png",options:m})}catch(e){console.error("Error generating image:",e)}finally{n.value=!1}},100))}return{generatePdf:c,generateImage:f,isPrinting:a,isImaging:n}}export{g as m};
