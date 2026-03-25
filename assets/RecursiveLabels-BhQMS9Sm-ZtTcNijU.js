
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{$ as e,C as t,S as n,Y as r,Yt as i,Z as a,h as o,ut as s,w as c,wt as l}from"./vue.runtime.esm-bundler-CGoWWSM3.js";var u=[`x`,`y`,`fill`,`font-size`],d={__name:`RecursiveLabels`,props:{color:{type:String,default:`#000000`},dataset:{type:Array,default:()=>[]},hoveredUid:{type:String,default:null}},emits:[`zoom`,`hover`],setup(d,{emit:f}){let p=d,m=l([]);return s(()=>p.dataset,e=>{m.value=e||[]},{immediate:!0}),(s,l)=>{let f=e(`RecursiveLabels`,!0);return r(!0),c(o,null,a(m.value,(e,s)=>(r(),c(o,{key:`level_${s}`},[e.polygonPath&&e.polygonPath.coordinates?(r(),c(o,{key:0},[(r(!0),c(o,null,a(e.polygonPath.coordinates,(t,n)=>(r(),c(`text`,{key:`node_${s}_${n}`,x:t.x,y:t.y+e.circleRadius*2,fill:d.color,"font-size":e.circleRadius,"text-anchor":`middle`,style:{opacity:`0.8`,"pointer-events":`none`}},i(e.name),9,u))),128)),e.nodes&&e.nodes.length>0?(r(),n(f,{key:0,dataset:e.nodes,color:d.color,hoveredUid:d.hoveredUid},null,8,[`dataset`,`color`,`hoveredUid`])):t(``,!0)],64)):t(``,!0)],64))),128)}}};export{d as default};