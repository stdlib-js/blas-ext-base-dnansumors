"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(z,f){
var o=require('@stdlib/math-base-assert-is-nan/dist');function l(e,r,i,j){var n,a,s;if(n=0,e<=0)return n;if(a=j,i===0)return o(r[a])?n:r[a]*e;for(s=0;s<e;s++)o(r[a])===!1&&(n+=r[a]),a+=i;return n}f.exports=l
});var d=u(function(A,q){
var x=require('@stdlib/strided-base-stride2offset/dist'),R=t();function _(e,r,i){return R(e,r,i,x(e,i))}q.exports=_
});var p=u(function(B,c){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=d(),O=t();E(m,"ndarray",O);c.exports=m
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=p(),v,y=g(b(__dirname,"./native.js"));h(y)?v=k:v=y;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
