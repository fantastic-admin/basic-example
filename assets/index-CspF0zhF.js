
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as l,u as m,c as d,b as e,f as o,O as k,N as x,o as $,j as b,h as i,D as g,bA as j,aa as v,A as r}from"./index-bXAjDhuN.js";const C=l({__name:"index",setup(F){const a=m();function c(){a.getPermissions().then(()=>{j().toast({title:"当前用户权限",description:v("div",{innerHTML:a.permissions.map(t=>`<p>${t}</p>`).join("")}),duration:3e3})})}function _(t){window.open(t,"_blank")}return(t,n)=>{const f=g,s=b,p=k,u=x;return $(),d("div",null,[e(p,{title:"Mock",description:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 faker 实现的。更多语法规则请查询官方文档"},{default:o(()=>[e(s,{variant:"outline",onClick:n[0]||(n[0]=P=>_("https://github.com/faker-js/faker"))},{default:o(()=>[e(f,{name:"i-ep:link"}),n[1]||(n[1]=i(" faker 官网 "))]),_:1})]),_:1}),e(u,null,{default:o(()=>[e(s,{onClick:c},{default:o(()=>n[2]||(n[2]=[i(" 测试：获取用户权限 ")])),_:1})]),_:1})])}}});typeof r=="function"&&r(C);export{C as default};
