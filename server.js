/*

JTDB: serve the app over http

*/

var http = require('http')
  , router = require('./router')

var server = http.createServer(function(req, res) {

  // Home page straight to the brain
  if (req.method === 'GET' && req.url === '/') {
    router.rootHandler(req, res)
    return
  }

  // Otherwise, one of the other pages or no page
  var routeMatch = router.match(req.url)
  if (routeMatch.perfect) routeMatch.fn(req, res)
  else router.notFound(req, res)

})

var port = process.env.PORT || 4000

server.listen(port, function() {
  console.log("listening on port", port)
})

// ---

// webscocket server, multiplexed, then routed to:
// /posts/since/:id
// /leaderboard

