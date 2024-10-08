
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,p as f,q as d,r as x,x as p,y as _,j as v,e as s,b as n,w as m,z as w,o as g,f as B,t as N,u as b,_ as k,v as a}from"./index-BB8nNV-H.js";const y={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},S={class:"flex flex-col gap-4"},h=u({__name:"[...all]",setup(I){const l=f(),r=d(),e=x({inter:Number.NaN,countdown:5});p(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),_(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),o())},1e3)});function o(){l.push(r.settings.home.fullPath)}return(C,t)=>{const c=k,i=w;return g(),v("div",y,[s(c,{name:"404",class:"text-[300px] lg-text-[400px]"}),n("div",S,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1)),n("div",null,[s(i,{onClick:o},{default:m(()=>[B(N(b(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof a=="function"&&a(h);export{h as default};
