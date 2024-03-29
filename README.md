# min-delay

![Last version](https://img.shields.io/github/tag/Kikobeats/min-delay.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/min-delay/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/min-delay)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/min-delay.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/min-delay)
[![NPM Status](https://img.shields.io/npm/dm/min-delay.svg?style=flat-square)](https://www.npmjs.org/package/min-delay)

> Wait a minimum quantity of time between consecutive callbacks.

## Install

```bash
$ npm install min-delay --save
```

## Usage

```js
const minDelay = require('min-delay')
const get = require('simple-get')

const delay = minDelay(1000)
const fn = get.concat.bind(get, 'https://kikobeats.com', callback)

function callback (err, res, data) {
  // If the request take more than 1000ms, then the callback is returned
  // otherwise we wait the time until 1000ms
  // For example, if the request take 100ms, we wait 900ms until
  // return the callback.
  if (err) throw err
  console.log(data)
}

delay(fn)
```

## API

### minDelay(delay)

#### input

*Required*<br>
Type: `Number`

Quantity of time to wait before return the callback.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
