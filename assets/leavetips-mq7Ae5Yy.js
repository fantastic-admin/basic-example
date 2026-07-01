
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,D as t,O as n,Pt as r,Tt as i,Y as a,bt as o,pt as s,w as c}from"./vue.runtime.esm-bundler-NA8UCC27.js";import{_ as l,c as u,v as d}from"./src-C-5f1Hx7.js";import{t as f}from"./page-header-CFwAs_0E.js";import{h as p}from"./index-CfymFsM4.js";var m=e({__name:`leavetips`,setup(e){let m=i(!0),h=d();return p((e,t,n)=>{m.value?h.confirm({title:`温馨提醒`,content:`当前页面还没有保存，是否确定要离开？`,confirmButtonText:`确定`,cancelButtonText:`取消`,onConfirm:()=>{n()}}):n()}),(e,i)=>{let d=f,p=u,h=l;return a(),c(`div`,null,[n(d,{title:`页面离开提醒`,description:`在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空`}),n(h,{"main-class":`flex items-center gap-2`},{default:s(()=>[i[1]||(i[1]=t(` 禁用 `,-1)),n(p,{modelValue:r(m),"onUpdate:modelValue":i[0]||(i[0]=e=>o(m)?m.value=e:null)},null,8,[`modelValue`]),i[2]||(i[2]=t(` 启用 `,-1))]),_:1})])}}});export{m as default};