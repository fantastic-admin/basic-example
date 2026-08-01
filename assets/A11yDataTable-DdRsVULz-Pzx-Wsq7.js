
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{Tt as e}from"./reactivity.esm-bundler-D9OPVc9J.js";import{E as t,_ as n,b as r,bt as i,mt as a,o,xt as s}from"./runtime-core.esm-bundler-D-xeQwTN.js";import{t as c}from"./_plugin-vue_export-helper-B3ysoDQm-BDNMzG2s.js";var l=[`id`],u={scope:`row`},d=c({__name:`A11yDataTable`,props:{uid:{String,required:!0},head:{Array,default:()=>[]},body:{Array,default:()=>[]},caption:{String,default:`Data table`},notice:{String,default:`A data table is available below.`}},setup(c){return(d,f)=>(a(),r(`div`,{id:`chart-data-table-${c.uid}`,class:`sr-only`,"data-dom-to-png-ignore":``},[n(`p`,null,e(c.notice),1),n(`table`,null,[n(`caption`,null,e(c.caption),1),n(`thead`,null,[n(`tr`,null,[(a(!0),r(o,null,i(c.head,(n,i)=>(a(),r(`th`,{role:`cell`,key:`a11y-head-${i}-${c.uid}`,scope:`col`},[s(d.$slots,`th`,{th:n},()=>[t(e(n),1)],!0)]))),128))])]),n(`tbody`,null,[(a(!0),r(o,null,i(c.body,(l,f)=>(a(),r(`tr`,{key:`a11y-body-${f}-${c.uid}`},[n(`th`,u,e(l[0]),1),(a(!0),r(o,null,i(l.slice(1),(n,i)=>(a(),r(`td`,{key:`a11y-cell-${f}-${i}-${c.uid}`},[s(d.$slots,`td`,{td:n},()=>[t(e(n),1)],!0)]))),128))]))),128))])])],8,l))}},[[`__scopeId`,`data-v-1090a7c5`]]);export{d as t};