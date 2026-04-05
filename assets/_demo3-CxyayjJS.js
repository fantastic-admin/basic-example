
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,D as t,N as n,Nt as r,O as i,S as a,Y as o,pt as s,wt as c}from"./vue.runtime.esm-bundler-CeJSuZgp.js";import{S as l,v as u,z as d}from"./components-BaMs68nj.js";var f=e({__name:`_demo3`,setup(f){let p=e({props:{close:{type:Function}},setup(e){let n=c(`123`);return()=>i(`div`,{class:`flex flex-col gap-4`},[i(l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,class:`w-full`},null),i(d,{onClick:()=>e.close?.()},{default:()=>[t(`组件内部关闭弹窗`)]})])}}),{open:m,close:h}=u().create({title:`标题`,description:`这里是一段描述介绍`,beforeClose:(e,t)=>{e===`close`?u().confirm({title:`提示`,content:`确定要关闭吗？`,onConfirm:()=>{t()}}):t()},content:()=>n(p,{close:h})});return(e,n)=>{let i=d;return o(),a(i,{onClick:r(m)},{default:s(()=>[...n[0]||(n[0]=[t(` 打开 `,-1)])]),_:1},8,[`onClick`])}}});export{f as t};