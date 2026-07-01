
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t,D as n,K as r,O as i,Pt as a,Q as o,S as s,Tt as c,U as l,Xt as u,Y as d,Yt as f,Z as ee,_ as te,b as p,h as ne,mt as re,p as ie,pt as m,qt as h,s as ae,u as oe,ut as se,w as g,x as _}from"./vue.runtime.esm-bundler-NA8UCC27.js";import{t as ce}from"./preload-helper-DYl5dUZ5.js";import{t as le}from"./rolldown-runtime-Dy4uBu1J-DK3Fl9T5.js";import{It as ue,d as de,j as fe,pt as pe}from"./lib-CXicicWN-DhEyN36k.js";import{t as me}from"./_plugin-vue_export-helper-B3ysoDQm-BDNMzG2s.js";import{n as v}from"./BaseIcon-DEtwcvEH-BbrktnoQ.js";import{t as he}from"./ColorPicker-DMLahA2S-CmEuymbk.js";import{t as ge}from"./useConfig-Bf_EBbe3-CEFX3Ybq.js";import{t as _e}from"./dom-to-png-rjAIVHxa-Ch7tkXyK.js";import{t as ve}from"./usePrinter-Dng0UK-G-BYndFi6j.js";import{t as ye}from"./vue-ui-accordion-Di_givzQ-BGyA6Rvo.js";function be(e){let t=t=>e.isMacLike.value?t.metaKey:t.ctrlKey,n=e=>{let t=e;if(!t)return!1;let n=(t.tagName||``).toLowerCase();return t.isContentEditable||n===`input`||n===`textarea`||n===`select`},r=t=>!!(!e.isSummaryOpen.value||n(t.target)||e.isWriting.value),i=()=>{e.isDeleteMode.value=!1,e.isMoveMode.value=!1,e.isResizeMode.value=!1,e.isSelectMode.value=!1,e.isDrawMode.value=!1,e.isTextMode.value=!1,e.activeShape.value=void 0,e.showCaret.value=!1},a=t=>{switch(i(),t){case`m`:e.isMoveMode.value=!0;break;case`r`:e.isResizeMode.value=!0;break;case`d`:e.isDeleteMode.value=!0;break;case`g`:e.isSelectMode.value=!0,e.setShapeTo(`group`),e.activeShape.value=`group`;break;case`t`:e.isTextMode.value=!0,e.isWriting.value=!1,e.showCaret.value=!1;break;default:break}},o=t=>{switch(t){case`c`:e.setShapeTo(`circle`);break;case`s`:e.setShapeTo(`rect`);break;case`a`:e.setShapeTo(`arrow`);break;case`l`:e.setShapeTo(`line`);break;default:break}},s=(t,n)=>{let r=e.lastSelectedShape.value;if(!r)return;let i=(e,t)=>{typeof r[e]==`number`&&(r[e]+=t)};switch(r.type){case`rect`:case`circle`:case`text`:i(`x`,t),i(`y`,n);break;case`arrow`:i(`x`,t),i(`y`,n),i(`endX`,t),i(`endY`,n);break;default:break}},c=()=>{let t=e.lastSelectedShape.value;t&&(e.shapes.value=e.shapes.value.filter(e=>e.id!==t.id),e.lastSelectedShape.value=void 0)},l=!1,u=null,d=()=>{l||(l=!0,e.history?.value?.begin?.(`nudge`))},f=()=>{l&&(clearTimeout(u),u=setTimeout(()=>{l=!1,e.history?.value?.end?.()},160))},ee=()=>{clearTimeout(u),l&&e.history?.value?.end?.(),l=!1},te=n=>{if(t(n)&&!n.shiftKey&&n.key.toLowerCase()===`z`){if(r(n))return;n.preventDefault(),e.undoLastShape?.();return}if(t(n)&&n.shiftKey&&n.key.toLowerCase()===`z`||t(n)&&n.key.toLowerCase()===`y`){if(r(n))return;n.preventDefault(),typeof e.redoLastShape==`function`?e.redoLastShape():e.history?.value?.redo?.();return}if(r(n))return;let l=n.key.toLowerCase();if(l===`escape`){n.preventDefault(),i();return}if(l===`delete`||l===`backspace`){n.preventDefault(),c();return}if([`m`,`r`,`d`,`g`,`t`].includes(l)){n.preventDefault(),a(l);return}if([`c`,`a`,`l`,`s`].includes(l)){n.preventDefault(),o(l);return}if(n.key===`ArrowUp`||n.key===`ArrowDown`||n.key===`ArrowLeft`||n.key===`ArrowRight`){n.preventDefault(),d();let e=n.shiftKey?10:1;n.key===`ArrowUp`&&s(0,-e),n.key===`ArrowDown`&&s(0,e),n.key===`ArrowLeft`&&s(-e,0),n.key===`ArrowRight`&&s(e,0),f()}},p=e=>{e.key.startsWith(`Arrow`)&&f()};return window.addEventListener(`keydown`,te),window.addEventListener(`keyup`,p),function(){window.removeEventListener(`keydown`,te),window.removeEventListener(`keyup`,p),ee()}}var xe={class:`teleport-tooltip__inner`},y=me({__name:`TeleportedTooltip`,props:{show:{type:Boolean,default:!1},x:{type:Number,required:!0},y:{type:Number,required:!0},placement:{type:String,default:`top`},styleObject:{type:Object,default(){return{}}},delay:{type:Number,default:0},delayIn:{type:Number,default:300},delayOut:{type:Number,default:0}},setup(e){let n=e,i=p(()=>n.delayIn??n.delay),a=p(()=>n.delayOut??n.delay),u=c(!1),ee=null,ne=null;function re(){ee&&(ee=(clearTimeout(ee),null)),ne&&(ne=(clearTimeout(ne),null))}function ie(){re();let e=Math.max(0,i.value||0);e===0?u.value=!0:ee=setTimeout(()=>{u.value=!0,ee=null},e)}function m(){re();let e=Math.max(0,a.value||0);e===0?u.value=!1:ne=setTimeout(()=>{u.value=!1,ne=null},e)}se(()=>n.show,e=>{e?ie():m()},{immediate:!0}),r(()=>{n.show&&ie()}),l(()=>{re()});let ae=p(()=>({position:`fixed`,zIndex:2147483647,top:`${n.y}px`,left:`${n.x}px`,transform:n.placement===`bottom`?`translate(-50%, 8px)`:`translate(-50%, -100%)`,pointerEvents:`none`,...n.styleObject}));return(n,r)=>(d(),s(te,{to:`body`},[u.value?(d(),g(`div`,{key:0,class:h([`teleport-tooltip`,e.placement]),style:f(ae.value),role:`tooltip`,"aria-hidden":`false`},[_(`div`,xe,[o(n.$slots,`default`,{},void 0,!0)])],6)):t(``,!0)]))}},[[`__scopeId`,`data-v-c292996f`]]),Se=le({default:()=>Ct}),Ce={class:`vue-data-ui-component vue-ui-annotator`},we={"data-dom-to-png-ignore":``},Te=[`disabled`],Ee=[`disabled`],De=[`disabled`],Oe=[`disabled`],ke=[`disabled`],Ae=[`disabled`],je=[`disabled`],Me=[`disabled`],Ne=[`disabled`],Pe={class:`tool-selection`,style:{"margin-top":`6px`}},Fe={viewBox:`0 0 12 12`,style:{width:`100%`}},Ie=[`fill`],Le={key:0},Re={class:`tool-input`},ze=[`checked`],Be={viewBox:`0 0 12 12`,style:{width:`100%`}},Ve=[`fill`],He={key:1},Ue={class:`tool-input`},We=[`checked`],Ge={viewBox:`0 0 24 24`,style:{width:`100%`}},Ke=[`stroke`],qe={key:2},Je={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`}},Ye={class:`tool-input`},Xe={key:3},Ze={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`}},Qe={class:`tool-input`},$e={viewBox:`0 0 24 24`,height:`24`,width:`24`,style:{"margin-bottom":`-5px`,"margin-top":`-10px`}},et=[`checked`],tt={key:4},nt={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`}},rt={class:`tool-input`},it={key:5},at={key:6},ot=[`disabled`],st={key:7},ct=[`disabled`],lt={key:8},ut={key:9},dt={key:10},ft={key:11},pt={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`},class:`tooltip`},mt={style:{display:`flex`,"flex-direction":`column`,"align-items":`start`,"justify-content":`center`}},ht={class:`tool-input`,style:{"font-variant-numeric":`tabular-nums`}},gt=[`id`],_t=[`viewBox`,`width`,`height`],vt=[`width`,`height`,`pointer-events`],yt=[`innerHTML`],bt=[`height`,`viewBox`,`width`],xt=[`cx`,`cy`],St=`annotations`,Ct=me({__name:`vue-ui-annotator`,props:{config:{type:Object,default(){return{}}},dataset:{type:Object,default(){return{shapes:[],lastSelectedShape:void 0}}}},emits:[`toggleOpenState`,`saveAnnotations`],setup(te,{emit:le}){let me=te,xe=le,Se=c(fe()),{isImaging:Ct,generateImage:wt}=ve({elementId:Se.value,fileName:St}),b=c(void 0),Tt=c(1),x=c({start:{x:0,y:0},end:{x:0,y:0}}),S=c(void 0),C=c(void 0),w=c(!1),T=c(!1),Et=c(!1),E=c(!1),Dt=c(!1),Ot=c(!0),D=c(!1),kt=c(!1),At=c(!1),O=c(!1),jt=c(!1),k=c(!1),A=c(!1),j=c(!1),M=c(!1),Mt=c(!1),N=c(!1),P=c(me.dataset?.lastSelectedShape??void 0),F=c({x:0,y:0}),Nt=c(!0),I=c([]),L=c(me.dataset?.shapes||[]);c([]);let Pt=c(Math.round(Math.random())*1e5),Ft=c(1e3),It=c(1e3),R=c({arrow:{color:`grey`,filled:!0},circle:{color:`grey`,filled:!1,radius:3,strokeWidth:2},rect:{color:`grey`,filled:!1,strokeWidth:2,height:12,width:12}}),Lt=c(`#1A1A1A`),z=c(!1),Rt=c(1),zt=c(void 0),Bt=c(1),Vt=c(1),B=c(`start`),Ht=c(20),Ut=c(100),Wt=ue,V=c(null),H=c(!1),U=c(null),W=c({x:0,y:0}),Gt=c(null),G=c([]),Kt=c(!1),qt=c(null),Jt=c({undo:0,redo:0}),K=c(null);c(null),c(null);let Yt=c(null),q=p(()=>{let e=ge().vue_ui_annotator;return Object.keys(me.config||{}).length?de(pe({defaultConfig:e,userConfig:me.config})):e}),J=p(()=>q.value.useCursorPointer),Y=p(()=>{let e=q.value.style.tooltips;return{backgroundColor:e.backgroundColor,color:e.color,border:e.border,borderRadius:`${e.borderRadius}px`,boxShadow:e.boxShadow}}),Xt=p(()=>L.value.filter(e=>![`line`,`group`].includes(e.type)).length>1),Zt=p(()=>Wt[Ut.value>98?98:Ut.value]),Qt=p(()=>{switch(!0){case E.value:return`default`;case O.value:return`move`;case M.value:return`text`;case k.value:return`se-resize`;default:return``}}),$t=p(()=>L.value),X=c(null);function en(e){if(e)switch(!0){case e.type===`rect`:return`
                <rect
                id="${e.id}" 
                style="stroke-dasharray: 10; display:${C.value&&C.value===e.id?`initial`:`none`}"
                x="${e.x-20}"
                y="${e.y-20}"
                height="${e.rectHeight+40}"
                width="${e.rectWidth+40}"
                fill="transparent"
                stroke="grey"
                />
            `;case e.type===`circle`:return`
                <rect
                id="${e.id}" 
                style="stroke-dasharray: 10; display:${C.value&&C.value===e.id?`initial`:`none`}"
                x="${e.x-e.circleRadius-20}"
                y="${e.y-e.circleRadius-20}"
                height="${e.circleRadius*2+40}"
                width="${e.circleRadius*2+40}"
                fill="transparent"
                stroke="grey"
                />
            `;case e.type===`arrow`:let t=e.endX-e.x>0,n=e.endY-e.y>0;return`
                <rect
                id="${e.id}" 
                style="stroke-dasharray: 10; display:${C.value&&C.value===e.id?`initial`:`none`}"
                x="${t?e.x-20:e.endX-20}"
                y="${n?e.y-20:e.endY-20}"
                height="${n?e.endY-e.y+40:e.y-e.endY+40}"
                width="${t?e.endX-e.x+40:e.x-e.endX+40}"
                fill="transparent"
                stroke="grey"
                />
            `;case e.type===`text`:let r=X.value?Array.from(X.value.getElementsByTagName(`text`)).find(t=>t.id===e.id):null;if(!r)return;let{x:i,y:a,width:o,height:s}=r.getBBox();return`
                <rect
                id="${e.id}" 
                style="stroke-dasharray: 10; display:${C.value&&C.value===e.id?`initial`:`none`}"
                x="${i-20}"
                y="${a-20}"
                height="${s+40}"
                width="${o+40}"
                fill="transparent"
                stroke="grey"
                />
            `;default:return``}}function tn(e,t=!1){switch(!0){case e.type===`circle`:return`
                <g id="${e.id}" style="display:${E.value?`initial`:`none`};">
                    <circle id="${e.id}" cx="${e.x}" cy="${e.y}" r="12" fill="red"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x-4}" y1="${e.y-4}" x2="${e.x+4}" y2="${e.y+4}"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x+4}" y1="${e.y-4}" x2="${e.x-4}" y2="${e.y+4}"/>
                </g>
            `;case e.type===`text`:let n,r=[-8,-12,-4,-12,-4];switch(!0){case e.textAlign===`start`:n=t?[-20,-24,-16,-16,-24]:[-16,-20,-12,-12,-20];break;case e.textAlign===`middle`:n=[0,-4,4,4,-4],r=[-32,-36,-28,-36,-28];break;case e.textAlign===`end`:n=[16,20,12,12,20];break;default:n=[0,0,0];break}return`
                <g id="${e.id}" style="display:${E.value?`initial`:`none`};">
                    <circle id="${e.id}" cx="${e.x+n[0]}" cy="${e.y+r[0]}" r="12" fill="red"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x+n[1]}" y1="${e.y+r[1]}" x2="${e.x+n[2]}" y2="${e.y+r[2]}"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x+n[3]}" y1="${e.y+r[3]}" x2="${e.x+n[4]}" y2="${e.y+r[4]}"/>
                </g>
            `;default:return`
                <g id="${e.id}" style="display:${E.value?`initial`:`none`};">
                    <circle id="${e.id}" cx="${e.x-4}" cy="${e.y-4}" r="12" fill="red"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x-8}" y1="${e.y-8}" x2="${e.x}" y2="${e.y}"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x}" y1="${e.y-8}" x2="${e.x-8}" y2="${e.y}"/>
                </g>
            `}}function nn(e){switch(!0){case e.textAlign===`middle`:return`<path class="vue-ui-annotator-caret" stroke="black" stroke-width="2" d="M${e.x},${e.y-e.fontSize} ${e.x},${e.y-e.fontSize-15}" /> <path class="vue-ui-annotator-caret" stroke="black" stroke-width="2" d="M${e.x-3},${e.y-e.fontSize-5} ${e.x},${e.y-e.fontSize} ${e.x+3},${e.y-e.fontSize-5}"/>`;case e.textAlign===`start`:let t=e.isBulletTextMode?e.fontSize:0;return`<path class="vue-ui-annotator-caret" d="M${e.x-20-t},${e.y-e.fontSize/6} ${e.x-5-t},${e.y-e.fontSize/6}" stroke="black" stroke-width="2" />
                    <path class="vue-ui-annotator-caret" d="M${e.x-10-t},${e.y-e.fontSize/3} ${e.x-5-t},${e.y-e.fontSize/6} ${e.x-10-t},${e.y}" stroke="black" stroke-width="2">`;case e.textAlign===`end`:return`<path class="vue-ui-annotator-caret" d="M${e.x+20},${e.y-e.fontSize/6} ${e.x+5},${e.y-e.fontSize/6}" stroke="black" stroke-width="2" />
                    <path class="vue-ui-annotator-caret" d="M${e.x+10},${e.y-e.fontSize/3} ${e.x+5},${e.y-e.fontSize/6} ${e.x+10},${e.y}" stroke="black" stroke-width="2">`;default:return``}}function rn(e,t,n=!1){switch(!0){case e.textAlign===`start`:return`
            <g id="${e.id}">
                <rect 
                    id="${e.id}" 
                    style="display:${P.value&&P.value.id===e.id?`initial`:`none`};" 
                    x="${e.x}" 
                    y="${e.y-50}" 
                    height="${e.lines===0||e.lines===1?e.fontSize*4:e.fontSize*2*e.lines}"
                    width="100" 
                    fill="rgba(0,0,0,0)"
                />
                <text
                style="user-select:none; height:100px;"
                id="${e.id}"
                x="${e.x}"
                y="${e.y}"
                text-anchor="${e.textAlign}"
                font-size="${e.fontSize}"
                fill="${e.color}"
                font-weight="${e.isBold?`bold`:`normal`}"
                font-style="${e.isItalic?`italic`:`normal`}"
                text-decoration="${e.isUnderline?`underline`:`none`}"
                >
                    ${t.join(``)}
                </text>
                ${z.value&&P.value&&P.value.id===e.id?nn(e):``}
                ${tn(e,n)}
            </g> 
            `;case e.textAlign===`middle`:return`
                <g id="${e.id}">
                <rect 
                    id="${e.id}" 
                    style="display:${P.value&&P.value.id===e.id?`initial`:`none`};" 
                    x="${e.x-50}" 
                    y="${e.y-50}" 
                    height="${e.lines===0||e.lines===1?e.fontSize*4:e.fontSize*2*e.lines}"
                    width="100" 
                    fill="rgba(0,0,0,0)"
                />
                <text
                style="user-select:none; height:100px;"
                id="${e.id}"
                x="${e.x}"
                y="${e.y}"
                text-anchor="${e.textAlign}"
                font-size="${e.fontSize}"
                fill="${e.color}"
                font-weight="${e.isBold?`bold`:`normal`}"
                font-style="${e.isItalic?`italic`:`normal`}"
                text-decoration="${e.isUnderline?`underline`:`none`}"
                >
                    ${t.join(``)}
                </text>
                ${z.value&&P.value&&P.value.id===e.id?nn(e):``}
                ${tn(e)}
                </g>
            `;case e.textAlign===`end`:return`
            <g id="${e.id}">
                <rect 
                    id="${e.id}" 
                    style="display:${P.value&&P.value.id===e.id?`initial`:`none`};" 
                    x="${e.x-100}" 
                    y="${e.y-50}" 
                    height="${e.lines===0||e.lines===1?e.fontSize*4:e.fontSize*2*e.lines}"
                    width="100" 
                    fill="rgba(0,0,0,0)"
                />
                <text
                style="user-select:none; height:100px;"
                id="${e.id}"
                x="${e.x}"
                y="${e.y}"
                text-anchor="${e.textAlign}"
                font-size="${e.fontSize}"
                fill="${e.color}"
                font-weight="${e.isBold?`bold`:`normal`}"
                font-style="${e.isItalic?`italic`:`normal`}"
                text-decoration="${e.isUnderline?`underline`:`none`}"
                >
                    ${t.join(``)}
                </text>
                ${z.value&&P.value&&P.value.id===e.id?nn(e):``}
                ${tn(e)}
            </g> 
            `;default:return``}}let an=p(()=>$t.value.map(e=>{switch(!0){case e&&e.type===`arrow`:let t=e.strokeWidth>3?5:10,n=e.strokeWidth>3?2.5:5;return{html:`
          <defs>
          <marker 
              id="${e.id}" 
              markerWidth="${t}" 
              markerHeight="${t}" 
              refX="0" 
              refY="${n}" 
              orient="auto"
          >
              <polygon 
              points="0 0,${t} ${n}, 0 ${t}" 
              fill="${e.color}"
              />
          </marker>
          </defs>
          ${en(e)}
          <g id="${e.id}">
              <path 
              style="stroke-linecap: round !important; ${e.isDash?`stroke-dasharray: ${e.strokeWidth*3}`:``}" 
              stroke="${e.color}" 
              id="${e.id}" 
              d="M${e.x},${e.y} ${e.endX},${e.endY}" 
              stroke-width="${e.strokeWidth}" 
              marker-end="url(#${e.id})"
              />
          </g>
          <g id="${e.id}">
          <rect 
              id="${e.id}"
              x="${e.x-10}"
              y="${e.y-10}"
              height="20"
              width="20"
              fill="rgba(0,0,0,0.3)"
              style="display:${k.value||O.value?`initial`:`none`}; rx:1 !important; ry:1 !important;"
          />
          </g>
          ${tn(e)}
          </g>
          `,id:e.id};case e&&e.type===`circle`:return{html:`
          <g id="${e.id}">
              ${en(e)}
              <circle 
              id="${e.id}" 
              cx="${e.x}" 
              cy="${e.y}" 
              r="${e.circleRadius?e.circleRadius:Number.MIN_VALUE}"
              fill="${e.isFilled?e.color+e.alpha:`rgba(255,255,255,0.001)`}" 
              stroke="${e.color+e.alpha}" 
              stroke-width="${e.strokeWidth}"
              style="${e.isDash?`stroke-dasharray: ${e.strokeWidth*3}`:``}"
              >
              </circle>
          </g>
          
          ${tn(e)}`,id:e.id};case e&&e.type===`group`:return{html:`<g id="${e.id}">
            <rect
                id="${k.value?``:e.id}"
                x="${e.x}"
                y="${e.y}"
                fill="transparent"
                height="${e.rectHeight}"
                width="${e.rectWidth}"
                stroke="grey"
                stroke-width="1"
                style="rx:1 !important; ry:1 !important; ${e.isDash?`stroke-dasharray: ${e.strokeWidth*3}`:``}; display:${A.value||E.value||C.value&&C.value===e.id?`initial`:`none`};"
                        />
            <g id="${e.id}">
            ${e.content?e.content:``}
            </g>
            ${tn(e)}
            </g> `,id:e.id};case e&&e.type===`rect`:return{html:`<g id="${e.id}">
            ${en(e)}
            <rect
                id="${k.value?``:e.id}"
                x="${e.x}"
                y="${e.y}"
                fill="${e.isFilled?e.color+e.alpha:`rgba(255,255,255,0.001)`}"
                height="${e.rectHeight}"
                width="${e.rectWidth}"
                stroke="${e.color+e.alpha}"
                stroke-width="${e.strokeWidth}"
                style="rx:1 !important; ry:1 !important; ${e.isDash?`stroke-dasharray: ${e.strokeWidth*3}`:``}"
            />
            <rect id="${e.id}"
                x="${e.x+e.rectWidth}"
                y="${e.y+e.rectHeight}"
                height="20"
                width="20"
                fill="rgba(0,0,0,0.3)"
                style="display:${k.value?`initial`:`none`}; rx:1 !important; ry:1 !important;"
            />
            ${tn(e)}
            </g> `,id:e.id};case e&&e.type===`line`:return{html:`
                <g id="${e.id}">
                    <path 
                    id="${e.id}" 
                    d="M${e.path?e.path:``}" 
                    style="stroke:${e.color+e.alpha} !important; fill:none; stroke-width:${e.strokeWidth} !important; stroke-linecap: round !important; stroke-linejoin: round !important;"        
                    />
            ${tn(e)}
                </g>
                `,id:e.id};case e&&e.type===`text`:let r=e.textContent.split(`‎`),i=[];for(let t=0;t<r.length;t+=1)i.push(`
        ${e.isBulletTextMode?`<tspan x="${e.x-e.fontSize}" y="${e.y+e.fontSize*t}" id="${e.id}" font-size="${e.fontSize/2}">⬤</tspan>`:``}
                <tspan id="${e.id}" x="${e.x}" y="${e.y+e.fontSize*t}">
                    ${r[t]}
                </tspan>`);return{html:`
            ${en(e)}
            ${rn(e,i,e.isBulletTextMode)}
            `,id:e.id};default:break}}));function Z(e){if(e==null)return e;try{return typeof structuredClone==`function`?structuredClone(e):JSON.parse(JSON.stringify(e))}catch{return Array.isArray(e)?e.map(e=>Z(e)):typeof e==`object`?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Z(t)])):e}}function on(e=!1){if(!b.value||!Dt.value)return;x.value.end={x:F.value.x,y:F.value.y};let t;L.value.length>0&&S.value&&(t=[...L.value].find(e=>e.id===S.value.id));let n,r,i;t&&(n=t.x-x.value.end.x,r=t.y-x.value.end.y,i=Math.sqrt(n*n+r*r));let a,o;switch(e?(a=Math.max(x.value.end.x,t.x),o=Math.min(x.value.end.x,t.x),Math.max(x.value.end.y,t.y),Math.min(x.value.end.y,t.y)):(a=Math.max(x.value.end.x,x.value.start.x),o=Math.min(x.value.end.x,x.value.start.x),Math.max(x.value.end.y,x.value.start.y),Math.min(x.value.end.y,x.value.start.y)),!0){case b.value===`arrow`:L.value.at(-1).endX=x.value.end.x,L.value.at(-1).endY=x.value.end.y;break;case b.value===`circle`:L.value.at(-1).circleRadius=Ot.value?Z(a-o)+20:i+20;break;case b.value===`line`:L.value.at(-1).path+=` ${F.value.x} ${F.value.y} `;break;case[`rect`,`group`].includes(b.value):L.value.at(-1).rectWidth=Z(x.value.end.x-L.value.at(-1).x)>0?Z(x.value.end.x-L.value.at(-1).x):20,L.value.at(-1).rectHeight=Z(x.value.end.y-L.value.at(-1).y)>0?Z(x.value.end.y-L.value.at(-1).y):20;default:break}}function sn(){if(!Dt.value){K.value=null;return}on(),K.value=requestAnimationFrame(sn)}function cn(e){let t=L.value.findIndex(t=>t.id===e);if(t>-1&&t!==L.value.length-1){let[e]=L.value.splice(t,1);L.value.push(e)}}function ln(e){let t=e=>!!e&&L.value.some(t=>t.id===e);if(t(e?.target?.id))return e.target.id;let n=X.value?.querySelector(`.annotator__glass`);if(!n)return null;let r=n.style.pointerEvents;n.style.pointerEvents=`none`;let i=document.elementFromPoint(e.clientX,e.clientY);return n.style.pointerEvents=r||`all`,t(i?.id)?i.id:null}function un(e={}){let{maxEntries:t=200,maxBytes:n=2e6}=e,r={open:!1,before:null,undo:[],redo:[]},i={undo:0,redo:0},a=e=>typeof e==`string`?e.length*2:0,o=()=>JSON.stringify({shapes:Z(L.value),lastSelectedShape:Z(P.value)}),s=e=>{let t=JSON.parse(e);L.value=t.shapes,P.value=t.lastSelectedShape},c=()=>{Jt.value.undo=r.undo.length,Jt.value.redo=r.redo.length},l=(e,o)=>{let s=r[e];for(s.push(o),i[e]+=a(o);s.length>t||i[e]>n;){let t=s.shift();i[e]-=a(t)}};return{begin(){r.open||(r.open=!0,r.before=o())},end(){r.open&&(r.open=!1,o()!==r.before&&(l(`undo`,r.before),r.redo.length=0,i.redo=0),r.before=null,c())},undo(){let e=r.undo.pop();e&&(i.undo-=a(e),l(`redo`,o()),s(e),c())},redo(){let e=r.redo.pop();e&&(i.redo-=a(e),l(`undo`,o()),s(e),c())},size(){return{undo:r.undo.length,redo:r.redo.length,approxBytes:{undo:i.undo,redo:i.redo}}}}}function dn(){if(!Gt.value)return;let e=Gt.value.getBoundingClientRect();W.value={x:e.left+e.width/2,y:e.top}}function Q(e,t,n=`top`){U.value=e,Gt.value=t.currentTarget||t.target,dn(),H.value=!0,window.addEventListener(`scroll`,dn,!0),window.addEventListener(`resize`,dn,{passive:!0})}function $(){H.value=!1,U.value=null,Gt.value=null,window.removeEventListener(`scroll`,dn,!0),window.removeEventListener(`resize`,dn)}function fn(e){let t=e?.target&&e.target.id||S.value&&S.value.id,n=L.value.find(e=>e.id===t);if(!n){V.value=null;return}P.value=n;let r=F.value.x,i=F.value.y;switch(n.type){case`rect`:case`circle`:case`text`:V.value={dx:r-n.x,dy:i-n.y};break;case`arrow`:V.value={dx:r-n.x,dy:i-n.y,endDx:r-n.endX,endDy:i-n.endY};break;case`group`:V.value={dx:r-(n.x||0),dy:i-(n.y||0)};break;default:V.value={dx:0,dy:0};break}}function pn(e){let t=L.value.find(e=>e.id===P.value.id);switch(!0){case e===`front`:L.value=L.value.filter(e=>e.id!==t.id),L.value.push(t);break;case e===`back`:L.value=L.value.filter(e=>e.id!==t.id),L.value=[t,...L.value];break;default:return}}function mn(){if(!P.value?.id)return;let e={...P.value,id:`${P.value.id}_copy_${fe()}`,x:P.value.x-100<0?1:P.value.x-100,y:P.value.y-100<0?1:P.value.y-100};L.value.push(e)}function hn(e){e.preventDefault(),Nt.value=!1,e.target&&e.target.id&&(C.value=e.target.id)}function gn(){!P.value||!P.value.id.includes(`text`)||P.value.textContent===``&&(L.value=L.value.filter(e=>e.id!==P.value.id),P.value=L.value.at(-1))}function _n(e){if(E.value)return;e.preventDefault(),e.stopPropagation(),gn(),M.value?(N.value=!0,z.value=!0):(N.value=!1,z.value=!1,M.value=!1);let t=`text_${fe()}`;if(N.value){G.value?.begin(),L.value.push({id:t,type:`text`,lines:0,x:F.value.x,y:F.value.y,textContent:``,fontSize:Z(Ht.value),textAlign:Z(B.value),isBold:Z(w.value),isItalic:Z(kt.value),isUnderline:Z(Mt.value),color:Z(Lt.value),isBulletTextMode:Z(T.value)}),S.value=L.value.at(-1),P.value=L.value.at(-1),G.value?.end();return}let n=()=>{Et.value=L.value.find(t=>t.id===e.target.id).isDash},r=()=>{Tt.value=L.value.find(t=>t.id===e.target.id).strokeWidth};if(A.value=!1,e.target.id.includes(`arrow`)){b.value=`arrow`,n(),r();return}if(e.target.id.includes(`circle`)){b.value=`circle`,R.value.circle.filled=L.value.find(t=>t.id===e.target.id).isFilled,n(),r();return}if(e.target.id.includes(`rect`)){b.value=`rect`,R.value.rect.filled=L.value.find(t=>t.id===e.target.id).isFilled,n(),r();return}if(e.target.id.includes(`line`)){b.value=`line`,r();return}if(e.target.id.includes(`text`)){M.value=!0,N.value=!0,z.value=!0;let t=L.value.find(t=>t.id===e.target.id);t&&t.textAlign&&(B.value=L.value.find(t=>t.id===e.target.id).textAlign),t&&(T.value=L.value.find(t=>t.id===e.target.id).isBulletTextMode);return}}function vn(e){!P.value||P.value.type!==`text`||(P.value.textAlign=e)}function yn(){G.value?.undo?.()}function bn(){G.value?.redo?.()}let xn=[16,17,18,20,27,33,34,35,36,37,38,39,40,45,91,112,113,114,115,116,117,118,119,120,121,122,123,221,255,`Unidentified`];function Sn(e){if(Nt.value)return;e.preventDefault();let t=e.keyCode;if(!N.value)return;z.value=!0;let n;if(n=P.value.type===`text`?L.value.find(e=>e.id===P.value.id):L.value.at(-1),S.value=n,n.type===`text`)switch(S.value.isBold=Z(w.value),S.value.isItalic=Z(kt.value),S.value.isUnderline=Z(Mt.value),!0){case[8,46].includes(t):n.textContent=n.textContent.slice(0,-1);break;case t===9:n.textContent+=`&nbsp; &nbsp; &nbsp; &nbsp;`;break;case t===13:n.lines+=1,n.textContent+=`‎`;return;case xn.includes(t):return;default:n.textContent+=e.key}}function Cn(){if(I.value=[],b.value!==`group`){A.value=!1,L.value=L.value.filter(e=>e.type!==`group`);return}let e=L.value.at(-1);if(L.value.forEach(t=>{if(t.type!==`group`)switch(!0){case t.type===`arrow`:let n=t.x<=t.endX&&t.y<=t.endY&&e.x<=t.x&&e.y<=t.y&&e.x+e.rectWidth>=t.endX&&e.y+e.rectHeight>=t.endY,r=t.endY<t.y&&t.x<t.endX&&e.x<=t.x&&e.y<=t.y&&e.x+e.rectWidth>=t.endX&&e.y+e.rectHeight>=t.y,i=t.x>t.endX&&t.y<t.endY&&e.x<=t.endX&&e.y<=t.endY&&e.x+e.rectWidth>=t.x&&e.y+e.rectHeight>=t.endY,a=t.x>t.endX&&t.y>t.endY&&e.x<=t.endX&&e.y<=t.endY&&e.x+e.rectWidth>=t.x&&e.y+e.rectHeight>=t.y;(n||r||i||a)&&I.value.push(t);break;case t.type===`circle`:e.x<=t.x+t.circleRadius&&e.y<=t.y+t.circleRadius&&t.x+t.circleRadius<=e.x+e.rectWidth&&t.y+t.circleRadius<=e.y+e.rectHeight&&I.value.push(t);break;case t.type===`rect`:e.x<=t.x&&e.y<=t.y&&t.x<=e.x+e.rectWidth&&t.y<=e.y+e.rectHeight&&t.x+t.rectWidth<=e.x+e.rectWidth&&t.y+t.rectHeight<=e.y+e.rectHeight&&t.rectWidth<=e.rectWidth&&t.rectHeight<=e.rectHeight&&I.value.push(t);break;case t.type===`text`:e.x<=t.x&&e.y<=t.y&&I.value.push(t);break;default:break}}),I.value=I.value.map(t=>({...t,id:e.id,oldId:t.id,diffX:t.x-e.x,diffY:t.y-e.y,diffEndX:t.endX?t.endX-e.x:0,diffEndY:t.endY?t.endY-e.y:0})),e.source=I.value,I.value.length>1){let t=Z(I.value).map(e=>e.oldId);L.value=L.value.filter(e=>!t.includes(e.id)),I.value.forEach(t=>{switch(!0){case t.type===`circle`:e.content+=`
            <circle
            id="${t.id}"
            cx="${t.x}"
            cy="${t.y}"
            r="${t.circleRadius?t.circleRadius:Number.MIN_VALUE}"
            fill="${t.isFilled?t.color+t.alpha:`rgba(255,255,255,0.001)`}"
            stroke="${t.color+t.alpha}" 
            stroke-width="${t.strokeWidth}"
            style="${t.isDash?`stroke-dasharray: ${t.strokeWidth*3}`:``}"
            />
        `;break;case t.type===`rect`:e.content+=`
            <rect
            id="${k.value?``:t.id}"
            x="${t.x}"
            y="${t.y}"
            fill="${t.isFilled?t.color+t.alpha:`rgba(255,255,255,0.001)`}"
            height="${t.rectHeight}"
            width="${t.rectWidth}"
            stroke="${t.color+t.alpha}"
            stroke-width="${t.strokeWidth}"
            style="rx:1 !important; ry:1 !important; ${t.isDash?`stroke-dasharray: ${t.strokeWidth*3}`:``}"
                        />
        `;break;case t.type===`arrow`:let n=t.strokeWidth>3?5:10,r=t.strokeWidth>3?2.5:5,i=fe();e.content+=`
            <g id="${t.id}">
            <defs>
                <marker 
                id="${i}" 
                markerWidth="${n}" 
                markerHeight="${n}" 
                refX="0" 
                refY="${r}" 
                orient="auto"
                >
                <polygon 
                points="0 0,${n} ${r}, 0 ${n}" 
                fill="${t.color}"
                />
                </marker>
            </defs>

            <path 
                style="stroke-linecap: round !important; ${t.isDash?`stroke-dasharray: ${t.strokeWidth*3}`:``}" 
                stroke="${t.color}" 
                id="${t.id}" 
                d="M${t.x},${t.y} ${t.endX},${t.endY}" 
                stroke-width="${t.strokeWidth}" 
                marker-end="url(#${i})"
            />
            </g>
        `;break;case t.type===`text`:let a=t.textContent.split(`‎`),o=[];for(let e=0;e<a.length;e+=1)o.push(`
            ${t.isBulletTextMode?`<tspan x="${t.x-t.fontSize}" y="${t.y+t.fontSize*e}" id="${t.id}" font-size="${t.fontSize/2}">⬤</tspan>`:``}
            <tspan id="${t.id}" x="${t.x}" y="${t.y+t.fontSize*e}">
                ${a[e]}
            </tspan>`);e.content+=`
            ${rn(t,o,t.isBulletTextMode)}
            `;break;default:break}})}else L.value=L.value.filter(t=>t.id!==e.id)}function wn(e){e.content=``;let t=e.x||0,n=e.y||0;(e.source||[]).forEach(r=>{switch(r.type){case`circle`:{let i=t+r.diffX,a=n+r.diffY;e.content+=`
          <circle
            id="${r.id}"
            cx="${i}"
            cy="${a}"
            r="${r.circleRadius?r.circleRadius:Number.MIN_VALUE}"
            fill="${r.isFilled?r.color+r.alpha:`rgba(255,255,255,0.001)`}"
            stroke="${r.color+r.alpha}"
            stroke-width="${r.strokeWidth}"
            style="${r.isDash?`stroke-dasharray: ${r.strokeWidth*3}`:``}"
          />
        `;break}case`rect`:{let i=t+r.diffX,a=n+r.diffY;e.content+=`
          <rect
            id="${k.value?``:r.id}"
            x="${i}"
            y="${a}"
            fill="${r.isFilled?r.color+r.alpha:`rgba(255,255,255,0.001)`}"
            height="${r.rectHeight}"
            width="${r.rectWidth}"
            stroke="${r.color+r.alpha}"
            stroke-width="${r.strokeWidth}"
            style="rx:1 !important; ry:1 !important; ${r.isDash?`stroke-dasharray: ${r.strokeWidth*3}`:``}"
          />
        `;break}case`arrow`:{let i=t+r.diffX,a=n+r.diffY,o=t+r.diffEndX,s=n+r.diffEndY,c=r.strokeWidth>3?5:10,l=r.strokeWidth>3?2.5:5,u=`m_${r.id}_${fe()}`;e.content+=`
          <g id="${r.id}">
            <defs>
              <marker 
                id="${u}" 
                markerWidth="${c}" 
                markerHeight="${c}" 
                refX="0" 
                refY="${l}" 
                orient="auto">
                <polygon points="0 0,${c} ${l}, 0 ${c}" fill="${r.color}" />
              </marker>
            </defs>
            <path
              style="stroke-linecap: round !important; ${r.isDash?`stroke-dasharray: ${r.strokeWidth*3}`:``}"
              stroke="${r.color}"
              id="${r.id}"
              d="M${i},${a} ${o},${s}"
              stroke-width="${r.strokeWidth}"
              marker-end="url(#${u})"
            />
          </g>
        `;break}case`text`:{let i=(r.textContent||``).split(`‎`).map((e,i)=>`
          ${r.isBulletTextMode?`<tspan x="${t+r.diffX-r.fontSize}" y="${n+r.diffY+r.fontSize*i}" id="${r.id}" font-size="${r.fontSize/2}">⬤</tspan>`:``}
          <tspan id="${r.id}" x="${t+r.diffX}" y="${n+r.diffY+r.fontSize*i}">
            ${e}
          </tspan>
        `).join(``);e.content+=`
          <g id="${r.id}">
            <text
              style="user-select:none; height:100px;"
              id="${r.id}"
              x="${t+r.diffX}"
              y="${n+r.diffY}"
              text-anchor="${r.textAlign}"
              font-size="${r.fontSize}"
              fill="${r.color}"
              font-weight="${r.isBold?`bold`:`normal`}"
              font-style="${r.isItalic?`italic`:`normal`}"
              text-decoration="${r.isUnderline?`underline`:`none`}">
              ${i}
            </text>
          </g>
        `;break}default:break}})}function Tn(e){e.relatedTarget&&X.value&&X.value.contains(e.relatedTarget)||(Nt.value=!0,C.value=void 0)}function En(){if(Dt.value=!0,!b.value&&!A.value||!Dt.value)return;Ot.value=!0,x.value.start={x:F.value.x,y:F.value.y};let e=`${A.value?`group`:b.value}_${fe()}`;switch(!0){case b.value===`arrow`:L.value.push({id:e,x:F.value.x,y:F.value.y,endX:F.value.x,endY:F.value.y,type:b.value,color:Z(Lt.value),strokeWidth:Z(Math.abs(Tt.value)),isDash:Z(Et.value)}),P.value=L.value.at(-1);break;case b.value===`circle`:L.value.push({alpha:R.value.circle.filled?Zt.value:``,id:e,color:Z(Lt.value),isFilled:Z(R.value.circle.filled),circleRadius:Z(R.value.circle.radius),circleStrokeWidth:Z(R.value.circle.strokeWidth),type:b.value,x:F.value.x,y:F.value.y,strokeWidth:Z(Math.abs(Tt.value)),isDash:Z(Et.value)}),P.value=L.value.at(-1);break;case b.value===`line`:L.value.push({alpha:Z(Zt.value),id:e,x:F.value.x,y:F.value.y,type:b.value,color:Z(Lt.value),strokeWidth:Z(Math.abs(Tt.value)),isDash:Z(Et.value),path:`${F.value.x} ${F.value.y}`}),P.value=L.value.at(-1);break;case b.value===`rect`:L.value.push({alpha:R.value.rect.filled?Zt.value:``,id:e,color:Z(Lt.value),isFilled:Z(R.value.rect.filled),rectStrokeWidth:Z(R.value.rect.strokeWidth),rectHeight:Z(R.value.rect.height),rectWidth:Z(R.value.rect.width),type:b.value,x:F.value.x,y:F.value.y,strokeWidth:Z(Math.abs(Tt.value)),isDash:Z(Et.value)}),P.value=L.value.at(-1);break;case b.value===`group`:L.value.push({alpha:1,id:`group_${fe()}`,x:F.value.x,y:F.value.y,isFilled:!1,rectHeight:Z(R.value.rect.height),rectWidth:Z(R.value.rect.width),rectStrokeWidth:1,type:`group`,color:`grey`,strokeWidth:1,isDash:!0,content:``});break;default:break}K.value||(K.value=requestAnimationFrame(sn))}function Dn(e){if(E.value){At.value=!1;return}if(e.preventDefault(),e.stopPropagation(),At.value=!0,e.pointerId!=null){try{X.value?.setPointerCapture?.(e.pointerId)}catch{}Yt.value=e.pointerId}else Yt.value=null;if((D.value||O.value||k.value||A.value)&&G.value?.begin?.(),D.value){En();return}if(O.value){let t=ln(e)||C.value||P.value?.id;t&&(cn(t),S.value={id:t}),fn(e)}}function On(e){if(!e||!e.id||e.type===`line`||!V.value&&(fn({target:{id:e.id}}),!V.value))return;let{dx:t,dy:n,endDx:r,endDy:i}=V.value,a=F.value.x,o=F.value.y;switch(P.value=e,e.type){case`arrow`:e.x=a-t,e.y=o-n,e.endX=a-(r??t),e.endY=o-(i??n);break;case`circle`:e.x=a-t,e.y=o-n;break;case`rect`:e.x=a-t,e.y=o-n;break;case`text`:e.x=a-t,e.y=o-n;break;case`group`:e.x=a-t,e.y=o-n,wn(e);break;default:break}}function kn(){let e=S.value?.id||C.value;if(!e)return;let t=L.value.find(t=>t.id===e);t&&On(t)}function An(){Ot.value=!1;let e=S.value.id;if(!e)return;Dt.value=!0;let t=L.value.find(t=>t.id===e);b.value=t.type,L.value=L.value.filter(t=>t.id!==e),L.value.push(t),on(!0)}function jn(e){E.value||(e.preventDefault(),e.stopPropagation(),e.target.localName!==`svg`&&(S.value=e.target),O.value&&At.value?kn():k.value&&At.value&&An())}function Mn(e){let t=e.target.id;switch(!0){case E.value:G.value?.begin(),L.value=[...L.value].filter(e=>e.id!==t),P.value=void 0,G.value?.end();return;default:P.value=L.value.find(e=>e.id===t);break}}let Nn=c(null);function Pn(e,t){for(t(e),e=e.firstChild;e;)Pn(e,t),e=e.nextSibling}function Fn(){jt.value=!0,E.value=!1,O.value=!1,k.value=!1,M.value=!1,N.value=!1,A.value=!1,b.value=void 0,z.value=!1,e(async()=>{let e=Nn.value;if(e){Pn(e,e=>{e&&e.nodeType===1&&(e.setAttribute(`font-family`,`Helvetica`),e.style.fontFamily=`Helvetica`)});try{let t;try{t=(await ce(async()=>{let{default:e}=await import(`./__vite-optional-peer-dep_jspdf_vue-data-ui-t5dhqR-O.js`);return{default:e}},[],import.meta.url)).default}catch{throw Error(`jspdf is not installed. Run npm install jspdf`)}let n=await _e({container:e,scale:2}),r=new Image;r.src=n,r.onload=()=>{let e={width:595.28,height:841.89},i=r.width,a=r.height,o=i/e.width*e.height,s=e.width,c=s/i*a,l=new t(``,`pt`,`a4`),u=0,d=a;if(d<o)l.addImage(n,`PNG`,0,0,s,c,``,`FAST`);else for(;d>0;)l.addImage(n,`PNG`,0,u,s,c,``,`FAST`),d-=o,u-=e.height,d>0&&l.addPage();l.save(`${new Date().toLocaleDateString()}_annotations.pdf`)}}catch(e){console.error(`Error generating image:`,e)}finally{jt.value=!1,Pn(e,e=>{e&&e.nodeType===1&&(e.setAttribute(`font-family`,q.value.style.fontFamily),e.style.fontFamily=q.value.style.fontFamily)})}}})}function In(e){if(!E.value&&e&&(e.preventDefault(),e.stopPropagation()),Dt.value=!1,At.value=!1,V.value=null,Yt.value!=null){try{X.value?.releasePointerCapture?.(Yt.value)}catch{}Yt.value=null}K.value&&(K.value=(cancelAnimationFrame(K.value),null)),A.value&&Cn(),G.value?.end()}function Ln(){!P.value||!P.value.id.includes(`rect`)||(P.value.isFilled=!P.value.isFilled)}function Rn(){!P.value||!P.value.id.includes(`circle`)||(P.value.isFilled=!P.value.isFilled)}function zn(){!P.value||P.value.type===`text`||(P.value.isDash=Z(Et.value))}function Bn(){!P.value||[`arrow`,`text`].includes(P.value.id)||(P.value.alpha=Z(Zt.value))}function Vn(){!P.value||![`arrow`,`circle`,`rect`,`line`].includes(P.value.type)||(P.value.strokeWidth=Z(Math.abs(Tt.value)))}function Hn(){!P.value||P.value.type!==`text`||(P.value.isBold=Z(w.value),P.value.isItalic=Z(kt.value),P.value.isUnderline=Z(Mt.value),P.value.fontSize=Z(Ht.value),P.value.isBulletTextMode=Z(T.value))}function Un(e){if(e.preventDefault(),!X.value)return;let t=X.value.getBoundingClientRect(),n,r;e.touches&&e.touches.length>0?(n=e.touches[0].clientX,r=e.touches[0].clientY):(n=e.clientX,r=e.clientY),F.value.x=(n-t.left)/t.width*It.value,F.value.y=(r-t.top)/t.height*Ft.value}function Wn(e){if(z.value=!1,gn(),e===b.value){b.value=void 0,D.value=!1;return}D.value=!0,E.value=!1,O.value=!1,k.value=!1,M.value=!1,b.value=e}function Gn(){j.value=!j.value,j.value||(O.value=!1,k.value=!1,M.value=!1,N.value=!1,b.value=void 0,z.value=!1,E.value=!1,N.value=!1),xe(`toggleOpenState`,{isOpen:j.value})}function Kn(){xe(`saveAnnotations`,{shapes:L.value,lastSelectedShape:P.value})}let qn=null;return r(()=>{if(Nn.value){let e=!1;Pn(Nn.value,t=>{if(!e&&[`DIV`,`svg`,`section`,`canvas`].includes(t.tagName)){zt.value=t,e=!0;return}})}Kt.value=(()=>{if(typeof navigator>`u`)return!1;let e=navigator.userAgentData?.platform??``;if(e)return/mac|ios/i.test(e);let t=navigator.userAgent??``;return/(Mac|iPhone|iPad|iPod)/i.test(t)})();let e=zt?.value.getBoundingClientRect();if(Rt.value=e.height/e.width,It.value=1e3,Ft.value=Rt.value*1e3,Bt.value=e.width,Vt.value=e.height,new ResizeObserver(e=>{e.forEach(e=>{Bt.value=e.contentRect.width,Vt.value=e.contentRect.height,Rt.value=e.contentRect.height/e.contentRect.width,Ft.value=Rt.value*1e3})}).observe(zt.value),qt.value=e=>Sn(e),window.addEventListener(`keydown`,qt.value),G.value=un(),G.value.size){let e=G.value.size();Jt.value.undo=e.undo,Jt.value.redo=e.redo}qn=be({isMacLike:Kt,isSummaryOpen:j,isWriting:N,isDeleteMode:E,isMoveMode:O,isResizeMode:k,isSelectMode:A,isDrawMode:D,isTextMode:M,activeShape:b,showCaret:z,lastSelectedShape:P,shapes:L,history:G,setShapeTo:Wn,undoLastShape:yn,redoLastShape:bn})}),l(()=>{$(),K.value&&cancelAnimationFrame(K.value),qt.value&&window.removeEventListener(`keydown`,qt.value),qn&&qn(),window.removeEventListener(`keydown`,Sn)}),se(L,e=>{e.length===0&&(P.value=void 0)}),se(M,e=>{z.value=e}),(e,r)=>(d(),g(`div`,Ce,[_(`div`,we,[i(ye,{config:{maxHeight:1e3,useCursorPointer:J.value,head:{backgroundColor:q.value.style.backgroundColor,color:q.value.style.color,iconColor:q.value.style.color,iconSize:20,icon:j.value?`close`:`annotator`,padding:`6px`},body:{backgroundColor:q.value.style.backgroundColor,color:q.value.style.color}},onToggle:Gn},{title:m(({color:e})=>[_(`div`,{style:f({color:e})},u(q.value.translations.title),5)]),content:m(({backgroundColor:e})=>[_(`div`,{class:`tool-selection`,style:f({backgroundColor:e})},[_(`button`,{disabled:L.value.length===0,style:f({background:O.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:O.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:O.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:h({"button-tool":!0,"button-tool--selected":O.value,tooltip:!0}),onClick:r[0]||(r[0]=e=>{gn(),O.value=!O.value,b.value=void 0,E.value=!1,D.value=!1,k.value=!1,A.value=!1,M.value=!1,N.value=!1,z.value=!1}),onMouseenter:r[1]||(r[1]=e=>q.value.style.showTooltips&&Q(`move`,e,`top`)),onMouseleave:$,onFocus:r[2]||(r[2]=e=>q.value.style.showTooltips&&Q(`move`,e,`top`)),onBlur:$},[i(v,{name:`move`,stroke:O.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`move`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipMove)+` `,1),r[91]||(r[91]=_(`kbd`,null,`M`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,Te),_(`button`,{disabled:L.value.length===0||b.value===`line`,style:f({background:k.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:k.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:k.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:h({"button-tool":!0,"button-tool--selected":k.value,tooltip:!0}),onClick:r[3]||(r[3]=e=>{gn(),k.value=!k.value,O.value=!1,E.value=!1,D.value=!1,A.value=!1,M.value=!1,N.value=!1,b.value=void 0,z.value=!1}),onMouseenter:r[4]||(r[4]=e=>q.value.style.showTooltips&&Q(`resize`,e,`top`)),onMouseleave:$,onFocus:r[5]||(r[5]=e=>q.value.style.showTooltips&&Q(`resize`,e,`top`)),onBlur:$},[i(v,{name:`resize`,stroke:k.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`resize`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipResize)+` `,1),r[92]||(r[92]=_(`kbd`,null,`R`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,Ee),_(`button`,{disabled:L.value.length===0,style:f({background:E.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:E.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:E.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:h({"button-tool":!0,"button-tool--selected":E.value,tooltip:!0}),onClick:r[6]||(r[6]=e=>{gn(),E.value=!E.value,O.value=!1,k.value=!1,A.value=!1,M.value=!1,N.value=!1,b.value=void 0,z.value=!1}),onMouseenter:r[7]||(r[7]=e=>q.value.style.showTooltips&&Q(`delete`,e,`top`)),onMouseleave:$,onFocus:r[8]||(r[8]=e=>q.value.style.showTooltips&&Q(`delete`,e,`top`)),onBlur:$},[i(v,{name:`trash`,stroke:E.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`delete`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipDelete)+` `,1),r[93]||(r[93]=_(`kbd`,null,`D`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,De),_(`button`,{disabled:!Xt.value,style:f({background:A.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:A.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:A.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:h({"button-tool":!0,"button-tool--selected":A.value,tooltip:!0}),onClick:r[9]||(r[9]=e=>{gn(),Wn(`group`),A.value=!A.value,E.value=!1,O.value=!1,k.value=!1,M.value=!1,N.value=!1,b.value=`group`,z.value=!1}),onMouseenter:r[10]||(r[10]=e=>q.value.style.showTooltips&&Q(`selectAndGroup`,e,`top`)),onMouseleave:$,onFocus:r[11]||(r[11]=e=>q.value.style.showTooltips&&Q(`selectAndGroup`,e,`top`)),onBlur:$},[i(v,{name:`selectAndGroup`,stroke:A.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`selectAndGroup`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipGroup)+` `,1),r[94]||(r[94]=_(`kbd`,null,`G`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,Oe),_(`button`,{disabled:L.value.length===0,style:f({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:h({"button-tool":!0,tooltip:!0}),onClick:r[12]||(r[12]=e=>{k.value=!1,O.value=!0,E.value=!1,D.value=!1,A.value=!1,M.value=!1,N.value=!1,z.value=!1,pn(`front`)}),onMouseenter:r[13]||(r[13]=e=>q.value.style.showTooltips&&Q(`bringToFront`,e,`top`)),onMouseleave:$,onFocus:r[14]||(r[14]=e=>q.value.style.showTooltips&&Q(`bringToFront`,e,`top`)),onBlur:$},[i(v,{name:`bringToFront`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`bringToFront`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipBringToFront),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,ke),_(`button`,{disabled:L.value.length===0,style:f({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:h({"button-tool":!0,tooltip:!0}),onClick:r[15]||(r[15]=e=>{k.value=!1,O.value=!0,E.value=!1,D.value=!1,A.value=!1,M.value=!1,N.value=!1,z.value=!1,pn(`back`)}),onMouseenter:r[16]||(r[16]=e=>q.value.style.showTooltips&&Q(`bringToBack`,e,`top`)),onMouseleave:$,onFocus:r[17]||(r[17]=e=>q.value.style.showTooltips&&Q(`bringToBack`,e,`top`)),onBlur:$},[i(v,{name:`bringToBack`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`bringToBack`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipBringToBack),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,Ae),_(`button`,{disabled:L.value.length===0||b.value===`line`,style:f({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:h({"button-tool":!0,tooltip:!0}),onClick:r[18]||(r[18]=e=>{gn(),k.value=!1,O.value=!0,E.value=!1,D.value=!1,A.value=!1,M.value=!1,N.value=!1,z.value=!1,mn()}),onMouseenter:r[19]||(r[19]=e=>q.value.style.showTooltips&&Q(`duplicate`,e,`top`)),onMouseleave:$,onFocus:r[20]||(r[20]=e=>q.value.style.showTooltips&&Q(`duplicate`,e,`top`)),onBlur:$},[i(v,{name:`copy`,stroke:q.value.style.buttons.controls.color,size:18},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`duplicate`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipDuplicate),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,je),_(`button`,{disabled:Jt.value.undo===0,style:f({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:h({"button-tool":!0,"button-tool--one-shot":!0,tooltip:!0}),onClick:r[21]||(r[21]=e=>{k.value=!1,O.value=!1,E.value=!1,D.value=!1,A.value=!1,M.value=!1,N.value=!1,b.value=void 0,z.value=!1,yn()}),onMouseenter:r[22]||(r[22]=e=>q.value.style.showTooltips&&Q(`undoLast`,e,`top`)),onMouseleave:$,onFocus:r[23]||(r[23]=e=>q.value.style.showTooltips&&Q(`undoLast`,e,`top`)),onBlur:$},[i(v,{name:`refresh`,stroke:q.value.style.buttons.controls.color,size:20},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`undoLast`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipUndo)+` `,1),_(`kbd`,null,u(Kt.value?`⌘`:`Ctrl`),1),r[95]||(r[95]=_(`kbd`,null,`Z`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,Me),_(`button`,{disabled:Jt.value.redo===0,style:f({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:h({"button-tool":!0,"button-tool--one-shot":!0,tooltip:!0}),onClick:r[24]||(r[24]=e=>{k.value=!1,O.value=!1,E.value=!1,D.value=!1,A.value=!1,M.value=!1,N.value=!1,b.value=void 0,z.value=!1,bn()}),onMouseenter:r[25]||(r[25]=e=>q.value.style.showTooltips&&Q(`redoLast`,e,`top`)),onMouseleave:$,onFocus:r[26]||(r[26]=e=>q.value.style.showTooltips&&Q(`redoLast`,e,`top`)),onBlur:$},[i(v,{name:`refresh`,stroke:q.value.style.buttons.controls.color,size:20,style:{transform:`rotateX(0deg) rotateY(180deg)`}},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`redoLast`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipRedo)+` `,1),_(`kbd`,null,u(Kt.value?`⌘`:`Ctrl`),1),r[96]||(r[96]=_(`kbd`,null,`Y`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,Ne),q.value.style.showPrint?(d(),g(`button`,{key:0,style:f({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:h({"button-tool":!0,tooltip:!0}),onClick:Fn,onMouseenter:r[27]||(r[27]=e=>q.value.style.showTooltips&&Q(`printPdf`,e,`top`)),onMouseleave:$,onFocus:r[28]||(r[28]=e=>q.value.style.showTooltips&&Q(`printPdf`,e,`top`)),onBlur:$},[i(v,{name:`printer`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`printPdf`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipPdf),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],36)):t(``,!0),q.value.style.showImage?(d(),g(`button`,{key:1,style:f({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:h({"button-tool":!0,tooltip:!0}),onClick:r[29]||(r[29]=(...e)=>a(wt)&&a(wt)(...e)),onMouseenter:r[30]||(r[30]=e=>q.value.style.showTooltips&&Q(`printImage`,e,`top`)),onMouseleave:$,onFocus:r[31]||(r[31]=e=>q.value.style.showTooltips&&Q(`printImage`,e,`top`)),onBlur:$},[i(v,{name:`image`,stroke:q.value.style.buttons.controls.color,size:20},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`printImage`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipImage),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],36)):t(``,!0),q.value.style.showSave?(d(),g(`button`,{key:2,style:f({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:h({"button-tool":!0,tooltip:!0}),onClick:Kn,onMouseenter:r[32]||(r[32]=e=>q.value.style.showTooltips&&Q(`saveAction`,e,`top`)),onMouseleave:$,onFocus:r[33]||(r[33]=e=>q.value.style.showTooltips&&Q(`saveAction`,e,`top`)),onBlur:$},[i(v,{name:`save`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`saveAction`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipSave),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],36)):t(``,!0)],4),_(`div`,Pe,[_(`button`,{class:h({"button-tool":!0,"button-tool--selected":b.value===`circle`,tooltip:!0}),style:f({background:b.value===`circle`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:b.value===`circle`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:b.value===`circle`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:r[34]||(r[34]=e=>{Wn(`circle`),A.value=!1}),onMouseenter:r[35]||(r[35]=e=>q.value.style.showTooltips&&Q(`setCircle`,e,`top`)),onMouseleave:$,onFocus:r[36]||(r[36]=e=>q.value.style.showTooltips&&Q(`setCircle`,e,`top`)),onBlur:$},[(d(),g(`svg`,Fe,[_(`circle`,{cx:6,cy:6,r:`4`,fill:R.value.circle.filled?(b.value,Lt.value+Zt.value):`none`,stroke:`currentColor`},null,8,Ie)])),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setCircle`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeCircle)+` `,1),r[97]||(r[97]=_(`kbd`,null,`C`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),b.value===`circle`?(d(),g(`div`,Le,[_(`label`,Re,[n(u(q.value.translations.filled)+` `,1),re(_(`input`,{type:`checkbox`,"onUpdate:modelValue":r[37]||(r[37]=e=>R.value.circle.filled=e),onChange:Rn,checked:R.value.circle.filled,style:f({all:`revert`,appearance:`auto`,"-webkit-appearance":`auto`,accentColor:q.value.style.color+` !important`})},null,44,ze),[[ae,R.value.circle.filled]])])])):t(``,!0),_(`button`,{class:h({"button-tool":!0,"button-tool--selected":b.value===`rect`,tooltip:!0}),style:f({background:b.value===`rect`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:b.value===`rect`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:b.value===`rect`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:r[38]||(r[38]=e=>{Wn(`rect`),A.value=!1}),onMouseenter:r[39]||(r[39]=e=>q.value.style.showTooltips&&Q(`setRect`,e,`top`)),onMouseleave:$,onFocus:r[40]||(r[40]=e=>q.value.style.showTooltips&&Q(`setRect`,e,`top`)),onBlur:$},[(d(),g(`svg`,Be,[_(`rect`,{x:`3`,y:`3`,style:{rx:`0 !important`,ry:`0 !important`},height:`6`,width:`6`,fill:R.value.rect.filled?(b.value,Lt.value+Zt.value):`none`,stroke:`currentColor`},null,8,Ve)])),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setRect`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeRect)+` `,1),r[98]||(r[98]=_(`kbd`,null,`S`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),b.value===`rect`?(d(),g(`div`,He,[_(`label`,Ue,[n(u(q.value.translations.filled)+` `,1),re(_(`input`,{type:`checkbox`,"onUpdate:modelValue":r[41]||(r[41]=e=>R.value.rect.filled=e),onChange:Ln,checked:R.value.rect.filled,style:f({all:`revert`,appearance:`auto`,"-webkit-appearance":`auto`,accentColor:q.value.style.color+` !important`})},null,44,We),[[ae,R.value.rect.filled]])])])):t(``,!0),_(`button`,{class:h({"button-tool":!0,"button-tool--selected":b.value===`arrow`,tooltip:!0}),style:f({background:b.value===`arrow`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:b.value===`arrow`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:b.value===`arrow`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:r[42]||(r[42]=e=>{Wn(`arrow`),A.value=!1}),onMouseenter:r[43]||(r[43]=e=>q.value.style.showTooltips&&Q(`setArrow`,e,`top`)),onMouseleave:$,onFocus:r[44]||(r[44]=e=>q.value.style.showTooltips&&Q(`setArrow`,e,`top`)),onBlur:$},[(d(),g(`svg`,Ge,[_(`path`,{stroke:R.value.arrow.filled?b.value===`arrow`?`white`:`grey`:`none`,"stroke-width":`2`,d:`M5,19 19,5 14,5 19,10.5 19,5`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},null,8,Ke)])),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setArrow`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeArrow)+` `,1),r[99]||(r[99]=_(`kbd`,null,`A`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),_(`button`,{class:h({"button-tool":!0,"button-tool--selected":b.value===`line`,tooltip:!0}),style:f({background:b.value===`line`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:b.value===`line`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:b.value===`line`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:r[45]||(r[45]=e=>{Wn(`line`),A.value=!1}),onMouseenter:r[46]||(r[46]=e=>q.value.style.showTooltips&&Q(`setFreehand`,e,`top`)),onMouseleave:$,onFocus:r[47]||(r[47]=e=>q.value.style.showTooltips&&Q(`setFreehand`,e,`top`)),onBlur:$},[r[101]||(r[101]=_(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5`})],-1)),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setFreehand`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeFreehand)+` `,1),r[100]||(r[100]=_(`kbd`,null,`L`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),[`arrow`,`circle`,`rect`,`line`].includes(b.value)?(d(),g(`div`,qe,[_(`div`,Je,[_(`label`,Ye,[n(u(q.value.translations.thickness)+` `,1),re(_(`input`,{type:`number`,"onUpdate:modelValue":r[48]||(r[48]=e=>Tt.value=e),onInput:Vn,min:1,style:{padding:`0 4px`,width:`40px`,border:`1px solid #dadada`,"border-radius":`3px`}},null,544),[[oe,Tt.value]])])])])):t(``,!0),[`arrow`,`circle`,`rect`].includes(b.value)?(d(),g(`div`,Xe,[_(`div`,Ze,[_(`label`,Qe,[n(u(q.value.translations.dashedLines)+` `,1),(d(),g(`svg`,$e,[...r[102]||(r[102]=[_(`line`,{x1:`0`,x2:`24`,y1:`12`,y2:`12`,"stroke-width":`2`,stroke:`black`,"stroke-dasharray":`3`},null,-1)])])),re(_(`input`,{name:`dashStyle`,type:`checkbox`,"onUpdate:modelValue":r[49]||(r[49]=e=>Et.value=e),onChange:zn,checked:Et.value,style:f({all:`revert`,appearance:`auto`,"-webkit-appearance":`auto`,accentColor:q.value.style.color+` !important`})},null,44,et),[[ae,Et.value]])])])])):t(``,!0),_(`button`,{class:h({"button-tool":!0,"button-tool--selected":M.value,tooltip:!0}),style:f({background:M.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:M.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:M.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:r[50]||(r[50]=e=>{gn(),M.value=!M.value,E.value=!1,O.value=!1,k.value=!1,A.value=!1,D.value=!1,b.value=void 0}),onMouseenter:r[51]||(r[51]=e=>q.value.style.showTooltips&&Q(`setText`,e,`top`)),onMouseleave:$,onFocus:r[52]||(r[52]=e=>q.value.style.showTooltips&&Q(`setText`,e,`top`)),onBlur:$},[i(v,{name:`text`,stroke:M.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setText`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeText)+` `,1),r[103]||(r[103]=_(`kbd`,null,`T`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),M.value?(d(),g(`div`,tt,[_(`div`,nt,[_(`label`,rt,[n(u(q.value.translations.fontSize)+` `,1),re(_(`input`,{type:`number`,"onUpdate:modelValue":r[53]||(r[53]=e=>Ht.value=e),onInput:Hn,style:{padding:`0 4px`,width:`40px`,border:`1px solid #dadada`,"border-radius":`3px`}},null,544),[[oe,Ht.value]])])])])):t(``,!0),M.value?(d(),g(`div`,it,[_(`button`,{class:h({"button-tool":!0,"button-tool--selected":B.value===`start`,tooltip:!0}),style:f({background:B.value===`start`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:B.value===`start`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:B.value===`start`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:r[54]||(r[54]=e=>{E.value=!1,O.value=!1,k.value=!1,D.value=!1,A.value=!1,b.value=void 0,B.value=`start`,vn(`start`)}),onMouseenter:r[55]||(r[55]=e=>q.value.style.showTooltips&&Q(`setAlignStart`,e,`top`)),onMouseleave:$,onFocus:r[56]||(r[56]=e=>q.value.style.showTooltips&&Q(`setAlignStart`,e,`top`)),onBlur:$},[r[104]||(r[104]=_(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M4 6l16 0`}),_(`path`,{d:`M4 12l10 0`}),_(`path`,{d:`M4 18l14 0`})],-1)),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setAlignStart`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeTextLeft),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),M.value?(d(),g(`div`,at,[_(`button`,{class:h({"button-tool":!0,"button-tool--selected":B.value===`middle`,tooltip:!0}),style:f({background:B.value===`middle`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:B.value===`middle`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:B.value===`middle`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),disabled:T.value,onClick:r[57]||(r[57]=e=>{E.value=!1,O.value=!1,k.value=!1,D.value=!1,A.value=!1,b.value=void 0,B.value=`middle`,vn(`middle`)}),onMouseenter:r[58]||(r[58]=e=>q.value.style.showTooltips&&Q(`setAlignMiddle`,e,`top`)),onMouseleave:$,onFocus:r[59]||(r[59]=e=>q.value.style.showTooltips&&Q(`setAlignMiddle`,e,`top`)),onBlur:$},[r[105]||(r[105]=_(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M4 6l16 0`}),_(`path`,{d:`M8 12l8 0`}),_(`path`,{d:`M6 18l12 0`})],-1)),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setAlignMiddle`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeTextCenter),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,ot)])):t(``,!0),M.value?(d(),g(`div`,st,[_(`button`,{class:h({"button-tool":!0,"button-tool--selected":B.value===`end`,tooltip:!0}),style:f({background:B.value===`end`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:B.value===`end`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:B.value===`end`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),disabled:T.value,onClick:r[60]||(r[60]=e=>{E.value=!1,O.value=!1,k.value=!1,D.value=!1,A.value=!1,b.value=void 0,B.value=`end`,vn(`end`)}),onMouseenter:r[61]||(r[61]=e=>q.value.style.showTooltips&&Q(`setAlignEnd`,e,`top`)),onMouseleave:$,onFocus:r[62]||(r[62]=e=>q.value.style.showTooltips&&Q(`setAlignEnd`,e,`top`)),onBlur:$},[r[106]||(r[106]=_(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M4 6l16 0`}),_(`path`,{d:`M10 12l10 0`}),_(`path`,{d:`M6 18l14 0`})],-1)),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setAlignEnd`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeTextRight),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,ct)])):t(``,!0),M.value?(d(),g(`div`,lt,[_(`button`,{class:h({"button-tool":!0,"button-tool--selected":T.value,tooltip:!0}),style:f({background:T.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:T.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:T.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:r[63]||(r[63]=e=>{E.value=!1,O.value=!1,k.value=!1,D.value=!1,A.value=!1,b.value=void 0,T.value=!T.value,B.value=`start`,vn(`start`),Hn()}),onMouseenter:r[64]||(r[64]=e=>q.value.style.showTooltips&&Q(`setBulletMode`,e,`top`)),onMouseleave:$,onFocus:r[65]||(r[65]=e=>q.value.style.showTooltips&&Q(`setBulletMode`,e,`top`)),onBlur:$},[r[107]||(r[107]=_(`svg`,{width:`100%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M9 6l11 0`}),_(`path`,{d:`M9 12l11 0`}),_(`path`,{d:`M9 18l11 0`}),_(`path`,{d:`M5 6l0 .01`}),_(`path`,{d:`M5 12l0 .01`}),_(`path`,{d:`M5 18l0 .01`})],-1)),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setBulletMode`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeTextBullet),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),M.value?(d(),g(`div`,ut,[_(`button`,{class:h({"button-tool":!0,"button-tool--selected":w.value,tooltip:!0}),style:f({background:w.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:w.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:w.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:r[66]||(r[66]=e=>{E.value=!1,O.value=!1,k.value=!1,D.value=!1,A.value=!1,b.value=void 0,w.value=!w.value,Hn()}),onMouseenter:r[67]||(r[67]=e=>q.value.style.showTooltips&&Q(`setBold`,e,`top`)),onMouseleave:$,onFocus:r[68]||(r[68]=e=>q.value.style.showTooltips&&Q(`setBold`,e,`top`)),onBlur:$},[r[108]||(r[108]=_(`svg`,{width:`100%`,viewBox:`0 0 24 24`,"stroke-width":`3`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M7 5h6a3.5 3.5 0 0 1 0 7h-6z`}),_(`path`,{d:`M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7`})],-1)),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setBold`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeTextBold),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),M.value?(d(),g(`div`,dt,[_(`button`,{class:h({"button-tool":!0,"button-tool--selected":kt.value,tooltip:!0}),style:f({background:kt.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:kt.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:kt.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:r[69]||(r[69]=e=>{E.value=!1,O.value=!1,k.value=!1,D.value=!1,A.value=!1,b.value=void 0,kt.value=!kt.value,Hn()}),onMouseenter:r[70]||(r[70]=e=>q.value.style.showTooltips&&Q(`setItalic`,e,`top`)),onMouseleave:$,onFocus:r[71]||(r[71]=e=>q.value.style.showTooltips&&Q(`setItalic`,e,`top`)),onBlur:$},[r[109]||(r[109]=_(`svg`,{width:`100%`,height:`44`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M11 5l6 0`}),_(`path`,{d:`M7 19l6 0`}),_(`path`,{d:`M14 5l-4 14`})],-1)),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setItalic`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeTextItalic),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),M.value?(d(),g(`div`,ft,[_(`button`,{class:h({"button-tool":!0,"button-tool--selected":Mt.value,tooltip:!0}),style:f({background:Mt.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:Mt.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:Mt.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:r[72]||(r[72]=e=>{E.value=!1,O.value=!1,k.value=!1,D.value=!1,A.value=!1,b.value=void 0,Mt.value=!Mt.value,Hn()}),onMouseenter:r[73]||(r[73]=e=>q.value.style.showTooltips&&Q(`setUnderline`,e,`top`)),onMouseleave:$,onFocus:r[74]||(r[74]=e=>q.value.style.showTooltips&&Q(`setUnderline`,e,`top`)),onBlur:$},[r[110]||(r[110]=_(`svg`,{width:`100%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M7 5v5a5 5 0 0 0 10 0v-5`}),_(`path`,{d:`M5 19h14`})],-1)),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setUnderline`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeTextUnderline),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),_(`div`,pt,[_(`button`,{class:h({"button-tool":!0,tooltip:!0}),style:{borderRadius:`6px`},onMouseenter:r[76]||(r[76]=e=>q.value.style.showTooltips&&Q(`setColor`,e,`top`)),onMouseleave:$,onFocus:r[77]||(r[77]=e=>q.value.style.showTooltips&&Q(`setColor`,e,`top`)),onBlur:$},[i(he,{value:Lt.value,"onUpdate:value":r[75]||(r[75]=e=>Lt.value=e),backgroundColor:q.value.style.backgroundColor,buttonBorderColor:q.value.style.color,isCursorPointer:J.value,teleported:``},null,8,[`value`,`backgroundColor`,`buttonBorderColor`,`isCursorPointer`])],32),q.value.style.showTooltips?(d(),s(y,{key:0,show:H.value&&U.value===`setColor`,x:W.value.x,y:W.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(u(q.value.translations.tooltipShapeColor),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)]),_(`div`,mt,[_(`label`,ht,[n(u(q.value.translations.colorAlpha)+`: `+u(Ut.value>98?100:Ut.value)+` % `,1),re(_(`input`,{name:`colorTransparency`,type:`range`,"onUpdate:modelValue":r[78]||(r[78]=e=>Ut.value=e),onInput:Bn,min:0,max:100,style:f({width:`100%`,accentColor:q.value.style.color+` !important`})},null,36),[[oe,Ut.value]])])])])]),_:1},8,[`config`])]),_(`div`,{class:`annotator annotator__wrapper`,ref_key:`drawSvgContainer`,ref:Nn,style:{position:`relative`},id:Se.value,"data-annotator-content":``},[_(`div`,{class:`annotator__content-layer`,style:f(`${j.value?`pointer-events: none;`:``}`)},[o(e.$slots,`default`,{},void 0,!0)],4),j.value||q.value.alwaysVisible?(d(),g(`svg`,{id:`annotatorSvg`,key:Pt.value,ref_key:`mainSvg`,ref:X,class:h({annotator__overlay:!0,draw:!0,"draw--free":b.value===`line`}),viewBox:`0 0 ${It.value} ${Ft.value}`,width:Bt.value,height:Vt.value,onPointerdown:r[83]||(r[83]=e=>Dn(e)),onPointerup:r[84]||(r[84]=e=>In(e)),onTouchend:r[85]||(r[85]=e=>In(e)),onTouchstart:r[86]||(r[86]=e=>{Un(e),_n(e)}),onPointermove:r[87]||(r[87]=e=>{Un(e),jn(e)}),onPointerout:r[88]||(r[88]=e=>Tn(e)),onPointerover:r[89]||(r[89]=e=>hn(e)),onClick:r[90]||(r[90]=e=>_n(e)),style:f({position:`absolute`,top:0,left:0,cursor:Qt.value,fontFamily:`Helvetica`,zIndex:1e8,pointerEvents:j.value?`all`:`none`})},[_(`rect`,{class:`annotator__glass`,x:`0`,y:`0`,width:It.value,height:Ft.value,fill:`transparent`,"pointer-events":j.value?`all`:`none`,style:{cursor:`inherit`},onPointerdown:r[79]||(r[79]=ie(e=>Dn(e),[`stop`,`prevent`])),onPointermove:r[80]||(r[80]=ie(e=>{Un(e),jn(e)},[`stop`,`prevent`])),onPointerup:ie(In,[`stop`,`prevent`]),onClick:r[81]||(r[81]=ie(()=>{},[`stop`,`prevent`]))},null,40,vt),(d(!0),g(ne,null,ee(an.value,e=>(d(),g(`g`,{key:e.id,innerHTML:e.html,onClick:r[82]||(r[82]=e=>{Mn(e),O.value=!1})},null,8,yt))),128))],46,_t)):t(``,!0),jt.value||a(Ct)?(d(),g(`svg`,{key:1,style:{position:`absolute`,top:`0`,left:`0`},height:Vt.value,viewBox:`0 0 ${It.value} ${Ft.value}`,width:Bt.value,"data-dom-to-png-ignore":``},[_(`circle`,{class:`animated-circle-print`,cx:It.value/2,cy:Ft.value/2,r:`50`,stroke:`#6376DD`,"stroke-width":`10`,fill:`none`},null,8,xt)],8,bt)):t(``,!0)],8,gt)]))}},[[`__scopeId`,`data-v-3a11f6f4`]]);export{Se as n};