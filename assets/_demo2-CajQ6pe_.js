
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,Yt as i,b as a,w as o,wt as s,x as c,yt as l}from"./vue.runtime.esm-bundler-Bt9XxMFS.js";import{f as u}from"./components-C8hqFq5O.js";var d={class:`gap-4 grid`},f={class:`text-sm text-muted-foreground`},p=e({__name:`_demo2`,setup(e){let p=s(`growth`),m=[{label:`创业版`,value:`starter`,description:`适合 1-10 人小团队，保留核心能力。`},{label:`成长版`,value:`growth`,description:`适合多角色协作，支持审批与审计流程。`},{label:`企业版`,value:`enterprise`,description:`高级安全策略与 SSO 即将开放。`,disabled:!0}],h=a(()=>m.find(e=>e.value===p.value)?.label??``);return(e,a)=>{let s=u;return r(),o(`div`,d,[n(s,{modelValue:t(p),"onUpdate:modelValue":a[0]||(a[0]=e=>l(p)?p.value=e:null),options:m},null,8,[`modelValue`]),c(`div`,f,` 已选套餐：`+i(t(h)),1)])}}});export{p as t};