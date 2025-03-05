
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-DfRQBkrM.js";import{d as C,p as v,r as k,C as $,aD as d,a3 as z,s as B,o as F,e as c,f as a,b as n,j as P,aU as f,D,J as M,a as t,h as s,z as N}from"./index-bXAjDhuN.js";import{_ as R}from"./index.vue_vue_type_script_setup_true_lang-BcFGvCSh.js";import{u as S}from"./useMainPage-L5io37NH.js";const V={class:"flex-col-center gap-2"},w=C({name:"PageReload",__name:"index",setup(A){const i=v(),l=S(),o=k(!1);$(()=>{d("f5",r=>{i.settings.toolbar.pageReload&&(r.preventDefault(),l.reload())})}),z(()=>{d.unbind("f5")});function m(){o.value=!0,l.reload()}function u(){location.reload()}return(r,e)=>{const _=R,p=D,b=P,g=x;return F(),B(g,{side:"bottom",disabled:c(i).os==="mac"},{content:a(()=>[t("div",V,[t("p",null,[e[2]||(e[2]=s("按住 ")),n(_,null,{default:a(()=>e[1]||(e[1]=[s("Ctrl")])),_:1}),e[3]||(e[3]=s(" 键并点击"))]),e[4]||(e[4]=t("p",null,"可切换为浏览器原生刷新",-1))])]),default:a(()=>[n(b,{variant:"ghost",size:"icon",onClick:[f(m,["exact"]),f(u,["ctrl","exact"])],onAnimationend:e[0]||(e[0]=I=>o.value=!1)},{default:a(()=>[n(p,{name:"i-iconoir:refresh-double",class:M(["size-4",{animation:c(o)}])},null,8,["class"])]),_:1})]),_:1},8,["disabled"])}}}),J=N(w,[["__scopeId","data-v-7784bb5b"]]);export{J as default};
