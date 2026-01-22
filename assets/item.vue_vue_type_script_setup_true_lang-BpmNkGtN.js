
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as n,x as c,c as i,o as p,f as s,t as l,n as m,r as u}from"./index-CJB5jCfL.js";const d={class:"breadcrumb-item flex items-center text-foreground"},f={class:"separator mx-2"},h=n({__name:"item",props:{to:{},replace:{type:Boolean},separator:{default:"/"}},setup(t){const e=t,o=c();function a(){e.to&&(e.replace?o.replace(e.to):o.push(e.to))}return(r,_)=>(p(),i("div",d,[s("span",f,l(t.separator),1),s("span",{class:m(["text flex items-center opacity-60",{"is-link cursor-pointer transition-opacity hover-opacity-100":!!e.to}]),onClick:a},[u(r.$slots,"default")],2)]))}});export{h as _};
