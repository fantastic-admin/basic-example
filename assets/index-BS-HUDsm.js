
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as I,q as P,p as L,D as U,f as y,o as _,c as S,w as v,e as k,k as M,S as O,F as j,am as B,m as q,g as F,t as V,v as G}from"./index-prGsGrIV.js";import H from"./index-CfKhWisY.js";import{_ as W}from"./item.vue_vue_type_script_setup_true_lang-CLPkEpp2.js";var f={};Object.defineProperty(f,"__esModule",{value:!0});f.TokenData=void 0;f.parse=D;var J=f.compile=Y;f.match=ee;f.pathToRegexp=R;f.stringify=re;const E="/",T=n=>n,b=/^[$_\p{ID_Start}]$/u,C=/^[$\u200c\u200d\p{ID_Continue}]$/u,$="https://git.new/pathToRegexpError",K={"{":"{","}":"}","(":"(",")":")","[":"[","]":"]","+":"+","?":"?","!":"!"};function z(n){return n.replace(/[{}()\[\]+?!:*]/g,"\\$&")}function p(n){return n.replace(/[.+*?^${}()[\]|/\\]/g,"\\$&")}function*Q(n){const t=[...n];let e=0;function o(){let s="";if(b.test(t[++e]))for(s+=t[e];C.test(t[++e]);)s+=t[e];else if(t[e]==='"'){let r=e;for(;e<t.length;){if(t[++e]==='"'){e++,r=0;break}t[e]==="\\"?s+=t[++e]:s+=t[e]}if(r)throw new TypeError(`Unterminated quote at ${r}: ${$}`)}if(!s)throw new TypeError(`Missing parameter name at ${e}: ${$}`);return s}for(;e<t.length;){const s=t[e],r=K[s];if(r)yield{type:r,index:e++,value:s};else if(s==="\\")yield{type:"ESCAPED",index:e++,value:t[e++]};else if(s===":"){const i=o();yield{type:"PARAM",index:e,value:i}}else if(s==="*"){const i=o();yield{type:"WILDCARD",index:e,value:i}}else yield{type:"CHAR",index:e,value:t[e++]}}return{type:"END",index:e,value:""}}class X{constructor(t){this.tokens=t}peek(){if(!this._peek){const t=this.tokens.next();this._peek=t.value}return this._peek}tryConsume(t){const e=this.peek();if(e.type===t)return this._peek=void 0,e.value}consume(t){const e=this.tryConsume(t);if(e!==void 0)return e;const{type:o,index:s}=this.peek();throw new TypeError(`Unexpected ${o} at ${s}, expected ${t}: ${$}`)}text(){let t="",e;for(;e=this.tryConsume("CHAR")||this.tryConsume("ESCAPED");)t+=e;return t}}class x{constructor(t){this.tokens=t}}f.TokenData=x;function D(n,t={}){const{encodePath:e=T}=t,o=new X(Q(n));function s(i){const a=[];for(;;){const u=o.text();u&&a.push({type:"text",value:e(u)});const c=o.tryConsume("PARAM");if(c){a.push({type:"param",name:c});continue}const h=o.tryConsume("WILDCARD");if(h){a.push({type:"wildcard",name:h});continue}if(o.tryConsume("{")){a.push({type:"group",tokens:s("}")});continue}return o.consume(i),a}}const r=s("END");return new x(r)}function Y(n,t={}){const{encode:e=encodeURIComponent,delimiter:o=E}=t,s=n instanceof x?n:D(n,t),r=A(s.tokens,o,e);return function(a={}){const[u,...c]=r(a);if(c.length)throw new TypeError(`Missing parameters: ${c.join(", ")}`);return u}}function A(n,t,e){const o=n.map(s=>Z(s,t,e));return s=>{const r=[""];for(const i of o){const[a,...u]=i(s);r[0]+=a,r.push(...u)}return r}}function Z(n,t,e){if(n.type==="text")return()=>[n.value];if(n.type==="group"){const s=A(n.tokens,t,e);return r=>{const[i,...a]=s(r);return a.length?[""]:[i]}}const o=e||T;return n.type==="wildcard"&&e!==!1?s=>{const r=s[n.name];if(r==null)return["",n.name];if(!Array.isArray(r)||r.length===0)throw new TypeError(`Expected "${n.name}" to be a non-empty array`);return[r.map((i,a)=>{if(typeof i!="string")throw new TypeError(`Expected "${n.name}/${a}" to be a string`);return o(i)}).join(t)]}:s=>{const r=s[n.name];if(r==null)return["",n.name];if(typeof r!="string")throw new TypeError(`Expected "${n.name}" to be a string`);return[o(r)]}}function ee(n,t={}){const{decode:e=decodeURIComponent,delimiter:o=E}=t,{regexp:s,keys:r}=R(n,t),i=r.map(a=>e===!1?T:a.type==="param"?e:u=>u.split(o).map(e));return function(u){const c=s.exec(u);if(!c)return!1;const h=c[0],l=Object.create(null);for(let m=1;m<c.length;m++){if(c[m]===void 0)continue;const d=r[m-1],w=i[m-1];l[d.name]=w(c[m])}return{path:h,params:l}}}function R(n,t={}){const{delimiter:e=E,end:o=!0,sensitive:s=!1,trailing:r=!0}=t,i=[],a=[],u=s?"":"i",h=(Array.isArray(n)?n:[n]).map(d=>d instanceof x?d:D(d,t));for(const{tokens:d}of h)for(const w of g(d,0,[])){const N=te(w,e,i);a.push(N)}let l=`^(?:${a.join("|")})`;return r&&(l+=`(?:${p(e)}$)?`),l+=o?"$":`(?=${p(e)}|$)`,{regexp:new RegExp(l,u),keys:i}}function*g(n,t,e){if(t===n.length)return yield e;const o=n[t];if(o.type==="group"){const s=e.slice();for(const r of g(o.tokens,0,s))yield*g(n,t+1,r)}else e.push(o);yield*g(n,t+1,e)}function te(n,t,e){let o="",s="",r=!0;for(let i=0;i<n.length;i++){const a=n[i];if(a.type==="text"){o+=p(a.value),s+=a.value,r||(r=a.value.includes(t));continue}if(a.type==="param"||a.type==="wildcard"){if(!r&&!s)throw new TypeError(`Missing text after "${a.name}": ${$}`);a.type==="param"?o+=`(${ne(t,r?"":s)}+)`:o+="([\\s\\S]+)",e.push(a),s="",r=!1;continue}}return o}function ne(n,t){return t.length<2?n.length<2?`[^${p(n+t)}]`:`(?:(?!${p(n)})[^${p(t)}])`:n.length<2?`(?:(?!${p(t)})[^${p(n)}])`:`(?:(?!${p(t)}|${p(n)})[\\s\\S])`}function re(n){return n.tokens.map(function t(e,o,s){if(e.type==="text")return z(e.value);if(e.type==="group")return`{${e.tokens.map(t).join("")}}`;const i=se(e.name)&&oe(s[o+1])?e.name:JSON.stringify(e.name);if(e.type==="param")return`:${i}`;if(e.type==="wildcard")return`*${i}`;throw new TypeError(`Unexpected token: ${e}`)}).join("")}function se(n){const[t,...e]=n;return b.test(t)?e.every(o=>C.test(o)):!1}function oe(n){return(n==null?void 0:n.type)!=="text"?!0:!C.test(n.value[0])}const ae=I({__name:"index",setup(n){const t=P(),e=L(),o=U(()=>{const r=[];return e.settings.home.enable&&r.push({path:e.settings.home.fullPath,title:e.settings.home.title}),t.meta.breadcrumbNeste&&t.meta.breadcrumbNeste.forEach(i=>{i.hide===!1&&r.push({path:i.path,title:i.title})}),r});function s(r){return J(r)(t.params)}return(r,i)=>y(e).mode==="pc"&&y(e).settings.app.routeBaseOn!=="filesystem"?(_(),S(H,{key:0,class:"breadcrumb whitespace-nowrap px-2"},{default:v(()=>[k(B,{name:"breadcrumb"},{default:v(()=>[(_(!0),M(j,null,O(y(o),(a,u)=>(_(),S(W,{key:`${u}_${a.path}_${a.title}`,to:u<y(o).length-1&&a.path!==""?s(a.path):""},{default:v(()=>[F(V(a.title),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})):q("",!0)}}),pe=G(ae,[["__scopeId","data-v-810d212a"]]);export{pe as default};
