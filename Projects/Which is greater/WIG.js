document.getElementById("result").onclick = function () {
  document.getElementById("equal").innerHTML = "";
  document.getElementById("demo").innerHTML = "";
  // to reset the values inside the paragraphs once the "who is greater" button is clicked
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  // to declare the variables "a & b" and assign their values to the input texts as strings
  if (a === "") {
    alert('Please insert a value for "a"');
  }
  // to check that "a" is empty and is a string
  else {
    var a = Number(document.getElementById("a").value);
    // to make the value of "a" a number after we checked that it's not a string
    if (b === "") {
      alert('Please insert a value for "b"');
    }
    // to check that "b" is a string and is empty
    else {
      var b = Number(document.getElementById("b").value);
      // to make the value of "b" a number after we checked that it's not a string
      // ↓↓↓ "the core program"
      if (a > b) {
        document.getElementById("demo").innerHTML = "a";
      } else {
        if (a < b) {
          document.getElementById("demo").innerHTML = "b";
        } else {
          document.getElementById("equal").innerHTML = "both are equal";
        }
        // ↑↑↑ "the core program"
      }
    }
  }
}; // end of the whole function

document.getElementById("reset").onclick = function () {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("demo").innerHTML = "";
  document.getElementById("equal").innerHTML = "";
};
