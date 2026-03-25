
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{A as e,N as t,h as n,m as r,y as i,z as a}from"./vue.runtime.esm-bundler-CGoWWSM3.js";function o(e){return e?e.flatMap(e=>e.type===n?o(e.children):[e]):[]}var s=e({name:`PrimitiveSlot`,inheritAttrs:!1,setup(e,{attrs:t,slots:n}){return()=>{if(!n.default)return null;let e=o(n.default()),s=e.findIndex(e=>e.type!==r);if(s===-1)return e;let c=e[s];delete c.props?.ref;let l=c.props?a(t,c.props):t,u=i({...c,props:{}},l);return e.length===1?u:(e[s]=u,e)}}}),c=[`area`,`img`,`input`],l=e({name:`Primitive`,inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:`div`}},setup(e,{attrs:n,slots:r}){let i=e.asChild?`template`:e.as;return typeof i==`string`&&c.includes(i)?()=>t(i,n):i===`template`?()=>t(s,n,{default:r.default}):()=>t(e.as,n,{default:r.default})}});export{s as n,o as r,l as t};