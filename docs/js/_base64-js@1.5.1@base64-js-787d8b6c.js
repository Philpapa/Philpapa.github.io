var x={};x.byteLength=p;x.toByteArray=C;x.fromByteArray=i;var c=[],F=[],l=typeof Uint8Array<"u"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var d=0,u=s.length;d<u;++d)c[d]=s[d],F[s.charCodeAt(d)]=d;F["-".charCodeAt(0)]=62;F["_".charCodeAt(0)]=63;function A(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var a=r.indexOf("=");a===-1&&(a=e);var o=a===e?0:4-a%4;return[a,o]}function p(r){var e=A(r),a=e[0],o=e[1];return(a+o)*3/4-o}function y(r,e,a){return(e+a)*3/4-a}function C(r){var e,a=A(r),o=a[0],n=a[1],t=new l(y(r,o,n)),v=0,f=n>0?o-4:o,h;for(h=0;h<f;h+=4)e=F[r.charCodeAt(h)]<<18|F[r.charCodeAt(h+1)]<<12|F[r.charCodeAt(h+2)]<<6|F[r.charCodeAt(h+3)],t[v++]=e>>16&255,t[v++]=e>>8&255,t[v++]=e&255;return n===2&&(e=F[r.charCodeAt(h)]<<2|F[r.charCodeAt(h+1)]>>4,t[v++]=e&255),n===1&&(e=F[r.charCodeAt(h)]<<10|F[r.charCodeAt(h+1)]<<4|F[r.charCodeAt(h+2)]>>2,t[v++]=e>>8&255,t[v++]=e&255),t}function L(r){return c[r>>18&63]+c[r>>12&63]+c[r>>6&63]+c[r&63]}function g(r,e,a){for(var o,n=[],t=e;t<a;t+=3)o=(r[t]<<16&16711680)+(r[t+1]<<8&65280)+(r[t+2]&255),n.push(L(o));return n.join("")}function i(r){for(var e,a=r.length,o=a%3,n=[],t=16383,v=0,f=a-o;v<f;v+=t)n.push(g(r,v,v+t>f?f:v+t));return o===1?(e=r[a-1],n.push(c[e>>2]+c[e<<4&63]+"==")):o===2&&(e=(r[a-2]<<8)+r[a-1],n.push(c[e>>10]+c[e>>4&63]+c[e<<2&63]+"=")),n.join("")}export{x as _};
