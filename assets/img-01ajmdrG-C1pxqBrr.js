
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{k as t}from"./dom-to-png-BIakyQa8-CNlXowh-.js";import"./vue-data-ui-DrrwkdAa.js";import"./index-CYGv8gAZ.js";import"./alert-szVbFbDo.js";async function w({domElement:a,fileName:i,format:s="png",scale:r=2,base64:n=!1,img:l=!1}){if(!a)return Promise.reject("No element provided");const m=typeof navigator<"u"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(await new Promise(e=>setTimeout(e,200)),m)try{await t({container:a,scale:r}),await t({container:a,scale:r}),await t({container:a,scale:r}),await t({container:a,scale:r}),n&&(await t({container:a,scale:r,base64:n}),await t({container:a,scale:r,base64:n}),await t({container:a,scale:r,base64:n}),await t({container:a,scale:r,base64:n}))}catch{}if(n&&l)try{const e=await t({container:a,scale:r}).then(c=>c),o=await t({container:a,scale:r,base64:n}).then(c=>c);return{imageUri:e,base64:o}}catch(e){console.error("Error generating image information for the chart",e)}else if(n)try{return t({container:a,scale:r,base64:n}).then(e=>e)}catch(e){console.error("Error generating the base64 string of the chart",e)}else try{const e=await t({container:a,scale:r}),o=document.createElement("a");o.href=e,o.download=`${i}.${s}`,document.body.appendChild(o),o.click(),document.body.removeChild(o)}catch(e){throw console.error("Error generating image:",e),e}}export{w as default};
