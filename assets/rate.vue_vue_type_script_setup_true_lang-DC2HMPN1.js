
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as v,r as d,a as f,o as V,k as x,e as l,w as r,g as m,f as i,j as p}from"./index-Ruu4zcVF.js";const k=v({__name:"rate",setup(E){const t=d(),n=d(),a=d(3.7);return(w,e)=>{const s=f("ElDivider"),u=f("ElRate");return V(),x("div",null,[l(s,{"content-position":"left"},{default:r(()=>e[3]||(e[3]=[m(" 基础用法 ")])),_:1}),l(u,{modelValue:i(t),"onUpdate:modelValue":e[0]||(e[0]=o=>p(t)?t.value=o:null)},null,8,["modelValue"]),l(s,{"content-position":"left"},{default:r(()=>e[4]||(e[4]=[m(" 辅助文字 ")])),_:1}),l(u,{modelValue:i(n),"onUpdate:modelValue":e[1]||(e[1]=o=>p(n)?n.value=o:null),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"]),l(s,{"content-position":"left"},{default:r(()=>e[5]||(e[5]=[m(" 只读 ")])),_:1}),l(u,{modelValue:i(a),"onUpdate:modelValue":e[2]||(e[2]=o=>p(a)?a.value=o:null),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])}}});export{k as _};