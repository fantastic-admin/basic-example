
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{_ as e}from"./src-CLMBPGj1.js";import{B as t,C as n,Ct as r}from"./reactivity.esm-bundler-D9OPVc9J.js";import{D as i,_ as a,b as o,bt as s,k as c,mt as l,o as u,qt as d,v as f,wt as p}from"./runtime-core.esm-bundler-D-xeQwTN.js";import"./examples-BWatsn1K.js";import{t as m}from"./slider-IDlOqXvT.js";import{t as h}from"./fixed-bar-FCQrKer6.js";import{t as g}from"./page-header-CflkT4MF.js";var _=[{title:`固定在页面顶部`,component:c({__name:`_top`,setup(e){let t=n([50]);return(e,n)=>(l(),f(h,{position:`top`},{default:d(()=>[i(m,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]),a(`div`,{style:r(`height: ${t.value[0]}px;`)},null,4)]),_:1}))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`固定在页面底部`,component:c({__name:`_bottom`,setup(e){let t=n([50]);return(e,n)=>(l(),f(h,{position:`bottom`},{default:d(()=>[a(`div`,{style:r(`height: ${t.value[0]}px;`)},null,4),i(m,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`])]),_:1}))}}),componentRaw:`<script setup lang="ts">
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
`}],v=c({__name:`fixed_bar`,setup(n){return(n,r)=>{let c=g,m=e;return l(),o(`div`,null,[i(c,{title:`固定栏`},{description:d(()=>[...r[0]||(r[0]=[a(`div`,{class:`space-y-2`},[a(`p`,null,`FaFixedBar`),a(`p`,null,`固定在页面顶部或底部，可用于展示页面信息、操作按钮等`)],-1)])]),_:1}),(l(!0),o(u,null,s(t(_),e=>(l(),f(m,{key:e.title,code:e.componentRaw,title:e.title},{default:d(()=>[(l(),f(p(e.component)))]),_:2},1032,[`code`,`title`]))),128)),r[1]||(r[1]=a(`div`,{class:`m-4 pt-20 border rounded-lg bg-background flex h-vh justify-center`},` 尝试滚动页面，查看固定效果 `,-1))])}}});export{v as default};