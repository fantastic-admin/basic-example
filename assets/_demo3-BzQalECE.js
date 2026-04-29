
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,S as r,Y as i,pt as a,wt as o,yt as s}from"./vue.runtime.esm-bundler-Bt9XxMFS.js";import{M as c,i as l,k as u}from"./components-C8hqFq5O.js";var d=e({__name:`_demo3`,setup(e){let d=o([]);function f(){l.success(`模拟上传成功`)}return(e,o)=>{let l=c,p=u;return i(),r(p,{modelValue:t(d),"onUpdate:modelValue":o[0]||(o[0]=e=>s(d)?d.value=e:null),action:`/fake/upload`,"after-upload":e=>`${e.data.url}?fake=${Math.random()}`,width:200,height:130,dimension:{width:400,height:260},ext:[`png`],size:200*1024,max:0,onOnSuccess:f},{default:a(()=>[n(l,{name:`i-noto:identification-card`,class:`opacity-50 size-50`})]),_:1},8,[`modelValue`,`after-upload`])}}});export{d as t};