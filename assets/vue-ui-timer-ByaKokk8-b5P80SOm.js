
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{c as Y}from"./useNestedProp-v7KPpwuP--K2zFQDQ.js";import{d as Z,K as ee,A as te,p as U}from"./vue-data-ui-DnXUesXA.js";import{E as ae,M as le}from"./useResponsive-JZ9xq-JV-J_UuQI1B.js";import{u as P}from"./BaseIcon-CNbwMh_--B3MqQucx.js";import{x as se}from"./Title-CzaCeCOm-BMA2pNrJ.js";import{p as re}from"./PackageVersion-BjrblLPQ-Chx4hxte.js";import{v as oe}from"./useChartAccessibility-BWojgys7-DVP47XD8.js";import{s as ue}from"./_plugin-vue_export-helper-CHgC5LLL-lGy7RumW.js";import{r as n,C as ie,H as F,an as ne,I as ce,c as r,o as s,y as v,a as $,M as d,x as ve,e as he,b as x,V as j,m as G,n as V,g as K,t as pe}from"./index-CG-RNv11.js";import"./alert-ai9SKpHh.js";class de{constructor(A,B,S,_=!0,w=!0){this.interval=B,this.elapsed=0,this.isPaused=!1;const M=`
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
        `,R=new Blob([M],{type:"application/javascript"}),H=URL.createObjectURL(R),o=new Worker(H);function C(c){let h=Math.floor(c/1e3),e=Math.floor(c%1e3/10),m=Math.floor(h/3600),g=Math.floor(h%3600/60),I=h%60,t="";return w&&(t+=String(m).padStart(2,"0")+":"),t+=String(g).padStart(2,"0")+":",t+=String(I).padStart(2,"0"),_&&(t+="."+String(e).padStart(2,"0")),t}this.start=()=>{this.isPaused=!1,o.postMessage({action:"start",data:{interval:this.interval}})},this.pause=()=>{this.isPaused?this.resume():(this.isPaused=!0,o.postMessage({action:"pause"}))},this.resume=()=>{this.isPaused&&(o.postMessage({action:"resume"}),this.isPaused=!1)},this.stop=()=>{o.postMessage({action:"stop"}),this.isPaused=!1},this.reset=()=>{o.postMessage({action:"reset"}),this.elapsed=0,this.isPaused=!1},this.restart=()=>{this.stop(),this.start()},this.lap=()=>new Promise(c=>{o.postMessage({action:"lap"});const h=e=>{const{elapsed:m,timestamp:g,action:I}=e.data;if(I==="lap"){const t=C(m);c({timestamp:g||0,elapsed:m,formatted:t})}};o.addEventListener("message",h,{once:!0})}),o.onmessage=c=>{const{elapsed:h,timestamp:e}=c.data;this.elapsed=h,A({timestamp:e||0,elapsed:this.elapsed,formatted:C(this.elapsed)})},o.onerror=c=>{S&&S(c)}}}const we=["xmlns","viewBox"],fe=["width","height"],ke={key:1},me=["id"],ge=["stop-color"],ye=["stop-color"],be=["cx","cy","r","fill","stroke","stroke-width"],$e=["d","stroke","stroke-width"],xe=["r","fill","stroke","stroke-width"],Me=["r","fill","stroke","stroke-width"],Ce=["x","y"],Ie=["x","y","font-size","fill","font-weight"],Te={key:0,class:"vue-ui-timer-controls"},Pe=["title"],Se=["title"],_e=["title"],Re=["title"],He=["title"],De={__name:"vue-ui-timer",props:{config:{type:Object,default(){return{}}}},emits:["start","pause","reset","restart","lap"],setup(q,{expose:A,emit:B}){const{vue_ui_timer:S}=Z(),_=q,w=B,M=n(null),R=n(null),H=n(null),o=n(null),C=n(ee()),c=n(0);ie(()=>{h()});function h(){if(e.value.responsive){const a=ae(()=>{const{width:u,height:i}=le({chart:M.value,title:e.value.style.title.text?R.value:null,legend:H.value});requestAnimationFrame(()=>{t.value.width=u,t.value.height=i,t.value.tracker.core=U({relator:Math.min(u,i),adjuster:e.value.style.width,source:6*e.value.stopwatch.tracker.radiusRatio,threshold:1,fallback:1}),t.value.tracker.aura=U({relator:Math.min(u,i),adjuster:e.value.style.width,source:12*e.value.stopwatch.tracker.aura.radiusRatio,threshold:1,fallback:1}),t.value.label=U({relator:Math.min(u,i),adjuster:e.value.style.width,source:e.value.stopwatch.label.fontSize,threshold:10,fallback:10})})});o.value=new ResizeObserver(a),o.value.observe(M.value.parentNode)}}ne(()=>{o.value&&o.value.disconnect()});const e=F({get:()=>g(),set:a=>a}),{svgRef:m}=oe({config:e.value.style.title});function g(){return Y({userConfig:_.config,defaultConfig:S})}ce(()=>_.config,a=>{e.value=g(),h(),c.value+=1},{deep:!0});const I=F(()=>{if(e.value.stopwatch.showHours&&e.value.stopwatch.showHundredth)return"00:00:00.00";if(e.value.stopwatch.showHours&&!e.value.stopwatch.showHundredth)return"00:00:00";if(!e.value.stopwatch.showHours&&e.value.stopwatch.showHundredth)return"00:00.00";if(!e.value.stopwatch.showHours&&!e.value.stopwatch.showHundredth)return"00:00"}),t=n({height:e.value.style.height,width:e.value.style.width,tracker:{core:6*e.value.stopwatch.tracker.radiusRatio,aura:12*e.value.stopwatch.tracker.aura.radiusRatio},label:e.value.stopwatch.label.fontSize}),f=n(0),T=new de(a=>J(a),10,"",e.value.stopwatch.showHundredth,e.value.stopwatch.showHours),z=n(!0),l=n(!1),p=n(!1);function W(){w("start"),z.value&&T.start(),z.value=!1,l.value=!0}function O(){l.value&&(w("reset"),T.stop(),y.value=[],z.value=!0,l.value=!1)}function E(){p.value=!p.value,w("pause",f.value),T.pause()}function L(){l.value&&(p.value=!1,w("restart"),y.value=[],T.restart())}const y=n([]);async function D(){if(!l.value||p.value)return;const a=await T.lap();a&&(y.value.push(a),w("lap",y.value))}function J({timestamp:a,elapsed:u,formatted:i}){f.value={timestamp:a,elapsed:u,formatted:i}}const k=F(()=>Math.min(t.value.width,t.value.height)/2.5*e.value.stopwatch.track.radiusRatio);function Q(a,u){const i=360/(u*1e3);return a*i%360}function X(a){let u=a*(Math.PI/180),i=t.value.width/2+k.value*Math.cos(u),N=t.value.height/2+k.value*Math.sin(u);return{cx:i,cy:N}}const b=F(()=>{const a=Q(f.value.elapsed,e.value.stopwatch.cycleSeconds),{cx:u,cy:i}=X(a-90),N=a>180?1:0;return{cx:u||t.value.width/2,cy:i||t.value.height/2-k.value,largeArcFlag:N,sweepFlag:1}});return A({start:W,pause:E,reset:O,restart:L,lap:D}),(a,u)=>(s(),r("div",{ref_key:"timerChart",ref:M,class:"vue-ui-timer",style:d({fontFamily:e.value.style.fontFamily,width:"100%",height:e.value.responsive?"100%":"auto",textAlign:"center"})},[e.value.style.title.text?(s(),r("div",{key:0,ref_key:"chartTitle",ref:R,style:d({width:"100%",background:e.value.style.backgroundColor})},[(s(),ve(se,{key:`title_${c.value}`,config:{title:{cy:"title",...e.value.style.title},subtitle:{cy:"subtitle",...e.value.style.title.subtitle}}},null,8,["config"]))],4)):v("",!0),(s(),r("svg",{ref_key:"svgRef",ref:m,xmlns:he(te),viewBox:`0 0 ${t.value.width<=0?10:t.value.width} ${t.value.height<=0?10:t.value.height}`,style:d({maxWidth:"100%",overflow:"visible",background:e.value.style.backgroundColor})},[x(re),a.$slots["chart-background"]?(s(),r("foreignObject",{key:0,x:0,y:0,width:t.value.width<=0?10:t.value.width,height:t.value.height<=0?10:t.value.height,style:{pointerEvents:"none"}},[j(a.$slots,"chart-background",{},void 0,!0)],8,fe)):v("",!0),e.value.stopwatch.tracker.gradient.show?(s(),r("defs",ke,[$("radialGradient",{id:`tracker_gradient_${C.value}`,cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},[$("stop",{offset:"0%","stop-color":e.value.stopwatch.tracker.gradient.color},null,8,ge),$("stop",{offset:"100%","stop-color":e.value.stopwatch.tracker.fill},null,8,ye)],8,me)])):v("",!0),$("circle",{cx:t.value.width/2,cy:t.value.height/2,r:k.value,fill:e.value.stopwatch.track.fill,stroke:e.value.stopwatch.track.stroke,"stroke-width":e.value.stopwatch.track.strokeWidth},null,8,be),e.value.stopwatch.cycleTrack.show?(s(),r("path",{key:2,d:`M ${t.value.width/2},${t.value.height/2-k.value} A ${k.value},${k.value} 0 ${b.value.largeArcFlag},${b.value.sweepFlag} ${b.value.cx},${b.value.cy}`,stroke:e.value.stopwatch.cycleTrack.stroke,"stroke-width":e.value.stopwatch.cycleTrack.strokeWidth,"stroke-linecap":"round",fill:"none"},null,8,$e)):v("",!0),$("circle",G(b.value,{r:t.value.tracker.core,fill:e.value.stopwatch.tracker.gradient.show?`url(#tracker_gradient_${C.value})`:e.value.stopwatch.tracker.fill,stroke:e.value.stopwatch.tracker.stroke,"stroke-width":e.value.stopwatch.tracker.strokeWidth}),null,16,xe),e.value.stopwatch.tracker.aura.show?(s(),r("circle",G({key:3},b.value,{r:t.value.tracker.aura,fill:`${e.value.stopwatch.tracker.aura.fill}20`,stroke:e.value.stopwatch.tracker.aura.stroke,"stroke-width":e.value.stopwatch.tracker.aura.strokeWidth}),null,16,Me)):v("",!0),a.$slots.time?(s(),r("foreignObject",{key:4,x:t.value.width/2,y:t.value.height/2,height:"0.1",width:"0.1",style:{overflow:"visible"}},[j(a.$slots,"time",V(K({...f.value})),void 0,!0)],8,Ce)):(s(),r("text",{key:5,x:t.value.width/2,y:t.value.height/2+t.value.label/4,"font-size":t.value.label,"text-anchor":"middle",fill:e.value.stopwatch.label.color,"font-weight":e.value.stopwatch.label.bold?"bold":"normal",style:{"font-variant-numeric":"tabular-nums !important"}},pe(f.value.formatted||I.value),9,Ie))],12,we)),$("div",{ref_key:"chartLegend",ref:H,style:d({width:"100%",backgroundColor:e.value.stopwatch.legend.backgroundColor})},[a.$slots.controls?v("",!0):(s(),r("div",Te,[e.value.stopwatch.legend.buttons.start?(s(),r("button",{key:0,title:e.value.stopwatch.legend.buttonTitles.start,onClick:W,class:"vue-ui-timer-button",style:d({opacity:l.value?.2:1,cursor:l.value?"default":"pointer"})},[x(P,{name:"play",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,Pe)):v("",!0),e.value.stopwatch.legend.buttons.pause?(s(),r("button",{key:1,title:p.value?e.value.stopwatch.legend.buttonTitles.resume:e.value.stopwatch.legend.buttonTitles.pause,onClick:E,class:"vue-ui-timer-button",style:d({opacity:l.value?1:.2,cursor:l.value?"pointer":"default"})},[x(P,{name:"pause",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,Se)):v("",!0),e.value.stopwatch.legend.buttons.reset?(s(),r("button",{key:2,title:e.value.stopwatch.legend.buttonTitles.reset,onClick:O,class:"vue-ui-timer-button",style:d({opacity:l.value?1:.2,cursor:l.value?"pointer":"default"})},[x(P,{name:"stop",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,_e)):v("",!0),e.value.stopwatch.legend.buttons.restart?(s(),r("button",{key:3,title:e.value.stopwatch.legend.buttonTitles.restart,onClick:L,class:"vue-ui-timer-button",style:d({opacity:l.value?1:.2,cursor:l.value?"pointer":"default"})},[x(P,{name:"restart",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,Re)):v("",!0),e.value.stopwatch.legend.buttons.lap?(s(),r("button",{key:4,title:e.value.stopwatch.legend.buttonTitles.lap,onClick:D,class:"vue-ui-timer-button",style:d({opacity:l.value&&!p.value?1:.2,cursor:l.value&&!p.value?"pointer":"default"})},[x(P,{name:"lap",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,He)):v("",!0)])),j(a.$slots,"controls",V(K({start:W,pause:E,reset:O,restart:L,lap:D,laps:y.value,isRunning:l.value,isPaused:p.value,...f.value})),void 0,!0),j(a.$slots,"laps",V(K({laps:y.value,lap:D,isRunning:l.value,isPaused:p.value,...f.value})),void 0,!0)],4)],4))}},Ue=ue(De,[["__scopeId","data-v-19145f1f"]]);export{Ue as default};
