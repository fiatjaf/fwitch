module.exports = function (first, second) {
  var r
  if (!second) {
    for (var i = 0; i < first.length; i++) {
      if (first[i][0]) {
        r = first[i][1]
        break
      }
    }
  } else {
    r = second[first] || second['default']
  }
  return typeof r === 'function' ? r() : r
}
