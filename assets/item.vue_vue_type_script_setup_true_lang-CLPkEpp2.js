
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as n,s as c,o as i,k as p,b as o,t as l,X as m,J as d}from"./index-prGsGrIV.js";const u={class:"breadcrumb-item flex items-center text-dark dark-text-white"},f={class:"separator mx-2"},h=n({__name:"item",props:{to:{},replace:{type:Boolean},separator:{default:"/"}},setup(a){const e=a,t=c();function r(){e.to&&(e.replace?t.replace(e.to):t.push(e.to))}return(s,_)=>(i(),p("div",u,[o("span",f,l(s.separator),1),o("span",{class:d(["text flex items-center opacity-60",{"is-link cursor-pointer transition-opacity hover-opacity-100":!!e.to}]),onClick:r},[m(s.$slots,"default")],2)]))}});export{h as _};
