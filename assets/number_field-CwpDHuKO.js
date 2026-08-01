
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{_ as e}from"./src-CLMBPGj1.js";import{B as t,C as n}from"./reactivity.esm-bundler-D9OPVc9J.js";import{D as r,b as i,bt as a,k as o,mt as s,o as c,qt as l,v as u,wt as d}from"./runtime-core.esm-bundler-D-xeQwTN.js";import{t as f}from"./number-field-CYoK0fLy.js";import"./examples-BWatsn1K.js";import{t as p}from"./page-header-CflkT4MF.js";var m=[{title:`基础`,component:o({__name:`_basic`,setup(e){let t=n(0);return(e,n)=>(s(),u(f,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(0)
<\/script>

<template>
  <FaNumberField v-model="value" />
</template>
`},{title:`最大值/最小值`,component:o({__name:`_min-max`,setup(e){let t=n(5);return(e,n)=>(s(),u(f,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),min:0,max:10},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(5)
<\/script>

<template>
  <FaNumberField v-model="value" :min="0" :max="10" />
</template>
`},{title:`步长`,component:o({__name:`_step`,setup(e){let t=n(0);return(e,n)=>(s(),u(f,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),step:.1},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(0)
<\/script>

<template>
  <FaNumberField v-model="value" :step="0.1" />
</template>
`},{title:`禁用`,component:o({__name:`_disabled`,setup(e){let t=n(50);return(e,n)=>(s(),u(f,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:``},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(50)
<\/script>

<template>
  <FaNumberField v-model="value" disabled />
</template>
`}],h=o({__name:`number_field`,setup(n){return(n,o)=>{let f=p,h=e;return s(),i(`div`,null,[r(f,{title:`数字输入框`,description:`FaNumberField`}),(s(!0),i(c,null,a(t(m),e=>(s(),u(h,{key:e.title,code:e.componentRaw,title:e.title},{default:l(()=>[(s(),u(d(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{h as default};