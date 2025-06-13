
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,q as f,s as d,r as x,B as p,C as _,c as m,o as v,b as a,a as n,D as w,f as g,h as B,t as N,e as b,j as h,A as s}from"./index-DArrwvlJ.js";const k={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},y={class:"flex flex-col gap-4"},C=u({__name:"[...all]",setup(I){const l=f(),r=d(),e=x({inter:Number.NaN,countdown:5});p(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),_(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),o())},1e3)});function o(){l.push(r.settings.home.fullPath)}return(S,t)=>{const c=w,i=h;return v(),m("div",k,[a(c,{name:"404",class:"text-[300px] lg-text-[400px]"}),n("div",y,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"mx-0 text-xl text-secondary-foreground/50"}," 抱歉，你访问的页面不存在 ",-1)),n("div",null,[a(i,{onClick:o},{default:g(()=>[B(N(b(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof s=="function"&&s(C);export{C as default};
