
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
/**
 * filesize
 *
 * @copyright 2025 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 11.0.2
 */const x="Invalid number",_="Invalid rounding method";const g="jedec";const p="bits",k="byte",O="bytes",v="kbit";const L="array",U="function",z="object",$="string",F="exponent",J="round";const P={symbol:{iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},fullform:{iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]}};function V(s,{bits:f=!1,pad:D=!1,base:o=-1,round:B=2,locale:T="",localeOptions:C={},separator:I="",spacer:w=" ",symbols:K={},standard:e="",output:M=$,fullform:A=!1,fullforms:N=[],exponent:Y=-1,roundingMethod:G=J,precision:b=0}={}){let t=Y,c=Number(s),i=[],n=0,S="";e==="si"?(o=10,e=g):e==="iec"||e===g?o=2:o===2?e="iec":(o=10,e=g);const l=o===10?1e3:1024,Z=A===!0,r=c<0,y=Math[G];if(typeof s!="bigint"&&isNaN(s))throw new TypeError(x);if(typeof y!==U)throw new TypeError(_);if(r&&(c=-c),(t===-1||isNaN(t))&&(t=Math.floor(Math.log(c)/Math.log(l)),t<0&&(t=0)),t>8&&(b>0&&(b+=8-t),t=8),M===F)return t;if(c===0)i[0]=0,S=i[1]=P.symbol[e][f?p:O][t];else{n=c/(o===2?Math.pow(2,t*10):Math.pow(1e3,t)),f&&(n=n*8,n>=l&&t<8&&(n=n/l,t++));const E=Math.pow(10,t>0?B:0);i[0]=y(n*E)/E,i[0]===l&&t<8&&Y===-1&&(i[0]=1,t++),S=i[1]=o===10&&t===1?f?v:"kB":P.symbol[e][f?p:O][t]}if(r&&(i[0]=-i[0]),b>0&&(i[0]=i[0].toPrecision(b)),i[1]=K[i[1]]||i[1],T===!0?i[0]=i[0].toLocaleString():T.length>0?i[0]=i[0].toLocaleString(T,C):I.length>0&&(i[0]=i[0].toString().replace(".",I)),D&&B>0){const E=i[0].toString(),h=I||(E.match(/(\D)/g)||[]).pop()||".",m=E.toString().split(h),u=m[1]||"",R=u.length,j=B-R;i[0]="".concat(m[0]).concat(h).concat(u.padEnd(R+j,"0"))}return Z&&(i[1]=N[t]?N[t]:P.fullform[e][t]+(f?"bit":k)+(i[0]===1?"":"s")),M===L?i:M===z?{value:i[0],symbol:i[1],exponent:t,unit:S}:i.join(w)}export{V as f};
