
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{_ as e,m as t}from"./src-CLMBPGj1.js";import{B as n}from"./reactivity.esm-bundler-D9OPVc9J.js";import{D as r,b as i,bt as a,k as o,mt as s,o as c,qt as l,v as u,wt as d}from"./runtime-core.esm-bundler-D-xeQwTN.js";import"./examples-BWatsn1K.js";import{r as f}from"./popover-aV8xI-md.js";import{t as p}from"./page-header-CflkT4MF.js";var m=o({__name:`_basic`,setup(e){return(e,t)=>(s(),u(f,{src:`https://fantastic-admin.hurui.me/logo.svg`}))}}),h=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaAvatar from '../index.vue'
<\/script>

<template>
  <FaAvatar src="https://fantastic-admin.hurui.me/logo.svg" />
</template>
`,g={class:`flex space-x--2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background`},_=[{title:`基础`,component:m,componentRaw:h},{title:`回退显示`,component:o({__name:`_fallback`,setup(e){return(e,t)=>(s(),u(f,{src:``,fallback:`Hooray`}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaAvatar from '../index.vue'
<\/script>

<template>
  <FaAvatar src="" fallback="Hooray" />
</template>
`},{title:`自定义样式`,component:o({__name:`_custom-style`,setup(e){return(e,n)=>(s(),i(`div`,g,[r(t,{text:`Fantastic-admin`},{default:l(()=>[r(f,{src:`https://github.com/fantastic-admin.png`,class:`transition hover:scale-110 hover:z-1`})]),_:1}),r(t,{text:`Hooray`},{default:l(()=>[r(f,{src:`https://github.com/hooray.png`,class:`transition hover:scale-110 hover:z-1`})]),_:1}),r(t,{text:`Admin`},{default:l(()=>[r(f,{src:`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=admin`,class:`transition hover:scale-110 hover:z-1`})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
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
`}],v=o({__name:`avatar`,setup(t){return(t,o)=>{let f=p,m=e;return s(),i(`div`,null,[r(f,{title:`头像`,description:`FaAvatar`}),(s(!0),i(c,null,a(n(_),e=>(s(),u(m,{key:e.title,code:e.componentRaw,title:e.title},{default:l(()=>[(s(),u(d(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{v as default};