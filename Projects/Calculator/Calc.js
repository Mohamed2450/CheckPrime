function calculate() {
  document.getElementById("screen").value = eval(
    document.getElementById("screen").value
  );
}
function backspace() {
  var value = document.getElementById("screen").value;
  document.getElementById("screen").value = value.substring(
    0,
    value.length - 1
  );
}
function reset() {
  document.getElementById("screen").value = "";
}
function display() {
  document.getElementById("date and time place").innerHTML = Date();
}
function hide() {
  document.getElementById("date and time place").innerHTML = "";
}
function one() {
  document.getElementById("screen").value += "1";
}
function two() {
  document.getElementById("screen").value += "2";
}
function three() {
  document.getElementById("screen").value += "3";
}
function four() {
  document.getElementById("screen").value += "4";
}
function five() {
  document.getElementById("screen").value += "5";
}
function six() {
  document.getElementById("screen").value += "6";
}
function seven() {
  document.getElementById("screen").value += "7";
}
function eight() {
  document.getElementById("screen").value += "8";
}
function nine() {
  document.getElementById("screen").value += "9";
}
function zero() {
  document.getElementById("screen").value += "0";
}
function dot() {
  document.getElementById("screen").value += ".";
}
function power() {
  document.getElementById("screen").value += "**";
}
function curlybracket1() {
  document.getElementById("screen").value += "(";
}
function curlybracket2() {
  document.getElementById("screen").value += ")";
}
function curlybracket3() {
  document.getElementById("screen").value += "[";
}
function curlybracket4() {
  document.getElementById("screen").value += "]";
}
function plus() {
  document.getElementById("screen").value += "+";
}
function minus() {
  document.getElementById("screen").value += "-";
}
function times() {
  document.getElementById("screen").value += "*";
}
function dividedby() {
  document.getElementById("screen").value += "/";
}
