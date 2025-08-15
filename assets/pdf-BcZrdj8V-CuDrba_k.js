
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{b$ as P}from"./index-BSY0Q56E.js";import{k as n}from"./dom-to-png-JfgMQjN--DbXpkr4p.js";import"./vue-data-ui-XQvm_75D.js";import"./alert-CYpOL1uD.js";async function E({domElement:t,fileName:p,scale:a=2,options:v={}}){if(!t)return Promise.reject("No domElement provided");const g=typeof navigator<"u"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent);let l;try{l=(await P(async()=>{const{default:o}=await import("./__vite-optional-peer-dep_jspdf_vue-data-ui_false-DOvOOyrI.js");return{default:o}},[],import.meta.url)).default}catch(o){return Promise.reject("jspdf is not installed. Run npm install jspdf")}const e={width:595.28,height:841.89};if(g)try{await n({container:t,scale:a}),await n({container:t,scale:a}),await n({container:t,scale:a}),await n({container:t,scale:a})}catch(o){}const c=await n({container:t,scale:a});return await new Promise((o,_)=>{const i=new window.Image;i.onload=function(){const r=i.naturalWidth,m=i.naturalHeight;let f=e.width,u=e.width/r*m;const s=new l("","pt","a4");let w=0,d=m;const h=r/e.width*e.height;if(d<h)s.addImage(c,"PNG",0,0,f,u,"","FAST");else for(;d>0;)s.addImage(c,"PNG",0,w,f,u,"","FAST"),d-=h,w-=e.height,d>0&&s.addPage();s.save("".concat(p,".pdf")),o()},i.onerror=r=>_("Failed to load image for PDF: "+r),i.src=c})}export{E as default};
