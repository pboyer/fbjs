/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule hyphenate
 * @typechecks
 */

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(str) {
  let result = "";

  // convert every uppercase letter to lower and prefix with a dash
  for (let i = 0, l = str.length; i < l; i++) {
    const cc = str.charCodeAt(i);
    if (cc > 64 && cc < 91) {
      result += "-";
      result += String.fromCharCode(cc + 32); // convert charcode to uppercase
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = hyphenate;
