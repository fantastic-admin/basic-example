
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
/**
 * filesize
 *
 * @copyright 2024 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 10.1.6
 */const L="array",U="bit",w="bits",_="byte",D="bytes",f="",z="exponent",$="function",O="iec",F="Invalid number",J="Invalid rounding method",y="jedec",V="object",G=".",a="round",X="s",q="si",H="kbit",Q="kB",W=" ",d="string",ii="0",S={symbol:{iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},fullform:{iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]}};function ti(E,{bits:b=!1,pad:K=!1,base:o=-1,round:g=2,locale:T=f,localeOptions:j={},separator:I=f,spacer:x=W,symbols:A={},standard:e=f,output:N=d,fullform:C=!1,fullforms:h=[],exponent:m=-1,roundingMethod:Z=a,precision:s=0}={}){let t=m,c=Number(E),i=[],n=0,r=f;e===q?(o=10,e=y):e===O||e===y?o=2:o===2?e=O:(o=10,e=y);const B=o===10?1e3:1024,k=C===!0,u=c<0,M=Math[Z];if(typeof E!="bigint"&&isNaN(E))throw new TypeError(F);if(typeof M!==$)throw new TypeError(J);if(u&&(c=-c),(t===-1||isNaN(t))&&(t=Math.floor(Math.log(c)/Math.log(B)),t<0&&(t=0)),t>8&&(s>0&&(s+=8-t),t=8),N===z)return t;if(c===0)i[0]=0,r=i[1]=S.symbol[e][b?w:D][t];else{n=c/(o===2?Math.pow(2,t*10):Math.pow(1e3,t)),b&&(n=n*8,n>=B&&t<8&&(n=n/B,t++));const l=Math.pow(10,t>0?g:0);i[0]=M(n*l)/l,i[0]===B&&t<8&&m===-1&&(i[0]=1,t++),r=i[1]=o===10&&t===1?b?H:Q:S.symbol[e][b?w:D][t]}if(u&&(i[0]=-i[0]),s>0&&(i[0]=i[0].toPrecision(s)),i[1]=A[i[1]]||i[1],T===!0?i[0]=i[0].toLocaleString():T.length>0?i[0]=i[0].toLocaleString(T,j):I.length>0&&(i[0]=i[0].toString().replace(G,I)),K&&g>0){const l=i[0].toString(),p=I||(l.match(/(\D)/g)||[]).pop()||G,P=l.toString().split(p),R=P[1]||f,Y=R.length,v=g-Y;i[0]=`${P[0]}${p}${R.padEnd(Y+v,ii)}`}return k&&(i[1]=h[t]?h[t]:S.fullform[e][t]+(b?U:_)+(i[0]===1?f:X)),N===L?i:N===V?{value:i[0],symbol:i[1],exponent:t,unit:r}:i.join(x)}export{ti as f};
