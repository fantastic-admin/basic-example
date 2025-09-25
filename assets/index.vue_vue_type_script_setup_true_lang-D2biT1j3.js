
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{i as m}from"./logo-A4CMGNjt.js";import{d as p,y as h,e as a,J as g,L as d,z as _,o,u as e,n as f,h as k,c as r,A as i,t as w}from"./index-DwSwYgf0.js";const x=["src"],L={key:1,class:"block truncate font-bold"},S=p({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(b){const t=h(),s=a("Fantastic-admin 基础版"),l=a(m),c=g(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(n,y)=>{const u=d("RouterLink");return o(),_(u,{to:e(c),class:f(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline",{"cursor-default":!e(t).settings.home.enable}]),title:e(s)},{default:k(()=>[n.showLogo?(o(),r("img",{key:0,src:e(l),class:"logo h-[30px] w-[30px] object-contain"},null,8,x)):i("",!0),n.showTitle?(o(),r("span",L,w(e(s)),1)):i("",!0)]),_:1},8,["to","class","title"])}}});export{S as _};
