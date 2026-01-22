
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{s as E}from"./vue-data-ui-8Gmf-dDN.js";import{e as d,J as I,u as l,au as y,c as C,o as D}from"./index-CJB5jCfL.js";function F({config:s,dataset:a,skeletonDataset:t,skeletonConfig:o,FINAL_CONFIG:p,prepareConfig:v,callback:r=null,dsIsNumber:g=!1,allowEmptyDataset:m=!1}){const u=d(!1),n=I(()=>{var f,i;const k=(i=(f=l(s))==null?void 0:f.loading)!=null?i:!1,e=l(a),A=m?!1:g?[null,void 0].includes(e):e==null||Array.isArray(e)&&e.length===0||Object.keys(e).length===0;return u.value||k||A}),c=d(l(a));return y(()=>{c.value=n.value?t:l(a),p.value=n.value?o:v(),r&&r()}),{loading:n,FINAL_DATASET:c,manualLoading:u,skeletonDataset:t,skeletonConfig:o}}const L={},N={class:"vue-data-ui-scanner"};function _(s,a){return D(),C("div",N)}const T=E(L,[["render",_],["__scopeId","data-v-d6376e44"]]);export{F as T,T as j};
