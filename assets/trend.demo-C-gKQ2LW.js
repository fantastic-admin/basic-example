
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as y,D as g,o as i,k as p,t as u,m as f,b as n,e as t,f as _,J as C,_ as k,v as w,a as d,w as s,x as m,R as $,Q as E}from"./index-Ruu4zcVF.js";const h={key:0,class:"prefix"},B={class:"text"},b={key:1,class:"suffix"},N=y({name:"Trend",__name:"index",props:{value:{},type:{default:"up"},prefix:{default:""},suffix:{default:""},reverse:{type:Boolean,default:!1}},setup(c){const a=c,l=g(()=>{let e=a.type==="up";return a.reverse&&(e=!e),e});return(e,r)=>{const o=k;return i(),p("div",{class:C(["flex items-center transition",`${_(l)?"c-green":"c-red"}`])},[e.prefix?(i(),p("span",h,u(e.prefix),1)):f("",!0),n("span",B,u(e.value),1),e.suffix?(i(),p("span",b,u(e.suffix),1)):f("",!0),t(o,{name:"i-ep:caret-top",rotate:_(l)?0:180,class:"ml-1 transition"},null,8,["rotate"])],2)}}}),v={};function R(c,a){const l=$,e=N,r=E,o=d("ElCol"),x=d("ElRow");return i(),p("div",null,[t(l,{title:"趋势符号"},{content:s(()=>a[0]||(a[0]=[n("p",null,"Trend",-1),n("p",{style:{"margin-bottom":"0"}}," 标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外 ",-1)])),_:1}),t(x,{gutter:20,style:{margin:"0 10px"}},{default:s(()=>[t(o,{md:8},{default:s(()=>[t(r,{title:"基础用法",style:{margin:"0"}},{default:s(()=>[n("p",null,[t(e,{value:"12.3"})]),n("p",null,[t(e,{value:"12.3",type:"down"})])]),_:1})]),_:1}),t(o,{md:8},{default:s(()=>[t(r,{title:"颜色反转",style:{margin:"0"}},{default:s(()=>[n("p",null,[t(e,{value:"12.3",reverse:""})]),n("p",null,[t(e,{value:"12.3",type:"down",reverse:""})])]),_:1})]),_:1}),t(o,{md:8},{default:s(()=>[t(r,{title:"前缀后缀",style:{margin:"0"}},{default:s(()=>[n("p",null,[t(e,{value:"12.3",prefix:"$"})]),n("p",null,[t(e,{value:"12.3",suffix:"%"})])]),_:1})]),_:1})]),_:1})])}typeof m=="function"&&m(v);const V=w(v,[["render",R]]);export{V as default};