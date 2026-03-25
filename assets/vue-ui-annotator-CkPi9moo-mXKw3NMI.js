
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{B as e,C as t,D as n,Jt as r,K as i,Kt as a,Nt as o,O as s,Q as c,S as l,U as u,Y as d,Yt as f,Z as ee,_ as te,b as p,h as ne,mt as re,p as ie,pt as m,s as ae,u as oe,ut as se,w as h,wt as g,x as _}from"./vue.runtime.esm-bundler-CGoWWSM3.js";import{h as ce}from"./index-iSM9h_E1.js";import{F as le,Ot as ue,Pt as de,ut as fe}from"./lib-DBptbyyI-B5_kQVxR.js";import{t as pe}from"./_plugin-vue_export-helper-CHgC5LLL-CPZIlIKV.js";import{t as v}from"./BaseIcon-Cb3zzG6s-BPwc6Mzf.js";import{t as me}from"./ColorPicker-B0mV4xzu-Cze7-zY8.js";import{t as he}from"./dom-to-png-CtxhhdWb-CSMo9WHt.js";import{t as ge}from"./useConfig-DO94Aj5s-BvdaePb4.js";import{t as _e}from"./usePrinter-CEpYU3r5-BlPcUEAk.js";import{t as ve}from"./vue-ui-accordion-nvggWcGN-BXqm0zTF.js";function ye(e){let t=t=>e.isMacLike.value?t.metaKey:t.ctrlKey,n=e=>{let t=e;if(!t)return!1;let n=(t.tagName||``).toLowerCase();return t.isContentEditable||n===`input`||n===`textarea`||n===`select`},r=t=>!!(!e.isSummaryOpen.value||n(t.target)||e.isWriting.value),i=()=>{e.isDeleteMode.value=!1,e.isMoveMode.value=!1,e.isResizeMode.value=!1,e.isSelectMode.value=!1,e.isDrawMode.value=!1,e.isTextMode.value=!1,e.activeShape.value=void 0,e.showCaret.value=!1},a=t=>{switch(i(),t){case`m`:e.isMoveMode.value=!0;break;case`r`:e.isResizeMode.value=!0;break;case`d`:e.isDeleteMode.value=!0;break;case`g`:e.isSelectMode.value=!0,e.setShapeTo(`group`),e.activeShape.value=`group`;break;case`t`:e.isTextMode.value=!0,e.isWriting.value=!1,e.showCaret.value=!1;break}},o=t=>{switch(t){case`c`:e.setShapeTo(`circle`);break;case`s`:e.setShapeTo(`rect`);break;case`a`:e.setShapeTo(`arrow`);break;case`l`:e.setShapeTo(`line`);break}},s=(t,n)=>{let r=e.lastSelectedShape.value;if(!r)return;let i=(e,t)=>{typeof r[e]==`number`&&(r[e]+=t)};switch(r.type){case`rect`:case`circle`:case`text`:i(`x`,t),i(`y`,n);break;case`arrow`:i(`x`,t),i(`y`,n),i(`endX`,t),i(`endY`,n);break}},c=()=>{let t=e.lastSelectedShape.value;t&&(e.shapes.value=e.shapes.value.filter(e=>e.id!==t.id),e.lastSelectedShape.value=void 0)},l=!1,u=null,d=()=>{l||(l=!0,e.history?.value?.begin?.(`nudge`))},f=()=>{l&&(clearTimeout(u),u=setTimeout(()=>{l=!1,e.history?.value?.end?.()},160))},ee=()=>{clearTimeout(u),l&&e.history?.value?.end?.(),l=!1},te=n=>{if(t(n)&&!n.shiftKey&&n.key.toLowerCase()===`z`){if(r(n))return;n.preventDefault(),e.undoLastShape?.();return}if(t(n)&&n.shiftKey&&n.key.toLowerCase()===`z`||t(n)&&n.key.toLowerCase()===`y`){if(r(n))return;n.preventDefault(),typeof e.redoLastShape==`function`?e.redoLastShape():e.history?.value?.redo?.();return}if(r(n))return;let l=n.key.toLowerCase();if(l===`escape`){n.preventDefault(),i();return}if(l===`delete`||l===`backspace`){n.preventDefault(),c();return}if([`m`,`r`,`d`,`g`,`t`].includes(l)){n.preventDefault(),a(l);return}if([`c`,`a`,`l`,`s`].includes(l)){n.preventDefault(),o(l);return}if(n.key===`ArrowUp`||n.key===`ArrowDown`||n.key===`ArrowLeft`||n.key===`ArrowRight`){n.preventDefault(),d();let e=n.shiftKey?10:1;n.key===`ArrowUp`&&s(0,-e),n.key===`ArrowDown`&&s(0,e),n.key===`ArrowLeft`&&s(-e,0),n.key===`ArrowRight`&&s(e,0),f()}},p=e=>{e.key.startsWith(`Arrow`)&&f()};return window.addEventListener(`keydown`,te),window.addEventListener(`keyup`,p),function(){window.removeEventListener(`keydown`,te),window.removeEventListener(`keyup`,p),ee()}}var be={class:`teleport-tooltip__inner`},y=pe({__name:`TeleportedTooltip`,props:{show:{type:Boolean,default:!1},x:{type:Number,required:!0},y:{type:Number,required:!0},placement:{type:String,default:`top`},styleObject:{type:Object,default(){return{}}},delay:{type:Number,default:0},delayIn:{type:Number,default:300},delayOut:{type:Number,default:0}},setup(e){let n=e,o=p(()=>n.delayIn??n.delay),s=p(()=>n.delayOut??n.delay),f=g(!1),ee=null,ne=null;function re(){ee&&(clearTimeout(ee),ee=null),ne&&(clearTimeout(ne),ne=null)}function ie(){re();let e=Math.max(0,o.value||0);e===0?f.value=!0:ee=setTimeout(()=>{f.value=!0,ee=null},e)}function m(){re();let e=Math.max(0,s.value||0);e===0?f.value=!1:ne=setTimeout(()=>{f.value=!1,ne=null},e)}se(()=>n.show,e=>{e?ie():m()},{immediate:!0}),i(()=>{n.show&&ie()}),u(()=>{re()});let ae=p(()=>({position:`fixed`,zIndex:2147483647,top:`${n.y}px`,left:`${n.x}px`,transform:n.placement===`bottom`?`translate(-50%, 8px)`:`translate(-50%, -100%)`,pointerEvents:`none`,...n.styleObject}));return(n,i)=>(d(),l(te,{to:`body`},[f.value?(d(),h(`div`,{key:0,class:a([`teleport-tooltip`,e.placement]),style:r(ae.value),role:`tooltip`,"aria-hidden":`false`},[_(`div`,be,[c(n.$slots,`default`,{},void 0,!0)])],6)):t(``,!0)]))}},[[`__scopeId`,`data-v-430dd7ad`]]),xe={class:`vue-data-ui-component vue-ui-annotator`},Se={"data-dom-to-png-ignore":``},Ce=[`disabled`],we=[`disabled`],Te=[`disabled`],Ee=[`disabled`],De=[`disabled`],Oe=[`disabled`],ke=[`disabled`],Ae=[`disabled`],je=[`disabled`],Me={class:`tool-selection`,style:{"margin-top":`6px`}},Ne={viewBox:`0 0 12 12`,style:{width:`100%`}},Pe=[`fill`],Fe={key:0},Ie={class:`tool-input`},Le=[`checked`],Re={viewBox:`0 0 12 12`,style:{width:`100%`}},ze=[`fill`],Be={key:1},Ve={class:`tool-input`},He=[`checked`],Ue={viewBox:`0 0 24 24`,style:{width:`100%`}},We=[`stroke`],Ge={key:2},Ke={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`}},qe={class:`tool-input`},Je={key:3},Ye={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`}},Xe={class:`tool-input`},Ze={viewBox:`0 0 24 24`,height:`24`,width:`24`,style:{"margin-bottom":`-5px`,"margin-top":`-10px`}},Qe=[`checked`],$e={key:4},et={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`}},tt={class:`tool-input`},nt={key:5},rt={key:6},it=[`disabled`],at={key:7},ot=[`disabled`],st={key:8},ct={key:9},lt={key:10},ut={key:11},dt={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`},class:`tooltip`},ft={style:{display:`flex`,"flex-direction":`column`,"align-items":`start`,"justify-content":`center`}},pt={class:`tool-input`,style:{"font-variant-numeric":`tabular-nums`}},mt=[`id`],ht=[`viewBox`,`width`,`height`],gt=[`width`,`height`,`pointer-events`],_t=[`innerHTML`],vt=[`height`,`viewBox`,`width`],yt=[`cx`,`cy`],bt=`annotations`,xt=pe({__name:`vue-ui-annotator`,props:{config:{type:Object,default(){return{}}},dataset:{type:Object,default(){return{shapes:[],lastSelectedShape:void 0}}}},emits:[`toggleOpenState`,`saveAnnotations`],setup(te,{emit:pe}){let be=te,xt=pe,St=g(de()),{isImaging:Ct,generateImage:wt}=_e({elementId:St.value,fileName:bt}),b=g(void 0),Tt=g(1),x=g({start:{x:0,y:0},end:{x:0,y:0}}),S=g(void 0),C=g(void 0),Et=g(!1),w=g(!1),T=g(!1),E=g(!1),Dt=g(!1),Ot=g(!0),D=g(!1),O=g(!1),kt=g(!1),k=g(!1),At=g(!1),A=g(!1),j=g(!1),M=g(!1),N=g(!1),P=g(!1),F=g(!1),I=g(be.dataset?.lastSelectedShape??void 0),L=g({x:0,y:0}),jt=g(!0),R=g([]),z=g(be.dataset?.shapes||[]);g([]);let Mt=g(Math.round(Math.random())*1e5),Nt=g(1e3),Pt=g(1e3),B=g({arrow:{color:`grey`,filled:!0},circle:{color:`grey`,filled:!1,radius:3,strokeWidth:2},rect:{color:`grey`,filled:!1,strokeWidth:2,height:12,width:12}}),Ft=g(`#1A1A1A`),V=g(!1),It=g(1),Lt=g(void 0),Rt=g(1),zt=g(1),H=g(`start`),Bt=g(20),Vt=g(100),Ht=fe,Ut=g(null),U=g(!1),W=g(null),G=g({x:0,y:0}),Wt=g(null),K=g([]),Gt=g(!1),Kt=g(null),qt=g({undo:0,redo:0}),Jt=g(null);g(null),g(null);let Yt=g(null),q=p(()=>{let e=ge().vue_ui_annotator;return Object.keys(be.config||{}).length?ue(le({defaultConfig:e,userConfig:be.config})):e}),J=p(()=>q.value.useCursorPointer),Y=p(()=>{let e=q.value.style.tooltips;return{backgroundColor:e.backgroundColor,color:e.color,border:e.border,borderRadius:`${e.borderRadius}px`,boxShadow:e.boxShadow}}),Xt=p(()=>z.value.filter(e=>![`line`,`group`].includes(e.type)).length>1),Zt=p(()=>Ht[Vt.value>98?98:Vt.value]),Qt=p(()=>{switch(!0){case E.value:return`default`;case k.value:return`move`;case N.value:return`text`;case A.value:return`se-resize`;default:return``}}),$t=p(()=>z.value),X=g(null);function en(e){if(e)switch(!0){case e.type===`rect`:return`
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
                    style="display:${I.value&&I.value.id===e.id?`initial`:`none`};" 
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
                ${V.value&&I.value&&I.value.id===e.id?nn(e):``}
                ${tn(e,n)}
            </g> 
            `;case e.textAlign===`middle`:return`
                <g id="${e.id}">
                <rect 
                    id="${e.id}" 
                    style="display:${I.value&&I.value.id===e.id?`initial`:`none`};" 
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
                ${V.value&&I.value&&I.value.id===e.id?nn(e):``}
                ${tn(e)}
                </g>
            `;case e.textAlign===`end`:return`
            <g id="${e.id}">
                <rect 
                    id="${e.id}" 
                    style="display:${I.value&&I.value.id===e.id?`initial`:`none`};" 
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
                ${V.value&&I.value&&I.value.id===e.id?nn(e):``}
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
              style="display:${A.value||k.value?`initial`:`none`}; rx:1 !important; ry:1 !important;"
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
                id="${A.value?``:e.id}"
                x="${e.x}"
                y="${e.y}"
                fill="transparent"
                height="${e.rectHeight}"
                width="${e.rectWidth}"
                stroke="grey"
                stroke-width="1"
                style="rx:1 !important; ry:1 !important; ${e.isDash?`stroke-dasharray: ${e.strokeWidth*3}`:``}; display:${j.value||E.value||C.value&&C.value===e.id?`initial`:`none`};"
                        />
            <g id="${e.id}">
            ${e.content?e.content:``}
            </g>
            ${tn(e)}
            </g> `,id:e.id};case e&&e.type===`rect`:return{html:`<g id="${e.id}">
            ${en(e)}
            <rect
                id="${A.value?``:e.id}"
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
                style="display:${A.value?`initial`:`none`}; rx:1 !important; ry:1 !important;"
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
            `,id:e.id}}}));function Z(e){if(e==null)return e;try{return typeof structuredClone==`function`?structuredClone(e):JSON.parse(JSON.stringify(e))}catch{return Array.isArray(e)?e.map(e=>Z(e)):typeof e==`object`?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Z(t)])):e}}function on(e=!1){if(!b.value||!Dt.value)return;x.value.end={x:L.value.x,y:L.value.y};let t;z.value.length>0&&S.value&&(t=[...z.value].find(e=>e.id===S.value.id));let n,r,i;t&&(n=t.x-x.value.end.x,r=t.y-x.value.end.y,i=Math.sqrt(n*n+r*r));let a,o;switch(e?(a=Math.max(x.value.end.x,t.x),o=Math.min(x.value.end.x,t.x),Math.max(x.value.end.y,t.y),Math.min(x.value.end.y,t.y)):(a=Math.max(x.value.end.x,x.value.start.x),o=Math.min(x.value.end.x,x.value.start.x),Math.max(x.value.end.y,x.value.start.y),Math.min(x.value.end.y,x.value.start.y)),!0){case b.value===`arrow`:z.value.at(-1).endX=x.value.end.x,z.value.at(-1).endY=x.value.end.y;break;case b.value===`circle`:z.value.at(-1).circleRadius=Ot.value?Z(a-o)+20:i+20;break;case b.value===`line`:z.value.at(-1).path+=` ${L.value.x} ${L.value.y} `;break;case[`rect`,`group`].includes(b.value):z.value.at(-1).rectWidth=Z(x.value.end.x-z.value.at(-1).x)>0?Z(x.value.end.x-z.value.at(-1).x):20,z.value.at(-1).rectHeight=Z(x.value.end.y-z.value.at(-1).y)>0?Z(x.value.end.y-z.value.at(-1).y):20}}function sn(){if(!Dt.value){Jt.value=null;return}on(),Jt.value=requestAnimationFrame(sn)}function cn(e){let t=z.value.findIndex(t=>t.id===e);if(t>-1&&t!==z.value.length-1){let[e]=z.value.splice(t,1);z.value.push(e)}}function ln(e){let t=e=>!!e&&z.value.some(t=>t.id===e);if(t(e?.target?.id))return e.target.id;let n=X.value?.querySelector(`.annotator__glass`);if(!n)return null;let r=n.style.pointerEvents;n.style.pointerEvents=`none`;let i=document.elementFromPoint(e.clientX,e.clientY);return n.style.pointerEvents=r||`all`,t(i?.id)?i.id:null}function un(e={}){let{maxEntries:t=200,maxBytes:n=2e6}=e,r={open:!1,before:null,undo:[],redo:[]},i={undo:0,redo:0},a=e=>typeof e==`string`?e.length*2:0,o=()=>JSON.stringify({shapes:Z(z.value),lastSelectedShape:Z(I.value)}),s=e=>{let t=JSON.parse(e);z.value=t.shapes,I.value=t.lastSelectedShape},c=()=>{qt.value.undo=r.undo.length,qt.value.redo=r.redo.length},l=(e,o)=>{let s=r[e];for(s.push(o),i[e]+=a(o);s.length>t||i[e]>n;){let t=s.shift();i[e]-=a(t)}};return{begin(){r.open||(r.open=!0,r.before=o())},end(){r.open&&(r.open=!1,o()!==r.before&&(l(`undo`,r.before),r.redo.length=0,i.redo=0),r.before=null,c())},undo(){let e=r.undo.pop();e&&(i.undo-=a(e),l(`redo`,o()),s(e),c())},redo(){let e=r.redo.pop();e&&(i.redo-=a(e),l(`undo`,o()),s(e),c())},size(){return{undo:r.undo.length,redo:r.redo.length,approxBytes:{undo:i.undo,redo:i.redo}}}}}function dn(){if(!Wt.value)return;let e=Wt.value.getBoundingClientRect();G.value={x:e.left+e.width/2,y:e.top}}function Q(e,t,n=`top`){W.value=e,Wt.value=t.currentTarget||t.target,dn(),U.value=!0,window.addEventListener(`scroll`,dn,!0),window.addEventListener(`resize`,dn,{passive:!0})}function $(){U.value=!1,W.value=null,Wt.value=null,window.removeEventListener(`scroll`,dn,!0),window.removeEventListener(`resize`,dn)}function fn(e){let t=e?.target&&e.target.id||S.value&&S.value.id,n=z.value.find(e=>e.id===t);if(!n){Ut.value=null;return}I.value=n;let r=L.value.x,i=L.value.y;switch(n.type){case`rect`:case`circle`:case`text`:Ut.value={dx:r-n.x,dy:i-n.y};break;case`arrow`:Ut.value={dx:r-n.x,dy:i-n.y,endDx:r-n.endX,endDy:i-n.endY};break;case`group`:Ut.value={dx:r-(n.x||0),dy:i-(n.y||0)};break;default:Ut.value={dx:0,dy:0};break}}function pn(e){let t=z.value.find(e=>e.id===I.value.id);switch(!0){case e===`front`:z.value=z.value.filter(e=>e.id!==t.id),z.value.push(t);break;case e===`back`:z.value=z.value.filter(e=>e.id!==t.id),z.value=[t,...z.value];break;default:return}}function mn(){if(!I.value?.id)return;let e={...I.value,id:`${I.value.id}_copy_${de()}`,x:I.value.x-100<0?1:I.value.x-100,y:I.value.y-100<0?1:I.value.y-100};z.value.push(e)}function hn(e){e.preventDefault(),jt.value=!1,e.target&&e.target.id&&(C.value=e.target.id)}function gn(){!I.value||!I.value.id.includes(`text`)||I.value.textContent===``&&(z.value=z.value.filter(e=>e.id!==I.value.id),I.value=z.value.at(-1))}function _n(e){if(E.value)return;e.preventDefault(),e.stopPropagation(),gn(),N.value?(F.value=!0,V.value=!0):(F.value=!1,V.value=!1,N.value=!1);let t=`text_${de()}`;if(F.value){K.value?.begin(),z.value.push({id:t,type:`text`,lines:0,x:L.value.x,y:L.value.y,textContent:``,fontSize:Z(Bt.value),textAlign:Z(H.value),isBold:Z(Et.value),isItalic:Z(O.value),isUnderline:Z(P.value),color:Z(Ft.value),isBulletTextMode:Z(w.value)}),S.value=z.value.at(-1),I.value=z.value.at(-1),K.value?.end();return}let n=()=>{T.value=z.value.find(t=>t.id===e.target.id).isDash},r=()=>{Tt.value=z.value.find(t=>t.id===e.target.id).strokeWidth};if(j.value=!1,e.target.id.includes(`arrow`)){b.value=`arrow`,n(),r();return}if(e.target.id.includes(`circle`)){b.value=`circle`,B.value.circle.filled=z.value.find(t=>t.id===e.target.id).isFilled,n(),r();return}if(e.target.id.includes(`rect`)){b.value=`rect`,B.value.rect.filled=z.value.find(t=>t.id===e.target.id).isFilled,n(),r();return}if(e.target.id.includes(`line`)){b.value=`line`,r();return}if(e.target.id.includes(`text`)){N.value=!0,F.value=!0,V.value=!0;let t=z.value.find(t=>t.id===e.target.id);t&&t.textAlign&&(H.value=z.value.find(t=>t.id===e.target.id).textAlign),t&&(w.value=z.value.find(t=>t.id===e.target.id).isBulletTextMode);return}}function vn(e){!I.value||I.value.type!==`text`||(I.value.textAlign=e)}function yn(){K.value?.undo?.()}function bn(){K.value?.redo?.()}let xn=[16,17,18,20,27,33,34,35,36,37,38,39,40,45,91,112,113,114,115,116,117,118,119,120,121,122,123,221,255,`Unidentified`];function Sn(e){if(jt.value)return;e.preventDefault();let t=e.keyCode;if(!F.value)return;V.value=!0;let n;if(n=I.value.type===`text`?z.value.find(e=>e.id===I.value.id):z.value.at(-1),S.value=n,n.type===`text`)switch(S.value.isBold=Z(Et.value),S.value.isItalic=Z(O.value),S.value.isUnderline=Z(P.value),!0){case[8,46].includes(t):n.textContent=n.textContent.slice(0,-1);break;case t===9:n.textContent+=`&nbsp; &nbsp; &nbsp; &nbsp;`;break;case t===13:n.lines+=1,n.textContent+=`‎`;return;case xn.includes(t):return;default:n.textContent+=e.key}}function Cn(){if(R.value=[],b.value!==`group`){j.value=!1,z.value=z.value.filter(e=>e.type!==`group`);return}let e=z.value.at(-1);if(z.value.forEach(t=>{if(t.type!==`group`)switch(!0){case t.type===`arrow`:let n=t.x<=t.endX&&t.y<=t.endY&&e.x<=t.x&&e.y<=t.y&&e.x+e.rectWidth>=t.endX&&e.y+e.rectHeight>=t.endY,r=t.endY<t.y&&t.x<t.endX&&e.x<=t.x&&e.y<=t.y&&e.x+e.rectWidth>=t.endX&&e.y+e.rectHeight>=t.y,i=t.x>t.endX&&t.y<t.endY&&e.x<=t.endX&&e.y<=t.endY&&e.x+e.rectWidth>=t.x&&e.y+e.rectHeight>=t.endY,a=t.x>t.endX&&t.y>t.endY&&e.x<=t.endX&&e.y<=t.endY&&e.x+e.rectWidth>=t.x&&e.y+e.rectHeight>=t.y;(n||r||i||a)&&R.value.push(t);break;case t.type===`circle`:e.x<=t.x+t.circleRadius&&e.y<=t.y+t.circleRadius&&t.x+t.circleRadius<=e.x+e.rectWidth&&t.y+t.circleRadius<=e.y+e.rectHeight&&R.value.push(t);break;case t.type===`rect`:e.x<=t.x&&e.y<=t.y&&t.x<=e.x+e.rectWidth&&t.y<=e.y+e.rectHeight&&t.x+t.rectWidth<=e.x+e.rectWidth&&t.y+t.rectHeight<=e.y+e.rectHeight&&t.rectWidth<=e.rectWidth&&t.rectHeight<=e.rectHeight&&R.value.push(t);break;case t.type===`text`:e.x<=t.x&&e.y<=t.y&&R.value.push(t);break}}),R.value=R.value.map(t=>({...t,id:e.id,oldId:t.id,diffX:t.x-e.x,diffY:t.y-e.y,diffEndX:t.endX?t.endX-e.x:0,diffEndY:t.endY?t.endY-e.y:0})),e.source=R.value,R.value.length>1){let t=Z(R.value).map(e=>e.oldId);z.value=z.value.filter(e=>!t.includes(e.id)),R.value.forEach(t=>{switch(!0){case t.type===`circle`:e.content+=`
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
            id="${A.value?``:t.id}"
            x="${t.x}"
            y="${t.y}"
            fill="${t.isFilled?t.color+t.alpha:`rgba(255,255,255,0.001)`}"
            height="${t.rectHeight}"
            width="${t.rectWidth}"
            stroke="${t.color+t.alpha}"
            stroke-width="${t.strokeWidth}"
            style="rx:1 !important; ry:1 !important; ${t.isDash?`stroke-dasharray: ${t.strokeWidth*3}`:``}"
                        />
        `;break;case t.type===`arrow`:let n=t.strokeWidth>3?5:10,r=t.strokeWidth>3?2.5:5,i=de();e.content+=`
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
            `;break}})}else z.value=z.value.filter(t=>t.id!==e.id)}function wn(e){e.content=``;let t=e.x||0,n=e.y||0;(e.source||[]).forEach(r=>{switch(r.type){case`circle`:{let i=t+r.diffX,a=n+r.diffY;e.content+=`
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
            id="${A.value?``:r.id}"
            x="${i}"
            y="${a}"
            fill="${r.isFilled?r.color+r.alpha:`rgba(255,255,255,0.001)`}"
            height="${r.rectHeight}"
            width="${r.rectWidth}"
            stroke="${r.color+r.alpha}"
            stroke-width="${r.strokeWidth}"
            style="rx:1 !important; ry:1 !important; ${r.isDash?`stroke-dasharray: ${r.strokeWidth*3}`:``}"
          />
        `;break}case`arrow`:{let i=t+r.diffX,a=n+r.diffY,o=t+r.diffEndX,s=n+r.diffEndY,c=r.strokeWidth>3?5:10,l=r.strokeWidth>3?2.5:5,u=`m_${r.id}_${de()}`;e.content+=`
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
        `;break}}})}function Tn(e){e.relatedTarget&&X.value&&X.value.contains(e.relatedTarget)||(jt.value=!0,C.value=void 0)}function En(){if(Dt.value=!0,!b.value&&!j.value||!Dt.value)return;Ot.value=!0,x.value.start={x:L.value.x,y:L.value.y};let e=`${j.value?`group`:b.value}_${de()}`;switch(!0){case b.value===`arrow`:z.value.push({id:e,x:L.value.x,y:L.value.y,endX:L.value.x,endY:L.value.y,type:b.value,color:Z(Ft.value),strokeWidth:Z(Math.abs(Tt.value)),isDash:Z(T.value)}),I.value=z.value.at(-1);break;case b.value===`circle`:z.value.push({alpha:B.value.circle.filled?Zt.value:``,id:e,color:Z(Ft.value),isFilled:Z(B.value.circle.filled),circleRadius:Z(B.value.circle.radius),circleStrokeWidth:Z(B.value.circle.strokeWidth),type:b.value,x:L.value.x,y:L.value.y,strokeWidth:Z(Math.abs(Tt.value)),isDash:Z(T.value)}),I.value=z.value.at(-1);break;case b.value===`line`:z.value.push({alpha:Z(Zt.value),id:e,x:L.value.x,y:L.value.y,type:b.value,color:Z(Ft.value),strokeWidth:Z(Math.abs(Tt.value)),isDash:Z(T.value),path:`${L.value.x} ${L.value.y}`}),I.value=z.value.at(-1);break;case b.value===`rect`:z.value.push({alpha:B.value.rect.filled?Zt.value:``,id:e,color:Z(Ft.value),isFilled:Z(B.value.rect.filled),rectStrokeWidth:Z(B.value.rect.strokeWidth),rectHeight:Z(B.value.rect.height),rectWidth:Z(B.value.rect.width),type:b.value,x:L.value.x,y:L.value.y,strokeWidth:Z(Math.abs(Tt.value)),isDash:Z(T.value)}),I.value=z.value.at(-1);break;case b.value===`group`:z.value.push({alpha:1,id:`group_${de()}`,x:L.value.x,y:L.value.y,isFilled:!1,rectHeight:Z(B.value.rect.height),rectWidth:Z(B.value.rect.width),rectStrokeWidth:1,type:`group`,color:`grey`,strokeWidth:1,isDash:!0,content:``});break}Jt.value||(Jt.value=requestAnimationFrame(sn))}function Dn(e){if(E.value){kt.value=!1;return}if(e.preventDefault(),e.stopPropagation(),kt.value=!0,e.pointerId!=null){try{X.value?.setPointerCapture?.(e.pointerId)}catch{}Yt.value=e.pointerId}else Yt.value=null;if((D.value||k.value||A.value||j.value)&&K.value?.begin?.(),D.value){En();return}if(k.value){let t=ln(e)||C.value||I.value?.id;t&&(cn(t),S.value={id:t}),fn(e)}}function On(e){if(!e||!e.id||e.type===`line`||!Ut.value&&(fn({target:{id:e.id}}),!Ut.value))return;let{dx:t,dy:n,endDx:r,endDy:i}=Ut.value,a=L.value.x,o=L.value.y;switch(I.value=e,e.type){case`arrow`:e.x=a-t,e.y=o-n,e.endX=a-(r??t),e.endY=o-(i??n);break;case`circle`:e.x=a-t,e.y=o-n;break;case`rect`:e.x=a-t,e.y=o-n;break;case`text`:e.x=a-t,e.y=o-n;break;case`group`:e.x=a-t,e.y=o-n,wn(e);break}}function kn(){let e=S.value?.id||C.value;if(!e)return;let t=z.value.find(t=>t.id===e);t&&On(t)}function An(){Ot.value=!1;let e=S.value.id;if(!e)return;Dt.value=!0;let t=z.value.find(t=>t.id===e);b.value=t.type,z.value=z.value.filter(t=>t.id!==e),z.value.push(t),on(!0)}function jn(e){E.value||(e.preventDefault(),e.stopPropagation(),e.target.localName!==`svg`&&(S.value=e.target),k.value&&kt.value?kn():A.value&&kt.value&&An())}function Mn(e){let t=e.target.id;if(!0===E.value){K.value?.begin(),z.value=[...z.value].filter(e=>e.id!==t),I.value=void 0,K.value?.end();return}else I.value=z.value.find(e=>e.id===t)}let Nn=g(null);function Pn(e,t){for(t(e),e=e.firstChild;e;)Pn(e,t),e=e.nextSibling}function Fn(){At.value=!0,E.value=!1,k.value=!1,A.value=!1,N.value=!1,F.value=!1,j.value=!1,b.value=void 0,V.value=!1,e(async()=>{let e=Nn.value;if(e){Pn(e,e=>{e&&e.nodeType===1&&(e.setAttribute(`font-family`,`Helvetica`),e.style.fontFamily=`Helvetica`)});try{let t;try{t=(await ce(async()=>{let{default:e}=await import(`./__vite-optional-peer-dep_jspdf_vue-data-ui-B_RRbQPi.js`);return{default:e}},[],import.meta.url)).default}catch{throw Error(`jspdf is not installed. Run npm install jspdf`)}let n=await he({container:e,scale:2}),r=new Image;r.src=n,r.onload=()=>{let e={width:595.28,height:841.89},i=r.width,a=r.height,o=i/e.width*e.height,s=e.width,c=s/i*a,l=new t(``,`pt`,`a4`),u=0,d=a;if(d<o)l.addImage(n,`PNG`,0,0,s,c,``,`FAST`);else for(;d>0;)l.addImage(n,`PNG`,0,u,s,c,``,`FAST`),d-=o,u-=e.height,d>0&&l.addPage();l.save(`${new Date().toLocaleDateString()}_annotations.pdf`)}}catch(e){console.error(`Error generating image:`,e)}finally{At.value=!1,Pn(e,e=>{e&&e.nodeType===1&&(e.setAttribute(`font-family`,q.value.style.fontFamily),e.style.fontFamily=q.value.style.fontFamily)})}}})}function In(e){if(!E.value&&e&&(e.preventDefault(),e.stopPropagation()),Dt.value=!1,kt.value=!1,Ut.value=null,Yt.value!=null){try{X.value?.releasePointerCapture?.(Yt.value)}catch{}Yt.value=null}Jt.value&&(cancelAnimationFrame(Jt.value),Jt.value=null),j.value&&Cn(),K.value?.end()}function Ln(){!I.value||!I.value.id.includes(`rect`)||(I.value.isFilled=!I.value.isFilled)}function Rn(){!I.value||!I.value.id.includes(`circle`)||(I.value.isFilled=!I.value.isFilled)}function zn(){!I.value||I.value.type===`text`||(I.value.isDash=Z(T.value))}function Bn(){!I.value||[`arrow`,`text`].includes(I.value.id)||(I.value.alpha=Z(Zt.value))}function Vn(){!I.value||![`arrow`,`circle`,`rect`,`line`].includes(I.value.type)||(I.value.strokeWidth=Z(Math.abs(Tt.value)))}function Hn(){!I.value||I.value.type!==`text`||(I.value.isBold=Z(Et.value),I.value.isItalic=Z(O.value),I.value.isUnderline=Z(P.value),I.value.fontSize=Z(Bt.value),I.value.isBulletTextMode=Z(w.value))}function Un(e){if(e.preventDefault(),!X.value)return;let t=X.value.getBoundingClientRect(),n,r;e.touches&&e.touches.length>0?(n=e.touches[0].clientX,r=e.touches[0].clientY):(n=e.clientX,r=e.clientY),L.value.x=(n-t.left)/t.width*Pt.value,L.value.y=(r-t.top)/t.height*Nt.value}function Wn(e){if(V.value=!1,gn(),e===b.value){b.value=void 0,D.value=!1;return}D.value=!0,E.value=!1,k.value=!1,A.value=!1,N.value=!1,b.value=e}function Gn(){M.value=!M.value,M.value||(k.value=!1,A.value=!1,N.value=!1,F.value=!1,b.value=void 0,V.value=!1,E.value=!1,F.value=!1),xt(`toggleOpenState`,{isOpen:M.value})}function Kn(){xt(`saveAnnotations`,{shapes:z.value,lastSelectedShape:I.value})}let qn=null;return i(()=>{if(Nn.value){let e=!1;Pn(Nn.value,t=>{if(!e&&[`DIV`,`svg`,`section`,`canvas`].includes(t.tagName)){Lt.value=t,e=!0;return}})}Gt.value=(()=>{if(typeof navigator>`u`)return!1;let e=navigator.userAgentData?.platform??``;if(e)return/mac|ios/i.test(e);let t=navigator.userAgent??``;return/(Mac|iPhone|iPad|iPod)/i.test(t)})();let e=Lt?.value.getBoundingClientRect();if(It.value=e.height/e.width,Pt.value=1e3,Nt.value=It.value*1e3,Rt.value=e.width,zt.value=e.height,new ResizeObserver(e=>{e.forEach(e=>{Rt.value=e.contentRect.width,zt.value=e.contentRect.height,It.value=e.contentRect.height/e.contentRect.width,Nt.value=It.value*1e3})}).observe(Lt.value),Kt.value=e=>Sn(e),window.addEventListener(`keydown`,Kt.value),K.value=un(),K.value.size){let e=K.value.size();qt.value.undo=e.undo,qt.value.redo=e.redo}qn=ye({isMacLike:Gt,isSummaryOpen:M,isWriting:F,isDeleteMode:E,isMoveMode:k,isResizeMode:A,isSelectMode:j,isDrawMode:D,isTextMode:N,activeShape:b,showCaret:V,lastSelectedShape:I,shapes:z,history:K,setShapeTo:Wn,undoLastShape:yn,redoLastShape:bn})}),u(()=>{$(),Jt.value&&cancelAnimationFrame(Jt.value),Kt.value&&window.removeEventListener(`keydown`,Kt.value),qn&&qn(),window.removeEventListener(`keydown`,Sn)}),se(z,e=>{e.length===0&&(I.value=void 0)}),se(N,e=>{V.value=e}),(e,i)=>(d(),h(`div`,xe,[_(`div`,Se,[s(ve,{config:{maxHeight:1e3,useCursorPointer:J.value,head:{backgroundColor:q.value.style.backgroundColor,color:q.value.style.color,iconColor:q.value.style.color,iconSize:20,icon:M.value?`close`:`annotator`,padding:`6px`},body:{backgroundColor:q.value.style.backgroundColor,color:q.value.style.color}},onToggle:Gn},{title:m(({color:e})=>[_(`div`,{style:r({color:e})},f(q.value.translations.title),5)]),content:m(({backgroundColor:c})=>[_(`div`,{class:`tool-selection`,style:r({backgroundColor:c})},[_(`button`,{disabled:z.value.length===0,style:r({background:k.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:k.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:k.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:a({"button-tool":!0,"button-tool--selected":k.value,tooltip:!0}),onClick:i[0]||(i[0]=e=>{gn(),k.value=!k.value,b.value=void 0,E.value=!1,D.value=!1,A.value=!1,j.value=!1,N.value=!1,F.value=!1,V.value=!1}),onMouseenter:i[1]||(i[1]=e=>q.value.style.showTooltips&&Q(`move`,e,`top`)),onMouseleave:$,onFocus:i[2]||(i[2]=e=>q.value.style.showTooltips&&Q(`move`,e,`top`)),onBlur:$},[s(v,{name:`move`,stroke:k.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`move`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipMove)+` `,1),i[91]||(i[91]=_(`kbd`,null,`M`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,Ce),_(`button`,{disabled:z.value.length===0||b.value===`line`,style:r({background:A.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:A.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:A.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:a({"button-tool":!0,"button-tool--selected":A.value,tooltip:!0}),onClick:i[3]||(i[3]=e=>{gn(),A.value=!A.value,k.value=!1,E.value=!1,D.value=!1,j.value=!1,N.value=!1,F.value=!1,b.value=void 0,V.value=!1}),onMouseenter:i[4]||(i[4]=e=>q.value.style.showTooltips&&Q(`resize`,e,`top`)),onMouseleave:$,onFocus:i[5]||(i[5]=e=>q.value.style.showTooltips&&Q(`resize`,e,`top`)),onBlur:$},[s(v,{name:`resize`,stroke:A.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`resize`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipResize)+` `,1),i[92]||(i[92]=_(`kbd`,null,`R`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,we),_(`button`,{disabled:z.value.length===0,style:r({background:E.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:E.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:E.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:a({"button-tool":!0,"button-tool--selected":E.value,tooltip:!0}),onClick:i[6]||(i[6]=e=>{gn(),E.value=!E.value,k.value=!1,A.value=!1,j.value=!1,N.value=!1,F.value=!1,b.value=void 0,V.value=!1}),onMouseenter:i[7]||(i[7]=e=>q.value.style.showTooltips&&Q(`delete`,e,`top`)),onMouseleave:$,onFocus:i[8]||(i[8]=e=>q.value.style.showTooltips&&Q(`delete`,e,`top`)),onBlur:$},[s(v,{name:`trash`,stroke:E.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`delete`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipDelete)+` `,1),i[93]||(i[93]=_(`kbd`,null,`D`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,Te),_(`button`,{disabled:!Xt.value,style:r({background:j.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:j.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:j.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:a({"button-tool":!0,"button-tool--selected":j.value,tooltip:!0}),onClick:i[9]||(i[9]=e=>{gn(),Wn(`group`),j.value=!j.value,E.value=!1,k.value=!1,A.value=!1,N.value=!1,F.value=!1,b.value=`group`,V.value=!1}),onMouseenter:i[10]||(i[10]=e=>q.value.style.showTooltips&&Q(`selectAndGroup`,e,`top`)),onMouseleave:$,onFocus:i[11]||(i[11]=e=>q.value.style.showTooltips&&Q(`selectAndGroup`,e,`top`)),onBlur:$},[s(v,{name:`selectAndGroup`,stroke:j.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`selectAndGroup`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipGroup)+` `,1),i[94]||(i[94]=_(`kbd`,null,`G`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,Ee),_(`button`,{disabled:z.value.length===0,style:r({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:a({"button-tool":!0,tooltip:!0}),onClick:i[12]||(i[12]=e=>{A.value=!1,k.value=!0,E.value=!1,D.value=!1,j.value=!1,N.value=!1,F.value=!1,V.value=!1,pn(`front`)}),onMouseenter:i[13]||(i[13]=e=>q.value.style.showTooltips&&Q(`bringToFront`,e,`top`)),onMouseleave:$,onFocus:i[14]||(i[14]=e=>q.value.style.showTooltips&&Q(`bringToFront`,e,`top`)),onBlur:$},[s(v,{name:`bringToFront`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`bringToFront`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipBringToFront),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,De),_(`button`,{disabled:z.value.length===0,style:r({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:a({"button-tool":!0,tooltip:!0}),onClick:i[15]||(i[15]=e=>{A.value=!1,k.value=!0,E.value=!1,D.value=!1,j.value=!1,N.value=!1,F.value=!1,V.value=!1,pn(`back`)}),onMouseenter:i[16]||(i[16]=e=>q.value.style.showTooltips&&Q(`bringToBack`,e,`top`)),onMouseleave:$,onFocus:i[17]||(i[17]=e=>q.value.style.showTooltips&&Q(`bringToBack`,e,`top`)),onBlur:$},[s(v,{name:`bringToBack`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`bringToBack`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipBringToBack),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,Oe),_(`button`,{disabled:z.value.length===0||b.value===`line`,style:r({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:a({"button-tool":!0,tooltip:!0}),onClick:i[18]||(i[18]=e=>{gn(),A.value=!1,k.value=!0,E.value=!1,D.value=!1,j.value=!1,N.value=!1,F.value=!1,V.value=!1,mn()}),onMouseenter:i[19]||(i[19]=e=>q.value.style.showTooltips&&Q(`duplicate`,e,`top`)),onMouseleave:$,onFocus:i[20]||(i[20]=e=>q.value.style.showTooltips&&Q(`duplicate`,e,`top`)),onBlur:$},[s(v,{name:`copy`,stroke:q.value.style.buttons.controls.color,size:18},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`duplicate`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipDuplicate),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,ke),_(`button`,{disabled:qt.value.undo===0,style:r({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:a({"button-tool":!0,"button-tool--one-shot":!0,tooltip:!0}),onClick:i[21]||(i[21]=e=>{A.value=!1,k.value=!1,E.value=!1,D.value=!1,j.value=!1,N.value=!1,F.value=!1,b.value=void 0,V.value=!1,yn()}),onMouseenter:i[22]||(i[22]=e=>q.value.style.showTooltips&&Q(`undoLast`,e,`top`)),onMouseleave:$,onFocus:i[23]||(i[23]=e=>q.value.style.showTooltips&&Q(`undoLast`,e,`top`)),onBlur:$},[s(v,{name:`refresh`,stroke:q.value.style.buttons.controls.color,size:20},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`undoLast`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipUndo)+` `,1),_(`kbd`,null,f(Gt.value?`⌘`:`Ctrl`),1),i[95]||(i[95]=_(`kbd`,null,`Z`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,Ae),_(`button`,{disabled:qt.value.redo===0,style:r({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:a({"button-tool":!0,"button-tool--one-shot":!0,tooltip:!0}),onClick:i[24]||(i[24]=e=>{A.value=!1,k.value=!1,E.value=!1,D.value=!1,j.value=!1,N.value=!1,F.value=!1,b.value=void 0,V.value=!1,bn()}),onMouseenter:i[25]||(i[25]=e=>q.value.style.showTooltips&&Q(`redoLast`,e,`top`)),onMouseleave:$,onFocus:i[26]||(i[26]=e=>q.value.style.showTooltips&&Q(`redoLast`,e,`top`)),onBlur:$},[s(v,{name:`refresh`,stroke:q.value.style.buttons.controls.color,size:20,style:{transform:`rotateX(0deg) rotateY(180deg)`}},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`redoLast`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipRedo)+` `,1),_(`kbd`,null,f(Gt.value?`⌘`:`Ctrl`),1),i[96]||(i[96]=_(`kbd`,null,`Y`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,je),q.value.style.showPrint?(d(),h(`button`,{key:0,style:r({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:a({"button-tool":!0,tooltip:!0}),onClick:Fn,onMouseenter:i[27]||(i[27]=e=>q.value.style.showTooltips&&Q(`printPdf`,e,`top`)),onMouseleave:$,onFocus:i[28]||(i[28]=e=>q.value.style.showTooltips&&Q(`printPdf`,e,`top`)),onBlur:$},[s(v,{name:`printer`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`printPdf`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipPdf),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],36)):t(``,!0),q.value.style.showImage?(d(),h(`button`,{key:1,style:r({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:a({"button-tool":!0,tooltip:!0}),onClick:i[29]||(i[29]=(...e)=>o(wt)&&o(wt)(...e)),onMouseenter:i[30]||(i[30]=e=>q.value.style.showTooltips&&Q(`printImage`,e,`top`)),onMouseleave:$,onFocus:i[31]||(i[31]=e=>q.value.style.showTooltips&&Q(`printImage`,e,`top`)),onBlur:$},[s(v,{name:`image`,stroke:q.value.style.buttons.controls.color,size:20},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`printImage`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipImage),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],36)):t(``,!0),q.value.style.showSave&&e.$attrs.onSaveAnnotations?(d(),h(`button`,{key:2,style:r({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:a({"button-tool":!0,tooltip:!0}),onClick:Kn,onMouseenter:i[32]||(i[32]=e=>q.value.style.showTooltips&&Q(`saveAction`,e,`top`)),onMouseleave:$,onFocus:i[33]||(i[33]=e=>q.value.style.showTooltips&&Q(`saveAction`,e,`top`)),onBlur:$},[s(v,{name:`save`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`saveAction`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipSave),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],36)):t(``,!0)],4),_(`div`,Me,[_(`button`,{class:a({"button-tool":!0,"button-tool--selected":b.value===`circle`,tooltip:!0}),style:r({background:b.value===`circle`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:b.value===`circle`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:b.value===`circle`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:i[34]||(i[34]=e=>{Wn(`circle`),j.value=!1}),onMouseenter:i[35]||(i[35]=e=>q.value.style.showTooltips&&Q(`setCircle`,e,`top`)),onMouseleave:$,onFocus:i[36]||(i[36]=e=>q.value.style.showTooltips&&Q(`setCircle`,e,`top`)),onBlur:$},[(d(),h(`svg`,Ne,[_(`circle`,{cx:6,cy:6,r:`4`,fill:B.value.circle.filled?(b.value,Ft.value+Zt.value):`none`,stroke:`currentColor`},null,8,Pe)])),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setCircle`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeCircle)+` `,1),i[97]||(i[97]=_(`kbd`,null,`C`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),b.value===`circle`?(d(),h(`div`,Fe,[_(`label`,Ie,[n(f(q.value.translations.filled)+` `,1),re(_(`input`,{type:`checkbox`,"onUpdate:modelValue":i[37]||(i[37]=e=>B.value.circle.filled=e),onChange:Rn,checked:B.value.circle.filled,style:r({all:`revert`,appearance:`auto`,"-webkit-appearance":`auto`,accentColor:q.value.style.color+` !important`})},null,44,Le),[[ae,B.value.circle.filled]])])])):t(``,!0),_(`button`,{class:a({"button-tool":!0,"button-tool--selected":b.value===`rect`,tooltip:!0}),style:r({background:b.value===`rect`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:b.value===`rect`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:b.value===`rect`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:i[38]||(i[38]=e=>{Wn(`rect`),j.value=!1}),onMouseenter:i[39]||(i[39]=e=>q.value.style.showTooltips&&Q(`setRect`,e,`top`)),onMouseleave:$,onFocus:i[40]||(i[40]=e=>q.value.style.showTooltips&&Q(`setRect`,e,`top`)),onBlur:$},[(d(),h(`svg`,Re,[_(`rect`,{x:`3`,y:`3`,style:{rx:`0 !important`,ry:`0 !important`},height:`6`,width:`6`,fill:B.value.rect.filled?(b.value,Ft.value+Zt.value):`none`,stroke:`currentColor`},null,8,ze)])),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setRect`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeRect)+` `,1),i[98]||(i[98]=_(`kbd`,null,`S`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),b.value===`rect`?(d(),h(`div`,Be,[_(`label`,Ve,[n(f(q.value.translations.filled)+` `,1),re(_(`input`,{type:`checkbox`,"onUpdate:modelValue":i[41]||(i[41]=e=>B.value.rect.filled=e),onChange:Ln,checked:B.value.rect.filled,style:r({all:`revert`,appearance:`auto`,"-webkit-appearance":`auto`,accentColor:q.value.style.color+` !important`})},null,44,He),[[ae,B.value.rect.filled]])])])):t(``,!0),_(`button`,{class:a({"button-tool":!0,"button-tool--selected":b.value===`arrow`,tooltip:!0}),style:r({background:b.value===`arrow`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:b.value===`arrow`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:b.value===`arrow`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:i[42]||(i[42]=e=>{Wn(`arrow`),j.value=!1}),onMouseenter:i[43]||(i[43]=e=>q.value.style.showTooltips&&Q(`setArrow`,e,`top`)),onMouseleave:$,onFocus:i[44]||(i[44]=e=>q.value.style.showTooltips&&Q(`setArrow`,e,`top`)),onBlur:$},[(d(),h(`svg`,Ue,[_(`path`,{stroke:B.value.arrow.filled?b.value===`arrow`?`white`:`grey`:`none`,"stroke-width":`2`,d:`M5,19 19,5 14,5 19,10.5 19,5`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},null,8,We)])),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setArrow`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeArrow)+` `,1),i[99]||(i[99]=_(`kbd`,null,`A`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),_(`button`,{class:a({"button-tool":!0,"button-tool--selected":b.value===`line`,tooltip:!0}),style:r({background:b.value===`line`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:b.value===`line`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:b.value===`line`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:i[45]||(i[45]=e=>{Wn(`line`),j.value=!1}),onMouseenter:i[46]||(i[46]=e=>q.value.style.showTooltips&&Q(`setFreehand`,e,`top`)),onMouseleave:$,onFocus:i[47]||(i[47]=e=>q.value.style.showTooltips&&Q(`setFreehand`,e,`top`)),onBlur:$},[i[101]||(i[101]=_(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5`})],-1)),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setFreehand`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeFreehand)+` `,1),i[100]||(i[100]=_(`kbd`,null,`L`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),[`arrow`,`circle`,`rect`,`line`].includes(b.value)?(d(),h(`div`,Ge,[_(`div`,Ke,[_(`label`,qe,[n(f(q.value.translations.thickness)+` `,1),re(_(`input`,{type:`number`,"onUpdate:modelValue":i[48]||(i[48]=e=>Tt.value=e),onInput:Vn,min:1,style:{padding:`0 4px`,width:`40px`,border:`1px solid #dadada`,"border-radius":`3px`}},null,544),[[oe,Tt.value]])])])])):t(``,!0),[`arrow`,`circle`,`rect`].includes(b.value)?(d(),h(`div`,Je,[_(`div`,Ye,[_(`label`,Xe,[n(f(q.value.translations.dashedLines)+` `,1),(d(),h(`svg`,Ze,[...i[102]||(i[102]=[_(`line`,{x1:`0`,x2:`24`,y1:`12`,y2:`12`,"stroke-width":`2`,stroke:`black`,"stroke-dasharray":`3`},null,-1)])])),re(_(`input`,{name:`dashStyle`,type:`checkbox`,"onUpdate:modelValue":i[49]||(i[49]=e=>T.value=e),onChange:zn,checked:T.value,style:r({all:`revert`,appearance:`auto`,"-webkit-appearance":`auto`,accentColor:q.value.style.color+` !important`})},null,44,Qe),[[ae,T.value]])])])])):t(``,!0),_(`button`,{class:a({"button-tool":!0,"button-tool--selected":N.value,tooltip:!0}),style:r({background:N.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:N.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:N.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:i[50]||(i[50]=e=>{gn(),N.value=!N.value,E.value=!1,k.value=!1,A.value=!1,j.value=!1,D.value=!1,b.value=void 0}),onMouseenter:i[51]||(i[51]=e=>q.value.style.showTooltips&&Q(`setText`,e,`top`)),onMouseleave:$,onFocus:i[52]||(i[52]=e=>q.value.style.showTooltips&&Q(`setText`,e,`top`)),onBlur:$},[s(v,{name:`text`,stroke:N.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color},null,8,[`stroke`]),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setText`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeText)+` `,1),i[103]||(i[103]=_(`kbd`,null,`T`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),N.value?(d(),h(`div`,$e,[_(`div`,et,[_(`label`,tt,[n(f(q.value.translations.fontSize)+` `,1),re(_(`input`,{type:`number`,"onUpdate:modelValue":i[53]||(i[53]=e=>Bt.value=e),onInput:Hn,style:{padding:`0 4px`,width:`40px`,border:`1px solid #dadada`,"border-radius":`3px`}},null,544),[[oe,Bt.value]])])])])):t(``,!0),N.value?(d(),h(`div`,nt,[_(`button`,{class:a({"button-tool":!0,"button-tool--selected":H.value===`start`,tooltip:!0}),style:r({background:H.value===`start`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:H.value===`start`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:H.value===`start`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:i[54]||(i[54]=e=>{E.value=!1,k.value=!1,A.value=!1,D.value=!1,j.value=!1,b.value=void 0,H.value=`start`,vn(`start`)}),onMouseenter:i[55]||(i[55]=e=>q.value.style.showTooltips&&Q(`setAlignStart`,e,`top`)),onMouseleave:$,onFocus:i[56]||(i[56]=e=>q.value.style.showTooltips&&Q(`setAlignStart`,e,`top`)),onBlur:$},[i[104]||(i[104]=_(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M4 6l16 0`}),_(`path`,{d:`M4 12l10 0`}),_(`path`,{d:`M4 18l14 0`})],-1)),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setAlignStart`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeTextLeft),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),N.value?(d(),h(`div`,rt,[_(`button`,{class:a({"button-tool":!0,"button-tool--selected":H.value===`middle`,tooltip:!0}),style:r({background:H.value===`middle`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:H.value===`middle`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:H.value===`middle`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),disabled:w.value,onClick:i[57]||(i[57]=e=>{E.value=!1,k.value=!1,A.value=!1,D.value=!1,j.value=!1,b.value=void 0,H.value=`middle`,vn(`middle`)}),onMouseenter:i[58]||(i[58]=e=>q.value.style.showTooltips&&Q(`setAlignMiddle`,e,`top`)),onMouseleave:$,onFocus:i[59]||(i[59]=e=>q.value.style.showTooltips&&Q(`setAlignMiddle`,e,`top`)),onBlur:$},[i[105]||(i[105]=_(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M4 6l16 0`}),_(`path`,{d:`M8 12l8 0`}),_(`path`,{d:`M6 18l12 0`})],-1)),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setAlignMiddle`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeTextCenter),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,it)])):t(``,!0),N.value?(d(),h(`div`,at,[_(`button`,{class:a({"button-tool":!0,"button-tool--selected":H.value===`end`,tooltip:!0}),style:r({background:H.value===`end`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:H.value===`end`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:H.value===`end`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),disabled:w.value,onClick:i[60]||(i[60]=e=>{E.value=!1,k.value=!1,A.value=!1,D.value=!1,j.value=!1,b.value=void 0,H.value=`end`,vn(`end`)}),onMouseenter:i[61]||(i[61]=e=>q.value.style.showTooltips&&Q(`setAlignEnd`,e,`top`)),onMouseleave:$,onFocus:i[62]||(i[62]=e=>q.value.style.showTooltips&&Q(`setAlignEnd`,e,`top`)),onBlur:$},[i[106]||(i[106]=_(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M4 6l16 0`}),_(`path`,{d:`M10 12l10 0`}),_(`path`,{d:`M6 18l14 0`})],-1)),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setAlignEnd`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeTextRight),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,ot)])):t(``,!0),N.value?(d(),h(`div`,st,[_(`button`,{class:a({"button-tool":!0,"button-tool--selected":w.value,tooltip:!0}),style:r({background:w.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:w.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:w.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:i[63]||(i[63]=e=>{E.value=!1,k.value=!1,A.value=!1,D.value=!1,j.value=!1,b.value=void 0,w.value=!w.value,H.value=`start`,vn(`start`),Hn()}),onMouseenter:i[64]||(i[64]=e=>q.value.style.showTooltips&&Q(`setBulletMode`,e,`top`)),onMouseleave:$,onFocus:i[65]||(i[65]=e=>q.value.style.showTooltips&&Q(`setBulletMode`,e,`top`)),onBlur:$},[i[107]||(i[107]=_(`svg`,{width:`100%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M9 6l11 0`}),_(`path`,{d:`M9 12l11 0`}),_(`path`,{d:`M9 18l11 0`}),_(`path`,{d:`M5 6l0 .01`}),_(`path`,{d:`M5 12l0 .01`}),_(`path`,{d:`M5 18l0 .01`})],-1)),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setBulletMode`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeTextBullet),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),N.value?(d(),h(`div`,ct,[_(`button`,{class:a({"button-tool":!0,"button-tool--selected":Et.value,tooltip:!0}),style:r({background:Et.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:Et.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:Et.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:i[66]||(i[66]=e=>{E.value=!1,k.value=!1,A.value=!1,D.value=!1,j.value=!1,b.value=void 0,Et.value=!Et.value,Hn()}),onMouseenter:i[67]||(i[67]=e=>q.value.style.showTooltips&&Q(`setBold`,e,`top`)),onMouseleave:$,onFocus:i[68]||(i[68]=e=>q.value.style.showTooltips&&Q(`setBold`,e,`top`)),onBlur:$},[i[108]||(i[108]=_(`svg`,{width:`100%`,viewBox:`0 0 24 24`,"stroke-width":`3`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M7 5h6a3.5 3.5 0 0 1 0 7h-6z`}),_(`path`,{d:`M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7`})],-1)),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setBold`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeTextBold),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),N.value?(d(),h(`div`,lt,[_(`button`,{class:a({"button-tool":!0,"button-tool--selected":O.value,tooltip:!0}),style:r({background:O.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:O.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:O.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:i[69]||(i[69]=e=>{E.value=!1,k.value=!1,A.value=!1,D.value=!1,j.value=!1,b.value=void 0,O.value=!O.value,Hn()}),onMouseenter:i[70]||(i[70]=e=>q.value.style.showTooltips&&Q(`setItalic`,e,`top`)),onMouseleave:$,onFocus:i[71]||(i[71]=e=>q.value.style.showTooltips&&Q(`setItalic`,e,`top`)),onBlur:$},[i[109]||(i[109]=_(`svg`,{width:`100%`,height:`44`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M11 5l6 0`}),_(`path`,{d:`M7 19l6 0`}),_(`path`,{d:`M14 5l-4 14`})],-1)),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setItalic`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeTextItalic),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),N.value?(d(),h(`div`,ut,[_(`button`,{class:a({"button-tool":!0,"button-tool--selected":P.value,tooltip:!0}),style:r({background:P.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:P.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:P.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:i[72]||(i[72]=e=>{E.value=!1,k.value=!1,A.value=!1,D.value=!1,j.value=!1,b.value=void 0,P.value=!P.value,Hn()}),onMouseenter:i[73]||(i[73]=e=>q.value.style.showTooltips&&Q(`setUnderline`,e,`top`)),onMouseleave:$,onFocus:i[74]||(i[74]=e=>q.value.style.showTooltips&&Q(`setUnderline`,e,`top`)),onBlur:$},[i[110]||(i[110]=_(`svg`,{width:`100%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[_(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),_(`path`,{d:`M7 5v5a5 5 0 0 0 10 0v-5`}),_(`path`,{d:`M5 19h14`})],-1)),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setUnderline`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeTextUnderline),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),_(`div`,dt,[_(`button`,{class:a({"button-tool":!0,tooltip:!0}),style:{borderRadius:`6px`},onMouseenter:i[76]||(i[76]=e=>q.value.style.showTooltips&&Q(`setColor`,e,`top`)),onMouseleave:$,onFocus:i[77]||(i[77]=e=>q.value.style.showTooltips&&Q(`setColor`,e,`top`)),onBlur:$},[s(me,{value:Ft.value,"onUpdate:value":i[75]||(i[75]=e=>Ft.value=e),backgroundColor:q.value.style.backgroundColor,buttonBorderColor:q.value.style.color,isCursorPointer:J.value,teleported:``},null,8,[`value`,`backgroundColor`,`buttonBorderColor`,`isCursorPointer`])],32),q.value.style.showTooltips?(d(),l(y,{key:0,show:U.value&&W.value===`setColor`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[n(f(q.value.translations.tooltipShapeColor),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)]),_(`div`,ft,[_(`label`,pt,[n(f(q.value.translations.colorAlpha)+`: `+f(Vt.value>98?100:Vt.value)+` % `,1),re(_(`input`,{name:`colorTransparency`,type:`range`,"onUpdate:modelValue":i[78]||(i[78]=e=>Vt.value=e),onInput:Bn,min:0,max:100,style:r({width:`100%`,accentColor:q.value.style.color+` !important`})},null,36),[[oe,Vt.value]])])])])]),_:1},8,[`config`])]),_(`div`,{class:`annotator annotator__wrapper`,ref_key:`drawSvgContainer`,ref:Nn,style:{position:`relative`},id:St.value,"data-annotator-content":``},[_(`div`,{class:`annotator__content-layer`,style:r(`${M.value?`pointer-events: none;`:``}`)},[c(e.$slots,`default`,{},void 0,!0)],4),M.value||q.value.alwaysVisible?(d(),h(`svg`,{id:`annotatorSvg`,key:Mt.value,ref_key:`mainSvg`,ref:X,class:a({annotator__overlay:!0,draw:!0,"draw--free":b.value===`line`}),viewBox:`0 0 ${Pt.value} ${Nt.value}`,width:Rt.value,height:zt.value,onPointerdown:i[83]||(i[83]=e=>Dn(e)),onPointerup:i[84]||(i[84]=e=>In(e)),onTouchend:i[85]||(i[85]=e=>In(e)),onTouchstart:i[86]||(i[86]=e=>{Un(e),_n(e)}),onPointermove:i[87]||(i[87]=e=>{Un(e),jn(e)}),onPointerout:i[88]||(i[88]=e=>Tn(e)),onPointerover:i[89]||(i[89]=e=>hn(e)),onClick:i[90]||(i[90]=e=>_n(e)),style:r({position:`absolute`,top:0,left:0,cursor:Qt.value,fontFamily:`Helvetica`,zIndex:1e8,pointerEvents:M.value?`all`:`none`})},[_(`rect`,{class:`annotator__glass`,x:`0`,y:`0`,width:Pt.value,height:Nt.value,fill:`transparent`,"pointer-events":M.value?`all`:`none`,style:{cursor:`inherit`},onPointerdown:i[79]||(i[79]=ie(e=>Dn(e),[`stop`,`prevent`])),onPointermove:i[80]||(i[80]=ie(e=>{Un(e),jn(e)},[`stop`,`prevent`])),onPointerup:ie(In,[`stop`,`prevent`]),onClick:i[81]||(i[81]=ie(()=>{},[`stop`,`prevent`]))},null,40,gt),(d(!0),h(ne,null,ee(an.value,e=>(d(),h(`g`,{key:e.id,innerHTML:e.html,onClick:i[82]||(i[82]=e=>{Mn(e),k.value=!1})},null,8,_t))),128))],46,ht)):t(``,!0),At.value||o(Ct)?(d(),h(`svg`,{key:1,style:{position:`absolute`,top:`0`,left:`0`},height:zt.value,viewBox:`0 0 ${Pt.value} ${Nt.value}`,width:Rt.value,"data-dom-to-png-ignore":``},[_(`circle`,{class:`animated-circle-print`,cx:Pt.value/2,cy:Nt.value/2,r:`50`,stroke:`#6376DD`,"stroke-width":`10`,fill:`none`},null,8,yt)],8,vt)):t(``,!0)],8,mt)]))}},[[`__scopeId`,`data-v-e358ad32`]]);export{xt as default};