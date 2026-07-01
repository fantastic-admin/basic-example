
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{Pt as e,Tt as t,Y as n,b as r,dt as i,w as a}from"./vue.runtime.esm-bundler-NA8UCC27.js";import{t as o}from"./_plugin-vue_export-helper-B3ysoDQm-BDNMzG2s.js";function s({config:n,dataset:a,skeletonDataset:o,skeletonConfig:s,FINAL_CONFIG:c,prepareConfig:l,callback:u=null,dsIsNumber:d=!1,allowEmptyDataset:f=!1}){let p=t(!1),m=r(()=>{let t=e(n)?.loading??!1,r=e(a),i=f?!1:d?[null,void 0].includes(r):r==null||Array.isArray(r)&&r.length===0||Object.keys(r).length===0;return p.value||t||i}),h=t(e(a));return i(()=>{h.value=m.value?o:e(a),c.value=m.value?s:l(),u&&u()}),{loading:m,FINAL_DATASET:h,manualLoading:p,skeletonDataset:o,skeletonConfig:s}}var c={},l={class:`vue-data-ui-scanner`};function u(e,t){return n(),a(`div`,l)}var d=o(c,[[`render`,u],[`__scopeId`,`data-v-8c8b2e12`]]);export{s as n,d as t};