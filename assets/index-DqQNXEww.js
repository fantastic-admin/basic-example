
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as B,q as N,p as I,C as J,r as T,G as C,z as D,O,$ as R,o as r,c as z,a0 as j,f as s,w as a,e as n,g as u,b as l,k as V,m as f,J as k,j as L,a1 as E,n as G,_ as W,A as F,W as K,v as Q}from"./index-Ruu4zcVF.js";import{_ as X}from"./HInput.vue_vue_type_script_setup_true_lang-D3fpjMTD.js";import{_ as Y}from"./HCheckList.vue_vue_type_script_setup_true_lang-2CEX9TrY.js";import{_ as Z}from"./HToggle.vue_vue_type_script_setup_true_lang-BDw4Gwrr.js";import{_}from"./HTooltip.vue_vue_type_script_setup_true_lang-B7ig-MGj.js";import{u as c}from"./index-D0VzS_hr.js";const h={class:"flex items-center justify-center pb-4"},ee={key:0,class:"divider"},te={key:1,class:"menu-mode"},se={class:"setting-item"},le={class:"label"},ie={class:"setting-item"},ne={class:"label"},oe={class:"setting-item"},de={key:2,class:"setting-item"},ae={class:"setting-item"},me={class:"setting-item"},ue={class:"setting-item"},ge={class:"setting-item"},re={class:"setting-item"},be={key:3,class:"setting-item"},pe={class:"setting-item"},ve={class:"label"},Ve={key:4,class:"setting-item"},fe={class:"setting-item"},ye={class:"label"},Ue={class:"setting-item"},ke={class:"label"},Se={class:"setting-item"},xe={class:"setting-item"},Ce={class:"setting-item"},Me={class:"setting-item"},He={class:"setting-item"},qe={class:"setting-item"},$e={class:"setting-item"},Ae={class:"setting-item"},we={class:"label"},Pe={class:"setting-item"},Be={class:"label"},Ne={class:"setting-item"},Ie={class:"setting-item"},Je={class:"label"},Te={class:"setting-item"},De={class:"label"},Oe={class:"setting-item"},Re={class:"setting-item"},ze={class:"label"},je=B({name:"AppSetting",__name:"index",setup(Le){const M=N(),t=I(),S=J(),b=T(!1);C(()=>t.settings.menu.mode,g=>{g==="single"?S.setActived(0):S.setActived(M.fullPath)}),D(()=>{O.on("global-app-setting-toggle",()=>{b.value=!b.value})});const{copy:H,copied:q,isSupported:$}=c();C(q,g=>{g&&R.success("复制成功，请粘贴到 src/settings.ts 文件中！",{zIndex:2e3})});function y(g){return typeof g=="object"&&!Array.isArray(g)}function x(g,e){if(!y(g)||!y(e))return e;const p={};for(const d in e){const m=g[d],o=e[d];if(JSON.stringify(m)!==JSON.stringify(o))if(y(m)&&y(o)){const U=x(m,o);Object.keys(U).length>0&&(p[d]=U)}else p[d]=o}return p}function A(){H(JSON.stringify(x(E,t.settings),null,2))}return(g,e)=>{const p=G,d=_,m=W,o=Z,U=Y,v=X,w=F,P=K;return r(),z(P,{modelValue:s(b),"onUpdate:modelValue":e[32]||(e[32]=i=>L(b)?b.value=i:null),title:"应用配置"},j({default:a(()=>[e[66]||(e[66]=l("div",{class:"rounded-2 bg-rose/20 px-4 py-2 text-sm/6 c-rose"},[l("p",{class:"my-1"}," 应用配置可实时预览效果，但只是临时生效，要想真正应用于项目，可以点击下方的「复制配置」按钮，并将配置粘贴到 src/settings.ts 文件中。 "),l("p",{class:"my-1"}," 注意：在生产环境中应关闭该模块。 ")],-1)),e[67]||(e[67]=l("div",{class:"divider"}," 颜色主题风格 ",-1)),l("div",h,[n(p,{modelValue:s(t).settings.app.colorScheme,"onUpdate:modelValue":e[0]||(e[0]=i=>s(t).settings.app.colorScheme=i),options:[{icon:"i-ri:sun-line",label:"明亮",value:"light"},{icon:"i-ri:moon-line",label:"暗黑",value:"dark"},{icon:"i-codicon:color-mode",label:"系统",value:""}],class:"w-60"},null,8,["modelValue"])]),s(t).mode==="pc"?(r(),V("div",ee," 导航栏模式 ")):f("",!0),s(t).mode==="pc"?(r(),V("div",te,[n(d,{text:"侧边栏模式 (含主导航)",placement:"bottom",delay:500},{default:a(()=>[l("div",{class:k(["mode mode-side",{active:s(t).settings.menu.mode==="side"}]),onClick:e[1]||(e[1]=i=>s(t).settings.menu.mode="side")},e[33]||(e[33]=[l("div",{class:"mode-container"},null,-1)]),2)]),_:1}),n(d,{text:"顶部模式",placement:"bottom",delay:500},{default:a(()=>[l("div",{class:k(["mode mode-head",{active:s(t).settings.menu.mode==="head"}]),onClick:e[2]||(e[2]=i=>s(t).settings.menu.mode="head")},e[34]||(e[34]=[l("div",{class:"mode-container"},null,-1)]),2)]),_:1}),n(d,{text:"侧边栏模式 (不含主导航)",placement:"bottom",delay:500},{default:a(()=>[l("div",{class:k(["mode mode-single",{active:s(t).settings.menu.mode==="single"}]),onClick:e[3]||(e[3]=i=>s(t).settings.menu.mode="single")},e[35]||(e[35]=[l("div",{class:"mode-container"},null,-1)]),2)]),_:1})])):f("",!0),e[68]||(e[68]=l("div",{class:"divider"}," 导航栏 ",-1)),l("div",se,[l("div",le,[e[36]||(e[36]=u(" 主导航切换跳转 ")),n(d,{text:"开启该功能后，切换主导航时，页面自动跳转至该主导航下，次导航里第一个导航"},{default:a(()=>[n(m,{name:"i-ri:question-line"})]),_:1})]),n(o,{modelValue:s(t).settings.menu.switchMainMenuAndPageJump,"onUpdate:modelValue":e[4]||(e[4]=i=>s(t).settings.menu.switchMainMenuAndPageJump=i),disabled:["single"].includes(s(t).settings.menu.mode)},null,8,["modelValue","disabled"])]),l("div",ie,[l("div",ne,[e[37]||(e[37]=u(" 次导航保持展开一个 ")),n(d,{text:"开启该功能后，次导航只保持单个菜单的展开"},{default:a(()=>[n(m,{name:"i-ri:question-line"})]),_:1})]),n(o,{modelValue:s(t).settings.menu.subMenuUniqueOpened,"onUpdate:modelValue":e[5]||(e[5]=i=>s(t).settings.menu.subMenuUniqueOpened=i)},null,8,["modelValue"])]),l("div",oe,[e[38]||(e[38]=l("div",{class:"label"}," 次导航是否折叠 ",-1)),n(o,{modelValue:s(t).settings.menu.subMenuCollapse,"onUpdate:modelValue":e[6]||(e[6]=i=>s(t).settings.menu.subMenuCollapse=i)},null,8,["modelValue"])]),s(t).mode==="pc"?(r(),V("div",de,[e[39]||(e[39]=l("div",{class:"label"}," 显示次导航折叠按钮 ",-1)),n(o,{modelValue:s(t).settings.menu.enableSubMenuCollapseButton,"onUpdate:modelValue":e[7]||(e[7]=i=>s(t).settings.menu.enableSubMenuCollapseButton=i)},null,8,["modelValue"])])):f("",!0),l("div",ae,[e[40]||(e[40]=l("div",{class:"label"}," 是否启用快捷键 ",-1)),n(o,{modelValue:s(t).settings.menu.enableHotkeys,"onUpdate:modelValue":e[8]||(e[8]=i=>s(t).settings.menu.enableHotkeys=i),disabled:["single"].includes(s(t).settings.menu.mode)},null,8,["modelValue","disabled"])]),e[69]||(e[69]=l("div",{class:"divider"}," 顶栏 ",-1)),l("div",me,[e[41]||(e[41]=l("div",{class:"label"}," 模式 ",-1)),n(U,{modelValue:s(t).settings.topbar.mode,"onUpdate:modelValue":e[9]||(e[9]=i=>s(t).settings.topbar.mode=i),options:[{label:"静止",value:"static"},{label:"固定",value:"fixed"},{label:"粘性",value:"sticky"}]},null,8,["modelValue"])]),l("div",null,[e[45]||(e[45]=l("div",{class:"divider"}," 标签栏 ",-1)),l("div",ue,[e[42]||(e[42]=l("div",{class:"label"}," 是否启用 ",-1)),n(o,{modelValue:s(t).settings.tabbar.enable,"onUpdate:modelValue":e[10]||(e[10]=i=>s(t).settings.tabbar.enable=i)},null,8,["modelValue"])]),l("div",ge,[e[43]||(e[43]=l("div",{class:"label"}," 是否显示图标 ",-1)),n(o,{modelValue:s(t).settings.tabbar.enableIcon,"onUpdate:modelValue":e[11]||(e[11]=i=>s(t).settings.tabbar.enableIcon=i),disabled:!s(t).settings.tabbar.enable},null,8,["modelValue","disabled"])]),l("div",re,[e[44]||(e[44]=l("div",{class:"label"}," 是否启用快捷键 ",-1)),n(o,{modelValue:s(t).settings.tabbar.enableHotkeys,"onUpdate:modelValue":e[12]||(e[12]=i=>s(t).settings.tabbar.enableHotkeys=i),disabled:!s(t).settings.tabbar.enable},null,8,["modelValue","disabled"])])]),e[70]||(e[70]=l("div",{class:"divider"}," 工具栏 ",-1)),s(t).mode==="pc"?(r(),V("div",be,[e[46]||(e[46]=l("div",{class:"label"}," 面包屑导航 ",-1)),n(o,{modelValue:s(t).settings.toolbar.breadcrumb,"onUpdate:modelValue":e[13]||(e[13]=i=>s(t).settings.toolbar.breadcrumb=i)},null,8,["modelValue"])])):f("",!0),l("div",pe,[l("div",ve,[e[47]||(e[47]=u(" 导航搜索 ")),n(d,{text:"对导航进行快捷搜索"},{default:a(()=>[n(m,{name:"i-ri:question-line"})]),_:1})]),n(o,{modelValue:s(t).settings.toolbar.navSearch,"onUpdate:modelValue":e[14]||(e[14]=i=>s(t).settings.toolbar.navSearch=i)},null,8,["modelValue"])]),s(t).mode==="pc"?(r(),V("div",Ve,[e[48]||(e[48]=l("div",{class:"label"}," 全屏 ",-1)),n(o,{modelValue:s(t).settings.toolbar.fullscreen,"onUpdate:modelValue":e[15]||(e[15]=i=>s(t).settings.toolbar.fullscreen=i)},null,8,["modelValue"])])):f("",!0),l("div",fe,[l("div",ye,[e[49]||(e[49]=u(" 页面刷新 ")),n(d,{text:"使用框架内提供的刷新功能进行页面刷新"},{default:a(()=>[n(m,{name:"i-ri:question-line"})]),_:1})]),n(o,{modelValue:s(t).settings.toolbar.pageReload,"onUpdate:modelValue":e[16]||(e[16]=i=>s(t).settings.toolbar.pageReload=i)},null,8,["modelValue"])]),l("div",Ue,[l("div",ke,[e[50]||(e[50]=u(" 颜色主题 ")),n(d,{text:"开启后可在明亮/暗黑模式中切换"},{default:a(()=>[n(m,{name:"i-ri:question-line"})]),_:1})]),n(o,{modelValue:s(t).settings.toolbar.colorScheme,"onUpdate:modelValue":e[17]||(e[17]=i=>s(t).settings.toolbar.colorScheme=i)},null,8,["modelValue"])]),e[71]||(e[71]=l("div",{class:"divider"}," 页面 ",-1)),l("div",Se,[e[51]||(e[51]=l("div",{class:"label"}," 是否启用快捷键 ",-1)),n(o,{modelValue:s(t).settings.mainPage.enableHotkeys,"onUpdate:modelValue":e[18]||(e[18]=i=>s(t).settings.mainPage.enableHotkeys=i)},null,8,["modelValue"])]),e[72]||(e[72]=l("div",{class:"divider"}," 导航搜索 ",-1)),l("div",xe,[e[52]||(e[52]=l("div",{class:"label"}," 是否启用快捷键 ",-1)),n(o,{modelValue:s(t).settings.navSearch.enableHotkeys,"onUpdate:modelValue":e[19]||(e[19]=i=>s(t).settings.navSearch.enableHotkeys=i),disabled:!s(t).settings.toolbar.navSearch},null,8,["modelValue","disabled"])]),e[73]||(e[73]=l("div",{class:"divider"}," 底部版权 ",-1)),l("div",Ce,[e[53]||(e[53]=l("div",{class:"label"}," 是否启用 ",-1)),n(o,{modelValue:s(t).settings.copyright.enable,"onUpdate:modelValue":e[20]||(e[20]=i=>s(t).settings.copyright.enable=i)},null,8,["modelValue"])]),l("div",Me,[e[54]||(e[54]=l("div",{class:"label"}," 日期 ",-1)),n(v,{modelValue:s(t).settings.copyright.dates,"onUpdate:modelValue":e[21]||(e[21]=i=>s(t).settings.copyright.dates=i),disabled:!s(t).settings.copyright.enable},null,8,["modelValue","disabled"])]),l("div",He,[e[55]||(e[55]=l("div",{class:"label"}," 公司 ",-1)),n(v,{modelValue:s(t).settings.copyright.company,"onUpdate:modelValue":e[22]||(e[22]=i=>s(t).settings.copyright.company=i),disabled:!s(t).settings.copyright.enable},null,8,["modelValue","disabled"])]),l("div",qe,[e[56]||(e[56]=l("div",{class:"label"}," 网址 ",-1)),n(v,{modelValue:s(t).settings.copyright.website,"onUpdate:modelValue":e[23]||(e[23]=i=>s(t).settings.copyright.website=i),disabled:!s(t).settings.copyright.enable},null,8,["modelValue","disabled"])]),l("div",$e,[e[57]||(e[57]=l("div",{class:"label"}," 备案 ",-1)),n(v,{modelValue:s(t).settings.copyright.beian,"onUpdate:modelValue":e[24]||(e[24]=i=>s(t).settings.copyright.beian=i),disabled:!s(t).settings.copyright.enable},null,8,["modelValue","disabled"])]),e[74]||(e[74]=l("div",{class:"divider"}," 主页 ",-1)),l("div",Ae,[l("div",we,[e[58]||(e[58]=u(" 是否启用 ")),n(d,{text:"该功能开启时，登录成功默认进入主页，反之则默认进入导航栏里第一个导航页面"},{default:a(()=>[n(m,{name:"i-ri:question-line"})]),_:1})]),n(o,{modelValue:s(t).settings.home.enable,"onUpdate:modelValue":e[25]||(e[25]=i=>s(t).settings.home.enable=i)},null,8,["modelValue"])]),l("div",Pe,[l("div",Be,[e[59]||(e[59]=u(" 主页名称 ")),n(d,{text:"开启国际化时，该设置无效"},{default:a(()=>[n(m,{name:"i-ri:question-line"})]),_:1})]),n(v,{modelValue:s(t).settings.home.title,"onUpdate:modelValue":e[26]||(e[26]=i=>s(t).settings.home.title=i)},null,8,["modelValue"])]),e[75]||(e[75]=l("div",{class:"divider"}," 其它 ",-1)),l("div",Ne,[e[60]||(e[60]=l("div",{class:"label"}," 是否启用权限 ",-1)),n(o,{modelValue:s(t).settings.app.enablePermission,"onUpdate:modelValue":e[27]||(e[27]=i=>s(t).settings.app.enablePermission=i)},null,8,["modelValue"])]),l("div",Ie,[l("div",Je,[e[61]||(e[61]=u(" 载入进度条 ")),n(d,{text:"该功能开启时，跳转路由会看到页面顶部有进度条"},{default:a(()=>[n(m,{name:"i-ri:question-line"})]),_:1})]),n(o,{modelValue:s(t).settings.app.enableProgress,"onUpdate:modelValue":e[28]||(e[28]=i=>s(t).settings.app.enableProgress=i)},null,8,["modelValue"])]),l("div",Te,[l("div",De,[e[62]||(e[62]=u(" 哀悼模式 ")),n(d,{text:"该功能开启时，整站会变为灰色"},{default:a(()=>[n(m,{name:"i-ri:question-line"})]),_:1})]),n(o,{modelValue:s(t).settings.app.enableMournMode,"onUpdate:modelValue":e[29]||(e[29]=i=>s(t).settings.app.enableMournMode=i)},null,8,["modelValue"])]),l("div",Oe,[e[63]||(e[63]=l("div",{class:"label"}," 色弱模式 ",-1)),n(o,{modelValue:s(t).settings.app.enableColorAmblyopiaMode,"onUpdate:modelValue":e[30]||(e[30]=i=>s(t).settings.app.enableColorAmblyopiaMode=i)},null,8,["modelValue"])]),l("div",Re,[l("div",ze,[e[64]||(e[64]=u(" 动态标题 ")),n(d,{text:"该功能开启时，页面标题会显示当前路由标题，格式为“页面标题 - 网站名称”；关闭时则显示网站名称，网站名称在项目根目录下 .env.* 文件里配置"},{default:a(()=>[n(m,{name:"i-ri:question-line"})]),_:1})]),n(o,{modelValue:s(t).settings.app.enableDynamicTitle,"onUpdate:modelValue":e[31]||(e[31]=i=>s(t).settings.app.enableDynamicTitle=i)},null,8,["modelValue"])])]),_:2},[s($)?{name:"footer",fn:a(()=>[n(w,{block:"",onClick:A},{default:a(()=>[n(m,{name:"i-ep:document-copy"}),e[65]||(e[65]=u(" 复制配置 "))]),_:1})]),key:"0"}:void 0]),1032,["modelValue"])}}}),Xe=Q(je,[["__scopeId","data-v-22b881a9"]]);export{Xe as default};