var InverseCaesarShift = function(str, key) {
  var output = '';
  for (var i=0; i<str.length; i++) {
    var c = str[i];
    if (c.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);
      if ((code >= 65) && (code <= 90))
        c = String.fromCharCode((code - 65 + 26 - key) % 26 + 65);
      else if ((code >= 97) && (code <= 122))
        c = String.fromCharCode((code - 97 + 26 - key) % 26 + 97);
    }
    else if (c === ' ')
      c = ' ';
    else if (c === '\n')
      c = '\n'
    else
      return "Not valid input\nLetters ONLY";
    output += c;
  }
  return output;
}
function decode() {
  var dl = document.getElementById("droplist");
  var key = dl.options[dl.selectedIndex].value;
  var cw = document.getElementById("cw").value;
  result = InverseCaesarShift(cw, key);
  // console.log(result)
  document.getElementById("result").value = result;
}
