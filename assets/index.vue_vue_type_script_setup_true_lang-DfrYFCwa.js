
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{i as m}from"./logo-A4CMGNjt.js";import{d as u,p as g,r as a,H as h,s as d,o,l as _,e,J as f,f as k,c as r,x as i,t as x}from"./index-BaQMHUXZ.js";const w=["src"],b={key:1,class:"block truncate font-bold"},S=u({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(L){const t=g(),s=a("Fantastic-admin 基础版"),l=a(m),c=h(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(n,y)=>{const p=_("RouterLink");return o(),d(p,{to:e(c),class:f(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline",{"cursor-pointer":e(t).settings.home.enable}]),title:e(s)},{default:k(()=>[n.showLogo?(o(),r("img",{key:0,src:e(l),class:"logo h-[30px] w-[30px] object-contain"},null,8,w)):i("",!0),n.showTitle?(o(),r("span",b,x(e(s)),1)):i("",!0)]),_:1},8,["to","class","title"])}}});export{S as _};
