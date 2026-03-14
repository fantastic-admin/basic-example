
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,X as p,w as f,ak as b,u as s,o as d,c as V,n as i,a as r,i as g,a5 as _,a6 as v,z as x,B as y}from"./index-B4WIbcLL.js";const B=u({__name:"Input",props:{defaultValue:{},modelValue:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["update:modelValue"],setup(a,{emit:o}){const e=a,l=p(e,"modelValue",o,{passive:!0,defaultValue:e.defaultValue});return(t,n)=>f((d(),V("input",{"onUpdate:modelValue":n[0]||(n[0]=m=>g(l)?l.value=m:null),class:i(s(r)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e.class))},null,2)),[[b,s(l)]])}}),k=u({name:"FaInput",__name:"index",props:_({disabled:{type:Boolean},class:{type:[Boolean,null,String,Object,Array]}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const o=a,e=v(a,"modelValue");return(c,l)=>(d(),x(s(B),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),disabled:a.disabled,autocomplete:"off",class:i(s(r)("w-[200px]",o.class))},null,8,["modelValue","disabled","class"]))}}),M=y(k,[["__scopeId","data-v-e7ac8986"]]);export{M as _};
