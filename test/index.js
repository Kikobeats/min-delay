'use strict'

const should = require('should')
const minDelay = require('..')

const DELTA = 20

describe('min-delay', function () {
  it('add minimum delay between consecutive and inmediate calls', function (done) {
    const delay = minDelay(100)
    const start = Date.now()
    delay(function () {
      delay(function () {
        const end = Date.now()
        const time = end - start
        should(time).be.approximately(200, DELTA)
        done()
      })
    })
  })

  it('dont apply delay if consecutive calls take more time than delay', function (done) {
    const delay = minDelay(100)
    const start = Date.now()
    delay(function () {
      setTimeout(function () {
        delay(function () {
          const end = Date.now()
          const time = end - start
          should(time).be.approximately(600, DELTA)
          done()
        })
      }, 500)
    })
  })
})
