'use strict'

const path = require('path')
const fs = require('fs')

const componentsPath = path.join(__dirname, 'lib')
const components = fs.readdirSync(componentsPath)

const protocol = {}

for (const component of components) {
  if (component.endsWith('test.js')) continue

  protocol[path.basename(component, '.js')] = Object.freeze(
    require(path.join(componentsPath, component))
  )
}

module.exports = Object.freeze(protocol)
