
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{bY as _}from"./index-Xdtw-1bo.js";import{B as g}from"./dom-to-png-Bm0D0yPL-D4vFj-Dw.js";import"./vue-data-ui-C3TMMljD.js";import"./alert-vC5jeBd4.js";async function I({domElement:d,fileName:h,scale:p=2,options:P={}}){if(!d)return Promise.reject("No domElement provided");let l;try{l=(await _(async()=>{const{default:n}=await import("./__vite-optional-peer-dep_jspdf_vue-data-ui_false-DOvOOyrI.js");return{default:n}},[],import.meta.url)).default}catch{return Promise.reject("jspdf is not installed. Run npm install jspdf")}const t={width:595.28,height:841.89},r=await g({container:d,scale:p});return await new Promise((n,w)=>{const e=new window.Image;e.onload=function(){const a=e.naturalWidth,s=e.naturalHeight;let m=t.width,c=t.width/a*s;const i=new l("","pt","a4");let f=0,o=s;const u=a/t.width*t.height;if(o<u)i.addImage(r,"PNG",0,0,m,c,"","FAST");else for(;o>0;)i.addImage(r,"PNG",0,f,m,c,"","FAST"),o-=u,f-=t.height,o>0&&i.addPage();i.save(`${h}.pdf`),n()},e.onerror=a=>w("Failed to load image for PDF: "+a),e.src=r})}export{I as default};
