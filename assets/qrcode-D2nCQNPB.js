
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{a8 as de,d as ge,r as tt,u as he,z as me,a as G,o as we,k as Ee,e as b,w as L,b as J,g as Y,f as et,_ as Ce,R as ye,Q as pe,v as Be,x as _t}from"./index-Ruu4zcVF.js";import Re from"./alert-DNOw4bmi.js";var H={},nt,St;function Ae(){return St||(St=1,nt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),nt}var rt={},k={},bt;function F(){if(bt)return k;bt=1;let r;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return k.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17},k.getSymbolTotalCodewords=function(e){return o[e]},k.getBCHDigit=function(s){let e=0;for(;s!==0;)e++,s>>>=1;return e},k.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');r=e},k.isKanjiModeEnabled=function(){return typeof r<"u"},k.toSJIS=function(e){return r(e)},k}var ot={},Lt;function It(){return Lt||(Lt=1,function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function o(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+s)}}r.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4},r.from=function(e,t){if(r.isValid(e))return e;try{return o(e)}catch{return t}}}(ot)),ot}var it,vt;function Te(){if(vt)return it;vt=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(o){const s=Math.floor(o/8);return(this.buffer[s]>>>7-o%8&1)===1},put:function(o,s){for(let e=0;e<s;e++)this.putBit((o>>>s-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(o){const s=Math.floor(this.length/8);this.buffer.length<=s&&this.buffer.push(0),o&&(this.buffer[s]|=128>>>this.length%8),this.length++}},it=r,it}var st,qt;function Ie(){if(qt)return st;qt=1;function r(o){if(!o||o<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=o,this.data=new Uint8Array(o*o),this.reservedBit=new Uint8Array(o*o)}return r.prototype.set=function(o,s,e,t){const n=o*this.size+s;this.data[n]=e,t&&(this.reservedBit[n]=!0)},r.prototype.get=function(o,s){return this.data[o*this.size+s]},r.prototype.xor=function(o,s,e){this.data[o*this.size+s]^=e},r.prototype.isReserved=function(o,s){return this.reservedBit[o*this.size+s]},st=r,st}var ut={},Dt;function Ne(){return Dt||(Dt=1,function(r){const o=F().getSymbolSize;r.getRowColCoords=function(e){if(e===1)return[];const t=Math.floor(e/7)+2,n=o(e),i=n===145?26:Math.ceil((n-13)/(2*t-2))*2,u=[n-7];for(let a=1;a<t-1;a++)u[a]=u[a-1]-i;return u.push(6),u.reverse()},r.getPositions=function(e){const t=[],n=r.getRowColCoords(e),i=n.length;for(let u=0;u<i;u++)for(let a=0;a<i;a++)u===0&&a===0||u===0&&a===i-1||u===i-1&&a===0||t.push([n[u],n[a]]);return t}}(ut)),ut}var at={},Ut;function Me(){if(Ut)return at;Ut=1;const r=F().getSymbolSize,o=7;return at.getPositions=function(e){const t=r(e);return[[0,0],[t-o,0],[0,t-o]]},at}var ct={},kt;function Pe(){return kt||(kt=1,function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const o={N1:3,N2:3,N3:40,N4:10};r.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7},r.from=function(t){return r.isValid(t)?parseInt(t,10):void 0},r.getPenaltyN1=function(t){const n=t.size;let i=0,u=0,a=0,c=null,f=null;for(let p=0;p<n;p++){u=a=0,c=f=null;for(let g=0;g<n;g++){let l=t.get(p,g);l===c?u++:(u>=5&&(i+=o.N1+(u-5)),c=l,u=1),l=t.get(g,p),l===f?a++:(a>=5&&(i+=o.N1+(a-5)),f=l,a=1)}u>=5&&(i+=o.N1+(u-5)),a>=5&&(i+=o.N1+(a-5))}return i},r.getPenaltyN2=function(t){const n=t.size;let i=0;for(let u=0;u<n-1;u++)for(let a=0;a<n-1;a++){const c=t.get(u,a)+t.get(u,a+1)+t.get(u+1,a)+t.get(u+1,a+1);(c===4||c===0)&&i++}return i*o.N2},r.getPenaltyN3=function(t){const n=t.size;let i=0,u=0,a=0;for(let c=0;c<n;c++){u=a=0;for(let f=0;f<n;f++)u=u<<1&2047|t.get(c,f),f>=10&&(u===1488||u===93)&&i++,a=a<<1&2047|t.get(f,c),f>=10&&(a===1488||a===93)&&i++}return i*o.N3},r.getPenaltyN4=function(t){let n=0;const i=t.data.length;for(let a=0;a<i;a++)n+=t.data[a];return Math.abs(Math.ceil(n*100/i/5)-10)*o.N4};function s(e,t,n){switch(e){case r.Patterns.PATTERN000:return(t+n)%2===0;case r.Patterns.PATTERN001:return t%2===0;case r.Patterns.PATTERN010:return n%3===0;case r.Patterns.PATTERN011:return(t+n)%3===0;case r.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(n/3))%2===0;case r.Patterns.PATTERN101:return t*n%2+t*n%3===0;case r.Patterns.PATTERN110:return(t*n%2+t*n%3)%2===0;case r.Patterns.PATTERN111:return(t*n%3+(t+n)%2)%2===0;default:throw new Error("bad maskPattern:"+e)}}r.applyMask=function(t,n){const i=n.size;for(let u=0;u<i;u++)for(let a=0;a<i;a++)n.isReserved(a,u)||n.xor(a,u,s(t,a,u))},r.getBestMask=function(t,n){const i=Object.keys(r.Patterns).length;let u=0,a=1/0;for(let c=0;c<i;c++){n(c),r.applyMask(c,t);const f=r.getPenaltyN1(t)+r.getPenaltyN2(t)+r.getPenaltyN3(t)+r.getPenaltyN4(t);r.applyMask(c,t),f<a&&(a=f,u=c)}return u}}(ct)),ct}var Q={},Ft;function oe(){if(Ft)return Q;Ft=1;const r=It(),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],s=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Q.getBlocksCount=function(t,n){switch(n){case r.L:return o[(t-1)*4+0];case r.M:return o[(t-1)*4+1];case r.Q:return o[(t-1)*4+2];case r.H:return o[(t-1)*4+3];default:return}},Q.getTotalCodewordsCount=function(t,n){switch(n){case r.L:return s[(t-1)*4+0];case r.M:return s[(t-1)*4+1];case r.Q:return s[(t-1)*4+2];case r.H:return s[(t-1)*4+3];default:return}},Q}var lt={},j={},Vt;function _e(){if(Vt)return j;Vt=1;const r=new Uint8Array(512),o=new Uint8Array(256);return function(){let e=1;for(let t=0;t<255;t++)r[t]=e,o[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)r[t]=r[t-255]}(),j.log=function(e){if(e<1)throw new Error("log("+e+")");return o[e]},j.exp=function(e){return r[e]},j.mul=function(e,t){return e===0||t===0?0:r[o[e]+o[t]]},j}var zt;function Se(){return zt||(zt=1,function(r){const o=_e();r.mul=function(e,t){const n=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let u=0;u<t.length;u++)n[i+u]^=o.mul(e[i],t[u]);return n},r.mod=function(e,t){let n=new Uint8Array(e);for(;n.length-t.length>=0;){const i=n[0];for(let a=0;a<t.length;a++)n[a]^=o.mul(t[a],i);let u=0;for(;u<n.length&&n[u]===0;)u++;n=n.slice(u)}return n},r.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let n=0;n<e;n++)t=r.mul(t,new Uint8Array([1,o.exp(n)]));return t}}(lt)),lt}var ft,Ht;function be(){if(Ht)return ft;Ht=1;const r=Se();function o(s){this.genPoly=void 0,this.degree=s,this.degree&&this.initialize(this.degree)}return o.prototype.initialize=function(e){this.degree=e,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const n=r.mod(t,this.genPoly),i=this.degree-n.length;if(i>0){const u=new Uint8Array(this.degree);return u.set(n,i),u}return n},ft=o,ft}var dt={},gt={},ht={},Kt;function ie(){return Kt||(Kt=1,ht.isValid=function(o){return!isNaN(o)&&o>=1&&o<=40}),ht}var v={},Jt;function se(){if(Jt)return v;Jt=1;const r="[0-9]+",o="[A-Z $%*+\\-./:]+";let s="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";s=s.replace(/u/g,"\\u");const e="(?:(?![A-Z0-9 $%*+\\-./:]|"+s+`)(?:.|[\r
]))+`;v.KANJI=new RegExp(s,"g"),v.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),v.BYTE=new RegExp(e,"g"),v.NUMERIC=new RegExp(r,"g"),v.ALPHANUMERIC=new RegExp(o,"g");const t=new RegExp("^"+s+"$"),n=new RegExp("^"+r+"$"),i=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return v.testKanji=function(a){return t.test(a)},v.testNumeric=function(a){return n.test(a)},v.testAlphanumeric=function(a){return i.test(a)},v}var Yt;function V(){return Yt||(Yt=1,function(r){const o=ie(),s=se();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(n,i){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!o.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?n.ccBits[0]:i<27?n.ccBits[1]:n.ccBits[2]},r.getBestModeForData=function(n){return s.testNumeric(n)?r.NUMERIC:s.testAlphanumeric(n)?r.ALPHANUMERIC:s.testKanji(n)?r.KANJI:r.BYTE},r.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},r.isValid=function(n){return n&&n.bit&&n.ccBits};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+t)}}r.from=function(n,i){if(r.isValid(n))return n;try{return e(n)}catch{return i}}}(gt)),gt}var jt;function Le(){return jt||(jt=1,function(r){const o=F(),s=oe(),e=It(),t=V(),n=ie(),i=7973,u=o.getBCHDigit(i);function a(g,l,I){for(let M=1;M<=40;M++)if(l<=r.getCapacity(M,I,g))return M}function c(g,l){return t.getCharCountIndicator(g,l)+4}function f(g,l){let I=0;return g.forEach(function(M){const _=c(M.mode,l);I+=_+M.getBitsLength()}),I}function p(g,l){for(let I=1;I<=40;I++)if(f(g,I)<=r.getCapacity(I,l,t.MIXED))return I}r.from=function(l,I){return n.isValid(l)?parseInt(l,10):I},r.getCapacity=function(l,I,M){if(!n.isValid(l))throw new Error("Invalid QR Code version");typeof M>"u"&&(M=t.BYTE);const _=o.getSymbolTotalCodewords(l),A=s.getTotalCodewordsCount(l,I),P=(_-A)*8;if(M===t.MIXED)return P;const T=P-c(M,l);switch(M){case t.NUMERIC:return Math.floor(T/10*3);case t.ALPHANUMERIC:return Math.floor(T/11*2);case t.KANJI:return Math.floor(T/13);case t.BYTE:default:return Math.floor(T/8)}},r.getBestVersionForData=function(l,I){let M;const _=e.from(I,e.M);if(Array.isArray(l)){if(l.length>1)return p(l,_);if(l.length===0)return 1;M=l[0]}else M=l;return a(M.mode,M.getLength(),_)},r.getEncodedBits=function(l){if(!n.isValid(l)||l<7)throw new Error("Invalid QR Code version");let I=l<<12;for(;o.getBCHDigit(I)-u>=0;)I^=i<<o.getBCHDigit(I)-u;return l<<12|I}}(dt)),dt}var mt={},Ot;function ve(){if(Ot)return mt;Ot=1;const r=F(),o=1335,s=21522,e=r.getBCHDigit(o);return mt.getEncodedBits=function(n,i){const u=n.bit<<3|i;let a=u<<10;for(;r.getBCHDigit(a)-e>=0;)a^=o<<r.getBCHDigit(a)-e;return(u<<10|a)^s},mt}var wt={},Et,Gt;function qe(){if(Gt)return Et;Gt=1;const r=V();function o(s){this.mode=r.NUMERIC,this.data=s.toString()}return o.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t,n,i;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),i=parseInt(n,10),e.put(i,10);const u=this.data.length-t;u>0&&(n=this.data.substr(t),i=parseInt(n,10),e.put(i,u*3+1))},Et=o,Et}var Ct,Qt;function De(){if(Qt)return Ct;Qt=1;const r=V(),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function s(e){this.mode=r.ALPHANUMERIC,this.data=e}return s.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},s.prototype.getLength=function(){return this.data.length},s.prototype.getBitsLength=function(){return s.getBitsLength(this.data.length)},s.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let i=o.indexOf(this.data[n])*45;i+=o.indexOf(this.data[n+1]),t.put(i,11)}this.data.length%2&&t.put(o.indexOf(this.data[n]),6)},Ct=s,Ct}var yt,$t;function Ue(){if($t)return yt;$t=1;const r=V();function o(s){this.mode=r.BYTE,typeof s=="string"?this.data=new TextEncoder().encode(s):this.data=new Uint8Array(s)}return o.getBitsLength=function(e){return e*8},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(s){for(let e=0,t=this.data.length;e<t;e++)s.put(this.data[e],8)},yt=o,yt}var pt,Wt;function ke(){if(Wt)return pt;Wt=1;const r=V(),o=F();function s(e){this.mode=r.KANJI,this.data=e}return s.getBitsLength=function(t){return t*13},s.prototype.getLength=function(){return this.data.length},s.prototype.getBitsLength=function(){return s.getBitsLength(this.data.length)},s.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=o.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},pt=s,pt}var Bt={exports:{}},Zt;function Fe(){return Zt||(Zt=1,function(r){var o={single_source_shortest_paths:function(s,e,t){var n={},i={};i[e]=0;var u=o.PriorityQueue.make();u.push(e,0);for(var a,c,f,p,g,l,I,M,_;!u.empty();){a=u.pop(),c=a.value,p=a.cost,g=s[c]||{};for(f in g)g.hasOwnProperty(f)&&(l=g[f],I=p+l,M=i[f],_=typeof i[f]>"u",(_||M>I)&&(i[f]=I,u.push(f,I),n[f]=c))}if(typeof t<"u"&&typeof i[t]>"u"){var A=["Could not find a path from ",e," to ",t,"."].join("");throw new Error(A)}return n},extract_shortest_path_from_predecessor_list:function(s,e){for(var t=[],n=e;n;)t.push(n),s[n],n=s[n];return t.reverse(),t},find_path:function(s,e,t){var n=o.single_source_shortest_paths(s,e,t);return o.extract_shortest_path_from_predecessor_list(n,t)},PriorityQueue:{make:function(s){var e=o.PriorityQueue,t={},n;s=s||{};for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t.queue=[],t.sorter=s.sorter||e.default_sorter,t},default_sorter:function(s,e){return s.cost-e.cost},push:function(s,e){var t={value:s,cost:e};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=o}(Bt)),Bt.exports}var Xt;function Ve(){return Xt||(Xt=1,function(r){const o=V(),s=qe(),e=De(),t=Ue(),n=ke(),i=se(),u=F(),a=Fe();function c(A){return unescape(encodeURIComponent(A)).length}function f(A,P,T){const B=[];let S;for(;(S=A.exec(T))!==null;)B.push({data:S[0],index:S.index,mode:P,length:S[0].length});return B}function p(A){const P=f(i.NUMERIC,o.NUMERIC,A),T=f(i.ALPHANUMERIC,o.ALPHANUMERIC,A);let B,S;return u.isKanjiModeEnabled()?(B=f(i.BYTE,o.BYTE,A),S=f(i.KANJI,o.KANJI,A)):(B=f(i.BYTE_KANJI,o.BYTE,A),S=[]),P.concat(T,B,S).sort(function(C,E){return C.index-E.index}).map(function(C){return{data:C.data,mode:C.mode,length:C.length}})}function g(A,P){switch(P){case o.NUMERIC:return s.getBitsLength(A);case o.ALPHANUMERIC:return e.getBitsLength(A);case o.KANJI:return n.getBitsLength(A);case o.BYTE:return t.getBitsLength(A)}}function l(A){return A.reduce(function(P,T){const B=P.length-1>=0?P[P.length-1]:null;return B&&B.mode===T.mode?(P[P.length-1].data+=T.data,P):(P.push(T),P)},[])}function I(A){const P=[];for(let T=0;T<A.length;T++){const B=A[T];switch(B.mode){case o.NUMERIC:P.push([B,{data:B.data,mode:o.ALPHANUMERIC,length:B.length},{data:B.data,mode:o.BYTE,length:B.length}]);break;case o.ALPHANUMERIC:P.push([B,{data:B.data,mode:o.BYTE,length:B.length}]);break;case o.KANJI:P.push([B,{data:B.data,mode:o.BYTE,length:c(B.data)}]);break;case o.BYTE:P.push([{data:B.data,mode:o.BYTE,length:c(B.data)}])}}return P}function M(A,P){const T={},B={start:{}};let S=["start"];for(let h=0;h<A.length;h++){const C=A[h],E=[];for(let d=0;d<C.length;d++){const R=C[d],m=""+h+d;E.push(m),T[m]={node:R,lastCount:0},B[m]={};for(let y=0;y<S.length;y++){const w=S[y];T[w]&&T[w].node.mode===R.mode?(B[w][m]=g(T[w].lastCount+R.length,R.mode)-g(T[w].lastCount,R.mode),T[w].lastCount+=R.length):(T[w]&&(T[w].lastCount=R.length),B[w][m]=g(R.length,R.mode)+4+o.getCharCountIndicator(R.mode,P))}}S=E}for(let h=0;h<S.length;h++)B[S[h]].end=0;return{map:B,table:T}}function _(A,P){let T;const B=o.getBestModeForData(A);if(T=o.from(P,B),T!==o.BYTE&&T.bit<B.bit)throw new Error('"'+A+'" cannot be encoded with mode '+o.toString(T)+`.
 Suggested mode is: `+o.toString(B));switch(T===o.KANJI&&!u.isKanjiModeEnabled()&&(T=o.BYTE),T){case o.NUMERIC:return new s(A);case o.ALPHANUMERIC:return new e(A);case o.KANJI:return new n(A);case o.BYTE:return new t(A)}}r.fromArray=function(P){return P.reduce(function(T,B){return typeof B=="string"?T.push(_(B,null)):B.data&&T.push(_(B.data,B.mode)),T},[])},r.fromString=function(P,T){const B=p(P,u.isKanjiModeEnabled()),S=I(B),h=M(S,T),C=a.find_path(h.map,"start","end"),E=[];for(let d=1;d<C.length-1;d++)E.push(h.table[C[d]].node);return r.fromArray(l(E))},r.rawSplit=function(P){return r.fromArray(p(P,u.isKanjiModeEnabled()))}}(wt)),wt}var xt;function ze(){if(xt)return rt;xt=1;const r=F(),o=It(),s=Te(),e=Ie(),t=Ne(),n=Me(),i=Pe(),u=oe(),a=be(),c=Le(),f=ve(),p=V(),g=Ve();function l(h,C){const E=h.size,d=n.getPositions(C);for(let R=0;R<d.length;R++){const m=d[R][0],y=d[R][1];for(let w=-1;w<=7;w++)if(!(m+w<=-1||E<=m+w))for(let N=-1;N<=7;N++)y+N<=-1||E<=y+N||(w>=0&&w<=6&&(N===0||N===6)||N>=0&&N<=6&&(w===0||w===6)||w>=2&&w<=4&&N>=2&&N<=4?h.set(m+w,y+N,!0,!0):h.set(m+w,y+N,!1,!0))}}function I(h){const C=h.size;for(let E=8;E<C-8;E++){const d=E%2===0;h.set(E,6,d,!0),h.set(6,E,d,!0)}}function M(h,C){const E=t.getPositions(C);for(let d=0;d<E.length;d++){const R=E[d][0],m=E[d][1];for(let y=-2;y<=2;y++)for(let w=-2;w<=2;w++)y===-2||y===2||w===-2||w===2||y===0&&w===0?h.set(R+y,m+w,!0,!0):h.set(R+y,m+w,!1,!0)}}function _(h,C){const E=h.size,d=c.getEncodedBits(C);let R,m,y;for(let w=0;w<18;w++)R=Math.floor(w/3),m=w%3+E-8-3,y=(d>>w&1)===1,h.set(R,m,y,!0),h.set(m,R,y,!0)}function A(h,C,E){const d=h.size,R=f.getEncodedBits(C,E);let m,y;for(m=0;m<15;m++)y=(R>>m&1)===1,m<6?h.set(m,8,y,!0):m<8?h.set(m+1,8,y,!0):h.set(d-15+m,8,y,!0),m<8?h.set(8,d-m-1,y,!0):m<9?h.set(8,15-m-1+1,y,!0):h.set(8,15-m-1,y,!0);h.set(d-8,8,1,!0)}function P(h,C){const E=h.size;let d=-1,R=E-1,m=7,y=0;for(let w=E-1;w>0;w-=2)for(w===6&&w--;;){for(let N=0;N<2;N++)if(!h.isReserved(R,w-N)){let U=!1;y<C.length&&(U=(C[y]>>>m&1)===1),h.set(R,w-N,U),m--,m===-1&&(y++,m=7)}if(R+=d,R<0||E<=R){R-=d,d=-d;break}}}function T(h,C,E){const d=new s;E.forEach(function(N){d.put(N.mode.bit,4),d.put(N.getLength(),p.getCharCountIndicator(N.mode,h)),N.write(d)});const R=r.getSymbolTotalCodewords(h),m=u.getTotalCodewordsCount(h,C),y=(R-m)*8;for(d.getLengthInBits()+4<=y&&d.put(0,4);d.getLengthInBits()%8!==0;)d.putBit(0);const w=(y-d.getLengthInBits())/8;for(let N=0;N<w;N++)d.put(N%2?17:236,8);return B(d,h,C)}function B(h,C,E){const d=r.getSymbolTotalCodewords(C),R=u.getTotalCodewordsCount(C,E),m=d-R,y=u.getBlocksCount(C,E),w=d%y,N=y-w,U=Math.floor(d/y),K=Math.floor(m/y),ce=K+1,Nt=U-K,le=new a(Nt);let W=0;const O=new Array(y),Mt=new Array(y);let Z=0;const fe=new Uint8Array(h.buffer);for(let z=0;z<y;z++){const x=z<N?K:ce;O[z]=fe.slice(W,W+x),Mt[z]=le.encode(O[z]),W+=x,Z=Math.max(Z,x)}const X=new Uint8Array(d);let Pt=0,q,D;for(q=0;q<Z;q++)for(D=0;D<y;D++)q<O[D].length&&(X[Pt++]=O[D][q]);for(q=0;q<Nt;q++)for(D=0;D<y;D++)X[Pt++]=Mt[D][q];return X}function S(h,C,E,d){let R;if(Array.isArray(h))R=g.fromArray(h);else if(typeof h=="string"){let U=C;if(!U){const K=g.rawSplit(h);U=c.getBestVersionForData(K,E)}R=g.fromString(h,U||40)}else throw new Error("Invalid data");const m=c.getBestVersionForData(R,E);if(!m)throw new Error("The amount of data is too big to be stored in a QR Code");if(!C)C=m;else if(C<m)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+m+`.
