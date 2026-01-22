
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as m,e as u,D as f,L as _,c as p,o as d,g as n,Q as v,h as x,i as C,u as h,P as w,C as a}from"./index-CJB5jCfL.js";import{u as B}from"./index-BrphWx2z.js";import"./index.vue_vue_type_script_setup_true_lang-CVzIja2y.js";const F=m({__name:"leavetips",setup(V){const e=u(!0),s=B();return f((l,o,t)=>{e.value?s.confirm({title:"温馨提醒",content:"当前页面还没有保存，是否确定要离开？",confirmButtonText:"确定离开",onConfirm:()=>{t()}}):t()}),(l,o)=>{const t=v,i=_("ElSwitch"),c=w;return d(),p("div",null,[n(t,{title:"页面离开提醒",description:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),n(c,null,{default:x(()=>[n(i,{modelValue:h(e),"onUpdate:modelValue":o[0]||(o[0]=r=>C(e)?e.value=r:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof a=="function"&&a(F);export{F as default};
