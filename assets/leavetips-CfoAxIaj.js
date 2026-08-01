
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{_ as e,c as t,v as n}from"./src-CLMBPGj1.js";import{B as r,C as i,m as a}from"./reactivity.esm-bundler-D9OPVc9J.js";import{D as o,E as s,b as c,k as l,mt as u,qt as d}from"./runtime-core.esm-bundler-D-xeQwTN.js";import{t as f}from"./page-header-CflkT4MF.js";import{y as p}from"./devtools-Bpr7ZAVB-R4s68mQv.js";var m=l({__name:`leavetips`,setup(l){let m=i(!0),h=n();return p((e,t,n)=>{m.value?h.confirm({title:`温馨提醒`,content:`当前页面还没有保存，是否确定要离开？`,confirmButtonText:`确定`,cancelButtonText:`取消`,onConfirm:()=>{n()}}):n()}),(n,i)=>{let l=f,p=t,h=e;return u(),c(`div`,null,[o(l,{title:`页面离开提醒`,description:`在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空`}),o(h,{"main-class":`flex items-center gap-2`},{default:d(()=>[i[1]||(i[1]=s(` 禁用 `,-1)),o(p,{modelValue:r(m),"onUpdate:modelValue":i[0]||(i[0]=e=>a(m)?m.value=e:null)},null,8,[`modelValue`]),i[2]||(i[2]=s(` 启用 `,-1))]),_:1})])}}});export{m as default};