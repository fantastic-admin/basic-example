
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as A,s as g,B,r as f,y as w,a as p,o as C,k as D,e as o,w as c,b as d,f as _,j as k,g as x,R,Q as S,v as $,x as E}from"./index-prGsGrIV.js";const I={class:"block"},K={class:"block"},P={class:"block"},b=A({name:"KeepAliveExamplePage",__name:"page",setup(y){const N=g(),u=B(),l=f(!1),m=f(1);function r(a){let e;switch(a){case 1:e="keepAliveExampleDetail";break;case 2:e="keepAliveExampleNestedDetail";break}N.push({name:e})}return w((a,e)=>{var s,i;const t=(i=(s=e.matched.at(-1))==null?void 0:s.components)==null?void 0:i.default.name;t&&(l.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(a.name)?u.add(t):u.remove(t))}),(a,e)=>{const t=R,s=p("ElSwitch"),i=p("ElInputNumber"),v=p("ElButton"),V=S;return C(),D("div",null,[o(t,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现。"}),o(V,null,{default:c(()=>[d("div",I,[o(s,{modelValue:_(l),"onUpdate:modelValue":e[0]||(e[0]=n=>k(l)?l.value=n:null),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),d("div",K,[o(i,{modelValue:_(m),"onUpdate:modelValue":e[1]||(e[1]=n=>k(m)?m.value=n:null)},null,8,["modelValue"])]),d("div",P,[o(v,{onClick:e[2]||(e[2]=n=>r(1))},{default:c(()=>e[4]||(e[4]=[x(" 进入同级路由页面 ")])),_:1}),o(v,{onClick:e[3]||(e[3]=n=>r(2))},{default:c(()=>e[5]||(e[5]=[x(" 进入下级路由页面 ")])),_:1})])]),_:1})])}}});typeof E=="function"&&E(b);const j=$(b,[["__scopeId","data-v-b1252ca6"]]);export{j as default};
