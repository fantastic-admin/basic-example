
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{$ as e,C as t,S as n,Tt as r,Xt as i,Y as a,Z as o,h as s,ut as c,w as l}from"./vue.runtime.esm-bundler-NA8UCC27.js";var u=[`x`,`y`,`fill`,`font-size`],d={__name:`RecursiveLabels`,props:{color:{type:String,default:`#000000`},dataset:{type:Array,default:()=>[]},hoveredUid:{type:String,default:null}},emits:[`zoom`,`hover`],setup(d,{emit:f}){let p=d,m=r([]);return c(()=>p.dataset,e=>{m.value=e||[]},{immediate:!0}),(r,c)=>{let f=e(`RecursiveLabels`,!0);return a(!0),l(s,null,o(m.value,(e,r)=>(a(),l(s,{key:`level_${r}`},[e.polygonPath&&e.polygonPath.coordinates?(a(),l(s,{key:0},[(a(!0),l(s,null,o(e.polygonPath.coordinates,(t,n)=>(a(),l(`text`,{key:`node_${r}_${n}`,x:t.x,y:t.y+e.circleRadius*2,fill:d.color,"font-size":e.circleRadius,"text-anchor":`middle`,style:{opacity:`0.8`,"pointer-events":`none`}},i(e.name),9,u))),128)),e.nodes&&e.nodes.length>0?(a(),n(f,{key:0,dataset:e.nodes,color:d.color,hoveredUid:d.hoveredUid},null,8,[`dataset`,`color`,`hoveredUid`])):t(``,!0)],64)):t(``,!0)],64))),128)}}};export{d as default};