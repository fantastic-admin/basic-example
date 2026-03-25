
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{A as e,D as t,N as n,O as r,Y as i,pt as a,w as o}from"./vue.runtime.esm-bundler-CGoWWSM3.js";import{t as s}from"./FaIcon-CpjV0-IG.js";import{t as c}from"./FaButton-DW0q4QCY.js";import{t as l}from"./FaPageMain-BxqvsCDB.js";import{t as u}from"./FaPageHeader-C0sPF5up.js";import{t as d}from"./route-block-DBhJxsjT.js";import{f,s as p}from"./index-iSM9h_E1.js";import"./FaNotification-DaldmRqS.js";var m=e({__name:`index`,setup(e){let d=f();function m(){d.getPermissions().then(()=>{p().toast({title:`当前用户权限`,description:n(`div`,{innerHTML:d.permissions.map(e=>`<p>${e}</p>`).join(``)}),duration:3e3})})}function h(e){window.open(e,`_blank`)}return(e,n)=>{let d=s,f=c,p=u,g=l;return i(),o(`div`,null,[r(p,{title:`Mock`,description:`通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 faker 实现的。更多语法规则请查询官方文档`},{default:a(()=>[r(f,{variant:`outline`,onClick:n[0]||(n[0]=e=>h(`https://github.com/faker-js/faker`))},{default:a(()=>[r(d,{name:`i-ep:link`}),n[1]||(n[1]=t(` faker 官网 `,-1))]),_:1})]),_:1}),r(g,null,{default:a(()=>[r(f,{onClick:m},{default:a(()=>[...n[2]||(n[2]=[t(` 测试：获取用户权限 `,-1)])]),_:1})]),_:1})])}}});typeof d==`function`&&d(m);var h=m;export{h as default};