
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{_ as e}from"./src-CLMBPGj1.js";import{B as t,C as n}from"./reactivity.esm-bundler-D9OPVc9J.js";import{D as r,b as i,bt as a,k as o,mt as s,o as c,qt as l,v as u,wt as d}from"./runtime-core.esm-bundler-D-xeQwTN.js";import"./examples-BWatsn1K.js";import{t as f}from"./slider-IDlOqXvT.js";import{t as p}from"./page-header-CflkT4MF.js";var m={class:`space-y-6`},h=o({__name:`_alignment`,setup(e){let t=n([30]),a=n([30]);return(e,n)=>(s(),i(`div`,m,[r(f,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),"thumb-alignment":`contain`},null,8,[`modelValue`]),r(f,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),"thumb-alignment":`overflow`},null,8,[`modelValue`])]))}}),g=`<script setup lang="ts">
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
`,_=o({__name:`_basic`,setup(e){let t=n([30]);return(e,n)=>(s(),u(f,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]))}}),v=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([30])
<\/script>

<template>
  <FaSlider v-model="value" />
</template>
`,y={class:`space-y-6`},b=o({__name:`_inverted`,setup(e){let t=n([30]),a=n([30]);return(e,n)=>(s(),i(`div`,y,[r(f,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]),r(f,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),inverted:``},null,8,[`modelValue`])]))}}),x=`<script setup lang="ts">
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
`,S=o({__name:`_range`,setup(e){let t=n([40]);return(e,n)=>(s(),u(f,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),min:20,max:80},null,8,[`modelValue`]))}}),C=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([40])
<\/script>

<template>
  <FaSlider v-model="value" :min="20" :max="80" />
</template>
`,w=o({__name:`_step`,setup(e){let t=n([50]);return(e,n)=>(s(),u(f,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),step:10},null,8,[`modelValue`]))}}),T=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([50])
<\/script>

<template>
  <FaSlider v-model="value" :step="10" />
</template>
`,E={class:`space-y-6`},D=[{title:`基础`,component:_,componentRaw:v},{title:`垂直`,component:o({__name:`_vertical`,setup(e){let t=n([30]);return(e,n)=>(s(),u(f,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),orientation:`vertical`,class:`data-[orientation=vertical]:h-100`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([30])
<\/script>

<template>
  <FaSlider v-model="value" orientation="vertical" class="data-[orientation=vertical]:h-100" />
</template>
`},{title:`反转`,component:b,componentRaw:x},{title:`最大值/最小值`,component:S,componentRaw:C},{title:`步长`,component:w,componentRaw:T},{title:`对齐方式`,component:h,componentRaw:g},{title:`提示`,component:o({__name:`_tooltip`,setup(e){let t=n([30]),a=n([70]);return(e,n)=>(s(),i(`div`,E,[r(f,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]),r(f,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),tooltip:!1},null,8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
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
`}],O=o({__name:`slider`,setup(n){return(n,o)=>{let f=p,m=e;return s(),i(`div`,null,[r(f,{title:`滑块`,description:`FaSlider`}),(s(!0),i(c,null,a(t(D),e=>(s(),u(m,{key:e.title,code:e.componentRaw,title:e.title},{default:l(()=>[(s(),u(d(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{O as default};