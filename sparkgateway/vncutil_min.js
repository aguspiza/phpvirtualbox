function DesCipher(n){function C(f,e,c){for(var d=0,a=0,b=0,g=0,k=0,p=Array(56),u=Array(56),l=Array(32),a=0;56>a;++a)b=v[a],g=b&7,p[a]=0!=(f[b>>>3]&D[g])?1:0;for(d=0;16>d;++d){g=e?d<<1:15-d<<1;k=g+1;for(a=l[g]=l[k]=0;28>a;++a)b=a+q[d],u[a]=28>b?p[b]:p[b-28];for(a=28;56>a;++a)b=a+q[d],u[a]=56>b?p[b]:p[b-28];for(a=0;24>a;++a)0!=u[A[a]]&&(l[g]|=E[a]),0!=u[A[a+24]]&&(l[k]|=E[a])}for(a=d=b=b=a=d=e=f=0;16>b;++b)f=l[d++],e=l[d++],c[a]=(f&16515072)<<6,c[a]|=(f&4032)<<10,c[a]|=(e&16515072)>>>10,c[a]|=(e&4032)>>>
6,++a,c[a]=(f&258048)<<12,c[a]|=(f&63)<<16,c[a]|=(e&258048)>>>4,c[a]|=e&63,++a}function F(f,c,h){for(var d=0,a=0,b=0,g=0,k=0,p=0,g=f[0],b=f[1],a=(g>>>4^b)&252645135,b=b^a,g=g^a<<4,a=(g>>>16^b)&65535,b=b^a,g=g^a<<16,a=(b>>>2^g)&858993459,g=g^a,b=b^a<<2,a=(b>>>8^g)&16711935,g=g^a,b=b^a<<8,b=b<<1|b>>>31&1,a=(g^b)&2863311530,g=g^a,b=b^a,g=g<<1|g>>>31&1,k=0;8>k;++k)a=b<<28|b>>>4,a^=h[p++],d=I[a&63],d|=J[a>>>8&63],d|=G[a>>>16&63],d|=w[a>>>24&63],a=b^h[p++],d|=K[a&63],d|=L[a>>>8&63],d|=H[a>>>16&63],d|=r[a>>>
24&63],g^=d,a=g<<28|g>>>4,a^=h[p++],d=I[a&63],d|=J[a>>>8&63],d|=G[a>>>16&63],d|=w[a>>>24&63],a=g^h[p++],d|=K[a&63],d|=L[a>>>8&63],d|=H[a>>>16&63],d|=r[a>>>24&63],b^=d;b=b<<31|b>>>1;a=(g^b)&2863311530;g^=a;b^=a;g=g<<31|g>>>1;a=(g>>>8^b)&16711935;b^=a;g^=a<<8;a=(g>>>2^b)&858993459;b^=a;g^=a<<2;a=(b>>>16^g)&65535;g^=a;b^=a<<16;a=(b>>>4^g)&252645135;c[0]=b^a<<4;c[1]=g^a}function B(c,e,h,d,a){for(var b=0;b<a;++b)h[d+b]=(c[e+4*b]&255)<<24|(c[e+4*b+1]&255)<<16|(c[e+4*b+2]&255)<<8|c[e+4*b+3]&255}function x(c,
e,h,d,a){for(var b=0;b<a;++b)h[d+4*b]=c[e+b]>>>24&255,h[d+4*b+1]=c[e+b]>>>16&255,h[d+4*b+2]=c[e+b]>>>8&255,h[d+4*b+3]=c[e+b]&255}var D=[1,2,4,8,16,32,64,128],E=[8388608,4194304,2097152,1048576,524288,262144,131072,65536,32768,16384,8192,4096,2048,1024,512,256,128,64,32,16,8,4,2,1],v=[56,48,40,32,24,16,8,0,57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,60,52,44,36,28,20,12,4,27,19,11,3],q=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],A=[13,16,
10,23,0,4,2,27,14,5,20,9,22,18,11,3,25,7,15,6,26,19,12,1,40,51,30,36,46,54,29,39,50,44,32,47,43,48,38,55,33,52,45,41,49,35,28,31],w=[16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,
1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756],r=[2148565024,2147516416,32768,1081376,1048576,32,2148532256,2147516448,2147483680,2148565024,2148564992,2147483648,2147516416,1048576,32,2148532256,1081344,1048608,2147516448,0,2147483648,32768,1081376,2148532224,1048608,2147483680,0,1081344,32800,2148564992,2148532224,32800,0,1081376,2148532256,1048576,2147516448,2148532224,2148564992,32768,2148532224,2147516416,32,2148565024,1081376,32,32768,2147483648,32800,2148564992,1048576,
2147483680,1048608,2147516448,2147483680,1048608,1081344,0,2147516416,32800,2147483648,2148532256,2148565024,1081344],G=[520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,
134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584],H=[8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928],J=[256,34078976,
34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,
33554688,1073742080,524288,0,1074266112,34078976,1073742080],L=[536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,
4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312],I=[2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,
69206016,2048,67108866,67110912,2048,2097154],K=[268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,
4160,4160,262208,268435456,268701696],y=Array(32);y[0]=0;var z=Array(32);z[0]=0;this.setKey=function(c){C(c,!0,y);C(c,!1,z)};this.setKey(n);var c=[0,0];this.encrypt=function(f,e,h,d){B(f,e,c,0,2);F(c,c,y);x(c,0,h,d,2)};this.decrypt=function(f,e,h,d){B(f,e,c,0,2);F(c,c,z);x(c,0,h,d,2)}}
function TINF(){function n(){this.table=Array(16);this.table[0]=0;this.trans=Array(288);this.trans[0]=0}function C(){this.source="";this.bitcount=this.tag=this.sourceIndex=0;this.dest=Array(4096);this.destIndex=this.dest[0]=0;this.history=[0];this.history.length=0;this.ltree=new n;this.dtree=new n;this.status=0}function F(c,f,e,h){var d;for(d=0;d<e;++d)c[d]=0;for(d=0;d<30-e;++d)c[d+e]=Math.floor(d/e);e=h;for(d=0;30>d;++d)f[d]=e,e+=1<<c[d]}function B(c,f,e,h){var d=L,a,b;for(a=0;16>a;++a)c.table[a]=
0;for(a=0;a<h;++a)c.table[f[e+a]]++;for(a=b=c.table[0]=0;16>a;++a)d[a]=b,b+=c.table[a];for(a=0;a<h;++a)f[e+a]&&(c.trans[d[f[e+a]]++]=a)}function x(c,f,e){if(!f)return e;for(var h=0;24>c.bitcount;)c.tag|=c.source[c.sourceIndex++]<<c.bitcount,c.bitcount+=8;h=c.tag&65535>>16-f;c.tag>>=f;c.bitcount-=f;return h+e}function D(c,f){for(;16>c.bitcount;)c.tag|=c.source[c.sourceIndex++]<<c.bitcount,c.bitcount+=8;var e=0,h=0,d=0;do h=2*h+((c.tag&1<<d)>>d),++d,e+=f.table[d],h-=f.table[d];while(0<=h);c.tag>>=d;
c.bitcount-=d;return f.trans[e+h]}function E(c,f,e){for(var h=c.dest,d=c.destIndex,a=c.history;;){var b=D(c,f);if(256==b)break;if(256>b)h[d++]=b,a.push(b);else{var g,k,b=b-257,b=x(c,w[b],r[b]);g=D(c,e);for(k=g=a.length-x(c,G[g],H[g]);k<g+b;++k)h[d++]=a[k],a.push(c.history[k])}}c.destIndex=d;return v.OK}this.OK=0;this.DATA_ERROR=-3;var v=this,q=new n,A=new n,w=Array(30),r=Array(30),G=Array(30),H=Array(30),J=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],L=Array(16),I=new n,K=Array(320),y=new C,z=
0;this.reset=function(){y=new C;z=0};this.init=function(c){var f;for(f=0;7>f;++f)q.table[f]=0;q.table[7]=24;q.table[8]=152;q.table[9]=112;for(f=0;24>f;++f)q.trans[f]=256+f;for(f=0;144>f;++f)q.trans[24+f]=f;for(f=0;8>f;++f)q.trans[168+f]=280+f;for(f=0;112>f;++f)q.trans[176+f]=144+f;for(f=0;5>f;++f)A.table[f]=0;A.table[5]=32;for(f=0;32>f;++f)A.trans[f]=f;F(w,r,4,3);F(G,H,2,1);w[28]=0;r[28]=258;this.reset();c&&(z=c)};this.getHistory=function(){return y.history};this.setHistory=function(c){y.history=
c};this.uncompress=function(c,f){var e=y,h;e.source=c;e.sourceIndex=f;e.bitcount=0;e.destIndex=0;z||(z=x(e,16,0));var d=0;do{var a;h=e;a=void 0;h.bitcount--||(h.tag=h.source[h.sourceIndex++]&255,h.bitcount=7);a=h.tag&1;h.tag>>=1;h=a;switch(x(e,2,0)){case 0:a=e;var b=void 0,g=void 0,b=0,k=a.source,p=a.history,u=a.dest,l=a.destIndex;7<a.bitcount&&(a.sourceIndex-=Math.floor(a.bitcount/8),a.bitcount=0,a.tag=0);b=k[a.sourceIndex+1];b=256*b+k[a.sourceIndex];g=k[a.sourceIndex+3];g=256*g+k[a.sourceIndex+
2];if(b!=(~g&65535))a=v.DATA_ERROR;else{for(a.sourceIndex+=4;b;--b)p.push(k[a.sourceIndex]),u[l++]=k[a.sourceIndex++];a.bitcount=0;a.destIndex=l;a=v.OK}break;case 1:a=E(e,q,A);break;case 2:a=e;for(var k=e.ltree,p=e.dtree,u=I,l=K,t=g=b=void 0,m=void 0,m=t=void 0,n=x,w=D,b=n(a,5,257),g=n(a,5,1),t=n(a,4,4),m=0;19>m;++m)l[m]=0;for(m=0;m<t;++m){var r=n(a,3,0);l[J[m]]=r}B(u,l,0,19);for(t=0;t<b+g;)switch(m=w(a,u),m){case 16:r=l[t-1];for(m=n(a,2,3);m;--m)l[t++]=r;break;case 17:for(m=n(a,3,3);m;--m)l[t++]=
0;break;case 18:for(m=n(a,7,11);m;--m)l[t++]=0;break;default:l[t++]=m}B(k,l,0,b);B(p,l,b,g);a=E(e,e.ltree,e.dtree);break;default:return e.status=v.DATA_ERROR,e}if(a!=v.OK)return e.status=v.DATA_ERROR,e;d++}while(!h&&e.sourceIndex<e.source.length);e.history=e.history.slice(-32768);e.status=v.OK;return e}};
