
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{u as v}from"./vue-data-ui-CB3PV9UD.js";function B({svgRef:m,fontSize:b,minFontSize:S,sizeRef:g,labelClass:p,labelTypes:a=[]}){let c=null;function d(i,t,n=1){const{x:r,y:o,width:u,height:e}=i.getBBox(),l=r>=t.x+n,f=r+u<=t.x+t.width-n,z=o>=t.y+n,s=o+e<=t.y+t.height-n;return l&&f&&z&&s}function x(i,t,n,r,o=120,u=1){let e=n,l=0;for(;l<o&&(i.setAttribute("font-size",e),!(d(i,t,u)||e<=r));)e-=.5,l+=1;return e<r?r:e}function y(){const i=m.value;if(!i)return;const[t,n,r,o]=i.getAttribute("viewBox").split(" ").map(Number),u={x:t,y:n,width:r,height:o};a.length||(a=[{selector:p,baseSize:b,minSize:S,sizeRef:g}]),a.map(e=>i.querySelectorAll(e.selector).length).reduce((e,l)=>e+l,0)!==0&&a.forEach(({selector:e,baseSize:l,minSize:f,sizeRef:z})=>{i.querySelectorAll(e).forEach(s=>{const F=v({el:s,bounds:u,currentFontSize:l,minFontSize:f,attempts:200,padding:1}),h=x(s,u,F,f,120,1);s.setAttribute("font-size",h),z.value=h})})}function A(){c&&cancelAnimationFrame(c),c=requestAnimationFrame(()=>{c=null,y()})}return{autoSizeLabels:A}}export{B as v};
