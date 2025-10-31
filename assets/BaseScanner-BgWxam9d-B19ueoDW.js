
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{s as A}from"./vue-data-ui-BN9YfUec.js";import{e as d,J as I,u as n,at as C,c as E,o as L}from"./index-DXZKKOp8.js";function B({config:l,dataset:a,skeletonDataset:o,skeletonConfig:s,FINAL_CONFIG:g,prepareConfig:m,callback:r=null,dsIsNumber:p=!1}){const u=d(!1),t=I(()=>{var i,f;const v=(f=(i=n(l))==null?void 0:i.loading)!=null?f:!1,e=n(a),k=p?[null,void 0].includes(e):e==null||Array.isArray(e)&&e.length===0||Object.keys(e).length===0;return u.value||v||k}),c=d(n(a));return C(()=>{c.value=t.value?o:n(a),g.value=t.value?s:m(),r&&r()}),{loading:t,FINAL_DATASET:c,manualLoading:u,skeletonDataset:o,skeletonConfig:s}}const N={},_={class:"vue-data-ui-scanner"};function b(l,a){return L(),E("div",_)}const D=A(N,[["render",b],["__scopeId","data-v-d6376e44"]]);export{B as S,D as T};
