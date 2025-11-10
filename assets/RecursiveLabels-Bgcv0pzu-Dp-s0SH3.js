
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{ar as y,L as h,c as r,o as t,R as d,F as n,A as c,z as m,t as f}from"./index-BiXmQh6r.js";const v=["x","y","fill","font-size"],x={__name:"RecursiveLabels",props:{color:{type:String,default:"#000000"},dataset:{type:Array,default:()=>[]},hoveredUid:{type:String,default:null}},emits:["zoom","hover"],setup(o,{emit:g}){return y(o,"dataset").value.forEach(a=>{a.nodes&&a.nodes.length>0&&a.nodes.forEach(l=>{l.ancestor=a})}),(a,l)=>{const i=h("RecursiveLabels",!0);return t(!0),r(n,null,d(o.dataset,(e,u)=>(t(),r(n,null,[e.polygonPath&&e.polygonPath.coordinates?(t(),r(n,{key:0},[(t(!0),r(n,null,d(e.polygonPath.coordinates,(s,p)=>(t(),r("text",{key:"node_".concat(u,"_").concat(p),x:s.x,y:s.y+e.circleRadius*2,fill:o.color,"font-size":e.circleRadius,"text-anchor":"middle",style:{opacity:"0.8","pointer-events":"none"}},f(e.name),9,v))),128)),e.nodes&&e.nodes.length>0?(t(),m(i,{key:0,dataset:e.nodes,color:o.color,hoveredUid:o.hoveredUid},null,8,["dataset","color","hoveredUid"])):c("",!0)],64)):c("",!0)],64))),256)}}};export{x as default};
