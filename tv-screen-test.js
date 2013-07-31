/*

Test the tv screen UI.

Run with: make tv-screen-test && open build/tv-screen-test.html

This should show a mock list of posts on the left and a dummy mock leaderboard
on the right

*/

var tvScreen = require('./tv-screen')

var css = [
  '<link rel="stylesheet" type="text/css" href="../base.css">',
  '<link rel="stylesheet" type="text/css" href="../tv-screen.css">'
].join('\n')

var posts = '<div class="posts">posts ...</div>'
var leaderboard = '<div class="leaderboard">leaderboard ...</div>'

var view = { css: css, posts: posts, leaderboard: leaderboard }

tvScreen(view).pipe(process.stdout)
