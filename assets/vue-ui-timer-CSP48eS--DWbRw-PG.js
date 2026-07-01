
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PackageVersion-Dx81ZIAL-BDaKvArK.js","./vue.runtime.esm-bundler-NA8UCC27.js","./rolldown-runtime-Dy4uBu1J-DK3Fl9T5.js"])))=>i.map(i=>d[i]);
import{C as e,Jt as t,K as n,M as r,O as i,Ot as a,Pt as o,Q as s,S as c,Tt as l,U as ee,Xt as te,Y as u,Yt as d,b as f,k as ne,ut as re,w as p,x as m,z as h}from"./vue.runtime.esm-bundler-NA8UCC27.js";import{t as ie}from"./preload-helper-DYl5dUZ5.js";import{t as g}from"./rolldown-runtime-Dy4uBu1J-DK3Fl9T5.js";import{H as _,b as ae,j as oe}from"./lib-CXicicWN-DhEyN36k.js";import{t as v}from"./_plugin-vue_export-helper-B3ysoDQm-BDNMzG2s.js";import{n as y}from"./BaseIcon-DEtwcvEH-BbrktnoQ.js";import{n as se,t as ce}from"./useConfig-Bf_EBbe3-CEFX3Ybq.js";import{n as le}from"./Title-CVYf1f8m-D4Gz0yC6.js";import{n as ue,t as de}from"./useResponsive-BfnK0KxU-DBo-jDzL.js";import{t as fe}from"./useChartAccessibility-DYqac8yF-CFiArjHv.js";var pe=class{constructor(e,t,n,r=!0,i=!0){this.interval=t,this.elapsed=0,this.isPaused=!1;let a=new Blob([`
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
        `],{type:`application/javascript`}),o=URL.createObjectURL(a),s=new Worker(o);function c(e){let t=Math.floor(e/1e3),n=Math.floor(e%1e3/10),a=Math.floor(t/3600),o=Math.floor(t%3600/60),s=t%60,c=``;return i&&(c+=String(a).padStart(2,`0`)+`:`),c+=String(o).padStart(2,`0`)+`:`,c+=String(s).padStart(2,`0`),r&&(c+=`.`+String(n).padStart(2,`0`)),c}this.start=()=>{this.isPaused=!1,s.postMessage({action:`start`,data:{interval:this.interval}})},this.pause=()=>{this.isPaused?this.resume():(this.isPaused=!0,s.postMessage({action:`pause`}))},this.resume=()=>{this.isPaused&&(this.isPaused=(s.postMessage({action:`resume`}),!1))},this.stop=()=>{s.postMessage({action:`stop`}),this.isPaused=!1},this.reset=()=>{s.postMessage({action:`reset`}),this.elapsed=0,this.isPaused=!1},this.restart=()=>{this.stop(),this.start()},this.lap=()=>new Promise(e=>{s.postMessage({action:`lap`}),s.addEventListener(`message`,t=>{let{elapsed:n,timestamp:r,action:i}=t.data;if(i===`lap`){let t=c(n);e({timestamp:r||0,elapsed:n,formatted:t})}},{once:!0})}),s.onmessage=t=>{let{elapsed:n,timestamp:r}=t.data;this.elapsed=n,e({timestamp:r||0,elapsed:this.elapsed,formatted:c(this.elapsed)})},s.onerror=e=>{n&&n(e)}}},b=g({default:()=>E}),x=[`xmlns`,`viewBox`],me=[`width`,`height`],he={key:1},ge=[`id`],_e=[`stop-color`],S=[`stop-color`],ve=[`cx`,`cy`,`r`,`fill`,`stroke`,`stroke-width`],ye=[`d`,`stroke`,`stroke-width`],be=[`r`,`fill`,`stroke`,`stroke-width`],xe=[`r`,`fill`,`stroke`,`stroke-width`],Se=[`x`,`y`],Ce={key:5},we=[`x`,`y`,`font-size`,`fill`,`font-weight`],Te={key:0,class:`vue-ui-timer-controls`},Ee=[`title`],De=[`title`],C=[`title`],w=[`title`],T=[`title`],E=v({__name:`vue-ui-timer`,props:{config:{type:Object,default(){return{}}}},emits:[`start`,`pause`,`reset`,`restart`,`lap`],setup(g,{expose:v,emit:b}){let E=ne(()=>ie(()=>import(`./PackageVersion-Dx81ZIAL-BDaKvArK.js`).then(e=>e.t),__vite__mapDeps([0,1,2]),import.meta.url)),{vue_ui_timer:Oe}=ce(),D=g,O=b,k=l(null),A=l(null),j=l(null),M=a(null),N=a(null),P=l(oe()),F=l(0);n(()=>{I()});function I(){if(L.value.responsive){let e=ue(()=>{let{width:e,height:t}=de({chart:k.value,title:L.value.style.title.text?A.value:null,legend:j.value});requestAnimationFrame(()=>{B.value.width=e,B.value.height=t,L.value.responsiveProportionalSizing?(B.value.tracker.core=_({relator:Math.min(e,t),adjuster:L.value.style.width,source:6*L.value.stopwatch.tracker.radiusRatio,threshold:1,fallback:1}),B.value.tracker.aura=_({relator:Math.min(e,t),adjuster:L.value.style.width,source:12*L.value.stopwatch.tracker.aura.radiusRatio,threshold:1,fallback:1}),B.value.label=_({relator:Math.min(e,t),adjuster:L.value.style.width,source:L.value.stopwatch.label.fontSize,threshold:10,fallback:10})):B.value.label=L.value.stopwatch.label.fontSize})});M.value&&(N.value&&M.value.unobserve(N.value),M.value.disconnect()),M.value=new ResizeObserver(e),N.value=k.value.parentNode,M.value.observe(N.value)}}ee(()=>{M.value&&(N.value&&M.value.unobserve(N.value),M.value.disconnect())});let L=f({get:()=>z(),set:e=>e}),R=f(()=>L.value.useCursorPointer),{svgRef:ke}=fe({config:L.value.style.title});function z(){return se({userConfig:D.config,defaultConfig:Oe})}re(()=>D.config,e=>{L.value=z(),I(),F.value+=1},{deep:!0});let Ae=f(()=>{if(L.value.stopwatch.showHours&&L.value.stopwatch.showHundredth)return`00:00:00.00`;if(L.value.stopwatch.showHours&&!L.value.stopwatch.showHundredth)return`00:00:00`;if(!L.value.stopwatch.showHours&&L.value.stopwatch.showHundredth)return`00:00.00`;if(!L.value.stopwatch.showHours&&!L.value.stopwatch.showHundredth)return`00:00`}),B=l({height:L.value.style.height,width:L.value.style.width,tracker:{core:6*L.value.stopwatch.tracker.radiusRatio,aura:12*L.value.stopwatch.tracker.aura.radiusRatio},label:L.value.stopwatch.label.fontSize}),V=l(0),H=new pe(e=>je(e),10,``,L.value.stopwatch.showHundredth,L.value.stopwatch.showHours),U=l(!0),W=l(!1),G=l(!1);function K(){O(`start`),U.value&&H.start(),U.value=!1,W.value=!0}function q(){W.value&&(W.value=(O(`reset`),H.stop(),X.value=[],U.value=!0,!1))}function J(){G.value=!G.value,O(`pause`,V.value),H.pause()}function Y(){W.value&&(G.value=!1,O(`restart`),X.value=[],H.restart())}let X=l([]);async function Z(){if(!W.value||G.value)return;let e=await H.lap();e&&(X.value.push(e),O(`lap`,X.value))}function je({timestamp:e,elapsed:t,formatted:n}){V.value={timestamp:e,elapsed:t,formatted:n}}let Q=f(()=>Math.min(B.value.width,B.value.height)/2.5*L.value.stopwatch.track.radiusRatio);function Me(e,t){return e*(360/(t*1e3))%360}function Ne(e){let t=Math.PI/180*e;return{cx:B.value.width/2+Q.value*Math.cos(t),cy:B.value.height/2+Q.value*Math.sin(t)}}let $=f(()=>{let e=Me(V.value.elapsed,L.value.stopwatch.cycleSeconds),{cx:t,cy:n}=Ne(e-90),r=+(e>180);return{cx:t||B.value.width/2,cy:n||B.value.height/2-Q.value,largeArcFlag:r,sweepFlag:1}});return v({start:K,pause:J,reset:q,restart:Y,lap:Z}),(n,a)=>(u(),p(`div`,{ref_key:`timerChart`,ref:k,class:`vue-data-ui-component vue-ui-timer`,style:d({fontFamily:L.value.style.fontFamily,width:`100%`,height:L.value.responsive?`100%`:`auto`,textAlign:`center`})},[L.value.style.title.text?(u(),p(`div`,{key:0,ref_key:`chartTitle`,ref:A,style:d({width:`100%`,background:L.value.style.backgroundColor})},[(u(),c(le,{key:`title_${F.value}`,config:{title:{cy:`title`,...L.value.style.title},subtitle:{cy:`subtitle`,...L.value.style.title.subtitle}}},null,8,[`config`]))],4)):e(``,!0),(u(),p(`svg`,{ref_key:`svgRef`,ref:ke,xmlns:o(ae),viewBox:`0 0 ${B.value.width<=0?10:B.value.width} ${B.value.height<=0?10:B.value.height}`,style:d({maxWidth:`100%`,overflow:`visible`,background:L.value.style.backgroundColor})},[i(o(E)),n.$slots[`chart-background`]?(u(),p(`foreignObject`,{key:0,x:0,y:0,width:B.value.width<=0?10:B.value.width,height:B.value.height<=0?10:B.value.height,style:{pointerEvents:`none`}},[s(n.$slots,`chart-background`,{},void 0,!0)],8,me)):e(``,!0),L.value.stopwatch.tracker.gradient.show?(u(),p(`defs`,he,[m(`radialGradient`,{id:`tracker_gradient_${P.value}`,cx:`50%`,cy:`50%`,r:`50%`,fx:`50%`,fy:`50%`},[m(`stop`,{offset:`0%`,"stop-color":L.value.stopwatch.tracker.gradient.color},null,8,_e),m(`stop`,{offset:`100%`,"stop-color":L.value.stopwatch.tracker.fill},null,8,S)],8,ge)])):e(``,!0),m(`circle`,{cx:B.value.width/2,cy:B.value.height/2,r:Q.value,fill:L.value.stopwatch.track.fill,stroke:L.value.stopwatch.track.stroke,"stroke-width":L.value.stopwatch.track.strokeWidth},null,8,ve),L.value.stopwatch.cycleTrack.show?(u(),p(`path`,{key:2,d:`M ${B.value.width/2},${B.value.height/2-Q.value} A ${Q.value},${Q.value} 0 ${$.value.largeArcFlag},${$.value.sweepFlag} ${$.value.cx},${$.value.cy}`,stroke:L.value.stopwatch.cycleTrack.stroke,"stroke-width":L.value.stopwatch.cycleTrack.strokeWidth,"stroke-linecap":`round`,fill:`none`},null,8,ye)):e(``,!0),m(`circle`,h($.value,{r:B.value.tracker.core,fill:L.value.stopwatch.tracker.gradient.show?`url(#tracker_gradient_${P.value})`:L.value.stopwatch.tracker.fill,stroke:L.value.stopwatch.tracker.stroke,"stroke-width":L.value.stopwatch.tracker.strokeWidth}),null,16,be),L.value.stopwatch.tracker.aura.show?(u(),p(`circle`,h({key:3},$.value,{r:B.value.tracker.aura,fill:`${L.value.stopwatch.tracker.aura.fill}20`,stroke:L.value.stopwatch.tracker.aura.stroke,"stroke-width":L.value.stopwatch.tracker.aura.strokeWidth}),null,16,xe)):e(``,!0),n.$slots.time?(u(),p(`foreignObject`,{key:4,x:B.value.width/2,y:B.value.height/2,height:`0.1`,width:`0.1`,style:{overflow:`visible`}},[s(n.$slots,`time`,t(r({...V.value,...B.value})),void 0,!0)],8,Se)):n.$slots.timeSvg?(u(),p(`g`,Ce,[s(n.$slots,`timeSvg`,t(r({...V.value,...B.value})),void 0,!0)])):(u(),p(`text`,{key:6,x:B.value.width/2,y:B.value.height/2+B.value.label/4,"font-size":B.value.label,"text-anchor":`middle`,fill:L.value.stopwatch.label.color,"font-weight":L.value.stopwatch.label.bold?`bold`:`normal`,style:{"font-variant-numeric":`tabular-nums !important`}},te(V.value.formatted||Ae.value),9,we))],12,x)),m(`div`,{ref_key:`chartLegend`,ref:j,style:d({width:`100%`,backgroundColor:L.value.stopwatch.legend.backgroundColor})},[n.$slots.controls?e(``,!0):(u(),p(`div`,Te,[L.value.stopwatch.legend.buttons.start?(u(),p(`button`,{key:0,title:L.value.stopwatch.legend.buttonTitles.start,onClick:K,class:`vue-ui-timer-button`,style:d({opacity:W.value?.2:1,cursor:W.value?`default`:R.value?`pointer`:`default`})},[i(y,{name:`play`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,Ee)):e(``,!0),L.value.stopwatch.legend.buttons.pause?(u(),p(`button`,{key:1,title:G.value?L.value.stopwatch.legend.buttonTitles.resume:L.value.stopwatch.legend.buttonTitles.pause,onClick:J,class:`vue-ui-timer-button`,style:d({opacity:W.value?1:.2,cursor:W.value&&R.value?`pointer`:`default`})},[i(y,{name:`pause`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,De)):e(``,!0),L.value.stopwatch.legend.buttons.reset?(u(),p(`button`,{key:2,title:L.value.stopwatch.legend.buttonTitles.reset,onClick:q,class:`vue-ui-timer-button`,style:d({opacity:W.value?1:.2,cursor:W.value&&R.value?`pointer`:`default`})},[i(y,{name:`stop`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,C)):e(``,!0),L.value.stopwatch.legend.buttons.restart?(u(),p(`button`,{key:3,title:L.value.stopwatch.legend.buttonTitles.restart,onClick:Y,class:`vue-ui-timer-button`,style:d({opacity:W.value?1:.2,cursor:W.value&&R.value?`pointer`:`default`})},[i(y,{name:`restart`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,w)):e(``,!0),L.value.stopwatch.legend.buttons.lap?(u(),p(`button`,{key:4,title:L.value.stopwatch.legend.buttonTitles.lap,onClick:Z,class:`vue-ui-timer-button`,style:d({opacity:W.value&&!G.value?1:.2,cursor:W.value&&!G.value&&R.value?`pointer`:`default`})},[i(y,{name:`lap`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,T)):e(``,!0)])),s(n.$slots,`controls`,t(r({start:K,pause:J,reset:q,restart:Y,lap:Z,laps:X.value,isRunning:W.value,isPaused:G.value,...V.value})),void 0,!0),s(n.$slots,`laps`,t(r({laps:X.value,lap:Z,isRunning:W.value,isPaused:G.value,...V.value})),void 0,!0)],4)],4))}},[[`__scopeId`,`data-v-7cc009e4`]]);export{b as n};