function checkPrime() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.backgroundColor = "transparent";
  document.getElementById("explain").innerHTML = "";

  if (document.getElementById("myInput").value == "") {
    alert("Type a number to check");
  } else {
    const number = Number(document.getElementById("myInput").value);
    if (number <= 1125899906842623 && Number.isInteger(number) == true) {
      if (number < 2) {
        alert("Don't Type a number less than 2");
      } else if (number <= 10000000000) {
        let isPrime = true;
        const root = Math.pow(number, 1 / 2);
        for (let i = 2; i <= root; i++) {
          if (number % i === 0) {
            isPrime = false;
            document.getElementById(
              "explain"
            ).innerHTML = `Divisable by "${i}"`;
            break;
          }
        }
        if (isPrime) {
          document.getElementById("result").innerHTML = "Prime";
          document.getElementById("result").style.backgroundColor = "green";
        } else {
          document.getElementById("result").innerHTML = "Not Prime";
          document.getElementById("result").style.backgroundColor = "red";
        }
      } else {
        let isPrime = true;
        const root = Math.pow(number, 1 / 4);
        for (let i = 2; i <= root; i++) {
          if (number % i === 0) {
            isPrime = false;
            document.getElementById(
              "explain"
            ).innerHTML = `Divisable by "${i}"`;
            break;
          }
        }
        if (isPrime) {
          document.getElementById("result").innerHTML = "Prime";
          document.getElementById("result").style.backgroundColor = "#00a562";
        } else {
          document.getElementById("result").innerHTML = "Not Prime";
          document.getElementById("result").style.backgroundColor = "red";
        }
      }
    } else {
      if (Number.isInteger(number) == true) {
        if (number > 1125899906842623) {
          alert("Type a number less than 1,125,899,906,842,623");
        }
      } else {
        alert("Type an Integer");
      }
    } // end of the last else condition
  } // end of the first else condition
} //end of the function

function resetForm() {
  document.getElementById("myInput").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.backgroundColor = "transparent";
  document.getElementById("explain").innerHTML = "";
}
