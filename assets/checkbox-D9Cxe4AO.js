
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{$t as e,A as t,Vt as n,_ as r}from"./src-CLMBPGj1.js";import{B as i,O as a,Tt as o,bt as s}from"./reactivity.esm-bundler-D9OPVc9J.js";import{$ as c,D as l,E as u,Ft as d,Ht as f,Lt as p,Pt as m,_ as h,b as g,bt as _,g as v,k as y,mt as b,o as x,qt as S,v as C,wt as w,xt as T,y as E}from"./runtime-core.esm-bundler-D-xeQwTN.js";import{C as D,w as O}from"./runtime-dom.esm-bundler-Dnva3vcP.js";import"./examples-BWatsn1K.js";import{t as k}from"./Label-uKojphyP.js";import{t as A}from"./checkbox-CvI_gMWp.js";import{t as j}from"./page-header-CflkT4MF.js";var M=[`dir`],N=[`tabindex`,`role`,`aria-checked`,`aria-disabled`,`onClick`,`onKeydown`],P={class:`gap-1 grid min-w-0`},ee={class:`truncate`},F={key:0,class:`text-xs text-muted-foreground leading-5 font-normal`},I=y({name:`BuiltInCheckboxGroup`,__name:`CheckboxGroup`,props:c({options:{},disabled:{type:Boolean},min:{},max:{},dir:{},class:{type:[Boolean,null,String,Object,Array]},optionClass:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]},labelClass:{type:[Boolean,null,String,Object,Array]}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:c([`change`],[`update:modelValue`]),setup(r,{emit:a}){let c=r,u=a,y=p(),C=d(r,`modelValue`),w=e({observe:!0}),A=v(()=>c.dir??(w.value===`rtl`?`rtl`:`ltr`)),j=m(),I=v(()=>C.value.length);f(C,e=>{u(`change`,e)});function L(e,t){return e.id||`${j}-${t}`}function R(e,t){return e.id?e.id:typeof e.value==`string`||typeof e.value==`number`?e.value:t}function z(e){if(c.disabled||e.disabled)return!0;let t=V(e);return!!(t&&c.min!==void 0&&I.value<=c.min||!t&&c.max!==void 0&&I.value>=c.max)}function B(e){return C.value.findIndex(t=>Object.is(t,e.value))}function V(e){return B(e)>-1}function H(e,t){let n=[...C.value],r=n.findIndex(t=>Object.is(t,e.value));t?r===-1&&n.push(e.value):r>-1&&n.splice(r,1),C.value=n}function U(e,t){z(e)||H(e,t===!0)}function W(e){!y.option||z(e)||H(e,!V(e))}function G(e){!y.option||z(e)||H(e,!V(e))}return(e,r)=>(b(),g(`div`,{role:`group`,dir:A.value,class:s(i(n)(`grid gap-3`,c.class))},[(b(!0),g(x,null,_(c.options,(r,a)=>(b(),g(`div`,{key:R(r,a),tabindex:y.option&&!z(r)?0:void 0,role:y.option?`checkbox`:void 0,"aria-checked":y.option?`${V(r)}`:void 0,"aria-disabled":y.option?`${z(r)}`:void 0,class:s(i(n)(`flex gap-2`,r.description?`items-start`:`items-center`,y.option&&`outline-none focus-visible:ring-ring/50 focus-visible:ring-3 rounded-xl`,c.optionClass)),onClick:e=>W(r),onKeydown:[D(O(e=>G(r),[`prevent`]),[`enter`]),D(O(e=>G(r),[`prevent`]),[`space`])]},[l(i(t),{id:L(r,a),"model-value":V(r),disabled:z(r),class:s(i(n)(c.itemClass,y.option&&`hidden`)),"onUpdate:modelValue":e=>U(r,e)},null,8,[`id`,`model-value`,`disabled`,`class`,`onUpdate:modelValue`]),l(i(k),{for:y.option?void 0:L(r,a),class:s(i(n)(`min-w-0 flex-1 cursor-pointer gap-0`,r.description?`items-start`:`items-center`,z(r)&&`cursor-not-allowed opacity-60`,c.labelClass))},{default:S(()=>[T(e.$slots,`option`,{id:L(r,a),option:r,checked:V(r),disabled:z(r)},()=>[h(`div`,P,[h(`span`,ee,o(r.label),1),r.description?(b(),g(`span`,F,o(r.description),1)):E(``,!0)])])]),_:2},1032,[`for`,`class`])],42,N))),128))],10,M))}}),L=y({__name:`_basic`,setup(e){let t=a(!1);return(e,n)=>(b(),C(A,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},{default:S(()=>[...n[1]||(n[1]=[u(` 同意协议 `,-1)])]),_:1},8,[`modelValue`]))}}),R=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckbox from '../index.vue'

type CheckboxValue = boolean | 'indeterminate' | undefined

