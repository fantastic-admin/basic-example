
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{_ as e}from"./src-CLMBPGj1.js";import{B as t}from"./reactivity.esm-bundler-D9OPVc9J.js";import{D as n,E as r,_ as i,b as a,bt as o,k as s,mt as c,o as l,qt as u,v as d,wt as f}from"./runtime-core.esm-bundler-D-xeQwTN.js";import"./examples-BWatsn1K.js";import{t as p}from"./page-header-CflkT4MF.js";import{s as m}from"./index-DI3aLTMa.js";var h=[{title:`基础`,component:s({__name:`_basic`,setup(e){return(e,t)=>(c(),a(`div`,null,[t[1]||(t[1]=i(`div`,{class:`text-sm text-muted-foreground`},` 上方内容 `,-1)),n(m),t[2]||(t[2]=i(`div`,{class:`text-sm text-muted-foreground`},` 下方内容 `,-1)),n(m,null,{default:u(()=>[...t[0]||(t[0]=[r(` 分割文字 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`位置`,component:s({__name:`_position`,setup(e){return(e,t)=>(c(),a(`div`,null,[n(m,null,{default:u(()=>[...t[0]||(t[0]=[r(` center `,-1)])]),_:1}),n(m,{position:`start`},{default:u(()=>[...t[1]||(t[1]=[r(` start `,-1)])]),_:1}),n(m,{position:`end`},{default:u(()=>[...t[2]||(t[2]=[r(` end `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`}],g=s({__name:`divider`,setup(r){return(r,i)=>{let s=p,m=e;return c(),a(`div`,null,[n(s,{title:`分割线`,description:`FaDivider`}),(c(!0),a(l,null,o(t(h),e=>(c(),d(m,{key:e.title,code:e.componentRaw,title:e.title},{default:u(()=>[(c(),d(f(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{g as default};