
<!--#echo json="package.json" key="name" underline="=" -->
utf8safe-js-stringify
=====================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Generate JS code that re-creates a JS object as verbatim as possible on the
other side of a UTF-8 stream.
<!--/#echo -->


Usage
-----
Same as [js-stringify](https://github.com/pugjs/js-stringify).

This module really just escapes UTF-8-incompatible characters from
`js-stringify`'s output:

```javascript
module.exports = require('utf8safe-uhex').conv(require('js-stringify'));
```




<!--#toc stop="scan" -->


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
