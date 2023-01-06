// npm - global command with node
// npm --version

// local dependency - use it only in this project
// npm i <packageName>

// global dependency - use for any project
// npm install -g <packageName>

// package.json - manifest file 
// manual approach (create packa.json in the root, add properties)
// npm init (step by step)
// npm init -y (all default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)