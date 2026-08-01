
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{$ as e,$t as t,A as n,Bt as r,C as i,D as a,E as o,F as s,It as c,Jt as l,M as u,N as d,O as f,P as p,T as m,Tt as h,U as ee,Vt as g,W as te,Y as ne,Z as re,_ as ie,a as _,at as ae,b as v,c as oe,d as se,en as ce,f as le,g as y,h as ue,i as de,it as fe,k as pe,l as me,m as b,nn as he,o as ge,ot as x,p as _e,q as ve,rt as ye,s as S,t as C,tt as be,u as xe,v as Se,w as Ce,x as we,y as w,zt as Te}from"./src-CLMBPGj1.js";import{B as T,C as E,Ct as Ee,O as D,P as De,St as Oe,Tt as O,bt as k,x as A}from"./reactivity.esm-bundler-D9OPVc9J.js";import{$ as ke,B as Ae,D as j,E as M,Ft as je,Ht as Me,Lt as Ne,Pt as Pe,Rt as Fe,Ut as Ie,Yt as N,_ as P,b as F,bt as I,ct as Le,et as L,ft as Re,g as R,k as z,mt as B,o as V,qt as H,tt as ze,v as U,xt as W,y as G,z as Be}from"./runtime-core.esm-bundler-D-xeQwTN.js";import{C as Ve,S as K,w as He}from"./runtime-dom.esm-bundler-Dnva3vcP.js";import{n as q,t as J}from"./form-lz7Hiy64.js";import{t as Ue}from"./number-field-CYoK0fLy.js";import{n as We,r as Ge,t as Y}from"./popover-aV8xI-md.js";import{t as Ke}from"./Label-uKojphyP.js";import{t as qe}from"./checkbox-CvI_gMWp.js";import{t as X}from"./input-otp-CjsDqEOB.js";import{t as Z}from"./label-CHG_gUlU.js";import{t as Je}from"./page-header-CflkT4MF.js";import{t as Q}from"./useToast-aEPMbKJy.js";var[Ye,Xe]=c(`CollapsibleRoot`),Ze=z({__name:`CollapsibleRoot`,props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`update:open`],setup(e,{expose:t,emit:n}){let r=e,i=ce(r,`open`,n,{defaultValue:r.defaultOpen,passive:r.open===void 0}),{disabled:a,unmountOnHide:o}=De(r);return Xe({contentId:``,disabled:a,open:i,unmountOnHide:o,onOpenToggle:()=>{a.value||(i.value=!i.value)}}),t({open:i}),x(),(e,t)=>(B(),U(T(re),{as:e.as,"as-child":r.asChild,"data-state":T(i)?`open`:`closed`,"data-disabled":T(a)?``:void 0},{default:H(()=>[W(e.$slots,`default`,{open:T(i)})]),_:3},8,[`as`,`as-child`,`data-state`,`data-disabled`]))}}),Qe=z({inheritAttrs:!1,__name:`CollapsibleContent`,props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`contentFound`],setup(t,{emit:n}){let r=t,i=n,a=Ye();a.contentId||(a.contentId=be(void 0,`reka-collapsible-content`));let o=E(),{forwardRef:s,currentElement:c}=x(),u=E(0),d=E(0),f=R(()=>a.open.value),p=E(f.value),m=E();Me(()=>[f.value,o.value?.present],async()=>{await ze();let e=c.value;if(!e)return;m.value=m.value||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration=`0s`,e.style.animationName=`none`;let t=e.getBoundingClientRect();d.value=t.height,u.value=t.width,p.value||(e.style.transitionDuration=m.value.transitionDuration,e.style.animationName=m.value.animationName)},{immediate:!0});let h=R(()=>p.value&&a.open.value);return Le(()=>{requestAnimationFrame(()=>{p.value=!1})}),l(c,`beforematch`,e=>{requestAnimationFrame(()=>{a.onOpenToggle(),i(`contentFound`)})}),(t,n)=>(B(),U(T(e),{ref_key:`presentRef`,ref:o,present:t.forceMount||T(a).open.value,"force-mount":!0},{default:H(({present:e})=>[j(T(re),L(t.$attrs,{id:T(a).contentId,ref:T(s),"as-child":r.asChild,as:t.as,hidden:e?void 0:T(a).unmountOnHide.value?``:`until-found`,"data-state":h.value?void 0:T(a).open.value?`open`:`closed`,"data-disabled":T(a).disabled?.value?``:void 0,style:{"--reka-collapsible-content-height":`${d.value}px`,"--reka-collapsible-content-width":`${u.value}px`}}),{default:H(()=>[!T(a).unmountOnHide.value||e?W(t.$slots,`default`,{key:0}):G(`v-if`,!0)]),_:2},1040,[`id`,`as-child`,`as`,`hidden`,`data-state`,`data-disabled`,`style`])]),_:3},8,[`present`]))}}),$e=z({__name:`CollapsibleTrigger`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`}},setup(e){let t=e;x();let n=Ye();return(e,r)=>(B(),U(T(re),{type:e.as===`button`?`button`:void 0,as:e.as,"as-child":t.asChild,"aria-controls":T(n).contentId,"aria-expanded":T(n).open.value,"data-state":T(n).open.value?`open`:`closed`,"data-disabled":T(n).disabled?.value?``:void 0,disabled:T(n).disabled?.value,onClick:T(n).onOpenToggle},{default:H(()=>[W(e.$slots,`default`)]),_:3},8,[`type`,`as`,`as-child`,`aria-controls`,`aria-expanded`,`data-state`,`data-disabled`,`disabled`,`onClick`]))}}),[et,tt]=c(`HoverCardRoot`),nt=z({__name:`HoverCardRoot`,props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},openDelay:{type:Number,required:!1,default:700},closeDelay:{type:Number,required:!1,default:300},enableTouch:{type:Boolean,required:!1,default:!1}},emits:[`update:open`],setup(e,{emit:t}){let n=e,r=t,{openDelay:i,closeDelay:a,enableTouch:o}=De(n);x();let s=ce(n,`open`,r,{defaultValue:n.defaultOpen,passive:n.open===void 0}),c=E(0),l=E(0),u=E(!1),d=E(!1),f=E(!1),p=E();function m(){clearTimeout(l.value),c.value=window.setTimeout(()=>s.value=!0,i.value)}function h(){clearTimeout(c.value),!u.value&&!d.value&&(l.value=window.setTimeout(()=>s.value=!1,a.value))}function ee(){clearTimeout(c.value),s.value=!1}return tt({open:s,onOpenChange(e){s.value=e},onOpen:m,onClose:h,onDismiss:ee,hasSelectionRef:u,isPointerDownOnContentRef:d,isPointerInTransitRef:f,triggerElement:p,enableTouch:o}),(e,t)=>(B(),U(T(te),null,{default:H(()=>[W(e.$slots,`default`,{open:T(s)})]),_:3}))}});function rt(e){return t=>t.pointerType===`touch`?void 0:e()}function it(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)t.push(n.currentNode);return t}var at=z({__name:`HoverCardContentImpl`,props:{memoDependencies:{type:Array,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},dir:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`escapeKeyDown`,`pointerDownOutside`,`focusOutside`,`interactOutside`],setup(e,{emit:t}){let n=e,r=t,i=ae(n),{forwardRef:a,currentElement:o}=x(),c=et(),{isPointerInTransit:u,onPointerExit:d}=ye(c.triggerElement,o);h(c.isPointerInTransitRef,u,{direction:`rtl`}),d(()=>{c.onClose()});let f=E(!1),p;Ie(e=>{if(f.value){let t=document.body;p=t.style.userSelect||t.style.webkitUserSelect,t.style.userSelect=`none`,t.style.webkitUserSelect=`none`,e(()=>{t.style.userSelect=p,t.style.webkitUserSelect=p})}});function m(){f.value=!1,c.isPointerDownOnContentRef.value=!1,ze(()=>{document.getSelection()?.toString()!==``&&(c.hasSelectionRef.value=!0)})}return Le(()=>{o.value&&(document.addEventListener(`pointerup`,m),it(o.value).forEach(e=>e.setAttribute(`tabindex`,`-1`))),l(window,`scroll`,e=>{e.target?.contains(c.triggerElement.value)&&c.onDismiss()},{capture:!0})}),Re(()=>{document.removeEventListener(`pointerup`,m),c.hasSelectionRef.value=!1,c.isPointerDownOnContentRef.value=!1}),(e,t)=>(B(),U(T(ne),{"as-child":``,"disable-outside-pointer-events":!1,onEscapeKeyDown:t[1]||(t[1]=e=>r(`escapeKeyDown`,e)),onPointerDownOutside:t[2]||(t[2]=e=>r(`pointerDownOutside`,e)),onFocusOutside:t[3]||(t[3]=He(e=>r(`focusOutside`,e),[`prevent`])),onDismiss:T(c).onDismiss},{default:H(()=>[j(T(s),L({...T(i),...e.$attrs},{ref:T(a),"data-state":T(c).open.value?`open`:`closed`,style:{userSelect:f.value?`text`:void 0,WebkitUserSelect:f.value?`text`:void 0,"--reka-hover-card-content-transform-origin":`var(--reka-popper-transform-origin)`,"--reka-hover-card-content-available-width":`var(--reka-popper-available-width)`,"--reka-hover-card-content-available-height":`var(--reka-popper-available-height)`,"--reka-hover-card-trigger-width":`var(--reka-popper-anchor-width)`,"--reka-hover-card-trigger-height":`var(--reka-popper-anchor-height)`},onPointerdown:t[0]||(t[0]=e=>{e.currentTarget.contains(e.target)&&(f.value=!0),T(c).hasSelectionRef.value=!1,T(c).isPointerDownOnContentRef.value=!0})}),{default:H(()=>[W(e.$slots,`default`)]),_:3},16,[`data-state`,`style`])]),_:3},8,[`onDismiss`]))}}),ot=z({__name:`HoverCardContent`,props:{forceMount:{type:Boolean,required:!1},memoDependencies:{type:Array,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},dir:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`escapeKeyDown`,`pointerDownOutside`,`focusOutside`,`interactOutside`],setup(t,{emit:n}){let r=fe(t,n),{forwardRef:i}=x(),a=et();return(t,n)=>(B(),U(T(e),{present:t.forceMount||T(a).open.value},{default:H(()=>[j(at,L(T(r),{ref:T(i),onPointerenter:n[0]||(n[0]=e=>T(rt)(T(a).onOpen)(e))}),{default:H(()=>[W(t.$slots,`default`)]),_:3},16)]),_:3},8,[`present`]))}}),st=z({__name:`HoverCardPortal`,props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){let t=e;return(e,n)=>(B(),U(T(ve),Oe(Be(t)),{default:H(()=>[W(e.$slots,`default`)]),_:3},16))}}),ct=z({__name:`HoverCardTrigger`,props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`a`}},setup(e){let{forwardRef:t,currentElement:n}=x(),r=et();r.triggerElement=n;function i(){setTimeout(()=>{!r.isPointerInTransitRef.value&&!r.open.value&&r.onClose()},0)}function a(e){!r.enableTouch.value||e.pointerType!==`touch`||(r.open.value?r.onDismiss():r.onOpenChange(!0))}return(e,n)=>(B(),U(T(ee),{"as-child":``,reference:e.reference},{default:H(()=>[j(T(re),{ref:T(t),"as-child":e.asChild,as:e.as,"data-state":T(r).open.value?`open`:`closed`,"data-grace-area-trigger":``,onPointerenter:n[0]||(n[0]=e=>T(rt)(T(r).onOpen)(e)),onPointerleave:n[1]||(n[1]=e=>T(rt)(i)(e)),onPointerup:a,onFocus:n[2]||(n[2]=e=>T(r).onOpen()),onBlur:n[3]||(n[3]=e=>T(r).onClose())},{default:H(()=>[W(e.$slots,`default`)]),_:3},8,[`as-child`,`as`,`data-state`])]),_:3},8,[`reference`]))}}),lt=z({__name:`Collapsible`,props:{defaultOpen:{type:Boolean},open:{type:Boolean},disabled:{type:Boolean},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},emits:[`update:open`],setup(e,{emit:t}){let n=fe(e,t);return(e,t)=>(B(),U(T(Ze),L({"data-slot":`collapsible`},T(n)),{default:H(t=>[W(e.$slots,`default`,Oe(Be(t)))]),_:3},16))}}),ut=z({__name:`CollapsibleContent`,props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(e){let t=e;return(e,n)=>(B(),U(T(Qe),L({"data-slot":`collapsible-content`},t),{default:H(()=>[W(e.$slots,`default`)]),_:3},16))}}),dt=z({__name:`CollapsibleTrigger`,props:{asChild:{type:Boolean},as:{}},setup(e){let t=e;return(e,n)=>(B(),U(T($e),L({"data-slot":`collapsible-trigger`},t),{default:H(()=>[W(e.$slots,`default`)]),_:3},16))}}),ft=z({name:`BuiltInCollapsible`,__name:`index`,props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let t=je(e,`modelValue`),n=Ne();return(e,r)=>(B(),U(T(lt),{open:t.value,"onUpdate:open":r[0]||(r[0]=e=>t.value=e)},{default:H(()=>[T(n).trigger?(B(),U(T(dt),{key:0},{default:H(()=>[W(e.$slots,`trigger`,{open:t.value})]),_:3})):G(``,!0),j(T(ut),null,{default:H(()=>[W(e.$slots,`default`)]),_:3})]),_:3},8,[`open`]))}}),pt={key:0},mt={key:1},ht=[`colspan`],gt=[`colspan`],_t=[`colspan`],vt=[`colspan`],yt=[`colspan`],bt=[`colspan`],xt=z({name:`BuiltInDescriptions`,__name:`index`,props:{items:{},column:{default:3},direction:{default:`horizontal`},border:{type:Boolean,default:!1},labelWidth:{},size:{default:`default`},emptyText:{default:`-`},class:{type:[Boolean,null,String,Object,Array]},labelClass:{type:[Boolean,null,String,Object,Array]},valueClass:{type:[Boolean,null,String,Object,Array]}},setup(e){let t=e,n={sm:`px-3 py-2 text-xs`,default:`px-4 py-3 text-sm`,lg:`px-5 py-4 text-base`},r=R(()=>c(t.column)),i=R(()=>u(t.items??[],r.value)),a=R(()=>g(`w-full overflow-hidden`,t.border&&`rounded-lg border`,t.class)),o=R(()=>g(`w-full table-fixed border-collapse`,!t.border&&`border-separate border-spacing-0`)),s=R(()=>{if(t.direction!==`horizontal`)return;let e=d(t.labelWidth);return e?{width:e}:void 0});function c(e){let t=Number(e);return Number.isFinite(t)&&t>0?Math.floor(t):1}function l(e,t){let n=Number(e);return!Number.isFinite(n)||n<=0?1:Math.min(Math.floor(n),t)}function u(e,t){let n=[],r=[],i=0;function a(){r.length&&(n.push({items:r,span:i,rest:Math.max(t-i,0)}),r=[],i=0)}return e.forEach((e,n)=>{let o=l(e.span,t);r.length&&i+o>t&&a(),r.push({item:e,index:n,span:o}),i+=o,i>=t&&a()}),a(),n}function d(e){if(e!=null&&e!==``)return typeof e==`number`?`${e}px`:e}function f(e){return e==null||e===``}function p(e){return f(e)?t.emptyText:e}function m(e){return e.key?`label-${e.key}`:void 0}function h(e){return e.key?`value-${e.key}`:void 0}function ee(e){return g(t.border&&!e&&`border-b`)}function te(e){return g(`align-middle break-words`,n[t.size],t.border&&!e&&`border-r`)}function ne(e,n){return g(te(n),`text-left font-medium text-muted-foreground`,t.border&&`bg-muted/50`,e.item.class,t.labelClass,e.item.labelClass)}function re(e,n){return g(te(n),`text-foreground`,e.item.class,t.valueClass,e.item.valueClass)}function ie(e){return g(te(e),t.border&&`bg-background`)}function _(e,t){return t===e.items.length-1&&e.rest===0}return(t,n)=>i.value.length?(B(),F(`div`,{key:0,class:k(a.value),"data-slot":`descriptions`},[P(`table`,{class:k(o.value),"data-slot":`descriptions-table`},[e.direction===`horizontal`?(B(),F(`colgroup`,pt,[(B(!0),F(V,null,I(r.value,e=>(B(),F(V,{key:e},[P(`col`,{style:Ee(s.value)},null,4),n[0]||(n[0]=P(`col`,null,null,-1))],64))),128))])):(B(),F(`colgroup`,mt,[(B(!0),F(V,null,I(r.value,e=>(B(),F(`col`,{key:e}))),128))])),P(`tbody`,null,[e.direction===`vertical`?(B(!0),F(V,{key:0},I(i.value,(e,n)=>(B(),F(V,{key:n},[P(`tr`,{class:k(ee(!1)),"data-slot":`descriptions-label-row`},[(B(!0),F(V,null,I(e.items,(n,r)=>(B(),F(`th`,{key:`label-${n.index}`,colspan:n.span,class:k(ne(n,_(e,r))),scope:`col`,"data-slot":`descriptions-label`},[m(n.item)?W(t.$slots,m(n.item),{item:n.item,index:n.index,label:n.item.label,value:n.item.value},()=>[M(O(n.item.label),1)],void 0,0):(B(),F(V,{key:1},[M(O(n.item.label),1)],64))],10,ht))),128)),e.rest?(B(),F(`td`,{key:0,colspan:e.rest,class:k(ie(!0)),"aria-hidden":`true`,"data-slot":`descriptions-placeholder`},null,10,gt)):G(``,!0)],2),P(`tr`,{class:k(ee(n===i.value.length-1)),"data-slot":`descriptions-value-row`},[(B(!0),F(V,null,I(e.items,(n,r)=>(B(),F(`td`,{key:`value-${n.index}`,colspan:n.span,class:k(re(n,_(e,r))),"data-slot":`descriptions-value`},[h(n.item)?W(t.$slots,h(n.item),{item:n.item,index:n.index,label:n.item.label,value:n.item.value},()=>[M(O(p(n.item.value)),1)],void 0,0):(B(),F(V,{key:1},[M(O(p(n.item.value)),1)],64))],10,_t))),128)),e.rest?(B(),F(`td`,{key:0,colspan:e.rest,class:k(ie(!0)),"aria-hidden":`true`,"data-slot":`descriptions-placeholder`},null,10,vt)):G(``,!0)],2)],64))),128)):(B(!0),F(V,{key:1},I(i.value,(e,n)=>(B(),F(`tr`,{key:n,class:k(ee(n===i.value.length-1)),"data-slot":`descriptions-row`},[(B(!0),F(V,null,I(e.items,(n,r)=>(B(),F(V,{key:n.index},[P(`th`,{class:k(ne(n,!1)),scope:`row`,"data-slot":`descriptions-label`},[m(n.item)?W(t.$slots,m(n.item),{item:n.item,index:n.index,label:n.item.label,value:n.item.value},()=>[M(O(n.item.label),1)],void 0,0):(B(),F(V,{key:1},[M(O(n.item.label),1)],64))],2),P(`td`,{colspan:n.span*2-1,class:k(re(n,_(e,r))),"data-slot":`descriptions-value`},[h(n.item)?W(t.$slots,h(n.item),{item:n.item,index:n.index,label:n.item.label,value:n.item.value},()=>[M(O(p(n.item.value)),1)],void 0,0):(B(),F(V,{key:1},[M(O(p(n.item.value)),1)],64))],10,yt)],64))),128)),e.rest?(B(),F(`td`,{key:0,colspan:e.rest*2,class:k(ie(!0)),"aria-hidden":`true`,"data-slot":`descriptions-placeholder`},null,10,bt)):G(``,!0)],2))),128))])],2)],2)):G(``,!0)}}),St=z({__name:`HoverCard`,props:{defaultOpen:{type:Boolean},open:{type:Boolean},openDelay:{},closeDelay:{},enableTouch:{type:Boolean}},emits:[`update:open`],setup(e,{emit:t}){let n=fe(e,t);return(e,t)=>(B(),U(T(nt),L({"data-slot":`hover-card`},T(n)),{default:H(t=>[W(e.$slots,`default`,Oe(Be(t)))]),_:3},16))}}),Ct=z({inheritAttrs:!1,__name:`HoverCardContent`,props:{forceMount:{type:Boolean},memoDependencies:{},side:{},sideOffset:{default:4},sideFlip:{type:Boolean},align:{},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},dir:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){let t=e,n=he(t,`class`),r=ae(n);return(e,n)=>(B(),U(T(st),null,{default:H(()=>[j(T(ot),L({"data-slot":`hover-card-content`},{...e.$attrs,...T(r)},{class:T(g)(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-hidden`,t.class)}),{default:H(()=>[W(e.$slots,`default`)]),_:3},16,[`class`])]),_:3}))}}),wt=z({__name:`HoverCardTrigger`,props:{reference:{},asChild:{type:Boolean},as:{}},setup(e){let t=e;return(e,n)=>(B(),U(T(ct),L({"data-slot":`hover-card-trigger`},t),{default:H(()=>[W(e.$slots,`default`)]),_:3},16))}}),$=z({name:`BuiltInHoverCard`,__name:`index`,props:{align:{},alignOffset:{},side:{},sideOffset:{},collisionPadding:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){let t=e;return(n,r)=>(B(),U(T(St),null,{default:H(()=>[j(T(wt),{"as-child":``},{default:H(()=>[W(n.$slots,`default`)]),_:3}),j(T(Ct),{align:e.align,"align-offset":e.alignOffset,side:e.side,"side-offset":e.sideOffset,"collision-padding":e.collisionPadding,class:k(T(g)(`z-2000`,t.class))},{default:H(()=>[W(n.$slots,`card`)]),_:3},8,[`align`,`align-offset`,`side`,`side-offset`,`collision-padding`,`class`])]),_:3}))}}),Tt={class:`gap-1 grid min-w-0`},Et={class:`truncate`},Dt={key:0,class:`text-xs text-muted-foreground leading-5 font-normal`},Ot=z({name:`BuiltInRadioGroup`,__name:`index`,props:ke({options:{},disabled:{type:Boolean},dir:{},class:{type:[Boolean,null,String,Object,Array]},optionClass:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]}},{modelValue:{},modelModifiers:{}}),emits:ke([`change`],[`update:modelValue`]),setup(e,{emit:n}){let r=e,i=n,a=Ne(),o=je(e,`modelValue`),s=t({observe:!0}),c=R(()=>r.dir??(s.value===`rtl`?`rtl`:`ltr`)),l=Pe();Me(o,e=>{i(`change`,e)});function u(e,t){return e.id||`${l}-${t}`}function d(e,t){return e.id?e.id:typeof e.value==`string`||typeof e.value==`number`?e.value:t}function f(e){return!!(r.disabled||e.disabled)}function p(e){return Object.is(o.value,e.value)}return(t,n)=>(B(),U(T(le),{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=e=>o.value=e),disabled:e.disabled,dir:c.value,class:k(r.class)},{default:H(()=>[(B(!0),F(V,null,I(r.options,(e,n)=>(B(),F(`div`,{key:d(e,n),class:k(T(g)(`flex gap-2`,e.description?`items-start`:`items-center`,r.optionClass))},[j(T(se),{id:u(e,n),value:e.value,disabled:f(e),class:k(T(g)(r.itemClass,a.option&&`hidden`))},null,8,[`id`,`value`,`disabled`,`class`]),j(T(Ke),{for:u(e,n),class:k(T(g)(`min-w-0 flex-1 cursor-pointer gap-0`,e.description?`items-start`:`items-center`,f(e)&&`cursor-not-allowed opacity-60`))},{default:H(()=>[W(t.$slots,`option`,{id:u(e,n),option:e,checked:p(e),disabled:f(e)},()=>[P(`div`,Tt,[P(`span`,Et,O(e.label),1),e.description?(B(),F(`span`,Dt,O(e.description),1)):G(``,!0)])])]),_:2},1032,[`for`,`class`])],2))),128))]),_:3},8,[`modelValue`,`disabled`,`dir`,`class`]))}}),kt=[{title:`基础`,component:z({__name:`_basic`,setup(e){return(e,t)=>(B(),U(Te,{icon:`i-lucide:info`,title:`提示信息`,description:`这是一条普通提示，用于展示页面说明或操作反馈。`}))}}),componentRaw:`<script lang="ts" setup>
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
`},{title:`警告类型`,component:z({__name:`_variant`,setup(e){return(e,t)=>(B(),U(Te,{icon:`i-lucide:circle-alert`,title:`危险提示`,description:`删除后数据将无法恢复，请谨慎操作。`,variant:`destructive`}))}}),componentRaw:`<script lang="ts" setup>
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
`},{title:`自定义描述`,component:z({__name:`_slot`,setup(e){return(e,t)=>(B(),U(Te,{icon:`i-lucide:terminal`,title:`命令执行完成`},{description:H(()=>[P(`div`,null,[t[1]||(t[1]=M(` 已成功生成文件，可继续进行下一步操作。 `,-1)),j(u,{variant:`link`,class:`px-0 h-auto`},{default:H(()=>[...t[0]||(t[0]=[M(` 查看详情 `,-1)])]),_:1})])]),_:1}))}}),componentRaw:`<script lang="ts" setup>
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
`}],At={class:`flex gap-8`},jt=[{title:`基础`,component:z({__name:`_basic`,setup(e){return(e,t)=>(B(),F(`div`,At,[j(p,{value:!0},{default:H(()=>[j(r,{name:`i-ri:notification-3-line`})]),_:1}),j(p,{value:99},{default:H(()=>[j(r,{name:`i-ri:notification-3-line`})]),_:1}),j(p,{value:`噢`},{default:H(()=>[j(r,{name:`i-ri:notification-3-line`})]),_:1}),j(p,{value:`9`,variant:`secondary`},{default:H(()=>[j(r,{name:`i-ri:notification-3-line`})]),_:1}),j(p,{value:`9`,variant:`destructive`},{default:H(()=>[j(r,{name:`i-ri:notification-3-line`})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`}],Mt=z({__name:`_basic`,setup(e){return(e,t)=>(B(),U(u,null,{default:H(()=>[...t[0]||(t[0]=[M(` 按钮 `,-1)])]),_:1}))}}),Nt=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <FaButton>
    按钮
  </FaButton>
</template>
`,Pt={class:`flex flex-wrap gap-4`},Ft=z({__name:`_disabled`,setup(e){return(e,t)=>(B(),F(`div`,Pt,[j(u,{disabled:``},{default:H(()=>[...t[0]||(t[0]=[M(` 禁用按钮 `,-1)])]),_:1}),j(u,{variant:`outline`,disabled:``},{default:H(()=>[...t[1]||(t[1]=[M(` 禁用边框按钮 `,-1)])]),_:1}),j(u,{variant:`secondary`,disabled:``},{default:H(()=>[...t[2]||(t[2]=[M(` 禁用次要按钮 `,-1)])]),_:1})]))}}),It=`<script setup lang="ts">
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
`,Lt=z({__name:`_group-basic`,setup(e){return(e,t)=>(B(),U(d,null,{default:H(()=>[j(u,null,{default:H(()=>[j(r,{name:`i-mdi:eye`,class:`size-4`}),t[0]||(t[0]=M(` 查看详情 `,-1))]),_:1}),j(u,null,{default:H(()=>[j(r,{name:`i-mdi:pencil`,class:`size-4`}),t[1]||(t[1]=M(` 编辑 `,-1))]),_:1}),j(u,null,{default:H(()=>[j(r,{name:`i-mdi:delete`,class:`size-4`}),t[2]||(t[2]=M(` 删除 `,-1))]),_:1})]),_:1}))}}),Rt=`<script setup lang="ts">
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
`,zt=z({__name:`_group-nested`,setup(e){return(e,t)=>(B(),U(d,null,{default:H(()=>[j(d,null,{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...t[0]||(t[0]=[M(` 1 `,-1)])]),_:1}),j(u,{variant:`outline`},{default:H(()=>[...t[1]||(t[1]=[M(` 2 `,-1)])]),_:1}),j(u,{variant:`outline`},{default:H(()=>[...t[2]||(t[2]=[M(` 3 `,-1)])]),_:1}),j(u,{variant:`outline`},{default:H(()=>[...t[3]||(t[3]=[M(` 4 `,-1)])]),_:1}),j(u,{variant:`outline`},{default:H(()=>[...t[4]||(t[4]=[M(` 5 `,-1)])]),_:1})]),_:1}),j(d,null,{default:H(()=>[j(u,{variant:`outline`,size:`icon`},{default:H(()=>[j(r,{name:`i-ep:arrow-left`})]),_:1}),j(u,{variant:`outline`,size:`icon`},{default:H(()=>[j(r,{name:`i-ep:arrow-right`})]),_:1})]),_:1})]),_:1}))}}),Bt=`<script setup lang="ts">
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
`,Vt={class:`flex flex-col gap-4 items-start`},Ht=z({__name:`_group-separator`,setup(e){return(e,t)=>(B(),F(`div`,Vt,[j(d,{separator:``},{default:H(()=>[j(u,null,{default:H(()=>[j(r,{name:`i-mdi:eye`,class:`size-4`}),t[0]||(t[0]=M(` 查看详情 `,-1))]),_:1}),j(u,null,{default:H(()=>[j(r,{name:`i-mdi:pencil`,class:`size-4`}),t[1]||(t[1]=M(` 编辑 `,-1))]),_:1}),j(u,null,{default:H(()=>[j(r,{name:`i-mdi:delete`,class:`size-4`}),t[2]||(t[2]=M(` 删除 `,-1))]),_:1})]),_:1}),j(d,{orientation:`vertical`,separator:``},{default:H(()=>[j(u,null,{default:H(()=>[j(r,{name:`i-mdi:eye`,class:`size-4`}),t[3]||(t[3]=M(` 查看详情 `,-1))]),_:1}),j(u,null,{default:H(()=>[j(r,{name:`i-mdi:pencil`,class:`size-4`}),t[4]||(t[4]=M(` 编辑 `,-1))]),_:1}),j(u,null,{default:H(()=>[j(r,{name:`i-mdi:delete`,class:`size-4`}),t[5]||(t[5]=M(` 删除 `,-1))]),_:1})]),_:1}),t[9]||(t[9]=P(`p`,null,`按钮如果为 outline 则无需设置分割线`,-1)),j(d,null,{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[j(r,{name:`i-mdi:eye`,class:`size-4`}),t[6]||(t[6]=M(` 查看详情 `,-1))]),_:1}),j(u,{variant:`outline`},{default:H(()=>[j(r,{name:`i-mdi:pencil`,class:`size-4`}),t[7]||(t[7]=M(` 编辑 `,-1))]),_:1}),j(u,{variant:`outline`},{default:H(()=>[j(r,{name:`i-mdi:delete`,class:`size-4`}),t[8]||(t[8]=M(` 删除 `,-1))]),_:1})]),_:1})]))}}),Ut=`<script setup lang="ts">
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
`,Wt=z({__name:`_group-vertical`,setup(e){return(e,t)=>(B(),U(d,{orientation:`vertical`},{default:H(()=>[j(u,null,{default:H(()=>[j(r,{name:`i-mdi:eye`,class:`size-4`}),t[0]||(t[0]=M(` 查看详情 `,-1))]),_:1}),j(u,null,{default:H(()=>[j(r,{name:`i-mdi:pencil`,class:`size-4`}),t[1]||(t[1]=M(` 编辑 `,-1))]),_:1}),j(u,null,{default:H(()=>[j(r,{name:`i-mdi:delete`,class:`size-4`}),t[2]||(t[2]=M(` 删除 `,-1))]),_:1})]),_:1}))}}),Gt=`<script setup lang="ts">
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
`,Kt={class:`flex flex-col gap-4 items-start`},qt=z({__name:`_group-with-components`,setup(e){let t=D(`CNY`);return(e,n)=>(B(),F(`div`,Kt,[j(d,null,{default:H(()=>[j(v),j(u,{variant:`outline`,size:`icon`},{default:H(()=>[j(r,{name:`i-ep:search`})]),_:1})]),_:1}),j(d,null,{default:H(()=>[j(y,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),options:[{label:`¥`,value:`CNY`},{label:`$`,value:`USD`},{label:`€`,value:`EUR`}],class:`gap-1 w-inherit`},null,8,[`modelValue`]),j(v,{placeholder:`10.00`})]),_:1}),j(d,null,{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...n[1]||(n[1]=[M(` 关注 `,-1)])]),_:1}),j(o,{items:[[{label:`加入黑名单`},{label:`分享到群聊`},{label:`反馈举报`}],[{label:`取消关注`}]]},{default:H(()=>[j(u,{variant:`outline`,size:`icon`},{default:H(()=>[j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1})]),_:1})]))}}),Jt=`<script setup lang="ts">
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
`,Yt={class:`flex flex-wrap gap-4`},Xt=z({__name:`_loading`,setup(e){return(e,t)=>(B(),F(`div`,Yt,[j(u,{loading:``},{default:H(()=>[...t[0]||(t[0]=[M(` 加载中 `,-1)])]),_:1}),j(u,{variant:`outline`,loading:``},{default:H(()=>[...t[1]||(t[1]=[M(` 保存中 `,-1)])]),_:1}),j(u,{variant:`secondary`,loading:``},{default:H(()=>[...t[2]||(t[2]=[M(` 提交中 `,-1)])]),_:1})]))}}),Zt=`<script setup lang="ts">
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
`,Qt={class:`flex flex-wrap gap-4 items-center`},$t=z({__name:`_size`,setup(e){return(e,t)=>(B(),F(`div`,Qt,[j(u,{size:`sm`},{default:H(()=>[...t[0]||(t[0]=[M(` 小按钮 `,-1)])]),_:1}),j(u,null,{default:H(()=>[...t[1]||(t[1]=[M(` 默认尺寸 `,-1)])]),_:1}),j(u,{size:`lg`},{default:H(()=>[...t[2]||(t[2]=[M(` 大按钮 `,-1)])]),_:1}),j(u,{size:`icon-sm`,variant:`outline`},{default:H(()=>[j(r,{name:`i-lucide:search`})]),_:1}),j(u,{size:`icon`,variant:`outline`},{default:H(()=>[j(r,{name:`i-lucide:settings`})]),_:1}),j(u,{size:`icon-lg`,variant:`outline`},{default:H(()=>[j(r,{name:`i-lucide:plus`})]),_:1})]))}}),en=`<script setup lang="ts">
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
`,tn={class:`flex flex-wrap gap-4`},nn=[{title:`基础`,component:Mt,componentRaw:Nt},{title:`变体`,component:z({__name:`_variant`,setup(e){return(e,t)=>(B(),F(`div`,tn,[j(u,null,{default:H(()=>[...t[0]||(t[0]=[M(` 默认按钮 `,-1)])]),_:1}),j(u,{variant:`destructive`},{default:H(()=>[...t[1]||(t[1]=[M(` 危险按钮 `,-1)])]),_:1}),j(u,{variant:`outline`},{default:H(()=>[...t[2]||(t[2]=[M(` 边框按钮 `,-1)])]),_:1}),j(u,{variant:`secondary`},{default:H(()=>[...t[3]||(t[3]=[M(` 次要按钮 `,-1)])]),_:1}),j(u,{variant:`ghost`},{default:H(()=>[...t[4]||(t[4]=[M(` 幽灵按钮 `,-1)])]),_:1}),j(u,{variant:`link`},{default:H(()=>[...t[5]||(t[5]=[M(` 链接按钮 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`尺寸`,component:$t,componentRaw:en},{title:`禁用`,component:Ft,componentRaw:It},{title:`加载`,component:Xt,componentRaw:Zt},{title:`按钮组 - 基础`,component:Lt,componentRaw:Rt},{title:`按钮组 - 垂直`,component:Wt,componentRaw:Gt},{title:`按钮组 - 分割线`,component:Ht,componentRaw:Ut},{title:`按钮组 - 嵌套`,component:zt,componentRaw:Bt},{title:`按钮组 - 与其他组件组合`,component:qt,componentRaw:Jt}],rn=z({__name:`_basic`,setup(e){return(e,t)=>(B(),U(We,{title:`卡片标题`,class:`w-80`},{default:H(()=>[...t[0]||(t[0]=[M(` 卡片内容 `,-1)])]),_:1}))}}),an=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaCard from '../index.vue'
<\/script>

<template>
  <FaCard title="卡片标题" class="w-80">
    卡片内容
  </FaCard>
</template>
`,on=z({__name:`_custom-style`,setup(e){return(e,t)=>(B(),U(We,{title:`自定义样式`,description:`通过 class、headerClass、contentClass 和 footerClass 调整区域样式。`,class:`py-0 gap-0 w-96 overflow-hidden`,"header-class":`bg-primary/8 py-4`,"content-class":`py-6 text-sm leading-6`,"footer-class":`bg-muted text-sm text-muted-foreground py-3`},{footer:H(()=>[...t[0]||(t[0]=[M(` 自定义页脚区域 `,-1)])]),default:H(()=>[t[1]||(t[1]=M(` 这里是自定义内容区域，可以根据业务场景调整间距、背景和边框。 `,-1))]),_:1}))}}),sn=`<script setup lang="ts">
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
`,cn=z({__name:`_description`,setup(e){return(e,t)=>(B(),U(We,{title:`卡片标题`,description:`这是一段辅助描述，用于补充说明卡片内容。`,class:`w-80`},{default:H(()=>[...t[0]||(t[0]=[M(` 卡片内容 `,-1)])]),_:1}))}}),ln=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaCard from '../index.vue'
<\/script>

<template>
  <FaCard title="卡片标题" description="这是一段辅助描述，用于补充说明卡片内容。" class="w-80">
    卡片内容
  </FaCard>
</template>
`,un={class:`flex gap-4 items-center justify-between`},dn={class:`flex gap-2 w-full justify-end`},fn=[{title:`基础`,component:rn,componentRaw:an},{title:`描述`,component:cn,componentRaw:ln},{title:`插槽`,component:z({__name:`_slot`,setup(e){return(e,t)=>(B(),U(We,{class:`w-96`},{header:H(()=>[P(`div`,un,[t[0]||(t[0]=P(`div`,null,[P(`div`,{class:`text-base font-semibold`},` 自定义头部 `),P(`div`,{class:`text-sm text-muted-foreground`},` header slot 会覆盖 title 和 description `)],-1)),j(r,{name:`i-lucide:badge-check`,class:`text-primary size-5`})])]),footer:H(()=>[P(`div`,dn,[j(u,{variant:`outline`},{default:H(()=>[...t[1]||(t[1]=[M(` 取消 `,-1)])]),_:1}),j(u,null,{default:H(()=>[...t[2]||(t[2]=[M(` 确定 `,-1)])]),_:1})])]),default:H(()=>[t[3]||(t[3]=M(` 卡片内容区域 `,-1))]),_:1}))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`自定义样式`,component:on,componentRaw:sn}],pn={class:`mt-4 space-y-2`},mn=z({__name:`_basic`,setup(e){return(e,t)=>(B(),U(ft,null,{trigger:H(({open:e})=>[j(u,null,{default:H(()=>[M(O(e?`收起`:`展开`),1)]),_:2},1024)]),default:H(()=>[P(`div`,pn,[(B(),F(V,null,I(5,e=>P(`div`,{key:e,class:`px-4 py-2 border rounded-md`},` 内容 `+O(e),1)),64))])]),_:1}))}}),hn=`<script setup lang="ts">
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
`,gn={class:`mt-4 space-y-2`},_n=[{title:`基础`,component:mn,componentRaw:hn},{title:`手动控制`,component:z({__name:`_controlled`,setup(e){let t=D(!1);return(e,n)=>(B(),F(V,null,[j(u,{onClick:n[0]||(n[0]=e=>t.value=!t.value)},{default:H(()=>[M(O(t.value?`收起`:`展开`),1)]),_:1}),j(ft,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e)},{default:H(()=>[P(`div`,gn,[(B(),F(V,null,I(5,e=>P(`div`,{key:e,class:`px-4 py-2 border rounded-md`},` 内容 `+O(e),1)),64))])]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
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
`}],vn={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},yn=z({__name:`_basic`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`打开`,handle:()=>n(`打开`)},{label:`编辑`,handle:()=>n(`编辑`)},{label:`复制`,handle:()=>n(`复制`)}]];return(e,t)=>(B(),U(pe,{items:i},{default:H(()=>[P(`div`,vn,[j(r,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),bn=`<script setup lang="ts">
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
`,xn={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},Sn=z({__name:`_disabled`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`打开`,handle:()=>n(`打开`)},{label:`复制`,disabled:!0,handle:()=>n(`复制`)},{label:`移动到`,disabled:!0,handle:()=>n(`移动到`)}],[{label:`刷新`,handle:()=>n(`刷新`)}]];return(e,t)=>(B(),U(pe,{items:i},{default:H(()=>[P(`div`,xn,[j(r,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),Cn=`<script setup lang="ts">
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
`,wn={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},Tn=z({__name:`_icon`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`打开`,icon:`i-lucide:folder-open`,handle:()=>n(`打开`)},{label:`重命名`,icon:`i-lucide:pencil`,handle:()=>n(`重命名`)},{label:`复制链接`,icon:`i-lucide:link`,handle:()=>n(`复制链接`)}],[{label:`下载`,icon:`i-lucide:download`,handle:()=>n(`下载`)}]];return(e,t)=>(B(),U(pe,{items:i},{default:H(()=>[P(`div`,wn,[j(r,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),En=`<script setup lang="ts">
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
`,Dn={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},On=z({__name:`_nested`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`打开`,handle:()=>n(`打开`)},{label:`更多操作`,items:[[{label:`保存页面`,handle:()=>n(`保存页面`)},{label:`导出为 PDF`,handle:()=>n(`导出为 PDF`)}],[{label:`复制路径`,handle:()=>n(`复制路径`)}]]}]];return(e,t)=>(B(),U(pe,{items:i},{default:H(()=>[P(`div`,Dn,[j(r,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),kn=`<script setup lang="ts">
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
`,An={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},jn=[{title:`基础`,component:yn,componentRaw:bn},{title:`图标`,component:Tn,componentRaw:En},{title:`警告`,component:z({__name:`_warning`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`查看详情`,handle:()=>n(`查看详情`)},{label:`复制副本`,handle:()=>n(`复制副本`)}],[{label:`删除`,variant:`destructive`,handle:()=>n(`删除`)}]];return(e,t)=>(B(),U(pe,{items:i},{default:H(()=>[P(`div`,An,[j(r,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`禁用`,component:Sn,componentRaw:Cn},{title:`嵌套`,component:On,componentRaw:kn}],Mn=z({__name:`_basic`,setup(e){let t=[{label:`Username`,value:`kooriokami`},{label:`Telephone`,value:`18100000000`},{label:`Place`,value:`Suzhou`},{label:`Remarks`,value:`School`},{label:`Address`,value:`No.1188, Wuzhong Avenue`,span:2}];return(e,n)=>(B(),U(xt,{items:t,"label-width":`120px`}))}}),Nn=`<script setup lang="ts">
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
`,Pn=z({__name:`_border`,setup(e){let t=[{label:`Username`,value:`kooriokami`},{label:`Telephone`,value:`18100000000`},{label:`Place`,value:`Suzhou`},{label:`Remarks`,value:`School`},{label:`Address`,value:`No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province`,span:2}];return(e,n)=>(B(),U(xt,{items:t,border:``,"label-width":`120px`}))}}),Fn=`<script setup lang="ts">
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
`,In={class:`inline-flex gap-2 items-center`},Ln={class:`inline-flex gap-2 items-center`},Rn={class:`inline-flex gap-2 items-center`},zn={class:`inline-flex gap-2 items-center`},Bn={class:`inline-flex gap-2 items-center`},Vn=[{title:`基础`,component:Mn,componentRaw:Nn},{title:`边框`,component:Pn,componentRaw:Fn},{title:`纵向布局`,component:z({__name:`_vertical`,setup(e){let t=[{label:`早餐`,value:`苹果`},{label:`早午餐`,value:`苹果`},{label:`午餐`,value:`苹果`},{label:`晚餐`,value:`苹果`},{label:`正餐`,value:`苹果`},{label:`夜宵`,value:`苹果`},{label:`早餐`,value:`苹果`},{label:`早午餐`,value:`苹果`,span:2},{label:`晚餐`,value:`苹果`,span:3}];return(e,n)=>(B(),U(xt,{items:t,column:6,direction:`vertical`,border:``}))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`自定义插槽`,component:z({__name:`_slot`,setup(e){let t=[{key:`username`,label:`Username`,value:`kooriokami`,icon:`i-lucide:user`},{key:`telephone`,label:`Telephone`,value:`18100000000`,icon:`i-lucide:smartphone`},{key:`place`,label:`Place`,value:`Suzhou`,icon:`i-lucide:map-pin`},{key:`remarks`,label:`Remarks`,value:`School`,icon:`i-lucide:notebook-text`,tagVariant:`outline`},{key:`address`,label:`Address`,value:`No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province`,icon:`i-lucide:building-2`,span:2}];return(e,n)=>(B(),U(xt,{items:t,border:``,"label-width":`200px`},{"label-username":H(({item:e,label:t})=>[P(`div`,In,[j(r,{name:e.icon,class:`size-4`},null,8,[`name`]),P(`span`,null,O(t),1)])]),"label-telephone":H(({item:e,label:t})=>[P(`div`,Ln,[j(r,{name:e.icon,class:`size-4`},null,8,[`name`]),P(`span`,null,O(t),1)])]),"label-place":H(({item:e,label:t})=>[P(`div`,Rn,[j(r,{name:e.icon,class:`size-4`},null,8,[`name`]),P(`span`,null,O(t),1)])]),"label-remarks":H(({item:e,label:t})=>[P(`div`,zn,[j(r,{name:e.icon,class:`size-4`},null,8,[`name`]),P(`span`,null,O(t),1)])]),"label-address":H(({item:e,label:t})=>[P(`div`,Bn,[j(r,{name:e.icon,class:`size-4`},null,8,[`name`]),P(`span`,null,O(t),1)])]),"value-remarks":H(({item:e,value:t})=>[j(_,{variant:e.tagVariant},{default:H(()=>[M(O(t),1)]),_:2},1032,[`variant`])]),_:1}))}}),componentRaw:`<script setup lang="ts">
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
`}],Hn=z({__name:`_basic`,setup(e){let t=D(!1);return(e,n)=>(B(),F(V,null,[j(u,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:H(()=>[...n[2]||(n[2]=[M(` 打开抽屉 `,-1)])]),_:1}),j(f,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`抽屉标题`},{default:H(()=>[...n[3]||(n[3]=[P(`div`,{class:`text-sm text-muted-foreground`},` 这里是抽屉内容区域。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Un=`<script setup lang="ts">
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
`,Wn={class:`flex flex-wrap gap-2`},Gn=z({__name:`_center-border-loading`,setup(e){let t=D(!1),n=D(!1),r=D(!1),i=D(!1);function a(){r.value=!0,i.value=!0,window.setTimeout(()=>{i.value=!1},1800)}return(e,o)=>(B(),F(V,null,[P(`div`,Wn,[j(u,{onClick:o[0]||(o[0]=e=>t.value=!0)},{default:H(()=>[...o[5]||(o[5]=[M(` 居中 `,-1)])]),_:1}),j(u,{variant:`outline`,onClick:o[1]||(o[1]=e=>n.value=!0)},{default:H(()=>[...o[6]||(o[6]=[M(` 无边框 `,-1)])]),_:1}),j(u,{variant:`secondary`,onClick:a},{default:H(()=>[...o[7]||(o[7]=[M(` 载入 `,-1)])]),_:1})]),j(f,{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=e=>t.value=e),title:`居中抽屉`,centered:``,"show-cancel-button":``},{default:H(()=>[...o[8]||(o[8]=[P(`div`,{class:`text-sm text-muted-foreground text-center`},` 标题、描述和底部按钮会居中显示。 `,-1)])]),_:1},8,[`modelValue`]),j(f,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=e=>n.value=e),title:`无边框抽屉`,bordered:!1,"show-cancel-button":``},{default:H(()=>[...o[9]||(o[9]=[P(`div`,{class:`text-sm text-muted-foreground`},` 头部和底部不显示分割线。 `,-1)])]),_:1},8,[`modelValue`]),j(f,{modelValue:r.value,"onUpdate:modelValue":o[4]||(o[4]=e=>r.value=e),title:`载入状态`,loading:i.value},{default:H(()=>[...o[10]||(o[10]=[P(`div`,{class:`text-sm text-muted-foreground`},` 抽屉主体区域会显示载入遮罩。 `,-1)])]),_:1},8,[`modelValue`,`loading`])],64))}}),Kn=`<script setup lang="ts">
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
`,qn={class:`flex flex-wrap gap-2`},Jn=z({__name:`_closable`,setup(e){let t=D(!1),n=D(!1);return(e,r)=>(B(),F(V,null,[P(`div`,qn,[j(u,{onClick:r[0]||(r[0]=e=>t.value=!0)},{default:H(()=>[...r[4]||(r[4]=[M(` 显示关闭按钮 `,-1)])]),_:1}),j(u,{variant:`outline`,onClick:r[1]||(r[1]=e=>n.value=!0)},{default:H(()=>[...r[5]||(r[5]=[M(` 隐藏关闭按钮 `,-1)])]),_:1})]),j(f,{modelValue:t.value,"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),title:`显示关闭按钮`,closable:``},{default:H(()=>[...r[6]||(r[6]=[M(` 右上角会显示关闭按钮。 `,-1)])]),_:1},8,[`modelValue`]),j(f,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),title:`隐藏关闭按钮`,closable:!1},{default:H(()=>[...r[7]||(r[7]=[M(` 右上角不会显示关闭按钮，可通过底部按钮关闭。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Yn=`<script setup lang="ts">
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
`,Xn=z({__name:`_custom-style`,setup(e){let t=D(!1);return(e,n)=>(B(),F(V,null,[j(u,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:H(()=>[...n[2]||(n[2]=[M(` 打开抽屉 `,-1)])]),_:1}),j(f,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`自定义样式`,description:`通过 contentClass、headerClass 和 footerClass 调整抽屉区域样式。`,"content-class":`sm:max-w-xl border-primary/30`,"header-class":`bg-primary/8`,"footer-class":`bg-muted/50`,"show-cancel-button":``},{default:H(()=>[...n[3]||(n[3]=[P(`div`,{class:`text-sm leading-6 p-4 rounded-lg bg-muted/50`},` 可以根据业务场景调整宽度、背景、边框和底部区域样式。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Zn=`<script setup lang="ts">
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
`,Qn=z({__name:`_event`,setup(e){let t=D(!1),n=Q();function r(e){n(`触发事件：${e}`)}return(e,n)=>(B(),F(V,null,[j(u,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:H(()=>[...n[8]||(n[8]=[M(` 打开抽屉 `,-1)])]),_:1}),j(f,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`触发事件`,"show-cancel-button":``,onOpen:n[2]||(n[2]=e=>r(`open`)),onOpened:n[3]||(n[3]=e=>r(`opened`)),onClose:n[4]||(n[4]=e=>r(`close`)),onClosed:n[5]||(n[5]=e=>r(`closed`)),onConfirm:n[6]||(n[6]=e=>r(`confirm`)),onCancel:n[7]||(n[7]=e=>r(`cancel`))},{default:H(()=>[...n[9]||(n[9]=[P(`div`,{class:`text-sm text-muted-foreground`},` 打开、关闭、确认和取消时会触发对应事件。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),$n=`<script setup lang="ts">
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
`,er=z({__name:`_functional`,setup(e){let t=Q(),{open:n}=a().create({title:`函数式调用`,description:`通过 useDrawer().create() 创建抽屉。`,content:Ae(`div`,{class:`text-sm text-muted-foreground leading-6`},`这里是函数式调用渲染的内容。`),showCancelButton:!0,onConfirm:()=>t(`确认操作`),onCancel:()=>t(`取消操作`)});return(e,t)=>(B(),U(u,{onClick:T(n)},{default:H(()=>[...t[0]||(t[0]=[M(` 打开抽屉 `,-1)])]),_:1},8,[`onClick`]))}}),tr=`<script setup lang="ts">
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
`,nr={class:`flex flex-wrap gap-2`},rr=z({__name:`_header-footer`,setup(e){let t=D(!1),n=D(!1);return(e,r)=>(B(),F(V,null,[P(`div`,nr,[j(u,{onClick:r[0]||(r[0]=e=>t.value=!0)},{default:H(()=>[...r[4]||(r[4]=[M(` 隐藏头部 `,-1)])]),_:1}),j(u,{variant:`outline`,onClick:r[1]||(r[1]=e=>n.value=!0)},{default:H(()=>[...r[5]||(r[5]=[M(` 隐藏底部 `,-1)])]),_:1})]),j(f,{modelValue:t.value,"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),header:!1},{default:H(()=>[...r[6]||(r[6]=[P(`div`,{class:`text-sm text-muted-foreground`},` 当前抽屉隐藏了头部区域。 `,-1)])]),_:1},8,[`modelValue`]),j(f,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),title:`隐藏底部`,footer:!1},{default:H(()=>[...r[7]||(r[7]=[P(`div`,{class:`text-sm text-muted-foreground`},` 当前抽屉隐藏了底部操作区。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),ir=`<script setup lang="ts">
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
`,ar={class:`flex flex-wrap gap-2`},or=z({__name:`_overlay-blur`,setup(e){let t=D(!1),n=D(!1);return(e,r)=>(B(),F(V,null,[P(`div`,ar,[j(u,{onClick:r[0]||(r[0]=e=>t.value=!0)},{default:H(()=>[...r[4]||(r[4]=[M(` 无遮罩 `,-1)])]),_:1}),j(u,{variant:`outline`,onClick:r[1]||(r[1]=e=>n.value=!0)},{default:H(()=>[...r[5]||(r[5]=[M(` 模糊遮罩 `,-1)])]),_:1})]),j(f,{modelValue:t.value,"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),title:`无遮罩`,overlay:!1},{default:H(()=>[...r[6]||(r[6]=[M(` 打开时不显示背景遮罩。 `,-1)])]),_:1},8,[`modelValue`]),j(f,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),title:`模糊遮罩`,"overlay-blur":``},{default:H(()=>[...r[7]||(r[7]=[M(` 打开时背景遮罩带模糊效果。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),sr=`<script setup lang="ts">
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
`,cr={class:`flex flex-wrap gap-2`},lr=z({__name:`_side`,setup(e){let t=A({top:!1,bottom:!1,left:!1,right:!1});return(e,n)=>(B(),F(V,null,[P(`div`,cr,[j(u,{onClick:n[0]||(n[0]=e=>t.top=!0)},{default:H(()=>[...n[8]||(n[8]=[M(` 上方 `,-1)])]),_:1}),j(u,{onClick:n[1]||(n[1]=e=>t.bottom=!0)},{default:H(()=>[...n[9]||(n[9]=[M(` 下方 `,-1)])]),_:1}),j(u,{onClick:n[2]||(n[2]=e=>t.left=!0)},{default:H(()=>[...n[10]||(n[10]=[M(` 左侧 `,-1)])]),_:1}),j(u,{onClick:n[3]||(n[3]=e=>t.right=!0)},{default:H(()=>[...n[11]||(n[11]=[M(` 右侧 `,-1)])]),_:1})]),j(f,{modelValue:t.top,"onUpdate:modelValue":n[4]||(n[4]=e=>t.top=e),side:`top`,title:`上方抽屉`},{default:H(()=>[...n[12]||(n[12]=[M(` 从页面顶部弹出。 `,-1)])]),_:1},8,[`modelValue`]),j(f,{modelValue:t.bottom,"onUpdate:modelValue":n[5]||(n[5]=e=>t.bottom=e),side:`bottom`,title:`下方抽屉`},{default:H(()=>[...n[13]||(n[13]=[M(` 从页面底部弹出。 `,-1)])]),_:1},8,[`modelValue`]),j(f,{modelValue:t.left,"onUpdate:modelValue":n[6]||(n[6]=e=>t.left=e),side:`left`,title:`左侧抽屉`},{default:H(()=>[...n[14]||(n[14]=[M(` 从页面左侧弹出。 `,-1)])]),_:1},8,[`modelValue`]),j(f,{modelValue:t.right,"onUpdate:modelValue":n[7]||(n[7]=e=>t.right=e),side:`right`,title:`右侧抽屉`},{default:H(()=>[...n[15]||(n[15]=[M(` 从页面右侧弹出。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),ur=`<script setup lang="ts">
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
`,dr={class:`pr-8 flex gap-3 items-start`},fr={class:`flex gap-2 w-full justify-end`},pr=[{title:`基础`,component:Hn,componentRaw:Un},{title:`弹出方向`,component:lr,componentRaw:ur},{title:`标题描述`,component:z({__name:`_title-description`,setup(e){let t=D(!1);return(e,n)=>(B(),F(V,null,[j(u,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:H(()=>[...n[2]||(n[2]=[M(` 打开抽屉 `,-1)])]),_:1}),j(f,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`成员信息`,description:`用于补充说明当前抽屉的内容和操作上下文。`},{default:H(()=>[...n[3]||(n[3]=[P(`div`,{class:`text-sm text-muted-foreground leading-6`},` 标题和描述会显示在默认头部区域中。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`显示/隐藏关闭按钮`,component:Jn,componentRaw:Yn},{title:`居中/边框/载入`,component:Gn,componentRaw:Kn},{title:`遮罩/模糊`,component:or,componentRaw:sr},{title:`显示/隐藏头部底部`,component:rr,componentRaw:ir},{title:`插槽`,component:z({__name:`_slot`,setup(e){let t=D(!1);return(e,n)=>(B(),F(V,null,[j(u,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:H(()=>[...n[4]||(n[4]=[M(` 打开抽屉 `,-1)])]),_:1}),j(f,{modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=e=>t.value=e)},{header:H(()=>[P(`div`,dr,[j(r,{name:`i-lucide:panel-right-open`,class:`text-primary mt-0.5 size-5`}),n[5]||(n[5]=P(`div`,null,[P(`div`,{class:`font-semibold`},` 自定义头部 `),P(`div`,{class:`text-sm text-muted-foreground`},` 使用 header 插槽替换默认标题。 `)],-1))])]),footer:H(()=>[P(`div`,fr,[j(u,{variant:`outline`,onClick:n[1]||(n[1]=e=>t.value=!1)},{default:H(()=>[...n[6]||(n[6]=[M(` 取消 `,-1)])]),_:1}),j(u,{onClick:n[2]||(n[2]=e=>t.value=!1)},{default:H(()=>[...n[7]||(n[7]=[M(` 保存 `,-1)])]),_:1})])]),default:H(()=>[n[8]||(n[8]=P(`div`,{class:`text-sm text-muted-foreground`},` 这里是默认插槽内容。 `,-1))]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`自定义样式`,component:Xn,componentRaw:Zn},{title:`触发事件`,component:Qn,componentRaw:$n},{title:`函数式调用`,component:er,componentRaw:tr}],mr={class:`flex flex-wrap gap-2`},hr=z({__name:`_align`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`个人设置`,icon:`i-lucide:user`,handle:()=>n(`个人设置`)},{label:`账号安全`,icon:`i-lucide:shield`,handle:()=>n(`账号安全`)}]];return(e,t)=>(B(),F(`div`,mr,[j(o,{items:i,align:`start`},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[0]||(t[0]=M(` Start `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),j(o,{items:i,align:`center`},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[1]||(t[1]=M(` Center `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),j(o,{items:i,align:`end`},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[2]||(t[2]=M(` End `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1})]))}}),gr=`<script setup lang="ts">
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
`,_r=z({__name:`_basic`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`查看详情`,handle:()=>n(`查看详情`)},{label:`编辑`,handle:()=>n(`编辑`)},{label:`复制`,handle:()=>n(`复制`)}]];return(e,t)=>(B(),U(o,{items:i},{default:H(()=>[j(u,null,{default:H(()=>[t[0]||(t[0]=M(` 操作 `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),vr=`<script setup lang="ts">
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
`,yr=z({__name:`_disabled`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`打开`,handle:()=>n(`打开`)},{label:`复制`,disabled:!0,handle:()=>n(`复制`)},{label:`移动到`,disabled:!0,handle:()=>n(`移动到`)}],[{label:`刷新`,handle:()=>n(`刷新`)}]];return(e,t)=>(B(),U(o,{items:i},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[0]||(t[0]=M(` 更多操作 `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),br=`<script setup lang="ts">
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
`,xr=z({__name:`_icon`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`打开`,icon:`i-lucide:folder-open`,handle:()=>n(`打开`)},{label:`重命名`,icon:`i-lucide:pencil`,handle:()=>n(`重命名`)},{label:`复制链接`,icon:`i-lucide:link`,handle:()=>n(`复制链接`)}],[{label:`下载`,icon:`i-lucide:download`,handle:()=>n(`下载`)}]];return(e,t)=>(B(),U(o,{items:i},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[0]||(t[0]=M(` 文件操作 `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),Sr=`<script setup lang="ts">
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
`,Cr=z({__name:`_nested`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`打开`,handle:()=>n(`打开`)},{label:`更多操作`,items:[[{label:`保存页面`,handle:()=>n(`保存页面`)},{label:`导出为 PDF`,handle:()=>n(`导出为 PDF`)}],[{label:`复制路径`,handle:()=>n(`复制路径`)}]]}]];return(e,t)=>(B(),U(o,{items:i},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[0]||(t[0]=M(` 页面操作 `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),wr=`<script setup lang="ts">
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
`,Tr={class:`flex flex-wrap gap-2`},Er=z({__name:`_offset`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`新建文件`,icon:`i-lucide:file-plus`,handle:()=>n(`新建文件`)},{label:`新建文件夹`,icon:`i-lucide:folder-plus`,handle:()=>n(`新建文件夹`)}]];return(e,t)=>(B(),F(`div`,Tr,[j(o,{items:i,"side-offset":12},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[0]||(t[0]=M(` Side offset `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),j(o,{items:i,align:`start`,"align-offset":24},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[1]||(t[1]=M(` Align offset `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),j(o,{items:i,"side-offset":12,"align-offset":-24},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[2]||(t[2]=M(` Both `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1})]))}}),Dr=`<script setup lang="ts">
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
`,Or={class:`flex flex-wrap gap-2`},kr=[{title:`基础`,component:_r,componentRaw:vr},{title:`图标`,component:xr,componentRaw:Sr},{title:`警告`,component:z({__name:`_warning`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`查看详情`,handle:()=>n(`查看详情`)},{label:`复制副本`,handle:()=>n(`复制副本`)}],[{label:`删除`,variant:`destructive`,handle:()=>n(`删除`)}]];return(e,t)=>(B(),U(o,{items:i},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[0]||(t[0]=M(` 项目操作 `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`禁用`,component:yr,componentRaw:br},{title:`嵌套`,component:Cr,componentRaw:wr},{title:`弹出方向`,component:z({__name:`_side`,setup(e){let t=Q();function n(e){t(e)}let i=[[{label:`Preview`,icon:`i-lucide:eye`,handle:()=>n(`Preview`)},{label:`Duplicate`,icon:`i-lucide:copy`,handle:()=>n(`Duplicate`)}]];return(e,t)=>(B(),F(`div`,Or,[j(o,{items:i,side:`top`},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[0]||(t[0]=M(` Top `,-1)),j(r,{name:`i-ep:caret-top`})]),_:1})]),_:1}),j(o,{items:i,side:`right`},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[1]||(t[1]=M(` Right `,-1)),j(r,{name:`i-ep:caret-right`})]),_:1})]),_:1}),j(o,{items:i,side:`bottom`},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[2]||(t[2]=M(` Bottom `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),j(o,{items:i,side:`left`},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[t[3]||(t[3]=M(` Left `,-1)),j(r,{name:`i-ep:caret-left`})]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`对齐方式`,component:hr,componentRaw:gr},{title:`偏移`,component:Er,componentRaw:Dr}],Ar=[{title:`基础`,component:z({__name:`_basic`,setup(e){let t=Q(),n=E([]);function r(){t.success(`模拟上传成功`)}return(e,t)=>(B(),U(m,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>e.data.url,multiple:``,onOnSuccess:r},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`上传前校验、限制数量、点击事件`,component:z({__name:`_validation`,setup(e){let t=Q(),n=E([{name:`logo.svg`,size:1048576,url:`https://fantastic-admin.hurui.me/logo.svg`}]);function r(e){let n=e.type===`image/png`,r=e.size<=204800;return n?r?!0:(t.error(`文件大小不能超过 200KB`),!1):(t.error(`只能上传 PNG 文件`),!1)}function i(){t.success(`模拟上传成功`)}function a(e){t.info(e.name,{description:e.url})}return(e,t)=>(B(),U(m,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>e.data.url,"before-upload":r,multiple:``,max:5,onOnSuccess:i,onOnClick:a},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`插槽`,component:z({__name:`_slot`,setup(e){let t=Q(),n=E([]);function i(){t.success(`模拟上传成功`)}return(e,t)=>(B(),U(m,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>e.data.url,multiple:``,onOnSuccess:i},{default:H(()=>[j(r,{name:`i-lucide:folder-up`,class:`text-3xl text-primary mb-2`}),t[1]||(t[1]=P(`div`,{class:`text-sm font-medium`},` 上传项目附件 `,-1)),t[2]||(t[2]=P(`div`,{class:`text-xs text-muted-foreground mt-1`},` 支持拖拽、点击选择或粘贴文件 `,-1))]),_:1},8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`自定义上传请求`,component:z({__name:`_custom-request`,setup(e){let t=Q(),n=E([]);async function r({file:e,onProgress:t}){return t(30),await new Promise(e=>setTimeout(e,300)),t(100),{url:URL.createObjectURL(e),name:e.name}}function i(){t.success(`自定义上传完成`)}return(e,t)=>(B(),U(m,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),"http-request":r,"after-upload":e=>e.url,max:3,onOnSuccess:i},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`文件夹上传`,component:z({__name:`_directory`,setup(e){let t=E([]);async function n({file:e,onProgress:t}){return t(50),await new Promise(e=>setTimeout(e,200)),t(100),{url:URL.createObjectURL(e),name:e.name}}return(e,r)=>(B(),U(m,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),directory:``,max:0,"http-request":n,"after-upload":e=>e.url},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
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
`}],jr={class:`gap-4 grid max-w-160`},Mr={key:0,class:`text-sm m-0 p-4 rounded-md bg-muted`},Nr=z({__name:`_async`,setup(e){let t=D(``),n=E({username:``,email:``}),r=[`admin`,`root`,`fantastic`],i={async username(e){return e?e.length<3?`用户名至少 3 个字符`:await a(e)?!0:`该用户名已被占用`:`请输入用户名`},email(e){return/^\S[^\s@]*@\S[^\s.]*\.\S+$/.test(e)?!0:`请输入有效邮箱`}};async function a(e){return await o(2e3),!r.includes(e.trim().toLowerCase())}function o(e){return new Promise(t=>window.setTimeout(t,e))}function s(e){t.value=JSON.stringify(e,null,2)}return(e,r)=>(B(),F(`div`,jr,[j(J,{model:n.value,"validation-schema":i,onSubmit:s},{default:H(({isSubmitting:e})=>[j(q,{name:`username`,label:`用户名`,required:``,description:`输入 admin / root / fantastic 会返回占用错误`},{default:H(()=>[j(v,{placeholder:`请输入用户名`,class:`w-full`})]),_:1}),j(q,{name:`email`,label:`邮箱`,required:``},{default:H(()=>[j(v,{type:`email`,placeholder:`name@example.com`,class:`w-full`})]),_:1}),j(u,{type:`submit`,loading:e},{default:H(()=>[...r[0]||(r[0]=[M(` 提交 `,-1)])]),_:1},8,[`loading`])]),_:1},8,[`model`]),t.value?(B(),F(`pre`,Mr,O(t.value),1)):G(``,!0)]))}}),Pr=`<script setup lang="ts">
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
`,Fr={class:`gap-4 grid max-w-160`},Ir={class:`flex gap-2`},Lr={key:0,class:`text-sm m-0 p-4 rounded-md bg-muted`},Rr=z({__name:`_basic`,setup(e){let t=D(``),n=E({account:``,role:``,remark:``}),r=[{label:`管理员`,value:`admin`},{label:`运营`,value:`operator`},{label:`访客`,value:`guest`}],i={account(e){return e?!0:`请输入账号`},role(e){return e?!0:`请选择角色`},remark(e){return!e||e.length>=6||`备注至少 6 个字符`}};function a(e){t.value=JSON.stringify(e,null,2)}return(e,o)=>(B(),F(`div`,Fr,[j(J,{model:n.value,"validation-schema":i,onSubmit:a},{default:H(()=>[j(q,{name:`account`,label:`账号`,required:``,description:`账号将作为登录名使用`},{default:H(()=>[j(v,{placeholder:`请输入账号`,class:`w-full`})]),_:1}),j(q,{name:`role`,label:`角色`,required:``},{default:H(()=>[j(y,{options:r,placeholder:`请选择角色`,class:`w-full`})]),_:1}),j(q,{name:`remark`,label:`备注`},{default:H(()=>[j(de,{placeholder:`请输入至少 6 个字符`,class:`w-full`})]),_:1}),P(`div`,Ir,[j(u,{type:`submit`},{default:H(()=>[...o[0]||(o[0]=[M(` 提交 `,-1)])]),_:1}),j(u,{type:`reset`,variant:`outline`},{default:H(()=>[...o[1]||(o[1]=[M(` 重置 `,-1)])]),_:1})])]),_:1},8,[`model`]),t.value?(B(),F(`pre`,Lr,O(t.value),1)):G(``,!0)]))}}),zr=`<script setup lang="ts">
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
`,Br={class:`gap-4 grid max-w-160`},Vr={class:`flex flex-wrap gap-2 max-w-full items-center`},Hr=[`title`],Ur=[`onClick`],Wr={key:0,class:`text-sm m-0 p-4 rounded-md bg-muted`},Gr=z({__name:`_composite`,setup(e){let t=D(``),n=D(``),i=E({auths:[]}),a={auths(e){return e.length?!0:`请至少添加一个权限标识`}};function o(){let e=n.value.trim();if(e){if(i.value.auths.includes(e)){n.value=``;return}i.value.auths=[...i.value.auths,e],n.value=``}}function s(e){i.value.auths=i.value.auths.filter(t=>t!==e)}function c(e){t.value=JSON.stringify(e,null,2)}return(e,l)=>(B(),F(`div`,Br,[j(J,{model:i.value,"validation-schema":a,onSubmit:c},{default:H(()=>[j(q,{name:`auths`,label:`权限标识`,required:``,"auto-bind":!1},{default:H(()=>[P(`div`,Vr,[(B(!0),F(V,null,I(i.value.auths,e=>(B(),F(`div`,{key:e,class:`text-xs text-secondary-foreground px-2.5 py-2 border rounded-lg bg-secondary inline-flex gap-1.5 max-w-full items-center`},[P(`span`,{class:`truncate`,title:e},O(e),9,Hr),P(`button`,{type:`button`,class:`flex-center size-4`,onClick:t=>s(e)},[j(r,{name:`i-ep:close`})],8,Ur)]))),128)),j(v,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e),placeholder:`请输入权限标识`,class:`w-50`,onKeyup:Ve(o,[`enter`])},null,8,[`modelValue`]),j(u,{type:`button`,variant:`outline`,onClick:o},{default:H(()=>[...l[1]||(l[1]=[M(` 新增 `,-1)])]),_:1})])]),_:1}),j(u,{type:`submit`},{default:H(()=>[...l[2]||(l[2]=[M(` 提交 `,-1)])]),_:1})]),_:1},8,[`model`]),t.value?(B(),F(`pre`,Wr,O(t.value),1)):G(``,!0)]))}}),Kr=`<script setup lang="ts">
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
`,qr={class:`gap-4 grid max-w-160`},Jr={class:`flex gap-2 items-center`},Yr={class:`flex gap-2`},Xr={key:0,class:`text-sm m-0 p-4 rounded-md bg-muted`},Zr=z({__name:`_disabled`,setup(e){let t=D(!0),n=D(``),r=E({name:`Fantastic-admin`,role:`admin`,remark:`禁用状态下，表单项内的控件会同步不可编辑。`}),i=[{label:`管理员`,value:`admin`},{label:`运营`,value:`operator`},{label:`访客`,value:`guest`}];function a(e){n.value=JSON.stringify(e,null,2)}return(e,o)=>(B(),F(`div`,qr,[P(`div`,Jr,[j(oe,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e)},null,8,[`modelValue`]),o[1]||(o[1]=P(`span`,{class:`text-sm`},`禁用表单`,-1))]),j(J,{disabled:t.value,model:r.value,onSubmit:a},{default:H(()=>[j(q,{name:`name`,label:`项目名称`},{default:H(()=>[j(v,{class:`w-full`})]),_:1}),j(q,{name:`role`,label:`角色`},{default:H(()=>[j(y,{options:i,class:`w-full`})]),_:1}),j(q,{name:`remark`,label:`备注`},{default:H(()=>[j(de,{class:`w-full`})]),_:1}),P(`div`,Yr,[j(u,{type:`submit`,disabled:t.value},{default:H(()=>[...o[2]||(o[2]=[M(` 提交 `,-1)])]),_:1},8,[`disabled`]),j(u,{type:`reset`,variant:`outline`,disabled:t.value},{default:H(()=>[...o[3]||(o[3]=[M(` 重置 `,-1)])]),_:1},8,[`disabled`])])]),_:1},8,[`disabled`,`model`]),n.value?(B(),F(`pre`,Xr,O(n.value),1)):G(``,!0)]))}}),Qr=`<script setup lang="ts">
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
`,$r={class:`gap-4 grid max-w-170`},ei={class:`flex gap-3 items-center justify-between`},ti={class:`text-sm font-medium`},ni={class:`flex flex-wrap gap-2`},ri={key:0,class:`text-sm m-0 p-4 rounded-md bg-muted`},ii=z({__name:`_dynamic`,setup(e){let t=Fe(`formRef`),n=D(``),r=E({contacts:[i(`张三`,`13800138000`)]});function i(e=``,t=``){return{name:e,phone:t}}function a(){r.value.contacts.push(i()),t.value?.clearValidate(),n.value=``}function o(e){r.value.contacts.length<=1||(r.value.contacts.splice(e,1),t.value?.clearValidate(),n.value=``)}function s(e){return e?.trim()?!0:`请输入联系人姓名`}function c(e){return/^1[3-9]\d{9}$/.test(e??``)?!0:`请输入有效手机号`}function l(e){n.value=JSON.stringify(e,null,2)}return(e,i)=>(B(),F(`div`,$r,[j(J,{ref_key:`formRef`,ref:t,model:r.value,onSubmit:l},{default:H(()=>[(B(!0),F(V,null,I(r.value.contacts,(e,t)=>(B(),F(`div`,{key:t,class:`p-3 border rounded-md gap-3 grid`},[P(`div`,ei,[P(`div`,ti,` 联系人 `+O(t+1),1),j(u,{type:`button`,variant:`outline`,size:`sm`,disabled:r.value.contacts.length<=1,onClick:e=>o(t)},{default:H(()=>[...i[0]||(i[0]=[M(` 删除 `,-1)])]),_:1},8,[`disabled`,`onClick`])]),j(q,{name:`contacts[${t}].name`,label:`姓名`,required:``,rules:s},{default:H(()=>[j(v,{placeholder:`请输入姓名`,class:`w-full`})]),_:1},8,[`name`]),j(q,{name:`contacts[${t}].phone`,label:`手机号`,required:``,rules:c},{default:H(()=>[j(v,{type:`tel`,placeholder:`请输入手机号`,class:`w-full`})]),_:1},8,[`name`])]))),128)),P(`div`,ni,[j(u,{type:`button`,variant:`outline`,onClick:a},{default:H(()=>[...i[1]||(i[1]=[M(` 新增联系人 `,-1)])]),_:1}),j(u,{type:`submit`},{default:H(()=>[...i[2]||(i[2]=[M(` 提交 `,-1)])]),_:1})])]),_:1},8,[`model`]),n.value?(B(),F(`pre`,ri,O(n.value),1)):G(``,!0)]))}}),ai=`<script setup lang="ts">
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
`,oi={class:`gap-4 grid max-w-170`},si={class:`gap-4 grid sm:grid-cols-[minmax(0,1fr)_200px]`},ci={class:`gap-2 grid`},li={class:`gap-2 grid`},ui=z({__name:`_layout`,setup(e){let t=D(`left`),n=D(150),r=E({name:`Fantastic-admin`,email:`admin@example.com`,phone:`13800138000`}),i=[{label:`top`,value:`top`},{label:`left`,value:`left`},{label:`right`,value:`right`}];return(e,a)=>(B(),F(`div`,oi,[P(`div`,si,[P(`div`,ci,[a[2]||(a[2]=P(`div`,{class:`text-sm font-medium`},` label-placement `,-1)),j(Ot,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),options:i,class:`flex flex-wrap gap-4`},null,8,[`modelValue`])]),P(`div`,li,[a[3]||(a[3]=P(`div`,{class:`text-sm font-medium`},` label-width `,-1)),j(Ue,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e),min:80,max:240,step:10,class:`w-full`},null,8,[`modelValue`])])]),j(J,{model:r.value,"label-placement":t.value,"label-width":n.value},{default:H(()=>[j(q,{name:`name`,label:`项目名称`},{default:H(()=>[j(v,{class:`w-full`})]),_:1}),j(q,{name:`email`,label:`邮箱地址`},{default:H(()=>[j(v,{type:`email`,class:`w-full`})]),_:1}),j(q,{name:`phone`,label:`联系电话`},{default:H(()=>[j(v,{type:`tel`,class:`w-full`})]),_:1})]),_:1},8,[`model`,`label-placement`,`label-width`])]))}}),di=`<script setup lang="ts">
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
`,fi={class:`gap-4 grid max-w-160`},pi={class:`flex flex-wrap gap-2`},mi={key:0,class:`text-sm text-muted-foreground`},hi=z({__name:`_methods`,setup(e){let t=Fe(`formRef`),n=D(``),r=E({email:``,nickname:``}),i={email(e){return/^\S[^\s@]*@\S[^\s.]*\.\S+$/.test(e)?!0:`请输入有效邮箱`},nickname(e){return e.length>=2||`昵称至少 2 个字符`}};async function a(){await t.value?.submit()}function o(){n.value=`提交成功`}async function s(){let e=await t.value?.validate();n.value=e?.valid?`校验通过`:`校验未通过`}function c(){t.value?.setFieldValue(`email`,`admin@example.com`),t.value?.setFieldValue(`nickname`,`Fantastic`)}function l(){t.value?.resetFields(),n.value=``}return(e,d)=>(B(),F(`div`,fi,[j(J,{ref_key:`formRef`,ref:t,model:r.value,"validation-schema":i,"scroll-to-error":``,onSubmit:o},{default:H(()=>[j(q,{name:`email`,label:`邮箱`,required:``},{default:H(()=>[j(v,{type:`email`,class:`w-full`})]),_:1}),j(q,{name:`nickname`,label:`昵称`,required:``},{default:H(()=>[j(v,{class:`w-full`})]),_:1}),P(`div`,pi,[j(u,{type:`button`,onClick:a},{default:H(()=>[...d[0]||(d[0]=[M(` 提交 `,-1)])]),_:1}),j(u,{type:`button`,onClick:s},{default:H(()=>[...d[1]||(d[1]=[M(` 校验 `,-1)])]),_:1}),j(u,{type:`button`,variant:`outline`,onClick:c},{default:H(()=>[...d[2]||(d[2]=[M(` 填充 `,-1)])]),_:1}),j(u,{type:`button`,variant:`outline`,onClick:l},{default:H(()=>[...d[3]||(d[3]=[M(` 重置 `,-1)])]),_:1})])]),_:1},8,[`model`]),n.value?(B(),F(`div`,mi,O(n.value),1)):G(``,!0)]))}}),gi=`<script setup lang="ts">
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
`,_i={class:`gap-4 grid max-w-160`},vi={class:`flex gap-2 items-center`},yi={key:0,class:`text-sm m-0 p-4 rounded-md bg-muted`},bi=[{title:`基础`,component:Rr,componentRaw:zr},{title:`禁用`,component:Zr,componentRaw:Qr},{title:`异步验证`,component:Nr,componentRaw:Pr},{title:`动态表单`,component:ii,componentRaw:ai},{title:`复合输入`,component:Gr,componentRaw:Kr},{title:`布局`,component:ui,componentRaw:di},{title:`插槽`,component:z({__name:`_slot`,setup(e){let t=D(``),r=E({email:``,agreement:!1}),i={email(e){return/^\S[^\s@]*@\S[^\s.]*\.\S+$/.test(e)?!0:`请输入有效邮箱`},agreement(e){return e?!0:`请先同意服务协议`}};function a(e){t.value=JSON.stringify(e,null,2)}return(e,o)=>(B(),F(`div`,_i,[j(J,{model:r.value,"validation-schema":i,onSubmit:a},{default:H(()=>[j(q,{name:`email`,required:``},{label:H(()=>[...o[0]||(o[0]=[P(`span`,null,`邮箱`,-1),P(`span`,{class:`text-destructive`},`*`,-1)])]),description:H(()=>[...o[1]||(o[1]=[M(` 用于接收账号通知和安全提醒 `,-1)])]),default:H(()=>[j(v,{type:`email`,placeholder:`name@example.com`,class:`w-full`})]),_:1}),j(q,{name:`agreement`},{default:H(({componentField:e})=>[P(`div`,vi,[j(T(n),{"model-value":e.modelValue,"onUpdate:modelValue":t=>e[`onUpdate:modelValue`]?.(t)},null,8,[`model-value`,`onUpdate:modelValue`]),o[2]||(o[2]=P(`span`,{class:`text-sm`},`我已阅读并同意服务协议`,-1))])]),_:1}),j(u,{type:`submit`},{default:H(()=>[...o[3]||(o[3]=[M(` 提交 `,-1)])]),_:1})]),_:1},8,[`model`]),t.value?(B(),F(`pre`,yi,O(t.value),1)):G(``,!0)]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`方法`,component:hi,componentRaw:gi}],xi={class:`flex flex-wrap gap-2`},Si=z({__name:`_align`,setup(e){return(e,t)=>(B(),F(`div`,xi,[j($,{align:`start`},{card:H(()=>[...t[1]||(t[1]=[P(`div`,{class:`text-sm`},` 起始位置对齐 `,-1)])]),default:H(()=>[j(u,{variant:`link`},{default:H(()=>[...t[0]||(t[0]=[M(` Start `,-1)])]),_:1})]),_:1}),j($,{align:`center`},{card:H(()=>[...t[3]||(t[3]=[P(`div`,{class:`text-sm`},` 居中对齐 `,-1)])]),default:H(()=>[j(u,{variant:`link`},{default:H(()=>[...t[2]||(t[2]=[M(` Center `,-1)])]),_:1})]),_:1}),j($,{align:`end`},{card:H(()=>[...t[5]||(t[5]=[P(`div`,{class:`text-sm`},` 结束位置对齐 `,-1)])]),default:H(()=>[j(u,{variant:`link`},{default:H(()=>[...t[4]||(t[4]=[M(` End `,-1)])]),_:1})]),_:1})]))}}),Ci=`<script setup lang="ts">
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
`,wi={class:`flex space-x-4`},Ti={class:`space-y-1`},Ei={class:`pt-2 flex items-center`},Di=z({__name:`_basic`,setup(e){return(e,t)=>(B(),U($,{class:`min-w-auto`},{card:H(()=>[P(`div`,wi,[j(Ge,{shape:`circle`,src:`https://github.com/vuejs.png`,class:`bg-muted`}),P(`div`,Ti,[t[2]||(t[2]=P(`h4`,{class:`text-sm font-semibold`},` @hooray `,-1)),t[3]||(t[3]=P(`p`,{class:`text-sm`},` 一个前端开发工程师 `,-1)),P(`div`,Ei,[j(r,{name:`i-ci:calendar-days`,class:`mr-2 opacity-70 h-4 w-4`}),t[1]||(t[1]=P(`span`,{class:`text-xs text-muted-foreground`},` 2020 年注册 `,-1))])])])]),default:H(()=>[j(u,{variant:`link`},{default:H(()=>[...t[0]||(t[0]=[M(` @hooray `,-1)])]),_:1})]),_:1}))}}),Oi=`<script setup lang="ts">
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
`,ki={class:`flex flex-wrap gap-2`},Ai=z({__name:`_offset`,setup(e){return(e,t)=>(B(),F(`div`,ki,[j($,{"side-offset":12},{card:H(()=>[...t[1]||(t[1]=[P(`div`,{class:`text-sm`},` 与触发元素保持更大距离 `,-1)])]),default:H(()=>[j(u,{variant:`link`},{default:H(()=>[...t[0]||(t[0]=[M(` Side offset `,-1)])]),_:1})]),_:1}),j($,{align:`start`,"align-offset":24},{card:H(()=>[...t[3]||(t[3]=[P(`div`,{class:`text-sm`},` 沿对齐方向偏移 `,-1)])]),default:H(()=>[j(u,{variant:`link`},{default:H(()=>[...t[2]||(t[2]=[M(` Align offset `,-1)])]),_:1})]),_:1}),j($,{"side-offset":12,"align-offset":-24},{card:H(()=>[...t[5]||(t[5]=[P(`div`,{class:`text-sm`},` 同时设置两种偏移 `,-1)])]),default:H(()=>[j(u,{variant:`link`},{default:H(()=>[...t[4]||(t[4]=[M(` Both `,-1)])]),_:1})]),_:1})]))}}),ji=`<script setup lang="ts">
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
`,Mi={class:`flex flex-wrap gap-2`},Ni=[{title:`基础`,component:Di,componentRaw:Oi},{title:`弹出方向`,component:z({__name:`_side`,setup(e){return(e,t)=>(B(),F(`div`,Mi,[j($,{side:`top`},{card:H(()=>[...t[1]||(t[1]=[P(`div`,{class:`text-sm`},` 从上方弹出 `,-1)])]),default:H(()=>[j(u,{variant:`link`},{default:H(()=>[...t[0]||(t[0]=[M(` Top `,-1)])]),_:1})]),_:1}),j($,{side:`right`},{card:H(()=>[...t[3]||(t[3]=[P(`div`,{class:`text-sm`},` 从右侧弹出 `,-1)])]),default:H(()=>[j(u,{variant:`link`},{default:H(()=>[...t[2]||(t[2]=[M(` Right `,-1)])]),_:1})]),_:1}),j($,{side:`bottom`},{card:H(()=>[...t[5]||(t[5]=[P(`div`,{class:`text-sm`},` 从下方弹出 `,-1)])]),default:H(()=>[j(u,{variant:`link`},{default:H(()=>[...t[4]||(t[4]=[M(` Bottom `,-1)])]),_:1})]),_:1}),j($,{side:`left`},{card:H(()=>[...t[7]||(t[7]=[P(`div`,{class:`text-sm`},` 从左侧弹出 `,-1)])]),default:H(()=>[j(u,{variant:`link`},{default:H(()=>[...t[6]||(t[6]=[M(` Left `,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`对齐方式`,component:Si,componentRaw:Ci},{title:`偏移`,component:Ai,componentRaw:ji}],Pi={class:`flex flex-wrap gap-4`},Fi={class:`text-xs text-muted-foreground text-center w-full truncate`},Ii=z({__name:`_iconify`,setup(e){let t=[`lucide:bell`,`lucide:calendar-days`,`ri:github-fill`,`logos:vue`,`logos:vitejs`];return(e,n)=>(B(),F(`div`,Pi,[(B(),F(V,null,I(t,e=>P(`div`,{key:e,class:`p-3 flex flex-col gap-2 w-28 items-center`},[j(r,{name:e,class:`size-9`},null,8,[`name`]),P(`span`,Fi,O(e),1)])),64))]))}}),Li=`<script setup lang="ts">
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
`,Ri={class:`flex flex-wrap gap-6 items-end`},zi={class:`p-4 border rounded-lg flex flex-col gap-3 items-center`},Bi={class:`flex gap-2`},Vi={class:`p-4 border rounded-lg flex flex-col gap-3 items-center`},Hi=z({__name:`_image`,setup(e){let t=D(`https://picsum.photos/80`);function n(){t.value=`https://picsum.photos/80?random=${Math.random()}`}function i(){t.value=`https://xxx/`}let a=new URL(`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='-25%20-46%20256%20256'%20xml:space='preserve'%3e%3cpath%20d='M0,82.57C0,58.4,0,34.23,0,10.06C0,1.35,1.35,0,10.03,0C45.36,0,80.7-0.01,116.03,0.03c1.77,0,3.59,0.26,5.29,0.74%20c3.07,0.87,3.57,3.21,2.45,5.8c-4.37,10.1-8.83,20.15-13.31,30.2c-1.44,3.23-4.06,4.26-7.54,4.25c-18.5-0.09-37,0.1-55.5-0.14%20c-4.95-0.06-6.49,2.12-6.46,6.47c0.02,3,0.11,6.01-0.02,9c-0.3,6.8,0.34,9.29,9.51,9.62c5.36,0.19,10.73,0.04,16.09,0.04%20c7.57,0,15.15-0.04,22.72,0.01c5.13,0.03,6.6,2.12,4.59,6.89C90.43,81.09,86.27,89,83.4,97.35c-2.59,7.55-8.57,7.27-14.28,7.56%20c-7.48,0.38-15,0.17-22.5,0.06c-3.69-0.05-4.96,1.04-4.86,5.18c0.36,15.83,0.26,31.67,0.12,47.5c-0.04,4.2-2.26,6.53-6.94,6.42%20c-9-0.21-18-0.06-27-0.06c-6.05,0-7.91-1.8-7.92-7.94C-0.02,131.57,0,107.07,0,82.57z'%20fill='%2335495e'%20/%3e%3cpath%20d='M132.98,94.13c-8.21,18.88-16.33,37.1-24.06,55.48c-6.02,14.31-5.81,14.4-21.31,14.4c-6.67,0-13.33,0.05-20-0.01%20c-5.91-0.05-7.71-2.44-5.46-7.61c6.86-15.8,13.86-31.55,20.82-47.31c9.41-21.32,18.81-42.63,28.24-63.94%20c5.59-12.62,11.14-25.25,16.94-37.77c0.82-1.78,2.95-4.09,4.47-4.09c1.63,0,4,2.11,4.78,3.86c13.4,29.78,26.56,59.66,39.87,89.49%20c6.48,14.53,13.16,28.97,19.72,43.46c2.57,5.68,5.11,11.38,7.61,17.1c1.61,3.68-0.13,6.75-4.12,6.77%20c-23.83,0.08-47.66,0.09-71.49-0.01c-4.03-0.02-5.46-2.47-3.98-6.17c2.26-5.63,4.77-11.16,6.95-16.82c1.74-4.54,4.92-6.06,9.6-5.98%20c9.65,0.16,9.89-0.55,5.89-9.13c-4.57-9.81-8.76-19.8-13.14-29.7C134.08,95.62,133.68,95.17,132.98,94.13z'%20fill='%2342b883'%20/%3e%3c/svg%3e`,``+import.meta.url).href;return(e,o)=>(B(),F(`div`,Ri,[P(`div`,zi,[o[2]||(o[2]=P(`span`,{class:`text-xs text-muted-foreground font-medium`},`网络图片`,-1)),j(r,{name:t.value,class:`size-14`},null,8,[`name`]),P(`div`,Bi,[j(u,{size:`sm`,onClick:n},{default:H(()=>[...o[0]||(o[0]=[M(` 更换图片 `,-1)])]),_:1}),j(u,{size:`sm`,variant:`outline`,onClick:i},{default:H(()=>[...o[1]||(o[1]=[M(` 触发错误 `,-1)])]),_:1})])]),P(`div`,Vi,[o[3]||(o[3]=P(`span`,{class:`text-xs text-muted-foreground font-medium`},`相对路径`,-1)),j(r,{name:T(a),class:`size-14`},null,8,[`name`])])]))}}),Ui=`<script setup lang="ts">
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
`,Wi={class:`space-y-4`},Gi={class:`flex flex-wrap gap-4`},Ki={class:`text-xs text-muted-foreground text-center w-full truncate`},qi={class:`flex flex-wrap gap-4`},Ji={class:`text-xs text-muted-foreground text-center w-full truncate`},Yi=z({__name:`_svg`,setup(e){let t=[`example-emotion-line`,`example-emotion-laugh-line`,`example-emotion-unhappy-line`],n=[`example-crown`,`example-star`,`example-vip`];return(e,i)=>(B(),F(`div`,Wi,[P(`div`,null,[i[0]||(i[0]=P(`div`,{class:`text-sm text-muted-foreground font-medium mb-3`},` 单色 `,-1)),P(`div`,Gi,[(B(),F(V,null,I(t,e=>P(`div`,{key:e,class:`p-3 flex flex-col gap-1.5 w-24 items-center`},[j(r,{name:e,class:`size-10`},null,8,[`name`]),P(`span`,Ki,O(e.replace(`example-`,``)),1)])),64))])]),P(`div`,null,[i[1]||(i[1]=P(`div`,{class:`text-sm text-muted-foreground font-medium mb-3`},` 彩色 `,-1)),P(`div`,qi,[(B(),F(V,null,I(n,e=>P(`div`,{key:e,class:`p-3 flex flex-col gap-1.5 w-24 items-center`},[j(r,{name:e,class:`size-10`},null,8,[`name`]),P(`span`,Ji,O(e.replace(`example-`,``)),1)])),64))])])]))}}),Xi=`<script setup lang="ts">
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
`,Zi={class:`flex flex-wrap gap-6 items-end`},Qi={class:`px-6 py-4 border rounded-lg flex flex-col gap-3 items-center`},$i={class:`px-6 py-4 border rounded-lg flex flex-col gap-3 items-center`},ea=z({__name:`_transition`,setup(e){let t=D(!1);return(e,n)=>(B(),F(`div`,Zi,[P(`div`,Qi,[n[1]||(n[1]=P(`span`,{class:`text-xs text-muted-foreground font-medium`},`无动画`,-1)),j(r,{name:t.value?`i-lucide:heart`:`i-lucide:star`,class:`size-8`},null,8,[`name`])]),P(`div`,$i,[n[2]||(n[2]=P(`span`,{class:`text-xs text-muted-foreground font-medium`},`过渡动画`,-1)),j(r,{name:t.value?`i-lucide:heart`:`i-lucide:star`,class:`text-primary size-8`,transition:``},null,8,[`name`])]),j(u,{onClick:n[0]||(n[0]=e=>t.value=!t.value)},{default:H(()=>[...n[3]||(n[3]=[M(` 切换图标 `,-1)])]),_:1})]))}}),ta=`<script setup lang="ts">
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
`,na={class:`flex flex-wrap gap-4`},ra={class:`text-xs text-muted-foreground text-center w-full truncate`},ia=[{title:`SVG文件`,component:Yi,componentRaw:Xi},{title:`Iconify`,component:Ii,componentRaw:Li},{title:`UnoCSS`,component:z({__name:`_unocss`,setup(e){let t=[`i-lucide:search`,`i-lucide:settings`,`i-ep:edit`,`i-ri:notification-3-line`,`i-tabler:chart-area-line`];return(e,n)=>(B(),F(`div`,na,[(B(),F(V,null,I(t,e=>P(`div`,{key:e,class:`p-3 flex flex-col gap-2 w-32 items-center`},[j(r,{name:e,class:`text-primary size-9`},null,8,[`name`]),P(`span`,ra,O(e),1)])),64))]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`Image`,component:Hi,componentRaw:Ui},{title:`过渡动画`,component:ea,componentRaw:ta}],aa=z({__name:`_basic`,setup(e){return(e,t)=>(B(),U(Ce,{src:`https://fantastic-admin.hurui.me/logo.svg`}))}}),oa=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaImagePreview from '../index.vue'
<\/script>

<template>
  <FaImagePreview src="https://fantastic-admin.hurui.me/logo.svg" />
</template>
`,sa={class:`flex flex-wrap gap-4`},ca={class:`text-sm text-secondary-foreground/50 flex-col-center gap-1`},la=z({__name:`_error`,setup(e){return(e,t)=>(B(),F(`div`,sa,[j(Ce,{src:`https://fantastic-admin.hurui.me/not-found.png`}),j(Ce,{src:`https://fantastic-admin.hurui.me/not-found.png`},{error:H(()=>[P(`div`,ca,[j(r,{name:`i-ph:image-broken-duotone`,class:`size-8`}),t[0]||(t[0]=P(`div`,null,` 图片加载失败 `,-1))])]),_:1})]))}}),ua=`<script setup lang="ts">
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
`,da={class:`flex flex-wrap gap-2`},fa=z({__name:`_functional`,setup(e){let{open:t}=i();function n(){t(`https://fantastic-admin.hurui.me/logo.svg`)}function r(){t([`https://fantastic-admin.hurui.me/logo.svg`,`https://fantastic-mobile.hurui.me/logo.png`])}function a(){t([`https://fantastic-admin.hurui.me/logo.svg`,`https://fantastic-mobile.hurui.me/logo.png`],1)}return(e,t)=>(B(),F(`div`,da,[j(u,{onClick:n},{default:H(()=>[...t[0]||(t[0]=[M(` 预览单张 `,-1)])]),_:1}),j(u,{onClick:r},{default:H(()=>[...t[1]||(t[1]=[M(` 预览多张 `,-1)])]),_:1}),j(u,{onClick:a},{default:H(()=>[...t[2]||(t[2]=[M(` 预览多张（初始预览第2张） `,-1)])]),_:1})]))}}),pa=`<script setup lang="ts">
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
`,ma={class:`flex flex-wrap gap-4 items-end`},ha=[{title:`基础`,component:aa,componentRaw:oa},{title:`尺寸`,component:z({__name:`_size`,setup(e){return(e,t)=>(B(),F(`div`,ma,[j(Ce,{src:`https://fantastic-admin.hurui.me/logo.svg`,class:`size-25`}),j(Ce,{src:`https://fantastic-admin.hurui.me/logo.svg`,class:`size-40`}),j(Ce,{src:`https://fantastic-admin.hurui.me/logo.svg`,class:`h-40 w-60`})]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`错误`,component:la,componentRaw:ua},{title:`函数式调用`,component:fa,componentRaw:pa}],ga=[{title:`基础`,component:z({__name:`_basic`,setup(e){let t=Q(),n=E([]);function r(){t.success(`模拟上传成功`)}return(e,t)=>(B(),U(we,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>e.data.url,onOnSuccess:r},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`多图上传`,component:z({__name:`_multiple`,setup(e){let t=Q(),n=E([`https://fantastic-admin.hurui.me/logo.svg`]);function r(){t.success(`模拟上传成功`)}return(e,t)=>(B(),U(we,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>`${e.data.url}?fake=${Math.random()}`,max:2,onOnSuccess:r},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`上传前校验`,component:z({__name:`_validation`,setup(e){let t=Q(),n=E([]);function i(e){return e.type.startsWith(`image/`)?e.size>204800?(t.error(`图片大小不能超过 200KB`),!1):!0:(t.error(`请选择图片文件`),!1)}function a(){t.success(`模拟上传成功`)}return(e,t)=>(B(),U(we,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>`${e.data.url}?fake=${Math.random()}`,"before-upload":i,width:200,height:130,max:0,onOnSuccess:a},{default:H(()=>[j(r,{name:`i-noto:identification-card`,class:`opacity-50 size-50`})]),_:1},8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`自定义上传请求`,component:z({__name:`_custom-request`,setup(e){let t=Q(),n=E([]);async function r({file:e,onProgress:t}){return t(30),await new Promise(e=>setTimeout(e,300)),t(100),{url:URL.createObjectURL(e),name:e.name}}function i(){t.success(`自定义上传完成`)}return(e,t)=>(B(),U(we,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),"http-request":r,"after-upload":e=>e.url,max:3,onOnSuccess:i},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`文件夹上传`,component:z({__name:`_directory`,setup(e){let t=E([]);function n(e){return e.type.startsWith(`image/`)}async function r({file:e,onProgress:t}){return t(50),await new Promise(e=>setTimeout(e,200)),t(100),{url:URL.createObjectURL(e),name:e.name}}return(e,i)=>(B(),U(we,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),directory:``,max:0,"http-request":r,"before-upload":n,"after-upload":e=>e.url},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
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
`}],_a=z({__name:`_basic`,setup(e){let t=E(``);return(e,n)=>(B(),U(X,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]))}}),va=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const input = ref('')
<\/script>

<template>
  <FaInputOTP v-model="input" />
</template>
`,ya={class:`space-y-3`},ba={class:`text-sm text-muted-foreground space-y-1`},xa=z({__name:`_callback`,setup(e){let t=E(``),n=E(`等待输入`),r=E(`等待完成`),i=Q();function a(e){n.value=`input: ${e||`空值`}`}function o(e){r.value=`complete: ${e}`,i(e)}return(e,i)=>(B(),F(`div`,ya,[j(X,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),onInput:a,onComplete:o},null,8,[`modelValue`]),P(`div`,ba,[P(`div`,null,O(n.value),1),P(`div`,null,O(r.value),1)])]))}}),Sa=`<script setup lang="ts">
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
`,Ca=z({__name:`_disabled`,setup(e){let t=E(`123456`);return(e,n)=>(B(),U(X,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:``},null,8,[`modelValue`]))}}),wa=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const input = ref('123456')
<\/script>

<template>
  <FaInputOTP v-model="input" disabled />
</template>
`,Ta=z({__name:`_length`,setup(e){let t=E(``);return(e,n)=>(B(),U(X,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),length:4},null,8,[`modelValue`]))}}),Ea=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const input = ref('')
<\/script>

<template>
  <FaInputOTP v-model="input" :length="4" />
</template>
`,Da={class:`space-y-4`},Oa={class:`space-y-2`},ka={class:`space-y-2`},Aa={class:`space-y-2`},ja={class:`space-y-2`},Ma=[{title:`基础`,component:_a,componentRaw:va},{title:`长度`,component:Ta,componentRaw:Ea},{title:`模式`,component:z({__name:`_pattern`,setup(e){let t=E(``),n=E(``),r=E(``),i=E(``);return(e,a)=>(B(),F(`div`,Da,[P(`div`,Oa,[a[4]||(a[4]=P(`div`,{class:`text-sm text-muted-foreground`},` 仅字母 `,-1)),j(X,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),pattern:`only-chars`},null,8,[`modelValue`])]),P(`div`,ka,[a[5]||(a[5]=P(`div`,{class:`text-sm text-muted-foreground`},` 仅数字 `,-1)),j(X,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e),pattern:`only-digits`},null,8,[`modelValue`])]),P(`div`,Aa,[a[6]||(a[6]=P(`div`,{class:`text-sm text-muted-foreground`},` 字母和数字 `,-1)),j(X,{modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=e=>r.value=e),pattern:`only-digits-and-chars`},null,8,[`modelValue`])]),P(`div`,ja,[a[7]||(a[7]=P(`div`,{class:`text-sm text-muted-foreground`},` 自定义：仅允许 A-F 和 0-9 `,-1)),j(X,{modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=e=>i.value=e),pattern:`^[A-F0-9]*$`},null,8,[`modelValue`])])]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`分隔符`,component:z({__name:`_separator`,setup(e){let t=E(``);return(e,n)=>(B(),U(X,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),separator:[2,3]},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const input = ref('')
<\/script>

<template>
  <FaInputOTP v-model="input" :separator="[2, 3]" />
</template>
`},{title:`禁用`,component:Ca,componentRaw:wa},{title:`回调`,component:xa,componentRaw:Sa}],Na=z({__name:`_basic`,setup(e){let t=E(``);return(e,n)=>(B(),U(v,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入内容`},null,8,[`modelValue`]))}}),Pa=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../index.vue'

const value = ref('')
<\/script>

<template>
  <FaInput v-model="value" placeholder="请输入内容" />
</template>
`,Fa=z({__name:`_clearable`,setup(e){let t=E(`可清空的内容`);return(e,n)=>(B(),U(v,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),clearable:``,placeholder:`请输入内容`},null,8,[`modelValue`]))}}),Ia=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../index.vue'

const value = ref('可清空的内容')
<\/script>

<template>
  <FaInput v-model="value" clearable placeholder="请输入内容" />
</template>
`,La=z({__name:`_disabled`,setup(e){let t=E(`禁用状态`);return(e,n)=>(B(),U(v,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:``,placeholder:`请输入内容`},null,8,[`modelValue`]))}}),Ra=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../index.vue'

const value = ref('禁用状态')
<\/script>

<template>
  <FaInput v-model="value" disabled placeholder="请输入内容" />
</template>
`,za=z({__name:`_password`,setup(e){let t=E(``);return(e,n)=>(B(),U(v,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入密码`,type:`password`},null,8,[`modelValue`]))}}),Ba=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../index.vue'

const value = ref('')
<\/script>

<template>
  <FaInput v-model="value" placeholder="请输入密码" type="password" />
</template>
`,Va={class:`flex flex-col gap-2`},Ha=[{title:`基础`,component:Na,componentRaw:Pa},{title:`可清空`,component:Fa,componentRaw:Ia},{title:`禁用`,component:La,componentRaw:Ra},{title:`密码`,component:za,componentRaw:Ba},{title:`插槽`,component:z({__name:`_slot`,setup(e){let t=E(``),n=E(``);return(e,i)=>(B(),F(`div`,Va,[j(v,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),placeholder:`example.com`,"input-class":`ps-1`},{start:H(()=>[...i[2]||(i[2]=[M(` https:// `,-1)])]),end:H(()=>[j(b,{text:`可输入域名、IP、端口、URL 等`},{default:H(()=>[j(r,{name:`i-ri:question-line`,class:`text-base text-orange cursor-help`})]),_:1})]),_:1},8,[`modelValue`]),j(v,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=e=>n.value=e),placeholder:`请输入内容`,align:`block`,"input-class":`shadow-none`,"end-class":`justify-end`},{start:H(()=>[...i[3]||(i[3]=[M(` 标题： `,-1)])]),end:H(()=>[j(u,{variant:`ghost`,size:`sm`,class:`px-2 h-8`},{default:H(()=>[...i[4]||(i[4]=[M(` 提交 `,-1)])]),_:1})]),_:1},8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
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
`}],Ua={class:`space-y-4`},Wa=z({__name:`_basic`,setup(e){let t=A({name:``,email:``});return(e,n)=>(B(),F(`div`,Ua,[j(Z,{label:`用户名`},{default:H(()=>[j(v,{modelValue:t.name,"onUpdate:modelValue":n[0]||(n[0]=e=>t.name=e),placeholder:`请输入用户名`,class:`w-72`},null,8,[`modelValue`])]),_:1}),j(Z,{label:`邮箱`},{default:H(()=>[j(v,{modelValue:t.email,"onUpdate:modelValue":n[1]||(n[1]=e=>t.email=e),placeholder:`请输入邮箱`,class:`w-72`},null,8,[`modelValue`])]),_:1})]))}}),Ga=`<script setup lang="ts">
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
`,Ka={class:`space-y-4`},qa={class:`text-muted-foreground flex shrink-0 gap-2 w-24 items-center`},Ja=z({__name:`_custom`,setup(e){let t=D(``),n=D(!1);return(e,i)=>(B(),F(`div`,Ka,[j(Z,null,{default:H(()=>[P(`div`,qa,[j(r,{name:`i-lucide:search`}),i[2]||(i[2]=P(`span`,null,`关键词`,-1))]),j(v,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),placeholder:`请输入关键词`,class:`w-72`},null,8,[`modelValue`])]),_:1}),j(Z,null,{default:H(()=>[j(qe,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=e=>n.value=e)},null,8,[`modelValue`]),i[3]||(i[3]=P(`span`,null,`记住当前筛选条件`,-1))]),_:1})]))}}),Ya=`<script setup lang="ts">
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
`,Xa={class:`max-w-xl space-y-4`},Za={class:`flex gap-2`},Qa=z({__name:`_form`,setup(e){let t=A({title:``,type:`notice`,description:``}),n=[{label:`公告`,value:`notice`},{label:`消息`,value:`message`},{label:`任务`,value:`task`}];return(e,r)=>(B(),F(`div`,Xa,[j(Z,{label:`标题`,"label-width":`5rem`},{default:H(()=>[j(v,{modelValue:t.title,"onUpdate:modelValue":r[0]||(r[0]=e=>t.title=e),placeholder:`请输入标题`,class:`w-full`},null,8,[`modelValue`])]),_:1}),j(Z,{label:`类型`,"label-width":`5rem`},{default:H(()=>[j(y,{modelValue:t.type,"onUpdate:modelValue":r[1]||(r[1]=e=>t.type=e),options:n,class:`w-full`},null,8,[`modelValue`])]),_:1}),j(Z,{label:`描述`,"label-width":`5rem`,class:`items-start`},{default:H(()=>[j(de,{modelValue:t.description,"onUpdate:modelValue":r[2]||(r[2]=e=>t.description=e),placeholder:`请输入描述`,class:`w-full`},null,8,[`modelValue`])]),_:1}),j(Z,{"label-width":`5rem`},{default:H(()=>[P(`div`,Za,[j(u,null,{default:H(()=>[...r[3]||(r[3]=[M(`保存`,-1)])]),_:1}),j(u,{variant:`outline`},{default:H(()=>[...r[4]||(r[4]=[M(` 重置 `,-1)])]),_:1})])]),_:1})]))}}),$a=`<script setup lang="ts">
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
`,eo={class:`space-y-4`},to=[{title:`基础`,component:Wa,componentRaw:Ga},{title:`固定宽度`,component:z({__name:`_width`,setup(e){let t=A({name:``,role:`admin`,phone:``}),n=[{label:`管理员`,value:`admin`},{label:`运营`,value:`operator`},{label:`访客`,value:`guest`}];return(e,r)=>(B(),F(`div`,eo,[j(Z,{label:`用户名`,"label-width":88},{default:H(()=>[j(v,{modelValue:t.name,"onUpdate:modelValue":r[0]||(r[0]=e=>t.name=e),placeholder:`请输入用户名`,class:`w-72`},null,8,[`modelValue`])]),_:1}),j(Z,{label:`角色`,"label-width":88},{default:H(()=>[j(y,{modelValue:t.role,"onUpdate:modelValue":r[1]||(r[1]=e=>t.role=e),options:n,class:`w-72`},null,8,[`modelValue`])]),_:1}),j(Z,{label:`手机号`,"label-width":88},{default:H(()=>[j(v,{modelValue:t.phone,"onUpdate:modelValue":r[2]||(r[2]=e=>t.phone=e),placeholder:`请输入手机号`,class:`w-72`},null,8,[`modelValue`])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`表单布局`,component:Qa,componentRaw:$a},{title:`自定义内容`,component:Ja,componentRaw:Ya}],no={class:`flex flex-wrap gap-2`},ro=z({__name:`_actions`,setup(e){let t=D(!1),n=D(!1),r=D(!1);return(e,i)=>(B(),F(V,null,[P(`div`,no,[j(u,{onClick:i[0]||(i[0]=e=>t.value=!0)},{default:H(()=>[...i[6]||(i[6]=[M(` 隐藏关闭按钮 `,-1)])]),_:1}),j(u,{variant:`outline`,onClick:i[1]||(i[1]=e=>n.value=!0)},{default:H(()=>[...i[7]||(i[7]=[M(` 最大化 `,-1)])]),_:1}),j(u,{variant:`secondary`,onClick:i[2]||(i[2]=e=>r.value=!0)},{default:H(()=>[...i[8]||(i[8]=[M(` 拖拽 `,-1)])]),_:1})]),j(w,{modelValue:t.value,"onUpdate:modelValue":i[3]||(i[3]=e=>t.value=e),title:`隐藏关闭按钮`,closable:!1,"show-cancel-button":``},{default:H(()=>[...i[9]||(i[9]=[P(`div`,{class:`text-sm text-muted-foreground`},` 右上角关闭按钮已隐藏，可以通过底部按钮关闭。 `,-1)])]),_:1},8,[`modelValue`]),j(w,{modelValue:n.value,"onUpdate:modelValue":i[4]||(i[4]=e=>n.value=e),title:`可最大化弹窗`,maximizable:``},{default:H(()=>[...i[10]||(i[10]=[P(`div`,{class:`text-sm text-muted-foreground`},` 点击右上角最大化按钮可以切换弹窗尺寸。 `,-1)])]),_:1},8,[`modelValue`]),j(w,{modelValue:r.value,"onUpdate:modelValue":i[5]||(i[5]=e=>r.value=e),title:`可拖拽弹窗`,draggable:``},{default:H(()=>[...i[11]||(i[11]=[P(`div`,{class:`text-sm text-muted-foreground`},` 按住标题栏可以拖动弹窗位置。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),io=`<script setup lang="ts">
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
`,ao=z({__name:`_basic`,setup(e){let t=D(!1);return(e,n)=>(B(),F(V,null,[j(u,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:H(()=>[...n[2]||(n[2]=[M(` 打开弹窗 `,-1)])]),_:1}),j(w,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`弹窗标题`},{default:H(()=>[...n[3]||(n[3]=[P(`div`,{class:`text-sm text-muted-foreground`},` 这里是弹窗内容区域。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),oo=`<script setup lang="ts">
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
`,so={class:`flex flex-wrap gap-2`},co=z({__name:`_center-border-loading`,setup(e){let t=D(!1),n=D(!1),r=D(!1),i=D(!1);function a(){r.value=!0,i.value=!0,window.setTimeout(()=>{i.value=!1},1800)}return(e,o)=>(B(),F(V,null,[P(`div`,so,[j(u,{onClick:o[0]||(o[0]=e=>t.value=!0)},{default:H(()=>[...o[5]||(o[5]=[M(` 居中 `,-1)])]),_:1}),j(u,{variant:`outline`,onClick:o[1]||(o[1]=e=>n.value=!0)},{default:H(()=>[...o[6]||(o[6]=[M(` 无边框 `,-1)])]),_:1}),j(u,{variant:`secondary`,onClick:a},{default:H(()=>[...o[7]||(o[7]=[M(` 载入 `,-1)])]),_:1})]),j(w,{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=e=>t.value=e),title:`居中弹窗`,center:``,"align-center":``,"show-cancel-button":``},{default:H(()=>[...o[8]||(o[8]=[P(`div`,{class:`text-sm text-muted-foreground text-center`},` 标题、描述和底部按钮会居中显示，弹窗也会垂直居中。 `,-1)])]),_:1},8,[`modelValue`]),j(w,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=e=>n.value=e),title:`无边框弹窗`,border:!1,"show-cancel-button":``},{default:H(()=>[...o[9]||(o[9]=[P(`div`,{class:`text-sm text-muted-foreground`},` 头部和底部不显示分割线。 `,-1)])]),_:1},8,[`modelValue`]),j(w,{modelValue:r.value,"onUpdate:modelValue":o[4]||(o[4]=e=>r.value=e),title:`载入状态`,loading:i.value},{default:H(()=>[...o[10]||(o[10]=[P(`div`,{class:`text-sm text-muted-foreground`},` 弹窗主体区域会显示载入遮罩。 `,-1)])]),_:1},8,[`modelValue`,`loading`])],64))}}),lo=`<script setup lang="ts">
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
`,uo=z({__name:`_custom-style`,setup(e){let t=D(!1);return(e,n)=>(B(),F(V,null,[j(u,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:H(()=>[...n[2]||(n[2]=[M(` 打开弹窗 `,-1)])]),_:1}),j(w,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`自定义样式`,class:`sm:max-w-2xl`,"header-class":`bg-muted/40`,"content-class":`min-h-auto`,"footer-class":`bg-muted/40`,"show-cancel-button":``},{default:H(()=>[...n[3]||(n[3]=[P(`div`,{class:`text-sm text-muted-foreground`},` 可以通过 class、header-class、content-class 和 footer-class 调整弹窗样式。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),fo=`<script setup lang="ts">
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
`,po={class:`flex flex-wrap gap-2`},mo=z({__name:`_dialog`,setup(e){let t=Se(),n=Q();function r(){t.info({title:`温馨提醒`,content:`这是 info 弹窗`,onConfirm:()=>n(`你点了确定`)})}function i(){t.success({title:`操作成功`,content:`这是 success 弹窗`,onConfirm:()=>n(`你点了确定`)})}function a(){t.warning({title:`风险提醒`,content:`这是 warning 弹窗`,onConfirm:()=>n(`你点了确定`)})}function o(){t.error({title:`操作失败`,content:`这是 error 弹窗`,onConfirm:()=>n(`你点了确定`)})}function s(){t.confirm({title:`确认操作`,content:`这是 confirm 弹窗`,onConfirm:()=>n(`确认操作`),onCancel:()=>n(`取消操作`)})}return(e,t)=>(B(),F(`div`,po,[j(u,{onClick:r},{default:H(()=>[...t[0]||(t[0]=[M(` Info `,-1)])]),_:1}),j(u,{variant:`outline`,onClick:i},{default:H(()=>[...t[1]||(t[1]=[M(` Success `,-1)])]),_:1}),j(u,{variant:`outline`,onClick:a},{default:H(()=>[...t[2]||(t[2]=[M(` Warning `,-1)])]),_:1}),j(u,{variant:`outline`,onClick:o},{default:H(()=>[...t[3]||(t[3]=[M(` Error `,-1)])]),_:1}),j(u,{variant:`secondary`,onClick:s},{default:H(()=>[...t[4]||(t[4]=[M(` Confirm `,-1)])]),_:1})]))}}),ho=`<script setup lang="ts">
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
`,go=z({__name:`_event`,setup(e){let t=D(!1),n=Q();function r(e,t){n(`beforeClose: ${e}`),window.setTimeout(t,600)}return(e,i)=>(B(),F(V,null,[j(u,{onClick:i[0]||(i[0]=e=>t.value=!0)},{default:H(()=>[...i[8]||(i[8]=[M(` 打开弹窗 `,-1)])]),_:1}),j(w,{modelValue:t.value,"onUpdate:modelValue":i[1]||(i[1]=e=>t.value=e),title:`触发事件`,"show-cancel-button":``,"before-close":r,onOpen:i[2]||(i[2]=e=>T(n)(`open`)),onOpened:i[3]||(i[3]=e=>T(n)(`opened`)),onClose:i[4]||(i[4]=e=>T(n)(`close`)),onClosed:i[5]||(i[5]=e=>T(n)(`closed`)),onConfirm:i[6]||(i[6]=e=>T(n)(`confirm`)),onCancel:i[7]||(i[7]=e=>T(n)(`cancel`))},{default:H(()=>[...i[9]||(i[9]=[P(`div`,{class:`text-sm text-muted-foreground`},` 打开、关闭、确认、取消和动画完成等事件都会触发 toast。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),_o=`<script setup lang="ts">
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
`,vo=z({__name:`_functional`,setup(e){let t=Q(),{open:n}=Se().create({title:`函数式调用`,description:`通过 useModal().create() 创建弹窗。`,content:Ae(`div`,{class:`text-sm text-muted-foreground leading-6`},`这里是函数式调用渲染的内容。`),showCancelButton:!0,onConfirm:()=>t(`确认操作`),onCancel:()=>t(`取消操作`)});return(e,t)=>(B(),U(u,{onClick:T(n)},{default:H(()=>[...t[0]||(t[0]=[M(` 打开弹窗 `,-1)])]),_:1},8,[`onClick`]))}}),yo=`<script setup lang="ts">
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
`,bo={class:`flex flex-wrap gap-2`},xo=z({__name:`_header-footer`,setup(e){let t=D(!1),n=D(!1);return(e,r)=>(B(),F(V,null,[P(`div`,bo,[j(u,{onClick:r[0]||(r[0]=e=>t.value=!0)},{default:H(()=>[...r[4]||(r[4]=[M(` 隐藏头部 `,-1)])]),_:1}),j(u,{variant:`outline`,onClick:r[1]||(r[1]=e=>n.value=!0)},{default:H(()=>[...r[5]||(r[5]=[M(` 隐藏底部 `,-1)])]),_:1})]),j(w,{modelValue:t.value,"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),header:!1},{default:H(()=>[...r[6]||(r[6]=[P(`div`,{class:`text-sm text-muted-foreground`},` 当前弹窗隐藏了头部区域。 `,-1)])]),_:1},8,[`modelValue`]),j(w,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),title:`隐藏底部`,footer:!1},{default:H(()=>[...r[7]||(r[7]=[P(`div`,{class:`text-sm text-muted-foreground`},` 当前弹窗隐藏了底部操作区域。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),So=`<script setup lang="ts">
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
`,Co={class:`flex flex-wrap gap-2`},wo=z({__name:`_overlay-blur`,setup(e){let t=D(!1),n=D(!1);return(e,r)=>(B(),F(V,null,[P(`div`,Co,[j(u,{onClick:r[0]||(r[0]=e=>t.value=!0)},{default:H(()=>[...r[4]||(r[4]=[M(` 无遮罩 `,-1)])]),_:1}),j(u,{variant:`outline`,onClick:r[1]||(r[1]=e=>n.value=!0)},{default:H(()=>[...r[5]||(r[5]=[M(` 模糊遮罩 `,-1)])]),_:1})]),j(w,{modelValue:t.value,"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),title:`无遮罩弹窗`,overlay:!1},{default:H(()=>[...r[6]||(r[6]=[P(`div`,{class:`text-sm text-muted-foreground`},` 设置 overlay 为 false 后，不显示背景遮罩。 `,-1)])]),_:1},8,[`modelValue`]),j(w,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),title:`模糊遮罩`,"overlay-blur":``},{default:H(()=>[...r[7]||(r[7]=[P(`div`,{class:`text-sm text-muted-foreground`},` 设置 overlay-blur 后，背景遮罩会带有模糊效果。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),To=`<script setup lang="ts">
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
`,Eo={class:`pr-8 flex gap-3 items-start`},Do={class:`flex gap-2 w-full justify-end`},Oo=[{title:`基础`,component:ao,componentRaw:oo},{title:`标题描述`,component:z({__name:`_title-description`,setup(e){let t=D(!1);return(e,n)=>(B(),F(V,null,[j(u,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:H(()=>[...n[2]||(n[2]=[M(` 打开弹窗 `,-1)])]),_:1}),j(w,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),title:`账号安全验证`,description:`继续操作前，请确认当前操作由本人发起。`},{default:H(()=>[...n[3]||(n[3]=[P(`div`,{class:`text-sm text-muted-foreground`},` 描述会显示在标题下方，用于补充说明弹窗目的。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`关闭/最大化/拖拽`,component:ro,componentRaw:io},{title:`居中/边框/载入`,component:co,componentRaw:lo},{title:`遮罩/模糊`,component:wo,componentRaw:To},{title:`显示/隐藏头部底部`,component:xo,componentRaw:So},{title:`插槽`,component:z({__name:`_slot`,setup(e){let t=D(!1);return(e,n)=>(B(),F(V,null,[j(u,{onClick:n[0]||(n[0]=e=>t.value=!0)},{default:H(()=>[...n[4]||(n[4]=[M(` 打开弹窗 `,-1)])]),_:1}),j(w,{modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=e=>t.value=e)},{header:H(()=>[P(`div`,Eo,[j(r,{name:`i-lucide:message-square-warning`,class:`text-primary mt-0.5 size-5`}),n[5]||(n[5]=P(`div`,null,[P(`div`,{class:`font-semibold`},` 自定义头部 `),P(`div`,{class:`text-sm text-muted-foreground`},` 使用 header 插槽替换默认标题。 `)],-1))])]),footer:H(()=>[P(`div`,Do,[j(u,{variant:`outline`,onClick:n[1]||(n[1]=e=>t.value=!1)},{default:H(()=>[...n[6]||(n[6]=[M(` 取消 `,-1)])]),_:1}),j(u,{onClick:n[2]||(n[2]=e=>t.value=!1)},{default:H(()=>[...n[7]||(n[7]=[M(` 保存 `,-1)])]),_:1})])]),default:H(()=>[n[8]||(n[8]=P(`div`,{class:`text-sm text-muted-foreground`},` 这里是默认插槽内容。 `,-1))]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`自定义样式`,component:uo,componentRaw:fo},{title:`触发事件`,component:go,componentRaw:_o},{title:`对话框`,component:mo,componentRaw:ho},{title:`函数式调用`,component:vo,componentRaw:yo}],ko=z({__name:`_basic`,setup(e){return(e,t)=>(B(),U(Je,{title:`页面标题`}))}}),Ao=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageHeader from '../index.vue'
<\/script>

<template>
  <FaPageHeader title="页面标题" />
</template>
`,jo=z({__name:`_custom-style`,setup(e){return(e,t)=>(B(),U(Je,{title:`自定义样式`,description:`通过 class、main-class 和 default-class 调整布局和外观。`,class:`border rounded-lg bg-muted/40`,"main-class":`flex-[1_1_60%]`,"default-class":`flex gap-2`},{default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...t[0]||(t[0]=[M(` 取消 `,-1)])]),_:1}),j(u,null,{default:H(()=>[...t[1]||(t[1]=[M(` 保存 `,-1)])]),_:1})]),_:1}))}}),Mo=`<script setup lang="ts">
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
`,No=z({__name:`_description`,setup(e){return(e,t)=>(B(),U(Je,{title:`用户管理`,description:`管理系统用户信息和权限配置。`}))}}),Po=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageHeader from '../index.vue'
<\/script>

<template>
  <FaPageHeader title="用户管理" description="管理系统用户信息和权限配置。" />
</template>
`,Fo={class:`flex gap-2 items-center`},Io=[{title:`基础`,component:ko,componentRaw:Ao},{title:`描述`,component:No,componentRaw:Po},{title:`插槽`,component:z({__name:`_slot`,setup(e){return(e,t)=>(B(),U(Je,null,{title:H(()=>[P(`div`,Fo,[j(r,{name:`i-lucide:user-round-cog`,class:`text-primary size-6`}),t[0]||(t[0]=M(` 用户管理 `,-1))])]),description:H(()=>[...t[1]||(t[1]=[P(`p`,null,`提供 title、description 和右侧操作区域插槽。`,-1)])]),default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[j(r,{name:`i-lucide:plus`}),t[2]||(t[2]=M(` 新增用户 `,-1))]),_:1})]),_:1}))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`自定义样式`,component:jo,componentRaw:Mo}],Lo=z({__name:`_basic`,setup(e){return(e,t)=>(B(),U(ie,null,{default:H(()=>[...t[0]||(t[0]=[M(` PageMain 是最常用的页面内容容器，几乎所有页面都会使用到。 `,-1)])]),_:1}))}}),Ro=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageMain from '../index.vue'
<\/script>

<template>
  <FaPageMain>
    PageMain 是最常用的页面内容容器，几乎所有页面都会使用到。
  </FaPageMain>
</template>
`,zo=z({__name:`_collapse`,setup(e){return(e,t)=>(B(),U(ie,{title:`带展开/收起功能`,collaspe:``,height:`100px`},{default:H(()=>[...t[0]||(t[0]=[P(`div`,{class:`space-y-4`},[P(`h3`,{class:`text-2xl font-bold`},` Fantastic-admin `),P(`p`,{class:`text-sm text-muted-foreground`},` 设置 collaspe 后，内容区域会在指定高度折叠。 `),P(`p`,null,`鼠标移入内容底部，可以看到展开和收起按钮。`),P(`p`,null,`这是一段用于撑开内容高度的文本。`),P(`p`,null,`继续补充一些内容，让折叠效果更明显。`)],-1)])]),_:1}))}}),Bo=`<script setup lang="ts">
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
`,Vo={class:`flex-center-between`},Ho=[{title:`基础`,component:Lo,componentRaw:Ro},{title:`标题`,component:z({__name:`_title`,setup(e){return(e,t)=>(B(),U(ie,{title:`你可以设置一个自定义的标题`},{default:H(()=>[...t[0]||(t[0]=[M(` 这里放页面内容。 `,-1)])]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageMain from '../index.vue'
<\/script>

<template>
  <FaPageMain title="你可以设置一个自定义的标题">
    这里放页面内容。
  </FaPageMain>
</template>
`},{title:`插槽`,component:z({__name:`_slot`,setup(e){return(e,t)=>(B(),U(ie,null,{title:H(()=>[P(`div`,Vo,[t[1]||(t[1]=M(` 通过 slot 设置标题 `,-1)),j(u,{variant:`outline`,size:`sm`},{default:H(()=>[...t[0]||(t[0]=[M(` 还可以放置自定义按钮 `,-1)])]),_:1})])]),default:H(()=>[t[2]||(t[2]=M(` 这里放页面内容。 `,-1))]),_:1}))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`折叠`,component:zo,componentRaw:Bo}],Uo=z({__name:`_basic`,setup(e){let t=E(1),n=E(10),r=E(100);return(e,i)=>(B(),U(ue,{page:t.value,"onUpdate:page":i[0]||(i[0]=e=>t.value=e),size:n.value,"onUpdate:size":i[1]||(i[1]=e=>n.value=e),total:r.value},null,8,[`page`,`size`,`total`]))}}),Wo=`<script setup lang="ts">
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
`,Go={class:`space-y-3`},Ko={class:`text-sm text-muted-foreground`},qo=z({__name:`_event`,setup(e){let t=E(1),n=E(10),r=E(100),i=E(`等待分页操作`);function a(e){i.value=`当前页码切换为：${e}`}function o(e){i.value=`每页条数切换为：${e}`}return(e,s)=>(B(),F(`div`,Go,[j(ue,{page:t.value,"onUpdate:page":s[0]||(s[0]=e=>t.value=e),size:n.value,"onUpdate:size":s[1]||(s[1]=e=>n.value=e),total:r.value,onPageChange:a,onSizeChange:o},null,8,[`page`,`size`,`total`]),P(`div`,Ko,O(i.value),1)]))}}),Jo=`<script setup lang="ts">
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
`,Yo={class:`space-y-4`},Xo=[{title:`基础`,component:Uo,componentRaw:Wo},{title:`布局`,component:z({__name:`_layout`,setup(e){let t=E(1),n=E(10),r=E(100);return(e,i)=>(B(),F(`div`,Yo,[j(ue,{page:t.value,"onUpdate:page":i[0]||(i[0]=e=>t.value=e),size:n.value,"onUpdate:size":i[1]||(i[1]=e=>n.value=e),total:r.value,layout:`jumper, pager, ->, total, sizes`},null,8,[`page`,`size`,`total`]),j(ue,{page:t.value,"onUpdate:page":i[2]||(i[2]=e=>t.value=e),size:n.value,"onUpdate:size":i[3]||(i[3]=e=>n.value=e),total:r.value,layout:`pager`},null,8,[`page`,`size`,`total`])]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`事件`,component:qo,componentRaw:Jo}],Zo={class:`flex-col w-80`},Qo=z({__name:`_basic`,setup(e){let t=E(``);return(e,n)=>(B(),F(`div`,Zo,[j(v,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入密码`,class:`w-full`},null,8,[`modelValue`]),j(_e,{password:t.value,class:`mt-2`},null,8,[`password`])]))}}),$o=`<script setup lang="ts">
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
`,es={class:`flex-col w-80`},ts=[{title:`基础`,component:Qo,componentRaw:$o},{title:`自定义规则`,component:z({__name:`_custom-rule`,setup(e){let t=E(``),n=[{label:`长度至少为 10 个字符`,rule:e=>e.length>=10},{label:`包含大写字母`,rule:e=>/[A-Z]/.test(e)},{label:`包含数字`,rule:e=>/\d/.test(e)},{label:`包含特殊字符`,rule:e=>/[^A-Z0-9]/i.test(e)}],r=[{min:0,color:`bg-red-500`},{min:2,color:`bg-yellow-500`},{min:4,color:`bg-green-500`}];return(e,i)=>(B(),F(`div`,es,[j(v,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),placeholder:`请输入密码`,class:`w-full`},null,8,[`modelValue`]),j(_e,{password:t.value,rules:n,"color-thresholds":r,class:`mt-2`},null,8,[`password`])]))}}),componentRaw:`<script setup lang="ts">
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
`}],ns={class:`flex flex-wrap gap-2`},rs=z({__name:`_align`,setup(e){return(e,t)=>(B(),F(`div`,ns,[j(Y,{align:`start`},{panel:H(()=>[...t[1]||(t[1]=[P(`div`,{class:`text-sm`},` 起始位置对齐 `,-1)])]),default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...t[0]||(t[0]=[M(` Start `,-1)])]),_:1})]),_:1}),j(Y,{align:`center`},{panel:H(()=>[...t[3]||(t[3]=[P(`div`,{class:`text-sm`},` 居中对齐 `,-1)])]),default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...t[2]||(t[2]=[M(` Center `,-1)])]),_:1})]),_:1}),j(Y,{align:`end`},{panel:H(()=>[...t[5]||(t[5]=[P(`div`,{class:`text-sm`},` 结束位置对齐 `,-1)])]),default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...t[4]||(t[4]=[M(` End `,-1)])]),_:1})]),_:1})]))}}),is=`<script setup lang="ts">
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
`,as=z({__name:`_basic`,setup(e){return(e,t)=>(B(),U(Y,null,{panel:H(()=>[...t[1]||(t[1]=[P(`div`,{class:`flex h-30 w-60 items-center justify-center`},` 面板内容 `,-1)])]),default:H(()=>[j(u,null,{default:H(()=>[t[0]||(t[0]=M(` 浮动面板 `,-1)),j(r,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),os=`<script setup lang="ts">
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
`,ss={class:`flex flex-wrap gap-2`},cs=z({__name:`_offset`,setup(e){return(e,t)=>(B(),F(`div`,ss,[j(Y,{"side-offset":12},{panel:H(()=>[...t[1]||(t[1]=[P(`div`,{class:`text-sm`},` 与触发元素保持更大距离 `,-1)])]),default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...t[0]||(t[0]=[M(` Side offset `,-1)])]),_:1})]),_:1}),j(Y,{align:`start`,"align-offset":24},{panel:H(()=>[...t[3]||(t[3]=[P(`div`,{class:`text-sm`},` 沿对齐方向偏移 `,-1)])]),default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...t[2]||(t[2]=[M(` Align offset `,-1)])]),_:1})]),_:1}),j(Y,{"side-offset":12,"align-offset":-24},{panel:H(()=>[...t[5]||(t[5]=[P(`div`,{class:`text-sm`},` 同时设置两种偏移 `,-1)])]),default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...t[4]||(t[4]=[M(` Both `,-1)])]),_:1})]),_:1})]))}}),ls=`<script setup lang="ts">
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
`,us={class:`flex flex-wrap gap-2`},ds=[{title:`基础`,component:as,componentRaw:os},{title:`弹出方向`,component:z({__name:`_side`,setup(e){return(e,t)=>(B(),F(`div`,us,[j(Y,{side:`top`},{panel:H(()=>[...t[1]||(t[1]=[P(`div`,{class:`text-sm`},` 从上方弹出 `,-1)])]),default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...t[0]||(t[0]=[M(` Top `,-1)])]),_:1})]),_:1}),j(Y,{side:`right`},{panel:H(()=>[...t[3]||(t[3]=[P(`div`,{class:`text-sm`},` 从右侧弹出 `,-1)])]),default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...t[2]||(t[2]=[M(` Right `,-1)])]),_:1})]),_:1}),j(Y,{side:`bottom`},{panel:H(()=>[...t[5]||(t[5]=[P(`div`,{class:`text-sm`},` 从下方弹出 `,-1)])]),default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...t[4]||(t[4]=[M(` Bottom `,-1)])]),_:1})]),_:1}),j(Y,{side:`left`},{panel:H(()=>[...t[7]||(t[7]=[P(`div`,{class:`text-sm`},` 从左侧弹出 `,-1)])]),default:H(()=>[j(u,{variant:`outline`},{default:H(()=>[...t[6]||(t[6]=[M(` Left `,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`对齐方式`,component:rs,componentRaw:is},{title:`偏移`,component:cs,componentRaw:ls}],fs=z({__name:`_basic`,setup(e){return(e,t)=>(B(),U(xe,{class:`border rounded-md h-72 w-48`},{default:H(()=>[(B(),F(V,null,I(20,e=>P(`div`,{key:e,class:`text-sm p-4`},O(e),1)),64))]),_:1}))}}),ps=`<script setup lang="ts">
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
`,ms=z({__name:`_hidden-scrollbar`,setup(e){return(e,t)=>(B(),U(xe,{scrollbar:!1,class:`border rounded-md h-72 w-48`},{default:H(()=>[(B(),F(V,null,I(20,e=>P(`div`,{key:e,class:`text-sm p-4`},O(e),1)),64))]),_:1}))}}),hs=`<script setup lang="ts">
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
`,gs={class:`flex-center-start`},_s=[{title:`基础`,component:fs,componentRaw:ps},{title:`水平滚动`,component:z({__name:`_horizontal`,setup(e){return(e,t)=>(B(),U(xe,{horizontal:``,class:`overscroll-contain border rounded-md w-96`},{default:H(()=>[P(`div`,gs,[(B(),F(V,null,I(20,e=>P(`div`,{key:e,class:`text-sm flex-center shrink-0 h-16 w-16`},O(e),1)),64))])]),_:1}))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`隐藏滚动条`,component:ms,componentRaw:hs},{title:`遮罩`,component:z({__name:`_mask`,setup(e){return(e,t)=>(B(),U(xe,{mask:``,class:`border rounded-md h-72 w-48`},{default:H(()=>[(B(),F(V,null,I(20,e=>P(`div`,{key:e,class:`text-sm p-4`},O(e),1)),64))]),_:1}))}}),componentRaw:`<script setup lang="ts">
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
`}],vs={class:`gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]`},ys={class:`flex gap-2 col-end--1 justify-end`},bs=z({__name:`_background`,setup(e){let t=A({keyword:``,type:`all`,creator:``,channel:`all`,visibility:`all`,reviewer:``}),n=[{label:`全部类型`,value:`all`},{label:`公告`,value:`notice`},{label:`消息`,value:`message`}],r=[{label:`全部渠道`,value:`all`},{label:`站内`,value:`site`},{label:`邮件`,value:`email`},{label:`短信`,value:`sms`}],i=[{label:`全部范围`,value:`all`},{label:`公开`,value:`public`},{label:`内部`,value:`internal`},{label:`指定用户`,value:`specific`}];return(e,a)=>(B(),U(me,{background:``},{default:H(({fold:e})=>[P(`div`,vs,[j(v,{modelValue:t.keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>t.keyword=e),placeholder:`搜索标题`,class:`w-full`},null,8,[`modelValue`]),j(y,{modelValue:t.type,"onUpdate:modelValue":a[1]||(a[1]=e=>t.type=e),options:n,class:`w-full`},null,8,[`modelValue`]),N(j(v,{modelValue:t.creator,"onUpdate:modelValue":a[2]||(a[2]=e=>t.creator=e),placeholder:`创建人`,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(y,{modelValue:t.channel,"onUpdate:modelValue":a[3]||(a[3]=e=>t.channel=e),options:r,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(y,{modelValue:t.visibility,"onUpdate:modelValue":a[4]||(a[4]=e=>t.visibility=e),options:i,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(v,{modelValue:t.reviewer,"onUpdate:modelValue":a[5]||(a[5]=e=>t.reviewer=e),placeholder:`审核人`,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),P(`div`,ys,[j(u,null,{default:H(()=>[...a[6]||(a[6]=[M(`查询`,-1)])]),_:1}),j(u,{variant:`outline`},{default:H(()=>[...a[7]||(a[7]=[M(` 重置 `,-1)])]),_:1})])])]),_:1}))}}),xs=`<script setup lang="ts">
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
`,Ss={class:`gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]`},Cs={class:`flex gap-2 col-end--1 justify-end`},ws=z({__name:`_basic`,setup(e){let t=A({keyword:``,status:`all`,department:``,role:`all`,source:`all`,creator:``}),n=[{label:`全部状态`,value:`all`},{label:`启用`,value:`enabled`},{label:`禁用`,value:`disabled`}],r=[{label:`全部角色`,value:`all`},{label:`管理员`,value:`admin`},{label:`运营`,value:`operator`},{label:`访客`,value:`guest`}],i=[{label:`全部来源`,value:`all`},{label:`后台创建`,value:`admin`},{label:`用户注册`,value:`register`},{label:`批量导入`,value:`import`}];return(e,a)=>(B(),U(me,null,{default:H(({fold:e})=>[P(`div`,Ss,[j(v,{modelValue:t.keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>t.keyword=e),placeholder:`搜索用户名`,class:`w-full`},null,8,[`modelValue`]),j(y,{modelValue:t.status,"onUpdate:modelValue":a[1]||(a[1]=e=>t.status=e),options:n,class:`w-full`},null,8,[`modelValue`]),N(j(v,{modelValue:t.department,"onUpdate:modelValue":a[2]||(a[2]=e=>t.department=e),placeholder:`部门`,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(y,{modelValue:t.role,"onUpdate:modelValue":a[3]||(a[3]=e=>t.role=e),options:r,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(y,{modelValue:t.source,"onUpdate:modelValue":a[4]||(a[4]=e=>t.source=e),options:i,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(v,{modelValue:t.creator,"onUpdate:modelValue":a[5]||(a[5]=e=>t.creator=e),placeholder:`创建人`,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),P(`div`,Cs,[j(u,null,{default:H(()=>[...a[6]||(a[6]=[M(`查询`,-1)])]),_:1}),j(u,{variant:`outline`},{default:H(()=>[...a[7]||(a[7]=[M(` 重置 `,-1)])]),_:1})])])]),_:1}))}}),Ts=`<script setup lang="ts">
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
`,Es={class:`gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]`},Ds={class:`flex gap-2 col-end--1 justify-end`},Os=z({__name:`_custom-trigger`,setup(e){let t=A({keyword:``,status:`all`,tag:``,column:`all`,author:``,reviewer:``,publishTime:`all`}),n=[{label:`全部状态`,value:`all`},{label:`已发布`,value:`published`},{label:`草稿`,value:`draft`}],i=[{label:`全部栏目`,value:`all`},{label:`产品动态`,value:`product`},{label:`帮助中心`,value:`help`},{label:`活动公告`,value:`campaign`}],a=[{label:`发布时间`,value:`all`},{label:`今天`,value:`today`},{label:`近 7 天`,value:`week`},{label:`近 30 天`,value:`month`}];return(e,o)=>(B(),U(me,{"show-toggle":!1},{default:H(({fold:e,toggle:s})=>[P(`div`,Es,[j(v,{modelValue:t.keyword,"onUpdate:modelValue":o[0]||(o[0]=e=>t.keyword=e),placeholder:`搜索文章`,class:`w-full`},null,8,[`modelValue`]),j(y,{modelValue:t.status,"onUpdate:modelValue":o[1]||(o[1]=e=>t.status=e),options:n,class:`w-full`},null,8,[`modelValue`]),N(j(v,{modelValue:t.tag,"onUpdate:modelValue":o[2]||(o[2]=e=>t.tag=e),placeholder:`标签`,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(y,{modelValue:t.column,"onUpdate:modelValue":o[3]||(o[3]=e=>t.column=e),options:i,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(v,{modelValue:t.author,"onUpdate:modelValue":o[4]||(o[4]=e=>t.author=e),placeholder:`作者`,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(v,{modelValue:t.reviewer,"onUpdate:modelValue":o[5]||(o[5]=e=>t.reviewer=e),placeholder:`审核人`,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(y,{modelValue:t.publishTime,"onUpdate:modelValue":o[6]||(o[6]=e=>t.publishTime=e),options:a,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),P(`div`,Ds,[j(u,null,{default:H(()=>[...o[7]||(o[7]=[M(`查询`,-1)])]),_:1}),j(u,{variant:`outline`},{default:H(()=>[...o[8]||(o[8]=[M(` 重置 `,-1)])]),_:1}),j(u,{variant:`ghost`,onClick:s},{default:H(()=>[M(O(e?`展开`:`收起`)+` `,1),j(r,{name:e?`i-lucide:chevron-down`:`i-lucide:chevron-up`},null,8,[`name`])]),_:2},1032,[`onClick`])])])]),_:1}))}}),ks=`<script setup lang="ts">
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
`,As={class:`gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]`},js={class:`flex gap-2 col-end--1 justify-end`},Ms=[{title:`基础`,component:ws,componentRaw:Ts},{title:`默认展开`,component:z({__name:`_expanded`,setup(e){let t=A({keyword:``,status:`all`,owner:``,priority:`all`,category:`all`,project:``,participant:``}),n=D(!1),r=[{label:`全部状态`,value:`all`},{label:`待处理`,value:`pending`},{label:`已完成`,value:`done`}],i=[{label:`全部优先级`,value:`all`},{label:`高`,value:`high`},{label:`中`,value:`medium`},{label:`低`,value:`low`}],a=[{label:`全部分类`,value:`all`},{label:`需求`,value:`feature`},{label:`缺陷`,value:`bug`},{label:`优化`,value:`improvement`}];return(e,o)=>(B(),U(me,{fold:n.value,"onUpdate:fold":o[7]||(o[7]=e=>n.value=e)},{default:H(({fold:e})=>[P(`div`,As,[j(v,{modelValue:t.keyword,"onUpdate:modelValue":o[0]||(o[0]=e=>t.keyword=e),placeholder:`搜索任务`,class:`w-full`},null,8,[`modelValue`]),j(y,{modelValue:t.status,"onUpdate:modelValue":o[1]||(o[1]=e=>t.status=e),options:r,class:`w-full`},null,8,[`modelValue`]),N(j(v,{modelValue:t.owner,"onUpdate:modelValue":o[2]||(o[2]=e=>t.owner=e),placeholder:`负责人`,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(y,{modelValue:t.priority,"onUpdate:modelValue":o[3]||(o[3]=e=>t.priority=e),options:i,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(y,{modelValue:t.category,"onUpdate:modelValue":o[4]||(o[4]=e=>t.category=e),options:a,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(v,{modelValue:t.project,"onUpdate:modelValue":o[5]||(o[5]=e=>t.project=e),placeholder:`所属项目`,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),N(j(v,{modelValue:t.participant,"onUpdate:modelValue":o[6]||(o[6]=e=>t.participant=e),placeholder:`参与人`,class:`w-full`},null,8,[`modelValue`]),[[K,!e]]),P(`div`,js,[j(u,null,{default:H(()=>[...o[8]||(o[8]=[M(`查询`,-1)])]),_:1}),j(u,{variant:`outline`},{default:H(()=>[...o[9]||(o[9]=[M(` 重置 `,-1)])]),_:1})])])]),_:1},8,[`fold`]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`背景`,component:bs,componentRaw:xs},{title:`自定义触发按钮`,component:Os,componentRaw:ks}],Ns=z({__name:`_basic`,setup(e){let t=E(!1);return(e,n)=>(B(),U(oe,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]))}}),Ps=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSwitch from '../index.vue'

const checked = ref(false)
<\/script>

<template>
  <FaSwitch v-model="checked" />
</template>
`,Fs=z({__name:`_callback`,setup(e){let t=E(!1),n=Se();function r(){return new Promise(e=>{n.confirm({title:`确认信息`,content:`确认要切换当前状态吗？`,onConfirm:()=>{e(!0)},onCancel:()=>{e(!1)}})})}return(e,n)=>(B(),U(oe,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),"before-change":r},null,8,[`modelValue`]))}}),Is=`<script setup lang="ts">
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
`,Ls={class:`flex gap-4`},Rs=[{title:`基础`,component:Ns,componentRaw:Ps},{title:`图标`,component:z({__name:`_icon`,setup(e){let t=E(!1);return(e,n)=>(B(),U(oe,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),"on-icon":`ri:sun-line`,"off-icon":`ri:moon-line`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSwitch from '../index.vue'

const checked = ref(false)
<\/script>

<template>
  <FaSwitch v-model="checked" on-icon="ri:sun-line" off-icon="ri:moon-line" />
</template>
`},{title:`禁用`,component:z({__name:`_disabled`,setup(e){let t=E(!1),n=E(!0);return(e,r)=>(B(),F(`div`,Ls,[j(oe,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),disabled:``},null,8,[`modelValue`]),j(oe,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e),disabled:``},null,8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`回调`,component:Fs,componentRaw:Is}],zs=z({__name:`_basic`,setup(e){let t=[{accessorKey:`title`,header:`任务`},{accessorKey:`owner`,header:`负责人`},{accessorKey:`status`,header:`状态`},{accessorKey:`updatedAt`,header:`更新时间`}],n=[{id:`t-001`,title:`完善组件文档`,owner:`林舟`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`同步设计变量`,owner:`陈念`,status:`待处理`,updatedAt:`2026-05-22`},{id:`t-003`,title:`整理示例数据`,owner:`周衡`,status:`已完成`,updatedAt:`2026-05-21`},{id:`t-004`,title:`回归交互状态`,owner:`沈若`,status:`进行中`,updatedAt:`2026-05-20`}];return(e,r)=>{let i=S;return B(),U(i,{columns:t,data:n})}}}),Bs=`<script setup lang="ts">
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
`,Vs=z({__name:`_border`,setup(e){let t=[{accessorKey:`name`,header:`项目`,width:220},{accessorKey:`owner`,header:`负责人`,width:120},{accessorKey:`progress`,header:`进度`,width:120,align:`right`},{accessorKey:`status`,header:`状态`,width:120}],n=[{id:`p-001`,name:`权限策略整理`,owner:`林舟`,progress:`72%`,status:`进行中`},{id:`p-002`,name:`表格示例拆分`,owner:`陈念`,progress:`100%`,status:`已完成`},{id:`p-003`,name:`数据导出流程`,owner:`周衡`,progress:`48%`,status:`进行中`},{id:`p-004`,name:`菜单体验优化`,owner:`沈若`,progress:`16%`,status:`待处理`}];return(e,r)=>{let i=S;return B(),U(i,{border:``,"row-key":`id`,columns:t,data:n})}}}),Hs=`<script setup lang="ts">
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
`,Us=z({__name:`_column-visibility`,setup(e){let t=[{accessorKey:`title`,header:`任务`,enableHiding:!1},{accessorKey:`owner`,header:`负责人`},{accessorKey:`priority`,header:`优先级`},{accessorKey:`status`,header:`状态`},{accessorKey:`updatedAt`,header:`更新时间`}],n=[{id:`t-001`,title:`完善组件文档`,owner:`林舟`,priority:`中`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`同步设计变量`,owner:`陈念`,priority:`高`,status:`待处理`,updatedAt:`2026-05-22`},{id:`t-003`,title:`整理示例数据`,owner:`周衡`,priority:`低`,status:`已完成`,updatedAt:`2026-05-21`},{id:`t-004`,title:`回归交互状态`,owner:`沈若`,priority:`中`,status:`进行中`,updatedAt:`2026-05-20`}];return(e,r)=>{let i=S;return B(),U(i,{"column-visibility":``,columns:t,data:n})}}}),Ws=`<script setup lang="ts">
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
`,Gs=z({__name:`_custom-column`,setup(e){let t=[{accessorKey:`name`,label:`指标名称`,width:180,cellClass:`font-medium bg-amber-200/80 dark:bg-amber-500/35`},{accessorKey:`today`,header:`今日`,align:`right`,width:120,cellClass:`tabular-nums`},{accessorKey:`yesterday`,header:`昨日`,align:`right`,width:120,cellClass:`tabular-nums text-muted-foreground`},{accessorKey:`trend`,title:`变化`,align:`right`,width:120,headerClass:`text-primary`,cellClass:({row:e})=>e.original.trend.startsWith(`+`)?`text-success font-medium tabular-nums`:`text-destructive font-medium tabular-nums`}],n=[{id:`m-001`,name:`访问量`,today:`18,420`,yesterday:`16,280`,trend:`+13.1%`},{id:`m-002`,name:`转化率`,today:`8.6%`,yesterday:`9.1%`,trend:`-0.5%`},{id:`m-003`,name:`新增客户`,today:`326`,yesterday:`304`,trend:`+7.2%`}];return(e,r)=>{let i=S;return B(),U(i,{"row-key":`id`,columns:t,data:n})}}}),Ks=`<script setup lang="ts">
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
`,qs=z({__name:`_fixed-column`,setup(e){let t=[{accessorKey:`name`,header:`项目`,fixed:`left`,width:220},{accessorKey:`owner`,header:`负责人`,fixed:`left`,width:120},{accessorKey:`department`,header:`所属部门`,width:160},{accessorKey:`priority`,header:`优先级`,width:120},{accessorKey:`status`,header:`状态`,width:120},{accessorKey:`deadline`,header:`截止日期`,width:140},{accessorKey:`budget`,header:`预算`,align:`right`,fixed:`right`,width:120},{accessorKey:`nextAction`,header:`下一步`,align:`right`,fixed:`right`,width:140}],n=[{id:`p-1001`,name:`权限中心改造`,owner:`林舟`,department:`基础平台部`,priority:`高`,status:`进行中`,deadline:`2026-06-12`,budget:`¥84,000`,nextAction:`查看详情`},{id:`p-1002`,name:`移动端适配`,owner:`陈念`,department:`体验技术部`,priority:`中`,status:`评审中`,deadline:`2026-06-18`,budget:`¥56,000`,nextAction:`排期`},{id:`p-1003`,name:`数据看板升级`,owner:`周衡`,department:`数据产品部`,priority:`中`,status:`已完成`,deadline:`2026-05-30`,budget:`¥126,000`,nextAction:`复盘`}];return(e,r)=>{let i=S;return B(),U(i,{"row-key":`id`,"table-class":`min-w-[1160px]`,columns:t,data:n})}}}),Js=`<script setup lang="ts">
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
`,Ys=z({__name:`_fixed-height`,setup(e){let t=[{accessorKey:`event`,header:`事件`,width:180},{accessorKey:`operator`,header:`操作人`,width:120},{accessorKey:`result`,header:`结果`,width:120},{accessorKey:`time`,header:`时间`,width:180}],n=[{id:`l-001`,event:`创建项目`,operator:`林舟`,result:`成功`,time:`2026-05-23 09:12`},{id:`l-002`,event:`提交审批`,operator:`陈念`,result:`成功`,time:`2026-05-23 09:26`},{id:`l-003`,event:`同步成员`,operator:`周衡`,result:`成功`,time:`2026-05-23 09:41`},{id:`l-004`,event:`导出报表`,operator:`沈若`,result:`排队中`,time:`2026-05-23 10:05`},{id:`l-005`,event:`更新预算`,operator:`梁一`,result:`成功`,time:`2026-05-23 10:18`},{id:`l-006`,event:`变更负责人`,operator:`许知`,result:`成功`,time:`2026-05-23 10:39`},{id:`l-007`,event:`归档任务`,operator:`林舟`,result:`成功`,time:`2026-05-23 11:02`},{id:`l-008`,event:`生成快照`,operator:`陈念`,result:`成功`,time:`2026-05-23 11:27`},{id:`l-009`,event:`刷新缓存`,operator:`周衡`,result:`成功`,time:`2026-05-23 11:48`},{id:`l-010`,event:`权限校验`,operator:`沈若`,result:`成功`,time:`2026-05-23 12:13`},{id:`l-011`,event:`发布版本`,operator:`梁一`,result:`成功`,time:`2026-05-23 12:45`},{id:`l-012`,event:`关闭工单`,operator:`许知`,result:`成功`,time:`2026-05-23 13:08`}];return(e,r)=>{let i=S;return B(),U(i,{class:`h-80`,"row-key":`id`,columns:t,data:n})}}}),Xs=`<script setup lang="ts">
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
`,Zs={class:`space-y-4`},Qs={class:`text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted`},$s=z({__name:`_multiple-selection`,setup(e){let t=[{type:`selection`,fixed:`left`,width:50,disabled:e=>e.locked},{accessorKey:`name`,header:`成员`},{accessorKey:`role`,header:`角色`,width:120},{accessorKey:`team`,header:`团队`,width:140},{accessorKey:`locked`,header:`锁定`,width:120}],n=[{id:`m-001`,name:`沈若`,role:`管理员`,team:`平台组`,locked:!1},{id:`m-002`,name:`梁一`,role:`开发者`,team:`体验组`,locked:!1},{id:`m-003`,name:`许知`,role:`访客`,team:`运营组`,locked:!0},{id:`m-004`,name:`苏眠`,role:`审计员`,team:`风控组`,locked:!1}],r=D([]),i=R(()=>r.value.map(e=>e.name).join(`、`)||`暂无`);function a(e){r.value=e}return(e,r)=>{let o=S;return B(),F(`div`,Zs,[j(o,{selectable:``,multiple:``,"row-key":`id`,columns:t,data:n,onSelectionChange:a}),P(`div`,Qs,` 已选中：`+O(i.value),1)])}}}),ec=`<script setup lang="ts">
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
`,tc={class:`space-y-4`},nc={class:`text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted`},rc=z({__name:`_single-selection`,setup(e){let t=[{type:`selection`,fixed:`left`,width:50,disabled:e=>!e.enabled},{accessorKey:`name`,header:`成员`},{accessorKey:`role`,header:`角色`,width:120},{accessorKey:`team`,header:`团队`,width:140},{accessorKey:`enabled`,header:`是否可选`,width:120}],n=[{id:`m-001`,name:`沈若`,role:`管理员`,team:`平台组`,enabled:!0},{id:`m-002`,name:`梁一`,role:`开发者`,team:`体验组`,enabled:!0},{id:`m-003`,name:`许知`,role:`访客`,team:`运营组`,enabled:!1},{id:`m-004`,name:`苏眠`,role:`审计员`,team:`风控组`,enabled:!0}],r=D([]),i=R(()=>r.value[0]?.name||`暂无`);function a(e){r.value=e}return(e,r)=>{let o=S;return B(),F(`div`,tc,[j(o,{selectable:``,"row-key":`id`,columns:t,data:n,onSelectionChange:a}),P(`div`,nc,` 当前选中：`+O(i.value),1)])}}}),ic=`<script setup lang="ts">
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
`,ac={class:`font-medium`},oc={class:`text-xs text-muted-foreground`},sc={class:`tabular-nums`},cc=z({__name:`_slot`,setup(e){let t=[{accessorKey:`name`,header:`商品`,width:220},{accessorKey:`category`,header:`分类`,width:120},{accessorKey:`price`,header:`价格`,align:`right`,width:120},{accessorKey:`stock`,header:`库存`,align:`right`,width:120},{accessorKey:`status`,header:`状态`,width:120}],n=[{id:`sku-001`,name:`协作空间专业版`,category:`软件`,price:1280,stock:42,status:`available`},{id:`sku-002`,name:`团队数据大屏`,category:`模板`,price:680,stock:8,status:`warning`},{id:`sku-003`,name:`年度支持服务`,category:`服务`,price:3600,stock:0,status:`sold-out`}],r={available:{label:`可售`,class:`bg-success/10 text-success`},warning:{label:`低库存`,class:`bg-warning/10 text-warning`},"sold-out":{label:`售罄`,class:`bg-muted text-muted-foreground`}};function i(e){return new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,maximumFractionDigits:0}).format(e)}return(e,a)=>{let o=S;return B(),U(o,{"row-key":`id`,columns:t,data:n},{"header-name":H(()=>[...a[0]||(a[0]=[P(`div`,{class:`flex flex-col`},[P(`span`,null,`商品`),P(`span`,{class:`text-xs text-muted-foreground font-normal`},`名称 / 编号`)],-1)])]),"cell-name":H(({row:e})=>[P(`div`,ac,O(e.original.name),1),P(`div`,oc,O(e.original.id),1)]),"cell-price":H(({value:e})=>[M(O(i(Number(e))),1)]),"cell-stock":H(({value:e})=>[P(`span`,sc,O(e),1)]),"cell-status":H(({value:e})=>[P(`span`,{class:k([`text-xs font-medium px-2 py-0.5 rounded-full inline-flex`,r[e].class])},O(r[e].label),3)]),_:1})}}}),lc=`<script setup lang="ts">
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
`,uc={class:`space-y-4`},dc={class:`text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted`},fc=z({__name:`_sorting`,setup(e){let t=[{accessorKey:`title`,header:`任务`},{accessorKey:`owner`,header:`负责人`},{accessorKey:`priority`,header:`优先级`,enableSorting:!0},{accessorKey:`updatedAt`,header:`更新时间`,enableSorting:!0}],n=[{id:`t-001`,title:`完善组件文档`,owner:`林舟`,priority:`中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`同步设计变量`,owner:`陈念`,priority:`高`,updatedAt:`2026-05-22`},{id:`t-003`,title:`整理示例数据`,owner:`周衡`,priority:`低`,updatedAt:`2026-05-21`},{id:`t-004`,title:`回归交互状态`,owner:`沈若`,priority:`中`,updatedAt:`2026-05-20`}],r={高:3,中:2,低:1},i=D([]);function a(e,t){return t===`priority`?r[e.priority]:e[t]}function o(e,t){return typeof e==`number`&&typeof t==`number`?e-t:String(e).localeCompare(String(t),`zh-CN`,{numeric:!0})}let s=R(()=>i.value.length?[...n].sort((e,t)=>{for(let n of i.value){let r=n.id,i=a(e,r),s=a(t,r);if(i===s)continue;let c=o(i,s);return n.desc?-c:c}return 0}):n),c=R(()=>i.value.length?i.value.map(e=>`${e.id}: ${e.desc?`降序`:`升序`}`).join(`，`):`暂无排序`);function l(e){i.value=e}return(e,n)=>{let r=S;return B(),F(`div`,uc,[j(r,{sortable:``,"row-key":`id`,sorting:i.value,columns:t,data:s.value,onSortingChange:l},null,8,[`sorting`,`data`]),P(`div`,dc,` 当前排序：`+O(c.value),1)])}}}),pc=`<script setup lang="ts">
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
`,mc=z({__name:`_stripe`,setup(e){let t=[{accessorKey:`title`,header:`事项`,width:220},{accessorKey:`owner`,header:`负责人`,width:120},{accessorKey:`priority`,header:`优先级`,width:120},{accessorKey:`status`,header:`状态`,width:120},{accessorKey:`updatedAt`,header:`更新时间`,width:160}],n=[{id:`t-001`,title:`补充表格文档`,owner:`林舟`,priority:`中`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`优化筛选体验`,owner:`陈念`,priority:`高`,status:`待处理`,updatedAt:`2026-05-22`},{id:`t-003`,title:`同步设计变量`,owner:`周衡`,priority:`低`,status:`已完成`,updatedAt:`2026-05-21`},{id:`t-004`,title:`检查固定列阴影`,owner:`沈若`,priority:`中`,status:`进行中`,updatedAt:`2026-05-20`},{id:`t-005`,title:`整理示例数据`,owner:`梁一`,priority:`低`,status:`已完成`,updatedAt:`2026-05-19`},{id:`t-006`,title:`回归行选择交互`,owner:`许知`,priority:`高`,status:`待处理`,updatedAt:`2026-05-18`}];return(e,r)=>{let i=S;return B(),U(i,{stripe:``,"row-key":`id`,columns:t,data:n})}}}),hc=`<script setup lang="ts">
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
`,gc={class:`text-sm text-muted-foreground`},_c=[{title:`基础`,component:zs,componentRaw:Bs},{title:`固定高度`,component:Ys,componentRaw:Xs},{title:`工具栏插槽`,component:z({__name:`_toolbar`,setup(e){let t=[{accessorKey:`title`,header:`任务`},{accessorKey:`owner`,header:`负责人`},{accessorKey:`status`,header:`状态`},{accessorKey:`updatedAt`,header:`更新时间`}],n=[{id:`t-001`,title:`完善组件文档`,owner:`林舟`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`同步设计变量`,owner:`陈念`,status:`待处理`,updatedAt:`2026-05-22`},{id:`t-003`,title:`整理示例数据`,owner:`周衡`,status:`已完成`,updatedAt:`2026-05-21`},{id:`t-004`,title:`回归交互状态`,owner:`沈若`,status:`进行中`,updatedAt:`2026-05-20`}];return(e,i)=>{let a=S;return B(),U(a,{columns:t,data:n},{toolbar:H(({table:e})=>[j(u,{size:`sm`},{default:H(()=>[j(r,{name:`i-lucide:plus`}),i[0]||(i[0]=M(` 新增 `,-1))]),_:1}),j(u,{variant:`outline`,size:`sm`},{default:H(()=>[j(r,{name:`i-lucide:refresh-cw`}),i[1]||(i[1]=M(` 刷新 `,-1))]),_:1}),P(`span`,gc,` 共 `+O(e.getRowModel().rows.length)+` 条 `,1)]),_:1})}}}),componentRaw:`<script setup lang="ts">
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
`},{title:`固定列`,component:qs,componentRaw:Js},{title:`自定义列`,component:Gs,componentRaw:Ks},{title:`树型数据`,component:z({__name:`_tree`,setup(e){let t=[{accessorKey:`title`,header:`任务`},{accessorKey:`owner`,header:`负责人`,width:120},{accessorKey:`status`,header:`状态`,width:120},{accessorKey:`updatedAt`,header:`更新时间`,width:160}],n=[{id:`t-001`,title:`组件能力建设`,owner:`林舟`,status:`进行中`,updatedAt:`2026-05-23`,children:[{id:`t-001-1`,title:`补充树型表格`,owner:`林舟`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-001-2`,title:`完善列显示控制`,owner:`陈念`,status:`待处理`,updatedAt:`2026-05-22`}]},{id:`t-002`,title:`设计变量同步`,owner:`陈念`,status:`待处理`,updatedAt:`2026-05-22`,children:[{id:`t-002-1`,title:`整理主题色`,owner:`周衡`,status:`已完成`,updatedAt:`2026-05-21`,children:[{id:`t-002-1-1`,title:`校验暗色模式`,owner:`沈若`,status:`已完成`,updatedAt:`2026-05-20`}]}]},{id:`t-003`,title:`回归交互状态`,owner:`沈若`,status:`进行中`,updatedAt:`2026-05-20`}];return(e,r)=>{let i=S;return B(),U(i,{tree:``,"row-key":`id`,columns:t,data:n})}}}),componentRaw:`<script setup lang="ts">
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
`},{title:`自定义插槽`,component:cc,componentRaw:lc},{title:`排序`,component:fc,componentRaw:pc},{title:`行选择 - 单选`,component:rc,componentRaw:ic},{title:`行选择 - 多选`,component:$s,componentRaw:ec},{title:`斑马纹`,component:mc,componentRaw:hc},{title:`边框`,component:Vs,componentRaw:Hs},{title:`列可见性`,component:Us,componentRaw:Ws}],vc=[{title:`基础`,component:z({__name:`_basic`,setup(e){let t=E(`profile`),n=[{label:`资料`,value:`profile`},{label:`账号`,value:`account`},{label:`通知`,value:`notice`}];return(e,r)=>(B(),U(ge,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),list:n,class:`w-96`},{profile:H(()=>[...r[1]||(r[1]=[P(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 这里展示用户基础资料。 `,-1)])]),account:H(()=>[...r[2]||(r[2]=[P(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 这里展示账号安全设置。 `,-1)])]),notice:H(()=>[...r[3]||(r[3]=[P(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 这里展示消息通知偏好。 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`图标`,component:z({__name:`_icon`,setup(e){let t=E(`user`),n=[{icon:`i-lucide:user`,label:`用户`,value:`user`},{icon:`i-lucide:settings`,label:`设置`,value:`setting`},{icon:`i-lucide:bell`,label:`通知`,value:`notice`}];return(e,r)=>(B(),U(ge,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),list:n,class:`w-96`},{user:H(()=>[...r[1]||(r[1]=[P(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 用户信息内容。 `,-1)])]),setting:H(()=>[...r[2]||(r[2]=[P(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 系统设置内容。 `,-1)])]),notice:H(()=>[...r[3]||(r[3]=[P(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 通知消息内容。 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`自定义样式`,component:z({__name:`_custom-style`,setup(e){let t=E(`overview`),n=[{label:`总览`,value:`overview`,class:`rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`},{label:`趋势`,value:`trend`,class:`rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`},{label:`明细`,value:`detail`,class:`rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`}];return(e,r)=>(B(),U(ge,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),list:n,class:`p-3 border rounded-lg w-96`,"list-class":`gap-2 rounded-md bg-transparent p-0`,"content-class":`rounded-md bg-muted/50 p-4 text-sm`},{overview:H(()=>[...r[1]||(r[1]=[M(` 当前数据总览。 `,-1)])]),trend:H(()=>[...r[2]||(r[2]=[M(` 趋势分析内容。 `,-1)])]),detail:H(()=>[...r[3]||(r[3]=[M(` 明细数据内容。 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
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
`}],yc={class:`flex flex-wrap gap-4`},bc=z({__name:`_basic`,setup(e){return(e,t)=>(B(),F(`div`,yc,[j(_,null,{default:H(()=>[...t[0]||(t[0]=[M(` 默认标签 `,-1)])]),_:1}),j(_,{variant:`destructive`},{default:H(()=>[...t[1]||(t[1]=[M(` 危险标签 `,-1)])]),_:1}),j(_,{variant:`outline`},{default:H(()=>[...t[2]||(t[2]=[M(` 边框标签 `,-1)])]),_:1}),j(_,{variant:`secondary`},{default:H(()=>[...t[3]||(t[3]=[M(` 次要标签 `,-1)])]),_:1})]))}}),xc=`<script setup lang="ts">
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
`,Sc={class:`flex flex-wrap gap-4`},Cc=z({__name:`_closable`,setup(e){let t=E([{id:1,label:`标签一`,variant:`default`},{id:2,label:`标签二`,variant:`destructive`},{id:3,label:`标签三`,variant:`outline`},{id:4,label:`标签四`,variant:`secondary`}]);function n(e){t.value=t.value.filter(t=>t.id!==e)}return(e,r)=>(B(),F(`div`,Sc,[(B(!0),F(V,null,I(t.value,e=>(B(),U(_,{key:e.id,variant:e.variant,closable:``,onClose:t=>n(e.id)},{default:H(()=>[M(O(e.label),1)]),_:2},1032,[`variant`,`onClose`]))),128))]))}}),wc=`<script setup lang="ts">
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
`,Tc={class:`flex flex-wrap gap-4`},Ec=[{title:`基础`,component:bc,componentRaw:xc},{title:`图标`,component:z({__name:`_icon`,setup(e){return(e,t)=>(B(),F(`div`,Tc,[j(_,{icon:`i-lucide:check`},{default:H(()=>[...t[0]||(t[0]=[M(` 成功 `,-1)])]),_:1}),j(_,{icon:`i-lucide:alert-triangle`,variant:`destructive`},{default:H(()=>[...t[1]||(t[1]=[M(` 警告 `,-1)])]),_:1}),j(_,{icon:`i-lucide:info`,variant:`outline`},{default:H(()=>[...t[2]||(t[2]=[M(` 信息 `,-1)])]),_:1}),j(_,{icon:`i-lucide:star`,variant:`secondary`},{default:H(()=>[...t[3]||(t[3]=[M(` 收藏 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`可关闭`,component:Cc,componentRaw:wc}],Dc=[{title:`基础`,component:z({__name:`_basic`,setup(e){let t=D(``);return(e,n)=>(B(),U(de,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入内容`,class:`w-96`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaTextarea from '../index.vue'

const value = shallowRef('')
<\/script>

<template>
  <FaTextarea v-model="value" placeholder="请输入内容" class="w-96" />
</template>
`},{title:`禁用`,component:z({__name:`_disabled`,setup(e){let t=D(`这是一段不可编辑的文本内容。`);return(e,n)=>(B(),U(de,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:``,class:`w-96`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaTextarea from '../index.vue'

const value = shallowRef('这是一段不可编辑的文本内容。')
<\/script>

<template>
  <FaTextarea v-model="value" disabled class="w-96" />
</template>
`},{title:`插槽`,component:z({__name:`_slot`,setup(e){let t=D(``);return(e,n)=>(B(),U(de,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`console.log('Hello, world!');`,align:`block`,"start-class":`justify-between`,"end-class":`justify-between`,class:`w-120`},{start:H(()=>[n[1]||(n[1]=P(`span`,null,`script.ts`,-1)),j(u,{variant:`ghost`,size:`icon`,class:`size-6`},{default:H(()=>[j(r,{name:`i-ep:refresh`})]),_:1})]),end:H(()=>[n[3]||(n[3]=P(`span`,null,`Line 1, Column 1`,-1)),j(u,{size:`sm`,class:`px-2 h-8`},{default:H(()=>[n[2]||(n[2]=M(` Run `,-1)),j(r,{name:`i-lucide:corner-down-left`})]),_:1})]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
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
`}],Oc=z({__name:`_action`,setup(e){let t=Q();function n(){t(`文件已移入回收站`,{description:`你可以在 30 天内恢复该文件`,action:{label:`撤销`,onClick:()=>{t.success(`已撤销删除`)}}})}return(e,t)=>(B(),U(u,{onClick:n},{default:H(()=>[...t[0]||(t[0]=[M(` 显示操作按钮 `,-1)])]),_:1}))}}),kc=`<script setup lang="ts">
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
`,Ac={class:`flex flex-wrap gap-4`},jc=z({__name:`_basic`,setup(e){let t=Q();function n(){t(`Fantastic-admin 杰出的管理系统框架`,{description:`开箱即用，提供舒适开发体验`})}function r(){t.success(`保存成功`,{description:`内容已同步到服务器`})}function i(){t.error(`保存失败`,{description:`请检查网络后重试`})}function a(){t.info(`系统通知`,{description:`今晚 22:00 将进行例行维护`})}function o(){t.warning(`注意事项`,{description:`离开页面前请确认内容已保存`})}return(e,t)=>(B(),F(`div`,Ac,[j(u,{onClick:n},{default:H(()=>[...t[0]||(t[0]=[M(` 默认 `,-1)])]),_:1}),j(u,{onClick:r},{default:H(()=>[...t[1]||(t[1]=[M(` 成功 `,-1)])]),_:1}),j(u,{onClick:i},{default:H(()=>[...t[2]||(t[2]=[M(` 错误 `,-1)])]),_:1}),j(u,{onClick:a},{default:H(()=>[...t[3]||(t[3]=[M(` 信息 `,-1)])]),_:1}),j(u,{onClick:o},{default:H(()=>[...t[4]||(t[4]=[M(` 警告 `,-1)])]),_:1})]))}}),Mc=`<script setup lang="ts">
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
`,Nc={class:`flex flex-wrap gap-4`},Pc=[{title:`基础`,component:jc,componentRaw:Mc},{title:`操作按钮`,component:Oc,componentRaw:kc},{title:`加载状态`,component:z({__name:`_loading`,setup(e){let t=Q();function n(){let e=t.loading(`正在处理...`,{duration:1/0});setTimeout(()=>{t.dismiss(e),t.success(`处理完成`)},2e3)}function r(){t.promise(()=>new Promise(e=>{setTimeout(e,2e3)}),{loading:`正在加载数据`,success:()=>`数据加载完成`,error:()=>`数据加载失败`})}return(e,t)=>(B(),F(`div`,Nc,[j(u,{onClick:n},{default:H(()=>[...t[0]||(t[0]=[M(` 加载状态 `,-1)])]),_:1}),j(u,{onClick:r},{default:H(()=>[...t[1]||(t[1]=[M(` Promise 状态 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`}],Fc={class:`flex flex-wrap gap-4`},Ic=z({__name:`_align`,setup(e){return(e,t)=>(B(),F(`div`,Fc,[j(b,{text:`起始对齐`,align:`start`},{default:H(()=>[j(u,{variant:`ghost`},{default:H(()=>[...t[0]||(t[0]=[M(` Start `,-1)])]),_:1})]),_:1}),j(b,{text:`居中对齐`,align:`center`},{default:H(()=>[j(u,{variant:`ghost`},{default:H(()=>[...t[1]||(t[1]=[M(` Center `,-1)])]),_:1})]),_:1}),j(b,{text:`末端对齐`,align:`end`},{default:H(()=>[j(u,{variant:`ghost`},{default:H(()=>[...t[2]||(t[2]=[M(` End `,-1)])]),_:1})]),_:1})]))}}),Lc=`<script setup lang="ts">
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
`,Rc=z({__name:`_basic`,setup(e){return(e,t)=>(B(),U(b,{text:`注意噢！`},{default:H(()=>[j(r,{name:`i-ri:question-line`,class:`text-lg cursor-help`})]),_:1}))}}),zc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import FaTooltip from '../index.vue'
<\/script>

<template>
  <FaTooltip text="注意噢！">
    <FaIcon name="i-ri:question-line" class="text-lg cursor-help" />
  </FaTooltip>
</template>
`,Bc={class:`flex flex-wrap gap-4`},Vc=z({__name:`_delay`,setup(e){return(e,t)=>(B(),F(`div`,Bc,[j(b,{text:`100ms 后显示`,delay:100},{default:H(()=>[j(u,{variant:`ghost`},{default:H(()=>[...t[0]||(t[0]=[M(` 快速显示 `,-1)])]),_:1})]),_:1}),j(b,{text:`1000ms 后显示`,delay:1e3},{default:H(()=>[j(u,{variant:`ghost`},{default:H(()=>[...t[1]||(t[1]=[M(` 延迟显示 `,-1)])]),_:1})]),_:1})]))}}),Hc=`<script setup lang="ts">
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
`,Uc={class:`flex flex-wrap gap-4`},Wc=z({__name:`_disabled`,setup(e){return(e,t)=>(B(),F(`div`,Uc,[j(b,{text:`正常显示提示`},{default:H(()=>[j(u,{variant:`ghost`},{default:H(()=>[...t[0]||(t[0]=[M(` 启用 `,-1)])]),_:1})]),_:1}),j(b,{text:`该提示已禁用`,disabled:``},{default:H(()=>[j(u,{variant:`ghost`},{default:H(()=>[...t[1]||(t[1]=[M(` 禁用 `,-1)])]),_:1})]),_:1})]))}}),Gc=`<script setup lang="ts">
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
`,Kc={class:`flex flex-wrap gap-4`},qc=[{title:`基础`,component:Rc,componentRaw:zc},{title:`延迟显示`,component:Vc,componentRaw:Hc},{title:`弹出方向`,component:z({__name:`_side`,setup(e){return(e,t)=>(B(),F(`div`,Kc,[j(b,{text:`上方提示`,side:`top`},{default:H(()=>[j(u,{variant:`ghost`},{default:H(()=>[...t[0]||(t[0]=[M(` 上方 `,-1)])]),_:1})]),_:1}),j(b,{text:`右侧提示`,side:`right`},{default:H(()=>[j(u,{variant:`ghost`},{default:H(()=>[...t[1]||(t[1]=[M(` 右侧 `,-1)])]),_:1})]),_:1}),j(b,{text:`下方提示`,side:`bottom`},{default:H(()=>[j(u,{variant:`ghost`},{default:H(()=>[...t[2]||(t[2]=[M(` 下方 `,-1)])]),_:1})]),_:1}),j(b,{text:`左侧提示`,side:`left`},{default:H(()=>[j(u,{variant:`ghost`},{default:H(()=>[...t[3]||(t[3]=[M(` 左侧 `,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`对齐方式`,component:Ic,componentRaw:Lc},{title:`禁用`,component:Wc,componentRaw:Gc}],Jc={class:`flex gap-2 items-center`},Yc=z({__name:`_basic`,setup(e){return(e,t)=>(B(),F(`div`,Jc,[j(C,{value:`12.3%`}),j(C,{value:`12.3%`,type:`down`})]))}}),Xc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTrend from '../index.vue'
<\/script>

<template>
  <div class="flex gap-2 items-center">
    <FaTrend value="12.3%" />
    <FaTrend value="12.3%" type="down" />
  </div>
</template>
`,Zc={class:`space-y-4`},Qc={class:`flex flex-wrap gap-2 items-center`},$c={class:`flex flex-wrap gap-2 items-center`},el=z({__name:`_prefix-suffix`,setup(e){return(e,t)=>(B(),F(`div`,Zc,[P(`div`,null,[t[0]||(t[0]=P(`p`,{class:`text-sm text-muted-foreground mb-2`},` 前缀和后缀 `,-1)),P(`div`,Qc,[j(C,{value:`12.3`,prefix:`$`,variant:`soft`}),j(C,{value:`12.3`,suffix:`%`,variant:`soft`}),j(C,{value:`1,234`,prefix:`¥`,variant:`outline`}),j(C,{value:`45.6`,suffix:`kg`,variant:`outline`})])]),P(`div`,null,[t[1]||(t[1]=P(`p`,{class:`text-sm text-muted-foreground mb-2`},` 组合使用 `,-1)),P(`div`,$c,[j(C,{value:`2,345`,prefix:`$`,suffix:`.00`,variant:`filled`}),j(C,{value:`98.5`,suffix:`%`,variant:`filled`}),j(C,{value:`+123`,prefix:`↑`,variant:`soft`}),j(C,{value:`-45`,prefix:`↓`,variant:`soft`,type:`down`})])])]))}}),tl=`<script setup lang="ts">
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
`,nl={class:`space-y-4`},rl={class:`flex gap-2 items-center`},il={class:`flex flex-wrap gap-2 items-center`},al=z({__name:`_reverse`,setup(e){return(e,t)=>(B(),F(`div`,nl,[P(`div`,null,[t[0]||(t[0]=P(`p`,{class:`text-sm text-muted-foreground mb-2`},` Reverse 模式（用于成本、错误率等下降是好事的场景） `,-1)),P(`div`,rl,[j(C,{value:`错误率 -12.3%`,type:`down`,reverse:``,variant:`filled`}),j(C,{value:`成本节省 15%`,type:`down`,reverse:``,variant:`soft`,prefix:`↓`})])]),P(`div`,null,[t[1]||(t[1]=P(`p`,{class:`text-sm text-muted-foreground mb-2`},` 不同风格对比 `,-1)),P(`div`,il,[j(C,{value:`12.3%`,reverse:``}),j(C,{value:`12.3%`,reverse:``,variant:`filled`}),j(C,{value:`12.3%`,reverse:``,variant:`soft`}),j(C,{value:`12.3%`,reverse:``,variant:`outline`})])])]))}}),ol=`<script setup lang="ts">
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
`,sl={class:`flex gap-2 items-center`},cl=z({__name:`_size`,setup(e){return(e,t)=>(B(),F(`div`,sl,[j(C,{value:`12.3%`,size:`small`}),j(C,{value:`12.3%`,size:`medium`}),j(C,{value:`12.3%`,size:`large`})]))}}),ll=`<script setup lang="ts">
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
`,ul={class:`space-y-4`},dl={class:`flex gap-2 items-center`},fl={class:`flex gap-2 items-center`},pl={class:`flex gap-2 items-center`},ml={class:`flex gap-2 items-center`},hl=[{title:`基础`,component:Yc,componentRaw:Xc},{title:`风格`,component:z({__name:`_variant`,setup(e){return(e,t)=>(B(),F(`div`,ul,[P(`div`,null,[t[0]||(t[0]=P(`p`,{class:`text-sm text-muted-foreground mb-2`},` Default 风格 `,-1)),P(`div`,dl,[j(C,{value:`12.3%`}),j(C,{value:`12.3%`,type:`down`})])]),P(`div`,null,[t[1]||(t[1]=P(`p`,{class:`text-sm text-muted-foreground mb-2`},` Filled 风格 `,-1)),P(`div`,fl,[j(C,{value:`+12.3%`,variant:`filled`}),j(C,{value:`-12.3%`,variant:`filled`,type:`down`})])]),P(`div`,null,[t[2]||(t[2]=P(`p`,{class:`text-sm text-muted-foreground mb-2`},` Soft 风格 `,-1)),P(`div`,pl,[j(C,{value:`12.3%`,variant:`soft`}),j(C,{value:`12.3%`,variant:`soft`,type:`down`})])]),P(`div`,null,[t[3]||(t[3]=P(`p`,{class:`text-sm text-muted-foreground mb-2`},` Outline 风格 `,-1)),P(`div`,ml,[j(C,{value:`12.3%`,variant:`outline`}),j(C,{value:`12.3%`,variant:`outline`,type:`down`})])])]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`尺寸`,component:cl,componentRaw:ll},{title:`颜色反转`,component:al,componentRaw:ol},{title:`前缀/后缀`,component:el,componentRaw:tl}];export{_n as A,Ni as C,pr as D,kr as E,Ot as F,nn as M,jt as N,Vn as O,kt as P,ia as S,Ar as T,to as _,Ec as a,ga as b,Rs as c,ds as d,ts as f,Oo as g,Io as h,Dc as i,fn as j,jn as k,Ms as l,Ho as m,qc as n,vc as o,Xo as p,Pc as r,_c as s,hl as t,_s as u,Ha as v,bi as w,ha as x,Ma as y};