
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as V,p as g,A as B,r as f,x as w,a as m,o as C,j as D,e as o,w as c,b as d,u as _,i as k,f as x,Q as P,P as S,s as $,v as E}from"./index-BB8nNV-H.js";const I={class:"block"},K={class:"block"},R={class:"block"},b=V({name:"KeepAliveExamplePage",__name:"page",setup(U){const A=g(),u=B(),l=f(!1),p=f(1);function r(a){let e;switch(a){case 1:e="keepAliveExampleDetail";break;case 2:e="keepAliveExampleNestedDetail";break}A.push({name:e})}return w((a,e)=>{var s,i;const t=(i=(s=e.matched.at(-1))==null?void 0:s.components)==null?void 0:i.default.name;t&&(l.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(a.name)?u.add(t):u.remove(t))}),(a,e)=>{const t=P,s=m("ElSwitch"),i=m("ElInputNumber"),v=m("ElButton"),N=S;return C(),D("div",null,[o(t,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现。"}),o(N,null,{default:c(()=>[d("div",I,[o(s,{modelValue:_(l),"onUpdate:modelValue":e[0]||(e[0]=n=>k(l)?l.value=n:null),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),d("div",K,[o(i,{modelValue:_(p),"onUpdate:modelValue":e[1]||(e[1]=n=>k(p)?p.value=n:null)},null,8,["modelValue"])]),d("div",R,[o(v,{onClick:e[2]||(e[2]=n=>r(1))},{default:c(()=>e[4]||(e[4]=[x(" 进入同级路由页面 ")])),_:1}),o(v,{onClick:e[3]||(e[3]=n=>r(2))},{default:c(()=>e[5]||(e[5]=[x(" 进入下级路由页面 ")])),_:1})])]),_:1})])}}});typeof E=="function"&&E(b);const y=$(b,[["__scopeId","data-v-b1252ca6"]]);export{y as default};
