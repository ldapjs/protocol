'use strict'

const tap = require('tap')
const search = require('./search')

tap.test('exports object', async t => {
  t.type(search, 'Object')
})
