
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,a as p,o,c as l,w as s,X as t,g as n,t as i,ac as d,k as c}from"./index-Ruu4zcVF.js";const m={key:1},k=r({__name:"HTooltip",props:{text:{default:""},enable:{type:Boolean,default:!0}},setup(u){return(e,f)=>{const a=p("VTooltip");return e.enable?(o(),l(a,d({key:0,"popper-triggers":["hover"]},e.$attrs),{popper:s(()=>[t(e.$slots,"text",{},()=>[n(i(e.text),1)])]),default:s(()=>[t(e.$slots,"default")]),_:3},16)):(o(),c("div",m,[t(e.$slots,"default")]))}}});export{k as _};