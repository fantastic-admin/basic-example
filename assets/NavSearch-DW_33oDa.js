
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{A as e,C as t,D as n,Kt as r,Nt as i,O as a,S as o,Y as s,Yt as c,h as l,pt as u,w as d,wt as f,x as p,yt as m}from"./vue.runtime.esm-bundler-CGoWWSM3.js";import{t as h}from"./FaIcon-CpjV0-IG.js";import{t as g}from"./settings-770US1Ay.js";import{t as _}from"./FaButton-DW0q4QCY.js";import{t as v}from"./FaKbd-DZoLLSeV.js";import{t as y}from"./search-D74SraGo.js";var b=e({name:`NavSearch`,__name:`index`,setup(e){let b=g(),x=f(!1);return(e,f)=>{let g=h,S=v,C=_;return s(),d(l,null,[a(C,{variant:i(b).mode===`pc`?`outline`:`ghost`,size:i(b).mode===`pc`?void 0:`icon`,class:r({"mx-2 px-3 h-9":i(b).mode===`pc`,"size-9":i(b).mode!==`pc`}),onClick:f[0]||(f[0]=e=>x.value=!0)},{default:u(()=>[a(g,{name:`i-ri:search-line`,class:`size-4`}),i(b).mode===`pc`?(s(),d(l,{key:0},[f[2]||(f[2]=p(`span`,{class:`text-sm text-muted-foreground/60 transition group-hover-text-muted-foreground`},`搜索`,-1)),i(b).settings.navSearch.enableHotkeys?(s(),o(S,{key:0,class:`-me-1`},{default:u(()=>[n(c(i(b).os===`mac`?`⌘`:`Ctrl`)+` K `,1)]),_:1})):t(``,!0)],64)):t(``,!0)]),_:1},8,[`variant`,`size`,`class`]),a(y,{modelValue:i(x),"onUpdate:modelValue":f[1]||(f[1]=e=>m(x)?x.value=e:null)},null,8,[`modelValue`])],64)}}});export{b as t};