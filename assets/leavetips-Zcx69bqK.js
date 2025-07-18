
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as m,r as f,B as u,l as _,c as p,o as d,b as n,O as v,f as x,i as B,e as w,N as C,A as a}from"./index-Bw0OMqcE.js";import{u as F}from"./index-Ck2KK_Mk.js";import"./index.vue_vue_type_script_setup_true_lang-BiOBLCfU.js";const V=m({__name:"leavetips",setup(h){const e=f(!0),s=F();return u((l,o,t)=>{e.value?s.confirm({title:"温馨提醒",content:"当前页面还没有保存，是否确定要离开？",confirmButtonText:"确定离开",onConfirm:()=>{t()}}):t()}),(l,o)=>{const t=v,i=_("ElSwitch"),c=C;return d(),p("div",null,[n(t,{title:"页面离开提醒",description:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),n(c,null,{default:x(()=>[n(i,{modelValue:w(e),"onUpdate:modelValue":o[0]||(o[0]=r=>B(e)?e.value=r:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof a=="function"&&a(V);export{V as default};
