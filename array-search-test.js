var search = require('./array-search')
  , assert = require('assert')

assert.deepEqual(['a'], search('a', ['a']))
assert.deepEqual([], search('b', ['a']))
assert.deepEqual(['myles'], search('my', ['bob','myles']))

console.log('OK')
