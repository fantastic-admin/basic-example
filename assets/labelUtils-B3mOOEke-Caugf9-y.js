
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{R as s}from"./vue-data-ui-8Gmf-dDN.js";function o({config:r={useValueParens:!1,usePercentageParens:!0,showValueFirst:!0},val:a,percentage:n,showVal:t=!0,showPercentage:u=!0}){if(!t&&!u)return"";const e={value:r.useValueParens?s(a):a,percentage:r.usePercentageParens?s(n):n};return t&&u?r.showValueFirst?"".concat(e.value," ").concat(e.percentage):"".concat(e.percentage," ").concat(e.value):t?e.value:u?e.percentage:""}function c({rounding:r,num:a,filler:n="-"}){return a.toFixed(r).split("").map(t=>n).join("")}export{o as l,c as p};
