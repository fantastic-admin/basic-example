
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{A as e,D as t,Nt as n,O as r,S as i,Y as a,Yt as o,pt as s,ut as c}from"./vue.runtime.esm-bundler-CGoWWSM3.js";import{l,t as u}from"./FaIcon-CpjV0-IG.js";import{n as d}from"./lib-CJHEvOHx.js";import{t as f}from"./FaKbd-DZoLLSeV.js";var p=e({__name:`command`,props:{text:{}},setup(e){let p=e,{copy:m,copied:h,isSupported:g}=l();return c(h,e=>{e&&d.success(`复制成功`,{position:`top-center`})}),(c,l)=>{let d=u,h=f;return a(),i(h,{class:`mx-1 cursor-pointer`,onClick:l[0]||(l[0]=e=>n(g)&&n(m)(p.text))},{default:s(()=>[r(d,{name:`i-lucide:copy`,class:`size-3`}),t(` `+o(e.text),1)]),_:1})}}});export{p as t};