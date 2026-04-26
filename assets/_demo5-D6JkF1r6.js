
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,D as t,Dt as n,Nt as r,O as i,Y as a,Yt as o,pt as s,w as c,x as l,yt as u}from"./vue.runtime.esm-bundler-Bt9XxMFS.js";import{V as d,b as f,l as p}from"./components-DBOyn06P.js";var m={class:`flex gap-2`},h={class:`py-4 flex flex-col gap-4`},g={class:`text-sm text-muted-foreground`},_=e({__name:`_demo5`,setup(e){let _=n(!1),v=n(`shanghai`),y=[{label:`Beijing`,value:`beijing`},{label:`Shanghai`,value:`shanghai`},{label:`Shenzhen`,value:`shenzhen`}];return(e,n)=>{let b=d,x=p,S=f;return a(),c(`div`,null,[l(`div`,m,[i(b,{onClick:n[0]||(n[0]=e=>_.value=!0)},{default:s(()=>[...n[3]||(n[3]=[t(` 打开 FaModal `,-1)])]),_:1})]),i(S,{modelValue:r(_),"onUpdate:modelValue":n[2]||(n[2]=e=>u(_)?_.value=e:null),title:`FaModal 中的选择器`,description:`在模态框内容区内使用 FaSelect`,footer:!1,class:`sm:max-w-lg`,"content-class":`min-h-auto`},{default:s(()=>[l(`div`,h,[i(x,{modelValue:r(v),"onUpdate:modelValue":n[1]||(n[1]=e=>u(v)?v.value=e:null),options:y,placeholder:`请选择城市`,class:`w-full`},null,8,[`modelValue`]),l(`div`,g,` 当前值：`+o(r(v)),1)])]),_:1},8,[`modelValue`])])}}});export{_ as t};