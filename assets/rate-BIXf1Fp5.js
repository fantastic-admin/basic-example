
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{$ as e,$t as t,A as n,D as r,Nt as i,O as a,Y as o,pt as s,w as c,wt as l,yt as u}from"./vue.runtime.esm-bundler-CGoWWSM3.js";var d=n({__name:`rate`,setup(t){let n=l(),d=l(),f=l(3.7);return(t,l)=>{let p=e(`ElDivider`),m=e(`ElRate`);return o(),c(`div`,null,[a(p,{"content-position":`left`},{default:s(()=>[...l[3]||(l[3]=[r(` 基础用法 `,-1)])]),_:1}),a(m,{modelValue:i(n),"onUpdate:modelValue":l[0]||(l[0]=e=>u(n)?n.value=e:null)},null,8,[`modelValue`]),a(p,{"content-position":`left`},{default:s(()=>[...l[4]||(l[4]=[r(` 辅助文字 `,-1)])]),_:1}),a(m,{modelValue:i(d),"onUpdate:modelValue":l[1]||(l[1]=e=>u(d)?d.value=e:null),"show-text":``,texts:[`极差`,`差`,`一般`,`好`,`极好`]},null,8,[`modelValue`]),a(p,{"content-position":`left`},{default:s(()=>[...l[5]||(l[5]=[r(` 只读 `,-1)])]),_:1}),a(m,{modelValue:i(f),"onUpdate:modelValue":l[2]||(l[2]=e=>u(f)?f.value=e:null),disabled:``,"show-score":``,"text-color":`#ff9900`,"score-template":`{value}`},null,8,[`modelValue`])])}}}),f=t({default:()=>p}),p=d;export{f as n,p as t};