
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,r as u,y as f,a as _,o as m,k as p,e as o,w as d,f as v,j as x,R as w,Q as B,aS as h,x as a}from"./index-Ruu4zcVF.js";const g=r({__name:"leavetips",setup(k){const e=u(!0);return f((s,n,t)=>{e.value?h.confirm("当前页面还没有保存，是否确定要离开？","温馨提醒",{confirmButtonText:"确定离开",cancelButtonText:"取消",type:"warning"}).then(()=>{t()}).catch(()=>{}):t()}),(s,n)=>{const t=w,l=_("ElSwitch"),c=B;return m(),p("div",null,[o(t,{title:"页面离开提醒",content:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),o(c,null,{default:d(()=>[o(l,{modelValue:v(e),"onUpdate:modelValue":n[0]||(n[0]=i=>x(e)?e.value=i:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof a=="function"&&a(g);export{g as default};
