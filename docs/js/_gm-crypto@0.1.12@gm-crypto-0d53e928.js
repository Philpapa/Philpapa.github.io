import{_ as S}from"./_to-arraybuffer@1.0.1@to-arraybuffer-11df8309.js";import{_ as F}from"./_buffer@5.7.1@buffer-3f1a9d90.js";import{_ as f}from"./_jsbn@1.1.0@jsbn-569987c9.js";var k=f.exports.BigInteger.prototype.Barrett;function g(t,r){this.x=r,this.q=t}function a(t,r,i,e){this.curve=t,this.x=r,this.y=i,this.z=e==null?f.exports.BigInteger.ONE:e,this.zinv=null}function y(t,r,i){this.q=t,this.a=this.fromBigInteger(r),this.b=this.fromBigInteger(i),this.infinity=new a(this,null,null),this.reducer=new k(this.q)}g.prototype.equals=function(t){return t==this||this.q.equals(t.q)&&this.x.equals(t.x)},g.prototype.toBigInteger=function(){return this.x},g.prototype.negate=function(){return new g(this.q,this.x.negate().mod(this.q))},g.prototype.add=function(t){return new g(this.q,this.x.add(t.toBigInteger()).mod(this.q))},g.prototype.subtract=function(t){return new g(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))},g.prototype.multiply=function(t){return new g(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))},g.prototype.square=function(){return new g(this.q,this.x.square().mod(this.q))},g.prototype.divide=function(t){return new g(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))},a.prototype.getX=function(){this.zinv==null&&(this.zinv=this.z.modInverse(this.curve.q));var t=this.x.toBigInteger().multiply(this.zinv);return this.curve.reduce(t),this.curve.fromBigInteger(t)},a.prototype.getY=function(){this.zinv==null&&(this.zinv=this.z.modInverse(this.curve.q));var t=this.y.toBigInteger().multiply(this.zinv);return this.curve.reduce(t),this.curve.fromBigInteger(t)},a.prototype.equals=function(t){return t==this||(this.isInfinity()?t.isInfinity():t.isInfinity()?this.isInfinity():!!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(f.exports.BigInteger.ZERO)&&t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(f.exports.BigInteger.ZERO))},a.prototype.isInfinity=function(){return this.x==null&&this.y==null||this.z.equals(f.exports.BigInteger.ZERO)&&!this.y.toBigInteger().equals(f.exports.BigInteger.ZERO)},a.prototype.negate=function(){return new a(this.curve,this.x,this.y.negate(),this.z)},a.prototype.add=function(t){if(this.isInfinity())return t;if(t.isInfinity())return this;var r=t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q),i=t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);if(f.exports.BigInteger.ZERO.equals(i))return f.exports.BigInteger.ZERO.equals(r)?this.twice():this.curve.getInfinity();var e=new f.exports.BigInteger("3"),n=this.x.toBigInteger(),o=this.y.toBigInteger(),h=(t.x.toBigInteger(),t.y.toBigInteger(),i.square()),u=h.multiply(i),l=n.multiply(h),s=r.square().multiply(this.z),v=s.subtract(l.shiftLeft(1)).multiply(t.z).subtract(u).multiply(i).mod(this.curve.q),p=l.multiply(e).multiply(r).subtract(o.multiply(u)).subtract(s.multiply(r)).multiply(t.z).add(r.multiply(u)).mod(this.curve.q),m=u.multiply(this.z).multiply(t.z).mod(this.curve.q);return new a(this.curve,this.curve.fromBigInteger(v),this.curve.fromBigInteger(p),m)},a.prototype.twice=function(){if(this.isInfinity())return this;if(this.y.toBigInteger().signum()==0)return this.curve.getInfinity();var t=new f.exports.BigInteger("3"),r=this.x.toBigInteger(),i=this.y.toBigInteger(),e=i.multiply(this.z),n=e.multiply(i).mod(this.curve.q),o=this.curve.a.toBigInteger(),h=r.square().multiply(t);f.exports.BigInteger.ZERO.equals(o)||(h=h.add(this.z.square().multiply(o)));var u=(h=h.mod(this.curve.q)).square().subtract(r.shiftLeft(3).multiply(n)).shiftLeft(1).multiply(e).mod(this.curve.q),l=h.multiply(t).multiply(r).subtract(n.shiftLeft(1)).shiftLeft(2).multiply(n).subtract(h.square().multiply(h)).mod(this.curve.q),s=e.square().multiply(e).shiftLeft(3).mod(this.curve.q);return new a(this.curve,this.curve.fromBigInteger(u),this.curve.fromBigInteger(l),s)},a.prototype.multiply=function(t){if(this.isInfinity())return this;if(t.signum()==0)return this.curve.getInfinity();var r,i=t,e=i.multiply(new f.exports.BigInteger("3")),n=this.negate(),o=this;for(r=e.bitLength()-2;r>0;--r){o=o.twice();var h=e.testBit(r);h!=i.testBit(r)&&(o=o.add(h?this:n))}return o},a.prototype.multiplyTwo=function(t,r,i){var e;e=t.bitLength()>i.bitLength()?t.bitLength()-1:i.bitLength()-1;for(var n=this.curve.getInfinity(),o=this.add(r);e>=0;)n=n.twice(),t.testBit(e)?n=i.testBit(e)?n.add(o):n.add(this):i.testBit(e)&&(n=n.add(r)),--e;return n},y.prototype.getQ=function(){return this.q},y.prototype.getA=function(){return this.a},y.prototype.getB=function(){return this.b},y.prototype.equals=function(t){return t==this||this.q.equals(t.q)&&this.a.equals(t.a)&&this.b.equals(t.b)},y.prototype.getInfinity=function(){return this.infinity},y.prototype.fromBigInteger=function(t){return new g(this.q,t)},y.prototype.reduce=function(t){this.reducer.reduce(t)},y.prototype.decodePointHex=function(t){switch(parseInt(t.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:return null;case 4:case 6:case 7:var r=(t.length-2)/2,i=t.substr(2,r),e=t.substr(r+2,r);return new a(this,this.fromBigInteger(new f.exports.BigInteger(i,16)),this.fromBigInteger(new f.exports.BigInteger(e,16)));default:return null}},y.prototype.encodePointHex=function(t){if(t.isInfinity())return"00";var r=t.getX().toBigInteger().toString(16),i=t.getY().toBigInteger().toString(16),e=this.getQ().toString(16).length;for(e%2!=0&&e++;r.length<e;)r="0"+r;for(;i.length<e;)i="0"+i;return"04"+r+i};var x=function(t,r){return t<<(r%=32)|t>>>32-r};new f.exports.SecureRandom;(function(){var t=new y(new f.exports.BigInteger("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF",16),new f.exports.BigInteger("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC",16),new f.exports.BigInteger("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93",16)),r=t.decodePointHex("0432C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0");return{curve:t,G:r,n:new f.exports.BigInteger("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123",16)}})();var A=[[214,144,233,254,204,225,61,183,22,182,20,194,40,251,44,5],[43,103,154,118,42,190,4,195,170,68,19,38,73,134,6,153],[156,66,80,244,145,239,152,122,51,84,11,67,237,207,172,98],[228,179,28,169,201,8,232,149,128,223,148,250,117,143,63,166],[71,7,167,252,243,115,23,186,131,89,60,25,230,133,79,168],[104,107,129,178,113,100,218,139,248,235,15,75,112,86,157,53],[30,36,14,94,99,88,209,162,37,34,124,59,1,33,120,135],[212,0,70,87,159,211,39,82,76,54,2,231,160,196,200,158],[234,191,138,210,64,199,56,181,163,247,242,206,249,97,21,161],[224,174,93,164,155,52,26,85,173,147,50,48,245,140,177,227],[29,246,226,46,130,102,202,96,192,41,35,171,13,83,78,111],[213,219,55,69,222,253,142,47,3,255,106,114,109,108,91,81],[141,27,175,146,187,221,188,127,17,217,92,65,31,16,90,216],[10,193,49,136,165,205,123,189,45,116,208,18,184,229,180,176],[137,105,151,74,12,150,119,126,101,185,241,9,197,110,198,132],[24,240,125,236,58,220,77,32,121,238,95,62,215,203,57,72]],C=[2746333894,1453994832,1736282519,2993693404],Q=[462357,472066609,943670861,1415275113,1886879365,2358483617,2830087869,3301692121,3773296373,4228057617,404694573,876298825,1347903077,1819507329,2291111581,2762715833,3234320085,3705924337,4177462797,337322537,808926789,1280531041,1752135293,2223739545,2695343797,3166948049,3638552301,4110090761,269950501,741554753,1213159005,1684763257],D=/^[0-9a-f]{32}$/i,Z=function(t){return A[(4026531840&t)>>>28][(251658240&t)>>>24]<<24|A[(15728640&t)>>>20][(983040&t)>>>16]<<16|A[(61440&t)>>>12][(3840&t)>>>8]<<8|A[(240&t)>>>4][(15&t)>>>0]<<0},j=function(t){return(r=Z(t))^x(r,2)^x(r,10)^x(r,18)^x(r,24);var r},H=function(t){var r,i=new Array(36);i[0]=t[0]^C[0],i[1]=t[1]^C[1],i[2]=t[2]^C[2],i[3]=t[3]^C[3];for(var e=new Array(32),n=0;n<32;n++)i[n+4]=i[n]^(r=Z(i[n+1]^i[n+2]^i[n+3]^Q[n]))^x(r,13)^x(r,23),e[n]=i[n+4];return e},R=function(t,r){for(var i=H(r),e=0;e<32;e++)t[e+4]=t[e]^j(t[e+1]^t[e+2]^t[e+3]^i[e]);return[t[35],t[34],t[33],t[32]]},T=function(t,r){for(var i=H(r).reverse(),e=0;e<32;e++)t[e+4]=t[e]^j(t[e+1]^t[e+2]^t[e+3]^i[e]);return[t[35],t[34],t[33],t[32]]},L=function(t){return[t.readInt32BE(0),t.readInt32BE(4),t.readInt32BE(8),t.readInt32BE(12)]},O=function(t){for(var r=F.Buffer.alloc(16),i=0;i<4;i++)r.writeInt32BE(t[i],4*i);return r},N={__proto__:null,constants:{ECB:1,CBC:2},encrypt:function(t,r,i){var e=i||{},n=e.mode,o=e.iv,h=e.outputEncoding;if(typeof t=="string"?t=F.Buffer.from(t,e.inputEncoding||"utf8"):t instanceof ArrayBuffer&&(t=F.Buffer.from(t)),!F.Buffer.isBuffer(t))throw new TypeError('Expected "string" | "Buffer" | "ArrayBuffer" but received "'+Object.prototype.toString.call(t)+'"');if(!D.test(r))throw new TypeError("Invalid value of cipher `key`");if(r=F.Buffer.from(r,"hex"),n===2&&!D.test(o))throw new TypeError("Invalid value of `iv` option");return function(u,l,s,v){s&&(s=L(s)),l=L(l);for(var p=[],m=(u=function(b){var E=16-b.length%16,P=F.Buffer.alloc(E,E);return F.Buffer.concat([b,P],b.length+E)}(u)).length/16,I=0;I<m;I++)if(s){var c=16*I,B=[s[0]^u.readInt32BE(c),s[1]^u.readInt32BE(c+4),s[2]^u.readInt32BE(c+8),s[3]^u.readInt32BE(c+12)],z=R(B,l);p.push(O(z)),s=z.slice(0)}else{var d=16*I,w=[u.readInt32BE(d),u.readInt32BE(d+4),u.readInt32BE(d+8),u.readInt32BE(d+12)],q=R(w,l);p.push(O(q))}var _=F.Buffer.concat(p,u.length);return v?_.toString(v):S(_)}(t,r,o=n===2?F.Buffer.from(o,"hex"):null,h)},decrypt:function(t,r,i){var e=i||{},n=e.mode,o=e.iv,h=e.outputEncoding;if(typeof t=="string"?t=F.Buffer.from(t,e.inputEncoding):t instanceof ArrayBuffer&&(t=F.Buffer.from(t)),!F.Buffer.isBuffer(t))throw new TypeError('Expected "string" | "Buffer" | "ArrayBuffer" but received "'+Object.prototype.toString.call(t)+'"');if(!D.test(r))throw new TypeError("Invalid value of cipher `key`");if(r=F.Buffer.from(r,"hex"),n===2&&!D.test(o))throw new TypeError("Invalid value of `iv` option");return function(u,l,s,v){s&&(s=L(s)),l=L(l);var p=[],m=u.length/16;if(s)for(var I=m-1;I>=0;I--){var c,B=16*I;c=I>0?[u.readInt32BE(B-16),u.readInt32BE(B-16+4),u.readInt32BE(B-16+8),u.readInt32BE(B-16+12)]:s;var z=[u.readInt32BE(B),u.readInt32BE(B+4),u.readInt32BE(B+8),u.readInt32BE(B+12)],d=T(z,l);p.unshift(O([d[0]^c[0],d[1]^c[1],d[2]^c[2],d[3]^c[3]]))}else for(var w=0;w<m;w++){var q=16*w,_=[u.readInt32BE(q),u.readInt32BE(q+4),u.readInt32BE(q+8),u.readInt32BE(q+12)],b=T(_,l);p.push(O(b))}var E=F.Buffer.concat(p,u.length-p[p.length-1][15]);return v?E.toString(v):S(E)}(t,r,o=n===2?F.Buffer.from(o,"hex"):null,h)}};export{N as D};
