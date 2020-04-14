/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule hyphenateStyleName
 * @typechecks
 */

'use strict';

const hyphenate = require('hyphenate');

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms-` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(str) {
  const result = hyphenate(str);

  // convert "ms-" prefix to "-ms-"
  if (result.length > 2 && result[0] === "m" && result[1] === "s" && result[2] === "-") {
    return "-" + result;
  }

  return result;
}

module.exports = hyphenateStyleName;
