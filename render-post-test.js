var renderPost = require('./render-post')

// Integration test - check that the html renders

var view = {
  message: 'Shoutout to <span class="recipient">Myles B.</span> for talking about data structures!',
  timestamp: 1234567890,
  authorAvatarURL: "http://gravatar...",
  authorName: "Robert B."
}

renderPost.renderPost(view).pipe(process.stdout)

var assert = require('assert')

// Tests

assert(renderPost.shortenName('Jason Benn') === 'Jason B.')

var actual = renderPost.renderPostMessage([
  ["t" , "Shoutout to"],
  ["r", "Myles Byrne"],
  ["t", "for talking about data structures!"]
])
var expected = 'Shoutout to <span class="recipient">Myles B.</span> for talking about data structures!'

assert.strictEqual(expected, actual)
