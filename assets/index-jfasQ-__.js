
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as m,b as u,c as d,o as k,g as e,h as o,p as g,l as i,G as x,Q as P,P as $,bP as b,aj as C,C as r}from"./index-CJB5jCfL.js";const j=m({__name:"index",setup(v){const a=u();function c(){a.getPermissions().then(()=>{b().toast({title:"当前用户权限",description:C("div",{innerHTML:a.permissions.map(t=>"<p>".concat(t,"</p>")).join("")}),duration:3e3})})}function p(t){window.open(t,"_blank")}return(t,n)=>{const _=x,s=g,f=P,l=$;return k(),d("div",null,[e(f,{title:"Mock",description:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 faker 实现的。更多语法规则请查询官方文档"},{default:o(()=>[e(s,{variant:"outline",onClick:n[0]||(n[0]=F=>p("https://github.com/faker-js/faker"))},{default:o(()=>[e(_,{name:"i-ep:link"}),n[1]||(n[1]=i(" faker 官网 ",-1))]),_:1})]),_:1}),e(l,null,{default:o(()=>[e(s,{onClick:c},{default:o(()=>[...n[2]||(n[2]=[i(" 测试：获取用户权限 ",-1)])]),_:1})]),_:1})])}}});typeof r=="function"&&r(j);export{j as default};
