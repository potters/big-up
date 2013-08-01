/*
  Take as an input a hash with the following keys:
  messageTokens: [ ["t" , "shoutout to "], ["r", "Myles Byrne"], ["t", "for talking about data structures"] ]
  authorName: "Myles Byrne"
  authorAvatarURL: "http://gravatar.... " expectedSize = 32x32...
  timeStamp: Date object

  Produces as output:
  see:  post.html
*/

module.exports = renderPost

function renderPost(postAttributes){

}

function shortenName(fullName){
  // comment "Myles B."
}

function renderPostMessage(messageTokens){

}

if (!module.parent) {

  var assert = require('assert')

  // Tests
  var actual = renderPostMessage([
    ["t" , "shoutout to "],
    ["r", "Myles Byrne"],
    ["t", "for talking about data structures"]
  ])
  var expected = 'Shoutout to <span class="recipient">Myles B.</span> for talking about data structures!'

  assert.strictEqual(expected, actual)

}

