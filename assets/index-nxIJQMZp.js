
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,ap as p,w as f,ak as b,u as a,o as d,c as V,n as i,a as r,i as _,a5 as g,a6 as v,z as x,B as k}from"./index-CJB5jCfL.js";const w=u({__name:"Input",props:{defaultValue:{},modelValue:{},class:{}},emits:["update:modelValue"],setup(s,{emit:o}){const e=s,l=p(e,"modelValue",o,{passive:!0,defaultValue:e.defaultValue});return(t,n)=>f((d(),V("input",{"onUpdate:modelValue":n[0]||(n[0]=m=>_(l)?l.value=m:null),class:i(a(r)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e.class))},null,2)),[[b,a(l)]])}}),B=u({name:"FaInput",__name:"index",props:g({disabled:{type:Boolean},class:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const o=s,e=v(s,"modelValue");return(c,l)=>(d(),x(a(w),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),disabled:s.disabled,autocomplete:"off",class:i(a(r)("w-[200px]",o.class))},null,8,["modelValue","disabled","class"]))}}),y=k(B,[["__scopeId","data-v-e7ac8986"]]);export{y as _};
