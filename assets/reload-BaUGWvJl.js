
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{$ as e,A as t,D as n,Nt as r,O as i,Y as a,pt as o,w as s,wt as c,x as l,yt as u}from"./vue.runtime.esm-bundler-CGoWWSM3.js";import{t as d}from"./FaPageMain-BxqvsCDB.js";import{t as f}from"./FaPageHeader-C0sPF5up.js";import{t as p}from"./route-block-DBhJxsjT.js";import{t as m}from"./useMainPage-Ip8NhsFg.js";var h=t({name:`FeatureExampleReload`,__name:`reload`,setup(t){let p=m(),h=c(``);function g(){p.reload()}return(t,c)=>{let p=f,m=e(`ElInput`),_=e(`ElButton`),v=d;return a(),s(`div`,null,[i(p,{title:`主页面刷新`,description:`重新渲染当前页面`}),i(v,null,{default:o(()=>[c[2]||(c[2]=l(`p`,null,`该特性无视页面缓存，意味着即便当前页面开启了页面缓存，手动刷新也会强制清除当前页面内的组件和数据的状态。`,-1)),i(m,{modelValue:r(h),"onUpdate:modelValue":c[0]||(c[0]=e=>u(h)?h.value=e:null)},null,8,[`modelValue`]),i(_,{onClick:g},{default:o(()=>[...c[1]||(c[1]=[n(` 刷新 `,-1)])]),_:1})]),_:1})])}}});typeof p==`function`&&p(h);var g=h;export{g as default};