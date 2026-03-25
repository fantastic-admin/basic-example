
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{$t as e,A as t,Kt as n,Q as r,Y as i,Yt as a,w as o,x as s}from"./vue.runtime.esm-bundler-CGoWWSM3.js";import{y as c}from"./index-iSM9h_E1.js";var l={class:`breadcrumb-item flex items-center text-foreground`},u={class:`separator mx-2`},d=t({__name:`item`,props:{to:{},replace:{type:Boolean},separator:{default:`/`}},setup(e){let t=e,d=c();function f(){t.to&&(t.replace?d.replace(t.to):d.push(t.to))}return(c,d)=>(i(),o(`div`,l,[s(`span`,u,a(e.separator),1),s(`span`,{class:n([`text flex items-center opacity-60`,{"is-link cursor-pointer transition-opacity hover-opacity-100":!!t.to}]),onClick:f},[r(c.$slots,`default`)],2)]))}}),f=e({default:()=>p}),p=d;export{f as n,p as t};