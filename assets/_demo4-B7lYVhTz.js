
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,Yt as i,b as a,w as o,wt as s,x as c,yt as l}from"./vue.runtime.esm-bundler-Bt9XxMFS.js";import{U as u}from"./components-C8hqFq5O.js";var d={class:`gap-4 grid`},f={class:`text-sm text-muted-foreground`},p=e({__name:`_demo4`,setup(e){let p=s([`dashboard`]),m=[{label:`看板订阅`,value:`dashboard`},{label:`周报摘要`,value:`report`},{label:`系统告警`,value:`alarm`}],h=a(()=>m.filter(e=>p.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,a)=>{let s=u;return r(),o(`div`,d,[n(s,{modelValue:t(p),"onUpdate:modelValue":a[0]||(a[0]=e=>l(p)?p.value=e:null),options:m,min:1,max:2},null,8,[`modelValue`]),c(`div`,f,` 当前值：`+i(t(h)),1),a[1]||(a[1]=c(`div`,{class:`text-xs text-muted-foreground leading-5`},` 已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。 `,-1))])}}});export{p as t};