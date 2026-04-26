
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{Pt as e}from"./lib-DMzrGQHK-Da8fubfb.js";function t({svgRef:t,fontSize:n,minFontSize:r,sizeRef:i,labelClass:a,labelTypes:o=[]}){let s=null;function c(e,t,n=1){let{x:r,y:i,width:a,height:o}=e.getBBox(),s=r>=t.x+n,c=r+a<=t.x+t.width-n,l=i>=t.y+n,u=i+o<=t.y+t.height-n;return s&&c&&l&&u}function l(e,t,n,r,i=120,a=1){let o=n,s=0;for(;s<i&&(e.setAttribute(`font-size`,o),!(c(e,t,a)||o<=r));)o-=.5,s+=1;return o<r?r:o}function u(){let s=t.value;if(!s)return;let[c,u,d,f]=s.getAttribute(`viewBox`).split(` `).map(Number),p={x:c,y:u,width:d,height:f};o.length||(o=[{selector:a,baseSize:n,minSize:r,sizeRef:i}]),o.map(e=>s.querySelectorAll(e.selector).length).reduce((e,t)=>e+t,0)!==0&&o.forEach(({selector:t,baseSize:n,minSize:r,sizeRef:i})=>{s.querySelectorAll(t).forEach(t=>{let a=l(t,p,e({el:t,bounds:p,currentFontSize:n,minFontSize:r,attempts:200,padding:1}),r,120,1);t.setAttribute(`font-size`,a),i.value=a})})}function d(){s&&cancelAnimationFrame(s),s=requestAnimationFrame(()=>{s=null,u()})}return{autoSizeLabels:d}}export{t};