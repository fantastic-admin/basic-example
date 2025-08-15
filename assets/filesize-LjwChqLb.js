
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
 */const L="Invalid number",U="Invalid rounding method",w="iec",y="jedec",_="si",z="bit",D="bits",$="byte",O="bytes",F="kbit",J="kB",V="array",a="function",X="object",q="string",H="exponent",Q="round",f="",G=".",W="s",d=" ",ii="0",S={symbol:{iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},fullform:{iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]}};function ti(E,{bits:b=!1,pad:K=!1,base:o=-1,round:g=2,locale:T=f,localeOptions:j={},separator:I=f,spacer:x=d,symbols:A={},standard:e=f,output:N=q,fullform:C=!1,fullforms:h=[],exponent:m=-1,roundingMethod:Z=Q,precision:s=0}={}){let t=m,c=Number(E),i=[],n=0,r=f;e===_?(o=10,e=y):e===w||e===y?o=2:o===2?e=w:(o=10,e=y);const B=o===10?1e3:1024,k=C===!0,u=c<0,M=Math[Z];if(typeof E!="bigint"&&isNaN(E))throw new TypeError(L);if(typeof M!==a)throw new TypeError(U);if(u&&(c=-c),(t===-1||isNaN(t))&&(t=Math.floor(Math.log(c)/Math.log(B)),t<0&&(t=0)),t>8&&(s>0&&(s+=8-t),t=8),N===H)return t;if(c===0)i[0]=0,r=i[1]=S.symbol[e][b?D:O][t];else{n=c/(o===2?Math.pow(2,t*10):Math.pow(1e3,t)),b&&(n=n*8,n>=B&&t<8&&(n=n/B,t++));const l=Math.pow(10,t>0?g:0);i[0]=M(n*l)/l,i[0]===B&&t<8&&m===-1&&(i[0]=1,t++),r=i[1]=o===10&&t===1?b?F:J:S.symbol[e][b?D:O][t]}if(u&&(i[0]=-i[0]),s>0&&(i[0]=i[0].toPrecision(s)),i[1]=A[i[1]]||i[1],T===!0?i[0]=i[0].toLocaleString():T.length>0?i[0]=i[0].toLocaleString(T,j):I.length>0&&(i[0]=i[0].toString().replace(G,I)),K&&g>0){const l=i[0].toString(),p=I||(l.match(/(\D)/g)||[]).pop()||G,P=l.toString().split(p),R=P[1]||f,Y=R.length,v=g-Y;i[0]="".concat(P[0]).concat(p).concat(R.padEnd(Y+v,ii))}return k&&(i[1]=h[t]?h[t]:S.fullform[e][t]+(b?z:$)+(i[0]===1?f:W)),N===V?i:N===X?{value:i[0],symbol:i[1],exponent:t,unit:r}:i.join(x)}export{ti as f};
