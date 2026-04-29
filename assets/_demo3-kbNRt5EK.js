
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,S as n,Y as r,pt as i,wt as a,x as o,yt as s}from"./vue.runtime.esm-bundler-Bt9XxMFS.js";import{F as c,i as l}from"./components-C8hqFq5O.js";var u=e({__name:`_demo3`,setup(e){let u=a([]);function d(){l.success(`模拟上传成功`)}return(e,a)=>{let l=c;return r(),n(l,{modelValue:t(u),"onUpdate:modelValue":a[0]||(a[0]=e=>s(u)?u.value=e:null),action:`/fake/upload`,"after-upload":e=>e.data.url,multiple:``,onOnSuccess:d},{default:i(()=>[...a[1]||(a[1]=[o(`div`,null,`可以在这里显示自定义内容`,-1)])]),_:1},8,[`modelValue`,`after-upload`])}}});export{u as t};