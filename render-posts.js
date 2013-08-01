/*
posts array is a list of the post structures defined by render-post.js

todo: returns a readable stream using posts template - like tv-screen and render-post
*/

var template = fs.readFileSync('./posts.html')

module.exports = renderPosts

function renderPosts(posts) {
  var renderedPosts = posts.map(renderPost)
}


