
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{_ as e}from"./src-CLMBPGj1.js";import{B as t,C as n,Tt as r,bt as i}from"./reactivity.esm-bundler-D9OPVc9J.js";import{D as a,_ as o,b as s,bt as c,g as l,k as u,mt as d,o as f,qt as p,v as m,wt as h}from"./runtime-core.esm-bundler-D-xeQwTN.js";import{F as g}from"./examples-BWatsn1K.js";import{t as _}from"./page-header-CflkT4MF.js";var v={class:`gap-4 grid`},y={class:`text-sm text-muted-foreground`},b=u({__name:`_basic`,setup(e){let t=n(`comfortable`),i=[{label:`默认`,value:`default`},{label:`舒适`,value:`comfortable`},{label:`紧凑`,value:`compact`}];return(e,n)=>(d(),s(`div`,v,[a(g,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),options:i},null,8,[`modelValue`]),a(g,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),options:i,class:`flex`},null,8,[`modelValue`]),o(`div`,y,` 当前值：`+r(t.value),1)]))}}),x=`<script setup lang="ts">
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
`,S={class:`gap-4 grid`},C={class:`gap-1 grid min-w-0`},w={class:`flex gap-2 items-center`},T={class:`text-sm font-medium truncate`},E={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},D={class:`text-xs text-muted-foreground leading-5`},O={class:`text-sm text-muted-foreground`},k=u({__name:`_custom-option`,setup(e){let t=n(`balanced`),c=[{label:`专注模式`,value:`focus`,badge:`录入`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,badge:`推荐`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,badge:`大屏`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(e,n)=>(d(),s(`div`,S,[a(g,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),options:c,class:`gap-2 md:grid-cols-3`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:p(({option:e,checked:t,disabled:n})=>[o(`div`,{class:i([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[t?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,n&&`opacity-60`]])},[o(`div`,C,[o(`div`,w,[o(`span`,T,r(e.label),1),o(`span`,E,r(e.badge),1)]),o(`div`,D,r(e.description),1)]),o(`span`,{class:i([`text-xs font-medium shrink-0`,t?`text-primary`:`text-muted-foreground`])},r(t?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),o(`div`,O,` 当前值：`+r(t.value),1)]))}}),A=`<script setup lang="ts">
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
`,j={class:`gap-4 grid`},M={class:`text-sm text-muted-foreground`},N=[{title:`基础`,component:b,componentRaw:x},{title:`带描述和禁用态`,component:u({__name:`_description-disabled`,setup(e){let t=n(`growth`),i=[{label:`创业版`,value:`starter`,description:`适合 1-10 人小团队，保留核心能力。`},{label:`成长版`,value:`growth`,description:`适合多角色协作，支持审批与审计流程。`},{label:`企业版`,value:`enterprise`,description:`高级安全策略与 SSO 即将开放。`,disabled:!0}],c=l(()=>i.find(e=>e.value===t.value)?.label??``);return(e,n)=>(d(),s(`div`,j,[a(g,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),options:i},null,8,[`modelValue`]),o(`div`,M,` 已选套餐：`+r(c.value),1)]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`自定义选项内容`,component:k,componentRaw:A}],P=u({__name:`radio_group`,setup(n){return(n,r)=>{let i=_,o=e;return d(),s(`div`,null,[a(i,{title:`单选组`,description:`FaRadioGroup`}),(d(!0),s(f,null,c(t(N),e=>(d(),m(o,{key:e.title,code:e.componentRaw,title:e.title},{default:p(()=>[(d(),m(h(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{P as default};