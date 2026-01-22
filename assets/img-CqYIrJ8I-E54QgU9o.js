
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{k as t}from"./dom-to-png-WXGPkYro-BQsfl1t5.js";import"./vue-data-ui-8Gmf-dDN.js";import"./index-CJB5jCfL.js";import"./alert-I_0TAljB.js";async function w({domElement:a,fileName:i,format:s="png",scale:r=2,base64:n=!1,img:l=!1}){if(!a)return Promise.reject("No element provided");const m=typeof navigator<"u"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(await new Promise(e=>setTimeout(e,200)),m)try{await t({container:a,scale:r}),await t({container:a,scale:r}),await t({container:a,scale:r}),await t({container:a,scale:r}),n&&(await t({container:a,scale:r,base64:n}),await t({container:a,scale:r,base64:n}),await t({container:a,scale:r,base64:n}),await t({container:a,scale:r,base64:n}))}catch(e){}if(n&&l)try{const e=await t({container:a,scale:r}).then(c=>c),o=await t({container:a,scale:r,base64:n}).then(c=>c);return{imageUri:e,base64:o}}catch(e){console.error("Error generating image information for the chart",e)}else if(n)try{return t({container:a,scale:r,base64:n}).then(e=>e)}catch(e){console.error("Error generating the base64 string of the chart",e)}else try{const e=await t({container:a,scale:r}),o=document.createElement("a");o.href=e,o.download="".concat(i,".").concat(s),document.body.appendChild(o),o.click(),document.body.removeChild(o)}catch(e){throw console.error("Error generating image:",e),e}}export{w as default};
