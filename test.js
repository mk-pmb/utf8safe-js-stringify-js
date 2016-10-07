/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var data = { dog: "\uD83D\uDC15",             // U+1F415 dog (🐕)
                  ogco: "\uDC15\uD83D",       // half dog, half cow.
                         cow: "\uD83D\uDC04", // U+1F404 cow (🐄)
             badChar: "\uFFFD"                // not an animal
             },

  original_jsStfy  = require('js-stringify'),
  original_packed  = original_jsStfy(data),
  original_encoded = Buffer.from(original_packed, 'UTF-8'),
  original_decoded = original_encoded.toString('UTF-8'),
  original_parsed  = JSON.parse(original_decoded),

  utf8safe_jsStfy = require('utf8safe-js-stringify'),
  utf8safe_packed  = utf8safe_jsStfy(data),
  utf8safe_encoded = Buffer.from(utf8safe_packed, 'UTF-8'),
  utf8safe_decoded = utf8safe_encoded.toString('UTF-8'),
  utf8safe_parsed  = JSON.parse(utf8safe_decoded),

  assert = require('assert'),
  broken;

assert.deepStrictEqual(utf8safe_parsed, data);

broken = Object.assign({}, data);
broken.ogco = data.badChar + data.badChar;

assert.deepStrictEqual(original_parsed, broken);

console.log('+OK test passed');
