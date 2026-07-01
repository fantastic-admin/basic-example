
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,B as t,C as n,Ct as r,D as i,Jt as a,K as o,M as s,N as c,O as l,Ot as u,Pt as d,Q as f,R as p,S as m,Tt as h,Xt as g,Y as _,Yt as v,Z as y,at as b,b as x,d as S,dt as C,f as ee,h as w,it as te,jt as ne,mt as T,ot as re,p as ie,pt as E,q as ae,qt as D,st as oe,ut as se,w as O,x as k,z as A}from"./vue.runtime.esm-bundler-NA8UCC27.js";import{A as ce,Bt as le,C as ue,D as de,E as j,F as fe,I as pe,K as me,L as he,M,N,O as P,P as ge,S as _e,T as ve,Yt as ye,Zt as be,_ as xe,_t as Se,a as F,b as I,c as Ce,ct as we,d as Te,f as Ee,ft as De,g as L,gt as Oe,h as ke,ht as Ae,i as je,it as Me,jt as Ne,k as Pe,l as Fe,lt as R,m as z,mt as Ie,n as B,o as Le,p as Re,s as V,t as H,tt as ze,u as Be,ut as Ve,v as He,vt as U,w as Ue,x as We,y as W,yt as G,zt as Ge}from"./src-C-5f1Hx7.js";import{n as K,t as q}from"./form-DcKYWXuy.js";import{i as Ke,n as qe,r as Je,t as J}from"./popover-DoNrdtXg.js";import{t as Y}from"./slider-Cyd2fzo0.js";import{t as Ye}from"./Label-BESwslhm.js";import{t as Xe}from"./number-field-Ncd014g7.js";import{t as Ze}from"./checkbox-DwLsyIpA.js";import{t as Qe}from"./fixed-bar-CXTsxUfd.js";import{t as X}from"./input-otp-Bh1fPt0B.js";import{t as Z}from"./kbd-D51qqUrs.js";import{t as Q}from"./label-D1hUPA2M.js";import{t as $e}from"./page-header-CFwAs_0E.js";import{b as et}from"./index-CfymFsM4.js";var[tt,nt]=Ie(`CollapsibleRoot`),rt=e({__name:`CollapsibleRoot`,props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`update:open`],setup(e,{expose:t,emit:n}){let r=e,i=le(r,`open`,n,{defaultValue:r.defaultOpen,passive:r.open===void 0}),{disabled:a,unmountOnHide:o}=ne(r);return nt({contentId:``,disabled:a,open:i,unmountOnHide:o,onOpenToggle:()=>{a.value||(i.value=!i.value)}}),t({open:i}),R(),(e,t)=>(_(),m(d(Ve),{as:e.as,"as-child":r.asChild,"data-state":d(i)?`open`:`closed`,"data-disabled":d(a)?``:void 0},{default:E(()=>[f(e.$slots,`default`,{open:d(i)})]),_:3},8,[`as`,`as-child`,`data-state`,`data-disabled`]))}}),it=e({inheritAttrs:!1,__name:`CollapsibleContent`,props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`contentFound`],setup(e,{emit:r}){let i=e,a=r,s=tt();s.contentId||(s.contentId=De(void 0,`reka-collapsible-content`));let c=h(),{forwardRef:u,currentElement:p}=R(),g=h(0),v=h(0),y=x(()=>s.open.value),b=h(y.value),S=h();se(()=>[y.value,c.value?.present],async()=>{await t();let e=p.value;if(!e)return;S.value=S.value||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration=`0s`,e.style.animationName=`none`;let n=e.getBoundingClientRect();v.value=n.height,g.value=n.width,b.value||(e.style.transitionDuration=S.value.transitionDuration,e.style.animationName=S.value.animationName)},{immediate:!0});let C=x(()=>b.value&&s.open.value);return o(()=>{requestAnimationFrame(()=>{b.value=!1})}),Ne(p,`beforematch`,e=>{requestAnimationFrame(()=>{s.onOpenToggle(),a(`contentFound`)})}),(e,t)=>(_(),m(d(we),{ref_key:`presentRef`,ref:c,present:e.forceMount||d(s).open.value,"force-mount":!0},{default:E(({present:t})=>[l(d(Ve),A(e.$attrs,{id:d(s).contentId,ref:d(u),"as-child":i.asChild,as:e.as,hidden:t?void 0:d(s).unmountOnHide.value?``:`until-found`,"data-state":C.value?void 0:d(s).open.value?`open`:`closed`,"data-disabled":d(s).disabled?.value?``:void 0,style:{"--reka-collapsible-content-height":`${v.value}px`,"--reka-collapsible-content-width":`${g.value}px`}}),{default:E(()=>[!d(s).unmountOnHide.value||t?f(e.$slots,`default`,{key:0}):n(`v-if`,!0)]),_:2},1040,[`id`,`as-child`,`as`,`hidden`,`data-state`,`data-disabled`,`style`])]),_:3},8,[`present`]))}}),at=e({__name:`CollapsibleTrigger`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`}},setup(e){let t=e;R();let n=tt();return(e,r)=>(_(),m(d(Ve),{type:e.as===`button`?`button`:void 0,as:e.as,"as-child":t.asChild,"aria-controls":d(n).contentId,"aria-expanded":d(n).open.value,"data-state":d(n).open.value?`open`:`closed`,"data-disabled":d(n).disabled?.value?``:void 0,disabled:d(n).disabled?.value,onClick:d(n).onOpenToggle},{default:E(()=>[f(e.$slots,`default`)]),_:3},8,[`type`,`as`,`as-child`,`aria-controls`,`aria-expanded`,`data-state`,`data-disabled`,`disabled`,`onClick`]))}}),[ot,st]=Ie(`HoverCardRoot`),ct=e({__name:`HoverCardRoot`,props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},openDelay:{type:Number,required:!1,default:700},closeDelay:{type:Number,required:!1,default:300},enableTouch:{type:Boolean,required:!1,default:!1}},emits:[`update:open`],setup(e,{emit:t}){let n=e,r=t,{openDelay:i,closeDelay:a,enableTouch:o}=ne(n);R();let s=le(n,`open`,r,{defaultValue:n.defaultOpen,passive:n.open===void 0}),c=h(0),l=h(0),u=h(!1),p=h(!1),g=h(!1),v=h();function y(){clearTimeout(l.value),c.value=window.setTimeout(()=>s.value=!0,i.value)}function b(){clearTimeout(c.value),!u.value&&!p.value&&(l.value=window.setTimeout(()=>s.value=!1,a.value))}function x(){clearTimeout(c.value),s.value=!1}return st({open:s,onOpenChange(e){s.value=e},onOpen:y,onClose:b,onDismiss:x,hasSelectionRef:u,isPointerDownOnContentRef:p,isPointerInTransitRef:g,triggerElement:v,enableTouch:o}),(e,t)=>(_(),m(d(me),null,{default:E(()=>[f(e.$slots,`default`,{open:d(s)})]),_:3}))}});function lt(e){return t=>t.pointerType===`touch`?void 0:e()}function ut(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)t.push(n.currentNode);return t}var dt=e({__name:`HoverCardContentImpl`,props:{memoDependencies:{type:Array,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},dir:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`escapeKeyDown`,`pointerDownOutside`,`focusOutside`,`interactOutside`],setup(e,{emit:n}){let r=e,i=n,a=Oe(r),{forwardRef:s,currentElement:c}=R(),u=ot(),{isPointerInTransit:p,onPointerExit:g}=fe(u.triggerElement,c);be(u.isPointerInTransitRef,p,{direction:`rtl`}),g(()=>{u.onClose()});let v=h(!1),y;C(e=>{if(v.value){let t=document.body;y=t.style.userSelect||t.style.webkitUserSelect,t.style.userSelect=`none`,t.style.webkitUserSelect=`none`,e(()=>{t.style.userSelect=y,t.style.webkitUserSelect=y})}});function b(){v.value=!1,u.isPointerDownOnContentRef.value=!1,t(()=>{document.getSelection()?.toString()!==``&&(u.hasSelectionRef.value=!0)})}return o(()=>{c.value&&(document.addEventListener(`pointerup`,b),ut(c.value).forEach(e=>e.setAttribute(`tabindex`,`-1`))),Ne(window,`scroll`,e=>{e.target?.contains(u.triggerElement.value)&&u.onDismiss()},{capture:!0})}),ae(()=>{document.removeEventListener(`pointerup`,b),u.hasSelectionRef.value=!1,u.isPointerDownOnContentRef.value=!1}),(e,t)=>(_(),m(d(Me),{"as-child":``,"disable-outside-pointer-events":!1,onEscapeKeyDown:t[1]||(t[1]=e=>i(`escapeKeyDown`,e)),onPointerDownOutside:t[2]||(t[2]=e=>i(`pointerDownOutside`,e)),onFocusOutside:t[3]||(t[3]=ie(e=>i(`focusOutside`,e),[`prevent`])),onDismiss:d(u).onDismiss},{default:E(()=>[l(d(he),A({...d(a),...e.$attrs},{ref:d(s),"data-state":d(u).open.value?`open`:`closed`,style:{userSelect:v.value?`text`:void 0,WebkitUserSelect:v.value?`text`:void 0,"--reka-hover-card-content-transform-origin":`var(--reka-popper-transform-origin)`,"--reka-hover-card-content-available-width":`var(--reka-popper-available-width)`,"--reka-hover-card-content-available-height":`var(--reka-popper-available-height)`,"--reka-hover-card-trigger-width":`var(--reka-popper-anchor-width)`,"--reka-hover-card-trigger-height":`var(--reka-popper-anchor-height)`},onPointerdown:t[0]||(t[0]=e=>{e.currentTarget.contains(e.target)&&(v.value=!0),d(u).hasSelectionRef.value=!1,d(u).isPointerDownOnContentRef.value=!0})}),{default:E(()=>[f(e.$slots,`default`)]),_:3},16,[`data-state`,`style`])]),_:3},8,[`onDismiss`]))}}),ft=e({__name:`HoverCardContent`,props:{forceMount:{type:Boolean,required:!1},memoDependencies:{type:Array,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},dir:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`escapeKeyDown`,`pointerDownOutside`,`focusOutside`,`interactOutside`],setup(e,{emit:t}){let n=Ae(e,t),{forwardRef:r}=R(),i=ot();return(e,t)=>(_(),m(d(we),{present:e.forceMount||d(i).open.value},{default:E(()=>[l(dt,A(d(n),{ref:d(r),onPointerenter:t[0]||(t[0]=e=>d(lt)(d(i).onOpen)(e))}),{default:E(()=>[f(e.$slots,`default`)]),_:3},16)]),_:3},8,[`present`]))}}),pt=e({__name:`HoverCardPortal`,props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){let t=e;return(e,n)=>(_(),m(d(ze),a(s(t)),{default:E(()=>[f(e.$slots,`default`)]),_:3},16))}}),mt=e({__name:`HoverCardTrigger`,props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`a`}},setup(e){let{forwardRef:t,currentElement:n}=R(),r=ot();r.triggerElement=n;function i(){setTimeout(()=>{!r.isPointerInTransitRef.value&&!r.open.value&&r.onClose()},0)}function a(e){!r.enableTouch.value||e.pointerType!==`touch`||(r.open.value?r.onDismiss():r.onOpenChange(!0))}return(e,n)=>(_(),m(d(pe),{"as-child":``,reference:e.reference},{default:E(()=>[l(d(Ve),{ref:d(t),"as-child":e.asChild,as:e.as,"data-state":d(r).open.value?`open`:`closed`,"data-grace-area-trigger":``,onPointerenter:n[0]||(n[0]=e=>d(lt)(d(r).onOpen)(e)),onPointerleave:n[1]||(n[1]=e=>d(lt)(i)(e)),onPointerup:a,onFocus:n[2]||(n[2]=e=>d(r).onOpen()),onBlur:n[3]||(n[3]=e=>d(r).onClose())},{default:E(()=>[f(e.$slots,`default`)]),_:3},8,[`as-child`,`as`,`data-state`])]),_:3},8,[`reference`]))}}),ht=[`dir`],gt=[`tabindex`,`role`,`aria-checked`,`aria-disabled`,`onClick`,`onKeydown`],_t={class:`gap-1 grid min-w-0`},vt={class:`truncate`},yt={key:0,class:`text-xs text-muted-foreground leading-5 font-normal`},bt=e({name:`BuiltInCheckboxGroup`,__name:`CheckboxGroup`,props:p({options:{},disabled:{type:Boolean},min:{},max:{},dir:{},class:{type:[Boolean,null,String,Object,Array]},optionClass:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]},labelClass:{type:[Boolean,null,String,Object,Array]}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:p([`change`],[`update:modelValue`]),setup(e,{emit:t}){let r=e,i=t,a=re(),o=b(e,`modelValue`),s=Ge({observe:!0}),c=x(()=>r.dir??(s.value===`rtl`?`rtl`:`ltr`)),u=te(),p=x(()=>o.value.length);se(o,e=>{i(`change`,e)});function m(e,t){return e.id||`${u}-${t}`}function h(e,t){return e.id?e.id:typeof e.value==`string`||typeof e.value==`number`?e.value:t}function v(e){if(r.disabled||e.disabled)return!0;let t=C(e);return!!(t&&r.min!==void 0&&p.value<=r.min||!t&&r.max!==void 0&&p.value>=r.max)}function S(e){return o.value.findIndex(t=>Object.is(t,e.value))}function C(e){return S(e)>-1}function ne(e,t){let n=[...o.value],r=n.findIndex(t=>Object.is(t,e.value));t?r===-1&&n.push(e.value):r>-1&&n.splice(r,1),o.value=n}function T(e,t){v(e)||ne(e,t===!0)}function ae(e){!a.option||v(e)||ne(e,!C(e))}function oe(e){!a.option||v(e)||ne(e,!C(e))}return(e,t)=>(_(),O(`div`,{role:`group`,dir:c.value,class:D(d(G)(`grid gap-3`,r.class))},[(_(!0),O(w,null,y(r.options,(t,i)=>(_(),O(`div`,{key:h(t,i),tabindex:a.option&&!v(t)?0:void 0,role:a.option?`checkbox`:void 0,"aria-checked":a.option?`${C(t)}`:void 0,"aria-disabled":a.option?`${v(t)}`:void 0,class:D(d(G)(`flex gap-2`,t.description?`items-start`:`items-center`,a.option&&`outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded-xl`,r.optionClass)),onClick:e=>ae(t),onKeydown:[ee(ie(e=>oe(t),[`prevent`]),[`enter`]),ee(ie(e=>oe(t),[`prevent`]),[`space`])]},[l(d(ce),{id:m(t,i),"model-value":C(t),disabled:v(t),class:D(d(G)(r.itemClass,a.option&&`hidden`)),"onUpdate:modelValue":e=>T(t,e)},null,8,[`id`,`model-value`,`disabled`,`class`,`onUpdate:modelValue`]),l(d(Ye),{for:a.option?void 0:m(t,i),class:D(d(G)(`min-w-0 flex-1 cursor-pointer gap-0`,t.description?`items-start`:`items-center`,v(t)&&`cursor-not-allowed opacity-60`,r.labelClass))},{default:E(()=>[f(e.$slots,`option`,{id:m(t,i),option:t,checked:C(t),disabled:v(t)},()=>[k(`div`,_t,[k(`span`,vt,g(t.label),1),t.description?(_(),O(`span`,yt,g(t.description),1)):n(``,!0)])])]),_:2},1032,[`for`,`class`])],42,gt))),128))],10,ht))}}),xt=e({__name:`Collapsible`,props:{defaultOpen:{type:Boolean},open:{type:Boolean},disabled:{type:Boolean},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},emits:[`update:open`],setup(e,{emit:t}){let n=Ae(e,t);return(e,t)=>(_(),m(d(rt),A({"data-slot":`collapsible`},d(n)),{default:E(t=>[f(e.$slots,`default`,a(s(t)))]),_:3},16))}}),St=e({__name:`CollapsibleContent`,props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(e){let t=e;return(e,n)=>(_(),m(d(it),A({"data-slot":`collapsible-content`},t),{default:E(()=>[f(e.$slots,`default`)]),_:3},16))}}),Ct=e({__name:`CollapsibleTrigger`,props:{asChild:{type:Boolean},as:{}},setup(e){let t=e;return(e,n)=>(_(),m(d(at),A({"data-slot":`collapsible-trigger`},t),{default:E(()=>[f(e.$slots,`default`)]),_:3},16))}}),wt=e({name:`BuiltInCollapsible`,__name:`index`,props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let t=b(e,`modelValue`),r=re();return(e,i)=>(_(),m(d(xt),{open:t.value,"onUpdate:open":i[0]||(i[0]=e=>t.value=e)},{default:E(()=>[d(r).trigger?(_(),m(d(Ct),{key:0},{default:E(()=>[f(e.$slots,`trigger`,{open:t.value})]),_:3})):n(``,!0),l(d(St),null,{default:E(()=>[f(e.$slots,`default`)]),_:3})]),_:3},8,[`open`]))}}),Tt={key:0},Et={key:1},Dt=[`colspan`],Ot=[`colspan`],kt=[`colspan`],At=[`colspan`],jt=[`colspan`],Mt=[`colspan`],Nt=e({name:`BuiltInDescriptions`,__name:`index`,props:{items:{},column:{default:3},direction:{default:`horizontal`},border:{type:Boolean,default:!1},labelWidth:{},size:{default:`default`},emptyText:{default:`-`},class:{type:[Boolean,null,String,Object,Array]},labelClass:{type:[Boolean,null,String,Object,Array]},valueClass:{type:[Boolean,null,String,Object,Array]}},setup(e){let t=e,r={sm:`px-3 py-2 text-xs`,default:`px-4 py-3 text-sm`,lg:`px-5 py-4 text-base`},a=x(()=>u(t.column)),o=x(()=>p(t.items??[],a.value)),s=x(()=>G(`w-full overflow-hidden`,t.border&&`rounded-lg border`,t.class)),c=x(()=>G(`w-full table-fixed border-collapse`,!t.border&&`border-separate border-spacing-0`)),l=x(()=>{if(t.direction!==`horizontal`)return;let e=m(t.labelWidth);return e?{width:e}:void 0});function u(e){let t=Number(e);return Number.isFinite(t)&&t>0?Math.floor(t):1}function d(e,t){let n=Number(e);return!Number.isFinite(n)||n<=0?1:Math.min(Math.floor(n),t)}function p(e,t){let n=[],r=[],i=0;function a(){r.length&&(n.push({items:r,span:i,rest:Math.max(t-i,0)}),r=[],i=0)}return e.forEach((e,n)=>{let o=d(e.span,t);r.length&&i+o>t&&a(),r.push({item:e,index:n,span:o}),i+=o,i>=t&&a()}),a(),n}function m(e){if(!(e==null||e===``))return typeof e==`number`?`${e}px`:e}function h(e){return e==null||e===``}function b(e){return h(e)?t.emptyText:e}function S(e){return e.key?`label-${e.key}`:void 0}function C(e){return e.key?`value-${e.key}`:void 0}function ee(e){return G(t.border&&!e&&`border-b`)}function te(e){return G(`align-middle break-words`,r[t.size],t.border&&!e&&`border-r`)}function ne(e,n){return G(te(n),`text-left font-medium text-muted-foreground`,t.border&&`bg-muted/50`,e.item.class,t.labelClass,e.item.labelClass)}function T(e,n){return G(te(n),`text-foreground`,e.item.class,t.valueClass,e.item.valueClass)}function re(e){return G(te(e),t.border&&`bg-background`)}function ie(e,t){return t===e.items.length-1&&e.rest===0}return(t,r)=>o.value.length?(_(),O(`div`,{key:0,class:D(s.value),"data-slot":`descriptions`},[k(`table`,{class:D(c.value),"data-slot":`descriptions-table`},[e.direction===`horizontal`?(_(),O(`colgroup`,Tt,[(_(!0),O(w,null,y(a.value,e=>(_(),O(w,{key:e},[k(`col`,{style:v(l.value)},null,4),r[0]||(r[0]=k(`col`,null,null,-1))],64))),128))])):(_(),O(`colgroup`,Et,[(_(!0),O(w,null,y(a.value,e=>(_(),O(`col`,{key:e}))),128))])),k(`tbody`,null,[e.direction===`vertical`?(_(!0),O(w,{key:0},y(o.value,(e,r)=>(_(),O(w,{key:r},[k(`tr`,{class:D(ee(!1)),"data-slot":`descriptions-label-row`},[(_(!0),O(w,null,y(e.items,(n,r)=>(_(),O(`th`,{key:`label-${n.index}`,colspan:n.span,class:D(ne(n,ie(e,r))),scope:`col`,"data-slot":`descriptions-label`},[S(n.item)?f(t.$slots,S(n.item),{key:0,item:n.item,index:n.index,label:n.item.label,value:n.item.value},()=>[i(g(n.item.label),1)]):(_(),O(w,{key:1},[i(g(n.item.label),1)],64))],10,Dt))),128)),e.rest?(_(),O(`td`,{key:0,colspan:e.rest,class:D(re(!0)),"aria-hidden":`true`,"data-slot":`descriptions-placeholder`},null,10,Ot)):n(``,!0)],2),k(`tr`,{class:D(ee(r===o.value.length-1)),"data-slot":`descriptions-value-row`},[(_(!0),O(w,null,y(e.items,(n,r)=>(_(),O(`td`,{key:`value-${n.index}`,colspan:n.span,class:D(T(n,ie(e,r))),"data-slot":`descriptions-value`},[C(n.item)?f(t.$slots,C(n.item),{key:0,item:n.item,index:n.index,label:n.item.label,value:n.item.value},()=>[i(g(b(n.item.value)),1)]):(_(),O(w,{key:1},[i(g(b(n.item.value)),1)],64))],10,kt))),128)),e.rest?(_(),O(`td`,{key:0,colspan:e.rest,class:D(re(!0)),"aria-hidden":`true`,"data-slot":`descriptions-placeholder`},null,10,At)):n(``,!0)],2)],64))),128)):(_(!0),O(w,{key:1},y(o.value,(e,r)=>(_(),O(`tr`,{key:r,class:D(ee(r===o.value.length-1)),"data-slot":`descriptions-row`},[(_(!0),O(w,null,y(e.items,(n,r)=>(_(),O(w,{key:n.index},[k(`th`,{class:D(ne(n,!1)),scope:`row`,"data-slot":`descriptions-label`},[S(n.item)?f(t.$slots,S(n.item),{key:0,item:n.item,index:n.index,label:n.item.label,value:n.item.value},()=>[i(g(n.item.label),1)]):(_(),O(w,{key:1},[i(g(n.item.label),1)],64))],2),k(`td`,{colspan:n.span*2-1,class:D(T(n,ie(e,r))),"data-slot":`descriptions-value`},[C(n.item)?f(t.$slots,C(n.item),{key:0,item:n.item,index:n.index,label:n.item.label,value:n.item.value},()=>[i(g(b(n.item.value)),1)]):(_(),O(w,{key:1},[i(g(b(n.item.value)),1)],64))],10,jt)],64))),128)),e.rest?(_(),O(`td`,{key:0,colspan:e.rest*2,class:D(re(!0)),"aria-hidden":`true`,"data-slot":`descriptions-placeholder`},null,10,Mt)):n(``,!0)],2))),128))])],2)],2)):n(``,!0)}}),Pt=e({__name:`HoverCard`,props:{defaultOpen:{type:Boolean},open:{type:Boolean},openDelay:{},closeDelay:{},enableTouch:{type:Boolean}},emits:[`update:open`],setup(e,{emit:t}){let n=Ae(e,t);return(e,t)=>(_(),m(d(ct),A({"data-slot":`hover-card`},d(n)),{default:E(t=>[f(e.$slots,`default`,a(s(t)))]),_:3},16))}}),Ft=e({inheritAttrs:!1,__name:`HoverCardContent`,props:{forceMount:{type:Boolean},memoDependencies:{},side:{},sideOffset:{default:4},sideFlip:{type:Boolean},align:{},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},dir:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){let t=e,n=Oe(ye(t,`class`));return(e,r)=>(_(),m(d(pt),null,{default:E(()=>[l(d(ft),A({"data-slot":`hover-card-content`},{...e.$attrs,...d(n)},{class:d(G)(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-hidden`,t.class)}),{default:E(()=>[f(e.$slots,`default`)]),_:3},16,[`class`])]),_:3}))}}),It=e({__name:`HoverCardTrigger`,props:{reference:{},asChild:{type:Boolean},as:{}},setup(e){let t=e;return(e,n)=>(_(),m(d(mt),A({"data-slot":`hover-card-trigger`},t),{default:E(()=>[f(e.$slots,`default`)]),_:3},16))}}),$=e({name:`BuiltInHoverCard`,__name:`index`,props:{align:{},alignOffset:{},side:{},sideOffset:{},collisionPadding:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){let t=e;return(n,r)=>(_(),m(d(Pt),null,{default:E(()=>[l(d(It),{"as-child":``},{default:E(()=>[f(n.$slots,`default`)]),_:3}),l(d(Ft),{align:e.align,"align-offset":e.alignOffset,side:e.side,"side-offset":e.sideOffset,"collision-padding":e.collisionPadding,class:D(d(G)(`z-2000`,t.class))},{default:E(()=>[f(n.$slots,`card`)]),_:3},8,[`align`,`align-offset`,`side`,`side-offset`,`collision-padding`,`class`])]),_:3}))}}),Lt={class:`gap-1 grid min-w-0`},Rt={class:`truncate`},zt={key:0,class:`text-xs text-muted-foreground leading-5 font-normal`},Bt=e({name:`BuiltInRadioGroup`,__name:`index`,props:p({options:{},disabled:{type:Boolean},dir:{},class:{type:[Boolean,null,String,Object,Array]},optionClass:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]}},{modelValue:{},modelModifiers:{}}),emits:p([`change`],[`update:modelValue`]),setup(e,{emit:t}){let r=e,i=t,a=re(),o=b(e,`modelValue`),s=Ge({observe:!0}),c=x(()=>r.dir??(s.value===`rtl`?`rtl`:`ltr`)),u=te();se(o,e=>{i(`change`,e)});function p(e,t){return e.id||`${u}-${t}`}function h(e,t){return e.id?e.id:typeof e.value==`string`||typeof e.value==`number`?e.value:t}function v(e){return!!(r.disabled||e.disabled)}function S(e){return Object.is(o.value,e.value)}return(t,i)=>(_(),m(d(Ee),{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=e=>o.value=e),disabled:e.disabled,dir:c.value,class:D(r.class)},{default:E(()=>[(_(!0),O(w,null,y(r.options,(e,i)=>(_(),O(`div`,{key:h(e,i),class:D(d(G)(`flex gap-2`,e.description?`items-start`:`items-center`,r.optionClass))},[l(d(Te),{id:p(e,i),value:e.value,disabled:v(e),class:D(d(G)(r.itemClass,a.option&&`hidden`))},null,8,[`id`,`value`,`disabled`,`class`]),l(d(Ye),{for:p(e,i),class:D(d(G)(`min-w-0 flex-1 cursor-pointer gap-0`,e.description?`items-start`:`items-center`,v(e)&&`cursor-not-allowed opacity-60`))},{default:E(()=>[f(t.$slots,`option`,{id:p(e,i),option:e,checked:S(e),disabled:v(e)},()=>[k(`div`,Lt,[k(`span`,Rt,g(e.label),1),e.description?(_(),O(`span`,zt,g(e.description),1)):n(``,!0)])])]),_:2},1032,[`for`,`class`])],2))),128))]),_:3},8,[`modelValue`,`disabled`,`dir`,`class`]))}}),Vt=[{title:`基础`,component:e({__name:`_basic`,setup(e){return(e,t)=>(_(),m(Se,{icon:`i-lucide:info`,title:`提示信息`,description:`这是一条普通提示，用于展示页面说明或操作反馈。`}))}}),componentRaw:`<script lang="ts" setup>
// 组件实际使用时无需手动导入，框架会自动导入
import FaAlert from '../index.vue'
<\/script>

<template>
  <FaAlert
    icon="i-lucide:info"
    title="提示信息"
    description="这是一条普通提示，用于展示页面说明或操作反馈。"
  />
</template>
`},{title:`警告类型`,component:e({__name:`_variant`,setup(e){return(e,t)=>(_(),m(Se,{icon:`i-lucide:circle-alert`,title:`危险提示`,description:`删除后数据将无法恢复，请谨慎操作。`,variant:`destructive`}))}}),componentRaw:`<script lang="ts" setup>
// 组件实际使用时无需手动导入，框架会自动导入
import FaAlert from '../index.vue'
<\/script>

<template>
  <FaAlert
    icon="i-lucide:circle-alert"
    title="危险提示"
    description="删除后数据将无法恢复，请谨慎操作。"
    variant="destructive"
  />
</template>
`},{title:`自定义描述`,component:e({__name:`_slot`,setup(e){return(e,t)=>(_(),m(Se,{icon:`i-lucide:terminal`,title:`命令执行完成`},{description:E(()=>[k(`div`,null,[t[1]||(t[1]=i(` 已成功生成文件，可继续进行下一步操作。 `,-1)),l(M,{variant:`link`,class:`px-0 h-auto`},{default:E(()=>[...t[0]||(t[0]=[i(` 查看详情 `,-1)])]),_:1})])]),_:1}))}}),componentRaw:`<script lang="ts" setup>
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaAlert from '../index.vue'
<\/script>

<template>
  <FaAlert icon="i-lucide:terminal" title="命令执行完成">
    <template #description>
      <div>
        已成功生成文件，可继续进行下一步操作。
        <FaButton variant="link" class="px-0 h-auto">
          查看详情
        </FaButton>
      </div>
    </template>
  </FaAlert>
</template>
`}],Ht=e({__name:`_basic`,setup(e){return(e,t)=>(_(),m(Ke,{src:`https://fantastic-admin.hurui.me/logo.svg`}))}}),Ut=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaAvatar from '../index.vue'
<\/script>

<template>
  <FaAvatar src="https://fantastic-admin.hurui.me/logo.svg" />
</template>
`,Wt={class:`flex space-x--2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background`},Gt=[{title:`基础`,component:Ht,componentRaw:Ut},{title:`回退显示`,component:e({__name:`_fallback`,setup(e){return(e,t)=>(_(),m(Ke,{src:``,fallback:`Hooray`}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaAvatar from '../index.vue'
<\/script>

<template>
  <FaAvatar src="" fallback="Hooray" />
</template>
`},{title:`自定义样式`,component:e({__name:`_custom-style`,setup(e){return(e,t)=>(_(),O(`div`,Wt,[l(z,{text:`Fantastic-admin`},{default:E(()=>[l(Ke,{src:`https://github.com/fantastic-admin.png`,class:`transition hover:scale-110 hover:z-1`})]),_:1}),l(z,{text:`Hooray`},{default:E(()=>[l(Ke,{src:`https://github.com/hooray.png`,class:`transition hover:scale-110 hover:z-1`})]),_:1}),l(z,{text:`Admin`},{default:E(()=>[l(Ke,{src:`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=admin`,class:`transition hover:scale-110 hover:z-1`})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTooltip from '../../tooltip/index.vue'
import FaAvatar from '../index.vue'
<\/script>

<template>
  <div class="flex space-x--2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
    <FaTooltip text="Fantastic-admin">
      <FaAvatar src="https://github.com/fantastic-admin.png" class="transition hover:scale-110 hover:z-1" />
    </FaTooltip>
    <FaTooltip text="Hooray">
      <FaAvatar src="https://github.com/hooray.png" class="transition hover:scale-110 hover:z-1" />
    </FaTooltip>
    <FaTooltip text="Admin">
      <FaAvatar src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=admin" class="transition hover:scale-110 hover:z-1" />
    </FaTooltip>
  </div>
</template>
`}],Kt={class:`flex gap-8`},qt=[{title:`基础`,component:e({__name:`_basic`,setup(e){return(e,t)=>(_(),O(`div`,Kt,[l(ge,{value:!0},{default:E(()=>[l(U,{name:`i-ri:notification-3-line`})]),_:1}),l(ge,{value:99},{default:E(()=>[l(U,{name:`i-ri:notification-3-line`})]),_:1}),l(ge,{value:`噢`},{default:E(()=>[l(U,{name:`i-ri:notification-3-line`})]),_:1}),l(ge,{value:`9`,variant:`secondary`},{default:E(()=>[l(U,{name:`i-ri:notification-3-line`})]),_:1}),l(ge,{value:`9`,variant:`destructive`},{default:E(()=>[l(U,{name:`i-ri:notification-3-line`})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../../basic/icon/index.vue'
import FaBadge from '../index.vue'
<\/script>

<template>
  <div class="flex gap-8">
    <FaBadge :value="true">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
    <FaBadge :value="99">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
    <FaBadge value="噢">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
    <FaBadge value="9" variant="secondary">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
    <FaBadge value="9" variant="destructive">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
  </div>
</template>
`}],Jt=e({__name:`_basic`,setup(e){return(e,t)=>(_(),m(M,null,{default:E(()=>[...t[0]||(t[0]=[i(` 按钮 `,-1)])]),_:1}))}}),Yt=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <FaButton>
    按钮
  </FaButton>
</template>
`,Xt={class:`flex flex-wrap gap-4`},Zt=e({__name:`_disabled`,setup(e){return(e,t)=>(_(),O(`div`,Xt,[l(M,{disabled:``},{default:E(()=>[...t[0]||(t[0]=[i(` 禁用按钮 `,-1)])]),_:1}),l(M,{variant:`outline`,disabled:``},{default:E(()=>[...t[1]||(t[1]=[i(` 禁用边框按钮 `,-1)])]),_:1}),l(M,{variant:`secondary`,disabled:``},{default:E(()=>[...t[2]||(t[2]=[i(` 禁用次要按钮 `,-1)])]),_:1})]))}}),Qt=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaButton disabled>
      禁用按钮
    </FaButton>
    <FaButton variant="outline" disabled>
      禁用边框按钮
    </FaButton>
    <FaButton variant="secondary" disabled>
      禁用次要按钮
    </FaButton>
  </div>
</template>
`,$t=e({__name:`_group-basic`,setup(e){return(e,t)=>(_(),m(N,null,{default:E(()=>[l(M,null,{default:E(()=>[l(U,{name:`i-mdi:eye`,class:`size-4`}),t[0]||(t[0]=i(` 查看详情 `,-1))]),_:1}),l(M,null,{default:E(()=>[l(U,{name:`i-mdi:pencil`,class:`size-4`}),t[1]||(t[1]=i(` 编辑 `,-1))]),_:1}),l(M,null,{default:E(()=>[l(U,{name:`i-mdi:delete`,class:`size-4`}),t[2]||(t[2]=i(` 删除 `,-1))]),_:1})]),_:1}))}}),en=`<script setup lang="ts">
import FaIcon from '../../icon/index.vue'
import FaButtonGroup from '../ButtonGroup.vue'
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <FaButtonGroup>
    <FaButton>
      <FaIcon name="i-mdi:eye" class="size-4" />
      查看详情
    </FaButton>
    <FaButton>
      <FaIcon name="i-mdi:pencil" class="size-4" />
      编辑
    </FaButton>
    <FaButton>
      <FaIcon name="i-mdi:delete" class="size-4" />
      删除
    </FaButton>
  </FaButtonGroup>
</template>
`,tn=e({__name:`_group-nested`,setup(e){return(e,t)=>(_(),m(N,null,{default:E(()=>[l(N,null,{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...t[0]||(t[0]=[i(` 1 `,-1)])]),_:1}),l(M,{variant:`outline`},{default:E(()=>[...t[1]||(t[1]=[i(` 2 `,-1)])]),_:1}),l(M,{variant:`outline`},{default:E(()=>[...t[2]||(t[2]=[i(` 3 `,-1)])]),_:1}),l(M,{variant:`outline`},{default:E(()=>[...t[3]||(t[3]=[i(` 4 `,-1)])]),_:1}),l(M,{variant:`outline`},{default:E(()=>[...t[4]||(t[4]=[i(` 5 `,-1)])]),_:1})]),_:1}),l(N,null,{default:E(()=>[l(M,{variant:`outline`,size:`icon`},{default:E(()=>[l(U,{name:`i-ep:arrow-left`})]),_:1}),l(M,{variant:`outline`,size:`icon`},{default:E(()=>[l(U,{name:`i-ep:arrow-right`})]),_:1})]),_:1})]),_:1}))}}),nn=`<script setup lang="ts">
import FaIcon from '../../icon/index.vue'
import FaButtonGroup from '../ButtonGroup.vue'
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <FaButtonGroup>
    <FaButtonGroup>
      <FaButton variant="outline">
        1
      </FaButton>
      <FaButton variant="outline">
        2
      </FaButton>
      <FaButton variant="outline">
        3
      </FaButton>
      <FaButton variant="outline">
        4
      </FaButton>
      <FaButton variant="outline">
        5
      </FaButton>
    </FaButtonGroup>
    <FaButtonGroup>
      <FaButton variant="outline" size="icon">
        <FaIcon name="i-ep:arrow-left" />
      </FaButton>
      <FaButton variant="outline" size="icon">
        <FaIcon name="i-ep:arrow-right" />
      </FaButton>
    </FaButtonGroup>
  </FaButtonGroup>
</template>
`,rn={class:`flex flex-col gap-4 items-start`},an=e({__name:`_group-separator`,setup(e){return(e,t)=>(_(),O(`div`,rn,[l(N,{separator:``},{default:E(()=>[l(M,null,{default:E(()=>[l(U,{name:`i-mdi:eye`,class:`size-4`}),t[0]||(t[0]=i(` 查看详情 `,-1))]),_:1}),l(M,null,{default:E(()=>[l(U,{name:`i-mdi:pencil`,class:`size-4`}),t[1]||(t[1]=i(` 编辑 `,-1))]),_:1}),l(M,null,{default:E(()=>[l(U,{name:`i-mdi:delete`,class:`size-4`}),t[2]||(t[2]=i(` 删除 `,-1))]),_:1})]),_:1}),l(N,{orientation:`vertical`,separator:``},{default:E(()=>[l(M,null,{default:E(()=>[l(U,{name:`i-mdi:eye`,class:`size-4`}),t[3]||(t[3]=i(` 查看详情 `,-1))]),_:1}),l(M,null,{default:E(()=>[l(U,{name:`i-mdi:pencil`,class:`size-4`}),t[4]||(t[4]=i(` 编辑 `,-1))]),_:1}),l(M,null,{default:E(()=>[l(U,{name:`i-mdi:delete`,class:`size-4`}),t[5]||(t[5]=i(` 删除 `,-1))]),_:1})]),_:1}),t[9]||(t[9]=k(`p`,null,`按钮如果为 outline 则无需设置分割线`,-1)),l(N,null,{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[l(U,{name:`i-mdi:eye`,class:`size-4`}),t[6]||(t[6]=i(` 查看详情 `,-1))]),_:1}),l(M,{variant:`outline`},{default:E(()=>[l(U,{name:`i-mdi:pencil`,class:`size-4`}),t[7]||(t[7]=i(` 编辑 `,-1))]),_:1}),l(M,{variant:`outline`},{default:E(()=>[l(U,{name:`i-mdi:delete`,class:`size-4`}),t[8]||(t[8]=i(` 删除 `,-1))]),_:1})]),_:1})]))}}),on=`<script setup lang="ts">
import FaIcon from '../../icon/index.vue'
import FaButtonGroup from '../ButtonGroup.vue'
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <FaButtonGroup separator>
      <FaButton>
        <FaIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:delete" class="size-4" />
        删除
      </FaButton>
    </FaButtonGroup>
    <FaButtonGroup orientation="vertical" separator>
      <FaButton>
        <FaIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:delete" class="size-4" />
        删除
      </FaButton>
    </FaButtonGroup>
    <p>按钮如果为 outline 则无需设置分割线</p>
    <FaButtonGroup>
      <FaButton variant="outline">
        <FaIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FaButton>
      <FaButton variant="outline">
        <FaIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FaButton>
      <FaButton variant="outline">
        <FaIcon name="i-mdi:delete" class="size-4" />
        删除
      </FaButton>
    </FaButtonGroup>
  </div>
</template>
`,sn=e({__name:`_group-vertical`,setup(e){return(e,t)=>(_(),m(N,{orientation:`vertical`},{default:E(()=>[l(M,null,{default:E(()=>[l(U,{name:`i-mdi:eye`,class:`size-4`}),t[0]||(t[0]=i(` 查看详情 `,-1))]),_:1}),l(M,null,{default:E(()=>[l(U,{name:`i-mdi:pencil`,class:`size-4`}),t[1]||(t[1]=i(` 编辑 `,-1))]),_:1}),l(M,null,{default:E(()=>[l(U,{name:`i-mdi:delete`,class:`size-4`}),t[2]||(t[2]=i(` 删除 `,-1))]),_:1})]),_:1}))}}),cn=`<script setup lang="ts">
import FaIcon from '../../icon/index.vue'
import FaButtonGroup from '../ButtonGroup.vue'
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <FaButtonGroup orientation="vertical">
    <FaButton>
      <FaIcon name="i-mdi:eye" class="size-4" />
      查看详情
    </FaButton>
    <FaButton>
      <FaIcon name="i-mdi:pencil" class="size-4" />
      编辑
    </FaButton>
    <FaButton>
      <FaIcon name="i-mdi:delete" class="size-4" />
      删除
    </FaButton>
  </FaButtonGroup>
</template>
`,ln={class:`flex flex-col gap-4 items-start`},un=e({__name:`_group-with-components`,setup(e){let t=u(`CNY`);return(e,n)=>(_(),O(`div`,ln,[l(N,null,{default:E(()=>[l(I),l(M,{variant:`outline`,size:`icon`},{default:E(()=>[l(U,{name:`i-ep:search`})]),_:1})]),_:1}),l(N,null,{default:E(()=>[l(L,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),options:[{label:`¥`,value:`CNY`},{label:`$`,value:`USD`},{label:`€`,value:`EUR`}],class:`gap-1 w-inherit`},null,8,[`modelValue`]),l(I,{placeholder:`10.00`})]),_:1}),l(N,null,{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...n[1]||(n[1]=[i(` 关注 `,-1)])]),_:1}),l(j,{items:[[{label:`加入黑名单`},{label:`分享到群聊`},{label:`反馈举报`}],[{label:`取消关注`}]]},{default:E(()=>[l(M,{variant:`outline`,size:`icon`},{default:E(()=>[l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1})]),_:1})]))}}),dn=`<script setup lang="ts">
import { shallowRef } from 'vue'

import FaDropdown from '../../dropdown/index.vue'
import FaIcon from '../../icon/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaButtonGroup from '../ButtonGroup.vue'
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'

const currency = shallowRef('CNY')
<\/script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <FaButtonGroup>
      <FaInput />
      <FaButton variant="outline" size="icon">
        <FaIcon name="i-ep:search" />
      </FaButton>
    </FaButtonGroup>
    <FaButtonGroup>
      <FaSelect
        v-model="currency"
        :options="[
          { label: '¥', value: 'CNY' },
          { label: '$', value: 'USD' },
          { label: '€', value: 'EUR' },
        ]"
        class="gap-1 w-inherit"
      />
      <FaInput placeholder="10.00" />
    </FaButtonGroup>
    <FaButtonGroup>
      <FaButton variant="outline">
        关注
      </FaButton>
      <FaDropdown
        :items="[
          [
            { label: '加入黑名单' },
            { label: '分享到群聊' },
            { label: '反馈举报' },
          ],
          [
            { label: '取消关注' },
          ],
        ]"
      >
        <FaButton variant="outline" size="icon">
          <FaIcon name="i-ep:caret-bottom" />
        </FaButton>
      </FaDropdown>
    </FaButtonGroup>
  </div>
</template>
`,fn={class:`flex flex-wrap gap-4`},pn=e({__name:`_loading`,setup(e){return(e,t)=>(_(),O(`div`,fn,[l(M,{loading:``},{default:E(()=>[...t[0]||(t[0]=[i(` 加载中 `,-1)])]),_:1}),l(M,{variant:`outline`,loading:``},{default:E(()=>[...t[1]||(t[1]=[i(` 保存中 `,-1)])]),_:1}),l(M,{variant:`secondary`,loading:``},{default:E(()=>[...t[2]||(t[2]=[i(` 提交中 `,-1)])]),_:1})]))}}),mn=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaButton loading>
      加载中
    </FaButton>
    <FaButton variant="outline" loading>
      保存中
    </FaButton>
    <FaButton variant="secondary" loading>
      提交中
    </FaButton>
  </div>
</template>
`,hn={class:`flex flex-wrap gap-4 items-center`},gn=e({__name:`_size`,setup(e){return(e,t)=>(_(),O(`div`,hn,[l(M,{size:`sm`},{default:E(()=>[...t[0]||(t[0]=[i(` 小按钮 `,-1)])]),_:1}),l(M,null,{default:E(()=>[...t[1]||(t[1]=[i(` 默认尺寸 `,-1)])]),_:1}),l(M,{size:`lg`},{default:E(()=>[...t[2]||(t[2]=[i(` 大按钮 `,-1)])]),_:1}),l(M,{size:`icon-sm`,variant:`outline`},{default:E(()=>[l(U,{name:`i-lucide:search`})]),_:1}),l(M,{size:`icon`,variant:`outline`},{default:E(()=>[l(U,{name:`i-lucide:settings`})]),_:1}),l(M,{size:`icon-lg`,variant:`outline`},{default:E(()=>[l(U,{name:`i-lucide:plus`})]),_:1})]))}}),_n=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import FaButton from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4 items-center">
    <FaButton size="sm">
      小按钮
    </FaButton>
    <FaButton>
      默认尺寸
    </FaButton>
    <FaButton size="lg">
      大按钮
    </FaButton>
    <FaButton size="icon-sm" variant="outline">
      <FaIcon name="i-lucide:search" />
    </FaButton>
    <FaButton size="icon" variant="outline">
      <FaIcon name="i-lucide:settings" />
    </FaButton>
    <FaButton size="icon-lg" variant="outline">
      <FaIcon name="i-lucide:plus" />
    </FaButton>
  </div>
</template>
`,vn={class:`flex flex-wrap gap-4`},yn=[{title:`基础`,component:Jt,componentRaw:Yt},{title:`变体`,component:e({__name:`_variant`,setup(e){return(e,t)=>(_(),O(`div`,vn,[l(M,null,{default:E(()=>[...t[0]||(t[0]=[i(` 默认按钮 `,-1)])]),_:1}),l(M,{variant:`destructive`},{default:E(()=>[...t[1]||(t[1]=[i(` 危险按钮 `,-1)])]),_:1}),l(M,{variant:`outline`},{default:E(()=>[...t[2]||(t[2]=[i(` 边框按钮 `,-1)])]),_:1}),l(M,{variant:`secondary`},{default:E(()=>[...t[3]||(t[3]=[i(` 次要按钮 `,-1)])]),_:1}),l(M,{variant:`ghost`},{default:E(()=>[...t[4]||(t[4]=[i(` 幽灵按钮 `,-1)])]),_:1}),l(M,{variant:`link`},{default:E(()=>[...t[5]||(t[5]=[i(` 链接按钮 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaButton>
      默认按钮
    </FaButton>
    <FaButton variant="destructive">
      危险按钮
    </FaButton>
    <FaButton variant="outline">
      边框按钮
    </FaButton>
    <FaButton variant="secondary">
      次要按钮
    </FaButton>
    <FaButton variant="ghost">
      幽灵按钮
    </FaButton>
    <FaButton variant="link">
      链接按钮
    </FaButton>
  </div>
</template>
`},{title:`尺寸`,component:gn,componentRaw:_n},{title:`禁用`,component:Zt,componentRaw:Qt},{title:`加载`,component:pn,componentRaw:mn},{title:`按钮组 - 基础`,component:$t,componentRaw:en},{title:`按钮组 - 垂直`,component:sn,componentRaw:cn},{title:`按钮组 - 分割线`,component:an,componentRaw:on},{title:`按钮组 - 嵌套`,component:tn,componentRaw:nn},{title:`按钮组 - 与其他组件组合`,component:un,componentRaw:dn}],bn=e({__name:`_basic`,setup(e){return(e,t)=>(_(),m(Je,{title:`卡片标题`,class:`w-80`},{default:E(()=>[...t[0]||(t[0]=[i(` 卡片内容 `,-1)])]),_:1}))}}),xn=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaCard from '../index.vue'
<\/script>

<template>
  <FaCard title="卡片标题" class="w-80">
    卡片内容
  </FaCard>
</template>
`,Sn=e({__name:`_custom-style`,setup(e){return(e,t)=>(_(),m(Je,{title:`自定义样式`,description:`通过 class、headerClass、contentClass 和 footerClass 调整区域样式。`,class:`py-0 gap-0 w-96 overflow-hidden`,"header-class":`bg-primary/8 py-4`,"content-class":`py-6 text-sm leading-6`,"footer-class":`bg-muted text-sm text-muted-foreground py-3`},{footer:E(()=>[...t[0]||(t[0]=[i(` 自定义页脚区域 `,-1)])]),default:E(()=>[t[1]||(t[1]=i(` 这里是自定义内容区域，可以根据业务场景调整间距、背景和边框。 `,-1))]),_:1}))}}),Cn=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaCard from '../index.vue'
<\/script>

<template>
  <FaCard
    title="自定义样式"
    description="通过 class、headerClass、contentClass 和 footerClass 调整区域样式。"
    class="py-0 gap-0 w-96 overflow-hidden"
    header-class="bg-primary/8 py-4"
    content-class="py-6 text-sm leading-6"
    footer-class="bg-muted text-sm text-muted-foreground py-3"
  >
    这里是自定义内容区域，可以根据业务场景调整间距、背景和边框。
    <template #footer>
      自定义页脚区域
    </template>
  </FaCard>
</template>
`,wn=e({__name:`_description`,setup(e){return(e,t)=>(_(),m(Je,{title:`卡片标题`,description:`这是一段辅助描述，用于补充说明卡片内容。`,class:`w-80`},{default:E(()=>[...t[0]||(t[0]=[i(` 卡片内容 `,-1)])]),_:1}))}}),Tn=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaCard from '../index.vue'
<\/script>

<template>
  <FaCard title="卡片标题" description="这是一段辅助描述，用于补充说明卡片内容。" class="w-80">
    卡片内容
  </FaCard>
</template>
`,En={class:`flex gap-4 items-center justify-between`},Dn={class:`flex gap-2 w-full justify-end`},On=[{title:`基础`,component:bn,componentRaw:xn},{title:`描述`,component:wn,componentRaw:Tn},{title:`插槽`,component:e({__name:`_slot`,setup(e){return(e,t)=>(_(),m(Je,{class:`w-96`},{header:E(()=>[k(`div`,En,[t[0]||(t[0]=k(`div`,null,[k(`div`,{class:`text-base font-semibold`},` 自定义头部 `),k(`div`,{class:`text-sm text-muted-foreground`},` header slot 会覆盖 title 和 description `)],-1)),l(U,{name:`i-lucide:badge-check`,class:`text-primary size-5`})])]),footer:E(()=>[k(`div`,Dn,[l(M,{variant:`outline`},{default:E(()=>[...t[1]||(t[1]=[i(` 取消 `,-1)])]),_:1}),l(M,null,{default:E(()=>[...t[2]||(t[2]=[i(` 确定 `,-1)])]),_:1})])]),default:E(()=>[t[3]||(t[3]=i(` 卡片内容区域 `,-1))]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaCard from '../index.vue'
<\/script>

<template>
  <FaCard class="w-96">
    <template #header>
      <div class="flex gap-4 items-center justify-between">
        <div>
          <div class="text-base font-semibold">
            自定义头部
          </div>
          <div class="text-sm text-muted-foreground">
            header slot 会覆盖 title 和 description
          </div>
        </div>
        <FaIcon name="i-lucide:badge-check" class="text-primary size-5" />
      </div>
    </template>

    卡片内容区域

    <template #footer>
      <div class="flex gap-2 w-full justify-end">
        <FaButton variant="outline">
          取消
        </FaButton>
        <FaButton>
          确定
        </FaButton>
      </div>
    </template>
  </FaCard>
</template>
`},{title:`自定义样式`,component:Sn,componentRaw:Cn}],kn=e({__name:`_basic`,setup(e){let t=u(!1);return(e,n)=>(_(),m(Ze,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},{default:E(()=>[...n[1]||(n[1]=[i(` 同意协议 `,-1)])]),_:1},8,[`modelValue`]))}}),An=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckbox from '../index.vue'

type CheckboxValue = boolean | 'indeterminate' | undefined

const checked = shallowRef<CheckboxValue>(false)
<\/script>

<template>
  <FaCheckbox v-model="checked">
    同意协议
  </FaCheckbox>
</template>
`,jn=e({__name:`_custom-style`,setup(e){let t=u(!0);return(e,n)=>(_(),m(Ze,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),class:`px-3 py-2 border border-primary/20 rounded-lg bg-primary/5 gap-3`,"item-class":`size-5 rounded-md border-primary`,"label-class":`text-primary font-medium w-full`},{default:E(()=>[...n[1]||(n[1]=[i(` 开启精细化配置 `,-1)])]),_:1},8,[`modelValue`]))}}),Mn=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckbox from '../index.vue'

type CheckboxValue = boolean | 'indeterminate' | undefined

const checked = shallowRef<CheckboxValue>(true)
<\/script>

<template>
  <FaCheckbox
    v-model="checked"
    class="px-3 py-2 border border-primary/20 rounded-lg bg-primary/5 gap-3"
    item-class="size-5 rounded-md border-primary"
    label-class="text-primary font-medium w-full"
  >
    开启精细化配置
  </FaCheckbox>
</template>
`,Nn={class:`flex flex-col gap-3`},Pn=e({__name:`_disabled`,setup(e){let t=u(!1),n=u(!0);return(e,r)=>(_(),O(`div`,Nn,[l(Ze,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),disabled:``},{default:E(()=>[...r[2]||(r[2]=[i(` 禁用未选中 `,-1)])]),_:1},8,[`modelValue`]),l(Ze,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e),disabled:``},{default:E(()=>[...r[3]||(r[3]=[i(` 禁用已选中 `,-1)])]),_:1},8,[`modelValue`])]))}}),Fn=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckbox from '../index.vue'

type CheckboxValue = boolean | 'indeterminate' | undefined

const unchecked = shallowRef<CheckboxValue>(false)
const checked = shallowRef<CheckboxValue>(true)
<\/script>

<template>
  <div class="flex flex-col gap-3">
    <FaCheckbox v-model="unchecked" disabled>
      禁用未选中
    </FaCheckbox>
    <FaCheckbox v-model="checked" disabled>
      禁用已选中
    </FaCheckbox>
  </div>
</template>
`,In={class:`gap-4 grid`},Ln={class:`text-sm text-muted-foreground`},Rn=e({__name:`_group-basic`,setup(e){let t=u([`music`]),n=[{label:`阅读`,value:`reading`},{label:`音乐`,value:`music`},{label:`运动`,value:`sports`}],r=x(()=>n.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,i)=>(_(),O(`div`,In,[l(bt,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:n},null,8,[`modelValue`]),l(bt,{modelValue:t.value,"onUpdate:modelValue":i[1]||(i[1]=e=>t.value=e),options:n,class:`flex`},null,8,[`modelValue`]),k(`div`,Ln,` 当前值：`+g(r.value||`未选择`),1)]))}}),zn=`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['music'])

const options = [
  { label: '阅读', value: 'reading' },
  { label: '音乐', value: 'music' },
  { label: '运动', value: 'sports' },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup v-model="value" :options="options" />
    <FaCheckboxGroup v-model="value" :options="options" class="flex" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText || '未选择' }}
    </div>
  </div>
</template>
`,Bn={class:`gap-4 grid`},Vn={class:`gap-1 grid min-w-0`},Hn={class:`flex gap-2 items-center`},Un={class:`text-sm font-medium truncate`},Wn={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},Gn={class:`text-xs text-muted-foreground leading-5`},Kn={class:`text-sm text-muted-foreground`},qn=e({__name:`_group-custom-option`,setup(e){let t=u([`focus`,`balanced`]),n=[{label:`专注模式`,value:`focus`,summary:`任务优先`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,summary:`默认体验`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,summary:`信息看板`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(e,r)=>(_(),O(`div`,Bn,[l(bt,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),options:n,class:`gap-2 md:grid-cols-3`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:E(({option:e,checked:t,disabled:n})=>[k(`div`,{class:D([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[t?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,n&&`opacity-60`]])},[k(`div`,Vn,[k(`div`,Hn,[k(`span`,Un,g(e.label),1),k(`span`,Wn,g(e.summary),1)]),k(`div`,Gn,g(e.description),1)]),k(`span`,{class:D([`text-xs font-medium shrink-0`,t?`text-primary`:`text-muted-foreground`])},g(t?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),k(`div`,Kn,` 当前值：`+g(t.value.join(`、`)||`未选择`),1)]))}}),Jn=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['focus', 'balanced'])

const options = [
  {
    label: '专注模式',
    value: 'focus',
    summary: '任务优先',
    description: '突出主任务，弱化辅助信息，适合录入和审批场景。',
  },
  {
    label: '平衡模式',
    value: 'balanced',
    summary: '默认体验',
    description: '信息密度与可读性保持平衡，适合作为默认配置。',
  },
  {
    label: '高密度模式',
    value: 'dense',
    summary: '信息看板',
    description: '在大屏中同时承载更多信息，适合运营与监控看板。',
  },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup
      v-model="value"
      :options="options"
      class="gap-2 md:grid-cols-3"
      option-class="rounded-xl border border-transparent px-1 py-1"
    >
      <template #option="{ option, checked, disabled }">
        <div
          class="px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between"
          :class="[
            checked ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40',
            disabled && 'opacity-60',
          ]"
        >
          <div class="gap-1 grid min-w-0">
            <div class="flex gap-2 items-center">
              <span class="text-sm font-medium truncate">{{ option.label }}</span>
              <span class="text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                {{ option.summary }}
              </span>
            </div>
            <div class="text-xs text-muted-foreground leading-5">
              {{ option.description }}
            </div>
          </div>
          <span class="text-xs font-medium shrink-0" :class="checked ? 'text-primary' : 'text-muted-foreground'">
            {{ checked ? '已选中' : '可选择' }}
          </span>
        </div>
      </template>
    </FaCheckboxGroup>
    <div class="text-sm text-muted-foreground">
      当前值：{{ value.join('、') || '未选择' }}
    </div>
  </div>
</template>
`,Yn={class:`gap-4 grid`},Xn={class:`text-sm text-muted-foreground`},Zn=e({__name:`_group-description`,setup(e){let t=u([`dashboard`,`report`]),n=[{label:`看板订阅`,value:`dashboard`,description:`每天 8:00 推送核心经营指标。`},{label:`周报摘要`,value:`report`,description:`每周一汇总关键数据变化。`},{label:`系统告警`,value:`alarm`,description:`异常波动时立即通知处理人。`}],r=x(()=>n.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,i)=>(_(),O(`div`,Yn,[l(bt,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:n},null,8,[`modelValue`]),k(`div`,Xn,` 当前值：`+g(r.value||`未选择`),1)]))}}),Qn=`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['dashboard', 'report'])

const options = [
  {
    label: '看板订阅',
    value: 'dashboard',
    description: '每天 8:00 推送核心经营指标。',
  },
  {
    label: '周报摘要',
    value: 'report',
    description: '每周一汇总关键数据变化。',
  },
  {
    label: '系统告警',
    value: 'alarm',
    description: '异常波动时立即通知处理人。',
  },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup v-model="value" :options="options" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText || '未选择' }}
    </div>
  </div>
</template>
`,$n={class:`gap-4 grid`},er={class:`text-sm text-muted-foreground`},tr=e({__name:`_group-disabled`,setup(e){let t=u([`basic`]),n=[{label:`基础能力`,value:`basic`},{label:`审批流`,value:`approval`},{label:`审计日志`,value:`audit`,disabled:!0}],r=x(()=>n.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,i)=>(_(),O(`div`,$n,[l(bt,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:n},null,8,[`modelValue`]),k(`div`,er,` 当前值：`+g(r.value||`未选择`),1)]))}}),nr=`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['basic'])

const options = [
  { label: '基础能力', value: 'basic' },
  { label: '审批流', value: 'approval' },
  { label: '审计日志', value: 'audit', disabled: true },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup v-model="value" :options="options" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText || '未选择' }}
    </div>
  </div>
</template>
`,rr={class:`gap-4 grid`},ir={class:`text-sm text-muted-foreground`},ar=[{title:`基础`,component:kn,componentRaw:An},{title:`禁用`,component:Pn,componentRaw:Fn},{title:`半选`,component:e({__name:`_indeterminate`,setup(e){let t=u(`indeterminate`);return(e,n)=>(_(),m(Ze,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},{default:E(()=>[...n[1]||(n[1]=[i(` 部分选中 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckbox from '../index.vue'

type CheckboxValue = boolean | 'indeterminate' | undefined

const checked = shallowRef<CheckboxValue>('indeterminate')
<\/script>

<template>
  <FaCheckbox v-model="checked">
    部分选中
  </FaCheckbox>
</template>
`},{title:`自定义样式`,component:jn,componentRaw:Mn},{title:`复选框组 - 基础`,component:Rn,componentRaw:zn},{title:`复选框组 - 描述`,component:Zn,componentRaw:Qn},{title:`复选框组 - 禁用`,component:tr,componentRaw:nr},{title:`复选框组 - 数量限制`,component:e({__name:`_group-limit`,setup(e){let t=u([`dashboard`]),n=[{label:`看板订阅`,value:`dashboard`},{label:`周报摘要`,value:`report`},{label:`系统告警`,value:`alarm`}],r=x(()=>n.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,i)=>(_(),O(`div`,rr,[l(bt,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:n,min:1,max:2},null,8,[`modelValue`]),k(`div`,ir,` 当前值：`+g(r.value||`未选择`),1),i[1]||(i[1]=k(`div`,{class:`text-xs text-muted-foreground leading-5`},` 已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。 `,-1))]))}}),componentRaw:`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['dashboard'])

const options = [
  { label: '看板订阅', value: 'dashboard' },
  { label: '周报摘要', value: 'report' },
  { label: '系统告警', value: 'alarm' },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup
      v-model="value"
      :options="options"
      :min="1"
      :max="2"
    />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText || '未选择' }}
    </div>
    <div class="text-xs text-muted-foreground leading-5">
      已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。
    </div>
  </div>
</template>
`},{title:`复选框组 - 自定义选项`,component:qn,componentRaw:Jn}],or={class:`mt-4 space-y-2`},sr=e({__name:`_basic`,setup(e){return(e,t)=>(_(),m(wt,null,{trigger:E(({open:e})=>[l(M,null,{default:E(()=>[i(g(e?`收起`:`展开`),1)]),_:2},1024)]),default:E(()=>[k(`div`,or,[(_(),O(w,null,y(5,e=>k(`div`,{key:e,class:`px-4 py-2 border rounded-md`},` 内容 `+g(e),1)),64))])]),_:1}))}}),cr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaCollapsible from '../index.vue'
<\/script>

<template>
  <FaCollapsible>
    <template #trigger="{ open }">
      <FaButton>
        {{ open ? '收起' : '展开' }}
      </FaButton>
    </template>
    <div class="mt-4 space-y-2">
      <div v-for="item in 5" :key="item" class="px-4 py-2 border rounded-md">
        内容 {{ item }}
      </div>
    </div>
  </FaCollapsible>
</template>
`,lr={class:`mt-4 space-y-2`},ur=[{title:`基础`,component:sr,componentRaw:cr},{title:`手动控制`,component:e({__name:`_controlled`,setup(e){let t=u(!1);return(e,n)=>(_(),O(w,null,[l(M,{onClick:n[0]||(n[0]=e=>t.value=!t.value)},{default:E(()=>[i(g(t.value?`收起`:`展开`),1)]),_:1}),l(wt,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e)},{default:E(()=>[k(`div`,lr,[(_(),O(w,null,y(5,e=>k(`div`,{key:e,class:`px-4 py-2 border rounded-md`},` 内容 `+g(e),1)),64))])]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaCollapsible from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = !open">
    {{ open ? '收起' : '展开' }}
  </FaButton>
  <FaCollapsible v-model="open">
    <div class="mt-4 space-y-2">
      <div v-for="item in 5" :key="item" class="px-4 py-2 border rounded-md">
        内容 {{ item }}
      </div>
    </div>
  </FaCollapsible>
</template>
`}],dr={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},fr=e({__name:`_basic`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`打开`,handle:()=>n(`打开`)},{label:`编辑`,handle:()=>n(`编辑`)},{label:`复制`,handle:()=>n(`复制`)}]];return(e,t)=>(_(),m(Pe,{items:r},{default:E(()=>[k(`div`,dr,[l(U,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),pr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaContextMenu from '../index.vue'

interface ContextMenuItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface ContextMenuSubItem {
  label: string
  items: ContextMenuItems
}

type ContextMenuItems = (ContextMenuItem | ContextMenuSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', handle: () => handleClick('打开') },
    { label: '编辑', handle: () => handleClick('编辑') },
    { label: '复制', handle: () => handleClick('复制') },
  ],
] satisfies ContextMenuItems
<\/script>

<template>
  <FaContextMenu :items="items">
    <div class="text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center">
      <FaIcon name="i-hugeicons:mouse-right-click-06" class="op-50 size-12" />
    </div>
  </FaContextMenu>
</template>
`,mr={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},hr=e({__name:`_disabled`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`打开`,handle:()=>n(`打开`)},{label:`复制`,disabled:!0,handle:()=>n(`复制`)},{label:`移动到`,disabled:!0,handle:()=>n(`移动到`)}],[{label:`刷新`,handle:()=>n(`刷新`)}]];return(e,t)=>(_(),m(Pe,{items:r},{default:E(()=>[k(`div`,mr,[l(U,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),gr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaContextMenu from '../index.vue'

interface ContextMenuItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface ContextMenuSubItem {
  label: string
  items: ContextMenuItems
}

type ContextMenuItems = (ContextMenuItem | ContextMenuSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', handle: () => handleClick('打开') },
    { label: '复制', disabled: true, handle: () => handleClick('复制') },
    { label: '移动到', disabled: true, handle: () => handleClick('移动到') },
  ],
  [
    { label: '刷新', handle: () => handleClick('刷新') },
  ],
] satisfies ContextMenuItems
<\/script>

<template>
  <FaContextMenu :items="items">
    <div class="text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center">
      <FaIcon name="i-hugeicons:mouse-right-click-06" class="op-50 size-12" />
    </div>
  </FaContextMenu>
</template>
`,_r={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},vr=e({__name:`_icon`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`打开`,icon:`i-lucide:folder-open`,handle:()=>n(`打开`)},{label:`重命名`,icon:`i-lucide:pencil`,handle:()=>n(`重命名`)},{label:`复制链接`,icon:`i-lucide:link`,handle:()=>n(`复制链接`)}],[{label:`下载`,icon:`i-lucide:download`,handle:()=>n(`下载`)}]];return(e,t)=>(_(),m(Pe,{items:r},{default:E(()=>[k(`div`,_r,[l(U,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),yr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaContextMenu from '../index.vue'

interface ContextMenuItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface ContextMenuSubItem {
  label: string
  items: ContextMenuItems
}

type ContextMenuItems = (ContextMenuItem | ContextMenuSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', icon: 'i-lucide:folder-open', handle: () => handleClick('打开') },
    { label: '重命名', icon: 'i-lucide:pencil', handle: () => handleClick('重命名') },
    { label: '复制链接', icon: 'i-lucide:link', handle: () => handleClick('复制链接') },
  ],
  [
    { label: '下载', icon: 'i-lucide:download', handle: () => handleClick('下载') },
  ],
] satisfies ContextMenuItems
<\/script>

<template>
  <FaContextMenu :items="items">
    <div class="text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center">
      <FaIcon name="i-hugeicons:mouse-right-click-06" class="op-50 size-12" />
    </div>
  </FaContextMenu>
</template>
`,br={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},xr=e({__name:`_nested`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`打开`,handle:()=>n(`打开`)},{label:`更多操作`,items:[[{label:`保存页面`,handle:()=>n(`保存页面`)},{label:`导出为 PDF`,handle:()=>n(`导出为 PDF`)}],[{label:`复制路径`,handle:()=>n(`复制路径`)}]]}]];return(e,t)=>(_(),m(Pe,{items:r},{default:E(()=>[k(`div`,br,[l(U,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),Sr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaContextMenu from '../index.vue'

interface ContextMenuItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface ContextMenuSubItem {
  label: string
  items: ContextMenuItems
}

type ContextMenuItems = (ContextMenuItem | ContextMenuSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', handle: () => handleClick('打开') },
    {
      label: '更多操作',
      items: [
        [
          { label: '保存页面', handle: () => handleClick('保存页面') },
          { label: '导出为 PDF', handle: () => handleClick('导出为 PDF') },
        ],
        [
          { label: '复制路径', handle: () => handleClick('复制路径') },
        ],
      ],
    },
  ],
] satisfies ContextMenuItems
<\/script>

<template>
  <FaContextMenu :items="items">
    <div class="text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center">
      <FaIcon name="i-hugeicons:mouse-right-click-06" class="op-50 size-12" />
    </div>
  </FaContextMenu>
</template>
`,Cr={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},wr=[{title:`基础`,component:fr,componentRaw:pr},{title:`图标`,component:vr,componentRaw:yr},{title:`警告`,component:e({__name:`_warning`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`查看详情`,handle:()=>n(`查看详情`)},{label:`复制副本`,handle:()=>n(`复制副本`)}],[{label:`删除`,variant:`destructive`,handle:()=>n(`删除`)}]];return(e,t)=>(_(),m(Pe,{items:r},{default:E(()=>[k(`div`,Cr,[l(U,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaContextMenu from '../index.vue'

interface ContextMenuItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface ContextMenuSubItem {
  label: string
  items: ContextMenuItems
}

type ContextMenuItems = (ContextMenuItem | ContextMenuSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '查看详情', handle: () => handleClick('查看详情') },
    { label: '复制副本', handle: () => handleClick('复制副本') },
  ],
  [
    { label: '删除', variant: 'destructive', handle: () => handleClick('删除') },
  ],
] satisfies ContextMenuItems
<\/script>

<template>
  <FaContextMenu :items="items">
    <div class="text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center">
      <FaIcon name="i-hugeicons:mouse-right-click-06" class="op-50 size-12" />
    </div>
  </FaContextMenu>
</template>
`},{title:`禁用`,component:hr,componentRaw:gr},{title:`嵌套`,component:xr,componentRaw:Sr}],Tr=e({__name:`_basic`,setup(e){let t=[{label:`Username`,value:`kooriokami`},{label:`Telephone`,value:`18100000000`},{label:`Place`,value:`Suzhou`},{label:`Remarks`,value:`School`},{label:`Address`,value:`No.1188, Wuzhong Avenue`,span:2}];return(e,n)=>(_(),m(Nt,{items:t,"label-width":`120px`}))}}),Er=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaDescriptions from '../index.vue'

const items = [
  { label: 'Username', value: 'kooriokami' },
  { label: 'Telephone', value: '18100000000' },
  { label: 'Place', value: 'Suzhou' },
  { label: 'Remarks', value: 'School' },
  { label: 'Address', value: 'No.1188, Wuzhong Avenue', span: 2 },
]
<\/script>

<template>
  <FaDescriptions :items="items" label-width="120px" />
</template>
`,Dr=e({__name:`_border`,setup(e){let t=[{label:`Username`,value:`kooriokami`},{label:`Telephone`,value:`18100000000`},{label:`Place`,value:`Suzhou`},{label:`Remarks`,value:`School`},{label:`Address`,value:`No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province`,span:2}];return(e,n)=>(_(),m(Nt,{items:t,border:``,"label-width":`120px`}))}}),Or=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaDescriptions from '../index.vue'

const items = [
  { label: 'Username', value: 'kooriokami' },
  { label: 'Telephone', value: '18100000000' },
  { label: 'Place', value: 'Suzhou' },
  { label: 'Remarks', value: 'School' },
  { label: 'Address', value: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province', span: 2 },
]
<\/script>

<template>
  <FaDescriptions :items="items" border label-width="120px" />
</template>
`,kr={class:`inline-flex gap-2 items-center`},Ar={class:`inline-flex gap-2 items-center`},jr={class:`inline-flex gap-2 items-center`},Mr={class:`inline-flex gap-2 items-center`},Nr={class:`inline-flex gap-2 items-center`},Pr=[{title:`基础`,component:Tr,componentRaw:Er},{title:`边框`,component:Dr,componentRaw:Or},{title:`纵向布局`,component:e({__name:`_vertical`,setup(e){let t=[{label:`早餐`,value:`苹果`},{label:`早午餐`,value:`苹果`},{label:`午餐`,value:`苹果`},{label:`晚餐`,value:`苹果`},{label:`正餐`,value:`苹果`},{label:`夜宵`,value:`苹果`},{label:`早餐`,value:`苹果`},{label:`早午餐`,value:`苹果`,span:2},{label:`晚餐`,value:`苹果`,span:3}];return(e,n)=>(_(),m(Nt,{items:t,column:6,direction:`vertical`,border:``}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaDescriptions from '../index.vue'

const items = [
  { label: '早餐', value: '苹果' },
  { label: '早午餐', value: '苹果' },
  { label: '午餐', value: '苹果' },
  { label: '晚餐', value: '苹果' },
  { label: '正餐', value: '苹果' },
  { label: '夜宵', value: '苹果' },
  { label: '早餐', value: '苹果' },
  { label: '早午餐', value: '苹果', span: 2 },
  { label: '晚餐', value: '苹果', span: 3 },
]
<\/script>

<template>
  <FaDescriptions :items="items" :column="6" direction="vertical" border />
</template>
`},{title:`自定义插槽`,component:e({__name:`_slot`,setup(e){let t=[{key:`username`,label:`Username`,value:`kooriokami`,icon:`i-lucide:user`},{key:`telephone`,label:`Telephone`,value:`18100000000`,icon:`i-lucide:smartphone`},{key:`place`,label:`Place`,value:`Suzhou`,icon:`i-lucide:map-pin`},{key:`remarks`,label:`Remarks`,value:`School`,icon:`i-lucide:notebook-text`,tagVariant:`outline`},{key:`address`,label:`Address`,value:`No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province`,icon:`i-lucide:building-2`,span:2}];return(e,n)=>(_(),m(Nt,{items:t,border:``,"label-width":`200px`},{"label-username":E(({item:e,label:t})=>[k(`div`,kr,[l(U,{name:e.icon,class:`size-4`},null,8,[`name`]),k(`span`,null,g(t),1)])]),"label-telephone":E(({item:e,label:t})=>[k(`div`,Ar,[l(U,{name:e.icon,class:`size-4`},null,8,[`name`]),k(`span`,null,g(t),1)])]),"label-place":E(({item:e,label:t})=>[k(`div`,jr,[l(U,{name:e.icon,class:`size-4`},null,8,[`name`]),k(`span`,null,g(t),1)])]),"label-remarks":E(({item:e,label:t})=>[k(`div`,Mr,[l(U,{name:e.icon,class:`size-4`},null,8,[`name`]),k(`span`,null,g(t),1)])]),"label-address":E(({item:e,label:t})=>[k(`div`,Nr,[l(U,{name:e.icon,class:`size-4`},null,8,[`name`]),k(`span`,null,g(t),1)])]),"value-remarks":E(({item:e,value:t})=>[l(F,{variant:e.tagVariant},{default:E(()=>[i(g(t),1)]),_:2},1032,[`variant`])]),_:1}))}}),componentRaw:`<script setup lang="ts">
import type { DescriptionItem } from '../index.vue'
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import FaTag from '../../tag/index.vue'
import FaDescriptions from '../index.vue'

type ProfileItem = DescriptionItem<{
  icon: string
  tagVariant?: 'default' | 'secondary' | 'destructive' | 'outline'
}>

const items: ProfileItem[] = [
  { key: 'username', label: 'Username', value: 'kooriokami', icon: 'i-lucide:user' },
  { key: 'telephone', label: 'Telephone', value: '18100000000', icon: 'i-lucide:smartphone' },
  { key: 'place', label: 'Place', value: 'Suzhou', icon: 'i-lucide:map-pin' },
  { key: 'remarks', label: 'Remarks', value: 'School', icon: 'i-lucide:notebook-text', tagVariant: 'outline' },
  { key: 'address', label: 'Address', value: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province', icon: 'i-lucide:building-2', span: 2 },
]
<\/script>

<template>
  <FaDescriptions :items="items" border label-width="200px">
    <template #label-username="{ item, label }">
      <div class="inline-flex gap-2 items-center">
        <FaIcon :name="item.icon" class="size-4" />
        <span>{{ label }}</span>
      </div>
    </template>

    <template #label-telephone="{ item, label }">
      <div class="inline-flex gap-2 items-center">
        <FaIcon :name="item.icon" class="size-4" />
        <span>{{ label }}</span>
      </div>
    </template>

    <template #label-place="{ item, label }">
      <div class="inline-flex gap-2 items-center">
        <FaIcon :name="item.icon" class="size-4" />
        <span>{{ label }}</span>
      </div>
    </template>

    <template #label-remarks="{ item, label }">
      <div class="inline-flex gap-2 items-center">
        <FaIcon :name="item.icon" class="size-4" />
        <span>{{ label }}</span>
      </div>
    </template>

    <template #label-address="{ item, label }">
      <div class="inline-flex gap-2 items-center">
        <FaIcon :name="item.icon" class="size-4" />
        <span>{{ label }}</span>
      </div>
    </template>

    <template #value-remarks="{ item, value }">
      <FaTag :variant="item.tagVariant">
        {{ value }}
      </FaTag>
    </template>
  </FaDescriptions>
</template>
`}],Fr=[{title:`基础`,component:e({__name:`_basic`,setup(e){return(e,t)=>(_(),O(`div`,null,[t[1]||(t[1]=k(`div`,{class:`text-sm text-muted-foreground`},` 上方内容 `,-1)),l(et),t[2]||(t[2]=k(`div`,{class:`text-sm text-muted-foreground`},` 下方内容 `,-1)),l(et,null,{default:E(()=>[...t[0]||(t[0]=[i(` 分割文字 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaDivider from '../index.vue'
<\/script>

<template>
  <div>
    <div class="text-sm text-muted-foreground">
      上方内容
    </div>
    <FaDivider />
    <div class="text-sm text-muted-foreground">
      下方内容
    </div>
    <FaDivider>
      分割文字
    </FaDivider>
  </div>
</template>
`},{title:`位置`,component:e({__name:`_position`,setup(e){return(e,t)=>(_(),O(`div`,null,[l(et,null,{default:E(()=>[...t[0]||(t[0]=[i(` center `,-1)])]),_:1}),l(et,{position:`start`},{default:E(()=>[...t[1]||(t[1]=[i(` start `,-1)])]),_:1}),l(et,{position:`end`},{default:E(()=>[...t[2]||(t[2]=[i(` end `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaDivider from '../index.vue'
<\/script>

<template>
  <div>
    <FaDivider>
      center
    </FaDivider>
    <FaDivider position="start">
      start
    </FaDivider>
    <FaDivider position="end">
      end
    </FaDivider>
  </div>
</template>
`}],Ir=e({__name:`_basic`,setup(e){let t=u(!1);return(e,n)=>(_(),O(w,null,[l(M,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:E(()=>[...n[2]||(n[2]=[i(` 打开抽屉 `,-1)])]),_:1}),l(P,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`抽屉标题`},{default:E(()=>[...n[3]||(n[3]=[k(`div`,{class:`text-sm text-muted-foreground`},` 这里是抽屉内容区域。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Lr=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开抽屉
  </FaButton>
  <FaDrawer v-model="open" title="抽屉标题">
    <div class="text-sm text-muted-foreground">
      这里是抽屉内容区域。
    </div>
  </FaDrawer>
</template>
`,Rr={class:`flex flex-wrap gap-2`},zr=e({__name:`_center-border-loading`,setup(e){let t=u(!1),n=u(!1),r=u(!1),a=u(!1);function o(){r.value=!0,a.value=!0,window.setTimeout(()=>{a.value=!1},1800)}return(e,s)=>(_(),O(w,null,[k(`div`,Rr,[l(M,{onClick:s[0]||(s[0]=e=>t.value=!0)},{default:E(()=>[...s[5]||(s[5]=[i(` 居中 `,-1)])]),_:1}),l(M,{variant:`outline`,onClick:s[1]||(s[1]=e=>n.value=!0)},{default:E(()=>[...s[6]||(s[6]=[i(` 无边框 `,-1)])]),_:1}),l(M,{variant:`secondary`,onClick:o},{default:E(()=>[...s[7]||(s[7]=[i(` 载入 `,-1)])]),_:1})]),l(P,{modelValue:t.value,"onUpdate:modelValue":s[2]||(s[2]=e=>t.value=e),title:`居中抽屉`,centered:``,"show-cancel-button":``},{default:E(()=>[...s[8]||(s[8]=[k(`div`,{class:`text-sm text-muted-foreground text-center`},` 标题、描述和底部按钮会居中显示。 `,-1)])]),_:1},8,[`modelValue`]),l(P,{modelValue:n.value,"onUpdate:modelValue":s[3]||(s[3]=e=>n.value=e),title:`无边框抽屉`,bordered:!1,"show-cancel-button":``},{default:E(()=>[...s[9]||(s[9]=[k(`div`,{class:`text-sm text-muted-foreground`},` 头部和底部不显示分割线。 `,-1)])]),_:1},8,[`modelValue`]),l(P,{modelValue:r.value,"onUpdate:modelValue":s[4]||(s[4]=e=>r.value=e),title:`载入状态`,loading:a.value},{default:E(()=>[...s[10]||(s[10]=[k(`div`,{class:`text-sm text-muted-foreground`},` 抽屉主体区域会显示载入遮罩。 `,-1)])]),_:1},8,[`modelValue`,`loading`])],64))}}),Br=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const centeredOpen = shallowRef(false)
const borderlessOpen = shallowRef(false)
const loadingOpen = shallowRef(false)
const loading = shallowRef(false)

function openLoadingDrawer() {
  loadingOpen.value = true
  loading.value = true
  window.setTimeout(() => {
    loading.value = false
  }, 1800)
}
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="centeredOpen = true">
      居中
    </FaButton>
    <FaButton variant="outline" @click="borderlessOpen = true">
      无边框
    </FaButton>
    <FaButton variant="secondary" @click="openLoadingDrawer">
      载入
    </FaButton>
  </div>

  <FaDrawer v-model="centeredOpen" title="居中抽屉" centered show-cancel-button>
    <div class="text-sm text-muted-foreground text-center">
      标题、描述和底部按钮会居中显示。
    </div>
  </FaDrawer>
  <FaDrawer v-model="borderlessOpen" title="无边框抽屉" :bordered="false" show-cancel-button>
    <div class="text-sm text-muted-foreground">
      头部和底部不显示分割线。
    </div>
  </FaDrawer>
  <FaDrawer v-model="loadingOpen" title="载入状态" :loading="loading">
    <div class="text-sm text-muted-foreground">
      抽屉主体区域会显示载入遮罩。
    </div>
  </FaDrawer>
</template>
`,Vr={class:`flex flex-wrap gap-2`},Hr=e({__name:`_closable`,setup(e){let t=u(!1),n=u(!1);return(e,r)=>(_(),O(w,null,[k(`div`,Vr,[l(M,{onClick:r[0]||(r[0]=e=>t.value=!0)},{default:E(()=>[...r[4]||(r[4]=[i(` 显示关闭按钮 `,-1)])]),_:1}),l(M,{variant:`outline`,onClick:r[1]||(r[1]=e=>n.value=!0)},{default:E(()=>[...r[5]||(r[5]=[i(` 隐藏关闭按钮 `,-1)])]),_:1})]),l(P,{modelValue:t.value,"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),title:`显示关闭按钮`,closable:``},{default:E(()=>[...r[6]||(r[6]=[i(` 右上角会显示关闭按钮。 `,-1)])]),_:1},8,[`modelValue`]),l(P,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),title:`隐藏关闭按钮`,closable:!1},{default:E(()=>[...r[7]||(r[7]=[i(` 右上角不会显示关闭按钮，可通过底部按钮关闭。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Ur=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const closableOpen = shallowRef(false)
const notClosableOpen = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="closableOpen = true">
      显示关闭按钮
    </FaButton>
    <FaButton variant="outline" @click="notClosableOpen = true">
      隐藏关闭按钮
    </FaButton>
  </div>

  <FaDrawer v-model="closableOpen" title="显示关闭按钮" closable>
    右上角会显示关闭按钮。
  </FaDrawer>
  <FaDrawer v-model="notClosableOpen" title="隐藏关闭按钮" :closable="false">
    右上角不会显示关闭按钮，可通过底部按钮关闭。
  </FaDrawer>
</template>
`,Wr=e({__name:`_custom-style`,setup(e){let t=u(!1);return(e,n)=>(_(),O(w,null,[l(M,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:E(()=>[...n[2]||(n[2]=[i(` 打开抽屉 `,-1)])]),_:1}),l(P,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`自定义样式`,description:`通过 contentClass、headerClass 和 footerClass 调整抽屉区域样式。`,"content-class":`sm:max-w-xl border-primary/30`,"header-class":`bg-primary/8`,"footer-class":`bg-muted/50`,"show-cancel-button":``},{default:E(()=>[...n[3]||(n[3]=[k(`div`,{class:`text-sm leading-6 p-4 rounded-lg bg-muted/50`},` 可以根据业务场景调整宽度、背景、边框和底部区域样式。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Gr=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开抽屉
  </FaButton>
  <FaDrawer
    v-model="open"
    title="自定义样式"
    description="通过 contentClass、headerClass 和 footerClass 调整抽屉区域样式。"
    content-class="sm:max-w-xl border-primary/30"
    header-class="bg-primary/8"
    footer-class="bg-muted/50"
    show-cancel-button
  >
    <div class="text-sm leading-6 p-4 rounded-lg bg-muted/50">
      可以根据业务场景调整宽度、背景、边框和底部区域样式。
    </div>
  </FaDrawer>
</template>
`,Kr=e({__name:`_event`,setup(e){let t=u(!1),n=B();function r(e){n(`触发事件：${e}`)}return(e,n)=>(_(),O(w,null,[l(M,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:E(()=>[...n[8]||(n[8]=[i(` 打开抽屉 `,-1)])]),_:1}),l(P,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`触发事件`,"show-cancel-button":``,onOpen:n[2]||(n[2]=e=>r(`open`)),onOpened:n[3]||(n[3]=e=>r(`opened`)),onClose:n[4]||(n[4]=e=>r(`close`)),onClosed:n[5]||(n[5]=e=>r(`closed`)),onConfirm:n[6]||(n[6]=e=>r(`confirm`)),onCancel:n[7]||(n[7]=e=>r(`cancel`))},{default:E(()=>[...n[9]||(n[9]=[k(`div`,{class:`text-sm text-muted-foreground`},` 打开、关闭、确认和取消时会触发对应事件。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),qr=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../../toast'
import FaDrawer from '../index.vue'

const open = shallowRef(false)
const toast = useToast()

function notify(eventName: string) {
  toast(\`触发事件：\${eventName}\`)
}
<\/script>

<template>
  <FaButton @click="open = true">
    打开抽屉
  </FaButton>
  <FaDrawer
    v-model="open"
    title="触发事件"
    show-cancel-button
    @open="notify('open')"
    @opened="notify('opened')"
    @close="notify('close')"
    @closed="notify('closed')"
    @confirm="notify('confirm')"
    @cancel="notify('cancel')"
  >
    <div class="text-sm text-muted-foreground">
      打开、关闭、确认和取消时会触发对应事件。
    </div>
  </FaDrawer>
</template>
`,Jr=e({__name:`_functional`,setup(e){let t=B(),{open:n}=de().create({title:`函数式调用`,description:`通过 useDrawer().create() 创建抽屉。`,content:c(`div`,{class:`text-sm text-muted-foreground leading-6`},`这里是函数式调用渲染的内容。`),showCancelButton:!0,onConfirm:()=>t(`确认操作`),onCancel:()=>t(`取消操作`)});return(e,t)=>(_(),m(M,{onClick:d(n)},{default:E(()=>[...t[0]||(t[0]=[i(` 打开抽屉 `,-1)])]),_:1},8,[`onClick`]))}}),Yr=`<script setup lang="ts">
import { h } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../../toast'
import { useDrawer } from '../index'

const toast = useToast()

const { open } = useDrawer().create({
  title: '函数式调用',
  description: '通过 useDrawer().create() 创建抽屉。',
  content: h('div', { class: 'text-sm text-muted-foreground leading-6' }, '这里是函数式调用渲染的内容。'),
  showCancelButton: true,
  onConfirm: () => toast('确认操作'),
  onCancel: () => toast('取消操作'),
})
<\/script>

<template>
  <FaButton @click="open">
    打开抽屉
  </FaButton>
</template>
`,Xr={class:`flex flex-wrap gap-2`},Zr=e({__name:`_header-footer`,setup(e){let t=u(!1),n=u(!1);return(e,r)=>(_(),O(w,null,[k(`div`,Xr,[l(M,{onClick:r[0]||(r[0]=e=>t.value=!0)},{default:E(()=>[...r[4]||(r[4]=[i(` 隐藏头部 `,-1)])]),_:1}),l(M,{variant:`outline`,onClick:r[1]||(r[1]=e=>n.value=!0)},{default:E(()=>[...r[5]||(r[5]=[i(` 隐藏底部 `,-1)])]),_:1})]),l(P,{modelValue:t.value,"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),header:!1},{default:E(()=>[...r[6]||(r[6]=[k(`div`,{class:`text-sm text-muted-foreground`},` 当前抽屉隐藏了头部区域。 `,-1)])]),_:1},8,[`modelValue`]),l(P,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),title:`隐藏底部`,footer:!1},{default:E(()=>[...r[7]||(r[7]=[k(`div`,{class:`text-sm text-muted-foreground`},` 当前抽屉隐藏了底部操作区。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Qr=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const hiddenHeaderOpen = shallowRef(false)
const hiddenFooterOpen = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="hiddenHeaderOpen = true">
      隐藏头部
    </FaButton>
    <FaButton variant="outline" @click="hiddenFooterOpen = true">
      隐藏底部
    </FaButton>
  </div>

  <FaDrawer v-model="hiddenHeaderOpen" :header="false">
    <div class="text-sm text-muted-foreground">
      当前抽屉隐藏了头部区域。
    </div>
  </FaDrawer>
  <FaDrawer v-model="hiddenFooterOpen" title="隐藏底部" :footer="false">
    <div class="text-sm text-muted-foreground">
      当前抽屉隐藏了底部操作区。
    </div>
  </FaDrawer>
</template>
`,$r={class:`flex flex-wrap gap-2`},ei=e({__name:`_overlay-blur`,setup(e){let t=u(!1),n=u(!1);return(e,r)=>(_(),O(w,null,[k(`div`,$r,[l(M,{onClick:r[0]||(r[0]=e=>t.value=!0)},{default:E(()=>[...r[4]||(r[4]=[i(` 无遮罩 `,-1)])]),_:1}),l(M,{variant:`outline`,onClick:r[1]||(r[1]=e=>n.value=!0)},{default:E(()=>[...r[5]||(r[5]=[i(` 模糊遮罩 `,-1)])]),_:1})]),l(P,{modelValue:t.value,"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),title:`无遮罩`,overlay:!1},{default:E(()=>[...r[6]||(r[6]=[i(` 打开时不显示背景遮罩。 `,-1)])]),_:1},8,[`modelValue`]),l(P,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),title:`模糊遮罩`,"overlay-blur":``},{default:E(()=>[...r[7]||(r[7]=[i(` 打开时背景遮罩带模糊效果。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),ti=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const noOverlayOpen = shallowRef(false)
const blurOverlayOpen = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="noOverlayOpen = true">
      无遮罩
    </FaButton>
    <FaButton variant="outline" @click="blurOverlayOpen = true">
      模糊遮罩
    </FaButton>
  </div>

  <FaDrawer v-model="noOverlayOpen" title="无遮罩" :overlay="false">
    打开时不显示背景遮罩。
  </FaDrawer>
  <FaDrawer v-model="blurOverlayOpen" title="模糊遮罩" overlay-blur>
    打开时背景遮罩带模糊效果。
  </FaDrawer>
</template>
`,ni={class:`flex flex-wrap gap-2`},ri=e({__name:`_side`,setup(e){let t=r({top:!1,bottom:!1,left:!1,right:!1});return(e,n)=>(_(),O(w,null,[k(`div`,ni,[l(M,{onClick:n[0]||(n[0]=e=>t.top=!0)},{default:E(()=>[...n[8]||(n[8]=[i(` 上方 `,-1)])]),_:1}),l(M,{onClick:n[1]||(n[1]=e=>t.bottom=!0)},{default:E(()=>[...n[9]||(n[9]=[i(` 下方 `,-1)])]),_:1}),l(M,{onClick:n[2]||(n[2]=e=>t.left=!0)},{default:E(()=>[...n[10]||(n[10]=[i(` 左侧 `,-1)])]),_:1}),l(M,{onClick:n[3]||(n[3]=e=>t.right=!0)},{default:E(()=>[...n[11]||(n[11]=[i(` 右侧 `,-1)])]),_:1})]),l(P,{modelValue:t.top,"onUpdate:modelValue":n[4]||(n[4]=e=>t.top=e),side:`top`,title:`上方抽屉`},{default:E(()=>[...n[12]||(n[12]=[i(` 从页面顶部弹出。 `,-1)])]),_:1},8,[`modelValue`]),l(P,{modelValue:t.bottom,"onUpdate:modelValue":n[5]||(n[5]=e=>t.bottom=e),side:`bottom`,title:`下方抽屉`},{default:E(()=>[...n[13]||(n[13]=[i(` 从页面底部弹出。 `,-1)])]),_:1},8,[`modelValue`]),l(P,{modelValue:t.left,"onUpdate:modelValue":n[6]||(n[6]=e=>t.left=e),side:`left`,title:`左侧抽屉`},{default:E(()=>[...n[14]||(n[14]=[i(` 从页面左侧弹出。 `,-1)])]),_:1},8,[`modelValue`]),l(P,{modelValue:t.right,"onUpdate:modelValue":n[7]||(n[7]=e=>t.right=e),side:`right`,title:`右侧抽屉`},{default:E(()=>[...n[15]||(n[15]=[i(` 从页面右侧弹出。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),ii=`<script setup lang="ts">
import { reactive } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const drawers = reactive({
  top: false,
  bottom: false,
  left: false,
  right: false,
})
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="drawers.top = true">
      上方
    </FaButton>
    <FaButton @click="drawers.bottom = true">
      下方
    </FaButton>
    <FaButton @click="drawers.left = true">
      左侧
    </FaButton>
    <FaButton @click="drawers.right = true">
      右侧
    </FaButton>
  </div>

  <FaDrawer v-model="drawers.top" side="top" title="上方抽屉">
    从页面顶部弹出。
  </FaDrawer>
  <FaDrawer v-model="drawers.bottom" side="bottom" title="下方抽屉">
    从页面底部弹出。
  </FaDrawer>
  <FaDrawer v-model="drawers.left" side="left" title="左侧抽屉">
    从页面左侧弹出。
  </FaDrawer>
  <FaDrawer v-model="drawers.right" side="right" title="右侧抽屉">
    从页面右侧弹出。
  </FaDrawer>
</template>
`,ai={class:`pr-8 flex gap-3 items-start`},oi={class:`flex gap-2 w-full justify-end`},si=[{title:`基础`,component:Ir,componentRaw:Lr},{title:`弹出方向`,component:ri,componentRaw:ii},{title:`标题描述`,component:e({__name:`_title-description`,setup(e){let t=u(!1);return(e,n)=>(_(),O(w,null,[l(M,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:E(()=>[...n[2]||(n[2]=[i(` 打开抽屉 `,-1)])]),_:1}),l(P,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`成员信息`,description:`用于补充说明当前抽屉的内容和操作上下文。`},{default:E(()=>[...n[3]||(n[3]=[k(`div`,{class:`text-sm text-muted-foreground leading-6`},` 标题和描述会显示在默认头部区域中。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开抽屉
  </FaButton>
  <FaDrawer
    v-model="open"
    title="成员信息"
    description="用于补充说明当前抽屉的内容和操作上下文。"
  >
    <div class="text-sm text-muted-foreground leading-6">
      标题和描述会显示在默认头部区域中。
    </div>
  </FaDrawer>
</template>
`},{title:`显示/隐藏关闭按钮`,component:Hr,componentRaw:Ur},{title:`居中/边框/载入`,component:zr,componentRaw:Br},{title:`遮罩/模糊`,component:ei,componentRaw:ti},{title:`显示/隐藏头部底部`,component:Zr,componentRaw:Qr},{title:`插槽`,component:e({__name:`_slot`,setup(e){let t=u(!1);return(e,n)=>(_(),O(w,null,[l(M,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:E(()=>[...n[4]||(n[4]=[i(` 打开抽屉 `,-1)])]),_:1}),l(P,{modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=e=>t.value=e)},{header:E(()=>[k(`div`,ai,[l(U,{name:`i-lucide:panel-right-open`,class:`text-primary mt-0.5 size-5`}),n[5]||(n[5]=k(`div`,null,[k(`div`,{class:`font-semibold`},` 自定义头部 `),k(`div`,{class:`text-sm text-muted-foreground`},` 使用 header 插槽替换默认标题。 `)],-1))])]),footer:E(()=>[k(`div`,oi,[l(M,{variant:`outline`,onClick:n[1]||(n[1]=e=>t.value=!1)},{default:E(()=>[...n[6]||(n[6]=[i(` 取消 `,-1)])]),_:1}),l(M,{onClick:n[2]||(n[2]=e=>t.value=!1)},{default:E(()=>[...n[7]||(n[7]=[i(` 保存 `,-1)])]),_:1})])]),default:E(()=>[n[8]||(n[8]=k(`div`,{class:`text-sm text-muted-foreground`},` 这里是默认插槽内容。 `,-1))]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaDrawer from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开抽屉
  </FaButton>
  <FaDrawer v-model="open">
    <template #header>
      <div class="pr-8 flex gap-3 items-start">
        <FaIcon name="i-lucide:panel-right-open" class="text-primary mt-0.5 size-5" />
        <div>
          <div class="font-semibold">
            自定义头部
          </div>
          <div class="text-sm text-muted-foreground">
            使用 header 插槽替换默认标题。
          </div>
        </div>
      </div>
    </template>

    <div class="text-sm text-muted-foreground">
      这里是默认插槽内容。
    </div>

    <template #footer>
      <div class="flex gap-2 w-full justify-end">
        <FaButton variant="outline" @click="open = false">
          取消
        </FaButton>
        <FaButton @click="open = false">
          保存
        </FaButton>
      </div>
    </template>
  </FaDrawer>
</template>
`},{title:`自定义样式`,component:Wr,componentRaw:Gr},{title:`触发事件`,component:Kr,componentRaw:qr},{title:`函数式调用`,component:Jr,componentRaw:Yr}],ci={class:`flex flex-wrap gap-2`},li=e({__name:`_align`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`个人设置`,icon:`i-lucide:user`,handle:()=>n(`个人设置`)},{label:`账号安全`,icon:`i-lucide:shield`,handle:()=>n(`账号安全`)}]];return(e,t)=>(_(),O(`div`,ci,[l(j,{items:r,align:`start`},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[0]||(t[0]=i(` Start `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),l(j,{items:r,align:`center`},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[1]||(t[1]=i(` Center `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),l(j,{items:r,align:`end`},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[2]||(t[2]=i(` End `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1})]))}}),ui=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '个人设置', icon: 'i-lucide:user', handle: () => handleClick('个人设置') },
    { label: '账号安全', icon: 'i-lucide:shield', handle: () => handleClick('账号安全') },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaDropdown :items="items" align="start">
      <FaButton variant="outline">
        Start
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" align="center">
      <FaButton variant="outline">
        Center
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" align="end">
      <FaButton variant="outline">
        End
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
  </div>
</template>
`,di=e({__name:`_basic`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`查看详情`,handle:()=>n(`查看详情`)},{label:`编辑`,handle:()=>n(`编辑`)},{label:`复制`,handle:()=>n(`复制`)}]];return(e,t)=>(_(),m(j,{items:r},{default:E(()=>[l(M,null,{default:E(()=>[t[0]||(t[0]=i(` 操作 `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),fi=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  handle?: () => void
}

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '查看详情', handle: () => handleClick('查看详情') },
    { label: '编辑', handle: () => handleClick('编辑') },
    { label: '复制', handle: () => handleClick('复制') },
  ],
] satisfies DropdownItem[][]
<\/script>

<template>
  <FaDropdown :items="items">
    <FaButton>
      操作
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
`,pi=e({__name:`_disabled`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`打开`,handle:()=>n(`打开`)},{label:`复制`,disabled:!0,handle:()=>n(`复制`)},{label:`移动到`,disabled:!0,handle:()=>n(`移动到`)}],[{label:`刷新`,handle:()=>n(`刷新`)}]];return(e,t)=>(_(),m(j,{items:r},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[0]||(t[0]=i(` 更多操作 `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),mi=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', handle: () => handleClick('打开') },
    { label: '复制', disabled: true, handle: () => handleClick('复制') },
    { label: '移动到', disabled: true, handle: () => handleClick('移动到') },
  ],
  [
    { label: '刷新', handle: () => handleClick('刷新') },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <FaDropdown :items="items">
    <FaButton variant="outline">
      更多操作
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
`,hi=e({__name:`_icon`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`打开`,icon:`i-lucide:folder-open`,handle:()=>n(`打开`)},{label:`重命名`,icon:`i-lucide:pencil`,handle:()=>n(`重命名`)},{label:`复制链接`,icon:`i-lucide:link`,handle:()=>n(`复制链接`)}],[{label:`下载`,icon:`i-lucide:download`,handle:()=>n(`下载`)}]];return(e,t)=>(_(),m(j,{items:r},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[0]||(t[0]=i(` 文件操作 `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),gi=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', icon: 'i-lucide:folder-open', handle: () => handleClick('打开') },
    { label: '重命名', icon: 'i-lucide:pencil', handle: () => handleClick('重命名') },
    { label: '复制链接', icon: 'i-lucide:link', handle: () => handleClick('复制链接') },
  ],
  [
    { label: '下载', icon: 'i-lucide:download', handle: () => handleClick('下载') },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <FaDropdown :items="items">
    <FaButton variant="outline">
      文件操作
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
`,_i=e({__name:`_nested`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`打开`,handle:()=>n(`打开`)},{label:`更多操作`,items:[[{label:`保存页面`,handle:()=>n(`保存页面`)},{label:`导出为 PDF`,handle:()=>n(`导出为 PDF`)}],[{label:`复制路径`,handle:()=>n(`复制路径`)}]]}]];return(e,t)=>(_(),m(j,{items:r},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[0]||(t[0]=i(` 页面操作 `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),vi=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', handle: () => handleClick('打开') },
    {
      label: '更多操作',
      items: [
        [
          { label: '保存页面', handle: () => handleClick('保存页面') },
          { label: '导出为 PDF', handle: () => handleClick('导出为 PDF') },
        ],
        [
          { label: '复制路径', handle: () => handleClick('复制路径') },
        ],
      ],
    },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <FaDropdown :items="items">
    <FaButton variant="outline">
      页面操作
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
`,yi={class:`flex flex-wrap gap-2`},bi=e({__name:`_offset`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`新建文件`,icon:`i-lucide:file-plus`,handle:()=>n(`新建文件`)},{label:`新建文件夹`,icon:`i-lucide:folder-plus`,handle:()=>n(`新建文件夹`)}]];return(e,t)=>(_(),O(`div`,yi,[l(j,{items:r,"side-offset":12},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[0]||(t[0]=i(` Side offset `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),l(j,{items:r,align:`start`,"align-offset":24},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[1]||(t[1]=i(` Align offset `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),l(j,{items:r,"side-offset":12,"align-offset":-24},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[2]||(t[2]=i(` Both `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1})]))}}),xi=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '新建文件', icon: 'i-lucide:file-plus', handle: () => handleClick('新建文件') },
    { label: '新建文件夹', icon: 'i-lucide:folder-plus', handle: () => handleClick('新建文件夹') },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaDropdown :items="items" :side-offset="12">
      <FaButton variant="outline">
        Side offset
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" align="start" :align-offset="24">
      <FaButton variant="outline">
        Align offset
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" :side-offset="12" :align-offset="-24">
      <FaButton variant="outline">
        Both
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
  </div>
</template>
`,Si={class:`flex flex-wrap gap-2`},Ci=[{title:`基础`,component:di,componentRaw:fi},{title:`图标`,component:hi,componentRaw:gi},{title:`警告`,component:e({__name:`_warning`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`查看详情`,handle:()=>n(`查看详情`)},{label:`复制副本`,handle:()=>n(`复制副本`)}],[{label:`删除`,variant:`destructive`,handle:()=>n(`删除`)}]];return(e,t)=>(_(),m(j,{items:r},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[0]||(t[0]=i(` 项目操作 `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '查看详情', handle: () => handleClick('查看详情') },
    { label: '复制副本', handle: () => handleClick('复制副本') },
  ],
  [
    { label: '删除', variant: 'destructive', handle: () => handleClick('删除') },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <FaDropdown :items="items">
    <FaButton variant="outline">
      项目操作
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
`},{title:`禁用`,component:pi,componentRaw:mi},{title:`嵌套`,component:_i,componentRaw:vi},{title:`弹出方向`,component:e({__name:`_side`,setup(e){let t=B();function n(e){t(e)}let r=[[{label:`Preview`,icon:`i-lucide:eye`,handle:()=>n(`Preview`)},{label:`Duplicate`,icon:`i-lucide:copy`,handle:()=>n(`Duplicate`)}]];return(e,t)=>(_(),O(`div`,Si,[l(j,{items:r,side:`top`},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[0]||(t[0]=i(` Top `,-1)),l(U,{name:`i-ep:caret-top`})]),_:1})]),_:1}),l(j,{items:r,side:`right`},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[1]||(t[1]=i(` Right `,-1)),l(U,{name:`i-ep:caret-right`})]),_:1})]),_:1}),l(j,{items:r,side:`bottom`},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[2]||(t[2]=i(` Bottom `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),l(j,{items:r,side:`left`},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[t[3]||(t[3]=i(` Left `,-1)),l(U,{name:`i-ep:caret-left`})]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: 'Preview', icon: 'i-lucide:eye', handle: () => handleClick('Preview') },
    { label: 'Duplicate', icon: 'i-lucide:copy', handle: () => handleClick('Duplicate') },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaDropdown :items="items" side="top">
      <FaButton variant="outline">
        Top
        <FaIcon name="i-ep:caret-top" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" side="right">
      <FaButton variant="outline">
        Right
        <FaIcon name="i-ep:caret-right" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" side="bottom">
      <FaButton variant="outline">
        Bottom
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" side="left">
      <FaButton variant="outline">
        Left
        <FaIcon name="i-ep:caret-left" />
      </FaButton>
    </FaDropdown>
  </div>
</template>
`},{title:`对齐方式`,component:li,componentRaw:ui},{title:`偏移`,component:bi,componentRaw:xi}],wi=[{title:`基础`,component:e({__name:`_basic`,setup(e){let t=B(),n=h([]);function r(){t.success(`模拟上传成功`)}return(e,t)=>(_(),m(ve,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>e.data.url,multiple:``,onOnSuccess:r},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { FileItem } from '../index.vue'
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaFileUpload from '../index.vue'

const toast = useToast()
const files = ref<FileItem[]>([])

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="response => response.data.url"
    multiple
    @on-success="handleSuccess"
  />
</template>
`},{title:`上传前校验、限制数量、点击事件`,component:e({__name:`_validation`,setup(e){let t=B(),n=h([{name:`logo.svg`,size:1024*1024,url:`https://fantastic-admin.hurui.me/logo.svg`}]);function r(e){let n=e.type===`image/png`,r=e.size<=200*1024;return n?r?!0:(t.error(`文件大小不能超过 200KB`),!1):(t.error(`只能上传 PNG 文件`),!1)}function i(){t.success(`模拟上传成功`)}function a(e){t.info(e.name,{description:e.url})}return(e,t)=>(_(),m(ve,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>e.data.url,"before-upload":r,multiple:``,max:5,onOnSuccess:i,onOnClick:a},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { FileItem } from '../index.vue'
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaFileUpload from '../index.vue'

const toast = useToast()
const files = ref<FileItem[]>([
  { name: 'logo.svg', size: 1024 * 1024, url: 'https://fantastic-admin.hurui.me/logo.svg' },
])

function beforeUpload(file: File) {
  const isPng = file.type === 'image/png'
  const isLt200K = file.size <= 200 * 1024

  if (!isPng) {
    toast.error('只能上传 PNG 文件')
    return false
  }
  if (!isLt200K) {
    toast.error('文件大小不能超过 200KB')
    return false
  }
  return true
}

function handleSuccess() {
  toast.success('模拟上传成功')
}

function handleClick(fileItem: FileItem) {
  toast.info(fileItem.name, {
    description: fileItem.url,
  })
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="response => response.data.url"
    :before-upload="beforeUpload"
    multiple
    :max="5"
    @on-success="handleSuccess"
    @on-click="handleClick"
  />
</template>
`},{title:`插槽`,component:e({__name:`_slot`,setup(e){let t=B(),n=h([]);function r(){t.success(`模拟上传成功`)}return(e,t)=>(_(),m(ve,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>e.data.url,multiple:``,onOnSuccess:r},{default:E(()=>[l(U,{name:`i-lucide:folder-up`,class:`text-3xl text-primary mb-2`}),t[1]||(t[1]=k(`div`,{class:`text-sm font-medium`},` 上传项目附件 `,-1)),t[2]||(t[2]=k(`div`,{class:`text-xs text-muted-foreground mt-1`},` 支持拖拽、点击选择或粘贴文件 `,-1))]),_:1},8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { FileItem } from '../index.vue'
import { ref } from 'vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaFileUpload from '../index.vue'

const toast = useToast()
const files = ref<FileItem[]>([])

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="response => response.data.url"
    multiple
    @on-success="handleSuccess"
  >
    <FaIcon name="i-lucide:folder-up" class="text-3xl text-primary mb-2" />
    <div class="text-sm font-medium">
      上传项目附件
    </div>
    <div class="text-xs text-muted-foreground mt-1">
      支持拖拽、点击选择或粘贴文件
    </div>
  </FaFileUpload>
</template>
`},{title:`自定义上传请求`,component:e({__name:`_custom-request`,setup(e){let t=B(),n=h([]);async function r({file:e,onProgress:t}){return t(30),await new Promise(e=>setTimeout(e,300)),t(100),{url:URL.createObjectURL(e),name:e.name}}function i(){t.success(`自定义上传完成`)}return(e,t)=>(_(),m(ve,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),"http-request":r,"after-upload":e=>e.url,max:3,onOnSuccess:i},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { FileItem, FileUploadRequestOptions } from '../index.vue'
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaFileUpload from '../index.vue'

const toast = useToast()
const files = ref<FileItem[]>([])

async function httpRequest({ file, onProgress }: FileUploadRequestOptions) {
  onProgress(30)
  await new Promise(resolve => setTimeout(resolve, 300))
  onProgress(100)

  return {
    url: URL.createObjectURL(file),
    name: file.name,
  }
}

function handleSuccess() {
  toast.success('自定义上传完成')
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    :http-request="httpRequest"
    :after-upload="response => response.url"
    :max="3"
    @on-success="handleSuccess"
  />
</template>
`},{title:`文件夹上传`,component:e({__name:`_directory`,setup(e){let t=h([]);async function n({file:e,onProgress:t}){return t(50),await new Promise(e=>setTimeout(e,200)),t(100),{url:URL.createObjectURL(e),name:e.name}}return(e,r)=>(_(),m(ve,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),directory:``,max:0,"http-request":n,"after-upload":e=>e.url},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { FileItem, FileUploadRequestOptions } from '../index.vue'
import { ref } from 'vue'
import FaFileUpload from '../index.vue'

const files = ref<FileItem[]>([])

async function httpRequest({ file, onProgress }: FileUploadRequestOptions) {
  onProgress(50)
  await new Promise(resolve => setTimeout(resolve, 200))
  onProgress(100)

  return {
    url: URL.createObjectURL(file),
    name: file.name,
  }
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    directory
    :max="0"
    :http-request="httpRequest"
    :after-upload="response => response.url"
  />
</template>
`}],Ti=[{title:`固定在页面顶部`,component:e({__name:`_top`,setup(e){let t=h([50]);return(e,n)=>(_(),m(Qe,{position:`top`},{default:E(()=>[l(Y,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]),k(`div`,{style:v(`height: ${t.value[0]}px;`)},null,4)]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../../slider/index.vue'
import FaFixedBar from '../index.vue'

const height = ref([50])
<\/script>

<template>
  <FaFixedBar position="top">
    <FaSlider v-model="height" />
    <div :style="\`height: \${height[0]}px;\`" />
  </FaFixedBar>
</template>
`},{title:`固定在页面底部`,component:e({__name:`_bottom`,setup(e){let t=h([50]);return(e,n)=>(_(),m(Qe,{position:`bottom`},{default:E(()=>[k(`div`,{style:v(`height: ${t.value[0]}px;`)},null,4),l(Y,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`])]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../../slider/index.vue'
import FaFixedBar from '../index.vue'

const height = ref([50])
<\/script>

<template>
  <FaFixedBar position="bottom">
    <div :style="\`height: \${height[0]}px;\`" />
    <FaSlider v-model="height" />
  </FaFixedBar>
</template>
`}],Ei={class:`gap-4 grid max-w-160`},Di={key:0,class:`text-sm m-0 p-4 rounded-md bg-muted`},Oi=e({__name:`_async`,setup(e){let t=u(``),r=h({username:``,email:``}),a=[`admin`,`root`,`fantastic`],o={async username(e){return e?e.length<3?`用户名至少 3 个字符`:await s(e)?!0:`该用户名已被占用`:`请输入用户名`},email(e){return/^\S[^\s@]*@\S[^\s.]*\.\S+$/.test(e)?!0:`请输入有效邮箱`}};async function s(e){return await c(2e3),!a.includes(e.trim().toLowerCase())}function c(e){return new Promise(t=>window.setTimeout(t,e))}function d(e){t.value=JSON.stringify(e,null,2)}return(e,a)=>(_(),O(`div`,Ei,[l(q,{model:r.value,"validation-schema":o,onSubmit:d},{default:E(({isSubmitting:e})=>[l(K,{name:`username`,label:`用户名`,required:``,description:`输入 admin / root / fantastic 会返回占用错误`},{default:E(()=>[l(I,{placeholder:`请输入用户名`,class:`w-full`})]),_:1}),l(K,{name:`email`,label:`邮箱`,required:``},{default:E(()=>[l(I,{type:`email`,placeholder:`name@example.com`,class:`w-full`})]),_:1}),l(M,{type:`submit`,loading:e},{default:E(()=>[...a[0]||(a[0]=[i(` 提交 `,-1)])]),_:1},8,[`loading`])]),_:1},8,[`model`]),t.value?(_(),O(`pre`,Di,g(t.value),1)):n(``,!0)]))}}),ki=`<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaFormItem from '../FormItem.vue'
import FaForm from '../index.vue'

const submitted = shallowRef('')

const model = ref({
  username: '',
  email: '',
})

const unavailableNames = ['admin', 'root', 'fantastic']

const validationSchema = {
  async username(value: string) {
    if (!value) {
      return '请输入用户名'
    }

    if (value.length < 3) {
      return '用户名至少 3 个字符'
    }

    const available = await checkUsernameAvailable(value)
    return available ? true : '该用户名已被占用'
  },
  email(value: string) {
    return /^\\S[^\\s@]*@\\S[^\\s.]*\\.\\S+$/.test(value) ? true : '请输入有效邮箱'
  },
}

async function checkUsernameAvailable(value: string) {
  await wait(2000)
  return !unavailableNames.includes(value.trim().toLowerCase())
}

function wait(ms: number) {
  return new Promise(resolve => window.setTimeout(resolve, ms))
}

function handleSubmit(values: Record<string, unknown>) {
  submitted.value = JSON.stringify(values, null, 2)
}
<\/script>

<template>
  <div class="gap-4 grid max-w-160">
    <FaForm
      v-slot="{ isSubmitting }"
      :model="model"
      :validation-schema="validationSchema"
      @submit="handleSubmit"
    >
      <FaFormItem
        name="username"
        label="用户名"
        required
        description="输入 admin / root / fantastic 会返回占用错误"
      >
        <FaInput placeholder="请输入用户名" class="w-full" />
      </FaFormItem>
      <FaFormItem name="email" label="邮箱" required>
        <FaInput type="email" placeholder="name@example.com" class="w-full" />
      </FaFormItem>
      <FaButton type="submit" :loading="isSubmitting">
        提交
      </FaButton>
    </FaForm>
    <pre v-if="submitted" class="text-sm m-0 p-4 rounded-md bg-muted">{{ submitted }}</pre>
  </div>
</template>
`,Ai={class:`gap-4 grid max-w-160`},ji={class:`flex gap-2`},Mi={key:0,class:`text-sm m-0 p-4 rounded-md bg-muted`},Ni=e({__name:`_basic`,setup(e){let t=u(``),r=h({account:``,role:``,remark:``}),a=[{label:`管理员`,value:`admin`},{label:`运营`,value:`operator`},{label:`访客`,value:`guest`}],o={account(e){return e?!0:`请输入账号`},role(e){return e?!0:`请选择角色`},remark(e){return!e||e.length>=6?!0:`备注至少 6 个字符`}};function s(e){t.value=JSON.stringify(e,null,2)}return(e,c)=>(_(),O(`div`,Ai,[l(q,{model:r.value,"validation-schema":o,onSubmit:s},{default:E(()=>[l(K,{name:`account`,label:`账号`,required:``,description:`账号将作为登录名使用`},{default:E(()=>[l(I,{placeholder:`请输入账号`,class:`w-full`})]),_:1}),l(K,{name:`role`,label:`角色`,required:``},{default:E(()=>[l(L,{options:a,placeholder:`请选择角色`,class:`w-full`})]),_:1}),l(K,{name:`remark`,label:`备注`},{default:E(()=>[l(je,{placeholder:`请输入至少 6 个字符`,class:`w-full`})]),_:1}),k(`div`,ji,[l(M,{type:`submit`},{default:E(()=>[...c[0]||(c[0]=[i(` 提交 `,-1)])]),_:1}),l(M,{type:`reset`,variant:`outline`},{default:E(()=>[...c[1]||(c[1]=[i(` 重置 `,-1)])]),_:1})])]),_:1},8,[`model`]),t.value?(_(),O(`pre`,Mi,g(t.value),1)):n(``,!0)]))}}),Pi=`<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaTextarea from '../../textarea/index.vue'
import FaFormItem from '../FormItem.vue'
import FaForm from '../index.vue'

const submitted = shallowRef('')

const model = ref({
  account: '',
  role: '',
  remark: '',
})

const roleOptions = [
  { label: '管理员', value: 'admin' },
  { label: '运营', value: 'operator' },
  { label: '访客', value: 'guest' },
]

const validationSchema = {
  account(value: string) {
    return value ? true : '请输入账号'
  },
  role(value: string) {
    return value ? true : '请选择角色'
  },
  remark(value: string) {
    return !value || value.length >= 6 ? true : '备注至少 6 个字符'
  },
}

function handleSubmit(values: Record<string, unknown>) {
  submitted.value = JSON.stringify(values, null, 2)
}
<\/script>

<template>
  <div class="gap-4 grid max-w-160">
    <FaForm
      :model="model"
      :validation-schema="validationSchema"
      @submit="handleSubmit"
    >
      <FaFormItem name="account" label="账号" required description="账号将作为登录名使用">
        <FaInput placeholder="请输入账号" class="w-full" />
      </FaFormItem>
      <FaFormItem name="role" label="角色" required>
        <FaSelect :options="roleOptions" placeholder="请选择角色" class="w-full" />
      </FaFormItem>
      <FaFormItem name="remark" label="备注">
        <FaTextarea placeholder="请输入至少 6 个字符" class="w-full" />
      </FaFormItem>
      <div class="flex gap-2">
        <FaButton type="submit">
          提交
        </FaButton>
        <FaButton type="reset" variant="outline">
          重置
        </FaButton>
      </div>
    </FaForm>
    <pre v-if="submitted" class="text-sm m-0 p-4 rounded-md bg-muted">{{ submitted }}</pre>
  </div>
</template>
`,Fi={class:`gap-4 grid max-w-160`},Ii={class:`flex flex-wrap gap-2 max-w-full items-center`},Li=[`title`],Ri=[`onClick`],zi={key:0,class:`text-sm m-0 p-4 rounded-md bg-muted`},Bi=e({__name:`_composite`,setup(e){let t=u(``),r=u(``),a=h({auths:[]}),o={auths(e){return e.length?!0:`请至少添加一个权限标识`}};function s(){let e=r.value.trim();if(e){if(a.value.auths.includes(e)){r.value=``;return}a.value.auths=[...a.value.auths,e],r.value=``}}function c(e){a.value.auths=a.value.auths.filter(t=>t!==e)}function d(e){t.value=JSON.stringify(e,null,2)}return(e,u)=>(_(),O(`div`,Fi,[l(q,{model:a.value,"validation-schema":o,onSubmit:d},{default:E(()=>[l(K,{name:`auths`,label:`权限标识`,required:``,"auto-bind":!1},{default:E(()=>[k(`div`,Ii,[(_(!0),O(w,null,y(a.value.auths,e=>(_(),O(`div`,{key:e,class:`text-xs text-secondary-foreground px-2.5 py-2 border rounded-lg bg-secondary inline-flex gap-1.5 max-w-full items-center`},[k(`span`,{class:`truncate`,title:e},g(e),9,Li),k(`button`,{type:`button`,class:`flex-center size-4`,onClick:t=>c(e)},[l(U,{name:`i-ep:close`})],8,Ri)]))),128)),l(I,{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=e=>r.value=e),placeholder:`请输入权限标识`,class:`w-50`,onKeyup:ee(s,[`enter`])},null,8,[`modelValue`]),l(M,{type:`button`,variant:`outline`,onClick:s},{default:E(()=>[...u[1]||(u[1]=[i(` 新增 `,-1)])]),_:1})])]),_:1}),l(M,{type:`submit`},{default:E(()=>[...u[2]||(u[2]=[i(` 提交 `,-1)])]),_:1})]),_:1},8,[`model`]),t.value?(_(),O(`pre`,zi,g(t.value),1)):n(``,!0)]))}}),Vi=`<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaInput from '../../input/index.vue'
import FaFormItem from '../FormItem.vue'
import FaForm from '../index.vue'

const result = shallowRef('')
const inputAuth = shallowRef('')

const model = ref({
  auths: [] as string[],
})

const validationSchema = {
  auths(value: string[]) {
    return value.length ? true : '请至少添加一个权限标识'
  },
}

function addAuth() {
  const auth = inputAuth.value.trim()
  if (!auth) {
    return
  }

  if (model.value.auths.includes(auth)) {
    inputAuth.value = ''
    return
  }

  model.value.auths = [...model.value.auths, auth]
  inputAuth.value = ''
}

function removeAuth(auth: string) {
  model.value.auths = model.value.auths.filter(item => item !== auth)
}

function handleSubmit(values: Record<string, unknown>) {
  result.value = JSON.stringify(values, null, 2)
}
<\/script>

<template>
  <div class="gap-4 grid max-w-160">
    <FaForm
      :model="model"
      :validation-schema="validationSchema"
      @submit="handleSubmit"
    >
      <FaFormItem name="auths" label="权限标识" required :auto-bind="false">
        <div class="flex flex-wrap gap-2 max-w-full items-center">
          <div
            v-for="item in model.auths"
            :key="item"
            class="text-xs text-secondary-foreground px-2.5 py-2 border rounded-lg bg-secondary inline-flex gap-1.5 max-w-full items-center"
          >
            <span class="truncate" :title="item">{{ item }}</span>
            <button
              type="button"
              class="flex-center size-4"
              @click="removeAuth(item)"
            >
              <FaIcon name="i-ep:close" />
            </button>
          </div>
          <FaInput
            v-model="inputAuth"
            placeholder="请输入权限标识"
            class="w-50"
            @keyup.enter="addAuth"
          />
          <FaButton
            type="button"
            variant="outline"
            @click="addAuth"
          >
            新增
          </FaButton>
        </div>
      </FaFormItem>
      <FaButton type="submit">
        提交
      </FaButton>
    </FaForm>
    <pre v-if="result" class="text-sm m-0 p-4 rounded-md bg-muted">{{ result }}</pre>
  </div>
</template>
`,Hi={class:`gap-4 grid max-w-160`},Ui={class:`flex gap-2 items-center`},Wi={class:`flex gap-2`},Gi={key:0,class:`text-sm m-0 p-4 rounded-md bg-muted`},Ki=e({__name:`_disabled`,setup(e){let t=u(!0),r=u(``),a=h({name:`Fantastic-admin`,role:`admin`,remark:`禁用状态下，表单项内的控件会同步不可编辑。`}),o=[{label:`管理员`,value:`admin`},{label:`运营`,value:`operator`},{label:`访客`,value:`guest`}];function s(e){r.value=JSON.stringify(e,null,2)}return(e,c)=>(_(),O(`div`,Hi,[k(`div`,Ui,[l(Ce,{modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=e=>t.value=e)},null,8,[`modelValue`]),c[1]||(c[1]=k(`span`,{class:`text-sm`},`禁用表单`,-1))]),l(q,{disabled:t.value,model:a.value,onSubmit:s},{default:E(()=>[l(K,{name:`name`,label:`项目名称`},{default:E(()=>[l(I,{class:`w-full`})]),_:1}),l(K,{name:`role`,label:`角色`},{default:E(()=>[l(L,{options:o,class:`w-full`})]),_:1}),l(K,{name:`remark`,label:`备注`},{default:E(()=>[l(je,{class:`w-full`})]),_:1}),k(`div`,Wi,[l(M,{type:`submit`,disabled:t.value},{default:E(()=>[...c[2]||(c[2]=[i(` 提交 `,-1)])]),_:1},8,[`disabled`]),l(M,{type:`reset`,variant:`outline`,disabled:t.value},{default:E(()=>[...c[3]||(c[3]=[i(` 重置 `,-1)])]),_:1},8,[`disabled`])])]),_:1},8,[`disabled`,`model`]),r.value?(_(),O(`pre`,Gi,g(r.value),1)):n(``,!0)]))}}),qi=`<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaSwitch from '../../switch/index.vue'
import FaTextarea from '../../textarea/index.vue'
import FaFormItem from '../FormItem.vue'
import FaForm from '../index.vue'

const disabled = shallowRef(true)
const submitted = shallowRef('')

const model = ref({
  name: 'Fantastic-admin',
  role: 'admin',
  remark: '禁用状态下，表单项内的控件会同步不可编辑。',
})

const roleOptions = [
  { label: '管理员', value: 'admin' },
  { label: '运营', value: 'operator' },
  { label: '访客', value: 'guest' },
]

function handleSubmit(values: Record<string, unknown>) {
  submitted.value = JSON.stringify(values, null, 2)
}
<\/script>

<template>
  <div class="gap-4 grid max-w-160">
    <div class="flex gap-2 items-center">
      <FaSwitch v-model="disabled" />
      <span class="text-sm">禁用表单</span>
    </div>

    <FaForm
      :disabled="disabled"
      :model="model"
      @submit="handleSubmit"
    >
      <FaFormItem name="name" label="项目名称">
        <FaInput class="w-full" />
      </FaFormItem>
      <FaFormItem name="role" label="角色">
        <FaSelect :options="roleOptions" class="w-full" />
      </FaFormItem>
      <FaFormItem name="remark" label="备注">
        <FaTextarea class="w-full" />
      </FaFormItem>
      <div class="flex gap-2">
        <FaButton type="submit" :disabled="disabled">
          提交
        </FaButton>
        <FaButton type="reset" variant="outline" :disabled="disabled">
          重置
        </FaButton>
      </div>
    </FaForm>

    <pre v-if="submitted" class="text-sm m-0 p-4 rounded-md bg-muted">{{ submitted }}</pre>
  </div>
</template>
`,Ji={class:`gap-4 grid max-w-170`},Yi={class:`flex gap-3 items-center justify-between`},Xi={class:`text-sm font-medium`},Zi={class:`flex flex-wrap gap-2`},Qi={key:0,class:`text-sm m-0 p-4 rounded-md bg-muted`},$i=e({__name:`_dynamic`,setup(e){let t=oe(`formRef`),r=u(``),a=h({contacts:[o(`张三`,`13800138000`)]});function o(e=``,t=``){return{name:e,phone:t}}function s(){a.value.contacts.push(o()),t.value?.clearValidate(),r.value=``}function c(e){a.value.contacts.length<=1||(a.value.contacts.splice(e,1),t.value?.clearValidate(),r.value=``)}function d(e){return e?.trim()?!0:`请输入联系人姓名`}function f(e){return/^1[3-9]\d{9}$/.test(e??``)?!0:`请输入有效手机号`}function p(e){r.value=JSON.stringify(e,null,2)}return(e,o)=>(_(),O(`div`,Ji,[l(q,{ref_key:`formRef`,ref:t,model:a.value,onSubmit:p},{default:E(()=>[(_(!0),O(w,null,y(a.value.contacts,(e,t)=>(_(),O(`div`,{key:t,class:`p-3 border rounded-md gap-3 grid`},[k(`div`,Yi,[k(`div`,Xi,` 联系人 `+g(t+1),1),l(M,{type:`button`,variant:`outline`,size:`sm`,disabled:a.value.contacts.length<=1,onClick:e=>c(t)},{default:E(()=>[...o[0]||(o[0]=[i(` 删除 `,-1)])]),_:1},8,[`disabled`,`onClick`])]),l(K,{name:`contacts[${t}].name`,label:`姓名`,required:``,rules:d},{default:E(()=>[l(I,{placeholder:`请输入姓名`,class:`w-full`})]),_:1},8,[`name`]),l(K,{name:`contacts[${t}].phone`,label:`手机号`,required:``,rules:f},{default:E(()=>[l(I,{type:`tel`,placeholder:`请输入手机号`,class:`w-full`})]),_:1},8,[`name`])]))),128)),k(`div`,Zi,[l(M,{type:`button`,variant:`outline`,onClick:s},{default:E(()=>[...o[1]||(o[1]=[i(` 新增联系人 `,-1)])]),_:1}),l(M,{type:`submit`},{default:E(()=>[...o[2]||(o[2]=[i(` 提交 `,-1)])]),_:1})])]),_:1},8,[`model`]),r.value?(_(),O(`pre`,Qi,g(r.value),1)):n(``,!0)]))}}),ea=`<script setup lang="ts">
import type { FormExpose } from '../index'
import { ref, shallowRef, useTemplateRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaFormItem from '../FormItem.vue'
import FaForm from '../index.vue'

interface ContactValue {
  name: string
  phone: string
}

const formRef = useTemplateRef<FormExpose>('formRef')
const submitted = shallowRef('')
const model = ref<{ contacts: ContactValue[] }>({
  contacts: [
    createContact('张三', '13800138000'),
  ],
})

function createContact(name = '', phone = ''): ContactValue {
  return { name, phone }
}

function addContact() {
  model.value.contacts.push(createContact())
  formRef.value?.clearValidate()
  submitted.value = ''
}

function removeContact(index: number) {
  if (model.value.contacts.length <= 1) {
    return
  }

  model.value.contacts.splice(index, 1)
  formRef.value?.clearValidate()
  submitted.value = ''
}

function validateName(value?: string) {
  return value?.trim() ? true : '请输入联系人姓名'
}

function validatePhone(value?: string) {
  return /^1[3-9]\\d{9}$/.test(value ?? '') ? true : '请输入有效手机号'
}

function handleSubmit(values: Record<string, unknown>) {
  submitted.value = JSON.stringify(values, null, 2)
}
<\/script>

<template>
  <div class="gap-4 grid max-w-170">
    <FaForm
      ref="formRef"
      :model="model"
      @submit="handleSubmit"
    >
      <div
        v-for="(_contact, index) in model.contacts"
        :key="index"
        class="p-3 border rounded-md gap-3 grid"
      >
        <div class="flex gap-3 items-center justify-between">
          <div class="text-sm font-medium">
            联系人 {{ index + 1 }}
          </div>
          <FaButton
            type="button"
            variant="outline"
            size="sm"
            :disabled="model.contacts.length <= 1"
            @click="removeContact(index)"
          >
            删除
          </FaButton>
        </div>

        <FaFormItem
          :name="\`contacts[\${index}].name\`"
          label="姓名"
          required
          :rules="validateName"
        >
          <FaInput placeholder="请输入姓名" class="w-full" />
        </FaFormItem>

        <FaFormItem
          :name="\`contacts[\${index}].phone\`"
          label="手机号"
          required
          :rules="validatePhone"
        >
          <FaInput type="tel" placeholder="请输入手机号" class="w-full" />
        </FaFormItem>
      </div>

      <div class="flex flex-wrap gap-2">
        <FaButton type="button" variant="outline" @click="addContact">
          新增联系人
        </FaButton>
        <FaButton type="submit">
          提交
        </FaButton>
      </div>
    </FaForm>

    <pre v-if="submitted" class="text-sm m-0 p-4 rounded-md bg-muted">{{ submitted }}</pre>
  </div>
</template>
`,ta={class:`gap-4 grid max-w-170`},na={class:`gap-4 grid sm:grid-cols-[minmax(0,1fr)_200px]`},ra={class:`gap-2 grid`},ia={class:`gap-2 grid`},aa=e({__name:`_layout`,setup(e){let t=u(`left`),n=u(150),r=h({name:`Fantastic-admin`,email:`admin@example.com`,phone:`13800138000`}),i=[{label:`top`,value:`top`},{label:`left`,value:`left`},{label:`right`,value:`right`}];return(e,a)=>(_(),O(`div`,ta,[k(`div`,na,[k(`div`,ra,[a[2]||(a[2]=k(`div`,{class:`text-sm font-medium`},` label-placement `,-1)),l(Bt,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),options:i,class:`flex flex-wrap gap-4`},null,8,[`modelValue`])]),k(`div`,ia,[a[3]||(a[3]=k(`div`,{class:`text-sm font-medium`},` label-width `,-1)),l(Xe,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e),min:80,max:240,step:10,class:`w-full`},null,8,[`modelValue`])])]),l(q,{model:r.value,"label-placement":t.value,"label-width":n.value},{default:E(()=>[l(K,{name:`name`,label:`项目名称`},{default:E(()=>[l(I,{class:`w-full`})]),_:1}),l(K,{name:`email`,label:`邮箱地址`},{default:E(()=>[l(I,{type:`email`,class:`w-full`})]),_:1}),l(K,{name:`phone`,label:`联系电话`},{default:E(()=>[l(I,{type:`tel`,class:`w-full`})]),_:1})]),_:1},8,[`model`,`label-placement`,`label-width`])]))}}),oa=`<script setup lang="ts">
import type { FormLabelPlacement } from '../context'
import { ref, shallowRef } from 'vue'
import FaInput from '../../input/index.vue'
import FaNumberField from '../../number-field/index.vue'
import FaRadioGroup from '../../radio-group/index.vue'
import FaFormItem from '../FormItem.vue'
import FaForm from '../index.vue'

const labelPlacement = shallowRef<FormLabelPlacement>('left')
const labelWidth = shallowRef(150)

const model = ref({
  name: 'Fantastic-admin',
  email: 'admin@example.com',
  phone: '13800138000',
})

const labelPlacementOptions: { label: string, value: FormLabelPlacement }[] = [
  { label: 'top', value: 'top' },
  { label: 'left', value: 'left' },
  { label: 'right', value: 'right' },
]
<\/script>

<template>
  <div class="gap-4 grid max-w-170">
    <div class="gap-4 grid sm:grid-cols-[minmax(0,1fr)_200px]">
      <div class="gap-2 grid">
        <div class="text-sm font-medium">
          label-placement
        </div>
        <FaRadioGroup v-model="labelPlacement" :options="labelPlacementOptions" class="flex flex-wrap gap-4" />
      </div>

      <div class="gap-2 grid">
        <div class="text-sm font-medium">
          label-width
        </div>
        <FaNumberField v-model="labelWidth" :min="80" :max="240" :step="10" class="w-full" />
      </div>
    </div>

    <FaForm
      :model="model"
      :label-placement="labelPlacement"
      :label-width="labelWidth"
    >
      <FaFormItem name="name" label="项目名称">
        <FaInput class="w-full" />
      </FaFormItem>
      <FaFormItem name="email" label="邮箱地址">
        <FaInput type="email" class="w-full" />
      </FaFormItem>
      <FaFormItem name="phone" label="联系电话">
        <FaInput type="tel" class="w-full" />
      </FaFormItem>
    </FaForm>
  </div>
</template>
`,sa={class:`gap-4 grid max-w-160`},ca={class:`flex flex-wrap gap-2`},la={key:0,class:`text-sm text-muted-foreground`},ua=e({__name:`_methods`,setup(e){let t=oe(`formRef`),r=u(``),a=h({email:``,nickname:``}),o={email(e){return/^\S[^\s@]*@\S[^\s.]*\.\S+$/.test(e)?!0:`请输入有效邮箱`},nickname(e){return e.length>=2?!0:`昵称至少 2 个字符`}};async function s(){await t.value?.submit()}function c(){r.value=`提交成功`}async function d(){r.value=(await t.value?.validate())?.valid?`校验通过`:`校验未通过`}function f(){t.value?.setFieldValue(`email`,`admin@example.com`),t.value?.setFieldValue(`nickname`,`Fantastic`)}function p(){t.value?.resetFields(),r.value=``}return(e,u)=>(_(),O(`div`,sa,[l(q,{ref_key:`formRef`,ref:t,model:a.value,"validation-schema":o,"scroll-to-error":``,onSubmit:c},{default:E(()=>[l(K,{name:`email`,label:`邮箱`,required:``},{default:E(()=>[l(I,{type:`email`,class:`w-full`})]),_:1}),l(K,{name:`nickname`,label:`昵称`,required:``},{default:E(()=>[l(I,{class:`w-full`})]),_:1}),k(`div`,ca,[l(M,{type:`button`,onClick:s},{default:E(()=>[...u[0]||(u[0]=[i(` 提交 `,-1)])]),_:1}),l(M,{type:`button`,onClick:d},{default:E(()=>[...u[1]||(u[1]=[i(` 校验 `,-1)])]),_:1}),l(M,{type:`button`,variant:`outline`,onClick:f},{default:E(()=>[...u[2]||(u[2]=[i(` 填充 `,-1)])]),_:1}),l(M,{type:`button`,variant:`outline`,onClick:p},{default:E(()=>[...u[3]||(u[3]=[i(` 重置 `,-1)])]),_:1})])]),_:1},8,[`model`]),r.value?(_(),O(`div`,la,g(r.value),1)):n(``,!0)]))}}),da=`<script setup lang="ts">
import type { FormExpose } from '../index'
import { ref, shallowRef, useTemplateRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaFormItem from '../FormItem.vue'
import FaForm from '../index.vue'

const formRef = useTemplateRef<FormExpose>('formRef')
const message = shallowRef('')

const model = ref({
  email: '',
  nickname: '',
})

const validationSchema = {
  email(value: string) {
    return /^\\S[^\\s@]*@\\S[^\\s.]*\\.\\S+$/.test(value) ? true : '请输入有效邮箱'
  },
  nickname(value: string) {
    return value.length >= 2 ? true : '昵称至少 2 个字符'
  },
}

async function submit() {
  await formRef.value?.submit()
}

function handleSubmit() {
  message.value = '提交成功'
}

async function validate() {
  const result = await formRef.value?.validate()
  message.value = result?.valid ? '校验通过' : '校验未通过'
}

function fillDemo() {
  formRef.value?.setFieldValue('email', 'admin@example.com')
  formRef.value?.setFieldValue('nickname', 'Fantastic')
}

function resetFields() {
  formRef.value?.resetFields()
  message.value = ''
}
<\/script>

<template>
  <div class="gap-4 grid max-w-160">
    <FaForm
      ref="formRef"
      :model="model"
      :validation-schema="validationSchema"
      scroll-to-error
      @submit="handleSubmit"
    >
      <FaFormItem name="email" label="邮箱" required>
        <FaInput type="email" class="w-full" />
      </FaFormItem>
      <FaFormItem name="nickname" label="昵称" required>
        <FaInput class="w-full" />
      </FaFormItem>
      <div class="flex flex-wrap gap-2">
        <FaButton type="button" @click="submit">
          提交
        </FaButton>
        <FaButton type="button" @click="validate">
          校验
        </FaButton>
        <FaButton type="button" variant="outline" @click="fillDemo">
          填充
        </FaButton>
        <FaButton type="button" variant="outline" @click="resetFields">
          重置
        </FaButton>
      </div>
    </FaForm>
    <div v-if="message" class="text-sm text-muted-foreground">
      {{ message }}
    </div>
  </div>
</template>
`,fa={class:`gap-4 grid max-w-160`},pa={class:`flex gap-2 items-center`},ma={key:0,class:`text-sm m-0 p-4 rounded-md bg-muted`},ha=[{title:`基础`,component:Ni,componentRaw:Pi},{title:`禁用`,component:Ki,componentRaw:qi},{title:`异步验证`,component:Oi,componentRaw:ki},{title:`动态表单`,component:$i,componentRaw:ea},{title:`复合输入`,component:Bi,componentRaw:Vi},{title:`布局`,component:aa,componentRaw:oa},{title:`插槽`,component:e({__name:`_slot`,setup(e){let t=u(``),r=h({email:``,agreement:!1}),a={email(e){return/^\S[^\s@]*@\S[^\s.]*\.\S+$/.test(e)?!0:`请输入有效邮箱`},agreement(e){return e?!0:`请先同意服务协议`}};function o(e){t.value=JSON.stringify(e,null,2)}return(e,s)=>(_(),O(`div`,fa,[l(q,{model:r.value,"validation-schema":a,onSubmit:o},{default:E(()=>[l(K,{name:`email`,required:``},{label:E(()=>[...s[0]||(s[0]=[k(`span`,null,`邮箱`,-1),k(`span`,{class:`text-destructive`},`*`,-1)])]),description:E(()=>[...s[1]||(s[1]=[i(` 用于接收账号通知和安全提醒 `,-1)])]),default:E(()=>[l(I,{type:`email`,placeholder:`name@example.com`,class:`w-full`})]),_:1}),l(K,{name:`agreement`},{default:E(({componentField:e})=>[k(`div`,pa,[l(d(ce),{"model-value":e.modelValue,"onUpdate:modelValue":t=>e[`onUpdate:modelValue`]?.(t)},null,8,[`model-value`,`onUpdate:modelValue`]),s[2]||(s[2]=k(`span`,{class:`text-sm`},`我已阅读并同意服务协议`,-1))])]),_:1}),l(M,{type:`submit`},{default:E(()=>[...s[3]||(s[3]=[i(` 提交 `,-1)])]),_:1})]),_:1},8,[`model`]),t.value?(_(),O(`pre`,ma,g(t.value),1)):n(``,!0)]))}}),componentRaw:`<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import { Checkbox as FaCheckbox } from '../../checkbox/checkbox'
import FaInput from '../../input/index.vue'
import FaFormItem from '../FormItem.vue'
import FaForm from '../index.vue'

const result = shallowRef('')

const model = ref({
  email: '',
  agreement: false,
})

const validationSchema = {
  email(value: string) {
    return /^\\S[^\\s@]*@\\S[^\\s.]*\\.\\S+$/.test(value) ? true : '请输入有效邮箱'
  },
  agreement(value: boolean) {
    return value ? true : '请先同意服务协议'
  },
}

function handleSubmit(values: Record<string, unknown>) {
  result.value = JSON.stringify(values, null, 2)
}
<\/script>

<template>
  <div class="gap-4 grid max-w-160">
    <FaForm
      :model="model"
      :validation-schema="validationSchema"
      @submit="handleSubmit"
    >
      <FaFormItem name="email" required>
        <template #label>
          <span>邮箱</span>
          <span class="text-destructive">*</span>
        </template>
        <FaInput type="email" placeholder="name@example.com" class="w-full" />
        <template #description>
          用于接收账号通知和安全提醒
        </template>
      </FaFormItem>

      <FaFormItem name="agreement">
        <template #default="{ componentField }">
          <div class="flex gap-2 items-center">
            <FaCheckbox
              :model-value="componentField.modelValue as boolean"
              @update:model-value="componentField['onUpdate:modelValue']?.($event as boolean)"
            />
            <span class="text-sm">我已阅读并同意服务协议</span>
          </div>
        </template>
      </FaFormItem>

      <FaButton type="submit">
        提交
      </FaButton>
    </FaForm>
    <pre v-if="result" class="text-sm m-0 p-4 rounded-md bg-muted">{{ result }}</pre>
  </div>
</template>
`},{title:`方法`,component:ua,componentRaw:da}],ga={class:`flex flex-wrap gap-2`},_a=e({__name:`_align`,setup(e){return(e,t)=>(_(),O(`div`,ga,[l($,{align:`start`},{card:E(()=>[...t[1]||(t[1]=[k(`div`,{class:`text-sm`},` 起始位置对齐 `,-1)])]),default:E(()=>[l(M,{variant:`link`},{default:E(()=>[...t[0]||(t[0]=[i(` Start `,-1)])]),_:1})]),_:1}),l($,{align:`center`},{card:E(()=>[...t[3]||(t[3]=[k(`div`,{class:`text-sm`},` 居中对齐 `,-1)])]),default:E(()=>[l(M,{variant:`link`},{default:E(()=>[...t[2]||(t[2]=[i(` Center `,-1)])]),_:1})]),_:1}),l($,{align:`end`},{card:E(()=>[...t[5]||(t[5]=[k(`div`,{class:`text-sm`},` 结束位置对齐 `,-1)])]),default:E(()=>[l(M,{variant:`link`},{default:E(()=>[...t[4]||(t[4]=[i(` End `,-1)])]),_:1})]),_:1})]))}}),va=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaHoverCard from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaHoverCard align="start">
      <FaButton variant="link">
        Start
      </FaButton>
      <template #card>
        <div class="text-sm">
          起始位置对齐
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard align="center">
      <FaButton variant="link">
        Center
      </FaButton>
      <template #card>
        <div class="text-sm">
          居中对齐
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard align="end">
      <FaButton variant="link">
        End
      </FaButton>
      <template #card>
        <div class="text-sm">
          结束位置对齐
        </div>
      </template>
    </FaHoverCard>
  </div>
</template>
`,ya={class:`flex space-x-4`},ba={class:`space-y-1`},xa={class:`pt-2 flex items-center`},Sa=e({__name:`_basic`,setup(e){return(e,t)=>(_(),m($,{class:`min-w-auto`},{card:E(()=>[k(`div`,ya,[l(Ke,{shape:`circle`,src:`https://github.com/vuejs.png`,class:`bg-muted`}),k(`div`,ba,[t[2]||(t[2]=k(`h4`,{class:`text-sm font-semibold`},` @hooray `,-1)),t[3]||(t[3]=k(`p`,{class:`text-sm`},` 一个前端开发工程师 `,-1)),k(`div`,xa,[l(U,{name:`i-ci:calendar-days`,class:`mr-2 opacity-70 h-4 w-4`}),t[1]||(t[1]=k(`span`,{class:`text-xs text-muted-foreground`},` 2020 年注册 `,-1))])])])]),default:E(()=>[l(M,{variant:`link`},{default:E(()=>[...t[0]||(t[0]=[i(` @hooray `,-1)])]),_:1})]),_:1}))}}),Ca=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaAvatar from '../../avatar/index.vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaHoverCard from '../index.vue'
<\/script>

<template>
  <FaHoverCard class="min-w-auto">
    <FaButton variant="link">
      @hooray
    </FaButton>
    <template #card>
      <div class="flex space-x-4">
        <FaAvatar shape="circle" src="https://github.com/vuejs.png" class="bg-muted" />
        <div class="space-y-1">
          <h4 class="text-sm font-semibold">
            @hooray
          </h4>
          <p class="text-sm">
            一个前端开发工程师
          </p>
          <div class="pt-2 flex items-center">
            <FaIcon name="i-ci:calendar-days" class="mr-2 opacity-70 h-4 w-4" />
            <span class="text-xs text-muted-foreground">
              2020 年注册
            </span>
          </div>
        </div>
      </div>
    </template>
  </FaHoverCard>
</template>
`,wa={class:`flex flex-wrap gap-2`},Ta=e({__name:`_offset`,setup(e){return(e,t)=>(_(),O(`div`,wa,[l($,{"side-offset":12},{card:E(()=>[...t[1]||(t[1]=[k(`div`,{class:`text-sm`},` 与触发元素保持更大距离 `,-1)])]),default:E(()=>[l(M,{variant:`link`},{default:E(()=>[...t[0]||(t[0]=[i(` Side offset `,-1)])]),_:1})]),_:1}),l($,{align:`start`,"align-offset":24},{card:E(()=>[...t[3]||(t[3]=[k(`div`,{class:`text-sm`},` 沿对齐方向偏移 `,-1)])]),default:E(()=>[l(M,{variant:`link`},{default:E(()=>[...t[2]||(t[2]=[i(` Align offset `,-1)])]),_:1})]),_:1}),l($,{"side-offset":12,"align-offset":-24},{card:E(()=>[...t[5]||(t[5]=[k(`div`,{class:`text-sm`},` 同时设置两种偏移 `,-1)])]),default:E(()=>[l(M,{variant:`link`},{default:E(()=>[...t[4]||(t[4]=[i(` Both `,-1)])]),_:1})]),_:1})]))}}),Ea=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaHoverCard from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaHoverCard :side-offset="12">
      <FaButton variant="link">
        Side offset
      </FaButton>
      <template #card>
        <div class="text-sm">
          与触发元素保持更大距离
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard align="start" :align-offset="24">
      <FaButton variant="link">
        Align offset
      </FaButton>
      <template #card>
        <div class="text-sm">
          沿对齐方向偏移
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard :side-offset="12" :align-offset="-24">
      <FaButton variant="link">
        Both
      </FaButton>
      <template #card>
        <div class="text-sm">
          同时设置两种偏移
        </div>
      </template>
    </FaHoverCard>
  </div>
</template>
`,Da={class:`flex flex-wrap gap-2`},Oa=[{title:`基础`,component:Sa,componentRaw:Ca},{title:`弹出方向`,component:e({__name:`_side`,setup(e){return(e,t)=>(_(),O(`div`,Da,[l($,{side:`top`},{card:E(()=>[...t[1]||(t[1]=[k(`div`,{class:`text-sm`},` 从上方弹出 `,-1)])]),default:E(()=>[l(M,{variant:`link`},{default:E(()=>[...t[0]||(t[0]=[i(` Top `,-1)])]),_:1})]),_:1}),l($,{side:`right`},{card:E(()=>[...t[3]||(t[3]=[k(`div`,{class:`text-sm`},` 从右侧弹出 `,-1)])]),default:E(()=>[l(M,{variant:`link`},{default:E(()=>[...t[2]||(t[2]=[i(` Right `,-1)])]),_:1})]),_:1}),l($,{side:`bottom`},{card:E(()=>[...t[5]||(t[5]=[k(`div`,{class:`text-sm`},` 从下方弹出 `,-1)])]),default:E(()=>[l(M,{variant:`link`},{default:E(()=>[...t[4]||(t[4]=[i(` Bottom `,-1)])]),_:1})]),_:1}),l($,{side:`left`},{card:E(()=>[...t[7]||(t[7]=[k(`div`,{class:`text-sm`},` 从左侧弹出 `,-1)])]),default:E(()=>[l(M,{variant:`link`},{default:E(()=>[...t[6]||(t[6]=[i(` Left `,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaHoverCard from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaHoverCard side="top">
      <FaButton variant="link">
        Top
      </FaButton>
      <template #card>
        <div class="text-sm">
          从上方弹出
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard side="right">
      <FaButton variant="link">
        Right
      </FaButton>
      <template #card>
        <div class="text-sm">
          从右侧弹出
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard side="bottom">
      <FaButton variant="link">
        Bottom
      </FaButton>
      <template #card>
        <div class="text-sm">
          从下方弹出
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard side="left">
      <FaButton variant="link">
        Left
      </FaButton>
      <template #card>
        <div class="text-sm">
          从左侧弹出
        </div>
      </template>
    </FaHoverCard>
  </div>
</template>
`},{title:`对齐方式`,component:_a,componentRaw:va},{title:`偏移`,component:Ta,componentRaw:Ea}],ka={class:`flex flex-wrap gap-4`},Aa={class:`text-xs text-muted-foreground text-center w-full truncate`},ja=e({__name:`_iconify`,setup(e){let t=[`lucide:bell`,`lucide:calendar-days`,`ri:github-fill`,`logos:vue`,`logos:vitejs`];return(e,n)=>(_(),O(`div`,ka,[(_(),O(w,null,y(t,e=>k(`div`,{key:e,class:`p-3 flex flex-col gap-2 w-28 items-center`},[l(U,{name:e,class:`size-9`},null,8,[`name`]),k(`span`,Aa,g(e),1)])),64))]))}}),Ma=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../index.vue'

const icons = [
  'lucide:bell',
  'lucide:calendar-days',
  'ri:github-fill',
  'logos:vue',
  'logos:vitejs',
]
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="name in icons" :key="name" class="p-3 flex flex-col gap-2 w-28 items-center">
      <FaIcon :name="name" class="size-9" />
      <span class="text-xs text-muted-foreground text-center w-full truncate">{{ name }}</span>
    </div>
  </div>
</template>
`,Na={class:`flex flex-wrap gap-6 items-end`},Pa={class:`p-4 border rounded-lg flex flex-col gap-3 items-center`},Fa={class:`flex gap-2`},Ia={class:`p-4 border rounded-lg flex flex-col gap-3 items-center`},La=e({__name:`_image`,setup(e){let t=u(`https://picsum.photos/80`);function n(){t.value=`https://picsum.photos/80?random=${Math.random()}`}function r(){t.value=`https://xxx/`}let a=new URL(`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='-25%20-46%20256%20256'%20xml:space='preserve'%3e%3cpath%20d='M0,82.57C0,58.4,0,34.23,0,10.06C0,1.35,1.35,0,10.03,0C45.36,0,80.7-0.01,116.03,0.03c1.77,0,3.59,0.26,5.29,0.74%20c3.07,0.87,3.57,3.21,2.45,5.8c-4.37,10.1-8.83,20.15-13.31,30.2c-1.44,3.23-4.06,4.26-7.54,4.25c-18.5-0.09-37,0.1-55.5-0.14%20c-4.95-0.06-6.49,2.12-6.46,6.47c0.02,3,0.11,6.01-0.02,9c-0.3,6.8,0.34,9.29,9.51,9.62c5.36,0.19,10.73,0.04,16.09,0.04%20c7.57,0,15.15-0.04,22.72,0.01c5.13,0.03,6.6,2.12,4.59,6.89C90.43,81.09,86.27,89,83.4,97.35c-2.59,7.55-8.57,7.27-14.28,7.56%20c-7.48,0.38-15,0.17-22.5,0.06c-3.69-0.05-4.96,1.04-4.86,5.18c0.36,15.83,0.26,31.67,0.12,47.5c-0.04,4.2-2.26,6.53-6.94,6.42%20c-9-0.21-18-0.06-27-0.06c-6.05,0-7.91-1.8-7.92-7.94C-0.02,131.57,0,107.07,0,82.57z'%20fill='%2335495e'%20/%3e%3cpath%20d='M132.98,94.13c-8.21,18.88-16.33,37.1-24.06,55.48c-6.02,14.31-5.81,14.4-21.31,14.4c-6.67,0-13.33,0.05-20-0.01%20c-5.91-0.05-7.71-2.44-5.46-7.61c6.86-15.8,13.86-31.55,20.82-47.31c9.41-21.32,18.81-42.63,28.24-63.94%20c5.59-12.62,11.14-25.25,16.94-37.77c0.82-1.78,2.95-4.09,4.47-4.09c1.63,0,4,2.11,4.78,3.86c13.4,29.78,26.56,59.66,39.87,89.49%20c6.48,14.53,13.16,28.97,19.72,43.46c2.57,5.68,5.11,11.38,7.61,17.1c1.61,3.68-0.13,6.75-4.12,6.77%20c-23.83,0.08-47.66,0.09-71.49-0.01c-4.03-0.02-5.46-2.47-3.98-6.17c2.26-5.63,4.77-11.16,6.95-16.82c1.74-4.54,4.92-6.06,9.6-5.98%20c9.65,0.16,9.89-0.55,5.89-9.13c-4.57-9.81-8.76-19.8-13.14-29.7C134.08,95.62,133.68,95.17,132.98,94.13z'%20fill='%2342b883'%20/%3e%3c/svg%3e`,``+import.meta.url).href;return(e,o)=>(_(),O(`div`,Na,[k(`div`,Pa,[o[2]||(o[2]=k(`span`,{class:`text-xs text-muted-foreground font-medium`},`网络图片`,-1)),l(U,{name:t.value,class:`size-14`},null,8,[`name`]),k(`div`,Fa,[l(M,{size:`sm`,onClick:n},{default:E(()=>[...o[0]||(o[0]=[i(` 更换图片 `,-1)])]),_:1}),l(M,{size:`sm`,variant:`outline`,onClick:r},{default:E(()=>[...o[1]||(o[1]=[i(` 触发错误 `,-1)])]),_:1})])]),k(`div`,Ia,[o[3]||(o[3]=k(`span`,{class:`text-xs text-muted-foreground font-medium`},`相对路径`,-1)),l(U,{name:d(a),class:`size-14`},null,8,[`name`])])]))}}),Ra=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../index.vue'

const imageUrl = shallowRef('https://picsum.photos/80')

function changeImage() {
  imageUrl.value = \`https://picsum.photos/80?random=\${Math.random()}\`
}

function showError() {
  imageUrl.value = 'https://xxx/'
}

const logo = new URL('./logo.svg', import.meta.url).href
<\/script>

<template>
  <div class="flex flex-wrap gap-6 items-end">
    <div class="p-4 border rounded-lg flex flex-col gap-3 items-center">
      <span class="text-xs text-muted-foreground font-medium">网络图片</span>
      <FaIcon :name="imageUrl" class="size-14" />
      <div class="flex gap-2">
        <FaButton size="sm" @click="changeImage">
          更换图片
        </FaButton>
        <FaButton size="sm" variant="outline" @click="showError">
          触发错误
        </FaButton>
      </div>
    </div>
    <div class="p-4 border rounded-lg flex flex-col gap-3 items-center">
      <span class="text-xs text-muted-foreground font-medium">相对路径</span>
      <FaIcon :name="logo" class="size-14" />
    </div>
  </div>
</template>
`,za={class:`space-y-4`},Ba={class:`flex flex-wrap gap-4`},Va={class:`text-xs text-muted-foreground text-center w-full truncate`},Ha={class:`flex flex-wrap gap-4`},Ua={class:`text-xs text-muted-foreground text-center w-full truncate`},Wa=e({__name:`_svg`,setup(e){let t=[`example-emotion-line`,`example-emotion-laugh-line`,`example-emotion-unhappy-line`],n=[`example-crown`,`example-star`,`example-vip`];return(e,r)=>(_(),O(`div`,za,[k(`div`,null,[r[0]||(r[0]=k(`div`,{class:`text-sm text-muted-foreground font-medium mb-3`},` 单色 `,-1)),k(`div`,Ba,[(_(),O(w,null,y(t,e=>k(`div`,{key:e,class:`p-3 flex flex-col gap-1.5 w-24 items-center`},[l(U,{name:e,class:`size-10`},null,8,[`name`]),k(`span`,Va,g(e.replace(`example-`,``)),1)])),64))])]),k(`div`,null,[r[1]||(r[1]=k(`div`,{class:`text-sm text-muted-foreground font-medium mb-3`},` 彩色 `,-1)),k(`div`,Ha,[(_(),O(w,null,y(n,e=>k(`div`,{key:e,class:`p-3 flex flex-col gap-1.5 w-24 items-center`},[l(U,{name:e,class:`size-10`},null,8,[`name`]),k(`span`,Ua,g(e.replace(`example-`,``)),1)])),64))])])]))}}),Ga=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../index.vue'

const monoIcons = [
  'example-emotion-line',
  'example-emotion-laugh-line',
  'example-emotion-unhappy-line',
]

const colorIcons = [
  'example-crown',
  'example-star',
  'example-vip',
]
<\/script>

<template>
  <div class="space-y-4">
    <div>
      <div class="text-sm text-muted-foreground font-medium mb-3">
        单色
      </div>
      <div class="flex flex-wrap gap-4">
        <div v-for="name in monoIcons" :key="name" class="p-3 flex flex-col gap-1.5 w-24 items-center">
          <FaIcon :name="name" class="size-10" />
          <span class="text-xs text-muted-foreground text-center w-full truncate">{{ name.replace('example-', '') }}</span>
        </div>
      </div>
    </div>
    <div>
      <div class="text-sm text-muted-foreground font-medium mb-3">
        彩色
      </div>
      <div class="flex flex-wrap gap-4">
        <div v-for="name in colorIcons" :key="name" class="p-3 flex flex-col gap-1.5 w-24 items-center">
          <FaIcon :name="name" class="size-10" />
          <span class="text-xs text-muted-foreground text-center w-full truncate">{{ name.replace('example-', '') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
`,Ka={class:`flex flex-wrap gap-6 items-end`},qa={class:`px-6 py-4 border rounded-lg flex flex-col gap-3 items-center`},Ja={class:`px-6 py-4 border rounded-lg flex flex-col gap-3 items-center`},Ya=e({__name:`_transition`,setup(e){let t=u(!1);return(e,n)=>(_(),O(`div`,Ka,[k(`div`,qa,[n[1]||(n[1]=k(`span`,{class:`text-xs text-muted-foreground font-medium`},`无动画`,-1)),l(U,{name:t.value?`i-lucide:heart`:`i-lucide:star`,class:`size-8`},null,8,[`name`])]),k(`div`,Ja,[n[2]||(n[2]=k(`span`,{class:`text-xs text-muted-foreground font-medium`},`过渡动画`,-1)),l(U,{name:t.value?`i-lucide:heart`:`i-lucide:star`,class:`text-primary size-8`,transition:``},null,8,[`name`])]),l(M,{onClick:n[0]||(n[0]=e=>t.value=!t.value)},{default:E(()=>[...n[3]||(n[3]=[i(` 切换图标 `,-1)])]),_:1})]))}}),Xa=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../index.vue'

const active = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-6 items-end">
    <div class="px-6 py-4 border rounded-lg flex flex-col gap-3 items-center">
      <span class="text-xs text-muted-foreground font-medium">无动画</span>
      <FaIcon :name="active ? 'i-lucide:heart' : 'i-lucide:star'" class="size-8" />
    </div>
    <div class="px-6 py-4 border rounded-lg flex flex-col gap-3 items-center">
      <span class="text-xs text-muted-foreground font-medium">过渡动画</span>
      <FaIcon :name="active ? 'i-lucide:heart' : 'i-lucide:star'" class="text-primary size-8" transition />
    </div>
    <FaButton @click="active = !active">
      切换图标
    </FaButton>
  </div>
</template>
`,Za={class:`flex flex-wrap gap-4`},Qa={class:`text-xs text-muted-foreground text-center w-full truncate`},$a=[{title:`SVG文件`,component:Wa,componentRaw:Ga},{title:`Iconify`,component:ja,componentRaw:Ma},{title:`UnoCSS`,component:e({__name:`_unocss`,setup(e){let t=[`i-lucide:search`,`i-lucide:settings`,`i-ep:edit`,`i-ri:notification-3-line`,`i-tabler:chart-area-line`];return(e,n)=>(_(),O(`div`,Za,[(_(),O(w,null,y(t,e=>k(`div`,{key:e,class:`p-3 flex flex-col gap-2 w-32 items-center`},[l(U,{name:e,class:`text-primary size-9`},null,8,[`name`]),k(`span`,Qa,g(e),1)])),64))]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../index.vue'

const icons = [
  'i-lucide:search',
  'i-lucide:settings',
  'i-ep:edit',
  'i-ri:notification-3-line',
  'i-tabler:chart-area-line',
]
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="name in icons" :key="name" class="p-3 flex flex-col gap-2 w-32 items-center">
      <FaIcon :name="name" class="text-primary size-9" />
      <span class="text-xs text-muted-foreground text-center w-full truncate">{{ name }}</span>
    </div>
  </div>
</template>
`},{title:`Image`,component:La,componentRaw:Ra},{title:`过渡动画`,component:Ya,componentRaw:Xa}],eo=e({__name:`_basic`,setup(e){return(e,t)=>(_(),m(Ue,{src:`https://fantastic-admin.hurui.me/logo.svg`}))}}),to=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaImagePreview from '../index.vue'
<\/script>

<template>
  <FaImagePreview src="https://fantastic-admin.hurui.me/logo.svg" />
</template>
`,no={class:`flex flex-wrap gap-4`},ro={class:`text-sm text-secondary-foreground/50 flex-col-center gap-1`},io=e({__name:`_error`,setup(e){return(e,t)=>(_(),O(`div`,no,[l(Ue,{src:`https://fantastic-admin.hurui.me/not-found.png`}),l(Ue,{src:`https://fantastic-admin.hurui.me/not-found.png`},{error:E(()=>[k(`div`,ro,[l(U,{name:`i-ph:image-broken-duotone`,class:`size-8`}),t[0]||(t[0]=k(`div`,null,` 图片加载失败 `,-1))])]),_:1})]))}}),ao=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import FaImagePreview from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaImagePreview src="https://fantastic-admin.hurui.me/not-found.png" />
    <FaImagePreview src="https://fantastic-admin.hurui.me/not-found.png">
      <template #error>
        <div class="text-sm text-secondary-foreground/50 flex-col-center gap-1">
          <FaIcon name="i-ph:image-broken-duotone" class="size-8" />
          <div>
            图片加载失败
          </div>
        </div>
      </template>
    </FaImagePreview>
  </div>
</template>
`,oo={class:`flex flex-wrap gap-2`},so=e({__name:`_functional`,setup(e){let{open:t}=ue();function n(){t(`https://fantastic-admin.hurui.me/logo.svg`)}function r(){t([`https://fantastic-admin.hurui.me/logo.svg`,`https://fantastic-mobile.hurui.me/logo.png`])}function a(){t([`https://fantastic-admin.hurui.me/logo.svg`,`https://fantastic-mobile.hurui.me/logo.png`],1)}return(e,t)=>(_(),O(`div`,oo,[l(M,{onClick:n},{default:E(()=>[...t[0]||(t[0]=[i(` 预览单张 `,-1)])]),_:1}),l(M,{onClick:r},{default:E(()=>[...t[1]||(t[1]=[i(` 预览多张 `,-1)])]),_:1}),l(M,{onClick:a},{default:E(()=>[...t[2]||(t[2]=[i(` 预览多张（初始预览第2张） `,-1)])]),_:1})]))}}),co=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useImagePreview } from '../index'

const { open } = useImagePreview()

function openSingle() {
  open('https://fantastic-admin.hurui.me/logo.svg')
}

function openMulti() {
  open([
    'https://fantastic-admin.hurui.me/logo.svg',
    'https://fantastic-mobile.hurui.me/logo.png',
  ])
}

function openMultiWithIndex() {
  open([
    'https://fantastic-admin.hurui.me/logo.svg',
    'https://fantastic-mobile.hurui.me/logo.png',
  ], 1)
}
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="openSingle">
      预览单张
    </FaButton>
    <FaButton @click="openMulti">
      预览多张
    </FaButton>
    <FaButton @click="openMultiWithIndex">
      预览多张（初始预览第2张）
    </FaButton>
  </div>
</template>
`,lo={class:`flex flex-wrap gap-4 items-end`},uo=[{title:`基础`,component:eo,componentRaw:to},{title:`尺寸`,component:e({__name:`_size`,setup(e){return(e,t)=>(_(),O(`div`,lo,[l(Ue,{src:`https://fantastic-admin.hurui.me/logo.svg`,class:`size-25`}),l(Ue,{src:`https://fantastic-admin.hurui.me/logo.svg`,class:`size-40`}),l(Ue,{src:`https://fantastic-admin.hurui.me/logo.svg`,class:`h-40 w-60`})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaImagePreview from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4 items-end">
    <FaImagePreview src="https://fantastic-admin.hurui.me/logo.svg" class="size-25" />
    <FaImagePreview src="https://fantastic-admin.hurui.me/logo.svg" class="size-40" />
    <FaImagePreview src="https://fantastic-admin.hurui.me/logo.svg" class="h-40 w-60" />
  </div>
</template>
`},{title:`错误`,component:io,componentRaw:ao},{title:`函数式调用`,component:so,componentRaw:co}],fo=[{title:`基础`,component:e({__name:`_basic`,setup(e){let t=B(),n=h([]);function r(){t.success(`模拟上传成功`)}return(e,t)=>(_(),m(We,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>e.data.url,onOnSuccess:r},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaImageUpload from '../index.vue'

const toast = useToast()
const files = ref<string[]>([])

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="response => response.data.url"
    @on-success="handleSuccess"
  />
</template>
`},{title:`多图上传`,component:e({__name:`_multiple`,setup(e){let t=B(),n=h([`https://fantastic-admin.hurui.me/logo.svg`]);function r(){t.success(`模拟上传成功`)}return(e,t)=>(_(),m(We,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>`${e.data.url}?fake=${Math.random()}`,max:2,onOnSuccess:r},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaImageUpload from '../index.vue'

const toast = useToast()
const files = ref<string[]>(['https://fantastic-admin.hurui.me/logo.svg'])

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="response => \`\${response.data.url}?fake=\${Math.random()}\`"
    :max="2"
    @on-success="handleSuccess"
  />
</template>
`},{title:`上传前校验`,component:e({__name:`_validation`,setup(e){let t=B(),n=h([]);function r(e){return e.type.startsWith(`image/`)?e.size>200*1024?(t.error(`图片大小不能超过 200KB`),!1):!0:(t.error(`请选择图片文件`),!1)}function i(){t.success(`模拟上传成功`)}return(e,t)=>(_(),m(We,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>`${e.data.url}?fake=${Math.random()}`,"before-upload":r,width:200,height:130,max:0,onOnSuccess:i},{default:E(()=>[l(U,{name:`i-noto:identification-card`,class:`opacity-50 size-50`})]),_:1},8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaImageUpload from '../index.vue'

const toast = useToast()
const files = ref<string[]>([])

function beforeUpload(file: File) {
  if (!file.type.startsWith('image/')) {
    toast.error('请选择图片文件')
    return false
  }
  if (file.size > 200 * 1024) {
    toast.error('图片大小不能超过 200KB')
    return false
  }
  return true
}

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="response => \`\${response.data.url}?fake=\${Math.random()}\`"
    :before-upload="beforeUpload"
    :width="200"
    :height="130"
    :max="0"
    @on-success="handleSuccess"
  >
    <FaIcon name="i-noto:identification-card" class="opacity-50 size-50" />
  </FaImageUpload>
</template>
`},{title:`自定义上传请求`,component:e({__name:`_custom-request`,setup(e){let t=B(),n=h([]);async function r({file:e,onProgress:t}){return t(30),await new Promise(e=>setTimeout(e,300)),t(100),{url:URL.createObjectURL(e),name:e.name}}function i(){t.success(`自定义上传完成`)}return(e,t)=>(_(),m(We,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),"http-request":r,"after-upload":e=>e.url,max:3,onOnSuccess:i},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { UploadRequestOptions } from '../index.vue'
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaImageUpload from '../index.vue'

const toast = useToast()
const files = ref<string[]>([])

async function httpRequest({ file, onProgress }: UploadRequestOptions) {
  onProgress(30)
  await new Promise(resolve => setTimeout(resolve, 300))
  onProgress(100)

  return {
    url: URL.createObjectURL(file),
    name: file.name,
  }
}

function handleSuccess() {
  toast.success('自定义上传完成')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    :http-request="httpRequest"
    :after-upload="response => response.url"
    :max="3"
    @on-success="handleSuccess"
  />
</template>
`},{title:`文件夹上传`,component:e({__name:`_directory`,setup(e){let t=h([]);function n(e){return e.type.startsWith(`image/`)}async function r({file:e,onProgress:t}){return t(50),await new Promise(e=>setTimeout(e,200)),t(100),{url:URL.createObjectURL(e),name:e.name}}return(e,i)=>(_(),m(We,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),directory:``,max:0,"http-request":r,"before-upload":n,"after-upload":e=>e.url},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { UploadRequestOptions } from '../index.vue'
import { ref } from 'vue'
import FaImageUpload from '../index.vue'

const files = ref<string[]>([])

function beforeUpload(file: File) {
  return file.type.startsWith('image/')
}

async function httpRequest({ file, onProgress }: UploadRequestOptions) {
  onProgress(50)
  await new Promise(resolve => setTimeout(resolve, 200))
  onProgress(100)

  return {
    url: URL.createObjectURL(file),
    name: file.name,
  }
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    directory
    :max="0"
    :http-request="httpRequest"
    :before-upload="beforeUpload"
    :after-upload="response => response.url"
  />
</template>
`}],po=e({__name:`_basic`,setup(e){let t=h(``);return(e,n)=>(_(),m(X,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]))}}),mo=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const input = ref('')
<\/script>

<template>
  <FaInputOTP v-model="input" />
</template>
`,ho={class:`space-y-3`},go={class:`text-sm text-muted-foreground space-y-1`},_o=e({__name:`_callback`,setup(e){let t=h(``),n=h(`等待输入`),r=h(`等待完成`),i=B();function a(e){n.value=`input: ${e||`空值`}`}function o(e){r.value=`complete: ${e}`,i(e)}return(e,i)=>(_(),O(`div`,ho,[l(X,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),onInput:a,onComplete:o},null,8,[`modelValue`]),k(`div`,go,[k(`div`,null,g(n.value),1),k(`div`,null,g(r.value),1)])]))}}),vo=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaInputOTP from '../index.vue'

const input = ref('')
const inputText = ref('等待输入')
const completeText = ref('等待完成')
const toast = useToast()

function handleInput(value: string) {
  inputText.value = \`input: \${value || '空值'}\`
}

function handleComplete(value: string) {
  completeText.value = \`complete: \${value}\`
  toast(value)
}
<\/script>

<template>
  <div class="space-y-3">
    <FaInputOTP v-model="input" @input="handleInput" @complete="handleComplete" />
    <div class="text-sm text-muted-foreground space-y-1">
      <div>{{ inputText }}</div>
      <div>{{ completeText }}</div>
    </div>
  </div>
</template>
`,yo=e({__name:`_disabled`,setup(e){let t=h(`123456`);return(e,n)=>(_(),m(X,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:``},null,8,[`modelValue`]))}}),bo=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const input = ref('123456')
<\/script>

<template>
  <FaInputOTP v-model="input" disabled />
</template>
`,xo=e({__name:`_length`,setup(e){let t=h(``);return(e,n)=>(_(),m(X,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),length:4},null,8,[`modelValue`]))}}),So=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const input = ref('')
<\/script>

<template>
  <FaInputOTP v-model="input" :length="4" />
</template>
`,Co={class:`space-y-4`},wo={class:`space-y-2`},To={class:`space-y-2`},Eo={class:`space-y-2`},Do={class:`space-y-2`},Oo=[{title:`基础`,component:po,componentRaw:mo},{title:`长度`,component:xo,componentRaw:So},{title:`模式`,component:e({__name:`_pattern`,setup(e){let t=h(``),n=h(``),r=h(``),i=h(``);return(e,a)=>(_(),O(`div`,Co,[k(`div`,wo,[a[4]||(a[4]=k(`div`,{class:`text-sm text-muted-foreground`},` 仅字母 `,-1)),l(X,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),pattern:`only-chars`},null,8,[`modelValue`])]),k(`div`,To,[a[5]||(a[5]=k(`div`,{class:`text-sm text-muted-foreground`},` 仅数字 `,-1)),l(X,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e),pattern:`only-digits`},null,8,[`modelValue`])]),k(`div`,Eo,[a[6]||(a[6]=k(`div`,{class:`text-sm text-muted-foreground`},` 字母和数字 `,-1)),l(X,{modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=e=>r.value=e),pattern:`only-digits-and-chars`},null,8,[`modelValue`])]),k(`div`,Do,[a[7]||(a[7]=k(`div`,{class:`text-sm text-muted-foreground`},` 自定义：仅允许 A-F 和 0-9 `,-1)),l(X,{modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=e=>i.value=e),pattern:`^[A-F0-9]*$`},null,8,[`modelValue`])])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const chars = ref('')
const digits = ref('')
const digitsAndChars = ref('')
const custom = ref('')
<\/script>

<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <div class="text-sm text-muted-foreground">
        仅字母
      </div>
      <FaInputOTP v-model="chars" pattern="only-chars" />
    </div>
    <div class="space-y-2">
      <div class="text-sm text-muted-foreground">
        仅数字
      </div>
      <FaInputOTP v-model="digits" pattern="only-digits" />
    </div>
    <div class="space-y-2">
      <div class="text-sm text-muted-foreground">
        字母和数字
      </div>
      <FaInputOTP v-model="digitsAndChars" pattern="only-digits-and-chars" />
    </div>
    <div class="space-y-2">
      <div class="text-sm text-muted-foreground">
        自定义：仅允许 A-F 和 0-9
      </div>
      <FaInputOTP v-model="custom" pattern="^[A-F0-9]*$" />
    </div>
  </div>
</template>
`},{title:`分隔符`,component:e({__name:`_separator`,setup(e){let t=h(``);return(e,n)=>(_(),m(X,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),separator:[2,3]},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const input = ref('')
<\/script>

<template>
  <FaInputOTP v-model="input" :separator="[2, 3]" />
</template>
`},{title:`禁用`,component:yo,componentRaw:bo},{title:`回调`,component:_o,componentRaw:vo}],ko=e({__name:`_basic`,setup(e){let t=h(``);return(e,n)=>(_(),m(I,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入内容`},null,8,[`modelValue`]))}}),Ao=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../index.vue'

const value = ref('')
<\/script>

<template>
  <FaInput v-model="value" placeholder="请输入内容" />
</template>
`,jo=e({__name:`_clearable`,setup(e){let t=h(`可清空的内容`);return(e,n)=>(_(),m(I,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),clearable:``,placeholder:`请输入内容`},null,8,[`modelValue`]))}}),Mo=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../index.vue'

const value = ref('可清空的内容')
<\/script>

<template>
  <FaInput v-model="value" clearable placeholder="请输入内容" />
</template>
`,No=e({__name:`_disabled`,setup(e){let t=h(`禁用状态`);return(e,n)=>(_(),m(I,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:``,placeholder:`请输入内容`},null,8,[`modelValue`]))}}),Po=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../index.vue'

const value = ref('禁用状态')
<\/script>

<template>
  <FaInput v-model="value" disabled placeholder="请输入内容" />
</template>
`,Fo=e({__name:`_password`,setup(e){let t=h(``);return(e,n)=>(_(),m(I,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入密码`,type:`password`},null,8,[`modelValue`]))}}),Io=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../index.vue'

const value = ref('')
<\/script>

<template>
  <FaInput v-model="value" placeholder="请输入密码" type="password" />
</template>
`,Lo={class:`flex flex-col gap-2`},Ro=[{title:`基础`,component:ko,componentRaw:Ao},{title:`可清空`,component:jo,componentRaw:Mo},{title:`禁用`,component:No,componentRaw:Po},{title:`密码`,component:Fo,componentRaw:Io},{title:`插槽`,component:e({__name:`_slot`,setup(e){let t=h(``),n=h(``);return(e,r)=>(_(),O(`div`,Lo,[l(I,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),placeholder:`example.com`,"input-class":`ps-1`},{start:E(()=>[...r[2]||(r[2]=[i(` https:// `,-1)])]),end:E(()=>[l(z,{text:`可输入域名、IP、端口、URL 等`},{default:E(()=>[l(U,{name:`i-ri:question-line`,class:`text-base text-orange cursor-help`})]),_:1})]),_:1},8,[`modelValue`]),l(I,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e),placeholder:`请输入内容`,align:`block`,"input-class":`shadow-none`,"end-class":`justify-end`},{start:E(()=>[...r[3]||(r[3]=[i(` 标题： `,-1)])]),end:E(()=>[l(M,{variant:`ghost`,size:`sm`,class:`px-2 h-8`},{default:E(()=>[...r[4]||(r[4]=[i(` 提交 `,-1)])]),_:1})]),_:1},8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaTooltip from '../../tooltip/index.vue'
import FaInput from '../index.vue'

const value = ref('')
const value2 = ref('')
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <FaInput v-model="value" placeholder="example.com" input-class="ps-1">
      <template #start>
        https://
      </template>
      <template #end>
        <FaTooltip text="可输入域名、IP、端口、URL 等">
          <FaIcon name="i-ri:question-line" class="text-base text-orange cursor-help" />
        </FaTooltip>
      </template>
    </FaInput>
    <FaInput v-model="value2" placeholder="请输入内容" align="block" input-class="shadow-none" end-class="justify-end">
      <template #start>
        标题：
      </template>
      <template #end>
        <FaButton variant="ghost" size="sm" class="px-2 h-8">
          提交
        </FaButton>
      </template>
    </FaInput>
  </div>
</template>
`}],zo={class:`flex flex-col gap-2`},Bo=e({__name:`_basic`,setup(e){return(e,t)=>(_(),O(`div`,zo,[l(Z,null,{default:E(()=>[...t[0]||(t[0]=[i(`Ctrl`,-1)])]),_:1}),l(Z,null,{default:E(()=>[...t[1]||(t[1]=[i(`Alt`,-1)])]),_:1}),l(Z,null,{default:E(()=>[...t[2]||(t[2]=[i(`Shift`,-1)])]),_:1})]))}}),Vo=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaKbd from '../index.vue'
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <FaKbd>Ctrl</FaKbd>
    <FaKbd>Alt</FaKbd>
    <FaKbd>Shift</FaKbd>
  </div>
</template>
`,Ho={class:`flex flex-col gap-2`},Uo=[{title:`基础`,component:Bo,componentRaw:Vo},{title:`组合`,component:e({__name:`_group-basic`,setup(e){return(e,t)=>(_(),O(`div`,Ho,[l(qe,null,{default:E(()=>[l(Z,null,{default:E(()=>[...t[0]||(t[0]=[i(`⌘`,-1)])]),_:1}),l(Z,null,{default:E(()=>[...t[1]||(t[1]=[i(`⇧`,-1)])]),_:1}),l(Z,null,{default:E(()=>[...t[2]||(t[2]=[i(`K`,-1)])]),_:1})]),_:1}),l(qe,null,{default:E(()=>[l(Z,null,{default:E(()=>[...t[3]||(t[3]=[i(`Ctrl`,-1)])]),_:1}),l(Z,null,{default:E(()=>[...t[4]||(t[4]=[i(`Alt`,-1)])]),_:1}),l(Z,null,{default:E(()=>[...t[5]||(t[5]=[i(`Delete`,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaKbd from '../index.vue'
import FaKbdGroup from '../KbdGroup.vue'
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <FaKbdGroup>
      <FaKbd>⌘</FaKbd>
      <FaKbd>⇧</FaKbd>
      <FaKbd>K</FaKbd>
    </FaKbdGroup>
    <FaKbdGroup>
      <FaKbd>Ctrl</FaKbd>
      <FaKbd>Alt</FaKbd>
      <FaKbd>Delete</FaKbd>
    </FaKbdGroup>
  </div>
</template>
`}],Wo={class:`space-y-4`},Go=e({__name:`_basic`,setup(e){let t=r({name:``,email:``});return(e,n)=>(_(),O(`div`,Wo,[l(Q,{label:`用户名`},{default:E(()=>[l(I,{modelValue:t.name,"onUpdate:modelValue":n[0]||(n[0]=e=>t.name=e),placeholder:`请输入用户名`,class:`w-72`},null,8,[`modelValue`])]),_:1}),l(Q,{label:`邮箱`},{default:E(()=>[l(I,{modelValue:t.email,"onUpdate:modelValue":n[1]||(n[1]=e=>t.email=e),placeholder:`请输入邮箱`,class:`w-72`},null,8,[`modelValue`])]),_:1})]))}}),Ko=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive } from 'vue'
import FaInput from '../../input/index.vue'
import FaLabel from '../index.vue'

const form = reactive({
  name: '',
  email: '',
})
<\/script>

<template>
  <div class="space-y-4">
    <FaLabel label="用户名">
      <FaInput v-model="form.name" placeholder="请输入用户名" class="w-72" />
    </FaLabel>
    <FaLabel label="邮箱">
      <FaInput v-model="form.email" placeholder="请输入邮箱" class="w-72" />
    </FaLabel>
  </div>
</template>
`,qo={class:`space-y-4`},Jo={class:`text-muted-foreground flex shrink-0 gap-2 w-24 items-center`},Yo=e({__name:`_custom`,setup(e){let t=u(``),n=u(!1);return(e,r)=>(_(),O(`div`,qo,[l(Q,null,{default:E(()=>[k(`div`,Jo,[l(U,{name:`i-lucide:search`}),r[2]||(r[2]=k(`span`,null,`关键词`,-1))]),l(I,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),placeholder:`请输入关键词`,class:`w-72`},null,8,[`modelValue`])]),_:1}),l(Q,null,{default:E(()=>[l(Ze,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e)},null,8,[`modelValue`]),r[3]||(r[3]=k(`span`,null,`记住当前筛选条件`,-1))]),_:1})]))}}),Xo=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaCheckbox from '../../checkbox/index.vue'
import FaIcon from '../../icon/index.vue'
import FaInput from '../../input/index.vue'
import FaLabel from '../index.vue'

const keyword = shallowRef('')
const remember = shallowRef(false)
<\/script>

<template>
  <div class="space-y-4">
    <FaLabel>
      <div class="text-muted-foreground flex shrink-0 gap-2 w-24 items-center">
        <FaIcon name="i-lucide:search" />
        <span>关键词</span>
      </div>
      <FaInput v-model="keyword" placeholder="请输入关键词" class="w-72" />
    </FaLabel>
    <FaLabel>
      <FaCheckbox v-model="remember" />
      <span>记住当前筛选条件</span>
    </FaLabel>
  </div>
</template>
`,Zo={class:`max-w-xl space-y-4`},Qo={class:`flex gap-2`},$o=e({__name:`_form`,setup(e){let t=r({title:``,type:`notice`,description:``}),n=[{label:`公告`,value:`notice`},{label:`消息`,value:`message`},{label:`任务`,value:`task`}];return(e,r)=>(_(),O(`div`,Zo,[l(Q,{label:`标题`,"label-width":`5rem`},{default:E(()=>[l(I,{modelValue:t.title,"onUpdate:modelValue":r[0]||(r[0]=e=>t.title=e),placeholder:`请输入标题`,class:`w-full`},null,8,[`modelValue`])]),_:1}),l(Q,{label:`类型`,"label-width":`5rem`},{default:E(()=>[l(L,{modelValue:t.type,"onUpdate:modelValue":r[1]||(r[1]=e=>t.type=e),options:n,class:`w-full`},null,8,[`modelValue`])]),_:1}),l(Q,{label:`描述`,"label-width":`5rem`,class:`items-start`},{default:E(()=>[l(je,{modelValue:t.description,"onUpdate:modelValue":r[2]||(r[2]=e=>t.description=e),placeholder:`请输入描述`,class:`w-full`},null,8,[`modelValue`])]),_:1}),l(Q,{"label-width":`5rem`},{default:E(()=>[k(`div`,Qo,[l(M,null,{default:E(()=>[...r[3]||(r[3]=[i(`保存`,-1)])]),_:1}),l(M,{variant:`outline`},{default:E(()=>[...r[4]||(r[4]=[i(` 重置 `,-1)])]),_:1})])]),_:1})]))}}),es=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaTextarea from '../../textarea/index.vue'
import FaLabel from '../index.vue'

const form = reactive({
  title: '',
  type: 'notice',
  description: '',
})

const typeOptions = [
  { label: '公告', value: 'notice' },
  { label: '消息', value: 'message' },
  { label: '任务', value: 'task' },
]
<\/script>

<template>
  <div class="max-w-xl space-y-4">
    <FaLabel label="标题" label-width="5rem">
      <FaInput v-model="form.title" placeholder="请输入标题" class="w-full" />
    </FaLabel>
    <FaLabel label="类型" label-width="5rem">
      <FaSelect v-model="form.type" :options="typeOptions" class="w-full" />
    </FaLabel>
    <FaLabel label="描述" label-width="5rem" class="items-start">
      <FaTextarea v-model="form.description" placeholder="请输入描述" class="w-full" />
    </FaLabel>
    <FaLabel label-width="5rem">
      <div class="flex gap-2">
        <FaButton>保存</FaButton>
        <FaButton variant="outline">
          重置
        </FaButton>
      </div>
    </FaLabel>
  </div>
</template>
`,ts={class:`space-y-4`},ns=[{title:`基础`,component:Go,componentRaw:Ko},{title:`固定宽度`,component:e({__name:`_width`,setup(e){let t=r({name:``,role:`admin`,phone:``}),n=[{label:`管理员`,value:`admin`},{label:`运营`,value:`operator`},{label:`访客`,value:`guest`}];return(e,r)=>(_(),O(`div`,ts,[l(Q,{label:`用户名`,"label-width":88},{default:E(()=>[l(I,{modelValue:t.name,"onUpdate:modelValue":r[0]||(r[0]=e=>t.name=e),placeholder:`请输入用户名`,class:`w-72`},null,8,[`modelValue`])]),_:1}),l(Q,{label:`角色`,"label-width":88},{default:E(()=>[l(L,{modelValue:t.role,"onUpdate:modelValue":r[1]||(r[1]=e=>t.role=e),options:n,class:`w-72`},null,8,[`modelValue`])]),_:1}),l(Q,{label:`手机号`,"label-width":88},{default:E(()=>[l(I,{modelValue:t.phone,"onUpdate:modelValue":r[2]||(r[2]=e=>t.phone=e),placeholder:`请输入手机号`,class:`w-72`},null,8,[`modelValue`])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive } from 'vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaLabel from '../index.vue'

const form = reactive({
  name: '',
  role: 'admin',
  phone: '',
})

const roleOptions = [
  { label: '管理员', value: 'admin' },
  { label: '运营', value: 'operator' },
  { label: '访客', value: 'guest' },
]
<\/script>

<template>
  <div class="space-y-4">
    <FaLabel label="用户名" :label-width="88">
      <FaInput v-model="form.name" placeholder="请输入用户名" class="w-72" />
    </FaLabel>
    <FaLabel label="角色" :label-width="88">
      <FaSelect v-model="form.role" :options="roleOptions" class="w-72" />
    </FaLabel>
    <FaLabel label="手机号" :label-width="88">
      <FaInput v-model="form.phone" placeholder="请输入手机号" class="w-72" />
    </FaLabel>
  </div>
</template>
`},{title:`表单布局`,component:$o,componentRaw:es},{title:`自定义内容`,component:Yo,componentRaw:Xo}],rs={class:`flex flex-wrap gap-2`},is=e({__name:`_actions`,setup(e){let t=u(!1),n=u(!1),r=u(!1);return(e,a)=>(_(),O(w,null,[k(`div`,rs,[l(M,{onClick:a[0]||(a[0]=e=>t.value=!0)},{default:E(()=>[...a[6]||(a[6]=[i(` 隐藏关闭按钮 `,-1)])]),_:1}),l(M,{variant:`outline`,onClick:a[1]||(a[1]=e=>n.value=!0)},{default:E(()=>[...a[7]||(a[7]=[i(` 最大化 `,-1)])]),_:1}),l(M,{variant:`secondary`,onClick:a[2]||(a[2]=e=>r.value=!0)},{default:E(()=>[...a[8]||(a[8]=[i(` 拖拽 `,-1)])]),_:1})]),l(W,{modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value=e),title:`隐藏关闭按钮`,closable:!1,"show-cancel-button":``},{default:E(()=>[...a[9]||(a[9]=[k(`div`,{class:`text-sm text-muted-foreground`},` 右上角关闭按钮已隐藏，可以通过底部按钮关闭。 `,-1)])]),_:1},8,[`modelValue`]),l(W,{modelValue:n.value,"onUpdate:modelValue":a[4]||(a[4]=e=>n.value=e),title:`可最大化弹窗`,maximizable:``},{default:E(()=>[...a[10]||(a[10]=[k(`div`,{class:`text-sm text-muted-foreground`},` 点击右上角最大化按钮可以切换弹窗尺寸。 `,-1)])]),_:1},8,[`modelValue`]),l(W,{modelValue:r.value,"onUpdate:modelValue":a[5]||(a[5]=e=>r.value=e),title:`可拖拽弹窗`,draggable:``},{default:E(()=>[...a[11]||(a[11]=[k(`div`,{class:`text-sm text-muted-foreground`},` 按住标题栏可以拖动弹窗位置。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),as=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const closableOpen = shallowRef(false)
const maximizableOpen = shallowRef(false)
const draggableOpen = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="closableOpen = true">
      隐藏关闭按钮
    </FaButton>
    <FaButton variant="outline" @click="maximizableOpen = true">
      最大化
    </FaButton>
    <FaButton variant="secondary" @click="draggableOpen = true">
      拖拽
    </FaButton>
  </div>

  <FaModal v-model="closableOpen" title="隐藏关闭按钮" :closable="false" show-cancel-button>
    <div class="text-sm text-muted-foreground">
      右上角关闭按钮已隐藏，可以通过底部按钮关闭。
    </div>
  </FaModal>
  <FaModal v-model="maximizableOpen" title="可最大化弹窗" maximizable>
    <div class="text-sm text-muted-foreground">
      点击右上角最大化按钮可以切换弹窗尺寸。
    </div>
  </FaModal>
  <FaModal v-model="draggableOpen" title="可拖拽弹窗" draggable>
    <div class="text-sm text-muted-foreground">
      按住标题栏可以拖动弹窗位置。
    </div>
  </FaModal>
</template>
`,os=e({__name:`_basic`,setup(e){let t=u(!1);return(e,n)=>(_(),O(w,null,[l(M,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:E(()=>[...n[2]||(n[2]=[i(` 打开弹窗 `,-1)])]),_:1}),l(W,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`弹窗标题`},{default:E(()=>[...n[3]||(n[3]=[k(`div`,{class:`text-sm text-muted-foreground`},` 这里是弹窗内容区域。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),ss=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开弹窗
  </FaButton>
  <FaModal v-model="open" title="弹窗标题">
    <div class="text-sm text-muted-foreground">
      这里是弹窗内容区域。
    </div>
  </FaModal>
</template>
`,cs={class:`flex flex-wrap gap-2`},ls=e({__name:`_center-border-loading`,setup(e){let t=u(!1),n=u(!1),r=u(!1),a=u(!1);function o(){r.value=!0,a.value=!0,window.setTimeout(()=>{a.value=!1},1800)}return(e,s)=>(_(),O(w,null,[k(`div`,cs,[l(M,{onClick:s[0]||(s[0]=e=>t.value=!0)},{default:E(()=>[...s[5]||(s[5]=[i(` 居中 `,-1)])]),_:1}),l(M,{variant:`outline`,onClick:s[1]||(s[1]=e=>n.value=!0)},{default:E(()=>[...s[6]||(s[6]=[i(` 无边框 `,-1)])]),_:1}),l(M,{variant:`secondary`,onClick:o},{default:E(()=>[...s[7]||(s[7]=[i(` 载入 `,-1)])]),_:1})]),l(W,{modelValue:t.value,"onUpdate:modelValue":s[2]||(s[2]=e=>t.value=e),title:`居中弹窗`,center:``,"align-center":``,"show-cancel-button":``},{default:E(()=>[...s[8]||(s[8]=[k(`div`,{class:`text-sm text-muted-foreground text-center`},` 标题、描述和底部按钮会居中显示，弹窗也会垂直居中。 `,-1)])]),_:1},8,[`modelValue`]),l(W,{modelValue:n.value,"onUpdate:modelValue":s[3]||(s[3]=e=>n.value=e),title:`无边框弹窗`,border:!1,"show-cancel-button":``},{default:E(()=>[...s[9]||(s[9]=[k(`div`,{class:`text-sm text-muted-foreground`},` 头部和底部不显示分割线。 `,-1)])]),_:1},8,[`modelValue`]),l(W,{modelValue:r.value,"onUpdate:modelValue":s[4]||(s[4]=e=>r.value=e),title:`载入状态`,loading:a.value},{default:E(()=>[...s[10]||(s[10]=[k(`div`,{class:`text-sm text-muted-foreground`},` 弹窗主体区域会显示载入遮罩。 `,-1)])]),_:1},8,[`modelValue`,`loading`])],64))}}),us=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const centeredOpen = shallowRef(false)
const borderlessOpen = shallowRef(false)
const loadingOpen = shallowRef(false)
const loading = shallowRef(false)

function openLoadingModal() {
  loadingOpen.value = true
  loading.value = true
  window.setTimeout(() => {
    loading.value = false
  }, 1800)
}
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="centeredOpen = true">
      居中
    </FaButton>
    <FaButton variant="outline" @click="borderlessOpen = true">
      无边框
    </FaButton>
    <FaButton variant="secondary" @click="openLoadingModal">
      载入
    </FaButton>
  </div>

  <FaModal v-model="centeredOpen" title="居中弹窗" center align-center show-cancel-button>
    <div class="text-sm text-muted-foreground text-center">
      标题、描述和底部按钮会居中显示，弹窗也会垂直居中。
    </div>
  </FaModal>
  <FaModal v-model="borderlessOpen" title="无边框弹窗" :border="false" show-cancel-button>
    <div class="text-sm text-muted-foreground">
      头部和底部不显示分割线。
    </div>
  </FaModal>
  <FaModal v-model="loadingOpen" title="载入状态" :loading="loading">
    <div class="text-sm text-muted-foreground">
      弹窗主体区域会显示载入遮罩。
    </div>
  </FaModal>
</template>
`,ds=e({__name:`_custom-style`,setup(e){let t=u(!1);return(e,n)=>(_(),O(w,null,[l(M,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:E(()=>[...n[2]||(n[2]=[i(` 打开弹窗 `,-1)])]),_:1}),l(W,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`自定义样式`,class:`sm:max-w-2xl`,"header-class":`bg-muted/40`,"content-class":`min-h-auto`,"footer-class":`bg-muted/40`,"show-cancel-button":``},{default:E(()=>[...n[3]||(n[3]=[k(`div`,{class:`text-sm text-muted-foreground`},` 可以通过 class、header-class、content-class 和 footer-class 调整弹窗样式。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),fs=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开弹窗
  </FaButton>
  <FaModal
    v-model="open"
    title="自定义样式"
    class="sm:max-w-2xl"
    header-class="bg-muted/40"
    content-class="min-h-auto"
    footer-class="bg-muted/40"
    show-cancel-button
  >
    <div class="text-sm text-muted-foreground">
      可以通过 class、header-class、content-class 和 footer-class 调整弹窗样式。
    </div>
  </FaModal>
</template>
`,ps={class:`flex flex-wrap gap-2`},ms=e({__name:`_dialog`,setup(e){let t=He(),n=B();function r(){t.info({title:`温馨提醒`,content:`这是 info 弹窗`,onConfirm:()=>n(`你点了确定`)})}function a(){t.success({title:`操作成功`,content:`这是 success 弹窗`,onConfirm:()=>n(`你点了确定`)})}function o(){t.warning({title:`风险提醒`,content:`这是 warning 弹窗`,onConfirm:()=>n(`你点了确定`)})}function s(){t.error({title:`操作失败`,content:`这是 error 弹窗`,onConfirm:()=>n(`你点了确定`)})}function c(){t.confirm({title:`确认操作`,content:`这是 confirm 弹窗`,onConfirm:()=>n(`确认操作`),onCancel:()=>n(`取消操作`)})}return(e,t)=>(_(),O(`div`,ps,[l(M,{onClick:r},{default:E(()=>[...t[0]||(t[0]=[i(` Info `,-1)])]),_:1}),l(M,{variant:`outline`,onClick:a},{default:E(()=>[...t[1]||(t[1]=[i(` Success `,-1)])]),_:1}),l(M,{variant:`outline`,onClick:o},{default:E(()=>[...t[2]||(t[2]=[i(` Warning `,-1)])]),_:1}),l(M,{variant:`outline`,onClick:s},{default:E(()=>[...t[3]||(t[3]=[i(` Error `,-1)])]),_:1}),l(M,{variant:`secondary`,onClick:c},{default:E(()=>[...t[4]||(t[4]=[i(` Confirm `,-1)])]),_:1})]))}}),hs=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../../toast'
import { useModal } from '../index'

const modal = useModal()
const toast = useToast()

function showInfo() {
  modal.info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
    onConfirm: () => toast('你点了确定'),
  })
}

function showSuccess() {
  modal.success({
    title: '操作成功',
    content: '这是 success 弹窗',
    onConfirm: () => toast('你点了确定'),
  })
}

function showWarning() {
  modal.warning({
    title: '风险提醒',
    content: '这是 warning 弹窗',
    onConfirm: () => toast('你点了确定'),
  })
}

function showError() {
  modal.error({
    title: '操作失败',
    content: '这是 error 弹窗',
    onConfirm: () => toast('你点了确定'),
  })
}

function showConfirm() {
  modal.confirm({
    title: '确认操作',
    content: '这是 confirm 弹窗',
    onConfirm: () => toast('确认操作'),
    onCancel: () => toast('取消操作'),
  })
}
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="showInfo">
      Info
    </FaButton>
    <FaButton variant="outline" @click="showSuccess">
      Success
    </FaButton>
    <FaButton variant="outline" @click="showWarning">
      Warning
    </FaButton>
    <FaButton variant="outline" @click="showError">
      Error
    </FaButton>
    <FaButton variant="secondary" @click="showConfirm">
      Confirm
    </FaButton>
  </div>
</template>
`,gs=e({__name:`_event`,setup(e){let t=u(!1),n=B();function r(e,t){n(`beforeClose: ${e}`),window.setTimeout(t,600)}return(e,a)=>(_(),O(w,null,[l(M,{onClick:a[0]||(a[0]=e=>t.value=!0)},{default:E(()=>[...a[8]||(a[8]=[i(` 打开弹窗 `,-1)])]),_:1}),l(W,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),title:`触发事件`,"show-cancel-button":``,"before-close":r,onOpen:a[2]||(a[2]=e=>d(n)(`open`)),onOpened:a[3]||(a[3]=e=>d(n)(`opened`)),onClose:a[4]||(a[4]=e=>d(n)(`close`)),onClosed:a[5]||(a[5]=e=>d(n)(`closed`)),onConfirm:a[6]||(a[6]=e=>d(n)(`confirm`)),onCancel:a[7]||(a[7]=e=>d(n)(`cancel`))},{default:E(()=>[...a[9]||(a[9]=[k(`div`,{class:`text-sm text-muted-foreground`},` 打开、关闭、确认、取消和动画完成等事件都会触发 toast。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),_s=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../../toast'
import FaModal from '../index.vue'

const open = shallowRef(false)
const toast = useToast()

function handleBeforeClose(action: 'confirm' | 'cancel' | 'close', done: () => void) {
  toast(\`beforeClose: \${action}\`)
  window.setTimeout(done, 600)
}
<\/script>

<template>
  <FaButton @click="open = true">
    打开弹窗
  </FaButton>
  <FaModal
    v-model="open"
    title="触发事件"
    show-cancel-button
    :before-close="handleBeforeClose"
    @open="toast('open')"
    @opened="toast('opened')"
    @close="toast('close')"
    @closed="toast('closed')"
    @confirm="toast('confirm')"
    @cancel="toast('cancel')"
  >
    <div class="text-sm text-muted-foreground">
      打开、关闭、确认、取消和动画完成等事件都会触发 toast。
    </div>
  </FaModal>
</template>
`,vs=e({__name:`_functional`,setup(e){let t=B(),{open:n}=He().create({title:`函数式调用`,description:`通过 useModal().create() 创建弹窗。`,content:c(`div`,{class:`text-sm text-muted-foreground leading-6`},`这里是函数式调用渲染的内容。`),showCancelButton:!0,onConfirm:()=>t(`确认操作`),onCancel:()=>t(`取消操作`)});return(e,t)=>(_(),m(M,{onClick:d(n)},{default:E(()=>[...t[0]||(t[0]=[i(` 打开弹窗 `,-1)])]),_:1},8,[`onClick`]))}}),ys=`<script setup lang="ts">
import { h } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../../toast'
import { useModal } from '../index'

const toast = useToast()

const { open } = useModal().create({
  title: '函数式调用',
  description: '通过 useModal().create() 创建弹窗。',
  content: h('div', { class: 'text-sm text-muted-foreground leading-6' }, '这里是函数式调用渲染的内容。'),
  showCancelButton: true,
  onConfirm: () => toast('确认操作'),
  onCancel: () => toast('取消操作'),
})
<\/script>

<template>
  <FaButton @click="open">
    打开弹窗
  </FaButton>
</template>
`,bs={class:`flex flex-wrap gap-2`},xs=e({__name:`_header-footer`,setup(e){let t=u(!1),n=u(!1);return(e,r)=>(_(),O(w,null,[k(`div`,bs,[l(M,{onClick:r[0]||(r[0]=e=>t.value=!0)},{default:E(()=>[...r[4]||(r[4]=[i(` 隐藏头部 `,-1)])]),_:1}),l(M,{variant:`outline`,onClick:r[1]||(r[1]=e=>n.value=!0)},{default:E(()=>[...r[5]||(r[5]=[i(` 隐藏底部 `,-1)])]),_:1})]),l(W,{modelValue:t.value,"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),header:!1},{default:E(()=>[...r[6]||(r[6]=[k(`div`,{class:`text-sm text-muted-foreground`},` 当前弹窗隐藏了头部区域。 `,-1)])]),_:1},8,[`modelValue`]),l(W,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),title:`隐藏底部`,footer:!1},{default:E(()=>[...r[7]||(r[7]=[k(`div`,{class:`text-sm text-muted-foreground`},` 当前弹窗隐藏了底部操作区域。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Ss=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const headerOpen = shallowRef(false)
const footerOpen = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="headerOpen = true">
      隐藏头部
    </FaButton>
    <FaButton variant="outline" @click="footerOpen = true">
      隐藏底部
    </FaButton>
  </div>

  <FaModal v-model="headerOpen" :header="false">
    <div class="text-sm text-muted-foreground">
      当前弹窗隐藏了头部区域。
    </div>
  </FaModal>
  <FaModal v-model="footerOpen" title="隐藏底部" :footer="false">
    <div class="text-sm text-muted-foreground">
      当前弹窗隐藏了底部操作区域。
    </div>
  </FaModal>
</template>
`,Cs={class:`flex flex-wrap gap-2`},ws=e({__name:`_overlay-blur`,setup(e){let t=u(!1),n=u(!1);return(e,r)=>(_(),O(w,null,[k(`div`,Cs,[l(M,{onClick:r[0]||(r[0]=e=>t.value=!0)},{default:E(()=>[...r[4]||(r[4]=[i(` 无遮罩 `,-1)])]),_:1}),l(M,{variant:`outline`,onClick:r[1]||(r[1]=e=>n.value=!0)},{default:E(()=>[...r[5]||(r[5]=[i(` 模糊遮罩 `,-1)])]),_:1})]),l(W,{modelValue:t.value,"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),title:`无遮罩弹窗`,overlay:!1},{default:E(()=>[...r[6]||(r[6]=[k(`div`,{class:`text-sm text-muted-foreground`},` 设置 overlay 为 false 后，不显示背景遮罩。 `,-1)])]),_:1},8,[`modelValue`]),l(W,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),title:`模糊遮罩`,"overlay-blur":``},{default:E(()=>[...r[7]||(r[7]=[k(`div`,{class:`text-sm text-muted-foreground`},` 设置 overlay-blur 后，背景遮罩会带有模糊效果。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Ts=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const overlayOpen = shallowRef(false)
const blurOpen = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="overlayOpen = true">
      无遮罩
    </FaButton>
    <FaButton variant="outline" @click="blurOpen = true">
      模糊遮罩
    </FaButton>
  </div>

  <FaModal v-model="overlayOpen" title="无遮罩弹窗" :overlay="false">
    <div class="text-sm text-muted-foreground">
      设置 overlay 为 false 后，不显示背景遮罩。
    </div>
  </FaModal>
  <FaModal v-model="blurOpen" title="模糊遮罩" overlay-blur>
    <div class="text-sm text-muted-foreground">
      设置 overlay-blur 后，背景遮罩会带有模糊效果。
    </div>
  </FaModal>
</template>
`,Es={class:`pr-8 flex gap-3 items-start`},Ds={class:`flex gap-2 w-full justify-end`},Os=[{title:`基础`,component:os,componentRaw:ss},{title:`标题描述`,component:e({__name:`_title-description`,setup(e){let t=u(!1);return(e,n)=>(_(),O(w,null,[l(M,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:E(()=>[...n[2]||(n[2]=[i(` 打开弹窗 `,-1)])]),_:1}),l(W,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`账号安全验证`,description:`继续操作前，请确认当前操作由本人发起。`},{default:E(()=>[...n[3]||(n[3]=[k(`div`,{class:`text-sm text-muted-foreground`},` 描述会显示在标题下方，用于补充说明弹窗目的。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开弹窗
  </FaButton>
  <FaModal v-model="open" title="账号安全验证" description="继续操作前，请确认当前操作由本人发起。">
    <div class="text-sm text-muted-foreground">
      描述会显示在标题下方，用于补充说明弹窗目的。
    </div>
  </FaModal>
</template>
`},{title:`关闭/最大化/拖拽`,component:is,componentRaw:as},{title:`居中/边框/载入`,component:ls,componentRaw:us},{title:`遮罩/模糊`,component:ws,componentRaw:Ts},{title:`显示/隐藏头部底部`,component:xs,componentRaw:Ss},{title:`插槽`,component:e({__name:`_slot`,setup(e){let t=u(!1);return(e,n)=>(_(),O(w,null,[l(M,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:E(()=>[...n[4]||(n[4]=[i(` 打开弹窗 `,-1)])]),_:1}),l(W,{modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=e=>t.value=e)},{header:E(()=>[k(`div`,Es,[l(U,{name:`i-lucide:message-square-warning`,class:`text-primary mt-0.5 size-5`}),n[5]||(n[5]=k(`div`,null,[k(`div`,{class:`font-semibold`},` 自定义头部 `),k(`div`,{class:`text-sm text-muted-foreground`},` 使用 header 插槽替换默认标题。 `)],-1))])]),footer:E(()=>[k(`div`,Ds,[l(M,{variant:`outline`,onClick:n[1]||(n[1]=e=>t.value=!1)},{default:E(()=>[...n[6]||(n[6]=[i(` 取消 `,-1)])]),_:1}),l(M,{onClick:n[2]||(n[2]=e=>t.value=!1)},{default:E(()=>[...n[7]||(n[7]=[i(` 保存 `,-1)])]),_:1})])]),default:E(()=>[n[8]||(n[8]=k(`div`,{class:`text-sm text-muted-foreground`},` 这里是默认插槽内容。 `,-1))]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaModal from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开弹窗
  </FaButton>
  <FaModal v-model="open">
    <template #header>
      <div class="pr-8 flex gap-3 items-start">
        <FaIcon name="i-lucide:message-square-warning" class="text-primary mt-0.5 size-5" />
        <div>
          <div class="font-semibold">
            自定义头部
          </div>
          <div class="text-sm text-muted-foreground">
            使用 header 插槽替换默认标题。
          </div>
        </div>
      </div>
    </template>

    <div class="text-sm text-muted-foreground">
      这里是默认插槽内容。
    </div>

    <template #footer>
      <div class="flex gap-2 w-full justify-end">
        <FaButton variant="outline" @click="open = false">
          取消
        </FaButton>
        <FaButton @click="open = false">
          保存
        </FaButton>
      </div>
    </template>
  </FaModal>
</template>
`},{title:`自定义样式`,component:ds,componentRaw:fs},{title:`触发事件`,component:gs,componentRaw:_s},{title:`对话框`,component:ms,componentRaw:hs},{title:`函数式调用`,component:vs,componentRaw:ys}],ks=[{title:`基础`,component:e({__name:`_basic`,setup(e){let t=h(0);return(e,n)=>(_(),m(Xe,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(0)
<\/script>

<template>
  <FaNumberField v-model="value" />
</template>
`},{title:`最大值/最小值`,component:e({__name:`_min-max`,setup(e){let t=h(5);return(e,n)=>(_(),m(Xe,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),min:0,max:10},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(5)
<\/script>

<template>
  <FaNumberField v-model="value" :min="0" :max="10" />
</template>
`},{title:`步长`,component:e({__name:`_step`,setup(e){let t=h(0);return(e,n)=>(_(),m(Xe,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),step:.1},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(0)
<\/script>

<template>
  <FaNumberField v-model="value" :step="0.1" />
</template>
`},{title:`禁用`,component:e({__name:`_disabled`,setup(e){let t=h(50);return(e,n)=>(_(),m(Xe,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:``},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(50)
<\/script>

<template>
  <FaNumberField v-model="value" disabled />
</template>
`}],As=e({__name:`_basic`,setup(e){return(e,t)=>(_(),m($e,{title:`页面标题`}))}}),js=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageHeader from '../index.vue'
<\/script>

<template>
  <FaPageHeader title="页面标题" />
</template>
`,Ms=e({__name:`_custom-style`,setup(e){return(e,t)=>(_(),m($e,{title:`自定义样式`,description:`通过 class、main-class 和 default-class 调整布局和外观。`,class:`border rounded-lg bg-muted/40`,"main-class":`flex-[1_1_60%]`,"default-class":`flex gap-2`},{default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...t[0]||(t[0]=[i(` 取消 `,-1)])]),_:1}),l(M,null,{default:E(()=>[...t[1]||(t[1]=[i(` 保存 `,-1)])]),_:1})]),_:1}))}}),Ns=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaPageHeader from '../index.vue'
<\/script>

<template>
  <FaPageHeader
    title="自定义样式"
    description="通过 class、main-class 和 default-class 调整布局和外观。"
    class="border rounded-lg bg-muted/40"
    main-class="flex-[1_1_60%]"
    default-class="flex gap-2"
  >
    <FaButton variant="outline">
      取消
    </FaButton>
    <FaButton>
      保存
    </FaButton>
  </FaPageHeader>
</template>
`,Ps=e({__name:`_description`,setup(e){return(e,t)=>(_(),m($e,{title:`用户管理`,description:`管理系统用户信息和权限配置。`}))}}),Fs=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageHeader from '../index.vue'
<\/script>

<template>
  <FaPageHeader title="用户管理" description="管理系统用户信息和权限配置。" />
</template>
`,Is={class:`flex gap-2 items-center`},Ls=[{title:`基础`,component:As,componentRaw:js},{title:`描述`,component:Ps,componentRaw:Fs},{title:`插槽`,component:e({__name:`_slot`,setup(e){return(e,t)=>(_(),m($e,null,{title:E(()=>[k(`div`,Is,[l(U,{name:`i-lucide:user-round-cog`,class:`text-primary size-6`}),t[0]||(t[0]=i(` 用户管理 `,-1))])]),description:E(()=>[...t[1]||(t[1]=[k(`p`,null,`提供 title、description 和右侧操作区域插槽。`,-1)])]),default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[l(U,{name:`i-lucide:plus`}),t[2]||(t[2]=i(` 新增用户 `,-1))]),_:1})]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaPageHeader from '../index.vue'
<\/script>

<template>
  <FaPageHeader>
    <template #title>
      <div class="flex gap-2 items-center">
        <FaIcon name="i-lucide:user-round-cog" class="text-primary size-6" />
        用户管理
      </div>
    </template>
    <template #description>
      <p>提供 title、description 和右侧操作区域插槽。</p>
    </template>
    <FaButton variant="outline">
      <FaIcon name="i-lucide:plus" />
      新增用户
    </FaButton>
  </FaPageHeader>
</template>
`},{title:`自定义样式`,component:Ms,componentRaw:Ns}],Rs=e({__name:`_basic`,setup(e){return(e,t)=>(_(),m(xe,null,{default:E(()=>[...t[0]||(t[0]=[i(` PageMain 是最常用的页面内容容器，几乎所有页面都会使用到。 `,-1)])]),_:1}))}}),zs=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageMain from '../index.vue'
<\/script>

<template>
  <FaPageMain>
    PageMain 是最常用的页面内容容器，几乎所有页面都会使用到。
  </FaPageMain>
</template>
`,Bs=e({__name:`_collapse`,setup(e){return(e,t)=>(_(),m(xe,{title:`带展开/收起功能`,collaspe:``,height:`100px`},{default:E(()=>[...t[0]||(t[0]=[k(`div`,{class:`space-y-4`},[k(`h3`,{class:`text-2xl font-bold`},` Fantastic-admin `),k(`p`,{class:`text-sm text-muted-foreground`},` 设置 collaspe 后，内容区域会在指定高度折叠。 `),k(`p`,null,`鼠标移入内容底部，可以看到展开和收起按钮。`),k(`p`,null,`这是一段用于撑开内容高度的文本。`),k(`p`,null,`继续补充一些内容，让折叠效果更明显。`)],-1)])]),_:1}))}}),Vs=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageMain from '../index.vue'
<\/script>

<template>
  <FaPageMain title="带展开/收起功能" collaspe height="100px">
    <div class="space-y-4">
      <h3 class="text-2xl font-bold">
        Fantastic-admin
      </h3>
      <p class="text-sm text-muted-foreground">
        设置 collaspe 后，内容区域会在指定高度折叠。
      </p>
      <p>鼠标移入内容底部，可以看到展开和收起按钮。</p>
      <p>这是一段用于撑开内容高度的文本。</p>
      <p>继续补充一些内容，让折叠效果更明显。</p>
    </div>
  </FaPageMain>
</template>
`,Hs={class:`flex-center-between`},Us=[{title:`基础`,component:Rs,componentRaw:zs},{title:`标题`,component:e({__name:`_title`,setup(e){return(e,t)=>(_(),m(xe,{title:`你可以设置一个自定义的标题`},{default:E(()=>[...t[0]||(t[0]=[i(` 这里放页面内容。 `,-1)])]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageMain from '../index.vue'
<\/script>

<template>
  <FaPageMain title="你可以设置一个自定义的标题">
    这里放页面内容。
  </FaPageMain>
</template>
`},{title:`插槽`,component:e({__name:`_slot`,setup(e){return(e,t)=>(_(),m(xe,null,{title:E(()=>[k(`div`,Hs,[t[1]||(t[1]=i(` 通过 slot 设置标题 `,-1)),l(M,{variant:`outline`,size:`sm`},{default:E(()=>[...t[0]||(t[0]=[i(` 还可以放置自定义按钮 `,-1)])]),_:1})])]),default:E(()=>[t[2]||(t[2]=i(` 这里放页面内容。 `,-1))]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaPageMain from '../index.vue'
<\/script>

<template>
  <FaPageMain>
    <template #title>
      <div class="flex-center-between">
        通过 slot 设置标题
        <FaButton variant="outline" size="sm">
          还可以放置自定义按钮
        </FaButton>
      </div>
    </template>
    这里放页面内容。
  </FaPageMain>
</template>
`},{title:`折叠`,component:Bs,componentRaw:Vs}],Ws=e({__name:`_basic`,setup(e){let t=h(1),n=h(10),r=h(100);return(e,i)=>(_(),m(ke,{page:t.value,"onUpdate:page":i[0]||(i[0]=e=>t.value=e),size:n.value,"onUpdate:size":i[1]||(i[1]=e=>n.value=e),total:r.value},null,8,[`page`,`size`,`total`]))}}),Gs=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaPagination from '../index.vue'

const page = ref(1)
const size = ref(10)
const total = ref(100)
<\/script>

<template>
  <FaPagination v-model:page="page" v-model:size="size" :total="total" />
</template>
`,Ks={class:`space-y-3`},qs={class:`text-sm text-muted-foreground`},Js=e({__name:`_event`,setup(e){let t=h(1),n=h(10),r=h(100),i=h(`等待分页操作`);function a(e){i.value=`当前页码切换为：${e}`}function o(e){i.value=`每页条数切换为：${e}`}return(e,s)=>(_(),O(`div`,Ks,[l(ke,{page:t.value,"onUpdate:page":s[0]||(s[0]=e=>t.value=e),size:n.value,"onUpdate:size":s[1]||(s[1]=e=>n.value=e),total:r.value,onPageChange:a,onSizeChange:o},null,8,[`page`,`size`,`total`]),k(`div`,qs,g(i.value),1)]))}}),Ys=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaPagination from '../index.vue'

const page = ref(1)
const size = ref(10)
const total = ref(100)
const message = ref('等待分页操作')

function handlePageChange(value: number) {
  message.value = \`当前页码切换为：\${value}\`
}

function handleSizeChange(value: number) {
  message.value = \`每页条数切换为：\${value}\`
}
<\/script>

<template>
  <div class="space-y-3">
    <FaPagination
      v-model:page="page"
      v-model:size="size"
      :total="total"
      @page-change="handlePageChange"
      @size-change="handleSizeChange"
    />
    <div class="text-sm text-muted-foreground">
      {{ message }}
    </div>
  </div>
</template>
`,Xs={class:`space-y-4`},Zs=[{title:`基础`,component:Ws,componentRaw:Gs},{title:`布局`,component:e({__name:`_layout`,setup(e){let t=h(1),n=h(10),r=h(100);return(e,i)=>(_(),O(`div`,Xs,[l(ke,{page:t.value,"onUpdate:page":i[0]||(i[0]=e=>t.value=e),size:n.value,"onUpdate:size":i[1]||(i[1]=e=>n.value=e),total:r.value,layout:`jumper, pager, ->, total, sizes`},null,8,[`page`,`size`,`total`]),l(ke,{page:t.value,"onUpdate:page":i[2]||(i[2]=e=>t.value=e),size:n.value,"onUpdate:size":i[3]||(i[3]=e=>n.value=e),total:r.value,layout:`pager`},null,8,[`page`,`size`,`total`])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaPagination from '../index.vue'

const page = ref(1)
const size = ref(10)
const total = ref(100)
<\/script>

<template>
  <div class="space-y-4">
    <FaPagination v-model:page="page" v-model:size="size" :total="total" layout="jumper, pager, ->, total, sizes" />
    <FaPagination v-model:page="page" v-model:size="size" :total="total" layout="pager" />
  </div>
</template>
`},{title:`事件`,component:Js,componentRaw:Ys}],Qs={class:`flex-col w-80`},$s=e({__name:`_basic`,setup(e){let t=h(``);return(e,n)=>(_(),O(`div`,Qs,[l(I,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入密码`,class:`w-full`},null,8,[`modelValue`]),l(Re,{password:t.value,class:`mt-2`},null,8,[`password`])]))}}),ec=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../../input/index.vue'
import FaPasswordStrength from '../index.vue'

const password = ref('')
<\/script>

<template>
  <div class="flex-col w-80">
    <FaInput v-model="password" placeholder="请输入密码" class="w-full" />
    <FaPasswordStrength :password="password" class="mt-2" />
  </div>
</template>
`,tc={class:`flex-col w-80`},nc=[{title:`基础`,component:$s,componentRaw:ec},{title:`自定义规则`,component:e({__name:`_custom-rule`,setup(e){let t=h(``),n=[{label:`长度至少为 10 个字符`,rule:e=>e.length>=10},{label:`包含大写字母`,rule:e=>/[A-Z]/.test(e)},{label:`包含数字`,rule:e=>/\d/.test(e)},{label:`包含特殊字符`,rule:e=>/[^A-Z0-9]/i.test(e)}],r=[{min:0,color:`bg-red-500`},{min:2,color:`bg-yellow-500`},{min:4,color:`bg-green-500`}];return(e,i)=>(_(),O(`div`,tc,[l(I,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),placeholder:`请输入密码`,class:`w-full`},null,8,[`modelValue`]),l(Re,{password:t.value,rules:n,"color-thresholds":r,class:`mt-2`},null,8,[`password`])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../../input/index.vue'
import FaPasswordStrength from '../index.vue'

const password = ref('')

const rules = [
  { label: '长度至少为 10 个字符', rule: (value: string) => value.length >= 10 },
  { label: '包含大写字母', rule: (value: string) => /[A-Z]/.test(value) },
  { label: '包含数字', rule: (value: string) => /\\d/.test(value) },
  { label: '包含特殊字符', rule: (value: string) => /[^A-Z0-9]/i.test(value) },
]

const colorThresholds = [
  { min: 0, color: 'bg-red-500' },
  { min: 2, color: 'bg-yellow-500' },
  { min: 4, color: 'bg-green-500' },
]
<\/script>

<template>
  <div class="flex-col w-80">
    <FaInput v-model="password" placeholder="请输入密码" class="w-full" />
    <FaPasswordStrength
      :password="password"
      :rules="rules"
      :color-thresholds="colorThresholds"
      class="mt-2"
    />
  </div>
</template>
`}],rc={class:`flex flex-wrap gap-2`},ic=e({__name:`_align`,setup(e){return(e,t)=>(_(),O(`div`,rc,[l(J,{align:`start`},{panel:E(()=>[...t[1]||(t[1]=[k(`div`,{class:`text-sm`},` 起始位置对齐 `,-1)])]),default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...t[0]||(t[0]=[i(` Start `,-1)])]),_:1})]),_:1}),l(J,{align:`center`},{panel:E(()=>[...t[3]||(t[3]=[k(`div`,{class:`text-sm`},` 居中对齐 `,-1)])]),default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...t[2]||(t[2]=[i(` Center `,-1)])]),_:1})]),_:1}),l(J,{align:`end`},{panel:E(()=>[...t[5]||(t[5]=[k(`div`,{class:`text-sm`},` 结束位置对齐 `,-1)])]),default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...t[4]||(t[4]=[i(` End `,-1)])]),_:1})]),_:1})]))}}),ac=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaPopover from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaPopover align="start">
      <FaButton variant="outline">
        Start
      </FaButton>
      <template #panel>
        <div class="text-sm">
          起始位置对齐
        </div>
      </template>
    </FaPopover>
    <FaPopover align="center">
      <FaButton variant="outline">
        Center
      </FaButton>
      <template #panel>
        <div class="text-sm">
          居中对齐
        </div>
      </template>
    </FaPopover>
    <FaPopover align="end">
      <FaButton variant="outline">
        End
      </FaButton>
      <template #panel>
        <div class="text-sm">
          结束位置对齐
        </div>
      </template>
    </FaPopover>
  </div>
</template>
`,oc=e({__name:`_basic`,setup(e){return(e,t)=>(_(),m(J,null,{panel:E(()=>[...t[1]||(t[1]=[k(`div`,{class:`flex h-30 w-60 items-center justify-center`},` 面板内容 `,-1)])]),default:E(()=>[l(M,null,{default:E(()=>[t[0]||(t[0]=i(` 浮动面板 `,-1)),l(U,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),sc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaPopover from '../index.vue'
<\/script>

<template>
  <FaPopover>
    <FaButton>
      浮动面板
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
    <template #panel>
      <div class="flex h-30 w-60 items-center justify-center">
        面板内容
      </div>
    </template>
  </FaPopover>
</template>
`,cc={class:`flex flex-wrap gap-2`},lc=e({__name:`_offset`,setup(e){return(e,t)=>(_(),O(`div`,cc,[l(J,{"side-offset":12},{panel:E(()=>[...t[1]||(t[1]=[k(`div`,{class:`text-sm`},` 与触发元素保持更大距离 `,-1)])]),default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...t[0]||(t[0]=[i(` Side offset `,-1)])]),_:1})]),_:1}),l(J,{align:`start`,"align-offset":24},{panel:E(()=>[...t[3]||(t[3]=[k(`div`,{class:`text-sm`},` 沿对齐方向偏移 `,-1)])]),default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...t[2]||(t[2]=[i(` Align offset `,-1)])]),_:1})]),_:1}),l(J,{"side-offset":12,"align-offset":-24},{panel:E(()=>[...t[5]||(t[5]=[k(`div`,{class:`text-sm`},` 同时设置两种偏移 `,-1)])]),default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...t[4]||(t[4]=[i(` Both `,-1)])]),_:1})]),_:1})]))}}),uc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaPopover from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaPopover :side-offset="12">
      <FaButton variant="outline">
        Side offset
      </FaButton>
      <template #panel>
        <div class="text-sm">
          与触发元素保持更大距离
        </div>
      </template>
    </FaPopover>
    <FaPopover align="start" :align-offset="24">
      <FaButton variant="outline">
        Align offset
      </FaButton>
      <template #panel>
        <div class="text-sm">
          沿对齐方向偏移
        </div>
      </template>
    </FaPopover>
    <FaPopover :side-offset="12" :align-offset="-24">
      <FaButton variant="outline">
        Both
      </FaButton>
      <template #panel>
        <div class="text-sm">
          同时设置两种偏移
        </div>
      </template>
    </FaPopover>
  </div>
</template>
`,dc={class:`flex flex-wrap gap-2`},fc=[{title:`基础`,component:oc,componentRaw:sc},{title:`弹出方向`,component:e({__name:`_side`,setup(e){return(e,t)=>(_(),O(`div`,dc,[l(J,{side:`top`},{panel:E(()=>[...t[1]||(t[1]=[k(`div`,{class:`text-sm`},` 从上方弹出 `,-1)])]),default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...t[0]||(t[0]=[i(` Top `,-1)])]),_:1})]),_:1}),l(J,{side:`right`},{panel:E(()=>[...t[3]||(t[3]=[k(`div`,{class:`text-sm`},` 从右侧弹出 `,-1)])]),default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...t[2]||(t[2]=[i(` Right `,-1)])]),_:1})]),_:1}),l(J,{side:`bottom`},{panel:E(()=>[...t[5]||(t[5]=[k(`div`,{class:`text-sm`},` 从下方弹出 `,-1)])]),default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...t[4]||(t[4]=[i(` Bottom `,-1)])]),_:1})]),_:1}),l(J,{side:`left`},{panel:E(()=>[...t[7]||(t[7]=[k(`div`,{class:`text-sm`},` 从左侧弹出 `,-1)])]),default:E(()=>[l(M,{variant:`outline`},{default:E(()=>[...t[6]||(t[6]=[i(` Left `,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaPopover from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaPopover side="top">
      <FaButton variant="outline">
        Top
      </FaButton>
      <template #panel>
        <div class="text-sm">
          从上方弹出
        </div>
      </template>
    </FaPopover>
    <FaPopover side="right">
      <FaButton variant="outline">
        Right
      </FaButton>
      <template #panel>
        <div class="text-sm">
          从右侧弹出
        </div>
      </template>
    </FaPopover>
    <FaPopover side="bottom">
      <FaButton variant="outline">
        Bottom
      </FaButton>
      <template #panel>
        <div class="text-sm">
          从下方弹出
        </div>
      </template>
    </FaPopover>
    <FaPopover side="left">
      <FaButton variant="outline">
        Left
      </FaButton>
      <template #panel>
        <div class="text-sm">
          从左侧弹出
        </div>
      </template>
    </FaPopover>
  </div>
</template>
`},{title:`对齐方式`,component:ic,componentRaw:ac},{title:`偏移`,component:lc,componentRaw:uc}],pc=[{title:`基础`,component:e({__name:`_basic`,setup(e){return(e,t)=>(_(),m(_e,{"model-value":33}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaProgress from '../index.vue'
<\/script>

<template>
  <FaProgress :model-value="33" />
</template>
`}],mc={class:`gap-4 grid`},hc={class:`text-sm text-muted-foreground`},gc=e({__name:`_basic`,setup(e){let t=h(`comfortable`),n=[{label:`默认`,value:`default`},{label:`舒适`,value:`comfortable`},{label:`紧凑`,value:`compact`}];return(e,r)=>(_(),O(`div`,mc,[l(Bt,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),options:n},null,8,[`modelValue`]),l(Bt,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=e=>t.value=e),options:n,class:`flex`},null,8,[`modelValue`]),k(`div`,hc,` 当前值：`+g(t.value),1)]))}}),_c=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaRadioGroup from '../index.vue'

const value = ref('comfortable')

const options = [
  { label: '默认', value: 'default' },
  { label: '舒适', value: 'comfortable' },
  { label: '紧凑', value: 'compact' },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <FaRadioGroup v-model="value" :options="options" />
    <FaRadioGroup v-model="value" :options="options" class="flex" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ value }}
    </div>
  </div>
</template>
`,vc={class:`gap-4 grid`},yc={class:`gap-1 grid min-w-0`},bc={class:`flex gap-2 items-center`},xc={class:`text-sm font-medium truncate`},Sc={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},Cc={class:`text-xs text-muted-foreground leading-5`},wc={class:`text-sm text-muted-foreground`},Tc=e({__name:`_custom-option`,setup(e){let t=h(`balanced`),n=[{label:`专注模式`,value:`focus`,badge:`录入`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,badge:`推荐`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,badge:`大屏`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(e,r)=>(_(),O(`div`,vc,[l(Bt,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),options:n,class:`gap-2 md:grid-cols-3`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:E(({option:e,checked:t,disabled:n})=>[k(`div`,{class:D([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[t?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,n&&`opacity-60`]])},[k(`div`,yc,[k(`div`,bc,[k(`span`,xc,g(e.label),1),k(`span`,Sc,g(e.badge),1)]),k(`div`,Cc,g(e.description),1)]),k(`span`,{class:D([`text-xs font-medium shrink-0`,t?`text-primary`:`text-muted-foreground`])},g(t?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),k(`div`,wc,` 当前值：`+g(t.value),1)]))}}),Ec=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaRadioGroup from '../index.vue'

const value = ref('balanced')

const options = [
  {
    label: '专注模式',
    value: 'focus',
    badge: '录入',
    description: '突出主任务，弱化辅助信息，适合录入和审批场景。',
  },
  {
    label: '平衡模式',
    value: 'balanced',
    badge: '推荐',
    description: '信息密度与可读性保持平衡，适合作为默认配置。',
  },
  {
    label: '高密度模式',
    value: 'dense',
    badge: '大屏',
    description: '在大屏中同时承载更多信息，适合运营与监控看板。',
  },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <FaRadioGroup
      v-model="value"
      :options="options"
      class="gap-2 md:grid-cols-3"
      option-class="rounded-xl border border-transparent px-1 py-1"
    >
      <template #option="{ option, checked, disabled }">
        <div
          class="px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between"
          :class="[
            checked ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40',
            disabled && 'opacity-60',
          ]"
        >
          <div class="gap-1 grid min-w-0">
            <div class="flex gap-2 items-center">
              <span class="text-sm font-medium truncate">{{ option.label }}</span>
              <span class="text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                {{ option.badge }}
              </span>
            </div>
            <div class="text-xs text-muted-foreground leading-5">
              {{ option.description }}
            </div>
          </div>
          <span class="text-xs font-medium shrink-0" :class="checked ? 'text-primary' : 'text-muted-foreground'">
            {{ checked ? '已选中' : '可选择' }}
          </span>
        </div>
      </template>
    </FaRadioGroup>
    <div class="text-sm text-muted-foreground">
      当前值：{{ value }}
    </div>
  </div>
</template>
`,Dc={class:`gap-4 grid`},Oc={class:`text-sm text-muted-foreground`},kc=[{title:`基础`,component:gc,componentRaw:_c},{title:`带描述和禁用态`,component:e({__name:`_description-disabled`,setup(e){let t=h(`growth`),n=[{label:`创业版`,value:`starter`,description:`适合 1-10 人小团队，保留核心能力。`},{label:`成长版`,value:`growth`,description:`适合多角色协作，支持审批与审计流程。`},{label:`企业版`,value:`enterprise`,description:`高级安全策略与 SSO 即将开放。`,disabled:!0}],r=x(()=>n.find(e=>e.value===t.value)?.label??``);return(e,i)=>(_(),O(`div`,Dc,[l(Bt,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:n},null,8,[`modelValue`]),k(`div`,Oc,` 已选套餐：`+g(r.value),1)]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { computed, ref } from 'vue'
import FaRadioGroup from '../index.vue'

const value = ref('growth')

const options = [
  {
    label: '创业版',
    value: 'starter',
    description: '适合 1-10 人小团队，保留核心能力。',
  },
  {
    label: '成长版',
    value: 'growth',
    description: '适合多角色协作，支持审批与审计流程。',
  },
  {
    label: '企业版',
    value: 'enterprise',
    description: '高级安全策略与 SSO 即将开放。',
    disabled: true,
  },
]

const currentLabel = computed(() =>
  options.find(option => option.value === value.value)?.label ?? '',
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaRadioGroup v-model="value" :options="options" />
    <div class="text-sm text-muted-foreground">
      已选套餐：{{ currentLabel }}
    </div>
  </div>
</template>
`},{title:`自定义选项内容`,component:Tc,componentRaw:Ec}],Ac=e({__name:`_basic`,setup(e){return(e,t)=>(_(),m(Be,{class:`border rounded-md h-72 w-48`},{default:E(()=>[(_(),O(w,null,y(20,e=>k(`div`,{key:e,class:`text-sm p-4`},g(e),1)),64))]),_:1}))}}),jc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaScrollArea from '../index.vue'
<\/script>

<template>
  <FaScrollArea class="border rounded-md h-72 w-48">
    <div v-for="item in 20" :key="item" class="text-sm p-4">
      {{ item }}
    </div>
  </FaScrollArea>
</template>
`,Mc=e({__name:`_hidden-scrollbar`,setup(e){return(e,t)=>(_(),m(Be,{scrollbar:!1,class:`border rounded-md h-72 w-48`},{default:E(()=>[(_(),O(w,null,y(20,e=>k(`div`,{key:e,class:`text-sm p-4`},g(e),1)),64))]),_:1}))}}),Nc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaScrollArea from '../index.vue'
<\/script>

<template>
  <FaScrollArea :scrollbar="false" class="border rounded-md h-72 w-48">
    <div v-for="item in 20" :key="item" class="text-sm p-4">
      {{ item }}
    </div>
  </FaScrollArea>
</template>
`,Pc={class:`flex-center-start`},Fc=[{title:`基础`,component:Ac,componentRaw:jc},{title:`水平滚动`,component:e({__name:`_horizontal`,setup(e){return(e,t)=>(_(),m(Be,{horizontal:``,class:`overscroll-contain border rounded-md w-96`},{default:E(()=>[k(`div`,Pc,[(_(),O(w,null,y(20,e=>k(`div`,{key:e,class:`text-sm flex-center shrink-0 h-16 w-16`},g(e),1)),64))])]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaScrollArea from '../index.vue'
<\/script>

<template>
  <FaScrollArea horizontal class="overscroll-contain border rounded-md w-96">
    <div class="flex-center-start">
      <div v-for="item in 20" :key="item" class="text-sm flex-center shrink-0 h-16 w-16">
        {{ item }}
      </div>
    </div>
  </FaScrollArea>
</template>
`},{title:`隐藏滚动条`,component:Mc,componentRaw:Nc},{title:`遮罩`,component:e({__name:`_mask`,setup(e){return(e,t)=>(_(),m(Be,{mask:``,class:`border rounded-md h-72 w-48`},{default:E(()=>[(_(),O(w,null,y(20,e=>k(`div`,{key:e,class:`text-sm p-4`},g(e),1)),64))]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaScrollArea from '../index.vue'
<\/script>

<template>
  <FaScrollArea mask class="border rounded-md h-72 w-48">
    <div v-for="item in 20" :key="item" class="text-sm p-4">
      {{ item }}
    </div>
  </FaScrollArea>
</template>
`}],Ic={class:`gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]`},Lc={class:`flex gap-2 col-end--1 justify-end`},Rc=e({__name:`_background`,setup(e){let t=r({keyword:``,type:`all`,creator:``,channel:`all`,visibility:`all`,reviewer:``}),n=[{label:`全部类型`,value:`all`},{label:`公告`,value:`notice`},{label:`消息`,value:`message`}],a=[{label:`全部渠道`,value:`all`},{label:`站内`,value:`site`},{label:`邮件`,value:`email`},{label:`短信`,value:`sms`}],o=[{label:`全部范围`,value:`all`},{label:`公开`,value:`public`},{label:`内部`,value:`internal`},{label:`指定用户`,value:`specific`}];return(e,r)=>(_(),m(Fe,{background:``},{default:E(({fold:e})=>[k(`div`,Ic,[l(I,{modelValue:t.keyword,"onUpdate:modelValue":r[0]||(r[0]=e=>t.keyword=e),placeholder:`搜索标题`,class:`w-full`},null,8,[`modelValue`]),l(L,{modelValue:t.type,"onUpdate:modelValue":r[1]||(r[1]=e=>t.type=e),options:n,class:`w-full`},null,8,[`modelValue`]),T(l(I,{modelValue:t.creator,"onUpdate:modelValue":r[2]||(r[2]=e=>t.creator=e),placeholder:`创建人`,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(L,{modelValue:t.channel,"onUpdate:modelValue":r[3]||(r[3]=e=>t.channel=e),options:a,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(L,{modelValue:t.visibility,"onUpdate:modelValue":r[4]||(r[4]=e=>t.visibility=e),options:o,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(I,{modelValue:t.reviewer,"onUpdate:modelValue":r[5]||(r[5]=e=>t.reviewer=e),placeholder:`审核人`,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),k(`div`,Lc,[l(M,null,{default:E(()=>[...r[6]||(r[6]=[i(`查询`,-1)])]),_:1}),l(M,{variant:`outline`},{default:E(()=>[...r[7]||(r[7]=[i(` 重置 `,-1)])]),_:1})])])]),_:1}))}}),zc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaSearchBar from '../index.vue'

const form = reactive({
  keyword: '',
  type: 'all',
  creator: '',
  channel: 'all',
  visibility: 'all',
  reviewer: '',
})

const typeOptions = [
  { label: '全部类型', value: 'all' },
  { label: '公告', value: 'notice' },
  { label: '消息', value: 'message' },
]

const channelOptions = [
  { label: '全部渠道', value: 'all' },
  { label: '站内', value: 'site' },
  { label: '邮件', value: 'email' },
  { label: '短信', value: 'sms' },
]

const visibilityOptions = [
  { label: '全部范围', value: 'all' },
  { label: '公开', value: 'public' },
  { label: '内部', value: 'internal' },
  { label: '指定用户', value: 'specific' },
]
<\/script>

<template>
  <FaSearchBar background>
    <template #default="{ fold }">
      <div class="gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        <FaInput v-model="form.keyword" placeholder="搜索标题" class="w-full" />
        <FaSelect v-model="form.type" :options="typeOptions" class="w-full" />
        <FaInput v-show="!fold" v-model="form.creator" placeholder="创建人" class="w-full" />
        <FaSelect v-show="!fold" v-model="form.channel" :options="channelOptions" class="w-full" />
        <FaSelect v-show="!fold" v-model="form.visibility" :options="visibilityOptions" class="w-full" />
        <FaInput v-show="!fold" v-model="form.reviewer" placeholder="审核人" class="w-full" />
        <div class="flex gap-2 col-end--1 justify-end">
          <FaButton>查询</FaButton>
          <FaButton variant="outline">
            重置
          </FaButton>
        </div>
      </div>
    </template>
  </FaSearchBar>
</template>
`,Bc={class:`gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]`},Vc={class:`flex gap-2 col-end--1 justify-end`},Hc=e({__name:`_basic`,setup(e){let t=r({keyword:``,status:`all`,department:``,role:`all`,source:`all`,creator:``}),n=[{label:`全部状态`,value:`all`},{label:`启用`,value:`enabled`},{label:`禁用`,value:`disabled`}],a=[{label:`全部角色`,value:`all`},{label:`管理员`,value:`admin`},{label:`运营`,value:`operator`},{label:`访客`,value:`guest`}],o=[{label:`全部来源`,value:`all`},{label:`后台创建`,value:`admin`},{label:`用户注册`,value:`register`},{label:`批量导入`,value:`import`}];return(e,r)=>(_(),m(Fe,null,{default:E(({fold:e})=>[k(`div`,Bc,[l(I,{modelValue:t.keyword,"onUpdate:modelValue":r[0]||(r[0]=e=>t.keyword=e),placeholder:`搜索用户名`,class:`w-full`},null,8,[`modelValue`]),l(L,{modelValue:t.status,"onUpdate:modelValue":r[1]||(r[1]=e=>t.status=e),options:n,class:`w-full`},null,8,[`modelValue`]),T(l(I,{modelValue:t.department,"onUpdate:modelValue":r[2]||(r[2]=e=>t.department=e),placeholder:`部门`,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(L,{modelValue:t.role,"onUpdate:modelValue":r[3]||(r[3]=e=>t.role=e),options:a,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(L,{modelValue:t.source,"onUpdate:modelValue":r[4]||(r[4]=e=>t.source=e),options:o,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(I,{modelValue:t.creator,"onUpdate:modelValue":r[5]||(r[5]=e=>t.creator=e),placeholder:`创建人`,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),k(`div`,Vc,[l(M,null,{default:E(()=>[...r[6]||(r[6]=[i(`查询`,-1)])]),_:1}),l(M,{variant:`outline`},{default:E(()=>[...r[7]||(r[7]=[i(` 重置 `,-1)])]),_:1})])])]),_:1}))}}),Uc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaSearchBar from '../index.vue'

const form = reactive({
  keyword: '',
  status: 'all',
  department: '',
  role: 'all',
  source: 'all',
  creator: '',
})

const statusOptions = [
  { label: '全部状态', value: 'all' },
  { label: '启用', value: 'enabled' },
  { label: '禁用', value: 'disabled' },
]

const roleOptions = [
  { label: '全部角色', value: 'all' },
  { label: '管理员', value: 'admin' },
  { label: '运营', value: 'operator' },
  { label: '访客', value: 'guest' },
]

const sourceOptions = [
  { label: '全部来源', value: 'all' },
  { label: '后台创建', value: 'admin' },
  { label: '用户注册', value: 'register' },
  { label: '批量导入', value: 'import' },
]
<\/script>

<template>
  <FaSearchBar>
    <template #default="{ fold }">
      <div class="gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        <FaInput v-model="form.keyword" placeholder="搜索用户名" class="w-full" />
        <FaSelect v-model="form.status" :options="statusOptions" class="w-full" />
        <FaInput v-show="!fold" v-model="form.department" placeholder="部门" class="w-full" />
        <FaSelect v-show="!fold" v-model="form.role" :options="roleOptions" class="w-full" />
        <FaSelect v-show="!fold" v-model="form.source" :options="sourceOptions" class="w-full" />
        <FaInput v-show="!fold" v-model="form.creator" placeholder="创建人" class="w-full" />
        <div class="flex gap-2 col-end--1 justify-end">
          <FaButton>查询</FaButton>
          <FaButton variant="outline">
            重置
          </FaButton>
        </div>
      </div>
    </template>
  </FaSearchBar>
</template>
`,Wc={class:`gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]`},Gc={class:`flex gap-2 col-end--1 justify-end`},Kc=e({__name:`_custom-trigger`,setup(e){let t=r({keyword:``,status:`all`,tag:``,column:`all`,author:``,reviewer:``,publishTime:`all`}),n=[{label:`全部状态`,value:`all`},{label:`已发布`,value:`published`},{label:`草稿`,value:`draft`}],a=[{label:`全部栏目`,value:`all`},{label:`产品动态`,value:`product`},{label:`帮助中心`,value:`help`},{label:`活动公告`,value:`campaign`}],o=[{label:`发布时间`,value:`all`},{label:`今天`,value:`today`},{label:`近 7 天`,value:`week`},{label:`近 30 天`,value:`month`}];return(e,r)=>(_(),m(Fe,{"show-toggle":!1},{default:E(({fold:e,toggle:s})=>[k(`div`,Wc,[l(I,{modelValue:t.keyword,"onUpdate:modelValue":r[0]||(r[0]=e=>t.keyword=e),placeholder:`搜索文章`,class:`w-full`},null,8,[`modelValue`]),l(L,{modelValue:t.status,"onUpdate:modelValue":r[1]||(r[1]=e=>t.status=e),options:n,class:`w-full`},null,8,[`modelValue`]),T(l(I,{modelValue:t.tag,"onUpdate:modelValue":r[2]||(r[2]=e=>t.tag=e),placeholder:`标签`,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(L,{modelValue:t.column,"onUpdate:modelValue":r[3]||(r[3]=e=>t.column=e),options:a,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(I,{modelValue:t.author,"onUpdate:modelValue":r[4]||(r[4]=e=>t.author=e),placeholder:`作者`,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(I,{modelValue:t.reviewer,"onUpdate:modelValue":r[5]||(r[5]=e=>t.reviewer=e),placeholder:`审核人`,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(L,{modelValue:t.publishTime,"onUpdate:modelValue":r[6]||(r[6]=e=>t.publishTime=e),options:o,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),k(`div`,Gc,[l(M,null,{default:E(()=>[...r[7]||(r[7]=[i(`查询`,-1)])]),_:1}),l(M,{variant:`outline`},{default:E(()=>[...r[8]||(r[8]=[i(` 重置 `,-1)])]),_:1}),l(M,{variant:`ghost`,onClick:s},{default:E(()=>[i(g(e?`展开`:`收起`)+` `,1),l(U,{name:e?`i-lucide:chevron-down`:`i-lucide:chevron-up`},null,8,[`name`])]),_:2},1032,[`onClick`])])])]),_:1}))}}),qc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive } from 'vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaSearchBar from '../index.vue'

const form = reactive({
  keyword: '',
  status: 'all',
  tag: '',
  column: 'all',
  author: '',
  reviewer: '',
  publishTime: 'all',
})

const statusOptions = [
  { label: '全部状态', value: 'all' },
  { label: '已发布', value: 'published' },
  { label: '草稿', value: 'draft' },
]

const columnOptions = [
  { label: '全部栏目', value: 'all' },
  { label: '产品动态', value: 'product' },
  { label: '帮助中心', value: 'help' },
  { label: '活动公告', value: 'campaign' },
]

const publishTimeOptions = [
  { label: '发布时间', value: 'all' },
  { label: '今天', value: 'today' },
  { label: '近 7 天', value: 'week' },
  { label: '近 30 天', value: 'month' },
]
<\/script>

<template>
  <FaSearchBar :show-toggle="false">
    <template #default="{ fold, toggle }">
      <div class="gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        <FaInput v-model="form.keyword" placeholder="搜索文章" class="w-full" />
        <FaSelect v-model="form.status" :options="statusOptions" class="w-full" />
        <FaInput v-show="!fold" v-model="form.tag" placeholder="标签" class="w-full" />
        <FaSelect v-show="!fold" v-model="form.column" :options="columnOptions" class="w-full" />
        <FaInput v-show="!fold" v-model="form.author" placeholder="作者" class="w-full" />
        <FaInput v-show="!fold" v-model="form.reviewer" placeholder="审核人" class="w-full" />
        <FaSelect v-show="!fold" v-model="form.publishTime" :options="publishTimeOptions" class="w-full" />
        <div class="flex gap-2 col-end--1 justify-end">
          <FaButton>查询</FaButton>
          <FaButton variant="outline">
            重置
          </FaButton>
          <FaButton variant="ghost" @click="toggle">
            {{ fold ? '展开' : '收起' }}
            <FaIcon :name="fold ? 'i-lucide:chevron-down' : 'i-lucide:chevron-up'" />
          </FaButton>
        </div>
      </div>
    </template>
  </FaSearchBar>
</template>
`,Jc={class:`gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]`},Yc={class:`flex gap-2 col-end--1 justify-end`},Xc=[{title:`基础`,component:Hc,componentRaw:Uc},{title:`默认展开`,component:e({__name:`_expanded`,setup(e){let t=r({keyword:``,status:`all`,owner:``,priority:`all`,category:`all`,project:``,participant:``}),n=u(!1),a=[{label:`全部状态`,value:`all`},{label:`待处理`,value:`pending`},{label:`已完成`,value:`done`}],o=[{label:`全部优先级`,value:`all`},{label:`高`,value:`high`},{label:`中`,value:`medium`},{label:`低`,value:`low`}],s=[{label:`全部分类`,value:`all`},{label:`需求`,value:`feature`},{label:`缺陷`,value:`bug`},{label:`优化`,value:`improvement`}];return(e,r)=>(_(),m(Fe,{fold:n.value,"onUpdate:fold":r[7]||(r[7]=e=>n.value=e)},{default:E(({fold:e})=>[k(`div`,Jc,[l(I,{modelValue:t.keyword,"onUpdate:modelValue":r[0]||(r[0]=e=>t.keyword=e),placeholder:`搜索任务`,class:`w-full`},null,8,[`modelValue`]),l(L,{modelValue:t.status,"onUpdate:modelValue":r[1]||(r[1]=e=>t.status=e),options:a,class:`w-full`},null,8,[`modelValue`]),T(l(I,{modelValue:t.owner,"onUpdate:modelValue":r[2]||(r[2]=e=>t.owner=e),placeholder:`负责人`,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(L,{modelValue:t.priority,"onUpdate:modelValue":r[3]||(r[3]=e=>t.priority=e),options:o,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(L,{modelValue:t.category,"onUpdate:modelValue":r[4]||(r[4]=e=>t.category=e),options:s,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(I,{modelValue:t.project,"onUpdate:modelValue":r[5]||(r[5]=e=>t.project=e),placeholder:`所属项目`,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),T(l(I,{modelValue:t.participant,"onUpdate:modelValue":r[6]||(r[6]=e=>t.participant=e),placeholder:`参与人`,class:`w-full`},null,8,[`modelValue`]),[[S,!e]]),k(`div`,Yc,[l(M,null,{default:E(()=>[...r[8]||(r[8]=[i(`查询`,-1)])]),_:1}),l(M,{variant:`outline`},{default:E(()=>[...r[9]||(r[9]=[i(` 重置 `,-1)])]),_:1})])])]),_:1},8,[`fold`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive, shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaSearchBar from '../index.vue'

const form = reactive({
  keyword: '',
  status: 'all',
  owner: '',
  priority: 'all',
  category: 'all',
  project: '',
  participant: '',
})

const fold = shallowRef(false)

const statusOptions = [
  { label: '全部状态', value: 'all' },
  { label: '待处理', value: 'pending' },
  { label: '已完成', value: 'done' },
]

const priorityOptions = [
  { label: '全部优先级', value: 'all' },
  { label: '高', value: 'high' },
  { label: '中', value: 'medium' },
  { label: '低', value: 'low' },
]

const categoryOptions = [
  { label: '全部分类', value: 'all' },
  { label: '需求', value: 'feature' },
  { label: '缺陷', value: 'bug' },
  { label: '优化', value: 'improvement' },
]
<\/script>

<template>
  <FaSearchBar v-model:fold="fold">
    <template #default="{ fold: isFold }">
      <div class="gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        <FaInput v-model="form.keyword" placeholder="搜索任务" class="w-full" />
        <FaSelect v-model="form.status" :options="statusOptions" class="w-full" />
        <FaInput v-show="!isFold" v-model="form.owner" placeholder="负责人" class="w-full" />
        <FaSelect v-show="!isFold" v-model="form.priority" :options="priorityOptions" class="w-full" />
        <FaSelect v-show="!isFold" v-model="form.category" :options="categoryOptions" class="w-full" />
        <FaInput v-show="!isFold" v-model="form.project" placeholder="所属项目" class="w-full" />
        <FaInput v-show="!isFold" v-model="form.participant" placeholder="参与人" class="w-full" />
        <div class="flex gap-2 col-end--1 justify-end">
          <FaButton>查询</FaButton>
          <FaButton variant="outline">
            重置
          </FaButton>
        </div>
      </div>
    </template>
  </FaSearchBar>
</template>
`},{title:`背景`,component:Rc,componentRaw:zc},{title:`自定义触发按钮`,component:Kc,componentRaw:qc}],Zc=e({__name:`_basic`,setup(e){let t=h(`1`),n=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,r)=>(_(),m(L,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),options:n},null,8,[`modelValue`]))}}),Qc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSelect from '../index.vue'

const select = ref('1')

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
<\/script>

<template>
  <FaSelect v-model="select" :options="options" />
</template>
`,$c={class:`space-y-2`},el=e({__name:`_disabled`,setup(e){let t=h(`1`),n=h(`1`),r=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`,disabled:!0},{label:`Option 3`,value:`3`}];return(e,i)=>(_(),O(`div`,$c,[l(L,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:r,disabled:``},null,8,[`modelValue`]),l(L,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=e=>n.value=e),options:r},null,8,[`modelValue`])]))}}),tl=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSelect from '../index.vue'

const disabledSelect = ref('1')
const optionDisabledSelect = ref('1')

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2', disabled: true },
  { label: 'Option 3', value: '3' },
]
<\/script>

<template>
  <div class="space-y-2">
    <FaSelect v-model="disabledSelect" :options="options" disabled />
    <FaSelect v-model="optionDisabledSelect" :options="options" />
  </div>
</template>
`,nl=e({__name:`_group`,setup(e){let t=h(`1`),n=[{label:`Group 1`,options:[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`}]},{label:`Group 2`,options:[{label:`Option 3`,value:`3`},{label:`Option 4`,value:`4`}]}];return(e,r)=>(_(),m(L,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),options:n},null,8,[`modelValue`]))}}),rl=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSelect from '../index.vue'

const select = ref('1')

const options = [
  {
    label: 'Group 1',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
  {
    label: 'Group 2',
    options: [
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
    ],
  },
]
<\/script>

<template>
  <FaSelect v-model="select" :options="options" />
</template>
`,il=e({__name:`_multiple`,setup(e){let t=h([]),n=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,r)=>(_(),m(L,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),options:n,multiple:``},null,8,[`modelValue`]))}}),al=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSelect from '../index.vue'

const select = ref<unknown[]>([])

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
<\/script>

<template>
  <FaSelect
    v-model="select"
    :options="options"
    multiple
  />
</template>
`,ol={class:`space-y-2`},sl=[{title:`基础`,component:Zc,componentRaw:Qc},{title:`组`,component:nl,componentRaw:rl},{title:`多选`,component:il,componentRaw:al},{title:`定位模式`,component:e({__name:`_position`,setup(e){let t=h(`2`),n=h(`2`),r=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,i)=>(_(),O(`div`,ol,[l(L,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:r,position:`popper`},null,8,[`modelValue`]),l(L,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=e=>n.value=e),options:r,position:`item-aligned`},null,8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSelect from '../index.vue'

const popperValue = ref('2')
const itemAlignedValue = ref('2')

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
<\/script>

<template>
  <div class="space-y-2">
    <FaSelect
      v-model="popperValue"
      :options="options"
      position="popper"
    />
    <FaSelect
      v-model="itemAlignedValue"
      :options="options"
      position="item-aligned"
    />
  </div>
</template>
`},{title:`禁用`,component:el,componentRaw:tl}],cl={class:`space-y-6`},ll=e({__name:`_alignment`,setup(e){let t=h([30]),n=h([30]);return(e,r)=>(_(),O(`div`,cl,[l(Y,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),"thumb-alignment":`contain`},null,8,[`modelValue`]),l(Y,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e),"thumb-alignment":`overflow`},null,8,[`modelValue`])]))}}),ul=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const containValue = ref<number[]>([30])
const overflowValue = ref<number[]>([30])
<\/script>

<template>
  <div class="space-y-6">
    <FaSlider v-model="containValue" thumb-alignment="contain" />
    <FaSlider v-model="overflowValue" thumb-alignment="overflow" />
  </div>
</template>
`,dl=e({__name:`_basic`,setup(e){let t=h([30]);return(e,n)=>(_(),m(Y,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]))}}),fl=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([30])
<\/script>

<template>
  <FaSlider v-model="value" />
</template>
`,pl={class:`space-y-6`},ml=e({__name:`_inverted`,setup(e){let t=h([30]),n=h([30]);return(e,r)=>(_(),O(`div`,pl,[l(Y,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e)},null,8,[`modelValue`]),l(Y,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e),inverted:``},null,8,[`modelValue`])]))}}),hl=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const normalValue = ref<number[]>([30])
const invertedValue = ref<number[]>([30])
<\/script>

<template>
  <div class="space-y-6">
    <FaSlider v-model="normalValue" />
    <FaSlider v-model="invertedValue" inverted />
  </div>
</template>
`,gl=e({__name:`_range`,setup(e){let t=h([40]);return(e,n)=>(_(),m(Y,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),min:20,max:80},null,8,[`modelValue`]))}}),_l=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([40])
<\/script>

<template>
  <FaSlider v-model="value" :min="20" :max="80" />
</template>
`,vl=e({__name:`_step`,setup(e){let t=h([50]);return(e,n)=>(_(),m(Y,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),step:10},null,8,[`modelValue`]))}}),yl=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([50])
<\/script>

<template>
  <FaSlider v-model="value" :step="10" />
</template>
`,bl={class:`space-y-6`},xl=[{title:`基础`,component:dl,componentRaw:fl},{title:`垂直`,component:e({__name:`_vertical`,setup(e){let t=h([30]);return(e,n)=>(_(),m(Y,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),orientation:`vertical`,class:`data-[orientation=vertical]:h-100`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([30])
<\/script>

<template>
  <FaSlider v-model="value" orientation="vertical" class="data-[orientation=vertical]:h-100" />
</template>
`},{title:`反转`,component:ml,componentRaw:hl},{title:`最大值/最小值`,component:gl,componentRaw:_l},{title:`步长`,component:vl,componentRaw:yl},{title:`对齐方式`,component:ll,componentRaw:ul},{title:`提示`,component:e({__name:`_tooltip`,setup(e){let t=h([30]),n=h([70]);return(e,r)=>(_(),O(`div`,bl,[l(Y,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e)},null,8,[`modelValue`]),l(Y,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e),tooltip:!1},null,8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const withTooltipValue = ref<number[]>([30])
const withoutTooltipValue = ref<number[]>([70])
<\/script>

<template>
  <div class="space-y-6">
    <FaSlider v-model="withTooltipValue" />
    <FaSlider v-model="withoutTooltipValue" :tooltip="false" />
  </div>
</template>
`}],Sl=e({__name:`_basic`,setup(e){let t=h(!1);return(e,n)=>(_(),m(Ce,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]))}}),Cl=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSwitch from '../index.vue'

const checked = ref(false)
<\/script>

<template>
  <FaSwitch v-model="checked" />
</template>
`,wl=e({__name:`_callback`,setup(e){let t=h(!1),n=He();function r(){return new Promise(e=>{n.confirm({title:`确认信息`,content:`确认要切换当前状态吗？`,onConfirm:()=>{e(!0)},onCancel:()=>{e(!1)}})})}return(e,n)=>(_(),m(Ce,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),"before-change":r},null,8,[`modelValue`]))}}),Tl=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import { useModal } from '../../modal'
import FaSwitch from '../index.vue'

const checked = ref(false)
const modal = useModal()

function handleBeforeChange() {
  return new Promise<boolean>((resolve) => {
    modal.confirm({
      title: '确认信息',
      content: '确认要切换当前状态吗？',
      onConfirm: () => {
        resolve(true)
      },
      onCancel: () => {
        resolve(false)
      },
    })
  })
}
<\/script>

<template>
  <FaSwitch v-model="checked" :before-change="handleBeforeChange" />
</template>
`,El={class:`flex gap-4`},Dl=[{title:`基础`,component:Sl,componentRaw:Cl},{title:`图标`,component:e({__name:`_icon`,setup(e){let t=h(!1);return(e,n)=>(_(),m(Ce,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),"on-icon":`ri:sun-line`,"off-icon":`ri:moon-line`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSwitch from '../index.vue'

const checked = ref(false)
<\/script>

<template>
  <FaSwitch v-model="checked" on-icon="ri:sun-line" off-icon="ri:moon-line" />
</template>
`},{title:`禁用`,component:e({__name:`_disabled`,setup(e){let t=h(!1),n=h(!0);return(e,r)=>(_(),O(`div`,El,[l(Ce,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),disabled:``},null,8,[`modelValue`]),l(Ce,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e),disabled:``},null,8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSwitch from '../index.vue'

const off = ref(false)
const on = ref(true)
<\/script>

<template>
  <div class="flex gap-4">
    <FaSwitch v-model="off" disabled />
    <FaSwitch v-model="on" disabled />
  </div>
</template>
`},{title:`回调`,component:wl,componentRaw:Tl}],Ol=e({__name:`_basic`,setup(e){let t=[{accessorKey:`title`,header:`任务`},{accessorKey:`owner`,header:`负责人`},{accessorKey:`status`,header:`状态`},{accessorKey:`updatedAt`,header:`更新时间`}],n=[{id:`t-001`,title:`完善组件文档`,owner:`林舟`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`同步设计变量`,owner:`陈念`,status:`待处理`,updatedAt:`2026-05-22`},{id:`t-003`,title:`整理示例数据`,owner:`周衡`,status:`已完成`,updatedAt:`2026-05-21`},{id:`t-004`,title:`回归交互状态`,owner:`沈若`,status:`进行中`,updatedAt:`2026-05-20`}];return(e,r)=>{let i=V;return _(),m(i,{columns:t,data:n})}}}),kl=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Task {
  id: string
  title: string
  owner: string
  status: string
  updatedAt: string
}

const columns: TableColumn<Task>[] = [
  {
    accessorKey: 'title',
    header: '任务',
  },
  {
    accessorKey: 'owner',
    header: '负责人',
  },
  {
    accessorKey: 'status',
    header: '状态',
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
  },
]

const data: Task[] = [
  { id: 't-001', title: '完善组件文档', owner: '林舟', status: '进行中', updatedAt: '2026-05-23' },
  { id: 't-002', title: '同步设计变量', owner: '陈念', status: '待处理', updatedAt: '2026-05-22' },
  { id: 't-003', title: '整理示例数据', owner: '周衡', status: '已完成', updatedAt: '2026-05-21' },
  { id: 't-004', title: '回归交互状态', owner: '沈若', status: '进行中', updatedAt: '2026-05-20' },
]
<\/script>

<template>
  <FaTable :columns :data />
</template>
`,Al=e({__name:`_border`,setup(e){let t=[{accessorKey:`name`,header:`项目`,width:220},{accessorKey:`owner`,header:`负责人`,width:120},{accessorKey:`progress`,header:`进度`,width:120,align:`right`},{accessorKey:`status`,header:`状态`,width:120}],n=[{id:`p-001`,name:`权限策略整理`,owner:`林舟`,progress:`72%`,status:`进行中`},{id:`p-002`,name:`表格示例拆分`,owner:`陈念`,progress:`100%`,status:`已完成`},{id:`p-003`,name:`数据导出流程`,owner:`周衡`,progress:`48%`,status:`进行中`},{id:`p-004`,name:`菜单体验优化`,owner:`沈若`,progress:`16%`,status:`待处理`}];return(e,r)=>{let i=V;return _(),m(i,{border:``,"row-key":`id`,columns:t,data:n})}}}),jl=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Project {
  id: string
  name: string
  owner: string
  progress: string
  status: string
}

const columns: TableColumn<Project>[] = [
  {
    accessorKey: 'name',
    header: '项目',
    width: 220,
  },
  {
    accessorKey: 'owner',
    header: '负责人',
    width: 120,
  },
  {
    accessorKey: 'progress',
    header: '进度',
    width: 120,
    align: 'right',
  },
  {
    accessorKey: 'status',
    header: '状态',
    width: 120,
  },
]

const data: Project[] = [
  { id: 'p-001', name: '权限策略整理', owner: '林舟', progress: '72%', status: '进行中' },
  { id: 'p-002', name: '表格示例拆分', owner: '陈念', progress: '100%', status: '已完成' },
  { id: 'p-003', name: '数据导出流程', owner: '周衡', progress: '48%', status: '进行中' },
  { id: 'p-004', name: '菜单体验优化', owner: '沈若', progress: '16%', status: '待处理' },
]
<\/script>

<template>
  <FaTable border row-key="id" :columns :data />
</template>
`,Ml=e({__name:`_column-visibility`,setup(e){let t=[{accessorKey:`title`,header:`任务`,enableHiding:!1},{accessorKey:`owner`,header:`负责人`},{accessorKey:`priority`,header:`优先级`},{accessorKey:`status`,header:`状态`},{accessorKey:`updatedAt`,header:`更新时间`}],n=[{id:`t-001`,title:`完善组件文档`,owner:`林舟`,priority:`中`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`同步设计变量`,owner:`陈念`,priority:`高`,status:`待处理`,updatedAt:`2026-05-22`},{id:`t-003`,title:`整理示例数据`,owner:`周衡`,priority:`低`,status:`已完成`,updatedAt:`2026-05-21`},{id:`t-004`,title:`回归交互状态`,owner:`沈若`,priority:`中`,status:`进行中`,updatedAt:`2026-05-20`}];return(e,r)=>{let i=V;return _(),m(i,{"column-visibility":``,columns:t,data:n})}}}),Nl=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Task {
  id: string
  title: string
  owner: string
  priority: string
  status: string
  updatedAt: string
}

const columns: TableColumn<Task>[] = [
  {
    accessorKey: 'title',
    header: '任务',
    enableHiding: false,
  },
  {
    accessorKey: 'owner',
    header: '负责人',
  },
  {
    accessorKey: 'priority',
    header: '优先级',
  },
  {
    accessorKey: 'status',
    header: '状态',
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
  },
]

const data: Task[] = [
  { id: 't-001', title: '完善组件文档', owner: '林舟', priority: '中', status: '进行中', updatedAt: '2026-05-23' },
  { id: 't-002', title: '同步设计变量', owner: '陈念', priority: '高', status: '待处理', updatedAt: '2026-05-22' },
  { id: 't-003', title: '整理示例数据', owner: '周衡', priority: '低', status: '已完成', updatedAt: '2026-05-21' },
  { id: 't-004', title: '回归交互状态', owner: '沈若', priority: '中', status: '进行中', updatedAt: '2026-05-20' },
]
<\/script>

<template>
  <FaTable column-visibility :columns :data />
</template>
`,Pl=e({__name:`_custom-column`,setup(e){let t=[{accessorKey:`name`,label:`指标名称`,width:180,cellClass:`font-medium bg-amber-200/80 dark:bg-amber-500/35`},{accessorKey:`today`,header:`今日`,align:`right`,width:120,cellClass:`tabular-nums`},{accessorKey:`yesterday`,header:`昨日`,align:`right`,width:120,cellClass:`tabular-nums text-muted-foreground`},{accessorKey:`trend`,title:`变化`,align:`right`,width:120,headerClass:`text-primary`,cellClass:({row:e})=>e.original.trend.startsWith(`+`)?`text-success font-medium tabular-nums`:`text-destructive font-medium tabular-nums`}],n=[{id:`m-001`,name:`访问量`,today:`18,420`,yesterday:`16,280`,trend:`+13.1%`},{id:`m-002`,name:`转化率`,today:`8.6%`,yesterday:`9.1%`,trend:`-0.5%`},{id:`m-003`,name:`新增客户`,today:`326`,yesterday:`304`,trend:`+7.2%`}];return(e,r)=>{let i=V;return _(),m(i,{"row-key":`id`,columns:t,data:n})}}}),Fl=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Metric {
  id: string
  name: string
  today: string
  yesterday: string
  trend: string
}

const columns: TableColumn<Metric>[] = [
  {
    accessorKey: 'name',
    label: '指标名称',
    width: 180,
    cellClass: 'font-medium bg-amber-200/80 dark:bg-amber-500/35',
  },
  {
    accessorKey: 'today',
    header: '今日',
    align: 'right',
    width: 120,
    cellClass: 'tabular-nums',
  },
  {
    accessorKey: 'yesterday',
    header: '昨日',
    align: 'right',
    width: 120,
    cellClass: 'tabular-nums text-muted-foreground',
  },
  {
    accessorKey: 'trend',
    title: '变化',
    align: 'right',
    width: 120,
    headerClass: 'text-primary',
    cellClass: ({ row }) => row.original.trend.startsWith('+')
      ? 'text-success font-medium tabular-nums'
      : 'text-destructive font-medium tabular-nums',
  },
]

const data: Metric[] = [
  { id: 'm-001', name: '访问量', today: '18,420', yesterday: '16,280', trend: '+13.1%' },
  { id: 'm-002', name: '转化率', today: '8.6%', yesterday: '9.1%', trend: '-0.5%' },
  { id: 'm-003', name: '新增客户', today: '326', yesterday: '304', trend: '+7.2%' },
]
<\/script>

<template>
  <FaTable row-key="id" :columns :data />
</template>
`,Il=e({__name:`_fixed-column`,setup(e){let t=[{accessorKey:`name`,header:`项目`,fixed:`left`,width:220},{accessorKey:`owner`,header:`负责人`,fixed:`left`,width:120},{accessorKey:`department`,header:`所属部门`,width:160},{accessorKey:`priority`,header:`优先级`,width:120},{accessorKey:`status`,header:`状态`,width:120},{accessorKey:`deadline`,header:`截止日期`,width:140},{accessorKey:`budget`,header:`预算`,align:`right`,fixed:`right`,width:120},{accessorKey:`nextAction`,header:`下一步`,align:`right`,fixed:`right`,width:140}],n=[{id:`p-1001`,name:`权限中心改造`,owner:`林舟`,department:`基础平台部`,priority:`高`,status:`进行中`,deadline:`2026-06-12`,budget:`¥84,000`,nextAction:`查看详情`},{id:`p-1002`,name:`移动端适配`,owner:`陈念`,department:`体验技术部`,priority:`中`,status:`评审中`,deadline:`2026-06-18`,budget:`¥56,000`,nextAction:`排期`},{id:`p-1003`,name:`数据看板升级`,owner:`周衡`,department:`数据产品部`,priority:`中`,status:`已完成`,deadline:`2026-05-30`,budget:`¥126,000`,nextAction:`复盘`}];return(e,r)=>{let i=V;return _(),m(i,{"row-key":`id`,"table-class":`min-w-[1160px]`,columns:t,data:n})}}}),Ll=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Project {
  id: string
  name: string
  owner: string
  department: string
  priority: string
  status: string
  deadline: string
  budget: string
  nextAction: string
}

const columns: TableColumn<Project>[] = [
  {
    accessorKey: 'name',
    header: '项目',
    fixed: 'left',
    width: 220,
  },
  {
    accessorKey: 'owner',
    header: '负责人',
    fixed: 'left',
    width: 120,
  },
  {
    accessorKey: 'department',
    header: '所属部门',
    width: 160,
  },
  {
    accessorKey: 'priority',
    header: '优先级',
    width: 120,
  },
  {
    accessorKey: 'status',
    header: '状态',
    width: 120,
  },
  {
    accessorKey: 'deadline',
    header: '截止日期',
    width: 140,
  },
  {
    accessorKey: 'budget',
    header: '预算',
    align: 'right',
    fixed: 'right',
    width: 120,
  },
  {
    accessorKey: 'nextAction',
    header: '下一步',
    align: 'right',
    fixed: 'right',
    width: 140,
  },
]

const data: Project[] = [
  {
    id: 'p-1001',
    name: '权限中心改造',
    owner: '林舟',
    department: '基础平台部',
    priority: '高',
    status: '进行中',
    deadline: '2026-06-12',
    budget: '¥84,000',
    nextAction: '查看详情',
  },
  {
    id: 'p-1002',
    name: '移动端适配',
    owner: '陈念',
    department: '体验技术部',
    priority: '中',
    status: '评审中',
    deadline: '2026-06-18',
    budget: '¥56,000',
    nextAction: '排期',
  },
  {
    id: 'p-1003',
    name: '数据看板升级',
    owner: '周衡',
    department: '数据产品部',
    priority: '中',
    status: '已完成',
    deadline: '2026-05-30',
    budget: '¥126,000',
    nextAction: '复盘',
  },
]
<\/script>

<template>
  <FaTable
    row-key="id"
    table-class="min-w-[1160px]"
    :columns
    :data
  />
</template>
`,Rl=e({__name:`_fixed-height`,setup(e){let t=[{accessorKey:`event`,header:`事件`,width:180},{accessorKey:`operator`,header:`操作人`,width:120},{accessorKey:`result`,header:`结果`,width:120},{accessorKey:`time`,header:`时间`,width:180}],n=[{id:`l-001`,event:`创建项目`,operator:`林舟`,result:`成功`,time:`2026-05-23 09:12`},{id:`l-002`,event:`提交审批`,operator:`陈念`,result:`成功`,time:`2026-05-23 09:26`},{id:`l-003`,event:`同步成员`,operator:`周衡`,result:`成功`,time:`2026-05-23 09:41`},{id:`l-004`,event:`导出报表`,operator:`沈若`,result:`排队中`,time:`2026-05-23 10:05`},{id:`l-005`,event:`更新预算`,operator:`梁一`,result:`成功`,time:`2026-05-23 10:18`},{id:`l-006`,event:`变更负责人`,operator:`许知`,result:`成功`,time:`2026-05-23 10:39`},{id:`l-007`,event:`归档任务`,operator:`林舟`,result:`成功`,time:`2026-05-23 11:02`},{id:`l-008`,event:`生成快照`,operator:`陈念`,result:`成功`,time:`2026-05-23 11:27`},{id:`l-009`,event:`刷新缓存`,operator:`周衡`,result:`成功`,time:`2026-05-23 11:48`},{id:`l-010`,event:`权限校验`,operator:`沈若`,result:`成功`,time:`2026-05-23 12:13`},{id:`l-011`,event:`发布版本`,operator:`梁一`,result:`成功`,time:`2026-05-23 12:45`},{id:`l-012`,event:`关闭工单`,operator:`许知`,result:`成功`,time:`2026-05-23 13:08`}];return(e,r)=>{let i=V;return _(),m(i,{class:`h-80`,"row-key":`id`,columns:t,data:n})}}}),zl=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface LogRecord {
  id: string
  event: string
  operator: string
  result: string
  time: string
}

const columns: TableColumn<LogRecord>[] = [
  {
    accessorKey: 'event',
    header: '事件',
    width: 180,
  },
  {
    accessorKey: 'operator',
    header: '操作人',
    width: 120,
  },
  {
    accessorKey: 'result',
    header: '结果',
    width: 120,
  },
  {
    accessorKey: 'time',
    header: '时间',
    width: 180,
  },
]

const data: LogRecord[] = [
  { id: 'l-001', event: '创建项目', operator: '林舟', result: '成功', time: '2026-05-23 09:12' },
  { id: 'l-002', event: '提交审批', operator: '陈念', result: '成功', time: '2026-05-23 09:26' },
  { id: 'l-003', event: '同步成员', operator: '周衡', result: '成功', time: '2026-05-23 09:41' },
  { id: 'l-004', event: '导出报表', operator: '沈若', result: '排队中', time: '2026-05-23 10:05' },
  { id: 'l-005', event: '更新预算', operator: '梁一', result: '成功', time: '2026-05-23 10:18' },
  { id: 'l-006', event: '变更负责人', operator: '许知', result: '成功', time: '2026-05-23 10:39' },
  { id: 'l-007', event: '归档任务', operator: '林舟', result: '成功', time: '2026-05-23 11:02' },
  { id: 'l-008', event: '生成快照', operator: '陈念', result: '成功', time: '2026-05-23 11:27' },
  { id: 'l-009', event: '刷新缓存', operator: '周衡', result: '成功', time: '2026-05-23 11:48' },
  { id: 'l-010', event: '权限校验', operator: '沈若', result: '成功', time: '2026-05-23 12:13' },
  { id: 'l-011', event: '发布版本', operator: '梁一', result: '成功', time: '2026-05-23 12:45' },
  { id: 'l-012', event: '关闭工单', operator: '许知', result: '成功', time: '2026-05-23 13:08' },
]
<\/script>

<template>
  <FaTable
    class="h-80"
    row-key="id"
    :columns
    :data
  />
</template>
`,Bl={class:`space-y-4`},Vl={class:`text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted`},Hl=e({__name:`_multiple-selection`,setup(e){let t=[{type:`selection`,fixed:`left`,width:50,disabled:e=>e.locked},{accessorKey:`name`,header:`成员`},{accessorKey:`role`,header:`角色`,width:120},{accessorKey:`team`,header:`团队`,width:140},{accessorKey:`locked`,header:`锁定`,width:120}],n=[{id:`m-001`,name:`沈若`,role:`管理员`,team:`平台组`,locked:!1},{id:`m-002`,name:`梁一`,role:`开发者`,team:`体验组`,locked:!1},{id:`m-003`,name:`许知`,role:`访客`,team:`运营组`,locked:!0},{id:`m-004`,name:`苏眠`,role:`审计员`,team:`风控组`,locked:!1}],r=u([]),i=x(()=>r.value.map(e=>e.name).join(`、`)||`暂无`);function a(e){r.value=e}return(e,r)=>{let o=V;return _(),O(`div`,Bl,[l(o,{selectable:``,multiple:``,"row-key":`id`,columns:t,data:n,onSelectionChange:a}),k(`div`,Vl,` 已选中：`+g(i.value),1)])}}}),Ul=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'
import { computed, shallowRef } from 'vue'

interface Member {
  id: string
  name: string
  role: string
  team: string
  locked: boolean
}

const columns: TableColumn<Member>[] = [
  {
    type: 'selection',
    fixed: 'left',
    width: 50,
    disabled: row => row.locked,
  },
  {
    accessorKey: 'name',
    header: '成员',
  },
  {
    accessorKey: 'role',
    header: '角色',
    width: 120,
  },
  {
    accessorKey: 'team',
    header: '团队',
    width: 140,
  },
  {
    accessorKey: 'locked',
    header: '锁定',
    width: 120,
  },
]

const data: Member[] = [
  { id: 'm-001', name: '沈若', role: '管理员', team: '平台组', locked: false },
  { id: 'm-002', name: '梁一', role: '开发者', team: '体验组', locked: false },
  { id: 'm-003', name: '许知', role: '访客', team: '运营组', locked: true },
  { id: 'm-004', name: '苏眠', role: '审计员', team: '风控组', locked: false },
]

const selectedRows = shallowRef<Member[]>([])

const selectedNames = computed(() => selectedRows.value.map(item => item.name).join('、') || '暂无')

function handleSelectionChange(rows: Member[]) {
  selectedRows.value = rows
}
<\/script>

<template>
  <div class="space-y-4">
    <FaTable
      selectable
      multiple
      row-key="id"
      :columns
      :data
      @selection-change="handleSelectionChange"
    />

    <div class="text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted">
      已选中：{{ selectedNames }}
    </div>
  </div>
</template>
`,Wl={class:`space-y-4`},Gl={class:`text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted`},Kl=e({__name:`_single-selection`,setup(e){let t=[{type:`selection`,fixed:`left`,width:50,disabled:e=>!e.enabled},{accessorKey:`name`,header:`成员`},{accessorKey:`role`,header:`角色`,width:120},{accessorKey:`team`,header:`团队`,width:140},{accessorKey:`enabled`,header:`是否可选`,width:120}],n=[{id:`m-001`,name:`沈若`,role:`管理员`,team:`平台组`,enabled:!0},{id:`m-002`,name:`梁一`,role:`开发者`,team:`体验组`,enabled:!0},{id:`m-003`,name:`许知`,role:`访客`,team:`运营组`,enabled:!1},{id:`m-004`,name:`苏眠`,role:`审计员`,team:`风控组`,enabled:!0}],r=u([]),i=x(()=>r.value[0]?.name||`暂无`);function a(e){r.value=e}return(e,r)=>{let o=V;return _(),O(`div`,Wl,[l(o,{selectable:``,"row-key":`id`,columns:t,data:n,onSelectionChange:a}),k(`div`,Gl,` 当前选中：`+g(i.value),1)])}}}),ql=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'
import { computed, shallowRef } from 'vue'

interface Member {
  id: string
  name: string
  role: string
  team: string
  enabled: boolean
}

const columns: TableColumn<Member>[] = [
  {
    type: 'selection',
    fixed: 'left',
    width: 50,
    disabled: row => !row.enabled,
  },
  {
    accessorKey: 'name',
    header: '成员',
  },
  {
    accessorKey: 'role',
    header: '角色',
    width: 120,
  },
  {
    accessorKey: 'team',
    header: '团队',
    width: 140,
  },
  {
    accessorKey: 'enabled',
    header: '是否可选',
    width: 120,
  },
]

const data: Member[] = [
  { id: 'm-001', name: '沈若', role: '管理员', team: '平台组', enabled: true },
  { id: 'm-002', name: '梁一', role: '开发者', team: '体验组', enabled: true },
  { id: 'm-003', name: '许知', role: '访客', team: '运营组', enabled: false },
  { id: 'm-004', name: '苏眠', role: '审计员', team: '风控组', enabled: true },
]

const selectedRows = shallowRef<Member[]>([])

const selectedName = computed(() => selectedRows.value[0]?.name || '暂无')

function handleSelectionChange(rows: Member[]) {
  selectedRows.value = rows
}
<\/script>

<template>
  <div class="space-y-4">
    <FaTable
      selectable
      row-key="id"
      :columns
      :data
      @selection-change="handleSelectionChange"
    />

    <div class="text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted">
      当前选中：{{ selectedName }}
    </div>
  </div>
</template>
`,Jl={class:`font-medium`},Yl={class:`text-xs text-muted-foreground`},Xl={class:`tabular-nums`},Zl=e({__name:`_slot`,setup(e){let t=[{accessorKey:`name`,header:`商品`,width:220},{accessorKey:`category`,header:`分类`,width:120},{accessorKey:`price`,header:`价格`,align:`right`,width:120},{accessorKey:`stock`,header:`库存`,align:`right`,width:120},{accessorKey:`status`,header:`状态`,width:120}],n=[{id:`sku-001`,name:`协作空间专业版`,category:`软件`,price:1280,stock:42,status:`available`},{id:`sku-002`,name:`团队数据大屏`,category:`模板`,price:680,stock:8,status:`warning`},{id:`sku-003`,name:`年度支持服务`,category:`服务`,price:3600,stock:0,status:`sold-out`}],r={available:{label:`可售`,class:`bg-success/10 text-success`},warning:{label:`低库存`,class:`bg-warning/10 text-warning`},"sold-out":{label:`售罄`,class:`bg-muted text-muted-foreground`}};function a(e){return new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,maximumFractionDigits:0}).format(e)}return(e,o)=>{let s=V;return _(),m(s,{"row-key":`id`,columns:t,data:n},{"header-name":E(()=>[...o[0]||(o[0]=[k(`div`,{class:`flex flex-col`},[k(`span`,null,`商品`),k(`span`,{class:`text-xs text-muted-foreground font-normal`},`名称 / 编号`)],-1)])]),"cell-name":E(({row:e})=>[k(`div`,Jl,g(e.original.name),1),k(`div`,Yl,g(e.original.id),1)]),"cell-price":E(({value:e})=>[i(g(a(Number(e))),1)]),"cell-stock":E(({value:e})=>[k(`span`,Xl,g(e),1)]),"cell-status":E(({value:e})=>[k(`span`,{class:D([`text-xs font-medium px-2 py-0.5 rounded-full inline-flex`,r[e].class])},g(r[e].label),3)]),_:1})}}}),Ql=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: 'available' | 'warning' | 'sold-out'
}

const columns: TableColumn<Product>[] = [
  {
    accessorKey: 'name',
    header: '商品',
    width: 220,
  },
  {
    accessorKey: 'category',
    header: '分类',
    width: 120,
  },
  {
    accessorKey: 'price',
    header: '价格',
    align: 'right',
    width: 120,
  },
  {
    accessorKey: 'stock',
    header: '库存',
    align: 'right',
    width: 120,
  },
  {
    accessorKey: 'status',
    header: '状态',
    width: 120,
  },
]

const data: Product[] = [
  { id: 'sku-001', name: '协作空间专业版', category: '软件', price: 1280, stock: 42, status: 'available' },
  { id: 'sku-002', name: '团队数据大屏', category: '模板', price: 680, stock: 8, status: 'warning' },
  { id: 'sku-003', name: '年度支持服务', category: '服务', price: 3600, stock: 0, status: 'sold-out' },
]

const statusMap: Record<Product['status'], { label: string, class: string }> = {
  'available': {
    label: '可售',
    class: 'bg-success/10 text-success',
  },
  'warning': {
    label: '低库存',
    class: 'bg-warning/10 text-warning',
  },
  'sold-out': {
    label: '售罄',
    class: 'bg-muted text-muted-foreground',
  },
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
    maximumFractionDigits: 0,
  }).format(value)
}
<\/script>

<template>
  <FaTable row-key="id" :columns :data>
    <template #header-name>
      <div class="flex flex-col">
        <span>商品</span>
        <span class="text-xs text-muted-foreground font-normal">名称 / 编号</span>
      </div>
    </template>

    <template #cell-name="{ row }">
      <div class="font-medium">
        {{ row.original.name }}
      </div>
      <div class="text-xs text-muted-foreground">
        {{ row.original.id }}
      </div>
    </template>

    <template #cell-price="{ value }">
      {{ formatCurrency(Number(value)) }}
    </template>

    <template #cell-stock="{ value }">
      <span class="tabular-nums">{{ value }}</span>
    </template>

    <template #cell-status="{ value }">
      <span class="text-xs font-medium px-2 py-0.5 rounded-full inline-flex" :class="statusMap[value as Product['status']].class">
        {{ statusMap[value as Product['status']].label }}
      </span>
    </template>
  </FaTable>
</template>
`,$l={class:`space-y-4`},eu={class:`text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted`},tu=e({__name:`_sorting`,setup(e){let t=[{accessorKey:`title`,header:`任务`},{accessorKey:`owner`,header:`负责人`},{accessorKey:`priority`,header:`优先级`,enableSorting:!0},{accessorKey:`updatedAt`,header:`更新时间`,enableSorting:!0}],n=[{id:`t-001`,title:`完善组件文档`,owner:`林舟`,priority:`中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`同步设计变量`,owner:`陈念`,priority:`高`,updatedAt:`2026-05-22`},{id:`t-003`,title:`整理示例数据`,owner:`周衡`,priority:`低`,updatedAt:`2026-05-21`},{id:`t-004`,title:`回归交互状态`,owner:`沈若`,priority:`中`,updatedAt:`2026-05-20`}],r={高:3,中:2,低:1},i=u([]);function a(e,t){return t===`priority`?r[e.priority]:e[t]}function o(e,t){return typeof e==`number`&&typeof t==`number`?e-t:String(e).localeCompare(String(t),`zh-CN`,{numeric:!0})}let s=x(()=>i.value.length?[...n].sort((e,t)=>{for(let n of i.value){let r=n.id,i=a(e,r),s=a(t,r);if(i===s)continue;let c=o(i,s);return n.desc?-c:c}return 0}):n),c=x(()=>i.value.length?i.value.map(e=>`${e.id}: ${e.desc?`降序`:`升序`}`).join(`，`):`暂无排序`);function d(e){i.value=e}return(e,n)=>{let r=V;return _(),O(`div`,$l,[l(r,{sortable:``,"row-key":`id`,sorting:i.value,columns:t,data:s.value,onSortingChange:d},null,8,[`sorting`,`data`]),k(`div`,eu,` 当前排序：`+g(c.value),1)])}}}),nu=`<script setup lang="ts">
import type { TableColumn, TableSortingState } from '../index.vue'
import { computed, shallowRef } from 'vue'

interface Task {
  id: string
  title: string
  owner: string
  priority: string
  updatedAt: string
}

const columns: TableColumn<Task>[] = [
  {
    accessorKey: 'title',
    header: '任务',
  },
  {
    accessorKey: 'owner',
    header: '负责人',
  },
  {
    accessorKey: 'priority',
    header: '优先级',
    enableSorting: true,
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
    enableSorting: true,
  },
]

const data: Task[] = [
  { id: 't-001', title: '完善组件文档', owner: '林舟', priority: '中', updatedAt: '2026-05-23' },
  { id: 't-002', title: '同步设计变量', owner: '陈念', priority: '高', updatedAt: '2026-05-22' },
  { id: 't-003', title: '整理示例数据', owner: '周衡', priority: '低', updatedAt: '2026-05-21' },
  { id: 't-004', title: '回归交互状态', owner: '沈若', priority: '中', updatedAt: '2026-05-20' },
]

const priorityRank: Record<Task['priority'], number> = {
  高: 3,
  中: 2,
  低: 1,
}

const sorting = shallowRef<TableSortingState>([])

function getSortValue(row: Task, key: keyof Task) {
  if (key === 'priority') {
    return priorityRank[row.priority]
  }

  return row[key]
}

function compareSortValue(a: string | number, b: string | number) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b
  }

  return String(a).localeCompare(String(b), 'zh-CN', { numeric: true })
}

const sortedData = computed(() => {
  if (!sorting.value.length) {
    return data
  }

  return [...data].sort((a, b) => {
    for (const sort of sorting.value) {
      const key = sort.id as keyof Task
      const aVal = getSortValue(a, key)
      const bVal = getSortValue(b, key)

      if (aVal === bVal) {
        continue
      }

      const result = compareSortValue(aVal, bVal)
      return sort.desc ? -result : result
    }

    return 0
  })
})

const sortingText = computed(() => {
  if (!sorting.value.length) {
    return '暂无排序'
  }

  return sorting.value.map(item => \`\${item.id}: \${item.desc ? '降序' : '升序'}\`).join('，')
})

function handleSortingChange(value: TableSortingState) {
  sorting.value = value
}
<\/script>

<template>
  <div class="space-y-4">
    <FaTable
      sortable
      row-key="id"
      :sorting
      :columns
      :data="sortedData"
      @sorting-change="handleSortingChange"
    />

    <div class="text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted">
      当前排序：{{ sortingText }}
    </div>
  </div>
</template>
`,ru=e({__name:`_stripe`,setup(e){let t=[{accessorKey:`title`,header:`事项`,width:220},{accessorKey:`owner`,header:`负责人`,width:120},{accessorKey:`priority`,header:`优先级`,width:120},{accessorKey:`status`,header:`状态`,width:120},{accessorKey:`updatedAt`,header:`更新时间`,width:160}],n=[{id:`t-001`,title:`补充表格文档`,owner:`林舟`,priority:`中`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`优化筛选体验`,owner:`陈念`,priority:`高`,status:`待处理`,updatedAt:`2026-05-22`},{id:`t-003`,title:`同步设计变量`,owner:`周衡`,priority:`低`,status:`已完成`,updatedAt:`2026-05-21`},{id:`t-004`,title:`检查固定列阴影`,owner:`沈若`,priority:`中`,status:`进行中`,updatedAt:`2026-05-20`},{id:`t-005`,title:`整理示例数据`,owner:`梁一`,priority:`低`,status:`已完成`,updatedAt:`2026-05-19`},{id:`t-006`,title:`回归行选择交互`,owner:`许知`,priority:`高`,status:`待处理`,updatedAt:`2026-05-18`}];return(e,r)=>{let i=V;return _(),m(i,{stripe:``,"row-key":`id`,columns:t,data:n})}}}),iu=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Ticket {
  id: string
  title: string
  owner: string
  priority: string
  status: string
  updatedAt: string
}

const columns: TableColumn<Ticket>[] = [
  {
    accessorKey: 'title',
    header: '事项',
    width: 220,
  },
  {
    accessorKey: 'owner',
    header: '负责人',
    width: 120,
  },
  {
    accessorKey: 'priority',
    header: '优先级',
    width: 120,
  },
  {
    accessorKey: 'status',
    header: '状态',
    width: 120,
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
    width: 160,
  },
]

const data: Ticket[] = [
  { id: 't-001', title: '补充表格文档', owner: '林舟', priority: '中', status: '进行中', updatedAt: '2026-05-23' },
  { id: 't-002', title: '优化筛选体验', owner: '陈念', priority: '高', status: '待处理', updatedAt: '2026-05-22' },
  { id: 't-003', title: '同步设计变量', owner: '周衡', priority: '低', status: '已完成', updatedAt: '2026-05-21' },
  { id: 't-004', title: '检查固定列阴影', owner: '沈若', priority: '中', status: '进行中', updatedAt: '2026-05-20' },
  { id: 't-005', title: '整理示例数据', owner: '梁一', priority: '低', status: '已完成', updatedAt: '2026-05-19' },
  { id: 't-006', title: '回归行选择交互', owner: '许知', priority: '高', status: '待处理', updatedAt: '2026-05-18' },
]
<\/script>

<template>
  <FaTable stripe row-key="id" :columns :data />
</template>
`,au={class:`text-sm text-muted-foreground`},ou=[{title:`基础`,component:Ol,componentRaw:kl},{title:`固定高度`,component:Rl,componentRaw:zl},{title:`工具栏插槽`,component:e({__name:`_toolbar`,setup(e){let t=[{accessorKey:`title`,header:`任务`},{accessorKey:`owner`,header:`负责人`},{accessorKey:`status`,header:`状态`},{accessorKey:`updatedAt`,header:`更新时间`}],n=[{id:`t-001`,title:`完善组件文档`,owner:`林舟`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`同步设计变量`,owner:`陈念`,status:`待处理`,updatedAt:`2026-05-22`},{id:`t-003`,title:`整理示例数据`,owner:`周衡`,status:`已完成`,updatedAt:`2026-05-21`},{id:`t-004`,title:`回归交互状态`,owner:`沈若`,status:`进行中`,updatedAt:`2026-05-20`}];return(e,r)=>{let a=V;return _(),m(a,{columns:t,data:n},{toolbar:E(({table:e})=>[l(M,{size:`sm`},{default:E(()=>[l(U,{name:`i-lucide:plus`}),r[0]||(r[0]=i(` 新增 `,-1))]),_:1}),l(M,{variant:`outline`,size:`sm`},{default:E(()=>[l(U,{name:`i-lucide:refresh-cw`}),r[1]||(r[1]=i(` 刷新 `,-1))]),_:1}),k(`span`,au,` 共 `+g(e.getRowModel().rows.length)+` 条 `,1)]),_:1})}}}),componentRaw:`<script setup lang="ts">
import type { TableColumn } from '../index.vue'
import FaButton from '../../../basic/button/index.vue'
import FaIcon from '../../../basic/icon/index.vue'

interface Task {
  id: string
  title: string
  owner: string
  status: string
  updatedAt: string
}

const columns: TableColumn<Task>[] = [
  {
    accessorKey: 'title',
    header: '任务',
  },
  {
    accessorKey: 'owner',
    header: '负责人',
  },
  {
    accessorKey: 'status',
    header: '状态',
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
  },
]

const data: Task[] = [
  { id: 't-001', title: '完善组件文档', owner: '林舟', status: '进行中', updatedAt: '2026-05-23' },
  { id: 't-002', title: '同步设计变量', owner: '陈念', status: '待处理', updatedAt: '2026-05-22' },
  { id: 't-003', title: '整理示例数据', owner: '周衡', status: '已完成', updatedAt: '2026-05-21' },
  { id: 't-004', title: '回归交互状态', owner: '沈若', status: '进行中', updatedAt: '2026-05-20' },
]
<\/script>

<template>
  <FaTable :columns :data>
    <template #toolbar="{ table }">
      <FaButton size="sm">
        <FaIcon name="i-lucide:plus" />
        新增
      </FaButton>
      <FaButton variant="outline" size="sm">
        <FaIcon name="i-lucide:refresh-cw" />
        刷新
      </FaButton>
      <span class="text-sm text-muted-foreground">
        共 {{ table.getRowModel().rows.length }} 条
      </span>
    </template>
  </FaTable>
</template>
`},{title:`固定列`,component:Il,componentRaw:Ll},{title:`自定义列`,component:Pl,componentRaw:Fl},{title:`树型数据`,component:e({__name:`_tree`,setup(e){let t=[{accessorKey:`title`,header:`任务`},{accessorKey:`owner`,header:`负责人`,width:120},{accessorKey:`status`,header:`状态`,width:120},{accessorKey:`updatedAt`,header:`更新时间`,width:160}],n=[{id:`t-001`,title:`组件能力建设`,owner:`林舟`,status:`进行中`,updatedAt:`2026-05-23`,children:[{id:`t-001-1`,title:`补充树型表格`,owner:`林舟`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-001-2`,title:`完善列显示控制`,owner:`陈念`,status:`待处理`,updatedAt:`2026-05-22`}]},{id:`t-002`,title:`设计变量同步`,owner:`陈念`,status:`待处理`,updatedAt:`2026-05-22`,children:[{id:`t-002-1`,title:`整理主题色`,owner:`周衡`,status:`已完成`,updatedAt:`2026-05-21`,children:[{id:`t-002-1-1`,title:`校验暗色模式`,owner:`沈若`,status:`已完成`,updatedAt:`2026-05-20`}]}]},{id:`t-003`,title:`回归交互状态`,owner:`沈若`,status:`进行中`,updatedAt:`2026-05-20`}];return(e,r)=>{let i=V;return _(),m(i,{tree:``,"row-key":`id`,columns:t,data:n})}}}),componentRaw:`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Task {
  id: string
  title: string
  owner: string
  status: string
  updatedAt: string
  children?: Task[]
}

const columns: TableColumn<Task>[] = [
  {
    accessorKey: 'title',
    header: '任务',
  },
  {
    accessorKey: 'owner',
    header: '负责人',
    width: 120,
  },
  {
    accessorKey: 'status',
    header: '状态',
    width: 120,
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
    width: 160,
  },
]

const data: Task[] = [
  {
    id: 't-001',
    title: '组件能力建设',
    owner: '林舟',
    status: '进行中',
    updatedAt: '2026-05-23',
    children: [
      { id: 't-001-1', title: '补充树型表格', owner: '林舟', status: '进行中', updatedAt: '2026-05-23' },
      { id: 't-001-2', title: '完善列显示控制', owner: '陈念', status: '待处理', updatedAt: '2026-05-22' },
    ],
  },
  {
    id: 't-002',
    title: '设计变量同步',
    owner: '陈念',
    status: '待处理',
    updatedAt: '2026-05-22',
    children: [
      {
        id: 't-002-1',
        title: '整理主题色',
        owner: '周衡',
        status: '已完成',
        updatedAt: '2026-05-21',
        children: [
          { id: 't-002-1-1', title: '校验暗色模式', owner: '沈若', status: '已完成', updatedAt: '2026-05-20' },
        ],
      },
    ],
  },
  { id: 't-003', title: '回归交互状态', owner: '沈若', status: '进行中', updatedAt: '2026-05-20' },
]
<\/script>

<template>
  <FaTable tree row-key="id" :columns :data />
</template>
`},{title:`自定义插槽`,component:Zl,componentRaw:Ql},{title:`排序`,component:tu,componentRaw:nu},{title:`行选择 - 单选`,component:Kl,componentRaw:ql},{title:`行选择 - 多选`,component:Hl,componentRaw:Ul},{title:`斑马纹`,component:ru,componentRaw:iu},{title:`边框`,component:Al,componentRaw:jl},{title:`列可见性`,component:Ml,componentRaw:Nl}],su=[{title:`基础`,component:e({__name:`_basic`,setup(e){let t=h(`profile`),n=[{label:`资料`,value:`profile`},{label:`账号`,value:`account`},{label:`通知`,value:`notice`}];return(e,r)=>(_(),m(Le,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),list:n,class:`w-96`},{profile:E(()=>[...r[1]||(r[1]=[k(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 这里展示用户基础资料。 `,-1)])]),account:E(()=>[...r[2]||(r[2]=[k(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 这里展示账号安全设置。 `,-1)])]),notice:E(()=>[...r[3]||(r[3]=[k(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 这里展示消息通知偏好。 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaTabs from '../index.vue'

const activeTab = ref('profile')

const list = [
  { label: '资料', value: 'profile' },
  { label: '账号', value: 'account' },
  { label: '通知', value: 'notice' },
]
<\/script>

<template>
  <FaTabs v-model="activeTab" :list="list" class="w-96">
    <template #profile>
      <div class="text-sm p-4 rounded-md bg-muted/50">
        这里展示用户基础资料。
      </div>
    </template>
    <template #account>
      <div class="text-sm p-4 rounded-md bg-muted/50">
        这里展示账号安全设置。
      </div>
    </template>
    <template #notice>
      <div class="text-sm p-4 rounded-md bg-muted/50">
        这里展示消息通知偏好。
      </div>
    </template>
  </FaTabs>
</template>
`},{title:`图标`,component:e({__name:`_icon`,setup(e){let t=h(`user`),n=[{icon:`i-lucide:user`,label:`用户`,value:`user`},{icon:`i-lucide:settings`,label:`设置`,value:`setting`},{icon:`i-lucide:bell`,label:`通知`,value:`notice`}];return(e,r)=>(_(),m(Le,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),list:n,class:`w-96`},{user:E(()=>[...r[1]||(r[1]=[k(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 用户信息内容。 `,-1)])]),setting:E(()=>[...r[2]||(r[2]=[k(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 系统设置内容。 `,-1)])]),notice:E(()=>[...r[3]||(r[3]=[k(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 通知消息内容。 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaTabs from '../index.vue'

const activeTab = ref('user')

const list = [
  { icon: 'i-lucide:user', label: '用户', value: 'user' },
  { icon: 'i-lucide:settings', label: '设置', value: 'setting' },
  { icon: 'i-lucide:bell', label: '通知', value: 'notice' },
]
<\/script>

<template>
  <FaTabs v-model="activeTab" :list="list" class="w-96">
    <template #user>
      <div class="text-sm p-4 rounded-md bg-muted/50">
        用户信息内容。
      </div>
    </template>
    <template #setting>
      <div class="text-sm p-4 rounded-md bg-muted/50">
        系统设置内容。
      </div>
    </template>
    <template #notice>
      <div class="text-sm p-4 rounded-md bg-muted/50">
        通知消息内容。
      </div>
    </template>
  </FaTabs>
</template>
`},{title:`自定义样式`,component:e({__name:`_custom-style`,setup(e){let t=h(`overview`),n=[{label:`总览`,value:`overview`,class:`rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`},{label:`趋势`,value:`trend`,class:`rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`},{label:`明细`,value:`detail`,class:`rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`}];return(e,r)=>(_(),m(Le,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),list:n,class:`p-3 border rounded-lg w-96`,"list-class":`gap-2 rounded-md bg-transparent p-0`,"content-class":`rounded-md bg-muted/50 p-4 text-sm`},{overview:E(()=>[...r[1]||(r[1]=[i(` 当前数据总览。 `,-1)])]),trend:E(()=>[...r[2]||(r[2]=[i(` 趋势分析内容。 `,-1)])]),detail:E(()=>[...r[3]||(r[3]=[i(` 明细数据内容。 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaTabs from '../index.vue'

const activeTab = ref('overview')

const list = [
  { label: '总览', value: 'overview', class: 'rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground' },
  { label: '趋势', value: 'trend', class: 'rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground' },
  { label: '明细', value: 'detail', class: 'rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground' },
]
<\/script>

<template>
  <FaTabs
    v-model="activeTab"
    :list="list"
    class="p-3 border rounded-lg w-96"
    list-class="gap-2 rounded-md bg-transparent p-0"
    content-class="rounded-md bg-muted/50 p-4 text-sm"
  >
    <template #overview>
      当前数据总览。
    </template>
    <template #trend>
      趋势分析内容。
    </template>
    <template #detail>
      明细数据内容。
    </template>
  </FaTabs>
</template>
`}],cu={class:`flex flex-wrap gap-4`},lu=e({__name:`_basic`,setup(e){return(e,t)=>(_(),O(`div`,cu,[l(F,null,{default:E(()=>[...t[0]||(t[0]=[i(` 默认标签 `,-1)])]),_:1}),l(F,{variant:`destructive`},{default:E(()=>[...t[1]||(t[1]=[i(` 危险标签 `,-1)])]),_:1}),l(F,{variant:`outline`},{default:E(()=>[...t[2]||(t[2]=[i(` 边框标签 `,-1)])]),_:1}),l(F,{variant:`secondary`},{default:E(()=>[...t[3]||(t[3]=[i(` 次要标签 `,-1)])]),_:1})]))}}),uu=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTag from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTag>
      默认标签
    </FaTag>
    <FaTag variant="destructive">
      危险标签
    </FaTag>
    <FaTag variant="outline">
      边框标签
    </FaTag>
    <FaTag variant="secondary">
      次要标签
    </FaTag>
  </div>
</template>
`,du={class:`flex flex-wrap gap-4`},fu=e({__name:`_closable`,setup(e){let t=h([{id:1,label:`标签一`,variant:`default`},{id:2,label:`标签二`,variant:`destructive`},{id:3,label:`标签三`,variant:`outline`},{id:4,label:`标签四`,variant:`secondary`}]);function n(e){t.value=t.value.filter(t=>t.id!==e)}return(e,r)=>(_(),O(`div`,du,[(_(!0),O(w,null,y(t.value,e=>(_(),m(F,{key:e.id,variant:e.variant,closable:``,onClose:t=>n(e.id)},{default:E(()=>[i(g(e.label),1)]),_:2},1032,[`variant`,`onClose`]))),128))]))}}),pu=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaTag from '../index.vue'

const tags = ref([
  { id: 1, label: '标签一', variant: 'default' as const },
  { id: 2, label: '标签二', variant: 'destructive' as const },
  { id: 3, label: '标签三', variant: 'outline' as const },
  { id: 4, label: '标签四', variant: 'secondary' as const },
])

function handleClose(id: number) {
  tags.value = tags.value.filter(tag => tag.id !== id)
}
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTag
      v-for="tag in tags"
      :key="tag.id"
      :variant="tag.variant"
      closable
      @close="handleClose(tag.id)"
    >
      {{ tag.label }}
    </FaTag>
  </div>
</template>
`,mu={class:`flex flex-wrap gap-4`},hu=[{title:`基础`,component:lu,componentRaw:uu},{title:`图标`,component:e({__name:`_icon`,setup(e){return(e,t)=>(_(),O(`div`,mu,[l(F,{icon:`i-lucide:check`},{default:E(()=>[...t[0]||(t[0]=[i(` 成功 `,-1)])]),_:1}),l(F,{icon:`i-lucide:alert-triangle`,variant:`destructive`},{default:E(()=>[...t[1]||(t[1]=[i(` 警告 `,-1)])]),_:1}),l(F,{icon:`i-lucide:info`,variant:`outline`},{default:E(()=>[...t[2]||(t[2]=[i(` 信息 `,-1)])]),_:1}),l(F,{icon:`i-lucide:star`,variant:`secondary`},{default:E(()=>[...t[3]||(t[3]=[i(` 收藏 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTag from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTag icon="i-lucide:check">
      成功
    </FaTag>
    <FaTag icon="i-lucide:alert-triangle" variant="destructive">
      警告
    </FaTag>
    <FaTag icon="i-lucide:info" variant="outline">
      信息
    </FaTag>
    <FaTag icon="i-lucide:star" variant="secondary">
      收藏
    </FaTag>
  </div>
</template>
`},{title:`可关闭`,component:fu,componentRaw:pu}],gu=[{title:`基础`,component:e({__name:`_basic`,setup(e){let t=u(``);return(e,n)=>(_(),m(je,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入内容`,class:`w-96`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaTextarea from '../index.vue'

const value = shallowRef('')
<\/script>

<template>
  <FaTextarea v-model="value" placeholder="请输入内容" class="w-96" />
</template>
`},{title:`禁用`,component:e({__name:`_disabled`,setup(e){let t=u(`这是一段不可编辑的文本内容。`);return(e,n)=>(_(),m(je,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:``,class:`w-96`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaTextarea from '../index.vue'

const value = shallowRef('这是一段不可编辑的文本内容。')
<\/script>

<template>
  <FaTextarea v-model="value" disabled class="w-96" />
</template>
`},{title:`插槽`,component:e({__name:`_slot`,setup(e){let t=u(``);return(e,n)=>(_(),m(je,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`console.log('Hello, world!');`,align:`block`,"start-class":`justify-between`,"end-class":`justify-between`,class:`w-120`},{start:E(()=>[n[1]||(n[1]=k(`span`,null,`script.ts`,-1)),l(M,{variant:`ghost`,size:`icon`,class:`size-6`},{default:E(()=>[l(U,{name:`i-ep:refresh`})]),_:1})]),end:E(()=>[n[3]||(n[3]=k(`span`,null,`Line 1, Column 1`,-1)),l(M,{size:`sm`,class:`px-2 h-8`},{default:E(()=>[n[2]||(n[2]=i(` Run `,-1)),l(U,{name:`i-lucide:corner-down-left`})]),_:1})]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaTextarea from '../index.vue'

const value = shallowRef('')
<\/script>

<template>
  <FaTextarea
    v-model="value"
    placeholder="console.log('Hello, world!');"
    align="block"
    start-class="justify-between"
    end-class="justify-between"
    class="w-120"
  >
    <template #start>
      <span>script.ts</span>
      <FaButton variant="ghost" size="icon" class="size-6">
        <FaIcon name="i-ep:refresh" />
      </FaButton>
    </template>
    <template #end>
      <span>Line 1, Column 1</span>
      <FaButton size="sm" class="px-2 h-8">
        Run
        <FaIcon name="i-lucide:corner-down-left" />
      </FaButton>
    </template>
  </FaTextarea>
</template>
`}],_u=e({__name:`_action`,setup(e){let t=B();function n(){t(`文件已移入回收站`,{description:`你可以在 30 天内恢复该文件`,action:{label:`撤销`,onClick:()=>{t.success(`已撤销删除`)}}})}return(e,t)=>(_(),m(M,{onClick:n},{default:E(()=>[...t[0]||(t[0]=[i(` 显示操作按钮 `,-1)])]),_:1}))}}),vu=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../index'

const toast = useToast()

function showToast() {
  toast('文件已移入回收站', {
    description: '你可以在 30 天内恢复该文件',
    action: {
      label: '撤销',
      onClick: () => {
        toast.success('已撤销删除')
      },
    },
  })
}
<\/script>

<template>
  <FaButton @click="showToast">
    显示操作按钮
  </FaButton>
</template>
`,yu={class:`flex flex-wrap gap-4`},bu=e({__name:`_basic`,setup(e){let t=B();function n(){t(`Fantastic-admin 杰出的管理系统框架`,{description:`开箱即用，提供舒适开发体验`})}function r(){t.success(`保存成功`,{description:`内容已同步到服务器`})}function a(){t.error(`保存失败`,{description:`请检查网络后重试`})}function o(){t.info(`系统通知`,{description:`今晚 22:00 将进行例行维护`})}function s(){t.warning(`注意事项`,{description:`离开页面前请确认内容已保存`})}return(e,t)=>(_(),O(`div`,yu,[l(M,{onClick:n},{default:E(()=>[...t[0]||(t[0]=[i(` 默认 `,-1)])]),_:1}),l(M,{onClick:r},{default:E(()=>[...t[1]||(t[1]=[i(` 成功 `,-1)])]),_:1}),l(M,{onClick:a},{default:E(()=>[...t[2]||(t[2]=[i(` 错误 `,-1)])]),_:1}),l(M,{onClick:o},{default:E(()=>[...t[3]||(t[3]=[i(` 信息 `,-1)])]),_:1}),l(M,{onClick:s},{default:E(()=>[...t[4]||(t[4]=[i(` 警告 `,-1)])]),_:1})]))}}),xu=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../index'

const toast = useToast()

function showDefault() {
  toast('Fantastic-admin 杰出的管理系统框架', {
    description: '开箱即用，提供舒适开发体验',
  })
}

function showSuccess() {
  toast.success('保存成功', {
    description: '内容已同步到服务器',
  })
}

function showError() {
  toast.error('保存失败', {
    description: '请检查网络后重试',
  })
}

function showInfo() {
  toast.info('系统通知', {
    description: '今晚 22:00 将进行例行维护',
  })
}

function showWarning() {
  toast.warning('注意事项', {
    description: '离开页面前请确认内容已保存',
  })
}
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaButton @click="showDefault">
      默认
    </FaButton>
    <FaButton @click="showSuccess">
      成功
    </FaButton>
    <FaButton @click="showError">
      错误
    </FaButton>
    <FaButton @click="showInfo">
      信息
    </FaButton>
    <FaButton @click="showWarning">
      警告
    </FaButton>
  </div>
</template>
`,Su={class:`flex flex-wrap gap-4`},Cu=[{title:`基础`,component:bu,componentRaw:xu},{title:`操作按钮`,component:_u,componentRaw:vu},{title:`加载状态`,component:e({__name:`_loading`,setup(e){let t=B();function n(){let e=t.loading(`正在处理...`,{duration:1/0});setTimeout(()=>{t.dismiss(e),t.success(`处理完成`)},2e3)}function r(){t.promise(()=>new Promise(e=>{setTimeout(e,2e3)}),{loading:`正在加载数据`,success:()=>`数据加载完成`,error:()=>`数据加载失败`})}return(e,t)=>(_(),O(`div`,Su,[l(M,{onClick:n},{default:E(()=>[...t[0]||(t[0]=[i(` 加载状态 `,-1)])]),_:1}),l(M,{onClick:r},{default:E(()=>[...t[1]||(t[1]=[i(` Promise 状态 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../index'

const toast = useToast()

function showLoading() {
  const loading = toast.loading('正在处理...', {
    duration: Infinity,
  })

  setTimeout(() => {
    toast.dismiss(loading)
    toast.success('处理完成')
  }, 2000)
}

function showPromise() {
  toast.promise(() => new Promise((resolve) => {
    setTimeout(resolve, 2000)
  }), {
    loading: '正在加载数据',
    success: () => '数据加载完成',
    error: () => '数据加载失败',
  })
}
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaButton @click="showLoading">
      加载状态
    </FaButton>
    <FaButton @click="showPromise">
      Promise 状态
    </FaButton>
  </div>
</template>
`}],wu={class:`flex flex-wrap gap-4`},Tu=e({__name:`_align`,setup(e){return(e,t)=>(_(),O(`div`,wu,[l(z,{text:`起始对齐`,align:`start`},{default:E(()=>[l(M,{variant:`ghost`},{default:E(()=>[...t[0]||(t[0]=[i(` Start `,-1)])]),_:1})]),_:1}),l(z,{text:`居中对齐`,align:`center`},{default:E(()=>[l(M,{variant:`ghost`},{default:E(()=>[...t[1]||(t[1]=[i(` Center `,-1)])]),_:1})]),_:1}),l(z,{text:`末端对齐`,align:`end`},{default:E(()=>[l(M,{variant:`ghost`},{default:E(()=>[...t[2]||(t[2]=[i(` End `,-1)])]),_:1})]),_:1})]))}}),Eu=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaTooltip from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTooltip text="起始对齐" align="start">
      <FaButton variant="ghost">
        Start
      </FaButton>
    </FaTooltip>
    <FaTooltip text="居中对齐" align="center">
      <FaButton variant="ghost">
        Center
      </FaButton>
    </FaTooltip>
    <FaTooltip text="末端对齐" align="end">
      <FaButton variant="ghost">
        End
      </FaButton>
    </FaTooltip>
  </div>
</template>
`,Du=e({__name:`_basic`,setup(e){return(e,t)=>(_(),m(z,{text:`注意噢！`},{default:E(()=>[l(U,{name:`i-ri:question-line`,class:`text-lg cursor-help`})]),_:1}))}}),Ou=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import FaTooltip from '../index.vue'
<\/script>

<template>
  <FaTooltip text="注意噢！">
    <FaIcon name="i-ri:question-line" class="text-lg cursor-help" />
  </FaTooltip>
</template>
`,ku={class:`flex flex-wrap gap-4`},Au=e({__name:`_delay`,setup(e){return(e,t)=>(_(),O(`div`,ku,[l(z,{text:`100ms 后显示`,delay:100},{default:E(()=>[l(M,{variant:`ghost`},{default:E(()=>[...t[0]||(t[0]=[i(` 快速显示 `,-1)])]),_:1})]),_:1}),l(z,{text:`1000ms 后显示`,delay:1e3},{default:E(()=>[l(M,{variant:`ghost`},{default:E(()=>[...t[1]||(t[1]=[i(` 延迟显示 `,-1)])]),_:1})]),_:1})]))}}),ju=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaTooltip from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTooltip text="100ms 后显示" :delay="100">
      <FaButton variant="ghost">
        快速显示
      </FaButton>
    </FaTooltip>
    <FaTooltip text="1000ms 后显示" :delay="1000">
      <FaButton variant="ghost">
        延迟显示
      </FaButton>
    </FaTooltip>
  </div>
</template>
`,Mu={class:`flex flex-wrap gap-4`},Nu=e({__name:`_disabled`,setup(e){return(e,t)=>(_(),O(`div`,Mu,[l(z,{text:`正常显示提示`},{default:E(()=>[l(M,{variant:`ghost`},{default:E(()=>[...t[0]||(t[0]=[i(` 启用 `,-1)])]),_:1})]),_:1}),l(z,{text:`该提示已禁用`,disabled:``},{default:E(()=>[l(M,{variant:`ghost`},{default:E(()=>[...t[1]||(t[1]=[i(` 禁用 `,-1)])]),_:1})]),_:1})]))}}),Pu=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaTooltip from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTooltip text="正常显示提示">
      <FaButton variant="ghost">
        启用
      </FaButton>
    </FaTooltip>
    <FaTooltip text="该提示已禁用" disabled>
      <FaButton variant="ghost">
        禁用
      </FaButton>
    </FaTooltip>
  </div>
</template>
`,Fu={class:`flex flex-wrap gap-4`},Iu=[{title:`基础`,component:Du,componentRaw:Ou},{title:`延迟显示`,component:Au,componentRaw:ju},{title:`弹出方向`,component:e({__name:`_side`,setup(e){return(e,t)=>(_(),O(`div`,Fu,[l(z,{text:`上方提示`,side:`top`},{default:E(()=>[l(M,{variant:`ghost`},{default:E(()=>[...t[0]||(t[0]=[i(` 上方 `,-1)])]),_:1})]),_:1}),l(z,{text:`右侧提示`,side:`right`},{default:E(()=>[l(M,{variant:`ghost`},{default:E(()=>[...t[1]||(t[1]=[i(` 右侧 `,-1)])]),_:1})]),_:1}),l(z,{text:`下方提示`,side:`bottom`},{default:E(()=>[l(M,{variant:`ghost`},{default:E(()=>[...t[2]||(t[2]=[i(` 下方 `,-1)])]),_:1})]),_:1}),l(z,{text:`左侧提示`,side:`left`},{default:E(()=>[l(M,{variant:`ghost`},{default:E(()=>[...t[3]||(t[3]=[i(` 左侧 `,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaTooltip from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTooltip text="上方提示" side="top">
      <FaButton variant="ghost">
        上方
      </FaButton>
    </FaTooltip>
    <FaTooltip text="右侧提示" side="right">
      <FaButton variant="ghost">
        右侧
      </FaButton>
    </FaTooltip>
    <FaTooltip text="下方提示" side="bottom">
      <FaButton variant="ghost">
        下方
      </FaButton>
    </FaTooltip>
    <FaTooltip text="左侧提示" side="left">
      <FaButton variant="ghost">
        左侧
      </FaButton>
    </FaTooltip>
  </div>
</template>
`},{title:`对齐方式`,component:Tu,componentRaw:Eu},{title:`禁用`,component:Nu,componentRaw:Pu}],Lu={class:`flex gap-2 items-center`},Ru=e({__name:`_basic`,setup(e){return(e,t)=>(_(),O(`div`,Lu,[l(H,{value:`12.3%`}),l(H,{value:`12.3%`,type:`down`})]))}}),zu=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTrend from '../index.vue'
<\/script>

<template>
  <div class="flex gap-2 items-center">
    <FaTrend value="12.3%" />
    <FaTrend value="12.3%" type="down" />
  </div>
</template>
`,Bu={class:`space-y-4`},Vu={class:`flex flex-wrap gap-2 items-center`},Hu={class:`flex flex-wrap gap-2 items-center`},Uu=e({__name:`_prefix-suffix`,setup(e){return(e,t)=>(_(),O(`div`,Bu,[k(`div`,null,[t[0]||(t[0]=k(`p`,{class:`text-sm text-muted-foreground mb-2`},` 前缀和后缀 `,-1)),k(`div`,Vu,[l(H,{value:`12.3`,prefix:`$`,variant:`soft`}),l(H,{value:`12.3`,suffix:`%`,variant:`soft`}),l(H,{value:`1,234`,prefix:`¥`,variant:`outline`}),l(H,{value:`45.6`,suffix:`kg`,variant:`outline`})])]),k(`div`,null,[t[1]||(t[1]=k(`p`,{class:`text-sm text-muted-foreground mb-2`},` 组合使用 `,-1)),k(`div`,Hu,[l(H,{value:`2,345`,prefix:`$`,suffix:`.00`,variant:`filled`}),l(H,{value:`98.5`,suffix:`%`,variant:`filled`}),l(H,{value:`+123`,prefix:`↑`,variant:`soft`}),l(H,{value:`-45`,prefix:`↓`,variant:`soft`,type:`down`})])])]))}}),Wu=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTrend from '../index.vue'
<\/script>

<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        前缀和后缀
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <FaTrend value="12.3" prefix="$" variant="soft" />
        <FaTrend value="12.3" suffix="%" variant="soft" />
        <FaTrend value="1,234" prefix="¥" variant="outline" />
        <FaTrend value="45.6" suffix="kg" variant="outline" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        组合使用
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <FaTrend value="2,345" prefix="$" suffix=".00" variant="filled" />
        <FaTrend value="98.5" suffix="%" variant="filled" />
        <FaTrend value="+123" prefix="↑" variant="soft" />
        <FaTrend value="-45" prefix="↓" variant="soft" type="down" />
      </div>
    </div>
  </div>
</template>
`,Gu={class:`space-y-4`},Ku={class:`flex gap-2 items-center`},qu={class:`flex flex-wrap gap-2 items-center`},Ju=e({__name:`_reverse`,setup(e){return(e,t)=>(_(),O(`div`,Gu,[k(`div`,null,[t[0]||(t[0]=k(`p`,{class:`text-sm text-muted-foreground mb-2`},` Reverse 模式（用于成本、错误率等下降是好事的场景） `,-1)),k(`div`,Ku,[l(H,{value:`错误率 -12.3%`,type:`down`,reverse:``,variant:`filled`}),l(H,{value:`成本节省 15%`,type:`down`,reverse:``,variant:`soft`,prefix:`↓`})])]),k(`div`,null,[t[1]||(t[1]=k(`p`,{class:`text-sm text-muted-foreground mb-2`},` 不同风格对比 `,-1)),k(`div`,qu,[l(H,{value:`12.3%`,reverse:``}),l(H,{value:`12.3%`,reverse:``,variant:`filled`}),l(H,{value:`12.3%`,reverse:``,variant:`soft`}),l(H,{value:`12.3%`,reverse:``,variant:`outline`})])])]))}}),Yu=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTrend from '../index.vue'
<\/script>

<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Reverse 模式（用于成本、错误率等下降是好事的场景）
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="错误率 -12.3%" type="down" reverse variant="filled" />
        <FaTrend value="成本节省 15%" type="down" reverse variant="soft" prefix="↓" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        不同风格对比
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <FaTrend value="12.3%" reverse />
        <FaTrend value="12.3%" reverse variant="filled" />
        <FaTrend value="12.3%" reverse variant="soft" />
        <FaTrend value="12.3%" reverse variant="outline" />
      </div>
    </div>
  </div>
</template>
`,Xu={class:`flex gap-2 items-center`},Zu=e({__name:`_size`,setup(e){return(e,t)=>(_(),O(`div`,Xu,[l(H,{value:`12.3%`,size:`small`}),l(H,{value:`12.3%`,size:`medium`}),l(H,{value:`12.3%`,size:`large`})]))}}),Qu=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTrend from '../index.vue'
<\/script>

<template>
  <div class="flex gap-2 items-center">
    <FaTrend value="12.3%" size="small" />
    <FaTrend value="12.3%" size="medium" />
    <FaTrend value="12.3%" size="large" />
  </div>
</template>
`,$u={class:`space-y-4`},ed={class:`flex gap-2 items-center`},td={class:`flex gap-2 items-center`},nd={class:`flex gap-2 items-center`},rd={class:`flex gap-2 items-center`},id=[{title:`基础`,component:Ru,componentRaw:zu},{title:`风格`,component:e({__name:`_variant`,setup(e){return(e,t)=>(_(),O(`div`,$u,[k(`div`,null,[t[0]||(t[0]=k(`p`,{class:`text-sm text-muted-foreground mb-2`},` Default 风格 `,-1)),k(`div`,ed,[l(H,{value:`12.3%`}),l(H,{value:`12.3%`,type:`down`})])]),k(`div`,null,[t[1]||(t[1]=k(`p`,{class:`text-sm text-muted-foreground mb-2`},` Filled 风格 `,-1)),k(`div`,td,[l(H,{value:`+12.3%`,variant:`filled`}),l(H,{value:`-12.3%`,variant:`filled`,type:`down`})])]),k(`div`,null,[t[2]||(t[2]=k(`p`,{class:`text-sm text-muted-foreground mb-2`},` Soft 风格 `,-1)),k(`div`,nd,[l(H,{value:`12.3%`,variant:`soft`}),l(H,{value:`12.3%`,variant:`soft`,type:`down`})])]),k(`div`,null,[t[3]||(t[3]=k(`p`,{class:`text-sm text-muted-foreground mb-2`},` Outline 风格 `,-1)),k(`div`,rd,[l(H,{value:`12.3%`,variant:`outline`}),l(H,{value:`12.3%`,variant:`outline`,type:`down`})])])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTrend from '../index.vue'
<\/script>

<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Default 风格
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="12.3%" />
        <FaTrend value="12.3%" type="down" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Filled 风格
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="+12.3%" variant="filled" />
        <FaTrend value="-12.3%" variant="filled" type="down" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Soft 风格
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="12.3%" variant="soft" />
        <FaTrend value="12.3%" variant="soft" type="down" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Outline 风格
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="12.3%" variant="outline" />
        <FaTrend value="12.3%" variant="outline" type="down" />
      </div>
    </div>
  </div>
</template>
`},{title:`尺寸`,component:Zu,componentRaw:Qu},{title:`颜色反转`,component:Ju,componentRaw:Yu},{title:`前缀/后缀`,component:Uu,componentRaw:Wu}];export{ha as A,On as B,Uo as C,uo as D,fo as E,Fr as F,qt as H,Pr as I,wr as L,wi as M,Ci as N,$a as O,si as P,ur as R,ns as S,Oo as T,Gt as U,yn as V,Vt as W,Zs as _,hu as a,ks as b,Dl as c,Xc as d,Fc as f,nc as g,fc as h,gu as i,Ti as j,Oa as k,xl as l,pc as m,Iu as n,su as o,kc as p,Cu as r,ou as s,id as t,sl as u,Us as v,Ro as w,Os as x,Ls as y,ar as z};