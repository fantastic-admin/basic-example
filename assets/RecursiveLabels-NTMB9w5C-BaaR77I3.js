
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{ai as u,l as p,c as r,o as t,P as d,F as n,y as i,x as y,t as f}from"./index-Bw0OMqcE.js";const h=["x","y","fill","font-size"],g={__name:"RecursiveLabels",props:{color:{type:String,default:"#000000"},dataset:{type:Array,default:()=>[]},hoveredUid:{type:String,default:null}},emits:["zoom","hover"],setup(o,{emit:m}){return u(o,"dataset").value.forEach(a=>{a.nodes&&a.nodes.length>0&&a.nodes.forEach(l=>{l.ancestor=a})}),(a,l)=>{const c=p("RecursiveLabels",!0);return t(!0),r(n,null,d(o.dataset,e=>(t(),r(n,null,[e.polygonPath&&e.polygonPath.coordinates?(t(),r(n,{key:0},[(t(!0),r(n,null,d(e.polygonPath.coordinates,s=>(t(),r("text",{x:s.x,y:s.y+e.circleRadius*2,fill:o.color,"font-size":e.circleRadius,"text-anchor":"middle",style:{opacity:"0.8","pointer-events":"none"}},f(e.name),9,h))),256)),e.nodes&&e.nodes.length>0?(t(),y(c,{key:0,dataset:e.nodes,color:o.color,hoveredUid:o.hoveredUid},null,8,["dataset","color","hoveredUid"])):i("",!0)],64)):i("",!0)],64))),256)}}};export{g as default};
