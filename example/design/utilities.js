var util = require('gr8-util')

var options = {
  colors: {
    white: '#fff',
    grey_25: '#ccc',
    grey_50: '#999',
    grey_75: '#666',
    black: '#111',
    pink: '#ffe5e5',
    pinker: '#f77'
  }
}

var utils = []

utils.push({
  prop: { 'bg': 'background-color' },
  join: '-',
  vals: options.colors
})

utils.push({
  prop: { '': 'color' },
  join: '',
  vals: options.colors
})

utils.push({
  prop: { 'b': 'border-color' },
  join: '--',
  vals: options.colors
})

var style = utils.map(item => util(item)).join('\n')

module.exports = style
