
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{A as e,Nt as t,Q as n,S as r,Y as i,pt as a}from"./vue.runtime.esm-bundler-CGoWWSM3.js";import{t as o}from"./Primitive-Cf69jBP5.js";var s=e({__name:`VisuallyHidden`,props:{feature:{type:String,required:!1,default:`focusable`},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(e){return(e,s)=>(i(),r(t(o),{as:e.as,"as-child":e.asChild,"aria-hidden":e.feature===`focusable`?`true`:void 0,"data-hidden":e.feature===`fully-hidden`?``:void 0,tabindex:e.feature===`fully-hidden`?`-1`:void 0,style:{position:`absolute`,border:0,width:`1px`,height:`1px`,padding:0,margin:`-1px`,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,clipPath:`inset(50%)`,whiteSpace:`nowrap`,wordWrap:`normal`,top:`-1px`,left:`-1px`}},{default:a(()=>[n(e.$slots,`default`)]),_:3},8,[`as`,`as-child`,`aria-hidden`,`data-hidden`,`tabindex`]))}});export{s as t};