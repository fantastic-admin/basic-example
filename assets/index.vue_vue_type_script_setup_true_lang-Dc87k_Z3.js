
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as l,s as n,o,e,aZ as f,J as i,V as d,f as t,U as p,a_ as h,n as _,g as m,a$ as v,m as x,b0 as b,b as u,h as g,t as y}from"./index-DnKOUfUF.js";const z=l({__name:"Avatar",props:{class:{},size:{default:"sm"},shape:{default:"circle"}},setup(a){const r=a;return(s,c)=>(o(),n(e(f),{class:i(e(d)(e(w)({size:s.size,shape:s.shape}),r.class))},{default:t(()=>[p(s.$slots,"default")]),_:3},8,["class"]))}}),$=l({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(a){const r=a;return(s,c)=>(o(),n(e(h),_(m(r)),{default:t(()=>[p(s.$slots,"default")]),_:3},16))}}),k=l({__name:"AvatarImage",props:{src:{},referrerPolicy:{},asChild:{type:Boolean},as:{}},setup(a){const r=a;return(s,c)=>(o(),n(e(v),x(r,{class:"h-full w-full object-cover"}),null,16))}}),w=b("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-md"}}}),B=l({__name:"index",props:{src:{},fallback:{},shape:{},class:{}},setup(a){const r=a;return(s,c)=>(o(),n(e(z),{shape:s.shape,class:i(r.class)},{default:t(()=>[u(e(k),{src:s.src},null,8,["src"]),u(e($),{class:"inline-flex"},{default:t(()=>[p(s.$slots,"default",{},()=>[g(y(s.fallback),1)])]),_:3})]),_:3},8,["shape","class"]))}});export{B as _};