const checked = shallowRef<CheckboxValue>(false)
<\/script>

<template>
  <FaCheckbox v-model="checked">
    同意协议
  </FaCheckbox>
</template>
`,z=y({__name:`_custom-style`,setup(e){let t=a(!0);return(e,n)=>(b(),C(A,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),class:`px-3 py-2 border border-primary/20 rounded-lg bg-primary/5 gap-3`,"item-class":`size-5 rounded-md border-primary`,"label-class":`text-primary font-medium w-full`},{default:S(()=>[...n[1]||(n[1]=[u(` 开启精细化配置 `,-1)])]),_:1},8,[`modelValue`]))}}),B=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckbox from '../index.vue'

type CheckboxValue = boolean | 'indeterminate' | undefined

const checked = shallowRef<CheckboxValue>(true)
<\/script>

<template>
  <FaCheckbox
    v-model="checked"
    class="px-3 py-2 border border-primary/20 rounded-lg bg-primary/5 gap-3"
    item-class="size-5 rounded-md border-primary"
    label-class="text-primary font-medium w-full"
  >
    开启精细化配置
  </FaCheckbox>
</template>
`,V={class:`flex flex-col gap-3`},H=y({__name:`_disabled`,setup(e){let t=a(!1),n=a(!0);return(e,r)=>(b(),g(`div`,V,[l(A,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),disabled:``},{default:S(()=>[...r[2]||(r[2]=[u(` 禁用未选中 `,-1)])]),_:1},8,[`modelValue`]),l(A,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e),disabled:``},{default:S(()=>[...r[3]||(r[3]=[u(` 禁用已选中 `,-1)])]),_:1},8,[`modelValue`])]))}}),U=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckbox from '../index.vue'

type CheckboxValue = boolean | 'indeterminate' | undefined

const unchecked = shallowRef<CheckboxValue>(false)
const checked = shallowRef<CheckboxValue>(true)
<\/script>

<template>
  <div class="flex flex-col gap-3">
    <FaCheckbox v-model="unchecked" disabled>
      禁用未选中
    </FaCheckbox>
    <FaCheckbox v-model="checked" disabled>
      禁用已选中
    </FaCheckbox>
  </div>
</template>
`,W={class:`gap-4 grid`},G={class:`text-sm text-muted-foreground`},K=y({__name:`_group-basic`,setup(e){let t=a([`music`]),n=[{label:`阅读`,value:`reading`},{label:`音乐`,value:`music`},{label:`运动`,value:`sports`}],r=v(()=>n.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,i)=>(b(),g(`div`,W,[l(I,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:n},null,8,[`modelValue`]),l(I,{modelValue:t.value,"onUpdate:modelValue":i[1]||(i[1]=e=>t.value=e),options:n,class:`flex`},null,8,[`modelValue`]),h(`div`,G,` 当前值：`+o(r.value||`未选择`),1)]))}}),q=`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['music'])

const options = [
  { label: '阅读', value: 'reading' },
  { label: '音乐', value: 'music' },
  { label: '运动', value: 'sports' },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup v-model="value" :options="options" />
    <FaCheckboxGroup v-model="value" :options="options" class="flex" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText || '未选择' }}
    </div>
  </div>
