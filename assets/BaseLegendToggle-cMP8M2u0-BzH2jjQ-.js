
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{Jt as e,Kt as t,O as n,Y as r,f as i,w as a,x as o}from"./vue.runtime.esm-bundler-Bt9XxMFS.js";import{t as s}from"./_plugin-vue_export-helper-CHgC5LLL-HmfZPj4T.js";import{t as c}from"./BaseIcon-DX0hTWa--0MVdmIKc.js";var l=s({__name:`BaseLegendToggle`,props:{backgroundColor:{type:String,default:`#CCCCCC`},color:{type:String,default:`#2D353C`},fontSize:{type:Number,default:14},checked:{type:Boolean},isCursorPointer:{type:Boolean}},emits:[`toggle`],setup(s,{emit:l}){let u=l;return(l,d)=>(r(),a(`div`,{class:t({"vue-ui-legend-toggle-wrapper":s.isCursorPointer}),"data-dom-to-png-ignore":``},[o(`div`,{class:`vue-ui-legend-toggle`,role:`button`,tabindex:`0`,onClick:d[0]||(d[0]=e=>u(`toggle`)),onKeydown:d[1]||(d[1]=i(e=>u(`toggle`),[`enter`])),style:e({position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:s.backgroundColor,padding:s.fontSize/4+`px`})},[n(c,{name:s.checked?`minus`:`check`,stroke:s.color,size:s.fontSize*.6,"stroke-width":s.fontSize/4},null,8,[`name`,`stroke`,`size`,`stroke-width`])],36)],2))}},[[`__scopeId`,`data-v-f05513e8`]]);export{l as t};