// Essentially an implement

module.exports = search

function search (query, array) {
  var found = []
  array.forEach(function(el){ if (el.match(query)) found.push(el) })
  return found
}
