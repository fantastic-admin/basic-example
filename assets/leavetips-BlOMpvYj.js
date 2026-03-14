
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as m,D as u,K as f,c as _,o as p,g as n,Q as d,h as v,i as x,e as C,u as h,P as w,C as a}from"./index-B4WIbcLL.js";import{u as B}from"./index-B0dju3f5.js";import"./index.vue_vue_type_script_setup_true_lang-8RcxHuQ8.js";const F=m({__name:"leavetips",setup(V){const e=C(!0),s=B();return u((l,o,t)=>{e.value?s.confirm({title:"温馨提醒",content:"当前页面还没有保存，是否确定要离开？",confirmButtonText:"确定离开",onConfirm:()=>{t()}}):t()}),(l,o)=>{const t=d,i=f("ElSwitch"),c=w;return p(),_("div",null,[n(t,{title:"页面离开提醒",description:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),n(c,null,{default:v(()=>[n(i,{modelValue:h(e),"onUpdate:modelValue":o[0]||(o[0]=r=>x(e)?e.value=r:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof a=="function"&&a(F);export{F as default};
