
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,D as t,Dt as n,Jt as r,Kt as i,N as a,Nt as o,O as s,S as c,St as l,Y as u,Yt as d,Z as f,b as p,d as m,h,mt as g,pt as _,w as v,wt as y,x as b}from"./vue.runtime.esm-bundler-CCSCKkX1.js";import{A as x,B as S,C,D as w,E as T,F as E,G as D,H as O,I as ee,J as k,K as A,L as j,M,N as te,O as N,P,R as F,S as I,T as ne,U as L,V as re,W as R,_ as z,a as B,at as V,b as H,c as U,d as W,f as ie,g as ae,h as G,i as oe,it as se,j as ce,k as le,l as K,m as ue,o as de,p as q,q as J,r as Y,s as X,t as Z,u as Q,v as fe,w as $,x as pe,y as me,z as he}from"./src-0wGvipgE.js";var ge=[{title:`基础`,component:e({__name:`_basic`,setup(e){return(e,t)=>(u(),c(se,{icon:`i-lucide:info`,title:`提示信息`,description:`这是一条普通提示，用于展示页面说明或操作反馈。`}))}}),componentRaw:`<script lang="ts" setup>
// 组件实际使用时无需手动导入，框架会自动导入
import FaAlert from '../index.vue'
<\/script>

<template>
  <FaAlert
    icon="i-lucide:info"
    title="提示信息"
    description="这是一条普通提示，用于展示页面说明或操作反馈。"
  />
</template>
`},{title:`警告类型`,component:e({__name:`_variant`,setup(e){return(e,t)=>(u(),c(se,{icon:`i-lucide:circle-alert`,title:`危险提示`,description:`删除后数据将无法恢复，请谨慎操作。`,variant:`destructive`}))}}),componentRaw:`<script lang="ts" setup>
// 组件实际使用时无需手动导入，框架会自动导入
import FaAlert from '../index.vue'
<\/script>

<template>
  <FaAlert
    icon="i-lucide:circle-alert"
    title="危险提示"
    description="删除后数据将无法恢复，请谨慎操作。"
    variant="destructive"
  />
</template>
`},{title:`自定义描述`,component:e({__name:`_slot`,setup(e){return(e,n)=>(u(),c(se,{icon:`i-lucide:terminal`,title:`命令执行完成`},{description:_(()=>[b(`div`,null,[n[1]||(n[1]=t(` 已成功生成文件，可继续进行下一步操作。 `,-1)),s(D,{variant:`link`,class:`px-0 h-auto`},{default:_(()=>[...n[0]||(n[0]=[t(` 查看详情 `,-1)])]),_:1})])]),_:1}))}}),componentRaw:`<script lang="ts" setup>
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaAlert from '../index.vue'
<\/script>

<template>
  <FaAlert icon="i-lucide:terminal" title="命令执行完成">
    <template #description>
      <div>
        已成功生成文件，可继续进行下一步操作。
        <FaButton variant="link" class="px-0 h-auto">
          查看详情
        </FaButton>
      </div>
    </template>
  </FaAlert>
</template>
`}],_e=e({__name:`_basic`,setup(e){return(e,t)=>(u(),c(k,{src:`https://fantastic-admin.hurui.me/logo.svg`}))}}),ve=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaAvatar from '../index.vue'
<\/script>

<template>
  <FaAvatar src="https://fantastic-admin.hurui.me/logo.svg" />
