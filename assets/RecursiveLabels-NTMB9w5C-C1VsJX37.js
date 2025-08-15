
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{an as u,l as p,c as n,o as t,P as d,F as r,y as c,x as y,t as f}from"./index-BSY0Q56E.js";const h=["x","y","fill","font-size"],g={__name:"RecursiveLabels",props:{color:{type:String,default:"#000000"},dataset:{type:Array,default:()=>[]},hoveredUid:{type:String,default:null}},emits:["zoom","hover"],setup(o,{emit:m}){return u(o,"dataset").value.forEach(a=>{a.nodes&&a.nodes.length>0&&a.nodes.forEach(l=>{l.ancestor=a})}),(a,l)=>{const i=p("RecursiveLabels",!0);return t(!0),n(r,null,d(o.dataset,e=>(t(),n(r,null,[e.polygonPath&&e.polygonPath.coordinates?(t(),n(r,{key:0},[(t(!0),n(r,null,d(e.polygonPath.coordinates,s=>(t(),n("text",{x:s.x,y:s.y+e.circleRadius*2,fill:o.color,"font-size":e.circleRadius,"text-anchor":"middle",style:{opacity:"0.8","pointer-events":"none"}},f(e.name),9,h))),256)),e.nodes&&e.nodes.length>0?(t(),y(i,{key:0,dataset:e.nodes,color:o.color,hoveredUid:o.hoveredUid},null,8,["dataset","color","hoveredUid"])):c("",!0)],64)):c("",!0)],64))),256)}}};export{g as default};
