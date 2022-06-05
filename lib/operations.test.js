'use strict'

const tap = require('tap')
const operations = require('./operations')

tap.test('exports object', async t => {
  t.type(operations, 'Object')
})
