import{g as G}from"./_@antv_x6-common@2.0.17@@antv-5f61d1c3.js";import{_ as x,a as M}from"./_babel-runtime@6.26.0@babel-runtime-ff8b37cd.js";var H=/%[sdj%]/g;function q(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=1,f=r[0],i=r.length;if(typeof f=="function")return f.apply(null,r.slice(1));if(typeof f=="string"){for(var a=String(f).replace(H,function(l){if(l==="%%")return"%";if(n>=i)return l;switch(l){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch{return"[Circular]"}break;default:return l}}),p=r[n];n<i;p=r[++n])a+=" "+p;return a}return f}function I(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="pattern"}function y(e,r){return!!(e==null||r==="array"&&Array.isArray(e)&&!e.length||I(r)&&typeof e=="string"&&!e)}function Q(e,r,t){var n=[],f=0,i=e.length;function a(p){n.push.apply(n,p),f++,f===i&&t(n)}e.forEach(function(p){r(p,a)})}function U(e,r,t){var n=0,f=e.length;function i(a){if(a&&a.length){t(a);return}var p=n;n=n+1,p<f?r(e[p],i):t([])}i([])}function W(e){var r=[];return Object.keys(e).forEach(function(t){r.push.apply(r,e[t])}),r}function X(e,r,t,n){if(r.first){var f=W(e);return U(f,t,n)}var i=r.firstFields||[];i===!0&&(i=Object.keys(e));var a=Object.keys(e),p=a.length,l=0,g=[],h=function(v){g.push.apply(g,v),l++,l===p&&n(g)};a.forEach(function(b){var v=e[b];i.indexOf(b)!==-1?U(v,t,h):Q(v,t,h)})}function Z(e){return function(r){return r&&r.message?(r.field=r.field||e.fullField,r):{message:r,field:r.field||e.fullField}}}function z(e,r){if(r){for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];(typeof n>"u"?"undefined":x(n))==="object"&&x(e[t])==="object"?e[t]=M({},e[t],n):e[t]=n}}return e}function B(e,r,t,n,f,i){e.required&&(!t.hasOwnProperty(e.field)||y(r,i||e.type))&&n.push(q(f.messages.required,e.fullField))}function k(e,r,t,n,f){(/^\s+$/.test(r)||r==="")&&n.push(q(f.messages.whitespace,e.fullField))}var D={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},N={integer:function(r){return N.number(r)&&parseInt(r,10)===r},float:function(r){return N.number(r)&&!N.integer(r)},array:function(r){return Array.isArray(r)},regexp:function(r){if(r instanceof RegExp)return!0;try{return!!new RegExp(r)}catch{return!1}},date:function(r){return typeof r.getTime=="function"&&typeof r.getMonth=="function"&&typeof r.getYear=="function"},number:function(r){return isNaN(r)?!1:typeof r=="number"},object:function(r){return(typeof r>"u"?"undefined":x(r))==="object"&&!N.array(r)},method:function(r){return typeof r=="function"},email:function(r){return typeof r=="string"&&!!r.match(D.email)&&r.length<255},url:function(r){return typeof r=="string"&&!!r.match(D.url)},hex:function(r){return typeof r=="string"&&!!r.match(D.hex)}};function ee(e,r,t,n,f){if(e.required&&r===void 0){B(e,r,t,n,f);return}var i=["integer","float","array","regexp","object","method","email","number","date","url","hex"],a=e.type;i.indexOf(a)>-1?N[a](r)||n.push(q(f.messages.types[a],e.fullField,e.type)):a&&(typeof r>"u"?"undefined":x(r))!==e.type&&n.push(q(f.messages.types[a],e.fullField,e.type))}function re(e,r,t,n,f){var i=typeof e.len=="number",a=typeof e.min=="number",p=typeof e.max=="number",l=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,g=r,h=null,b=typeof r=="number",v=typeof r=="string",$=Array.isArray(r);if(b?h="number":v?h="string":$&&(h="array"),!h)return!1;$&&(g=r.length),v&&(g=r.replace(l,"_").length),i?g!==e.len&&n.push(q(f.messages[h].len,e.fullField,e.len)):a&&!p&&g<e.min?n.push(q(f.messages[h].min,e.fullField,e.min)):p&&!a&&g>e.max?n.push(q(f.messages[h].max,e.fullField,e.max)):a&&p&&(g<e.min||g>e.max)&&n.push(q(f.messages[h].range,e.fullField,e.min,e.max))}var P="enum";function ne(e,r,t,n,f){e[P]=Array.isArray(e[P])?e[P]:[],e[P].indexOf(r)===-1&&n.push(q(f.messages[P],e.fullField,e[P].join(", ")))}function te(e,r,t,n,f){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(q(f.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var i=new RegExp(e.pattern);i.test(r)||n.push(q(f.messages.pattern.mismatch,e.fullField,r,e.pattern))}}}const d={required:B,whitespace:k,type:ee,range:re,enum:ne,pattern:te};function ie(e,r,t,n,f){var i=[],a=e.required||!e.required&&n.hasOwnProperty(e.field);if(a){if(y(r,"string")&&!e.required)return t();d.required(e,r,n,i,f,"string"),y(r,"string")||(d.type(e,r,n,i,f),d.range(e,r,n,i,f),d.pattern(e,r,n,i,f),e.whitespace===!0&&d.whitespace(e,r,n,i,f))}t(i)}function fe(e,r,t,n,f){var i=[],a=e.required||!e.required&&n.hasOwnProperty(e.field);if(a){if(y(r)&&!e.required)return t();d.required(e,r,n,i,f),r!==void 0&&d.type(e,r,n,i,f)}t(i)}function ae(e,r,t,n,f){var i=[],a=e.required||!e.required&&n.hasOwnProperty(e.field);if(a){if(y(r)&&!e.required)return t();d.required(e,r,n,i,f),r!==void 0&&(d.type(e,r,n,i,f),d.range(e,r,n,i,f))}t(i)}function se(e,r,t,n,f){var i=[],a=e.required||!e.required&&n.hasOwnProperty(e.field);if(a){if(y(r)&&!e.required)return t();d.required(e,r,n,i,f),r!==void 0&&d.type(e,r,n,i,f)}t(i)}function de(e,r,t,n,f){var i=[],a=e.required||!e.required&&n.hasOwnProperty(e.field);if(a){if(y(r)&&!e.required)return t();d.required(e,r,n,i,f),y(r)||d.type(e,r,n,i,f)}t(i)}function oe(e,r,t,n,f){var i=[],a=e.required||!e.required&&n.hasOwnProperty(e.field);if(a){if(y(r)&&!e.required)return t();d.required(e,r,n,i,f),r!==void 0&&(d.type(e,r,n,i,f),d.range(e,r,n,i,f))}t(i)}function pe(e,r,t,n,f){var i=[],a=e.required||!e.required&&n.hasOwnProperty(e.field);if(a){if(y(r)&&!e.required)return t();d.required(e,r,n,i,f),r!==void 0&&(d.type(e,r,n,i,f),d.range(e,r,n,i,f))}t(i)}function ye(e,r,t,n,f){var i=[],a=e.required||!e.required&&n.hasOwnProperty(e.field);if(a){if(y(r,"array")&&!e.required)return t();d.required(e,r,n,i,f,"array"),y(r,"array")||(d.type(e,r,n,i,f),d.range(e,r,n,i,f))}t(i)}function ue(e,r,t,n,f){var i=[],a=e.required||!e.required&&n.hasOwnProperty(e.field);if(a){if(y(r)&&!e.required)return t();d.required(e,r,n,i,f),r!==void 0&&d.type(e,r,n,i,f)}t(i)}var ge="enum";function me(e,r,t,n,f){var i=[],a=e.required||!e.required&&n.hasOwnProperty(e.field);if(a){if(y(r)&&!e.required)return t();d.required(e,r,n,i,f),r&&d[ge](e,r,n,i,f)}t(i)}function he(e,r,t,n,f){var i=[],a=e.required||!e.required&&n.hasOwnProperty(e.field);if(a){if(y(r,"string")&&!e.required)return t();d.required(e,r,n,i,f),y(r,"string")||d.pattern(e,r,n,i,f)}t(i)}function ce(e,r,t,n,f){var i=[],a=e.required||!e.required&&n.hasOwnProperty(e.field);if(a){if(y(r)&&!e.required)return t();if(d.required(e,r,n,i,f),!y(r)){var p=void 0;typeof r=="number"?p=new Date(r):p=r,d.type(e,p,n,i,f),p&&d.range(e,p.getTime(),n,i,f)}}t(i)}function qe(e,r,t,n,f){var i=[],a=Array.isArray(r)?"array":typeof r>"u"?"undefined":x(r);d.required(e,r,n,i,f,a),t(i)}function V(e,r,t,n,f){var i=e.type,a=[],p=e.required||!e.required&&n.hasOwnProperty(e.field);if(p){if(y(r,i)&&!e.required)return t();d.required(e,r,n,a,f,i),y(r,i)||d.type(e,r,n,a,f)}t(a)}const _={string:ie,method:fe,number:ae,boolean:se,regexp:de,integer:oe,float:pe,array:ye,object:ue,enum:me,pattern:he,date:ce,url:V,hex:V,email:V,required:qe};function C(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var r=JSON.parse(JSON.stringify(this));return r.clone=this.clone,r}}}var J=C();function T(e){this.rules=null,this._messages=J,this.define(e)}T.prototype={messages:function(r){return r&&(this._messages=z(C(),r)),this._messages},define:function(r){if(!r)throw new Error("Cannot configure a schema with no rules");if((typeof r>"u"?"undefined":x(r))!=="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={};var t=void 0,n=void 0;for(t in r)r.hasOwnProperty(t)&&(n=r[t],this.rules[t]=Array.isArray(n)?n:[n])},validate:function(r){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=arguments[2],i=r,a=n,p=f;if(typeof a=="function"&&(p=a,a={}),!this.rules||Object.keys(this.rules).length===0){p&&p();return}function l(o){var m=void 0,s=void 0,c=[],O={};function j(F){Array.isArray(F)?c=c.concat.apply(c,F):c.push(F)}for(m=0;m<o.length;m++)j(o[m]);if(!c.length)c=null,O=null;else for(m=0;m<c.length;m++)s=c[m].field,O[s]=O[s]||[],O[s].push(c[m]);p(c,O)}if(a.messages){var g=this.messages();g===J&&(g=C()),z(g,a.messages),a.messages=g}else a.messages=this.messages();var h=void 0,b=void 0,v={},$=a.keys||Object.keys(this.rules);$.forEach(function(o){h=t.rules[o],b=i[o],h.forEach(function(m){var s=m;typeof s.transform=="function"&&(i===r&&(i=M({},i)),b=i[o]=s.transform(b)),typeof s=="function"?s={validator:s}:s=M({},s),s.validator=t.getValidationMethod(s),s.field=o,s.fullField=s.fullField||o,s.type=t.getType(s),s.validator&&(v[o]=v[o]||[],v[o].push({rule:s,value:b,source:i,field:o}))})});var K={};X(v,a,function(o,m){var s=o.rule,c=(s.type==="object"||s.type==="array")&&(x(s.fields)==="object"||x(s.defaultField)==="object");c=c&&(s.required||!s.required&&o.value),s.field=o.field;function O(E,u){return M({},u,{fullField:s.fullField+"."+E})}function j(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=E;if(Array.isArray(u)||(u=[u]),u.length,u.length&&s.message&&(u=[].concat(s.message)),u=u.map(Z(s)),a.first&&u.length)return K[s.field]=1,m(u);if(!c)m(u);else{if(s.required&&!o.value)return s.message?u=[].concat(s.message).map(Z(s)):a.error?u=[a.error(s,q(a.messages.required,s.field))]:u=[],m(u);var w={};if(s.defaultField)for(var L in o.value)o.value.hasOwnProperty(L)&&(w[L]=s.defaultField);w=M({},w,o.rule.fields);for(var A in w)if(w.hasOwnProperty(A)){var Y=Array.isArray(w[A])?w[A]:[w[A]];w[A]=Y.map(O.bind(null,A))}var S=new T(w);S.messages(a.messages),o.rule.options&&(o.rule.options.messages=a.messages,o.rule.options.error=a.error),S.validate(o.value,o.rule.options||a,function(R){m(R&&R.length?u.concat(R):R)})}}var F=s.validator(s,o.value,j,o.source,a);F&&F.then&&F.then(function(){return j()},function(E){return j(E)})},function(o){l(o)})},getType:function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!_.hasOwnProperty(r.type))throw new Error(q("Unknown rule type %s",r.type));return r.type||"string"},getValidationMethod:function(r){if(typeof r.validator=="function")return r.validator;var t=Object.keys(r),n=t.indexOf("message");return n!==-1&&t.splice(n,1),t.length===1&&t[0]==="required"?_.required:_[this.getType(r)]||!1}};T.register=function(r,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");_[r]=t};T.messages=J;const ve=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),we=G(ve);export{we as r};
