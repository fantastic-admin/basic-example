
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t,Ct as n,Tt as r,bt as i}from"./reactivity.esm-bundler-D9OPVc9J.js";import{D as a,E as o,Ht as s,Yt as c,_ as l,b as u,bt as d,ct as ee,g as f,it as te,mt as p,o as ne,qt as m,tt as re,u as ie,v as h,xt as ae,y as g}from"./runtime-core.esm-bundler-D-xeQwTN.js";import{_ as oe,w as se,x as ce}from"./runtime-dom.esm-bundler-Dnva3vcP.js";import{t as le}from"./preload-helper-HclGiUj8.js";import{J as ue,_t as de,l as fe,zt as pe}from"./lib-C-QGo8GG-CvPpiVvZ.js";import{t as me}from"./rolldown-runtime-Dy4uBu1J-DK3Fl9T5.js";import{t as he}from"./useConfig-C0V0eG7L-BW30Wel-.js";import{t as ge}from"./usePrinter-C5ordS-4-QRLR1mCn.js";import{t as _e}from"./_plugin-vue_export-helper-B3ysoDQm-BDNMzG2s.js";import{t as ve}from"./dom-to-png-BbPRUKX6-CWMLafQI.js";import{n as _}from"./BaseIcon-DJbOzCDs-C4GBSsnJ.js";import{t as ye}from"./vue-ui-accordion-FimGHtuy-DQyQAXDa.js";import{t as be}from"./ColorPicker-BVWrKEQl-C_INKzkI.js";function xe(e){let t=t=>e.isMacLike.value?t.metaKey:t.ctrlKey,n=e=>{let t=e;if(!t)return!1;let n=(t.tagName||``).toLowerCase();return t.isContentEditable||n===`input`||n===`textarea`||n===`select`},r=t=>!!(!e.isSummaryOpen.value||n(t.target)||e.isWriting.value),i=()=>{e.isDeleteMode.value=!1,e.isMoveMode.value=!1,e.isResizeMode.value=!1,e.isSelectMode.value=!1,e.isDrawMode.value=!1,e.isTextMode.value=!1,e.activeShape.value=void 0,e.showCaret.value=!1},a=t=>{switch(i(),t){case`m`:e.isMoveMode.value=!0;break;case`r`:e.isResizeMode.value=!0;break;case`d`:e.isDeleteMode.value=!0;break;case`g`:e.isSelectMode.value=!0,e.setShapeTo(`group`),e.activeShape.value=`group`;break;case`t`:e.isTextMode.value=!0,e.isWriting.value=!1,e.showCaret.value=!1}},o=t=>{switch(t){case`c`:e.setShapeTo(`circle`);break;case`s`:e.setShapeTo(`rect`);break;case`a`:e.setShapeTo(`arrow`);break;case`l`:e.setShapeTo(`line`)}},s=(t,n)=>{let r=e.lastSelectedShape.value;if(!r)return;let i=(e,t)=>{typeof r[e]==`number`&&(r[e]+=t)};switch(r.type){case`rect`:case`circle`:case`text`:i(`x`,t),i(`y`,n);break;case`arrow`:i(`x`,t),i(`y`,n),i(`endX`,t),i(`endY`,n)}},c=()=>{let t=e.lastSelectedShape.value;t&&(e.shapes.value=e.shapes.value.filter(e=>e.id!==t.id),e.lastSelectedShape.value=void 0)},l=!1,u=null,d=()=>{l||(l=!0,e.history?.value?.begin?.(`nudge`))},ee=()=>{l&&(clearTimeout(u),u=setTimeout(()=>{l=!1,e.history?.value?.end?.()},160))},f=()=>{clearTimeout(u),l&&e.history?.value?.end?.(),l=!1},te=n=>{if(t(n)&&!n.shiftKey&&n.key.toLowerCase()===`z`){if(r(n))return;n.preventDefault(),e.undoLastShape?.();return}if(t(n)&&n.shiftKey&&n.key.toLowerCase()===`z`||t(n)&&n.key.toLowerCase()===`y`){if(r(n))return;n.preventDefault(),typeof e.redoLastShape==`function`?e.redoLastShape():e.history?.value?.redo?.();return}if(r(n))return;let l=n.key.toLowerCase();if(l===`escape`){n.preventDefault(),i();return}if(l===`delete`||l===`backspace`){n.preventDefault(),c();return}if([`m`,`r`,`d`,`g`,`t`].includes(l)){n.preventDefault(),a(l);return}if([`c`,`a`,`l`,`s`].includes(l)){n.preventDefault(),o(l);return}if(n.key===`ArrowUp`||n.key===`ArrowDown`||n.key===`ArrowLeft`||n.key===`ArrowRight`){n.preventDefault(),d();let e=n.shiftKey?10:1;n.key===`ArrowUp`&&s(0,-e),n.key===`ArrowDown`&&s(0,e),n.key===`ArrowLeft`&&s(-e,0),n.key===`ArrowRight`&&s(e,0),ee()}},p=e=>{e.key.startsWith(`Arrow`)&&ee()};return window.addEventListener(`keydown`,te),window.addEventListener(`keyup`,p),function(){window.removeEventListener(`keydown`,te),window.removeEventListener(`keyup`,p),f()}}var Se={class:`teleport-tooltip__inner`},v=_e({__name:`TeleportedTooltip`,props:{show:{type:Boolean,default:!1},x:{type:Number,required:!0},y:{type:Number,required:!0},placement:{type:String,default:`top`},styleObject:{type:Object,default(){return{}}},delay:{type:Number,default:0},delayIn:{type:Number,default:300},delayOut:{type:Number,default:0}},setup(e){let r=e,a=f(()=>r.delayIn??r.delay),o=f(()=>r.delayOut??r.delay),c=t(!1),d=null,ne=null;function m(){d&&(d=(clearTimeout(d),null)),ne&&(ne=(clearTimeout(ne),null))}function re(){m();let e=Math.max(0,a.value||0);e===0?c.value=!0:d=setTimeout(()=>{c.value=!0,d=null},e)}function oe(){m();let e=Math.max(0,o.value||0);e===0?c.value=!1:ne=setTimeout(()=>{c.value=!1,ne=null},e)}s(()=>r.show,e=>{e?re():oe()},{immediate:!0}),ee(()=>{r.show&&re()}),te(()=>{m()});let se=f(()=>({position:`fixed`,zIndex:2147483647,top:`${r.y}px`,left:`${r.x}px`,transform:r.placement===`bottom`?`translate(-50%, 8px)`:`translate(-50%, -100%)`,pointerEvents:`none`,...r.styleObject}));return(t,r)=>(p(),h(ie,{to:`body`},[c.value?(p(),u(`div`,{key:0,class:i([`teleport-tooltip`,e.placement]),style:n(se.value),role:`tooltip`,"aria-hidden":`false`},[l(`div`,Se,[ae(t.$slots,`default`,{},void 0,!0)])],6)):g(``,!0)]))}},[[`__scopeId`,`data-v-c292996f`]]),Ce=me({default:()=>wt}),we={class:`vue-data-ui-component vue-ui-annotator`},Te={"data-dom-to-png-ignore":``},Ee=[`disabled`],De=[`disabled`],Oe=[`disabled`],ke=[`disabled`],Ae=[`disabled`],je=[`disabled`],Me=[`disabled`],Ne=[`disabled`],Pe=[`disabled`],Fe={class:`tool-selection`,style:{"margin-top":`6px`}},Ie={viewBox:`0 0 12 12`,style:{width:`100%`}},Le=[`fill`],Re={key:0},ze={class:`tool-input`},Be=[`checked`],Ve={viewBox:`0 0 12 12`,style:{width:`100%`}},He=[`fill`],Ue={key:1},We={class:`tool-input`},Ge=[`checked`],Ke={viewBox:`0 0 24 24`,style:{width:`100%`}},qe=[`stroke`],Je={key:2},Ye={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`}},Xe={class:`tool-input`},Ze={key:3},Qe={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`}},$e={class:`tool-input`},et={viewBox:`0 0 24 24`,height:`24`,width:`24`,style:{"margin-bottom":`-5px`,"margin-top":`-10px`}},tt=[`checked`],nt={key:4},rt={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`}},it={class:`tool-input`},at={key:5},ot={key:6},st=[`disabled`],ct={key:7},lt=[`disabled`],ut={key:8},dt={key:9},ft={key:10},pt={key:11},mt={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`},class:`tooltip`},ht={style:{display:`flex`,"flex-direction":`column`,"align-items":`start`,"justify-content":`center`}},gt={class:`tool-input`,style:{"font-variant-numeric":`tabular-nums`}},_t=[`id`],vt=[`viewBox`,`width`,`height`],yt=[`width`,`height`,`pointer-events`],bt=[`innerHTML`],xt=[`height`,`viewBox`,`width`],St=[`cx`,`cy`],Ct=`annotations`,wt=_e({__name:`vue-ui-annotator`,props:{config:{type:Object,default(){return{}}},dataset:{type:Object,default(){return{shapes:[],lastSelectedShape:void 0}}}},emits:[`toggleOpenState`,`saveAnnotations`],setup(ie,{emit:me}){let _e=ie,Se=me,Ce=t(ue()),{isImaging:wt,generateImage:Tt}=ge({elementId:Ce.value,fileName:Ct}),y=t(void 0),Et=t(1),b=t({start:{x:0,y:0},end:{x:0,y:0}}),x=t(void 0),S=t(void 0),C=t(!1),w=t(!1),Dt=t(!1),T=t(!1),Ot=t(!1),kt=t(!0),E=t(!1),D=t(!1),At=t(!1),O=t(!1),jt=t(!1),k=t(!1),A=t(!1),j=t(!1),M=t(!1),Mt=t(!1),N=t(!1),P=t(_e.dataset?.lastSelectedShape??void 0),F=t({x:0,y:0}),Nt=t(!0),I=t([]),L=t(_e.dataset?.shapes||[]);t([]);let Pt=t(Math.round(Math.random())*1e5),Ft=t(1e3),It=t(1e3),R=t({arrow:{color:`grey`,filled:!0},circle:{color:`grey`,filled:!1,radius:3,strokeWidth:2},rect:{color:`grey`,filled:!1,strokeWidth:2,height:12,width:12}}),z=t(`#1A1A1A`),B=t(!1),Lt=t(1),Rt=t(void 0),zt=t(1),Bt=t(1),V=t(`start`),Vt=t(20),Ht=t(100),Ut=pe,H=t(null),U=t(!1),W=t(null),G=t({x:0,y:0}),Wt=t(null),K=t([]),Gt=t(!1),Kt=t(null),qt=t({undo:0,redo:0}),Jt=t(null);t(null),t(null);let Yt=t(null),q=f(()=>{let e=he().vue_ui_annotator;return Object.keys(_e.config||{}).length?fe(de({defaultConfig:e,userConfig:_e.config})):e}),J=f(()=>q.value.useCursorPointer),Y=f(()=>{let e=q.value.style.tooltips;return{backgroundColor:e.backgroundColor,color:e.color,border:e.border,borderRadius:`${e.borderRadius}px`,boxShadow:e.boxShadow}}),Xt=f(()=>L.value.filter(e=>![`line`,`group`].includes(e.type)).length>1),Zt=f(()=>Ut[Ht.value>98?98:Ht.value]),Qt=f(()=>{switch(!0){case T.value:return`default`;case O.value:return`move`;case M.value:return`text`;case k.value:return`se-resize`;default:return``}}),$t=f(()=>L.value),X=t(null);function en(e){if(e)switch(!0){case e.type===`rect`:return`
                <rect
                id="${e.id}" 
                style="stroke-dasharray: 10; display:${S.value&&S.value===e.id?`initial`:`none`}"
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
                style="stroke-dasharray: 10; display:${S.value&&S.value===e.id?`initial`:`none`}"
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
                style="stroke-dasharray: 10; display:${S.value&&S.value===e.id?`initial`:`none`}"
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
                style="stroke-dasharray: 10; display:${S.value&&S.value===e.id?`initial`:`none`}"
                x="${i-20}"
                y="${a-20}"
                height="${s+40}"
                width="${o+40}"
                fill="transparent"
                stroke="grey"
                />
            `;default:return``}}function tn(e,t=!1){switch(!0){case e.type===`circle`:return`
                <g id="${e.id}" style="display:${T.value?`initial`:`none`};">
                    <circle id="${e.id}" cx="${e.x}" cy="${e.y}" r="12" fill="red"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x-4}" y1="${e.y-4}" x2="${e.x+4}" y2="${e.y+4}"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x+4}" y1="${e.y-4}" x2="${e.x-4}" y2="${e.y+4}"/>
                </g>
            `;case e.type===`text`:let n,r=[-8,-12,-4,-12,-4];switch(!0){case e.textAlign===`start`:n=t?[-20,-24,-16,-16,-24]:[-16,-20,-12,-12,-20];break;case e.textAlign===`middle`:n=[0,-4,4,4,-4],r=[-32,-36,-28,-36,-28];break;case e.textAlign===`end`:n=[16,20,12,12,20];break;default:n=[0,0,0]}return`
                <g id="${e.id}" style="display:${T.value?`initial`:`none`};">
                    <circle id="${e.id}" cx="${e.x+n[0]}" cy="${e.y+r[0]}" r="12" fill="red"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x+n[1]}" y1="${e.y+r[1]}" x2="${e.x+n[2]}" y2="${e.y+r[2]}"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x+n[3]}" y1="${e.y+r[3]}" x2="${e.x+n[4]}" y2="${e.y+r[4]}"/>
                </g>
            `;default:return`
                <g id="${e.id}" style="display:${T.value?`initial`:`none`};">
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
                ${B.value&&P.value&&P.value.id===e.id?nn(e):``}
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
                ${B.value&&P.value&&P.value.id===e.id?nn(e):``}
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
                ${B.value&&P.value&&P.value.id===e.id?nn(e):``}
                ${tn(e)}
            </g> 
            `;default:return``}}let an=f(()=>$t.value.map(e=>{switch(!0){case e&&e.type===`arrow`:let t=e.strokeWidth>3?5:10,n=e.strokeWidth>3?2.5:5;return{html:`
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
                style="rx:1 !important; ry:1 !important; ${e.isDash?`stroke-dasharray: ${e.strokeWidth*3}`:``}; display:${A.value||T.value||S.value&&S.value===e.id?`initial`:`none`};"
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
            `,id:e.id}}}));function Z(e){if(e==null)return e;try{return typeof structuredClone==`function`?structuredClone(e):JSON.parse(JSON.stringify(e))}catch{return Array.isArray(e)?e.map(e=>Z(e)):typeof e==`object`?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Z(t)])):e}}function on(e=!1){if(!y.value||!Ot.value)return;b.value.end={x:F.value.x,y:F.value.y};let t;L.value.length>0&&x.value&&(t=[...L.value].find(e=>e.id===x.value.id));let n,r,i;t&&(n=t.x-b.value.end.x,r=t.y-b.value.end.y,i=Math.sqrt(n*n+r*r));let a,o;switch(e?(a=Math.max(b.value.end.x,t.x),o=Math.min(b.value.end.x,t.x),Math.max(b.value.end.y,t.y),Math.min(b.value.end.y,t.y)):(a=Math.max(b.value.end.x,b.value.start.x),o=Math.min(b.value.end.x,b.value.start.x),Math.max(b.value.end.y,b.value.start.y),Math.min(b.value.end.y,b.value.start.y)),!0){case y.value===`arrow`:L.value.at(-1).endX=b.value.end.x,L.value.at(-1).endY=b.value.end.y;break;case y.value===`circle`:L.value.at(-1).circleRadius=kt.value?Z(a-o)+20:i+20;break;case y.value===`line`:L.value.at(-1).path+=` ${F.value.x} ${F.value.y} `;break;case[`rect`,`group`].includes(y.value):L.value.at(-1).rectWidth=Z(b.value.end.x-L.value.at(-1).x)>0?Z(b.value.end.x-L.value.at(-1).x):20,L.value.at(-1).rectHeight=Z(b.value.end.y-L.value.at(-1).y)>0?Z(b.value.end.y-L.value.at(-1).y):20}}function sn(){if(!Ot.value){Jt.value=null;return}on(),Jt.value=requestAnimationFrame(sn)}function cn(e){let t=L.value.findIndex(t=>t.id===e);if(t>-1&&t!==L.value.length-1){let[e]=L.value.splice(t,1);L.value.push(e)}}function ln(e){let t=e=>!!e&&L.value.some(t=>t.id===e);if(t(e?.target?.id))return e.target.id;let n=X.value?.querySelector(`.annotator__glass`);if(!n)return null;let r=n.style.pointerEvents;n.style.pointerEvents=`none`;let i=document.elementFromPoint(e.clientX,e.clientY);return n.style.pointerEvents=r||`all`,t(i?.id)?i.id:null}function un(e={}){let{maxEntries:t=200,maxBytes:n=2e6}=e,r={open:!1,before:null,undo:[],redo:[]},i={undo:0,redo:0},a=e=>typeof e==`string`?e.length*2:0,o=()=>JSON.stringify({shapes:Z(L.value),lastSelectedShape:Z(P.value)}),s=e=>{let t=JSON.parse(e);L.value=t.shapes,P.value=t.lastSelectedShape},c=()=>{qt.value.undo=r.undo.length,qt.value.redo=r.redo.length},l=(e,o)=>{let s=r[e];for(s.push(o),i[e]+=a(o);s.length>t||i[e]>n;){let t=s.shift();i[e]-=a(t)}};return{begin(){r.open||(r.open=!0,r.before=o())},end(){r.open&&(r.open=!1,o()!==r.before&&(l(`undo`,r.before),r.redo.length=0,i.redo=0),r.before=null,c())},undo(){let e=r.undo.pop();if(!e)return;i.undo-=a(e);let t=o();l(`redo`,t),s(e),c()},redo(){let e=r.redo.pop();if(!e)return;i.redo-=a(e);let t=o();l(`undo`,t),s(e),c()},size(){return{undo:r.undo.length,redo:r.redo.length,approxBytes:{undo:i.undo,redo:i.redo}}}}}function dn(){if(!Wt.value)return;let e=Wt.value.getBoundingClientRect();G.value={x:e.left+e.width/2,y:e.top}}function Q(e,t,n=`top`){W.value=e,Wt.value=t.currentTarget||t.target,dn(),U.value=!0,window.addEventListener(`scroll`,dn,!0),window.addEventListener(`resize`,dn,{passive:!0})}function $(){U.value=!1,W.value=null,Wt.value=null,window.removeEventListener(`scroll`,dn,!0),window.removeEventListener(`resize`,dn)}function fn(e){let t=e?.target&&e.target.id||x.value&&x.value.id,n=L.value.find(e=>e.id===t);if(!n){H.value=null;return}P.value=n;let r=F.value.x,i=F.value.y;switch(n.type){case`rect`:case`circle`:case`text`:H.value={dx:r-n.x,dy:i-n.y};break;case`arrow`:H.value={dx:r-n.x,dy:i-n.y,endDx:r-n.endX,endDy:i-n.endY};break;case`group`:H.value={dx:r-(n.x||0),dy:i-(n.y||0)};break;default:H.value={dx:0,dy:0}}}function pn(e){let t=L.value.find(e=>e.id===P.value.id);switch(!0){case e===`front`:L.value=L.value.filter(e=>e.id!==t.id),L.value.push(t);break;case e===`back`:L.value=L.value.filter(e=>e.id!==t.id),L.value=[t,...L.value];break;default:return}}function mn(){if(!P.value?.id)return;let e={...P.value,id:`${P.value.id}_copy_${ue()}`,x:P.value.x-100<0?1:P.value.x-100,y:P.value.y-100<0?1:P.value.y-100};L.value.push(e)}function hn(e){e.preventDefault(),Nt.value=!1,e.target&&e.target.id&&(S.value=e.target.id)}function gn(){!P.value||!P.value.id.includes(`text`)||P.value.textContent===``&&(L.value=L.value.filter(e=>e.id!==P.value.id),P.value=L.value.at(-1))}function _n(e){if(T.value)return;e.preventDefault(),e.stopPropagation(),gn(),M.value?(N.value=!0,B.value=!0):(N.value=!1,B.value=!1,M.value=!1);let t=`text_${ue()}`;if(N.value){K.value?.begin(),L.value.push({id:t,type:`text`,lines:0,x:F.value.x,y:F.value.y,textContent:``,fontSize:Z(Vt.value),textAlign:Z(V.value),isBold:Z(C.value),isItalic:Z(D.value),isUnderline:Z(Mt.value),color:Z(z.value),isBulletTextMode:Z(w.value)}),x.value=L.value.at(-1),P.value=L.value.at(-1),K.value?.end();return}let n=()=>{Dt.value=L.value.find(t=>t.id===e.target.id).isDash},r=()=>{Et.value=L.value.find(t=>t.id===e.target.id).strokeWidth};if(A.value=!1,e.target.id.includes(`arrow`)){y.value=`arrow`,n(),r();return}if(e.target.id.includes(`circle`)){y.value=`circle`,R.value.circle.filled=L.value.find(t=>t.id===e.target.id).isFilled,n(),r();return}if(e.target.id.includes(`rect`)){y.value=`rect`,R.value.rect.filled=L.value.find(t=>t.id===e.target.id).isFilled,n(),r();return}if(e.target.id.includes(`line`)){y.value=`line`,r();return}if(e.target.id.includes(`text`)){M.value=!0,N.value=!0,B.value=!0;let t=L.value.find(t=>t.id===e.target.id);t&&t.textAlign&&(V.value=L.value.find(t=>t.id===e.target.id).textAlign),t&&(w.value=L.value.find(t=>t.id===e.target.id).isBulletTextMode);return}}function vn(e){!P.value||P.value.type!==`text`||(P.value.textAlign=e)}function yn(){K.value?.undo?.()}function bn(){K.value?.redo?.()}let xn=[16,17,18,20,27,33,34,35,36,37,38,39,40,45,91,112,113,114,115,116,117,118,119,120,121,122,123,221,255,`Unidentified`];function Sn(e){if(Nt.value)return;e.preventDefault();let t=e.keyCode;if(!N.value)return;B.value=!0;let n;if(n=P.value.type===`text`?L.value.find(e=>e.id===P.value.id):L.value.at(-1),x.value=n,n.type===`text`)switch(x.value.isBold=Z(C.value),x.value.isItalic=Z(D.value),x.value.isUnderline=Z(Mt.value),!0){case[8,46].includes(t):n.textContent=n.textContent.slice(0,-1);break;case t===9:n.textContent+=`&nbsp; &nbsp; &nbsp; &nbsp;`;break;case t===13:n.lines+=1,n.textContent+=`‎`;return;case xn.includes(t):return;default:n.textContent+=e.key}}function Cn(){if(I.value=[],y.value!==`group`){A.value=!1,L.value=L.value.filter(e=>e.type!==`group`);return}let e=L.value.at(-1);if(L.value.forEach(t=>{if(t.type!==`group`)switch(!0){case t.type===`arrow`:let n=t.x<=t.endX&&t.y<=t.endY&&e.x<=t.x&&e.y<=t.y&&e.x+e.rectWidth>=t.endX&&e.y+e.rectHeight>=t.endY,r=t.endY<t.y&&t.x<t.endX&&e.x<=t.x&&e.y<=t.y&&e.x+e.rectWidth>=t.endX&&e.y+e.rectHeight>=t.y,i=t.x>t.endX&&t.y<t.endY&&e.x<=t.endX&&e.y<=t.endY&&e.x+e.rectWidth>=t.x&&e.y+e.rectHeight>=t.endY,a=t.x>t.endX&&t.y>t.endY&&e.x<=t.endX&&e.y<=t.endY&&e.x+e.rectWidth>=t.x&&e.y+e.rectHeight>=t.y;(n||r||i||a)&&I.value.push(t);break;case t.type===`circle`:e.x<=t.x+t.circleRadius&&e.y<=t.y+t.circleRadius&&t.x+t.circleRadius<=e.x+e.rectWidth&&t.y+t.circleRadius<=e.y+e.rectHeight&&I.value.push(t);break;case t.type===`rect`:e.x<=t.x&&e.y<=t.y&&t.x<=e.x+e.rectWidth&&t.y<=e.y+e.rectHeight&&t.x+t.rectWidth<=e.x+e.rectWidth&&t.y+t.rectHeight<=e.y+e.rectHeight&&t.rectWidth<=e.rectWidth&&t.rectHeight<=e.rectHeight&&I.value.push(t);break;case t.type===`text`:e.x<=t.x&&e.y<=t.y&&I.value.push(t);break;default:break}}),I.value=I.value.map(t=>({...t,id:e.id,oldId:t.id,diffX:t.x-e.x,diffY:t.y-e.y,diffEndX:t.endX?t.endX-e.x:0,diffEndY:t.endY?t.endY-e.y:0})),e.source=I.value,I.value.length>1){let t=Z(I.value).map(e=>e.oldId);L.value=L.value.filter(e=>!t.includes(e.id)),I.value.forEach(t=>{switch(!0){case t.type===`circle`:e.content+=`
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
        `;break;case t.type===`arrow`:let n=t.strokeWidth>3?5:10,r=t.strokeWidth>3?2.5:5,i=ue();e.content+=`
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
            `}})}else L.value=L.value.filter(t=>t.id!==e.id)}function wn(e){e.content=``;let t=e.x||0,n=e.y||0;(e.source||[]).forEach(r=>{switch(r.type){case`circle`:{let i=t+r.diffX,a=n+r.diffY;e.content+=`
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
        `;break}case`arrow`:{let i=t+r.diffX,a=n+r.diffY,o=t+r.diffEndX,s=n+r.diffEndY,c=r.strokeWidth>3?5:10,l=r.strokeWidth>3?2.5:5,u=`m_${r.id}_${ue()}`;e.content+=`
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
        `;break}}})}function Tn(e){e.relatedTarget&&X.value&&X.value.contains(e.relatedTarget)||(Nt.value=!0,S.value=void 0)}function En(){if(Ot.value=!0,!y.value&&!A.value||!Ot.value)return;kt.value=!0,b.value.start={x:F.value.x,y:F.value.y};let e=`${A.value?`group`:y.value}_${ue()}`;switch(!0){case y.value===`arrow`:L.value.push({id:e,x:F.value.x,y:F.value.y,endX:F.value.x,endY:F.value.y,type:y.value,color:Z(z.value),strokeWidth:Z(Math.abs(Et.value)),isDash:Z(Dt.value)}),P.value=L.value.at(-1);break;case y.value===`circle`:L.value.push({alpha:R.value.circle.filled?Zt.value:``,id:e,color:Z(z.value),isFilled:Z(R.value.circle.filled),circleRadius:Z(R.value.circle.radius),circleStrokeWidth:Z(R.value.circle.strokeWidth),type:y.value,x:F.value.x,y:F.value.y,strokeWidth:Z(Math.abs(Et.value)),isDash:Z(Dt.value)}),P.value=L.value.at(-1);break;case y.value===`line`:L.value.push({alpha:Z(Zt.value),id:e,x:F.value.x,y:F.value.y,type:y.value,color:Z(z.value),strokeWidth:Z(Math.abs(Et.value)),isDash:Z(Dt.value),path:`${F.value.x} ${F.value.y}`}),P.value=L.value.at(-1);break;case y.value===`rect`:L.value.push({alpha:R.value.rect.filled?Zt.value:``,id:e,color:Z(z.value),isFilled:Z(R.value.rect.filled),rectStrokeWidth:Z(R.value.rect.strokeWidth),rectHeight:Z(R.value.rect.height),rectWidth:Z(R.value.rect.width),type:y.value,x:F.value.x,y:F.value.y,strokeWidth:Z(Math.abs(Et.value)),isDash:Z(Dt.value)}),P.value=L.value.at(-1);break;case y.value===`group`:L.value.push({alpha:1,id:`group_${ue()}`,x:F.value.x,y:F.value.y,isFilled:!1,rectHeight:Z(R.value.rect.height),rectWidth:Z(R.value.rect.width),rectStrokeWidth:1,type:`group`,color:`grey`,strokeWidth:1,isDash:!0,content:``})}Jt.value||(Jt.value=requestAnimationFrame(sn))}function Dn(e){if(T.value){At.value=!1;return}if(e.preventDefault(),e.stopPropagation(),At.value=!0,e.pointerId!=null){try{X.value?.setPointerCapture?.(e.pointerId)}catch{}Yt.value=e.pointerId}else Yt.value=null;if((E.value||O.value||k.value||A.value)&&K.value?.begin?.(),E.value){En();return}if(O.value){let t=ln(e)||S.value||P.value?.id;t&&(cn(t),x.value={id:t}),fn(e)}}function On(e){if(!e||!e.id||e.type===`line`||!H.value&&(fn({target:{id:e.id}}),!H.value))return;let{dx:t,dy:n,endDx:r,endDy:i}=H.value,a=F.value.x,o=F.value.y;switch(P.value=e,e.type){case`arrow`:e.x=a-t,e.y=o-n,e.endX=a-(r??t),e.endY=o-(i??n);break;case`circle`:e.x=a-t,e.y=o-n;break;case`rect`:e.x=a-t,e.y=o-n;break;case`text`:e.x=a-t,e.y=o-n;break;case`group`:e.x=a-t,e.y=o-n,wn(e)}}function kn(){let e=x.value?.id||S.value;if(!e)return;let t=L.value.find(t=>t.id===e);t&&On(t)}function An(){kt.value=!1;let e=x.value.id;if(!e)return;Ot.value=!0;let t=L.value.find(t=>t.id===e);y.value=t.type,L.value=L.value.filter(t=>t.id!==e),L.value.push(t),on(!0)}function jn(e){T.value||(e.preventDefault(),e.stopPropagation(),e.target.localName!==`svg`&&(x.value=e.target),O.value&&At.value?kn():k.value&&At.value&&An())}function Mn(e){let t=e.target.id;switch(!0){case T.value:K.value?.begin(),L.value=[...L.value].filter(e=>e.id!==t),P.value=void 0,K.value?.end();return;default:P.value=L.value.find(e=>e.id===t)}}let Nn=t(null);function Pn(e,t){for(t(e),e=e.firstChild;e;)Pn(e,t),e=e.nextSibling}function Fn(){jt.value=!0,T.value=!1,O.value=!1,k.value=!1,M.value=!1,N.value=!1,A.value=!1,y.value=void 0,B.value=!1,re(async()=>{let e=Nn.value;if(e){Pn(e,e=>{e&&e.nodeType===1&&(e.setAttribute(`font-family`,`Helvetica`),e.style.fontFamily=`Helvetica`)});try{let t;try{t=(await le(async()=>{let{default:e}=await import(`./__vite-optional-peer-dep_jspdf_vue-data-ui-t5dhqR-O.js`);return{default:e}},[],import.meta.url)).default}catch{throw Error(`jspdf is not installed. Run npm install jspdf`)}let n=await ve({container:e,scale:2}),r=new Image;r.src=n,r.onload=()=>{let e={width:595.28,height:841.89},i=r.width,a=r.height,o=i/e.width*e.height,s=e.width,c=s/i*a,l=new t(``,`pt`,`a4`),u=0,d=a;if(d<o)l.addImage(n,`PNG`,0,0,s,c,``,`FAST`);else for(;d>0;)l.addImage(n,`PNG`,0,u,s,c,``,`FAST`),d-=o,u-=e.height,d>0&&l.addPage();l.save(`${new Date().toLocaleDateString()}_annotations.pdf`)}}catch(e){console.error(`Error generating image:`,e)}finally{jt.value=!1,Pn(e,e=>{e&&e.nodeType===1&&(e.setAttribute(`font-family`,q.value.style.fontFamily),e.style.fontFamily=q.value.style.fontFamily)})}}})}function In(e){if(!T.value&&e&&(e.preventDefault(),e.stopPropagation()),Ot.value=!1,At.value=!1,H.value=null,Yt.value!=null){try{X.value?.releasePointerCapture?.(Yt.value)}catch{}Yt.value=null}Jt.value&&(Jt.value=(cancelAnimationFrame(Jt.value),null)),A.value&&Cn(),K.value?.end()}function Ln(){!P.value||!P.value.id.includes(`rect`)||(P.value.isFilled=!P.value.isFilled)}function Rn(){!P.value||!P.value.id.includes(`circle`)||(P.value.isFilled=!P.value.isFilled)}function zn(){!P.value||P.value.type===`text`||(P.value.isDash=Z(Dt.value))}function Bn(){!P.value||[`arrow`,`text`].includes(P.value.id)||(P.value.alpha=Z(Zt.value))}function Vn(){!P.value||![`arrow`,`circle`,`rect`,`line`].includes(P.value.type)||(P.value.strokeWidth=Z(Math.abs(Et.value)))}function Hn(){!P.value||P.value.type!==`text`||(P.value.isBold=Z(C.value),P.value.isItalic=Z(D.value),P.value.isUnderline=Z(Mt.value),P.value.fontSize=Z(Vt.value),P.value.isBulletTextMode=Z(w.value))}function Un(e){if(e.preventDefault(),!X.value)return;let t=X.value.getBoundingClientRect(),n,r;e.touches&&e.touches.length>0?(n=e.touches[0].clientX,r=e.touches[0].clientY):(n=e.clientX,r=e.clientY),F.value.x=(n-t.left)/t.width*It.value,F.value.y=(r-t.top)/t.height*Ft.value}function Wn(e){if(B.value=!1,gn(),e===y.value){y.value=void 0,E.value=!1;return}E.value=!0,T.value=!1,O.value=!1,k.value=!1,M.value=!1,y.value=e}function Gn(){j.value=!j.value,j.value||(O.value=!1,k.value=!1,M.value=!1,N.value=!1,y.value=void 0,B.value=!1,T.value=!1,N.value=!1),Se(`toggleOpenState`,{isOpen:j.value})}function Kn(){Se(`saveAnnotations`,{shapes:L.value,lastSelectedShape:P.value})}let qn=null;return ee(()=>{if(Nn.value){let e=!1;Pn(Nn.value,t=>{if(!e&&[`DIV`,`svg`,`section`,`canvas`].includes(t.tagName)){Rt.value=t,e=!0;return}})}Gt.value=(()=>{if(typeof navigator>`u`)return!1;let e=navigator.userAgentData?.platform??``;if(e)return/mac|ios/i.test(e);let t=navigator.userAgent??``;return/(Mac|iPhone|iPad|iPod)/i.test(t)})();let e=Rt?.value.getBoundingClientRect();if(Lt.value=e.height/e.width,It.value=1e3,Ft.value=Lt.value*1e3,zt.value=e.width,Bt.value=e.height,new ResizeObserver(e=>{e.forEach(e=>{zt.value=e.contentRect.width,Bt.value=e.contentRect.height,Lt.value=e.contentRect.height/e.contentRect.width,Ft.value=Lt.value*1e3})}).observe(Rt.value),Kt.value=e=>Sn(e),window.addEventListener(`keydown`,Kt.value),K.value=un(),K.value.size){let e=K.value.size();qt.value.undo=e.undo,qt.value.redo=e.redo}qn=xe({isMacLike:Gt,isSummaryOpen:j,isWriting:N,isDeleteMode:T,isMoveMode:O,isResizeMode:k,isSelectMode:A,isDrawMode:E,isTextMode:M,activeShape:y,showCaret:B,lastSelectedShape:P,shapes:L,history:K,setShapeTo:Wn,undoLastShape:yn,redoLastShape:bn})}),te(()=>{$(),Jt.value&&cancelAnimationFrame(Jt.value),Kt.value&&window.removeEventListener(`keydown`,Kt.value),qn&&qn(),window.removeEventListener(`keydown`,Sn)}),s(L,e=>{e.length===0&&(P.value=void 0)}),s(M,e=>{B.value=e}),(t,s)=>(p(),u(`div`,we,[l(`div`,Te,[a(ye,{config:{maxHeight:1e3,useCursorPointer:J.value,head:{backgroundColor:q.value.style.backgroundColor,color:q.value.style.color,iconColor:q.value.style.color,iconSize:20,icon:j.value?`close`:`annotator`,padding:`6px`},body:{backgroundColor:q.value.style.backgroundColor,color:q.value.style.color}},onToggle:Gn},{title:m(({color:e})=>[l(`div`,{style:n({color:e})},r(q.value.translations.title),5)]),content:m(({backgroundColor:t})=>[l(`div`,{class:`tool-selection`,style:n({backgroundColor:t})},[l(`button`,{disabled:L.value.length===0,style:n({background:O.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:O.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:O.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:i({"button-tool":!0,"button-tool--selected":O.value,tooltip:!0}),onClick:s[0]||(s[0]=e=>{gn(),O.value=!O.value,y.value=void 0,T.value=!1,E.value=!1,k.value=!1,A.value=!1,M.value=!1,N.value=!1,B.value=!1}),onMouseenter:s[1]||(s[1]=e=>q.value.style.showTooltips&&Q(`move`,e,`top`)),onMouseleave:$,onFocus:s[2]||(s[2]=e=>q.value.style.showTooltips&&Q(`move`,e,`top`)),onBlur:$},[a(_,{name:`move`,stroke:O.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`move`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipMove)+` `,1),s[91]||(s[91]=l(`kbd`,null,`M`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],46,Ee),l(`button`,{disabled:L.value.length===0||y.value===`line`,style:n({background:k.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:k.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:k.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:i({"button-tool":!0,"button-tool--selected":k.value,tooltip:!0}),onClick:s[3]||(s[3]=e=>{gn(),k.value=!k.value,O.value=!1,T.value=!1,E.value=!1,A.value=!1,M.value=!1,N.value=!1,y.value=void 0,B.value=!1}),onMouseenter:s[4]||(s[4]=e=>q.value.style.showTooltips&&Q(`resize`,e,`top`)),onMouseleave:$,onFocus:s[5]||(s[5]=e=>q.value.style.showTooltips&&Q(`resize`,e,`top`)),onBlur:$},[a(_,{name:`resize`,stroke:k.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`resize`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipResize)+` `,1),s[92]||(s[92]=l(`kbd`,null,`R`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],46,De),l(`button`,{disabled:L.value.length===0,style:n({background:T.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:T.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:T.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:i({"button-tool":!0,"button-tool--selected":T.value,tooltip:!0}),onClick:s[6]||(s[6]=e=>{gn(),T.value=!T.value,O.value=!1,k.value=!1,A.value=!1,M.value=!1,N.value=!1,y.value=void 0,B.value=!1}),onMouseenter:s[7]||(s[7]=e=>q.value.style.showTooltips&&Q(`delete`,e,`top`)),onMouseleave:$,onFocus:s[8]||(s[8]=e=>q.value.style.showTooltips&&Q(`delete`,e,`top`)),onBlur:$},[a(_,{name:`trash`,stroke:T.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`delete`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipDelete)+` `,1),s[93]||(s[93]=l(`kbd`,null,`D`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],46,Oe),l(`button`,{disabled:!Xt.value,style:n({background:A.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:A.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:A.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:i({"button-tool":!0,"button-tool--selected":A.value,tooltip:!0}),onClick:s[9]||(s[9]=e=>{gn(),Wn(`group`),A.value=!A.value,T.value=!1,O.value=!1,k.value=!1,M.value=!1,N.value=!1,y.value=`group`,B.value=!1}),onMouseenter:s[10]||(s[10]=e=>q.value.style.showTooltips&&Q(`selectAndGroup`,e,`top`)),onMouseleave:$,onFocus:s[11]||(s[11]=e=>q.value.style.showTooltips&&Q(`selectAndGroup`,e,`top`)),onBlur:$},[a(_,{name:`selectAndGroup`,stroke:A.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`selectAndGroup`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipGroup)+` `,1),s[94]||(s[94]=l(`kbd`,null,`G`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],46,ke),l(`button`,{disabled:L.value.length===0,style:n({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:i({"button-tool":!0,tooltip:!0}),onClick:s[12]||(s[12]=e=>{k.value=!1,O.value=!0,T.value=!1,E.value=!1,A.value=!1,M.value=!1,N.value=!1,B.value=!1,pn(`front`)}),onMouseenter:s[13]||(s[13]=e=>q.value.style.showTooltips&&Q(`bringToFront`,e,`top`)),onMouseleave:$,onFocus:s[14]||(s[14]=e=>q.value.style.showTooltips&&Q(`bringToFront`,e,`top`)),onBlur:$},[a(_,{name:`bringToFront`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`bringToFront`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipBringToFront),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],44,Ae),l(`button`,{disabled:L.value.length===0,style:n({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:i({"button-tool":!0,tooltip:!0}),onClick:s[15]||(s[15]=e=>{k.value=!1,O.value=!0,T.value=!1,E.value=!1,A.value=!1,M.value=!1,N.value=!1,B.value=!1,pn(`back`)}),onMouseenter:s[16]||(s[16]=e=>q.value.style.showTooltips&&Q(`bringToBack`,e,`top`)),onMouseleave:$,onFocus:s[17]||(s[17]=e=>q.value.style.showTooltips&&Q(`bringToBack`,e,`top`)),onBlur:$},[a(_,{name:`bringToBack`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`bringToBack`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipBringToBack),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],44,je),l(`button`,{disabled:L.value.length===0||y.value===`line`,style:n({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:i({"button-tool":!0,tooltip:!0}),onClick:s[18]||(s[18]=e=>{gn(),k.value=!1,O.value=!0,T.value=!1,E.value=!1,A.value=!1,M.value=!1,N.value=!1,B.value=!1,mn()}),onMouseenter:s[19]||(s[19]=e=>q.value.style.showTooltips&&Q(`duplicate`,e,`top`)),onMouseleave:$,onFocus:s[20]||(s[20]=e=>q.value.style.showTooltips&&Q(`duplicate`,e,`top`)),onBlur:$},[a(_,{name:`copy`,stroke:q.value.style.buttons.controls.color,size:18},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`duplicate`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipDuplicate),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],44,Me),l(`button`,{disabled:qt.value.undo===0,style:n({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:i({"button-tool":!0,"button-tool--one-shot":!0,tooltip:!0}),onClick:s[21]||(s[21]=e=>{k.value=!1,O.value=!1,T.value=!1,E.value=!1,A.value=!1,M.value=!1,N.value=!1,y.value=void 0,B.value=!1,yn()}),onMouseenter:s[22]||(s[22]=e=>q.value.style.showTooltips&&Q(`undoLast`,e,`top`)),onMouseleave:$,onFocus:s[23]||(s[23]=e=>q.value.style.showTooltips&&Q(`undoLast`,e,`top`)),onBlur:$},[a(_,{name:`refresh`,stroke:q.value.style.buttons.controls.color,size:20},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`undoLast`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipUndo)+` `,1),l(`kbd`,null,r(Gt.value?`⌘`:`Ctrl`),1),s[95]||(s[95]=l(`kbd`,null,`Z`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],44,Ne),l(`button`,{disabled:qt.value.redo===0,style:n({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:i({"button-tool":!0,"button-tool--one-shot":!0,tooltip:!0}),onClick:s[24]||(s[24]=e=>{k.value=!1,O.value=!1,T.value=!1,E.value=!1,A.value=!1,M.value=!1,N.value=!1,y.value=void 0,B.value=!1,bn()}),onMouseenter:s[25]||(s[25]=e=>q.value.style.showTooltips&&Q(`redoLast`,e,`top`)),onMouseleave:$,onFocus:s[26]||(s[26]=e=>q.value.style.showTooltips&&Q(`redoLast`,e,`top`)),onBlur:$},[a(_,{name:`refresh`,stroke:q.value.style.buttons.controls.color,size:20,style:{transform:`rotateX(0deg) rotateY(180deg)`}},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`redoLast`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipRedo)+` `,1),l(`kbd`,null,r(Gt.value?`⌘`:`Ctrl`),1),s[96]||(s[96]=l(`kbd`,null,`Y`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],44,Pe),q.value.style.showPrint?(p(),u(`button`,{key:0,style:n({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:i({"button-tool":!0,tooltip:!0}),onClick:Fn,onMouseenter:s[27]||(s[27]=e=>q.value.style.showTooltips&&Q(`printPdf`,e,`top`)),onMouseleave:$,onFocus:s[28]||(s[28]=e=>q.value.style.showTooltips&&Q(`printPdf`,e,`top`)),onBlur:$},[a(_,{name:`printer`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`printPdf`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipPdf),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],36)):g(``,!0),q.value.style.showImage?(p(),u(`button`,{key:1,style:n({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:i({"button-tool":!0,tooltip:!0}),onClick:s[29]||(s[29]=(...t)=>e(Tt)&&e(Tt)(...t)),onMouseenter:s[30]||(s[30]=e=>q.value.style.showTooltips&&Q(`printImage`,e,`top`)),onMouseleave:$,onFocus:s[31]||(s[31]=e=>q.value.style.showTooltips&&Q(`printImage`,e,`top`)),onBlur:$},[a(_,{name:`image`,stroke:q.value.style.buttons.controls.color,size:20},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`printImage`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipImage),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],36)):g(``,!0),q.value.style.showSave?(p(),u(`button`,{key:2,style:n({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:i({"button-tool":!0,tooltip:!0}),onClick:Kn,onMouseenter:s[32]||(s[32]=e=>q.value.style.showTooltips&&Q(`saveAction`,e,`top`)),onMouseleave:$,onFocus:s[33]||(s[33]=e=>q.value.style.showTooltips&&Q(`saveAction`,e,`top`)),onBlur:$},[a(_,{name:`save`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`saveAction`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipSave),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],36)):g(``,!0)],4),l(`div`,Fe,[l(`button`,{class:i({"button-tool":!0,"button-tool--selected":y.value===`circle`,tooltip:!0}),style:n({background:y.value===`circle`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:y.value===`circle`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:y.value===`circle`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:s[34]||(s[34]=e=>{Wn(`circle`),A.value=!1}),onMouseenter:s[35]||(s[35]=e=>q.value.style.showTooltips&&Q(`setCircle`,e,`top`)),onMouseleave:$,onFocus:s[36]||(s[36]=e=>q.value.style.showTooltips&&Q(`setCircle`,e,`top`)),onBlur:$},[(p(),u(`svg`,Ie,[l(`circle`,{cx:6,cy:6,r:`4`,fill:R.value.circle.filled?(y.value,z.value+Zt.value):`none`,stroke:`currentColor`},null,8,Le)])),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setCircle`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeCircle)+` `,1),s[97]||(s[97]=l(`kbd`,null,`C`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],38),y.value===`circle`?(p(),u(`div`,Re,[l(`label`,ze,[o(r(q.value.translations.filled)+` `,1),c(l(`input`,{type:`checkbox`,"onUpdate:modelValue":s[37]||(s[37]=e=>R.value.circle.filled=e),onChange:Rn,checked:R.value.circle.filled,style:n({all:`revert`,appearance:`auto`,"-webkit-appearance":`auto`,accentColor:q.value.style.color+` !important`})},null,44,Be),[[oe,R.value.circle.filled]])])])):g(``,!0),l(`button`,{class:i({"button-tool":!0,"button-tool--selected":y.value===`rect`,tooltip:!0}),style:n({background:y.value===`rect`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:y.value===`rect`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:y.value===`rect`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:s[38]||(s[38]=e=>{Wn(`rect`),A.value=!1}),onMouseenter:s[39]||(s[39]=e=>q.value.style.showTooltips&&Q(`setRect`,e,`top`)),onMouseleave:$,onFocus:s[40]||(s[40]=e=>q.value.style.showTooltips&&Q(`setRect`,e,`top`)),onBlur:$},[(p(),u(`svg`,Ve,[l(`rect`,{x:`3`,y:`3`,style:{rx:`0 !important`,ry:`0 !important`},height:`6`,width:`6`,fill:R.value.rect.filled?(y.value,z.value+Zt.value):`none`,stroke:`currentColor`},null,8,He)])),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setRect`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeRect)+` `,1),s[98]||(s[98]=l(`kbd`,null,`S`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],38),y.value===`rect`?(p(),u(`div`,Ue,[l(`label`,We,[o(r(q.value.translations.filled)+` `,1),c(l(`input`,{type:`checkbox`,"onUpdate:modelValue":s[41]||(s[41]=e=>R.value.rect.filled=e),onChange:Ln,checked:R.value.rect.filled,style:n({all:`revert`,appearance:`auto`,"-webkit-appearance":`auto`,accentColor:q.value.style.color+` !important`})},null,44,Ge),[[oe,R.value.rect.filled]])])])):g(``,!0),l(`button`,{class:i({"button-tool":!0,"button-tool--selected":y.value===`arrow`,tooltip:!0}),style:n({background:y.value===`arrow`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:y.value===`arrow`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:y.value===`arrow`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:s[42]||(s[42]=e=>{Wn(`arrow`),A.value=!1}),onMouseenter:s[43]||(s[43]=e=>q.value.style.showTooltips&&Q(`setArrow`,e,`top`)),onMouseleave:$,onFocus:s[44]||(s[44]=e=>q.value.style.showTooltips&&Q(`setArrow`,e,`top`)),onBlur:$},[(p(),u(`svg`,Ke,[l(`path`,{stroke:R.value.arrow.filled?y.value===`arrow`?`white`:`grey`:`none`,"stroke-width":`2`,d:`M5,19 19,5 14,5 19,10.5 19,5`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},null,8,qe)])),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setArrow`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeArrow)+` `,1),s[99]||(s[99]=l(`kbd`,null,`A`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],38),l(`button`,{class:i({"button-tool":!0,"button-tool--selected":y.value===`line`,tooltip:!0}),style:n({background:y.value===`line`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:y.value===`line`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:y.value===`line`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:s[45]||(s[45]=e=>{Wn(`line`),A.value=!1}),onMouseenter:s[46]||(s[46]=e=>q.value.style.showTooltips&&Q(`setFreehand`,e,`top`)),onMouseleave:$,onFocus:s[47]||(s[47]=e=>q.value.style.showTooltips&&Q(`setFreehand`,e,`top`)),onBlur:$},[s[101]||(s[101]=l(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[l(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),l(`path`,{d:`M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5`})],-1)),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setFreehand`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeFreehand)+` `,1),s[100]||(s[100]=l(`kbd`,null,`L`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],38),[`arrow`,`circle`,`rect`,`line`].includes(y.value)?(p(),u(`div`,Je,[l(`div`,Ye,[l(`label`,Xe,[o(r(q.value.translations.thickness)+` `,1),c(l(`input`,{type:`number`,"onUpdate:modelValue":s[48]||(s[48]=e=>Et.value=e),onInput:Vn,min:1,style:{padding:`0 4px`,width:`40px`,border:`1px solid #dadada`,"border-radius":`3px`}},null,544),[[ce,Et.value]])])])])):g(``,!0),[`arrow`,`circle`,`rect`].includes(y.value)?(p(),u(`div`,Ze,[l(`div`,Qe,[l(`label`,$e,[o(r(q.value.translations.dashedLines)+` `,1),(p(),u(`svg`,et,[...s[102]||(s[102]=[l(`line`,{x1:`0`,x2:`24`,y1:`12`,y2:`12`,"stroke-width":`2`,stroke:`black`,"stroke-dasharray":`3`},null,-1)])])),c(l(`input`,{name:`dashStyle`,type:`checkbox`,"onUpdate:modelValue":s[49]||(s[49]=e=>Dt.value=e),onChange:zn,checked:Dt.value,style:n({all:`revert`,appearance:`auto`,"-webkit-appearance":`auto`,accentColor:q.value.style.color+` !important`})},null,44,tt),[[oe,Dt.value]])])])])):g(``,!0),l(`button`,{class:i({"button-tool":!0,"button-tool--selected":M.value,tooltip:!0}),style:n({background:M.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:M.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:M.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:s[50]||(s[50]=e=>{gn(),M.value=!M.value,T.value=!1,O.value=!1,k.value=!1,A.value=!1,E.value=!1,y.value=void 0}),onMouseenter:s[51]||(s[51]=e=>q.value.style.showTooltips&&Q(`setText`,e,`top`)),onMouseleave:$,onFocus:s[52]||(s[52]=e=>q.value.style.showTooltips&&Q(`setText`,e,`top`)),onBlur:$},[a(_,{name:`text`,stroke:M.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color},null,8,[`stroke`]),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setText`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeText)+` `,1),s[103]||(s[103]=l(`kbd`,null,`T`,-1))]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],38),M.value?(p(),u(`div`,nt,[l(`div`,rt,[l(`label`,it,[o(r(q.value.translations.fontSize)+` `,1),c(l(`input`,{type:`number`,"onUpdate:modelValue":s[53]||(s[53]=e=>Vt.value=e),onInput:Hn,style:{padding:`0 4px`,width:`40px`,border:`1px solid #dadada`,"border-radius":`3px`}},null,544),[[ce,Vt.value]])])])])):g(``,!0),M.value?(p(),u(`div`,at,[l(`button`,{class:i({"button-tool":!0,"button-tool--selected":V.value===`start`,tooltip:!0}),style:n({background:V.value===`start`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:V.value===`start`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:V.value===`start`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:s[54]||(s[54]=e=>{T.value=!1,O.value=!1,k.value=!1,E.value=!1,A.value=!1,y.value=void 0,V.value=`start`,vn(`start`)}),onMouseenter:s[55]||(s[55]=e=>q.value.style.showTooltips&&Q(`setAlignStart`,e,`top`)),onMouseleave:$,onFocus:s[56]||(s[56]=e=>q.value.style.showTooltips&&Q(`setAlignStart`,e,`top`)),onBlur:$},[s[104]||(s[104]=l(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[l(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),l(`path`,{d:`M4 6l16 0`}),l(`path`,{d:`M4 12l10 0`}),l(`path`,{d:`M4 18l14 0`})],-1)),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setAlignStart`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeTextLeft),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],38)])):g(``,!0),M.value?(p(),u(`div`,ot,[l(`button`,{class:i({"button-tool":!0,"button-tool--selected":V.value===`middle`,tooltip:!0}),style:n({background:V.value===`middle`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:V.value===`middle`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:V.value===`middle`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),disabled:w.value,onClick:s[57]||(s[57]=e=>{T.value=!1,O.value=!1,k.value=!1,E.value=!1,A.value=!1,y.value=void 0,V.value=`middle`,vn(`middle`)}),onMouseenter:s[58]||(s[58]=e=>q.value.style.showTooltips&&Q(`setAlignMiddle`,e,`top`)),onMouseleave:$,onFocus:s[59]||(s[59]=e=>q.value.style.showTooltips&&Q(`setAlignMiddle`,e,`top`)),onBlur:$},[s[105]||(s[105]=l(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[l(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),l(`path`,{d:`M4 6l16 0`}),l(`path`,{d:`M8 12l8 0`}),l(`path`,{d:`M6 18l12 0`})],-1)),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setAlignMiddle`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeTextCenter),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],46,st)])):g(``,!0),M.value?(p(),u(`div`,ct,[l(`button`,{class:i({"button-tool":!0,"button-tool--selected":V.value===`end`,tooltip:!0}),style:n({background:V.value===`end`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:V.value===`end`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:V.value===`end`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),disabled:w.value,onClick:s[60]||(s[60]=e=>{T.value=!1,O.value=!1,k.value=!1,E.value=!1,A.value=!1,y.value=void 0,V.value=`end`,vn(`end`)}),onMouseenter:s[61]||(s[61]=e=>q.value.style.showTooltips&&Q(`setAlignEnd`,e,`top`)),onMouseleave:$,onFocus:s[62]||(s[62]=e=>q.value.style.showTooltips&&Q(`setAlignEnd`,e,`top`)),onBlur:$},[s[106]||(s[106]=l(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[l(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),l(`path`,{d:`M4 6l16 0`}),l(`path`,{d:`M10 12l10 0`}),l(`path`,{d:`M6 18l14 0`})],-1)),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setAlignEnd`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeTextRight),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],46,lt)])):g(``,!0),M.value?(p(),u(`div`,ut,[l(`button`,{class:i({"button-tool":!0,"button-tool--selected":w.value,tooltip:!0}),style:n({background:w.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:w.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:w.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:s[63]||(s[63]=e=>{T.value=!1,O.value=!1,k.value=!1,E.value=!1,A.value=!1,y.value=void 0,w.value=!w.value,V.value=`start`,vn(`start`),Hn()}),onMouseenter:s[64]||(s[64]=e=>q.value.style.showTooltips&&Q(`setBulletMode`,e,`top`)),onMouseleave:$,onFocus:s[65]||(s[65]=e=>q.value.style.showTooltips&&Q(`setBulletMode`,e,`top`)),onBlur:$},[s[107]||(s[107]=l(`svg`,{width:`100%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[l(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),l(`path`,{d:`M9 6l11 0`}),l(`path`,{d:`M9 12l11 0`}),l(`path`,{d:`M9 18l11 0`}),l(`path`,{d:`M5 6l0 .01`}),l(`path`,{d:`M5 12l0 .01`}),l(`path`,{d:`M5 18l0 .01`})],-1)),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setBulletMode`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeTextBullet),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],38)])):g(``,!0),M.value?(p(),u(`div`,dt,[l(`button`,{class:i({"button-tool":!0,"button-tool--selected":C.value,tooltip:!0}),style:n({background:C.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:C.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:C.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:s[66]||(s[66]=e=>{T.value=!1,O.value=!1,k.value=!1,E.value=!1,A.value=!1,y.value=void 0,C.value=!C.value,Hn()}),onMouseenter:s[67]||(s[67]=e=>q.value.style.showTooltips&&Q(`setBold`,e,`top`)),onMouseleave:$,onFocus:s[68]||(s[68]=e=>q.value.style.showTooltips&&Q(`setBold`,e,`top`)),onBlur:$},[s[108]||(s[108]=l(`svg`,{width:`100%`,viewBox:`0 0 24 24`,"stroke-width":`3`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[l(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),l(`path`,{d:`M7 5h6a3.5 3.5 0 0 1 0 7h-6z`}),l(`path`,{d:`M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7`})],-1)),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setBold`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeTextBold),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],38)])):g(``,!0),M.value?(p(),u(`div`,ft,[l(`button`,{class:i({"button-tool":!0,"button-tool--selected":D.value,tooltip:!0}),style:n({background:D.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:D.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:D.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:s[69]||(s[69]=e=>{T.value=!1,O.value=!1,k.value=!1,E.value=!1,A.value=!1,y.value=void 0,D.value=!D.value,Hn()}),onMouseenter:s[70]||(s[70]=e=>q.value.style.showTooltips&&Q(`setItalic`,e,`top`)),onMouseleave:$,onFocus:s[71]||(s[71]=e=>q.value.style.showTooltips&&Q(`setItalic`,e,`top`)),onBlur:$},[s[109]||(s[109]=l(`svg`,{width:`100%`,height:`44`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[l(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),l(`path`,{d:`M11 5l6 0`}),l(`path`,{d:`M7 19l6 0`}),l(`path`,{d:`M14 5l-4 14`})],-1)),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setItalic`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeTextItalic),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],38)])):g(``,!0),M.value?(p(),u(`div`,pt,[l(`button`,{class:i({"button-tool":!0,"button-tool--selected":Mt.value,tooltip:!0}),style:n({background:Mt.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:Mt.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:Mt.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:s[72]||(s[72]=e=>{T.value=!1,O.value=!1,k.value=!1,E.value=!1,A.value=!1,y.value=void 0,Mt.value=!Mt.value,Hn()}),onMouseenter:s[73]||(s[73]=e=>q.value.style.showTooltips&&Q(`setUnderline`,e,`top`)),onMouseleave:$,onFocus:s[74]||(s[74]=e=>q.value.style.showTooltips&&Q(`setUnderline`,e,`top`)),onBlur:$},[s[110]||(s[110]=l(`svg`,{width:`100%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[l(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),l(`path`,{d:`M7 5v5a5 5 0 0 0 10 0v-5`}),l(`path`,{d:`M5 19h14`})],-1)),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setUnderline`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeTextUnderline),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)],38)])):g(``,!0),l(`div`,mt,[l(`button`,{class:i({"button-tool":!0,tooltip:!0}),style:{borderRadius:`6px`},onMouseenter:s[76]||(s[76]=e=>q.value.style.showTooltips&&Q(`setColor`,e,`top`)),onMouseleave:$,onFocus:s[77]||(s[77]=e=>q.value.style.showTooltips&&Q(`setColor`,e,`top`)),onBlur:$},[a(be,{value:z.value,"onUpdate:value":s[75]||(s[75]=e=>z.value=e),backgroundColor:q.value.style.backgroundColor,buttonBorderColor:q.value.style.color,isCursorPointer:J.value,teleported:``},null,8,[`value`,`backgroundColor`,`buttonBorderColor`,`isCursorPointer`])],32),q.value.style.showTooltips?(p(),h(v,{key:0,show:U.value&&W.value===`setColor`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:m(()=>[o(r(q.value.translations.tooltipShapeColor),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):g(``,!0)]),l(`div`,ht,[l(`label`,gt,[o(r(q.value.translations.colorAlpha)+`: `+r(Ht.value>98?100:Ht.value)+` % `,1),c(l(`input`,{name:`colorTransparency`,type:`range`,"onUpdate:modelValue":s[78]||(s[78]=e=>Ht.value=e),onInput:Bn,min:0,max:100,style:n({width:`100%`,accentColor:q.value.style.color+` !important`})},null,36),[[ce,Ht.value]])])])])]),_:1},8,[`config`])]),l(`div`,{class:`annotator annotator__wrapper`,ref_key:`drawSvgContainer`,ref:Nn,style:{position:`relative`},id:Ce.value,"data-annotator-content":``},[l(`div`,{class:`annotator__content-layer`,style:n(`${j.value?`pointer-events: none;`:``}`)},[ae(t.$slots,`default`,{},void 0,!0)],4),j.value||q.value.alwaysVisible?(p(),u(`svg`,{id:`annotatorSvg`,key:Pt.value,ref_key:`mainSvg`,ref:X,class:i({annotator__overlay:!0,draw:!0,"draw--free":y.value===`line`}),viewBox:`0 0 ${It.value} ${Ft.value}`,width:zt.value,height:Bt.value,onPointerdown:s[83]||(s[83]=e=>Dn(e)),onPointerup:s[84]||(s[84]=e=>In(e)),onTouchend:s[85]||(s[85]=e=>In(e)),onTouchstart:s[86]||(s[86]=e=>{Un(e),_n(e)}),onPointermove:s[87]||(s[87]=e=>{Un(e),jn(e)}),onPointerout:s[88]||(s[88]=e=>Tn(e)),onPointerover:s[89]||(s[89]=e=>hn(e)),onClick:s[90]||(s[90]=e=>_n(e)),style:n({position:`absolute`,top:0,left:0,cursor:Qt.value,fontFamily:`Helvetica`,zIndex:1e8,pointerEvents:j.value?`all`:`none`})},[l(`rect`,{class:`annotator__glass`,x:`0`,y:`0`,width:It.value,height:Ft.value,fill:`transparent`,"pointer-events":j.value?`all`:`none`,style:{cursor:`inherit`},onPointerdown:s[79]||(s[79]=se(e=>Dn(e),[`stop`,`prevent`])),onPointermove:s[80]||(s[80]=se(e=>{Un(e),jn(e)},[`stop`,`prevent`])),onPointerup:se(In,[`stop`,`prevent`]),onClick:s[81]||(s[81]=se(()=>{},[`stop`,`prevent`]))},null,40,yt),(p(!0),u(ne,null,d(an.value,e=>(p(),u(`g`,{key:e.id,innerHTML:e.html,onClick:s[82]||(s[82]=e=>{Mn(e),O.value=!1})},null,8,bt))),128))],46,vt)):g(``,!0),jt.value||e(wt)?(p(),u(`svg`,{key:1,style:{position:`absolute`,top:`0`,left:`0`},height:Bt.value,viewBox:`0 0 ${It.value} ${Ft.value}`,width:zt.value,"data-dom-to-png-ignore":``},[l(`circle`,{class:`animated-circle-print`,cx:It.value/2,cy:Ft.value/2,r:`50`,stroke:`#6376DD`,"stroke-width":`10`,fill:`none`},null,8,St)],8,xt)):g(``,!0)],8,_t)]))}},[[`__scopeId`,`data-v-3a11f6f4`]]);export{Ce as n};