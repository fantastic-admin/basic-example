
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{C as e,Tt as t}from"./reactivity.esm-bundler-D9OPVc9J.js";import{Ht as n,St as r,b as i,bt as a,mt as o,o as s,v as c,y as l}from"./runtime-core.esm-bundler-D-xeQwTN.js";var u=[`x`,`y`,`fill`,`font-size`],d={__name:`RecursiveLabels`,props:{color:{type:String,default:`#000000`},dataset:{type:Array,default:()=>[]},hoveredUid:{type:String,default:null}},emits:[`zoom`,`hover`],setup(d,{emit:f}){let p=d,m=e([]);return n(()=>p.dataset,e=>{m.value=e||[]},{immediate:!0}),(e,n)=>{let f=r(`RecursiveLabels`,!0);return o(!0),i(s,null,a(m.value,(e,n)=>(o(),i(s,{key:`level_${n}`},[e.polygonPath&&e.polygonPath.coordinates?(o(),i(s,{key:0},[(o(!0),i(s,null,a(e.polygonPath.coordinates,(r,a)=>(o(),i(`text`,{key:`node_${n}_${a}`,x:r.x,y:r.y+e.circleRadius*2,fill:d.color,"font-size":e.circleRadius,"text-anchor":`middle`,style:{opacity:`0.8`,"pointer-events":`none`}},t(e.name),9,u))),128)),e.nodes&&e.nodes.length>0?(o(),c(f,{key:0,dataset:e.nodes,color:d.color,hoveredUid:d.hoveredUid},null,8,[`dataset`,`color`,`hoveredUid`])):l(``,!0)],64)):l(``,!0)],64))),128)}}};export{d as default};