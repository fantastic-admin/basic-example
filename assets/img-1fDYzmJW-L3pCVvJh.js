
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{B as a}from"./dom-to-png-B1ZOQlt2-BZAa_noU.js";import"./vue-data-ui-C6Vzzhk_.js";import"./index-B4yQzy_K.js";import"./alert-7UQyLEYr.js";async function s({domElement:r,fileName:t,format:n="png",scale:c=2}){if(!r)return Promise.reject("No element provided");if(n==="svg"){const o=converter.convertToImg({container:r,scale:c});if(!o)return Promise.reject("Could not create SVG image");const e=document.createElement("a");return e.href=o.src,e.download=`${t}.svg`,document.body.appendChild(e),e.click(),document.body.removeChild(e),Promise.resolve()}try{const o=await a({container:r,scale:c}),e=document.createElement("a");e.href=o,e.download=`${t}.${n}`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}catch(o){throw console.error("Error generating image:",o),o}}export{s as default};
