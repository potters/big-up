/*

JTBD: stream out the app's stylesheets

Takes a path, returns a readable stream. The path must point to a css file in
this folder.

todo: caching

*/

var fs = require('fs')

module.exports = streamForName

function streamForName(name, cb) {
  var path = './'+name+'.css'
  fs.exists(path, function(exists){
    if (!exists) { cb(false); return }
    cb(true, fs.createReadStream(path))
  })
}

var runTests = !module.parent && process.argv[2]

if (runTests) {

  // Run with: node css.js base

  var name = process.argv[2]

  streamForName(name, function(exists, readStream) {
    if (!exists) throw new Error(name + " 'aint no css known about 'ere")
    readStream.pipe(process.stdout)
  })

}
