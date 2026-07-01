
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,O as t,Pt as n,Q as r,R as i,Y as a,at as o,b as s,it as c,pt as l,qt as u,ut as d,w as f}from"./vue.runtime.esm-bundler-NA8UCC27.js";import{A as p,j as m,yt as h}from"./src-C-5f1Hx7.js";import{t as g}from"./Label-BESwslhm.js";var _=m(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]),v=e({name:`BuiltInCheckbox`,__name:`index`,props:i({id:{},disabled:{type:Boolean},class:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]},labelClass:{type:[Boolean,null,String,Object,Array]}},{modelValue:{},modelModifiers:{}}),emits:i([`change`],[`update:modelValue`]),setup(e,{emit:i}){let m=e,_=i,v=o(e,`modelValue`),y=c(),b=s(()=>m.id||y);return d(v,e=>{_(`change`,e)}),(i,o)=>(a(),f(`div`,{class:u(n(h)(`flex-center-start gap-2`,m.class))},[t(n(p),{id:b.value,modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=e=>v.value=e),disabled:e.disabled,class:u(m.itemClass)},null,8,[`id`,`modelValue`,`disabled`,`class`]),t(n(g),{for:b.value,class:u(n(h)(`text-sm cursor-pointer empty:hidden`,m.disabled&&`cursor-not-allowed opacity-60`,m.labelClass))},{default:l(()=>[r(i.$slots,`default`)]),_:3},8,[`for`,`class`])],2))}});export{_ as n,v as t};