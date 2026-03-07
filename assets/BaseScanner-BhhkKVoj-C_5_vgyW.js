
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{s as E}from"./vue-data-ui-DTSi6_kV.js";import{e as d,u as l,N as I,at as N,c as y,o as C}from"./index-Dkrni94Y.js";function F({config:n,dataset:a,skeletonDataset:s,skeletonConfig:o,FINAL_CONFIG:p,prepareConfig:v,callback:r=null,dsIsNumber:g=!1,allowEmptyDataset:m=!1}){const c=d(!1),t=I(()=>{var f,i;const k=(i=(f=l(n))==null?void 0:f.loading)!=null?i:!1,e=l(a),A=m?!1:g?[null,void 0].includes(e):e==null||Array.isArray(e)&&e.length===0||Object.keys(e).length===0;return c.value||k||A}),u=d(l(a));return N(()=>{u.value=t.value?s:l(a),p.value=t.value?o:v(),r&&r()}),{loading:t,FINAL_DATASET:u,manualLoading:c,skeletonDataset:s,skeletonConfig:o}}const D={},L={class:"vue-data-ui-scanner"};function _(n,a){return C(),y("div",L)}const T=E(D,[["render",_],["__scopeId","data-v-d6376e44"]]);export{F as T,T as j};
