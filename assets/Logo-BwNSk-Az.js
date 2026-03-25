
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{$ as e,A as t,C as n,Kt as r,Nt as i,S as a,Y as o,Yt as s,b as c,pt as l,w as u,wt as d}from"./vue.runtime.esm-bundler-CGoWWSM3.js";import{t as f}from"./settings-770US1Ay.js";import{t as p}from"./logo-BGVEs9BC.js";var m=[`src`],h={key:1,class:`block truncate font-bold`},g=t({name:`Logo`,__name:`index`,props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(t){let g=f(),_=d(`Fantastic-admin 基础版`),v=d(p),y=c(()=>g.settings.home.enable?g.settings.home.fullPath:``);return(c,d)=>{let f=e(`RouterLink`);return o(),a(f,{to:i(y),class:r([`h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline`,{"cursor-default":!i(g).settings.home.enable}]),title:i(_)},{default:l(()=>[t.showLogo?(o(),u(`img`,{key:0,src:i(v),class:`logo h-[30px] w-[30px] object-contain`},null,8,m)):n(``,!0),t.showTitle?(o(),u(`span`,h,s(i(_)),1)):n(``,!0)]),_:1},8,[`to`,`class`,`title`])}}});export{g as t};