</template>
`,J={class:`gap-4 grid`},Y={class:`gap-1 grid min-w-0`},X={class:`flex gap-2 items-center`},te={class:`text-sm font-medium truncate`},Z={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},Q={class:`text-xs text-muted-foreground leading-5`},ne={class:`text-sm text-muted-foreground`},re=y({__name:`_group-custom-option`,setup(e){let t=a([`focus`,`balanced`]),n=[{label:`专注模式`,value:`focus`,summary:`任务优先`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,summary:`默认体验`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,summary:`信息看板`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(e,r)=>(b(),g(`div`,J,[l(I,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),options:n,class:`gap-2 md:grid-cols-3`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:S(({option:e,checked:t,disabled:n})=>[h(`div`,{class:s([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[t?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,n&&`opacity-60`]])},[h(`div`,Y,[h(`div`,X,[h(`span`,te,o(e.label),1),h(`span`,Z,o(e.summary),1)]),h(`div`,Q,o(e.description),1)]),h(`span`,{class:s([`text-xs font-medium shrink-0`,t?`text-primary`:`text-muted-foreground`])},o(t?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),h(`div`,ne,` 当前值：`+o(t.value.join(`、`)||`未选择`),1)]))}}),ie=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['focus', 'balanced'])

const options = [
  {
    label: '专注模式',
    value: 'focus',
    summary: '任务优先',
    description: '突出主任务，弱化辅助信息，适合录入和审批场景。',
  },
  {
    label: '平衡模式',
    value: 'balanced',
    summary: '默认体验',
    description: '信息密度与可读性保持平衡，适合作为默认配置。',
  },
  {
    label: '高密度模式',
    value: 'dense',
    summary: '信息看板',
    description: '在大屏中同时承载更多信息，适合运营与监控看板。',
  },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup
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
                {{ option.summary }}
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
    </FaCheckboxGroup>
    <div class="text-sm text-muted-foreground">
      当前值：{{ value.join('、') || '未选择' }}
    </div>
  </div>
</template>
`,ae={class:`gap-4 grid`},oe={class:`text-sm text-muted-foreground`},$=y({__name:`_group-description`,setup(e){let t=a([`dashboard`,`report`]),n=[{label:`看板订阅`,value:`dashboard`,description:`每天 8:00 推送核心经营指标。`},{label:`周报摘要`,value:`report`,description:`每周一汇总关键数据变化。`},{label:`系统告警`,value:`alarm`,description:`异常波动时立即通知处理人。`}],r=v(()=>n.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,i)=>(b(),g(`div`,ae,[l(I,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:n},null,8,[`modelValue`]),h(`div`,oe,` 当前值：`+o(r.value||`未选择`),1)]))}}),se=`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['dashboard', 'report'])

const options = [
  {
    label: '看板订阅',
    value: 'dashboard',
    description: '每天 8:00 推送核心经营指标。',
  },
  {
    label: '周报摘要',
    value: 'report',
    description: '每周一汇总关键数据变化。',
  },
  {
    label: '系统告警',
    value: 'alarm',
    description: '异常波动时立即通知处理人。',
  },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup v-model="value" :options="options" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText || '未选择' }}
    </div>
  </div>
</template>
`,ce={class:`gap-4 grid`},le={class:`text-sm text-muted-foreground`},ue=y({__name:`_group-disabled`,setup(e){let t=a([`basic`]),n=[{label:`基础能力`,value:`basic`},{label:`审批流`,value:`approval`},{label:`审计日志`,value:`audit`,disabled:!0}],r=v(()=>n.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,i)=>(b(),g(`div`,ce,[l(I,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:n},null,8,[`modelValue`]),h(`div`,le,` 当前值：`+o(r.value||`未选择`),1)]))}}),de=`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['basic'])

const options = [
  { label: '基础能力', value: 'basic' },
  { label: '审批流', value: 'approval' },
  { label: '审计日志', value: 'audit', disabled: true },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup v-model="value" :options="options" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText || '未选择' }}
    </div>
  </div>
</template>
`,fe={class:`gap-4 grid`},pe={class:`text-sm text-muted-foreground`},me=[{title:`基础`,component:L,componentRaw:R},{title:`禁用`,component:H,componentRaw:U},{title:`半选`,component:y({__name:`_indeterminate`,setup(e){let t=a(`indeterminate`);return(e,n)=>(b(),C(A,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},{default:S(()=>[...n[1]||(n[1]=[u(` 部分选中 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckbox from '../index.vue'

type CheckboxValue = boolean | 'indeterminate' | undefined

const checked = shallowRef<CheckboxValue>('indeterminate')
<\/script>

<template>
  <FaCheckbox v-model="checked">
    部分选中
  </FaCheckbox>
</template>
`},{title:`自定义样式`,component:z,componentRaw:B},{title:`复选框组 - 基础`,component:K,componentRaw:q},{title:`复选框组 - 描述`,component:$,componentRaw:se},{title:`复选框组 - 禁用`,component:ue,componentRaw:de},{title:`复选框组 - 数量限制`,component:y({__name:`_group-limit`,setup(e){let t=a([`dashboard`]),n=[{label:`看板订阅`,value:`dashboard`},{label:`周报摘要`,value:`report`},{label:`系统告警`,value:`alarm`}],r=v(()=>n.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,i)=>(b(),g(`div`,fe,[l(I,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:n,min:1,max:2},null,8,[`modelValue`]),h(`div`,pe,` 当前值：`+o(r.value||`未选择`),1),i[1]||(i[1]=h(`div`,{class:`text-xs text-muted-foreground leading-5`},` 已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。 `,-1))]))}}),componentRaw:`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['dashboard'])

const options = [
  { label: '看板订阅', value: 'dashboard' },
  { label: '周报摘要', value: 'report' },
  { label: '系统告警', value: 'alarm' },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup
      v-model="value"
      :options="options"
      :min="1"
      :max="2"
    />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText || '未选择' }}
    </div>
    <div class="text-xs text-muted-foreground leading-5">
      已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。
    </div>
  </div>
</template>
`},{title:`复选框组 - 自定义选项`,component:re,componentRaw:ie}],he=y({__name:`checkbox`,setup(e){return(e,t)=>{let n=j,a=r;return b(),g(`div`,null,[l(n,{title:`复选框`,description:`FaCheckbox / FaCheckboxGroup`}),(b(!0),g(x,null,_(i(me),e=>(b(),C(a,{key:e.title,code:e.componentRaw,title:e.title},{default:S(()=>[(b(),C(w(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{he as default};