
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{$ as e,A as t,Nt as n,O as r,Y as i,pt as a,w as o,wt as s,yt as c}from"./vue.runtime.esm-bundler-CGoWWSM3.js";import{t as l}from"./FaPageMain-BxqvsCDB.js";import{t as u}from"./FaPageHeader-C0sPF5up.js";import{t as d}from"./route-block-DBhJxsjT.js";import{_ as f}from"./index-iSM9h_E1.js";import{t as p}from"./FaModal-BwzfWck7.js";var m=t({__name:`leavetips`,setup(t){let d=s(!0),m=p();return f((e,t,n)=>{d.value?m.confirm({title:`温馨提醒`,content:`当前页面还没有保存，是否确定要离开？`,confirmButtonText:`确定离开`,onConfirm:()=>{n()}}):n()}),(t,s)=>{let f=u,p=e(`ElSwitch`),m=l;return i(),o(`div`,null,[r(f,{title:`页面离开提醒`,description:`在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空`}),r(m,null,{default:a(()=>[r(p,{modelValue:n(d),"onUpdate:modelValue":s[0]||(s[0]=e=>c(d)?d.value=e:null),"active-text":`开启提醒`,"inactive-text":`关闭提醒`},null,8,[`modelValue`])]),_:1})])}}});typeof d==`function`&&d(m);var h=m;export{h as default};