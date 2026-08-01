
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{_ as e}from"./src-CLMBPGj1.js";import{B as t}from"./reactivity.esm-bundler-D9OPVc9J.js";import{D as n,E as r,b as i,bt as a,k as o,mt as s,o as c,qt as l,v as u,wt as d}from"./runtime-core.esm-bundler-D-xeQwTN.js";import"./examples-BWatsn1K.js";import{t as f}from"./kbd-B4MY4AyK.js";import{t as p}from"./KbdGroup-ml3E-uFm.js";import{t as m}from"./page-header-CflkT4MF.js";var h={class:`flex flex-col gap-2`},g=o({__name:`_basic`,setup(e){return(e,t)=>(s(),i(`div`,h,[n(f,null,{default:l(()=>[...t[0]||(t[0]=[r(`Ctrl`,-1)])]),_:1}),n(f,null,{default:l(()=>[...t[1]||(t[1]=[r(`Alt`,-1)])]),_:1}),n(f,null,{default:l(()=>[...t[2]||(t[2]=[r(`Shift`,-1)])]),_:1})]))}}),_=`<script setup lang="ts">
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
`,v={class:`flex flex-col gap-2`},y=[{title:`基础`,component:g,componentRaw:_},{title:`组合`,component:o({__name:`_group-basic`,setup(e){return(e,t)=>(s(),i(`div`,v,[n(p,null,{default:l(()=>[n(f,null,{default:l(()=>[...t[0]||(t[0]=[r(`⌘`,-1)])]),_:1}),n(f,null,{default:l(()=>[...t[1]||(t[1]=[r(`⇧`,-1)])]),_:1}),n(f,null,{default:l(()=>[...t[2]||(t[2]=[r(`K`,-1)])]),_:1})]),_:1}),n(p,null,{default:l(()=>[n(f,null,{default:l(()=>[...t[3]||(t[3]=[r(`Ctrl`,-1)])]),_:1}),n(f,null,{default:l(()=>[...t[4]||(t[4]=[r(`Alt`,-1)])]),_:1}),n(f,null,{default:l(()=>[...t[5]||(t[5]=[r(`Delete`,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`}],b=o({__name:`kbd`,setup(r){return(r,o)=>{let f=m,p=e;return s(),i(`div`,null,[n(f,{title:`键盘`,description:`FaKbd / FaKbdGroup`}),(s(!0),i(c,null,a(t(y),e=>(s(),u(p,{key:e.title,code:e.componentRaw,title:e.title},{default:l(()=>[(s(),u(d(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{b as default};