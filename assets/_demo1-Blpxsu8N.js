
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,S as n,Y as r,wt as i,yt as a}from"./vue.runtime.esm-bundler-Bt9XxMFS.js";import{E as o,i as s}from"./components-DBOyn06P.js";var c=e({__name:`_demo1`,setup(e){let c=i([]);function l(){s.success(`模拟上传成功`)}return(e,i)=>{let s=o;return r(),n(s,{modelValue:t(c),"onUpdate:modelValue":i[0]||(i[0]=e=>a(c)?c.value=e:null),action:`/fake/upload`,"after-upload":e=>e.data.url,onOnSuccess:l},null,8,[`modelValue`,`after-upload`])}}});export{c as t};