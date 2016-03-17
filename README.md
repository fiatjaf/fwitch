```javascript
const fwitch = require('fwitch')

fwitch([
  [false, 23],
  [true, 'two']
]) === 'two'

fwitch([
  [false, 23],
  [5 === 7, 'two'],
  [0 + 1, function () { return 38 }]
]) === 38

fwitch('banana', {
  uva: 'three',
  banana: 'two'
}) === 'two'

fwitch('maçã', {
  uva: 'three',
  banana: 'two',
  default: function () { return 'BOOOM' }
}) === 'BOOOM'
```

do not use for complex logic or expensive alternatives, since everything will have to be calculated at declaration time.
