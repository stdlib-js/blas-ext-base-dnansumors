/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnan = require( '@stdlib/math-base-assert-is-nan' );


// MAIN //

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} stride - stride length
* @returns {number} sum
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
* var N = x.length;
*
* var v = dnansumors( N, x, 1 );
* // returns 1.0
*/
function dnansumors( N, x, stride ) {
	var sum;
	var ix;
	var i;

	sum = 0.0;
	if ( N <= 0 ) {
		return sum;
	}
	if ( N === 1 || stride === 0 ) {
		if ( isnan( x[ 0 ] ) ) {
			return sum;
		}
		return x[ 0 ];
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	for ( i = 0; i < N; i++ ) {
		if ( isnan( x[ ix ] ) === false ) {
			sum += x[ ix ];
		}
		ix += stride;
	}
	return sum;
}


// EXPORTS //

module.exports = dnansumors;
