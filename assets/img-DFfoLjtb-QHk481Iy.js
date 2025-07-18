
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{k as n}from"./dom-to-png-DT4oXcWc-BxdZdFXa.js";import"./vue-data-ui-WgLCaB4C.js";import"./index-Bw0OMqcE.js";import"./alert-vD1KFDPA.js";async function f({domElement:o,fileName:c,format:i="png",scale:t=2,base64:a=!1}){if(!o)return Promise.reject("No element provided");if(a)try{return n({container:o,scale:t,base64:a}).then(e=>e)}catch(e){console.error("Error generating the base64 string of the chart",e)}else try{const e=await n({container:o,scale:t}),r=document.createElement("a");r.href=e,r.download=`${c}.${i}`,document.body.appendChild(r),r.click(),document.body.removeChild(r)}catch(e){throw console.error("Error generating image:",e),e}}export{f as default};
