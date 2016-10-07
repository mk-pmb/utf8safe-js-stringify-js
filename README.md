
<!--#echo json="package.json" key="name" underline="=" -->
utf8safe-js-stringify
=====================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Generate JS(ON) code that re-creates a JS value (object, string, Date, …) as
verbatim as possible on the other side of a UTF-8 stream.
<!--/#echo -->


The problem: silent data loss
-----------------------------

Some UCS-2 characters cannot be encoded as UTF-8.
When you try to send them over a stream with UTF-8 encoding,
they will usually [be replaced with U+FFFD](test.js) without warning.
After conversion they all look the same,
so this loss of data is irreversible.

A perfect trap setup for sneaky bugs:
As long as all your data is UTF-8, you won't notice this problem.
When you do, maybe because some `.substr()` has split a surrogate pair,
you'll probably dump the "buggy" data over yet another UTF-8 stream,
see U+FFFD, and think it's really about the data.
(Assuming you forgot above lecture by then.)
After all, your browser (or file or whatever) received exactly
the same bytes that were in your debug dump, so you go examine
your data sources…

### Are your programs at risk?

Popular UTF-8 streams include nodejs's `stdin`, `stdout`, `stderr` and
thus `console` in default config. Also its `fs`, `net`, `http` and `https`
modules by default use UTF-8 for their streams.



Usage
-----
Same as [js-stringify](https://github.com/pugjs/js-stringify).

This module really just escapes UTF-8-incompatible characters
(and verbatim U+FFFD) from `js-stringify`'s output:

```javascript
module.exports = require('utf8safe-uhex').conv(require('js-stringify'));
```




<!--#toc stop="scan" -->


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
