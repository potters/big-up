// Finds name-like words in any string given the cursor position
// Doesn't support words that contain more than [a-z]
// cursor position is not character position
// Range of cursor position is one more than total characters

module.exports = wordAtCursorPosition
wordAtCursorPosition.isWordChar = isWordChar

function wordAtCursorPosition(string, cursorPosition) {
  if (string.length === 0) return null
  var start = cursorPosition
  var end   = cursorPosition
  var charAtCursorPosition = string[cursorPosition]
  if (!charAtCursorPosition || !isWordChar(charAtCursorPosition)) {
    while(start > 0 && isWordChar(string[start-1])) start--
  } else {
    while(end < string.length && isWordChar(string[end+1])) end++
    while(start > 0 && isWordChar(string[start-1])) start--
    end += 1
  }
  if (start === end) return null
  return string.slice(start,end)
}

function isWordChar(char){ return /[a-z]/i.test(char) }
