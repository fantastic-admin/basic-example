
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{Nt as e,Y as t,b as n,dt as r,w as i,wt as a}from"./vue.runtime.esm-bundler-CGoWWSM3.js";import{t as o}from"./_plugin-vue_export-helper-CHgC5LLL-CPZIlIKV.js";function s({config:t,dataset:i,skeletonDataset:o,skeletonConfig:s,FINAL_CONFIG:c,prepareConfig:l,callback:u=null,dsIsNumber:d=!1,allowEmptyDataset:f=!1}){let p=a(!1),m=n(()=>{let n=e(t)?.loading??!1,r=e(i),a=f?!1:d?[null,void 0].includes(r):r==null||Array.isArray(r)&&r.length===0||Object.keys(r).length===0;return p.value||n||a}),h=a(e(i));return r(()=>{h.value=m.value?o:e(i),c.value=m.value?s:l(),u&&u()}),{loading:m,FINAL_DATASET:h,manualLoading:p,skeletonDataset:o,skeletonConfig:s}}var c={},l={class:`vue-data-ui-scanner`};function u(e,n){return t(),i(`div`,l)}var d=o(c,[[`render`,u],[`__scopeId`,`data-v-d6376e44`]]);export{d as n,s as t};