'use strict'

const delay = require('lodash.delay')

function hasPassedEnoughTime (currentDelay, delay) {
  return currentDelay >= delay
}

function minDelay (delay) {
  let start = Date.now()

  function resolveDelay (fn) {
    start = Date.now()
    return fn()
  }

  function constantDelay (fn) {
    const end = Date.now()
    const currentDelay = end - start
    if (hasPassedEnoughTime(currentDelay, delay)) return resolveDelay(fn)

    const remainDelay = delay - currentDelay
    return delay(resolveDelay, remainDelay, fn)
  }

  return constantDelay
}

module.exports = minDelay
