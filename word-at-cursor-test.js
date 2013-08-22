var wacp = require('./word-at-cursor')
  , assert = require('assert')

assert(wacp.isWordChar('a'))
assert(wacp.isWordChar('A'))
assert(!wacp.isWordChar(' '))

assert.equal(wacp('', 0), null)
assert.equal(wacp('a', 0), 'a')
assert.equal(wacp('aa', 0), 'aa')
assert.equal(wacp('aa', 1), 'aa')
assert.equal(wacp('aa', 2), 'aa')
assert.equal(wacp('aa ', 3), null)
assert.equal(wacp('aa b', 0), 'aa')
assert.equal(wacp('aa bb cc', 4), 'bb')

assert.equal(wacp('hello world', 5), 'hello')
assert.equal(wacp('hello  world', 6), null)
assert.equal(wacp('hello   world', 6), null)
assert.equal(wacp('hello   world', 7), null)
assert.equal(wacp(['h','e','l','l','o',' ',' ',' ','w','o','r','l','d'].join(''), 7), null)
//                                          ^

console.log('OK')
