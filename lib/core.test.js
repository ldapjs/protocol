'use strict'

const tap = require('tap')
const core = require('./core')

tap.test('exports object', async t => {
  t.type(core, 'Object')
})
