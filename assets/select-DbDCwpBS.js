
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{_ as e,g as t}from"./src-CLMBPGj1.js";import{B as n,C as r}from"./reactivity.esm-bundler-D9OPVc9J.js";import{D as i,b as a,bt as o,k as s,mt as c,o as l,qt as u,v as d,wt as f}from"./runtime-core.esm-bundler-D-xeQwTN.js";import"./examples-BWatsn1K.js";import{t as p}from"./page-header-CflkT4MF.js";var m=s({__name:`_basic`,setup(e){let n=r(`1`),i=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,r)=>(c(),d(t,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=e=>n.value=e),options:i},null,8,[`modelValue`]))}}),h=`<script setup lang="ts">
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
`,g={class:`space-y-2`},_=s({__name:`_disabled`,setup(e){let n=r(`1`),o=r(`1`),s=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`,disabled:!0},{label:`Option 3`,value:`3`}];return(e,r)=>(c(),a(`div`,g,[i(t,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=e=>n.value=e),options:s,disabled:``},null,8,[`modelValue`]),i(t,{modelValue:o.value,"onUpdate:modelValue":r[1]||(r[1]=e=>o.value=e),options:s},null,8,[`modelValue`])]))}}),v=`<script setup lang="ts">
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
`,y=s({__name:`_group`,setup(e){let n=r(`1`),i=[{label:`Group 1`,options:[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`}]},{label:`Group 2`,options:[{label:`Option 3`,value:`3`},{label:`Option 4`,value:`4`}]}];return(e,r)=>(c(),d(t,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=e=>n.value=e),options:i},null,8,[`modelValue`]))}}),b=`<script setup lang="ts">
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
`,x=s({__name:`_multiple`,setup(e){let n=r([]),i=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,r)=>(c(),d(t,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=e=>n.value=e),options:i,multiple:``},null,8,[`modelValue`]))}}),S=`<script setup lang="ts">
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
`,C={class:`space-y-2`},w=[{title:`基础`,component:m,componentRaw:h},{title:`组`,component:y,componentRaw:b},{title:`多选`,component:x,componentRaw:S},{title:`定位模式`,component:s({__name:`_position`,setup(e){let n=r(`2`),o=r(`2`),s=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,r)=>(c(),a(`div`,C,[i(t,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=e=>n.value=e),options:s,position:`popper`},null,8,[`modelValue`]),i(t,{modelValue:o.value,"onUpdate:modelValue":r[1]||(r[1]=e=>o.value=e),options:s,position:`item-aligned`},null,8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`禁用`,component:_,componentRaw:v}],T=s({__name:`select`,setup(t){return(t,r)=>{let s=p,m=e;return c(),a(`div`,null,[i(s,{title:`选择器`,description:`FaSelect`}),(c(!0),a(l,null,o(n(w),e=>(c(),d(m,{key:e.title,code:e.componentRaw,title:e.title},{default:u(()=>[(c(),d(f(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{T as default};