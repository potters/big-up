/*

JTDB: serve the app over http

*/

var http = require('http')

var server = http.createServer(function(req, res) {

  // Home page straight to the brain
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    require('fs').readFileSync('README.md')
    return
  }

  // Otherwise, one of the other pages or no page
  var routeMatch = router.match(req.url)
  if (routeMatch.perfect) routeMatch.fn(req, res)
  else notFound(req, res)

})

server.listen(process.env.PORT || 4000)

// ---

var mapleTree = require('mapleTree')
var router = new mapleTree.RouteTree()

var css = require('./css')

router.define('/:name.css', function(req, res) {
  var name = this.params.name
    , next = this.cbs.length ? this.next : notFound

  css(name, function(exists, readStream) {
    if (!exists) { next(req, res) ; return }
    res.writeHead(200, {'Content-Type': 'text/css'})
    readStream.pipe(res)
  })
})

var tvScreen = require('./tv-screen')

router.define('/tv', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  tvScreen().pipe(res)
})

function notFound(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('NF\n')
}
