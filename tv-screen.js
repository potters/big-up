/*

JTBD: Render the html for the UI shown on the TV

Takes a map structure that descibes the TV screen, returns a readable stream of
the screen's HTML

See also:
* tv-screen-test.js
* tv-screen.html.mustache

*/

var ms = require('hogan.js')
  , resumer = require('resumer')
  , fs = require('fs')
  , templateSrc = fs.readFileSync('./tv-screen.html.mustache','utf8')
  , template = ms.compile(templateSrc)

module.exports = renderTVScreen

function renderTVScreen(view) {
  view = view || {}
  view.title = view.title || "DBC Big Ups"

  var renderedHTML = template.render(view)

  return resumer().queue(renderedHTML).end()
}
