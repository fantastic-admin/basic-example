
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PackageVersion-BUmadjVO-D-GRfJH2.js","./reactivity.esm-bundler-D9OPVc9J.js","./runtime-core.esm-bundler-D-xeQwTN.js","./rolldown-runtime-Dy4uBu1J-DK3Fl9T5.js"])))=>i.map(i=>d[i]);
import{B as e,C as t,Ct as n,O as r,St as i,Tt as a}from"./reactivity.esm-bundler-D9OPVc9J.js";import{D as o,Ht as s,O as c,_ as l,b as u,ct as ee,et as d,g as f,it as te,mt as p,v as ne,xt as m,y as h,z as g}from"./runtime-core.esm-bundler-D-xeQwTN.js";import{t as re}from"./preload-helper-HclGiUj8.js";import{J as ie,d as ae,n as _}from"./lib-C-QGo8GG-CvPpiVvZ.js";import{t as v}from"./rolldown-runtime-Dy4uBu1J-DK3Fl9T5.js";import{t as oe}from"./useConfig-C0V0eG7L-BW30Wel-.js";import{t as y}from"./_plugin-vue_export-helper-B3ysoDQm-BDNMzG2s.js";import{t as b}from"./useNestedProp-BYfiWVP8-DbrxFlsg.js";import{n as se}from"./Title-Thf71-8D-Dxz5CPFA.js";import{t as ce}from"./DefGrad-DVBqDjhO-Qhsc3WTM.js";import{i as le,t as ue}from"./useResponsive-ZtArZtUf-C91fblUm.js";import{n as x}from"./BaseIcon-DJbOzCDs-C4GBSsnJ.js";import{t as S}from"./useChartAccessibility-DYqac8yF-BvIqBMvy.js";var C=class{constructor(e,t,n,r=!0,i=!0){this.interval=t,this.elapsed=0,this.isPaused=!1;let a=new Blob([`
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
        `],{type:`application/javascript`}),o=URL.createObjectURL(a),s=new Worker(o);function c(e){let t=Math.floor(e/1e3),n=Math.floor(e%1e3/10),a=Math.floor(t/3600),o=Math.floor(t%3600/60),s=t%60,c=``;return i&&(c+=String(a).padStart(2,`0`)+`:`),c+=String(o).padStart(2,`0`)+`:`,c+=String(s).padStart(2,`0`),r&&(c+=`.`+String(n).padStart(2,`0`)),c}this.start=()=>{this.isPaused=!1,s.postMessage({action:`start`,data:{interval:this.interval}})},this.pause=()=>{this.isPaused?this.resume():(this.isPaused=!0,s.postMessage({action:`pause`}))},this.resume=()=>{this.isPaused&&(this.isPaused=(s.postMessage({action:`resume`}),!1))},this.stop=()=>{s.postMessage({action:`stop`}),this.isPaused=!1},this.reset=()=>{s.postMessage({action:`reset`}),this.elapsed=0,this.isPaused=!1},this.restart=()=>{this.stop(),this.start()},this.lap=()=>new Promise(e=>{s.postMessage({action:`lap`}),s.addEventListener(`message`,t=>{let{elapsed:n,timestamp:r,action:i}=t.data;if(i===`lap`){let t=c(n);e({timestamp:r||0,elapsed:n,formatted:t})}},{once:!0})}),s.onmessage=t=>{let{elapsed:n,timestamp:r}=t.data;this.elapsed=n,e({timestamp:r||0,elapsed:this.elapsed,formatted:c(this.elapsed)})},s.onerror=e=>{n&&n(e)}}},w=v({default:()=>T}),de=[`xmlns`,`viewBox`],fe=[`width`,`height`],pe={key:1},me=[`cx`,`cy`,`r`,`fill`,`stroke`,`stroke-width`],he=[`d`,`stroke`,`stroke-width`],ge=[`r`,`fill`,`stroke`,`stroke-width`],_e=[`r`,`fill`,`stroke`,`stroke-width`],ve=[`x`,`y`],ye={key:5},be=[`x`,`y`,`font-size`,`fill`,`font-weight`],xe={key:0,class:`vue-ui-timer-controls`},Se=[`title`],Ce=[`title`],we=[`title`],Te=[`title`],Ee=[`title`],T=y({__name:`vue-ui-timer`,props:{config:{type:Object,default(){return{}}}},emits:[`start`,`pause`,`reset`,`restart`,`lap`],setup(v,{expose:y,emit:w}){let T=c(()=>re(()=>import(`./PackageVersion-BUmadjVO-D-GRfJH2.js`).then(e=>e.t),__vite__mapDeps([0,1,2,3]),import.meta.url)),{vue_ui_timer:E}=oe(),D=v,O=w,k=t(null),A=t(null),j=t(null),M=r(null),N=r(null),P=t(ie()),F=t(0);ee(()=>{I()});function I(){if(L.value.responsive){let e=ue(()=>{let{width:e,height:t}=le({chart:k.value,title:L.value.style.title.text?A.value:null,legend:j.value});requestAnimationFrame(()=>{B.value.width=e,B.value.height=t,L.value.responsiveProportionalSizing?(B.value.tracker.core=_({relator:Math.min(e,t),adjuster:L.value.style.width,source:6*L.value.stopwatch.tracker.radiusRatio,threshold:1,fallback:1}),B.value.tracker.aura=_({relator:Math.min(e,t),adjuster:L.value.style.width,source:12*L.value.stopwatch.tracker.aura.radiusRatio,threshold:1,fallback:1}),B.value.label=_({relator:Math.min(e,t),adjuster:L.value.style.width,source:L.value.stopwatch.label.fontSize,threshold:10,fallback:10})):B.value.label=L.value.stopwatch.label.fontSize})});M.value&&(N.value&&M.value.unobserve(N.value),M.value.disconnect()),M.value=new ResizeObserver(e),N.value=k.value.parentNode,M.value.observe(N.value)}}te(()=>{M.value&&(N.value&&M.value.unobserve(N.value),M.value.disconnect())});let L=f({get:()=>z(),set:e=>e}),R=f(()=>L.value.useCursorPointer),{svgRef:De}=S({config:L.value.style.title});function z(){return b({userConfig:D.config,defaultConfig:E})}s(()=>D.config,e=>{L.value=z(),I(),F.value+=1},{deep:!0});let Oe=f(()=>{if(L.value.stopwatch.showHours&&L.value.stopwatch.showHundredth)return`00:00:00.00`;if(L.value.stopwatch.showHours&&!L.value.stopwatch.showHundredth)return`00:00:00`;if(!L.value.stopwatch.showHours&&L.value.stopwatch.showHundredth)return`00:00.00`;if(!L.value.stopwatch.showHours&&!L.value.stopwatch.showHundredth)return`00:00`}),B=t({height:L.value.style.height,width:L.value.style.width,tracker:{core:6*L.value.stopwatch.tracker.radiusRatio,aura:12*L.value.stopwatch.tracker.aura.radiusRatio},label:L.value.stopwatch.label.fontSize}),V=t(0),H=new C(e=>ke(e),10,``,L.value.stopwatch.showHundredth,L.value.stopwatch.showHours),U=t(!0),W=t(!1),G=t(!1);function K(){O(`start`),U.value&&H.start(),U.value=!1,W.value=!0}function q(){W.value&&(W.value=(O(`reset`),H.stop(),X.value=[],U.value=!0,!1))}function J(){G.value=!G.value,O(`pause`,V.value),H.pause()}function Y(){W.value&&(G.value=!1,O(`restart`),X.value=[],H.restart())}let X=t([]);async function Z(){if(!W.value||G.value)return;let e=await H.lap();e&&(X.value.push(e),O(`lap`,X.value))}function ke({timestamp:e,elapsed:t,formatted:n}){V.value={timestamp:e,elapsed:t,formatted:n}}let Q=f(()=>Math.min(B.value.width,B.value.height)/2.5*L.value.stopwatch.track.radiusRatio);function Ae(e,t){return e*(360/(t*1e3))%360}function je(e){let t=Math.PI/180*e;return{cx:B.value.width/2+Q.value*Math.cos(t),cy:B.value.height/2+Q.value*Math.sin(t)}}let $=f(()=>{let e=Ae(V.value.elapsed,L.value.stopwatch.cycleSeconds),{cx:t,cy:n}=je(e-90),r=+(e>180);return{cx:t||B.value.width/2,cy:n||B.value.height/2-Q.value,largeArcFlag:r,sweepFlag:1}});return y({start:K,pause:J,reset:q,restart:Y,lap:Z}),(t,r)=>(p(),u(`div`,{ref_key:`timerChart`,ref:k,class:`vue-data-ui-component vue-ui-timer`,style:n({fontFamily:L.value.style.fontFamily,width:`100%`,height:L.value.responsive?`100%`:`auto`,textAlign:`center`})},[L.value.style.title.text?(p(),u(`div`,{key:0,ref_key:`chartTitle`,ref:A,style:n({width:`100%`,background:L.value.style.backgroundColor})},[(p(),ne(se,{key:`title_${F.value}`,config:{title:{cy:`title`,...L.value.style.title},subtitle:{cy:`subtitle`,...L.value.style.title.subtitle}}},null,8,[`config`]))],4)):h(``,!0),(p(),u(`svg`,{ref_key:`svgRef`,ref:De,xmlns:e(ae),viewBox:`0 0 ${B.value.width<=0?10:B.value.width} ${B.value.height<=0?10:B.value.height}`,style:n({maxWidth:`100%`,overflow:`visible`,background:L.value.style.backgroundColor})},[o(e(T)),t.$slots[`chart-background`]?(p(),u(`foreignObject`,{key:0,x:0,y:0,width:B.value.width<=0?10:B.value.width,height:B.value.height<=0?10:B.value.height,style:{pointerEvents:`none`}},[m(t.$slots,`chart-background`,{},void 0,!0)],8,fe)):h(``,!0),L.value.stopwatch.tracker.gradient.show?(p(),u(`defs`,pe,[o(ce,{t:`radial`,id:`tracker_gradient_${P.value}`,cx:`50%`,cy:`50%`,r:`50%`,fx:`50%`,fy:`50%`,stops:[[`0%`,L.value.stopwatch.tracker.gradient.color,1],[`100%`,L.value.stopwatch.tracker.fill,1]]},null,8,[`id`,`stops`])])):h(``,!0),l(`circle`,{cx:B.value.width/2,cy:B.value.height/2,r:Q.value,fill:L.value.stopwatch.track.fill,stroke:L.value.stopwatch.track.stroke,"stroke-width":L.value.stopwatch.track.strokeWidth},null,8,me),L.value.stopwatch.cycleTrack.show?(p(),u(`path`,{key:2,d:`M ${B.value.width/2},${B.value.height/2-Q.value} A ${Q.value},${Q.value} 0 ${$.value.largeArcFlag},${$.value.sweepFlag} ${$.value.cx},${$.value.cy}`,stroke:L.value.stopwatch.cycleTrack.stroke,"stroke-width":L.value.stopwatch.cycleTrack.strokeWidth,"stroke-linecap":`round`,fill:`none`},null,8,he)):h(``,!0),l(`circle`,d($.value,{r:B.value.tracker.core,fill:L.value.stopwatch.tracker.gradient.show?`url(#tracker_gradient_${P.value})`:L.value.stopwatch.tracker.fill,stroke:L.value.stopwatch.tracker.stroke,"stroke-width":L.value.stopwatch.tracker.strokeWidth}),null,16,ge),L.value.stopwatch.tracker.aura.show?(p(),u(`circle`,d({key:3},$.value,{r:B.value.tracker.aura,fill:`${L.value.stopwatch.tracker.aura.fill}20`,stroke:L.value.stopwatch.tracker.aura.stroke,"stroke-width":L.value.stopwatch.tracker.aura.strokeWidth}),null,16,_e)):h(``,!0),t.$slots.time?(p(),u(`foreignObject`,{key:4,x:B.value.width/2,y:B.value.height/2,height:`0.1`,width:`0.1`,style:{overflow:`visible`}},[m(t.$slots,`time`,i(g({...V.value,...B.value})),void 0,!0)],8,ve)):t.$slots.timeSvg?(p(),u(`g`,ye,[m(t.$slots,`timeSvg`,i(g({...V.value,...B.value})),void 0,!0)])):(p(),u(`text`,{key:6,x:B.value.width/2,y:B.value.height/2+B.value.label/4,"font-size":B.value.label,"text-anchor":`middle`,fill:L.value.stopwatch.label.color,"font-weight":L.value.stopwatch.label.bold?`bold`:`normal`,style:{"font-variant-numeric":`tabular-nums !important`}},a(V.value.formatted||Oe.value),9,be))],12,de)),l(`div`,{ref_key:`chartLegend`,ref:j,style:n({width:`100%`,backgroundColor:L.value.stopwatch.legend.backgroundColor})},[t.$slots.controls?h(``,!0):(p(),u(`div`,xe,[L.value.stopwatch.legend.buttons.start?(p(),u(`button`,{key:0,title:L.value.stopwatch.legend.buttonTitles.start,onClick:K,class:`vue-ui-timer-button`,style:n({opacity:W.value?.2:1,cursor:W.value?`default`:R.value?`pointer`:`default`})},[o(x,{name:`play`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,Se)):h(``,!0),L.value.stopwatch.legend.buttons.pause?(p(),u(`button`,{key:1,title:G.value?L.value.stopwatch.legend.buttonTitles.resume:L.value.stopwatch.legend.buttonTitles.pause,onClick:J,class:`vue-ui-timer-button`,style:n({opacity:W.value?1:.2,cursor:W.value&&R.value?`pointer`:`default`})},[o(x,{name:`pause`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,Ce)):h(``,!0),L.value.stopwatch.legend.buttons.reset?(p(),u(`button`,{key:2,title:L.value.stopwatch.legend.buttonTitles.reset,onClick:q,class:`vue-ui-timer-button`,style:n({opacity:W.value?1:.2,cursor:W.value&&R.value?`pointer`:`default`})},[o(x,{name:`stop`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,we)):h(``,!0),L.value.stopwatch.legend.buttons.restart?(p(),u(`button`,{key:3,title:L.value.stopwatch.legend.buttonTitles.restart,onClick:Y,class:`vue-ui-timer-button`,style:n({opacity:W.value?1:.2,cursor:W.value&&R.value?`pointer`:`default`})},[o(x,{name:`restart`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,Te)):h(``,!0),L.value.stopwatch.legend.buttons.lap?(p(),u(`button`,{key:4,title:L.value.stopwatch.legend.buttonTitles.lap,onClick:Z,class:`vue-ui-timer-button`,style:n({opacity:W.value&&!G.value?1:.2,cursor:W.value&&!G.value&&R.value?`pointer`:`default`})},[o(x,{name:`lap`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,Ee)):h(``,!0)])),m(t.$slots,`controls`,i(g({start:K,pause:J,reset:q,restart:Y,lap:Z,laps:X.value,isRunning:W.value,isPaused:G.value,...V.value})),void 0,!0),m(t.$slots,`laps`,i(g({laps:X.value,lap:Z,isRunning:W.value,isPaused:G.value,...V.value})),void 0,!0)],4)],4))}},[[`__scopeId`,`data-v-60031aa0`]]);export{w as n};