
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Vt as t,j as n}from"./src-CLMBPGj1.js";import{B as r,bt as i}from"./reactivity.esm-bundler-D9OPVc9J.js";import{$ as a,D as o,Ft as s,Ht as c,Pt as l,b as u,g as d,k as f,mt as p,qt as m,xt as h}from"./runtime-core.esm-bundler-D-xeQwTN.js";import{t as g}from"./Label-uKojphyP.js";var _=n(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]),v=f({name:`BuiltInCheckbox`,__name:`index`,props:a({id:{},disabled:{type:Boolean},class:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]},labelClass:{type:[Boolean,null,String,Object,Array]}},{modelValue:{},modelModifiers:{}}),emits:a([`change`],[`update:modelValue`]),setup(n,{emit:a}){let f=n,_=a,v=s(n,`modelValue`),y=l(),b=d(()=>f.id||y);return c(v,e=>{_(`change`,e)}),(a,s)=>(p(),u(`div`,{class:i(r(t)(`flex-center-start gap-2`,f.class))},[o(r(e),{id:b.value,modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=e=>v.value=e),disabled:n.disabled,class:i(f.itemClass)},null,8,[`id`,`modelValue`,`disabled`,`class`]),o(r(g),{for:b.value,class:i(r(t)(`text-sm cursor-pointer empty:hidden`,f.disabled&&`cursor-not-allowed opacity-60`,f.labelClass))},{default:m(()=>[h(a.$slots,`default`)]),_:3},8,[`for`,`class`])],2))}});export{_ as n,v as t};