/// Word Counter
function calculateWordCount() {
  var resultsText = document.getElementById("resultsText");
  var input = document.getElementById("inputbox");
  var words = input.value.split(" ");
  for(var _i = words.length-1; _i >= 0; --_i) {
    if(words[_i] == "") {
      words.splice(_i, 1);
    }
  }
  resultsText.innerText = String(words.length) + " Words";
}

function clearText() {
  console.log("hi");
  var input = document.getElementById("inputbox");
  input.value = "";
  resultsText.innerText = "";
}
