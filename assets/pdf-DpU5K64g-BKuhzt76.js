
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{b$ as P}from"./index-CasMvcc7.js";import{k as i}from"./dom-to-png-BIakyQa8-DLLfG6Rp.js";import"./vue-data-ui-Bh0ZQjls.js";import"./alert-BSSAoAkz.js";async function E({domElement:t,fileName:p,scale:a=2,options:v={}}){if(!t)return Promise.reject("No domElement provided");const g=typeof navigator<"u"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent);let l;try{l=(await P(async()=>{const{default:c}=await import("./__vite-optional-peer-dep_jspdf_vue-data-ui_false-DOvOOyrI.js");return{default:c}},[],import.meta.url)).default}catch{return Promise.reject("jspdf is not installed. Run npm install jspdf")}const e={width:595.28,height:841.89};if(g)try{await i({container:t,scale:a}),await i({container:t,scale:a}),await i({container:t,scale:a}),await i({container:t,scale:a})}catch{}const d=await i({container:t,scale:a});return await new Promise((c,_)=>{const o=new window.Image;o.onload=function(){const n=o.naturalWidth,m=o.naturalHeight;let f=e.width,u=e.width/n*m;const r=new l("","pt","a4");let w=0,s=m;const h=n/e.width*e.height;if(s<h)r.addImage(d,"PNG",0,0,f,u,"","FAST");else for(;s>0;)r.addImage(d,"PNG",0,w,f,u,"","FAST"),s-=h,w-=e.height,s>0&&r.addPage();r.save(`${p}.pdf`),c()},o.onerror=n=>_("Failed to load image for PDF: "+n),o.src=d})}export{E as default};
