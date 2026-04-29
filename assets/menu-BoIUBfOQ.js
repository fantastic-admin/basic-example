
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{t as e}from"./settings-D3htap4A.js";import{i as t}from"./auth-CZ-C9XwN.js";import{s as n}from"./vue-router-BO2q9CeE.js";function r(){let r=n(),i=e(),a=t();function o(e=`[ 无标题 ]`){return typeof e==`function`?e():e}function s(e){a.setActived(e),(i.settings.menu.mainMenuClickMode===`jump`||i.settings.menu.mainMenuClickMode===`smart`&&a.sidebarMenusHasOnlyMenu)&&r.push(a.sidebarMenusFirstDeepestPath)}return{generateTitle:o,switchTo:s}}export{r as t};