
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{e as p,K as v,L as h,c as o,o as t,R as i,F as r,A as c,z as f,t as g}from"./index-CJB5jCfL.js";const k=["x","y","fill","font-size"],_={__name:"RecursiveLabels",props:{color:{type:String,default:"#000000"},dataset:{type:Array,default:()=>[]},hoveredUid:{type:String,default:null}},emits:["zoom","hover"],setup(a,{emit:x}){const u=a,l=p([]);return v(()=>u.dataset,n=>{l.value=n||[]},{immediate:!0}),(n,L)=>{const y=h("RecursiveLabels",!0);return t(!0),o(r,null,i(l.value,(e,s)=>(t(),o(r,{key:"level_".concat(s)},[e.polygonPath&&e.polygonPath.coordinates?(t(),o(r,{key:0},[(t(!0),o(r,null,i(e.polygonPath.coordinates,(d,m)=>(t(),o("text",{key:"node_".concat(s,"_").concat(m),x:d.x,y:d.y+e.circleRadius*2,fill:a.color,"font-size":e.circleRadius,"text-anchor":"middle",style:{opacity:"0.8","pointer-events":"none"}},g(e.name),9,k))),128)),e.nodes&&e.nodes.length>0?(t(),f(y,{key:0,dataset:e.nodes,color:a.color,hoveredUid:a.hoveredUid},null,8,["dataset","color","hoveredUid"])):c("",!0)],64)):c("",!0)],64))),128)}}};export{_ as default};