`);const y=T(C,E,R),w=r.getSymbolSize(C),N=new e(w);return l(N,C),I(N),M(N,C),A(N,E,0),C>=7&&_(N,C),P(N,y),isNaN(d)&&(d=i.getBestMask(N,A.bind(null,N,E))),i.applyMask(d,N),A(N,E,d),{modules:N,version:C,errorCorrectionLevel:E,maskPattern:d,segments:R}}return rt.create=function(C,E){if(typeof C>"u"||C==="")throw new Error("No input text");let d=o.M,R,m;return typeof E<"u"&&(d=o.from(E.errorCorrectionLevel,o.M),R=c.from(E.version),m=i.from(E.maskPattern),E.toSJISFunc&&r.setToSJISFunction(E.toSJISFunc)),S(C,R,d,m)},rt}var Rt={},At={},te;function ue(){return te||(te=1,function(r){function o(s){if(typeof s=="number"&&(s=s.toString()),typeof s!="string")throw new Error("Color should be defined as hex string");let e=s.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+s);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(n){return[n,n]}))),e.length===6&&e.push("F","F");const t=parseInt(e.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+e.slice(0,6).join("")}}r.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=typeof e.margin>"u"||e.margin===null||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:n,scale:n?4:i,margin:t,color:{dark:o(e.color.dark||"#000000ff"),light:o(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},r.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},r.getImageWidth=function(e,t){const n=r.getScale(e,t);return Math.floor((e+t.margin*2)*n)},r.qrToImageData=function(e,t,n){const i=t.modules.size,u=t.modules.data,a=r.getScale(i,n),c=Math.floor((i+n.margin*2)*a),f=n.margin*a,p=[n.color.light,n.color.dark];for(let g=0;g<c;g++)for(let l=0;l<c;l++){let I=(g*c+l)*4,M=n.color.light;if(g>=f&&l>=f&&g<c-f&&l<c-f){const _=Math.floor((g-f)/a),A=Math.floor((l-f)/a);M=p[u[_*i+A]?1:0]}e[I++]=M.r,e[I++]=M.g,e[I++]=M.b,e[I]=M.a}}}(At)),At}var ee;function He(){return ee||(ee=1,function(r){const o=ue();function s(t,n,i){t.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=i,n.width=i,n.style.height=i+"px",n.style.width=i+"px"}function e(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(n,i,u){let a=u,c=i;typeof a>"u"&&(!i||!i.getContext)&&(a=i,i=void 0),i||(c=e()),a=o.getOptions(a);const f=o.getImageWidth(n.modules.size,a),p=c.getContext("2d"),g=p.createImageData(f,f);return o.qrToImageData(g.data,n,a),s(p,c,f),p.putImageData(g,0,0),c},r.renderToDataURL=function(n,i,u){let a=u;typeof a>"u"&&(!i||!i.getContext)&&(a=i,i=void 0),a||(a={});const c=r.render(n,i,a),f=a.type||"image/png",p=a.rendererOpts||{};return c.toDataURL(f,p.quality)}}(Rt)),Rt}var Tt={},ne;function Ke(){if(ne)return Tt;ne=1;const r=ue();function o(t,n){const i=t.a/255,u=n+'="'+t.hex+'"';return i<1?u+" "+n+'-opacity="'+i.toFixed(2).slice(1)+'"':u}function s(t,n,i){let u=t+n;return typeof i<"u"&&(u+=" "+i),u}function e(t,n,i){let u="",a=0,c=!1,f=0;for(let p=0;p<t.length;p++){const g=Math.floor(p%n),l=Math.floor(p/n);!g&&!c&&(c=!0),t[p]?(f++,p>0&&g>0&&t[p-1]||(u+=c?s("M",g+i,.5+l+i):s("m",a,0),a=0,c=!1),g+1<n&&t[p+1]||(u+=s("h",f),f=0)):a++}return u}return Tt.render=function(n,i,u){const a=r.getOptions(i),c=n.modules.size,f=n.modules.data,p=c+a.margin*2,g=a.color.light.a?"<path "+o(a.color.light,"fill")+' d="M0 0h'+p+"v"+p+'H0z"/>':"",l="<path "+o(a.color.dark,"stroke")+' d="'+e(f,c,a.margin)+'"/>',I='viewBox="0 0 '+p+" "+p+'"',_='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+I+' shape-rendering="crispEdges">'+g+l+`</svg>
`;return typeof u=="function"&&u(null,_),_},Tt}var re;function Je(){if(re)return H;re=1;const r=Ae(),o=ze(),s=He(),e=Ke();function t(n,i,u,a,c){const f=[].slice.call(arguments,1),p=f.length,g=typeof f[p-1]=="function";if(!g&&!r())throw new Error("Callback required as last argument");if(g){if(p<2)throw new Error("Too few arguments provided");p===2?(c=u,u=i,i=a=void 0):p===3&&(i.getContext&&typeof c>"u"?(c=a,a=void 0):(c=a,a=u,u=i,i=void 0))}else{if(p<1)throw new Error("Too few arguments provided");return p===1?(u=i,i=a=void 0):p===2&&!i.getContext&&(a=u,u=i,i=void 0),new Promise(function(l,I){try{const M=o.create(u,a);l(n(M,i,a))}catch(M){I(M)}})}try{const l=o.create(u,a);c(null,n(l,i,a))}catch(l){c(l)}}return H.create=o.create,H.toCanvas=t.bind(null,s.render),H.toDataURL=t.bind(null,s.renderToDataURL),H.toString=t.bind(null,function(n,i,u){return e.render(n,u)}),H}var Ye=Je();const $=de(Ye),je={style:{"margin-bottom":"0"}},Oe=["src"],Ge=["src"],Qe=["src"],ae=ge({__name:"qrcode",setup(r){const o=tt(""),s=tt(""),e=tt(""),t=he("canvasRef");me(()=>{$.toDataURL("Fantastic-admin 真棒！").then(i=>{o.value=i}).catch(i=>{console.log(i)}),$.toCanvas(t.value,"Fantastic-admin 真棒！").then(()=>{}).catch(i=>{console.log(i)}),$.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then(i=>{s.value=i}).catch(i=>{console.log(i)}),$.toDataURL("Fantastic-admin 真棒！",{width:100}).then(i=>{e.value=i}).catch(i=>{console.log(i)})});function n(i){window.open(i,"_blank")}return(i,u)=>{const a=G("ElTag"),c=Ce,f=G("ElButton"),p=ye,g=pe,l=G("ElCol"),I=G("ElRow");return we(),Ee("div",null,[b(Re),b(p,{title:"二维码"},{content:L(()=>[J("p",je,[u[3]||(u[3]=Y(" 安装命令：")),b(a,null,{default:L(()=>u[1]||(u[1]=[Y("pnpm add qrcode")])),_:1}),u[4]||(u[4]=Y()),b(a,null,{default:L(()=>u[2]||(u[2]=[Y("pnpm add @types/qrcode -D")])),_:1})])]),default:L(()=>[b(f,{onClick:u[0]||(u[0]=M=>n("https://github.com/soldair/node-qrcode"))},{icon:L(()=>[b(c,{name:"i-ep:link"})]),default:L(()=>[u[5]||(u[5]=Y(" 访问 node-qrcode "))]),_:1})]),_:1}),b(I,{gutter:20,style:{margin:"0 10px"}},{default:L(()=>[b(l,{sm:6},{default:L(()=>[b(g,{title:"渲染成 img 标签",style:{margin:"0"}},{default:L(()=>[J("img",{src:et(o)},null,8,Oe)]),_:1})]),_:1}),b(l,{sm:6},{default:L(()=>[b(g,{title:"渲染成 canvas 标签",style:{margin:"0"}},{default:L(()=>[J("canvas",{ref_key:"canvasRef",ref:t},null,512)]),_:1})]),_:1}),b(l,{sm:6},{default:L(()=>[b(g,{title:"自定义颜色",style:{margin:"0"}},{default:L(()=>[J("img",{src:et(s)},null,8,Ge)]),_:1})]),_:1}),b(l,{sm:6},{default:L(()=>[b(g,{title:"指定宽度",style:{margin:"0"}},{default:L(()=>[J("img",{src:et(e)},null,8,Qe)]),_:1})]),_:1})]),_:1})])}}});typeof _t=="function"&&_t(ae);const Ze=Be(ae,[["__scopeId","data-v-ca6db7da"]]);export{Ze as default};