
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t}from"./reactivity.esm-bundler-D9OPVc9J.js";import{Ut as n,b as r,g as i,mt as a}from"./runtime-core.esm-bundler-D-xeQwTN.js";import{t as o}from"./_plugin-vue_export-helper-B3ysoDQm-BDNMzG2s.js";function s({config:r,dataset:a,skeletonDataset:o,skeletonConfig:s,FINAL_CONFIG:c,prepareConfig:l,callback:u=null,dsIsNumber:d=!1,allowEmptyDataset:f=!1}){let p=t(!1),m=i(()=>{let t=e(r)?.loading??!1,n=e(a),i=f?!1:d?[null,void 0].includes(n):n==null||Array.isArray(n)&&n.length===0||Object.keys(n).length===0;return p.value||t||i}),h=t(e(a));return n(()=>{h.value=m.value?o:e(a),c.value=m.value?s:l(),u&&u()}),{loading:m,FINAL_DATASET:h,manualLoading:p,skeletonDataset:o,skeletonConfig:s}}var c={},l={class:`vue-data-ui-scanner`};function u(e,t){return a(),r(`div`,l)}var d=o(c,[[`render`,u],[`__scopeId`,`data-v-8c8b2e12`]]);export{s as n,d as t};