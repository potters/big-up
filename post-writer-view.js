
var bonzo = require('bonzo')
var wordAtCursPos = require('./word-at-cursor')
var search = require('./array-search')
var postWriterView = function(options) {
  // Replace raw textarea with our own DOM structure
  var originalEl = bonzo(options.el)
  var originalElClone = bonzo(options.el).clone()
  var wrapperEl = bonzo(bonzo.create('<div class=post-writer-view-wrapper>'))
  var anchorEl = bonzo(bonzo.create('<div class=post-writer-view-options-anchor>'))
  var optionsEl = bonzo(bonzo.create('<div class=post-writer-view-options>'))
  var optionElTemplate = bonzo(bonzo.create('<div class=post-writer-view-option>'))
  var sampleOption = bonzo(optionElTemplate).clone().text('Myles Byrne')
  wrapperEl.append(originalElClone)
  wrapperEl.append(anchorEl.append(optionsEl))
  originalEl.replaceWith(wrapperEl)

  var sampleNames = ['Jimmi', 'Myles', 'Christopher', 'Ryan']

  var textarea = originalElClone.get(0)

  // For every keypress, take the current (partial) word under the cursor and
  // try to find it sampleNames
  textarea.addEventListener('keyup', function(){
    var word = wordAtCursPos(textarea.value,textarea.selectionStart)
    console.log(search(word, sampleNames))
  })
}

module.exports = postWriterView
