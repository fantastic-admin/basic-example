
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as m,r as d,l as f,c as u,o as _,b as n,f as l,a as t,O as g,e as h,N as k,a8 as v,A as c}from"./index-CG-RNv11.js";const F=m({name:"ComponentExampleUpload",__name:"upload",setup(x){const s=d([{name:"Fantastic-admin.svg",url:"https://fantastic-admin.hurui.me/logo.svg"}]);function p(a,e,o){a.error===""?s.value.push({name:e.name,url:a.error===""?a.data.path:""}):(o.pop(),v.warning(a.error))}return(a,e)=>{const o=g,i=f("FileUpload"),r=k;return _(),u("div",null,[n(o,{title:"上传"},{description:l(()=>e[0]||(e[0]=[t("div",{class:"space-y-2"},[t("p",null,"FileUpload"),t("p",null," 由于线上演示环境开启了 Mock ，会导致上传功能报错，请在本地运行并查看演示 ")],-1)])),_:1}),n(r,{title:"文件上传（默认最多3个）"},{default:l(()=>[n(i,{files:h(s),action:"https://console-mock.apipost.cn/app/mock/project/1f50f1da-5189-4282-d3c7-c133a514c5a8/upload/file",onOnSuccess:p},null,8,["files"])]),_:1})])}}});typeof c=="function"&&c(F);export{F as default};
