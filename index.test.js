'use strict'

const tap = require('tap')
const protocol = require('./')

tap.test('exports expected object', async t => {
  t.equal(Object.isFrozen(protocol), true);
  ['core', 'operations', 'search'].forEach(component => {
    t.ok(protocol[component])
    t.equal(Object.isFrozen(protocol[component]), true)
  })
})
