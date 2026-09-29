
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PackageVersion-D5QkTJQU-UnfrKOKT.js","./reactivity.esm-bundler-FDy8qlA8.js","./runtime-core.esm-bundler-BtSTcd4U.js","./rolldown-runtime-Dy4uBu1J-DK3Fl9T5.js"])))=>i.map(i=>d[i]);
import{B as e,C as t,Ct as n,O as r,St as i,Tt as a}from"./reactivity.esm-bundler-FDy8qlA8.js";import{D as o,Ht as s,O as c,_ as l,b as u,ct as ee,et as d,g as f,it as te,mt as p,v as m,xt as h,y as g,z as _}from"./runtime-core.esm-bundler-BtSTcd4U.js";import{t as ne}from"./preload-helper-uBIymjUX.js";import{L as re,Rt as v,qt as ie}from"./lib-DOpaUOQx-BlET4--7.js";import{t as y}from"./rolldown-runtime-Dy4uBu1J-DK3Fl9T5.js";import{n as ae,t as oe}from"./useHints-Dq_w2E8B-DmdmhvR0.js";import{n as se,t as ce}from"./useNestedProp-Bux0f4iY-BY6v13s9.js";import{t as b}from"./_plugin-vue_export-helper-B3ysoDQm-BDNMzG2s.js";import{n as le}from"./Title-DeqmC-vN-VkU-hGSh.js";import{t as ue}from"./DefGrad-DVBqDjhO-D4QdFoAI.js";import{i as de,t as fe}from"./useResponsive-ZtArZtUf-C91fblUm.js";import{n as x}from"./BaseIcon-Dlz7gfx0-Ljg-_OvS.js";import{t as pe}from"./useChartAccessibility-DYqac8yF-C9FFGTA8.js";var me=class{constructor(e,t,n,r=!0,i=!0){this.interval=t,this.elapsed=0,this.isPaused=!1;let a=new Blob([`
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
        `],{type:`application/javascript`}),o=URL.createObjectURL(a),s=new Worker(o);function c(e){let t=Math.floor(e/1e3),n=Math.floor(e%1e3/10),a=Math.floor(t/3600),o=Math.floor(t%3600/60),s=t%60,c=``;return i&&(c+=String(a).padStart(2,`0`)+`:`),c+=String(o).padStart(2,`0`)+`:`,c+=String(s).padStart(2,`0`),r&&(c+=`.`+String(n).padStart(2,`0`)),c}this.start=()=>{this.isPaused=!1,s.postMessage({action:`start`,data:{interval:this.interval}})},this.pause=()=>{this.isPaused?this.resume():(this.isPaused=!0,s.postMessage({action:`pause`}))},this.resume=()=>{this.isPaused&&(this.isPaused=(s.postMessage({action:`resume`}),!1))},this.stop=()=>{s.postMessage({action:`stop`}),this.isPaused=!1},this.reset=()=>{s.postMessage({action:`reset`}),this.elapsed=0,this.isPaused=!1},this.restart=()=>{this.stop(),this.start()},this.lap=()=>new Promise(e=>{s.postMessage({action:`lap`}),s.addEventListener(`message`,t=>{let{elapsed:n,timestamp:r,action:i}=t.data;if(i===`lap`){let t=c(n);e({timestamp:r||0,elapsed:n,formatted:t})}},{once:!0})}),s.onmessage=t=>{let{elapsed:n,timestamp:r}=t.data;this.elapsed=n,e({timestamp:r||0,elapsed:this.elapsed,formatted:c(this.elapsed)})},s.onerror=e=>{n&&n(e)}}},S=y({default:()=>C}),he=[`xmlns`,`viewBox`],ge=[`width`,`height`],_e={key:1},ve=[`cx`,`cy`,`r`,`fill`,`stroke`,`stroke-width`],ye=[`d`,`stroke`,`stroke-width`],be=[`r`,`fill`,`stroke`,`stroke-width`],xe=[`r`,`fill`,`stroke`,`stroke-width`],Se=[`x`,`y`],Ce={key:5},we=[`x`,`y`,`font-size`,`fill`,`font-weight`],Te={key:0,class:`vue-ui-timer-controls`},Ee=[`title`],De=[`title`],Oe=[`title`],ke=[`title`],Ae=[`title`],C=b({__name:`vue-ui-timer`,props:{config:{type:Object,default(){return{}}}},emits:[`start`,`pause`,`reset`,`restart`,`lap`],setup(y,{expose:b,emit:S}){let C=c(()=>ne(()=>import(`./PackageVersion-D5QkTJQU-UnfrKOKT.js`).then(e=>e.t),__vite__mapDeps([0,1,2,3]),import.meta.url)),{vue_ui_timer:je}=se(),w=y,T=S,E=t(null),D=t(null),O=t(null),k=r(null),A=r(null),j=t(ie()),M=t(0);ee(()=>{N()});function N(){if(P.value.responsive){let e=fe(()=>{let{width:e,height:t}=de({chart:E.value,title:P.value.style.title.text?D.value:null,legend:O.value});requestAnimationFrame(()=>{B.value.width=e,B.value.height=t,P.value.responsiveProportionalSizing?(B.value.tracker.core=v({relator:Math.min(e,t),adjuster:P.value.style.width,source:6*I.value.radiusRatio,threshold:1,fallback:1}),B.value.tracker.aura=v({relator:Math.min(e,t),adjuster:P.value.style.width,source:12*I.value.aura.radiusRatio,threshold:1,fallback:1}),B.value.label=v({relator:Math.min(e,t),adjuster:P.value.style.width,source:F.value.label.fontSize,threshold:10,fallback:10})):B.value.label=F.value.label.fontSize})});k.value&&(A.value&&k.value.unobserve(A.value),k.value.disconnect()),k.value=new ResizeObserver(e),A.value=E.value.parentNode,k.value.observe(A.value)}}te(()=>{k.value&&(A.value&&k.value.unobserve(A.value),k.value.disconnect())});let P=f({get:()=>z(),set:e=>e}),F=f(()=>P.value.stopwatch),I=f(()=>P.value.stopwatch.tracker),L=f(()=>P.value.stopwatch.legend);ae({config:()=>P.value,dataset:()=>[],component:`VueUiTimer`,rules:[oe.noHint]});let R=f(()=>P.value.useCursorPointer),{svgRef:Me}=pe({config:P.value.style.title});function z(){return ce({userConfig:w.config,defaultConfig:je})}s(()=>w.config,e=>{P.value=z(),N(),M.value+=1},{deep:!0});let Ne=f(()=>{if(F.value.showHours&&F.value.showHundredth)return`00:00:00.00`;if(F.value.showHours&&!F.value.showHundredth)return`00:00:00`;if(!F.value.showHours&&F.value.showHundredth)return`00:00.00`;if(!F.value.showHours&&!F.value.showHundredth)return`00:00`}),B=t({height:P.value.style.height,width:P.value.style.width,tracker:{core:6*I.value.radiusRatio,aura:12*I.value.aura.radiusRatio},label:F.value.label.fontSize}),V=t(0),H=new me(e=>Pe(e),10,``,F.value.showHundredth,F.value.showHours),U=t(!0),W=t(!1),G=t(!1);function K(){T(`start`),U.value&&H.start(),U.value=!1,W.value=!0}function q(){W.value&&(W.value=(T(`reset`),H.stop(),X.value=[],U.value=!0,!1))}function J(){G.value=!G.value,T(`pause`,V.value),H.pause()}function Y(){W.value&&(G.value=!1,T(`restart`),X.value=[],H.restart())}let X=t([]);async function Z(){if(!W.value||G.value)return;let e=await H.lap();e&&(X.value.push(e),T(`lap`,X.value))}function Pe({timestamp:e,elapsed:t,formatted:n}){V.value={timestamp:e,elapsed:t,formatted:n}}let Q=f(()=>Math.min(B.value.width,B.value.height)/2.5*F.value.track.radiusRatio);function Fe(e,t){return e*(360/(t*1e3))%360}function Ie(e){let t=Math.PI/180*e;return{cx:B.value.width/2+Q.value*Math.cos(t),cy:B.value.height/2+Q.value*Math.sin(t)}}let $=f(()=>{let e=Fe(V.value.elapsed,F.value.cycleSeconds),{cx:t,cy:n}=Ie(e-90),r=+(e>180);return{cx:t||B.value.width/2,cy:n||B.value.height/2-Q.value,largeArcFlag:r,sweepFlag:1}});return b({start:K,pause:J,reset:q,restart:Y,lap:Z}),(t,r)=>(p(),u(`div`,{ref_key:`timerChart`,ref:E,class:`vue-data-ui-component vue-ui-timer`,style:n({fontFamily:P.value.style.fontFamily,width:`100%`,height:P.value.responsive?`100%`:`auto`,textAlign:`center`})},[P.value.style.title.text?(p(),u(`div`,{key:0,ref_key:`chartTitle`,ref:D,style:n({width:`100%`,background:P.value.style.backgroundColor})},[(p(),m(le,{key:`title_${M.value}`,config:{title:{cy:`title`,...P.value.style.title},subtitle:{cy:`subtitle`,...P.value.style.title.subtitle}}},null,8,[`config`]))],4)):g(``,!0),(p(),u(`svg`,{ref_key:`svgRef`,ref:Me,xmlns:e(re),viewBox:`0 0 ${B.value.width<=0?10:B.value.width} ${B.value.height<=0?10:B.value.height}`,style:n({maxWidth:`100%`,overflow:`visible`,background:P.value.style.backgroundColor})},[o(e(C)),t.$slots[`chart-background`]?(p(),u(`foreignObject`,{key:0,x:0,y:0,width:B.value.width<=0?10:B.value.width,height:B.value.height<=0?10:B.value.height,style:{pointerEvents:`none`}},[h(t.$slots,`chart-background`,{},void 0,!0)],8,ge)):g(``,!0),I.value.gradient.show?(p(),u(`defs`,_e,[o(ue,{t:`radial`,id:`tracker_gradient_${j.value}`,cx:`50%`,cy:`50%`,r:`50%`,fx:`50%`,fy:`50%`,stops:[[`0%`,I.value.gradient.color,1],[`100%`,I.value.fill,1]]},null,8,[`id`,`stops`])])):g(``,!0),l(`circle`,{cx:B.value.width/2,cy:B.value.height/2,r:Q.value,fill:F.value.track.fill,stroke:F.value.track.stroke,"stroke-width":F.value.track.strokeWidth},null,8,ve),F.value.cycleTrack.show?(p(),u(`path`,{key:2,d:`M ${B.value.width/2},${B.value.height/2-Q.value} A ${Q.value},${Q.value} 0 ${$.value.largeArcFlag},${$.value.sweepFlag} ${$.value.cx},${$.value.cy}`,stroke:F.value.cycleTrack.stroke,"stroke-width":F.value.cycleTrack.strokeWidth,"stroke-linecap":`round`,fill:`none`},null,8,ye)):g(``,!0),l(`circle`,d($.value,{r:B.value.tracker.core,fill:I.value.gradient.show?`url(#tracker_gradient_${j.value})`:I.value.fill,stroke:I.value.stroke,"stroke-width":I.value.strokeWidth}),null,16,be),I.value.aura.show?(p(),u(`circle`,d({key:3},$.value,{r:B.value.tracker.aura,fill:`${I.value.aura.fill}20`,stroke:I.value.aura.stroke,"stroke-width":I.value.aura.strokeWidth}),null,16,xe)):g(``,!0),t.$slots.time?(p(),u(`foreignObject`,{key:4,x:B.value.width/2,y:B.value.height/2,height:`0.1`,width:`0.1`,style:{overflow:`visible`}},[h(t.$slots,`time`,i(_({...V.value,...B.value})),void 0,!0)],8,Se)):t.$slots.timeSvg?(p(),u(`g`,Ce,[h(t.$slots,`timeSvg`,i(_({...V.value,...B.value})),void 0,!0)])):(p(),u(`text`,{key:6,x:B.value.width/2,y:B.value.height/2+B.value.label/4,"font-size":B.value.label,"text-anchor":`middle`,fill:F.value.label.color,"font-weight":F.value.label.bold?`bold`:`normal`,style:{"font-variant-numeric":`tabular-nums !important`}},a(V.value.formatted||Ne.value),9,we))],12,he)),l(`div`,{ref_key:`chartLegend`,ref:O,style:n({width:`100%`,backgroundColor:L.value.backgroundColor})},[t.$slots.controls?g(``,!0):(p(),u(`div`,Te,[L.value.buttons.start?(p(),u(`button`,{key:0,title:L.value.buttonTitles.start,onClick:K,class:`vue-ui-timer-button`,style:n({opacity:W.value?.2:1,cursor:W.value?`default`:R.value?`pointer`:`default`})},[o(x,{name:`play`,stroke:L.value.buttons.iconColor},null,8,[`stroke`])],12,Ee)):g(``,!0),L.value.buttons.pause?(p(),u(`button`,{key:1,title:G.value?L.value.buttonTitles.resume:L.value.buttonTitles.pause,onClick:J,class:`vue-ui-timer-button`,style:n({opacity:W.value?1:.2,cursor:W.value&&R.value?`pointer`:`default`})},[o(x,{name:`pause`,stroke:L.value.buttons.iconColor},null,8,[`stroke`])],12,De)):g(``,!0),L.value.buttons.reset?(p(),u(`button`,{key:2,title:L.value.buttonTitles.reset,onClick:q,class:`vue-ui-timer-button`,style:n({opacity:W.value?1:.2,cursor:W.value&&R.value?`pointer`:`default`})},[o(x,{name:`stop`,stroke:L.value.buttons.iconColor},null,8,[`stroke`])],12,Oe)):g(``,!0),L.value.buttons.restart?(p(),u(`button`,{key:3,title:L.value.buttonTitles.restart,onClick:Y,class:`vue-ui-timer-button`,style:n({opacity:W.value?1:.2,cursor:W.value&&R.value?`pointer`:`default`})},[o(x,{name:`restart`,stroke:L.value.buttons.iconColor},null,8,[`stroke`])],12,ke)):g(``,!0),L.value.buttons.lap?(p(),u(`button`,{key:4,title:L.value.buttonTitles.lap,onClick:Z,class:`vue-ui-timer-button`,style:n({opacity:W.value&&!G.value?1:.2,cursor:W.value&&!G.value&&R.value?`pointer`:`default`})},[o(x,{name:`lap`,stroke:L.value.buttons.iconColor},null,8,[`stroke`])],12,Ae)):g(``,!0)])),h(t.$slots,`controls`,i(_({start:K,pause:J,reset:q,restart:Y,lap:Z,laps:X.value,isRunning:W.value,isPaused:G.value,...V.value})),void 0,!0),h(t.$slots,`laps`,i(_({laps:X.value,lap:Z,isRunning:W.value,isPaused:G.value,...V.value})),void 0,!0)],4)],4))}},[[`__scopeId`,`data-v-2ce4581a`]]);export{S as n};