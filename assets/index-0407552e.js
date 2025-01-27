(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="151",Ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zd=0,Wl=1,$d=2,th=1,Jd=2,rr=3,Kn=0,kt=1,Sn=2,pi=0,Ss=1,wo=2,Xl=3,ql=4,Qd=5,gs=100,ef=101,tf=102,jl=103,Yl=104,nf=200,sf=201,rf=202,af=203,nh=204,ih=205,of=206,lf=207,cf=208,uf=209,hf=210,df=0,ff=1,pf=2,Ao=3,mf=4,gf=5,_f=6,xf=7,sh=0,vf=1,yf=2,jn=0,Mf=1,Sf=2,bf=3,Tf=4,wf=5,rh=300,Ls=301,Rs=302,Eo=303,Co=304,Ma=306,Ps=1e3,un=1001,ua=1002,vt=1003,Lo=1004,ra=1005,Bt=1006,ah=1007,Vi=1008,Gi=1009,Af=1010,Ef=1011,oh=1012,Cf=1013,Di=1014,li=1015,gr=1016,Lf=1017,Rf=1018,bs=1020,Pf=1021,hn=1023,If=1024,Df=1025,Oi=1026,Is=1027,Uf=1028,Nf=1029,Of=1030,Ff=1031,kf=1033,Da=33776,Ua=33777,Na=33778,Oa=33779,Kl=35840,Zl=35841,$l=35842,Jl=35843,Bf=36196,Ql=37492,ec=37496,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,ac=37813,oc=37814,lc=37815,cc=37816,uc=37817,hc=37818,dc=37819,fc=37820,pc=37821,Fa=36492,zf=36283,mc=36284,gc=36285,_c=36286,Vf=2200,Gf=2201,Hf=2202,_r=2300,Ds=2301,ka=2302,_s=2400,xs=2401,ha=2402,ul=2500,Wf=2501,Xf=0,lh=1,Ro=2,Hi=3e3,Ve=3001,qf=3200,jf=3201,ch=0,Yf=1,cn="srgb",Us="srgb-linear",uh="display-p3",Ba=7680,Kf=519,Po=35044,xc="300 es",Io=1035;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vc=1234567;const hr=Math.PI/180,Ns=180/Math.PI;function bn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[o&255]+At[o>>8&255]+At[o>>16&255]+At[o>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Mt(o,e,t){return Math.max(e,Math.min(t,o))}function hl(o,e){return(o%e+e)%e}function Zf(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function $f(o,e,t){return o!==e?(t-o)/(e-o):0}function dr(o,e,t){return(1-t)*o+t*e}function Jf(o,e,t,n){return dr(o,e,1-Math.exp(-t*n))}function Qf(o,e=1){return e-Math.abs(hl(o,e*2)-e)}function ep(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function tp(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function np(o,e){return o+Math.floor(Math.random()*(e-o+1))}function ip(o,e){return o+Math.random()*(e-o)}function sp(o){return o*(.5-Math.random())}function rp(o){o!==void 0&&(vc=o);let e=vc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ap(o){return o*hr}function op(o){return o*Ns}function Do(o){return(o&o-1)===0&&o!==0}function hh(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function dh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function lp(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),u=r((e+n)/2),h=s((e-n)/2),d=r((e-n)/2),p=s((n-e)/2),_=r((n-e)/2);switch(i){case"XYX":o.set(a*u,l*h,l*d,a*c);break;case"YZY":o.set(l*d,a*u,l*h,a*c);break;case"ZXZ":o.set(l*h,l*d,a*u,a*c);break;case"XZX":o.set(a*u,l*_,l*p,a*c);break;case"YXY":o.set(l*p,a*u,l*_,a*c);break;case"ZYZ":o.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xe(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const cp={DEG2RAD:hr,RAD2DEG:Ns,generateUUID:bn,clamp:Mt,euclideanModulo:hl,mapLinear:Zf,inverseLerp:$f,lerp:dr,damp:Jf,pingpong:Qf,smoothstep:ep,smootherstep:tp,randInt:np,randFloat:ip,randFloatSpread:sp,seededRandom:rp,degToRad:ap,radToDeg:op,isPowerOfTwo:Do,ceilPowerOfTwo:hh,floorPowerOfTwo:dh,setQuaternionFromProperEuler:lp,normalize:Xe,denormalize:qn};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],S=i[1],M=i[4],v=i[7],y=i[2],E=i[5],L=i[8];return s[0]=r*g+a*S+l*y,s[3]=r*m+a*M+l*E,s[6]=r*f+a*v+l*L,s[1]=c*g+u*S+h*y,s[4]=c*m+u*M+h*E,s[7]=c*f+u*v+h*L,s[2]=d*g+p*S+_*y,s[5]=d*m+p*M+_*E,s[8]=d*f+p*v+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*a*c-n*s*u+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*r-a*c,d=a*l-u*s,p=c*s-r*l,_=t*h+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*r)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(r*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const za=new Ne;function fh(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function xr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ts(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Va(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const up=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),hp=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function dp(o){return o.convertSRGBToLinear().applyMatrix3(hp)}function fp(o){return o.applyMatrix3(up).convertLinearToSRGB()}const pp={[Us]:o=>o,[cn]:o=>o.convertSRGBToLinear(),[uh]:dp},mp={[Us]:o=>o,[cn]:o=>o.convertLinearToSRGB(),[uh]:fp},qt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Us},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=pp[e],i=mp[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let $i;class ph{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=xr("canvas")),$i.width=e.width,$i.height=e.height;const n=$i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ts(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ts(t[n]/255)*255):t[n]=Ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class mh{constructor(e=null){this.isSource=!0,this.uuid=bn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Ga(i[r].image)):s.push(Ga(i[r]))}else s=Ga(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ga(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ph.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gp=0;class St extends vi{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=un,i=un,s=Bt,r=Vi,a=hn,l=Gi,c=St.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=bn(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=rh;St.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(p+1)/2,y=(f+1)/2,E=(u+d)/4,L=(h+g)/4,b=(_+m)/4;return M>v&&M>y?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=L/n):v>y?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=b/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=L/s,i=b/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(h-g)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wi extends vi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gh extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _p extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[r+0],p=s[r+1],_=s[r+2],g=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==p||u!==_){let m=1-a;const f=l*d+c*p+u*_+h*g,S=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const y=Math.sqrt(M),E=Math.atan2(y,f*S);m=Math.sin(m*E)/y,a=Math.sin(a*E)/y}const v=a*S;if(l=l*m+d*v,c=c*m+p*v,u=u*m+_*v,h=h*m+g*v,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[r],d=s[r+1],p=s[r+2],_=s[r+3];return e[t]=a*_+u*h+l*p-c*d,e[t+1]=l*_+u*d+c*h-a*p,e[t+2]=c*_+u*p+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),p=l(i/2),_=l(s/2);switch(r){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(r-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(r-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*a+i*c-s*l,this._y=i*u+r*l+s*a-n*c,this._z=s*u+r*c+n*l-i*a,this._w=r*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=l*t+r*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-r*t,d=-s*t-r*n-a*i;return this.x=c*l+d*-s+u*-a-h*-r,this.y=u*l+d*-r+h*-s-c*-a,this.z=h*l+d*-a+c*-r-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new I,yc=new Qt;class Jn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox),Ji.applyMatrix4(e.matrixWorld),this.union(Ji);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,a=s.count;r<a;r++)Fn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Fn)}else i.boundingBox===null&&i.computeBoundingBox(),Ji.copy(i.boundingBox),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Ir.subVectors(this.max,Ks),Qi.subVectors(e.a,Ks),es.subVectors(e.b,Ks),ts.subVectors(e.c,Ks),ti.subVectors(es,Qi),ni.subVectors(ts,es),Ti.subVectors(Qi,ts);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Ti.z,Ti.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Ti.z,0,-Ti.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Ti.y,Ti.x,0];return!Wa(t,Qi,es,ts,Ir)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,Qi,es,ts,Ir))?!1:(Dr.crossVectors(ti,ni),t=[Dr.x,Dr.y,Dr.z],Wa(t,Qi,es,ts,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,Ji=new Jn,Qi=new I,es=new I,ts=new I,ti=new I,ni=new I,Ti=new I,Ks=new I,Ir=new I,Dr=new I,wi=new I;function Wa(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){wi.fromArray(o,s);const a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xp=new Jn,Zs=new I,Xa=new I;class Qn{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Xa)),this.expandByPoint(Zs.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new I,qa=new I,Ur=new I,ii=new I,ja=new I,Nr=new I,Ya=new I;class Sa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qa.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(qa);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ur),a=ii.dot(this.direction),l=-ii.dot(Ur),c=ii.lengthSq(),u=Math.abs(1-r*r);let h,d,p,_;if(u>0)if(h=r*l-a,d=r*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,p=h*(h+r*d+2*a)+d*(r*h+d+2*l)+c}else d=s,h=Math.max(0,-(r*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(r*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(qa).addScaledVector(Ur,d),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,s){ja.subVectors(t,e),Nr.subVectors(n,e),Ya.crossVectors(ja,Nr);let r=this.direction.dot(Ya),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ii.subVectors(this.origin,e);const l=a*this.direction.dot(Nr.crossVectors(ii,Nr));if(l<0)return null;const c=a*this.direction.dot(ja.cross(ii));if(c<0||l+c>r)return null;const u=-a*ii.dot(Ya);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,a,l,c,u,h,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=r,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),r=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=r*u,p=r*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+p*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,g=c*h;t[0]=d+g*a,t[4]=_*a-p,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-a,t[2]=p*a-_,t[6]=g+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,g=c*h;t[0]=d-g*a,t[4]=-r*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=r*u,t[9]=g-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*u,p=r*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,p=r*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+p,t[1]=h,t[5]=r*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=r*l,p=r*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=r*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vp,e,yp)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),si.crossVectors(n,jt),si.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),si.crossVectors(n,jt)),si.normalize(),Or.crossVectors(jt,si),i[0]=si.x,i[4]=Or.x,i[8]=jt.x,i[1]=si.y,i[5]=Or.y,i[9]=jt.y,i[2]=si.z,i[6]=Or.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],S=n[3],M=n[7],v=n[11],y=n[15],E=i[0],L=i[4],b=i[8],x=i[12],T=i[1],B=i[5],k=i[9],P=i[13],U=i[2],F=i[6],K=i[10],Z=i[14],X=i[3],ne=i[7],J=i[11],_e=i[15];return s[0]=r*E+a*T+l*U+c*X,s[4]=r*L+a*B+l*F+c*ne,s[8]=r*b+a*k+l*K+c*J,s[12]=r*x+a*P+l*Z+c*_e,s[1]=u*E+h*T+d*U+p*X,s[5]=u*L+h*B+d*F+p*ne,s[9]=u*b+h*k+d*K+p*J,s[13]=u*x+h*P+d*Z+p*_e,s[2]=_*E+g*T+m*U+f*X,s[6]=_*L+g*B+m*F+f*ne,s[10]=_*b+g*k+m*K+f*J,s[14]=_*x+g*P+m*Z+f*_e,s[3]=S*E+M*T+v*U+y*X,s[7]=S*L+M*B+v*F+y*ne,s[11]=S*b+M*k+v*K+y*J,s[15]=S*x+M*P+v*Z+y*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*p-n*l*p)+g*(+t*l*p-t*c*d+s*r*d-i*r*p+i*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*r*h+n*r*p+s*a*u-n*c*u)+f*(-i*a*u-t*l*h+t*a*d+i*r*h-n*r*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],S=h*m*c-g*d*c+g*l*p-a*m*p-h*l*f+a*d*f,M=_*d*c-u*m*c-_*l*p+r*m*p+u*l*f-r*d*f,v=u*g*c-_*h*c+_*a*p-r*g*p-u*a*f+r*h*f,y=_*h*l-u*g*l-_*a*d+r*g*d+u*a*m-r*h*m,E=t*S+n*M+i*v+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=S*L,e[1]=(g*d*s-h*m*s-g*i*p+n*m*p+h*i*f-n*d*f)*L,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*f+n*l*f)*L,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*p-n*l*p)*L,e[4]=M*L,e[5]=(u*m*s-_*d*s+_*i*p-t*m*p-u*i*f+t*d*f)*L,e[6]=(_*l*s-r*m*s-_*i*c+t*m*c+r*i*f-t*l*f)*L,e[7]=(r*d*s-u*l*s+u*i*c-t*d*c-r*i*p+t*l*p)*L,e[8]=v*L,e[9]=(_*h*s-u*g*s-_*n*p+t*g*p+u*n*f-t*h*f)*L,e[10]=(r*g*s-_*a*s+_*n*c-t*g*c-r*n*f+t*a*f)*L,e[11]=(u*a*s-r*h*s-u*n*c+t*h*c+r*n*p-t*a*p)*L,e[12]=y*L,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*L,e[14]=(_*a*i-r*g*i-_*n*l+t*g*l+r*n*m-t*a*m)*L,e[15]=(r*h*i-u*a*i+u*n*l-t*h*l-r*n*d+t*a*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,u=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*r,0,c*l-i*a,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,u=r+r,h=a+a,d=s*c,p=s*u,_=s*h,g=r*u,m=r*h,f=a*h,S=l*c,M=l*u,v=l*h,y=n.x,E=n.y,L=n.z;return i[0]=(1-(g+f))*y,i[1]=(p+v)*y,i[2]=(_-M)*y,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(d+f))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(_+M)*L,i[9]=(m-S)*L,i[10]=(1-(d+g))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ns.set(i[0],i[1],i[2]).length();const r=ns.set(i[4],i[5],i[6]).length(),a=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],xn.copy(this);const c=1/s,u=1/r,h=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(r+s)/(r-s),p=-2*r*s/(r-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,r){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(r-s),h=(t+e)*l,d=(n+i)*c,p=(r+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new I,xn=new Pe,vp=new I(0,0,0),yp=new I(1,1,1),si=new I,Or=new I,jt=new I,Mc=new Pe,Sc=new Qt;class ba{constructor(e=0,t=0,n=0,i=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mp=0;const bc=new I,is=new Qt,Bn=new Pe,Fr=new I,$s=new I,Sp=new I,bp=new Qt,Tc=new I(1,0,0),wc=new I(0,1,0),Ac=new I(0,0,1),Tp={type:"added"},Ec={type:"removed"};class $e extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const e=new I,t=new ba,n=new Qt,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ne}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Tc,e)}rotateY(e){return this.rotateOnAxis(wc,e)}rotateZ(e){return this.rotateOnAxis(Ac,e)}translateOnAxis(e,t){return bc.copy(e).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tc,e)}translateY(e){return this.translateOnAxis(wc,e)}translateZ(e){return this.translateOnAxis(Ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt($s,Fr,this.up):Bn.lookAt(Fr,$s,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Bn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ec)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ec)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),p=r(e.animations),_=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}$e.DEFAULT_UP=new I(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new I,zn=new I,Ka=new I,Vn=new I,ss=new I,rs=new I,Cc=new I,Za=new I,$a=new I,Ja=new I;let kr=!1;class Mn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){vn.subVectors(i,t),zn.subVectors(n,t),Ka.subVectors(e,t);const r=vn.dot(vn),a=vn.dot(zn),l=vn.dot(Ka),c=zn.dot(zn),u=zn.dot(Ka),h=r*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,_=(r*u-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn),Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(e,t,n,i,s,r,a,l){return kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kr=!0),this.getInterpolation(e,t,n,i,s,r,a,l)}static getInterpolation(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,Vn),l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(r,Vn.y),l.addScaledVector(a,Vn.z),l}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),zn.subVectors(e,t),vn.cross(zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),vn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kr=!0),Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;ss.subVectors(i,n),rs.subVectors(s,n),Za.subVectors(e,n);const l=ss.dot(Za),c=rs.dot(Za);if(l<=0&&c<=0)return t.copy(n);$a.subVectors(e,i);const u=ss.dot($a),h=rs.dot($a);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(ss,r);Ja.subVectors(e,s);const p=ss.dot(Ja),_=rs.dot(Ja);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(rs,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Cc.subVectors(s,i),a=(h-u)/(h-u+(p-_)),t.copy(i).addScaledVector(Cc,a);const f=1/(m+g+d);return r=g*f,a=d*f,t.copy(n).addScaledVector(ss,r).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let wp=0;class In extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Ss,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Qa(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qt.workingColorSpace){if(e=hl(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Qa(r,s,e+1/3),this.g=Qa(r,s,e),this.b=Qa(r,s,e-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(e,t=cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,qt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,qt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=_h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return qt.fromWorkingColorSpace(Et.copy(this),e),Mt(Et.r*255,0,255)<<16^Mt(Et.g*255,0,255)<<8^Mt(Et.b*255,0,255)<<0}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,i=Et.g,s=Et.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const h=r-a;switch(c=u<=.5?h/(r+a):h/(2-r-a),r){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=cn){qt.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,i=Et.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(yn),yn.h+=e,yn.s+=t,yn.l+=n,this.setHSL(yn.h,yn.s,yn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(Br);const n=dr(yn.h,Br.h,t),i=dr(yn.s,Br.s,t),s=dr(yn.l,Br.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new ye;ye.NAMES=_h;class ci extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new I,zr=new Ae;class pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Po,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array),s=Xe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Po&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xh extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vh extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yn extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ap=0;const rn=new Pe,eo=new $e,as=new I,Yt=new Jn,Js=new Jn,xt=new I;class gn extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fh(e)?vh:xh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Yt.min,Js.min),Yt.expandByPoint(xt),xt.addVectors(Yt.max,Js.max),Yt.expandByPoint(xt)):(Yt.expandByPoint(Js.min),Yt.expandByPoint(Js.max))}Yt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xt.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(e,c),xt.add(as)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new I,u[T]=new I;const h=new I,d=new I,p=new I,_=new Ae,g=new Ae,m=new Ae,f=new I,S=new I;function M(T,B,k){h.fromArray(i,T*3),d.fromArray(i,B*3),p.fromArray(i,k*3),_.fromArray(r,T*2),g.fromArray(r,B*2),m.fromArray(r,k*2),d.sub(h),p.sub(h),g.sub(_),m.sub(_);const P=1/(g.x*m.y-m.x*g.y);isFinite(P)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(P),S.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(P),c[T].add(f),c[B].add(f),c[k].add(f),u[T].add(S),u[B].add(S),u[k].add(S))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let T=0,B=v.length;T<B;++T){const k=v[T],P=k.start,U=k.count;for(let F=P,K=P+U;F<K;F+=3)M(n[F+0],n[F+1],n[F+2])}const y=new I,E=new I,L=new I,b=new I;function x(T){L.fromArray(s,T*3),b.copy(L);const B=c[T];y.copy(B),y.sub(L.multiplyScalar(L.dot(B))).normalize(),E.crossVectors(b,B);const P=E.dot(u[T])<0?-1:1;l[T*4]=y.x,l[T*4+1]=y.y,l[T*4+2]=y.z,l[T*4+3]=P}for(let T=0,B=v.length;T<B;++T){const k=v[T],P=k.start,U=k.count;for(let F=P,K=P+U;F<K;F+=3)x(n[F+0]),x(n[F+1]),x(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,r=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new pt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new Pe,An=new Sa,Vr=new Qn,Rc=new I,os=new I,ls=new I,cs=new I,to=new I,Gr=new I,Hr=new Ae,Wr=new Ae,Xr=new Ae,Pc=new I,Ic=new I,Dc=new I,qr=new I,jr=new I;class dn extends $e{constructor(e=new gn,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Gr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(to.fromBufferAttribute(h,e),r?Gr.addScaledVector(to,u):Gr.addScaledVector(to.sub(t),u))}t.add(Gr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),An.copy(e.ray).recast(e.near),Vr.containsPoint(An.origin)===!1&&(An.intersectSphere(Vr,Rc)===null||An.origin.distanceToSquared(Rc)>(e.far-e.near)**2))||(Lc.copy(s).invert(),An.copy(e.ray).applyMatrix4(Lc),n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1))return;let r;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,d=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=i[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,y=M;v<y;v+=3){const E=a.getX(v),L=a.getX(v+1),b=a.getX(v+2);r=Yr(this,f,e,An,c,u,h,E,L,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const S=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);r=Yr(this,i,e,An,c,u,h,S,M,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=i[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,y=M;v<y;v+=3){const E=v,L=v+1,b=v+2;r=Yr(this,f,e,An,c,u,h,E,L,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const S=m,M=m+1,v=m+2;r=Yr(this,i,e,An,c,u,h,S,M,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ep(o,e,t,n,i,s,r,a){let l;if(e.side===kt?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side===Kn,a),l===null)return null;jr.copy(a),jr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(jr);return c<t.near||c>t.far?null:{distance:c,point:jr.clone(),object:o}}function Yr(o,e,t,n,i,s,r,a,l,c){o.getVertexPosition(a,os),o.getVertexPosition(l,ls),o.getVertexPosition(c,cs);const u=Ep(o,e,t,n,os,ls,cs,qr);if(u){i&&(Hr.fromBufferAttribute(i,a),Wr.fromBufferAttribute(i,l),Xr.fromBufferAttribute(i,c),u.uv=Mn.getInterpolation(qr,os,ls,cs,Hr,Wr,Xr,new Ae)),s&&(Hr.fromBufferAttribute(s,a),Wr.fromBufferAttribute(s,l),Xr.fromBufferAttribute(s,c),u.uv2=Mn.getInterpolation(qr,os,ls,cs,Hr,Wr,Xr,new Ae)),r&&(Pc.fromBufferAttribute(r,a),Ic.fromBufferAttribute(r,l),Dc.fromBufferAttribute(r,c),u.normal=Mn.getInterpolation(qr,os,ls,cs,Pc,Ic,Dc,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};Mn.getNormal(os,ls,cs,h.normal),u.face=h}return u}class Cr extends gn{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,r,s,0),_("z","y","x",1,-1,n,t,-e,r,s,1),_("x","z","y",1,1,e,n,t,i,r,2),_("x","z","y",1,-1,e,n,-t,i,r,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Yn(c,3)),this.setAttribute("normal",new Yn(u,3)),this.setAttribute("uv",new Yn(h,2));function _(g,m,f,S,M,v,y,E,L,b,x){const T=v/L,B=y/b,k=v/2,P=y/2,U=E/2,F=L+1,K=b+1;let Z=0,X=0;const ne=new I;for(let J=0;J<K;J++){const _e=J*B-P;for(let ie=0;ie<F;ie++){const G=ie*T-k;ne[g]=G*S,ne[m]=_e*M,ne[f]=U,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[f]=E>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(ie/L),h.push(1-J/b),Z+=1}}for(let J=0;J<b;J++)for(let _e=0;_e<L;_e++){const ie=d+_e+F*J,G=d+_e+F*(J+1),Y=d+(_e+1)+F*(J+1),se=d+(_e+1)+F*J;l.push(ie,G,se),l.push(G,Y,se),X+=6}a.addGroup(p,X,x),p+=X,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(o){const e={};for(let t=0;t<o.length;t++){const n=Os(o[t]);for(const i in n)e[i]=n[i]}return e}function Cp(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function yh(o){return o.getRenderTarget()===null&&o.outputEncoding===Ve?cn:Us}const Mh={clone:Os,merge:Ut};var Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=Cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sh extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends Sh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,hs=1;class Pp extends $e{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Nt(us,hs,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Nt(us,hs,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new Nt(us,hs,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const a=new Nt(us,hs,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Nt(us,hs,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Nt(us,hs,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=jn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class bh extends St{constructor(e,t,n,i,s,r,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ls,super(e,t,n,i,s,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ip extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new bh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Cr(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:pi});s.uniforms.tEquirect.value=t;const r=new dn(i,s),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Bt),new Pp(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const no=new I,Dp=new I,Up=new Ne;class Li{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=no.subVectors(n,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(no),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Up.getNormalMatrix(e),i=this.coplanarPoint(no).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Qn,Kr=new I;class fl{constructor(e=new Li,t=new Li,n=new Li,i=new Li,s=new Li,r=new Li){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],_=n[10],g=n[11],m=n[12],f=n[13],S=n[14],M=n[15];return t[0].setComponents(a-i,h-l,g-d,M-m).normalize(),t[1].setComponents(a+i,h+l,g+d,M+m).normalize(),t[2].setComponents(a+s,h+c,g+p,M+f).normalize(),t[3].setComponents(a-s,h-c,g-p,M-f).normalize(),t[4].setComponents(a-r,h-u,g-_,M-S).normalize(),t[5].setComponents(a+r,h+u,g+_,M+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Kr.x=i.normal.x>0?e.max.x:e.min.x,Kr.y=i.normal.y>0?e.max.y:e.min.y,Kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Th(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Np(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=o.createBuffer();o.bindBuffer(u,p),o.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,p=u.updateRange;o.bindBuffer(h,c),p.count===-1?o.bufferSubData(h,0,d):(t?o.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):o.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:r,remove:a,update:l}}class pl extends gn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const S=f*d-r;for(let M=0;M<c;M++){const v=M*h-s;_.push(v,-S,0),g.push(0,0,1),m.push(M/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){const M=S+c*f,v=S+c*(f+1),y=S+1+c*(f+1),E=S+1+c*f;p.push(M,v,E),p.push(v,y,E)}this.setIndex(p),this.setAttribute("position",new Yn(_,3)),this.setAttribute("normal",new Yn(g,3)),this.setAttribute("uv",new Yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp="vec3 transformed = vec3( position );",Hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,im=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",cm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ym=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Em=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Pm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Im=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ag=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Eg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lg=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xg=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,n_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,c_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:Op,alphamap_pars_fragment:Fp,alphatest_fragment:kp,alphatest_pars_fragment:Bp,aomap_fragment:zp,aomap_pars_fragment:Vp,begin_vertex:Gp,beginnormal_vertex:Hp,bsdfs:Wp,iridescence_fragment:Xp,bumpmap_pars_fragment:qp,clipping_planes_fragment:jp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:Zp,color_fragment:$p,color_pars_fragment:Jp,color_pars_vertex:Qp,color_vertex:em,common:tm,cube_uv_reflection_fragment:nm,defaultnormal_vertex:im,displacementmap_pars_vertex:sm,displacementmap_vertex:rm,emissivemap_fragment:am,emissivemap_pars_fragment:om,encodings_fragment:lm,encodings_pars_fragment:cm,envmap_fragment:um,envmap_common_pars_fragment:hm,envmap_pars_fragment:dm,envmap_pars_vertex:fm,envmap_physical_pars_fragment:wm,envmap_vertex:pm,fog_vertex:mm,fog_pars_vertex:gm,fog_fragment:_m,fog_pars_fragment:xm,gradientmap_pars_fragment:vm,lightmap_fragment:ym,lightmap_pars_fragment:Mm,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:bm,lights_pars_begin:Tm,lights_toon_fragment:Am,lights_toon_pars_fragment:Em,lights_phong_fragment:Cm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Rm,lights_physical_pars_fragment:Pm,lights_fragment_begin:Im,lights_fragment_maps:Dm,lights_fragment_end:Um,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Om,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:km,map_fragment:Bm,map_pars_fragment:zm,map_particle_fragment:Vm,map_particle_pars_fragment:Gm,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Wm,morphcolor_vertex:Xm,morphnormal_vertex:qm,morphtarget_pars_vertex:jm,morphtarget_vertex:Ym,normal_fragment_begin:Km,normal_fragment_maps:Zm,normal_pars_fragment:$m,normal_pars_vertex:Jm,normal_vertex:Qm,normalmap_pars_fragment:eg,clearcoat_normal_fragment_begin:tg,clearcoat_normal_fragment_maps:ng,clearcoat_pars_fragment:ig,iridescence_pars_fragment:sg,output_fragment:rg,packing:ag,premultiplied_alpha_fragment:og,project_vertex:lg,dithering_fragment:cg,dithering_pars_fragment:ug,roughnessmap_fragment:hg,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:fg,shadowmap_pars_vertex:pg,shadowmap_vertex:mg,shadowmask_pars_fragment:gg,skinbase_vertex:_g,skinning_pars_vertex:xg,skinning_vertex:vg,skinnormal_vertex:yg,specularmap_fragment:Mg,specularmap_pars_fragment:Sg,tonemapping_fragment:bg,tonemapping_pars_fragment:Tg,transmission_fragment:wg,transmission_pars_fragment:Ag,uv_pars_fragment:Eg,uv_pars_vertex:Cg,uv_vertex:Lg,worldpos_vertex:Rg,background_vert:Pg,background_frag:Ig,backgroundCube_vert:Dg,backgroundCube_frag:Ug,cube_vert:Ng,cube_frag:Og,depth_vert:Fg,depth_frag:kg,distanceRGBA_vert:Bg,distanceRGBA_frag:zg,equirect_vert:Vg,equirect_frag:Gg,linedashed_vert:Hg,linedashed_frag:Wg,meshbasic_vert:Xg,meshbasic_frag:qg,meshlambert_vert:jg,meshlambert_frag:Yg,meshmatcap_vert:Kg,meshmatcap_frag:Zg,meshnormal_vert:$g,meshnormal_frag:Jg,meshphong_vert:Qg,meshphong_frag:e_,meshphysical_vert:t_,meshphysical_frag:n_,meshtoon_vert:i_,meshtoon_frag:s_,points_vert:r_,points_frag:a_,shadow_vert:o_,shadow_frag:l_,sprite_vert:c_,sprite_frag:u_},re={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaTest:{value:0}}},Ln={basic:{uniforms:Ut([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Ut([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ye(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Ut([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Ut([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Ut([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ye(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Ut([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Ut([re.points,re.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Ut([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Ut([re.common,re.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Ut([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Ut([re.sprite,re.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Ut([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Ut([re.lights,re.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Ln.physical={uniforms:Ut([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Zr={r:0,b:0,g:0};function h_(o,e,t,n,i,s,r){const a=new ye(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function _(m,f){let S=!1,M=f.isScene===!0?f.background:null;M&&M.isTexture&&(M=(f.backgroundBlurriness>0?t:e).get(M));const v=o.xr,y=v.getSession&&v.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?g(a,l):M&&M.isColor&&(g(M,1),S=!0),(o.autoClear||S)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ma)?(u===void 0&&(u=new dn(new Cr(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Os(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,L,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=M.encoding!==Ve,(h!==M||d!==M.version||p!==o.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,p=o.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new dn(new pl(2,2),new mn({name:"BackgroundMaterial",uniforms:Os(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=M.encoding!==Ve,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==o.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,p=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Zr,yh(o)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,f,r)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function d_(o,e,t,n){const i=o.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(U,F,K,Z,X){let ne=!1;if(r){const J=g(Z,K,F);c!==J&&(c=J,p(c.object)),ne=f(U,Z,K,X),ne&&S(U,Z,K,X)}else{const J=F.wireframe===!0;(c.geometry!==Z.id||c.program!==K.id||c.wireframe!==J)&&(c.geometry=Z.id,c.program=K.id,c.wireframe=J,ne=!0)}X!==null&&t.update(X,34963),(ne||u)&&(u=!1,b(U,F,K,Z),X!==null&&o.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function p(U){return n.isWebGL2?o.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return n.isWebGL2?o.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function g(U,F,K){const Z=K.wireframe===!0;let X=a[U.id];X===void 0&&(X={},a[U.id]=X);let ne=X[F.id];ne===void 0&&(ne={},X[F.id]=ne);let J=ne[Z];return J===void 0&&(J=m(d()),ne[Z]=J),J}function m(U){const F=[],K=[],Z=[];for(let X=0;X<i;X++)F[X]=0,K[X]=0,Z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:K,attributeDivisors:Z,object:U,attributes:{},index:null}}function f(U,F,K,Z){const X=c.attributes,ne=F.attributes;let J=0;const _e=K.getAttributes();for(const ie in _e)if(_e[ie].location>=0){const Y=X[ie];let se=ne[ie];if(se===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),Y===void 0||Y.attribute!==se||se&&Y.data!==se.data)return!0;J++}return c.attributesNum!==J||c.index!==Z}function S(U,F,K,Z){const X={},ne=F.attributes;let J=0;const _e=K.getAttributes();for(const ie in _e)if(_e[ie].location>=0){let Y=ne[ie];Y===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor));const se={};se.attribute=Y,Y&&Y.data&&(se.data=Y.data),X[ie]=se,J++}c.attributes=X,c.attributesNum=J,c.index=Z}function M(){const U=c.newAttributes;for(let F=0,K=U.length;F<K;F++)U[F]=0}function v(U){y(U,0)}function y(U,F){const K=c.newAttributes,Z=c.enabledAttributes,X=c.attributeDivisors;K[U]=1,Z[U]===0&&(o.enableVertexAttribArray(U),Z[U]=1),X[U]!==F&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,F),X[U]=F)}function E(){const U=c.newAttributes,F=c.enabledAttributes;for(let K=0,Z=F.length;K<Z;K++)F[K]!==U[K]&&(o.disableVertexAttribArray(K),F[K]=0)}function L(U,F,K,Z,X,ne){n.isWebGL2===!0&&(K===5124||K===5125)?o.vertexAttribIPointer(U,F,K,X,ne):o.vertexAttribPointer(U,F,K,Z,X,ne)}function b(U,F,K,Z){if(n.isWebGL2===!1&&(U.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const X=Z.attributes,ne=K.getAttributes(),J=F.defaultAttributeValues;for(const _e in ne){const ie=ne[_e];if(ie.location>=0){let G=X[_e];if(G===void 0&&(_e==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),_e==="instanceColor"&&U.instanceColor&&(G=U.instanceColor)),G!==void 0){const Y=G.normalized,se=G.itemSize,ce=t.get(G);if(ce===void 0)continue;const V=ce.buffer,be=ce.type,Me=ce.bytesPerElement;if(G.isInterleavedBufferAttribute){const ae=G.data,ve=ae.stride,ze=G.offset;if(ae.isInstancedInterleavedBuffer){for(let me=0;me<ie.locationSize;me++)y(ie.location+me,ae.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let me=0;me<ie.locationSize;me++)v(ie.location+me);o.bindBuffer(34962,V);for(let me=0;me<ie.locationSize;me++)L(ie.location+me,se/ie.locationSize,be,Y,ve*Me,(ze+se/ie.locationSize*me)*Me)}else{if(G.isInstancedBufferAttribute){for(let ae=0;ae<ie.locationSize;ae++)y(ie.location+ae,G.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ae=0;ae<ie.locationSize;ae++)v(ie.location+ae);o.bindBuffer(34962,V);for(let ae=0;ae<ie.locationSize;ae++)L(ie.location+ae,se/ie.locationSize,be,Y,se*Me,se/ie.locationSize*ae*Me)}}else if(J!==void 0){const Y=J[_e];if(Y!==void 0)switch(Y.length){case 2:o.vertexAttrib2fv(ie.location,Y);break;case 3:o.vertexAttrib3fv(ie.location,Y);break;case 4:o.vertexAttrib4fv(ie.location,Y);break;default:o.vertexAttrib1fv(ie.location,Y)}}}}E()}function x(){k();for(const U in a){const F=a[U];for(const K in F){const Z=F[K];for(const X in Z)_(Z[X].object),delete Z[X];delete F[K]}delete a[U]}}function T(U){if(a[U.id]===void 0)return;const F=a[U.id];for(const K in F){const Z=F[K];for(const X in Z)_(Z[X].object),delete Z[X];delete F[K]}delete a[U.id]}function B(U){for(const F in a){const K=a[F];if(K[U.id]===void 0)continue;const Z=K[U.id];for(const X in Z)_(Z[X].object),delete Z[X];delete K[U.id]}}function k(){P(),u=!0,c!==l&&(c=l,p(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:P,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:M,enableAttribute:v,disableUnusedAttributes:E}}function f_(o,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function a(c,u){o.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=o,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,h),t.update(u,s,h)}this.setMode=r,this.render=a,this.renderInstances=l}function p_(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),d=o.getParameter(35660),p=o.getParameter(3379),_=o.getParameter(34076),g=o.getParameter(34921),m=o.getParameter(36347),f=o.getParameter(36348),S=o.getParameter(36349),M=d>0,v=r||e.has("OES_texture_float"),y=M&&v,E=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:v,floatVertexTextures:y,maxSamples:E}}function m_(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Li,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=o.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,M=S*4;let v=f.clippingState||null;l.value=v,v=u(_,d,M,p);for(let y=0;y!==M;++y)v[y]=t[y];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,v=p;M!==g;++M,v+=4)r.copy(h[M]).applyMatrix4(S,a),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function g_(o){let e=new WeakMap;function t(r,a){return a===Eo?r.mapping=Ls:a===Co&&(r.mapping=Rs),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===Eo||a===Co)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Ip(l.height/2);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ml extends Sh{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vs=4,Uc=[.125,.215,.35,.446,.526,.582],Ii=20,io=new ml,Nc=new ye;let so=null;const Ri=(1+Math.sqrt(5))/2,ds=1/Ri,Oc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ri,ds),new I(0,Ri,-ds),new I(ds,0,Ri),new I(-ds,0,Ri),new I(Ri,ds,0),new I(-Ri,ds,0)];class Fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){so=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(so),e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:gr,format:hn,encoding:Hi,depthBuffer:!1},i=kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=__(s)),this._blurMaterial=x_(s,e,t)}return i}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,n,i){const a=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Nc),u.toneMapping=jn,u.autoClear=!1;const p=new ci({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),_=new dn(new Cr,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Nc),g=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const M=this._cubeSize;$r(i,S*M,f>2?M:0,M,M),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ls||e.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,io)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Oc[(i-1)%Oc.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new dn(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ii-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Ii;m>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const f=[];let S=0;for(let L=0;L<Ii;++L){const b=L/g,x=Math.exp(-b*b/2);f.push(x),L===0?S+=x:L<m&&(S+=2*x)}for(let L=0;L<f.length;L++)f[L]=f[L]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const v=this._sizeLods[i],y=3*v*(i>M-vs?i-M+vs:0),E=4*(this._cubeSize-v);$r(t,y,E,3*v,2*v),l.setRenderTarget(t),l.render(h,io)}}function __(o){const e=[],t=[],n=[];let i=o;const s=o-vs+1+Uc.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-vs?l=Uc[r-o+vs-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,f=1,S=new Float32Array(g*_*p),M=new Float32Array(m*_*p),v=new Float32Array(f*_*p);for(let E=0;E<p;E++){const L=E%3*2/3-1,b=E>2?0:-1,x=[L,b,0,L+2/3,b,0,L+2/3,b+1,0,L,b,0,L+2/3,b+1,0,L,b+1,0];S.set(x,g*_*E),M.set(d,m*_*E);const T=[E,E,E,E,E,E];v.set(T,f*_*E)}const y=new gn;y.setAttribute("position",new pt(S,g)),y.setAttribute("uv",new pt(M,m)),y.setAttribute("faceIndex",new pt(v,f)),e.push(y),i>vs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kc(o,e,t){const n=new Wi(o,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function x_(o,e,t){const n=new Float32Array(Ii),i=new I(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Bc(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function zc(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v_(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Eo||l===Co,u=l===Ls||l===Rs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Fc(o)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Fc(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function y_(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function M_(o,e,t,n){const i={},s=new WeakMap;function r(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",r),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],34962);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],34962)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const S=p.array;g=p.version;for(let M=0,v=S.length;M<v;M+=3){const y=S[M+0],E=S[M+1],L=S[M+2];d.push(y,E,E,L,L,y)}}else{const S=_.array;g=_.version;for(let M=0,v=S.length/3-1;M<v;M+=3){const y=M+0,E=M+1,L=M+2;d.push(y,E,E,L,L,y)}}const m=new(fh(d)?vh:xh)(d,1);m.version=g;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function S_(o,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){o.drawElements(s,p,a,d*l),t.update(p,s,1)}function h(d,p,_){if(_===0)return;let g,m;if(i)g=o,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,d*l,_),t.update(p,s,_)}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=h}function b_(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function T_(o,e){return o[0]-e[0]}function w_(o,e){return Math.abs(e[1])-Math.abs(o[1])}function A_(o,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new je,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let F=function(){P.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let x=0;M===!0&&(x=1),v===!0&&(x=2),y===!0&&(x=3);let T=u.attributes.position.count*x,B=1;T>e.maxTextureSize&&(B=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const k=new Float32Array(T*B*4*g),P=new gh(k,T,B,g);P.type=li,P.needsUpdate=!0;const U=x*4;for(let K=0;K<g;K++){const Z=E[K],X=L[K],ne=b[K],J=T*B*4*K;for(let _e=0;_e<Z.count;_e++){const ie=_e*U;M===!0&&(r.fromBufferAttribute(Z,_e),k[J+ie+0]=r.x,k[J+ie+1]=r.y,k[J+ie+2]=r.z,k[J+ie+3]=0),v===!0&&(r.fromBufferAttribute(X,_e),k[J+ie+4]=r.x,k[J+ie+5]=r.y,k[J+ie+6]=r.z,k[J+ie+7]=0),y===!0&&(r.fromBufferAttribute(ne,_e),k[J+ie+8]=r.x,k[J+ie+9]=r.y,k[J+ie+10]=r.z,k[J+ie+11]=ne.itemSize===4?r.w:1)}}m={count:g,texture:P,size:new Ae(T,B)},s.set(u,m),u.addEventListener("dispose",F)}let f=0;for(let M=0;M<d.length;M++)f+=d[M];const S=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(o,"morphTargetBaseInfluence",S),h.getUniforms().setValue(o,"morphTargetInfluences",d),h.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<_;v++){const y=g[v];y[0]=v,y[1]=d[v]}g.sort(w_);for(let v=0;v<8;v++)v<_&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(T_);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let S=0;for(let v=0;v<8;v++){const y=a[v],E=y[0],L=y[1];E!==Number.MAX_SAFE_INTEGER&&L?(m&&u.getAttribute("morphTarget"+v)!==m[E]&&u.setAttribute("morphTarget"+v,m[E]),f&&u.getAttribute("morphNormal"+v)!==f[E]&&u.setAttribute("morphNormal"+v,f[E]),i[v]=L,S+=L):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),f&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const M=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(o,"morphTargetBaseInfluence",M),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function E_(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const wh=new St,Ah=new gh,Eh=new _p,Ch=new bh,Vc=[],Gc=[],Hc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function Ws(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Vc[i];if(s===void 0&&(s=new Float32Array(i),Vc[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function mt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function gt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Ta(o,e){let t=Gc[e];t===void 0&&(t=new Int32Array(e),Gc[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function C_(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function L_(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;o.uniform2fv(this.addr,e),gt(t,e)}}function R_(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;o.uniform3fv(this.addr,e),gt(t,e)}}function P_(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;o.uniform4fv(this.addr,e),gt(t,e)}}function I_(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Xc.set(n),o.uniformMatrix2fv(this.addr,!1,Xc),gt(t,n)}}function D_(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Wc.set(n),o.uniformMatrix3fv(this.addr,!1,Wc),gt(t,n)}}function U_(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Hc.set(n),o.uniformMatrix4fv(this.addr,!1,Hc),gt(t,n)}}function N_(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function O_(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;o.uniform2iv(this.addr,e),gt(t,e)}}function F_(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;o.uniform3iv(this.addr,e),gt(t,e)}}function k_(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;o.uniform4iv(this.addr,e),gt(t,e)}}function B_(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function z_(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;o.uniform2uiv(this.addr,e),gt(t,e)}}function V_(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;o.uniform3uiv(this.addr,e),gt(t,e)}}function G_(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;o.uniform4uiv(this.addr,e),gt(t,e)}}function H_(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||wh,i)}function W_(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eh,i)}function X_(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ch,i)}function q_(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ah,i)}function j_(o){switch(o){case 5126:return C_;case 35664:return L_;case 35665:return R_;case 35666:return P_;case 35674:return I_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return N_;case 35667:case 35671:return O_;case 35668:case 35672:return F_;case 35669:case 35673:return k_;case 5125:return B_;case 36294:return z_;case 36295:return V_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}function Y_(o,e){o.uniform1fv(this.addr,e)}function K_(o,e){const t=Ws(e,this.size,2);o.uniform2fv(this.addr,t)}function Z_(o,e){const t=Ws(e,this.size,3);o.uniform3fv(this.addr,t)}function $_(o,e){const t=Ws(e,this.size,4);o.uniform4fv(this.addr,t)}function J_(o,e){const t=Ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Q_(o,e){const t=Ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function e0(o,e){const t=Ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function t0(o,e){o.uniform1iv(this.addr,e)}function n0(o,e){o.uniform2iv(this.addr,e)}function i0(o,e){o.uniform3iv(this.addr,e)}function s0(o,e){o.uniform4iv(this.addr,e)}function r0(o,e){o.uniform1uiv(this.addr,e)}function a0(o,e){o.uniform2uiv(this.addr,e)}function o0(o,e){o.uniform3uiv(this.addr,e)}function l0(o,e){o.uniform4uiv(this.addr,e)}function c0(o,e,t){const n=this.cache,i=e.length,s=Ta(t,i);mt(n,s)||(o.uniform1iv(this.addr,s),gt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||wh,s[r])}function u0(o,e,t){const n=this.cache,i=e.length,s=Ta(t,i);mt(n,s)||(o.uniform1iv(this.addr,s),gt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Eh,s[r])}function h0(o,e,t){const n=this.cache,i=e.length,s=Ta(t,i);mt(n,s)||(o.uniform1iv(this.addr,s),gt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Ch,s[r])}function d0(o,e,t){const n=this.cache,i=e.length,s=Ta(t,i);mt(n,s)||(o.uniform1iv(this.addr,s),gt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Ah,s[r])}function f0(o){switch(o){case 5126:return Y_;case 35664:return K_;case 35665:return Z_;case 35666:return $_;case 35674:return J_;case 35675:return Q_;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return d0}}class p0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=j_(t.type)}}class m0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=f0(t.type)}}class g0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function qc(o,e){o.seq.push(e),o.map[e.id]=e}function _0(o,e,t){const n=o.name,i=n.length;for(ro.lastIndex=0;;){const s=ro.exec(n),r=ro.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){qc(t,c===void 0?new p0(a,o,e):new m0(a,o,e));break}else{let h=t.map[a];h===void 0&&(h=new g0(a),qc(t,h)),t=h}}}class aa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);_0(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function jc(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let x0=0;function v0(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function y0(o){switch(o){case Hi:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Yc(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+v0(o.getShaderSource(e),r)}else return i}function M0(o,e){const t=y0(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function S0(o,e){let t;switch(e){case Mf:t="Linear";break;case Sf:t="Reinhard";break;case bf:t="OptimizedCineon";break;case Tf:t="ACESFilmic";break;case wf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function b0(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ar).join(`
`)}function T0(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w0(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function ar(o){return o!==""}function Kc(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(o){return o.replace(A0,E0)}function E0(o,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Uo(t)}const C0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(o){return o.replace(C0,L0)}function L0(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Jc(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R0(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===th?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Jd?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function P0(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ls:case Rs:e="ENVMAP_TYPE_CUBE";break;case Ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I0(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function D0(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case sh:e="ENVMAP_BLENDING_MULTIPLY";break;case vf:e="ENVMAP_BLENDING_MIX";break;case yf:e="ENVMAP_BLENDING_ADD";break}return e}function U0(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function N0(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=R0(t),c=P0(t),u=I0(t),h=D0(t),d=U0(t),p=t.isWebGL2?"":b0(t),_=T0(s),g=i.createProgram();let m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(ar).join(`
`),m.length>0&&(m+=`
`),f=[p,_].filter(ar).join(`
`),f.length>0&&(f+=`
`)):(m=[Jc(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),f=[p,Jc(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Le.tonemapping_pars_fragment:"",t.toneMapping!==jn?S0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,M0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),r=Uo(r),r=Kc(r,t),r=Zc(r,t),a=Uo(a),a=Kc(a,t),a=Zc(a,t),r=$c(r),a=$c(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=S+m+r,v=S+f+a,y=jc(i,35633,M),E=jc(i,35632,v);if(i.attachShader(g,y),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),o.debug.checkShaderErrors){const x=i.getProgramInfoLog(g).trim(),T=i.getShaderInfoLog(y).trim(),B=i.getShaderInfoLog(E).trim();let k=!0,P=!0;if(i.getProgramParameter(g,35714)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,g,y,E);else{const U=Yc(i,y,"vertex"),F=Yc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+x+`
`+U+`
`+F)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(T===""||B==="")&&(P=!1);P&&(this.diagnostics={runnable:k,programLog:x,vertexShader:{log:T,prefix:m},fragmentShader:{log:B,prefix:f}})}i.deleteShader(y),i.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new aa(i,g)),L};let b;return this.getAttributes=function(){return b===void 0&&(b=w0(i,g)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=E,this}let O0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new k0(e),t.set(e,n)),n}}class k0{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}}function B0(o,e,t,n,i,s,r){const a=new dl,l=new F0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===1?"uv2":"uv"}function m(x,T,B,k,P){const U=k.fog,F=P.geometry,K=x.isMeshStandardMaterial?k.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||K),X=Z&&Z.mapping===Ma?Z.image.height:null,ne=_[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_e=J!==void 0?J.length:0;let ie=0;F.morphAttributes.position!==void 0&&(ie=1),F.morphAttributes.normal!==void 0&&(ie=2),F.morphAttributes.color!==void 0&&(ie=3);let G,Y,se,ce;if(ne){const he=Ln[ne];G=he.vertexShader,Y=he.fragmentShader}else G=x.vertexShader,Y=x.fragmentShader,l.update(x),se=l.getVertexShaderID(x),ce=l.getFragmentShaderID(x);const V=o.getRenderTarget(),be=P.isInstancedMesh===!0,Me=!!x.map,ae=!!x.matcap,ve=!!Z,ze=!!x.aoMap,me=!!x.lightMap,Ee=!!x.bumpMap,nt=!!x.normalMap,Je=!!x.displacementMap,lt=!!x.emissiveMap,st=!!x.metalnessMap,Be=!!x.roughnessMap,Ye=x.clearcoat>0,Tt=x.iridescence>0,C=x.sheen>0,w=x.transmission>0,H=Ye&&!!x.clearcoatMap,Q=Ye&&!!x.clearcoatNormalMap,te=Ye&&!!x.clearcoatRoughnessMap,oe=Tt&&!!x.iridescenceMap,R=Tt&&!!x.iridescenceThicknessMap,$=C&&!!x.sheenColorMap,z=C&&!!x.sheenRoughnessMap,le=!!x.specularMap,de=!!x.specularColorMap,pe=!!x.specularIntensityMap,ue=w&&!!x.transmissionMap,fe=w&&!!x.thicknessMap,Te=!!x.gradientMap,Re=!!x.alphaMap,rt=x.alphaTest>0,D=!!x.extensions,q=!!F.attributes.uv2;return{isWebGL2:u,shaderID:ne,shaderName:x.type,vertexShader:G,fragmentShader:Y,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:be,instancingColor:be&&P.instanceColor!==null,supportsVertexTextures:d,outputEncoding:V===null?o.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:Hi,map:Me,matcap:ae,envMap:ve,envMapMode:ve&&Z.mapping,envMapCubeUVHeight:X,aoMap:ze,lightMap:me,bumpMap:Ee,normalMap:nt,displacementMap:d&&Je,emissiveMap:lt,normalMapObjectSpace:nt&&x.normalMapType===Yf,normalMapTangentSpace:nt&&x.normalMapType===ch,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&x.map.encoding===Ve,metalnessMap:st,roughnessMap:Be,clearcoat:Ye,clearcoatMap:H,clearcoatNormalMap:Q,clearcoatRoughnessMap:te,iridescence:Tt,iridescenceMap:oe,iridescenceThicknessMap:R,sheen:C,sheenColorMap:$,sheenRoughnessMap:z,specularMap:le,specularColorMap:de,specularIntensityMap:pe,transmission:w,transmissionMap:ue,thicknessMap:fe,gradientMap:Te,opaque:x.transparent===!1&&x.blending===Ss,alphaMap:Re,alphaTest:rt,combine:x.combine,mapUv:Me&&g(x.map.channel),aoMapUv:ze&&g(x.aoMap.channel),lightMapUv:me&&g(x.lightMap.channel),bumpMapUv:Ee&&g(x.bumpMap.channel),normalMapUv:nt&&g(x.normalMap.channel),displacementMapUv:Je&&g(x.displacementMap.channel),emissiveMapUv:lt&&g(x.emissiveMap.channel),metalnessMapUv:st&&g(x.metalnessMap.channel),roughnessMapUv:Be&&g(x.roughnessMap.channel),clearcoatMapUv:H&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Q&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:R&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:$&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:z&&g(x.sheenRoughnessMap.channel),specularMapUv:le&&g(x.specularMap.channel),specularColorMapUv:de&&g(x.specularColorMap.channel),specularIntensityMapUv:pe&&g(x.specularIntensityMap.channel),transmissionMapUv:ue&&g(x.transmissionMap.channel),thicknessMapUv:fe&&g(x.thicknessMap.channel),alphaMapUv:Re&&g(x.alphaMap.channel),vertexTangents:nt&&!!F.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs2:q,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(Me||Re),fog:!!U,useFog:x.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:jn,useLegacyLights:o.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Sn,flipSided:x.side===kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:D&&x.extensions.derivatives===!0,extensionFragDepth:D&&x.extensions.fragDepth===!0,extensionDrawBuffers:D&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:D&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)T.push(B),T.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(S(T,x),M(T,x),T.push(o.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function S(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUvs2&&a.enable(13),T.vertexTangents&&a.enable(14),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.decodeVideoTexture&&a.enable(17),T.opaque&&a.enable(18),T.pointsUvs&&a.enable(19),x.push(a.mask)}function v(x){const T=_[x.type];let B;if(T){const k=Ln[T];B=Mh.clone(k.uniforms)}else B=x.uniforms;return B}function y(x,T){let B;for(let k=0,P=c.length;k<P;k++){const U=c[k];if(U.cacheKey===T){B=U,++B.usedTimes;break}}return B===void 0&&(B=new N0(o,T,x,s),c.push(B)),B}function E(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function L(x){l.remove(x)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:y,releaseProgram:E,releaseShaderCache:L,programs:c,dispose:b}}function z0(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function V0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Qc(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function eu(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(h,d,p,_,g,m){let f=o[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},o[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function a(h,d,p,_,g,m){const f=r(h,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,d,p,_,g,m){const f=r(h,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||V0),n.length>1&&n.sort(d||Qc),i.length>1&&i.sort(d||Qc)}function u(){for(let h=e,d=o.length;h<d;h++){const p=o[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function G0(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new eu,o.set(n,[r])):i>=s.length?(r=new eu,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function H0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ye};break;case"SpotLight":t={position:new I,direction:new I,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new I,halfWidth:new I,halfHeight:new I};break}return o[e.id]=t,t}}}function W0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let X0=0;function q0(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function j0(o,e){const t=new H0,n=W0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,r=new Pe,a=new Pe;function l(u,h){let d=0,p=0,_=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let g=0,m=0,f=0,S=0,M=0,v=0,y=0,E=0,L=0,b=0;u.sort(q0);const x=h===!0?Math.PI:1;for(let B=0,k=u.length;B<k;B++){const P=u[B],U=P.color,F=P.intensity,K=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*F*x,p+=U.g*F*x,_+=U.b*F*x;else if(P.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],F);else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const ne=P.shadow,J=n.get(P);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=P.shadow.matrix,v++}i.directional[g]=X,g++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(F*x),X.distance=K,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[f]=X;const ne=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,ne.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[f]=ne.matrix,P.castShadow){const J=n.get(P);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,i.spotShadow[f]=J,i.spotShadowMap[f]=Z,E++}f++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(U).multiplyScalar(F),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=X,S++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*x),X.distance=P.distance,X.decay=P.decay,P.castShadow){const ne=P.shadow,J=n.get(P);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,J.shadowCameraNear=ne.camera.near,J.shadowCameraFar=ne.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=P.shadow.matrix,y++}i.point[m]=X,m++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(F*x),X.groundColor.copy(P.groundColor).multiplyScalar(F*x),i.hemi[M]=X,M++}}S>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==f||T.rectAreaLength!==S||T.hemiLength!==M||T.numDirectionalShadows!==v||T.numPointShadows!==y||T.numSpotShadows!==E||T.numSpotMaps!==L)&&(i.directional.length=g,i.spot.length=f,i.rectArea.length=S,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+L-b,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=b,T.directionalLength=g,T.pointLength=m,T.spotLength=f,T.rectAreaLength=S,T.hemiLength=M,T.numDirectionalShadows=v,T.numPointShadows=y,T.numSpotShadows=E,T.numSpotMaps=L,i.version=X0++)}function c(u,h){let d=0,p=0,_=0,g=0,m=0;const f=h.matrixWorldInverse;for(let S=0,M=u.length;S<M;S++){const v=u[S];if(v.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),d++}else if(v.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),_++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function tu(o,e){const t=new j0(o,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function Y0(o,e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new tu(o,e),t.set(s,[l])):r>=a.length?(l=new tu(o,e),a.push(l)):l=a[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class K0 extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z0 extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q0(o,e,t){let n=new fl;const i=new Ae,s=new Ae,r=new je,a=new K0({depthPacking:jf}),l=new Z0,c={},u=t.maxTextureSize,h={[Kn]:kt,[kt]:Kn,[Sn]:Sn},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:$0,fragmentShader:J0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new gn;_.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new dn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th,this.render=function(v,y,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const L=o.getRenderTarget(),b=o.getActiveCubeFace(),x=o.getActiveMipmapLevel(),T=o.state;T.setBlending(pi),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let B=0,k=v.length;B<k;B++){const P=v[B],U=P.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const F=U.getFrameExtents();if(i.multiply(F),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/F.x),i.x=s.x*F.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/F.y),i.y=s.y*F.y,U.mapSize.y=s.y)),U.map===null){const Z=this.type!==rr?{minFilter:vt,magFilter:vt}:{};U.map=new Wi(i.x,i.y,Z),U.map.texture.name=P.name+".shadowMap",U.camera.updateProjectionMatrix()}o.setRenderTarget(U.map),o.clear();const K=U.getViewportCount();for(let Z=0;Z<K;Z++){const X=U.getViewport(Z);r.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),T.viewport(r),U.updateMatrices(P,Z),n=U.getFrustum(),M(y,E,U.camera,P,this.type)}U.isPointLightShadow!==!0&&this.type===rr&&f(U,E),U.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(L,b,x)};function f(v,y){const E=e.update(g);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Wi(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,o.setRenderTarget(v.mapPass),o.clear(),o.renderBufferDirect(y,null,E,d,g,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,o.setRenderTarget(v.map),o.clear(),o.renderBufferDirect(y,null,E,p,g,null)}function S(v,y,E,L){let b=null;const x=E.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(x!==void 0)b=x;else if(b=E.isPointLight===!0?l:a,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const T=b.uuid,B=y.uuid;let k=c[T];k===void 0&&(k={},c[T]=k);let P=k[B];P===void 0&&(P=b.clone(),k[B]=P),b=P}if(b.visible=y.visible,b.wireframe=y.wireframe,L===rr?b.side=y.shadowSide!==null?y.shadowSide:y.side:b.side=y.shadowSide!==null?y.shadowSide:h[y.side],b.alphaMap=y.alphaMap,b.alphaTest=y.alphaTest,b.map=y.map,b.clipShadows=y.clipShadows,b.clippingPlanes=y.clippingPlanes,b.clipIntersection=y.clipIntersection,b.displacementMap=y.displacementMap,b.displacementScale=y.displacementScale,b.displacementBias=y.displacementBias,b.wireframeLinewidth=y.wireframeLinewidth,b.linewidth=y.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const T=o.properties.get(b);T.light=E}return b}function M(v,y,E,L,b){if(v.visible===!1)return;if(v.layers.test(y.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&b===rr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);const B=e.update(v),k=v.material;if(Array.isArray(k)){const P=B.groups;for(let U=0,F=P.length;U<F;U++){const K=P[U],Z=k[K.materialIndex];if(Z&&Z.visible){const X=S(v,Z,L,b);o.renderBufferDirect(E,null,B,X,v,K)}}}else if(k.visible){const P=S(v,k,L,b);o.renderBufferDirect(E,null,B,P,v,null)}}const T=v.children;for(let B=0,k=T.length;B<k;B++)M(T[B],y,E,L,b)}}function ex(o,e,t){const n=t.isWebGL2;function i(){let D=!1;const q=new je;let ee=null;const he=new je(0,0,0,0);return{setMask:function(ge){ee!==ge&&!D&&(o.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){D=ge},setClear:function(ge,Ke,Qe,wt,ei){ei===!0&&(ge*=wt,Ke*=wt,Qe*=wt),q.set(ge,Ke,Qe,wt),he.equals(q)===!1&&(o.clearColor(ge,Ke,Qe,wt),he.copy(q))},reset:function(){D=!1,ee=null,he.set(-1,0,0,0)}}}function s(){let D=!1,q=null,ee=null,he=null;return{setTest:function(ge){ge?V(2929):be(2929)},setMask:function(ge){q!==ge&&!D&&(o.depthMask(ge),q=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case df:o.depthFunc(512);break;case ff:o.depthFunc(519);break;case pf:o.depthFunc(513);break;case Ao:o.depthFunc(515);break;case mf:o.depthFunc(514);break;case gf:o.depthFunc(518);break;case _f:o.depthFunc(516);break;case xf:o.depthFunc(517);break;default:o.depthFunc(515)}ee=ge}},setLocked:function(ge){D=ge},setClear:function(ge){he!==ge&&(o.clearDepth(ge),he=ge)},reset:function(){D=!1,q=null,ee=null,he=null}}}function r(){let D=!1,q=null,ee=null,he=null,ge=null,Ke=null,Qe=null,wt=null,ei=null;return{setTest:function(at){D||(at?V(2960):be(2960))},setMask:function(at){q!==at&&!D&&(o.stencilMask(at),q=at)},setFunc:function(at,sn,wn){(ee!==at||he!==sn||ge!==wn)&&(o.stencilFunc(at,sn,wn),ee=at,he=sn,ge=wn)},setOp:function(at,sn,wn){(Ke!==at||Qe!==sn||wt!==wn)&&(o.stencilOp(at,sn,wn),Ke=at,Qe=sn,wt=wn)},setLocked:function(at){D=at},setClear:function(at){ei!==at&&(o.clearStencil(at),ei=at)},reset:function(){D=!1,q=null,ee=null,he=null,ge=null,Ke=null,Qe=null,wt=null,ei=null}}}const a=new i,l=new s,c=new r,u=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,f=!1,S=null,M=null,v=null,y=null,E=null,L=null,b=null,x=!1,T=null,B=null,k=null,P=null,U=null;const F=o.getParameter(35661);let K=!1,Z=0;const X=o.getParameter(7938);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=Z>=2);let ne=null,J={};const _e=o.getParameter(3088),ie=o.getParameter(2978),G=new je().fromArray(_e),Y=new je().fromArray(ie);function se(D,q,ee){const he=new Uint8Array(4),ge=o.createTexture();o.bindTexture(D,ge),o.texParameteri(D,10241,9728),o.texParameteri(D,10240,9728);for(let Ke=0;Ke<ee;Ke++)o.texImage2D(q+Ke,0,6408,1,1,0,6408,5121,he);return ge}const ce={};ce[3553]=se(3553,3553,1),ce[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),V(2929),l.setFunc(Ao),Je(!1),lt(Wl),V(2884),Ee(pi);function V(D){d[D]!==!0&&(o.enable(D),d[D]=!0)}function be(D){d[D]!==!1&&(o.disable(D),d[D]=!1)}function Me(D,q){return p[D]!==q?(o.bindFramebuffer(D,q),p[D]=q,n&&(D===36009&&(p[36160]=q),D===36160&&(p[36009]=q)),!0):!1}function ae(D,q){let ee=g,he=!1;if(D)if(ee=_.get(q),ee===void 0&&(ee=[],_.set(q,ee)),D.isWebGLMultipleRenderTargets){const ge=D.texture;if(ee.length!==ge.length||ee[0]!==36064){for(let Ke=0,Qe=ge.length;Ke<Qe;Ke++)ee[Ke]=36064+Ke;ee.length=ge.length,he=!0}}else ee[0]!==36064&&(ee[0]=36064,he=!0);else ee[0]!==1029&&(ee[0]=1029,he=!0);he&&(t.isWebGL2?o.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function ve(D){return m!==D?(o.useProgram(D),m=D,!0):!1}const ze={[gs]:32774,[ef]:32778,[tf]:32779};if(n)ze[jl]=32775,ze[Yl]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(ze[jl]=D.MIN_EXT,ze[Yl]=D.MAX_EXT)}const me={[nf]:0,[sf]:1,[rf]:768,[nh]:770,[hf]:776,[cf]:774,[of]:772,[af]:769,[ih]:771,[uf]:775,[lf]:773};function Ee(D,q,ee,he,ge,Ke,Qe,wt){if(D===pi){f===!0&&(be(3042),f=!1);return}if(f===!1&&(V(3042),f=!0),D!==Qd){if(D!==S||wt!==x){if((M!==gs||E!==gs)&&(o.blendEquation(32774),M=gs,E=gs),wt)switch(D){case Ss:o.blendFuncSeparate(1,771,1,771);break;case wo:o.blendFunc(1,1);break;case Xl:o.blendFuncSeparate(0,769,0,1);break;case ql:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ss:o.blendFuncSeparate(770,771,1,771);break;case wo:o.blendFunc(770,1);break;case Xl:o.blendFuncSeparate(0,769,0,1);break;case ql:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,y=null,L=null,b=null,S=D,x=wt}return}ge=ge||q,Ke=Ke||ee,Qe=Qe||he,(q!==M||ge!==E)&&(o.blendEquationSeparate(ze[q],ze[ge]),M=q,E=ge),(ee!==v||he!==y||Ke!==L||Qe!==b)&&(o.blendFuncSeparate(me[ee],me[he],me[Ke],me[Qe]),v=ee,y=he,L=Ke,b=Qe),S=D,x=!1}function nt(D,q){D.side===Sn?be(2884):V(2884);let ee=D.side===kt;q&&(ee=!ee),Je(ee),D.blending===Ss&&D.transparent===!1?Ee(pi):Ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const he=D.stencilWrite;c.setTest(he),he&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?V(32926):be(32926)}function Je(D){T!==D&&(D?o.frontFace(2304):o.frontFace(2305),T=D)}function lt(D){D!==Zd?(V(2884),D!==B&&(D===Wl?o.cullFace(1029):D===$d?o.cullFace(1028):o.cullFace(1032))):be(2884),B=D}function st(D){D!==k&&(K&&o.lineWidth(D),k=D)}function Be(D,q,ee){D?(V(32823),(P!==q||U!==ee)&&(o.polygonOffset(q,ee),P=q,U=ee)):be(32823)}function Ye(D){D?V(3089):be(3089)}function Tt(D){D===void 0&&(D=33984+F-1),ne!==D&&(o.activeTexture(D),ne=D)}function C(D,q,ee){ee===void 0&&(ne===null?ee=33984+F-1:ee=ne);let he=J[ee];he===void 0&&(he={type:void 0,texture:void 0},J[ee]=he),(he.type!==D||he.texture!==q)&&(ne!==ee&&(o.activeTexture(ee),ne=ee),o.bindTexture(D,q||ce[D]),he.type=D,he.texture=q)}function w(){const D=J[ne];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function R(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(D){G.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),G.copy(D))}function fe(D){Y.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Te(D,q){let ee=h.get(q);ee===void 0&&(ee=new WeakMap,h.set(q,ee));let he=ee.get(D);he===void 0&&(he=o.getUniformBlockIndex(q,D.name),ee.set(D,he))}function Re(D,q){const he=h.get(q).get(D);u.get(q)!==he&&(o.uniformBlockBinding(q,he,D.__bindingPointIndex),u.set(q,he))}function rt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},ne=null,J={},p={},_=new WeakMap,g=[],m=null,f=!1,S=null,M=null,v=null,y=null,E=null,L=null,b=null,x=!1,T=null,B=null,k=null,P=null,U=null,G.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:V,disable:be,bindFramebuffer:Me,drawBuffers:ae,useProgram:ve,setBlending:Ee,setMaterial:nt,setFlipSided:Je,setCullFace:lt,setLineWidth:st,setPolygonOffset:Be,setScissorTest:Ye,activeTexture:Tt,bindTexture:C,unbindTexture:w,compressedTexImage2D:H,compressedTexImage3D:Q,texImage2D:de,texImage3D:pe,updateUBOMapping:Te,uniformBlockBinding:Re,texStorage2D:z,texStorage3D:le,texSubImage2D:te,texSubImage3D:oe,compressedTexSubImage2D:R,compressedTexSubImage3D:$,scissor:ue,viewport:fe,reset:rt}}function tx(o,e,t,n,i,s,r){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,w){return f?new OffscreenCanvas(C,w):xr("canvas")}function M(C,w,H,Q){let te=1;if((C.width>Q||C.height>Q)&&(te=Q/Math.max(C.width,C.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=w?dh:Math.floor,R=oe(te*C.width),$=oe(te*C.height);g===void 0&&(g=S(R,$));const z=H?S(R,$):g;return z.width=R,z.height=$,z.getContext("2d").drawImage(C,0,0,R,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+R+"x"+$+")."),z}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return Do(C.width)&&Do(C.height)}function y(C){return a?!1:C.wrapS!==un||C.wrapT!==un||C.minFilter!==vt&&C.minFilter!==Bt}function E(C,w){return C.generateMipmaps&&w&&C.minFilter!==vt&&C.minFilter!==Bt}function L(C){o.generateMipmap(C)}function b(C,w,H,Q,te=!1){if(a===!1)return w;if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=w;return w===6403&&(H===5126&&(oe=33326),H===5131&&(oe=33325),H===5121&&(oe=33321)),w===33319&&(H===5126&&(oe=33328),H===5131&&(oe=33327),H===5121&&(oe=33323)),w===6408&&(H===5126&&(oe=34836),H===5131&&(oe=34842),H===5121&&(oe=Q===Ve&&te===!1?35907:32856),H===32819&&(oe=32854),H===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function x(C,w,H){return E(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==vt&&C.minFilter!==Bt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function T(C){return C===vt||C===Lo||C===ra?9728:9729}function B(C){const w=C.target;w.removeEventListener("dispose",B),P(w),w.isVideoTexture&&_.delete(w)}function k(C){const w=C.target;w.removeEventListener("dispose",k),F(w)}function P(C){const w=n.get(C);if(w.__webglInit===void 0)return;const H=C.source,Q=m.get(H);if(Q){const te=Q[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&U(C),Object.keys(Q).length===0&&m.delete(H)}n.remove(C)}function U(C){const w=n.get(C);o.deleteTexture(w.__webglTexture);const H=C.source,Q=m.get(H);delete Q[w.__cacheKey],r.memory.textures--}function F(C){const w=C.texture,H=n.get(C),Q=n.get(w);if(Q.__webglTexture!==void 0&&(o.deleteTexture(Q.__webglTexture),r.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)o.deleteFramebuffer(H.__webglFramebuffer[te]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[te]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,oe=w.length;te<oe;te++){const R=n.get(w[te]);R.__webglTexture&&(o.deleteTexture(R.__webglTexture),r.memory.textures--),n.remove(w[te])}n.remove(w),n.remove(C)}let K=0;function Z(){K=0}function X(){const C=K;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),K+=1,C}function ne(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function J(C,w){const H=n.get(C);if(C.isVideoTexture&&Ye(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(H,C,w);return}}t.bindTexture(3553,H.__webglTexture,33984+w)}function _e(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){be(H,C,w);return}t.bindTexture(35866,H.__webglTexture,33984+w)}function ie(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){be(H,C,w);return}t.bindTexture(32879,H.__webglTexture,33984+w)}function G(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Me(H,C,w);return}t.bindTexture(34067,H.__webglTexture,33984+w)}const Y={[Ps]:10497,[un]:33071,[ua]:33648},se={[vt]:9728,[Lo]:9984,[ra]:9986,[Bt]:9729,[ah]:9985,[Vi]:9987};function ce(C,w,H){if(H?(o.texParameteri(C,10242,Y[w.wrapS]),o.texParameteri(C,10243,Y[w.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,Y[w.wrapR]),o.texParameteri(C,10240,se[w.magFilter]),o.texParameteri(C,10241,se[w.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),(w.wrapS!==un||w.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(C,10240,T(w.magFilter)),o.texParameteri(C,10241,T(w.minFilter)),w.minFilter!==vt&&w.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===vt||w.minFilter!==ra&&w.minFilter!==Vi||w.type===li&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===gr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(o.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function V(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",B));const Q=w.source;let te=m.get(Q);te===void 0&&(te={},m.set(Q,te));const oe=ne(w);if(oe!==C.__cacheKey){te[oe]===void 0&&(te[oe]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,H=!0),te[oe].usedTimes++;const R=te[C.__cacheKey];R!==void 0&&(te[C.__cacheKey].usedTimes--,R.usedTimes===0&&U(w)),C.__cacheKey=oe,C.__webglTexture=te[oe].texture}return H}function be(C,w,H){let Q=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=35866),w.isData3DTexture&&(Q=32879);const te=V(C,w),oe=w.source;t.bindTexture(Q,C.__webglTexture,33984+H);const R=n.get(oe);if(oe.version!==R.__version||te===!0){t.activeTexture(33984+H),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const $=y(w)&&v(w.image)===!1;let z=M(w.image,$,!1,u);z=Tt(w,z);const le=v(z)||a,de=s.convert(w.format,w.encoding);let pe=s.convert(w.type),ue=b(w.internalFormat,de,pe,w.encoding,w.isVideoTexture);ce(Q,w,le);let fe;const Te=w.mipmaps,Re=a&&w.isVideoTexture!==!0,rt=R.__version===void 0||te===!0,D=x(w,z,le);if(w.isDepthTexture)ue=6402,a?w.type===li?ue=36012:w.type===Di?ue=33190:w.type===bs?ue=35056:ue=33189:w.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Oi&&ue===6402&&w.type!==oh&&w.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Di,pe=s.convert(w.type)),w.format===Is&&ue===6402&&(ue=34041,w.type!==bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=bs,pe=s.convert(w.type))),rt&&(Re?t.texStorage2D(3553,1,ue,z.width,z.height):t.texImage2D(3553,0,ue,z.width,z.height,0,de,pe,null));else if(w.isDataTexture)if(Te.length>0&&le){Re&&rt&&t.texStorage2D(3553,D,ue,Te[0].width,Te[0].height);for(let q=0,ee=Te.length;q<ee;q++)fe=Te[q],Re?t.texSubImage2D(3553,q,0,0,fe.width,fe.height,de,pe,fe.data):t.texImage2D(3553,q,ue,fe.width,fe.height,0,de,pe,fe.data);w.generateMipmaps=!1}else Re?(rt&&t.texStorage2D(3553,D,ue,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,de,pe,z.data)):t.texImage2D(3553,0,ue,z.width,z.height,0,de,pe,z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Re&&rt&&t.texStorage3D(35866,D,ue,Te[0].width,Te[0].height,z.depth);for(let q=0,ee=Te.length;q<ee;q++)fe=Te[q],w.format!==hn?de!==null?Re?t.compressedTexSubImage3D(35866,q,0,0,0,fe.width,fe.height,z.depth,de,fe.data,0,0):t.compressedTexImage3D(35866,q,ue,fe.width,fe.height,z.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage3D(35866,q,0,0,0,fe.width,fe.height,z.depth,de,pe,fe.data):t.texImage3D(35866,q,ue,fe.width,fe.height,z.depth,0,de,pe,fe.data)}else{Re&&rt&&t.texStorage2D(3553,D,ue,Te[0].width,Te[0].height);for(let q=0,ee=Te.length;q<ee;q++)fe=Te[q],w.format!==hn?de!==null?Re?t.compressedTexSubImage2D(3553,q,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(3553,q,ue,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage2D(3553,q,0,0,fe.width,fe.height,de,pe,fe.data):t.texImage2D(3553,q,ue,fe.width,fe.height,0,de,pe,fe.data)}else if(w.isDataArrayTexture)Re?(rt&&t.texStorage3D(35866,D,ue,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,de,pe,z.data)):t.texImage3D(35866,0,ue,z.width,z.height,z.depth,0,de,pe,z.data);else if(w.isData3DTexture)Re?(rt&&t.texStorage3D(32879,D,ue,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,de,pe,z.data)):t.texImage3D(32879,0,ue,z.width,z.height,z.depth,0,de,pe,z.data);else if(w.isFramebufferTexture){if(rt)if(Re)t.texStorage2D(3553,D,ue,z.width,z.height);else{let q=z.width,ee=z.height;for(let he=0;he<D;he++)t.texImage2D(3553,he,ue,q,ee,0,de,pe,null),q>>=1,ee>>=1}}else if(Te.length>0&&le){Re&&rt&&t.texStorage2D(3553,D,ue,Te[0].width,Te[0].height);for(let q=0,ee=Te.length;q<ee;q++)fe=Te[q],Re?t.texSubImage2D(3553,q,0,0,de,pe,fe):t.texImage2D(3553,q,ue,de,pe,fe);w.generateMipmaps=!1}else Re?(rt&&t.texStorage2D(3553,D,ue,z.width,z.height),t.texSubImage2D(3553,0,0,0,de,pe,z)):t.texImage2D(3553,0,ue,de,pe,z);E(w,le)&&L(Q),R.__version=oe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Me(C,w,H){if(w.image.length!==6)return;const Q=V(C,w),te=w.source;t.bindTexture(34067,C.__webglTexture,33984+H);const oe=n.get(te);if(te.version!==oe.__version||Q===!0){t.activeTexture(33984+H),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const R=w.isCompressedTexture||w.image[0].isCompressedTexture,$=w.image[0]&&w.image[0].isDataTexture,z=[];for(let q=0;q<6;q++)!R&&!$?z[q]=M(w.image[q],!1,!0,c):z[q]=$?w.image[q].image:w.image[q],z[q]=Tt(w,z[q]);const le=z[0],de=v(le)||a,pe=s.convert(w.format,w.encoding),ue=s.convert(w.type),fe=b(w.internalFormat,pe,ue,w.encoding),Te=a&&w.isVideoTexture!==!0,Re=oe.__version===void 0||Q===!0;let rt=x(w,le,de);ce(34067,w,de);let D;if(R){Te&&Re&&t.texStorage2D(34067,rt,fe,le.width,le.height);for(let q=0;q<6;q++){D=z[q].mipmaps;for(let ee=0;ee<D.length;ee++){const he=D[ee];w.format!==hn?pe!==null?Te?t.compressedTexSubImage2D(34069+q,ee,0,0,he.width,he.height,pe,he.data):t.compressedTexImage2D(34069+q,ee,fe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(34069+q,ee,0,0,he.width,he.height,pe,ue,he.data):t.texImage2D(34069+q,ee,fe,he.width,he.height,0,pe,ue,he.data)}}}else{D=w.mipmaps,Te&&Re&&(D.length>0&&rt++,t.texStorage2D(34067,rt,fe,z[0].width,z[0].height));for(let q=0;q<6;q++)if($){Te?t.texSubImage2D(34069+q,0,0,0,z[q].width,z[q].height,pe,ue,z[q].data):t.texImage2D(34069+q,0,fe,z[q].width,z[q].height,0,pe,ue,z[q].data);for(let ee=0;ee<D.length;ee++){const ge=D[ee].image[q].image;Te?t.texSubImage2D(34069+q,ee+1,0,0,ge.width,ge.height,pe,ue,ge.data):t.texImage2D(34069+q,ee+1,fe,ge.width,ge.height,0,pe,ue,ge.data)}}else{Te?t.texSubImage2D(34069+q,0,0,0,pe,ue,z[q]):t.texImage2D(34069+q,0,fe,pe,ue,z[q]);for(let ee=0;ee<D.length;ee++){const he=D[ee];Te?t.texSubImage2D(34069+q,ee+1,0,0,pe,ue,he.image[q]):t.texImage2D(34069+q,ee+1,fe,pe,ue,he.image[q])}}}E(w,de)&&L(34067),oe.__version=te.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ae(C,w,H,Q,te){const oe=s.convert(H.format,H.encoding),R=s.convert(H.type),$=b(H.internalFormat,oe,R,H.encoding);n.get(w).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,$,w.width,w.height,w.depth,0,oe,R,null):t.texImage2D(te,0,$,w.width,w.height,0,oe,R,null)),t.bindFramebuffer(36160,C),Be(w)?d.framebufferTexture2DMultisampleEXT(36160,Q,te,n.get(H).__webglTexture,0,st(w)):(te===3553||te>=34069&&te<=34074)&&o.framebufferTexture2D(36160,Q,te,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(C,w,H){if(o.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let Q=33189;if(H||Be(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===li?Q=36012:te.type===Di&&(Q=33190));const oe=st(w);Be(w)?d.renderbufferStorageMultisampleEXT(36161,oe,Q,w.width,w.height):o.renderbufferStorageMultisample(36161,oe,Q,w.width,w.height)}else o.renderbufferStorage(36161,Q,w.width,w.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const Q=st(w);H&&Be(w)===!1?o.renderbufferStorageMultisample(36161,Q,35056,w.width,w.height):Be(w)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,w.width,w.height):o.renderbufferStorage(36161,34041,w.width,w.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{const Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<Q.length;te++){const oe=Q[te],R=s.convert(oe.format,oe.encoding),$=s.convert(oe.type),z=b(oe.internalFormat,R,$,oe.encoding),le=st(w);H&&Be(w)===!1?o.renderbufferStorageMultisample(36161,le,z,w.width,w.height):Be(w)?d.renderbufferStorageMultisampleEXT(36161,le,z,w.width,w.height):o.renderbufferStorage(36161,z,w.width,w.height)}}o.bindRenderbuffer(36161,null)}function ze(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const Q=n.get(w.depthTexture).__webglTexture,te=st(w);if(w.depthTexture.format===Oi)Be(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,te):o.framebufferTexture2D(36160,36096,3553,Q,0);else if(w.depthTexture.format===Is)Be(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,te):o.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function me(C){const w=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ze(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=o.createRenderbuffer(),ve(w.__webglDepthbuffer[Q],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),ve(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Ee(C,w,H){const Q=n.get(C);w!==void 0&&ae(Q.__webglFramebuffer,C,C.texture,36064,3553),H!==void 0&&me(C)}function nt(C){const w=C.texture,H=n.get(C),Q=n.get(w);C.addEventListener("dispose",k),C.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=w.version,r.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,R=v(C)||a;if(te){H.__webglFramebuffer=[];for(let $=0;$<6;$++)H.__webglFramebuffer[$]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),oe)if(i.drawBuffers){const $=C.texture;for(let z=0,le=$.length;z<le;z++){const de=n.get($[z]);de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Be(C)===!1){const $=oe?w:[w];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let z=0;z<$.length;z++){const le=$[z];H.__webglColorRenderbuffer[z]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[z]);const de=s.convert(le.format,le.encoding),pe=s.convert(le.type),ue=b(le.internalFormat,de,pe,le.encoding,C.isXRRenderTarget===!0),fe=st(C);o.renderbufferStorageMultisample(36161,fe,ue,C.width,C.height),o.framebufferRenderbuffer(36160,36064+z,36161,H.__webglColorRenderbuffer[z])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,Q.__webglTexture),ce(34067,w,R);for(let $=0;$<6;$++)ae(H.__webglFramebuffer[$],C,w,36064,34069+$);E(w,R)&&L(34067),t.unbindTexture()}else if(oe){const $=C.texture;for(let z=0,le=$.length;z<le;z++){const de=$[z],pe=n.get(de);t.bindTexture(3553,pe.__webglTexture),ce(3553,de,R),ae(H.__webglFramebuffer,C,de,36064+z,3553),E(de,R)&&L(3553)}t.unbindTexture()}else{let $=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?$=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,Q.__webglTexture),ce($,w,R),ae(H.__webglFramebuffer,C,w,36064,$),E(w,R)&&L($),t.unbindTexture()}C.depthBuffer&&me(C)}function Je(C){const w=v(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Q=0,te=H.length;Q<te;Q++){const oe=H[Q];if(E(oe,w)){const R=C.isWebGLCubeRenderTarget?34067:3553,$=n.get(oe).__webglTexture;t.bindTexture(R,$),L(R),t.unbindTexture()}}}function lt(C){if(a&&C.samples>0&&Be(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,Q=C.height;let te=16384;const oe=[],R=C.stencilBuffer?33306:36096,$=n.get(C),z=C.isWebGLMultipleRenderTargets===!0;if(z)for(let le=0;le<w.length;le++)t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,$.__webglFramebuffer);for(let le=0;le<w.length;le++){oe.push(36064+le),C.depthBuffer&&oe.push(R);const de=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(de===!1&&(C.depthBuffer&&(te|=256),C.stencilBuffer&&(te|=1024)),z&&o.framebufferRenderbuffer(36008,36064,36161,$.__webglColorRenderbuffer[le]),de===!0&&(o.invalidateFramebuffer(36008,[R]),o.invalidateFramebuffer(36009,[R])),z){const pe=n.get(w[le]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,pe,0)}o.blitFramebuffer(0,0,H,Q,0,0,H,Q,te,9728),p&&o.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let le=0;le<w.length;le++){t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,$.__webglColorRenderbuffer[le]);const de=n.get(w[le]).__webglTexture;t.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,de,0)}t.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}}function st(C){return Math.min(h,C.samples)}function Be(C){const w=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(C){const w=r.render.frame;_.get(C)!==w&&(_.set(C,w),C.update())}function Tt(C,w){const H=C.encoding,Q=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Io||H!==Hi&&(H===Ve?a===!1?e.has("EXT_sRGB")===!0&&Q===hn?(C.format=Io,C.minFilter=Bt,C.generateMipmaps=!1):w=ph.sRGBToLinear(w):(Q!==hn||te!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=X,this.resetTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=_e,this.setTexture3D=ie,this.setTextureCube=G,this.rebindTextures=Ee,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Be}function nx(o,e,t){const n=t.isWebGL2;function i(s,r=null){let a;if(s===Gi)return 5121;if(s===Lf)return 32819;if(s===Rf)return 32820;if(s===Af)return 5120;if(s===Ef)return 5122;if(s===oh)return 5123;if(s===Cf)return 5124;if(s===Di)return 5125;if(s===li)return 5126;if(s===gr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Pf)return 6406;if(s===hn)return 6408;if(s===If)return 6409;if(s===Df)return 6410;if(s===Oi)return 6402;if(s===Is)return 34041;if(s===Io)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Uf)return 6403;if(s===Nf)return 36244;if(s===Of)return 33319;if(s===Ff)return 33320;if(s===kf)return 36249;if(s===Da||s===Ua||s===Na||s===Oa)if(r===Ve)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Da)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Da)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ua)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Oa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kl||s===Zl||s===$l||s===Jl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Kl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$l)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ql||s===ec)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ql)return r===Ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ec)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tc||s===nc||s===ic||s===sc||s===rc||s===ac||s===oc||s===lc||s===cc||s===uc||s===hc||s===dc||s===fc||s===pc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===tc)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nc)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ic)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sc)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rc)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ac)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===oc)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lc)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cc)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===uc)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hc)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dc)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fc)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pc)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Fa)return r===Ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===zf||s===mc||s===gc||s===_c)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Fa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===mc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_c)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bs?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class ix extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ui extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sx={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rx extends St{constructor(e,t,n,i,s,r,a,l,c,u){if(u=u!==void 0?u:Oi,u!==Oi&&u!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Oi&&(n=Di),n===void 0&&u===Is&&(n=bs),super(null,i,s,r,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1}}class ax extends vi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const S=[],M=[],v=new Set,y=new Map,E=new Nt;E.layers.enable(1),E.viewport=new je;const L=new Nt;L.layers.enable(2),L.viewport=new je;const b=[E,L],x=new ix;x.layers.enable(1),x.layers.enable(2);let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=S[G];return Y===void 0&&(Y=new ao,S[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=S[G];return Y===void 0&&(Y=new ao,S[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=S[G];return Y===void 0&&(Y=new ao,S[G]=Y),Y.getHandSpace()};function k(G){const Y=M.indexOf(G.inputSource);if(Y===-1)return;const se=S[Y];se!==void 0&&se.dispatchEvent({type:G.type,data:G.inputSource})}function P(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",U);for(let G=0;G<S.length;G++){const Y=M[G];Y!==null&&(M[G]=null,S[G].disconnect(Y))}T=null,B=null,e.setRenderTarget(m),p=null,d=null,h=null,i=null,f=null,ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",P),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:p}),f=new Wi(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Gi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let Y=null,se=null,ce=null;g.depth&&(ce=g.stencil?35056:33190,Y=g.stencil?Is:Oi,se=g.stencil?bs:Di);const V={colorFormat:32856,depthFormat:ce,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(V),i.updateRenderState({layers:[d]}),f=new Wi(d.textureWidth,d.textureHeight,{format:hn,type:Gi,depthTexture:new rx(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const be=e.properties.get(f);be.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(G){for(let Y=0;Y<G.removed.length;Y++){const se=G.removed[Y],ce=M.indexOf(se);ce>=0&&(M[ce]=null,S[ce].disconnect(se))}for(let Y=0;Y<G.added.length;Y++){const se=G.added[Y];let ce=M.indexOf(se);if(ce===-1){for(let be=0;be<S.length;be++)if(be>=M.length){M.push(se),ce=be;break}else if(M[be]===null){M[be]=se,ce=be;break}if(ce===-1)break}const V=S[ce];V&&V.connect(se)}}const F=new I,K=new I;function Z(G,Y,se){F.setFromMatrixPosition(Y.matrixWorld),K.setFromMatrixPosition(se.matrixWorld);const ce=F.distanceTo(K),V=Y.projectionMatrix.elements,be=se.projectionMatrix.elements,Me=V[14]/(V[10]-1),ae=V[14]/(V[10]+1),ve=(V[9]+1)/V[5],ze=(V[9]-1)/V[5],me=(V[8]-1)/V[0],Ee=(be[8]+1)/be[0],nt=Me*me,Je=Me*Ee,lt=ce/(-me+Ee),st=lt*-me;Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(st),G.translateZ(lt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Be=Me+lt,Ye=ae+lt,Tt=nt-st,C=Je+(ce-st),w=ve*ae/Ye*Be,H=ze*ae/Ye*Be;G.projectionMatrix.makePerspective(Tt,C,w,H,Be,Ye),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function X(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;x.near=L.near=E.near=G.near,x.far=L.far=E.far=G.far,(T!==x.near||B!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,B=x.far);const Y=G.parent,se=x.cameras;X(x,Y);for(let ce=0;ce<se.length;ce++)X(se[ce],Y);se.length===2?Z(x,E,L):x.projectionMatrix.copy(E.projectionMatrix),ne(G,x,Y)};function ne(G,Y,se){se===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(se.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const ce=G.children;for(let V=0,be=ce.length;V<be;V++)ce[V].updateMatrixWorld(!0);G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ns*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.getPlanes=function(){return v};let J=null;function _e(G,Y){if(u=Y.getViewerPose(c||r),_=Y,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ce=!1;se.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let V=0;V<se.length;V++){const be=se[V];let Me=null;if(p!==null)Me=p.getViewport(be);else{const ve=h.getViewSubImage(d,be);Me=ve.viewport,V===0&&(e.setRenderTargetTextures(f,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(f))}let ae=b[V];ae===void 0&&(ae=new Nt,ae.layers.enable(V),ae.viewport=new je,b[V]=ae),ae.matrix.fromArray(be.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(be.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Me.x,Me.y,Me.width,Me.height),V===0&&(x.matrix.copy(ae.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(ae)}}for(let se=0;se<S.length;se++){const ce=M[se],V=S[se];ce!==null&&V!==void 0&&V.update(ce,Y,c||r)}if(J&&J(G,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let se=null;for(const ce of v)Y.detectedPlanes.has(ce)||(se===null&&(se=[]),se.push(ce));if(se!==null)for(const ce of se)v.delete(ce),y.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of Y.detectedPlanes)if(!v.has(ce))v.add(ce),y.set(ce,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const V=y.get(ce);ce.lastChangedTime>V&&(y.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}_=null}const ie=new Th;ie.setAnimationLoop(_e),this.setAnimationLoop=function(G){J=G},this.dispose=function(){}}}function ox(o,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,yh(o)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,M,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,S,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const M=o.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*M,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lx(o,e,t,n){let i={},s={},r=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(S,M){const v=M.program;n.uniformBlockBinding(S,v)}function c(S,M){let v=i[S.id];v===void 0&&(_(S),v=u(S),i[S.id]=v,S.addEventListener("dispose",m));const y=M.program;n.updateUBOMapping(S,y);const E=e.render.frame;s[S.id]!==E&&(d(S),s[S.id]=E)}function u(S){const M=h();S.__bindingPointIndex=M;const v=o.createBuffer(),y=S.__size,E=S.usage;return o.bindBuffer(35345,v),o.bufferData(35345,y,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,M,v),v}function h(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=i[S.id],v=S.uniforms,y=S.__cache;o.bindBuffer(35345,M);for(let E=0,L=v.length;E<L;E++){const b=v[E];if(p(b,E,y)===!0){const x=b.__offset,T=Array.isArray(b.value)?b.value:[b.value];let B=0;for(let k=0;k<T.length;k++){const P=T[k],U=g(P);typeof P=="number"?(b.__data[0]=P,o.bufferSubData(35345,x+B,b.__data)):P.isMatrix3?(b.__data[0]=P.elements[0],b.__data[1]=P.elements[1],b.__data[2]=P.elements[2],b.__data[3]=P.elements[0],b.__data[4]=P.elements[3],b.__data[5]=P.elements[4],b.__data[6]=P.elements[5],b.__data[7]=P.elements[0],b.__data[8]=P.elements[6],b.__data[9]=P.elements[7],b.__data[10]=P.elements[8],b.__data[11]=P.elements[0]):(P.toArray(b.__data,B),B+=U.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,x,b.__data)}}o.bindBuffer(35345,null)}function p(S,M,v){const y=S.value;if(v[M]===void 0){if(typeof y=="number")v[M]=y;else{const E=Array.isArray(y)?y:[y],L=[];for(let b=0;b<E.length;b++)L.push(E[b].clone());v[M]=L}return!0}else if(typeof y=="number"){if(v[M]!==y)return v[M]=y,!0}else{const E=Array.isArray(v[M])?v[M]:[v[M]],L=Array.isArray(y)?y:[y];for(let b=0;b<E.length;b++){const x=E[b];if(x.equals(L[b])===!1)return x.copy(L[b]),!0}}return!1}function _(S){const M=S.uniforms;let v=0;const y=16;let E=0;for(let L=0,b=M.length;L<b;L++){const x=M[L],T={boundary:0,storage:0},B=Array.isArray(x.value)?x.value:[x.value];for(let k=0,P=B.length;k<P;k++){const U=B[k],F=g(U);T.boundary+=F.boundary,T.storage+=F.storage}if(x.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=v,L>0){E=v%y;const k=y-E;E!==0&&k-T.boundary<0&&(v+=y-E,x.__offset=v)}v+=T.storage}return E=v%y,E>0&&(v+=y-E),S.__size=v,S.__cache={},this}function g(S){const M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const v=r.indexOf(M.__bindingPointIndex);r.splice(v,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function f(){for(const S in i)o.deleteBuffer(i[S]);r=[],i={},s={}}return{bind:l,update:c,dispose:f}}function cx(){const o=xr("canvas");return o.style.display="block",o}class Lh{constructor(e={}){const{canvas:t=cx(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=r;let p=null,_=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Hi,this.useLegacyLights=!0,this.toneMapping=jn,this.toneMappingExposure=1;const f=this;let S=!1,M=0,v=0,y=null,E=-1,L=null;const b=new je,x=new je;let T=null,B=t.width,k=t.height,P=1,U=null,F=null;const K=new je(0,0,B,k),Z=new je(0,0,B,k);let X=!1;const ne=new fl;let J=!1,_e=!1,ie=null;const G=new Pe,Y=new I,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return y===null?P:1}let V=n;function be(A,O){for(let W=0;W<A.length;W++){const N=A[W],j=t.getContext(N,O);if(j!==null)return j}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cl}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Re,!1),V===null){const O=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&O.shift(),V=be(O,A),V===null)throw be(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,ae,ve,ze,me,Ee,nt,Je,lt,st,Be,Ye,Tt,C,w,H,Q,te,oe,R,$,z,le,de;function pe(){Me=new y_(V),ae=new p_(V,Me,e),Me.init(ae),z=new nx(V,Me,ae),ve=new ex(V,Me,ae),ze=new b_,me=new z0,Ee=new tx(V,Me,ve,me,ae,z,ze),nt=new g_(f),Je=new v_(f),lt=new Np(V,ae),le=new d_(V,Me,lt,ae),st=new M_(V,lt,ze,le),Be=new E_(V,st,lt,ze),oe=new A_(V,ae,Ee),H=new m_(me),Ye=new B0(f,nt,Je,Me,ae,le,H),Tt=new ox(f,me),C=new G0,w=new Y0(Me,ae),te=new h_(f,nt,Je,ve,Be,d,l),Q=new Q0(f,Be,ae),de=new lx(V,ze,ae,ve),R=new f_(V,Me,ze,ae),$=new S_(V,Me,ze,ae),ze.programs=Ye.programs,f.capabilities=ae,f.extensions=Me,f.properties=me,f.renderLists=C,f.shadowMap=Q,f.state=ve,f.info=ze}pe();const ue=new ax(f,V);this.xr=ue,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(A){A!==void 0&&(P=A,this.setSize(B,k,!1))},this.getSize=function(A){return A.set(B,k)},this.setSize=function(A,O,W=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,k=O,t.width=Math.floor(A*P),t.height=Math.floor(O*P),W===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(B*P,k*P).floor()},this.setDrawingBufferSize=function(A,O,W){B=A,k=O,P=W,t.width=Math.floor(A*W),t.height=Math.floor(O*W),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,O,W,N){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,O,W,N),ve.viewport(b.copy(K).multiplyScalar(P).floor())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,O,W,N){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,O,W,N),ve.scissor(x.copy(Z).multiplyScalar(P).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(A){ve.setScissorTest(X=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){F=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,O=!0,W=!0){let N=0;A&&(N|=16384),O&&(N|=256),W&&(N|=1024),V.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),C.dispose(),w.dispose(),me.dispose(),nt.dispose(),Je.dispose(),Be.dispose(),le.dispose(),de.dispose(),Ye.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ge),ue.removeEventListener("sessionend",Ke),ie&&(ie.dispose(),ie=null),Qe.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=ze.autoReset,O=Q.enabled,W=Q.autoUpdate,N=Q.needsUpdate,j=Q.type;pe(),ze.autoReset=A,Q.enabled=O,Q.autoUpdate=W,Q.needsUpdate=N,Q.type=j}function Re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const O=A.target;O.removeEventListener("dispose",rt),D(O)}function D(A){q(A),me.remove(A)}function q(A){const O=me.get(A).programs;O!==void 0&&(O.forEach(function(W){Ye.releaseProgram(W)}),A.isShaderMaterial&&Ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,W,N,j,xe){O===null&&(O=se);const Se=j.isMesh&&j.matrixWorld.determinant()<0,we=qd(A,O,W,N,j);ve.setMaterial(N,Se);let Ce=W.index,Ie=1;N.wireframe===!0&&(Ce=st.getWireframeAttribute(W),Ie=2);const De=W.drawRange,Ue=W.attributes.position;let He=De.start*Ie,Pt=(De.start+De.count)*Ie;xe!==null&&(He=Math.max(He,xe.start*Ie),Pt=Math.min(Pt,(xe.start+xe.count)*Ie)),Ce!==null?(He=Math.max(He,0),Pt=Math.min(Pt,Ce.count)):Ue!=null&&(He=Math.max(He,0),Pt=Math.min(Pt,Ue.count));const _n=Pt-He;if(_n<0||_n===1/0)return;le.setup(j,N,we,W,Ce);let Mi,ct=R;if(Ce!==null&&(Mi=lt.get(Ce),ct=$,ct.setIndex(Mi)),j.isMesh)N.wireframe===!0?(ve.setLineWidth(N.wireframeLinewidth*ce()),ct.setMode(1)):ct.setMode(4);else if(j.isLine){let Fe=N.linewidth;Fe===void 0&&(Fe=1),ve.setLineWidth(Fe*ce()),j.isLineSegments?ct.setMode(1):j.isLineLoop?ct.setMode(2):ct.setMode(3)}else j.isPoints?ct.setMode(0):j.isSprite&&ct.setMode(4);if(j.isInstancedMesh)ct.renderInstances(He,_n,j.count);else if(W.isInstancedBufferGeometry){const Fe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,La=Math.min(W.instanceCount,Fe);ct.renderInstances(He,_n,La)}else ct.render(He,_n)},this.compile=function(A,O){function W(N,j,xe){N.transparent===!0&&N.side===Sn&&N.forceSinglePass===!1?(N.side=kt,N.needsUpdate=!0,Pr(N,j,xe),N.side=Kn,N.needsUpdate=!0,Pr(N,j,xe),N.side=Sn):Pr(N,j,xe)}_=w.get(A),_.init(),m.push(_),A.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(_.pushLight(N),N.castShadow&&_.pushShadow(N))}),_.setupLights(f.useLegacyLights),A.traverse(function(N){const j=N.material;if(j)if(Array.isArray(j))for(let xe=0;xe<j.length;xe++){const Se=j[xe];W(Se,A,N)}else W(j,A,N)}),m.pop(),_=null};let ee=null;function he(A){ee&&ee(A)}function ge(){Qe.stop()}function Ke(){Qe.start()}const Qe=new Th;Qe.setAnimationLoop(he),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(A){ee=A,ue.setAnimationLoop(A),A===null?Qe.stop():Qe.start()},ue.addEventListener("sessionstart",ge),ue.addEventListener("sessionend",Ke),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(f,A,O,y),_=w.get(A,m.length),_.init(),m.push(_),G.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ne.setFromProjectionMatrix(G),_e=this.localClippingEnabled,J=H.init(this.clippingPlanes,_e),p=C.get(A,g.length),p.init(),g.push(p),wt(A,O,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(U,F),J===!0&&H.beginShadows();const W=_.state.shadowsArray;if(Q.render(W,A,O),J===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(p,A),_.setupLights(f.useLegacyLights),O.isArrayCamera){const N=O.cameras;for(let j=0,xe=N.length;j<xe;j++){const Se=N[j];ei(p,A,Se,Se.viewport)}}else ei(p,A,O);y!==null&&(Ee.updateMultisampleRenderTarget(y),Ee.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(f,A,O),le.resetDefaultState(),E=-1,L=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function wt(A,O,W,N){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){N&&Y.setFromMatrixPosition(A.matrixWorld).applyMatrix4(G);const Se=Be.update(A),we=A.material;we.visible&&p.push(A,Se,we,W,Y.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==ze.render.frame&&(A.skeleton.update(),A.skeleton.frame=ze.render.frame),!A.frustumCulled||ne.intersectsObject(A))){N&&Y.setFromMatrixPosition(A.matrixWorld).applyMatrix4(G);const Se=Be.update(A),we=A.material;if(Array.isArray(we)){const Ce=Se.groups;for(let Ie=0,De=Ce.length;Ie<De;Ie++){const Ue=Ce[Ie],He=we[Ue.materialIndex];He&&He.visible&&p.push(A,Se,He,W,Y.z,Ue)}}else we.visible&&p.push(A,Se,we,W,Y.z,null)}}const xe=A.children;for(let Se=0,we=xe.length;Se<we;Se++)wt(xe[Se],O,W,N)}function ei(A,O,W,N){const j=A.opaque,xe=A.transmissive,Se=A.transparent;_.setupLightsView(W),J===!0&&H.setGlobalState(f.clippingPlanes,W),xe.length>0&&at(j,xe,O,W),N&&ve.viewport(b.copy(N)),j.length>0&&sn(j,O,W),xe.length>0&&sn(xe,O,W),Se.length>0&&sn(Se,O,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function at(A,O,W,N){if(ie===null){const we=ae.isWebGL2;ie=new Wi(1024,1024,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?gr:Gi,minFilter:Vi,samples:we&&a===!0?4:0})}const j=f.getRenderTarget();f.setRenderTarget(ie),f.clear();const xe=f.toneMapping;f.toneMapping=jn,sn(A,W,N),Ee.updateMultisampleRenderTarget(ie),Ee.updateRenderTargetMipmap(ie);let Se=!1;for(let we=0,Ce=O.length;we<Ce;we++){const Ie=O[we],De=Ie.object,Ue=Ie.geometry,He=Ie.material,Pt=Ie.group;if(He.side===Sn&&De.layers.test(N.layers)){const _n=He.side;He.side=kt,He.needsUpdate=!0,wn(De,W,N,Ue,He,Pt),He.side=_n,He.needsUpdate=!0,Se=!0}}Se===!0&&(Ee.updateMultisampleRenderTarget(ie),Ee.updateRenderTargetMipmap(ie)),f.setRenderTarget(j),f.toneMapping=xe}function sn(A,O,W){const N=O.isScene===!0?O.overrideMaterial:null;for(let j=0,xe=A.length;j<xe;j++){const Se=A[j],we=Se.object,Ce=Se.geometry,Ie=N===null?Se.material:N,De=Se.group;we.layers.test(W.layers)&&wn(we,O,W,Ce,Ie,De)}}function wn(A,O,W,N,j,xe){A.onBeforeRender(f,O,W,N,j,xe),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(f,O,W,N,A,xe),j.transparent===!0&&j.side===Sn&&j.forceSinglePass===!1?(j.side=kt,j.needsUpdate=!0,f.renderBufferDirect(W,O,N,j,A,xe),j.side=Kn,j.needsUpdate=!0,f.renderBufferDirect(W,O,N,j,A,xe),j.side=Sn):f.renderBufferDirect(W,O,N,j,A,xe),A.onAfterRender(f,O,W,N,j,xe)}function Pr(A,O,W){O.isScene!==!0&&(O=se);const N=me.get(A),j=_.state.lights,xe=_.state.shadowsArray,Se=j.state.version,we=Ye.getParameters(A,j.state,xe,O,W),Ce=Ye.getProgramCacheKey(we);let Ie=N.programs;N.environment=A.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(A.isMeshStandardMaterial?Je:nt).get(A.envMap||N.environment),Ie===void 0&&(A.addEventListener("dispose",rt),Ie=new Map,N.programs=Ie);let De=Ie.get(Ce);if(De!==void 0){if(N.currentProgram===De&&N.lightsStateVersion===Se)return Vl(A,we),De}else we.uniforms=Ye.getUniforms(A),A.onBuild(W,we,f),A.onBeforeCompile(we,f),De=Ye.acquireProgram(we,Ce),Ie.set(Ce,De),N.uniforms=we.uniforms;const Ue=N.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=H.uniform),Vl(A,we),N.needsLights=Yd(A),N.lightsStateVersion=Se,N.needsLights&&(Ue.ambientLightColor.value=j.state.ambient,Ue.lightProbe.value=j.state.probe,Ue.directionalLights.value=j.state.directional,Ue.directionalLightShadows.value=j.state.directionalShadow,Ue.spotLights.value=j.state.spot,Ue.spotLightShadows.value=j.state.spotShadow,Ue.rectAreaLights.value=j.state.rectArea,Ue.ltc_1.value=j.state.rectAreaLTC1,Ue.ltc_2.value=j.state.rectAreaLTC2,Ue.pointLights.value=j.state.point,Ue.pointLightShadows.value=j.state.pointShadow,Ue.hemisphereLights.value=j.state.hemi,Ue.directionalShadowMap.value=j.state.directionalShadowMap,Ue.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ue.spotShadowMap.value=j.state.spotShadowMap,Ue.spotLightMatrix.value=j.state.spotLightMatrix,Ue.spotLightMap.value=j.state.spotLightMap,Ue.pointShadowMap.value=j.state.pointShadowMap,Ue.pointShadowMatrix.value=j.state.pointShadowMatrix);const He=De.getUniforms(),Pt=aa.seqWithValue(He.seq,Ue);return N.currentProgram=De,N.uniformsList=Pt,De}function Vl(A,O){const W=me.get(A);W.outputEncoding=O.outputEncoding,W.instancing=O.instancing,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function qd(A,O,W,N,j){O.isScene!==!0&&(O=se),Ee.resetTextureUnits();const xe=O.fog,Se=N.isMeshStandardMaterial?O.environment:null,we=y===null?f.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Hi,Ce=(N.isMeshStandardMaterial?Je:nt).get(N.envMap||Se),Ie=N.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,De=!!N.normalMap&&!!W.attributes.tangent,Ue=!!W.morphAttributes.position,He=!!W.morphAttributes.normal,Pt=!!W.morphAttributes.color,_n=N.toneMapped?f.toneMapping:jn,Mi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=Mi!==void 0?Mi.length:0,Fe=me.get(N),La=_.state.lights;if(J===!0&&(_e===!0||A!==L)){const Xt=A===L&&N.id===E;H.setState(N,A,Xt)}let _t=!1;N.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==La.state.version||Fe.outputEncoding!==we||j.isInstancedMesh&&Fe.instancing===!1||!j.isInstancedMesh&&Fe.instancing===!0||j.isSkinnedMesh&&Fe.skinning===!1||!j.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Ce||N.fog===!0&&Fe.fog!==xe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==H.numPlanes||Fe.numIntersection!==H.numIntersection)||Fe.vertexAlphas!==Ie||Fe.vertexTangents!==De||Fe.morphTargets!==Ue||Fe.morphNormals!==He||Fe.morphColors!==Pt||Fe.toneMapping!==_n||ae.isWebGL2===!0&&Fe.morphTargetsCount!==ct)&&(_t=!0):(_t=!0,Fe.__version=N.version);let Si=Fe.currentProgram;_t===!0&&(Si=Pr(N,O,j));let Gl=!1,Ys=!1,Ra=!1;const It=Si.getUniforms(),bi=Fe.uniforms;if(ve.useProgram(Si.program)&&(Gl=!0,Ys=!0,Ra=!0),N.id!==E&&(E=N.id,Ys=!0),Gl||L!==A){if(It.setValue(V,"projectionMatrix",A.projectionMatrix),ae.logarithmicDepthBuffer&&It.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),L!==A&&(L=A,Ys=!0,Ra=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Xt=It.map.cameraPosition;Xt!==void 0&&Xt.setValue(V,Y.setFromMatrixPosition(A.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&It.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||j.isSkinnedMesh)&&It.setValue(V,"viewMatrix",A.matrixWorldInverse)}if(j.isSkinnedMesh){It.setOptional(V,j,"bindMatrix"),It.setOptional(V,j,"bindMatrixInverse");const Xt=j.skeleton;Xt&&(ae.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),It.setValue(V,"boneTexture",Xt.boneTexture,Ee),It.setValue(V,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Pa=W.morphAttributes;if((Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0&&ae.isWebGL2===!0)&&oe.update(j,W,Si),(Ys||Fe.receiveShadow!==j.receiveShadow)&&(Fe.receiveShadow=j.receiveShadow,It.setValue(V,"receiveShadow",j.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(bi.envMap.value=Ce,bi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Ys&&(It.setValue(V,"toneMappingExposure",f.toneMappingExposure),Fe.needsLights&&jd(bi,Ra),xe&&N.fog===!0&&Tt.refreshFogUniforms(bi,xe),Tt.refreshMaterialUniforms(bi,N,P,k,ie),aa.upload(V,Fe.uniformsList,bi,Ee)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(aa.upload(V,Fe.uniformsList,bi,Ee),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&It.setValue(V,"center",j.center),It.setValue(V,"modelViewMatrix",j.modelViewMatrix),It.setValue(V,"normalMatrix",j.normalMatrix),It.setValue(V,"modelMatrix",j.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Xt=N.uniformsGroups;for(let Ia=0,Kd=Xt.length;Ia<Kd;Ia++)if(ae.isWebGL2){const Hl=Xt[Ia];de.update(Hl,Si),de.bind(Hl,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function jd(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Yd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,O,W){me.get(A.texture).__webglTexture=O,me.get(A.depthTexture).__webglTexture=W;const N=me.get(A);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=W===void 0,N.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const W=me.get(A);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,W=0){y=A,M=O,v=W;let N=!0,j=null,xe=!1,Se=!1;if(A){const Ce=me.get(A);Ce.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),N=!1):Ce.__webglFramebuffer===void 0?Ee.setupRenderTarget(A):Ce.__hasExternalTextures&&Ee.rebindTextures(A,me.get(A.texture).__webglTexture,me.get(A.depthTexture).__webglTexture);const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Se=!0);const De=me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(j=De[O],xe=!0):ae.isWebGL2&&A.samples>0&&Ee.useMultisampledRTT(A)===!1?j=me.get(A).__webglMultisampledFramebuffer:j=De,b.copy(A.viewport),x.copy(A.scissor),T=A.scissorTest}else b.copy(K).multiplyScalar(P).floor(),x.copy(Z).multiplyScalar(P).floor(),T=X;if(ve.bindFramebuffer(36160,j)&&ae.drawBuffers&&N&&ve.drawBuffers(A,j),ve.viewport(b),ve.scissor(x),ve.setScissorTest(T),xe){const Ce=me.get(A.texture);V.framebufferTexture2D(36160,36064,34069+O,Ce.__webglTexture,W)}else if(Se){const Ce=me.get(A.texture),Ie=O||0;V.framebufferTextureLayer(36160,36064,Ce.__webglTexture,W||0,Ie)}E=-1},this.readRenderTargetPixels=function(A,O,W,N,j,xe,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){ve.bindFramebuffer(36160,we);try{const Ce=A.texture,Ie=Ce.format,De=Ce.type;if(Ie!==hn&&z.convert(Ie)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=De===gr&&(Me.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Me.has("EXT_color_buffer_float"));if(De!==Gi&&z.convert(De)!==V.getParameter(35738)&&!(De===li&&(ae.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-N&&W>=0&&W<=A.height-j&&V.readPixels(O,W,N,j,z.convert(Ie),z.convert(De),xe)}finally{const Ce=y!==null?me.get(y).__webglFramebuffer:null;ve.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(A,O,W=0){const N=Math.pow(2,-W),j=Math.floor(O.image.width*N),xe=Math.floor(O.image.height*N);Ee.setTexture2D(O,0),V.copyTexSubImage2D(3553,W,0,0,A.x,A.y,j,xe),ve.unbindTexture()},this.copyTextureToTexture=function(A,O,W,N=0){const j=O.image.width,xe=O.image.height,Se=z.convert(W.format),we=z.convert(W.type);Ee.setTexture2D(W,0),V.pixelStorei(37440,W.flipY),V.pixelStorei(37441,W.premultiplyAlpha),V.pixelStorei(3317,W.unpackAlignment),O.isDataTexture?V.texSubImage2D(3553,N,A.x,A.y,j,xe,Se,we,O.image.data):O.isCompressedTexture?V.compressedTexSubImage2D(3553,N,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,Se,O.mipmaps[0].data):V.texSubImage2D(3553,N,A.x,A.y,Se,we,O.image),N===0&&W.generateMipmaps&&V.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(A,O,W,N,j=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,we=A.max.z-A.min.z+1,Ce=z.convert(N.format),Ie=z.convert(N.type);let De;if(N.isData3DTexture)Ee.setTexture3D(N,0),De=32879;else if(N.isDataArrayTexture)Ee.setTexture2DArray(N,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,N.flipY),V.pixelStorei(37441,N.premultiplyAlpha),V.pixelStorei(3317,N.unpackAlignment);const Ue=V.getParameter(3314),He=V.getParameter(32878),Pt=V.getParameter(3316),_n=V.getParameter(3315),Mi=V.getParameter(32877),ct=W.isCompressedTexture?W.mipmaps[0]:W.image;V.pixelStorei(3314,ct.width),V.pixelStorei(32878,ct.height),V.pixelStorei(3316,A.min.x),V.pixelStorei(3315,A.min.y),V.pixelStorei(32877,A.min.z),W.isDataTexture||W.isData3DTexture?V.texSubImage3D(De,j,O.x,O.y,O.z,xe,Se,we,Ce,Ie,ct.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(De,j,O.x,O.y,O.z,xe,Se,we,Ce,ct.data)):V.texSubImage3D(De,j,O.x,O.y,O.z,xe,Se,we,Ce,Ie,ct),V.pixelStorei(3314,Ue),V.pixelStorei(32878,He),V.pixelStorei(3316,Pt),V.pixelStorei(3315,_n),V.pixelStorei(32877,Mi),j===0&&N.generateMipmaps&&V.generateMipmap(De),ve.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ee.setTextureCube(A,0):A.isData3DTexture?Ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ee.setTexture2DArray(A,0):Ee.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){M=0,v=0,y=null,ve.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class ux extends Lh{}ux.prototype.isWebGL1Renderer=!0;class Rh extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class hx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Po,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new I;class _l{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array),s=Xe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _l(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const nu=new I,iu=new je,su=new je,dx=new I,ru=new Pe,fs=new I;class fx extends dn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)fs.fromBufferAttribute(t,n),this.applyBoneTransform(n,fs),this.boundingBox.expandByPoint(fs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)fs.fromBufferAttribute(t,n),this.applyBoneTransform(n,fs),this.boundingSphere.expandByPoint(fs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;iu.fromBufferAttribute(i.attributes.skinIndex,e),su.fromBufferAttribute(i.attributes.skinWeight,e),nu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=su.getComponent(s);if(r!==0){const a=iu.getComponent(s);ru.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(dx.copy(nu).applyMatrix4(ru),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Ph extends $e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class px extends St{constructor(e=null,t=1,n=1,i,s,r,a,l,c=vt,u=vt,h,d){super(null,r,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=new Pe,mx=new Pe;class xl{constructor(e=[],t=[]){this.uuid=bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:mx;au.multiplyMatrices(a,t[s]),au.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=hh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new px(t,e,e,hn,li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Ph),this.bones.push(r),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ou extends pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ps=new Pe,lu=new Pe,Jr=[],cu=new Jn,gx=new Pe,Qs=new dn,er=new Qn;class Ih extends dn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ou(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),cu.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(cu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),er.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),e.ray.intersectsSphere(er)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ps),lu.multiplyMatrices(n,ps),Qs.matrixWorld=lu,Qs.raycast(e,Jr);for(let r=0,a=Jr.length;r<a;r++){const l=Jr[r];l.instanceId=s,l.object=this,t.push(l)}Jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ou(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Dh extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new I,hu=new I,du=new Pe,oo=new Sa,Qr=new Qn;class vl extends $e{constructor(e=new gn,t=new Dh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)uu.fromBufferAttribute(t,i-1),hu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=uu.distanceTo(hu);e.setAttribute("lineDistance",new Yn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(i),Qr.radius+=s,e.ray.intersectsSphere(Qr)===!1)return;du.copy(i).invert(),oo.copy(e.ray).applyMatrix4(du);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,d=new I,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const f=Math.max(0,r.start),S=Math.min(_.count,r.start+r.count);for(let M=f,v=S-1;M<v;M+=p){const y=_.getX(M),E=_.getX(M+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,E),oo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,r.start),S=Math.min(m.count,r.start+r.count);for(let M=f,v=S-1;M<v;M+=p){if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,M+1),oo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const fu=new I,pu=new I;class _x extends vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)fu.fromBufferAttribute(t,i),pu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fu.distanceTo(pu);e.setAttribute("lineDistance",new Yn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xx extends vl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Uh extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mu=new Pe,No=new Sa,ea=new Qn,ta=new I;class Nh extends $e{constructor(e=new gn,t=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=s,e.ray.intersectsSphere(ea)===!1)return;mu.copy(i).invert(),No.copy(e.ray).applyMatrix4(mu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);ta.fromBufferAttribute(h,m),gu(ta,m,l,i,e,t,this)}}else{const d=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let _=d,g=p;_<g;_++)ta.fromBufferAttribute(h,_),gu(ta,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gu(o,e,t,n,i,s,r){const a=No.distanceSqToPoint(o);if(a<t){const l=new I;No.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:r})}}class yl extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ji extends yl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ri(o,e,t){return Oh(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function na(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Oh(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function vx(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _u(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function Fh(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class Lr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yx extends Lr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_s,endingEnd:_s}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case xs:s=e,a=2*t-n;break;case ha:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xs:r=e,l=2*n-t;break;case ha:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-d*m+2*d*g-d*_,S=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,M=(-1-p)*m+(1.5+p)*g+.5*_,v=p*m-p*g;for(let y=0;y!==a;++y)s[y]=f*r[u+y]+S*r[c+y]+M*r[l+y]+v*r[h+y];return s}}class kh extends Lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=r[c+d]*h+r[l+d]*u;return s}}class Mx extends Lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=na(t,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:na(e.times,Array),values:na(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _r:t=this.InterpolantFactoryMethodDiscrete;break;case Ds:t=this.InterpolantFactoryMethodLinear;break;case ka:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=ri(n,s,r),this.values=ri(this.values,s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&Oh(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ri(this.times),t=ri(this.values),n=this.getValueSize(),i=this.getInterpolation()===ka,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,p=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[d+_]||g!==t[p+_]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const h=a*n,d=r*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=ri(e,0,r),this.values=ri(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=ri(this.times,0),t=ri(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Ds;class Xs extends Nn{}Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=_r;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Bh extends Nn{}Bh.prototype.ValueTypeName="color";class vr extends Nn{}vr.prototype.ValueTypeName="number";class Sx extends Lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Qt.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Xi extends Nn{InterpolantFactoryMethodLinear(e){return new Sx(this.times,this.values,this.getValueSize(),e)}}Xi.prototype.ValueTypeName="quaternion";Xi.prototype.DefaultInterpolation=Ds;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends Nn{}qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=_r;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends Nn{}yr.prototype.ValueTypeName="vector";class Oo{constructor(e,t=-1,n,i=ul){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(Tx(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Nn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=vx(l);l=_u(l,1,u),c=_u(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new vr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,_,g){if(p.length!==0){const m=[],f=[];Fh(p,m,f,_),m.length!==0&&g.push(new h(d,m,f))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)p[d[_].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let S=0;S!==d[_].morphTargets.length;++S){const M=d[_];m.push(M.time),f.push(M.morphTarget===g?1:0)}i.push(new vr(".morphTargetInfluence["+g+"]",m,f))}l=p.length*r}else{const p=".bones["+t[h].name+"]";n(yr,p+".position",d,"pos",i),n(Xi,p+".quaternion",d,"rot",i),n(yr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function bx(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vr;case"vector":case"vector2":case"vector3":case"vector4":return yr;case"color":return Bh;case"quaternion":return Xi;case"bool":case"boolean":return Xs;case"string":return qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Tx(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=bx(o.type);if(o.times===void 0){const t=[],n=[];Fh(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Fs={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class wx{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Ax=new wx;class js{constructor(e){this.manager=e!==void 0?e:Ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Gn={};class Ex extends Error{constructor(e,t){super(e),this.response=t}}class da extends js{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:i});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){S();function S(){h.read().then(({done:M,value:v})=>{if(M)f.close();else{g+=v.byteLength;const y=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let E=0,L=u.length;E<L;E++){const b=u[E];b.onProgress&&b.onProgress(y)}f.enqueue(v),S()}})}}});return new Response(m)}else throw new Ex(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Fs.add(e,c);const u=Gn[e];delete Gn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Gn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cx extends js{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Fs.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=xr("img");function l(){u(),Fs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Lx extends js{constructor(e){super(e)}load(e,t,n,i){const s=new St,r=new Cx(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class wa extends $e{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const lo=new Pe,xu=new I,vu=new I;class Ml{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(xu),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rx extends Ml{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Px extends wa{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Rx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yu=new Pe,tr=new I,co=new I;class Ix extends Ml{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(tr),co.copy(n.position),co.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(co),n.updateMatrixWorld(),i.makeTranslation(-tr.x,-tr.y,-tr.z),yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}}class Dx extends wa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ix}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ux extends Ml{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zh extends wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Ux}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nx extends wa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ox extends js{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Fs.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Fs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class Fx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mu(){return(typeof performance>"u"?Date:performance).now()}class kx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){Qt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;Qt.multiplyQuaternionsFlat(e,r,e,t,e,n),Qt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*r+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const a=t+r;e[a]=e[a]+e[n+r]*i}}}const Sl="\\[\\]\\.:\\/",Bx=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",zx="[^"+Sl.replace("\\.","")+"]",Vx=/((?:WC+[\/:])*)/.source.replace("WC",bl),Gx=/(WCOD+)?/.source.replace("WCOD",zx),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),Wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),Xx=new RegExp("^"+Vx+Gx+Hx+Wx+"$"),qx=["material","materials","bones","map"];class jx{constructor(e,t,n){const i=n||Ge.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ge{constructor(e,t,n){this.path=t,this.parsedPath=n||Ge.parseTrackName(t),this.node=Ge.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ge.Composite(e,t,n):new Ge(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(e){const t=Xx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);qx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ge.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ge.Composite=jx;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,a=new Array(r),l={endingStart:_s,endingEnd:_s};for(let c=0;c!==r;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Gf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,r=s/i,a=i/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Wf:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulateAdditive(a);break;case ul:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===Hf;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===Vf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=xs,i.endingEnd=xs):(e?i.endingStart=this.zeroSlopeAtStart?xs:_s:i.endingStart=ha,t?i.endingEnd=this.zeroSlopeAtEnd?xs:_s:i.endingEnd=ha)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const Kx=new Float32Array(1);class Zx extends vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],p=d.name;let _=u[p];if(_!==void 0)++_.referenceCount,r[h]=_;else{if(_=r[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,p));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;_=new kx(Ge.create(n,p,g),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,p),r[h]=_}a[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new kh(new Float32Array(2),new Float32Array(2),1,Kx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?Oo.findByName(i,e):e;const a=r!==null?r.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=ul),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const u=new Yx(this,r,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Oo.findByName(n,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class $x{constructor(e,t,n=0,i=1/0){this.ray=new Sa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ko(e,this,n,t),n.sort(Su),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ko(e[i],this,n,t);return n.sort(Su),n}}function Su(o,e){return o.distance-e.distance}function ko(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let s=0,r=i.length;s<r;s++)ko(i[s],e,t,!0)}}class bu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);function Tu(o,e){if(e===Xf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Ro||e===lh){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Ro)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Jx extends js{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new pv(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Fo.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new da(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Vh){try{r[ke.KHR_BINARY_GLTF]=new mv(e)}catch(h){i&&i(h);return}s=JSON.parse(r[ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Cv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case ke.KHR_MATERIALS_UNLIT:r[h]=new tv;break;case ke.KHR_DRACO_MESH_COMPRESSION:r[h]=new gv(s,this.dracoLoader);break;case ke.KHR_TEXTURE_TRANSFORM:r[h]=new _v;break;case ke.KHR_MESH_QUANTIZATION:r[h]=new xv;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Qx(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ev{constructor(e){this.parser=e,this.name=ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ye(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zh(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Dx(u),c.distance=h;break;case"spot":c=new Px(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class tv{constructor(){this.name=ke.KHR_MATERIALS_UNLIT}getMaterialType(){return ci}extendParams(e,t,n){const i=[];e.color=new ye(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ve))}return Promise.all(i)}}class nv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class iv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(a,a)}return Promise.all(s)}}class sv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class rv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ve)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class av{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class ov{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new ye(a[0],a[1],a[2]),Promise.all(s)}}class lv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ji}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class cv{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new ye(a[0],a[1],a[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Ve)),Promise.all(s)}}class uv{constructor(e){this.parser=e,this.name=ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class hv{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dv{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fv{constructor(e){this.name=ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):r.ready.then(function(){const p=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class pv{constructor(e){this.name=ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==on.TRIANGLES&&c.mode!==on.TRIANGLE_STRIP&&c.mode!==on.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const _ of h){const g=new Pe,m=new I,f=new Qt,S=new I(1,1,1),M=new Ih(_.geometry,_.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&S.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,g.compose(m,f,S));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);$e.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Vh="glTF",nr=12,wu={JSON:1313821514,BIN:5130562};class mv{constructor(e){this.name=ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,nr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-nr,s=new DataView(e,nr);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===wu.JSON){const c=new Uint8Array(e,nr+r,a);this.content=n.decode(c)}else if(l===wu.BIN){const c=nr+r;this.body=e.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const u in r){const h=Bo[u]||u.toLowerCase();a[h]=r[u]}for(const u in e.attributes){const h=Bo[u]||u.toLowerCase();if(r[u]!==void 0){const d=n.accessors[e.attributes[u]],p=ws[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const _=d.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}h(d)},a,c)})})}}class _v{constructor(){this.name=ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class xv{constructor(){this.name=ke.KHR_MESH_QUANTIZATION}}class Gh extends Lr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,_=e*c,g=_-c,m=-2*p+3*d,f=p-d,S=1-m,M=f-d+h;for(let v=0;v!==a;v++){const y=r[g+v+a],E=r[g+v+l]*u,L=r[_+v+a],b=r[_+v]*u;s[v]=S*y+M*E+m*L+f*b}return s}}const vv=new Qt;class yv extends Gh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return vv.fromArray(s).normalize().toArray(s),s}}const on={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Au={9728:vt,9729:Bt,9984:Lo,9985:ah,9986:ra,9987:Vi},Eu={33071:un,33648:ua,10497:Ps},uo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Mv={CUBICSPLINE:void 0,LINEAR:Ds,STEP:_r},ho={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sv(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new yl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),o.DefaultMaterial}function ir(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function oi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bv(o,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):o.attributes.position;r.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=h),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Tv(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wv(o){const e=o.extensions&&o.extensions[ke.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Cu(e.attributes):t=o.indices+":"+Cu(o.attributes)+":"+o.mode,t}function Cu(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function zo(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Av(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Ev=new Pe;class Cv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Lx(this.options.manager):this.textureLoader=new Ox(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new da(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};ir(s,a,i),oi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,u]of r.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Fo.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=uo[i.type],a=ws[i.componentType],l=i.normalized===!0,c=new a(i.count*r);return Promise.resolve(new pt(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=uo[i.type],c=ws[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(p&&p!==h){const f=Math.floor(d/p),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let M=t.cache.get(S);M||(g=new c(a,f*p,i.count*p/u),M=new hx(g,p/u),t.cache.add(S,M)),m=new _l(M,l,d%p/u,_)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),m=new pt(g,l,_);if(i.sparse!==void 0){const f=uo.SCALAR,S=ws[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,y=new S(r[1],M,i.sparse.count*f),E=new c(r[2],v,i.sparse.count*l);a!==null&&(m=new pt(m.array.slice(),m.itemSize,m.normalized));for(let L=0,b=y.length;L<b;L++){const x=y[L];if(m.setX(x,E[L*l]),l>=2&&m.setY(x,E[L*l+1]),l>=3&&m.setZ(x,E[L*l+2]),l>=4&&m.setW(x,E[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return u.magFilter=Au[d.magFilter]||Bt,u.minFilter=Au[d.minFilter]||Vi,u.wrapS=Eu[d.wrapS]||Ps,u.wrapT=Eu[d.wrapT]||Ps,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new St(g);m.needsUpdate=!0,d(m)}),t.load(Fo.resolveURL(h,s.path),_,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=r.mimeType||Av(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[ke.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Uh,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Dh,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return yl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},l=s.extensions||{},c=[];if(l[ke.KHR_MATERIALS_UNLIT]){const h=i[ke.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ve)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Sn);const u=s.alphaMode||ho.OPAQUE;if(u===ho.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ho.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==ci&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ae(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&r!==ci&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==ci&&(a.emissive=new ye().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==ci&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ve)),Promise.all(c).then(function(){const h=new r(a);return s.name&&(h.name=s.name),oi(h,s),t.associations.set(h,{materials:e}),s.extensions&&ir(i,h,s),h})}createUniqueName(e){const t=Ge.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Lu(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=wv(c),h=i[u];if(h)r.push(h.promise);else{let d;c.extensions&&c.extensions[ke.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Lu(new gn,c,t),i[u]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?Sv(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=r[p];let f;const S=c[p];if(m.mode===on.TRIANGLES||m.mode===on.TRIANGLE_STRIP||m.mode===on.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new fx(g,S):new dn(g,S),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===on.TRIANGLE_STRIP?f.geometry=Tu(f.geometry,lh):m.mode===on.TRIANGLE_FAN&&(f.geometry=Tu(f.geometry,Ro));else if(m.mode===on.LINES)f=new _x(g,S);else if(m.mode===on.LINE_STRIP)f=new vl(g,S);else if(m.mode===on.LINE_LOOP)f=new xx(g,S);else if(m.mode===on.POINTS)f=new Nh(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Tv(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),oi(f,s),m.extensions&&ir(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const d=new Ui;t.associations.set(d,{meshes:e});for(let p=0,_=h.length;p<_;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(cp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ml(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h){a.push(h);const d=new Pe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xl(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,s=[],r=[],a=[],l=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const d=n.channels[u],p=n.samplers[d.sampler],_=d.target,g=_.node,m=n.parameters!==void 0?n.parameters[p.input]:p.input,f=n.parameters!==void 0?n.parameters[p.output]:p.output;_.node!==void 0&&(s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",f)),l.push(p),c.push(_))}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(u){const h=u[0],d=u[1],p=u[2],_=u[3],g=u[4],m=[];for(let f=0,S=h.length;f<S;f++){const M=h[f],v=d[f],y=p[f],E=_[f],L=g[f];if(M===void 0)continue;M.updateMatrix();let b;switch(ai[L.path]){case ai.weights:b=vr;break;case ai.rotation:b=Xi;break;case ai.position:case ai.scale:default:b=yr;break}const x=M.name?M.name:M.uuid,T=E.interpolation!==void 0?Mv[E.interpolation]:Ds,B=[];ai[L.path]===ai.weights?M.traverse(function(P){P.morphTargetInfluences&&B.push(P.name?P.name:P.uuid)}):B.push(x);let k=y.array;if(y.normalized){const P=zo(k.constructor),U=new Float32Array(k.length);for(let F=0,K=k.length;F<K;F++)U[F]=k[F]*P;k=U}for(let P=0,U=B.length;P<U;P++){const F=new b(B[P]+"."+ai[L.path],v.array,k,T);E.interpolation==="CUBICSPLINE"&&(F.createInterpolant=function(Z){const X=this instanceof Xi?yv:Gh;return new X(this.times,this.values,this.getValueSize()/3,Z)},F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(F)}}return new Oo(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)r.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Ev)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Ph:c.length>1?u=new Ui:c.length===1?u=c[0]:u=new $e,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=r),oi(u,s),s.extensions&&ir(n,u,s),s.matrix!==void 0){const h=new Pe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ui;n.name&&(s.name=i.createUniqueName(n.name)),oi(s,n),n.extensions&&ir(t,s,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof In||d instanceof St)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(s),s})}}function Lv(o,e,t){const n=e.attributes,i=new Jn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=zo(ws[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const g=zo(ws[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new Qn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function Lu(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=Bo[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return oi(o,e),Lv(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?bv(o,e.targets,t):o})}const fo=new WeakMap;class Rv extends js{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new da(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.parse(r,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,cn).catch(n)}decodeDracoFile(e,t,n,i,s=Us){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(fo.has(e)){const l=fo.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,a=this._getWorker(s,r).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),fo.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new gn;e.index&&t.setIndex(new pt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,a=i.itemSize,l=new pt(r,a);s==="color"&&this._assignVertexColorSpace(l,i.vertexColorSpace),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==cn)return;const n=new ye;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new da(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=Pv.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Pv(){let o,e;onmessage=function(r){const a=r.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(u){o.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const p=t(h,d,new Int8Array(l),c),_=p.attributes.map(g=>g.array.buffer);p.index&&_.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},_)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{h.destroy(d)}});break}};function t(r,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,p;const _=a.GetEncodedGeometryType(l);if(_===r.TRIANGULAR_MESH)d=new r.Mesh,p=a.DecodeArrayToMesh(l,l.byteLength,d);else if(_===r.POINT_CLOUD)d=new r.PointCloud,p=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const g={index:null,attributes:[]};for(const m in u){const f=self[h[m]];let S,M;if(c.useUniqueIDs)M=u[m],S=a.GetAttributeByUniqueId(d,M);else{if(M=a.GetAttributeId(d,r[u[m]]),M===-1)continue;S=a.GetAttribute(d,M)}const v=i(r,a,d,m,f,S);m==="color"&&(v.vertexColorSpace=c.vertexColorSpace),g.attributes.push(v)}return _===r.TRIANGULAR_MESH&&(g.index=n(r,a,d)),r.destroy(d),g}function n(r,a,l){const u=l.num_faces()*3,h=u*4,d=r._malloc(h);a.GetTrianglesUInt32Array(l,h,d);const p=new Uint32Array(r.HEAPF32.buffer,d,u).slice();return r._free(d),{array:p,itemSize:1}}function i(r,a,l,c,u,h){const d=h.num_components(),_=l.num_points()*d,g=_*u.BYTES_PER_ELEMENT,m=s(r,u),f=r._malloc(g);a.GetAttributeDataArrayForAllPoints(l,h,m,g,f);const S=new u(r.HEAPF32.buffer,f,_).slice();return r._free(f),{name:c,array:S,itemSize:d}}function s(r,a){switch(a){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}const Ru={type:"change"},po={type:"start"},Pu={type:"end"};class Iv extends vi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Ye),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ye),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ru),n.update(),s=i.NONE},this.update=function(){const R=new I,$=new Qt().setFromUnitVectors(e.up,new I(0,1,0)),z=$.clone().invert(),le=new I,de=new Qt,pe=2*Math.PI;return function(){const fe=n.object.position;R.copy(fe).sub(n.target),R.applyQuaternion($),a.setFromVector3(R),n.autoRotate&&s===i.NONE&&x(L()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Te=n.minAzimuthAngle,Re=n.maxAzimuthAngle;return isFinite(Te)&&isFinite(Re)&&(Te<-Math.PI?Te+=pe:Te>Math.PI&&(Te-=pe),Re<-Math.PI?Re+=pe:Re>Math.PI&&(Re-=pe),Te<=Re?a.theta=Math.max(Te,Math.min(Re,a.theta)):a.theta=a.theta>(Te+Re)/2?Math.max(Te,a.theta):Math.min(Re,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(a),R.applyQuaternion(z),fe.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||le.distanceToSquared(n.object.position)>r||8*(1-de.dot(n.object.quaternion))>r?(n.dispatchEvent(Ru),le.copy(n.object.position),de.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",w),n.domElement.removeEventListener("pointerdown",Ee),n.domElement.removeEventListener("pointercancel",Je),n.domElement.removeEventListener("wheel",Be),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",Je),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ye),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,a=new bu,l=new bu;let c=1;const u=new I;let h=!1;const d=new Ae,p=new Ae,_=new Ae,g=new Ae,m=new Ae,f=new Ae,S=new Ae,M=new Ae,v=new Ae,y=[],E={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function x(R){l.theta-=R}function T(R){l.phi-=R}const B=function(){const R=new I;return function(z,le){R.setFromMatrixColumn(le,0),R.multiplyScalar(-z),u.add(R)}}(),k=function(){const R=new I;return function(z,le){n.screenSpacePanning===!0?R.setFromMatrixColumn(le,1):(R.setFromMatrixColumn(le,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(z),u.add(R)}}(),P=function(){const R=new I;return function(z,le){const de=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;R.copy(pe).sub(n.target);let ue=R.length();ue*=Math.tan(n.object.fov/2*Math.PI/180),B(2*z*ue/de.clientHeight,n.object.matrix),k(2*le*ue/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(z*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),k(le*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(R){d.set(R.clientX,R.clientY)}function Z(R){S.set(R.clientX,R.clientY)}function X(R){g.set(R.clientX,R.clientY)}function ne(R){p.set(R.clientX,R.clientY),_.subVectors(p,d).multiplyScalar(n.rotateSpeed);const $=n.domElement;x(2*Math.PI*_.x/$.clientHeight),T(2*Math.PI*_.y/$.clientHeight),d.copy(p),n.update()}function J(R){M.set(R.clientX,R.clientY),v.subVectors(M,S),v.y>0?U(b()):v.y<0&&F(b()),S.copy(M),n.update()}function _e(R){m.set(R.clientX,R.clientY),f.subVectors(m,g).multiplyScalar(n.panSpeed),P(f.x,f.y),g.copy(m),n.update()}function ie(R){R.deltaY<0?F(b()):R.deltaY>0&&U(b()),n.update()}function G(R){let $=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),$=!0;break}$&&(R.preventDefault(),n.update())}function Y(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const R=.5*(y[0].pageX+y[1].pageX),$=.5*(y[0].pageY+y[1].pageY);d.set(R,$)}}function se(){if(y.length===1)g.set(y[0].pageX,y[0].pageY);else{const R=.5*(y[0].pageX+y[1].pageX),$=.5*(y[0].pageY+y[1].pageY);g.set(R,$)}}function ce(){const R=y[0].pageX-y[1].pageX,$=y[0].pageY-y[1].pageY,z=Math.sqrt(R*R+$*$);S.set(0,z)}function V(){n.enableZoom&&ce(),n.enablePan&&se()}function be(){n.enableZoom&&ce(),n.enableRotate&&Y()}function Me(R){if(y.length==1)p.set(R.pageX,R.pageY);else{const z=oe(R),le=.5*(R.pageX+z.x),de=.5*(R.pageY+z.y);p.set(le,de)}_.subVectors(p,d).multiplyScalar(n.rotateSpeed);const $=n.domElement;x(2*Math.PI*_.x/$.clientHeight),T(2*Math.PI*_.y/$.clientHeight),d.copy(p)}function ae(R){if(y.length===1)m.set(R.pageX,R.pageY);else{const $=oe(R),z=.5*(R.pageX+$.x),le=.5*(R.pageY+$.y);m.set(z,le)}f.subVectors(m,g).multiplyScalar(n.panSpeed),P(f.x,f.y),g.copy(m)}function ve(R){const $=oe(R),z=R.pageX-$.x,le=R.pageY-$.y,de=Math.sqrt(z*z+le*le);M.set(0,de),v.set(0,Math.pow(M.y/S.y,n.zoomSpeed)),U(v.y),S.copy(M)}function ze(R){n.enableZoom&&ve(R),n.enablePan&&ae(R)}function me(R){n.enableZoom&&ve(R),n.enableRotate&&Me(R)}function Ee(R){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",nt),n.domElement.addEventListener("pointerup",Je)),H(R),R.pointerType==="touch"?Tt(R):lt(R))}function nt(R){n.enabled!==!1&&(R.pointerType==="touch"?C(R):st(R))}function Je(R){Q(R),y.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",Je)),n.dispatchEvent(Pu),s=i.NONE}function lt(R){let $;switch(R.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Ki.DOLLY:if(n.enableZoom===!1)return;Z(R),s=i.DOLLY;break;case Ki.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;X(R),s=i.PAN}else{if(n.enableRotate===!1)return;K(R),s=i.ROTATE}break;case Ki.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;K(R),s=i.ROTATE}else{if(n.enablePan===!1)return;X(R),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(po)}function st(R){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ne(R);break;case i.DOLLY:if(n.enableZoom===!1)return;J(R);break;case i.PAN:if(n.enablePan===!1)return;_e(R);break}}function Be(R){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(R.preventDefault(),n.dispatchEvent(po),ie(R),n.dispatchEvent(Pu))}function Ye(R){n.enabled===!1||n.enablePan===!1||G(R)}function Tt(R){switch(te(R),y.length){case 1:switch(n.touches.ONE){case Zi.ROTATE:if(n.enableRotate===!1)return;Y(),s=i.TOUCH_ROTATE;break;case Zi.PAN:if(n.enablePan===!1)return;se(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Zi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(),s=i.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(po)}function C(R){switch(te(R),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ae(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ze(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(R),n.update();break;default:s=i.NONE}}function w(R){n.enabled!==!1&&R.preventDefault()}function H(R){y.push(R)}function Q(R){delete E[R.pointerId];for(let $=0;$<y.length;$++)if(y[$].pointerId==R.pointerId){y.splice($,1);return}}function te(R){let $=E[R.pointerId];$===void 0&&($=new Ae,E[R.pointerId]=$),$.set(R.pageX,R.pageY)}function oe(R){const $=R.pointerId===y[0].pointerId?y[1]:y[0];return E[$.pointerId]}n.domElement.addEventListener("contextmenu",w),n.domElement.addEventListener("pointerdown",Ee),n.domElement.addEventListener("pointercancel",Je),n.domElement.addEventListener("wheel",Be,{passive:!1}),this.update()}}class Dv{constructor(e,t={}){this.enabled=!0;const n=t.defaultThickness!==void 0?t.defaultThickness:.003,i=new ye().fromArray(t.defaultColor!==void 0?t.defaultColor:[0,0,0]),s=t.defaultAlpha!==void 0?t.defaultAlpha:1,r=t.defaultKeepAlive!==void 0?t.defaultKeepAlive:!1,a={},l=60,c={},u={},h={outlineThickness:{value:n},outlineColor:{value:i},outlineAlpha:{value:s}},d=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),p=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <encodings_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function _(){return new mn({type:"OutlineEffect",uniforms:Mh.merge([re.fog,re.displacementmap,h]),vertexShader:d,fragmentShader:p,side:kt})}function g(b){let x=a[b.uuid];return x===void 0&&(x={material:_(),used:!0,keepAlive:r,count:0},a[b.uuid]=x),x.used=!0,x.material}function m(b){const x=g(b);return c[x.uuid]=b,E(x,b),x}function f(b){const x=b.geometry,T=x!==void 0&&x.attributes.normal!==void 0;return b.isMesh===!0&&b.material!==void 0&&T===!0}function S(b){if(f(b)!==!1){if(Array.isArray(b.material))for(let x=0,T=b.material.length;x<T;x++)b.material[x]=m(b.material[x]);else b.material=m(b.material);u[b.uuid]=b.onBeforeRender,b.onBeforeRender=v}}function M(b){if(f(b)!==!1){if(Array.isArray(b.material))for(let x=0,T=b.material.length;x<T;x++)b.material[x]=c[b.material[x].uuid];else b.material=c[b.material.uuid];b.onBeforeRender=u[b.uuid]}}function v(b,x,T,B,k){const P=c[k.uuid];P!==void 0&&y(k,P)}function y(b,x){const T=x.userData.outlineParameters;b.uniforms.outlineAlpha.value=x.opacity,T!==void 0&&(T.thickness!==void 0&&(b.uniforms.outlineThickness.value=T.thickness),T.color!==void 0&&b.uniforms.outlineColor.value.fromArray(T.color),T.alpha!==void 0&&(b.uniforms.outlineAlpha.value=T.alpha)),x.displacementMap&&(b.uniforms.displacementMap.value=x.displacementMap,b.uniforms.displacementScale.value=x.displacementScale,b.uniforms.displacementBias.value=x.displacementBias)}function E(b,x){if(b.name==="invisible")return;const T=x.userData.outlineParameters;b.fog=x.fog,b.toneMapped=x.toneMapped,b.premultipliedAlpha=x.premultipliedAlpha,b.displacementMap=x.displacementMap,T!==void 0?(x.visible===!1?b.visible=!1:b.visible=T.visible!==void 0?T.visible:!0,b.transparent=T.alpha!==void 0&&T.alpha<1?!0:x.transparent,T.keepAlive!==void 0&&(a[x.uuid].keepAlive=T.keepAlive)):(b.transparent=x.transparent,b.visible=x.visible),(x.wireframe===!0||x.depthTest===!1)&&(b.visible=!1),x.clippingPlanes&&(b.clipping=!0,b.clippingPlanes=x.clippingPlanes,b.clipIntersection=x.clipIntersection,b.clipShadows=x.clipShadows),b.version=x.version}function L(){let b;b=Object.keys(c);for(let x=0,T=b.length;x<T;x++)c[b[x]]=void 0;b=Object.keys(u);for(let x=0,T=b.length;x<T;x++)u[b[x]]=void 0;b=Object.keys(a);for(let x=0,T=b.length;x<T;x++){const B=b[x];a[B].used===!1?(a[B].count++,a[B].keepAlive===!1&&a[B].count>l&&delete a[B]):(a[B].used=!1,a[B].count=0)}}this.render=function(b,x){if(this.enabled===!1){e.render(b,x);return}const T=e.autoClear;e.autoClear=this.autoClear,e.render(b,x),e.autoClear=T,this.renderOutline(b,x)},this.renderOutline=function(b,x){const T=e.autoClear,B=b.matrixWorldAutoUpdate,k=b.background,P=e.shadowMap.enabled;b.matrixWorldAutoUpdate=!1,b.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,b.traverse(S),e.render(b,x),b.traverse(M),L(),b.matrixWorldAutoUpdate=B,b.background=k,e.autoClear=T,e.shadowMap.enabled=P},this.autoClear=e.autoClear,this.domElement=e.domElement,this.shadowMap=e.shadowMap,this.clear=function(b,x,T){e.clear(b,x,T)},this.getPixelRatio=function(){return e.getPixelRatio()},this.setPixelRatio=function(b){e.setPixelRatio(b)},this.getSize=function(b){return e.getSize(b)},this.setSize=function(b,x,T){e.setSize(b,x,T)},this.setViewport=function(b,x,T,B){e.setViewport(b,x,T,B)},this.setScissor=function(b,x,T,B){e.setScissor(b,x,T,B)},this.setScissorTest=function(b){e.setScissorTest(b)},this.setRenderTarget=function(b){e.setRenderTarget(b)}}}var Uv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vo={},Nv={get exports(){return Vo},set exports(o){Vo=o}};(function(o,e){(function(t,n){o.exports=n()})(Uv,function(){var t=`<div class="gl-box">
  <svg viewBox="0 0 55 60">
    <text x="27" y="56" class="gl-fps">00 FPS</text>
    <text x="28" y="8" class="gl-mem"></text>
    <rect x="0" y="14" rx="4" ry="4" width="55" height="32"></rect>
    <polyline class="gl-chart"></polyline>
  </svg>
  <svg viewBox="0 0 14 60" class="gl-cpu-svg">
    <line x1="7" y1="38" x2="7" y2="11" class="opacity"/>
    <line x1="7" y1="38" x2="7" y2="11" class="gl-cpu" stroke-dasharray="0 27"/>
    <path d="M5.35 43c-.464 0-.812.377-.812.812v1.16c-.783.1972-1.421.812-1.595 1.624h-1.16c-.435 0-.812.348-.812.812s.348.812.812.812h1.102v1.653H1.812c-.464 0-.812.377-.812.812 0 .464.377.812.812.812h1.131c.1943.783.812 1.392 1.595 1.595v1.131c0 .464.377.812.812.812.464 0 .812-.377.812-.812V53.15h1.653v1.073c0 .464.377.812.812.812.464 0 .812-.377.812-.812v-1.131c.783-.1943 1.392-.812 1.595-1.595h1.131c.464 0 .812-.377.812-.812 0-.464-.377-.812-.812-.812h-1.073V48.22h1.102c.435 0 .812-.348.812-.812s-.348-.812-.812-.812h-1.16c-.1885-.783-.812-1.421-1.595-1.624v-1.131c0-.464-.377-.812-.812-.812-.464 0-.812.377-.812.812v1.073H6.162v-1.073c0-.464-.377-.812-.812-.812zm.58 3.48h2.088c.754 0 1.363.609 1.363 1.363v2.088c0 .754-.609 1.363-1.363 1.363H5.93c-.754 0-1.363-.609-1.363-1.363v-2.088c0-.754.609-1.363 1.363-1.363z"/>
  </svg>
  <svg viewBox="0 0 14 60" class="gl-gpu-svg">
    <line x1="7" y1="38" x2="7" y2="11" class="opacity"/>
    <line x1="7" y1="38" x2="7" y2="11" class="gl-gpu" stroke-dasharray="0 27"/>
    <path d="M1.94775 43.3772a.736.736 0 10-.00416 1.472c.58535.00231.56465.1288.6348.3197.07015.18975.04933.43585.04933.43585l-.00653.05405v8.671a.736.736 0 101.472 0v-1.4145c.253.09522.52785.1495.81765.1495h5.267c1.2535 0 2.254-.9752 2.254-2.185v-3.105c0-1.2075-1.00625-2.185-2.254-2.185h-5.267c-.28865 0-.5635.05405-.8165.1495.01806-.16445.04209-.598-.1357-1.0787-.22425-.6072-.9499-1.2765-2.0125-1.2765zm2.9095 3.6455c.42435 0 .7659.36225.7659.8119v2.9785c0 .44965-.34155.8119-.7659.8119s-.7659-.36225-.7659-.8119v-2.9785c0-.44965.34155-.8119.7659-.8119zm4.117 0a2.3 2.3 0 012.3 2.3 2.3 2.3 0 01-2.3 2.3 2.3 2.3 0 01-2.3-2.3 2.3 2.3 0 012.3-2.3z"/>
  </svg>
</div>`,n=`#gl-bench {
  position:absolute;
  left:0;
  top:0;
  z-index:1000;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

#gl-bench div {
  position: relative;
  display: block;
  margin: 4px;
  padding: 0 7px 0 10px;
  background: #6c6;
  border-radius: 15px;
  cursor: pointer;
  opacity: 0.9;
}

#gl-bench svg {
  height: 60px;
  margin: 0 -1px;
}

#gl-bench text {
  font-size: 12px;
  font-family: Helvetica,Arial,sans-serif;
  font-weight: 700;
  dominant-baseline: middle;
  text-anchor: middle;
}

#gl-bench .gl-mem {
  font-size: 9px;
}

#gl-bench line {
  stroke-width: 5;
  stroke: #112211;
  stroke-linecap: round;
}

#gl-bench polyline {
  fill: none;
  stroke: #112211;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3.5;
}

#gl-bench rect {
  fill: #448844;
}

#gl-bench .opacity {
  stroke: #448844;
}
`;class i{constructor(r,a={}){this.css=n,this.svg=t,this.paramLogger=()=>{},this.chartLogger=()=>{},this.chartLen=20,this.chartHz=20,this.names=[],this.cpuAccums=[],this.gpuAccums=[],this.activeAccums=[],this.chart=new Array(this.chartLen),this.now=()=>performance&&performance.now?performance.now():Date.now(),this.updateUI=()=>{[].forEach.call(this.nodes["gl-gpu-svg"],d=>{d.style.display=this.trackGPU?"inline":"none"})},Object.assign(this,a),this.detected=0,this.finished=[],this.isFramebuffer=0,this.frameId=0;let l,c=0,u,h=d=>{++c<20?l=requestAnimationFrame(h):(this.detected=Math.ceil(1e3*c/(d-u)/70),cancelAnimationFrame(l)),u||(u=d)};if(requestAnimationFrame(h),r){const d=async(_,g)=>Promise.resolve(setTimeout(()=>{r.getError();const m=this.now()-_;g.forEach((f,S)=>{f&&(this.gpuAccums[S]+=m)})},0)),p=(_,g,m)=>function(){const f=g.now();_.apply(m,arguments),g.trackGPU&&g.finished.push(d(f,g.activeAccums.slice(0)))};["drawArrays","drawElements","drawArraysInstanced","drawBuffers","drawElementsInstanced","drawRangeElements"].forEach(_=>{r[_]&&(r[_]=p(r[_],this,r))}),r.getExtension=((_,g)=>function(){let m=_.apply(r,arguments);return m&&["drawElementsInstancedANGLE","drawBuffersWEBGL"].forEach(f=>{m[f]&&(m[f]=p(m[f],g,m))}),m})(r.getExtension,this)}if(!this.withoutUI){this.dom||(this.dom=document.body);let d=document.createElement("div");d.id="gl-bench",this.dom.appendChild(d),this.dom.insertAdjacentHTML("afterbegin",'<style id="gl-bench-style">'+this.css+"</style>"),this.dom=d,this.dom.addEventListener("click",()=>{this.trackGPU=!this.trackGPU,this.updateUI()}),this.paramLogger=((p,_,g)=>{const m=["gl-cpu","gl-gpu","gl-mem","gl-fps","gl-gpu-svg","gl-chart"],f=Object.assign({},m);return m.forEach(S=>f[S]=_.getElementsByClassName(S)),this.nodes=f,(S,M,v,y,E,L,b)=>{f["gl-cpu"][S].style.strokeDasharray=(M*.27).toFixed(0)+" 100",f["gl-gpu"][S].style.strokeDasharray=(v*.27).toFixed(0)+" 100",f["gl-mem"][S].innerHTML=g[S]?g[S]:y?"mem: "+y.toFixed(0)+"mb":"",f["gl-fps"][S].innerHTML=E.toFixed(0)+" FPS",p(g[S],M,v,y,E,L,b)}})(this.paramLogger,this.dom,this.names),this.chartLogger=((p,_)=>{let g={"gl-chart":_.getElementsByClassName("gl-chart")};return(m,f,S)=>{let M="",v=f.length;for(let y=0;y<v;y++){let E=(S+y+1)%v;f[E]!=null&&(M=M+" "+(55*y/(v-1)).toFixed(1)+","+(45-f[E]*22/60/this.detected).toFixed(1))}g["gl-chart"][m].setAttribute("points",M),p(this.names[m],f,S)}})(this.chartLogger,this.dom)}}addUI(r){this.names.indexOf(r)==-1&&(this.names.push(r),this.dom&&(this.dom.insertAdjacentHTML("beforeend",this.svg),this.updateUI()),this.cpuAccums.push(0),this.gpuAccums.push(0),this.activeAccums.push(!1))}nextFrame(r){this.frameId++;const a=r||this.now();if(this.frameId<=1)this.paramFrame=this.frameId,this.paramTime=a;else{let l=a-this.paramTime;if(l>=1e3){const c=this.frameId-this.paramFrame,u=c/l*1e3;for(let h=0;h<this.names.length;h++){const d=this.cpuAccums[h]/l*100,p=this.gpuAccums[h]/l*100,_=performance&&performance.memory?performance.memory.usedJSHeapSize/(1<<20):0;this.paramLogger(h,d,p,_,u,l,c),this.cpuAccums[h]=0,Promise.all(this.finished).then(()=>{this.gpuAccums[h]=0,this.finished=[]})}this.paramFrame=this.frameId,this.paramTime=a}}if(!this.detected||!this.chartFrame)this.chartFrame=this.frameId,this.chartTime=a,this.circularId=0;else{let l=a-this.chartTime,c=this.chartHz*l/1e3;for(;--c>0&&this.detected;){const h=(this.frameId-this.chartFrame)/l*1e3;this.chart[this.circularId%this.chartLen]=h;for(let d=0;d<this.names.length;d++)this.chartLogger(d,this.chart,this.circularId);this.circularId++,this.chartFrame=this.frameId,this.chartTime=a}}}begin(r){this.updateAccums(r)}end(r){this.updateAccums(r)}updateAccums(r){let a=this.names.indexOf(r);a==-1&&(a=this.names.length,this.addUI(r));const l=this.now(),c=l-this.t0;for(let u=0;u<a+1;u++)this.activeAccums[u]&&(this.cpuAccums[u]+=c);this.activeAccums[a]=!this.activeAccums[a],this.t0=l}}return i})})(Nv);const Ov=Vo;function Hn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Hh(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var en={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ks={duration:.5,overwrite:!1,delay:0},Tl,bt,Ze,fn=1e8,qe=1/fn,Go=Math.PI*2,Fv=Go/4,kv=0,Wh=Math.sqrt,Bv=Math.cos,zv=Math.sin,yt=function(e){return typeof e=="string"},it=function(e){return typeof e=="function"},Zn=function(e){return typeof e=="number"},wl=function(e){return typeof e>"u"},Un=function(e){return typeof e=="object"},zt=function(e){return e!==!1},Al=function(){return typeof window<"u"},ia=function(e){return it(e)||yt(e)},Xh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rt=Array.isArray,Ho=/(?:-?\.?\d|\.)+/gi,qh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jh=/[+-]=-?[.\d]+/,Yh=/[^,'"\[\]\s]+/gi,Vv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,et,En,Wo,El,tn={},fa={},Kh,Zh=function(e){return(fa=Bs(e,tn))&&Wt},Cl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Mr=function(e,t){return!t&&console.warn(e)},$h=function(e,t){return e&&(tn[e]=t)&&fa&&(fa[e]=t)||tn},Sr=function(){return 0},Gv={suppressEvents:!0,isStart:!0,kill:!1},oa={suppressEvents:!0,kill:!1},Hv={suppressEvents:!0},Ll={},mi=[],Xo={},Jh,Kt={},go={},Iu=30,la=[],Rl="",Pl=function(e){var t=e[0],n,i;if(Un(t)||it(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=la.length;i--&&!la[i].targetTest(t););n=la[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Sd(e[i],n)))||e.splice(i,1);return e},Fi=function(e){return e._gsap||Pl(pn(e))[0]._gsap},Qh=function(e,t,n){return(n=e[t])&&it(n)?e[t]():wl(n)&&e.getAttribute&&e.getAttribute(t)||n},Vt=function(e,t){return(e=e.split(",")).forEach(t)||e},ot=function(e){return Math.round(e*1e5)/1e5||0},dt=function(e){return Math.round(e*1e7)/1e7||0},As=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Wv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},pa=function(){var e=mi.length,t=mi.slice(0),n,i;for(Xo={},mi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ed=function(e,t,n,i){mi.length&&!bt&&pa(),e.render(t,n,i||bt&&t<0&&(e._initted||e._startAt)),mi.length&&!bt&&pa()},td=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Yh).length<2?t:yt(e)?e.trim():e},nd=function(e){return e},nn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Xv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Bs=function(e,t){for(var n in t)e[n]=t[n];return e},Du=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Un(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},ma=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},fr=function(e){var t=e.parent||et,n=e.keyframes?Xv(Rt(e.keyframes)):nn;if(zt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},qv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},id=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e[i],a;if(s)for(a=t[s];r&&r[s]>a;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=r,t.parent=t._dp=e,t},Aa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},_i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ki=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},jv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qo=function(e,t,n,i){return e._startAt&&(bt?e._startAt.revert(oa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Yv=function o(e){return!e||e._ts&&o(e.parent)},Uu=function(e){return e._repeat?zs(e._tTime,e=e.duration()+e._rDelay)*e:0},zs=function(e,t){var n=Math.floor(e=dt(e/t));return e&&n===e?n-1:n},ga=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ea=function(e){return e._end=dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||qe)||0))},Ca=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ea(e),n._dirty||ki(n,e)),e},sd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ga(e.rawTime(),t),(!t._dur||Rr(0,t.totalDuration(),n)-t._tTime>qe)&&t.render(n,!0)),ki(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-qe}},Rn=function(e,t,n,i){return t.parent&&_i(t),t._start=dt((Zn(n)?n:n||e!==et?an(e,n,t):e._time)+t._delay),t._end=dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),id(e,t,"_first","_last",e._sort?"_start":0),jo(t)||(e._recent=t),i||sd(e,t),e._ts<0&&Ca(e,e._tTime),e},rd=function(e,t){return(tn.ScrollTrigger||Cl("scrollTrigger",t))&&tn.ScrollTrigger.create(t,e)},ad=function(e,t,n,i,s){if(Dl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Jh!==$t.frame)return mi.push(e),e._lazy=[s,i],1},Kv=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},jo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Zv=function(e,t,n,i){var s=e.ratio,r=t<0||!t&&(!e._start&&Kv(e)&&!(!e._initted&&jo(e))||(e._ts<0||e._dp._ts<0)&&!jo(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Rr(0,e._tDur,t),u=zs(l,a),e._yoyo&&u&1&&(r=1-r),u!==zs(e._tTime,a)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||bt||i||e._zTime===qe||!t&&e._zTime){if(!e._initted&&ad(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?qe:0),n||(n=t&&!h),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=l,c=e._pt;c;)c.r(r,c.d),c=c._next;t<0&&qo(e,t,n,!0),e._onUpdate&&!n&&Jt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&_i(e,1),!n&&!bt&&(Jt(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$v=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Vs=function(e,t,n,i){var s=e._repeat,r=dt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:dt(r*(s+1)+e._rDelay*s):r,a>0&&!i&&Ca(e,e._tTime=e._tDur*a),e.parent&&Ea(e),n||ki(e.parent,e),e},Nu=function(e){return e instanceof Ot?ki(e):Vs(e,e._dur)},Jv={_start:0,endTime:Sr,totalDuration:Sr},an=function o(e,t,n){var i=e.labels,s=e._recent||Jv,r=e.duration()>=fn?s.endTime(!1):e._dur,a,l,c;return yt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=r),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Rt(n)?n[0]:n).totalDuration()),a>1?o(e,t.substr(0,a-1),n)+l:r+l)):t==null?r:+t},pr=function(e,t,n){var i=Zn(t[1]),s=(i?2:1)+(e<2?0:1),r=t[s],a,l;if(i&&(r.duration=t[1]),r.parent=n,e){for(a=r,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=zt(l.vars.inherit)&&l.parent;r.immediateRender=zt(a.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new ht(t[0],r,t[s+1])},yi=function(e,t){return e||e===0?t(e):t},Rr=function(e,t,n){return n<e?e:n>t?t:n},Lt=function(e,t){return!yt(e)||!(t=Vv.exec(e))?"":t[1]},Qv=function(e,t,n){return yi(n,function(i){return Rr(e,t,i)})},Yo=[].slice,od=function(e,t){return e&&Un(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Un(e[0]))&&!e.nodeType&&e!==En},ey=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return yt(i)&&!t||od(i,1)?(s=n).push.apply(s,pn(i)):n.push(i)})||n},pn=function(e,t,n){return Ze&&!t&&Ze.selector?Ze.selector(e):yt(e)&&!n&&(Wo||!Gs())?Yo.call((t||El).querySelectorAll(e),0):Rt(e)?ey(e,n):od(e)?Yo.call(e,0):e?[e]:[]},Ko=function(e){return e=pn(e)[0]||Mr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return pn(t,n.querySelectorAll?n:n===e?Mr("Invalid scope")||El.createElement("div"):e)}},ld=function(e){return e.sort(function(){return .5-Math.random()})},cd=function(e){if(it(e))return e;var t=Un(e)?e:{each:e},n=Bi(t.ease),i=t.from||0,s=parseFloat(t.base)||0,r={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return yt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,p,_){var g=(_||t).length,m=r[g],f,S,M,v,y,E,L,b,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,fn])[1],!x){for(L=-fn;L<(L=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=r[g]=[],f=l?Math.min(x,g)*u-.5:i%x,S=x===fn?0:l?g*h/x-.5:i/x|0,L=0,b=fn,E=0;E<g;E++)M=E%x-f,v=S-(E/x|0),m[E]=y=c?Math.abs(c==="y"?v:M):Wh(M*M+v*v),y>L&&(L=y),y<b&&(b=y);i==="random"&&ld(m),m.max=L-b,m.min=b,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Lt(t.amount||t.each)||0,n=n&&g<0?vd(n):n}return g=(m[d]-m.min)/m.max||0,dt(m.b+(n?n(g):g)*m.v)+m.u}},Zo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Zn(n)?0:Lt(n))}},ud=function(e,t){var n=Rt(e),i,s;return!n&&Un(e)&&(i=n=e.radius||fn,e.values?(e=pn(e.values),(s=!Zn(e[0]))&&(i*=i)):e=Zo(e.increment)),yi(t,n?it(e)?function(r){return s=e(r),Math.abs(s-r)<=i?s:r}:function(r){for(var a=parseFloat(s?r.x:r),l=parseFloat(s?r.y:0),c=fn,u=0,h=e.length,d,p;h--;)s?(d=e[h].x-a,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:r,s||u===r||Zn(r)?u:u+Lt(r)}:Zo(e))},hd=function(e,t,n,i){return yi(Rt(e)?!t:n===!0?!!(n=0):!i,function(){return Rt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ty=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,r){return r(s)},i)}},ny=function(e,t){return function(n){return e(parseFloat(n))+(t||Lt(n))}},iy=function(e,t,n){return fd(e,t,0,1,n)},dd=function(e,t,n){return yi(n,function(i){return e[~~t(i)]})},sy=function o(e,t,n){var i=t-e;return Rt(e)?dd(e,o(0,e.length),t):yi(n,function(s){return(i+(s-e)%i)%i+e})},ry=function o(e,t,n){var i=t-e,s=i*2;return Rt(e)?dd(e,o(0,e.length-1),t):yi(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>i?s-r:r)})},br=function(e){for(var t=0,n="",i,s,r,a;~(i=e.indexOf("random(",t));)r=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,r-i-7).match(a?Yh:Ho),n+=e.substr(t,i-t)+hd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=r+1;return n+e.substr(t,e.length-t)},fd=function(e,t,n,i,s){var r=t-e,a=i-n;return yi(s,function(l){return n+((l-e)/r*a||0)})},ay=function o(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var r=yt(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),r)e={p:e},t={p:t};else if(Rt(e)&&!Rt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(o(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=Bs(Rt(e)?[]:{},e));if(!u){for(l in t)Il.call(a,e,l,"get",t[l]);s=function(_){return Ol(_,a)||(r?e.p:e)}}}return yi(n,s)},Ou=function(e,t,n){var i=e.labels,s=fn,r,a,l;for(r in i)a=i[r]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=r,s=a);return l},Jt=function(e,t,n){var i=e.vars,s=i[t],r=Ze,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&mi.length&&pa(),a&&(Ze=a),u=l?s.apply(c,l):s.call(c),Ze=r,u},or=function(e){return _i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bt),e.progress()<1&&Jt(e,"onInterrupt"),e},Ms,pd=[],md=function(e){if(e)if(e=!e.name&&e.default||e,Al()||e.headless){var t=e.name,n=it(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Sr,render:Ol,add:Il,kill:Sy,modifier:My,rawVars:0},r={targetTest:0,get:0,getSetter:Nl,aliases:{},register:0};if(Gs(),e!==i){if(Kt[t])return;nn(i,nn(ma(e,s),r)),Bs(i.prototype,Bs(s,ma(e,r))),Kt[i.prop=t]=i,e.targetTest&&(la.push(i),Ll[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$h(t,i),e.register&&e.register(Wt,i,Gt)}else pd.push(e)},We=255,lr={aqua:[0,We,We],lime:[0,We,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,We],navy:[0,0,128],white:[We,We,We],olive:[128,128,0],yellow:[We,We,0],orange:[We,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[We,0,0],pink:[We,192,203],cyan:[0,We,We],transparent:[We,We,We,0]},_o=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*We+.5|0},gd=function(e,t,n){var i=e?Zn(e)?[e>>16,e>>8&We,e&We]:0:lr.black,s,r,a,l,c,u,h,d,p,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),lr[e])i=lr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),a=e.charAt(3),e="#"+s+s+r+r+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&We,i&We,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&We,e&We]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Ho),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,r=u<=.5?u*(c+1):u+c-u*c,s=u*2-r,i.length>3&&(i[3]*=1),i[0]=_o(l+1/3,s,r),i[1]=_o(l,s,r),i[2]=_o(l-1/3,s,r);else if(~e.indexOf("="))return i=e.match(qh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ho)||lr.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/We,r=i[1]/We,a=i[2]/We,h=Math.max(s,r,a),d=Math.min(s,r,a),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===s?(r-a)/p+(r<a?6:0):h===r?(a-s)/p+2:(s-r)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},_d=function(e){var t=[],n=[],i=-1;return e.split(gi).forEach(function(s){var r=s.match(ys)||[];t.push.apply(t,r),n.push(i+=r.length+1)}),t.c=n,t},Fu=function(e,t,n){var i="",s=(e+i).match(gi),r=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=gd(d,t,1))&&r+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=_d(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(gi,"1").split(ys),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||r+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(gi),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},gi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in lr)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),oy=/hsl[a]?\(/,xd=function(e){var t=e.join(" "),n;if(gi.lastIndex=0,gi.test(t))return n=oy.test(t),e[1]=Fu(e[1],n),e[0]=Fu(e[0],n,_d(e[1])),!0},Tr,$t=function(){var o=Date.now,e=500,t=33,n=o(),i=n,s=1e3/240,r=s,a=[],l,c,u,h,d,p,_=function g(m){var f=o()-i,S=m===!0,M,v,y,E;if((f>e||f<0)&&(n+=f-t),i+=f,y=i-n,M=y-r,(M>0||S)&&(E=++h.frame,d=y-h.time*1e3,h.time=y=y/1e3,r+=M+(M>=s?4:s-M),v=1),S||(l=c(g)),v)for(p=0;p<a.length;p++)a[p](y,d,E,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Kh&&(!Wo&&Al()&&(En=Wo=window,El=En.document||{},tn.gsap=Wt,(En.gsapVersions||(En.gsapVersions=[])).push(Wt.version),Zh(fa||En.GreenSockGlobals||!En.gsap&&En||{}),pd.forEach(md)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,r-h.time*1e3+1|0)},Tr=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Tr=0,c=Sr},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),r=h.time*1e3+s},add:function(m,f,S){var M=f?function(v,y,E,L){m(v,y,E,L),h.remove(M)}:m;return h.remove(m),a[S?"unshift":"push"](M),Gs(),M},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},h}(),Gs=function(){return!Tr&&$t.wake()},Oe={},ly=/^[\d.\-M][\d.\-,\s]/,cy=/["']/g,uy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,r=n.length,a,l,c;s<r;s++)l=n[s],a=s!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(cy,"").trim():+c,i=l.substr(a+1).trim();return t},hy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},dy=function(e){var t=(e+"").split("("),n=Oe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[uy(t[1])]:hy(e).split(",").map(td)):Oe._CE&&ly.test(e)?Oe._CE("",e):n},vd=function(e){return function(t){return 1-e(1-t)}},yd=function o(e,t){for(var n=e._first,i;n;)n instanceof Ot?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Bi=function(e,t){return e&&(it(e)?e:Oe[e]||dy(e))||t},Yi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},r;return Vt(e,function(a){Oe[a]=tn[a]=s,Oe[r=a.toLowerCase()]=n;for(var l in s)Oe[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Oe[a+"."+l]=s[l]}),s},Md=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xo=function o(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/Go*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*zv((u-r)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Md(a);return s=Go/s,l.config=function(c,u){return o(e,c,u)},l},vo=function o(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Md(n);return i.config=function(s){return o(e,s)},i};Vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Yi(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Oe.Linear.easeNone=Oe.none=Oe.Linear.easeIn;Yi("Elastic",xo("in"),xo("out"),xo());(function(o,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?o*a*a:a<n?o*Math.pow(a-1.5/e,2)+.75:a<i?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};Yi("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);Yi("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Yi("Circ",function(o){return-(Wh(1-o*o)-1)});Yi("Sine",function(o){return o===1?1:-Bv(o*Fv)+1});Yi("Back",vo("in"),vo("out"),vo());Oe.SteppedEase=Oe.steps=tn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,r=1-qe;return function(a){return((i*Rr(0,r,a)|0)+s)*n}}};ks.ease=Oe["quad.out"];Vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Rl+=o+","+o+"Params,"});var Sd=function(e,t){this.id=kv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qh,this.set=t?t.getSetter:Nl},wr=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vs(this,+t.duration,1,1),this.data=t.data,Ze&&(this._ctx=Ze,Ze.data.push(this)),Tr||$t.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Gs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ca(this,n),!s._dp||s.parent||sd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Rn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===qe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ed(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Uu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Uu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?zs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-qe?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ga(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-qe?0:this._rts,this.totalTime(Rr(-Math.abs(this._delay),this._tDur,s),i!==!1),Ea(this),jv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qe&&(this._tTime-=qe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Rn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(zt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ga(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Hv);var i=bt;return bt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(an(this,n),zt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,zt(i)),this._dur||(this._zTime=-qe),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-qe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-qe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-qe)},e.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},e.then=function(n){var i=this;return new Promise(function(s){var r=it(n)?n:nd,a=function(){var c=i.then;i.then=null,it(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=c),s(r),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){or(this)},o}();nn(wr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qe,_prom:0,_ps:!1,_rts:1});var Ot=function(o){Hh(e,o);function e(n,i){var s;return n===void 0&&(n={}),s=o.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=zt(n.sortChildren),et&&Rn(n.parent||et,Hn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&rd(Hn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,r){return pr(0,arguments,this),this},t.from=function(i,s,r){return pr(1,arguments,this),this},t.fromTo=function(i,s,r,a){return pr(2,arguments,this),this},t.set=function(i,s,r){return s.duration=0,s.parent=this,fr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ht(i,s,an(this,r),1),this},t.call=function(i,s,r){return Rn(this,ht.delayedCall(0,i,s),r)},t.staggerTo=function(i,s,r,a,l,c,u){return r.duration=s,r.stagger=r.stagger||a,r.onComplete=c,r.onCompleteParams=u,r.parent=this,new ht(i,r,an(this,l)),this},t.staggerFrom=function(i,s,r,a,l,c,u){return r.runBackwards=1,fr(r).immediateRender=zt(r.immediateRender),this.staggerTo(i,s,r,a,l,c,u)},t.staggerFromTo=function(i,s,r,a,l,c,u,h){return a.startAt=r,fr(a).immediateRender=zt(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,r){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:dt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,p,_,g,m,f,S,M,v,y,E,L;if(this!==et&&u>l&&i>=0&&(u=l),u!==this._tTime||r||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,M=this._ts,f=!M,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,r);if(d=dt(u%m),u===l?(g=this._repeat,d=c):(y=dt(u/m),g=~~y,g&&g===y&&(d=c,g--),d>c&&(d=c)),y=zs(this._tTime,m),!a&&this._tTime&&y!==g&&this._tTime-y*m-this._dur<=0&&(y=g),E&&g&1&&(d=c-d,L=1),g!==y&&!this._lock){var b=E&&y&1,x=b===(E&&g&1);if(g<y&&(b=!b),a=b?0:u%c?c:u,this._lock=1,this.render(a||(L?0:dt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Jt(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;yd(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=$v(this,dt(a),dt(d)),S&&(u-=d-(d=S._start))),this._tTime=u,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!g&&(Jt(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,r),d!==this._time||!this._ts&&!f){S=0,_&&(u+=this._zTime=-qe);break}}p=_}else{p=this._last;for(var T=i<0?i:d;p;){if(_=p._prev,(p._act||T<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,r||bt&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!f){S=0,_&&(u+=this._zTime=T?-qe:qe);break}}p=_}}if(S&&!s&&(this.pause(),S.render(d>=a?0:-qe)._zTime=d>=a?1:-1,this._ts))return this._start=v,Ea(this),this.render(i,s,r);this._onUpdate&&!s&&Jt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&_i(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Jt(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var r=this;if(Zn(s)||(s=an(this,s,i)),!(i instanceof wr)){if(Rt(i))return i.forEach(function(a){return r.add(a,s)}),this;if(yt(i))return this.addLabel(i,s);if(it(i))i=ht.delayedCall(0,i);else return this}return this!==i?Rn(this,i,s):this},t.getChildren=function(i,s,r,a){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=-fn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ht?s&&l.push(c):(r&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,r)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},t.remove=function(i){return yt(i)?this.removeLabel(i):it(i)?this.killTweensOf(i):(i.parent===this&&Aa(this,i),i===this._recent&&(this._recent=this._last),ki(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dt($t.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=an(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,r){var a=ht.delayedCall(0,s||Sr,r);return a.data="isPause",this._hasPause=1,Rn(this,a,an(this,i))},t.removePause=function(i){var s=this._first;for(i=an(this,i);s;)s._start===i&&s.data==="isPause"&&_i(s),s=s._next},t.killTweensOf=function(i,s,r){for(var a=this.getTweensOf(i,r),l=a.length;l--;)ui!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var r=[],a=pn(i),l=this._first,c=Zn(s),u;l;)l instanceof ht?Wv(l._targets,a)&&(c?(!ui||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&r.push(l):(u=l.getTweensOf(a,s)).length&&r.push.apply(r,u),l=l._next;return r},t.tweenTo=function(i,s){s=s||{};var r=this,a=an(r,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,_=ht.to(r,nn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:r._time))/r.timeScale())||qe,onStart:function(){if(r.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:r._time))/r.timeScale());_._dur!==m&&Vs(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,r){return this.tweenTo(s,nn({startAt:{time:an(this,i)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ou(this,an(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ou(this,an(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+qe)},t.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var a=this._first,l=this.labels,c;a;)a._start>=r&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=r&&(l[c]+=i);return ki(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ki(this)},t.totalDuration=function(i){var s=0,r=this,a=r._last,l=fn,c,u,h;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(h=r.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&r._sort&&a._ts&&!r._lock?(r._lock=1,Rn(r,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!r._dp||h&&h.smoothChildTiming)&&(r._start+=u/r._ts,r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Vs(r,r===et&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(i){if(et._ts&&(ed(et,ga(i,et)),Jh=$t.frame),$t.frame>=Iu){Iu+=en.autoSleep||120;var s=et._first;if((!s||!s._ts)&&en.autoSleep&&$t._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$t.sleep()}}},e}(wr);nn(Ot.prototype,{_lock:0,_hasPause:0,_forcing:0});var fy=function(e,t,n,i,s,r,a){var l=new Gt(this._pt,e,t,0,1,Cd,null,s),c=0,u=0,h,d,p,_,g,m,f,S;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=br(i)),r&&(S=[n,i],r(S,e,t),n=S[0],i=S[1]),d=n.match(mo)||[];h=mo.exec(i);)_=h[0],g=i.substring(c,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?As(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=mo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(jh.test(i)||f)&&(l.e=0),this._pt=l,l},Il=function(e,t,n,i,s,r,a,l,c,u){it(i)&&(i=i(s||0,e,r));var h=e[t],d=n!=="get"?n:it(h)?c?e[t.indexOf("set")||!it(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=it(h)?c?xy:Ad:Ul,_;if(yt(i)&&(~i.indexOf("random(")&&(i=br(i)),i.charAt(1)==="="&&(_=As(d,i)+(Lt(d)||0),(_||_===0)&&(i=_))),!u||d!==i||$o)return!isNaN(d*i)&&i!==""?(_=new Gt(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?yy:Ed,0,p),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Cl(t,i),fy.call(this,e,t,d,i,p,l||en.stringFilter,c))},py=function(e,t,n,i,s){if(it(e)&&(e=mr(e,s,t,n,i)),!Un(e)||e.style&&e.nodeType||Rt(e)||Xh(e))return yt(e)?mr(e,s,t,n,i):e;var r={},a;for(a in e)r[a]=mr(e[a],s,t,n,i);return r},bd=function(e,t,n,i,s,r){var a,l,c,u;if(Kt[e]&&(a=new Kt[e]).init(s,a.rawVars?t[e]:py(t[e],i,s,r,n),n,i,r)!==!1&&(n._pt=l=new Gt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ms))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ui,$o,Dl=function o(e,t,n){var i=e.vars,s=i.ease,r=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,p=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,f=e.parent,S=f&&f.data==="nested"?f.vars.targets:m,M=e._overwrite==="auto"&&!Tl,v=e.timeline,y,E,L,b,x,T,B,k,P,U,F,K,Z;if(v&&(!d||!s)&&(s="none"),e._ease=Bi(s,ks.ease),e._yEase=h?vd(Bi(h===!0?s:h,ks.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(k=m[0]?Fi(m[0]).harness:0,K=k&&i[k.prop],y=ma(i,Ll),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!p?g.render(-1,!0):g.revert(u&&_?oa:Gv),g._lazy=0),r){if(_i(e._startAt=ht.set(m,nn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&zt(l),startAt:null,delay:0,onUpdate:c&&function(){return Jt(e,"onUpdate")},stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bt||!a&&!p)&&e._startAt.revert(oa),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),L=nn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&zt(l),immediateRender:a,stagger:0,parent:f},y),K&&(L[k.prop]=K),_i(e._startAt=ht.set(m,L)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bt?e._startAt.revert(oa):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,qe,qe);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&zt(l)||l&&!_,E=0;E<m.length;E++){if(x=m[E],B=x._gsap||Pl(m)[E]._gsap,e._ptLookup[E]=U={},Xo[B.id]&&mi.length&&pa(),F=S===m?E:S.indexOf(x),k&&(P=new k).init(x,K||y,e,F,S)!==!1&&(e._pt=b=new Gt(e._pt,x,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(X){U[X]=b}),P.priority&&(T=1)),!k||K)for(L in y)Kt[L]&&(P=bd(L,y,e,F,x,S))?P.priority&&(T=1):U[L]=b=Il.call(e,x,L,"get",y[L],F,S,0,i.stringFilter);e._op&&e._op[E]&&e.kill(x,e._op[E]),M&&e._pt&&(ui=e,et.killTweensOf(x,U,e.globalTime(t)),Z=!e.parent,ui=0),e._pt&&l&&(Xo[B.id]=1)}T&&Ld(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,d&&t<=0&&v.render(fn,!0,!0)},my=function(e,t,n,i,s,r,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(u=d[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return $o=1,e.vars[t]="+=0",Dl(e,a),$o=0,l?Mr(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+r*u.c,u.c=n-u.s,h.e&&(h.e=ot(n)+Lt(h.e)),h.b&&(h.b=u.s+Lt(h.b))},gy=function(e,t){var n=e[0]?Fi(e[0]).harness:0,i=n&&n.aliases,s,r,a,l;if(!i)return t;s=Bs({},t);for(r in i)if(r in s)for(l=i[r].split(","),a=l.length;a--;)s[l[a]]=s[r];return s},_y=function(e,t,n,i){var s=t.ease||i||"power1.inOut",r,a;if(Rt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(r in t)a=n[r]||(n[r]=[]),r==="ease"||a.push({t:parseFloat(e),v:t[r],e:s})},mr=function(e,t,n,i,s){return it(e)?e.call(t,n,i,s):yt(e)&&~e.indexOf("random(")?br(e):e},Td=Rl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",wd={};Vt(Td+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return wd[o]=1});var ht=function(o){Hh(e,o);function e(n,i,s,r){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=o.call(this,r?i:fr(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,S=i.parent||et,M=(Rt(n)||Xh(n)?Zn(n[0]):"length"in i)?[n]:pn(n),v,y,E,L,b,x,T,B;if(a._targets=M.length?Pl(M):Mr("GSAP target "+n+" not found. https://gsap.com",!en.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||d||ia(c)||ia(u)){if(i=a.vars,v=a.timeline=new Ot({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:M}),v.kill(),v.parent=v._dp=Hn(a),v._start=0,d||ia(c)||ia(u)){if(L=M.length,T=d&&cd(d),Un(d))for(b in d)~Td.indexOf(b)&&(B||(B={}),B[b]=d[b]);for(y=0;y<L;y++)E=ma(i,wd),E.stagger=0,f&&(E.yoyoEase=f),B&&Bs(E,B),x=M[y],E.duration=+mr(c,Hn(a),y,x,M),E.delay=(+mr(u,Hn(a),y,x,M)||0)-a._delay,!d&&L===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),v.to(x,E,T?T(y,x,M):0),v._ease=Oe.none;v.duration()?c=u=0:a.timeline=0}else if(_){fr(nn(v.vars.defaults,{ease:"none"})),v._ease=Bi(_.ease||i.ease||"none");var k=0,P,U,F;if(Rt(_))_.forEach(function(K){return v.to(M,K,">")}),v.duration();else{E={};for(b in _)b==="ease"||b==="easeEach"||_y(b,_[b],E,_.easeEach);for(b in E)for(P=E[b].sort(function(K,Z){return K.t-Z.t}),k=0,y=0;y<P.length;y++)U=P[y],F={ease:U.e,duration:(U.t-(y?P[y-1].t:0))/100*c},F[b]=U.v,v.to(M,F,k),k+=F.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return p===!0&&!Tl&&(ui=Hn(a),et.killTweensOf(M),ui=0),Rn(S,Hn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===dt(S._time)&&zt(h)&&Yv(Hn(a))&&S.data!=="nested")&&(a._tTime=-qe,a.render(Math.max(0,-u)||0)),m&&rd(Hn(a),m),a}var t=e.prototype;return t.render=function(i,s,r){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-qe&&!u?l:i<qe?0:i,d,p,_,g,m,f,S,M,v;if(!c)Zv(this,i,s,r);else if(h!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,r);if(d=dt(h%g),h===l?(_=this._repeat,d=c):(m=dt(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),f=this._yoyo&&_&1,f&&(v=this._yEase,d=c-d),m=zs(this._tTime,g),d===a&&!r&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(M&&this._yEase&&yd(M,f),this.vars.repeatRefresh&&!f&&!this._lock&&d!==g&&this._initted&&(this._lock=r=1,this.render(dt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(ad(this,u?i:d,r,s,h))return this._tTime=0,this;if(a!==this._time&&!(r&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,r)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(d/c),this._from&&(this.ratio=S=1-S),d&&!a&&!s&&!_&&(Jt(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&qo(this,i,s,r),Jt(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Jt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&qo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&_i(this,1),!s&&!(u&&!a)&&(h||a||f)&&(Jt(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,r,a,l){Tr||$t.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Dl(this,c),u=this._ease(c/this._dur),my(this,i,s,r,a,u,c,l)?this.resetTo(i,s,r,a,1):(Ca(this,0),this.parent||id(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?or(this):this.scrollTrigger&&this.scrollTrigger.kill(!!bt),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ui&&ui.vars.overwrite!==!0)._first||or(this),this.parent&&r!==this.timeline.totalDuration()&&Vs(this,this._dur*this.timeline._tDur/r,0,1),this}var a=this._targets,l=i?pn(i):a,c=this._ptLookup,u=this._pt,h,d,p,_,g,m,f;if((!s||s==="all")&&qv(a,l))return s==="all"&&(this._pt=0),or(this);for(h=this._op=this._op||[],s!=="all"&&(yt(s)&&(g={},Vt(s,function(S){return g[S]=1}),s=g),s=gy(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){d=c[f],s==="all"?(h[f]=s,_=d,p={}):(p=h[f]=h[f]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Aa(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&or(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return pr(1,arguments)},e.delayedCall=function(i,s,r,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:a})},e.fromTo=function(i,s,r){return pr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,r){return et.killTweensOf(i,s,r)},e}(wr);nn(ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vt("staggerTo,staggerFrom,staggerFromTo",function(o){ht[o]=function(){var e=new Ot,t=Yo.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Ul=function(e,t,n){return e[t]=n},Ad=function(e,t,n){return e[t](n)},xy=function(e,t,n,i){return e[t](i.fp,n)},vy=function(e,t,n){return e.setAttribute(t,n)},Nl=function(e,t){return it(e[t])?Ad:wl(e[t])&&e.setAttribute?vy:Ul},Ed=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},yy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ol=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},My=function(e,t,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(e,t,n),s=r},Sy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Aa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},by=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ld=function(e){for(var t=e._pt,n,i,s,r;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:r)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:r=t,t=n}e._pt=s},Gt=function(){function o(t,n,i,s,r,a,l,c,u){this.t=n,this.s=s,this.c=r,this.p=i,this.r=a||Ed,this.d=l||this,this.set=c||Ul,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=by,this.m=n,this.mt=s,this.tween=i},o}();Vt(Rl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Ll[o]=1});tn.TweenMax=tn.TweenLite=ht;tn.TimelineLite=tn.TimelineMax=Ot;et=new Ot({sortChildren:!1,defaults:ks,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});en.stringFilter=xd;var zi=[],ca={},Ty=[],ku=0,wy=0,yo=function(e){return(ca[e]||Ty).map(function(t){return t()})},Jo=function(){var e=Date.now(),t=[];e-ku>2&&(yo("matchMediaInit"),zi.forEach(function(n){var i=n.queries,s=n.conditions,r,a,l,c;for(a in i)r=En.matchMedia(i[a]).matches,r&&(l=1),r!==s[a]&&(s[a]=r,c=1);c&&(n.revert(),l&&t.push(n))}),yo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ku=e,yo("matchMedia"))},Rd=function(){function o(t,n){this.selector=n&&Ko(n),this.data=[],this._r=[],this.isReverted=!1,this.id=wy++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,s){it(n)&&(s=i,i=n,n=it);var r=this,a=function(){var c=Ze,u=r.selector,h;return c&&c!==r&&c.data.push(r),s&&(r.selector=Ko(s)),Ze=r,h=i.apply(r,arguments),it(h)&&r._r.push(h),Ze=c,r.selector=u,r.isReverted=!1,h};return r.last=a,n===it?a(r,function(l){return r.add(null,l)}):n?r[n]=a:a},e.ignore=function(n){var i=Ze;Ze=null,n(this),Ze=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ot?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ht)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var r=zi.length;r--;)zi[r].id===this.id&&zi.splice(r,1)},e.revert=function(n){this.kill(n||{})},o}(),Ay=function(){function o(t){this.contexts=[],this.scope=t,Ze&&Ze.data.push(this)}var e=o.prototype;return e.add=function(n,i,s){Un(n)||(n={matches:n});var r=new Rd(0,s||this.scope),a=r.conditions={},l,c,u;Ze&&!r.selector&&(r.selector=Ze.selector),this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(c in n)c==="all"?u=1:(l=En.matchMedia(n[c]),l&&(zi.indexOf(r)<0&&zi.push(r),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Jo):l.addEventListener("change",Jo)));return u&&i(r,function(h){return r.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),_a={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return md(i)})},timeline:function(e){return new Ot(e)},getTweensOf:function(e,t){return et.getTweensOf(e,t)},getProperty:function(e,t,n,i){yt(e)&&(e=pn(e)[0]);var s=Fi(e||{}).get,r=n?nd:td;return n==="native"&&(n=""),e&&(t?r((Kt[t]&&Kt[t].get||s)(e,t,n,i)):function(a,l,c){return r((Kt[a]&&Kt[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=pn(e),e.length>1){var i=e.map(function(u){return Wt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var r=Kt[t],a=Fi(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=r?function(u){var h=new r;Ms._pt=0,h.init(e,n?u+n:u,Ms,0,[e]),h.render(1,h),Ms._pt&&Ol(1,Ms)}:a.set(e,l);return r?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Wt.to(e,nn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),r=function(l,c,u){return s.resetTo(t,l,c,u)};return r.tween=s,r},isTweening:function(e){return et.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Bi(e.ease,ks.ease)),Du(ks,e||{})},config:function(e){return Du(en,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,r=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Kt[a]&&!tn[a]&&Mr(t+" effect requires "+a+" plugin.")}),go[t]=function(a,l,c){return n(pn(a),nn(l||{},s),c)},r&&(Ot.prototype[t]=function(a,l,c){return this.add(go[t](a,Un(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Oe[e]=Bi(t)},parseEase:function(e,t){return arguments.length?Bi(e,t):Oe},getById:function(e){return et.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ot(e),i,s;for(n.smoothChildTiming=zt(e.smoothChildTiming),et.remove(n),n._dp=0,n._time=n._tTime=et._time,i=et._first;i;)s=i._next,(t||!(!i._dur&&i instanceof ht&&i.vars.onComplete===i._targets[0]))&&Rn(n,i,i._start-i._delay),i=s;return Rn(et,n,0),n},context:function(e,t){return e?new Rd(e,t):Ze},matchMedia:function(e){return new Ay(e)},matchMediaRefresh:function(){return zi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Jo()},addEventListener:function(e,t){var n=ca[e]||(ca[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ca[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:sy,wrapYoyo:ry,distribute:cd,random:hd,snap:ud,normalize:iy,getUnit:Lt,clamp:Qv,splitColor:gd,toArray:pn,selector:Ko,mapRange:fd,pipe:ty,unitize:ny,interpolate:ay,shuffle:ld},install:Zh,effects:go,ticker:$t,updateRoot:Ot.updateRoot,plugins:Kt,globalTimeline:et,core:{PropTween:Gt,globals:$h,Tween:ht,Timeline:Ot,Animation:wr,getCache:Fi,_removeLinkedListItem:Aa,reverting:function(){return bt},context:function(e){return e&&Ze&&(Ze.data.push(e),e._ctx=Ze),Ze},suppressOverwrites:function(e){return Tl=e}}};Vt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return _a[o]=ht[o]});$t.add(Ot.updateRoot);Ms=_a.to({},{duration:0});var Ey=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Cy=function(e,t){var n=e._targets,i,s,r;for(i in t)for(s=n.length;s--;)r=e._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=Ey(r,i)),r&&r.modifier&&r.modifier(t[i],e,n[s],i))},Mo=function(e,t){return{name:e,rawVars:1,init:function(i,s,r){r._onInit=function(a){var l,c;if(yt(s)&&(l={},Vt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Cy(a,s)}}}},Wt=_a.registerPlugin({name:"attr",init:function(e,t,n,i,s){var r,a,l;this.tween=n;for(r in t)l=e.getAttribute(r)||"",a=this.add(e,"setAttribute",(l||0)+"",t[r],i,s,0,0,r),a.op=r,a.b=l,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Mo("roundProps",Zo),Mo("modifiers"),Mo("snap",ud))||_a;ht.version=Ot.version=Wt.version="3.12.7";Kh=1;Al()&&Gs();Oe.Power0;Oe.Power1;Oe.Power2;Oe.Power3;Oe.Power4;Oe.Linear;Oe.Quad;Oe.Cubic;Oe.Quart;Oe.Quint;Oe.Strong;Oe.Elastic;Oe.Back;Oe.SteppedEase;Oe.Bounce;Oe.Sine;Oe.Expo;Oe.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bu,hi,Es,Fl,Ni,zu,kl,Ly=function(){return typeof window<"u"},$n={},Pi=180/Math.PI,Cs=Math.PI/180,ms=Math.atan2,Vu=1e8,Bl=/([A-Z])/g,Ry=/(left|right|width|margin|padding|x)/i,Py=/[\s,\(]\S/,Pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Iy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Dy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Uy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Pd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Id=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ny=function(e,t,n){return e.style[t]=n},Oy=function(e,t,n){return e.style.setProperty(t,n)},Fy=function(e,t,n){return e._gsap[t]=n},ky=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},By=function(e,t,n,i,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},zy=function(e,t,n,i,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},tt="transform",Ht=tt+"Origin",Vy=function o(e,t){var n=this,i=this.target,s=i.style,r=i._gsap;if(e in $n&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Pn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Wn(i,a)}):this.tfm[e]=r.x?r[e]:Wn(i,e),e===Ht&&(this.tfm.zOrigin=r.zOrigin);else return Pn.transform.split(",").forEach(function(a){return o.call(n,a,t)});if(this.props.indexOf(tt)>=0)return;r.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ht,t,"")),e=tt}(s||t)&&this.props.push(e,t,s[e])},Dd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Gy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Bl,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=kl(),(!s||!s.isStart)&&!n[tt]&&(Dd(n),i.zOrigin&&n[Ht]&&(n[Ht]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ud=function(e,t){var n={target:e,props:[],revert:Gy,save:Vy};return e._gsap||Wt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Nd,el=function(e,t){var n=hi.createElementNS?hi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hi.createElement(e);return n&&n.style?n:hi.createElement(e)},Dn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Bl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Hs(t)||t,1)||""},Gu="O,Moz,ms,Ms,Webkit".split(","),Hs=function(e,t,n){var i=t||Ni,s=i.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(Gu[r]+e in s););return r<0?null:(r===3?"ms":r>=0?Gu[r]:"")+e},tl=function(){Ly()&&window.document&&(Bu=window,hi=Bu.document,Es=hi.documentElement,Ni=el("div")||{style:{}},el("div"),tt=Hs(tt),Ht=tt+"Origin",Ni.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Nd=!!Hs("perspective"),kl=Wt.core.reverting,Fl=1)},Hu=function(e){var t=e.ownerSVGElement,n=el("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Es.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Es.removeChild(n),s},Wu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Od=function(e){var t,n;try{t=e.getBBox()}catch{t=Hu(e),n=1}return t&&(t.width||t.height)||n||(t=Hu(e)),t&&!t.width&&!t.x&&!t.y?{x:+Wu(e,["x","cx","x1"])||0,y:+Wu(e,["y","cy","y1"])||0,width:0,height:0}:t},Fd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Od(e))},qi=function(e,t){if(t){var n=e.style,i;t in $n&&t!==Ht&&(t=tt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Bl,"-$1").toLowerCase())):n.removeAttribute(t)}},di=function(e,t,n,i,s,r){var a=new Gt(e._pt,t,n,0,1,r?Id:Pd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Xu={deg:1,rad:1,turn:1},Hy={grid:1,flex:1},xi=function o(e,t,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",a=Ni.style,l=Ry.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",p=i==="%",_,g,m,f;if(i===r||!s||Xu[i]||Xu[r])return s;if(r!=="px"&&!d&&(s=o(e,t,n,"px")),f=e.getCTM&&Fd(e),(p||r==="%")&&($n[t]||~t.indexOf("adius")))return _=f?e.getBBox()[l?"width":"height"]:e[u],ot(p?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(d?r:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===hi||!g.appendChild)&&(g=hi.body),m=g._gsap,m&&p&&m.width&&l&&m.time===$t.time&&!m.uncache)return ot(s/m.width*h);if(p&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,_=e[u],S?e.style[t]=S:qi(e,t)}else(p||r==="%")&&!Hy[Dn(g,"display")]&&(a.position=Dn(e,"position")),g===e&&(a.position="static"),g.appendChild(Ni),_=Ni[u],g.removeChild(Ni),a.position="absolute";return l&&p&&(m=Fi(g),m.time=$t.time,m.width=g[u]),ot(d?_*s/h:_&&s?h/_*s:0)},Wn=function(e,t,n,i){var s;return Fl||tl(),t in Pn&&t!=="transform"&&(t=Pn[t],~t.indexOf(",")&&(t=t.split(",")[0])),$n[t]&&t!=="transform"?(s=Er(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:va(Dn(e,Ht))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=xa[t]&&xa[t](e,t,n)||Dn(e,t)||Qh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?xi(e,t,s,n)+n:s},Wy=function(e,t,n,i){if(!n||n==="none"){var s=Hs(t,e,1),r=s&&Dn(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=Dn(e,"borderTopColor"))}var a=new Gt(this._pt,e.style,t,0,1,Cd),l=0,c=0,u,h,d,p,_,g,m,f,S,M,v,y;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=Dn(e,t)||i,g?e.style[t]=g:qi(e,t)),u=[n,i],xd(u),n=u[0],i=u[1],d=n.match(ys)||[],y=i.match(ys)||[],y.length){for(;h=ys.exec(i);)m=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,v=g.substr((p+"").length),m.charAt(1)==="="&&(m=As(p,m)+v),f=parseFloat(m),M=m.substr((f+"").length),l=ys.lastIndex-M.length,M||(M=M||en.units[t]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(p=xi(e,t,g,M)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:p,c:f-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Id:Pd;return jh.test(i)&&(a.e=0),this._pt=a,a},qu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=qu[n]||n,t[1]=qu[i]||i,t.join(" ")},qy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,r=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],$n[a]&&(l=1,a=a==="transformOrigin"?Ht:tt),qi(n,a);l&&(qi(n,tt),r&&(r.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Er(n,1),r.uncache=1,Dd(i)))}},xa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var r=e._pt=new Gt(e._pt,t,n,0,0,qy);return r.u=i,r.pr=-10,r.tween=s,e._props.push(n),1}}},Ar=[1,0,0,1,0,0],kd={},Bd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ju=function(e){var t=Dn(e,tt);return Bd(t)?Ar:t.substr(7).match(qh).map(ot)},zl=function(e,t){var n=e._gsap||Fi(e),i=e.style,s=ju(e),r,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ar:s):(s===Ar&&!e.offsetParent&&e!==Es&&!n.svg&&(l=i.display,i.display="block",r=e.parentNode,(!r||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Es.appendChild(e)),s=ju(e),l?i.display=l:qi(e,"display"),c&&(a?r.insertBefore(e,a):r?r.appendChild(e):Es.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nl=function(e,t,n,i,s,r){var a=e._gsap,l=s||zl(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],S=l[5],M=t.split(" "),v=parseFloat(M[0])||0,y=parseFloat(M[1])||0,E,L,b,x;n?l!==Ar&&(L=p*m-_*g)&&(b=v*(m/L)+y*(-g/L)+(g*S-m*f)/L,x=v*(-_/L)+y*(p/L)-(p*S-_*f)/L,v=b,y=x):(E=Od(e),v=E.x+(~M[0].indexOf("%")?v/100*E.width:v),y=E.y+(~(M[1]||M[0]).indexOf("%")?y/100*E.height:y)),i||i!==!1&&a.smooth?(f=v-c,S=y-u,a.xOffset=h+(f*p+S*g)-f,a.yOffset=d+(f*_+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=y,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Ht]="0px 0px",r&&(di(r,a,"xOrigin",c,v),di(r,a,"yOrigin",u,y),di(r,a,"xOffset",h,a.xOffset),di(r,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+y)},Er=function(e,t){var n=e._gsap||new Sd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,r="px",a="deg",l=getComputedStyle(e),c=Dn(e,Ht)||"0",u,h,d,p,_,g,m,f,S,M,v,y,E,L,b,x,T,B,k,P,U,F,K,Z,X,ne,J,_e,ie,G,Y,se;return u=h=d=g=m=f=S=M=v=0,p=_=1,n.svg=!!(e.getCTM&&Fd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[tt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[tt]!=="none"?l[tt]:"")),i.scale=i.rotate=i.translate="none"),L=zl(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),nl(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,L)),y=n.xOrigin||0,E=n.yOrigin||0,L!==Ar&&(B=L[0],k=L[1],P=L[2],U=L[3],u=F=L[4],h=K=L[5],L.length===6?(p=Math.sqrt(B*B+k*k),_=Math.sqrt(U*U+P*P),g=B||k?ms(k,B)*Pi:0,S=P||U?ms(P,U)*Pi+g:0,S&&(_*=Math.abs(Math.cos(S*Cs))),n.svg&&(u-=y-(y*B+E*P),h-=E-(y*k+E*U))):(se=L[6],G=L[7],J=L[8],_e=L[9],ie=L[10],Y=L[11],u=L[12],h=L[13],d=L[14],b=ms(se,ie),m=b*Pi,b&&(x=Math.cos(-b),T=Math.sin(-b),Z=F*x+J*T,X=K*x+_e*T,ne=se*x+ie*T,J=F*-T+J*x,_e=K*-T+_e*x,ie=se*-T+ie*x,Y=G*-T+Y*x,F=Z,K=X,se=ne),b=ms(-P,ie),f=b*Pi,b&&(x=Math.cos(-b),T=Math.sin(-b),Z=B*x-J*T,X=k*x-_e*T,ne=P*x-ie*T,Y=U*T+Y*x,B=Z,k=X,P=ne),b=ms(k,B),g=b*Pi,b&&(x=Math.cos(b),T=Math.sin(b),Z=B*x+k*T,X=F*x+K*T,k=k*x-B*T,K=K*x-F*T,B=Z,F=X),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=ot(Math.sqrt(B*B+k*k+P*P)),_=ot(Math.sqrt(K*K+se*se)),b=ms(F,K),S=Math.abs(b)>2e-4?b*Pi:0,v=Y?1/(Y<0?-Y:Y):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Bd(Dn(e,tt)),Z&&e.setAttribute("transform",Z))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(p*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=d+r,n.scaleX=ot(p),n.scaleY=ot(_),n.rotation=ot(g)+a,n.rotationX=ot(m)+a,n.rotationY=ot(f)+a,n.skewX=S+a,n.skewY=M+a,n.transformPerspective=v+r,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Ht]=va(c)),n.xOffset=n.yOffset=0,n.force3D=en.force3D,n.renderTransform=n.svg?Yy:Nd?zd:jy,n.uncache=0,n},va=function(e){return(e=e.split(" "))[0]+" "+e[1]},So=function(e,t,n){var i=Lt(t);return ot(parseFloat(t)+parseFloat(xi(e,"x",n+"px",i)))+i},jy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,zd(e,t)},Ei="0deg",sr="0px",Ci=") ",zd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,f=n.force3D,S=n.target,M=n.zOrigin,v="",y=f==="auto"&&e&&e!==1||f===!0;if(M&&(h!==Ei||u!==Ei)){var E=parseFloat(u)*Cs,L=Math.sin(E),b=Math.cos(E),x;E=parseFloat(h)*Cs,x=Math.cos(E),r=So(S,r,L*x*-M),a=So(S,a,-Math.sin(E)*-M),l=So(S,l,b*x*-M+M)}m!==sr&&(v+="perspective("+m+Ci),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(y||r!==sr||a!==sr||l!==sr)&&(v+=l!==sr||y?"translate3d("+r+", "+a+", "+l+") ":"translate("+r+", "+a+Ci),c!==Ei&&(v+="rotate("+c+Ci),u!==Ei&&(v+="rotateY("+u+Ci),h!==Ei&&(v+="rotateX("+h+Ci),(d!==Ei||p!==Ei)&&(v+="skew("+d+", "+p+Ci),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Ci),S.style[tt]=v||"translate(0, 0)"},Yy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,f=n.yOffset,S=n.forceCSS,M=parseFloat(r),v=parseFloat(a),y,E,L,b,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Cs,c*=Cs,y=Math.cos(l)*h,E=Math.sin(l)*h,L=Math.sin(l-c)*-d,b=Math.cos(l-c)*d,c&&(u*=Cs,x=Math.tan(c-u),x=Math.sqrt(1+x*x),L*=x,b*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),y*=x,E*=x)),y=ot(y),E=ot(E),L=ot(L),b=ot(b)):(y=h,b=d,E=L=0),(M&&!~(r+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=xi(p,"x",r,"px"),v=xi(p,"y",a,"px")),(_||g||m||f)&&(M=ot(M+_-(_*y+g*L)+m),v=ot(v+g-(_*E+g*b)+f)),(i||s)&&(x=p.getBBox(),M=ot(M+i/100*x.width),v=ot(v+s/100*x.height)),x="matrix("+y+","+E+","+L+","+b+","+M+","+v+")",p.setAttribute("transform",x),S&&(p.style[tt]=x)},Ky=function(e,t,n,i,s){var r=360,a=yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Pi:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),h==="cw"&&c<0?c=(c+r*Vu)%r-~~(c/r)*r:h==="ccw"&&c>0&&(c=(c-r*Vu)%r-~~(c/r)*r)),e._pt=d=new Gt(e._pt,t,n,i,c,Iy),d.e=u,d.u="deg",e._props.push(n),d},Yu=function(e,t){for(var n in t)e[n]=t[n];return e},Zy=function(e,t,n){var i=Yu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,a,l,c,u,h,d,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),r[tt]=t,a=Er(n,1),qi(n,tt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[tt],r[tt]=t,a=Er(n,1),r[tt]=c);for(l in $n)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=Lt(c),_=Lt(u),h=p!==_?xi(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Gt(e._pt,a,l,h,d-h,Qo),e._pt.u=_||0,e._props.push(l));Yu(a,i)};Vt("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",s="Left",r=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?o+a:"border"+a+o});xa[e>1?"border"+o:o]=function(a,l,c,u,h){var d,p;if(arguments.length<4)return d=r.map(function(_){return Wn(a,_,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},r.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,p,h)}});var Vd={name:"css",register:tl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var r=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,p,_,g,m,f,S,M,v,y,E,L,b;Fl||tl(),this.styles=this.styles||Ud(e),b=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Kt[g]&&bd(g,t,n,i,e,s)))){if(p=typeof u,_=xa[g],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=br(u)),_)_(this,e,g,u,n)&&(L=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",gi.lastIndex=0,gi.test(c)||(m=Lt(c),f=Lt(u)),f?m!==f&&(c=xi(e,g,c,f)+f):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,g),r.push(g),b.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],yt(c)&&~c.indexOf("random(")&&(c=br(c)),Lt(c+"")||c==="auto"||(c+=en.units[g]||Lt(Wn(e,g))||""),(c+"").charAt(1)==="="&&(c=Wn(e,g))):c=Wn(e,g),d=parseFloat(c),S=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in Pn&&(g==="autoAlpha"&&(d===1&&Wn(e,"visibility")==="hidden"&&h&&(d=0),b.push("visibility",0,a.visibility),di(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Pn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in $n,M){if(this.styles.save(g),v||(y=e._gsap,y.renderTransform&&!t.parseTransform||Er(e,t.parseTransform),E=t.smoothOrigin!==!1&&y.smooth,v=this._pt=new Gt(this._pt,a,tt,0,1,y.renderTransform,y,0,-1),v.dep=1),g==="scale")this._pt=new Gt(this._pt,y,"scaleY",y.scaleY,(S?As(y.scaleY,S+h):h)-y.scaleY||0,Qo),this._pt.u=0,r.push("scaleY",g),g+="X";else if(g==="transformOrigin"){b.push(Ht,0,a[Ht]),u=Xy(u),y.svg?nl(e,u,0,E,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==y.zOrigin&&di(this,y,"zOrigin",y.zOrigin,f),di(this,a,g,va(c),va(u)));continue}else if(g==="svgOrigin"){nl(e,u,1,E,0,this);continue}else if(g in kd){Ky(this,y,g,d,S?As(d,S+u):u);continue}else if(g==="smoothOrigin"){di(this,y,"smooth",y.smooth,u);continue}else if(g==="force3D"){y[g]=u;continue}else if(g==="transform"){Zy(this,u,e);continue}}else g in a||(g=Hs(g)||g);if(M||(h||h===0)&&(d||d===0)&&!Py.test(u)&&g in a)m=(c+"").substr((d+"").length),h||(h=0),f=Lt(u)||(g in en.units?en.units[g]:m),m!==f&&(d=xi(e,g,c,f)),this._pt=new Gt(this._pt,M?y:a,g,d,(S?As(d,S+h):h)-d,!M&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?Uy:Qo),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=Dy);else if(g in a)Wy.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,s);else if(g!=="parseTransform"){Cl(g,u);continue}M||(g in a?b.push(g,0,a[g]):typeof e[g]=="function"?b.push(g,2,e[g]()):b.push(g,1,c||e[g])),r.push(g)}}L&&Ld(this)},render:function(e,t){if(t.tween._time||!kl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Wn,aliases:Pn,getSetter:function(e,t,n){var i=Pn[t];return i&&i.indexOf(",")<0&&(t=i),t in $n&&t!==Ht&&(e._gsap.x||Wn(e,"x"))?n&&zu===n?t==="scale"?ky:Fy:(zu=n||{})&&(t==="scale"?By:zy):e.style&&!wl(e.style[t])?Ny:~t.indexOf("-")?Oy:Nl(e,t)},core:{_removeProperty:qi,_getMatrix:zl}};Wt.utils.checkPrefix=Hs;Wt.core.getStyleSaver=Ud;(function(o,e,t,n){var i=Vt(o+","+e+","+t,function(s){$n[s]=1});Vt(e,function(s){en.units[s]="deg",kd[s]=1}),Pn[i[13]]=o+","+e,Vt(n,function(s){var r=s.split(":");Pn[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){en.units[o]="px"});Wt.registerPlugin(Vd);var Gd=Wt.registerPlugin(Vd)||Wt;Gd.core.Tween;const Hd=document.querySelector(".webgl"),il=document.documentElement,cr=document.querySelector("#audio"),sl=document.querySelector("#screen"),Zt=new Rh,rl=new Rh,al=new $x,Wd=new Rv;Wd.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");const ur=new Jx;ur.setDRACOLoader(Wd);const ln={width:window.innerWidth,height:window.innerHeight};let Ft=new Nt(10,ln.width/ln.height,.1,1e3);const Cn=new Iv(Ft,Hd),Tn=new Lh({canvas:Hd,alpha:!0,antialias:!0,side:Sn}),$y=new I(-.05,-.05,-.05),Jy=new I(.05,.05,.05),Qy=new Dv(Tn,{defaultThickness:.002,defaultColor:new ye(2105376).toArray(),defaultAlpha:1,defaultKeepAlive:!0,defaultVisible:!0});let Ku=new Fx;new Ov(Tn.getContext());let bo=3,ol;const eM=1.35,tM=.45,To=new Ae;let ya,Xn,fi,Ct=new $e,Zu,ll=1e4;const $u=new Pe,Ju=`
    // Set the precision for data types used in this shader
    precision highp float;
    precision highp int;

    // Variables to pass from vertex to fragment shader
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
        vNormal = normal;
        vPosition = position;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
`,Qu=`
    precision highp float;
    precision highp int;

    // Default THREE.js uniforms available to both fragment and vertex shader
    uniform mat4 modelMatrix;

    uniform vec3 colorMap[4];
    uniform float brightnessThresholds[3];
    uniform vec3 lightPosition;

    // Variables passed from vertex to fragment shader
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
        vec3 worldPosition = ( modelMatrix * vec4( vPosition, 1.0 )).xyz;
        vec3 worldNormal = normalize( vec3( modelMatrix * vec4( vNormal, 0.0 ) ) );
        vec3 lightVector = normalize( lightPosition - worldPosition );
        float brightness = dot( worldNormal, lightVector );

        vec4 final;

        if (brightness > brightnessThresholds[0])
            final = vec4(colorMap[0], 1);
        else if (brightness > brightnessThresholds[1])
            final = vec4(colorMap[1], 1);
        else if (brightness > brightnessThresholds[2])
            final = vec4(colorMap[2], 1);
        else
            final = vec4(colorMap[3], 1);

        gl_FragColor = vec4( final );
    }
`,nM=`
    varying vec2 vUv;
    varying vec3 worldPosition;

    void main() {
        vUv = uv; // Pasamos las coordenadas UV al fragment shader
        worldPosition = (modelMatrix * vec4(position, 1.0)).xyz; // Calculamos la posición en el espacio del mundo
        // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position,1.0);

    }
`,iM=`
    varying vec2 vUv;
    varying vec3 worldPosition;

    uniform vec3 baseColor1; // Color superior base
    uniform vec3 baseColor2; // Color medio base
    uniform vec3 baseColor3; // Color inferior base

    void main() {
        vec3 dynamicColor1 = baseColor1 - 0.1 * sin(worldPosition.x + worldPosition.y);
        vec3 dynamicColor2 = baseColor2 - 0.125 * cos(worldPosition.x + worldPosition.y); 
        vec3 dynamicColor3 = baseColor3 - 0.100 * sin(worldPosition.x  * 0.15); // claro

        vec3 gradientColor;

        if (vUv.y < 0.6) {
            gradientColor = mix(dynamicColor3, dynamicColor2, vUv.y * 2.0);
        } else {
            gradientColor = mix(dynamicColor2, dynamicColor1, (vUv.y - 0.6) * 2.0); 
        }

        gl_FragColor = vec4(gradientColor, 1.0); 
    }
`,sM={baseColor1:{value:new ye(7252064)},baseColor2:{value:new ye(11460489)},baseColor3:{value:new ye(13426569)}},rM=new mn({vertexShader:nM,fragmentShader:iM,uniforms:sM}),sa=(o,e)=>Math.random()*(e-o)+o,aM=()=>{ur.load("./ramen.glb",o=>{o.scene.traverse(t=>{var n;if(t.material){const i=new mn({uniforms:{colorMap:{value:[]},brightnessThresholds:{value:[.7,.35,1e-4]},lightPosition:{value:new I(-15,15,10)}},vertexShader:Ju,fragmentShader:Qu});i.uniforms.colorMap.value=eh((n=t.material)==null?void 0:n.name),t.material=i,t.castShadow=!0}});const e=o.animations;ya=new Zx(o.scene),e.forEach(t=>ya.clipAction(t).play()),Zt.add(Ft),Zt.add(o.scene),Zt.position.set(0,.16,0)}),ur.load("ramen2.glb",o=>{Zt.add(o.scene),Zt.position.set(0,.16,0)}),ur.load("ramen3.glb",o=>{Zu=o.scene.children[0],new ci({color:6395219});const e=Zu.geometry.clone();fi=new Ih(e,rM,ll),rl.add(fi),rl.position.set(0,.16,0);for(let t=0;t<=ll;t++){let n,i,s,r;do r=Math.random()*Math.PI*2,s=Math.sqrt(Math.random())*eM,n=s*Math.cos(r),i=s*Math.sin(r);while(s<tM);Ct.position.set(n,-.275,i),Ct.rotation.z=sa(-2,4),Ct.scale.x=sa(.02,.025),Ct.scale.y=sa(.14,.14),Ct.scale.z=sa(.07,.08),Ct.rotation.x=1.5,Ct.updateMatrix(),fi.setMatrixAt(t,Ct.matrix),fi.setColorAt(t,new ye(6395219*Math.cos(t*15e-6)*.02))}}),ur.load("ramen4.glb",o=>{o.scene.traverse(e=>{var t;if(e.material){const n=new mn({uniforms:{colorMap:{value:[]},brightnessThresholds:{value:[.7,.35,1e-4]},lightPosition:{value:new I(-15,15,10)}},vertexShader:Ju,fragmentShader:Qu});n.uniforms.colorMap.value=eh((t=e.material)==null?void 0:t.name),e.material=n,e.castShadow=!0}}),Xn=o.scene,Zt.add(Xn),Zt.position.set(0,.16,0),Xn.visible=!1})},oM=()=>{const o=new gn,e=50,t=new Float32Array(e*3),n=new Float32Array(e);for(let s=0;s<e;s++)new I((Math.random()-.5)*1,Math.random()*.75*2,(Math.random()-.5)*1.5).toArray(t,s*3),n[s]=Math.random(),n[s]=Math.random();o.setAttribute("position",new pt(t,3)),o.setAttribute("aScale",new pt(n,1)),ol=new mn({uniforms:{uTime:{value:0},uPixelRatio:{value:1},uSize:{value:15}},vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent,transparent:!0,blending:wo,depthWrite:!1});const i=new Nh(o,ol);Zt.add(i)},ft=(o,e,t,n)=>[new ye(n),new ye(t),new ye(e),new ye(o)],eh=o=>{const e={_default:ft("#9fd6ea","#c3dbea","#cfe8ef","#ffffff"),Arbusto:ft("#3c6153","#549367","#78b885","#9fc679"),Sombrero:ft("#b08968","#ddb892","#e6ccb2","#eed9c3"),Suelo:ft("#619553","#6ea860","#aedf89","#ccdf89"),Lampara:ft("#137547","#2a9134","#3fa34d","#5bba6f"),Huevo:ft("#feebe2","#feeee7","#e8e8e4","#ffffff"),HuevoYema:ft("#fcac5d","#fcb75d","#fcbc5d","#fcc75d"),Noodles:ft("#eda268","#ffc599","#ffd1ad","#ffdcc2"),Cebolla:ft("#03440c","#036016","#04773b","#058e3f"),CebollaBlanca:ft("#c6edc3","#daf2d7","#e4fde1","#ffffff"),Carne:ft("#ffd4de","#fde7ec","#fbedef","#ffffff"),CarneDecoracion:ft("#a53860","#da627d","#ffb4ac","#fcb9b2"),CarneDecoracion2:ft("#a53860","#da627d","#ffa5ab","#fcb9b2"),PlatoDecoracion:ft("#c9184a","#ff4d6d","#ff758f","#ff8fa3"),Palillo:ft("#d4a276","#e7bc91","#f3d5b5","#ffedd8"),PalilloDecoracion:ft("#6f4518","#8b5e34","#a47148","#bc8a5f"),Totoro:ft("#595959","#7f7f7f","#a5a5a5","#cccccc"),TotoroNariz:ft("#212529","#212529","#212529","#212529"),TotoroPanza:ft("#ffedd8","#ffedd8","#ffedd8","#ffedd8")};return e.hasOwnProperty(o)?e[o]:e._default},lM=()=>{Tn.setSize(ln.width,ln.height),Tn.setPixelRatio(1),Tn.outputEncoding=Ve},cM=()=>{Ft.position.x=7,Ft.position.y=3,Ft.position.z=6,Zt.add(Ft)},uM=()=>{const o=new Nx("#ffffff",1);Zt.add(o);const e=new zh("#ffffff");Zt.add(e),e.position.set(-2,0,1),e.intensity=2},hM=()=>{Cn.enableDamping=!0,Cn.enableZoom=!0,Cn.enablePan=!0,Cn.minPolarAngle=Math.PI/2.8,Cn.maxPolarAngle=Math.PI/2,Cn.minDistance=5,Cn.maxDistance=12},dM=o=>{const e=new Ae(o.clientX/Tn.domElement.clientWidth*2-1,-(o.clientY/Tn.domElement.clientHeight*2-1));al.setFromCamera(e,Ft);const t=al.intersectObjects(Zt.children,!0);t.length>0&&t[0].object.name=="Sphere005_1"&&(Xn.visible?(Xn.visible=!1,cr.pause(),il.style.setProperty("--bg","#b9dcc5")):(sl.style.display="block",Xn.visible=!0,il.style.setProperty("--bg","#414e45"),cr.currentTime=0,cr.play(),cr.loop=!0,Xn.visible&&Gd.to(Ft.position,{duration:3,x:2.25,y:0,z:4,onUpdate:()=>{Ft.lookAt(Xn.position),Ft.updateProjectionMatrix(),Cn.update()}})))},Xd=()=>{requestAnimationFrame(Xd);let o=Ku.getDelta(),e=Ku.elapsedTime;if(ya&&ya.update(o),Qy.render(Zt,Ft),Tn.autoClear=!1,Tn.render(rl,Ft),ol.uniforms.uTime.value=e,Cn.update(),Cn.target.clamp($y,Jy),fi){for(let t=0;t<=ll;t++)fi.getMatrixAt(t,$u),$u.decompose(Ct.position,Ct.rotation,Ct.scale),Ct.rotation.x+=Math.sin(e*bo+t)*.0015,Ct.rotation.y+=Math.sin(e*bo+t)*.0015,Ct.rotation.z+=Math.sin(e*bo+t)*.002,Ct.updateMatrix(),fi.setMatrixAt(t,Ct.matrix);fi.instanceMatrix.needsUpdate=!0}};window.addEventListener("resize",o=>{ln.width=window.innerWidth,ln.height=window.innerHeight,Ft.aspect=ln.width/ln.height,Ft.updateProjectionMatrix(),Tn.setSize(ln.width,ln.height),Tn.setPixelRatio(1),To.x=o.clientX/ln.width*2-1,To.y=-(o.clientY/ln.height)*2+1,al.setFromCamera(To,Ft)});document.addEventListener("mousedown",dM);sl.addEventListener("click",()=>{Xn.visible=!1,cr.pause(),il.style.setProperty("--bg","#aad4b8"),sl.style.display="none"});aM();lM();uM();cM();hM();oM();Xd();
