
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{D as e,Q as t,Y as n,Yt as r,Z as i,h as a,w as o,x as s}from"./vue.runtime.esm-bundler-Bt9XxMFS.js";import{t as c}from"./_plugin-vue_export-helper-CHgC5LLL-Cjy1fj-y.js";var l=[`id`],u={scope:`row`},d=c({__name:`A11yDataTable`,props:{uid:{String,required:!0},head:{Array,default:()=>[]},body:{Array,default:()=>[]},caption:{String,default:`Data table`},notice:{String,default:`A data table is available below.`}},setup(c){return(d,f)=>(n(),o(`div`,{id:`chart-data-table-${c.uid}`,class:`sr-only`,"data-dom-to-png-ignore":``},[s(`p`,null,r(c.notice),1),s(`table`,null,[s(`caption`,null,r(c.caption),1),s(`thead`,null,[s(`tr`,null,[(n(!0),o(a,null,i(c.head,(i,a)=>(n(),o(`th`,{role:`cell`,key:`a11y-head-${a}-${c.uid}`,scope:`col`},[t(d.$slots,`th`,{th:i},()=>[e(r(i),1)],!0)]))),128))])]),s(`tbody`,null,[(n(!0),o(a,null,i(c.body,(l,f)=>(n(),o(`tr`,{key:`a11y-body-${f}-${c.uid}`},[s(`th`,u,r(l[0]),1),(n(!0),o(a,null,i(l.slice(1),(i,a)=>(n(),o(`td`,{key:`a11y-cell-${f}-${a}-${c.uid}`},[t(d.$slots,`td`,{td:i},()=>[e(r(i),1)],!0)]))),128))]))),128))])])],8,l))}},[[`__scopeId`,`data-v-1090a7c5`]]);export{d as t};