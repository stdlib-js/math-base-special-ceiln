"use strict";var E=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var N=E(function(l,n){
var t=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-assert-is-infinite/dist'),v=require('@stdlib/math-base-special-pow/dist'),_=require('@stdlib/math-base-special-abs/dist'),q=require('@stdlib/math-base-special-ceil/dist'),I=require('@stdlib/constants-float64-max-safe-integer/dist'),s=require('@stdlib/constants-float64-max-base10-exponent/dist'),M=require('@stdlib/constants-float64-min-base10-exponent/dist'),X=require('@stdlib/constants-float64-min-base10-exponent-subnormal/dist'),c=require('@stdlib/constants-float64-pinf/dist'),A=I+1,f=1e308;function o(e,r){var i,u;return t(e)||t(r)||a(r)?NaN:a(e)||e===0||r<X||_(e)>A&&r<=0?e:r>s?e<=0?-0:c:r<M?(i=v(10,-(r+s)),u=e*f*i,a(u)?e:q(u)/f/i):(i=v(10,-r),u=e*i,a(u)?e:q(u)/i)}n.exports=o
});var P=N();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
