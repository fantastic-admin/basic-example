
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{i as p}from"./logo-A4CMGNjt.js";import{d as u,s as g,r as a,H as h,l as d,x as f,o,e,J as _,f as k,c as r,y as l,t as x}from"./index-lc5eLyOy.js";const w=["src"],b={key:1,class:"block truncate font-bold"},S=u({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(y){const t=g(),s=a("Fantastic-admin 基础版"),i=a(p),c=h(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(n,L)=>{const m=d("RouterLink");return o(),f(m,{to:e(c),class:_(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline",{"cursor-default":!e(t).settings.home.enable}]),title:e(s)},{default:k(()=>[n.showLogo?(o(),r("img",{key:0,src:e(i),class:"logo h-[30px] w-[30px] object-contain"},null,8,w)):l("",!0),n.showTitle?(o(),r("span",b,x(e(s)),1)):l("",!0)]),_:1},8,["to","class","title"])}}});export{S as _};
