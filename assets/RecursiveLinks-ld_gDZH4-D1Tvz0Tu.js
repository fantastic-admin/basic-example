
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{an as i,l as k,c as r,o as e,F as t,P as c,y as l,a as u,x as g}from"./index-CYGv8gAZ.js";const p=["x1","y1","x2","y2","stroke","stroke-width"],h=["x1","y1","x2","y2","stroke","stroke-width"],f={__name:"RecursiveLinks",props:{dataset:{type:Array,default:()=>[]},color:{type:String,default:"#DDDDDD"},backgroundColor:{type:String,default:"#FFFFFF"}},setup(a){return i(a,"dataset").value.forEach(n=>{n.nodes&&n.nodes.length>0&&n.nodes.forEach(d=>{d.ancestor=n})}),(n,d)=>{const y=k("RecursiveLinks",!0);return e(),r(t,null,[(e(!0),r(t,null,c(a.dataset,o=>(e(),r(t,null,[o.polygonPath&&o.polygonPath.coordinates?(e(!0),r(t,{key:0},c(o.polygonPath.coordinates,(s,x)=>(e(),r(t,null,[o.ancestor&&o.ancestor.polygonPath?(e(),r(t,{key:0},[u("line",{x1:s.x,y1:s.y,x2:o.ancestor.polygonPath.coordinates[0].x,y2:o.ancestor.polygonPath.coordinates[0].y,stroke:a.backgroundColor,"stroke-width":o.circleRadius/1.5},null,8,p),u("line",{x1:s.x,y1:s.y,x2:o.ancestor.polygonPath.coordinates[0].x,y2:o.ancestor.polygonPath.coordinates[0].y,stroke:a.color,"stroke-width":o.circleRadius/2},null,8,h)],64)):l("",!0)],64))),256)):l("",!0)],64))),256)),(e(!0),r(t,null,c(a.dataset,o=>(e(),r(t,null,[o.polygonPath&&o.polygonPath.coordinates?(e(),r(t,{key:0},[o.nodes&&o.nodes.length>0?(e(),g(y,{key:0,dataset:o.nodes,color:a.color,backgroundColor:a.backgroundColor},null,8,["dataset","color","backgroundColor"])):l("",!0)],64)):l("",!0)],64))),256))],64)}}};export{f as default};
