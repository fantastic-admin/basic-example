
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as c,r as f,c as _,b as n,f as t,N as x,o as E,O as V,a as B,l as a,e as g,i as k,h as C,A as l}from"./index-DbcIveVp.js";import{u as N}from"./useMainPage-mpmjhlcV.js";const P=c({name:"FeatureExampleReload",__name:"reload",setup(v){const s=N(),o=f("");function u(){s.reload()}return(F,e)=>{const r=V,m=a("ElInput"),i=a("ElButton"),p=x;return E(),_("div",null,[n(r,{title:"主页面刷新",description:"重新渲染当前页面"}),n(p,null,{default:t(()=>[e[2]||(e[2]=B("p",null,"该特性无视页面缓存，意味着即便当前页面开启了页面缓存，手动刷新也会强制清除当前页面内的组件和数据的状态。",-1)),n(m,{modelValue:g(o),"onUpdate:modelValue":e[0]||(e[0]=d=>k(o)?o.value=d:null)},null,8,["modelValue"]),n(i,{onClick:u},{default:t(()=>e[1]||(e[1]=[C(" 刷新 ")])),_:1})]),_:1})])}}});typeof l=="function"&&l(P);export{P as default};
