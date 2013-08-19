var resumer = require('resumer')

module.exports = stringToStream

function stringToStream(string) {
  return resumer().queue(string).end()
}

if (!module.parent) stringToStream('hello\n').pipe(process.stdout)
