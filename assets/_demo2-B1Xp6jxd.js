
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,D as t,N as n,Nt as r,O as i,S as a,Y as o,pt as s,wt as c}from"./vue.runtime.esm-bundler-Bt9XxMFS.js";import{D as l,G as u,L as d,S as f}from"./components-C8hqFq5O.js";var p=e({__name:`_demo2`,setup(p){let m=e({setup(){let e=c(`123`);return()=>i(`div`,null,[i(l,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,class:`w-full`},null)])}}),{open:h}=d().create({title:`标题`,description:`这里是一段描述介绍`,beforeClose:(e,t)=>{e===`close`?f().confirm({title:`提示`,content:`确定要关闭吗？`,onConfirm:()=>{t()}}):t()},content:n(m)});return(e,n)=>{let i=u;return o(),a(i,{onClick:r(h)},{default:s(()=>[...n[0]||(n[0]=[t(` 打开 `,-1)])]),_:1},8,[`onClick`])}}});export{p as t};