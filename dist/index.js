"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var o=t(function(A,q){
var v=require('@stdlib/math-base-assert-is-nan/dist');function R(e,r,a,j){var u,i,s,n;if(e<=0)return 0;if(i=j,a===0)return v(r[i])?0:r[i]*e;for(n=0;n<e&&(s=r[i],v(s)!==!1);n++)i+=a;if(n===e)return 0;for(u=s,i+=a,n+=1;n<e;n++)v(r[i])===!1&&(u+=r[i]),i+=a;return u}q.exports=R
});var c=t(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=o();function k(e,r,a){return b(e,r,a,_(e,a))}m.exports=k
});var y=t(function(C,p){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),E=o();x(d,"ndarray",E);p.exports=d
});var O=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=y(),f,l=g(O(__dirname,"./native.js"));h(l)?f=w:f=l;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
