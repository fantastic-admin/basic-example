
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PackageVersion-BrZUdhZl-apM-EhQ0.js","./index-CasMvcc7.js","./index-aVygQH8V.css"])))=>i.map(i=>d[i]);
import{r as v,aq as Z,C as ae,H as B,ar as le,I as se,c as o,o as s,y as h,a as M,M as f,x as re,e as K,b as _,b_ as oe,V as D,m as Q,n as U,g as q,t as ue,b$ as ie}from"./index-CasMvcc7.js";import{c as ne}from"./useNestedProp-DpGVxlm5-CXAdB38j.js";import{p as ce,e as ve,B as he,z as G}from"./vue-data-ui-Bh0ZQjls.js";import{E as pe,M as de}from"./useResponsive-DfdjqQps-DzVAt69W.js";import{o as we}from"./useChartAccessibility-9icAAmYg-BXPlSpJz.js";import fe from"./Title-C6IPIA3g-Dh-yyWmy.js";import S from"./BaseIcon-CIwIBC3F-Clvj4yK4.js";import{s as ke}from"./_plugin-vue_export-helper-CHgC5LLL-lGy7RumW.js";import"./alert-BSSAoAkz.js";class me{constructor(j,A,R,F=!0,T=!0){this.interval=A,this.elapsed=0,this.isPaused=!1;const m=`
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
        `,C=new Blob([m],{type:"application/javascript"}),z=URL.createObjectURL(C),i=new Worker(z);function c(r){let p=Math.floor(r/1e3),k=Math.floor(r%1e3/10),g=Math.floor(p/3600),e=Math.floor(p%3600/60),P=p%60,d="";return T&&(d+=String(g).padStart(2,"0")+":"),d+=String(e).padStart(2,"0")+":",d+=String(P).padStart(2,"0"),F&&(d+="."+String(k).padStart(2,"0")),d}this.start=()=>{this.isPaused=!1,i.postMessage({action:"start",data:{interval:this.interval}})},this.pause=()=>{this.isPaused?this.resume():(this.isPaused=!0,i.postMessage({action:"pause"}))},this.resume=()=>{this.isPaused&&(i.postMessage({action:"resume"}),this.isPaused=!1)},this.stop=()=>{i.postMessage({action:"stop"}),this.isPaused=!1},this.reset=()=>{i.postMessage({action:"reset"}),this.elapsed=0,this.isPaused=!1},this.restart=()=>{this.stop(),this.start()},this.lap=()=>new Promise(r=>{i.postMessage({action:"lap"});const p=k=>{const{elapsed:g,timestamp:e,action:P}=k.data;if(P==="lap"){const d=c(g);r({timestamp:e||0,elapsed:g,formatted:d})}};i.addEventListener("message",p,{once:!0})}),i.onmessage=r=>{const{elapsed:p,timestamp:k}=r.data;this.elapsed=p,j({timestamp:k||0,elapsed:this.elapsed,formatted:c(this.elapsed)})},i.onerror=r=>{R&&R(r)}}}const ge=["xmlns","viewBox"],ye=["width","height"],be={key:1},xe=["id"],$e=["stop-color"],Me=["stop-color"],_e=["cx","cy","r","fill","stroke","stroke-width"],Ce=["d","stroke","stroke-width"],Pe=["r","fill","stroke","stroke-width"],Ie=["r","fill","stroke","stroke-width"],Se=["x","y"],Re=["x","y","font-size","fill","font-weight"],Te={key:0,class:"vue-ui-timer-controls"},ze=["title"],He=["title"],Be=["title"],De=["title"],je=["title"],Ae={__name:"vue-ui-timer",props:{config:{type:Object,default(){return{}}}},emits:["start","pause","reset","restart","lap"],setup(J,{expose:j,emit:A}){const R=oe(()=>ie(()=>import("./PackageVersion-BrZUdhZl-apM-EhQ0.js"),__vite__mapDeps([0,1,2]),import.meta.url)),{vue_ui_timer:F}=ce(),T=J,m=A,C=v(null),z=v(null),i=v(null),c=Z(null),r=Z(null),p=v(ve()),k=v(0);ae(()=>{g()});function g(){if(e.value.responsive){const a=pe(()=>{const{width:u,height:n}=de({chart:C.value,title:e.value.style.title.text?z.value:null,legend:i.value});requestAnimationFrame(()=>{t.value.width=u,t.value.height=n,e.value.responsiveProportionalSizing?(t.value.tracker.core=G({relator:Math.min(u,n),adjuster:e.value.style.width,source:6*e.value.stopwatch.tracker.radiusRatio,threshold:1,fallback:1}),t.value.tracker.aura=G({relator:Math.min(u,n),adjuster:e.value.style.width,source:12*e.value.stopwatch.tracker.aura.radiusRatio,threshold:1,fallback:1}),t.value.label=G({relator:Math.min(u,n),adjuster:e.value.style.width,source:e.value.stopwatch.label.fontSize,threshold:10,fallback:10})):t.value.label=e.value.stopwatch.label.fontSize})});c.value&&(r.value&&c.value.unobserve(r.value),c.value.disconnect()),c.value=new ResizeObserver(a),r.value=C.value.parentNode,c.value.observe(r.value)}}le(()=>{c.value&&(r.value&&c.value.unobserve(r.value),c.value.disconnect())});const e=B({get:()=>d(),set:a=>a}),{svgRef:P}=we({config:e.value.style.title});function d(){return ne({userConfig:T.config,defaultConfig:F})}se(()=>T.config,a=>{e.value=d(),g(),k.value+=1},{deep:!0});const X=B(()=>{if(e.value.stopwatch.showHours&&e.value.stopwatch.showHundredth)return"00:00:00.00";if(e.value.stopwatch.showHours&&!e.value.stopwatch.showHundredth)return"00:00:00";if(!e.value.stopwatch.showHours&&e.value.stopwatch.showHundredth)return"00:00.00";if(!e.value.stopwatch.showHours&&!e.value.stopwatch.showHundredth)return"00:00"}),t=v({height:e.value.style.height,width:e.value.style.width,tracker:{core:6*e.value.stopwatch.tracker.radiusRatio,aura:12*e.value.stopwatch.tracker.aura.radiusRatio},label:e.value.stopwatch.label.fontSize}),y=v(0),I=new me(a=>Y(a),10,"",e.value.stopwatch.showHundredth,e.value.stopwatch.showHours),O=v(!0),l=v(!1),w=v(!1);function W(){m("start"),O.value&&I.start(),O.value=!1,l.value=!0}function E(){l.value&&(m("reset"),I.stop(),x.value=[],O.value=!0,l.value=!1)}function L(){w.value=!w.value,m("pause",y.value),I.pause()}function N(){l.value&&(w.value=!1,m("restart"),x.value=[],I.restart())}const x=v([]);async function H(){if(!l.value||w.value)return;const a=await I.lap();a&&(x.value.push(a),m("lap",x.value))}function Y({timestamp:a,elapsed:u,formatted:n}){y.value={timestamp:a,elapsed:u,formatted:n}}const b=B(()=>Math.min(t.value.width,t.value.height)/2.5*e.value.stopwatch.track.radiusRatio);function ee(a,u){const n=360/(u*1e3);return a*n%360}function te(a){let u=a*(Math.PI/180),n=t.value.width/2+b.value*Math.cos(u),V=t.value.height/2+b.value*Math.sin(u);return{cx:n,cy:V}}const $=B(()=>{const a=ee(y.value.elapsed,e.value.stopwatch.cycleSeconds),{cx:u,cy:n}=te(a-90),V=a>180?1:0;return{cx:u||t.value.width/2,cy:n||t.value.height/2-b.value,largeArcFlag:V,sweepFlag:1}});return j({start:W,pause:L,reset:E,restart:N,lap:H}),(a,u)=>(s(),o("div",{ref_key:"timerChart",ref:C,class:"vue-ui-timer",style:f({fontFamily:e.value.style.fontFamily,width:"100%",height:e.value.responsive?"100%":"auto",textAlign:"center"})},[e.value.style.title.text?(s(),o("div",{key:0,ref_key:"chartTitle",ref:z,style:f({width:"100%",background:e.value.style.backgroundColor})},[(s(),re(fe,{key:`title_${k.value}`,config:{title:{cy:"title",...e.value.style.title},subtitle:{cy:"subtitle",...e.value.style.title.subtitle}}},null,8,["config"]))],4)):h("",!0),(s(),o("svg",{ref_key:"svgRef",ref:P,xmlns:K(he),viewBox:`0 0 ${t.value.width<=0?10:t.value.width} ${t.value.height<=0?10:t.value.height}`,style:f({maxWidth:"100%",overflow:"visible",background:e.value.style.backgroundColor})},[_(K(R)),a.$slots["chart-background"]?(s(),o("foreignObject",{key:0,x:0,y:0,width:t.value.width<=0?10:t.value.width,height:t.value.height<=0?10:t.value.height,style:{pointerEvents:"none"}},[D(a.$slots,"chart-background",{},void 0,!0)],8,ye)):h("",!0),e.value.stopwatch.tracker.gradient.show?(s(),o("defs",be,[M("radialGradient",{id:`tracker_gradient_${p.value}`,cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},[M("stop",{offset:"0%","stop-color":e.value.stopwatch.tracker.gradient.color},null,8,$e),M("stop",{offset:"100%","stop-color":e.value.stopwatch.tracker.fill},null,8,Me)],8,xe)])):h("",!0),M("circle",{cx:t.value.width/2,cy:t.value.height/2,r:b.value,fill:e.value.stopwatch.track.fill,stroke:e.value.stopwatch.track.stroke,"stroke-width":e.value.stopwatch.track.strokeWidth},null,8,_e),e.value.stopwatch.cycleTrack.show?(s(),o("path",{key:2,d:`M ${t.value.width/2},${t.value.height/2-b.value} A ${b.value},${b.value} 0 ${$.value.largeArcFlag},${$.value.sweepFlag} ${$.value.cx},${$.value.cy}`,stroke:e.value.stopwatch.cycleTrack.stroke,"stroke-width":e.value.stopwatch.cycleTrack.strokeWidth,"stroke-linecap":"round",fill:"none"},null,8,Ce)):h("",!0),M("circle",Q($.value,{r:t.value.tracker.core,fill:e.value.stopwatch.tracker.gradient.show?`url(#tracker_gradient_${p.value})`:e.value.stopwatch.tracker.fill,stroke:e.value.stopwatch.tracker.stroke,"stroke-width":e.value.stopwatch.tracker.strokeWidth}),null,16,Pe),e.value.stopwatch.tracker.aura.show?(s(),o("circle",Q({key:3},$.value,{r:t.value.tracker.aura,fill:`${e.value.stopwatch.tracker.aura.fill}20`,stroke:e.value.stopwatch.tracker.aura.stroke,"stroke-width":e.value.stopwatch.tracker.aura.strokeWidth}),null,16,Ie)):h("",!0),a.$slots.time?(s(),o("foreignObject",{key:4,x:t.value.width/2,y:t.value.height/2,height:"0.1",width:"0.1",style:{overflow:"visible"}},[D(a.$slots,"time",U(q({...y.value})),void 0,!0)],8,Se)):(s(),o("text",{key:5,x:t.value.width/2,y:t.value.height/2+t.value.label/4,"font-size":t.value.label,"text-anchor":"middle",fill:e.value.stopwatch.label.color,"font-weight":e.value.stopwatch.label.bold?"bold":"normal",style:{"font-variant-numeric":"tabular-nums !important"}},ue(y.value.formatted||X.value),9,Re))],12,ge)),M("div",{ref_key:"chartLegend",ref:i,style:f({width:"100%",backgroundColor:e.value.stopwatch.legend.backgroundColor})},[a.$slots.controls?h("",!0):(s(),o("div",Te,[e.value.stopwatch.legend.buttons.start?(s(),o("button",{key:0,title:e.value.stopwatch.legend.buttonTitles.start,onClick:W,class:"vue-ui-timer-button",style:f({opacity:l.value?.2:1,cursor:l.value?"default":"pointer"})},[_(S,{name:"play",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,ze)):h("",!0),e.value.stopwatch.legend.buttons.pause?(s(),o("button",{key:1,title:w.value?e.value.stopwatch.legend.buttonTitles.resume:e.value.stopwatch.legend.buttonTitles.pause,onClick:L,class:"vue-ui-timer-button",style:f({opacity:l.value?1:.2,cursor:l.value?"pointer":"default"})},[_(S,{name:"pause",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,He)):h("",!0),e.value.stopwatch.legend.buttons.reset?(s(),o("button",{key:2,title:e.value.stopwatch.legend.buttonTitles.reset,onClick:E,class:"vue-ui-timer-button",style:f({opacity:l.value?1:.2,cursor:l.value?"pointer":"default"})},[_(S,{name:"stop",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,Be)):h("",!0),e.value.stopwatch.legend.buttons.restart?(s(),o("button",{key:3,title:e.value.stopwatch.legend.buttonTitles.restart,onClick:N,class:"vue-ui-timer-button",style:f({opacity:l.value?1:.2,cursor:l.value?"pointer":"default"})},[_(S,{name:"restart",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,De)):h("",!0),e.value.stopwatch.legend.buttons.lap?(s(),o("button",{key:4,title:e.value.stopwatch.legend.buttonTitles.lap,onClick:H,class:"vue-ui-timer-button",style:f({opacity:l.value&&!w.value?1:.2,cursor:l.value&&!w.value?"pointer":"default"})},[_(S,{name:"lap",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,je)):h("",!0)])),D(a.$slots,"controls",U(q({start:W,pause:L,reset:E,restart:N,lap:H,laps:x.value,isRunning:l.value,isPaused:w.value,...y.value})),void 0,!0),D(a.$slots,"laps",U(q({laps:x.value,lap:H,isRunning:l.value,isPaused:w.value,...y.value})),void 0,!0)],4)],4))}},Ge=ke(Ae,[["__scopeId","data-v-5e3deab2"]]);export{Ge as default};
