var test = require('tape')
var fwitch = require('./')

test(function (t) {
  t.equal(fwitch([
    [false, 23],
    [true, 'two']
  ]), 'two')
  t.equal(fwitch([
    [false, 23],
    [5 === 7, 'two'],
    [0 + 1, function () { return 38 }]
  ]), 38)

  t.equal(fwitch('banana', {
    uva: 'three',
    banana: 'two'
  }), 'two')

  t.equal(fwitch('maçã', {
    uva: 'three',
    banana: 'two',
    default: function () {}
  }), undefined)

  t.end()
})

