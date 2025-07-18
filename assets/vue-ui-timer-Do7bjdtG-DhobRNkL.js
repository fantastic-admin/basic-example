
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PackageVersion-CQFOMkQe-0FqyGrBD.js","./index-Bw0OMqcE.js","./index-OhWpGyNh.css"])))=>i.map(i=>d[i]);
import{r as v,am as J,C as ae,H as A,an as le,I as se,c as o,o as s,y as h,a as M,M as f,x as re,e as Y,b as _,bY as oe,V as D,m as K,n as U,g as G,t as ue,bZ as ie}from"./index-Bw0OMqcE.js";import{c as ne}from"./useNestedProp-upzRxZOw-DYG9TnLB.js";import{f as ce,j as ve,A as he,s as Z}from"./vue-data-ui-WgLCaB4C.js";import{E as pe,M as de}from"./useResponsive-DfdjqQps-DzVAt69W.js";import{o as we}from"./useChartAccessibility-9icAAmYg-BbSFiQyI.js";import fe from"./Title-CIt92-DI-BHK2kN4a.js";import S from"./BaseIcon-2scCpKdr-DDi3wjX0.js";import{s as ke}from"./_plugin-vue_export-helper-CHgC5LLL-lGy7RumW.js";import"./alert-vD1KFDPA.js";class me{constructor(z,B,R,F=!0,T=!0){this.interval=B,this.elapsed=0,this.isPaused=!1;const m=`
            let interval;
            let elapsed = 0;
            let paused = false;
            let startTime;
            let tickInterval;

            onmessage = function(e) {
                const { action, data } = e.data;

                switch(action) {
                    case 'start':
                        startTime = Date.now();
                        tickInterval = data.interval;
                        elapsed = 0;
                        paused = false;
                        interval = setInterval(() => {
                            elapsed += tickInterval;
                            postMessage({ elapsed, timestamp: Date.now() });
                        }, tickInterval);
                        break;
                    
                    case 'pause':
                        paused = true;
                        clearInterval(interval);
                        elapsed = Date.now() - startTime;
                        break;

                    case 'resume':
                        if (paused) {
                            startTime = Date.now() - elapsed;
                            interval = setInterval(() => {
                                elapsed += tickInterval;
                                postMessage({ elapsed, timestamp: Date.now() });
                            }, tickInterval);
                        }
                        paused = false;
                        break;

                    case 'stop':
                        clearInterval(interval);
                        elapsed = 0;
                        postMessage({ elapsed });
                        break;

                    case 'reset':
                        elapsed = 0;
                        clearInterval(interval);
                        postMessage({ elapsed });
                        break;

                    case 'lap':
                        postMessage({
                            elapsed,
                            timestamp: Date.now(),
                            action: 'lap'
                        });
                        break;

                    default:
                        break;
                }
            };
        `,C=new Blob([m],{type:"application/javascript"}),H=URL.createObjectURL(C),i=new Worker(H);function c(r){let p=Math.floor(r/1e3),k=Math.floor(r%1e3/10),g=Math.floor(p/3600),e=Math.floor(p%3600/60),P=p%60,d="";return T&&(d+=String(g).padStart(2,"0")+":"),d+=String(e).padStart(2,"0")+":",d+=String(P).padStart(2,"0"),F&&(d+="."+String(k).padStart(2,"0")),d}this.start=()=>{this.isPaused=!1,i.postMessage({action:"start",data:{interval:this.interval}})},this.pause=()=>{this.isPaused?this.resume():(this.isPaused=!0,i.postMessage({action:"pause"}))},this.resume=()=>{this.isPaused&&(i.postMessage({action:"resume"}),this.isPaused=!1)},this.stop=()=>{i.postMessage({action:"stop"}),this.isPaused=!1},this.reset=()=>{i.postMessage({action:"reset"}),this.elapsed=0,this.isPaused=!1},this.restart=()=>{this.stop(),this.start()},this.lap=()=>new Promise(r=>{i.postMessage({action:"lap"});const p=k=>{const{elapsed:g,timestamp:e,action:P}=k.data;if(P==="lap"){const d=c(g);r({timestamp:e||0,elapsed:g,formatted:d})}};i.addEventListener("message",p,{once:!0})}),i.onmessage=r=>{const{elapsed:p,timestamp:k}=r.data;this.elapsed=p,z({timestamp:k||0,elapsed:this.elapsed,formatted:c(this.elapsed)})},i.onerror=r=>{R&&R(r)}}}const ge=["xmlns","viewBox"],ye=["width","height"],be={key:1},xe=["id"],$e=["stop-color"],Me=["stop-color"],_e=["cx","cy","r","fill","stroke","stroke-width"],Ce=["d","stroke","stroke-width"],Pe=["r","fill","stroke","stroke-width"],Ie=["r","fill","stroke","stroke-width"],Se=["x","y"],Re=["x","y","font-size","fill","font-weight"],Te={key:0,class:"vue-ui-timer-controls"},He=["title"],je=["title"],Ae=["title"],De=["title"],ze=["title"],Be={__name:"vue-ui-timer",props:{config:{type:Object,default(){return{}}}},emits:["start","pause","reset","restart","lap"],setup(q,{expose:z,emit:B}){const R=oe(()=>ie(()=>import("./PackageVersion-CQFOMkQe-0FqyGrBD.js"),__vite__mapDeps([0,1,2]),import.meta.url)),{vue_ui_timer:F}=ce(),T=q,m=B,C=v(null),H=v(null),i=v(null),c=J(null),r=J(null),p=v(ve()),k=v(0);ae(()=>{g()});function g(){if(e.value.responsive){const a=pe(()=>{const{width:u,height:n}=de({chart:C.value,title:e.value.style.title.text?H.value:null,legend:i.value});requestAnimationFrame(()=>{t.value.width=u,t.value.height=n,e.value.responsiveProportionalSizing?(t.value.tracker.core=Z({relator:Math.min(u,n),adjuster:e.value.style.width,source:6*e.value.stopwatch.tracker.radiusRatio,threshold:1,fallback:1}),t.value.tracker.aura=Z({relator:Math.min(u,n),adjuster:e.value.style.width,source:12*e.value.stopwatch.tracker.aura.radiusRatio,threshold:1,fallback:1}),t.value.label=Z({relator:Math.min(u,n),adjuster:e.value.style.width,source:e.value.stopwatch.label.fontSize,threshold:10,fallback:10})):t.value.label=e.value.stopwatch.label.fontSize})});c.value&&(r.value&&c.value.unobserve(r.value),c.value.disconnect()),c.value=new ResizeObserver(a),r.value=C.value.parentNode,c.value.observe(r.value)}}le(()=>{c.value&&(r.value&&c.value.unobserve(r.value),c.value.disconnect())});const e=A({get:()=>d(),set:a=>a}),{svgRef:P}=we({config:e.value.style.title});function d(){return ne({userConfig:T.config,defaultConfig:F})}se(()=>T.config,a=>{e.value=d(),g(),k.value+=1},{deep:!0});const Q=A(()=>{if(e.value.stopwatch.showHours&&e.value.stopwatch.showHundredth)return"00:00:00.00";if(e.value.stopwatch.showHours&&!e.value.stopwatch.showHundredth)return"00:00:00";if(!e.value.stopwatch.showHours&&e.value.stopwatch.showHundredth)return"00:00.00";if(!e.value.stopwatch.showHours&&!e.value.stopwatch.showHundredth)return"00:00"}),t=v({height:e.value.style.height,width:e.value.style.width,tracker:{core:6*e.value.stopwatch.tracker.radiusRatio,aura:12*e.value.stopwatch.tracker.aura.radiusRatio},label:e.value.stopwatch.label.fontSize}),y=v(0),I=new me(a=>X(a),10,"",e.value.stopwatch.showHundredth,e.value.stopwatch.showHours),E=v(!0),l=v(!1),w=v(!1);function O(){m("start"),E.value&&I.start(),E.value=!1,l.value=!0}function W(){l.value&&(m("reset"),I.stop(),x.value=[],E.value=!0,l.value=!1)}function L(){w.value=!w.value,m("pause",y.value),I.pause()}function V(){l.value&&(w.value=!1,m("restart"),x.value=[],I.restart())}const x=v([]);async function j(){if(!l.value||w.value)return;const a=await I.lap();a&&(x.value.push(a),m("lap",x.value))}function X({timestamp:a,elapsed:u,formatted:n}){y.value={timestamp:a,elapsed:u,formatted:n}}const b=A(()=>Math.min(t.value.width,t.value.height)/2.5*e.value.stopwatch.track.radiusRatio);function ee(a,u){const n=360/(u*1e3);return a*n%360}function te(a){let u=a*(Math.PI/180),n=t.value.width/2+b.value*Math.cos(u),N=t.value.height/2+b.value*Math.sin(u);return{cx:n,cy:N}}const $=A(()=>{const a=ee(y.value.elapsed,e.value.stopwatch.cycleSeconds),{cx:u,cy:n}=te(a-90),N=a>180?1:0;return{cx:u||t.value.width/2,cy:n||t.value.height/2-b.value,largeArcFlag:N,sweepFlag:1}});return z({start:O,pause:L,reset:W,restart:V,lap:j}),(a,u)=>(s(),o("div",{ref_key:"timerChart",ref:C,class:"vue-ui-timer",style:f({fontFamily:e.value.style.fontFamily,width:"100%",height:e.value.responsive?"100%":"auto",textAlign:"center"})},[e.value.style.title.text?(s(),o("div",{key:0,ref_key:"chartTitle",ref:H,style:f({width:"100%",background:e.value.style.backgroundColor})},[(s(),re(fe,{key:`title_${k.value}`,config:{title:{cy:"title",...e.value.style.title},subtitle:{cy:"subtitle",...e.value.style.title.subtitle}}},null,8,["config"]))],4)):h("",!0),(s(),o("svg",{ref_key:"svgRef",ref:P,xmlns:Y(he),viewBox:`0 0 ${t.value.width<=0?10:t.value.width} ${t.value.height<=0?10:t.value.height}`,style:f({maxWidth:"100%",overflow:"visible",background:e.value.style.backgroundColor})},[_(Y(R)),a.$slots["chart-background"]?(s(),o("foreignObject",{key:0,x:0,y:0,width:t.value.width<=0?10:t.value.width,height:t.value.height<=0?10:t.value.height,style:{pointerEvents:"none"}},[D(a.$slots,"chart-background",{},void 0,!0)],8,ye)):h("",!0),e.value.stopwatch.tracker.gradient.show?(s(),o("defs",be,[M("radialGradient",{id:`tracker_gradient_${p.value}`,cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},[M("stop",{offset:"0%","stop-color":e.value.stopwatch.tracker.gradient.color},null,8,$e),M("stop",{offset:"100%","stop-color":e.value.stopwatch.tracker.fill},null,8,Me)],8,xe)])):h("",!0),M("circle",{cx:t.value.width/2,cy:t.value.height/2,r:b.value,fill:e.value.stopwatch.track.fill,stroke:e.value.stopwatch.track.stroke,"stroke-width":e.value.stopwatch.track.strokeWidth},null,8,_e),e.value.stopwatch.cycleTrack.show?(s(),o("path",{key:2,d:`M ${t.value.width/2},${t.value.height/2-b.value} A ${b.value},${b.value} 0 ${$.value.largeArcFlag},${$.value.sweepFlag} ${$.value.cx},${$.value.cy}`,stroke:e.value.stopwatch.cycleTrack.stroke,"stroke-width":e.value.stopwatch.cycleTrack.strokeWidth,"stroke-linecap":"round",fill:"none"},null,8,Ce)):h("",!0),M("circle",K($.value,{r:t.value.tracker.core,fill:e.value.stopwatch.tracker.gradient.show?`url(#tracker_gradient_${p.value})`:e.value.stopwatch.tracker.fill,stroke:e.value.stopwatch.tracker.stroke,"stroke-width":e.value.stopwatch.tracker.strokeWidth}),null,16,Pe),e.value.stopwatch.tracker.aura.show?(s(),o("circle",K({key:3},$.value,{r:t.value.tracker.aura,fill:`${e.value.stopwatch.tracker.aura.fill}20`,stroke:e.value.stopwatch.tracker.aura.stroke,"stroke-width":e.value.stopwatch.tracker.aura.strokeWidth}),null,16,Ie)):h("",!0),a.$slots.time?(s(),o("foreignObject",{key:4,x:t.value.width/2,y:t.value.height/2,height:"0.1",width:"0.1",style:{overflow:"visible"}},[D(a.$slots,"time",U(G({...y.value})),void 0,!0)],8,Se)):(s(),o("text",{key:5,x:t.value.width/2,y:t.value.height/2+t.value.label/4,"font-size":t.value.label,"text-anchor":"middle",fill:e.value.stopwatch.label.color,"font-weight":e.value.stopwatch.label.bold?"bold":"normal",style:{"font-variant-numeric":"tabular-nums !important"}},ue(y.value.formatted||Q.value),9,Re))],12,ge)),M("div",{ref_key:"chartLegend",ref:i,style:f({width:"100%",backgroundColor:e.value.stopwatch.legend.backgroundColor})},[a.$slots.controls?h("",!0):(s(),o("div",Te,[e.value.stopwatch.legend.buttons.start?(s(),o("button",{key:0,title:e.value.stopwatch.legend.buttonTitles.start,onClick:O,class:"vue-ui-timer-button",style:f({opacity:l.value?.2:1,cursor:l.value?"default":"pointer"})},[_(S,{name:"play",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,He)):h("",!0),e.value.stopwatch.legend.buttons.pause?(s(),o("button",{key:1,title:w.value?e.value.stopwatch.legend.buttonTitles.resume:e.value.stopwatch.legend.buttonTitles.pause,onClick:L,class:"vue-ui-timer-button",style:f({opacity:l.value?1:.2,cursor:l.value?"pointer":"default"})},[_(S,{name:"pause",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,je)):h("",!0),e.value.stopwatch.legend.buttons.reset?(s(),o("button",{key:2,title:e.value.stopwatch.legend.buttonTitles.reset,onClick:W,class:"vue-ui-timer-button",style:f({opacity:l.value?1:.2,cursor:l.value?"pointer":"default"})},[_(S,{name:"stop",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,Ae)):h("",!0),e.value.stopwatch.legend.buttons.restart?(s(),o("button",{key:3,title:e.value.stopwatch.legend.buttonTitles.restart,onClick:V,class:"vue-ui-timer-button",style:f({opacity:l.value?1:.2,cursor:l.value?"pointer":"default"})},[_(S,{name:"restart",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,De)):h("",!0),e.value.stopwatch.legend.buttons.lap?(s(),o("button",{key:4,title:e.value.stopwatch.legend.buttonTitles.lap,onClick:j,class:"vue-ui-timer-button",style:f({opacity:l.value&&!w.value?1:.2,cursor:l.value&&!w.value?"pointer":"default"})},[_(S,{name:"lap",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,ze)):h("",!0)])),D(a.$slots,"controls",U(G({start:O,pause:L,reset:W,restart:V,lap:j,laps:x.value,isRunning:l.value,isPaused:w.value,...y.value})),void 0,!0),D(a.$slots,"laps",U(G({laps:x.value,lap:j,isRunning:l.value,isPaused:w.value,...y.value})),void 0,!0)],4)],4))}},Ze=ke(Be,[["__scopeId","data-v-5e3deab2"]]);export{Ze as default};
