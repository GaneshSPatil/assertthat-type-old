# assertthat-type
a simple type check plugin for assertthat testing library.

# Plug-in
```
const assert = require('assertthat');
const assertType = require('assertthat-type');

//plug-in
assert.use(assertType);
```

## Number
Asserts that type of `actual` is Number.

```
assert.that(1).type.is.number();
assert.that(0).type.is.number();
assert.that(-1).type.is.number();
assert.that(23478954345678765456787654).type.is.number();
assert.that(12.33).type.is.number();
```

## String
Asserts that type of `actual` is String.

```
assert.that('').type.is.string();
assert.that('foobar').type.is.string();
```

## Boolean
Asserts that type of `actual` is Boolean.

```
assert.that(true).type.is.boolean();
assert.that(false).type.is.boolean();
```

## Object
Asserts that type of `actual` is Object.

```
assert.that({}).type.is.object();
assert.that(new Object()).type.is.object();
```

## Array
Asserts that type of `actual` is Array.

```
assert.that([]).type.is.array();
assert.that([1, 2, 3]).type.is.array();
```

## Date
Asserts that type of `actual` is Date.

```
assert.that(new Date()).type.is.date();
```

## Function
Asserts that type of `actual` is function.

```
assert.that(() => {}).type.is.function();
assert.that(function(){ return true; }).type.is.function();
```
