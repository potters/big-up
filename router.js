/*

JTBD: match request handling functions to appropriate path strings

* Each hanlder function gets a http req and res object so knows that interface

*/


var mapleTree = require('mapleTree')
var router = new mapleTree.RouteTree()

module.exports = router

router.rootHandler = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  require('fs').createReadStream('README.md','utf8').pipe(res)
}

var css = require('./css')

router.define('/:name.css', function(req, res) {
  var name = this.params.name
    , next = this.cbs.length ? this.next : notFound

  css(name, function(exists, cssReadStream) {
    if (!exists) { next(req, res) ; return }
    res.writeHead(200, {'Content-Type': 'text/css'})
    cssReadStream.pipe(res)
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

router.notFound = notFound

// var postStore = require('./post-store')

// router.define('/posts/latest', function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   postStore.latest(20).pipe(jsonStringify).pipe(res)
// })

// var jsonStringify = require('node-stream-stringify')

// router.define('/posts/latest', function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   postStore.latest(20).pipe(jsonStringify).pipe(res)
// })

// router.define('/posts', function(req, res) {
//   var next = this.cbs.length ? this.next : notFound
//   if (!req.method === "POST") { next(req, res) ; return }

//   // var newPost = parse and filter params ...
//   // validate newPost ...
//   postStore.create(newPost, function(err) {
//     if (err) { throw err } // not good enough, there may be other open connections
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end('OK\n')
//   })
// })

// var leaderboard = require('leaderboard')

// router.define('/leaderboard', function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   leaderboard(10).pipe(jsonStringify).pipe(res)
// })
