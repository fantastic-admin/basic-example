
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{t as e}from"./dom-to-png-CtxhhdWb-CSMo9WHt.js";async function t({domElement:t,fileName:n,format:r=`png`,scale:i=2,base64:a=!1,img:o=!1}){if(!t)return Promise.reject(`No element provided`);let s=typeof navigator<`u`&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(await new Promise(e=>setTimeout(e,200)),s)try{await e({container:t,scale:i}),await e({container:t,scale:i}),await e({container:t,scale:i}),await e({container:t,scale:i}),a&&(await e({container:t,scale:i,base64:a}),await e({container:t,scale:i,base64:a}),await e({container:t,scale:i,base64:a}),await e({container:t,scale:i,base64:a}))}catch{}if(a&&o)try{return{imageUri:await e({container:t,scale:i}).then(e=>e),base64:await e({container:t,scale:i,base64:a}).then(e=>e)}}catch(e){console.error(`Error generating image information for the chart`,e)}else if(a)try{return e({container:t,scale:i,base64:a}).then(e=>e)}catch(e){console.error(`Error generating the base64 string of the chart`,e)}else try{let a=await e({container:t,scale:i}),o=document.createElement(`a`);o.href=a,o.download=`${n}.${r}`,document.body.appendChild(o),o.click(),document.body.removeChild(o)}catch(e){throw console.error(`Error generating image:`,e),e}}export{t};