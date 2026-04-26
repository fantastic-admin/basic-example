
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,D as t,Nt as n,O as r,Y as i,Yt as a,Z as o,h as s,pt as c,w as l,wt as u,x as d}from"./vue.runtime.esm-bundler-Bt9XxMFS.js";import{V as f,_ as p,g as m}from"./components-DBOyn06P.js";import{l as h}from"./auth-C_Jx70DZ.js";var g={class:`mt-4 empty:hidden`},_=e({__name:`index`,setup(e){let _=u([]);function v(){h.permission().then(e=>{_.value=e.data.permissions})}return(e,u)=>{let h=p,y=f,b=m;return i(),l(`div`,null,[r(h,{title:`假数据`,description:`通过拦截 Ajax 请求，模拟返回响应数据，可以让前端工程师独立于后端进行开发。`}),r(b,null,{default:c(()=>[r(y,{onClick:v},{default:c(()=>[...u[0]||(u[0]=[t(` 测试：获取用户权限 `,-1)])]),_:1}),d(`div`,g,[(i(!0),l(s,null,o(n(_),(e,t)=>(i(),l(`div`,{key:t},a(e),1))),128))])]),_:1})])}}});export{_ as default};