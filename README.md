# assertthat-type
a simple type check plugin for assertthat testing library.

# Example
```
const assert = require('assertthat');
const assertType = require('assertthat-type');

//plug-in
assert.use(assertType);

//numeric assertion
assert.that(1).type.is.number();
assert.that(0).type.is.number();
assert.that(-1).type.is.number();
assert.that(23478954345678765456787654).type.is.number();
assert.that(12.33).type.is.number();

//string assertion
assert.that('').type.is.string();
assert.that('foobar').type.is.string();

//boolean assertion
assert.that(true).type.is.boolean();
assert.that(false).type.is.boolean();

//object assertion
assert.that({}).type.is.object();
assert.that(new Object()).type.is.object();

//array assertion
assert.that([]).type.is.array();
assert.that([1, 2, 3]).type.is.array();

//date assertion
assert.that(new Date()).type.is.date();

//function assertion
assert.that(() => {}).type.is.function();
assert.that(function(){ return true; }).type.is.function();

```