</template>
`,ye={class:`flex space-x--2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background`},be=[{title:`基础`,component:_e,componentRaw:ve},{title:`回退显示`,component:e({__name:`_fallback`,setup(e){return(e,t)=>(u(),c(k,{src:``,fallback:`Hooray`}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaAvatar from '../index.vue'
<\/script>

<template>
  <FaAvatar src="" fallback="Hooray" />
</template>
`},{title:`自定义样式`,component:e({__name:`_custom-style`,setup(e){return(e,t)=>(u(),v(`div`,ye,[s(G,{text:`Fantastic-admin`},{default:_(()=>[s(k,{src:`https://github.com/fantastic-admin.png`,class:`transition hover:scale-110 hover:z-1`})]),_:1}),s(G,{text:`Hooray`},{default:_(()=>[s(k,{src:`https://github.com/hooray.png`,class:`transition hover:scale-110 hover:z-1`})]),_:1}),s(G,{text:`Admin`},{default:_(()=>[s(k,{src:`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=admin`,class:`transition hover:scale-110 hover:z-1`})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTooltip from '../../tooltip/index.vue'
import FaAvatar from '../index.vue'
<\/script>

<template>
  <div class="flex space-x--2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
    <FaTooltip text="Fantastic-admin">
      <FaAvatar src="https://github.com/fantastic-admin.png" class="transition hover:scale-110 hover:z-1" />
    </FaTooltip>
    <FaTooltip text="Hooray">
      <FaAvatar src="https://github.com/hooray.png" class="transition hover:scale-110 hover:z-1" />
    </FaTooltip>
    <FaTooltip text="Admin">
      <FaAvatar src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=admin" class="transition hover:scale-110 hover:z-1" />
    </FaTooltip>
  </div>
</template>
`}],xe={class:`flex gap-8`},Se=[{title:`基础`,component:e({__name:`_basic`,setup(e){return(e,t)=>(u(),v(`div`,xe,[s(J,{value:!0},{default:_(()=>[s(V,{name:`i-ri:notification-3-line`})]),_:1}),s(J,{value:99},{default:_(()=>[s(V,{name:`i-ri:notification-3-line`})]),_:1}),s(J,{value:`噢`},{default:_(()=>[s(V,{name:`i-ri:notification-3-line`})]),_:1}),s(J,{value:`9`,variant:`secondary`},{default:_(()=>[s(V,{name:`i-ri:notification-3-line`})]),_:1}),s(J,{value:`9`,variant:`destructive`},{default:_(()=>[s(V,{name:`i-ri:notification-3-line`})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../../basic/icon/index.vue'
import FaBadge from '../index.vue'
<\/script>

<template>
  <div class="flex gap-8">
    <FaBadge :value="true">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
    <FaBadge :value="99">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
    <FaBadge value="噢">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
    <FaBadge value="9" variant="secondary">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
    <FaBadge value="9" variant="destructive">
      <FaIcon name="i-ri:notification-3-line" />
    </FaBadge>
  </div>
</template>
`}],Ce=e({__name:`_basic`,setup(e){return(e,n)=>(u(),c(A,null,{default:_(()=>[s(D,null,{default:_(()=>[s(V,{name:`i-mdi:eye`,class:`size-4`}),n[0]||(n[0]=t(` 查看详情 `,-1))]),_:1}),s(D,null,{default:_(()=>[s(V,{name:`i-mdi:pencil`,class:`size-4`}),n[1]||(n[1]=t(` 编辑 `,-1))]),_:1}),s(D,null,{default:_(()=>[s(V,{name:`i-mdi:delete`,class:`size-4`}),n[2]||(n[2]=t(` 删除 `,-1))]),_:1})]),_:1}))}}),we=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaButtonGroup from '../index.vue'
<\/script>

<template>
  <FaButtonGroup>
    <FaButton>
      <FaIcon name="i-mdi:eye" class="size-4" />
      查看详情
    </FaButton>
    <FaButton>
      <FaIcon name="i-mdi:pencil" class="size-4" />
      编辑
    </FaButton>
    <FaButton>
      <FaIcon name="i-mdi:delete" class="size-4" />
      删除
    </FaButton>
  </FaButtonGroup>
</template>
`,Te=e({__name:`_nested`,setup(e){return(e,n)=>(u(),c(A,null,{default:_(()=>[s(A,null,{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[0]||(n[0]=[t(` 1 `,-1)])]),_:1}),s(D,{variant:`outline`},{default:_(()=>[...n[1]||(n[1]=[t(` 2 `,-1)])]),_:1}),s(D,{variant:`outline`},{default:_(()=>[...n[2]||(n[2]=[t(` 3 `,-1)])]),_:1}),s(D,{variant:`outline`},{default:_(()=>[...n[3]||(n[3]=[t(` 4 `,-1)])]),_:1}),s(D,{variant:`outline`},{default:_(()=>[...n[4]||(n[4]=[t(` 5 `,-1)])]),_:1})]),_:1}),s(A,null,{default:_(()=>[s(D,{variant:`outline`,size:`icon`},{default:_(()=>[s(V,{name:`i-ep:arrow-left`})]),_:1}),s(D,{variant:`outline`,size:`icon`},{default:_(()=>[s(V,{name:`i-ep:arrow-right`})]),_:1})]),_:1})]),_:1}))}}),Ee=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaButtonGroup from '../index.vue'
<\/script>

<template>
  <FaButtonGroup>
    <FaButtonGroup>
      <FaButton variant="outline">
        1
      </FaButton>
      <FaButton variant="outline">
        2
      </FaButton>
      <FaButton variant="outline">
        3
      </FaButton>
      <FaButton variant="outline">
        4
      </FaButton>
      <FaButton variant="outline">
        5
      </FaButton>
    </FaButtonGroup>
    <FaButtonGroup>
      <FaButton variant="outline" size="icon">
        <FaIcon name="i-ep:arrow-left" />
      </FaButton>
      <FaButton variant="outline" size="icon">
        <FaIcon name="i-ep:arrow-right" />
      </FaButton>
    </FaButtonGroup>
  </FaButtonGroup>
</template>
`,De={class:`flex flex-col gap-4 items-start`},Oe=e({__name:`_separator`,setup(e){return(e,n)=>(u(),v(`div`,De,[s(A,{separator:``},{default:_(()=>[s(D,null,{default:_(()=>[s(V,{name:`i-mdi:eye`,class:`size-4`}),n[0]||(n[0]=t(` 查看详情 `,-1))]),_:1}),s(D,null,{default:_(()=>[s(V,{name:`i-mdi:pencil`,class:`size-4`}),n[1]||(n[1]=t(` 编辑 `,-1))]),_:1}),s(D,null,{default:_(()=>[s(V,{name:`i-mdi:delete`,class:`size-4`}),n[2]||(n[2]=t(` 删除 `,-1))]),_:1})]),_:1}),s(A,{orientation:`vertical`,separator:``},{default:_(()=>[s(D,null,{default:_(()=>[s(V,{name:`i-mdi:eye`,class:`size-4`}),n[3]||(n[3]=t(` 查看详情 `,-1))]),_:1}),s(D,null,{default:_(()=>[s(V,{name:`i-mdi:pencil`,class:`size-4`}),n[4]||(n[4]=t(` 编辑 `,-1))]),_:1}),s(D,null,{default:_(()=>[s(V,{name:`i-mdi:delete`,class:`size-4`}),n[5]||(n[5]=t(` 删除 `,-1))]),_:1})]),_:1}),n[9]||(n[9]=b(`p`,null,`按钮如果为 outline 则无需设置分割线`,-1)),s(A,null,{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[s(V,{name:`i-mdi:eye`,class:`size-4`}),n[6]||(n[6]=t(` 查看详情 `,-1))]),_:1}),s(D,{variant:`outline`},{default:_(()=>[s(V,{name:`i-mdi:pencil`,class:`size-4`}),n[7]||(n[7]=t(` 编辑 `,-1))]),_:1}),s(D,{variant:`outline`},{default:_(()=>[s(V,{name:`i-mdi:delete`,class:`size-4`}),n[8]||(n[8]=t(` 删除 `,-1))]),_:1})]),_:1})]))}}),ke=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaButtonGroup from '../index.vue'
<\/script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <FaButtonGroup separator>
      <FaButton>
        <FaIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:delete" class="size-4" />
        删除
      </FaButton>
    </FaButtonGroup>
    <FaButtonGroup orientation="vertical" separator>
      <FaButton>
        <FaIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:delete" class="size-4" />
        删除
      </FaButton>
    </FaButtonGroup>
    <p>按钮如果为 outline 则无需设置分割线</p>
    <FaButtonGroup>
      <FaButton variant="outline">
        <FaIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FaButton>
      <FaButton variant="outline">
        <FaIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FaButton>
      <FaButton variant="outline">
        <FaIcon name="i-mdi:delete" class="size-4" />
        删除
      </FaButton>
    </FaButtonGroup>
  </div>
</template>
`,Ae=e({__name:`_vertical`,setup(e){return(e,n)=>(u(),c(A,{orientation:`vertical`},{default:_(()=>[s(D,null,{default:_(()=>[s(V,{name:`i-mdi:eye`,class:`size-4`}),n[0]||(n[0]=t(` 查看详情 `,-1))]),_:1}),s(D,null,{default:_(()=>[s(V,{name:`i-mdi:pencil`,class:`size-4`}),n[1]||(n[1]=t(` 编辑 `,-1))]),_:1}),s(D,null,{default:_(()=>[s(V,{name:`i-mdi:delete`,class:`size-4`}),n[2]||(n[2]=t(` 删除 `,-1))]),_:1})]),_:1}))}}),je=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaButtonGroup from '../index.vue'
<\/script>

<template>
  <FaButtonGroup orientation="vertical">
    <FaButton>
      <FaIcon name="i-mdi:eye" class="size-4" />
      查看详情
    </FaButton>
    <FaButton>
      <FaIcon name="i-mdi:pencil" class="size-4" />
      编辑
    </FaButton>
    <FaButton>
      <FaIcon name="i-mdi:delete" class="size-4" />
      删除
    </FaButton>
  </FaButtonGroup>
</template>
`,Me={class:`flex flex-col gap-4 items-start`},Ne=[{title:`基础`,component:Ce,componentRaw:we},{title:`垂直`,component:Ae,componentRaw:je},{title:`分割线`,component:Oe,componentRaw:ke},{title:`嵌套`,component:Te,componentRaw:Ee},{title:`与其他组件组合`,component:e({__name:`_with-components`,setup(e){let r=n(`CNY`);return(e,n)=>(u(),v(`div`,Me,[s(A,null,{default:_(()=>[s(T),s(D,{variant:`outline`,size:`icon`},{default:_(()=>[s(V,{name:`i-ep:search`})]),_:1})]),_:1}),s(A,null,{default:_(()=>[s(z,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e),options:[{label:`¥`,value:`CNY`},{label:`$`,value:`USD`},{label:`€`,value:`EUR`}],class:`gap-1 w-inherit`},null,8,[`modelValue`]),s(T,{placeholder:`10.00`})]),_:1}),s(A,null,{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[1]||(n[1]=[t(` 关注 `,-1)])]),_:1}),s(E,{items:[[{label:`加入黑名单`},{label:`分享到群聊`},{label:`反馈举报`}],[{label:`取消关注`}]]},{default:_(()=>[s(D,{variant:`outline`,size:`icon`},{default:_(()=>[s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDropdown from '../../dropdown/index.vue'
import FaIcon from '../../icon/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaButtonGroup from '../index.vue'

const currency = shallowRef('CNY')
<\/script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <FaButtonGroup>
      <FaInput />
      <FaButton variant="outline" size="icon">
        <FaIcon name="i-ep:search" />
      </FaButton>
    </FaButtonGroup>
    <FaButtonGroup>
      <FaSelect
        v-model="currency"
        :options="[
          { label: '¥', value: 'CNY' },
          { label: '$', value: 'USD' },
          { label: '€', value: 'EUR' },
        ]"
        class="gap-1 w-inherit"
      />
      <FaInput placeholder="10.00" />
    </FaButtonGroup>
    <FaButtonGroup>
      <FaButton variant="outline">
        关注
      </FaButton>
      <FaDropdown
        :items="[
          [
            { label: '加入黑名单' },
            { label: '分享到群聊' },
            { label: '反馈举报' },
          ],
          [
            { label: '取消关注' },
          ],
        ]"
      >
        <FaButton variant="outline" size="icon">
          <FaIcon name="i-ep:caret-bottom" />
        </FaButton>
      </FaDropdown>
    </FaButtonGroup>
  </div>
</template>
`}],Pe=e({__name:`_basic`,setup(e){return(e,n)=>(u(),c(D,null,{default:_(()=>[...n[0]||(n[0]=[t(` 按钮 `,-1)])]),_:1}))}}),Fe=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <FaButton>
    按钮
  </FaButton>
</template>
`,Ie={class:`flex flex-wrap gap-4`},Le=e({__name:`_disabled`,setup(e){return(e,n)=>(u(),v(`div`,Ie,[s(D,{disabled:``},{default:_(()=>[...n[0]||(n[0]=[t(` 禁用按钮 `,-1)])]),_:1}),s(D,{variant:`outline`,disabled:``},{default:_(()=>[...n[1]||(n[1]=[t(` 禁用边框按钮 `,-1)])]),_:1}),s(D,{variant:`secondary`,disabled:``},{default:_(()=>[...n[2]||(n[2]=[t(` 禁用次要按钮 `,-1)])]),_:1})]))}}),Re=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaButton disabled>
      禁用按钮
    </FaButton>
    <FaButton variant="outline" disabled>
      禁用边框按钮
    </FaButton>
    <FaButton variant="secondary" disabled>
      禁用次要按钮
    </FaButton>
  </div>
</template>
`,ze={class:`flex flex-wrap gap-4`},Be=e({__name:`_loading`,setup(e){return(e,n)=>(u(),v(`div`,ze,[s(D,{loading:``},{default:_(()=>[...n[0]||(n[0]=[t(` 加载中 `,-1)])]),_:1}),s(D,{variant:`outline`,loading:``},{default:_(()=>[...n[1]||(n[1]=[t(` 保存中 `,-1)])]),_:1}),s(D,{variant:`secondary`,loading:``},{default:_(()=>[...n[2]||(n[2]=[t(` 提交中 `,-1)])]),_:1})]))}}),Ve=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaButton loading>
      加载中
    </FaButton>
    <FaButton variant="outline" loading>
      保存中
    </FaButton>
    <FaButton variant="secondary" loading>
      提交中
    </FaButton>
  </div>
</template>
`,He={class:`flex flex-wrap gap-4 items-center`},Ue=e({__name:`_size`,setup(e){return(e,n)=>(u(),v(`div`,He,[s(D,{size:`sm`},{default:_(()=>[...n[0]||(n[0]=[t(` 小按钮 `,-1)])]),_:1}),s(D,null,{default:_(()=>[...n[1]||(n[1]=[t(` 默认尺寸 `,-1)])]),_:1}),s(D,{size:`lg`},{default:_(()=>[...n[2]||(n[2]=[t(` 大按钮 `,-1)])]),_:1}),s(D,{size:`icon-sm`,variant:`outline`},{default:_(()=>[s(V,{name:`i-lucide:search`})]),_:1}),s(D,{size:`icon`,variant:`outline`},{default:_(()=>[s(V,{name:`i-lucide:settings`})]),_:1}),s(D,{size:`icon-lg`,variant:`outline`},{default:_(()=>[s(V,{name:`i-lucide:plus`})]),_:1})]))}}),We=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import FaButton from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4 items-center">
    <FaButton size="sm">
      小按钮
    </FaButton>
    <FaButton>
      默认尺寸
    </FaButton>
    <FaButton size="lg">
      大按钮
    </FaButton>
    <FaButton size="icon-sm" variant="outline">
      <FaIcon name="i-lucide:search" />
    </FaButton>
    <FaButton size="icon" variant="outline">
      <FaIcon name="i-lucide:settings" />
    </FaButton>
    <FaButton size="icon-lg" variant="outline">
      <FaIcon name="i-lucide:plus" />
    </FaButton>
  </div>
</template>
`,Ge={class:`flex flex-wrap gap-4`},Ke=[{title:`基础`,component:Pe,componentRaw:Fe},{title:`变体`,component:e({__name:`_variant`,setup(e){return(e,n)=>(u(),v(`div`,Ge,[s(D,null,{default:_(()=>[...n[0]||(n[0]=[t(` 默认按钮 `,-1)])]),_:1}),s(D,{variant:`destructive`},{default:_(()=>[...n[1]||(n[1]=[t(` 危险按钮 `,-1)])]),_:1}),s(D,{variant:`outline`},{default:_(()=>[...n[2]||(n[2]=[t(` 边框按钮 `,-1)])]),_:1}),s(D,{variant:`secondary`},{default:_(()=>[...n[3]||(n[3]=[t(` 次要按钮 `,-1)])]),_:1}),s(D,{variant:`ghost`},{default:_(()=>[...n[4]||(n[4]=[t(` 幽灵按钮 `,-1)])]),_:1}),s(D,{variant:`link`},{default:_(()=>[...n[5]||(n[5]=[t(` 链接按钮 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaButton>
      默认按钮
    </FaButton>
    <FaButton variant="destructive">
      危险按钮
    </FaButton>
    <FaButton variant="outline">
      边框按钮
    </FaButton>
    <FaButton variant="secondary">
      次要按钮
    </FaButton>
    <FaButton variant="ghost">
      幽灵按钮
    </FaButton>
    <FaButton variant="link">
      链接按钮
    </FaButton>
  </div>
</template>
`},{title:`尺寸`,component:Ue,componentRaw:We},{title:`禁用`,component:Le,componentRaw:Re},{title:`加载`,component:Be,componentRaw:Ve}],qe=e({__name:`_basic`,setup(e){return(e,n)=>(u(),c(R,{title:`卡片标题`,class:`w-80`},{default:_(()=>[...n[0]||(n[0]=[t(` 卡片内容 `,-1)])]),_:1}))}}),Je=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaCard from '../index.vue'
<\/script>

<template>
  <FaCard title="卡片标题" class="w-80">
    卡片内容
  </FaCard>
</template>
`,Ye=e({__name:`_custom-style`,setup(e){return(e,n)=>(u(),c(R,{title:`自定义样式`,description:`通过 class、headerClass、contentClass 和 footerClass 调整区域样式。`,class:`py-0 gap-0 w-96 overflow-hidden`,"header-class":`bg-primary/8 py-4`,"content-class":`py-6 text-sm leading-6`,"footer-class":`bg-muted text-sm text-muted-foreground py-3`},{footer:_(()=>[...n[0]||(n[0]=[t(` 自定义页脚区域 `,-1)])]),default:_(()=>[n[1]||(n[1]=t(` 这里是自定义内容区域，可以根据业务场景调整间距、背景和边框。 `,-1))]),_:1}))}}),Xe=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaCard from '../index.vue'
<\/script>

<template>
  <FaCard
    title="自定义样式"
    description="通过 class、headerClass、contentClass 和 footerClass 调整区域样式。"
    class="py-0 gap-0 w-96 overflow-hidden"
    header-class="bg-primary/8 py-4"
    content-class="py-6 text-sm leading-6"
    footer-class="bg-muted text-sm text-muted-foreground py-3"
  >
    这里是自定义内容区域，可以根据业务场景调整间距、背景和边框。
    <template #footer>
      自定义页脚区域
    </template>
  </FaCard>
</template>
`,Ze=e({__name:`_description`,setup(e){return(e,n)=>(u(),c(R,{title:`卡片标题`,description:`这是一段辅助描述，用于补充说明卡片内容。`,class:`w-80`},{default:_(()=>[...n[0]||(n[0]=[t(` 卡片内容 `,-1)])]),_:1}))}}),Qe=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaCard from '../index.vue'
<\/script>

<template>
  <FaCard title="卡片标题" description="这是一段辅助描述，用于补充说明卡片内容。" class="w-80">
    卡片内容
  </FaCard>
</template>
`,$e={class:`flex gap-4 items-center justify-between`},et={class:`flex gap-2 w-full justify-end`},tt=[{title:`基础`,component:qe,componentRaw:Je},{title:`描述`,component:Ze,componentRaw:Qe},{title:`插槽`,component:e({__name:`_slot`,setup(e){return(e,n)=>(u(),c(R,{class:`w-96`},{header:_(()=>[b(`div`,$e,[n[0]||(n[0]=b(`div`,null,[b(`div`,{class:`text-base font-semibold`},` 自定义头部 `),b(`div`,{class:`text-sm text-muted-foreground`},` header slot 会覆盖 title 和 description `)],-1)),s(V,{name:`i-lucide:badge-check`,class:`text-primary size-5`})])]),footer:_(()=>[b(`div`,et,[s(D,{variant:`outline`},{default:_(()=>[...n[1]||(n[1]=[t(` 取消 `,-1)])]),_:1}),s(D,null,{default:_(()=>[...n[2]||(n[2]=[t(` 确定 `,-1)])]),_:1})])]),default:_(()=>[n[3]||(n[3]=t(` 卡片内容区域 `,-1))]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaCard from '../index.vue'
<\/script>

<template>
  <FaCard class="w-96">
    <template #header>
      <div class="flex gap-4 items-center justify-between">
        <div>
          <div class="text-base font-semibold">
            自定义头部
          </div>
          <div class="text-sm text-muted-foreground">
            header slot 会覆盖 title 和 description
          </div>
        </div>
        <FaIcon name="i-lucide:badge-check" class="text-primary size-5" />
      </div>
    </template>

    卡片内容区域

    <template #footer>
      <div class="flex gap-2 w-full justify-end">
        <FaButton variant="outline">
          取消
        </FaButton>
        <FaButton>
          确定
        </FaButton>
      </div>
    </template>
  </FaCard>
</template>
`},{title:`自定义样式`,component:Ye,componentRaw:Xe}],nt={class:`gap-4 grid`},rt={class:`text-sm text-muted-foreground`},it=e({__name:`_basic`,setup(e){let t=n([`music`]),r=[{label:`阅读`,value:`reading`},{label:`音乐`,value:`music`},{label:`运动`,value:`sports`}],i=p(()=>r.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,n)=>(u(),v(`div`,nt,[s(L,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),options:r},null,8,[`modelValue`]),s(L,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),options:r,class:`flex`},null,8,[`modelValue`]),b(`div`,rt,` 当前值：`+d(i.value||`未选择`),1)]))}}),at=`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../index.vue'

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
`,ot={class:`gap-4 grid`},st={class:`gap-1 grid min-w-0`},ct={class:`flex gap-2 items-center`},lt={class:`text-sm font-medium truncate`},ut={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},dt={class:`text-xs text-muted-foreground leading-5`},ft={class:`text-sm text-muted-foreground`},pt=e({__name:`_custom-option`,setup(e){let t=n([`focus`,`balanced`]),r=[{label:`专注模式`,value:`focus`,summary:`任务优先`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,summary:`默认体验`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,summary:`信息看板`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(e,n)=>(u(),v(`div`,ot,[s(L,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),options:r,class:`gap-2 md:grid-cols-3`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:_(({option:e,checked:t,disabled:n})=>[b(`div`,{class:i([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[t?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,n&&`opacity-60`]])},[b(`div`,st,[b(`div`,ct,[b(`span`,lt,d(e.label),1),b(`span`,ut,d(e.summary),1)]),b(`div`,dt,d(e.description),1)]),b(`span`,{class:i([`text-xs font-medium shrink-0`,t?`text-primary`:`text-muted-foreground`])},d(t?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),b(`div`,ft,` 当前值：`+d(t.value.join(`、`)||`未选择`),1)]))}}),mt=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../index.vue'

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
`,ht={class:`gap-4 grid`},gt={class:`text-sm text-muted-foreground`},_t=e({__name:`_description`,setup(e){let t=n([`dashboard`,`report`]),r=[{label:`看板订阅`,value:`dashboard`,description:`每天 8:00 推送核心经营指标。`},{label:`周报摘要`,value:`report`,description:`每周一汇总关键数据变化。`},{label:`系统告警`,value:`alarm`,description:`异常波动时立即通知处理人。`}],i=p(()=>r.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,n)=>(u(),v(`div`,ht,[s(L,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),options:r},null,8,[`modelValue`]),b(`div`,gt,` 当前值：`+d(i.value||`未选择`),1)]))}}),vt=`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../index.vue'

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
`,yt={class:`gap-4 grid`},bt={class:`text-sm text-muted-foreground`},xt=e({__name:`_disabled`,setup(e){let t=n([`basic`]),r=[{label:`基础能力`,value:`basic`},{label:`审批流`,value:`approval`},{label:`审计日志`,value:`audit`,disabled:!0}],i=p(()=>r.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,n)=>(u(),v(`div`,yt,[s(L,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),options:r},null,8,[`modelValue`]),b(`div`,bt,` 当前值：`+d(i.value||`未选择`),1)]))}}),St=`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../index.vue'

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
`,Ct={class:`gap-4 grid`},wt={class:`text-sm text-muted-foreground`},Tt=[{title:`基础`,component:it,componentRaw:at},{title:`描述`,component:_t,componentRaw:vt},{title:`禁用`,component:xt,componentRaw:St},{title:`数量限制`,component:e({__name:`_limit`,setup(e){let t=n([`dashboard`]),r=[{label:`看板订阅`,value:`dashboard`},{label:`周报摘要`,value:`report`},{label:`系统告警`,value:`alarm`}],i=p(()=>r.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,n)=>(u(),v(`div`,Ct,[s(L,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),options:r,min:1,max:2},null,8,[`modelValue`]),b(`div`,wt,` 当前值：`+d(i.value||`未选择`),1),n[1]||(n[1]=b(`div`,{class:`text-xs text-muted-foreground leading-5`},` 已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。 `,-1))]))}}),componentRaw:`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../index.vue'

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
`},{title:`自定义选项内容`,component:pt,componentRaw:mt}],Et=e({__name:`_basic`,setup(e){let r=n(!1);return(e,n)=>(u(),c(O,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e)},{default:_(()=>[...n[1]||(n[1]=[t(` 同意协议 `,-1)])]),_:1},8,[`modelValue`]))}}),Dt=`<script setup lang="ts">
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
`,Ot=e({__name:`_custom-style`,setup(e){let r=n(!0);return(e,n)=>(u(),c(O,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e),class:`px-3 py-2 border border-primary/20 rounded-lg bg-primary/5 gap-3`,"item-class":`size-5 rounded-md border-primary`,"label-class":`text-primary font-medium w-full`},{default:_(()=>[...n[1]||(n[1]=[t(` 开启精细化配置 `,-1)])]),_:1},8,[`modelValue`]))}}),kt=`<script setup lang="ts">
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
`,At={class:`flex flex-col gap-3`},jt=[{title:`基础`,component:Et,componentRaw:Dt},{title:`半选状态`,component:e({__name:`_indeterminate`,setup(e){let r=n(`indeterminate`);return(e,n)=>(u(),c(O,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e)},{default:_(()=>[...n[1]||(n[1]=[t(` 部分选中 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`禁用`,component:e({__name:`_disabled`,setup(e){let r=n(!1),i=n(!0);return(e,n)=>(u(),v(`div`,At,[s(O,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e),disabled:``},{default:_(()=>[...n[2]||(n[2]=[t(` 禁用未选中 `,-1)])]),_:1},8,[`modelValue`]),s(O,{modelValue:i.value,"onUpdate:modelValue":n[1]||(n[1]=e=>i.value=e),disabled:``},{default:_(()=>[...n[3]||(n[3]=[t(` 禁用已选中 `,-1)])]),_:1},8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`自定义样式`,component:Ot,componentRaw:kt}],Mt={class:`mt-4 space-y-2`},Nt=e({__name:`_basic`,setup(e){return(e,n)=>(u(),c(re,null,{trigger:_(({open:e})=>[s(D,null,{default:_(()=>[t(d(e?`收起`:`展开`),1)]),_:2},1024)]),default:_(()=>[b(`div`,Mt,[(u(),v(h,null,f(5,e=>b(`div`,{key:e,class:`px-4 py-2 border rounded-md`},` 内容 `+d(e),1)),64))])]),_:1}))}}),Pt=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaCollapsible from '../index.vue'
<\/script>

<template>
  <FaCollapsible>
    <template #trigger="{ open }">
      <FaButton>
        {{ open ? '收起' : '展开' }}
      </FaButton>
    </template>
    <div class="mt-4 space-y-2">
      <div v-for="item in 5" :key="item" class="px-4 py-2 border rounded-md">
        内容 {{ item }}
      </div>
    </div>
  </FaCollapsible>
</template>
`,Ft={class:`mt-4 space-y-2`},It=[{title:`基础`,component:Nt,componentRaw:Pt},{title:`手动控制`,component:e({__name:`_controlled`,setup(e){let r=n(!1);return(e,n)=>(u(),v(h,null,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!r.value)},{default:_(()=>[t(d(r.value?`收起`:`展开`),1)]),_:1}),s(re,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e)},{default:_(()=>[b(`div`,Ft,[(u(),v(h,null,f(5,e=>b(`div`,{key:e,class:`px-4 py-2 border rounded-md`},` 内容 `+d(e),1)),64))])]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaCollapsible from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = !open">
    {{ open ? '收起' : '展开' }}
  </FaButton>
  <FaCollapsible v-model="open">
    <div class="mt-4 space-y-2">
      <div v-for="item in 5" :key="item" class="px-4 py-2 border rounded-md">
        内容 {{ item }}
      </div>
    </div>
  </FaCollapsible>
</template>
`}],Lt={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},Rt=e({__name:`_basic`,setup(e){let t=Y();function n(e){t(e)}let r=[[{label:`打开`,handle:()=>n(`打开`)},{label:`编辑`,handle:()=>n(`编辑`)},{label:`复制`,handle:()=>n(`复制`)}]];return(e,t)=>(u(),c(S,{items:r},{default:_(()=>[b(`div`,Lt,[s(V,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),zt=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaContextMenu from '../index.vue'

interface ContextMenuItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface ContextMenuSubItem {
  label: string
  items: ContextMenuItems
}

type ContextMenuItems = (ContextMenuItem | ContextMenuSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', handle: () => handleClick('打开') },
    { label: '编辑', handle: () => handleClick('编辑') },
    { label: '复制', handle: () => handleClick('复制') },
  ],
] satisfies ContextMenuItems
<\/script>

<template>
  <FaContextMenu :items="items">
    <div class="text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center">
      <FaIcon name="i-hugeicons:mouse-right-click-06" class="op-50 size-12" />
    </div>
  </FaContextMenu>
</template>
`,Bt={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},Vt=e({__name:`_disabled`,setup(e){let t=Y();function n(e){t(e)}let r=[[{label:`打开`,handle:()=>n(`打开`)},{label:`复制`,disabled:!0,handle:()=>n(`复制`)},{label:`移动到`,disabled:!0,handle:()=>n(`移动到`)}],[{label:`刷新`,handle:()=>n(`刷新`)}]];return(e,t)=>(u(),c(S,{items:r},{default:_(()=>[b(`div`,Bt,[s(V,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),Ht=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaContextMenu from '../index.vue'

interface ContextMenuItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface ContextMenuSubItem {
  label: string
  items: ContextMenuItems
}

type ContextMenuItems = (ContextMenuItem | ContextMenuSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', handle: () => handleClick('打开') },
    { label: '复制', disabled: true, handle: () => handleClick('复制') },
    { label: '移动到', disabled: true, handle: () => handleClick('移动到') },
  ],
  [
    { label: '刷新', handle: () => handleClick('刷新') },
  ],
] satisfies ContextMenuItems
<\/script>

<template>
  <FaContextMenu :items="items">
    <div class="text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center">
      <FaIcon name="i-hugeicons:mouse-right-click-06" class="op-50 size-12" />
    </div>
  </FaContextMenu>
</template>
`,Ut={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},Wt=e({__name:`_icon`,setup(e){let t=Y();function n(e){t(e)}let r=[[{label:`打开`,icon:`i-lucide:folder-open`,handle:()=>n(`打开`)},{label:`重命名`,icon:`i-lucide:pencil`,handle:()=>n(`重命名`)},{label:`复制链接`,icon:`i-lucide:link`,handle:()=>n(`复制链接`)}],[{label:`下载`,icon:`i-lucide:download`,handle:()=>n(`下载`)}]];return(e,t)=>(u(),c(S,{items:r},{default:_(()=>[b(`div`,Ut,[s(V,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),Gt=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaContextMenu from '../index.vue'

interface ContextMenuItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface ContextMenuSubItem {
  label: string
  items: ContextMenuItems
}

type ContextMenuItems = (ContextMenuItem | ContextMenuSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', icon: 'i-lucide:folder-open', handle: () => handleClick('打开') },
    { label: '重命名', icon: 'i-lucide:pencil', handle: () => handleClick('重命名') },
    { label: '复制链接', icon: 'i-lucide:link', handle: () => handleClick('复制链接') },
  ],
  [
    { label: '下载', icon: 'i-lucide:download', handle: () => handleClick('下载') },
  ],
] satisfies ContextMenuItems
<\/script>

<template>
  <FaContextMenu :items="items">
    <div class="text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center">
      <FaIcon name="i-hugeicons:mouse-right-click-06" class="op-50 size-12" />
    </div>
  </FaContextMenu>
</template>
`,Kt={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},qt=e({__name:`_nested`,setup(e){let t=Y();function n(e){t(e)}let r=[[{label:`打开`,handle:()=>n(`打开`)},{label:`更多操作`,items:[[{label:`保存页面`,handle:()=>n(`保存页面`)},{label:`导出为 PDF`,handle:()=>n(`导出为 PDF`)}],[{label:`复制路径`,handle:()=>n(`复制路径`)}]]}]];return(e,t)=>(u(),c(S,{items:r},{default:_(()=>[b(`div`,Kt,[s(V,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),Jt=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaContextMenu from '../index.vue'

interface ContextMenuItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface ContextMenuSubItem {
  label: string
  items: ContextMenuItems
}

type ContextMenuItems = (ContextMenuItem | ContextMenuSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', handle: () => handleClick('打开') },
    {
      label: '更多操作',
      items: [
        [
          { label: '保存页面', handle: () => handleClick('保存页面') },
          { label: '导出为 PDF', handle: () => handleClick('导出为 PDF') },
        ],
        [
          { label: '复制路径', handle: () => handleClick('复制路径') },
        ],
      ],
    },
  ],
] satisfies ContextMenuItems
<\/script>

<template>
  <FaContextMenu :items="items">
    <div class="text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center">
      <FaIcon name="i-hugeicons:mouse-right-click-06" class="op-50 size-12" />
    </div>
  </FaContextMenu>
</template>
`,Yt={class:`text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center`},Xt=[{title:`基础`,component:Rt,componentRaw:zt},{title:`图标`,component:Wt,componentRaw:Gt},{title:`警告`,component:e({__name:`_warning`,setup(e){let t=Y();function n(e){t(e)}let r=[[{label:`查看详情`,handle:()=>n(`查看详情`)},{label:`复制副本`,handle:()=>n(`复制副本`)}],[{label:`删除`,variant:`destructive`,handle:()=>n(`删除`)}]];return(e,t)=>(u(),c(S,{items:r},{default:_(()=>[b(`div`,Yt,[s(V,{name:`i-hugeicons:mouse-right-click-06`,class:`op-50 size-12`})])]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaContextMenu from '../index.vue'

interface ContextMenuItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface ContextMenuSubItem {
  label: string
  items: ContextMenuItems
}

type ContextMenuItems = (ContextMenuItem | ContextMenuSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '查看详情', handle: () => handleClick('查看详情') },
    { label: '复制副本', handle: () => handleClick('复制副本') },
  ],
  [
    { label: '删除', variant: 'destructive', handle: () => handleClick('删除') },
  ],
] satisfies ContextMenuItems
<\/script>

<template>
  <FaContextMenu :items="items">
    <div class="text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center">
      <FaIcon name="i-hugeicons:mouse-right-click-06" class="op-50 size-12" />
    </div>
  </FaContextMenu>
</template>
`},{title:`禁用`,component:Vt,componentRaw:Ht},{title:`嵌套`,component:qt,componentRaw:Jt}],Zt=e({__name:`_basic`,setup(e){let t=[{label:`Username`,value:`kooriokami`},{label:`Telephone`,value:`18100000000`},{label:`Place`,value:`Suzhou`},{label:`Remarks`,value:`School`},{label:`Address`,value:`No.1188, Wuzhong Avenue`,span:2}];return(e,n)=>(u(),c(he,{items:t,"label-width":`120px`}))}}),Qt=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaDescriptions from '../index.vue'

const items = [
  { label: 'Username', value: 'kooriokami' },
  { label: 'Telephone', value: '18100000000' },
  { label: 'Place', value: 'Suzhou' },
  { label: 'Remarks', value: 'School' },
  { label: 'Address', value: 'No.1188, Wuzhong Avenue', span: 2 },
]
<\/script>

<template>
  <FaDescriptions :items="items" label-width="120px" />
</template>
`,$t=e({__name:`_border`,setup(e){let t=[{label:`Username`,value:`kooriokami`},{label:`Telephone`,value:`18100000000`},{label:`Place`,value:`Suzhou`},{label:`Remarks`,value:`School`},{label:`Address`,value:`No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province`,span:2}];return(e,n)=>(u(),c(he,{items:t,border:``,"label-width":`120px`}))}}),en=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaDescriptions from '../index.vue'

const items = [
  { label: 'Username', value: 'kooriokami' },
  { label: 'Telephone', value: '18100000000' },
  { label: 'Place', value: 'Suzhou' },
  { label: 'Remarks', value: 'School' },
  { label: 'Address', value: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province', span: 2 },
]
<\/script>

<template>
  <FaDescriptions :items="items" border label-width="120px" />
</template>
`,tn={class:`inline-flex gap-2 items-center`},nn={class:`inline-flex gap-2 items-center`},rn={class:`inline-flex gap-2 items-center`},an={class:`inline-flex gap-2 items-center`},on={class:`inline-flex gap-2 items-center`},sn=[{title:`基础`,component:Zt,componentRaw:Qt},{title:`边框`,component:$t,componentRaw:en},{title:`纵向布局`,component:e({__name:`_vertical`,setup(e){let t=[{label:`早餐`,value:`苹果`},{label:`早午餐`,value:`苹果`},{label:`午餐`,value:`苹果`},{label:`晚餐`,value:`苹果`},{label:`正餐`,value:`苹果`},{label:`夜宵`,value:`苹果`},{label:`早餐`,value:`苹果`},{label:`早午餐`,value:`苹果`,span:2},{label:`晚餐`,value:`苹果`,span:3}];return(e,n)=>(u(),c(he,{items:t,column:6,direction:`vertical`,border:``}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaDescriptions from '../index.vue'

const items = [
  { label: '早餐', value: '苹果' },
  { label: '早午餐', value: '苹果' },
  { label: '午餐', value: '苹果' },
  { label: '晚餐', value: '苹果' },
  { label: '正餐', value: '苹果' },
  { label: '夜宵', value: '苹果' },
  { label: '早餐', value: '苹果' },
  { label: '早午餐', value: '苹果', span: 2 },
  { label: '晚餐', value: '苹果', span: 3 },
]
<\/script>

<template>
  <FaDescriptions :items="items" :column="6" direction="vertical" border />
</template>
`},{title:`自定义插槽`,component:e({__name:`_slot`,setup(e){let n=[{key:`username`,label:`Username`,value:`kooriokami`,icon:`i-lucide:user`},{key:`telephone`,label:`Telephone`,value:`18100000000`,icon:`i-lucide:smartphone`},{key:`place`,label:`Place`,value:`Suzhou`,icon:`i-lucide:map-pin`},{key:`remarks`,label:`Remarks`,value:`School`,icon:`i-lucide:notebook-text`,tagVariant:`outline`},{key:`address`,label:`Address`,value:`No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province`,icon:`i-lucide:building-2`,span:2}];return(e,r)=>(u(),c(he,{items:n,border:``,"label-width":`200px`},{"label-username":_(({item:e,label:t})=>[b(`div`,tn,[s(V,{name:e.icon,class:`size-4`},null,8,[`name`]),b(`span`,null,d(t),1)])]),"label-telephone":_(({item:e,label:t})=>[b(`div`,nn,[s(V,{name:e.icon,class:`size-4`},null,8,[`name`]),b(`span`,null,d(t),1)])]),"label-place":_(({item:e,label:t})=>[b(`div`,rn,[s(V,{name:e.icon,class:`size-4`},null,8,[`name`]),b(`span`,null,d(t),1)])]),"label-remarks":_(({item:e,label:t})=>[b(`div`,an,[s(V,{name:e.icon,class:`size-4`},null,8,[`name`]),b(`span`,null,d(t),1)])]),"label-address":_(({item:e,label:t})=>[b(`div`,on,[s(V,{name:e.icon,class:`size-4`},null,8,[`name`]),b(`span`,null,d(t),1)])]),"value-remarks":_(({item:e,value:n})=>[s(B,{variant:e.tagVariant},{default:_(()=>[t(d(n),1)]),_:2},1032,[`variant`])]),_:1}))}}),componentRaw:`<script setup lang="ts">
import type { DescriptionItem } from '../index.vue'
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import FaTag from '../../tag/index.vue'
import FaDescriptions from '../index.vue'

type ProfileItem = DescriptionItem<{
  icon: string
  tagVariant?: 'default' | 'secondary' | 'destructive' | 'outline'
}>

const items: ProfileItem[] = [
  { key: 'username', label: 'Username', value: 'kooriokami', icon: 'i-lucide:user' },
  { key: 'telephone', label: 'Telephone', value: '18100000000', icon: 'i-lucide:smartphone' },
  { key: 'place', label: 'Place', value: 'Suzhou', icon: 'i-lucide:map-pin' },
  { key: 'remarks', label: 'Remarks', value: 'School', icon: 'i-lucide:notebook-text', tagVariant: 'outline' },
  { key: 'address', label: 'Address', value: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province', icon: 'i-lucide:building-2', span: 2 },
]
<\/script>

<template>
  <FaDescriptions :items="items" border label-width="200px">
    <template #label-username="{ item, label }">
      <div class="inline-flex gap-2 items-center">
        <FaIcon :name="item.icon" class="size-4" />
        <span>{{ label }}</span>
      </div>
    </template>

    <template #label-telephone="{ item, label }">
      <div class="inline-flex gap-2 items-center">
        <FaIcon :name="item.icon" class="size-4" />
        <span>{{ label }}</span>
      </div>
    </template>

    <template #label-place="{ item, label }">
      <div class="inline-flex gap-2 items-center">
        <FaIcon :name="item.icon" class="size-4" />
        <span>{{ label }}</span>
      </div>
    </template>

    <template #label-remarks="{ item, label }">
      <div class="inline-flex gap-2 items-center">
        <FaIcon :name="item.icon" class="size-4" />
        <span>{{ label }}</span>
      </div>
    </template>

    <template #label-address="{ item, label }">
      <div class="inline-flex gap-2 items-center">
        <FaIcon :name="item.icon" class="size-4" />
        <span>{{ label }}</span>
      </div>
    </template>

    <template #value-remarks="{ item, value }">
      <FaTag :variant="item.tagVariant">
        {{ value }}
      </FaTag>
    </template>
  </FaDescriptions>
</template>
`}],cn=[{title:`基础`,component:e({__name:`_basic`,setup(e){return(e,n)=>(u(),v(`div`,null,[n[1]||(n[1]=b(`div`,{class:`text-sm text-muted-foreground`},` 上方内容 `,-1)),s(F),n[2]||(n[2]=b(`div`,{class:`text-sm text-muted-foreground`},` 下方内容 `,-1)),s(F,null,{default:_(()=>[...n[0]||(n[0]=[t(` 分割文字 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`位置`,component:e({__name:`_position`,setup(e){return(e,n)=>(u(),v(`div`,null,[s(F,null,{default:_(()=>[...n[0]||(n[0]=[t(` center `,-1)])]),_:1}),s(F,{position:`start`},{default:_(()=>[...n[1]||(n[1]=[t(` start `,-1)])]),_:1}),s(F,{position:`end`},{default:_(()=>[...n[2]||(n[2]=[t(` end `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`}],ln=e({__name:`_basic`,setup(e){let r=n(!1);return(e,n)=>(u(),v(h,null,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[2]||(n[2]=[t(` 打开抽屉 `,-1)])]),_:1}),s(j,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e),title:`抽屉标题`},{default:_(()=>[...n[3]||(n[3]=[b(`div`,{class:`text-sm text-muted-foreground`},` 这里是抽屉内容区域。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),un=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开抽屉
  </FaButton>
  <FaDrawer v-model="open" title="抽屉标题">
    <div class="text-sm text-muted-foreground">
      这里是抽屉内容区域。
    </div>
  </FaDrawer>
</template>
`,dn={class:`flex flex-wrap gap-2`},fn=e({__name:`_center-border-loading`,setup(e){let r=n(!1),i=n(!1),a=n(!1),o=n(!1);function c(){a.value=!0,o.value=!0,window.setTimeout(()=>{o.value=!1},1800)}return(e,n)=>(u(),v(h,null,[b(`div`,dn,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[5]||(n[5]=[t(` 居中 `,-1)])]),_:1}),s(D,{variant:`outline`,onClick:n[1]||(n[1]=e=>i.value=!0)},{default:_(()=>[...n[6]||(n[6]=[t(` 无边框 `,-1)])]),_:1}),s(D,{variant:`secondary`,onClick:c},{default:_(()=>[...n[7]||(n[7]=[t(` 载入 `,-1)])]),_:1})]),s(j,{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=e=>r.value=e),title:`居中抽屉`,centered:``,"show-cancel-button":``},{default:_(()=>[...n[8]||(n[8]=[b(`div`,{class:`text-sm text-muted-foreground text-center`},` 标题、描述和底部按钮会居中显示。 `,-1)])]),_:1},8,[`modelValue`]),s(j,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=e=>i.value=e),title:`无边框抽屉`,bordered:!1,"show-cancel-button":``},{default:_(()=>[...n[9]||(n[9]=[b(`div`,{class:`text-sm text-muted-foreground`},` 头部和底部不显示分割线。 `,-1)])]),_:1},8,[`modelValue`]),s(j,{modelValue:a.value,"onUpdate:modelValue":n[4]||(n[4]=e=>a.value=e),title:`载入状态`,loading:o.value},{default:_(()=>[...n[10]||(n[10]=[b(`div`,{class:`text-sm text-muted-foreground`},` 抽屉主体区域会显示载入遮罩。 `,-1)])]),_:1},8,[`modelValue`,`loading`])],64))}}),pn=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const centeredOpen = shallowRef(false)
const borderlessOpen = shallowRef(false)
const loadingOpen = shallowRef(false)
const loading = shallowRef(false)

function openLoadingDrawer() {
  loadingOpen.value = true
  loading.value = true
  window.setTimeout(() => {
    loading.value = false
  }, 1800)
}
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="centeredOpen = true">
      居中
    </FaButton>
    <FaButton variant="outline" @click="borderlessOpen = true">
      无边框
    </FaButton>
    <FaButton variant="secondary" @click="openLoadingDrawer">
      载入
    </FaButton>
  </div>

  <FaDrawer v-model="centeredOpen" title="居中抽屉" centered show-cancel-button>
    <div class="text-sm text-muted-foreground text-center">
      标题、描述和底部按钮会居中显示。
    </div>
  </FaDrawer>
  <FaDrawer v-model="borderlessOpen" title="无边框抽屉" :bordered="false" show-cancel-button>
    <div class="text-sm text-muted-foreground">
      头部和底部不显示分割线。
    </div>
  </FaDrawer>
  <FaDrawer v-model="loadingOpen" title="载入状态" :loading="loading">
    <div class="text-sm text-muted-foreground">
      抽屉主体区域会显示载入遮罩。
    </div>
  </FaDrawer>
</template>
`,mn={class:`flex flex-wrap gap-2`},hn=e({__name:`_closable`,setup(e){let r=n(!1),i=n(!1);return(e,n)=>(u(),v(h,null,[b(`div`,mn,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[4]||(n[4]=[t(` 显示关闭按钮 `,-1)])]),_:1}),s(D,{variant:`outline`,onClick:n[1]||(n[1]=e=>i.value=!0)},{default:_(()=>[...n[5]||(n[5]=[t(` 隐藏关闭按钮 `,-1)])]),_:1})]),s(j,{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=e=>r.value=e),title:`显示关闭按钮`,closable:``},{default:_(()=>[...n[6]||(n[6]=[t(` 右上角会显示关闭按钮。 `,-1)])]),_:1},8,[`modelValue`]),s(j,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=e=>i.value=e),title:`隐藏关闭按钮`,closable:!1},{default:_(()=>[...n[7]||(n[7]=[t(` 右上角不会显示关闭按钮，可通过底部按钮关闭。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),gn=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const closableOpen = shallowRef(false)
const notClosableOpen = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="closableOpen = true">
      显示关闭按钮
    </FaButton>
    <FaButton variant="outline" @click="notClosableOpen = true">
      隐藏关闭按钮
    </FaButton>
  </div>

  <FaDrawer v-model="closableOpen" title="显示关闭按钮" closable>
    右上角会显示关闭按钮。
  </FaDrawer>
  <FaDrawer v-model="notClosableOpen" title="隐藏关闭按钮" :closable="false">
    右上角不会显示关闭按钮，可通过底部按钮关闭。
  </FaDrawer>
</template>
`,_n=e({__name:`_custom-style`,setup(e){let r=n(!1);return(e,n)=>(u(),v(h,null,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[2]||(n[2]=[t(` 打开抽屉 `,-1)])]),_:1}),s(j,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e),title:`自定义样式`,description:`通过 contentClass、headerClass 和 footerClass 调整抽屉区域样式。`,"content-class":`sm:max-w-xl border-primary/30`,"header-class":`bg-primary/8`,"footer-class":`bg-muted/50`,"show-cancel-button":``},{default:_(()=>[...n[3]||(n[3]=[b(`div`,{class:`text-sm leading-6 p-4 rounded-lg bg-muted/50`},` 可以根据业务场景调整宽度、背景、边框和底部区域样式。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),vn=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开抽屉
  </FaButton>
  <FaDrawer
    v-model="open"
    title="自定义样式"
    description="通过 contentClass、headerClass 和 footerClass 调整抽屉区域样式。"
    content-class="sm:max-w-xl border-primary/30"
    header-class="bg-primary/8"
    footer-class="bg-muted/50"
    show-cancel-button
  >
    <div class="text-sm leading-6 p-4 rounded-lg bg-muted/50">
      可以根据业务场景调整宽度、背景、边框和底部区域样式。
    </div>
  </FaDrawer>
</template>
`,yn=e({__name:`_event`,setup(e){let r=n(!1),i=Y();function a(e){i(`触发事件：${e}`)}return(e,n)=>(u(),v(h,null,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[8]||(n[8]=[t(` 打开抽屉 `,-1)])]),_:1}),s(j,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e),title:`触发事件`,"show-cancel-button":``,onOpen:n[2]||(n[2]=e=>a(`open`)),onOpened:n[3]||(n[3]=e=>a(`opened`)),onClose:n[4]||(n[4]=e=>a(`close`)),onClosed:n[5]||(n[5]=e=>a(`closed`)),onConfirm:n[6]||(n[6]=e=>a(`confirm`)),onCancel:n[7]||(n[7]=e=>a(`cancel`))},{default:_(()=>[...n[9]||(n[9]=[b(`div`,{class:`text-sm text-muted-foreground`},` 打开、关闭、确认和取消时会触发对应事件。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),bn=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../../toast'
import FaDrawer from '../index.vue'

const open = shallowRef(false)
const toast = useToast()

function notify(eventName: string) {
  toast(\`触发事件：\${eventName}\`)
}
<\/script>

<template>
  <FaButton @click="open = true">
    打开抽屉
  </FaButton>
  <FaDrawer
    v-model="open"
    title="触发事件"
    show-cancel-button
    @open="notify('open')"
    @opened="notify('opened')"
    @close="notify('close')"
    @closed="notify('closed')"
    @confirm="notify('confirm')"
    @cancel="notify('cancel')"
  >
    <div class="text-sm text-muted-foreground">
      打开、关闭、确认和取消时会触发对应事件。
    </div>
  </FaDrawer>
</template>
`,xn=e({__name:`_functional`,setup(e){let n=Y(),{open:r}=ee().create({title:`函数式调用`,description:`通过 useDrawer().create() 创建抽屉。`,content:a(`div`,{class:`text-sm text-muted-foreground leading-6`},`这里是函数式调用渲染的内容。`),showCancelButton:!0,onConfirm:()=>n(`确认操作`),onCancel:()=>n(`取消操作`)});return(e,n)=>(u(),c(D,{onClick:o(r)},{default:_(()=>[...n[0]||(n[0]=[t(` 打开抽屉 `,-1)])]),_:1},8,[`onClick`]))}}),Sn=`<script setup lang="ts">
import { h } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../../toast'
import { useDrawer } from '../index'

const toast = useToast()

const { open } = useDrawer().create({
  title: '函数式调用',
  description: '通过 useDrawer().create() 创建抽屉。',
  content: h('div', { class: 'text-sm text-muted-foreground leading-6' }, '这里是函数式调用渲染的内容。'),
  showCancelButton: true,
  onConfirm: () => toast('确认操作'),
  onCancel: () => toast('取消操作'),
})
<\/script>

<template>
  <FaButton @click="open">
    打开抽屉
  </FaButton>
</template>
`,Cn={class:`flex flex-wrap gap-2`},wn=e({__name:`_header-footer`,setup(e){let r=n(!1),i=n(!1);return(e,n)=>(u(),v(h,null,[b(`div`,Cn,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[4]||(n[4]=[t(` 隐藏头部 `,-1)])]),_:1}),s(D,{variant:`outline`,onClick:n[1]||(n[1]=e=>i.value=!0)},{default:_(()=>[...n[5]||(n[5]=[t(` 隐藏底部 `,-1)])]),_:1})]),s(j,{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=e=>r.value=e),header:!1},{default:_(()=>[...n[6]||(n[6]=[b(`div`,{class:`text-sm text-muted-foreground`},` 当前抽屉隐藏了头部区域。 `,-1)])]),_:1},8,[`modelValue`]),s(j,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=e=>i.value=e),title:`隐藏底部`,footer:!1},{default:_(()=>[...n[7]||(n[7]=[b(`div`,{class:`text-sm text-muted-foreground`},` 当前抽屉隐藏了底部操作区。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Tn=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const hiddenHeaderOpen = shallowRef(false)
const hiddenFooterOpen = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="hiddenHeaderOpen = true">
      隐藏头部
    </FaButton>
    <FaButton variant="outline" @click="hiddenFooterOpen = true">
      隐藏底部
    </FaButton>
  </div>

  <FaDrawer v-model="hiddenHeaderOpen" :header="false">
    <div class="text-sm text-muted-foreground">
      当前抽屉隐藏了头部区域。
    </div>
  </FaDrawer>
  <FaDrawer v-model="hiddenFooterOpen" title="隐藏底部" :footer="false">
    <div class="text-sm text-muted-foreground">
      当前抽屉隐藏了底部操作区。
    </div>
  </FaDrawer>
</template>
`,En={class:`flex flex-wrap gap-2`},Dn=e({__name:`_overlay-blur`,setup(e){let r=n(!1),i=n(!1);return(e,n)=>(u(),v(h,null,[b(`div`,En,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[4]||(n[4]=[t(` 无遮罩 `,-1)])]),_:1}),s(D,{variant:`outline`,onClick:n[1]||(n[1]=e=>i.value=!0)},{default:_(()=>[...n[5]||(n[5]=[t(` 模糊遮罩 `,-1)])]),_:1})]),s(j,{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=e=>r.value=e),title:`无遮罩`,overlay:!1},{default:_(()=>[...n[6]||(n[6]=[t(` 打开时不显示背景遮罩。 `,-1)])]),_:1},8,[`modelValue`]),s(j,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=e=>i.value=e),title:`模糊遮罩`,"overlay-blur":``},{default:_(()=>[...n[7]||(n[7]=[t(` 打开时背景遮罩带模糊效果。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),On=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const noOverlayOpen = shallowRef(false)
const blurOverlayOpen = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="noOverlayOpen = true">
      无遮罩
    </FaButton>
    <FaButton variant="outline" @click="blurOverlayOpen = true">
      模糊遮罩
    </FaButton>
  </div>

  <FaDrawer v-model="noOverlayOpen" title="无遮罩" :overlay="false">
    打开时不显示背景遮罩。
  </FaDrawer>
  <FaDrawer v-model="blurOverlayOpen" title="模糊遮罩" overlay-blur>
    打开时背景遮罩带模糊效果。
  </FaDrawer>
</template>
`,kn={class:`flex flex-wrap gap-2`},An=e({__name:`_side`,setup(e){let n=l({top:!1,bottom:!1,left:!1,right:!1});return(e,r)=>(u(),v(h,null,[b(`div`,kn,[s(D,{onClick:r[0]||(r[0]=e=>n.top=!0)},{default:_(()=>[...r[8]||(r[8]=[t(` 上方 `,-1)])]),_:1}),s(D,{onClick:r[1]||(r[1]=e=>n.bottom=!0)},{default:_(()=>[...r[9]||(r[9]=[t(` 下方 `,-1)])]),_:1}),s(D,{onClick:r[2]||(r[2]=e=>n.left=!0)},{default:_(()=>[...r[10]||(r[10]=[t(` 左侧 `,-1)])]),_:1}),s(D,{onClick:r[3]||(r[3]=e=>n.right=!0)},{default:_(()=>[...r[11]||(r[11]=[t(` 右侧 `,-1)])]),_:1})]),s(j,{modelValue:n.top,"onUpdate:modelValue":r[4]||(r[4]=e=>n.top=e),side:`top`,title:`上方抽屉`},{default:_(()=>[...r[12]||(r[12]=[t(` 从页面顶部弹出。 `,-1)])]),_:1},8,[`modelValue`]),s(j,{modelValue:n.bottom,"onUpdate:modelValue":r[5]||(r[5]=e=>n.bottom=e),side:`bottom`,title:`下方抽屉`},{default:_(()=>[...r[13]||(r[13]=[t(` 从页面底部弹出。 `,-1)])]),_:1},8,[`modelValue`]),s(j,{modelValue:n.left,"onUpdate:modelValue":r[6]||(r[6]=e=>n.left=e),side:`left`,title:`左侧抽屉`},{default:_(()=>[...r[14]||(r[14]=[t(` 从页面左侧弹出。 `,-1)])]),_:1},8,[`modelValue`]),s(j,{modelValue:n.right,"onUpdate:modelValue":r[7]||(r[7]=e=>n.right=e),side:`right`,title:`右侧抽屉`},{default:_(()=>[...r[15]||(r[15]=[t(` 从页面右侧弹出。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),jn=`<script setup lang="ts">
import { reactive } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const drawers = reactive({
  top: false,
  bottom: false,
  left: false,
  right: false,
})
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="drawers.top = true">
      上方
    </FaButton>
    <FaButton @click="drawers.bottom = true">
      下方
    </FaButton>
    <FaButton @click="drawers.left = true">
      左侧
    </FaButton>
    <FaButton @click="drawers.right = true">
      右侧
    </FaButton>
  </div>

  <FaDrawer v-model="drawers.top" side="top" title="上方抽屉">
    从页面顶部弹出。
  </FaDrawer>
  <FaDrawer v-model="drawers.bottom" side="bottom" title="下方抽屉">
    从页面底部弹出。
  </FaDrawer>
  <FaDrawer v-model="drawers.left" side="left" title="左侧抽屉">
    从页面左侧弹出。
  </FaDrawer>
  <FaDrawer v-model="drawers.right" side="right" title="右侧抽屉">
    从页面右侧弹出。
  </FaDrawer>
</template>
`,Mn={class:`pr-8 flex gap-3 items-start`},Nn={class:`flex gap-2 w-full justify-end`},Pn=[{title:`基础`,component:ln,componentRaw:un},{title:`弹出方向`,component:An,componentRaw:jn},{title:`标题描述`,component:e({__name:`_title-description`,setup(e){let r=n(!1);return(e,n)=>(u(),v(h,null,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[2]||(n[2]=[t(` 打开抽屉 `,-1)])]),_:1}),s(j,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e),title:`成员信息`,description:`用于补充说明当前抽屉的内容和操作上下文。`},{default:_(()=>[...n[3]||(n[3]=[b(`div`,{class:`text-sm text-muted-foreground leading-6`},` 标题和描述会显示在默认头部区域中。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaDrawer from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开抽屉
  </FaButton>
  <FaDrawer
    v-model="open"
    title="成员信息"
    description="用于补充说明当前抽屉的内容和操作上下文。"
  >
    <div class="text-sm text-muted-foreground leading-6">
      标题和描述会显示在默认头部区域中。
    </div>
  </FaDrawer>
</template>
`},{title:`显示/隐藏关闭按钮`,component:hn,componentRaw:gn},{title:`居中/边框/载入`,component:fn,componentRaw:pn},{title:`遮罩/模糊`,component:Dn,componentRaw:On},{title:`显示/隐藏头部底部`,component:wn,componentRaw:Tn},{title:`插槽`,component:e({__name:`_slot`,setup(e){let r=n(!1);return(e,n)=>(u(),v(h,null,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[4]||(n[4]=[t(` 打开抽屉 `,-1)])]),_:1}),s(j,{modelValue:r.value,"onUpdate:modelValue":n[3]||(n[3]=e=>r.value=e)},{header:_(()=>[b(`div`,Mn,[s(V,{name:`i-lucide:panel-right-open`,class:`text-primary mt-0.5 size-5`}),n[5]||(n[5]=b(`div`,null,[b(`div`,{class:`font-semibold`},` 自定义头部 `),b(`div`,{class:`text-sm text-muted-foreground`},` 使用 header 插槽替换默认标题。 `)],-1))])]),footer:_(()=>[b(`div`,Nn,[s(D,{variant:`outline`,onClick:n[1]||(n[1]=e=>r.value=!1)},{default:_(()=>[...n[6]||(n[6]=[t(` 取消 `,-1)])]),_:1}),s(D,{onClick:n[2]||(n[2]=e=>r.value=!1)},{default:_(()=>[...n[7]||(n[7]=[t(` 保存 `,-1)])]),_:1})])]),default:_(()=>[n[8]||(n[8]=b(`div`,{class:`text-sm text-muted-foreground`},` 这里是默认插槽内容。 `,-1))]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaDrawer from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开抽屉
  </FaButton>
  <FaDrawer v-model="open">
    <template #header>
      <div class="pr-8 flex gap-3 items-start">
        <FaIcon name="i-lucide:panel-right-open" class="text-primary mt-0.5 size-5" />
        <div>
          <div class="font-semibold">
            自定义头部
          </div>
          <div class="text-sm text-muted-foreground">
            使用 header 插槽替换默认标题。
          </div>
        </div>
      </div>
    </template>

    <div class="text-sm text-muted-foreground">
      这里是默认插槽内容。
    </div>

    <template #footer>
      <div class="flex gap-2 w-full justify-end">
        <FaButton variant="outline" @click="open = false">
          取消
        </FaButton>
        <FaButton @click="open = false">
          保存
        </FaButton>
      </div>
    </template>
  </FaDrawer>
</template>
`},{title:`自定义样式`,component:_n,componentRaw:vn},{title:`触发事件`,component:yn,componentRaw:bn},{title:`函数式调用`,component:xn,componentRaw:Sn}],Fn={class:`flex flex-wrap gap-2`},In=e({__name:`_align`,setup(e){let n=Y();function r(e){n(e)}let i=[[{label:`个人设置`,icon:`i-lucide:user`,handle:()=>r(`个人设置`)},{label:`账号安全`,icon:`i-lucide:shield`,handle:()=>r(`账号安全`)}]];return(e,n)=>(u(),v(`div`,Fn,[s(E,{items:i,align:`start`},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[0]||(n[0]=t(` Start `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),s(E,{items:i,align:`center`},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[1]||(n[1]=t(` Center `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),s(E,{items:i,align:`end`},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[2]||(n[2]=t(` End `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1})]))}}),Ln=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '个人设置', icon: 'i-lucide:user', handle: () => handleClick('个人设置') },
    { label: '账号安全', icon: 'i-lucide:shield', handle: () => handleClick('账号安全') },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaDropdown :items="items" align="start">
      <FaButton variant="outline">
        Start
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" align="center">
      <FaButton variant="outline">
        Center
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" align="end">
      <FaButton variant="outline">
        End
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
  </div>
</template>
`,Rn=e({__name:`_basic`,setup(e){let n=Y();function r(e){n(e)}let i=[[{label:`查看详情`,handle:()=>r(`查看详情`)},{label:`编辑`,handle:()=>r(`编辑`)},{label:`复制`,handle:()=>r(`复制`)}]];return(e,n)=>(u(),c(E,{items:i},{default:_(()=>[s(D,null,{default:_(()=>[n[0]||(n[0]=t(` 操作 `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),zn=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  handle?: () => void
}

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '查看详情', handle: () => handleClick('查看详情') },
    { label: '编辑', handle: () => handleClick('编辑') },
    { label: '复制', handle: () => handleClick('复制') },
  ],
] satisfies DropdownItem[][]
<\/script>

<template>
  <FaDropdown :items="items">
    <FaButton>
      操作
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
`,Bn=e({__name:`_disabled`,setup(e){let n=Y();function r(e){n(e)}let i=[[{label:`打开`,handle:()=>r(`打开`)},{label:`复制`,disabled:!0,handle:()=>r(`复制`)},{label:`移动到`,disabled:!0,handle:()=>r(`移动到`)}],[{label:`刷新`,handle:()=>r(`刷新`)}]];return(e,n)=>(u(),c(E,{items:i},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[0]||(n[0]=t(` 更多操作 `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),Vn=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', handle: () => handleClick('打开') },
    { label: '复制', disabled: true, handle: () => handleClick('复制') },
    { label: '移动到', disabled: true, handle: () => handleClick('移动到') },
  ],
  [
    { label: '刷新', handle: () => handleClick('刷新') },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <FaDropdown :items="items">
    <FaButton variant="outline">
      更多操作
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
`,Hn=e({__name:`_icon`,setup(e){let n=Y();function r(e){n(e)}let i=[[{label:`打开`,icon:`i-lucide:folder-open`,handle:()=>r(`打开`)},{label:`重命名`,icon:`i-lucide:pencil`,handle:()=>r(`重命名`)},{label:`复制链接`,icon:`i-lucide:link`,handle:()=>r(`复制链接`)}],[{label:`下载`,icon:`i-lucide:download`,handle:()=>r(`下载`)}]];return(e,n)=>(u(),c(E,{items:i},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[0]||(n[0]=t(` 文件操作 `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),Un=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', icon: 'i-lucide:folder-open', handle: () => handleClick('打开') },
    { label: '重命名', icon: 'i-lucide:pencil', handle: () => handleClick('重命名') },
    { label: '复制链接', icon: 'i-lucide:link', handle: () => handleClick('复制链接') },
  ],
  [
    { label: '下载', icon: 'i-lucide:download', handle: () => handleClick('下载') },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <FaDropdown :items="items">
    <FaButton variant="outline">
      文件操作
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
`,Wn=e({__name:`_nested`,setup(e){let n=Y();function r(e){n(e)}let i=[[{label:`打开`,handle:()=>r(`打开`)},{label:`更多操作`,items:[[{label:`保存页面`,handle:()=>r(`保存页面`)},{label:`导出为 PDF`,handle:()=>r(`导出为 PDF`)}],[{label:`复制路径`,handle:()=>r(`复制路径`)}]]}]];return(e,n)=>(u(),c(E,{items:i},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[0]||(n[0]=t(` 页面操作 `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),Gn=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '打开', handle: () => handleClick('打开') },
    {
      label: '更多操作',
      items: [
        [
          { label: '保存页面', handle: () => handleClick('保存页面') },
          { label: '导出为 PDF', handle: () => handleClick('导出为 PDF') },
        ],
        [
          { label: '复制路径', handle: () => handleClick('复制路径') },
        ],
      ],
    },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <FaDropdown :items="items">
    <FaButton variant="outline">
      页面操作
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
`,Kn={class:`flex flex-wrap gap-2`},qn=e({__name:`_offset`,setup(e){let n=Y();function r(e){n(e)}let i=[[{label:`新建文件`,icon:`i-lucide:file-plus`,handle:()=>r(`新建文件`)},{label:`新建文件夹`,icon:`i-lucide:folder-plus`,handle:()=>r(`新建文件夹`)}]];return(e,n)=>(u(),v(`div`,Kn,[s(E,{items:i,"side-offset":12},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[0]||(n[0]=t(` Side offset `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),s(E,{items:i,align:`start`,"align-offset":24},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[1]||(n[1]=t(` Align offset `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),s(E,{items:i,"side-offset":12,"align-offset":-24},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[2]||(n[2]=t(` Both `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1})]))}}),Jn=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '新建文件', icon: 'i-lucide:file-plus', handle: () => handleClick('新建文件') },
    { label: '新建文件夹', icon: 'i-lucide:folder-plus', handle: () => handleClick('新建文件夹') },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaDropdown :items="items" :side-offset="12">
      <FaButton variant="outline">
        Side offset
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" align="start" :align-offset="24">
      <FaButton variant="outline">
        Align offset
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" :side-offset="12" :align-offset="-24">
      <FaButton variant="outline">
        Both
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
  </div>
</template>
`,Yn={class:`flex flex-wrap gap-2`},Xn=[{title:`基础`,component:Rn,componentRaw:zn},{title:`图标`,component:Hn,componentRaw:Un},{title:`警告`,component:e({__name:`_warning`,setup(e){let n=Y();function r(e){n(e)}let i=[[{label:`查看详情`,handle:()=>r(`查看详情`)},{label:`复制副本`,handle:()=>r(`复制副本`)}],[{label:`删除`,variant:`destructive`,handle:()=>r(`删除`)}]];return(e,n)=>(u(),c(E,{items:i},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[0]||(n[0]=t(` 项目操作 `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: '查看详情', handle: () => handleClick('查看详情') },
    { label: '复制副本', handle: () => handleClick('复制副本') },
  ],
  [
    { label: '删除', variant: 'destructive', handle: () => handleClick('删除') },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <FaDropdown :items="items">
    <FaButton variant="outline">
      项目操作
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
`},{title:`禁用`,component:Bn,componentRaw:Vn},{title:`嵌套`,component:Wn,componentRaw:Gn},{title:`弹出方向`,component:e({__name:`_side`,setup(e){let n=Y();function r(e){n(e)}let i=[[{label:`Preview`,icon:`i-lucide:eye`,handle:()=>r(`Preview`)},{label:`Duplicate`,icon:`i-lucide:copy`,handle:()=>r(`Duplicate`)}]];return(e,n)=>(u(),v(`div`,Yn,[s(E,{items:i,side:`top`},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[0]||(n[0]=t(` Top `,-1)),s(V,{name:`i-ep:caret-top`})]),_:1})]),_:1}),s(E,{items:i,side:`right`},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[1]||(n[1]=t(` Right `,-1)),s(V,{name:`i-ep:caret-right`})]),_:1})]),_:1}),s(E,{items:i,side:`bottom`},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[2]||(n[2]=t(` Bottom `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}),s(E,{items:i,side:`left`},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[n[3]||(n[3]=t(` Left `,-1)),s(V,{name:`i-ep:caret-left`})]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaDropdown from '../index.vue'

interface DropdownItem {
  label: string
  icon?: string
  variant?: 'default' | 'destructive'
  disabled?: boolean
  handle?: () => void
}

interface DropdownSubItem {
  label: string
  items: DropdownItems
}

type DropdownItems = (DropdownItem | DropdownSubItem)[][]

const toast = useToast()

function handleClick(text: string) {
  toast(text)
}

const items = [
  [
    { label: 'Preview', icon: 'i-lucide:eye', handle: () => handleClick('Preview') },
    { label: 'Duplicate', icon: 'i-lucide:copy', handle: () => handleClick('Duplicate') },
  ],
] satisfies DropdownItems
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaDropdown :items="items" side="top">
      <FaButton variant="outline">
        Top
        <FaIcon name="i-ep:caret-top" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" side="right">
      <FaButton variant="outline">
        Right
        <FaIcon name="i-ep:caret-right" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" side="bottom">
      <FaButton variant="outline">
        Bottom
        <FaIcon name="i-ep:caret-bottom" />
      </FaButton>
    </FaDropdown>
    <FaDropdown :items="items" side="left">
      <FaButton variant="outline">
        Left
        <FaIcon name="i-ep:caret-left" />
      </FaButton>
    </FaDropdown>
  </div>
</template>
`},{title:`对齐方式`,component:In,componentRaw:Ln},{title:`偏移`,component:qn,componentRaw:Jn}],Zn=[{title:`基础`,component:e({__name:`_basic`,setup(e){let t=Y(),n=y([]);function r(){t.success(`模拟上传成功`)}return(e,t)=>(u(),c(P,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>e.data.url,multiple:``,onOnSuccess:r},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { FileItem } from '../index.vue'
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaFileUpload from '../index.vue'

const toast = useToast()
const files = ref<FileItem[]>([])

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="response => response.data.url"
    multiple
    @on-success="handleSuccess"
  />
</template>
`},{title:`上传前校验、限制数量、点击事件`,component:e({__name:`_validation`,setup(e){let t=Y(),n=y([{name:`logo.svg`,size:1024*1024,url:`https://fantastic-admin.hurui.me/logo.svg`}]);function r(e){let n=e.type===`image/png`,r=e.size<=200*1024;return n?r?!0:(t.error(`文件大小不能超过 200KB`),!1):(t.error(`只能上传 PNG 文件`),!1)}function i(){t.success(`模拟上传成功`)}function a(e){t.info(e.name,{description:e.url})}return(e,t)=>(u(),c(P,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>e.data.url,"before-upload":r,multiple:``,max:5,onOnSuccess:i,onOnClick:a},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { FileItem } from '../index.vue'
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaFileUpload from '../index.vue'

const toast = useToast()
const files = ref<FileItem[]>([
  { name: 'logo.svg', size: 1024 * 1024, url: 'https://fantastic-admin.hurui.me/logo.svg' },
])

function beforeUpload(file: File) {
  const isPng = file.type === 'image/png'
  const isLt200K = file.size <= 200 * 1024

  if (!isPng) {
    toast.error('只能上传 PNG 文件')
    return false
  }
  if (!isLt200K) {
    toast.error('文件大小不能超过 200KB')
    return false
  }
  return true
}

function handleSuccess() {
  toast.success('模拟上传成功')
}

function handleClick(fileItem: FileItem) {
  toast.info(fileItem.name, {
    description: fileItem.url,
  })
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="response => response.data.url"
    :before-upload="beforeUpload"
    multiple
    :max="5"
    @on-success="handleSuccess"
    @on-click="handleClick"
  />
</template>
`},{title:`插槽`,component:e({__name:`_slot`,setup(e){let t=Y(),n=y([]);function r(){t.success(`模拟上传成功`)}return(e,t)=>(u(),c(P,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>e.data.url,multiple:``,onOnSuccess:r},{default:_(()=>[s(V,{name:`i-lucide:folder-up`,class:`text-3xl text-primary mb-2`}),t[1]||(t[1]=b(`div`,{class:`text-sm font-medium`},` 上传项目附件 `,-1)),t[2]||(t[2]=b(`div`,{class:`text-xs text-muted-foreground mt-1`},` 支持拖拽、点击选择或粘贴文件 `,-1))]),_:1},8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { FileItem } from '../index.vue'
import { ref } from 'vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaFileUpload from '../index.vue'

const toast = useToast()
const files = ref<FileItem[]>([])

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="response => response.data.url"
    multiple
    @on-success="handleSuccess"
  >
    <FaIcon name="i-lucide:folder-up" class="text-3xl text-primary mb-2" />
    <div class="text-sm font-medium">
      上传项目附件
    </div>
    <div class="text-xs text-muted-foreground mt-1">
      支持拖拽、点击选择或粘贴文件
    </div>
  </FaFileUpload>
</template>
`},{title:`自定义上传请求`,component:e({__name:`_custom-request`,setup(e){let t=Y(),n=y([]);async function r({file:e,onProgress:t}){return t(30),await new Promise(e=>setTimeout(e,300)),t(100),{url:URL.createObjectURL(e),name:e.name}}function i(){t.success(`自定义上传完成`)}return(e,t)=>(u(),c(P,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),"http-request":r,"after-upload":e=>e.url,max:3,onOnSuccess:i},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { FileItem, FileUploadRequestOptions } from '../index.vue'
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaFileUpload from '../index.vue'

const toast = useToast()
const files = ref<FileItem[]>([])

async function httpRequest({ file, onProgress }: FileUploadRequestOptions) {
  onProgress(30)
  await new Promise(resolve => setTimeout(resolve, 300))
  onProgress(100)

  return {
    url: URL.createObjectURL(file),
    name: file.name,
  }
}

function handleSuccess() {
  toast.success('自定义上传完成')
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    :http-request="httpRequest"
    :after-upload="response => response.url"
    :max="3"
    @on-success="handleSuccess"
  />
</template>
`},{title:`文件夹上传`,component:e({__name:`_directory`,setup(e){let t=y([]);async function n({file:e,onProgress:t}){return t(50),await new Promise(e=>setTimeout(e,200)),t(100),{url:URL.createObjectURL(e),name:e.name}}return(e,r)=>(u(),c(P,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),directory:``,max:0,"http-request":n,"after-upload":e=>e.url},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { FileItem, FileUploadRequestOptions } from '../index.vue'
import { ref } from 'vue'
import FaFileUpload from '../index.vue'

const files = ref<FileItem[]>([])

async function httpRequest({ file, onProgress }: FileUploadRequestOptions) {
  onProgress(50)
  await new Promise(resolve => setTimeout(resolve, 200))
  onProgress(100)

  return {
    url: URL.createObjectURL(file),
    name: file.name,
  }
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    directory
    :max="0"
    :http-request="httpRequest"
    :after-upload="response => response.url"
  />
</template>
`}],Qn=[{title:`固定在页面顶部`,component:e({__name:`_top`,setup(e){let t=y([50]);return(e,n)=>(u(),c(te,{position:`top`},{default:_(()=>[s(K,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]),b(`div`,{style:r(`height: ${t.value[0]}px;`)},null,4)]),_:1}))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`固定在页面底部`,component:e({__name:`_bottom`,setup(e){let t=y([50]);return(e,n)=>(u(),c(te,{position:`bottom`},{default:_(()=>[b(`div`,{style:r(`height: ${t.value[0]}px;`)},null,4),s(K,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`])]),_:1}))}}),componentRaw:`<script setup lang="ts">
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
`}],$n={class:`flex flex-wrap gap-2`},er=e({__name:`_align`,setup(e){return(e,n)=>(u(),v(`div`,$n,[s(M,{align:`start`},{card:_(()=>[...n[1]||(n[1]=[b(`div`,{class:`text-sm`},` 起始位置对齐 `,-1)])]),default:_(()=>[s(D,{variant:`link`},{default:_(()=>[...n[0]||(n[0]=[t(` Start `,-1)])]),_:1})]),_:1}),s(M,{align:`center`},{card:_(()=>[...n[3]||(n[3]=[b(`div`,{class:`text-sm`},` 居中对齐 `,-1)])]),default:_(()=>[s(D,{variant:`link`},{default:_(()=>[...n[2]||(n[2]=[t(` Center `,-1)])]),_:1})]),_:1}),s(M,{align:`end`},{card:_(()=>[...n[5]||(n[5]=[b(`div`,{class:`text-sm`},` 结束位置对齐 `,-1)])]),default:_(()=>[s(D,{variant:`link`},{default:_(()=>[...n[4]||(n[4]=[t(` End `,-1)])]),_:1})]),_:1})]))}}),tr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaHoverCard from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaHoverCard align="start">
      <FaButton variant="link">
        Start
      </FaButton>
      <template #card>
        <div class="text-sm">
          起始位置对齐
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard align="center">
      <FaButton variant="link">
        Center
      </FaButton>
      <template #card>
        <div class="text-sm">
          居中对齐
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard align="end">
      <FaButton variant="link">
        End
      </FaButton>
      <template #card>
        <div class="text-sm">
          结束位置对齐
        </div>
      </template>
    </FaHoverCard>
  </div>
</template>
`,nr={class:`flex space-x-4`},rr={class:`space-y-1`},ir={class:`pt-2 flex items-center`},ar=e({__name:`_basic`,setup(e){return(e,n)=>(u(),c(M,{class:`min-w-auto`},{card:_(()=>[b(`div`,nr,[s(k,{shape:`circle`,src:`https://github.com/vuejs.png`,class:`bg-muted`}),b(`div`,rr,[n[2]||(n[2]=b(`h4`,{class:`text-sm font-semibold`},` @hooray `,-1)),n[3]||(n[3]=b(`p`,{class:`text-sm`},` 一个前端开发工程师 `,-1)),b(`div`,ir,[s(V,{name:`i-ci:calendar-days`,class:`mr-2 opacity-70 h-4 w-4`}),n[1]||(n[1]=b(`span`,{class:`text-xs text-muted-foreground`},` 2020 年注册 `,-1))])])])]),default:_(()=>[s(D,{variant:`link`},{default:_(()=>[...n[0]||(n[0]=[t(` @hooray `,-1)])]),_:1})]),_:1}))}}),or=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaAvatar from '../../avatar/index.vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaHoverCard from '../index.vue'
<\/script>

<template>
  <FaHoverCard class="min-w-auto">
    <FaButton variant="link">
      @hooray
    </FaButton>
    <template #card>
      <div class="flex space-x-4">
        <FaAvatar shape="circle" src="https://github.com/vuejs.png" class="bg-muted" />
        <div class="space-y-1">
          <h4 class="text-sm font-semibold">
            @hooray
          </h4>
          <p class="text-sm">
            一个前端开发工程师
          </p>
          <div class="pt-2 flex items-center">
            <FaIcon name="i-ci:calendar-days" class="mr-2 opacity-70 h-4 w-4" />
            <span class="text-xs text-muted-foreground">
              2020 年注册
            </span>
          </div>
        </div>
      </div>
    </template>
  </FaHoverCard>
</template>
`,sr={class:`flex flex-wrap gap-2`},cr=e({__name:`_offset`,setup(e){return(e,n)=>(u(),v(`div`,sr,[s(M,{"side-offset":12},{card:_(()=>[...n[1]||(n[1]=[b(`div`,{class:`text-sm`},` 与触发元素保持更大距离 `,-1)])]),default:_(()=>[s(D,{variant:`link`},{default:_(()=>[...n[0]||(n[0]=[t(` Side offset `,-1)])]),_:1})]),_:1}),s(M,{align:`start`,"align-offset":24},{card:_(()=>[...n[3]||(n[3]=[b(`div`,{class:`text-sm`},` 沿对齐方向偏移 `,-1)])]),default:_(()=>[s(D,{variant:`link`},{default:_(()=>[...n[2]||(n[2]=[t(` Align offset `,-1)])]),_:1})]),_:1}),s(M,{"side-offset":12,"align-offset":-24},{card:_(()=>[...n[5]||(n[5]=[b(`div`,{class:`text-sm`},` 同时设置两种偏移 `,-1)])]),default:_(()=>[s(D,{variant:`link`},{default:_(()=>[...n[4]||(n[4]=[t(` Both `,-1)])]),_:1})]),_:1})]))}}),lr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaHoverCard from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaHoverCard :side-offset="12">
      <FaButton variant="link">
        Side offset
      </FaButton>
      <template #card>
        <div class="text-sm">
          与触发元素保持更大距离
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard align="start" :align-offset="24">
      <FaButton variant="link">
        Align offset
      </FaButton>
      <template #card>
        <div class="text-sm">
          沿对齐方向偏移
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard :side-offset="12" :align-offset="-24">
      <FaButton variant="link">
        Both
      </FaButton>
      <template #card>
        <div class="text-sm">
          同时设置两种偏移
        </div>
      </template>
    </FaHoverCard>
  </div>
</template>
`,ur={class:`flex flex-wrap gap-2`},dr=[{title:`基础`,component:ar,componentRaw:or},{title:`弹出方向`,component:e({__name:`_side`,setup(e){return(e,n)=>(u(),v(`div`,ur,[s(M,{side:`top`},{card:_(()=>[...n[1]||(n[1]=[b(`div`,{class:`text-sm`},` 从上方弹出 `,-1)])]),default:_(()=>[s(D,{variant:`link`},{default:_(()=>[...n[0]||(n[0]=[t(` Top `,-1)])]),_:1})]),_:1}),s(M,{side:`right`},{card:_(()=>[...n[3]||(n[3]=[b(`div`,{class:`text-sm`},` 从右侧弹出 `,-1)])]),default:_(()=>[s(D,{variant:`link`},{default:_(()=>[...n[2]||(n[2]=[t(` Right `,-1)])]),_:1})]),_:1}),s(M,{side:`bottom`},{card:_(()=>[...n[5]||(n[5]=[b(`div`,{class:`text-sm`},` 从下方弹出 `,-1)])]),default:_(()=>[s(D,{variant:`link`},{default:_(()=>[...n[4]||(n[4]=[t(` Bottom `,-1)])]),_:1})]),_:1}),s(M,{side:`left`},{card:_(()=>[...n[7]||(n[7]=[b(`div`,{class:`text-sm`},` 从左侧弹出 `,-1)])]),default:_(()=>[s(D,{variant:`link`},{default:_(()=>[...n[6]||(n[6]=[t(` Left `,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaHoverCard from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaHoverCard side="top">
      <FaButton variant="link">
        Top
      </FaButton>
      <template #card>
        <div class="text-sm">
          从上方弹出
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard side="right">
      <FaButton variant="link">
        Right
      </FaButton>
      <template #card>
        <div class="text-sm">
          从右侧弹出
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard side="bottom">
      <FaButton variant="link">
        Bottom
      </FaButton>
      <template #card>
        <div class="text-sm">
          从下方弹出
        </div>
      </template>
    </FaHoverCard>
    <FaHoverCard side="left">
      <FaButton variant="link">
        Left
      </FaButton>
      <template #card>
        <div class="text-sm">
          从左侧弹出
        </div>
      </template>
    </FaHoverCard>
  </div>
</template>
`},{title:`对齐方式`,component:er,componentRaw:tr},{title:`偏移`,component:cr,componentRaw:lr}],fr={class:`flex flex-wrap gap-4`},pr={class:`text-xs text-muted-foreground text-center w-full truncate`},mr=e({__name:`_iconify`,setup(e){let t=[`lucide:bell`,`lucide:calendar-days`,`ri:github-fill`,`logos:vue`,`logos:vitejs`];return(e,n)=>(u(),v(`div`,fr,[(u(),v(h,null,f(t,e=>b(`div`,{key:e,class:`p-3 flex flex-col gap-2 w-28 items-center`},[s(V,{name:e,class:`size-9`},null,8,[`name`]),b(`span`,pr,d(e),1)])),64))]))}}),hr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../index.vue'

const icons = [
  'lucide:bell',
  'lucide:calendar-days',
  'ri:github-fill',
  'logos:vue',
  'logos:vitejs',
]
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="name in icons" :key="name" class="p-3 flex flex-col gap-2 w-28 items-center">
      <FaIcon :name="name" class="size-9" />
      <span class="text-xs text-muted-foreground text-center w-full truncate">{{ name }}</span>
    </div>
  </div>
</template>
`,gr={class:`flex flex-wrap gap-6 items-end`},_r={class:`p-4 border rounded-lg flex flex-col gap-3 items-center`},vr={class:`flex gap-2`},yr={class:`p-4 border rounded-lg flex flex-col gap-3 items-center`},br=e({__name:`_image`,setup(e){let r=n(`https://picsum.photos/80`);function i(){r.value=`https://picsum.photos/80?random=${Math.random()}`}function a(){r.value=`https://xxx/`}let c=new URL(`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='-25%20-46%20256%20256'%20xml:space='preserve'%3e%3cpath%20d='M0,82.57C0,58.4,0,34.23,0,10.06C0,1.35,1.35,0,10.03,0C45.36,0,80.7-0.01,116.03,0.03c1.77,0,3.59,0.26,5.29,0.74%20c3.07,0.87,3.57,3.21,2.45,5.8c-4.37,10.1-8.83,20.15-13.31,30.2c-1.44,3.23-4.06,4.26-7.54,4.25c-18.5-0.09-37,0.1-55.5-0.14%20c-4.95-0.06-6.49,2.12-6.46,6.47c0.02,3,0.11,6.01-0.02,9c-0.3,6.8,0.34,9.29,9.51,9.62c5.36,0.19,10.73,0.04,16.09,0.04%20c7.57,0,15.15-0.04,22.72,0.01c5.13,0.03,6.6,2.12,4.59,6.89C90.43,81.09,86.27,89,83.4,97.35c-2.59,7.55-8.57,7.27-14.28,7.56%20c-7.48,0.38-15,0.17-22.5,0.06c-3.69-0.05-4.96,1.04-4.86,5.18c0.36,15.83,0.26,31.67,0.12,47.5c-0.04,4.2-2.26,6.53-6.94,6.42%20c-9-0.21-18-0.06-27-0.06c-6.05,0-7.91-1.8-7.92-7.94C-0.02,131.57,0,107.07,0,82.57z'%20fill='%2335495e'%20/%3e%3cpath%20d='M132.98,94.13c-8.21,18.88-16.33,37.1-24.06,55.48c-6.02,14.31-5.81,14.4-21.31,14.4c-6.67,0-13.33,0.05-20-0.01%20c-5.91-0.05-7.71-2.44-5.46-7.61c6.86-15.8,13.86-31.55,20.82-47.31c9.41-21.32,18.81-42.63,28.24-63.94%20c5.59-12.62,11.14-25.25,16.94-37.77c0.82-1.78,2.95-4.09,4.47-4.09c1.63,0,4,2.11,4.78,3.86c13.4,29.78,26.56,59.66,39.87,89.49%20c6.48,14.53,13.16,28.97,19.72,43.46c2.57,5.68,5.11,11.38,7.61,17.1c1.61,3.68-0.13,6.75-4.12,6.77%20c-23.83,0.08-47.66,0.09-71.49-0.01c-4.03-0.02-5.46-2.47-3.98-6.17c2.26-5.63,4.77-11.16,6.95-16.82c1.74-4.54,4.92-6.06,9.6-5.98%20c9.65,0.16,9.89-0.55,5.89-9.13c-4.57-9.81-8.76-19.8-13.14-29.7C134.08,95.62,133.68,95.17,132.98,94.13z'%20fill='%2342b883'%20/%3e%3c/svg%3e`,``+import.meta.url).href;return(e,n)=>(u(),v(`div`,gr,[b(`div`,_r,[n[2]||(n[2]=b(`span`,{class:`text-xs text-muted-foreground font-medium`},`网络图片`,-1)),s(V,{name:r.value,class:`size-14`},null,8,[`name`]),b(`div`,vr,[s(D,{size:`sm`,onClick:i},{default:_(()=>[...n[0]||(n[0]=[t(` 更换图片 `,-1)])]),_:1}),s(D,{size:`sm`,variant:`outline`,onClick:a},{default:_(()=>[...n[1]||(n[1]=[t(` 触发错误 `,-1)])]),_:1})])]),b(`div`,yr,[n[3]||(n[3]=b(`span`,{class:`text-xs text-muted-foreground font-medium`},`相对路径`,-1)),s(V,{name:o(c),class:`size-14`},null,8,[`name`])])]))}}),xr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../index.vue'

const imageUrl = shallowRef('https://picsum.photos/80')

function changeImage() {
  imageUrl.value = \`https://picsum.photos/80?random=\${Math.random()}\`
}

function showError() {
  imageUrl.value = 'https://xxx/'
}

const logo = new URL('./logo.svg', import.meta.url).href
<\/script>

<template>
  <div class="flex flex-wrap gap-6 items-end">
    <div class="p-4 border rounded-lg flex flex-col gap-3 items-center">
      <span class="text-xs text-muted-foreground font-medium">网络图片</span>
      <FaIcon :name="imageUrl" class="size-14" />
      <div class="flex gap-2">
        <FaButton size="sm" @click="changeImage">
          更换图片
        </FaButton>
        <FaButton size="sm" variant="outline" @click="showError">
          触发错误
        </FaButton>
      </div>
    </div>
    <div class="p-4 border rounded-lg flex flex-col gap-3 items-center">
      <span class="text-xs text-muted-foreground font-medium">相对路径</span>
      <FaIcon :name="logo" class="size-14" />
    </div>
  </div>
</template>
`,Sr={class:`space-y-4`},Cr={class:`flex flex-wrap gap-4`},wr={class:`text-xs text-muted-foreground text-center w-full truncate`},Tr={class:`flex flex-wrap gap-4`},Er={class:`text-xs text-muted-foreground text-center w-full truncate`},Dr=e({__name:`_svg`,setup(e){let t=[`example-emotion-line`,`example-emotion-laugh-line`,`example-emotion-unhappy-line`],n=[`example-crown`,`example-star`,`example-vip`];return(e,r)=>(u(),v(`div`,Sr,[b(`div`,null,[r[0]||(r[0]=b(`div`,{class:`text-sm text-muted-foreground font-medium mb-3`},` 单色 `,-1)),b(`div`,Cr,[(u(),v(h,null,f(t,e=>b(`div`,{key:e,class:`p-3 flex flex-col gap-1.5 w-24 items-center`},[s(V,{name:e,class:`size-10`},null,8,[`name`]),b(`span`,wr,d(e.replace(`example-`,``)),1)])),64))])]),b(`div`,null,[r[1]||(r[1]=b(`div`,{class:`text-sm text-muted-foreground font-medium mb-3`},` 彩色 `,-1)),b(`div`,Tr,[(u(),v(h,null,f(n,e=>b(`div`,{key:e,class:`p-3 flex flex-col gap-1.5 w-24 items-center`},[s(V,{name:e,class:`size-10`},null,8,[`name`]),b(`span`,Er,d(e.replace(`example-`,``)),1)])),64))])])]))}}),Or=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../index.vue'

const monoIcons = [
  'example-emotion-line',
  'example-emotion-laugh-line',
  'example-emotion-unhappy-line',
]

const colorIcons = [
  'example-crown',
  'example-star',
  'example-vip',
]
<\/script>

<template>
  <div class="space-y-4">
    <div>
      <div class="text-sm text-muted-foreground font-medium mb-3">
        单色
      </div>
      <div class="flex flex-wrap gap-4">
        <div v-for="name in monoIcons" :key="name" class="p-3 flex flex-col gap-1.5 w-24 items-center">
          <FaIcon :name="name" class="size-10" />
          <span class="text-xs text-muted-foreground text-center w-full truncate">{{ name.replace('example-', '') }}</span>
        </div>
      </div>
    </div>
    <div>
      <div class="text-sm text-muted-foreground font-medium mb-3">
        彩色
      </div>
      <div class="flex flex-wrap gap-4">
        <div v-for="name in colorIcons" :key="name" class="p-3 flex flex-col gap-1.5 w-24 items-center">
          <FaIcon :name="name" class="size-10" />
          <span class="text-xs text-muted-foreground text-center w-full truncate">{{ name.replace('example-', '') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
`,kr={class:`flex flex-wrap gap-6 items-end`},Ar={class:`px-6 py-4 border rounded-lg flex flex-col gap-3 items-center`},jr={class:`px-6 py-4 border rounded-lg flex flex-col gap-3 items-center`},Mr=e({__name:`_transition`,setup(e){let r=n(!1);return(e,n)=>(u(),v(`div`,kr,[b(`div`,Ar,[n[1]||(n[1]=b(`span`,{class:`text-xs text-muted-foreground font-medium`},`无动画`,-1)),s(V,{name:r.value?`i-lucide:heart`:`i-lucide:star`,class:`size-8`},null,8,[`name`])]),b(`div`,jr,[n[2]||(n[2]=b(`span`,{class:`text-xs text-muted-foreground font-medium`},`过渡动画`,-1)),s(V,{name:r.value?`i-lucide:heart`:`i-lucide:star`,class:`text-primary size-8`,transition:``},null,8,[`name`])]),s(D,{onClick:n[0]||(n[0]=e=>r.value=!r.value)},{default:_(()=>[...n[3]||(n[3]=[t(` 切换图标 `,-1)])]),_:1})]))}}),Nr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../index.vue'

const active = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-6 items-end">
    <div class="px-6 py-4 border rounded-lg flex flex-col gap-3 items-center">
      <span class="text-xs text-muted-foreground font-medium">无动画</span>
      <FaIcon :name="active ? 'i-lucide:heart' : 'i-lucide:star'" class="size-8" />
    </div>
    <div class="px-6 py-4 border rounded-lg flex flex-col gap-3 items-center">
      <span class="text-xs text-muted-foreground font-medium">过渡动画</span>
      <FaIcon :name="active ? 'i-lucide:heart' : 'i-lucide:star'" class="text-primary size-8" transition />
    </div>
    <FaButton @click="active = !active">
      切换图标
    </FaButton>
  </div>
</template>
`,Pr={class:`flex flex-wrap gap-4`},Fr={class:`text-xs text-muted-foreground text-center w-full truncate`},Ir=[{title:`SVG文件`,component:Dr,componentRaw:Or},{title:`Iconify`,component:mr,componentRaw:hr},{title:`UnoCSS`,component:e({__name:`_unocss`,setup(e){let t=[`i-lucide:search`,`i-lucide:settings`,`i-ep:edit`,`i-ri:notification-3-line`,`i-tabler:chart-area-line`];return(e,n)=>(u(),v(`div`,Pr,[(u(),v(h,null,f(t,e=>b(`div`,{key:e,class:`p-3 flex flex-col gap-2 w-32 items-center`},[s(V,{name:e,class:`text-primary size-9`},null,8,[`name`]),b(`span`,Fr,d(e),1)])),64))]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../index.vue'

const icons = [
  'i-lucide:search',
  'i-lucide:settings',
  'i-ep:edit',
  'i-ri:notification-3-line',
  'i-tabler:chart-area-line',
]
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="name in icons" :key="name" class="p-3 flex flex-col gap-2 w-32 items-center">
      <FaIcon :name="name" class="text-primary size-9" />
      <span class="text-xs text-muted-foreground text-center w-full truncate">{{ name }}</span>
    </div>
  </div>
</template>
`},{title:`Image`,component:br,componentRaw:xr},{title:`过渡动画`,component:Mr,componentRaw:Nr}],Lr=e({__name:`_basic`,setup(e){return(e,t)=>(u(),c(x,{src:`https://fantastic-admin.hurui.me/logo.svg`}))}}),Rr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaImagePreview from '../index.vue'
<\/script>

<template>
  <FaImagePreview src="https://fantastic-admin.hurui.me/logo.svg" />
</template>
`,zr={class:`flex flex-wrap gap-4`},Br={class:`text-sm text-secondary-foreground/50 flex-col-center gap-1`},Vr=e({__name:`_error`,setup(e){return(e,t)=>(u(),v(`div`,zr,[s(x,{src:`https://fantastic-admin.hurui.me/not-found.png`}),s(x,{src:`https://fantastic-admin.hurui.me/not-found.png`},{error:_(()=>[b(`div`,Br,[s(V,{name:`i-ph:image-broken-duotone`,class:`size-8`}),t[0]||(t[0]=b(`div`,null,` 图片加载失败 `,-1))])]),_:1})]))}}),Hr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import FaImagePreview from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaImagePreview src="https://fantastic-admin.hurui.me/not-found.png" />
    <FaImagePreview src="https://fantastic-admin.hurui.me/not-found.png">
      <template #error>
        <div class="text-sm text-secondary-foreground/50 flex-col-center gap-1">
          <FaIcon name="i-ph:image-broken-duotone" class="size-8" />
          <div>
            图片加载失败
          </div>
        </div>
      </template>
    </FaImagePreview>
  </div>
</template>
`,Ur={class:`flex flex-wrap gap-2`},Wr=e({__name:`_functional`,setup(e){let{open:n}=ce();function r(){n(`https://fantastic-admin.hurui.me/logo.svg`)}function i(){n([`https://fantastic-admin.hurui.me/logo.svg`,`https://fantastic-mobile.hurui.me/logo.png`])}function a(){n([`https://fantastic-admin.hurui.me/logo.svg`,`https://fantastic-mobile.hurui.me/logo.png`],1)}return(e,n)=>(u(),v(`div`,Ur,[s(D,{onClick:r},{default:_(()=>[...n[0]||(n[0]=[t(` 预览单张 `,-1)])]),_:1}),s(D,{onClick:i},{default:_(()=>[...n[1]||(n[1]=[t(` 预览多张 `,-1)])]),_:1}),s(D,{onClick:a},{default:_(()=>[...n[2]||(n[2]=[t(` 预览多张（初始预览第2张） `,-1)])]),_:1})]))}}),Gr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useImagePreview } from '../index'

const { open } = useImagePreview()

function openSingle() {
  open('https://fantastic-admin.hurui.me/logo.svg')
}

function openMulti() {
  open([
    'https://fantastic-admin.hurui.me/logo.svg',
    'https://fantastic-mobile.hurui.me/logo.png',
  ])
}

function openMultiWithIndex() {
  open([
    'https://fantastic-admin.hurui.me/logo.svg',
    'https://fantastic-mobile.hurui.me/logo.png',
  ], 1)
}
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="openSingle">
      预览单张
    </FaButton>
    <FaButton @click="openMulti">
      预览多张
    </FaButton>
    <FaButton @click="openMultiWithIndex">
      预览多张（初始预览第2张）
    </FaButton>
  </div>
</template>
`,Kr={class:`flex flex-wrap gap-4 items-end`},qr=[{title:`基础`,component:Lr,componentRaw:Rr},{title:`尺寸`,component:e({__name:`_size`,setup(e){return(e,t)=>(u(),v(`div`,Kr,[s(x,{src:`https://fantastic-admin.hurui.me/logo.svg`,class:`size-25`}),s(x,{src:`https://fantastic-admin.hurui.me/logo.svg`,class:`size-40`}),s(x,{src:`https://fantastic-admin.hurui.me/logo.svg`,class:`h-40 w-60`})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaImagePreview from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4 items-end">
    <FaImagePreview src="https://fantastic-admin.hurui.me/logo.svg" class="size-25" />
    <FaImagePreview src="https://fantastic-admin.hurui.me/logo.svg" class="size-40" />
    <FaImagePreview src="https://fantastic-admin.hurui.me/logo.svg" class="h-40 w-60" />
  </div>
</template>
`},{title:`错误`,component:Vr,componentRaw:Hr},{title:`函数式调用`,component:Wr,componentRaw:Gr}],Jr=[{title:`基础`,component:e({__name:`_basic`,setup(e){let t=Y(),n=y([]);function r(){t.success(`模拟上传成功`)}return(e,t)=>(u(),c(N,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>e.data.url,onOnSuccess:r},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaImageUpload from '../index.vue'

const toast = useToast()
const files = ref<string[]>([])

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="response => response.data.url"
    @on-success="handleSuccess"
  />
</template>
`},{title:`多图上传`,component:e({__name:`_multiple`,setup(e){let t=Y(),n=y([`https://fantastic-admin.hurui.me/logo.svg`]);function r(){t.success(`模拟上传成功`)}return(e,t)=>(u(),c(N,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>`${e.data.url}?fake=${Math.random()}`,max:2,onOnSuccess:r},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaImageUpload from '../index.vue'

const toast = useToast()
const files = ref<string[]>(['https://fantastic-admin.hurui.me/logo.svg'])

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="response => \`\${response.data.url}?fake=\${Math.random()}\`"
    :max="2"
    @on-success="handleSuccess"
  />
</template>
`},{title:`上传前校验`,component:e({__name:`_validation`,setup(e){let t=Y(),n=y([]);function r(e){return e.type.startsWith(`image/`)?e.size>200*1024?(t.error(`图片大小不能超过 200KB`),!1):!0:(t.error(`请选择图片文件`),!1)}function i(){t.success(`模拟上传成功`)}return(e,t)=>(u(),c(N,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),action:`/fake/upload`,"after-upload":e=>`${e.data.url}?fake=${Math.random()}`,"before-upload":r,width:200,height:130,max:0,onOnSuccess:i},{default:_(()=>[s(V,{name:`i-noto:identification-card`,class:`opacity-50 size-50`})]),_:1},8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaIcon from '../../icon/index.vue'
import { useToast } from '../../toast'
import FaImageUpload from '../index.vue'

const toast = useToast()
const files = ref<string[]>([])

function beforeUpload(file: File) {
  if (!file.type.startsWith('image/')) {
    toast.error('请选择图片文件')
    return false
  }
  if (file.size > 200 * 1024) {
    toast.error('图片大小不能超过 200KB')
    return false
  }
  return true
}

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="response => \`\${response.data.url}?fake=\${Math.random()}\`"
    :before-upload="beforeUpload"
    :width="200"
    :height="130"
    :max="0"
    @on-success="handleSuccess"
  >
    <FaIcon name="i-noto:identification-card" class="opacity-50 size-50" />
  </FaImageUpload>
</template>
`},{title:`自定义上传请求`,component:e({__name:`_custom-request`,setup(e){let t=Y(),n=y([]);async function r({file:e,onProgress:t}){return t(30),await new Promise(e=>setTimeout(e,300)),t(100),{url:URL.createObjectURL(e),name:e.name}}function i(){t.success(`自定义上传完成`)}return(e,t)=>(u(),c(N,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),"http-request":r,"after-upload":e=>e.url,max:3,onOnSuccess:i},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { UploadRequestOptions } from '../index.vue'
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaImageUpload from '../index.vue'

const toast = useToast()
const files = ref<string[]>([])

async function httpRequest({ file, onProgress }: UploadRequestOptions) {
  onProgress(30)
  await new Promise(resolve => setTimeout(resolve, 300))
  onProgress(100)

  return {
    url: URL.createObjectURL(file),
    name: file.name,
  }
}

function handleSuccess() {
  toast.success('自定义上传完成')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    :http-request="httpRequest"
    :after-upload="response => response.url"
    :max="3"
    @on-success="handleSuccess"
  />
</template>
`},{title:`文件夹上传`,component:e({__name:`_directory`,setup(e){let t=y([]);function n(e){return e.type.startsWith(`image/`)}async function r({file:e,onProgress:t}){return t(50),await new Promise(e=>setTimeout(e,200)),t(100),{url:URL.createObjectURL(e),name:e.name}}return(e,i)=>(u(),c(N,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),directory:``,max:0,"http-request":r,"before-upload":n,"after-upload":e=>e.url},null,8,[`modelValue`,`after-upload`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import type { UploadRequestOptions } from '../index.vue'
import { ref } from 'vue'
import FaImageUpload from '../index.vue'

const files = ref<string[]>([])

function beforeUpload(file: File) {
  return file.type.startsWith('image/')
}

async function httpRequest({ file, onProgress }: UploadRequestOptions) {
  onProgress(50)
  await new Promise(resolve => setTimeout(resolve, 200))
  onProgress(100)

  return {
    url: URL.createObjectURL(file),
    name: file.name,
  }
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    directory
    :max="0"
    :http-request="httpRequest"
    :before-upload="beforeUpload"
    :after-upload="response => response.url"
  />
</template>
`}],Yr=e({__name:`_basic`,setup(e){let t=y(``);return(e,n)=>(u(),c(w,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]))}}),Xr=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const input = ref('')
<\/script>

<template>
  <FaInputOTP v-model="input" />
</template>
`,Zr={class:`space-y-3`},Qr={class:`text-sm text-muted-foreground space-y-1`},$r=e({__name:`_callback`,setup(e){let t=y(``),n=y(`等待输入`),r=y(`等待完成`),i=Y();function a(e){n.value=`input: ${e||`空值`}`}function o(e){r.value=`complete: ${e}`,i(e)}return(e,i)=>(u(),v(`div`,Zr,[s(w,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),onInput:a,onComplete:o},null,8,[`modelValue`]),b(`div`,Qr,[b(`div`,null,d(n.value),1),b(`div`,null,d(r.value),1)])]))}}),ei=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import { useToast } from '../../toast'
import FaInputOTP from '../index.vue'

const input = ref('')
const inputText = ref('等待输入')
const completeText = ref('等待完成')
const toast = useToast()

function handleInput(value: string) {
  inputText.value = \`input: \${value || '空值'}\`
}

function handleComplete(value: string) {
  completeText.value = \`complete: \${value}\`
  toast(value)
}
<\/script>

<template>
  <div class="space-y-3">
    <FaInputOTP v-model="input" @input="handleInput" @complete="handleComplete" />
    <div class="text-sm text-muted-foreground space-y-1">
      <div>{{ inputText }}</div>
      <div>{{ completeText }}</div>
    </div>
  </div>
</template>
`,ti=e({__name:`_disabled`,setup(e){let t=y(`123456`);return(e,n)=>(u(),c(w,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:``},null,8,[`modelValue`]))}}),ni=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const input = ref('123456')
<\/script>

<template>
  <FaInputOTP v-model="input" disabled />
</template>
`,ri=e({__name:`_length`,setup(e){let t=y(``);return(e,n)=>(u(),c(w,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),length:4},null,8,[`modelValue`]))}}),ii=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const input = ref('')
<\/script>

<template>
  <FaInputOTP v-model="input" :length="4" />
</template>
`,ai={class:`space-y-4`},oi={class:`space-y-2`},si={class:`space-y-2`},ci={class:`space-y-2`},li={class:`space-y-2`},ui=[{title:`基础`,component:Yr,componentRaw:Xr},{title:`长度`,component:ri,componentRaw:ii},{title:`模式`,component:e({__name:`_pattern`,setup(e){let t=y(``),n=y(``),r=y(``),i=y(``);return(e,a)=>(u(),v(`div`,ai,[b(`div`,oi,[a[4]||(a[4]=b(`div`,{class:`text-sm text-muted-foreground`},` 仅字母 `,-1)),s(w,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),pattern:`only-chars`},null,8,[`modelValue`])]),b(`div`,si,[a[5]||(a[5]=b(`div`,{class:`text-sm text-muted-foreground`},` 仅数字 `,-1)),s(w,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e),pattern:`only-digits`},null,8,[`modelValue`])]),b(`div`,ci,[a[6]||(a[6]=b(`div`,{class:`text-sm text-muted-foreground`},` 字母和数字 `,-1)),s(w,{modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=e=>r.value=e),pattern:`only-digits-and-chars`},null,8,[`modelValue`])]),b(`div`,li,[a[7]||(a[7]=b(`div`,{class:`text-sm text-muted-foreground`},` 自定义：仅允许 A-F 和 0-9 `,-1)),s(w,{modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=e=>i.value=e),pattern:`^[A-F0-9]*$`},null,8,[`modelValue`])])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const chars = ref('')
const digits = ref('')
const digitsAndChars = ref('')
const custom = ref('')
<\/script>

<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <div class="text-sm text-muted-foreground">
        仅字母
      </div>
      <FaInputOTP v-model="chars" pattern="only-chars" />
    </div>
    <div class="space-y-2">
      <div class="text-sm text-muted-foreground">
        仅数字
      </div>
      <FaInputOTP v-model="digits" pattern="only-digits" />
    </div>
    <div class="space-y-2">
      <div class="text-sm text-muted-foreground">
        字母和数字
      </div>
      <FaInputOTP v-model="digitsAndChars" pattern="only-digits-and-chars" />
    </div>
    <div class="space-y-2">
      <div class="text-sm text-muted-foreground">
        自定义：仅允许 A-F 和 0-9
      </div>
      <FaInputOTP v-model="custom" pattern="^[A-F0-9]*$" />
    </div>
  </div>
</template>
`},{title:`分隔符`,component:e({__name:`_separator`,setup(e){let t=y(``);return(e,n)=>(u(),c(w,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),separator:[2,3]},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInputOTP from '../index.vue'

const input = ref('')
<\/script>

<template>
  <FaInputOTP v-model="input" :separator="[2, 3]" />
</template>
`},{title:`禁用`,component:ti,componentRaw:ni},{title:`回调`,component:$r,componentRaw:ei}],di=e({__name:`_basic`,setup(e){let t=y(``);return(e,n)=>(u(),c(T,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入内容`},null,8,[`modelValue`]))}}),fi=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../index.vue'

const value = ref('')
<\/script>

<template>
  <FaInput v-model="value" placeholder="请输入内容" />
</template>
`,pi=e({__name:`_clearable`,setup(e){let t=y(`可清空的内容`);return(e,n)=>(u(),c(T,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),clearable:``,placeholder:`请输入内容`},null,8,[`modelValue`]))}}),mi=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../index.vue'

const value = ref('可清空的内容')
<\/script>

<template>
  <FaInput v-model="value" clearable placeholder="请输入内容" />
</template>
`,hi=e({__name:`_disabled`,setup(e){let t=y(`禁用状态`);return(e,n)=>(u(),c(T,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:``,placeholder:`请输入内容`},null,8,[`modelValue`]))}}),gi=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../index.vue'

const value = ref('禁用状态')
<\/script>

<template>
  <FaInput v-model="value" disabled placeholder="请输入内容" />
</template>
`,_i=e({__name:`_password`,setup(e){let t=y(``);return(e,n)=>(u(),c(T,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入密码`,type:`password`},null,8,[`modelValue`]))}}),vi=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../index.vue'

const value = ref('')
<\/script>

<template>
  <FaInput v-model="value" placeholder="请输入密码" type="password" />
</template>
`,yi={class:`flex flex-col gap-2`},bi=[{title:`基础`,component:di,componentRaw:fi},{title:`可清空`,component:pi,componentRaw:mi},{title:`禁用`,component:hi,componentRaw:gi},{title:`密码`,component:_i,componentRaw:vi},{title:`插槽`,component:e({__name:`_slot`,setup(e){let n=y(``),r=y(``);return(e,i)=>(u(),v(`div`,yi,[s(T,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=e=>n.value=e),placeholder:`example.com`,"input-class":`ps-1`},{start:_(()=>[...i[2]||(i[2]=[t(` https:// `,-1)])]),end:_(()=>[s(G,{text:`可输入域名、IP、端口、URL 等`},{default:_(()=>[s(V,{name:`i-ri:question-line`,class:`text-base text-orange cursor-help`})]),_:1})]),_:1},8,[`modelValue`]),s(T,{modelValue:r.value,"onUpdate:modelValue":i[1]||(i[1]=e=>r.value=e),placeholder:`请输入内容`,align:`block`,"input-class":`shadow-none`,"end-class":`justify-end`},{start:_(()=>[...i[3]||(i[3]=[t(` 标题： `,-1)])]),end:_(()=>[s(D,{variant:`ghost`,size:`sm`,class:`px-2 h-8`},{default:_(()=>[...i[4]||(i[4]=[t(` 提交 `,-1)])]),_:1})]),_:1},8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaTooltip from '../../tooltip/index.vue'
import FaInput from '../index.vue'

const value = ref('')
const value2 = ref('')
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <FaInput v-model="value" placeholder="example.com" input-class="ps-1">
      <template #start>
        https://
      </template>
      <template #end>
        <FaTooltip text="可输入域名、IP、端口、URL 等">
          <FaIcon name="i-ri:question-line" class="text-base text-orange cursor-help" />
        </FaTooltip>
      </template>
    </FaInput>
    <FaInput v-model="value2" placeholder="请输入内容" align="block" input-class="shadow-none" end-class="justify-end">
      <template #start>
        标题：
      </template>
      <template #end>
        <FaButton variant="ghost" size="sm" class="px-2 h-8">
          提交
        </FaButton>
      </template>
    </FaInput>
  </div>
</template>
`}],xi={class:`flex flex-col gap-2`},Si=[{title:`基础`,component:e({__name:`_basic`,setup(e){return(e,n)=>(u(),v(`div`,xi,[s(ne,null,{default:_(()=>[s($,null,{default:_(()=>[...n[0]||(n[0]=[t(`⌘`,-1)])]),_:1}),s($,null,{default:_(()=>[...n[1]||(n[1]=[t(`⇧`,-1)])]),_:1}),s($,null,{default:_(()=>[...n[2]||(n[2]=[t(`K`,-1)])]),_:1})]),_:1}),s(ne,null,{default:_(()=>[s($,null,{default:_(()=>[...n[3]||(n[3]=[t(`Ctrl`,-1)])]),_:1}),s($,null,{default:_(()=>[...n[4]||(n[4]=[t(`Alt`,-1)])]),_:1}),s($,null,{default:_(()=>[...n[5]||(n[5]=[t(`Delete`,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaKbd from '../../kbd/index.vue'
import FaKbdGroup from '../index.vue'
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
`}],Ci={class:`flex flex-col gap-2`},wi=[{title:`基础`,component:e({__name:`_basic`,setup(e){return(e,n)=>(u(),v(`div`,Ci,[s($,null,{default:_(()=>[...n[0]||(n[0]=[t(`Ctrl`,-1)])]),_:1}),s($,null,{default:_(()=>[...n[1]||(n[1]=[t(`Alt`,-1)])]),_:1}),s($,null,{default:_(()=>[...n[2]||(n[2]=[t(`Shift`,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`}],Ti={class:`space-y-4`},Ei=e({__name:`_basic`,setup(e){let t=l({name:``,email:``});return(e,n)=>(u(),v(`div`,Ti,[s(C,{label:`用户名`},{default:_(()=>[s(T,{modelValue:t.name,"onUpdate:modelValue":n[0]||(n[0]=e=>t.name=e),placeholder:`请输入用户名`,class:`w-72`},null,8,[`modelValue`])]),_:1}),s(C,{label:`邮箱`},{default:_(()=>[s(T,{modelValue:t.email,"onUpdate:modelValue":n[1]||(n[1]=e=>t.email=e),placeholder:`请输入邮箱`,class:`w-72`},null,8,[`modelValue`])]),_:1})]))}}),Di=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive } from 'vue'
import FaInput from '../../input/index.vue'
import FaLabel from '../index.vue'

const form = reactive({
  name: '',
  email: '',
})
<\/script>

<template>
  <div class="space-y-4">
    <FaLabel label="用户名">
      <FaInput v-model="form.name" placeholder="请输入用户名" class="w-72" />
    </FaLabel>
    <FaLabel label="邮箱">
      <FaInput v-model="form.email" placeholder="请输入邮箱" class="w-72" />
    </FaLabel>
  </div>
</template>
`,Oi={class:`space-y-4`},ki={class:`text-muted-foreground flex shrink-0 gap-2 w-24 items-center`},Ai=e({__name:`_custom`,setup(e){let t=n(``),r=n(!1);return(e,n)=>(u(),v(`div`,Oi,[s(C,null,{default:_(()=>[b(`div`,ki,[s(V,{name:`i-lucide:search`}),n[2]||(n[2]=b(`span`,null,`关键词`,-1))]),s(T,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入关键词`,class:`w-72`},null,8,[`modelValue`])]),_:1}),s(C,null,{default:_(()=>[s(O,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e)},null,8,[`modelValue`]),n[3]||(n[3]=b(`span`,null,`记住当前筛选条件`,-1))]),_:1})]))}}),ji=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaCheckbox from '../../checkbox/index.vue'
import FaIcon from '../../icon/index.vue'
import FaInput from '../../input/index.vue'
import FaLabel from '../index.vue'

const keyword = shallowRef('')
const remember = shallowRef(false)
<\/script>

<template>
  <div class="space-y-4">
    <FaLabel>
      <div class="text-muted-foreground flex shrink-0 gap-2 w-24 items-center">
        <FaIcon name="i-lucide:search" />
        <span>关键词</span>
      </div>
      <FaInput v-model="keyword" placeholder="请输入关键词" class="w-72" />
    </FaLabel>
    <FaLabel>
      <FaCheckbox v-model="remember" />
      <span>记住当前筛选条件</span>
    </FaLabel>
  </div>
</template>
`,Mi={class:`max-w-xl space-y-4`},Ni={class:`flex gap-2`},Pi=e({__name:`_form`,setup(e){let n=l({title:``,type:`notice`,description:``}),r=[{label:`公告`,value:`notice`},{label:`消息`,value:`message`},{label:`任务`,value:`task`}];return(e,i)=>(u(),v(`div`,Mi,[s(C,{label:`标题`,"label-width":`5rem`},{default:_(()=>[s(T,{modelValue:n.title,"onUpdate:modelValue":i[0]||(i[0]=e=>n.title=e),placeholder:`请输入标题`,class:`w-full`},null,8,[`modelValue`])]),_:1}),s(C,{label:`类型`,"label-width":`5rem`},{default:_(()=>[s(z,{modelValue:n.type,"onUpdate:modelValue":i[1]||(i[1]=e=>n.type=e),options:r,class:`w-full`},null,8,[`modelValue`])]),_:1}),s(C,{label:`描述`,"label-width":`5rem`,class:`items-start`},{default:_(()=>[s(oe,{modelValue:n.description,"onUpdate:modelValue":i[2]||(i[2]=e=>n.description=e),placeholder:`请输入描述`,class:`w-full`},null,8,[`modelValue`])]),_:1}),s(C,{"label-width":`5rem`},{default:_(()=>[b(`div`,Ni,[s(D,null,{default:_(()=>[...i[3]||(i[3]=[t(`保存`,-1)])]),_:1}),s(D,{variant:`outline`},{default:_(()=>[...i[4]||(i[4]=[t(` 重置 `,-1)])]),_:1})])]),_:1})]))}}),Fi=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaTextarea from '../../textarea/index.vue'
import FaLabel from '../index.vue'

const form = reactive({
  title: '',
  type: 'notice',
  description: '',
})

const typeOptions = [
  { label: '公告', value: 'notice' },
  { label: '消息', value: 'message' },
  { label: '任务', value: 'task' },
]
<\/script>

<template>
  <div class="max-w-xl space-y-4">
    <FaLabel label="标题" label-width="5rem">
      <FaInput v-model="form.title" placeholder="请输入标题" class="w-full" />
    </FaLabel>
    <FaLabel label="类型" label-width="5rem">
      <FaSelect v-model="form.type" :options="typeOptions" class="w-full" />
    </FaLabel>
    <FaLabel label="描述" label-width="5rem" class="items-start">
      <FaTextarea v-model="form.description" placeholder="请输入描述" class="w-full" />
    </FaLabel>
    <FaLabel label-width="5rem">
      <div class="flex gap-2">
        <FaButton>保存</FaButton>
        <FaButton variant="outline">
          重置
        </FaButton>
      </div>
    </FaLabel>
  </div>
</template>
`,Ii={class:`space-y-4`},Li=[{title:`基础`,component:Ei,componentRaw:Di},{title:`固定宽度`,component:e({__name:`_width`,setup(e){let t=l({name:``,role:`admin`,phone:``}),n=[{label:`管理员`,value:`admin`},{label:`运营`,value:`operator`},{label:`访客`,value:`guest`}];return(e,r)=>(u(),v(`div`,Ii,[s(C,{label:`用户名`,"label-width":88},{default:_(()=>[s(T,{modelValue:t.name,"onUpdate:modelValue":r[0]||(r[0]=e=>t.name=e),placeholder:`请输入用户名`,class:`w-72`},null,8,[`modelValue`])]),_:1}),s(C,{label:`角色`,"label-width":88},{default:_(()=>[s(z,{modelValue:t.role,"onUpdate:modelValue":r[1]||(r[1]=e=>t.role=e),options:n,class:`w-72`},null,8,[`modelValue`])]),_:1}),s(C,{label:`手机号`,"label-width":88},{default:_(()=>[s(T,{modelValue:t.phone,"onUpdate:modelValue":r[2]||(r[2]=e=>t.phone=e),placeholder:`请输入手机号`,class:`w-72`},null,8,[`modelValue`])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive } from 'vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaLabel from '../index.vue'

const form = reactive({
  name: '',
  role: 'admin',
  phone: '',
})

const roleOptions = [
  { label: '管理员', value: 'admin' },
  { label: '运营', value: 'operator' },
  { label: '访客', value: 'guest' },
]
<\/script>

<template>
  <div class="space-y-4">
    <FaLabel label="用户名" :label-width="88">
      <FaInput v-model="form.name" placeholder="请输入用户名" class="w-72" />
    </FaLabel>
    <FaLabel label="角色" :label-width="88">
      <FaSelect v-model="form.role" :options="roleOptions" class="w-72" />
    </FaLabel>
    <FaLabel label="手机号" :label-width="88">
      <FaInput v-model="form.phone" placeholder="请输入手机号" class="w-72" />
    </FaLabel>
  </div>
</template>
`},{title:`表单布局`,component:Pi,componentRaw:Fi},{title:`自定义内容`,component:Ai,componentRaw:ji}],Ri={class:`flex flex-wrap gap-2`},zi=e({__name:`_actions`,setup(e){let r=n(!1),i=n(!1),a=n(!1);return(e,n)=>(u(),v(h,null,[b(`div`,Ri,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[6]||(n[6]=[t(` 隐藏关闭按钮 `,-1)])]),_:1}),s(D,{variant:`outline`,onClick:n[1]||(n[1]=e=>i.value=!0)},{default:_(()=>[...n[7]||(n[7]=[t(` 最大化 `,-1)])]),_:1}),s(D,{variant:`secondary`,onClick:n[2]||(n[2]=e=>a.value=!0)},{default:_(()=>[...n[8]||(n[8]=[t(` 拖拽 `,-1)])]),_:1})]),s(I,{modelValue:r.value,"onUpdate:modelValue":n[3]||(n[3]=e=>r.value=e),title:`隐藏关闭按钮`,closable:!1,"show-cancel-button":``},{default:_(()=>[...n[9]||(n[9]=[b(`div`,{class:`text-sm text-muted-foreground`},` 右上角关闭按钮已隐藏，可以通过底部按钮关闭。 `,-1)])]),_:1},8,[`modelValue`]),s(I,{modelValue:i.value,"onUpdate:modelValue":n[4]||(n[4]=e=>i.value=e),title:`可最大化弹窗`,maximizable:``},{default:_(()=>[...n[10]||(n[10]=[b(`div`,{class:`text-sm text-muted-foreground`},` 点击右上角最大化按钮可以切换弹窗尺寸。 `,-1)])]),_:1},8,[`modelValue`]),s(I,{modelValue:a.value,"onUpdate:modelValue":n[5]||(n[5]=e=>a.value=e),title:`可拖拽弹窗`,draggable:``},{default:_(()=>[...n[11]||(n[11]=[b(`div`,{class:`text-sm text-muted-foreground`},` 按住标题栏可以拖动弹窗位置。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Bi=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const closableOpen = shallowRef(false)
const maximizableOpen = shallowRef(false)
const draggableOpen = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="closableOpen = true">
      隐藏关闭按钮
    </FaButton>
    <FaButton variant="outline" @click="maximizableOpen = true">
      最大化
    </FaButton>
    <FaButton variant="secondary" @click="draggableOpen = true">
      拖拽
    </FaButton>
  </div>

  <FaModal v-model="closableOpen" title="隐藏关闭按钮" :closable="false" show-cancel-button>
    <div class="text-sm text-muted-foreground">
      右上角关闭按钮已隐藏，可以通过底部按钮关闭。
    </div>
  </FaModal>
  <FaModal v-model="maximizableOpen" title="可最大化弹窗" maximizable>
    <div class="text-sm text-muted-foreground">
      点击右上角最大化按钮可以切换弹窗尺寸。
    </div>
  </FaModal>
  <FaModal v-model="draggableOpen" title="可拖拽弹窗" draggable>
    <div class="text-sm text-muted-foreground">
      按住标题栏可以拖动弹窗位置。
    </div>
  </FaModal>
</template>
`,Vi=e({__name:`_basic`,setup(e){let r=n(!1);return(e,n)=>(u(),v(h,null,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[2]||(n[2]=[t(` 打开弹窗 `,-1)])]),_:1}),s(I,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e),title:`弹窗标题`},{default:_(()=>[...n[3]||(n[3]=[b(`div`,{class:`text-sm text-muted-foreground`},` 这里是弹窗内容区域。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Hi=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开弹窗
  </FaButton>
  <FaModal v-model="open" title="弹窗标题">
    <div class="text-sm text-muted-foreground">
      这里是弹窗内容区域。
    </div>
  </FaModal>
</template>
`,Ui={class:`flex flex-wrap gap-2`},Wi=e({__name:`_center-border-loading`,setup(e){let r=n(!1),i=n(!1),a=n(!1),o=n(!1);function c(){a.value=!0,o.value=!0,window.setTimeout(()=>{o.value=!1},1800)}return(e,n)=>(u(),v(h,null,[b(`div`,Ui,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[5]||(n[5]=[t(` 居中 `,-1)])]),_:1}),s(D,{variant:`outline`,onClick:n[1]||(n[1]=e=>i.value=!0)},{default:_(()=>[...n[6]||(n[6]=[t(` 无边框 `,-1)])]),_:1}),s(D,{variant:`secondary`,onClick:c},{default:_(()=>[...n[7]||(n[7]=[t(` 载入 `,-1)])]),_:1})]),s(I,{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=e=>r.value=e),title:`居中弹窗`,center:``,"align-center":``,"show-cancel-button":``},{default:_(()=>[...n[8]||(n[8]=[b(`div`,{class:`text-sm text-muted-foreground text-center`},` 标题、描述和底部按钮会居中显示，弹窗也会垂直居中。 `,-1)])]),_:1},8,[`modelValue`]),s(I,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=e=>i.value=e),title:`无边框弹窗`,border:!1,"show-cancel-button":``},{default:_(()=>[...n[9]||(n[9]=[b(`div`,{class:`text-sm text-muted-foreground`},` 头部和底部不显示分割线。 `,-1)])]),_:1},8,[`modelValue`]),s(I,{modelValue:a.value,"onUpdate:modelValue":n[4]||(n[4]=e=>a.value=e),title:`载入状态`,loading:o.value},{default:_(()=>[...n[10]||(n[10]=[b(`div`,{class:`text-sm text-muted-foreground`},` 弹窗主体区域会显示载入遮罩。 `,-1)])]),_:1},8,[`modelValue`,`loading`])],64))}}),Gi=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const centeredOpen = shallowRef(false)
const borderlessOpen = shallowRef(false)
const loadingOpen = shallowRef(false)
const loading = shallowRef(false)

function openLoadingModal() {
  loadingOpen.value = true
  loading.value = true
  window.setTimeout(() => {
    loading.value = false
  }, 1800)
}
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="centeredOpen = true">
      居中
    </FaButton>
    <FaButton variant="outline" @click="borderlessOpen = true">
      无边框
    </FaButton>
    <FaButton variant="secondary" @click="openLoadingModal">
      载入
    </FaButton>
  </div>

  <FaModal v-model="centeredOpen" title="居中弹窗" center align-center show-cancel-button>
    <div class="text-sm text-muted-foreground text-center">
      标题、描述和底部按钮会居中显示，弹窗也会垂直居中。
    </div>
  </FaModal>
  <FaModal v-model="borderlessOpen" title="无边框弹窗" :border="false" show-cancel-button>
    <div class="text-sm text-muted-foreground">
      头部和底部不显示分割线。
    </div>
  </FaModal>
  <FaModal v-model="loadingOpen" title="载入状态" :loading="loading">
    <div class="text-sm text-muted-foreground">
      弹窗主体区域会显示载入遮罩。
    </div>
  </FaModal>
</template>
`,Ki=e({__name:`_custom-style`,setup(e){let r=n(!1);return(e,n)=>(u(),v(h,null,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[2]||(n[2]=[t(` 打开弹窗 `,-1)])]),_:1}),s(I,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e),title:`自定义样式`,class:`sm:max-w-2xl`,"header-class":`bg-muted/40`,"content-class":`min-h-auto`,"footer-class":`bg-muted/40`,"show-cancel-button":``},{default:_(()=>[...n[3]||(n[3]=[b(`div`,{class:`text-sm text-muted-foreground`},` 可以通过 class、header-class、content-class 和 footer-class 调整弹窗样式。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),qi=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开弹窗
  </FaButton>
  <FaModal
    v-model="open"
    title="自定义样式"
    class="sm:max-w-2xl"
    header-class="bg-muted/40"
    content-class="min-h-auto"
    footer-class="bg-muted/40"
    show-cancel-button
  >
    <div class="text-sm text-muted-foreground">
      可以通过 class、header-class、content-class 和 footer-class 调整弹窗样式。
    </div>
  </FaModal>
</template>
`,Ji={class:`flex flex-wrap gap-2`},Yi=e({__name:`_dialog`,setup(e){let n=pe(),r=Y();function i(){n.info({title:`温馨提醒`,content:`这是 info 弹窗`,onConfirm:()=>r(`你点了确定`)})}function a(){n.success({title:`操作成功`,content:`这是 success 弹窗`,onConfirm:()=>r(`你点了确定`)})}function o(){n.warning({title:`风险提醒`,content:`这是 warning 弹窗`,onConfirm:()=>r(`你点了确定`)})}function c(){n.error({title:`操作失败`,content:`这是 error 弹窗`,onConfirm:()=>r(`你点了确定`)})}function l(){n.confirm({title:`确认操作`,content:`这是 confirm 弹窗`,onConfirm:()=>r(`确认操作`),onCancel:()=>r(`取消操作`)})}return(e,n)=>(u(),v(`div`,Ji,[s(D,{onClick:i},{default:_(()=>[...n[0]||(n[0]=[t(` Info `,-1)])]),_:1}),s(D,{variant:`outline`,onClick:a},{default:_(()=>[...n[1]||(n[1]=[t(` Success `,-1)])]),_:1}),s(D,{variant:`outline`,onClick:o},{default:_(()=>[...n[2]||(n[2]=[t(` Warning `,-1)])]),_:1}),s(D,{variant:`outline`,onClick:c},{default:_(()=>[...n[3]||(n[3]=[t(` Error `,-1)])]),_:1}),s(D,{variant:`secondary`,onClick:l},{default:_(()=>[...n[4]||(n[4]=[t(` Confirm `,-1)])]),_:1})]))}}),Xi=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../../toast'
import { useModal } from '../index'

const modal = useModal()
const toast = useToast()

function showInfo() {
  modal.info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
    onConfirm: () => toast('你点了确定'),
  })
}

function showSuccess() {
  modal.success({
    title: '操作成功',
    content: '这是 success 弹窗',
    onConfirm: () => toast('你点了确定'),
  })
}

function showWarning() {
  modal.warning({
    title: '风险提醒',
    content: '这是 warning 弹窗',
    onConfirm: () => toast('你点了确定'),
  })
}

function showError() {
  modal.error({
    title: '操作失败',
    content: '这是 error 弹窗',
    onConfirm: () => toast('你点了确定'),
  })
}

function showConfirm() {
  modal.confirm({
    title: '确认操作',
    content: '这是 confirm 弹窗',
    onConfirm: () => toast('确认操作'),
    onCancel: () => toast('取消操作'),
  })
}
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="showInfo">
      Info
    </FaButton>
    <FaButton variant="outline" @click="showSuccess">
      Success
    </FaButton>
    <FaButton variant="outline" @click="showWarning">
      Warning
    </FaButton>
    <FaButton variant="outline" @click="showError">
      Error
    </FaButton>
    <FaButton variant="secondary" @click="showConfirm">
      Confirm
    </FaButton>
  </div>
</template>
`,Zi=e({__name:`_event`,setup(e){let r=n(!1),i=Y();function a(e,t){i(`beforeClose: ${e}`),window.setTimeout(t,600)}return(e,n)=>(u(),v(h,null,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[8]||(n[8]=[t(` 打开弹窗 `,-1)])]),_:1}),s(I,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e),title:`触发事件`,"show-cancel-button":``,"before-close":a,onOpen:n[2]||(n[2]=e=>o(i)(`open`)),onOpened:n[3]||(n[3]=e=>o(i)(`opened`)),onClose:n[4]||(n[4]=e=>o(i)(`close`)),onClosed:n[5]||(n[5]=e=>o(i)(`closed`)),onConfirm:n[6]||(n[6]=e=>o(i)(`confirm`)),onCancel:n[7]||(n[7]=e=>o(i)(`cancel`))},{default:_(()=>[...n[9]||(n[9]=[b(`div`,{class:`text-sm text-muted-foreground`},` 打开、关闭、确认、取消和动画完成等事件都会触发 toast。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),Qi=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../../toast'
import FaModal from '../index.vue'

const open = shallowRef(false)
const toast = useToast()

function handleBeforeClose(action: 'confirm' | 'cancel' | 'close', done: () => void) {
  toast(\`beforeClose: \${action}\`)
  window.setTimeout(done, 600)
}
<\/script>

<template>
  <FaButton @click="open = true">
    打开弹窗
  </FaButton>
  <FaModal
    v-model="open"
    title="触发事件"
    show-cancel-button
    :before-close="handleBeforeClose"
    @open="toast('open')"
    @opened="toast('opened')"
    @close="toast('close')"
    @closed="toast('closed')"
    @confirm="toast('confirm')"
    @cancel="toast('cancel')"
  >
    <div class="text-sm text-muted-foreground">
      打开、关闭、确认、取消和动画完成等事件都会触发 toast。
    </div>
  </FaModal>
</template>
`,$i=e({__name:`_functional`,setup(e){let n=Y(),{open:r}=pe().create({title:`函数式调用`,description:`通过 useModal().create() 创建弹窗。`,content:a(`div`,{class:`text-sm text-muted-foreground leading-6`},`这里是函数式调用渲染的内容。`),showCancelButton:!0,onConfirm:()=>n(`确认操作`),onCancel:()=>n(`取消操作`)});return(e,n)=>(u(),c(D,{onClick:o(r)},{default:_(()=>[...n[0]||(n[0]=[t(` 打开弹窗 `,-1)])]),_:1},8,[`onClick`]))}}),ea=`<script setup lang="ts">
import { h } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../../toast'
import { useModal } from '../index'

const toast = useToast()

const { open } = useModal().create({
  title: '函数式调用',
  description: '通过 useModal().create() 创建弹窗。',
  content: h('div', { class: 'text-sm text-muted-foreground leading-6' }, '这里是函数式调用渲染的内容。'),
  showCancelButton: true,
  onConfirm: () => toast('确认操作'),
  onCancel: () => toast('取消操作'),
})
<\/script>

<template>
  <FaButton @click="open">
    打开弹窗
  </FaButton>
</template>
`,ta={class:`flex flex-wrap gap-2`},na=e({__name:`_header-footer`,setup(e){let r=n(!1),i=n(!1);return(e,n)=>(u(),v(h,null,[b(`div`,ta,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[4]||(n[4]=[t(` 隐藏头部 `,-1)])]),_:1}),s(D,{variant:`outline`,onClick:n[1]||(n[1]=e=>i.value=!0)},{default:_(()=>[...n[5]||(n[5]=[t(` 隐藏底部 `,-1)])]),_:1})]),s(I,{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=e=>r.value=e),header:!1},{default:_(()=>[...n[6]||(n[6]=[b(`div`,{class:`text-sm text-muted-foreground`},` 当前弹窗隐藏了头部区域。 `,-1)])]),_:1},8,[`modelValue`]),s(I,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=e=>i.value=e),title:`隐藏底部`,footer:!1},{default:_(()=>[...n[7]||(n[7]=[b(`div`,{class:`text-sm text-muted-foreground`},` 当前弹窗隐藏了底部操作区域。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),ra=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const headerOpen = shallowRef(false)
const footerOpen = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="headerOpen = true">
      隐藏头部
    </FaButton>
    <FaButton variant="outline" @click="footerOpen = true">
      隐藏底部
    </FaButton>
  </div>

  <FaModal v-model="headerOpen" :header="false">
    <div class="text-sm text-muted-foreground">
      当前弹窗隐藏了头部区域。
    </div>
  </FaModal>
  <FaModal v-model="footerOpen" title="隐藏底部" :footer="false">
    <div class="text-sm text-muted-foreground">
      当前弹窗隐藏了底部操作区域。
    </div>
  </FaModal>
</template>
`,ia={class:`flex flex-wrap gap-2`},aa=e({__name:`_overlay-blur`,setup(e){let r=n(!1),i=n(!1);return(e,n)=>(u(),v(h,null,[b(`div`,ia,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[4]||(n[4]=[t(` 无遮罩 `,-1)])]),_:1}),s(D,{variant:`outline`,onClick:n[1]||(n[1]=e=>i.value=!0)},{default:_(()=>[...n[5]||(n[5]=[t(` 模糊遮罩 `,-1)])]),_:1})]),s(I,{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=e=>r.value=e),title:`无遮罩弹窗`,overlay:!1},{default:_(()=>[...n[6]||(n[6]=[b(`div`,{class:`text-sm text-muted-foreground`},` 设置 overlay 为 false 后，不显示背景遮罩。 `,-1)])]),_:1},8,[`modelValue`]),s(I,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=e=>i.value=e),title:`模糊遮罩`,"overlay-blur":``},{default:_(()=>[...n[7]||(n[7]=[b(`div`,{class:`text-sm text-muted-foreground`},` 设置 overlay-blur 后，背景遮罩会带有模糊效果。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),oa=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const overlayOpen = shallowRef(false)
const blurOpen = shallowRef(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaButton @click="overlayOpen = true">
      无遮罩
    </FaButton>
    <FaButton variant="outline" @click="blurOpen = true">
      模糊遮罩
    </FaButton>
  </div>

  <FaModal v-model="overlayOpen" title="无遮罩弹窗" :overlay="false">
    <div class="text-sm text-muted-foreground">
      设置 overlay 为 false 后，不显示背景遮罩。
    </div>
  </FaModal>
  <FaModal v-model="blurOpen" title="模糊遮罩" overlay-blur>
    <div class="text-sm text-muted-foreground">
      设置 overlay-blur 后，背景遮罩会带有模糊效果。
    </div>
  </FaModal>
</template>
`,sa={class:`pr-8 flex gap-3 items-start`},ca={class:`flex gap-2 w-full justify-end`},la=[{title:`基础`,component:Vi,componentRaw:Hi},{title:`标题描述`,component:e({__name:`_title-description`,setup(e){let r=n(!1);return(e,n)=>(u(),v(h,null,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[2]||(n[2]=[t(` 打开弹窗 `,-1)])]),_:1}),s(I,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e),title:`账号安全验证`,description:`继续操作前，请确认当前操作由本人发起。`},{default:_(()=>[...n[3]||(n[3]=[b(`div`,{class:`text-sm text-muted-foreground`},` 描述会显示在标题下方，用于补充说明弹窗目的。 `,-1)])]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaModal from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开弹窗
  </FaButton>
  <FaModal v-model="open" title="账号安全验证" description="继续操作前，请确认当前操作由本人发起。">
    <div class="text-sm text-muted-foreground">
      描述会显示在标题下方，用于补充说明弹窗目的。
    </div>
  </FaModal>
</template>
`},{title:`关闭/最大化/拖拽`,component:zi,componentRaw:Bi},{title:`居中/边框/载入`,component:Wi,componentRaw:Gi},{title:`遮罩/模糊`,component:aa,componentRaw:oa},{title:`显示/隐藏头部底部`,component:na,componentRaw:ra},{title:`插槽`,component:e({__name:`_slot`,setup(e){let r=n(!1);return(e,n)=>(u(),v(h,null,[s(D,{onClick:n[0]||(n[0]=e=>r.value=!0)},{default:_(()=>[...n[4]||(n[4]=[t(` 打开弹窗 `,-1)])]),_:1}),s(I,{modelValue:r.value,"onUpdate:modelValue":n[3]||(n[3]=e=>r.value=e)},{header:_(()=>[b(`div`,sa,[s(V,{name:`i-lucide:message-square-warning`,class:`text-primary mt-0.5 size-5`}),n[5]||(n[5]=b(`div`,null,[b(`div`,{class:`font-semibold`},` 自定义头部 `),b(`div`,{class:`text-sm text-muted-foreground`},` 使用 header 插槽替换默认标题。 `)],-1))])]),footer:_(()=>[b(`div`,ca,[s(D,{variant:`outline`,onClick:n[1]||(n[1]=e=>r.value=!1)},{default:_(()=>[...n[6]||(n[6]=[t(` 取消 `,-1)])]),_:1}),s(D,{onClick:n[2]||(n[2]=e=>r.value=!1)},{default:_(()=>[...n[7]||(n[7]=[t(` 保存 `,-1)])]),_:1})])]),default:_(()=>[n[8]||(n[8]=b(`div`,{class:`text-sm text-muted-foreground`},` 这里是默认插槽内容。 `,-1))]),_:1},8,[`modelValue`])],64))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaModal from '../index.vue'

const open = shallowRef(false)
<\/script>

<template>
  <FaButton @click="open = true">
    打开弹窗
  </FaButton>
  <FaModal v-model="open">
    <template #header>
      <div class="pr-8 flex gap-3 items-start">
        <FaIcon name="i-lucide:message-square-warning" class="text-primary mt-0.5 size-5" />
        <div>
          <div class="font-semibold">
            自定义头部
          </div>
          <div class="text-sm text-muted-foreground">
            使用 header 插槽替换默认标题。
          </div>
        </div>
      </div>
    </template>

    <div class="text-sm text-muted-foreground">
      这里是默认插槽内容。
    </div>

    <template #footer>
      <div class="flex gap-2 w-full justify-end">
        <FaButton variant="outline" @click="open = false">
          取消
        </FaButton>
        <FaButton @click="open = false">
          保存
        </FaButton>
      </div>
    </template>
  </FaModal>
</template>
`},{title:`自定义样式`,component:Ki,componentRaw:qi},{title:`触发事件`,component:Zi,componentRaw:Qi},{title:`对话框`,component:Yi,componentRaw:Xi},{title:`函数式调用`,component:$i,componentRaw:ea}],ua=[{title:`基础`,component:e({__name:`_basic`,setup(e){let t=y(0);return(e,n)=>(u(),c(H,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(0)
<\/script>

<template>
  <FaNumberField v-model="value" />
</template>
`},{title:`最大值/最小值`,component:e({__name:`_min-max`,setup(e){let t=y(5);return(e,n)=>(u(),c(H,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),min:0,max:10},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(5)
<\/script>

<template>
  <FaNumberField v-model="value" :min="0" :max="10" />
</template>
`},{title:`步长`,component:e({__name:`_step`,setup(e){let t=y(0);return(e,n)=>(u(),c(H,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),step:.1},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(0)
<\/script>

<template>
  <FaNumberField v-model="value" :step="0.1" />
</template>
`},{title:`禁用`,component:e({__name:`_disabled`,setup(e){let t=y(50);return(e,n)=>(u(),c(H,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:``},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(50)
<\/script>

<template>
  <FaNumberField v-model="value" disabled />
</template>
`}],da=e({__name:`_basic`,setup(e){return(e,t)=>(u(),c(me,{title:`页面标题`}))}}),fa=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageHeader from '../index.vue'
<\/script>

<template>
  <FaPageHeader title="页面标题" />
</template>
`,pa=e({__name:`_custom-style`,setup(e){return(e,n)=>(u(),c(me,{title:`自定义样式`,description:`通过 class、main-class 和 default-class 调整布局和外观。`,class:`border rounded-lg bg-muted/40`,"main-class":`flex-[1_1_60%]`,"default-class":`flex gap-2`},{default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[0]||(n[0]=[t(` 取消 `,-1)])]),_:1}),s(D,null,{default:_(()=>[...n[1]||(n[1]=[t(` 保存 `,-1)])]),_:1})]),_:1}))}}),ma=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaPageHeader from '../index.vue'
<\/script>

<template>
  <FaPageHeader
    title="自定义样式"
    description="通过 class、main-class 和 default-class 调整布局和外观。"
    class="border rounded-lg bg-muted/40"
    main-class="flex-[1_1_60%]"
    default-class="flex gap-2"
  >
    <FaButton variant="outline">
      取消
    </FaButton>
    <FaButton>
      保存
    </FaButton>
  </FaPageHeader>
</template>
`,ha=e({__name:`_description`,setup(e){return(e,t)=>(u(),c(me,{title:`用户管理`,description:`管理系统用户信息和权限配置。`}))}}),ga=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageHeader from '../index.vue'
<\/script>

<template>
  <FaPageHeader title="用户管理" description="管理系统用户信息和权限配置。" />
</template>
`,_a={class:`flex gap-2 items-center`},va=[{title:`基础`,component:da,componentRaw:fa},{title:`描述`,component:ha,componentRaw:ga},{title:`插槽`,component:e({__name:`_slot`,setup(e){return(e,n)=>(u(),c(me,null,{title:_(()=>[b(`div`,_a,[s(V,{name:`i-lucide:user-round-cog`,class:`text-primary size-6`}),n[0]||(n[0]=t(` 用户管理 `,-1))])]),description:_(()=>[...n[1]||(n[1]=[b(`p`,null,`提供 title、description 和右侧操作区域插槽。`,-1)])]),default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[s(V,{name:`i-lucide:plus`}),n[2]||(n[2]=t(` 新增用户 `,-1))]),_:1})]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaPageHeader from '../index.vue'
<\/script>

<template>
  <FaPageHeader>
    <template #title>
      <div class="flex gap-2 items-center">
        <FaIcon name="i-lucide:user-round-cog" class="text-primary size-6" />
        用户管理
      </div>
    </template>
    <template #description>
      <p>提供 title、description 和右侧操作区域插槽。</p>
    </template>
    <FaButton variant="outline">
      <FaIcon name="i-lucide:plus" />
      新增用户
    </FaButton>
  </FaPageHeader>
</template>
`},{title:`自定义样式`,component:pa,componentRaw:ma}],ya=e({__name:`_basic`,setup(e){return(e,n)=>(u(),c(fe,null,{default:_(()=>[...n[0]||(n[0]=[t(` PageMain 是最常用的页面内容容器，几乎所有页面都会使用到。 `,-1)])]),_:1}))}}),ba=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageMain from '../index.vue'
<\/script>

<template>
  <FaPageMain>
    PageMain 是最常用的页面内容容器，几乎所有页面都会使用到。
  </FaPageMain>
</template>
`,xa=e({__name:`_collapse`,setup(e){return(e,t)=>(u(),c(fe,{title:`带展开/收起功能`,collaspe:``,height:`100px`},{default:_(()=>[...t[0]||(t[0]=[b(`div`,{class:`space-y-4`},[b(`h3`,{class:`text-2xl font-bold`},` Fantastic-admin `),b(`p`,{class:`text-sm text-muted-foreground`},` 设置 collaspe 后，内容区域会在指定高度折叠。 `),b(`p`,null,`鼠标移入内容底部，可以看到展开和收起按钮。`),b(`p`,null,`这是一段用于撑开内容高度的文本。`),b(`p`,null,`继续补充一些内容，让折叠效果更明显。`)],-1)])]),_:1}))}}),Sa=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageMain from '../index.vue'
<\/script>

<template>
  <FaPageMain title="带展开/收起功能" collaspe height="100px">
    <div class="space-y-4">
      <h3 class="text-2xl font-bold">
        Fantastic-admin
      </h3>
      <p class="text-sm text-muted-foreground">
        设置 collaspe 后，内容区域会在指定高度折叠。
      </p>
      <p>鼠标移入内容底部，可以看到展开和收起按钮。</p>
      <p>这是一段用于撑开内容高度的文本。</p>
      <p>继续补充一些内容，让折叠效果更明显。</p>
    </div>
  </FaPageMain>
</template>
`,Ca={class:`flex-center-between`},wa=[{title:`基础`,component:ya,componentRaw:ba},{title:`标题`,component:e({__name:`_title`,setup(e){return(e,n)=>(u(),c(fe,{title:`你可以设置一个自定义的标题`},{default:_(()=>[...n[0]||(n[0]=[t(` 这里放页面内容。 `,-1)])]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaPageMain from '../index.vue'
<\/script>

<template>
  <FaPageMain title="你可以设置一个自定义的标题">
    这里放页面内容。
  </FaPageMain>
</template>
`},{title:`插槽`,component:e({__name:`_slot`,setup(e){return(e,n)=>(u(),c(fe,null,{title:_(()=>[b(`div`,Ca,[n[1]||(n[1]=t(` 通过 slot 设置标题 `,-1)),s(D,{variant:`outline`,size:`sm`},{default:_(()=>[...n[0]||(n[0]=[t(` 还可以放置自定义按钮 `,-1)])]),_:1})])]),default:_(()=>[n[2]||(n[2]=t(` 这里放页面内容。 `,-1))]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaPageMain from '../index.vue'
<\/script>

<template>
  <FaPageMain>
    <template #title>
      <div class="flex-center-between">
        通过 slot 设置标题
        <FaButton variant="outline" size="sm">
          还可以放置自定义按钮
        </FaButton>
      </div>
    </template>
    这里放页面内容。
  </FaPageMain>
</template>
`},{title:`折叠`,component:xa,componentRaw:Sa}],Ta=e({__name:`_basic`,setup(e){let t=y(1),n=y(10),r=y(100);return(e,i)=>(u(),c(ae,{page:t.value,"onUpdate:page":i[0]||(i[0]=e=>t.value=e),size:n.value,"onUpdate:size":i[1]||(i[1]=e=>n.value=e),total:r.value},null,8,[`page`,`size`,`total`]))}}),Ea=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaPagination from '../index.vue'

const page = ref(1)
const size = ref(10)
const total = ref(100)
<\/script>

<template>
  <FaPagination v-model:page="page" v-model:size="size" :total="total" />
</template>
`,Da={class:`space-y-3`},Oa={class:`text-sm text-muted-foreground`},ka=e({__name:`_event`,setup(e){let t=y(1),n=y(10),r=y(100),i=y(`等待分页操作`);function a(e){i.value=`当前页码切换为：${e}`}function o(e){i.value=`每页条数切换为：${e}`}return(e,c)=>(u(),v(`div`,Da,[s(ae,{page:t.value,"onUpdate:page":c[0]||(c[0]=e=>t.value=e),size:n.value,"onUpdate:size":c[1]||(c[1]=e=>n.value=e),total:r.value,onPageChange:a,onSizeChange:o},null,8,[`page`,`size`,`total`]),b(`div`,Oa,d(i.value),1)]))}}),Aa=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaPagination from '../index.vue'

const page = ref(1)
const size = ref(10)
const total = ref(100)
const message = ref('等待分页操作')

function handlePageChange(value: number) {
  message.value = \`当前页码切换为：\${value}\`
}

function handleSizeChange(value: number) {
  message.value = \`每页条数切换为：\${value}\`
}
<\/script>

<template>
  <div class="space-y-3">
    <FaPagination
      v-model:page="page"
      v-model:size="size"
      :total="total"
      @page-change="handlePageChange"
      @size-change="handleSizeChange"
    />
    <div class="text-sm text-muted-foreground">
      {{ message }}
    </div>
  </div>
</template>
`,ja={class:`space-y-4`},Ma=[{title:`基础`,component:Ta,componentRaw:Ea},{title:`布局`,component:e({__name:`_layout`,setup(e){let t=y(1),n=y(10),r=y(100);return(e,i)=>(u(),v(`div`,ja,[s(ae,{page:t.value,"onUpdate:page":i[0]||(i[0]=e=>t.value=e),size:n.value,"onUpdate:size":i[1]||(i[1]=e=>n.value=e),total:r.value,layout:`jumper, pager, ->, total, sizes`},null,8,[`page`,`size`,`total`]),s(ae,{page:t.value,"onUpdate:page":i[2]||(i[2]=e=>t.value=e),size:n.value,"onUpdate:size":i[3]||(i[3]=e=>n.value=e),total:r.value,layout:`pager`},null,8,[`page`,`size`,`total`])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaPagination from '../index.vue'

const page = ref(1)
const size = ref(10)
const total = ref(100)
<\/script>

<template>
  <div class="space-y-4">
    <FaPagination v-model:page="page" v-model:size="size" :total="total" layout="jumper, pager, ->, total, sizes" />
    <FaPagination v-model:page="page" v-model:size="size" :total="total" layout="pager" />
  </div>
</template>
`},{title:`事件`,component:ka,componentRaw:Aa}],Na={class:`flex-col w-80`},Pa=e({__name:`_basic`,setup(e){let t=y(``);return(e,n)=>(u(),v(`div`,Na,[s(T,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入密码`,class:`w-full`},null,8,[`modelValue`]),s(ue,{password:t.value,class:`mt-2`},null,8,[`password`])]))}}),Fa=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../../input/index.vue'
import FaPasswordStrength from '../index.vue'

const password = ref('')
<\/script>

<template>
  <div class="flex-col w-80">
    <FaInput v-model="password" placeholder="请输入密码" class="w-full" />
    <FaPasswordStrength :password="password" class="mt-2" />
  </div>
</template>
`,Ia={class:`flex-col w-80`},La=[{title:`基础`,component:Pa,componentRaw:Fa},{title:`自定义规则`,component:e({__name:`_custom-rule`,setup(e){let t=y(``),n=[{label:`长度至少为 10 个字符`,rule:e=>e.length>=10},{label:`包含大写字母`,rule:e=>/[A-Z]/.test(e)},{label:`包含数字`,rule:e=>/\d/.test(e)},{label:`包含特殊字符`,rule:e=>/[^A-Z0-9]/i.test(e)}],r=[{min:0,color:`bg-red-500`},{min:2,color:`bg-yellow-500`},{min:4,color:`bg-green-500`}];return(e,i)=>(u(),v(`div`,Ia,[s(T,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),placeholder:`请输入密码`,class:`w-full`},null,8,[`modelValue`]),s(ue,{password:t.value,rules:n,"color-thresholds":r,class:`mt-2`},null,8,[`password`])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaInput from '../../input/index.vue'
import FaPasswordStrength from '../index.vue'

const password = ref('')

const rules = [
  { label: '长度至少为 10 个字符', rule: (value: string) => value.length >= 10 },
  { label: '包含大写字母', rule: (value: string) => /[A-Z]/.test(value) },
  { label: '包含数字', rule: (value: string) => /\\d/.test(value) },
  { label: '包含特殊字符', rule: (value: string) => /[^A-Z0-9]/i.test(value) },
]

const colorThresholds = [
  { min: 0, color: 'bg-red-500' },
  { min: 2, color: 'bg-yellow-500' },
  { min: 4, color: 'bg-green-500' },
]
<\/script>

<template>
  <div class="flex-col w-80">
    <FaInput v-model="password" placeholder="请输入密码" class="w-full" />
    <FaPasswordStrength
      :password="password"
      :rules="rules"
      :color-thresholds="colorThresholds"
      class="mt-2"
    />
  </div>
</template>
`}],Ra={class:`flex flex-wrap gap-2`},za=e({__name:`_align`,setup(e){return(e,n)=>(u(),v(`div`,Ra,[s(q,{align:`start`},{panel:_(()=>[...n[1]||(n[1]=[b(`div`,{class:`text-sm`},` 起始位置对齐 `,-1)])]),default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[0]||(n[0]=[t(` Start `,-1)])]),_:1})]),_:1}),s(q,{align:`center`},{panel:_(()=>[...n[3]||(n[3]=[b(`div`,{class:`text-sm`},` 居中对齐 `,-1)])]),default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[2]||(n[2]=[t(` Center `,-1)])]),_:1})]),_:1}),s(q,{align:`end`},{panel:_(()=>[...n[5]||(n[5]=[b(`div`,{class:`text-sm`},` 结束位置对齐 `,-1)])]),default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[4]||(n[4]=[t(` End `,-1)])]),_:1})]),_:1})]))}}),Ba=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaPopover from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaPopover align="start">
      <FaButton variant="outline">
        Start
      </FaButton>
      <template #panel>
        <div class="text-sm">
          起始位置对齐
        </div>
      </template>
    </FaPopover>
    <FaPopover align="center">
      <FaButton variant="outline">
        Center
      </FaButton>
      <template #panel>
        <div class="text-sm">
          居中对齐
        </div>
      </template>
    </FaPopover>
    <FaPopover align="end">
      <FaButton variant="outline">
        End
      </FaButton>
      <template #panel>
        <div class="text-sm">
          结束位置对齐
        </div>
      </template>
    </FaPopover>
  </div>
</template>
`,Va=e({__name:`_basic`,setup(e){return(e,n)=>(u(),c(q,null,{panel:_(()=>[...n[1]||(n[1]=[b(`div`,{class:`flex h-30 w-60 items-center justify-center`},` 面板内容 `,-1)])]),default:_(()=>[s(D,null,{default:_(()=>[n[0]||(n[0]=t(` 浮动面板 `,-1)),s(V,{name:`i-ep:caret-bottom`})]),_:1})]),_:1}))}}),Ha=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaPopover from '../index.vue'
<\/script>

<template>
  <FaPopover>
    <FaButton>
      浮动面板
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
    <template #panel>
      <div class="flex h-30 w-60 items-center justify-center">
        面板内容
      </div>
    </template>
  </FaPopover>
</template>
`,Ua={class:`flex flex-wrap gap-2`},Wa=e({__name:`_offset`,setup(e){return(e,n)=>(u(),v(`div`,Ua,[s(q,{"side-offset":12},{panel:_(()=>[...n[1]||(n[1]=[b(`div`,{class:`text-sm`},` 与触发元素保持更大距离 `,-1)])]),default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[0]||(n[0]=[t(` Side offset `,-1)])]),_:1})]),_:1}),s(q,{align:`start`,"align-offset":24},{panel:_(()=>[...n[3]||(n[3]=[b(`div`,{class:`text-sm`},` 沿对齐方向偏移 `,-1)])]),default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[2]||(n[2]=[t(` Align offset `,-1)])]),_:1})]),_:1}),s(q,{"side-offset":12,"align-offset":-24},{panel:_(()=>[...n[5]||(n[5]=[b(`div`,{class:`text-sm`},` 同时设置两种偏移 `,-1)])]),default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[4]||(n[4]=[t(` Both `,-1)])]),_:1})]),_:1})]))}}),Ga=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaPopover from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaPopover :side-offset="12">
      <FaButton variant="outline">
        Side offset
      </FaButton>
      <template #panel>
        <div class="text-sm">
          与触发元素保持更大距离
        </div>
      </template>
    </FaPopover>
    <FaPopover align="start" :align-offset="24">
      <FaButton variant="outline">
        Align offset
      </FaButton>
      <template #panel>
        <div class="text-sm">
          沿对齐方向偏移
        </div>
      </template>
    </FaPopover>
    <FaPopover :side-offset="12" :align-offset="-24">
      <FaButton variant="outline">
        Both
      </FaButton>
      <template #panel>
        <div class="text-sm">
          同时设置两种偏移
        </div>
      </template>
    </FaPopover>
  </div>
</template>
`,Ka={class:`flex flex-wrap gap-2`},qa=[{title:`基础`,component:Va,componentRaw:Ha},{title:`弹出方向`,component:e({__name:`_side`,setup(e){return(e,n)=>(u(),v(`div`,Ka,[s(q,{side:`top`},{panel:_(()=>[...n[1]||(n[1]=[b(`div`,{class:`text-sm`},` 从上方弹出 `,-1)])]),default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[0]||(n[0]=[t(` Top `,-1)])]),_:1})]),_:1}),s(q,{side:`right`},{panel:_(()=>[...n[3]||(n[3]=[b(`div`,{class:`text-sm`},` 从右侧弹出 `,-1)])]),default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[2]||(n[2]=[t(` Right `,-1)])]),_:1})]),_:1}),s(q,{side:`bottom`},{panel:_(()=>[...n[5]||(n[5]=[b(`div`,{class:`text-sm`},` 从下方弹出 `,-1)])]),default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[4]||(n[4]=[t(` Bottom `,-1)])]),_:1})]),_:1}),s(q,{side:`left`},{panel:_(()=>[...n[7]||(n[7]=[b(`div`,{class:`text-sm`},` 从左侧弹出 `,-1)])]),default:_(()=>[s(D,{variant:`outline`},{default:_(()=>[...n[6]||(n[6]=[t(` Left `,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaPopover from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <FaPopover side="top">
      <FaButton variant="outline">
        Top
      </FaButton>
      <template #panel>
        <div class="text-sm">
          从上方弹出
        </div>
      </template>
    </FaPopover>
    <FaPopover side="right">
      <FaButton variant="outline">
        Right
      </FaButton>
      <template #panel>
        <div class="text-sm">
          从右侧弹出
        </div>
      </template>
    </FaPopover>
    <FaPopover side="bottom">
      <FaButton variant="outline">
        Bottom
      </FaButton>
      <template #panel>
        <div class="text-sm">
          从下方弹出
        </div>
      </template>
    </FaPopover>
    <FaPopover side="left">
      <FaButton variant="outline">
        Left
      </FaButton>
      <template #panel>
        <div class="text-sm">
          从左侧弹出
        </div>
      </template>
    </FaPopover>
  </div>
</template>
`},{title:`对齐方式`,component:za,componentRaw:Ba},{title:`偏移`,component:Wa,componentRaw:Ga}],Ja=[{title:`基础`,component:e({__name:`_basic`,setup(e){return(e,t)=>(u(),c(le,{"model-value":33}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaProgress from '../index.vue'
<\/script>

<template>
  <FaProgress :model-value="33" />
</template>
`}],Ya={class:`gap-4 grid`},Xa={class:`text-sm text-muted-foreground`},Za=e({__name:`_basic`,setup(e){let t=y(`comfortable`),n=[{label:`默认`,value:`default`},{label:`舒适`,value:`comfortable`},{label:`紧凑`,value:`compact`}];return(e,r)=>(u(),v(`div`,Ya,[s(ie,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),options:n},null,8,[`modelValue`]),s(ie,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=e=>t.value=e),options:n,class:`flex`},null,8,[`modelValue`]),b(`div`,Xa,` 当前值：`+d(t.value),1)]))}}),Qa=`<script setup lang="ts">
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
`,$a={class:`gap-4 grid`},eo={class:`gap-1 grid min-w-0`},to={class:`flex gap-2 items-center`},no={class:`text-sm font-medium truncate`},ro={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},io={class:`text-xs text-muted-foreground leading-5`},ao={class:`text-sm text-muted-foreground`},oo=e({__name:`_custom-option`,setup(e){let t=y(`balanced`),n=[{label:`专注模式`,value:`focus`,badge:`录入`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,badge:`推荐`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,badge:`大屏`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(e,r)=>(u(),v(`div`,$a,[s(ie,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),options:n,class:`gap-2 md:grid-cols-3`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:_(({option:e,checked:t,disabled:n})=>[b(`div`,{class:i([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[t?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,n&&`opacity-60`]])},[b(`div`,eo,[b(`div`,to,[b(`span`,no,d(e.label),1),b(`span`,ro,d(e.badge),1)]),b(`div`,io,d(e.description),1)]),b(`span`,{class:i([`text-xs font-medium shrink-0`,t?`text-primary`:`text-muted-foreground`])},d(t?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),b(`div`,ao,` 当前值：`+d(t.value),1)]))}}),so=`<script setup lang="ts">
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
`,co={class:`gap-4 grid`},lo={class:`text-sm text-muted-foreground`},uo=[{title:`基础`,component:Za,componentRaw:Qa},{title:`带描述和禁用态`,component:e({__name:`_description-disabled`,setup(e){let t=y(`growth`),n=[{label:`创业版`,value:`starter`,description:`适合 1-10 人小团队，保留核心能力。`},{label:`成长版`,value:`growth`,description:`适合多角色协作，支持审批与审计流程。`},{label:`企业版`,value:`enterprise`,description:`高级安全策略与 SSO 即将开放。`,disabled:!0}],r=p(()=>n.find(e=>e.value===t.value)?.label??``);return(e,i)=>(u(),v(`div`,co,[s(ie,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:n},null,8,[`modelValue`]),b(`div`,lo,` 已选套餐：`+d(r.value),1)]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`自定义选项内容`,component:oo,componentRaw:so}],fo=e({__name:`_basic`,setup(e){return(e,t)=>(u(),c(W,{class:`border rounded-md h-72 w-48`},{default:_(()=>[(u(),v(h,null,f(20,e=>b(`div`,{key:e,class:`text-sm p-4`},d(e),1)),64))]),_:1}))}}),po=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaScrollArea from '../index.vue'
<\/script>

<template>
  <FaScrollArea class="border rounded-md h-72 w-48">
    <div v-for="item in 20" :key="item" class="text-sm p-4">
      {{ item }}
    </div>
  </FaScrollArea>
</template>
`,mo=e({__name:`_hidden-scrollbar`,setup(e){return(e,t)=>(u(),c(W,{scrollbar:!1,class:`border rounded-md h-72 w-48`},{default:_(()=>[(u(),v(h,null,f(20,e=>b(`div`,{key:e,class:`text-sm p-4`},d(e),1)),64))]),_:1}))}}),ho=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaScrollArea from '../index.vue'
<\/script>

<template>
  <FaScrollArea :scrollbar="false" class="border rounded-md h-72 w-48">
    <div v-for="item in 20" :key="item" class="text-sm p-4">
      {{ item }}
    </div>
  </FaScrollArea>
</template>
`,go={class:`flex-center-start`},_o=[{title:`基础`,component:fo,componentRaw:po},{title:`水平滚动`,component:e({__name:`_horizontal`,setup(e){return(e,t)=>(u(),c(W,{horizontal:``,class:`overscroll-contain border rounded-md w-96`},{default:_(()=>[b(`div`,go,[(u(),v(h,null,f(20,e=>b(`div`,{key:e,class:`text-sm flex-center shrink-0 h-16 w-16`},d(e),1)),64))])]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaScrollArea from '../index.vue'
<\/script>

<template>
  <FaScrollArea horizontal class="overscroll-contain border rounded-md w-96">
    <div class="flex-center-start">
      <div v-for="item in 20" :key="item" class="text-sm flex-center shrink-0 h-16 w-16">
        {{ item }}
      </div>
    </div>
  </FaScrollArea>
</template>
`},{title:`隐藏滚动条`,component:mo,componentRaw:ho},{title:`遮罩`,component:e({__name:`_mask`,setup(e){return(e,t)=>(u(),c(W,{mask:``,class:`border rounded-md h-72 w-48`},{default:_(()=>[(u(),v(h,null,f(20,e=>b(`div`,{key:e,class:`text-sm p-4`},d(e),1)),64))]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaScrollArea from '../index.vue'
<\/script>

<template>
  <FaScrollArea mask class="border rounded-md h-72 w-48">
    <div v-for="item in 20" :key="item" class="text-sm p-4">
      {{ item }}
    </div>
  </FaScrollArea>
</template>
`}],vo={class:`gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]`},yo={class:`flex gap-2 col-end--1 justify-end`},bo=e({__name:`_background`,setup(e){let n=l({keyword:``,type:`all`,creator:``,channel:`all`,visibility:`all`,reviewer:``}),r=[{label:`全部类型`,value:`all`},{label:`公告`,value:`notice`},{label:`消息`,value:`message`}],i=[{label:`全部渠道`,value:`all`},{label:`站内`,value:`site`},{label:`邮件`,value:`email`},{label:`短信`,value:`sms`}],a=[{label:`全部范围`,value:`all`},{label:`公开`,value:`public`},{label:`内部`,value:`internal`},{label:`指定用户`,value:`specific`}];return(e,o)=>(u(),c(Q,{background:``},{default:_(({fold:e})=>[b(`div`,vo,[s(T,{modelValue:n.keyword,"onUpdate:modelValue":o[0]||(o[0]=e=>n.keyword=e),placeholder:`搜索标题`,class:`w-full`},null,8,[`modelValue`]),s(z,{modelValue:n.type,"onUpdate:modelValue":o[1]||(o[1]=e=>n.type=e),options:r,class:`w-full`},null,8,[`modelValue`]),g(s(T,{modelValue:n.creator,"onUpdate:modelValue":o[2]||(o[2]=e=>n.creator=e),placeholder:`创建人`,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(z,{modelValue:n.channel,"onUpdate:modelValue":o[3]||(o[3]=e=>n.channel=e),options:i,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(z,{modelValue:n.visibility,"onUpdate:modelValue":o[4]||(o[4]=e=>n.visibility=e),options:a,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(T,{modelValue:n.reviewer,"onUpdate:modelValue":o[5]||(o[5]=e=>n.reviewer=e),placeholder:`审核人`,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),b(`div`,yo,[s(D,null,{default:_(()=>[...o[6]||(o[6]=[t(`查询`,-1)])]),_:1}),s(D,{variant:`outline`},{default:_(()=>[...o[7]||(o[7]=[t(` 重置 `,-1)])]),_:1})])])]),_:1}))}}),xo=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaSearchBar from '../index.vue'

const form = reactive({
  keyword: '',
  type: 'all',
  creator: '',
  channel: 'all',
  visibility: 'all',
  reviewer: '',
})

const typeOptions = [
  { label: '全部类型', value: 'all' },
  { label: '公告', value: 'notice' },
  { label: '消息', value: 'message' },
]

const channelOptions = [
  { label: '全部渠道', value: 'all' },
  { label: '站内', value: 'site' },
  { label: '邮件', value: 'email' },
  { label: '短信', value: 'sms' },
]

const visibilityOptions = [
  { label: '全部范围', value: 'all' },
  { label: '公开', value: 'public' },
  { label: '内部', value: 'internal' },
  { label: '指定用户', value: 'specific' },
]
<\/script>

<template>
  <FaSearchBar background>
    <template #default="{ fold }">
      <div class="gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        <FaInput v-model="form.keyword" placeholder="搜索标题" class="w-full" />
        <FaSelect v-model="form.type" :options="typeOptions" class="w-full" />
        <FaInput v-show="!fold" v-model="form.creator" placeholder="创建人" class="w-full" />
        <FaSelect v-show="!fold" v-model="form.channel" :options="channelOptions" class="w-full" />
        <FaSelect v-show="!fold" v-model="form.visibility" :options="visibilityOptions" class="w-full" />
        <FaInput v-show="!fold" v-model="form.reviewer" placeholder="审核人" class="w-full" />
        <div class="flex gap-2 col-end--1 justify-end">
          <FaButton>查询</FaButton>
          <FaButton variant="outline">
            重置
          </FaButton>
        </div>
      </div>
    </template>
  </FaSearchBar>
</template>
`,So={class:`gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]`},Co={class:`flex gap-2 col-end--1 justify-end`},wo=e({__name:`_basic`,setup(e){let n=l({keyword:``,status:`all`,department:``,role:`all`,source:`all`,creator:``}),r=[{label:`全部状态`,value:`all`},{label:`启用`,value:`enabled`},{label:`禁用`,value:`disabled`}],i=[{label:`全部角色`,value:`all`},{label:`管理员`,value:`admin`},{label:`运营`,value:`operator`},{label:`访客`,value:`guest`}],a=[{label:`全部来源`,value:`all`},{label:`后台创建`,value:`admin`},{label:`用户注册`,value:`register`},{label:`批量导入`,value:`import`}];return(e,o)=>(u(),c(Q,null,{default:_(({fold:e})=>[b(`div`,So,[s(T,{modelValue:n.keyword,"onUpdate:modelValue":o[0]||(o[0]=e=>n.keyword=e),placeholder:`搜索用户名`,class:`w-full`},null,8,[`modelValue`]),s(z,{modelValue:n.status,"onUpdate:modelValue":o[1]||(o[1]=e=>n.status=e),options:r,class:`w-full`},null,8,[`modelValue`]),g(s(T,{modelValue:n.department,"onUpdate:modelValue":o[2]||(o[2]=e=>n.department=e),placeholder:`部门`,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(z,{modelValue:n.role,"onUpdate:modelValue":o[3]||(o[3]=e=>n.role=e),options:i,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(z,{modelValue:n.source,"onUpdate:modelValue":o[4]||(o[4]=e=>n.source=e),options:a,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(T,{modelValue:n.creator,"onUpdate:modelValue":o[5]||(o[5]=e=>n.creator=e),placeholder:`创建人`,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),b(`div`,Co,[s(D,null,{default:_(()=>[...o[6]||(o[6]=[t(`查询`,-1)])]),_:1}),s(D,{variant:`outline`},{default:_(()=>[...o[7]||(o[7]=[t(` 重置 `,-1)])]),_:1})])])]),_:1}))}}),To=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaSearchBar from '../index.vue'

const form = reactive({
  keyword: '',
  status: 'all',
  department: '',
  role: 'all',
  source: 'all',
  creator: '',
})

const statusOptions = [
  { label: '全部状态', value: 'all' },
  { label: '启用', value: 'enabled' },
  { label: '禁用', value: 'disabled' },
]

const roleOptions = [
  { label: '全部角色', value: 'all' },
  { label: '管理员', value: 'admin' },
  { label: '运营', value: 'operator' },
  { label: '访客', value: 'guest' },
]

const sourceOptions = [
  { label: '全部来源', value: 'all' },
  { label: '后台创建', value: 'admin' },
  { label: '用户注册', value: 'register' },
  { label: '批量导入', value: 'import' },
]
<\/script>

<template>
  <FaSearchBar>
    <template #default="{ fold }">
      <div class="gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        <FaInput v-model="form.keyword" placeholder="搜索用户名" class="w-full" />
        <FaSelect v-model="form.status" :options="statusOptions" class="w-full" />
        <FaInput v-show="!fold" v-model="form.department" placeholder="部门" class="w-full" />
        <FaSelect v-show="!fold" v-model="form.role" :options="roleOptions" class="w-full" />
        <FaSelect v-show="!fold" v-model="form.source" :options="sourceOptions" class="w-full" />
        <FaInput v-show="!fold" v-model="form.creator" placeholder="创建人" class="w-full" />
        <div class="flex gap-2 col-end--1 justify-end">
          <FaButton>查询</FaButton>
          <FaButton variant="outline">
            重置
          </FaButton>
        </div>
      </div>
    </template>
  </FaSearchBar>
</template>
`,Eo={class:`gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]`},Do={class:`flex gap-2 col-end--1 justify-end`},Oo=e({__name:`_custom-trigger`,setup(e){let n=l({keyword:``,status:`all`,tag:``,column:`all`,author:``,reviewer:``,publishTime:`all`}),r=[{label:`全部状态`,value:`all`},{label:`已发布`,value:`published`},{label:`草稿`,value:`draft`}],i=[{label:`全部栏目`,value:`all`},{label:`产品动态`,value:`product`},{label:`帮助中心`,value:`help`},{label:`活动公告`,value:`campaign`}],a=[{label:`发布时间`,value:`all`},{label:`今天`,value:`today`},{label:`近 7 天`,value:`week`},{label:`近 30 天`,value:`month`}];return(e,o)=>(u(),c(Q,{"show-toggle":!1},{default:_(({fold:e,toggle:c})=>[b(`div`,Eo,[s(T,{modelValue:n.keyword,"onUpdate:modelValue":o[0]||(o[0]=e=>n.keyword=e),placeholder:`搜索文章`,class:`w-full`},null,8,[`modelValue`]),s(z,{modelValue:n.status,"onUpdate:modelValue":o[1]||(o[1]=e=>n.status=e),options:r,class:`w-full`},null,8,[`modelValue`]),g(s(T,{modelValue:n.tag,"onUpdate:modelValue":o[2]||(o[2]=e=>n.tag=e),placeholder:`标签`,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(z,{modelValue:n.column,"onUpdate:modelValue":o[3]||(o[3]=e=>n.column=e),options:i,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(T,{modelValue:n.author,"onUpdate:modelValue":o[4]||(o[4]=e=>n.author=e),placeholder:`作者`,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(T,{modelValue:n.reviewer,"onUpdate:modelValue":o[5]||(o[5]=e=>n.reviewer=e),placeholder:`审核人`,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(z,{modelValue:n.publishTime,"onUpdate:modelValue":o[6]||(o[6]=e=>n.publishTime=e),options:a,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),b(`div`,Do,[s(D,null,{default:_(()=>[...o[7]||(o[7]=[t(`查询`,-1)])]),_:1}),s(D,{variant:`outline`},{default:_(()=>[...o[8]||(o[8]=[t(` 重置 `,-1)])]),_:1}),s(D,{variant:`ghost`,onClick:c},{default:_(()=>[t(d(e?`展开`:`收起`)+` `,1),s(V,{name:e?`i-lucide:chevron-down`:`i-lucide:chevron-up`},null,8,[`name`])]),_:2},1032,[`onClick`])])])]),_:1}))}}),ko=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive } from 'vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaSearchBar from '../index.vue'

const form = reactive({
  keyword: '',
  status: 'all',
  tag: '',
  column: 'all',
  author: '',
  reviewer: '',
  publishTime: 'all',
})

const statusOptions = [
  { label: '全部状态', value: 'all' },
  { label: '已发布', value: 'published' },
  { label: '草稿', value: 'draft' },
]

const columnOptions = [
  { label: '全部栏目', value: 'all' },
  { label: '产品动态', value: 'product' },
  { label: '帮助中心', value: 'help' },
  { label: '活动公告', value: 'campaign' },
]

const publishTimeOptions = [
  { label: '发布时间', value: 'all' },
  { label: '今天', value: 'today' },
  { label: '近 7 天', value: 'week' },
  { label: '近 30 天', value: 'month' },
]
<\/script>

<template>
  <FaSearchBar :show-toggle="false">
    <template #default="{ fold, toggle }">
      <div class="gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        <FaInput v-model="form.keyword" placeholder="搜索文章" class="w-full" />
        <FaSelect v-model="form.status" :options="statusOptions" class="w-full" />
        <FaInput v-show="!fold" v-model="form.tag" placeholder="标签" class="w-full" />
        <FaSelect v-show="!fold" v-model="form.column" :options="columnOptions" class="w-full" />
        <FaInput v-show="!fold" v-model="form.author" placeholder="作者" class="w-full" />
        <FaInput v-show="!fold" v-model="form.reviewer" placeholder="审核人" class="w-full" />
        <FaSelect v-show="!fold" v-model="form.publishTime" :options="publishTimeOptions" class="w-full" />
        <div class="flex gap-2 col-end--1 justify-end">
          <FaButton>查询</FaButton>
          <FaButton variant="outline">
            重置
          </FaButton>
          <FaButton variant="ghost" @click="toggle">
            {{ fold ? '展开' : '收起' }}
            <FaIcon :name="fold ? 'i-lucide:chevron-down' : 'i-lucide:chevron-up'" />
          </FaButton>
        </div>
      </div>
    </template>
  </FaSearchBar>
</template>
`,Ao={class:`gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]`},jo={class:`flex gap-2 col-end--1 justify-end`},Mo=[{title:`基础`,component:wo,componentRaw:To},{title:`默认展开`,component:e({__name:`_expanded`,setup(e){let r=l({keyword:``,status:`all`,owner:``,priority:`all`,category:`all`,project:``,participant:``}),i=n(!1),a=[{label:`全部状态`,value:`all`},{label:`待处理`,value:`pending`},{label:`已完成`,value:`done`}],o=[{label:`全部优先级`,value:`all`},{label:`高`,value:`high`},{label:`中`,value:`medium`},{label:`低`,value:`low`}],d=[{label:`全部分类`,value:`all`},{label:`需求`,value:`feature`},{label:`缺陷`,value:`bug`},{label:`优化`,value:`improvement`}];return(e,n)=>(u(),c(Q,{fold:i.value,"onUpdate:fold":n[7]||(n[7]=e=>i.value=e)},{default:_(({fold:e})=>[b(`div`,Ao,[s(T,{modelValue:r.keyword,"onUpdate:modelValue":n[0]||(n[0]=e=>r.keyword=e),placeholder:`搜索任务`,class:`w-full`},null,8,[`modelValue`]),s(z,{modelValue:r.status,"onUpdate:modelValue":n[1]||(n[1]=e=>r.status=e),options:a,class:`w-full`},null,8,[`modelValue`]),g(s(T,{modelValue:r.owner,"onUpdate:modelValue":n[2]||(n[2]=e=>r.owner=e),placeholder:`负责人`,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(z,{modelValue:r.priority,"onUpdate:modelValue":n[3]||(n[3]=e=>r.priority=e),options:o,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(z,{modelValue:r.category,"onUpdate:modelValue":n[4]||(n[4]=e=>r.category=e),options:d,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(T,{modelValue:r.project,"onUpdate:modelValue":n[5]||(n[5]=e=>r.project=e),placeholder:`所属项目`,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),g(s(T,{modelValue:r.participant,"onUpdate:modelValue":n[6]||(n[6]=e=>r.participant=e),placeholder:`参与人`,class:`w-full`},null,8,[`modelValue`]),[[m,!e]]),b(`div`,jo,[s(D,null,{default:_(()=>[...n[8]||(n[8]=[t(`查询`,-1)])]),_:1}),s(D,{variant:`outline`},{default:_(()=>[...n[9]||(n[9]=[t(` 重置 `,-1)])]),_:1})])])]),_:1},8,[`fold`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { reactive, shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaInput from '../../input/index.vue'
import FaSelect from '../../select/index.vue'
import FaSearchBar from '../index.vue'

const form = reactive({
  keyword: '',
  status: 'all',
  owner: '',
  priority: 'all',
  category: 'all',
  project: '',
  participant: '',
})

const fold = shallowRef(false)

const statusOptions = [
  { label: '全部状态', value: 'all' },
  { label: '待处理', value: 'pending' },
  { label: '已完成', value: 'done' },
]

const priorityOptions = [
  { label: '全部优先级', value: 'all' },
  { label: '高', value: 'high' },
  { label: '中', value: 'medium' },
  { label: '低', value: 'low' },
]

const categoryOptions = [
  { label: '全部分类', value: 'all' },
  { label: '需求', value: 'feature' },
  { label: '缺陷', value: 'bug' },
  { label: '优化', value: 'improvement' },
]
<\/script>

<template>
  <FaSearchBar v-model:fold="fold">
    <template #default="{ fold: isFold }">
      <div class="gap-3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        <FaInput v-model="form.keyword" placeholder="搜索任务" class="w-full" />
        <FaSelect v-model="form.status" :options="statusOptions" class="w-full" />
        <FaInput v-show="!isFold" v-model="form.owner" placeholder="负责人" class="w-full" />
        <FaSelect v-show="!isFold" v-model="form.priority" :options="priorityOptions" class="w-full" />
        <FaSelect v-show="!isFold" v-model="form.category" :options="categoryOptions" class="w-full" />
        <FaInput v-show="!isFold" v-model="form.project" placeholder="所属项目" class="w-full" />
        <FaInput v-show="!isFold" v-model="form.participant" placeholder="参与人" class="w-full" />
        <div class="flex gap-2 col-end--1 justify-end">
          <FaButton>查询</FaButton>
          <FaButton variant="outline">
            重置
          </FaButton>
        </div>
      </div>
    </template>
  </FaSearchBar>
</template>
`},{title:`背景`,component:bo,componentRaw:xo},{title:`自定义触发按钮`,component:Oo,componentRaw:ko}],No=e({__name:`_basic`,setup(e){let t=y(`1`),n=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,r)=>(u(),c(z,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),options:n},null,8,[`modelValue`]))}}),Po=`<script setup lang="ts">
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
`,Fo={class:`space-y-2`},Io=e({__name:`_disabled`,setup(e){let t=y(`1`),n=y(`1`),r=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`,disabled:!0},{label:`Option 3`,value:`3`}];return(e,i)=>(u(),v(`div`,Fo,[s(z,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:r,disabled:``},null,8,[`modelValue`]),s(z,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=e=>n.value=e),options:r},null,8,[`modelValue`])]))}}),Lo=`<script setup lang="ts">
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
`,Ro=e({__name:`_group`,setup(e){let t=y(`1`),n=[{label:`Group 1`,options:[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`}]},{label:`Group 2`,options:[{label:`Option 3`,value:`3`},{label:`Option 4`,value:`4`}]}];return(e,r)=>(u(),c(z,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),options:n},null,8,[`modelValue`]))}}),zo=`<script setup lang="ts">
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
`,Bo=e({__name:`_multiple`,setup(e){let t=y([]),n=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,r)=>(u(),c(z,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),options:n,multiple:``},null,8,[`modelValue`]))}}),Vo=`<script setup lang="ts">
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
`,Ho={class:`space-y-2`},Uo=[{title:`基础`,component:No,componentRaw:Po},{title:`组`,component:Ro,componentRaw:zo},{title:`多选`,component:Bo,componentRaw:Vo},{title:`定位模式`,component:e({__name:`_position`,setup(e){let t=y(`2`),n=y(`2`),r=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,i)=>(u(),v(`div`,Ho,[s(z,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),options:r,position:`popper`},null,8,[`modelValue`]),s(z,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=e=>n.value=e),options:r,position:`item-aligned`},null,8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
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
`},{title:`禁用`,component:Io,componentRaw:Lo}],Wo={class:`space-y-6`},Go=e({__name:`_alignment`,setup(e){let t=y([30]),n=y([30]);return(e,r)=>(u(),v(`div`,Wo,[s(K,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),"thumb-alignment":`contain`},null,8,[`modelValue`]),s(K,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e),"thumb-alignment":`overflow`},null,8,[`modelValue`])]))}}),Ko=`<script setup lang="ts">
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
`,qo=e({__name:`_basic`,setup(e){let t=y([30]);return(e,n)=>(u(),c(K,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]))}}),Jo=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([30])
<\/script>

<template>
  <FaSlider v-model="value" />
</template>
`,Yo={class:`space-y-6`},Xo=e({__name:`_inverted`,setup(e){let t=y([30]),n=y([30]);return(e,r)=>(u(),v(`div`,Yo,[s(K,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e)},null,8,[`modelValue`]),s(K,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e),inverted:``},null,8,[`modelValue`])]))}}),Zo=`<script setup lang="ts">
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
`,Qo=e({__name:`_range`,setup(e){let t=y([40]);return(e,n)=>(u(),c(K,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),min:20,max:80},null,8,[`modelValue`]))}}),$o=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([40])
<\/script>

<template>
  <FaSlider v-model="value" :min="20" :max="80" />
</template>
`,es=e({__name:`_step`,setup(e){let t=y([50]);return(e,n)=>(u(),c(K,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),step:10},null,8,[`modelValue`]))}}),ts=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([50])
<\/script>

<template>
  <FaSlider v-model="value" :step="10" />
</template>
`,ns={class:`space-y-6`},rs=[{title:`基础`,component:qo,componentRaw:Jo},{title:`垂直`,component:e({__name:`_vertical`,setup(e){let t=y([30]);return(e,n)=>(u(),c(K,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),orientation:`vertical`,class:`data-[orientation=vertical]:h-100`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([30])
<\/script>

<template>
  <FaSlider v-model="value" orientation="vertical" class="data-[orientation=vertical]:h-100" />
</template>
`},{title:`反转`,component:Xo,componentRaw:Zo},{title:`最大值/最小值`,component:Qo,componentRaw:$o},{title:`步长`,component:es,componentRaw:ts},{title:`对齐方式`,component:Go,componentRaw:Ko},{title:`提示`,component:e({__name:`_tooltip`,setup(e){let t=y([30]),n=y([70]);return(e,r)=>(u(),v(`div`,ns,[s(K,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e)},null,8,[`modelValue`]),s(K,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e),tooltip:!1},null,8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
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
`}],is=e({__name:`_basic`,setup(e){let t=y(!1);return(e,n)=>(u(),c(U,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,[`modelValue`]))}}),as=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSwitch from '../index.vue'

const checked = ref(false)
<\/script>

<template>
  <FaSwitch v-model="checked" />
</template>
`,os=e({__name:`_callback`,setup(e){let t=y(!1),n=pe();function r(){return new Promise(e=>{n.confirm({title:`确认信息`,content:`确认要切换当前状态吗？`,onConfirm:()=>{e(!0)},onCancel:()=>{e(!1)}})})}return(e,n)=>(u(),c(U,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),"before-change":r},null,8,[`modelValue`]))}}),ss=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import { useModal } from '../../modal'
import FaSwitch from '../index.vue'

const checked = ref(false)
const modal = useModal()

function handleBeforeChange() {
  return new Promise<boolean>((resolve) => {
    modal.confirm({
      title: '确认信息',
      content: '确认要切换当前状态吗？',
      onConfirm: () => {
        resolve(true)
      },
      onCancel: () => {
        resolve(false)
      },
    })
  })
}
<\/script>

<template>
  <FaSwitch v-model="checked" :before-change="handleBeforeChange" />
</template>
`,cs={class:`flex gap-4`},ls=[{title:`基础`,component:is,componentRaw:as},{title:`图标`,component:e({__name:`_icon`,setup(e){let t=y(!1);return(e,n)=>(u(),c(U,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),"on-icon":`ri:sun-line`,"off-icon":`ri:moon-line`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSwitch from '../index.vue'

const checked = ref(false)
<\/script>

<template>
  <FaSwitch v-model="checked" on-icon="ri:sun-line" off-icon="ri:moon-line" />
</template>
`},{title:`禁用`,component:e({__name:`_disabled`,setup(e){let t=y(!1),n=y(!0);return(e,r)=>(u(),v(`div`,cs,[s(U,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),disabled:``},null,8,[`modelValue`]),s(U,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e),disabled:``},null,8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSwitch from '../index.vue'

const off = ref(false)
const on = ref(true)
<\/script>

<template>
  <div class="flex gap-4">
    <FaSwitch v-model="off" disabled />
    <FaSwitch v-model="on" disabled />
  </div>
</template>
`},{title:`回调`,component:os,componentRaw:ss}],us=e({__name:`_basic`,setup(e){let t=[{accessorKey:`title`,header:`任务`},{accessorKey:`owner`,header:`负责人`},{accessorKey:`status`,header:`状态`},{accessorKey:`updatedAt`,header:`更新时间`}],n=[{id:`t-001`,title:`完善组件文档`,owner:`林舟`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`同步设计变量`,owner:`陈念`,status:`待处理`,updatedAt:`2026-05-22`},{id:`t-003`,title:`整理示例数据`,owner:`周衡`,status:`已完成`,updatedAt:`2026-05-21`},{id:`t-004`,title:`回归交互状态`,owner:`沈若`,status:`进行中`,updatedAt:`2026-05-20`}];return(e,r)=>{let i=X;return u(),c(i,{columns:t,data:n})}}}),ds=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Task {
  id: string
  title: string
  owner: string
  status: string
  updatedAt: string
}

const columns: TableColumn<Task>[] = [
  {
    accessorKey: 'title',
    header: '任务',
  },
  {
    accessorKey: 'owner',
    header: '负责人',
  },
  {
    accessorKey: 'status',
    header: '状态',
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
  },
]

const data: Task[] = [
  { id: 't-001', title: '完善组件文档', owner: '林舟', status: '进行中', updatedAt: '2026-05-23' },
  { id: 't-002', title: '同步设计变量', owner: '陈念', status: '待处理', updatedAt: '2026-05-22' },
  { id: 't-003', title: '整理示例数据', owner: '周衡', status: '已完成', updatedAt: '2026-05-21' },
  { id: 't-004', title: '回归交互状态', owner: '沈若', status: '进行中', updatedAt: '2026-05-20' },
]
<\/script>

<template>
  <FaTable :columns :data />
</template>
`,fs=e({__name:`_border`,setup(e){let t=[{accessorKey:`name`,header:`项目`,width:220},{accessorKey:`owner`,header:`负责人`,width:120},{accessorKey:`progress`,header:`进度`,width:120,align:`right`},{accessorKey:`status`,header:`状态`,width:120}],n=[{id:`p-001`,name:`权限策略整理`,owner:`林舟`,progress:`72%`,status:`进行中`},{id:`p-002`,name:`表格示例拆分`,owner:`陈念`,progress:`100%`,status:`已完成`},{id:`p-003`,name:`数据导出流程`,owner:`周衡`,progress:`48%`,status:`进行中`},{id:`p-004`,name:`菜单体验优化`,owner:`沈若`,progress:`16%`,status:`待处理`}];return(e,r)=>{let i=X;return u(),c(i,{border:``,"row-key":`id`,columns:t,data:n})}}}),ps=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Project {
  id: string
  name: string
  owner: string
  progress: string
  status: string
}

const columns: TableColumn<Project>[] = [
  {
    accessorKey: 'name',
    header: '项目',
    width: 220,
  },
  {
    accessorKey: 'owner',
    header: '负责人',
    width: 120,
  },
  {
    accessorKey: 'progress',
    header: '进度',
    width: 120,
    align: 'right',
  },
  {
    accessorKey: 'status',
    header: '状态',
    width: 120,
  },
]

const data: Project[] = [
  { id: 'p-001', name: '权限策略整理', owner: '林舟', progress: '72%', status: '进行中' },
  { id: 'p-002', name: '表格示例拆分', owner: '陈念', progress: '100%', status: '已完成' },
  { id: 'p-003', name: '数据导出流程', owner: '周衡', progress: '48%', status: '进行中' },
  { id: 'p-004', name: '菜单体验优化', owner: '沈若', progress: '16%', status: '待处理' },
]
<\/script>

<template>
  <FaTable border row-key="id" :columns :data />
</template>
`,ms=e({__name:`_column-visibility`,setup(e){let t=[{accessorKey:`title`,header:`任务`,enableHiding:!1},{accessorKey:`owner`,header:`负责人`},{accessorKey:`priority`,header:`优先级`},{accessorKey:`status`,header:`状态`},{accessorKey:`updatedAt`,header:`更新时间`}],n=[{id:`t-001`,title:`完善组件文档`,owner:`林舟`,priority:`中`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`同步设计变量`,owner:`陈念`,priority:`高`,status:`待处理`,updatedAt:`2026-05-22`},{id:`t-003`,title:`整理示例数据`,owner:`周衡`,priority:`低`,status:`已完成`,updatedAt:`2026-05-21`},{id:`t-004`,title:`回归交互状态`,owner:`沈若`,priority:`中`,status:`进行中`,updatedAt:`2026-05-20`}];return(e,r)=>{let i=X;return u(),c(i,{"column-visibility":``,columns:t,data:n})}}}),hs=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Task {
  id: string
  title: string
  owner: string
  priority: string
  status: string
  updatedAt: string
}

const columns: TableColumn<Task>[] = [
  {
    accessorKey: 'title',
    header: '任务',
    enableHiding: false,
  },
  {
    accessorKey: 'owner',
    header: '负责人',
  },
  {
    accessorKey: 'priority',
    header: '优先级',
  },
  {
    accessorKey: 'status',
    header: '状态',
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
  },
]

const data: Task[] = [
  { id: 't-001', title: '完善组件文档', owner: '林舟', priority: '中', status: '进行中', updatedAt: '2026-05-23' },
  { id: 't-002', title: '同步设计变量', owner: '陈念', priority: '高', status: '待处理', updatedAt: '2026-05-22' },
  { id: 't-003', title: '整理示例数据', owner: '周衡', priority: '低', status: '已完成', updatedAt: '2026-05-21' },
  { id: 't-004', title: '回归交互状态', owner: '沈若', priority: '中', status: '进行中', updatedAt: '2026-05-20' },
]
<\/script>

<template>
  <FaTable column-visibility :columns :data />
</template>
`,gs=e({__name:`_custom-column`,setup(e){let t=[{accessorKey:`name`,label:`指标名称`,width:180,cellClass:`font-medium bg-amber-200/80 dark:bg-amber-500/35`},{accessorKey:`today`,header:`今日`,align:`right`,width:120,cellClass:`tabular-nums`},{accessorKey:`yesterday`,header:`昨日`,align:`right`,width:120,cellClass:`tabular-nums text-muted-foreground`},{accessorKey:`trend`,title:`变化`,align:`right`,width:120,headerClass:`text-primary`,cellClass:({row:e})=>e.original.trend.startsWith(`+`)?`text-success font-medium tabular-nums`:`text-destructive font-medium tabular-nums`}],n=[{id:`m-001`,name:`访问量`,today:`18,420`,yesterday:`16,280`,trend:`+13.1%`},{id:`m-002`,name:`转化率`,today:`8.6%`,yesterday:`9.1%`,trend:`-0.5%`},{id:`m-003`,name:`新增客户`,today:`326`,yesterday:`304`,trend:`+7.2%`}];return(e,r)=>{let i=X;return u(),c(i,{"row-key":`id`,columns:t,data:n})}}}),_s=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Metric {
  id: string
  name: string
  today: string
  yesterday: string
  trend: string
}

const columns: TableColumn<Metric>[] = [
  {
    accessorKey: 'name',
    label: '指标名称',
    width: 180,
    cellClass: 'font-medium bg-amber-200/80 dark:bg-amber-500/35',
  },
  {
    accessorKey: 'today',
    header: '今日',
    align: 'right',
    width: 120,
    cellClass: 'tabular-nums',
  },
  {
    accessorKey: 'yesterday',
    header: '昨日',
    align: 'right',
    width: 120,
    cellClass: 'tabular-nums text-muted-foreground',
  },
  {
    accessorKey: 'trend',
    title: '变化',
    align: 'right',
    width: 120,
    headerClass: 'text-primary',
    cellClass: ({ row }) => row.original.trend.startsWith('+')
      ? 'text-success font-medium tabular-nums'
      : 'text-destructive font-medium tabular-nums',
  },
]

const data: Metric[] = [
  { id: 'm-001', name: '访问量', today: '18,420', yesterday: '16,280', trend: '+13.1%' },
  { id: 'm-002', name: '转化率', today: '8.6%', yesterday: '9.1%', trend: '-0.5%' },
  { id: 'm-003', name: '新增客户', today: '326', yesterday: '304', trend: '+7.2%' },
]
<\/script>

<template>
  <FaTable row-key="id" :columns :data />
</template>
`,vs=e({__name:`_fixed-column`,setup(e){let t=[{accessorKey:`name`,header:`项目`,fixed:`left`,width:220},{accessorKey:`owner`,header:`负责人`,fixed:`left`,width:120},{accessorKey:`department`,header:`所属部门`,width:160},{accessorKey:`priority`,header:`优先级`,width:120},{accessorKey:`status`,header:`状态`,width:120},{accessorKey:`deadline`,header:`截止日期`,width:140},{accessorKey:`budget`,header:`预算`,align:`right`,fixed:`right`,width:120},{accessorKey:`nextAction`,header:`下一步`,align:`right`,fixed:`right`,width:140}],n=[{id:`p-1001`,name:`权限中心改造`,owner:`林舟`,department:`基础平台部`,priority:`高`,status:`进行中`,deadline:`2026-06-12`,budget:`¥84,000`,nextAction:`查看详情`},{id:`p-1002`,name:`移动端适配`,owner:`陈念`,department:`体验技术部`,priority:`中`,status:`评审中`,deadline:`2026-06-18`,budget:`¥56,000`,nextAction:`排期`},{id:`p-1003`,name:`数据看板升级`,owner:`周衡`,department:`数据产品部`,priority:`中`,status:`已完成`,deadline:`2026-05-30`,budget:`¥126,000`,nextAction:`复盘`}];return(e,r)=>{let i=X;return u(),c(i,{"row-key":`id`,"table-class":`min-w-[1160px]`,columns:t,data:n})}}}),ys=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Project {
  id: string
  name: string
  owner: string
  department: string
  priority: string
  status: string
  deadline: string
  budget: string
  nextAction: string
}

const columns: TableColumn<Project>[] = [
  {
    accessorKey: 'name',
    header: '项目',
    fixed: 'left',
    width: 220,
  },
  {
    accessorKey: 'owner',
    header: '负责人',
    fixed: 'left',
    width: 120,
  },
  {
    accessorKey: 'department',
    header: '所属部门',
    width: 160,
  },
  {
    accessorKey: 'priority',
    header: '优先级',
    width: 120,
  },
  {
    accessorKey: 'status',
    header: '状态',
    width: 120,
  },
  {
    accessorKey: 'deadline',
    header: '截止日期',
    width: 140,
  },
  {
    accessorKey: 'budget',
    header: '预算',
    align: 'right',
    fixed: 'right',
    width: 120,
  },
  {
    accessorKey: 'nextAction',
    header: '下一步',
    align: 'right',
    fixed: 'right',
    width: 140,
  },
]

const data: Project[] = [
  {
    id: 'p-1001',
    name: '权限中心改造',
    owner: '林舟',
    department: '基础平台部',
    priority: '高',
    status: '进行中',
    deadline: '2026-06-12',
    budget: '¥84,000',
    nextAction: '查看详情',
  },
  {
    id: 'p-1002',
    name: '移动端适配',
    owner: '陈念',
    department: '体验技术部',
    priority: '中',
    status: '评审中',
    deadline: '2026-06-18',
    budget: '¥56,000',
    nextAction: '排期',
  },
  {
    id: 'p-1003',
    name: '数据看板升级',
    owner: '周衡',
    department: '数据产品部',
    priority: '中',
    status: '已完成',
    deadline: '2026-05-30',
    budget: '¥126,000',
    nextAction: '复盘',
  },
]
<\/script>

<template>
  <FaTable
    row-key="id"
    table-class="min-w-[1160px]"
    :columns
    :data
  />
</template>
`,bs=e({__name:`_fixed-height`,setup(e){let t=[{accessorKey:`event`,header:`事件`,width:180},{accessorKey:`operator`,header:`操作人`,width:120},{accessorKey:`result`,header:`结果`,width:120},{accessorKey:`time`,header:`时间`,width:180}],n=[{id:`l-001`,event:`创建项目`,operator:`林舟`,result:`成功`,time:`2026-05-23 09:12`},{id:`l-002`,event:`提交审批`,operator:`陈念`,result:`成功`,time:`2026-05-23 09:26`},{id:`l-003`,event:`同步成员`,operator:`周衡`,result:`成功`,time:`2026-05-23 09:41`},{id:`l-004`,event:`导出报表`,operator:`沈若`,result:`排队中`,time:`2026-05-23 10:05`},{id:`l-005`,event:`更新预算`,operator:`梁一`,result:`成功`,time:`2026-05-23 10:18`},{id:`l-006`,event:`变更负责人`,operator:`许知`,result:`成功`,time:`2026-05-23 10:39`},{id:`l-007`,event:`归档任务`,operator:`林舟`,result:`成功`,time:`2026-05-23 11:02`},{id:`l-008`,event:`生成快照`,operator:`陈念`,result:`成功`,time:`2026-05-23 11:27`},{id:`l-009`,event:`刷新缓存`,operator:`周衡`,result:`成功`,time:`2026-05-23 11:48`},{id:`l-010`,event:`权限校验`,operator:`沈若`,result:`成功`,time:`2026-05-23 12:13`},{id:`l-011`,event:`发布版本`,operator:`梁一`,result:`成功`,time:`2026-05-23 12:45`},{id:`l-012`,event:`关闭工单`,operator:`许知`,result:`成功`,time:`2026-05-23 13:08`}];return(e,r)=>{let i=X;return u(),c(i,{class:`h-80`,"row-key":`id`,columns:t,data:n})}}}),xs=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface LogRecord {
  id: string
  event: string
  operator: string
  result: string
  time: string
}

const columns: TableColumn<LogRecord>[] = [
  {
    accessorKey: 'event',
    header: '事件',
    width: 180,
  },
  {
    accessorKey: 'operator',
    header: '操作人',
    width: 120,
  },
  {
    accessorKey: 'result',
    header: '结果',
    width: 120,
  },
  {
    accessorKey: 'time',
    header: '时间',
    width: 180,
  },
]

const data: LogRecord[] = [
  { id: 'l-001', event: '创建项目', operator: '林舟', result: '成功', time: '2026-05-23 09:12' },
  { id: 'l-002', event: '提交审批', operator: '陈念', result: '成功', time: '2026-05-23 09:26' },
  { id: 'l-003', event: '同步成员', operator: '周衡', result: '成功', time: '2026-05-23 09:41' },
  { id: 'l-004', event: '导出报表', operator: '沈若', result: '排队中', time: '2026-05-23 10:05' },
  { id: 'l-005', event: '更新预算', operator: '梁一', result: '成功', time: '2026-05-23 10:18' },
  { id: 'l-006', event: '变更负责人', operator: '许知', result: '成功', time: '2026-05-23 10:39' },
  { id: 'l-007', event: '归档任务', operator: '林舟', result: '成功', time: '2026-05-23 11:02' },
  { id: 'l-008', event: '生成快照', operator: '陈念', result: '成功', time: '2026-05-23 11:27' },
  { id: 'l-009', event: '刷新缓存', operator: '周衡', result: '成功', time: '2026-05-23 11:48' },
  { id: 'l-010', event: '权限校验', operator: '沈若', result: '成功', time: '2026-05-23 12:13' },
  { id: 'l-011', event: '发布版本', operator: '梁一', result: '成功', time: '2026-05-23 12:45' },
  { id: 'l-012', event: '关闭工单', operator: '许知', result: '成功', time: '2026-05-23 13:08' },
]
<\/script>

<template>
  <FaTable
    class="h-80"
    row-key="id"
    :columns
    :data
  />
</template>
`,Ss={class:`space-y-4`},Cs={class:`text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted`},ws=e({__name:`_multiple-selection`,setup(e){let t=[{type:`selection`,fixed:`left`,width:50,disabled:e=>e.locked},{accessorKey:`name`,header:`成员`},{accessorKey:`role`,header:`角色`,width:120},{accessorKey:`team`,header:`团队`,width:140},{accessorKey:`locked`,header:`锁定`,width:120}],r=[{id:`m-001`,name:`沈若`,role:`管理员`,team:`平台组`,locked:!1},{id:`m-002`,name:`梁一`,role:`开发者`,team:`体验组`,locked:!1},{id:`m-003`,name:`许知`,role:`访客`,team:`运营组`,locked:!0},{id:`m-004`,name:`苏眠`,role:`审计员`,team:`风控组`,locked:!1}],i=n([]),a=p(()=>i.value.map(e=>e.name).join(`、`)||`暂无`);function o(e){i.value=e}return(e,n)=>{let i=X;return u(),v(`div`,Ss,[s(i,{selectable:``,multiple:``,"row-key":`id`,columns:t,data:r,onSelectionChange:o}),b(`div`,Cs,` 已选中：`+d(a.value),1)])}}}),Ts=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'
import { computed, shallowRef } from 'vue'

interface Member {
  id: string
  name: string
  role: string
  team: string
  locked: boolean
}

const columns: TableColumn<Member>[] = [
  {
    type: 'selection',
    fixed: 'left',
    width: 50,
    disabled: row => row.locked,
  },
  {
    accessorKey: 'name',
    header: '成员',
  },
  {
    accessorKey: 'role',
    header: '角色',
    width: 120,
  },
  {
    accessorKey: 'team',
    header: '团队',
    width: 140,
  },
  {
    accessorKey: 'locked',
    header: '锁定',
    width: 120,
  },
]

const data: Member[] = [
  { id: 'm-001', name: '沈若', role: '管理员', team: '平台组', locked: false },
  { id: 'm-002', name: '梁一', role: '开发者', team: '体验组', locked: false },
  { id: 'm-003', name: '许知', role: '访客', team: '运营组', locked: true },
  { id: 'm-004', name: '苏眠', role: '审计员', team: '风控组', locked: false },
]

const selectedRows = shallowRef<Member[]>([])

const selectedNames = computed(() => selectedRows.value.map(item => item.name).join('、') || '暂无')

function handleSelectionChange(rows: Member[]) {
  selectedRows.value = rows
}
<\/script>

<template>
  <div class="space-y-4">
    <FaTable
      selectable
      multiple
      row-key="id"
      :columns
      :data
      @selection-change="handleSelectionChange"
    />

    <div class="text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted">
      已选中：{{ selectedNames }}
    </div>
  </div>
</template>
`,Es={class:`space-y-4`},Ds={class:`text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted`},Os=e({__name:`_single-selection`,setup(e){let t=[{type:`selection`,fixed:`left`,width:50,disabled:e=>!e.enabled},{accessorKey:`name`,header:`成员`},{accessorKey:`role`,header:`角色`,width:120},{accessorKey:`team`,header:`团队`,width:140},{accessorKey:`enabled`,header:`是否可选`,width:120}],r=[{id:`m-001`,name:`沈若`,role:`管理员`,team:`平台组`,enabled:!0},{id:`m-002`,name:`梁一`,role:`开发者`,team:`体验组`,enabled:!0},{id:`m-003`,name:`许知`,role:`访客`,team:`运营组`,enabled:!1},{id:`m-004`,name:`苏眠`,role:`审计员`,team:`风控组`,enabled:!0}],i=n([]),a=p(()=>i.value[0]?.name||`暂无`);function o(e){i.value=e}return(e,n)=>{let i=X;return u(),v(`div`,Es,[s(i,{selectable:``,"row-key":`id`,columns:t,data:r,onSelectionChange:o}),b(`div`,Ds,` 当前选中：`+d(a.value),1)])}}}),ks=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'
import { computed, shallowRef } from 'vue'

interface Member {
  id: string
  name: string
  role: string
  team: string
  enabled: boolean
}

const columns: TableColumn<Member>[] = [
  {
    type: 'selection',
    fixed: 'left',
    width: 50,
    disabled: row => !row.enabled,
  },
  {
    accessorKey: 'name',
    header: '成员',
  },
  {
    accessorKey: 'role',
    header: '角色',
    width: 120,
  },
  {
    accessorKey: 'team',
    header: '团队',
    width: 140,
  },
  {
    accessorKey: 'enabled',
    header: '是否可选',
    width: 120,
  },
]

const data: Member[] = [
  { id: 'm-001', name: '沈若', role: '管理员', team: '平台组', enabled: true },
  { id: 'm-002', name: '梁一', role: '开发者', team: '体验组', enabled: true },
  { id: 'm-003', name: '许知', role: '访客', team: '运营组', enabled: false },
  { id: 'm-004', name: '苏眠', role: '审计员', team: '风控组', enabled: true },
]

const selectedRows = shallowRef<Member[]>([])

const selectedName = computed(() => selectedRows.value[0]?.name || '暂无')

function handleSelectionChange(rows: Member[]) {
  selectedRows.value = rows
}
<\/script>

<template>
  <div class="space-y-4">
    <FaTable
      selectable
      row-key="id"
      :columns
      :data
      @selection-change="handleSelectionChange"
    />

    <div class="text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted">
      当前选中：{{ selectedName }}
    </div>
  </div>
</template>
`,As={class:`font-medium`},js={class:`text-xs text-muted-foreground`},Ms={class:`tabular-nums`},Ns=e({__name:`_slot`,setup(e){let n=[{accessorKey:`name`,header:`商品`,width:220},{accessorKey:`category`,header:`分类`,width:120},{accessorKey:`price`,header:`价格`,align:`right`,width:120},{accessorKey:`stock`,header:`库存`,align:`right`,width:120},{accessorKey:`status`,header:`状态`,width:120}],r=[{id:`sku-001`,name:`协作空间专业版`,category:`软件`,price:1280,stock:42,status:`available`},{id:`sku-002`,name:`团队数据大屏`,category:`模板`,price:680,stock:8,status:`warning`},{id:`sku-003`,name:`年度支持服务`,category:`服务`,price:3600,stock:0,status:`sold-out`}],a={available:{label:`可售`,class:`bg-success/10 text-success`},warning:{label:`低库存`,class:`bg-warning/10 text-warning`},"sold-out":{label:`售罄`,class:`bg-muted text-muted-foreground`}};function o(e){return new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,maximumFractionDigits:0}).format(e)}return(e,s)=>{let l=X;return u(),c(l,{"row-key":`id`,columns:n,data:r},{"header-name":_(()=>[...s[0]||(s[0]=[b(`div`,{class:`flex flex-col`},[b(`span`,null,`商品`),b(`span`,{class:`text-xs text-muted-foreground font-normal`},`名称 / 编号`)],-1)])]),"cell-name":_(({row:e})=>[b(`div`,As,d(e.original.name),1),b(`div`,js,d(e.original.id),1)]),"cell-price":_(({value:e})=>[t(d(o(Number(e))),1)]),"cell-stock":_(({value:e})=>[b(`span`,Ms,d(e),1)]),"cell-status":_(({value:e})=>[b(`span`,{class:i([`text-xs font-medium px-2 py-0.5 rounded-full inline-flex`,a[e].class])},d(a[e].label),3)]),_:1})}}}),Ps=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: 'available' | 'warning' | 'sold-out'
}

const columns: TableColumn<Product>[] = [
  {
    accessorKey: 'name',
    header: '商品',
    width: 220,
  },
  {
    accessorKey: 'category',
    header: '分类',
    width: 120,
  },
  {
    accessorKey: 'price',
    header: '价格',
    align: 'right',
    width: 120,
  },
  {
    accessorKey: 'stock',
    header: '库存',
    align: 'right',
    width: 120,
  },
  {
    accessorKey: 'status',
    header: '状态',
    width: 120,
  },
]

const data: Product[] = [
  { id: 'sku-001', name: '协作空间专业版', category: '软件', price: 1280, stock: 42, status: 'available' },
  { id: 'sku-002', name: '团队数据大屏', category: '模板', price: 680, stock: 8, status: 'warning' },
  { id: 'sku-003', name: '年度支持服务', category: '服务', price: 3600, stock: 0, status: 'sold-out' },
]

const statusMap: Record<Product['status'], { label: string, class: string }> = {
  'available': {
    label: '可售',
    class: 'bg-success/10 text-success',
  },
  'warning': {
    label: '低库存',
    class: 'bg-warning/10 text-warning',
  },
  'sold-out': {
    label: '售罄',
    class: 'bg-muted text-muted-foreground',
  },
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
    maximumFractionDigits: 0,
  }).format(value)
}
<\/script>

<template>
  <FaTable row-key="id" :columns :data>
    <template #header-name>
      <div class="flex flex-col">
        <span>商品</span>
        <span class="text-xs text-muted-foreground font-normal">名称 / 编号</span>
      </div>
    </template>

    <template #cell-name="{ row }">
      <div class="font-medium">
        {{ row.original.name }}
      </div>
      <div class="text-xs text-muted-foreground">
        {{ row.original.id }}
      </div>
    </template>

    <template #cell-price="{ value }">
      {{ formatCurrency(Number(value)) }}
    </template>

    <template #cell-stock="{ value }">
      <span class="tabular-nums">{{ value }}</span>
    </template>

    <template #cell-status="{ value }">
      <span class="text-xs font-medium px-2 py-0.5 rounded-full inline-flex" :class="statusMap[value as Product['status']].class">
        {{ statusMap[value as Product['status']].label }}
      </span>
    </template>
  </FaTable>
</template>
`,Fs={class:`space-y-4`},Is={class:`text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted`},Ls=e({__name:`_sorting`,setup(e){let t=[{accessorKey:`title`,header:`任务`},{accessorKey:`owner`,header:`负责人`},{accessorKey:`priority`,header:`优先级`,enableSorting:!0},{accessorKey:`updatedAt`,header:`更新时间`,enableSorting:!0}],r=[{id:`t-001`,title:`完善组件文档`,owner:`林舟`,priority:`中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`同步设计变量`,owner:`陈念`,priority:`高`,updatedAt:`2026-05-22`},{id:`t-003`,title:`整理示例数据`,owner:`周衡`,priority:`低`,updatedAt:`2026-05-21`},{id:`t-004`,title:`回归交互状态`,owner:`沈若`,priority:`中`,updatedAt:`2026-05-20`}],i={高:3,中:2,低:1},a=n([]);function o(e,t){return t===`priority`?i[e.priority]:e[t]}function c(e,t){return typeof e==`number`&&typeof t==`number`?e-t:String(e).localeCompare(String(t),`zh-CN`,{numeric:!0})}let l=p(()=>a.value.length?[...r].sort((e,t)=>{for(let n of a.value){let r=n.id,i=o(e,r),a=o(t,r);if(i===a)continue;let s=c(i,a);return n.desc?-s:s}return 0}):r),f=p(()=>a.value.length?a.value.map(e=>`${e.id}: ${e.desc?`降序`:`升序`}`).join(`，`):`暂无排序`);function m(e){a.value=e}return(e,n)=>{let r=X;return u(),v(`div`,Fs,[s(r,{sortable:``,"row-key":`id`,sorting:a.value,columns:t,data:l.value,onSortingChange:m},null,8,[`sorting`,`data`]),b(`div`,Is,` 当前排序：`+d(f.value),1)])}}}),Rs=`<script setup lang="ts">
import type { TableColumn, TableSortingState } from '../index.vue'
import { computed, shallowRef } from 'vue'

interface Task {
  id: string
  title: string
  owner: string
  priority: string
  updatedAt: string
}

const columns: TableColumn<Task>[] = [
  {
    accessorKey: 'title',
    header: '任务',
  },
  {
    accessorKey: 'owner',
    header: '负责人',
  },
  {
    accessorKey: 'priority',
    header: '优先级',
    enableSorting: true,
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
    enableSorting: true,
  },
]

const data: Task[] = [
  { id: 't-001', title: '完善组件文档', owner: '林舟', priority: '中', updatedAt: '2026-05-23' },
  { id: 't-002', title: '同步设计变量', owner: '陈念', priority: '高', updatedAt: '2026-05-22' },
  { id: 't-003', title: '整理示例数据', owner: '周衡', priority: '低', updatedAt: '2026-05-21' },
  { id: 't-004', title: '回归交互状态', owner: '沈若', priority: '中', updatedAt: '2026-05-20' },
]

const priorityRank: Record<Task['priority'], number> = {
  高: 3,
  中: 2,
  低: 1,
}

const sorting = shallowRef<TableSortingState>([])

function getSortValue(row: Task, key: keyof Task) {
  if (key === 'priority') {
    return priorityRank[row.priority]
  }

  return row[key]
}

function compareSortValue(a: string | number, b: string | number) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b
  }

  return String(a).localeCompare(String(b), 'zh-CN', { numeric: true })
}

const sortedData = computed(() => {
  if (!sorting.value.length) {
    return data
  }

  return [...data].sort((a, b) => {
    for (const sort of sorting.value) {
      const key = sort.id as keyof Task
      const aVal = getSortValue(a, key)
      const bVal = getSortValue(b, key)

      if (aVal === bVal) {
        continue
      }

      const result = compareSortValue(aVal, bVal)
      return sort.desc ? -result : result
    }

    return 0
  })
})

const sortingText = computed(() => {
  if (!sorting.value.length) {
    return '暂无排序'
  }

  return sorting.value.map(item => \`\${item.id}: \${item.desc ? '降序' : '升序'}\`).join('，')
})

function handleSortingChange(value: TableSortingState) {
  sorting.value = value
}
<\/script>

<template>
  <div class="space-y-4">
    <FaTable
      sortable
      row-key="id"
      :sorting
      :columns
      :data="sortedData"
      @sorting-change="handleSortingChange"
    />

    <div class="text-sm text-muted-foreground px-4 py-3 rounded-md bg-muted">
      当前排序：{{ sortingText }}
    </div>
  </div>
</template>
`,zs=e({__name:`_stripe`,setup(e){let t=[{accessorKey:`title`,header:`事项`,width:220},{accessorKey:`owner`,header:`负责人`,width:120},{accessorKey:`priority`,header:`优先级`,width:120},{accessorKey:`status`,header:`状态`,width:120},{accessorKey:`updatedAt`,header:`更新时间`,width:160}],n=[{id:`t-001`,title:`补充表格文档`,owner:`林舟`,priority:`中`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`优化筛选体验`,owner:`陈念`,priority:`高`,status:`待处理`,updatedAt:`2026-05-22`},{id:`t-003`,title:`同步设计变量`,owner:`周衡`,priority:`低`,status:`已完成`,updatedAt:`2026-05-21`},{id:`t-004`,title:`检查固定列阴影`,owner:`沈若`,priority:`中`,status:`进行中`,updatedAt:`2026-05-20`},{id:`t-005`,title:`整理示例数据`,owner:`梁一`,priority:`低`,status:`已完成`,updatedAt:`2026-05-19`},{id:`t-006`,title:`回归行选择交互`,owner:`许知`,priority:`高`,status:`待处理`,updatedAt:`2026-05-18`}];return(e,r)=>{let i=X;return u(),c(i,{stripe:``,"row-key":`id`,columns:t,data:n})}}}),Bs=`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Ticket {
  id: string
  title: string
  owner: string
  priority: string
  status: string
  updatedAt: string
}

const columns: TableColumn<Ticket>[] = [
  {
    accessorKey: 'title',
    header: '事项',
    width: 220,
  },
  {
    accessorKey: 'owner',
    header: '负责人',
    width: 120,
  },
  {
    accessorKey: 'priority',
    header: '优先级',
    width: 120,
  },
  {
    accessorKey: 'status',
    header: '状态',
    width: 120,
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
    width: 160,
  },
]

const data: Ticket[] = [
  { id: 't-001', title: '补充表格文档', owner: '林舟', priority: '中', status: '进行中', updatedAt: '2026-05-23' },
  { id: 't-002', title: '优化筛选体验', owner: '陈念', priority: '高', status: '待处理', updatedAt: '2026-05-22' },
  { id: 't-003', title: '同步设计变量', owner: '周衡', priority: '低', status: '已完成', updatedAt: '2026-05-21' },
  { id: 't-004', title: '检查固定列阴影', owner: '沈若', priority: '中', status: '进行中', updatedAt: '2026-05-20' },
  { id: 't-005', title: '整理示例数据', owner: '梁一', priority: '低', status: '已完成', updatedAt: '2026-05-19' },
  { id: 't-006', title: '回归行选择交互', owner: '许知', priority: '高', status: '待处理', updatedAt: '2026-05-18' },
]
<\/script>

<template>
  <FaTable stripe row-key="id" :columns :data />
</template>
`,Vs={class:`text-sm text-muted-foreground`},Hs=[{title:`基础`,component:us,componentRaw:ds},{title:`固定高度`,component:bs,componentRaw:xs},{title:`工具栏插槽`,component:e({__name:`_toolbar`,setup(e){let n=[{accessorKey:`title`,header:`任务`},{accessorKey:`owner`,header:`负责人`},{accessorKey:`status`,header:`状态`},{accessorKey:`updatedAt`,header:`更新时间`}],r=[{id:`t-001`,title:`完善组件文档`,owner:`林舟`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-002`,title:`同步设计变量`,owner:`陈念`,status:`待处理`,updatedAt:`2026-05-22`},{id:`t-003`,title:`整理示例数据`,owner:`周衡`,status:`已完成`,updatedAt:`2026-05-21`},{id:`t-004`,title:`回归交互状态`,owner:`沈若`,status:`进行中`,updatedAt:`2026-05-20`}];return(e,i)=>{let a=X;return u(),c(a,{columns:n,data:r},{toolbar:_(({table:e})=>[s(D,{size:`sm`},{default:_(()=>[s(V,{name:`i-lucide:plus`}),i[0]||(i[0]=t(` 新增 `,-1))]),_:1}),s(D,{variant:`outline`,size:`sm`},{default:_(()=>[s(V,{name:`i-lucide:refresh-cw`}),i[1]||(i[1]=t(` 刷新 `,-1))]),_:1}),b(`span`,Vs,` 共 `+d(e.getRowModel().rows.length)+` 条 `,1)]),_:1})}}}),componentRaw:`<script setup lang="ts">
import type { TableColumn } from '../index.vue'
import FaButton from '../../../basic/button/index.vue'
import FaIcon from '../../../basic/icon/index.vue'

interface Task {
  id: string
  title: string
  owner: string
  status: string
  updatedAt: string
}

const columns: TableColumn<Task>[] = [
  {
    accessorKey: 'title',
    header: '任务',
  },
  {
    accessorKey: 'owner',
    header: '负责人',
  },
  {
    accessorKey: 'status',
    header: '状态',
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
  },
]

const data: Task[] = [
  { id: 't-001', title: '完善组件文档', owner: '林舟', status: '进行中', updatedAt: '2026-05-23' },
  { id: 't-002', title: '同步设计变量', owner: '陈念', status: '待处理', updatedAt: '2026-05-22' },
  { id: 't-003', title: '整理示例数据', owner: '周衡', status: '已完成', updatedAt: '2026-05-21' },
  { id: 't-004', title: '回归交互状态', owner: '沈若', status: '进行中', updatedAt: '2026-05-20' },
]
<\/script>

<template>
  <FaTable :columns :data>
    <template #toolbar="{ table }">
      <FaButton size="sm">
        <FaIcon name="i-lucide:plus" />
        新增
      </FaButton>
      <FaButton variant="outline" size="sm">
        <FaIcon name="i-lucide:refresh-cw" />
        刷新
      </FaButton>
      <span class="text-sm text-muted-foreground">
        共 {{ table.getRowModel().rows.length }} 条
      </span>
    </template>
  </FaTable>
</template>
`},{title:`固定列`,component:vs,componentRaw:ys},{title:`自定义列`,component:gs,componentRaw:_s},{title:`树型数据`,component:e({__name:`_tree`,setup(e){let t=[{accessorKey:`title`,header:`任务`},{accessorKey:`owner`,header:`负责人`,width:120},{accessorKey:`status`,header:`状态`,width:120},{accessorKey:`updatedAt`,header:`更新时间`,width:160}],n=[{id:`t-001`,title:`组件能力建设`,owner:`林舟`,status:`进行中`,updatedAt:`2026-05-23`,children:[{id:`t-001-1`,title:`补充树型表格`,owner:`林舟`,status:`进行中`,updatedAt:`2026-05-23`},{id:`t-001-2`,title:`完善列显示控制`,owner:`陈念`,status:`待处理`,updatedAt:`2026-05-22`}]},{id:`t-002`,title:`设计变量同步`,owner:`陈念`,status:`待处理`,updatedAt:`2026-05-22`,children:[{id:`t-002-1`,title:`整理主题色`,owner:`周衡`,status:`已完成`,updatedAt:`2026-05-21`,children:[{id:`t-002-1-1`,title:`校验暗色模式`,owner:`沈若`,status:`已完成`,updatedAt:`2026-05-20`}]}]},{id:`t-003`,title:`回归交互状态`,owner:`沈若`,status:`进行中`,updatedAt:`2026-05-20`}];return(e,r)=>{let i=X;return u(),c(i,{tree:``,"row-key":`id`,columns:t,data:n})}}}),componentRaw:`<script setup lang="ts">
import type { TableColumn } from '../index.vue'

interface Task {
  id: string
  title: string
  owner: string
  status: string
  updatedAt: string
  children?: Task[]
}

const columns: TableColumn<Task>[] = [
  {
    accessorKey: 'title',
    header: '任务',
  },
  {
    accessorKey: 'owner',
    header: '负责人',
    width: 120,
  },
  {
    accessorKey: 'status',
    header: '状态',
    width: 120,
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
    width: 160,
  },
]

const data: Task[] = [
  {
    id: 't-001',
    title: '组件能力建设',
    owner: '林舟',
    status: '进行中',
    updatedAt: '2026-05-23',
    children: [
      { id: 't-001-1', title: '补充树型表格', owner: '林舟', status: '进行中', updatedAt: '2026-05-23' },
      { id: 't-001-2', title: '完善列显示控制', owner: '陈念', status: '待处理', updatedAt: '2026-05-22' },
    ],
  },
  {
    id: 't-002',
    title: '设计变量同步',
    owner: '陈念',
    status: '待处理',
    updatedAt: '2026-05-22',
    children: [
      {
        id: 't-002-1',
        title: '整理主题色',
        owner: '周衡',
        status: '已完成',
        updatedAt: '2026-05-21',
        children: [
          { id: 't-002-1-1', title: '校验暗色模式', owner: '沈若', status: '已完成', updatedAt: '2026-05-20' },
        ],
      },
    ],
  },
  { id: 't-003', title: '回归交互状态', owner: '沈若', status: '进行中', updatedAt: '2026-05-20' },
]
<\/script>

<template>
  <FaTable tree row-key="id" :columns :data />
</template>
`},{title:`自定义插槽`,component:Ns,componentRaw:Ps},{title:`排序`,component:Ls,componentRaw:Rs},{title:`行选择 - 单选`,component:Os,componentRaw:ks},{title:`行选择 - 多选`,component:ws,componentRaw:Ts},{title:`斑马纹`,component:zs,componentRaw:Bs},{title:`边框`,component:fs,componentRaw:ps},{title:`列可见性`,component:ms,componentRaw:hs}],Us=[{title:`基础`,component:e({__name:`_basic`,setup(e){let t=y(`profile`),n=[{label:`资料`,value:`profile`},{label:`账号`,value:`account`},{label:`通知`,value:`notice`}];return(e,r)=>(u(),c(de,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),list:n,class:`w-96`},{profile:_(()=>[...r[1]||(r[1]=[b(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 这里展示用户基础资料。 `,-1)])]),account:_(()=>[...r[2]||(r[2]=[b(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 这里展示账号安全设置。 `,-1)])]),notice:_(()=>[...r[3]||(r[3]=[b(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 这里展示消息通知偏好。 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaTabs from '../index.vue'

const activeTab = ref('profile')

const list = [
  { label: '资料', value: 'profile' },
  { label: '账号', value: 'account' },
  { label: '通知', value: 'notice' },
]
<\/script>

<template>
  <FaTabs v-model="activeTab" :list="list" class="w-96">
    <template #profile>
      <div class="text-sm p-4 rounded-md bg-muted/50">
        这里展示用户基础资料。
      </div>
    </template>
    <template #account>
      <div class="text-sm p-4 rounded-md bg-muted/50">
        这里展示账号安全设置。
      </div>
    </template>
    <template #notice>
      <div class="text-sm p-4 rounded-md bg-muted/50">
        这里展示消息通知偏好。
      </div>
    </template>
  </FaTabs>
</template>
`},{title:`图标`,component:e({__name:`_icon`,setup(e){let t=y(`user`),n=[{icon:`i-lucide:user`,label:`用户`,value:`user`},{icon:`i-lucide:settings`,label:`设置`,value:`setting`},{icon:`i-lucide:bell`,label:`通知`,value:`notice`}];return(e,r)=>(u(),c(de,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),list:n,class:`w-96`},{user:_(()=>[...r[1]||(r[1]=[b(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 用户信息内容。 `,-1)])]),setting:_(()=>[...r[2]||(r[2]=[b(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 系统设置内容。 `,-1)])]),notice:_(()=>[...r[3]||(r[3]=[b(`div`,{class:`text-sm p-4 rounded-md bg-muted/50`},` 通知消息内容。 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaTabs from '../index.vue'

const activeTab = ref('user')

const list = [
  { icon: 'i-lucide:user', label: '用户', value: 'user' },
  { icon: 'i-lucide:settings', label: '设置', value: 'setting' },
  { icon: 'i-lucide:bell', label: '通知', value: 'notice' },
]
<\/script>

<template>
  <FaTabs v-model="activeTab" :list="list" class="w-96">
    <template #user>
      <div class="text-sm p-4 rounded-md bg-muted/50">
        用户信息内容。
      </div>
    </template>
    <template #setting>
      <div class="text-sm p-4 rounded-md bg-muted/50">
        系统设置内容。
      </div>
    </template>
    <template #notice>
      <div class="text-sm p-4 rounded-md bg-muted/50">
        通知消息内容。
      </div>
    </template>
  </FaTabs>
</template>
`},{title:`自定义样式`,component:e({__name:`_custom-style`,setup(e){let n=y(`overview`),r=[{label:`总览`,value:`overview`,class:`rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`},{label:`趋势`,value:`trend`,class:`rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`},{label:`明细`,value:`detail`,class:`rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`}];return(e,i)=>(u(),c(de,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=e=>n.value=e),list:r,class:`p-3 border rounded-lg w-96`,"list-class":`gap-2 rounded-md bg-transparent p-0`,"content-class":`rounded-md bg-muted/50 p-4 text-sm`},{overview:_(()=>[...i[1]||(i[1]=[t(` 当前数据总览。 `,-1)])]),trend:_(()=>[...i[2]||(i[2]=[t(` 趋势分析内容。 `,-1)])]),detail:_(()=>[...i[3]||(i[3]=[t(` 明细数据内容。 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaTabs from '../index.vue'

const activeTab = ref('overview')

const list = [
  { label: '总览', value: 'overview', class: 'rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground' },
  { label: '趋势', value: 'trend', class: 'rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground' },
  { label: '明细', value: 'detail', class: 'rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground' },
]
<\/script>

<template>
  <FaTabs
    v-model="activeTab"
    :list="list"
    class="p-3 border rounded-lg w-96"
    list-class="gap-2 rounded-md bg-transparent p-0"
    content-class="rounded-md bg-muted/50 p-4 text-sm"
  >
    <template #overview>
      当前数据总览。
    </template>
    <template #trend>
      趋势分析内容。
    </template>
    <template #detail>
      明细数据内容。
    </template>
  </FaTabs>
</template>
`}],Ws={class:`flex flex-wrap gap-4`},Gs=e({__name:`_basic`,setup(e){return(e,n)=>(u(),v(`div`,Ws,[s(B,null,{default:_(()=>[...n[0]||(n[0]=[t(` 默认标签 `,-1)])]),_:1}),s(B,{variant:`destructive`},{default:_(()=>[...n[1]||(n[1]=[t(` 危险标签 `,-1)])]),_:1}),s(B,{variant:`outline`},{default:_(()=>[...n[2]||(n[2]=[t(` 边框标签 `,-1)])]),_:1}),s(B,{variant:`secondary`},{default:_(()=>[...n[3]||(n[3]=[t(` 次要标签 `,-1)])]),_:1})]))}}),Ks=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTag from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTag>
      默认标签
    </FaTag>
    <FaTag variant="destructive">
      危险标签
    </FaTag>
    <FaTag variant="outline">
      边框标签
    </FaTag>
    <FaTag variant="secondary">
      次要标签
    </FaTag>
  </div>
</template>
`,qs={class:`flex flex-wrap gap-4`},Js=e({__name:`_closable`,setup(e){let n=y([{id:1,label:`标签一`,variant:`default`},{id:2,label:`标签二`,variant:`destructive`},{id:3,label:`标签三`,variant:`outline`},{id:4,label:`标签四`,variant:`secondary`}]);function r(e){n.value=n.value.filter(t=>t.id!==e)}return(e,i)=>(u(),v(`div`,qs,[(u(!0),v(h,null,f(n.value,e=>(u(),c(B,{key:e.id,variant:e.variant,closable:``,onClose:t=>r(e.id)},{default:_(()=>[t(d(e.label),1)]),_:2},1032,[`variant`,`onClose`]))),128))]))}}),Ys=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaTag from '../index.vue'

const tags = ref([
  { id: 1, label: '标签一', variant: 'default' as const },
  { id: 2, label: '标签二', variant: 'destructive' as const },
  { id: 3, label: '标签三', variant: 'outline' as const },
  { id: 4, label: '标签四', variant: 'secondary' as const },
])

function handleClose(id: number) {
  tags.value = tags.value.filter(tag => tag.id !== id)
}
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTag
      v-for="tag in tags"
      :key="tag.id"
      :variant="tag.variant"
      closable
      @close="handleClose(tag.id)"
    >
      {{ tag.label }}
    </FaTag>
  </div>
</template>
`,Xs={class:`flex flex-wrap gap-4`},Zs=[{title:`基础`,component:Gs,componentRaw:Ks},{title:`图标`,component:e({__name:`_icon`,setup(e){return(e,n)=>(u(),v(`div`,Xs,[s(B,{icon:`i-lucide:check`},{default:_(()=>[...n[0]||(n[0]=[t(` 成功 `,-1)])]),_:1}),s(B,{icon:`i-lucide:alert-triangle`,variant:`destructive`},{default:_(()=>[...n[1]||(n[1]=[t(` 警告 `,-1)])]),_:1}),s(B,{icon:`i-lucide:info`,variant:`outline`},{default:_(()=>[...n[2]||(n[2]=[t(` 信息 `,-1)])]),_:1}),s(B,{icon:`i-lucide:star`,variant:`secondary`},{default:_(()=>[...n[3]||(n[3]=[t(` 收藏 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTag from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTag icon="i-lucide:check">
      成功
    </FaTag>
    <FaTag icon="i-lucide:alert-triangle" variant="destructive">
      警告
    </FaTag>
    <FaTag icon="i-lucide:info" variant="outline">
      信息
    </FaTag>
    <FaTag icon="i-lucide:star" variant="secondary">
      收藏
    </FaTag>
  </div>
</template>
`},{title:`可关闭`,component:Js,componentRaw:Ys}],Qs=[{title:`基础`,component:e({__name:`_basic`,setup(e){let t=n(``);return(e,n)=>(u(),c(oe,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:`请输入内容`,class:`w-96`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaTextarea from '../index.vue'

const value = shallowRef('')
<\/script>

<template>
  <FaTextarea v-model="value" placeholder="请输入内容" class="w-96" />
</template>
`},{title:`禁用`,component:e({__name:`_disabled`,setup(e){let t=n(`这是一段不可编辑的文本内容。`);return(e,n)=>(u(),c(oe,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:``,class:`w-96`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaTextarea from '../index.vue'

const value = shallowRef('这是一段不可编辑的文本内容。')
<\/script>

<template>
  <FaTextarea v-model="value" disabled class="w-96" />
</template>
`},{title:`插槽`,component:e({__name:`_slot`,setup(e){let r=n(``);return(e,n)=>(u(),c(oe,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e),placeholder:`console.log('Hello, world!');`,align:`block`,"start-class":`justify-between`,"end-class":`justify-between`,class:`w-120`},{start:_(()=>[n[1]||(n[1]=b(`span`,null,`script.ts`,-1)),s(D,{variant:`ghost`,size:`icon`,class:`size-6`},{default:_(()=>[s(V,{name:`i-ep:refresh`})]),_:1})]),end:_(()=>[n[3]||(n[3]=b(`span`,null,`Line 1, Column 1`,-1)),s(D,{size:`sm`,class:`px-2 h-8`},{default:_(()=>[n[2]||(n[2]=t(` Run `,-1)),s(V,{name:`i-lucide:corner-down-left`})]),_:1})]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { shallowRef } from 'vue'
import FaButton from '../../button/index.vue'
import FaIcon from '../../icon/index.vue'
import FaTextarea from '../index.vue'

const value = shallowRef('')
<\/script>

<template>
  <FaTextarea
    v-model="value"
    placeholder="console.log('Hello, world!');"
    align="block"
    start-class="justify-between"
    end-class="justify-between"
    class="w-120"
  >
    <template #start>
      <span>script.ts</span>
      <FaButton variant="ghost" size="icon" class="size-6">
        <FaIcon name="i-ep:refresh" />
      </FaButton>
    </template>
    <template #end>
      <span>Line 1, Column 1</span>
      <FaButton size="sm" class="px-2 h-8">
        Run
        <FaIcon name="i-lucide:corner-down-left" />
      </FaButton>
    </template>
  </FaTextarea>
</template>
`}],$s=e({__name:`_action`,setup(e){let n=Y();function r(){n(`文件已移入回收站`,{description:`你可以在 30 天内恢复该文件`,action:{label:`撤销`,onClick:()=>{n.success(`已撤销删除`)}}})}return(e,n)=>(u(),c(D,{onClick:r},{default:_(()=>[...n[0]||(n[0]=[t(` 显示操作按钮 `,-1)])]),_:1}))}}),ec=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../index'

const toast = useToast()

function showToast() {
  toast('文件已移入回收站', {
    description: '你可以在 30 天内恢复该文件',
    action: {
      label: '撤销',
      onClick: () => {
        toast.success('已撤销删除')
      },
    },
  })
}
<\/script>

<template>
  <FaButton @click="showToast">
    显示操作按钮
  </FaButton>
</template>
`,tc={class:`flex flex-wrap gap-4`},nc=e({__name:`_basic`,setup(e){let n=Y();function r(){n(`Fantastic-admin 杰出的管理系统框架`,{description:`开箱即用，提供舒适开发体验`})}function i(){n.success(`保存成功`,{description:`内容已同步到服务器`})}function a(){n.error(`保存失败`,{description:`请检查网络后重试`})}function o(){n.info(`系统通知`,{description:`今晚 22:00 将进行例行维护`})}function c(){n.warning(`注意事项`,{description:`离开页面前请确认内容已保存`})}return(e,n)=>(u(),v(`div`,tc,[s(D,{onClick:r},{default:_(()=>[...n[0]||(n[0]=[t(` 默认 `,-1)])]),_:1}),s(D,{onClick:i},{default:_(()=>[...n[1]||(n[1]=[t(` 成功 `,-1)])]),_:1}),s(D,{onClick:a},{default:_(()=>[...n[2]||(n[2]=[t(` 错误 `,-1)])]),_:1}),s(D,{onClick:o},{default:_(()=>[...n[3]||(n[3]=[t(` 信息 `,-1)])]),_:1}),s(D,{onClick:c},{default:_(()=>[...n[4]||(n[4]=[t(` 警告 `,-1)])]),_:1})]))}}),rc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../index'

const toast = useToast()

function showDefault() {
  toast('Fantastic-admin 杰出的管理系统框架', {
    description: '开箱即用，提供舒适开发体验',
  })
}

function showSuccess() {
  toast.success('保存成功', {
    description: '内容已同步到服务器',
  })
}

function showError() {
  toast.error('保存失败', {
    description: '请检查网络后重试',
  })
}

function showInfo() {
  toast.info('系统通知', {
    description: '今晚 22:00 将进行例行维护',
  })
}

function showWarning() {
  toast.warning('注意事项', {
    description: '离开页面前请确认内容已保存',
  })
}
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaButton @click="showDefault">
      默认
    </FaButton>
    <FaButton @click="showSuccess">
      成功
    </FaButton>
    <FaButton @click="showError">
      错误
    </FaButton>
    <FaButton @click="showInfo">
      信息
    </FaButton>
    <FaButton @click="showWarning">
      警告
    </FaButton>
  </div>
</template>
`,ic={class:`flex flex-wrap gap-4`},ac=[{title:`基础`,component:nc,componentRaw:rc},{title:`操作按钮`,component:$s,componentRaw:ec},{title:`加载状态`,component:e({__name:`_loading`,setup(e){let n=Y();function r(){let e=n.loading(`正在处理...`,{duration:1/0});setTimeout(()=>{n.dismiss(e),n.success(`处理完成`)},2e3)}function i(){n.promise(()=>new Promise(e=>{setTimeout(e,2e3)}),{loading:`正在加载数据`,success:()=>`数据加载完成`,error:()=>`数据加载失败`})}return(e,n)=>(u(),v(`div`,ic,[s(D,{onClick:r},{default:_(()=>[...n[0]||(n[0]=[t(` 加载状态 `,-1)])]),_:1}),s(D,{onClick:i},{default:_(()=>[...n[1]||(n[1]=[t(` Promise 状态 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import { useToast } from '../index'

const toast = useToast()

function showLoading() {
  const loading = toast.loading('正在处理...', {
    duration: Infinity,
  })

  setTimeout(() => {
    toast.dismiss(loading)
    toast.success('处理完成')
  }, 2000)
}

function showPromise() {
  toast.promise(() => new Promise((resolve) => {
    setTimeout(resolve, 2000)
  }), {
    loading: '正在加载数据',
    success: () => '数据加载完成',
    error: () => '数据加载失败',
  })
}
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaButton @click="showLoading">
      加载状态
    </FaButton>
    <FaButton @click="showPromise">
      Promise 状态
    </FaButton>
  </div>
</template>
`}],oc={class:`flex flex-wrap gap-4`},sc=e({__name:`_align`,setup(e){return(e,n)=>(u(),v(`div`,oc,[s(G,{text:`起始对齐`,align:`start`},{default:_(()=>[s(D,{variant:`ghost`},{default:_(()=>[...n[0]||(n[0]=[t(` Start `,-1)])]),_:1})]),_:1}),s(G,{text:`居中对齐`,align:`center`},{default:_(()=>[s(D,{variant:`ghost`},{default:_(()=>[...n[1]||(n[1]=[t(` Center `,-1)])]),_:1})]),_:1}),s(G,{text:`末端对齐`,align:`end`},{default:_(()=>[s(D,{variant:`ghost`},{default:_(()=>[...n[2]||(n[2]=[t(` End `,-1)])]),_:1})]),_:1})]))}}),cc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaTooltip from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTooltip text="起始对齐" align="start">
      <FaButton variant="ghost">
        Start
      </FaButton>
    </FaTooltip>
    <FaTooltip text="居中对齐" align="center">
      <FaButton variant="ghost">
        Center
      </FaButton>
    </FaTooltip>
    <FaTooltip text="末端对齐" align="end">
      <FaButton variant="ghost">
        End
      </FaButton>
    </FaTooltip>
  </div>
</template>
`,lc=e({__name:`_basic`,setup(e){return(e,t)=>(u(),c(G,{text:`注意噢！`},{default:_(()=>[s(V,{name:`i-ri:question-line`,class:`text-lg cursor-help`})]),_:1}))}}),uc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaIcon from '../../icon/index.vue'
import FaTooltip from '../index.vue'
<\/script>

<template>
  <FaTooltip text="注意噢！">
    <FaIcon name="i-ri:question-line" class="text-lg cursor-help" />
  </FaTooltip>
</template>
`,dc={class:`flex flex-wrap gap-4`},fc=e({__name:`_delay`,setup(e){return(e,n)=>(u(),v(`div`,dc,[s(G,{text:`100ms 后显示`,delay:100},{default:_(()=>[s(D,{variant:`ghost`},{default:_(()=>[...n[0]||(n[0]=[t(` 快速显示 `,-1)])]),_:1})]),_:1}),s(G,{text:`1000ms 后显示`,delay:1e3},{default:_(()=>[s(D,{variant:`ghost`},{default:_(()=>[...n[1]||(n[1]=[t(` 延迟显示 `,-1)])]),_:1})]),_:1})]))}}),pc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaTooltip from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTooltip text="100ms 后显示" :delay="100">
      <FaButton variant="ghost">
        快速显示
      </FaButton>
    </FaTooltip>
    <FaTooltip text="1000ms 后显示" :delay="1000">
      <FaButton variant="ghost">
        延迟显示
      </FaButton>
    </FaTooltip>
  </div>
</template>
`,mc={class:`flex flex-wrap gap-4`},hc=e({__name:`_disabled`,setup(e){return(e,n)=>(u(),v(`div`,mc,[s(G,{text:`正常显示提示`},{default:_(()=>[s(D,{variant:`ghost`},{default:_(()=>[...n[0]||(n[0]=[t(` 启用 `,-1)])]),_:1})]),_:1}),s(G,{text:`该提示已禁用`,disabled:``},{default:_(()=>[s(D,{variant:`ghost`},{default:_(()=>[...n[1]||(n[1]=[t(` 禁用 `,-1)])]),_:1})]),_:1})]))}}),gc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaTooltip from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTooltip text="正常显示提示">
      <FaButton variant="ghost">
        启用
      </FaButton>
    </FaTooltip>
    <FaTooltip text="该提示已禁用" disabled>
      <FaButton variant="ghost">
        禁用
      </FaButton>
    </FaTooltip>
  </div>
</template>
`,_c={class:`flex flex-wrap gap-4`},vc=[{title:`基础`,component:lc,componentRaw:uc},{title:`延迟显示`,component:fc,componentRaw:pc},{title:`弹出方向`,component:e({__name:`_side`,setup(e){return(e,n)=>(u(),v(`div`,_c,[s(G,{text:`上方提示`,side:`top`},{default:_(()=>[s(D,{variant:`ghost`},{default:_(()=>[...n[0]||(n[0]=[t(` 上方 `,-1)])]),_:1})]),_:1}),s(G,{text:`右侧提示`,side:`right`},{default:_(()=>[s(D,{variant:`ghost`},{default:_(()=>[...n[1]||(n[1]=[t(` 右侧 `,-1)])]),_:1})]),_:1}),s(G,{text:`下方提示`,side:`bottom`},{default:_(()=>[s(D,{variant:`ghost`},{default:_(()=>[...n[2]||(n[2]=[t(` 下方 `,-1)])]),_:1})]),_:1}),s(G,{text:`左侧提示`,side:`left`},{default:_(()=>[s(D,{variant:`ghost`},{default:_(()=>[...n[3]||(n[3]=[t(` 左侧 `,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaButton from '../../button/index.vue'
import FaTooltip from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaTooltip text="上方提示" side="top">
      <FaButton variant="ghost">
        上方
      </FaButton>
    </FaTooltip>
    <FaTooltip text="右侧提示" side="right">
      <FaButton variant="ghost">
        右侧
      </FaButton>
    </FaTooltip>
    <FaTooltip text="下方提示" side="bottom">
      <FaButton variant="ghost">
        下方
      </FaButton>
    </FaTooltip>
    <FaTooltip text="左侧提示" side="left">
      <FaButton variant="ghost">
        左侧
      </FaButton>
    </FaTooltip>
  </div>
</template>
`},{title:`对齐方式`,component:sc,componentRaw:cc},{title:`禁用`,component:hc,componentRaw:gc}],yc={class:`flex gap-2 items-center`},bc=e({__name:`_basic`,setup(e){return(e,t)=>(u(),v(`div`,yc,[s(Z,{value:`12.3%`}),s(Z,{value:`12.3%`,type:`down`})]))}}),xc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTrend from '../index.vue'
<\/script>

<template>
  <div class="flex gap-2 items-center">
    <FaTrend value="12.3%" />
    <FaTrend value="12.3%" type="down" />
  </div>
</template>
`,Sc={class:`space-y-4`},Cc={class:`flex flex-wrap gap-2 items-center`},wc={class:`flex flex-wrap gap-2 items-center`},Tc=e({__name:`_prefix-suffix`,setup(e){return(e,t)=>(u(),v(`div`,Sc,[b(`div`,null,[t[0]||(t[0]=b(`p`,{class:`text-sm text-muted-foreground mb-2`},` 前缀和后缀 `,-1)),b(`div`,Cc,[s(Z,{value:`12.3`,prefix:`$`,variant:`soft`}),s(Z,{value:`12.3`,suffix:`%`,variant:`soft`}),s(Z,{value:`1,234`,prefix:`¥`,variant:`outline`}),s(Z,{value:`45.6`,suffix:`kg`,variant:`outline`})])]),b(`div`,null,[t[1]||(t[1]=b(`p`,{class:`text-sm text-muted-foreground mb-2`},` 组合使用 `,-1)),b(`div`,wc,[s(Z,{value:`2,345`,prefix:`$`,suffix:`.00`,variant:`filled`}),s(Z,{value:`98.5`,suffix:`%`,variant:`filled`}),s(Z,{value:`+123`,prefix:`↑`,variant:`soft`}),s(Z,{value:`-45`,prefix:`↓`,variant:`soft`,type:`down`})])])]))}}),Ec=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTrend from '../index.vue'
<\/script>

<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        前缀和后缀
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <FaTrend value="12.3" prefix="$" variant="soft" />
        <FaTrend value="12.3" suffix="%" variant="soft" />
        <FaTrend value="1,234" prefix="¥" variant="outline" />
        <FaTrend value="45.6" suffix="kg" variant="outline" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        组合使用
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <FaTrend value="2,345" prefix="$" suffix=".00" variant="filled" />
        <FaTrend value="98.5" suffix="%" variant="filled" />
        <FaTrend value="+123" prefix="↑" variant="soft" />
        <FaTrend value="-45" prefix="↓" variant="soft" type="down" />
      </div>
    </div>
  </div>
</template>
`,Dc={class:`space-y-4`},Oc={class:`flex gap-2 items-center`},kc={class:`flex flex-wrap gap-2 items-center`},Ac=e({__name:`_reverse`,setup(e){return(e,t)=>(u(),v(`div`,Dc,[b(`div`,null,[t[0]||(t[0]=b(`p`,{class:`text-sm text-muted-foreground mb-2`},` Reverse 模式（用于成本、错误率等下降是好事的场景） `,-1)),b(`div`,Oc,[s(Z,{value:`错误率 -12.3%`,type:`down`,reverse:``,variant:`filled`}),s(Z,{value:`成本节省 15%`,type:`down`,reverse:``,variant:`soft`,prefix:`↓`})])]),b(`div`,null,[t[1]||(t[1]=b(`p`,{class:`text-sm text-muted-foreground mb-2`},` 不同风格对比 `,-1)),b(`div`,kc,[s(Z,{value:`12.3%`,reverse:``}),s(Z,{value:`12.3%`,reverse:``,variant:`filled`}),s(Z,{value:`12.3%`,reverse:``,variant:`soft`}),s(Z,{value:`12.3%`,reverse:``,variant:`outline`})])])]))}}),jc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTrend from '../index.vue'
<\/script>

<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Reverse 模式（用于成本、错误率等下降是好事的场景）
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="错误率 -12.3%" type="down" reverse variant="filled" />
        <FaTrend value="成本节省 15%" type="down" reverse variant="soft" prefix="↓" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        不同风格对比
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <FaTrend value="12.3%" reverse />
        <FaTrend value="12.3%" reverse variant="filled" />
        <FaTrend value="12.3%" reverse variant="soft" />
        <FaTrend value="12.3%" reverse variant="outline" />
      </div>
    </div>
  </div>
</template>
`,Mc={class:`flex gap-2 items-center`},Nc=e({__name:`_size`,setup(e){return(e,t)=>(u(),v(`div`,Mc,[s(Z,{value:`12.3%`,size:`small`}),s(Z,{value:`12.3%`,size:`medium`}),s(Z,{value:`12.3%`,size:`large`})]))}}),Pc=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTrend from '../index.vue'
<\/script>

<template>
  <div class="flex gap-2 items-center">
    <FaTrend value="12.3%" size="small" />
    <FaTrend value="12.3%" size="medium" />
    <FaTrend value="12.3%" size="large" />
  </div>
</template>
`,Fc={class:`space-y-4`},Ic={class:`flex gap-2 items-center`},Lc={class:`flex gap-2 items-center`},Rc={class:`flex gap-2 items-center`},zc={class:`flex gap-2 items-center`},Bc=[{title:`基础`,component:bc,componentRaw:xc},{title:`风格`,component:e({__name:`_variant`,setup(e){return(e,t)=>(u(),v(`div`,Fc,[b(`div`,null,[t[0]||(t[0]=b(`p`,{class:`text-sm text-muted-foreground mb-2`},` Default 风格 `,-1)),b(`div`,Ic,[s(Z,{value:`12.3%`}),s(Z,{value:`12.3%`,type:`down`})])]),b(`div`,null,[t[1]||(t[1]=b(`p`,{class:`text-sm text-muted-foreground mb-2`},` Filled 风格 `,-1)),b(`div`,Lc,[s(Z,{value:`+12.3%`,variant:`filled`}),s(Z,{value:`-12.3%`,variant:`filled`,type:`down`})])]),b(`div`,null,[t[2]||(t[2]=b(`p`,{class:`text-sm text-muted-foreground mb-2`},` Soft 风格 `,-1)),b(`div`,Rc,[s(Z,{value:`12.3%`,variant:`soft`}),s(Z,{value:`12.3%`,variant:`soft`,type:`down`})])]),b(`div`,null,[t[3]||(t[3]=b(`p`,{class:`text-sm text-muted-foreground mb-2`},` Outline 风格 `,-1)),b(`div`,zc,[s(Z,{value:`12.3%`,variant:`outline`}),s(Z,{value:`12.3%`,variant:`outline`,type:`down`})])])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTrend from '../index.vue'
<\/script>

<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Default 风格
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="12.3%" />
        <FaTrend value="12.3%" type="down" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Filled 风格
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="+12.3%" variant="filled" />
        <FaTrend value="-12.3%" variant="filled" type="down" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Soft 风格
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="12.3%" variant="soft" />
        <FaTrend value="12.3%" variant="soft" type="down" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Outline 风格
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="12.3%" variant="outline" />
        <FaTrend value="12.3%" variant="outline" type="down" />
      </div>
    </div>
  </div>
</template>
`},{title:`尺寸`,component:Nc,componentRaw:Pc},{title:`颜色反转`,component:Ac,componentRaw:jc},{title:`前缀/后缀`,component:Tc,componentRaw:Ec}];export{dr as A,Tt as B,wi as C,Jr as D,ui as E,cn as F,be as G,Ke as H,sn as I,ge as K,Xt as L,Zn as M,Xn as N,qr as O,Pn as P,It as R,Li as S,bi as T,Ne as U,tt as V,Se as W,Ma as _,Zs as a,ua as b,ls as c,Mo as d,_o as f,La as g,qa as h,Qs as i,Qn as j,Ir as k,rs as l,Ja as m,vc as n,Us as o,uo as p,ac as r,Hs as s,Bc as t,Uo as u,wa as v,Si as w,la as x,va as y,jt as z};