
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as m,l as n,c as p,o as _,b as e,O as u,f as t,N as h,A as l}from"./index-ehumLfpb.js";const f=m({__name:"image.preview",setup(g){const i=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",src:"https://fantastic-admin.hurui.me/logo.svg"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",src:"https://fantastic-admin.hurui.me/logo.svg"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",src:"https://fantastic-admin.hurui.me/logo.svg"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",src:"https://fantastic-admin.hurui.me/logo.svg"}];return(v,w)=>{const r=u,o=n("ImagePreview"),s=h,a=n("ElTableColumn"),c=n("ElTable");return _(),p("div",null,[e(r,{title:"图片预览",description:"ImagePreview"}),e(s,null,{default:t(()=>[e(o,{src:"https://fantastic-admin.hurui.me/logo.svg",width:200})]),_:1}),e(s,{title:"图片加载失败时"},{default:t(()=>[e(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})]),_:1}),e(s,{title:"结合 el-table 使用"},{default:t(()=>[e(c,{data:i,style:{width:"100%"}},{default:t(()=>[e(a,{prop:"date",label:"日期",width:"180",fixed:"left"}),e(a,{prop:"name",label:"姓名",width:"180"}),e(a,{prop:"address",label:"地址"}),e(a,{label:"图片"},{default:t(({row:d})=>[e(o,{src:d.src,width:"100px",height:"100px"},null,8,["src"])]),_:1})]),_:1})]),_:1})])}}});typeof l=="function"&&l(f);export{f as default};
