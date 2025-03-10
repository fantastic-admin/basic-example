
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,p as f,r as d,B as x,C as p,y as _,c as m,b as a,a as n,f as v,j as w,o as g,D as B,h as y,t as N,e as b,A as s}from"./index-BaQMHUXZ.js";const h={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},k={class:"flex flex-col gap-4"},C=u({__name:"[...all]",setup(I){const l=_(),r=f(),e=d({inter:Number.NaN,countdown:5});x(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),p(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),o())},1e3)});function o(){l.push(r.settings.home.fullPath)}return(S,t)=>{const c=B,i=w;return g(),m("div",h,[a(c,{name:"404",class:"text-[300px] lg-text-[400px]"}),n("div",k,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"mx-0 text-xl text-secondary-foreground/50"}," 抱歉，你访问的页面不存在 ",-1)),n("div",null,[a(i,{onClick:o},{default:v(()=>[y(N(b(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof s=="function"&&s(C);export{C as default};
