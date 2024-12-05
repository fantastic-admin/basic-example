
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,i as f,a as d,o as k,k as g,e,w as o,g as i,a9 as x,_ as C,R as M,Q as $,x as c}from"./index-B6Nq-W-n.js";const j=u({__name:"index",setup(v){const s=f();function l(){s.getPermissions().then(()=>{x({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:s.permissions.map(t=>`<p>${t}</p>`).join("")})})}function m(t){window.open(t,"_blank")}return(t,n)=>{const r=C,a=d("ElButton"),_=M,p=$;return k(),g("div",null,[e(_,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:o(()=>[e(a,{onClick:n[0]||(n[0]=w=>m("http://mockjs.com/"))},{icon:o(()=>[e(r,{name:"i-ep:link"})]),default:o(()=>[n[1]||(n[1]=i(" Mock.js 官网 "))]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(a,{onClick:l},{default:o(()=>n[2]||(n[2]=[i(" 测试：获取用户权限 ")])),_:1})]),_:1})])}}});typeof c=="function"&&c(j);export{j as default};
