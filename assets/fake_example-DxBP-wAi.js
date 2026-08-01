
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{M as e,_ as t}from"./src-CLMBPGj1.js";import{B as n,C as r,Tt as i}from"./reactivity.esm-bundler-D9OPVc9J.js";import{D as a,E as o,_ as s,b as c,bt as l,k as u,mt as d,o as f,qt as p}from"./runtime-core.esm-bundler-D-xeQwTN.js";import{t as m}from"./page-header-CflkT4MF.js";import{l as h}from"./auth-D423O-Sp.js";var g={class:`mt-4 empty:hidden`},_=u({__name:`index`,setup(u){let _=r([]);function v(){h.permission().then(e=>{_.value=e.data.permissions})}return(r,u)=>{let h=m,y=e,b=t;return d(),c(`div`,null,[a(h,{title:`假数据`,description:`通过拦截 Ajax 请求，模拟返回响应数据，可以让前端工程师独立于后端进行开发。`}),a(b,null,{default:p(()=>[a(y,{onClick:v},{default:p(()=>[...u[0]||(u[0]=[o(` 测试：获取用户权限 `,-1)])]),_:1}),s(`div`,g,[(d(!0),c(f,null,l(n(_),(e,t)=>(d(),c(`div`,{key:t},i(e),1))),128))])]),_:1})])}}});export{_ as default};