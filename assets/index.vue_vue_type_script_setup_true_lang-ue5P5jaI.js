
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{i as m}from"./logo-A4CMGNjt.js";import{d as h,y as g,K as p,z as d,o,u as e,n as f,e as a,N as _,h as x,c as i,A as l,t as k}from"./index-B4WIbcLL.js";const w=["src"],b={key:1,class:"block truncate font-bold"},S=h({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(s){const t=g(),n=a("Fantastic-admin 基础版"),r=a(m),c=_(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(y,L)=>{const u=p("RouterLink");return o(),d(u,{to:e(c),class:f(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline",{"cursor-default":!e(t).settings.home.enable}]),title:e(n)},{default:x(()=>[s.showLogo?(o(),i("img",{key:0,src:e(r),class:"logo h-[30px] w-[30px] object-contain"},null,8,w)):l("",!0),s.showTitle?(o(),i("span",b,k(e(n)),1)):l("",!0)]),_:1},8,["to","class","title"])}}});export{S as _};
