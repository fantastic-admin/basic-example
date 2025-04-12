
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,aa as p,w as f,ab as b,e as a,o as i,c as V,J as r,a1 as c,i as _,a2 as g,a3 as v,s as x,z as k}from"./index-DQQ9U9o4.js";const w=d({__name:"Input",props:{defaultValue:{},modelValue:{},class:{}},emits:["update:modelValue"],setup(l,{emit:o}){const e=l,s=p(e,"modelValue",o,{passive:!0,defaultValue:e.defaultValue});return(n,u)=>f((i(),V("input",{"onUpdate:modelValue":u[0]||(u[0]=m=>_(s)?s.value=m:null),class:r(a(c)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e.class))},null,2)),[[b,a(s)]])}}),M=d({name:"FaInput",__name:"index",props:g({disabled:{type:Boolean},class:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const o=l,e=v(l,"modelValue");return(t,s)=>(i(),x(a(w),{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=n=>e.value=n),disabled:t.disabled,autocomplete:"off",class:r(a(c)("w-[200px]",o.class))},null,8,["modelValue","disabled","class"]))}}),y=k(M,[["__scopeId","data-v-e7ac8986"]]);export{y as _};
