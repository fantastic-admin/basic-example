
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as B,p as P,a as x,o as I,k as y,e,w as l,b as i,g as s,f,R as c,Q as R,x as a}from"./index-Ruu4zcVF.js";import{u as E}from"./useTabbar-BUCVpiXe.js";const L=B({__name:"index",setup(N){const u=P(),o=E();function r(){o.open(u.settings.home.fullPath)}function p(){o.close(u.settings.home.fullPath)}function m(){o.closeById()}function k(){o.closeById(u.settings.home.fullPath)}function C(){o.closeOtherSide()}function b(){o.closeLeftSide()}function S(){o.closeRightSide()}return(O,t)=>{const g=c,n=x("ElButton"),d=R;return I(),y("div",null,[e(g,{title:"标签栏",content:"功能类似于浏览器的标签栏，支持右键操作"}),e(d,{title:"打开新标签页"},{default:l(()=>[t[1]||(t[1]=i("p",null,"如果目标地址已在标签栏存在，则直接切换并访问。如果目标地址在标签栏不存在，则会在当前标签页后面插入新的标签页。",-1)),e(n,{onClick:r},{default:l(()=>t[0]||(t[0]=[s(" 打开主页 ")])),_:1})]),_:1}),e(d,{title:"关闭当前标签页并跳转"},{default:l(()=>[t[3]||(t[3]=i("p",null,"关闭当前标签页，同时跳转到新页面。",-1)),e(n,{onClick:p},{default:l(()=>t[2]||(t[2]=[s(" 关闭当前标签页，并跳转到主页 ")])),_:1})]),_:1}),e(d,{title:"关闭指定标签页"},{default:l(()=>[t[6]||(t[6]=i("p",null,"如果当前只有一个标签时，则无法关闭。",-1)),t[7]||(t[7]=i("p",null,"如果关闭的是当前标签页，则会在关闭后跳转至紧邻的标签页。",-1)),t[8]||(t[8]=i("p",null,"如果关闭的目标页面不存在，则无法关闭。",-1)),e(n,{onClick:m},{default:l(()=>t[4]||(t[4]=[s(" 关闭当前页面 ")])),_:1}),e(n,{onClick:k},{default:l(()=>t[5]||(t[5]=[s(" 关闭主页 ")])),_:1})]),_:1}),e(d,{title:"关闭非当前标签页"},{default:l(()=>[t[12]||(t[12]=i("p",null,"除了提供关闭非当前标签页的 API 外，还提供了校验 API 。",-1)),e(n,{disabled:!f(o).checkCloseOtherSide(),onClick:C},{default:l(()=>t[9]||(t[9]=[s(" 关闭两侧标签页 ")])),_:1},8,["disabled"]),e(n,{disabled:!f(o).checkCloseLeftSide(),onClick:b},{default:l(()=>t[10]||(t[10]=[s(" 关闭左侧标签页 ")])),_:1},8,["disabled"]),e(n,{disabled:!f(o).checkCloseRightSide(),onClick:S},{default:l(()=>t[11]||(t[11]=[s(" 关闭右侧标签页 ")])),_:1},8,["disabled"])]),_:1})])}}});typeof a=="function"&&a(L);export{L as default};