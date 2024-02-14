<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ceiln

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a numeric value to the nearest multiple of 10^n toward positive infinity.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-ceiln
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ceiln = require( '@stdlib/math-base-special-ceiln' );
```

#### ceiln( x, n )

Rounds a `numeric` value to the nearest multiple of `10^n` toward positive infinity.

```javascript
// Round a value to 2 decimal places:
var v = ceiln( 3.141592653589793, -2 );
// returns 3.15

// If n = 0, `ceiln` behaves like `ceil`:
v = ceiln( 3.141592653589793, 0 );
// returns 4.0

// Round a value to the nearest thousand:
v = ceiln( 12368.0, 3 );
// returns 13000.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    var x = 0.2 + 0.1;
    // returns 0.30000000000000004

    // Should round to 0.3:
    var v = ceiln( x, -16 );
    // returns 0.3000000000000001
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var ceiln = require( '@stdlib/math-base-special-ceiln' );

var x;
var n;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = ceiln( randu()*5.0, 0 );
    v = ceiln( x, -n );
    console.log( 'x: %d. Number of decimals: %d. Rounded: %d.', x, n, v );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/ceiln.h"
```

#### stdlib_base_ceiln( x, n )

Rounds a double-precision floating-point number to the nearest multiple of `10^n` toward positive infinity.

```c
// Round a value to 2 decimal places:
double y = stdlib_base_ceiln( 3.141592653589793, -2 );
// returns 3.15

// If n = 0, `ceiln` behaves like `ceil`:
double y = stdlib_base_ceiln( 3.141592653589793, 0 );
// returns 4.0

// Round a value to the nearest thousand:
double y = stdlib_base_ceiln( 12368.0, 3 );
// returns 13000.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **n**: `[in] int32_t` integer power of 10.

```c
double stdlib_base_ceiln( const double x, const int32_t n );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/ceiln.h"
#include <stdio.h>

int main() {
    const double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_ceiln( x[ i ], -2 );
        printf( "ceiln(%lf, -2) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/ceil`][@stdlib/math/base/special/ceil]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/ceilb`][@stdlib/math/base/special/ceilb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/floorn`][@stdlib/math/base/special/floorn]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/roundn`][@stdlib/math/base/special/roundn]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number to the nearest multiple of 10^n.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-ceiln.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-ceiln

[test-image]: https://github.com/stdlib-js/math-base-special-ceiln/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-base-special-ceiln/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-ceiln/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-ceiln?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-ceiln.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-ceiln/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-ceiln/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-ceiln/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-ceiln/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-ceiln/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-ceiln/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-ceiln/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-ceiln/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-ceiln/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/ceil]: https://github.com/stdlib-js/math-base-special-ceil

[@stdlib/math/base/special/ceilb]: https://github.com/stdlib-js/math-base-special-ceilb

[@stdlib/math/base/special/floorn]: https://github.com/stdlib-js/math-base-special-floorn

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn

<!-- </related-links> -->

</section>

<!-- /.links -->
