
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{I as v}from"./vue-data-ui-8Gmf-dDN.js";function B({svgRef:m,fontSize:b,minFontSize:S,sizeRef:g,labelClass:p,labelTypes:c=[]}){let a=null;function d(i,t,n=1){const{x:r,y:l,width:s,height:e}=i.getBBox(),o=r>=t.x+n,f=r+s<=t.x+t.width-n,h=l>=t.y+n,u=l+e<=t.y+t.height-n;return o&&f&&h&&u}function x(i,t,n,r,l=120,s=1){let e=n,o=0;for(;o<l&&(i.setAttribute("font-size",e),!(d(i,t,s)||e<=r));)e-=.5,o+=1;return e<r?r:e}function y(){const i=m.value;if(!i)return;const[t,n,r,l]=i.getAttribute("viewBox").split(" ").map(Number),s={x:t,y:n,width:r,height:l};c.length||(c=[{selector:p,baseSize:b,minSize:S,sizeRef:g}]),c.map(e=>i.querySelectorAll(e.selector).length).reduce((e,o)=>e+o,0)!==0&&c.forEach(({selector:e,baseSize:o,minSize:f,sizeRef:h})=>{i.querySelectorAll(e).forEach(u=>{const F=v({el:u,bounds:s,currentFontSize:o,minFontSize:f,attempts:200,padding:1}),z=x(u,s,F,f,120,1);u.setAttribute("font-size",z),h.value=z})})}function A(){a&&cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=null,y()})}return{autoSizeLabels:A}}export{B as v};
