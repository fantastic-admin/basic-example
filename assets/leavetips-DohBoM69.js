
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,D as t,Nt as n,O as r,Y as i,pt as a,w as o,wt as s,yt as c}from"./vue.runtime.esm-bundler-CeJSuZgp.js";import{g as l,h as u,s as d,v as f}from"./components-BaMs68nj.js";import{a as p}from"./vue-router-DpNQsJs5.js";var m=e({__name:`leavetips`,setup(e){let m=s(!0),h=f();return p((e,t,n)=>{m.value?h.confirm({title:`温馨提醒`,content:`当前页面还没有保存，是否确定要离开？`,confirmButtonText:`确定`,cancelButtonText:`取消`,onConfirm:()=>{n()}}):n()}),(e,s)=>{let f=l,p=d,h=u;return i(),o(`div`,null,[r(f,{title:`页面离开提醒`,description:`在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空`}),r(h,{"main-class":`flex items-center gap-2`},{default:a(()=>[s[1]||(s[1]=t(` 禁用 `,-1)),r(p,{modelValue:n(m),"onUpdate:modelValue":s[0]||(s[0]=e=>c(m)?m.value=e:null)},null,8,[`modelValue`]),s[2]||(s[2]=t(` 启用 `,-1))]),_:1})])}}});export{m as default};