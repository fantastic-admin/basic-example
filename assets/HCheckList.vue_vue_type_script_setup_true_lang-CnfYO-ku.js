
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,Y as n,Z as m,G as b,o as s,k as t,F as o,S as _,J as p,c as g,g as f,t as h,_ as k}from"./index-prGsGrIV.js";const v={class:"inline-flex select-none items-center justify-center of-hidden rounded-md bg-stone-3 dark-bg-stone-7"},y=["disabled","onClick"],V=u({__name:"HCheckList",props:n({options:{},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:n(["change"],["update:modelValue"]),setup(i,{emit:d}){const r=d,l=m(i,"modelValue");return b(l,a=>{r("change",a)}),(a,x)=>{const c=k;return s(),t("div",v,[(s(!0),t(o,null,_(a.options,e=>(s(),t("button",{key:e.value,disabled:a.disabled||e.disabled,class:p(["flex cursor-pointer items-center truncate border-size-0 bg-inherit px-2 py-1.5 text-sm disabled-cursor-not-allowed disabled-opacity-50 hover-not-disabled-bg-ui-primary hover-not-disabled-text-ui-text",{"text-ui-text bg-ui-primary":l.value===e.value}]),onClick:C=>l.value=e.value},[e.icon?(s(),g(c,{key:0,name:e.icon},null,8,["name"])):(s(),t(o,{key:1},[f(h(e.label),1)],64))],10,y))),128))])}}});export{V as _};
