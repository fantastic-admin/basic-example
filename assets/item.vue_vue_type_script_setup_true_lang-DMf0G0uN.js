
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as n,q as c,c as i,o as p,a as s,t as l,J as m,V as u}from"./index-Bw0OMqcE.js";const d={class:"breadcrumb-item flex items-center text-foreground"},f={class:"separator mx-2"},x=n({__name:"item",props:{to:{},replace:{type:Boolean},separator:{default:"/"}},setup(a){const e=a,t=c();function r(){e.to&&(e.replace?t.replace(e.to):t.push(e.to))}return(o,_)=>(p(),i("div",d,[s("span",f,l(o.separator),1),s("span",{class:m(["text flex items-center opacity-60",{"is-link cursor-pointer transition-opacity hover-opacity-100":!!e.to}]),onClick:r},[u(o.$slots,"default")],2)]))}});export{x as _};
