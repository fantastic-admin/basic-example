
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{b as e,bt as t,et as n,mt as r,o as i}from"./runtime-core.esm-bundler-D-xeQwTN.js";var a=[`id`],o=[`offset`,`stop-color`,`stop-opacity`],s=[`id`],c=[`offset`,`stop-color`,`stop-opacity`],l=Object.assign({inheritAttrs:!1},{__name:`DefGrad`,props:{id:{type:String,required:!0},t:{type:String,required:!0,validator:e=>[`linear`,`radial`].includes(e)},stops:{type:Array,required:!0,validator:e=>e.every(e=>Array.isArray(e)&&e.length===3&&[`number`,`string`,`number`].includes(typeof e[0])&&typeof e[1]==`string`&&typeof e[2]==`number`)}},setup(l){return(u,d)=>l.t===`linear`?(r(),e(`linearGradient`,n({key:0},u.$attrs,{id:l.id}),[(r(!0),e(i,null,t(l.stops,([t,n,i],a)=>(r(),e(`stop`,{key:a,offset:t,"stop-color":n,"stop-opacity":i},null,8,o))),128))],16,a)):(r(),e(`radialGradient`,n({key:1},u.$attrs,{id:l.id}),[(r(!0),e(i,null,t(l.stops,([t,n,i],a)=>(r(),e(`stop`,{key:a,offset:t,"stop-color":n,"stop-opacity":i},null,8,c))),128))],16,s))}});export{l as t};